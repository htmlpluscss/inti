'use strict';

const gulp             = require('gulp');

const postcss          = require('gulp-postcss');
const autoprefixer     = require("autoprefixer");
const csso             = require("gulp-csso");
const minify           = require('gulp-minify');
const browserReporter  = require('postcss-browser-reporter');

const mqpacker         = require("css-mqpacker");
const precss           = require("precss");
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
const gulpif           = require('gulp-if');
const remember         = require('gulp-remember');

const debug            = require('gulp-debug');
const touch            = require('gulp-touch');

const w3cjs            = require('gulp-w3cjs');

let config             = null;

const site             = 'Институт нефтегазовых технологических инициатив';
const domain           = 'inti.wndrbase.com';

try {

	config           = require('./config.json');

	config.ftp.remotePath += domain;


}catch(e){

	console.log("config the file doesn't exists");

}

gulp.task('html', () => {

	return gulp.src('src/**/index.html', {since: gulp.lastRun('html')})
		.pipe(plumber())
		.pipe(debug({title: 'html:'}))
		.pipe(nunjucksRender({
			data: {
				url: 'https://' + domain,
				site: site
			},
			path: 'src/'
		}))
		.pipe(w3cjs({
			verifyMessage: (type, message) => {

				if(message.indexOf('style') !== -1) return false;

				// allow message to pass through
				return true;
			}
		}))
		.pipe(w3cjs.reporter())
		.pipe(gulp.dest('build'))

});

gulp.task('html-touch', () => {

	return gulp.src('src/**/index.html')
		.pipe(touch());

});

gulp.task('css', () => {

	return gulp.src('src/css/style.css')
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(postcss([
				precss(),
				mqpacker(),
				browserReporter()
			]))
			.pipe(sourcemaps.write())
			.pipe(rename('styles.css'))
			.pipe(gulp.dest('build/css'))
			.pipe(postcss([
				autoprefixer({
					browsers: 'Android >= 5'
				})
			]))
			.pipe(csso())
			.pipe(rename({suffix: ".min"}))
			.pipe(gulp.dest('build/css'))
			.pipe(gulp.dest('min/css'))

});

gulp.task('js', () => {

	return gulp.src([

		'src/js/min/*.js',
		'src/js/js.js',
		'src/js/*.js'

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
		.pipe(gulp.dest('min/js'))

});

gulp.task('serve', () => {

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

	return gulp.src('build/**/*', {since: gulp.lastRun('ftp')})
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
	gulp.watch(['src/_include/**/*.html','src/template/**/*.html','src/insights/**'], gulp.series('html-touch'));
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