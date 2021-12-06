'use strict';

const gulp             = require('gulp');

const postcss          = require('gulp-postcss');
const autoprefixer     = require("autoprefixer");
const csso             = require("gulp-csso");
const minify           = require('gulp-minify');
const browserReporter  = require('postcss-browser-reporter');

const postcssImport    = require('postcss-partial-import');
const postcssVariables = require('postcss-advanced-variables');
const postcssColor     = require('postcss-color-function');
const postcssNesting   = require('postcss-nesting');
const postcssNested    = require('postcss-nested');
const postcssExtend    = require('postcss-extend');

const mqpacker         = require("css-mqpacker");
const sourcemaps       = require('gulp-sourcemaps');

const nunjucksRender   = require('gulp-nunjucks-render');

const rename           = require('gulp-rename');

const plumber          = require('gulp-plumber');
const server           = require('browser-sync').create();
const ftp              = require('gulp-ftp');
const replace          = require('gulp-replace');
const filter           = require('gulp-filter');

const del              = require('del');
const fs               = require("fs");

const newer            = require('gulp-newer');

const concat           = require('gulp-concat');
const remember         = require('gulp-remember');

const debug            = require('gulp-debug');
const touch            = require('gulp-touch');

const w3cjs            = require('gulp-w3cjs');

let config             = null;

const site             = 'Институт нефтегазовых технологических инициатив';
const domain           = 'inti.iidea.agency';

try {

	config           = require('./config.json');

	config.ftp.remotePath = domain + config.ftp.remotePath;


}catch(e){

	console.log("config the file doesn't exists");

}

const html = (files, since = {}, folder = '') => {

	return gulp.src(files, since)
		.pipe(plumber())
		.pipe(debug({title: 'html:'}))
		.pipe(nunjucksRender({
			data: {
				url: 'https://' + domain,
				site: site
			},
			path: 'src/'
		}))
		.pipe(w3cjs())
		.pipe(w3cjs.reporter())
		.pipe(gulp.dest('build' + folder))

};

gulp.task('html', () => html('src/**/index.html', {since: gulp.lastRun('html')}));
gulp.task('html:touch', () => html('src/**/index.html'));
gulp.task('html:news', () => html('src/news/**/index.html', {}, '/news'));

gulp.task('css', () => {

	return gulp.src('src/css/style.css')
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(postcss([
				postcssImport(),
				postcssVariables(),
				postcssColor(),
				postcssNesting(),
				postcssNested(),
				postcssExtend(),
				autoprefixer({
					browsers: 'Android >= 5'
				}),
				mqpacker(),
				browserReporter()
			]))
			.pipe(sourcemaps.write())
			.pipe(rename('styles.css'))
			.pipe(gulp.dest('build/css'))
			.pipe(csso())
			.pipe(rename({suffix: ".min"}))
			.pipe(gulp.dest('build/css'))

});

gulp.task('js', () => {

	return gulp.src([

		'src/js/min/*.js',
		'src/js/js.js',
		'src/js/*.js',
		'!src/js/min/swiper.min.js',
		'!src/js/min/inputmask.min.js',
		'!src/js/min/nouislider.min.js'

	], {since: gulp.lastRun('js')})

		.pipe(debug({title: 'js'}))
		.pipe(sourcemaps.init())
		.pipe(remember('js'))
		.pipe(concat('scripts.js'))
		.pipe(sourcemaps.write())

// prod

		.pipe(minify({
			preserveComments: "some",
			ext : {
				min:'.min.js'
			}
		}))

		.pipe(gulp.dest('build/js'))

});

gulp.task('serve', () => {

	gulp.src([
		'src/js/min/swiper.min.js',
		'src/js/min/inputmask.min.js',
		'src/js/min/nouislider.min.js'
	]).pipe(gulp.dest('build/js'));

	server.init({
		server: 'build',
		files: [
			{
				match: ['build/**/*.*', '!build/**/*.min.{css,js}'],
				fn: server.reload()
			}
		]
	});

});

gulp.task('clear', () => del('build'));

gulp.task('copy', () => {

	return gulp.src(['src/**/*.*', '!src/**/*.{css,html,js}'], {since: gulp.lastRun('copy')})
			.pipe(debug({title: 'copy:'}))
			.pipe(newer('build'))
			.pipe(debug({title: 'copy:newer'}))
			.pipe(gulp.dest('build'))

});

gulp.task('ftp', () => {

	if(!config) {

		return true;

	}

	const f = filter('**/*.html', {restore: true});

	return gulp.src(['build/**/*','!build/img/'], {since: gulp.lastRun('ftp')})
		.pipe(debug({title: 'ftp:'}))
		.pipe(f)
		.pipe(replace('css/styles.css', 'css/styles.min.css?' + Date.now()))
		.pipe(replace('js/scripts.js', 'js/scripts.min.js?' + Date.now()))
		.pipe(f.restore)
		.pipe(ftp(config.ftp));

});

gulp.task('watch', () => {
	gulp.watch('src/js/*.*', gulp.series('js'));
	gulp.watch('src/css/*.*', gulp.series('css'));
	gulp.watch('src/**/index.html', gulp.series('html'));
	gulp.watch(['src/news/**','!src/news/index.html'], gulp.series('html:news'));
	gulp.watch(['src/_include/**/*.html','src/template/**/*.html'], gulp.series('html:touch'));
	gulp.watch(['src/**/*.*', '!src/**/*.{css,html,js}'], gulp.series('copy'));
	gulp.watch('build/**/*.*', gulp.series('ftp'));
});

gulp.task('default', gulp.series(
	'clear',
	gulp.parallel('css','js'),
	'html',
	'copy',
	gulp.parallel('ftp','watch','serve')
	));

gulp.task('bitrix', () => {

	return gulp.src([
		'build/js/scripts.js',
		'build/js/scripts.min.js',
		'build/css/styles.css',
		'build/css/styles.min.css'
		])
		.pipe(replace("/fonts/", "/bitrix/templates/inti-v3/fonts/"))
		.pipe(replace("/js/", "/bitrix/templates/inti-v3/js/"))
		.pipe(replace("url(/img/", "url(/bitrix/templates/inti-v3/img/"))
		.pipe(gulp.dest('min'))

});

gulp.task('min', gulp.series(gulp.parallel('css','js'),'bitrix'));


gulp.task('proxy', ()=> {

	gulp.src([
		'src/js/min/swiper.min.js',
		'src/js/min/inputmask.min.js',
		'src/js/min/nouislider.min.js'
	]).pipe(gulp.dest('build/js'));

	server.init({
		proxy: "http://v3.inti.expert/",
		https: true,
		serveStatic: ['.'],
		rewriteRules: [
			{
				match: new RegExp('<script defer src="/bitrix/templates/inti-v3/js/scripts.min.js"></script>'),
				fn: () => '<script defer src="/build/js/scripts.js"></script>'
			}
		],
		files: [
			{
				match: ['**/*'],
				fn: server.reload()
			},
			{
				match: ['src/js/*.js'],
				fn: gulp.series('js')
			},
			{
				match: ['src/css/*.css'],
				fn: gulp.series('css')
			}
		]
	});

});