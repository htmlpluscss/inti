!function(a,n){"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n(require,exports,module):a.CountUp=n()}(this,function(a,n,t){return function(a,n,t,e,i,r){var u=this;if(u.version=function(){return"1.9.3"},u.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(a,n,t,e){return t*(1-Math.pow(2,-10*a/e))*1024/1023+n},formattingFn:function(a){var n,t,e,i,r,o,s=a<0;if(a=Math.abs(a).toFixed(u.decimals),n=(a+="").split("."),t=n[0],e=1<n.length?u.options.decimal+n[1]:"",u.options.useGrouping){for(i="",r=0,o=t.length;r<o;++r)0!==r&&r%3==0&&(i=u.options.separator+i),i=t[o-r-1]+i;t=i}return u.options.numerals.length&&(t=t.replace(/[0-9]/g,function(a){return u.options.numerals[+a]}),e=e.replace(/[0-9]/g,function(a){return u.options.numerals[+a]})),(s?"-":"")+u.options.prefix+t+e+u.options.suffix},prefix:"",suffix:"",numerals:[]},r&&"object"==typeof r)for(var o in u.options)r.hasOwnProperty(o)&&null!==r[o]&&(u.options[o]=r[o]);""===u.options.separator?u.options.useGrouping=!1:u.options.separator=""+u.options.separator;for(var s=0,l=["webkit","moz","ms","o"],m=0;m<l.length&&!window.requestAnimationFrame;++m)window.requestAnimationFrame=window[l[m]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[l[m]+"CancelAnimationFrame"]||window[l[m]+"CancelRequestAnimationFrame"];function d(a){return"number"==typeof a&&!isNaN(a)}window.requestAnimationFrame||(window.requestAnimationFrame=function(a,n){var t=(new Date).getTime(),e=Math.max(0,16-(t-s)),i=window.setTimeout(function(){a(t+e)},e);return s=t+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),u.initialize=function(){return!!u.initialized||(u.error="",u.d="string"==typeof a?document.getElementById(a):a,u.d?(u.startVal=Number(n),u.endVal=Number(t),d(u.startVal)&&d(u.endVal)?(u.decimals=Math.max(0,e||0),u.dec=Math.pow(10,u.decimals),u.duration=1e3*Number(i)||2e3,u.countDown=u.startVal>u.endVal,u.frameVal=u.startVal,u.initialized=!0):(u.error="[CountUp] startVal ("+n+") or endVal ("+t+") is not a number",!1)):!(u.error="[CountUp] target is null or undefined"))},u.printValue=function(a){var n=u.options.formattingFn(a);"INPUT"===u.d.tagName?this.d.value=n:"text"===u.d.tagName||"tspan"===u.d.tagName?this.d.textContent=n:this.d.innerHTML=n},u.count=function(a){u.startTime||(u.startTime=a);var n=(u.timestamp=a)-u.startTime;u.remaining=u.duration-n,u.options.useEasing?u.countDown?u.frameVal=u.startVal-u.options.easingFn(n,0,u.startVal-u.endVal,u.duration):u.frameVal=u.options.easingFn(n,u.startVal,u.endVal-u.startVal,u.duration):u.countDown?u.frameVal=u.startVal-(u.startVal-u.endVal)*(n/u.duration):u.frameVal=u.startVal+(u.endVal-u.startVal)*(n/u.duration),u.countDown?u.frameVal=u.frameVal<u.endVal?u.endVal:u.frameVal:u.frameVal=u.frameVal>u.endVal?u.endVal:u.frameVal,u.frameVal=Math.round(u.frameVal*u.dec)/u.dec,u.printValue(u.frameVal),n<u.duration?u.rAF=requestAnimationFrame(u.count):u.callback&&u.callback()},u.start=function(a){u.initialize()&&(u.callback=a,u.rAF=requestAnimationFrame(u.count))},u.pauseResume=function(){u.paused?(u.paused=!1,delete u.startTime,u.duration=u.remaining,u.startVal=u.frameVal,requestAnimationFrame(u.count)):(u.paused=!0,cancelAnimationFrame(u.rAF))},u.reset=function(){u.paused=!1,delete u.startTime,u.initialized=!1,u.initialize()&&(cancelAnimationFrame(u.rAF),u.printValue(u.startVal))},u.update=function(a){u.initialize()&&(d(a=Number(a))?(u.error="",a!==u.frameVal&&(cancelAnimationFrame(u.rAF),u.paused=!1,delete u.startTime,u.startVal=u.frameVal,u.endVal=a,u.countDown=u.startVal>u.endVal,u.rAF=requestAnimationFrame(u.count))):u.error="[CountUp] update() - new endVal is not a number: "+a)},u.initialize()&&u.printValue(u.startVal)}});
/*! js-cookie v3.0.0-rc.1 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies,r=e.Cookies=t();r.noConflict=function(){return e.Cookies=n,r}}())}(this,function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var t={read:function(e){return e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};return function n(r,o){function i(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),n=r.write(n,t);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n+c}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],o={},i=0;i<n.length;i++){var c=n[i].split("="),u=c.slice(1).join("=");'"'===u[0]&&(u=u.slice(1,-1));try{var f=t.read(c[0]);if(o[f]=r.read(u,f),e===f)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){i(t,"",e({},n,{expires:-1}))},withAttributes:function(t){return n(this.converter,e({},this.attributes,t))},withConverter:function(t){return n(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(r)}})}(t,{path:"/"})});

(function defineMustache(global,factory){if(typeof exports==="object"&&exports&&typeof exports.nodeName!=="string"){factory(exports)}else if(typeof define==="function"&&define.amd){define(["exports"],factory)}else{global.Mustache={};factory(global.Mustache)}})(this,function mustacheFactory(mustache){var objectToString=Object.prototype.toString;var isArray=Array.isArray||function isArrayPolyfill(object){return objectToString.call(object)==="[object Array]"};function isFunction(object){return typeof object==="function"}function typeStr(obj){return isArray(obj)?"array":typeof obj}function escapeRegExp(string){return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function hasProperty(obj,propName){return obj!=null&&typeof obj==="object"&&propName in obj}var regExpTest=RegExp.prototype.test;function testRegExp(re,string){return regExpTest.call(re,string)}var nonSpaceRe=/\S/;function isWhitespace(string){return!testRegExp(nonSpaceRe,string)}var entityMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function escapeHtml(string){return String(string).replace(/[&<>"'`=\/]/g,function fromEntityMap(s){return entityMap[s]})}var whiteRe=/\s*/;var spaceRe=/\s+/;var equalsRe=/\s*=/;var curlyRe=/\s*\}/;var tagRe=/#|\^|\/|>|\{|&|=|!/;function parseTemplate(template,tags){if(!template)return[];var sections=[];var tokens=[];var spaces=[];var hasTag=false;var nonSpace=false;function stripSpace(){if(hasTag&&!nonSpace){while(spaces.length)delete tokens[spaces.pop()]}else{spaces=[]}hasTag=false;nonSpace=false}var openingTagRe,closingTagRe,closingCurlyRe;function compileTags(tagsToCompile){if(typeof tagsToCompile==="string")tagsToCompile=tagsToCompile.split(spaceRe,2);if(!isArray(tagsToCompile)||tagsToCompile.length!==2)throw new Error("Invalid tags: "+tagsToCompile);openingTagRe=new RegExp(escapeRegExp(tagsToCompile[0])+"\\s*");closingTagRe=new RegExp("\\s*"+escapeRegExp(tagsToCompile[1]));closingCurlyRe=new RegExp("\\s*"+escapeRegExp("}"+tagsToCompile[1]))}compileTags(tags||mustache.tags);var scanner=new Scanner(template);var start,type,value,chr,token,openSection;while(!scanner.eos()){start=scanner.pos;value=scanner.scanUntil(openingTagRe);if(value){for(var i=0,valueLength=value.length;i<valueLength;++i){chr=value.charAt(i);if(isWhitespace(chr)){spaces.push(tokens.length)}else{nonSpace=true}tokens.push(["text",chr,start,start+1]);start+=1;if(chr==="\n")stripSpace()}}if(!scanner.scan(openingTagRe))break;hasTag=true;type=scanner.scan(tagRe)||"name";scanner.scan(whiteRe);if(type==="="){value=scanner.scanUntil(equalsRe);scanner.scan(equalsRe);scanner.scanUntil(closingTagRe)}else if(type==="{"){value=scanner.scanUntil(closingCurlyRe);scanner.scan(curlyRe);scanner.scanUntil(closingTagRe);type="&"}else{value=scanner.scanUntil(closingTagRe)}if(!scanner.scan(closingTagRe))throw new Error("Unclosed tag at "+scanner.pos);token=[type,value,start,scanner.pos];tokens.push(token);if(type==="#"||type==="^"){sections.push(token)}else if(type==="/"){openSection=sections.pop();if(!openSection)throw new Error('Unopened section "'+value+'" at '+start);if(openSection[1]!==value)throw new Error('Unclosed section "'+openSection[1]+'" at '+start)}else if(type==="name"||type==="{"||type==="&"){nonSpace=true}else if(type==="="){compileTags(value)}}openSection=sections.pop();if(openSection)throw new Error('Unclosed section "'+openSection[1]+'" at '+scanner.pos);return nestTokens(squashTokens(tokens))}function squashTokens(tokens){var squashedTokens=[];var token,lastToken;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];if(token){if(token[0]==="text"&&lastToken&&lastToken[0]==="text"){lastToken[1]+=token[1];lastToken[3]=token[3]}else{squashedTokens.push(token);lastToken=token}}}return squashedTokens}function nestTokens(tokens){var nestedTokens=[];var collector=nestedTokens;var sections=[];var token,section;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];switch(token[0]){case"#":case"^":collector.push(token);sections.push(token);collector=token[4]=[];break;case"/":section=sections.pop();section[5]=token[2];collector=sections.length>0?sections[sections.length-1][4]:nestedTokens;break;default:collector.push(token)}}return nestedTokens}function Scanner(string){this.string=string;this.tail=string;this.pos=0}Scanner.prototype.eos=function eos(){return this.tail===""};Scanner.prototype.scan=function scan(re){var match=this.tail.match(re);if(!match||match.index!==0)return"";var string=match[0];this.tail=this.tail.substring(string.length);this.pos+=string.length;return string};Scanner.prototype.scanUntil=function scanUntil(re){var index=this.tail.search(re),match;switch(index){case-1:match=this.tail;this.tail="";break;case 0:match="";break;default:match=this.tail.substring(0,index);this.tail=this.tail.substring(index)}this.pos+=match.length;return match};function Context(view,parentContext){this.view=view;this.cache={".":this.view};this.parent=parentContext}Context.prototype.push=function push(view){return new Context(view,this)};Context.prototype.lookup=function lookup(name){var cache=this.cache;var value;if(cache.hasOwnProperty(name)){value=cache[name]}else{var context=this,names,index,lookupHit=false;while(context){if(name.indexOf(".")>0){value=context.view;names=name.split(".");index=0;while(value!=null&&index<names.length){if(index===names.length-1)lookupHit=hasProperty(value,names[index]);value=value[names[index++]]}}else{value=context.view[name];lookupHit=hasProperty(context.view,name)}if(lookupHit)break;context=context.parent}cache[name]=value}if(isFunction(value))value=value.call(this.view);return value};function Writer(){this.cache={}}Writer.prototype.clearCache=function clearCache(){this.cache={}};Writer.prototype.parse=function parse(template,tags){var cache=this.cache;var tokens=cache[template];if(tokens==null)tokens=cache[template]=parseTemplate(template,tags);return tokens};Writer.prototype.render=function render(template,view,partials){var tokens=this.parse(template);var context=view instanceof Context?view:new Context(view);return this.renderTokens(tokens,context,partials,template)};Writer.prototype.renderTokens=function renderTokens(tokens,context,partials,originalTemplate){var buffer="";var token,symbol,value;for(var i=0,numTokens=tokens.length;i<numTokens;++i){value=undefined;token=tokens[i];symbol=token[0];if(symbol==="#")value=this.renderSection(token,context,partials,originalTemplate);else if(symbol==="^")value=this.renderInverted(token,context,partials,originalTemplate);else if(symbol===">")value=this.renderPartial(token,context,partials,originalTemplate);else if(symbol==="&")value=this.unescapedValue(token,context);else if(symbol==="name")value=this.escapedValue(token,context);else if(symbol==="text")value=this.rawValue(token);if(value!==undefined)buffer+=value}return buffer};Writer.prototype.renderSection=function renderSection(token,context,partials,originalTemplate){var self=this;var buffer="";var value=context.lookup(token[1]);function subRender(template){return self.render(template,context,partials)}if(!value)return;if(isArray(value)){for(var j=0,valueLength=value.length;j<valueLength;++j){buffer+=this.renderTokens(token[4],context.push(value[j]),partials,originalTemplate)}}else if(typeof value==="object"||typeof value==="string"||typeof value==="number"){buffer+=this.renderTokens(token[4],context.push(value),partials,originalTemplate)}else if(isFunction(value)){if(typeof originalTemplate!=="string")throw new Error("Cannot use higher-order sections without the original template");value=value.call(context.view,originalTemplate.slice(token[3],token[5]),subRender);if(value!=null)buffer+=value}else{buffer+=this.renderTokens(token[4],context,partials,originalTemplate)}return buffer};Writer.prototype.renderInverted=function renderInverted(token,context,partials,originalTemplate){var value=context.lookup(token[1]);if(!value||isArray(value)&&value.length===0)return this.renderTokens(token[4],context,partials,originalTemplate)};Writer.prototype.renderPartial=function renderPartial(token,context,partials){if(!partials)return;var value=isFunction(partials)?partials(token[1]):partials[token[1]];if(value!=null)return this.renderTokens(this.parse(value),context,partials,value)};Writer.prototype.unescapedValue=function unescapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return value};Writer.prototype.escapedValue=function escapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return mustache.escape(value)};Writer.prototype.rawValue=function rawValue(token){return token[1]};mustache.name="mustache.js";mustache.version="2.3.0";mustache.tags=["<%","%>"];var defaultWriter=new Writer;mustache.clearCache=function clearCache(){return defaultWriter.clearCache()};mustache.parse=function parse(template,tags){return defaultWriter.parse(template,tags)};mustache.render=function render(template,view,partials){if(typeof template!=="string"){throw new TypeError('Invalid template! Template should be a "string" '+'but "'+typeStr(template)+'" was given as the first '+"argument for mustache#render(template, view, partials)")}return defaultWriter.render(template,view,partials)};mustache.to_html=function to_html(template,view,partials,send){var result=mustache.render(template,view,partials);if(isFunction(send)){send(result)}else{return result}};mustache.escape=escapeHtml;mustache.Scanner=Scanner;mustache.Context=Context;mustache.Writer=Writer;return mustache});
/**
 * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
 * License: MIT - http://mrgnrdrck.mit-license.org
 *
 * https://github.com/mroderick/PubSubJS
 */
!function(n,t){"use strict";var r={};n.PubSub=r;var e=n.define;!function(n){var t={},r=-1;function e(n){var t;for(t in n)if(n.hasOwnProperty(t))return!0;return!1}function o(n,t,r){try{n(t,r)}catch(n){setTimeout(function(n){return function(){throw n}}(n),0)}}function i(n,t,r){n(t,r)}function u(n,r,e,u){var f,s=t[r],c=u?i:o;if(t.hasOwnProperty(r))for(f in s)s.hasOwnProperty(f)&&c(s[f],n,e)}function f(n,r,o,i){var f=function(n,t,r){return function(){var e=String(n),o=e.lastIndexOf(".");for(u(n,n,t,r);-1!==o;)e=e.substr(0,o),o=e.lastIndexOf("."),u(n,e,t,r)}}(n="symbol"==typeof n?n.toString():n,r,i),s=function(n){var r=String(n),o=Boolean(t.hasOwnProperty(r)&&e(t[r])),i=r.lastIndexOf(".");for(;!o&&-1!==i;)r=r.substr(0,i),i=r.lastIndexOf("."),o=Boolean(t.hasOwnProperty(r)&&e(t[r]));return o}(n);return!!s&&(!0===o?f():setTimeout(f,0),!0)}n.publish=function(t,r){return f(t,r,!1,n.immediateExceptions)},n.publishSync=function(t,r){return f(t,r,!0,n.immediateExceptions)},n.subscribe=function(n,e){if("function"!=typeof e)return!1;n="symbol"==typeof n?n.toString():n,t.hasOwnProperty(n)||(t[n]={});var o="uid_"+String(++r);return t[n][o]=e,o},n.subscribeOnce=function(t,r){var e=n.subscribe(t,function(){n.unsubscribe(e),r.apply(this,arguments)});return n},n.clearAllSubscriptions=function(){t={}},n.clearSubscriptions=function(n){var r;for(r in t)t.hasOwnProperty(r)&&0===r.indexOf(n)&&delete t[r]},n.unsubscribe=function(r){var e,o,i,u="string"==typeof r&&(t.hasOwnProperty(r)||function(n){var r;for(r in t)if(t.hasOwnProperty(r)&&0===r.indexOf(n))return!0;return!1}(r)),f=!u&&"string"==typeof r,s="function"==typeof r,c=!1;if(!u){for(e in t)if(t.hasOwnProperty(e)){if(o=t[e],f&&o[r]){delete o[r],c=r;break}if(s)for(i in o)o.hasOwnProperty(i)&&o[i]===r&&(delete o[i],c=!0)}return c}n.clearSubscriptions(r)}}(r),"function"==typeof e&&e.amd?e(function(){return r}):"object"==typeof exports&&(void 0!==module&&module.exports&&(exports=module.exports=r),exports.PubSub=r,module.exports=exports=r)}("object"==typeof window&&window||this);
/*! UTF-8

© kovrigin
Все права разрешены
красивый дизайн должен иметь красивый код®

https://github.com/htmlpluscss/

*/

( () => {

	let resizeTimeout = null,
		windowWidthOLd = window.innerWidth;

	window.addEventListener("resize", () => {

		window.requestAnimationFrame( () => {

			if (!resizeTimeout) {

				resizeTimeout = setTimeout( () => {

					resizeTimeout = null;

					if(windowWidthOLd !== window.innerWidth) {

						windowWidthOLd = window.innerWidth;

						PubSub.publish('windowWidthResize');

					}

				}, 100);

			}

		});

	});

	window.addEventListener("load", () => {

		PubSub.publish('pageLoad');

		Cookies.set('fastLoadScript', true);

		document.documentElement.style.setProperty('--transitionDefault', '.3s');

		if(document.querySelector('.header')) {

			document.documentElement.style.setProperty('--headerHeight', document.querySelector('.header').clientHeight + 'px');

		}

		if(document.querySelector('.footer')) {

			document.documentElement.style.setProperty('--footerHeight', document.querySelector('.footer').clientHeight + 'px');

		}

	});

	// обработчик анимаций
	window.cssAnimation = a=>{let b,c,d=document.createElement("cssanimation");switch(a){case'animation':b={"animation":"animationend","OAnimation":"oAnimationEnd","MozAnimation":"animationend","WebkitAnimation":"webkitAnimationEnd"};break;case'transition':b={"transition":"transitionend","OTransition":"oTransitionEnd","MozTransition":"transitionend","WebkitTransition":"webkitTransitionEnd"}}for(c in b)if(d.style[c]!==undefined)return b[c]}

	// Determine if an element is in the visible viewport
	window.isInViewport = el => {
		const rect = el.getBoundingClientRect();
		return (rect.top >= 0 && rect.bottom <= window.innerHeight);
	}

	// отделяем тысячи
	window.sepNumber = function(str){
		str = str.toString();
		str = str.replace(/\s+/g,'');
		return str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	}

	// склеиваем тысячи
	window.strToNumber = function(n){
		return parseInt(n.replace(/\s+/g,''), 10);
	}

// склонение
	window.declension = (num, expressions) => {

		let r,
			count = num % 100;

		if (count > 4 && count < 21){

			r = expressions['2'];

		}
		else {

			count = count % 10;

			if (count == 1){
				r = expressions['0'];
			}
			else if (count > 1 && count < 5){
				r = expressions['1'];
			}
			else{
				r = expressions['2'];
			}

		}

		return r;

	}

})();
( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, accordion => {

		let animateOn = false,
			activeItem = null;

		const items = accordion.querySelectorAll('.accordion__item');

		Array.from(items, item => {

			const btn = item.querySelector('.accordion__btn'),
				  head = item.querySelector('.accordion__head'),
				  body = item.querySelector('.accordion__body');

			btn.addEventListener('click', () => {

				animateOn = true;

				if( item === activeItem ){

					item.classList.remove('accordion__item--open');
					activeItem = null;

				} else {

					activeItem = item;

					Array.from(items, el => el.classList.toggle('accordion__item--open', el === item));

				}

			});

			body.addEventListener(window.cssAnimation('transition'), () => {

				if(animateOn && activeItem && !window.isInViewport(head)){

					head.scrollIntoView({ behavior: 'smooth' });

				}

				animateOn = false;

			});

		});

	});

})(document.querySelectorAll('.accordion'));
( account => {

	if(!account) {

		return;

	}

	const form = account.querySelector('.account__form'),
		  templateError = document.querySelector('#account-form-error-tooltip-template');

	// для уведомлений

	document.documentElement.style.setProperty('--headerHeight', '15px');

	// показать пароль

	const togglePass = document.querySelectorAll('.account__visible-toggle-password');

	Array.from(togglePass, el => {

		const btn = el.querySelector('.account__visible-toggle-password-btn'),
			  input = el.querySelector('.account__visible-toggle-password-input');

		btn.addEventListener('click', ()=> {

			input.type = input.type === 'password' ? 'text' : 'password';

			Array.from(btn.querySelectorAll('svg'), svg => svg.classList.toggle('hide'));

		});

	});

	// регистрация

	const formReg = account.querySelector('.account__form--signup');

	if( formReg ) {

		formReg.addEventListener('change', event => {

			// первый шаг, выбор типа учетки

			if( event.target.classList.contains('account__radio-input') ) {

				const fieldset = event.target.closest('.account__fieldset');

				fieldset.classList.add('is-valid');

				fieldset.querySelector('.account__next').disabled = false;

			}

		});

		// btn next

		const btnNext = formReg.querySelectorAll('.account__next');

		Array.from(btnNext, btn => {

			btn.addEventListener('click', () => {

				btn.closest('.account__fieldset').classList.add('hide');
				btn.closest('.account__fieldset').nextElementSibling.classList.remove('hide');

			});

		});

		// btn prev

		const btnPrev = formReg.querySelectorAll('.account__prev');

		Array.from(btnPrev, btn => {

			btn.addEventListener('click', () => {

				btn.closest('.account__fieldset').classList.add('hide');
				btn.closest('.account__fieldset').previousElementSibling.classList.remove('hide');

			});

		});

		// выбор компании

		const company = formReg.elements.company;

		company.addEventListener('keyup', () => {

			let isTooltip = false;

			const next = company.nextElementSibling;

			if ( next && next.classList.contains('inputbox__error') ) {

				isTooltip = true;

			}

			if ( company.classList.contains('is-empty') ) {

				if ( isTooltip === false ) {

					const text = company.getAttribute('data-empty-tooltip');
					const error = Mustache.render( templateError.innerHTML, { text });

					company.insertAdjacentHTML('afterend', error);

				}

			} else {

				isTooltip && next.remove();

			}

		});

		// текст корпоротивного емайл

		const emailCompany = formReg.querySelector('#form-account-email'),
			  pattern = emailCompany.getAttribute('data-pattern').split('|');

		emailCompany.addEventListener('keyup', () => {

			if ( form.querySelector('[name="role"]:checked').getAttribute('data-form-account-email-pattern') === "off" ) {

				return;

			}

			let valid = true;

			pattern.forEach( el => {

				if (emailCompany.value.indexOf('@' + el) !== -1) {

					valid = false;

				}

			});

			let isTooltip = false;

			const next = emailCompany.nextElementSibling;

			if ( next && next.classList.contains('inputbox__error') ) {

				isTooltip = true;

			}

			if ( valid === false ) {

				if ( isTooltip === false ) {

					const text = emailCompany.getAttribute('data-text-valid');
					const error = Mustache.render( templateError.innerHTML, { text });

					emailCompany.insertAdjacentHTML('afterend', error);

				}

			} else {

				isTooltip && next.remove();

			}

		});

	}

	// submit form

	form.addEventListener('submit', event => {

		event.preventDefault();

		const btnSubmit = form.querySelector('.account__submit');

		btnSubmit.disabled = true;

		fetch(form.getAttribute('action'), {
			method: 'POST',
			body: new FormData(form)
		})
		.then(response => response.json())
		.then(json => {

			console.log(json);

			btnSubmit.disabled = false;

			if( json.errorList ) {

				json.errorList.forEach( input => {

					console.log(input);

					for (let type in input) {

						const text = input[type];
						const error = Mustache.render( templateError.innerHTML, { text });

						const inputInForm = form.elements[type];

						inputInForm.insertAdjacentHTML('afterend', error);
						inputInForm.classList.add('is-error');

					}

				});

			}

			if( json.notification ) {

				notification(...json.notification);

			}

			// redirect

			if( json.redirect ) {

				const delay = json.redirectDelay ? json.redirectDelay * 1000 : 0;

				setTimeout( ()=> location.assign(json.redirect), delay);

			}

		});

	});

	// скрытие ошибок при вводе

	form.addEventListener('input', event => {

		if ( event.target.classList.contains('is-error') ) {

			event.target.classList.remove('is-error');

			const error = event.target.parentNode.querySelector('.inputbox__error');

			if ( error ) {

				error.addEventListener(window.cssAnimation('transition'), () => error.remove());

				setTimeout( () => error.classList.add('is-fadeout'), 100);

			}

		}

	});

})(document.querySelector('.account'));

( links => {

	if(links.length) {

		const historyBack = event=> {

			event.preventDefault();
			history.back();

		}

		Array.from(links, link => {

			if(document.referrer.indexOf(location.hostname) > 0) {

				link.onclick = historyBack;

			}

		});

	}

})(document.querySelectorAll('.js-btn-back'));
( datalists => {

	if ( datalists.length === 0 ) {

		return;

	}

	Array.from(datalists, datalist => {

		const input = datalist.querySelector('.input-datalist__input'),
			  list = datalist.querySelector('.input-datalist__list'),
			  items = datalist.querySelectorAll('.input-datalist__item');

		let checked = null;

		Array.from(items, item => {

			const label = item.querySelector('.input-datalist__label'),
				  radio = item.querySelector('.input-datalist__radio');

			radio.addEventListener("change", () => {

				input.value = label.textContent.trim();
				datalist.classList.remove('is-focus');
				checked = radio;

			});

		});

		input.addEventListener('focus', () => datalist.classList.add('is-focus'));

		input.addEventListener('input', () => {

			const value = input.value.toLowerCase();

			if ( checked ) {

				checked.checked = false;
				checked = null;

			}

			if(value.length > 1) {

				Array.from(items, item => {

					const text = item.querySelector('.input-datalist__label').textContent.trim().toLowerCase();

					item.classList.toggle('hide', text.indexOf(value) === -1);

				});

				input.classList.toggle('is-empty', items.length === list.querySelectorAll('.input-datalist__item.hide').length);

			} else {

				Array.from(items, item => item.classList.remove('hide'));
				input.classList.add('is-empty');

			}

		});

	});

	window.addEventListener("click", event => {

		if ( event.target.closest('.input-datalist') === null ) {

			Array.from(datalists, datalist => datalist.classList.remove('is-focus'));

		}

	});

})(document.querySelectorAll('.input-datalist'));

// lang EN|RU в товаре

( form => {

	if(form === null) {

		return;

	}

	// кнопки скачать

	const btns = document.querySelectorAll('[data-docs-item-lang]');

	if(btns.length) {

		form.addEventListener('change', () => {

			const lang = form.querySelector('[name="docs-item-lang"]:checked').value;

			Array.from(btns, el => el.classList.toggle('hide', el.getAttribute('data-docs-item-lang') !== lang));

		});

	}

	// форма запроса цены в модалке (НЕ авторизирован)

	const formModalGetPrice = document.querySelector('#form-modal-get-price');

	if(formModalGetPrice) {

		form.addEventListener('change', () => {

			const lang = form.querySelector('[name="docs-item-lang"]:checked').value;

			formModalGetPrice.elements.lang.value = lang;

		});

	}

	// форма запроса цены на странице (авторизован)

	const formGetPrice = document.querySelector('.form-get-price');

	if(formGetPrice) {

		form.addEventListener('change', () => {

			const lang = form.querySelector('[name="docs-item-lang"]:checked').value;

			formGetPrice.elements.lang.value = lang;

		});

	}

})(document.querySelector('.docs-item__lang'));

( forms => {

	if(forms.length) {

		const addAjaxItem = (html, searchResultBox) => {

			const boxResult = document.createElement('div');

			boxResult.innerHTML = html;

			Array.from(boxResult.querySelectorAll('.docs-catalog__item'), item => {

				searchResultBox.querySelector('.docs-catalog__list').appendChild(item);

			});

			if ( boxResult.querySelector('.docs-viewed') ) {

				searchResultBox.querySelector('.docs-viewed').innerHTML = boxResult.querySelector('.docs-viewed').innerHTML;

			}

			if ( boxResult.querySelector('.pagin') ) {

				searchResultBox.querySelector('.pagin').innerHTML = boxResult.querySelector('.pagin').innerHTML;

			}

			if( boxResult.querySelector('.docs-ajax__btn') ) {

				searchResultBox.querySelector('.docs-ajax__btn').disabled = false;

			} else if (searchResultBox.querySelector('.docs-ajax')) {

				searchResultBox.querySelector('.docs-ajax').remove();

			}

			if( windowScroll !== window.pageYOffset ) {

				window.scrollTo(0,windowScroll);

			}

			searchResult.classList.remove('is-loading','is-loading-add');

			document.querySelector('.docs-page__tabs-item.is-active').setAttribute('data-history', location.pathname + location.search);

		};

		const formShortStatus = ()=> {

			if(formShort === null) {

				formShort = true;

				document.body.classList.remove('page-blue');
				document.querySelector('.docs-page').classList.add('docs-page--short');
				document.querySelector('.docs-page__description').remove();

			}

		};

		const searchResult = document.querySelector('.docs-search-result'),
			  searchResultStandarts = searchResult.querySelector('.docs-search-result__standarts'),
			  searchResultAnalytics = searchResult.querySelector('.docs-search-result__analytics'),
			  fieldsets = document.querySelectorAll('.docs-form__fieldset');

		let windowScroll = window.pageYOffset,
			formShort = document.querySelector('.docs-page--short'),
			activeTabStandarts = document.querySelector('.docs-page__tabs-item--standarts').classList.contains('is-active'),
			searchResultStandartsEmpty = searchResultStandarts.classList.contains('hide'),
			searchResultAnalyticsEmpty = searchResultAnalytics.classList.contains('hide');

		Array.from(forms, form => {

			// keywords

			if( form.classList.contains('docs-form--product') ) {

				const input = form.querySelector('.docs-form__input'),
					  result = form.querySelector('.docs-form__result');

				// input

				input.addEventListener('keyup', event => {

					if(input.value.length > 2 && event.key !== 'enter'){

						fetch(form.getAttribute('data-action'), {
							method: 'POST',
							body: new FormData(form)
						})
						.then(response => response.text())
						.then(html => {

							console.log(html);

							result.innerHTML = html;
							result.classList.remove('hide');

						});

					}

				});

				form.addEventListener('reset', () => {

					if ( input.value.length === 0 ) {

						Array.from(fieldsets, el => el.classList.remove('is-focus', 'hide'));

						return;

					}

					result.classList.add('hide');

					searchResult.classList.add('is-loading');

					if( activeTabStandarts ) {

						searchResultStandarts.innerHTML = '';
						searchResultStandarts.classList.remove('hide');

						history.pushState(undefined, '', searchResult.getAttribute('data-statndarts'));
						document.querySelector('.docs-page__tabs-item.is-active').setAttribute('data-history', searchResult.getAttribute('data-statndarts'));

					} else {

						searchResultAnalytics.innerHTML = '';
						searchResultAnalytics.classList.remove('hide');

						history.pushState(undefined, '', searchResult.getAttribute('data-analytics'));
						document.querySelector('.docs-page__tabs-item.is-active').setAttribute('data-history', searchResult.getAttribute('data-analytics'));

					}

					formShortStatus();

					setTimeout( ()=> {

						input.value = '';
						input.removeAttribute('value');

						let url = form.getAttribute('action') + '?';

						new FormData(form).forEach((value, key) => {

							url += key + "=" + value + "&";

						});

						fetch(url)
							.then(response => response.text())
							.then(html => {

								const boxResult = document.createElement('div');

								boxResult.innerHTML = html;

								if( activeTabStandarts ) {

									searchResultStandarts.innerHTML = boxResult.querySelector('.docs-search-result__standarts').innerHTML;

								} else {

									searchResultAnalytics.innerHTML = boxResult.querySelector('.docs-search-result__analytics').innerHTML;

								}

								searchResult.classList.remove('is-loading');
								input.focus();

							});

					}, 100);

				});

				// кнопка еще

				form.addEventListener('ajax', () => {

					console.log('ajax', windowScroll);

					const searchResultBox = searchResultStandarts.classList.contains('hide') ? searchResultAnalytics : searchResultStandarts;

					searchResult.classList.add('is-loading-add');

					windowScroll = window.pageYOffset;

					form.elements.PAGEN_1.value = parseInt(form.elements.PAGEN_1.value) + 1;


					const formData = new FormData(form);

					const queryString = new URLSearchParams(formData).toString();

					history.pushState(undefined, '', '?' + queryString);

					console.log(queryString);

					let url = form.getAttribute('action') + '?';

					new FormData(form).forEach((value, key) => {

						url += key + "=" + value + "&";

					});

					console.log(url);

					fetch(url)
						.then(response => response.text())
						.then(html => addAjaxItem(html, searchResultBox));

				});

			}

			// карточки, номерклатура и разработчик

			if( form.classList.contains('docs-form--list') ) {

				form.addEventListener('change', () => {

					// если input === radio

					const nomenclature = form.querySelectorAll('.docs-form__result-datalist:not(.hide)');

					if ( nomenclature.length === 1 ) {

						if ( nomenclature[0].textContent.trim().toLowerCase() === document.querySelector('#form-docs-standarts-nomenclature').value.toLowerCase() ) {

							nomenclature[0].querySelector('input').checked = true;
							nomenclature[0].classList.add('hide');

						}

					}

					console.log('change');

					searchResultStandartsEmpty = false;

					if ( searchResultStandarts.querySelector('.docs-ajax__btn:disabled') ) {

						searchResult.classList.add('is-loading-add');

						windowScroll = window.pageYOffset;

						form.elements.PAGEN_1.value = parseInt(form.elements.PAGEN_1.value) + 1;

					} else {

						searchResult.classList.add('is-loading');
						searchResultStandarts.innerHTML = '';
						form.elements.PAGEN_1.value = 1;

					}

					const formData = new FormData(form);

					const queryString = new URLSearchParams(formData).toString();

					history.pushState(undefined, '', '?' + queryString);

					fetch(form.getAttribute('data-action'), {
						method: 'POST',
						body: formData
					})
					.then(response => response.text())
					.then(html => {

						searchResultStandarts.classList.remove('hide');

						// кнопка ещё

						if ( searchResultStandarts.querySelector('.docs-ajax__btn:disabled') ) {

							addAjaxItem(html, searchResultStandarts);

						} else {

							searchResultStandarts.innerHTML = html;

							document.querySelector('.docs-page__tabs-item.is-active').setAttribute('data-history', location.pathname + location.search);

						}

						searchResult.classList.remove('is-loading','is-loading-add');

					});

					formShortStatus();

				});

				// submit

				form.addEventListener('submit', event => {

					event.preventDefault();

					form.dispatchEvent(new CustomEvent("change"));

				});

				// кнопка еще

				form.addEventListener('ajax', () => {

					form.dispatchEvent(new CustomEvent("change"));

				});

			}

		});

		Array.from(fieldsets, fieldset => {

			// open

			fieldset.addEventListener('click', event => {

				if ( event.target.closest('.docs-form__result') ) {

					return;

				}

				Array.from(fieldsets, el => el.classList.toggle('is-focus', el === fieldset));

			});

			const form = fieldset.closest('.docs-form'),
				  input = fieldset.querySelector('.docs-form__input'),
				  reset = fieldset.querySelector('.docs-form__reset'),
				  result = fieldset.querySelector('.docs-form__result');

			// input

			input.addEventListener('focus', () => {

				Array.from(fieldsets, el => {

					el.classList.toggle('is-focus', el === fieldset);

					if ( fieldset.classList.contains('docs-form__catalog') && el !== fieldset ) {

						el.classList.add('hide');

					}

				});

			});

			// nomenclature

			if(fieldset.classList.contains('docs-form__nomenclature')) {

				// datalist

				const datalist = fieldset.querySelectorAll('.docs-form__result-datalist');

				Array.from(datalist, btn => {

					btn.querySelector('input').addEventListener('change', () => {

						fieldset.classList.remove('is-focus');

						input.value = btn.textContent.trim();

						reset.classList.remove('hide');

					});

				});

				input.addEventListener('input', () => {

					const value = input.value.toLowerCase();

					reset.classList.toggle('hide', value.length === 0);

					if(value.length > 1) {

						Array.from(datalist, btn => {

							const text = btn.textContent.trim().toLowerCase();

							if ( text.indexOf(value) === -1 ) {

								btn.classList.add('hide');
								btn.querySelector('input').checked = false;

							} else {

								btn.classList.remove('hide');

							}

						});

						input.getAttribute('data-empty');

					} else {

						Array.from(datalist, btn => {

							btn.classList.remove('hide');
							btn.querySelector('input').checked = false;

						});

					}

				});

				// reset === clear

				reset.addEventListener('click', () => {

					Array.from(datalist, btn => {

						btn.classList.remove('hide');
						btn.querySelector('input').checked = false;

					});

					fieldset.classList.add('is-focus');
					reset.classList.add('hide');
					input.value = '';
					input.removeAttribute('value');
					input.focus();
					form.dispatchEvent(new CustomEvent("change"));

				});

			}

			// developer

			if(fieldset.classList.contains('docs-form__developer')) {

				// checkbox

				const checkbox = fieldset.querySelectorAll('.checkbox__input');

				form.addEventListener('change', event => {

					if( event.target.type !== 'checkbox' ) {

						return;

					}

					let value = '';

					if ( event.target.name === 'all' ) {

						value = event.target.parentNode.textContent.trim();

						Array.from(checkbox, el => el.checked = event.target.checked);

					} else {

						Array.from(checkbox, el => {

							if( el.name === 'all' ) {

								el.checked = false;

							}

							if( el.checked ) {

								const label = el.parentNode;

								if( value !== '' ) {

									value += ', ';

								}

								value += label.textContent.trim();

							}

						});

					}

					input.value = value;

					reset.classList.toggle('hide', value === '');

				});

				// reset === clear

				reset.addEventListener('click', () => {

					Array.from(checkbox, el => el.checked = false);
					fieldset.classList.add('is-focus');
					reset.classList.add('hide');
					input.value = '';
					input.removeAttribute('value');
					form.dispatchEvent(new CustomEvent("change"));

				});

			}

		});

		window.addEventListener("click", event => {

			if( event.target.closest('.docs-form__fieldset') === null ){

				Array.from(fieldsets, el => el.classList.remove('is-focus', 'hide'));

			}

			// tabs

			const tabsBtn = event.target.closest('.docs-page__tabs-item');

			if( tabsBtn ){

				let current = document.querySelector('.docs-page__tabs-item.is-active');

				current.setAttribute('data-history', location.pathname + location.search);

				current.classList.remove('is-active');

				tabsBtn.classList.add('is-active');

				history.pushState(undefined, '', tabsBtn.getAttribute('data-history'));

				if( tabsBtn.classList.contains('docs-page__tabs-item--standarts') ) {

					activeTabStandarts = true;

					document.querySelector('.docs-page__forms--standarts').classList.remove('hide');
					document.querySelector('.docs-page__forms--analytics').classList.add('hide');

					if(formShort) {

						document.querySelector('.docs-search-result__standarts').classList.remove('hide');
						document.querySelector('.docs-search-result__analytics').classList.add('hide');

					}

				}

				if( tabsBtn.classList.contains('docs-page__tabs-item--analytics') ) {

					activeTabStandarts = false;

					document.querySelector('.docs-page__forms--analytics').classList.remove('hide');
					document.querySelector('.docs-page__forms--standarts').classList.add('hide');

					if(formShort) {

						document.querySelector('.docs-search-result__analytics').classList.remove('hide');
						document.querySelector('.docs-search-result__standarts').classList.add('hide');

					}

				}

			}

			// ajax

			const btnAjax = event.target.closest('.docs-ajax__btn');

			if ( btnAjax ) {

				btnAjax.disabled = true;

				const form = document.querySelector('#' + btnAjax.getAttribute('data-form'));

				form.dispatchEvent(new CustomEvent("ajax"));

			}

		});

		// подгрузка товаров

		if ( searchResultStandartsEmpty ) {

			fetch(searchResult.getAttribute('data-statndarts'))
				.then(response => response.text())
				.then(html => {

					if ( searchResultStandartsEmpty ) {

						const boxResult = document.createElement('div');

						boxResult.innerHTML = html;

						searchResultStandarts.innerHTML = boxResult.querySelector('.docs-search-result__standarts').innerHTML;

					}

				});

		}

		if ( searchResultAnalyticsEmpty ) {

			fetch(searchResult.getAttribute('data-analytics'))
				.then(response => response.text())
				.then(html => {

					if ( searchResultAnalyticsEmpty ) {

						const boxResult = document.createElement('div');

						boxResult.innerHTML = html;

						searchResultAnalytics.innerHTML = boxResult.querySelector('.docs-search-result__analytics').innerHTML;

					}

				});

		}

	}

})(document.querySelectorAll('.docs-form'));
(() => {

	if ('IntersectionObserver' in window) {

		const callback = (entries, observer) => {

			Array.from(entries, entry => {

				if (entry.isIntersecting) {

					entry.target.classList.add('is-show');
					observer.unobserve(entry.target);

					setTimeout( () => entry.target.classList.remove('fade-in', 'is-show'), 1000);

				}

			});

		};

		const observer = new IntersectionObserver(callback);

		setTimeout( () => Array.from(document.querySelectorAll('.fade-in'), el => observer.observe(el)), 1000);

	} else {

		Array.from(document.querySelectorAll('.fade-in'), el => el.classList.add('is-show'));

	}

})();
( () => {

	document.addEventListener('submit', event => {

		let form = event.target;

		// добавить в избранное

		if (form.classList.contains('form-add-favourite')) {

			event.preventDefault();

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.json())
			.then(json => {

				console.log(json);

			});

		}

		// запрос цены DOCS в списке результатов и карточке Авторизован

		if (form.classList.contains('form-get-price')) {

			event.preventDefault();

			const btnSubmit = form.querySelector('.form-get-price__submit');

			btnSubmit.disabled = true;

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.json())
			.then(json => {

				console.log(json);

				btnSubmit.textContent = btnSubmit.getAttribute('data-done');

				notification(...notification);

			});

		}

	});

})();
( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, form => {

		const btn = form.querySelector('.form__submit');

		form.addEventListener('submit', event => {

			event.preventDefault();

			form.classList.add('is-loading');
			btn.disabled = true;

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.json())
			.then(result => {

				console.log(result);

				form.classList.remove('is-loading');
				btn.disabled = false;

			// notification

				if(result.notification) {

					notification(...result.notification);

				}

			// redirect

				if(result.redirect) {

					const delay = result.redirectDelay ? result.redirectDelay * 1000 : 0;

					setTimeout( ()=> location.assign(result.redirect), delay);

				}

			// reset

				if(result.reset) {

					form.reset();

				}

			// reload

				if(result.refresh) {

					location.reload();

				}

			// close modal

				if(result.modalClose) {

					modal.dispatchEvent(new CustomEvent("hide"));

				}

			});

		});

	});

})(document.querySelectorAll('.form'));

// like

( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, form => {

		const counterLike = form.querySelector('.form-like__counter-like'),
			  counterDisLike = form.querySelector('.form-like__counter-dislike');

		form.addEventListener('change', () => {

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.json())
			.then(result => {

				console.log(result);

				counterLike.textContent = result.like;
				counterDisLike.textContent = result.dislike;

			});

		});

	});

})(document.querySelectorAll('.form-like'));
( formGetPrice => {

	if ( formGetPrice === null ) {

		return;

	}

	// клике в результатах поиска по кнопке Узнать стоимость

	const searchResult = document.querySelector('.docs-search-result');

	if ( searchResult ) {

		searchResult.addEventListener('click', event => {

			if( event.target.closest('[data-modal="get-price"]') ) {

				formGetPrice.elements.id.value = event.target.closest('[data-modal="get-price"]').getAttribute('data-id');

			}

		});

	}

	// обработка формы в модалке

	formGetPrice.addEventListener('submit', event => {

		event.preventDefault();

		fetch(formGetPrice.getAttribute('action'), {
			method: 'POST',
			body: new FormData(formGetPrice)
		})
		.then(response => response.json())
		.then(json => {

			console.log(json);

			if( json.id ) {

				// если на странице каталога, то меняем текст в кнопке.

				const btnTarget = document.querySelector(`.docs-catalog-item__request[data-id="${json.id}"]`);

				if ( btnTarget ) {

					btnTarget.textContent = btnTarget.getAttribute('data-done');
					btnTarget.disabled = true;

				}

			}

			// скрываем модалку с формой

			modal.dispatchEvent(new CustomEvent("hide"));

			// выводим уведомление

			notification(...json.notification);

		});

	});

})(document.querySelector('#form-modal-get-price'));

( page => {

	if(page) {

		let formShort = document.querySelector('.insights-page--short');

		const searchResult = document.querySelector('.insights-search-result'),
			  box = page.querySelector('.insights-page__box'),
			  form = page.querySelector('.insights-form'),
			  input = form.querySelector('.insights-form__input'),
			  country = form.querySelectorAll('.insights-form-filter-checkbox-group');

		const requestForm = ()=> {

			const formData = new FormData(form);

			if ( form.elements.rating.value === '' ) {

				formData.delete('rating');

			}

			if ( form.elements.keywords.value.length === 0 ) {

				formData.delete('keywords');

			}

			const queryString = new URLSearchParams(formData).toString();

			history.pushState(undefined, '', '?' + queryString);

			searchResult.classList.add('is-loading');

			fetch(form.getAttribute('data-action'), {
				method: 'POST',
				body: formData
			})
			.then(response => response.text())
			.then(html => {

				searchResult.classList.remove('is-loading');

				searchResult.innerHTML = html;

			});

			if(formShort === null) {

				formShort = true;

				document.querySelector('.insights-page').classList.add('insights-page--short');
				document.querySelector('.insights-page__description').remove();
				document.querySelector('.insights-category').remove();
				document.querySelector('.insights-info').remove();

			}

		};

		// кнопка каталог

		window.addEventListener("click", event => {

			if( event.target.closest('.insights-category-list') === null ){

				if( event.target.closest('.insights-page__btn-catalog') ){

					box.classList.toggle('is-open-category');

				} else {

					box.classList.remove('is-open-category');

				}

			}

			// в каталоге развернуть списки

			if( event.target.closest('.insights-category-list__item') && event.target.closest('.insights-category-list__link') === null ) {

				event.target.closest('.insights-category-list__item').classList.toggle('is-open');

			}

			// убираем фокус

			if( event.target.closest('.insights-form') === null ) {

				box.classList.remove('is-open-filter');

			}

			// фильтр в выдаче

			if ( event.target.closest('.insights-catalog-filter__item') === null ) {

				const openBox = document.querySelector('.insights-catalog-filter__btn.is-open');

				if (openBox) {

					openBox.classList.remove('is-open');

				}

			}

		});

		// input

		input.addEventListener("focus", () => {

			box.classList.add('is-open-filter');

		});

		// change

		form.addEventListener('change', () => requestForm());

		// input keyup

		input.addEventListener('keyup', event => {

			form.classList.toggle('is-noempty', input.value.length > 0);

			if(input.value.length > 2 && event.key !== 'enter'){

				requestForm();

			}

		});

		// reset

		form.addEventListener('reset', () => {

			form.classList.remove('is-noempty');

			if ( input.value.length === 0 ) {

				form.classList.add('is-default');
				box.classList.remove('is-open-filter');

			} else {

				input.value = '';
				input.removeAttribute('value');

				Array.from(form.querySelector('.checkbox-btn__input'), checkbox => {

					checkbox.checked = false;
					checkbox.removeAttribute('checked');

				});

				requestForm();

			}

		});

		// группы стран по континентам

		Array.from(country, el => {

			const group = el.querySelectorAll('.insights-form-filter-checkbox-group__item'),
				  checkbox = el.querySelector('.insights-form-filter-checkbox-group__trigger');

			checkbox.addEventListener('change', event => {

				event.stopPropagation();

				Array.from(group, el => el.checked = checkbox.checked);

				form.dispatchEvent(new CustomEvent("change"));

			});

		});

		// searchResult

		const searchResultChangeFilter = ( target, filter = document.querySelector('.insights-catalog-filter') ) => {

			let name = target.name;

			// Рейтинг

			if ( target.classList.contains('insights-catalog-filter__rating') ) {

				form.elements[target.name].value = target.checked ? target.value : "";

			}

			// checkbox

			if ( target.type === 'checkbox' ) {

				// Все

				const btnAll = filter.querySelector('[name="' + name + '"][value="all"]'),
					  listNotBtnAll = Array.from(filter.querySelectorAll('[name="' + name + '"]')).filter(input => input !== btnAll);

				if ( btnAll ) {

					if ( btnAll === target ) {

						Array.from(listNotBtnAll, input => input.checked = btnAll.checked);

					} else {

						btnAll.checked = listNotBtnAll.every( input => input.checked === true );

					}

				}

				// Продукт / Бизнес / Регион / Производитель

				if (
					target.classList.contains('insights-catalog-filter__cat') ||
					target.classList.contains('insights-catalog-filter__bisness') ||
					target.classList.contains('insights-catalog-filter__country') ||
					target.classList.contains('insights-catalog-filter__manufacturer')
				) {

					Array.from(listNotBtnAll, input => {

						form.querySelector('[name="' + input.name + '"][value="' + input.value + '"]').checked = input.checked;

					});

				}

			}

			form.dispatchEvent(new CustomEvent("change"));

		};

		searchResult.addEventListener('change', event => {

			const target = event.target,
				  filter = target.closest('.insights-catalog-filter');

			// фильтр в выдаче

			if ( filter ) {

				searchResultChangeFilter(target, filter);

			}

		});

		searchResult.addEventListener('click', event => {

			const target = event.target,
				  btnFilter = target.closest('.insights-catalog-filter__btn');

			// фильтр кнопка

			if( btnFilter ) {

				const boxTarget = btnFilter.closest('.insights-catalog-filter__item'),
					  list = searchResult.querySelectorAll('.insights-catalog-filter__item');

				// reset кнопка

				Array.from(list, item => {

					if ( item === boxTarget ) {

						if ( target.closest('.insights-catalog-filter__btn-reset') ) {

							item.querySelector('.insights-catalog-filter__btn').classList.remove('is-checked');
							item.querySelector('.insights-catalog-filter__btn-reset').classList.add('hide');
							item.querySelector('.insights-catalog-filter__btn-count') && item.querySelector('.insights-catalog-filter__btn-count').classList.add('hide');

							Array.from(item.querySelectorAll('input[name][value]'), input => input.checked = false);

							searchResultChangeFilter(item.querySelector('input[name]'));

						} else {

							btnFilter.classList.toggle('is-open');

						}

					} else {

						item.querySelector('.insights-catalog-filter__btn').classList.remove('is-open');

					}

				});

			}

		});

	}

})(document.querySelector('.insights-page'));
( forms => {

	if(!forms.length) {

		return;

	}

/*	Array.from(forms, form => {

		const input = form.querySelector('.live-search__input'),
			  result = form.querySelector('.live-search__result');

		input.addEventListener('keyup', event => {

			if(input.value.length > 2 && event.key !== 'enter'){

				form.classList.add('live-search--loading', 'live-search--open');

				fetch(form.getAttribute('action'), {
					method: 'POST',
					body: new FormData(form)
				})
				.then(response => response.text())
				.then(html => {

					console.log(html);

					result.innerHTML = html;
					form.classList.remove('live-search--loading');

				});

			}

		});

	});

	// скрыть рузельтаты при клике вне формы

	window.addEventListener("click", event => {

		const isForm = event.target.closest('.live-search');

		Array.from(forms, form => {

			if(isForm !== form) {

				form.classList.remove('live-search--open');

			}

		});

	});*/

})(document.querySelectorAll('.live-search'));
( page => {

	if(page) {

		const content = page.querySelector('.main-page__content');

		if ('IntersectionObserver' in window) {

			const callback = (entries, observer) => {

				Array.from(entries, entry => {

					console.log(entry.isIntersecting);

				});

			};

			const observer = new IntersectionObserver(callback, {
				threshold: 1
			});

			observer.observe(content);

		}

	}

})(document.querySelector('.main-page'));
( elems => {

	if(!elems.length) {

		return;

	}

	const script = document.createElement('script');
	script.src = '/bitrix/templates/inti-v3/js/inputmask.min.js';
	script.onload = () => {

		Array.from(elems, el => {

			let maskInput;

			if(el.classList.contains('inputmask--phone')) {

				maskInput = new Inputmask({
					mask: "+7 (999) 999 99 99",
					showMaskOnHover: false
				});

			}

			maskInput.mask(el);

		});

	};

	setTimeout( () => document.head.appendChild(script), Cookies.get('fastLoadScript') ? 0 : 10000);

})(document.querySelectorAll('.inputmask'));
// btn toggle

/*( btn => {

	if(btn) {

		let windowScroll = window.pageYOffset;

		btn.addEventListener('click', () => {

			if(document.body.classList.contains('menu-show')) {

				document.body.classList.remove('menu-show');
				window.scrollTo(0,windowScroll);

			} else {

				windowScroll = window.pageYOffset;

				document.body.classList.add('menu-show');
				window.scrollTo(0,0);

			}

		});

	}

})(document.querySelector('.btn-menu-toggle'));
*/
// menu service

( menu => {

	if(menu) {

		const header = document.querySelector('.header'),
			  menuUser = header.querySelector('.header__user');

		header.addEventListener('mousemove', event => {

			const item = event.target.closest('.menu__item');

			if(item !== null) {

				document.body.classList.toggle('menu-service-show', item.classList.contains('menu__service'));
				menuUser && menuUser.classList.remove('is-open');

			}

		});

		header.addEventListener('mouseleave', () => {

			document.body.classList.remove('menu-service-show');

		});


		// menu user

		if(menuUser) {

			window.addEventListener("click", event => {

				if( event.target.closest('.header__user-btn') ){

					menuUser.classList.toggle('is-open');

				} else if( event.target.closest('.header__user') === null ){

					menuUser.classList.remove('is-open');

				}

			});

		}

	}

})(document.querySelector('.menu-service'));


// scroll

( header  => {

	if(header) {

		window.addEventListener("scroll", () => {

			window.requestAnimationFrame( () => {

				if(document.body.classList.contains('modal-show') === false && document.body.classList.contains('menu-show') === false) {

					header.classList.toggle('header--reduce', window.pageYOffset > 0);

				}

			});

		});

	}

})(document.querySelector('.header'));
( modal => {

	if(!modal) {

		return;

	}

	const items = modal.querySelectorAll('.modal__item'),
		  btns = document.querySelectorAll('[data-modal]'),
		  wrapper = document.querySelector('.wrapper'),
		  header = document.querySelector('.header');

	let activeModal = null,
		windowScroll = window.pageYOffset;

	modal.addEventListener('hide', () => {

		document.body.classList.remove('modal-show');
		wrapper.style.top = 0;
		header.style.top = 0;
		window.scrollTo(0,windowScroll);
		activeModal = false;

	});

	modal.addEventListener('keyup', event => {

		if(event.key === "Escape") {

			modal.dispatchEvent(new CustomEvent("hide"));

		}

	});

	const modalShow = selector => {

		if(!activeModal){

			windowScroll = window.pageYOffset;

		}

		document.body.classList.toggle('search-open', selector === 'search');

		activeModal = modal.querySelector('.modal__item--' + selector);

		Array.from(items, el => el.classList.toggle('visuallyhidden', el !== activeModal));

		wrapper.style.top = -windowScroll + 'px';
		header.style.top = windowScroll + 'px';
		document.body.classList.add('modal-show');
		window.scrollTo(0,0);

		activeModal.focus();

		PubSub.publish('open-' + selector);

	};

	modal.addEventListener('click', event => {

		if( (event.target.classList.contains('modal') && document.body.classList.contains('search-open') === false) || event.target.closest('.modal__close')){

			modal.dispatchEvent(new CustomEvent("hide"));

		}

	});

	document.addEventListener('click', event => {

		let target = event.target;

		while (target !== document) {

			if (target.hasAttribute('data-modal')) {

				modalShow(target.getAttribute('data-modal'));

			}

			target = target.parentNode;

		}

	});

	modal.addEventListener('modalShow', event => modalShow(event.detail.selector));

	modal.ok = (title, text, mod = '') => {

		modal.querySelector('.modal__item--ok').setAttribute('data-mod', mod);
		modal.querySelector('.modal__item--ok .modal-mini__title').innerHTML = title ? title : '';
		modal.querySelector('.modal__item--ok .modal-mini__text').innerHTML = text ? text : '';
		modalShow('ok');

	}

})(document.querySelector('.modal'));
( notification => {

	if(!notification) {

		return;

	}

	const box = notification.querySelector('.center'),
		  template = document.querySelector('#notification-template').innerHTML;

	window.notification = (head, text, timer = 3.3) => {

		box.insertAdjacentHTML('beforeend', Mustache.render(template, { head, text }));

		const item = box.querySelector('.is-new');

		setTimeout( () => {

			item.classList.remove('is-new');
			item.style.height = item.clientHeight + 'px';

		}, 100);

		item.addEventListener(window.cssAnimation('transition'), () => {

			if( item.classList.contains('is-hide') ){

				item.remove();

			}

		});

		item.addEventListener('click', () => {

			item.classList.add('is-hide');

		});

		setTimeout( ()=> {

			item.classList.add('is-hide');

		}, 1000 * timer);

	}

})(document.querySelector('.notification'));
( form => {

	if(!form) {

		return;

	}

	const input = form.querySelector('.search__input'),
		  result = form.querySelector('.search__result-inner');

	input.addEventListener('keyup', event => {

		if(input.value.length > 2 && event.key !== 'enter'){

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.text())
			.then(html => {

				result.innerHTML = html;

			});

		}

	});

	const setHeight = () => {

		const rect = result.getBoundingClientRect();
		result.style.maxHeight = window.innerHeight - rect.top + 'px';

	};

	PubSub.subscribe('open-search', () => {

		input.focus();

		setHeight();

	});

	PubSub.subscribe('windowWidthResize', () => setHeight());

})(document.querySelector('.search'));
window.selects = select => {

	if(select.querySelector('.select__list')) {

		return;

	}

	const value = document.createElement('div'),
		  arrow = document.createElement('span');

	arrow.innerHTML = '<svg width="29" height="24" viewBox="0 0 29 24"><path d="m9.85 9 4.5 5 4.5-5h-9Z"/></svg>';

	value.className = 'select__value';
	value.innerHTML = '<span class="select__value-inner"></span>';

	value.appendChild(arrow);
	select.appendChild(value);

	const form = select.closest('form'),
		control = select.querySelector('select'),
		option = select.querySelectorAll('option'),
		valueText = select.querySelector('.select__value-inner'),
		filter = select.classList.contains('select--filter'),
		list = document.createElement('div');

	list.className = 'select__list';

	let selected = control.querySelector('[value="' + control.value + '"]');

	control.addEventListener("change", () => {

		selected = control.querySelector('[value="' + control.value + '"]');

		valueText.textContent = selected.textContent;

		select.classList.remove('select--default');

	});

	const valueDefault = selected.textContent;

	if(control.disabled){

		select.classList.add('select--disabled');

	}

	if(control.value === 'none' || control.value === ''){

		select.classList.add('select--default');

	}

	if (control.value !== '') {

		valueText.textContent = select.querySelector('option[value="' + control.value + '"]').textContent;

	}

	Array.from(option, el => {

		const o = document.createElement('button');

		o.className = 'button select__list-item';

		o.setAttribute('type', 'button');
		o.setAttribute('value', el.getAttribute('value'));

		o.textContent = el.textContent;

		list.appendChild(o);

	});

	if(filter){

		const inputFilter = document.createElement('input');

		inputFilter.className = 'select__filter input';

		value.appendChild(inputFilter);

		inputFilter.addEventListener('input', () => {

			const value = inputFilter.value.toLowerCase();

			if(value.length > 1) {

				Array.from(list.children, o => {

					const text = o.textContent.trim().toLowerCase();

					o.classList.toggle('hide', text.indexOf(value) === -1);

				});

				if(list.querySelectorAll('.select__list-item').length === list.querySelectorAll('.select__list-item.hide').length) {

					select.classList.add('select--filter-empty');

				} else {

					select.classList.remove('select--filter-empty');

				}

			} else {

				Array.from(list.children, o => o.classList.remove('hide'));

			}

		});
	}

	select.addEventListener("click", event => {

		if(event.target.classList.contains('select__list-item')){

			control.value = event.target.getAttribute('value');

			control.dispatchEvent(new CustomEvent("change"));

			if(form) {

				form.dispatchEvent(new CustomEvent("change"));

			}

		}

	});

	select.appendChild(list);

	form && form.addEventListener("reset", () => {

		select.classList.add('select--default');
		valueText.textContent = valueDefault;

	});

};

( () => {

	window.selectsCollection = document.querySelectorAll('.select');

	if(window.selectsCollection.length) {

		Array.from(window.selectsCollection, select => window.selects(select));

	}

	window.addEventListener("click", event => {

		const isSelect = event.target.closest('.select');

		Array.from(window.selectsCollection, select => {

			select.classList.toggle('select--open', select === isSelect && isSelect.classList.contains('select--open') === false);

		});

	});

})();
( swiperContainer => {

	if(!swiperContainer.length) {

		return;

	}

	Array.from(swiperContainer, swipe => {

		let mySwipe = null,
			toggleSwipe = null,
			resetSwipe = null;

		const swipeControls = document.createElement('div'),
			  swipeNav = document.createElement('div'),
			  swipeBtns = document.createElement('div'),
			  swipeNext = document.createElement('button'),
			  swipePrev = document.createElement('button'),
			  scrollbar = swipe.parentNode.querySelector('.swiper-scrollbar'),
			  items = swipe.querySelectorAll('.swiper-slide'),
			  count = items.length,
			  insightsGallery = swipe.classList.contains('swiper-container--gallery-insights');

		swipeNav.className = 'swiper-pagination';
		swipeControls.className = 'swiper-controls';

		swipeBtns.className = 'swiper-navigation';
		swipePrev.className = 'swiper-button-prev button';
		swipeNext.className = 'swiper-button-next button';

		swipePrev.setAttribute('aria-label','Previous slide');
		swipeNext.setAttribute('aria-label','Next slide');

		swipePrev.innerHTML = '<svg width="26" height="26" viewBox="0 0 26 26"><path d="M8 13.5 16.49 5 18 6.51l-6.98 6.99L18 20.49 16.49 22 8 13.5Z"/></svg>';
		swipeNext.innerHTML = '<svg width="26" height="26" viewBox="0 0 26 26"><path d="M18 12.5 9.51 21 8 19.49l6.98-6.99L8 5.51 9.51 4 18 12.5Z"/></svg>';

		swipeBtns.appendChild(swipePrev);
		swipeBtns.appendChild(swipeNext);
		swipeControls.appendChild(swipeBtns);
		swipeControls.appendChild(swipeNav);

		resetSwipe = () => {

			if(mySwipe) {

				mySwipe.destroy(false,true);
				mySwipe = undefined;

			}

			swipeNav.classList.add('hide');
			swipeBtns.classList.add('hide');
			swipeControls.classList.add('hide');

			swipe.parentNode.classList.remove('swiper-container-style');

		}

		if (insightsGallery) {

			toggleSwipe = () => {

				toggleSwipe = false;
				swipe.parentNode.classList.add('swiper-container-style');

				new Swiper(swipe, {
					loop : true,
					slidesPerView : "auto",
					navigation : {
						nextEl : swipeNext,
						prevEl : swipePrev
					}
				});

			}

		}

		PubSub.subscribe('windowWidthResize', () => {

			if (window.Swiper && toggleSwipe) {

				toggleSwipe();

			}

		});

		PubSub.subscribe('swiperJsLoad', () => {

			swipe.appendChild(swipeControls);

			// eager
			Array.from(swipe.querySelectorAll('[loading="lazy"]'), img => img.setAttribute('loading','eager'));

			// hide
			Array.from(items, el => el.classList.remove('hide'));

			toggleSwipe();

		});

	});

	const script = document.createElement('script');

	script.src = '/bitrix/templates/inti-v3/js/swiper.min.js';

	script.onload = () => PubSub.publish('swiperJsLoad');

	setTimeout( () => document.head.appendChild(script), Cookies.get('fastLoadScript') ? 0 : 10000);

})(document.querySelectorAll('.swiper-container'));
/*( tooltips => {

	if(tooltips.length){

		Array.from(tooltips, tooltip => {

			const title = document.createElement('span');

			title.className = 'tooltip-title__inner';

			title.textContent = tooltip.getAttribute('title');
			tooltip.appendChild(title);
			tooltip.removeAttribute('title');

		});

	}

})(document.querySelectorAll('.tooltip-title'));
*/
( tooltips => {

	if(tooltips.length){

		const ico = document.createElement('span'),
			  icoAchtung = document.createElement('span');

		ico.innerHTML = '<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M20 12a8 8 0 11-16 0 8 8 0 0116 0zm-5.74-3.87a3.18 3.18 0 01.56 3.78c-.38.7-1 1.22-1.74 1.49a.4.4 0 00-.28.38v.62a.8.8 0 01-1.6 0V12.8A.8.8 0 0112 12c.88 0 1.6-.72 1.6-1.6a1.6 1.6 0 00-3.2 0 .8.8 0 01-1.59.08l-.01-.12c.01-2 1.86-3.55 3.95-3.07.57.13 1.1.42 1.51.84zM12.8 16.8a.8.8 0 11-1.6 0 .8.8 0 011.6 0z"/></svg>';

		icoAchtung.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12"><path fill-rule="evenodd" d="M11 6A5 5 0 1 1 1 6a5 5 0 0 1 10 0ZM5 7V2h2v5H5Zm2.03 1h-2v2H7l.03-2Z"/></svg>';

		let observer = new MutationObserver(mutationRecords => {

			const t = mutationRecords[0].target,
				  inner = t.querySelector('.tooltip-help__inner');

			if(t.open) {

				const rect = inner.getBoundingClientRect();

				if(document.documentElement.clientWidth < rect.right) {

					// левее

					inner.style.marginLeft = document.documentElement.clientWidth - rect.right + 'px';

				} else if(rect.left < 0) {

					// правее

					inner.style.marginLeft = -rect.left + 'px';

				}

			} else {

				inner.removeAttribute('style');

			}

		});

		Array.from(tooltips, tooltip => {

			const btn = tooltip.querySelector('.tooltip-help__btn');

			if ( tooltip.classList.contains('tooltip-help--achtung') ) {

				btn.appendChild(icoAchtung.cloneNode(true));

			} else {

				btn.appendChild(ico.cloneNode(true));

			}

			observer.observe(tooltip, {

				attributes : true

			});

		});

		window.addEventListener("click", event => {

			const target = event.target.closest('.tooltip-help');

			Array.from(tooltips, tooltip => {

				if(target !== tooltip) {

					tooltip.open = false;

				}

			});

		});

	}

})(document.querySelectorAll('.tooltip-help'));
( btns => {

	if( btns.length === 0 ) {

		return;

	}

	if ( Cookies.get('lang') === 'en' ) {

		const ytWidget = document.createElement('div');
		ytWidget.id = 'ytWidget';
		ytWidget.style.display = 'none';

		document.body.appendChild(ytWidget);

		const script = document.createElement('script');
		script.src = "https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=ru&widgetTheme=light&autoMode=false";

		document.head.appendChild(script);

	}

	Array.from(btns, el => {

		el.addEventListener('click', () => {

			localStorage.setItem('yt-widget', JSON.stringify({
				"lang": el.getAttribute('data-lang'),
				"active": true
			}));

			Cookies.set('lang', el.getAttribute('data-lang'));

			location.reload();

		});

	});

})(document.querySelectorAll('.header__lang-btn'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50VXAubWluLmpzIiwianMuY29va2llLm1pbi5qcyIsIm11c3RhY2hlLm1pbi5qcyIsInB1YnN1Yi5taW4uanMiLCJqcy5qcyIsImFjY29yZGlvbi5qcyIsImFjY291bnQuanMiLCJidG4tYmFjay5qcyIsImRhdGFsaXN0LmpzIiwiZG9jcy1pdGVtLmpzIiwiZG9jcy5qcyIsImZhZGUtaW4uanMiLCJmb3JtLXN1Ym1pdC5qcyIsImZvcm0uanMiLCJnZXQtcHJpY2UuanMiLCJpbnNpZ2h0cy5qcyIsImxpdmUtc2VhcmNoLmpzIiwibWFpbi5qcyIsIm1hc2suanMiLCJtZW51LmpzIiwibW9kYWwuanMiLCJub3RpZmljYXRpb24uanMiLCJzZWFyY2guanMiLCJzZWxlY3QuanMiLCJzd2lwZXIuanMiLCJ0b29sdGlwLmpzIiwieWF0cmFuc2xhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUNGQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNob0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGEsbil7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShuKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1uKHJlcXVpcmUsZXhwb3J0cyxtb2R1bGUpOmEuQ291bnRVcD1uKCl9KHRoaXMsZnVuY3Rpb24oYSxuLHQpe3JldHVybiBmdW5jdGlvbihhLG4sdCxlLGkscil7dmFyIHU9dGhpcztpZih1LnZlcnNpb249ZnVuY3Rpb24oKXtyZXR1cm5cIjEuOS4zXCJ9LHUub3B0aW9ucz17dXNlRWFzaW5nOiEwLHVzZUdyb3VwaW5nOiEwLHNlcGFyYXRvcjpcIixcIixkZWNpbWFsOlwiLlwiLGVhc2luZ0ZuOmZ1bmN0aW9uKGEsbix0LGUpe3JldHVybiB0KigxLU1hdGgucG93KDIsLTEwKmEvZSkpKjEwMjQvMTAyMytufSxmb3JtYXR0aW5nRm46ZnVuY3Rpb24oYSl7dmFyIG4sdCxlLGkscixvLHM9YTwwO2lmKGE9TWF0aC5hYnMoYSkudG9GaXhlZCh1LmRlY2ltYWxzKSxuPShhKz1cIlwiKS5zcGxpdChcIi5cIiksdD1uWzBdLGU9MTxuLmxlbmd0aD91Lm9wdGlvbnMuZGVjaW1hbCtuWzFdOlwiXCIsdS5vcHRpb25zLnVzZUdyb3VwaW5nKXtmb3IoaT1cIlwiLHI9MCxvPXQubGVuZ3RoO3I8bzsrK3IpMCE9PXImJnIlMz09MCYmKGk9dS5vcHRpb25zLnNlcGFyYXRvcitpKSxpPXRbby1yLTFdK2k7dD1pfXJldHVybiB1Lm9wdGlvbnMubnVtZXJhbHMubGVuZ3RoJiYodD10LnJlcGxhY2UoL1swLTldL2csZnVuY3Rpb24oYSl7cmV0dXJuIHUub3B0aW9ucy5udW1lcmFsc1srYV19KSxlPWUucmVwbGFjZSgvWzAtOV0vZyxmdW5jdGlvbihhKXtyZXR1cm4gdS5vcHRpb25zLm51bWVyYWxzWythXX0pKSwocz9cIi1cIjpcIlwiKSt1Lm9wdGlvbnMucHJlZml4K3QrZSt1Lm9wdGlvbnMuc3VmZml4fSxwcmVmaXg6XCJcIixzdWZmaXg6XCJcIixudW1lcmFsczpbXX0sciYmXCJvYmplY3RcIj09dHlwZW9mIHIpZm9yKHZhciBvIGluIHUub3B0aW9ucylyLmhhc093blByb3BlcnR5KG8pJiZudWxsIT09cltvXSYmKHUub3B0aW9uc1tvXT1yW29dKTtcIlwiPT09dS5vcHRpb25zLnNlcGFyYXRvcj91Lm9wdGlvbnMudXNlR3JvdXBpbmc9ITE6dS5vcHRpb25zLnNlcGFyYXRvcj1cIlwiK3Uub3B0aW9ucy5zZXBhcmF0b3I7Zm9yKHZhciBzPTAsbD1bXCJ3ZWJraXRcIixcIm1velwiLFwibXNcIixcIm9cIl0sbT0wO208bC5sZW5ndGgmJiF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOysrbSl3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lPXdpbmRvd1tsW21dK1wiUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdLHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZT13aW5kb3dbbFttXStcIkNhbmNlbEFuaW1hdGlvbkZyYW1lXCJdfHx3aW5kb3dbbFttXStcIkNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtmdW5jdGlvbiBkKGEpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBhJiYhaXNOYU4oYSl9d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oYSxuKXt2YXIgdD0obmV3IERhdGUpLmdldFRpbWUoKSxlPU1hdGgubWF4KDAsMTYtKHQtcykpLGk9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXthKHQrZSl9LGUpO3JldHVybiBzPXQrZSxpfSksd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lfHwod2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lPWZ1bmN0aW9uKGEpe2NsZWFyVGltZW91dChhKX0pLHUuaW5pdGlhbGl6ZT1mdW5jdGlvbigpe3JldHVybiEhdS5pbml0aWFsaXplZHx8KHUuZXJyb3I9XCJcIix1LmQ9XCJzdHJpbmdcIj09dHlwZW9mIGE/ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYSk6YSx1LmQ/KHUuc3RhcnRWYWw9TnVtYmVyKG4pLHUuZW5kVmFsPU51bWJlcih0KSxkKHUuc3RhcnRWYWwpJiZkKHUuZW5kVmFsKT8odS5kZWNpbWFscz1NYXRoLm1heCgwLGV8fDApLHUuZGVjPU1hdGgucG93KDEwLHUuZGVjaW1hbHMpLHUuZHVyYXRpb249MWUzKk51bWJlcihpKXx8MmUzLHUuY291bnREb3duPXUuc3RhcnRWYWw+dS5lbmRWYWwsdS5mcmFtZVZhbD11LnN0YXJ0VmFsLHUuaW5pdGlhbGl6ZWQ9ITApOih1LmVycm9yPVwiW0NvdW50VXBdIHN0YXJ0VmFsIChcIituK1wiKSBvciBlbmRWYWwgKFwiK3QrXCIpIGlzIG5vdCBhIG51bWJlclwiLCExKSk6ISh1LmVycm9yPVwiW0NvdW50VXBdIHRhcmdldCBpcyBudWxsIG9yIHVuZGVmaW5lZFwiKSl9LHUucHJpbnRWYWx1ZT1mdW5jdGlvbihhKXt2YXIgbj11Lm9wdGlvbnMuZm9ybWF0dGluZ0ZuKGEpO1wiSU5QVVRcIj09PXUuZC50YWdOYW1lP3RoaXMuZC52YWx1ZT1uOlwidGV4dFwiPT09dS5kLnRhZ05hbWV8fFwidHNwYW5cIj09PXUuZC50YWdOYW1lP3RoaXMuZC50ZXh0Q29udGVudD1uOnRoaXMuZC5pbm5lckhUTUw9bn0sdS5jb3VudD1mdW5jdGlvbihhKXt1LnN0YXJ0VGltZXx8KHUuc3RhcnRUaW1lPWEpO3ZhciBuPSh1LnRpbWVzdGFtcD1hKS11LnN0YXJ0VGltZTt1LnJlbWFpbmluZz11LmR1cmF0aW9uLW4sdS5vcHRpb25zLnVzZUVhc2luZz91LmNvdW50RG93bj91LmZyYW1lVmFsPXUuc3RhcnRWYWwtdS5vcHRpb25zLmVhc2luZ0ZuKG4sMCx1LnN0YXJ0VmFsLXUuZW5kVmFsLHUuZHVyYXRpb24pOnUuZnJhbWVWYWw9dS5vcHRpb25zLmVhc2luZ0ZuKG4sdS5zdGFydFZhbCx1LmVuZFZhbC11LnN0YXJ0VmFsLHUuZHVyYXRpb24pOnUuY291bnREb3duP3UuZnJhbWVWYWw9dS5zdGFydFZhbC0odS5zdGFydFZhbC11LmVuZFZhbCkqKG4vdS5kdXJhdGlvbik6dS5mcmFtZVZhbD11LnN0YXJ0VmFsKyh1LmVuZFZhbC11LnN0YXJ0VmFsKSoobi91LmR1cmF0aW9uKSx1LmNvdW50RG93bj91LmZyYW1lVmFsPXUuZnJhbWVWYWw8dS5lbmRWYWw/dS5lbmRWYWw6dS5mcmFtZVZhbDp1LmZyYW1lVmFsPXUuZnJhbWVWYWw+dS5lbmRWYWw/dS5lbmRWYWw6dS5mcmFtZVZhbCx1LmZyYW1lVmFsPU1hdGgucm91bmQodS5mcmFtZVZhbCp1LmRlYykvdS5kZWMsdS5wcmludFZhbHVlKHUuZnJhbWVWYWwpLG48dS5kdXJhdGlvbj91LnJBRj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodS5jb3VudCk6dS5jYWxsYmFjayYmdS5jYWxsYmFjaygpfSx1LnN0YXJ0PWZ1bmN0aW9uKGEpe3UuaW5pdGlhbGl6ZSgpJiYodS5jYWxsYmFjaz1hLHUuckFGPXJlcXVlc3RBbmltYXRpb25GcmFtZSh1LmNvdW50KSl9LHUucGF1c2VSZXN1bWU9ZnVuY3Rpb24oKXt1LnBhdXNlZD8odS5wYXVzZWQ9ITEsZGVsZXRlIHUuc3RhcnRUaW1lLHUuZHVyYXRpb249dS5yZW1haW5pbmcsdS5zdGFydFZhbD11LmZyYW1lVmFsLHJlcXVlc3RBbmltYXRpb25GcmFtZSh1LmNvdW50KSk6KHUucGF1c2VkPSEwLGNhbmNlbEFuaW1hdGlvbkZyYW1lKHUuckFGKSl9LHUucmVzZXQ9ZnVuY3Rpb24oKXt1LnBhdXNlZD0hMSxkZWxldGUgdS5zdGFydFRpbWUsdS5pbml0aWFsaXplZD0hMSx1LmluaXRpYWxpemUoKSYmKGNhbmNlbEFuaW1hdGlvbkZyYW1lKHUuckFGKSx1LnByaW50VmFsdWUodS5zdGFydFZhbCkpfSx1LnVwZGF0ZT1mdW5jdGlvbihhKXt1LmluaXRpYWxpemUoKSYmKGQoYT1OdW1iZXIoYSkpPyh1LmVycm9yPVwiXCIsYSE9PXUuZnJhbWVWYWwmJihjYW5jZWxBbmltYXRpb25GcmFtZSh1LnJBRiksdS5wYXVzZWQ9ITEsZGVsZXRlIHUuc3RhcnRUaW1lLHUuc3RhcnRWYWw9dS5mcmFtZVZhbCx1LmVuZFZhbD1hLHUuY291bnREb3duPXUuc3RhcnRWYWw+dS5lbmRWYWwsdS5yQUY9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUuY291bnQpKSk6dS5lcnJvcj1cIltDb3VudFVwXSB1cGRhdGUoKSAtIG5ldyBlbmRWYWwgaXMgbm90IGEgbnVtYmVyOiBcIithKX0sdS5pbml0aWFsaXplKCkmJnUucHJpbnRWYWx1ZSh1LnN0YXJ0VmFsKX19KTsiLCIvKiEganMtY29va2llIHYzLjAuMC1yYy4xIHwgTUlUICovXG4hZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1lfHxzZWxmLGZ1bmN0aW9uKCl7dmFyIG49ZS5Db29raWVzLHI9ZS5Db29raWVzPXQoKTtyLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gZS5Db29raWVzPW4scn19KCkpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciByIGluIG4pZVtyXT1uW3JdfXJldHVybiBlfXZhciB0PXtyZWFkOmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoLyglW1xcZEEtRl17Mn0pKy9naSxkZWNvZGVVUklDb21wb25lbnQpfSx3cml0ZTpmdW5jdGlvbihlKXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGUpLnJlcGxhY2UoLyUoMlszNDZCRl18M1tBQy1GXXw0MHw1W0JERV18NjB8N1tCQ0RdKS9nLGRlY29kZVVSSUNvbXBvbmVudCl9fTtyZXR1cm4gZnVuY3Rpb24gbihyLG8pe2Z1bmN0aW9uIGkodCxuLGkpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCl7XCJudW1iZXJcIj09dHlwZW9mKGk9ZSh7fSxvLGkpKS5leHBpcmVzJiYoaS5leHBpcmVzPW5ldyBEYXRlKERhdGUubm93KCkrODY0ZTUqaS5leHBpcmVzKSksaS5leHBpcmVzJiYoaS5leHBpcmVzPWkuZXhwaXJlcy50b1VUQ1N0cmluZygpKSx0PWVuY29kZVVSSUNvbXBvbmVudCh0KS5yZXBsYWNlKC8lKDJbMzQ2Ql18NUV8NjB8N0MpL2csZGVjb2RlVVJJQ29tcG9uZW50KS5yZXBsYWNlKC9bKCldL2csZXNjYXBlKSxuPXIud3JpdGUobix0KTt2YXIgYz1cIlwiO2Zvcih2YXIgdSBpbiBpKWlbdV0mJihjKz1cIjsgXCIrdSwhMCE9PWlbdV0mJihjKz1cIj1cIitpW3VdLnNwbGl0KFwiO1wiKVswXSkpO3JldHVybiBkb2N1bWVudC5jb29raWU9dCtcIj1cIituK2N9fXJldHVybiBPYmplY3QuY3JlYXRlKHtzZXQ6aSxnZXQ6ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50JiYoIWFyZ3VtZW50cy5sZW5ndGh8fGUpKXtmb3IodmFyIG49ZG9jdW1lbnQuY29va2llP2RvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpOltdLG89e30saT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgYz1uW2ldLnNwbGl0KFwiPVwiKSx1PWMuc2xpY2UoMSkuam9pbihcIj1cIik7J1wiJz09PXVbMF0mJih1PXUuc2xpY2UoMSwtMSkpO3RyeXt2YXIgZj10LnJlYWQoY1swXSk7aWYob1tmXT1yLnJlYWQodSxmKSxlPT09ZilicmVha31jYXRjaChlKXt9fXJldHVybiBlP29bZV06b319LHJlbW92ZTpmdW5jdGlvbih0LG4pe2kodCxcIlwiLGUoe30sbix7ZXhwaXJlczotMX0pKX0sd2l0aEF0dHJpYnV0ZXM6ZnVuY3Rpb24odCl7cmV0dXJuIG4odGhpcy5jb252ZXJ0ZXIsZSh7fSx0aGlzLmF0dHJpYnV0ZXMsdCkpfSx3aXRoQ29udmVydGVyOmZ1bmN0aW9uKHQpe3JldHVybiBuKGUoe30sdGhpcy5jb252ZXJ0ZXIsdCksdGhpcy5hdHRyaWJ1dGVzKX19LHthdHRyaWJ1dGVzOnt2YWx1ZTpPYmplY3QuZnJlZXplKG8pfSxjb252ZXJ0ZXI6e3ZhbHVlOk9iamVjdC5mcmVlemUocil9fSl9KHQse3BhdGg6XCIvXCJ9KX0pO1xuIiwiKGZ1bmN0aW9uIGRlZmluZU11c3RhY2hlKGdsb2JhbCxmYWN0b3J5KXtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJmV4cG9ydHMmJnR5cGVvZiBleHBvcnRzLm5vZGVOYW1lIT09XCJzdHJpbmdcIil7ZmFjdG9yeShleHBvcnRzKX1lbHNlIGlmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShbXCJleHBvcnRzXCJdLGZhY3RvcnkpfWVsc2V7Z2xvYmFsLk11c3RhY2hlPXt9O2ZhY3RvcnkoZ2xvYmFsLk11c3RhY2hlKX19KSh0aGlzLGZ1bmN0aW9uIG11c3RhY2hlRmFjdG9yeShtdXN0YWNoZSl7dmFyIG9iamVjdFRvU3RyaW5nPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7dmFyIGlzQXJyYXk9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24gaXNBcnJheVBvbHlmaWxsKG9iamVjdCl7cmV0dXJuIG9iamVjdFRvU3RyaW5nLmNhbGwob2JqZWN0KT09PVwiW29iamVjdCBBcnJheV1cIn07ZnVuY3Rpb24gaXNGdW5jdGlvbihvYmplY3Qpe3JldHVybiB0eXBlb2Ygb2JqZWN0PT09XCJmdW5jdGlvblwifWZ1bmN0aW9uIHR5cGVTdHIob2JqKXtyZXR1cm4gaXNBcnJheShvYmopP1wiYXJyYXlcIjp0eXBlb2Ygb2JqfWZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHJpbmcpe3JldHVybiBzdHJpbmcucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csXCJcXFxcJCZcIil9ZnVuY3Rpb24gaGFzUHJvcGVydHkob2JqLHByb3BOYW1lKXtyZXR1cm4gb2JqIT1udWxsJiZ0eXBlb2Ygb2JqPT09XCJvYmplY3RcIiYmcHJvcE5hbWUgaW4gb2JqfXZhciByZWdFeHBUZXN0PVJlZ0V4cC5wcm90b3R5cGUudGVzdDtmdW5jdGlvbiB0ZXN0UmVnRXhwKHJlLHN0cmluZyl7cmV0dXJuIHJlZ0V4cFRlc3QuY2FsbChyZSxzdHJpbmcpfXZhciBub25TcGFjZVJlPS9cXFMvO2Z1bmN0aW9uIGlzV2hpdGVzcGFjZShzdHJpbmcpe3JldHVybiF0ZXN0UmVnRXhwKG5vblNwYWNlUmUsc3RyaW5nKX12YXIgZW50aXR5TWFwPXtcIiZcIjpcIiZhbXA7XCIsXCI8XCI6XCImbHQ7XCIsXCI+XCI6XCImZ3Q7XCIsJ1wiJzpcIiZxdW90O1wiLFwiJ1wiOlwiJiMzOTtcIixcIi9cIjpcIiYjeDJGO1wiLFwiYFwiOlwiJiN4NjA7XCIsXCI9XCI6XCImI3gzRDtcIn07ZnVuY3Rpb24gZXNjYXBlSHRtbChzdHJpbmcpe3JldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKC9bJjw+XCInYD1cXC9dL2csZnVuY3Rpb24gZnJvbUVudGl0eU1hcChzKXtyZXR1cm4gZW50aXR5TWFwW3NdfSl9dmFyIHdoaXRlUmU9L1xccyovO3ZhciBzcGFjZVJlPS9cXHMrLzt2YXIgZXF1YWxzUmU9L1xccyo9Lzt2YXIgY3VybHlSZT0vXFxzKlxcfS87dmFyIHRhZ1JlPS8jfFxcXnxcXC98PnxcXHt8Jnw9fCEvO2Z1bmN0aW9uIHBhcnNlVGVtcGxhdGUodGVtcGxhdGUsdGFncyl7aWYoIXRlbXBsYXRlKXJldHVybltdO3ZhciBzZWN0aW9ucz1bXTt2YXIgdG9rZW5zPVtdO3ZhciBzcGFjZXM9W107dmFyIGhhc1RhZz1mYWxzZTt2YXIgbm9uU3BhY2U9ZmFsc2U7ZnVuY3Rpb24gc3RyaXBTcGFjZSgpe2lmKGhhc1RhZyYmIW5vblNwYWNlKXt3aGlsZShzcGFjZXMubGVuZ3RoKWRlbGV0ZSB0b2tlbnNbc3BhY2VzLnBvcCgpXX1lbHNle3NwYWNlcz1bXX1oYXNUYWc9ZmFsc2U7bm9uU3BhY2U9ZmFsc2V9dmFyIG9wZW5pbmdUYWdSZSxjbG9zaW5nVGFnUmUsY2xvc2luZ0N1cmx5UmU7ZnVuY3Rpb24gY29tcGlsZVRhZ3ModGFnc1RvQ29tcGlsZSl7aWYodHlwZW9mIHRhZ3NUb0NvbXBpbGU9PT1cInN0cmluZ1wiKXRhZ3NUb0NvbXBpbGU9dGFnc1RvQ29tcGlsZS5zcGxpdChzcGFjZVJlLDIpO2lmKCFpc0FycmF5KHRhZ3NUb0NvbXBpbGUpfHx0YWdzVG9Db21waWxlLmxlbmd0aCE9PTIpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB0YWdzOiBcIit0YWdzVG9Db21waWxlKTtvcGVuaW5nVGFnUmU9bmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVswXSkrXCJcXFxccypcIik7Y2xvc2luZ1RhZ1JlPW5ldyBSZWdFeHAoXCJcXFxccypcIitlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVsxXSkpO2Nsb3NpbmdDdXJseVJlPW5ldyBSZWdFeHAoXCJcXFxccypcIitlc2NhcGVSZWdFeHAoXCJ9XCIrdGFnc1RvQ29tcGlsZVsxXSkpfWNvbXBpbGVUYWdzKHRhZ3N8fG11c3RhY2hlLnRhZ3MpO3ZhciBzY2FubmVyPW5ldyBTY2FubmVyKHRlbXBsYXRlKTt2YXIgc3RhcnQsdHlwZSx2YWx1ZSxjaHIsdG9rZW4sb3BlblNlY3Rpb247d2hpbGUoIXNjYW5uZXIuZW9zKCkpe3N0YXJ0PXNjYW5uZXIucG9zO3ZhbHVlPXNjYW5uZXIuc2NhblVudGlsKG9wZW5pbmdUYWdSZSk7aWYodmFsdWUpe2Zvcih2YXIgaT0wLHZhbHVlTGVuZ3RoPXZhbHVlLmxlbmd0aDtpPHZhbHVlTGVuZ3RoOysraSl7Y2hyPXZhbHVlLmNoYXJBdChpKTtpZihpc1doaXRlc3BhY2UoY2hyKSl7c3BhY2VzLnB1c2godG9rZW5zLmxlbmd0aCl9ZWxzZXtub25TcGFjZT10cnVlfXRva2Vucy5wdXNoKFtcInRleHRcIixjaHIsc3RhcnQsc3RhcnQrMV0pO3N0YXJ0Kz0xO2lmKGNocj09PVwiXFxuXCIpc3RyaXBTcGFjZSgpfX1pZighc2Nhbm5lci5zY2FuKG9wZW5pbmdUYWdSZSkpYnJlYWs7aGFzVGFnPXRydWU7dHlwZT1zY2FubmVyLnNjYW4odGFnUmUpfHxcIm5hbWVcIjtzY2FubmVyLnNjYW4od2hpdGVSZSk7aWYodHlwZT09PVwiPVwiKXt2YWx1ZT1zY2FubmVyLnNjYW5VbnRpbChlcXVhbHNSZSk7c2Nhbm5lci5zY2FuKGVxdWFsc1JlKTtzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nVGFnUmUpfWVsc2UgaWYodHlwZT09PVwie1wiKXt2YWx1ZT1zY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nQ3VybHlSZSk7c2Nhbm5lci5zY2FuKGN1cmx5UmUpO3NjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7dHlwZT1cIiZcIn1lbHNle3ZhbHVlPXNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSl9aWYoIXNjYW5uZXIuc2NhbihjbG9zaW5nVGFnUmUpKXRocm93IG5ldyBFcnJvcihcIlVuY2xvc2VkIHRhZyBhdCBcIitzY2FubmVyLnBvcyk7dG9rZW49W3R5cGUsdmFsdWUsc3RhcnQsc2Nhbm5lci5wb3NdO3Rva2Vucy5wdXNoKHRva2VuKTtpZih0eXBlPT09XCIjXCJ8fHR5cGU9PT1cIl5cIil7c2VjdGlvbnMucHVzaCh0b2tlbil9ZWxzZSBpZih0eXBlPT09XCIvXCIpe29wZW5TZWN0aW9uPXNlY3Rpb25zLnBvcCgpO2lmKCFvcGVuU2VjdGlvbil0aHJvdyBuZXcgRXJyb3IoJ1Vub3BlbmVkIHNlY3Rpb24gXCInK3ZhbHVlKydcIiBhdCAnK3N0YXJ0KTtpZihvcGVuU2VjdGlvblsxXSE9PXZhbHVlKXRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicrb3BlblNlY3Rpb25bMV0rJ1wiIGF0ICcrc3RhcnQpfWVsc2UgaWYodHlwZT09PVwibmFtZVwifHx0eXBlPT09XCJ7XCJ8fHR5cGU9PT1cIiZcIil7bm9uU3BhY2U9dHJ1ZX1lbHNlIGlmKHR5cGU9PT1cIj1cIil7Y29tcGlsZVRhZ3ModmFsdWUpfX1vcGVuU2VjdGlvbj1zZWN0aW9ucy5wb3AoKTtpZihvcGVuU2VjdGlvbil0aHJvdyBuZXcgRXJyb3IoJ1VuY2xvc2VkIHNlY3Rpb24gXCInK29wZW5TZWN0aW9uWzFdKydcIiBhdCAnK3NjYW5uZXIucG9zKTtyZXR1cm4gbmVzdFRva2VucyhzcXVhc2hUb2tlbnModG9rZW5zKSl9ZnVuY3Rpb24gc3F1YXNoVG9rZW5zKHRva2Vucyl7dmFyIHNxdWFzaGVkVG9rZW5zPVtdO3ZhciB0b2tlbixsYXN0VG9rZW47Zm9yKHZhciBpPTAsbnVtVG9rZW5zPXRva2Vucy5sZW5ndGg7aTxudW1Ub2tlbnM7KytpKXt0b2tlbj10b2tlbnNbaV07aWYodG9rZW4pe2lmKHRva2VuWzBdPT09XCJ0ZXh0XCImJmxhc3RUb2tlbiYmbGFzdFRva2VuWzBdPT09XCJ0ZXh0XCIpe2xhc3RUb2tlblsxXSs9dG9rZW5bMV07bGFzdFRva2VuWzNdPXRva2VuWzNdfWVsc2V7c3F1YXNoZWRUb2tlbnMucHVzaCh0b2tlbik7bGFzdFRva2VuPXRva2VufX19cmV0dXJuIHNxdWFzaGVkVG9rZW5zfWZ1bmN0aW9uIG5lc3RUb2tlbnModG9rZW5zKXt2YXIgbmVzdGVkVG9rZW5zPVtdO3ZhciBjb2xsZWN0b3I9bmVzdGVkVG9rZW5zO3ZhciBzZWN0aW9ucz1bXTt2YXIgdG9rZW4sc2VjdGlvbjtmb3IodmFyIGk9MCxudW1Ub2tlbnM9dG9rZW5zLmxlbmd0aDtpPG51bVRva2VuczsrK2kpe3Rva2VuPXRva2Vuc1tpXTtzd2l0Y2godG9rZW5bMF0pe2Nhc2VcIiNcIjpjYXNlXCJeXCI6Y29sbGVjdG9yLnB1c2godG9rZW4pO3NlY3Rpb25zLnB1c2godG9rZW4pO2NvbGxlY3Rvcj10b2tlbls0XT1bXTticmVhaztjYXNlXCIvXCI6c2VjdGlvbj1zZWN0aW9ucy5wb3AoKTtzZWN0aW9uWzVdPXRva2VuWzJdO2NvbGxlY3Rvcj1zZWN0aW9ucy5sZW5ndGg+MD9zZWN0aW9uc1tzZWN0aW9ucy5sZW5ndGgtMV1bNF06bmVzdGVkVG9rZW5zO2JyZWFrO2RlZmF1bHQ6Y29sbGVjdG9yLnB1c2godG9rZW4pfX1yZXR1cm4gbmVzdGVkVG9rZW5zfWZ1bmN0aW9uIFNjYW5uZXIoc3RyaW5nKXt0aGlzLnN0cmluZz1zdHJpbmc7dGhpcy50YWlsPXN0cmluZzt0aGlzLnBvcz0wfVNjYW5uZXIucHJvdG90eXBlLmVvcz1mdW5jdGlvbiBlb3MoKXtyZXR1cm4gdGhpcy50YWlsPT09XCJcIn07U2Nhbm5lci5wcm90b3R5cGUuc2Nhbj1mdW5jdGlvbiBzY2FuKHJlKXt2YXIgbWF0Y2g9dGhpcy50YWlsLm1hdGNoKHJlKTtpZighbWF0Y2h8fG1hdGNoLmluZGV4IT09MClyZXR1cm5cIlwiO3ZhciBzdHJpbmc9bWF0Y2hbMF07dGhpcy50YWlsPXRoaXMudGFpbC5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCk7dGhpcy5wb3MrPXN0cmluZy5sZW5ndGg7cmV0dXJuIHN0cmluZ307U2Nhbm5lci5wcm90b3R5cGUuc2NhblVudGlsPWZ1bmN0aW9uIHNjYW5VbnRpbChyZSl7dmFyIGluZGV4PXRoaXMudGFpbC5zZWFyY2gocmUpLG1hdGNoO3N3aXRjaChpbmRleCl7Y2FzZS0xOm1hdGNoPXRoaXMudGFpbDt0aGlzLnRhaWw9XCJcIjticmVhaztjYXNlIDA6bWF0Y2g9XCJcIjticmVhaztkZWZhdWx0Om1hdGNoPXRoaXMudGFpbC5zdWJzdHJpbmcoMCxpbmRleCk7dGhpcy50YWlsPXRoaXMudGFpbC5zdWJzdHJpbmcoaW5kZXgpfXRoaXMucG9zKz1tYXRjaC5sZW5ndGg7cmV0dXJuIG1hdGNofTtmdW5jdGlvbiBDb250ZXh0KHZpZXcscGFyZW50Q29udGV4dCl7dGhpcy52aWV3PXZpZXc7dGhpcy5jYWNoZT17XCIuXCI6dGhpcy52aWV3fTt0aGlzLnBhcmVudD1wYXJlbnRDb250ZXh0fUNvbnRleHQucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24gcHVzaCh2aWV3KXtyZXR1cm4gbmV3IENvbnRleHQodmlldyx0aGlzKX07Q29udGV4dC5wcm90b3R5cGUubG9va3VwPWZ1bmN0aW9uIGxvb2t1cChuYW1lKXt2YXIgY2FjaGU9dGhpcy5jYWNoZTt2YXIgdmFsdWU7aWYoY2FjaGUuaGFzT3duUHJvcGVydHkobmFtZSkpe3ZhbHVlPWNhY2hlW25hbWVdfWVsc2V7dmFyIGNvbnRleHQ9dGhpcyxuYW1lcyxpbmRleCxsb29rdXBIaXQ9ZmFsc2U7d2hpbGUoY29udGV4dCl7aWYobmFtZS5pbmRleE9mKFwiLlwiKT4wKXt2YWx1ZT1jb250ZXh0LnZpZXc7bmFtZXM9bmFtZS5zcGxpdChcIi5cIik7aW5kZXg9MDt3aGlsZSh2YWx1ZSE9bnVsbCYmaW5kZXg8bmFtZXMubGVuZ3RoKXtpZihpbmRleD09PW5hbWVzLmxlbmd0aC0xKWxvb2t1cEhpdD1oYXNQcm9wZXJ0eSh2YWx1ZSxuYW1lc1tpbmRleF0pO3ZhbHVlPXZhbHVlW25hbWVzW2luZGV4KytdXX19ZWxzZXt2YWx1ZT1jb250ZXh0LnZpZXdbbmFtZV07bG9va3VwSGl0PWhhc1Byb3BlcnR5KGNvbnRleHQudmlldyxuYW1lKX1pZihsb29rdXBIaXQpYnJlYWs7Y29udGV4dD1jb250ZXh0LnBhcmVudH1jYWNoZVtuYW1lXT12YWx1ZX1pZihpc0Z1bmN0aW9uKHZhbHVlKSl2YWx1ZT12YWx1ZS5jYWxsKHRoaXMudmlldyk7cmV0dXJuIHZhbHVlfTtmdW5jdGlvbiBXcml0ZXIoKXt0aGlzLmNhY2hlPXt9fVdyaXRlci5wcm90b3R5cGUuY2xlYXJDYWNoZT1mdW5jdGlvbiBjbGVhckNhY2hlKCl7dGhpcy5jYWNoZT17fX07V3JpdGVyLnByb3RvdHlwZS5wYXJzZT1mdW5jdGlvbiBwYXJzZSh0ZW1wbGF0ZSx0YWdzKXt2YXIgY2FjaGU9dGhpcy5jYWNoZTt2YXIgdG9rZW5zPWNhY2hlW3RlbXBsYXRlXTtpZih0b2tlbnM9PW51bGwpdG9rZW5zPWNhY2hlW3RlbXBsYXRlXT1wYXJzZVRlbXBsYXRlKHRlbXBsYXRlLHRhZ3MpO3JldHVybiB0b2tlbnN9O1dyaXRlci5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uIHJlbmRlcih0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzKXt2YXIgdG9rZW5zPXRoaXMucGFyc2UodGVtcGxhdGUpO3ZhciBjb250ZXh0PXZpZXcgaW5zdGFuY2VvZiBDb250ZXh0P3ZpZXc6bmV3IENvbnRleHQodmlldyk7cmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRva2Vucyxjb250ZXh0LHBhcnRpYWxzLHRlbXBsYXRlKX07V3JpdGVyLnByb3RvdHlwZS5yZW5kZXJUb2tlbnM9ZnVuY3Rpb24gcmVuZGVyVG9rZW5zKHRva2Vucyxjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpe3ZhciBidWZmZXI9XCJcIjt2YXIgdG9rZW4sc3ltYm9sLHZhbHVlO2Zvcih2YXIgaT0wLG51bVRva2Vucz10b2tlbnMubGVuZ3RoO2k8bnVtVG9rZW5zOysraSl7dmFsdWU9dW5kZWZpbmVkO3Rva2VuPXRva2Vuc1tpXTtzeW1ib2w9dG9rZW5bMF07aWYoc3ltYm9sPT09XCIjXCIpdmFsdWU9dGhpcy5yZW5kZXJTZWN0aW9uKHRva2VuLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSk7ZWxzZSBpZihzeW1ib2w9PT1cIl5cIil2YWx1ZT10aGlzLnJlbmRlckludmVydGVkKHRva2VuLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSk7ZWxzZSBpZihzeW1ib2w9PT1cIj5cIil2YWx1ZT10aGlzLnJlbmRlclBhcnRpYWwodG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKTtlbHNlIGlmKHN5bWJvbD09PVwiJlwiKXZhbHVlPXRoaXMudW5lc2NhcGVkVmFsdWUodG9rZW4sY29udGV4dCk7ZWxzZSBpZihzeW1ib2w9PT1cIm5hbWVcIil2YWx1ZT10aGlzLmVzY2FwZWRWYWx1ZSh0b2tlbixjb250ZXh0KTtlbHNlIGlmKHN5bWJvbD09PVwidGV4dFwiKXZhbHVlPXRoaXMucmF3VmFsdWUodG9rZW4pO2lmKHZhbHVlIT09dW5kZWZpbmVkKWJ1ZmZlcis9dmFsdWV9cmV0dXJuIGJ1ZmZlcn07V3JpdGVyLnByb3RvdHlwZS5yZW5kZXJTZWN0aW9uPWZ1bmN0aW9uIHJlbmRlclNlY3Rpb24odG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKXt2YXIgc2VsZj10aGlzO3ZhciBidWZmZXI9XCJcIjt2YXIgdmFsdWU9Y29udGV4dC5sb29rdXAodG9rZW5bMV0pO2Z1bmN0aW9uIHN1YlJlbmRlcih0ZW1wbGF0ZSl7cmV0dXJuIHNlbGYucmVuZGVyKHRlbXBsYXRlLGNvbnRleHQscGFydGlhbHMpfWlmKCF2YWx1ZSlyZXR1cm47aWYoaXNBcnJheSh2YWx1ZSkpe2Zvcih2YXIgaj0wLHZhbHVlTGVuZ3RoPXZhbHVlLmxlbmd0aDtqPHZhbHVlTGVuZ3RoOysrail7YnVmZmVyKz10aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSxjb250ZXh0LnB1c2godmFsdWVbal0pLHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpfX1lbHNlIGlmKHR5cGVvZiB2YWx1ZT09PVwib2JqZWN0XCJ8fHR5cGVvZiB2YWx1ZT09PVwic3RyaW5nXCJ8fHR5cGVvZiB2YWx1ZT09PVwibnVtYmVyXCIpe2J1ZmZlcis9dGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sY29udGV4dC5wdXNoKHZhbHVlKSxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKX1lbHNlIGlmKGlzRnVuY3Rpb24odmFsdWUpKXtpZih0eXBlb2Ygb3JpZ2luYWxUZW1wbGF0ZSE9PVwic3RyaW5nXCIpdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHVzZSBoaWdoZXItb3JkZXIgc2VjdGlvbnMgd2l0aG91dCB0aGUgb3JpZ2luYWwgdGVtcGxhdGVcIik7dmFsdWU9dmFsdWUuY2FsbChjb250ZXh0LnZpZXcsb3JpZ2luYWxUZW1wbGF0ZS5zbGljZSh0b2tlblszXSx0b2tlbls1XSksc3ViUmVuZGVyKTtpZih2YWx1ZSE9bnVsbClidWZmZXIrPXZhbHVlfWVsc2V7YnVmZmVyKz10aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSxjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpfXJldHVybiBidWZmZXJ9O1dyaXRlci5wcm90b3R5cGUucmVuZGVySW52ZXJ0ZWQ9ZnVuY3Rpb24gcmVuZGVySW52ZXJ0ZWQodG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKXt2YXIgdmFsdWU9Y29udGV4dC5sb29rdXAodG9rZW5bMV0pO2lmKCF2YWx1ZXx8aXNBcnJheSh2YWx1ZSkmJnZhbHVlLmxlbmd0aD09PTApcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl9O1dyaXRlci5wcm90b3R5cGUucmVuZGVyUGFydGlhbD1mdW5jdGlvbiByZW5kZXJQYXJ0aWFsKHRva2VuLGNvbnRleHQscGFydGlhbHMpe2lmKCFwYXJ0aWFscylyZXR1cm47dmFyIHZhbHVlPWlzRnVuY3Rpb24ocGFydGlhbHMpP3BhcnRpYWxzKHRva2VuWzFdKTpwYXJ0aWFsc1t0b2tlblsxXV07aWYodmFsdWUhPW51bGwpcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRoaXMucGFyc2UodmFsdWUpLGNvbnRleHQscGFydGlhbHMsdmFsdWUpfTtXcml0ZXIucHJvdG90eXBlLnVuZXNjYXBlZFZhbHVlPWZ1bmN0aW9uIHVuZXNjYXBlZFZhbHVlKHRva2VuLGNvbnRleHQpe3ZhciB2YWx1ZT1jb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7aWYodmFsdWUhPW51bGwpcmV0dXJuIHZhbHVlfTtXcml0ZXIucHJvdG90eXBlLmVzY2FwZWRWYWx1ZT1mdW5jdGlvbiBlc2NhcGVkVmFsdWUodG9rZW4sY29udGV4dCl7dmFyIHZhbHVlPWNvbnRleHQubG9va3VwKHRva2VuWzFdKTtpZih2YWx1ZSE9bnVsbClyZXR1cm4gbXVzdGFjaGUuZXNjYXBlKHZhbHVlKX07V3JpdGVyLnByb3RvdHlwZS5yYXdWYWx1ZT1mdW5jdGlvbiByYXdWYWx1ZSh0b2tlbil7cmV0dXJuIHRva2VuWzFdfTttdXN0YWNoZS5uYW1lPVwibXVzdGFjaGUuanNcIjttdXN0YWNoZS52ZXJzaW9uPVwiMi4zLjBcIjttdXN0YWNoZS50YWdzPVtcIjwlXCIsXCIlPlwiXTt2YXIgZGVmYXVsdFdyaXRlcj1uZXcgV3JpdGVyO211c3RhY2hlLmNsZWFyQ2FjaGU9ZnVuY3Rpb24gY2xlYXJDYWNoZSgpe3JldHVybiBkZWZhdWx0V3JpdGVyLmNsZWFyQ2FjaGUoKX07bXVzdGFjaGUucGFyc2U9ZnVuY3Rpb24gcGFyc2UodGVtcGxhdGUsdGFncyl7cmV0dXJuIGRlZmF1bHRXcml0ZXIucGFyc2UodGVtcGxhdGUsdGFncyl9O211c3RhY2hlLnJlbmRlcj1mdW5jdGlvbiByZW5kZXIodGVtcGxhdGUsdmlldyxwYXJ0aWFscyl7aWYodHlwZW9mIHRlbXBsYXRlIT09XCJzdHJpbmdcIil7dGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCB0ZW1wbGF0ZSEgVGVtcGxhdGUgc2hvdWxkIGJlIGEgXCJzdHJpbmdcIiAnKydidXQgXCInK3R5cGVTdHIodGVtcGxhdGUpKydcIiB3YXMgZ2l2ZW4gYXMgdGhlIGZpcnN0ICcrXCJhcmd1bWVudCBmb3IgbXVzdGFjaGUjcmVuZGVyKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscylcIil9cmV0dXJuIGRlZmF1bHRXcml0ZXIucmVuZGVyKHRlbXBsYXRlLHZpZXcscGFydGlhbHMpfTttdXN0YWNoZS50b19odG1sPWZ1bmN0aW9uIHRvX2h0bWwodGVtcGxhdGUsdmlldyxwYXJ0aWFscyxzZW5kKXt2YXIgcmVzdWx0PW11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzKTtpZihpc0Z1bmN0aW9uKHNlbmQpKXtzZW5kKHJlc3VsdCl9ZWxzZXtyZXR1cm4gcmVzdWx0fX07bXVzdGFjaGUuZXNjYXBlPWVzY2FwZUh0bWw7bXVzdGFjaGUuU2Nhbm5lcj1TY2FubmVyO211c3RhY2hlLkNvbnRleHQ9Q29udGV4dDttdXN0YWNoZS5Xcml0ZXI9V3JpdGVyO3JldHVybiBtdXN0YWNoZX0pOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLDIwMTEsMjAxMiwyMDEzLDIwMTQgTW9yZ2FuIFJvZGVyaWNrIGh0dHA6Ly9yb2Rlcmljay5ka1xuICogTGljZW5zZTogTUlUIC0gaHR0cDovL21yZ25yZHJjay5taXQtbGljZW5zZS5vcmdcbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbXJvZGVyaWNrL1B1YlN1YkpTXG4gKi9cbiFmdW5jdGlvbihuLHQpe1widXNlIHN0cmljdFwiO3ZhciByPXt9O24uUHViU3ViPXI7dmFyIGU9bi5kZWZpbmU7IWZ1bmN0aW9uKG4pe3ZhciB0PXt9LHI9LTE7ZnVuY3Rpb24gZShuKXt2YXIgdDtmb3IodCBpbiBuKWlmKG4uaGFzT3duUHJvcGVydHkodCkpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gbyhuLHQscil7dHJ5e24odCxyKX1jYXRjaChuKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbigpe3Rocm93IG59fShuKSwwKX19ZnVuY3Rpb24gaShuLHQscil7bih0LHIpfWZ1bmN0aW9uIHUobixyLGUsdSl7dmFyIGYscz10W3JdLGM9dT9pOm87aWYodC5oYXNPd25Qcm9wZXJ0eShyKSlmb3IoZiBpbiBzKXMuaGFzT3duUHJvcGVydHkoZikmJmMoc1tmXSxuLGUpfWZ1bmN0aW9uIGYobixyLG8saSl7dmFyIGY9ZnVuY3Rpb24obix0LHIpe3JldHVybiBmdW5jdGlvbigpe3ZhciBlPVN0cmluZyhuKSxvPWUubGFzdEluZGV4T2YoXCIuXCIpO2Zvcih1KG4sbix0LHIpOy0xIT09bzspZT1lLnN1YnN0cigwLG8pLG89ZS5sYXN0SW5kZXhPZihcIi5cIiksdShuLGUsdCxyKX19KG49XCJzeW1ib2xcIj09dHlwZW9mIG4/bi50b1N0cmluZygpOm4scixpKSxzPWZ1bmN0aW9uKG4pe3ZhciByPVN0cmluZyhuKSxvPUJvb2xlYW4odC5oYXNPd25Qcm9wZXJ0eShyKSYmZSh0W3JdKSksaT1yLmxhc3RJbmRleE9mKFwiLlwiKTtmb3IoOyFvJiYtMSE9PWk7KXI9ci5zdWJzdHIoMCxpKSxpPXIubGFzdEluZGV4T2YoXCIuXCIpLG89Qm9vbGVhbih0Lmhhc093blByb3BlcnR5KHIpJiZlKHRbcl0pKTtyZXR1cm4gb30obik7cmV0dXJuISFzJiYoITA9PT1vP2YoKTpzZXRUaW1lb3V0KGYsMCksITApfW4ucHVibGlzaD1mdW5jdGlvbih0LHIpe3JldHVybiBmKHQsciwhMSxuLmltbWVkaWF0ZUV4Y2VwdGlvbnMpfSxuLnB1Ymxpc2hTeW5jPWZ1bmN0aW9uKHQscil7cmV0dXJuIGYodCxyLCEwLG4uaW1tZWRpYXRlRXhjZXB0aW9ucyl9LG4uc3Vic2NyaWJlPWZ1bmN0aW9uKG4sZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSlyZXR1cm4hMTtuPVwic3ltYm9sXCI9PXR5cGVvZiBuP24udG9TdHJpbmcoKTpuLHQuaGFzT3duUHJvcGVydHkobil8fCh0W25dPXt9KTt2YXIgbz1cInVpZF9cIitTdHJpbmcoKytyKTtyZXR1cm4gdFtuXVtvXT1lLG99LG4uc3Vic2NyaWJlT25jZT1mdW5jdGlvbih0LHIpe3ZhciBlPW4uc3Vic2NyaWJlKHQsZnVuY3Rpb24oKXtuLnVuc3Vic2NyaWJlKGUpLHIuYXBwbHkodGhpcyxhcmd1bWVudHMpfSk7cmV0dXJuIG59LG4uY2xlYXJBbGxTdWJzY3JpcHRpb25zPWZ1bmN0aW9uKCl7dD17fX0sbi5jbGVhclN1YnNjcmlwdGlvbnM9ZnVuY3Rpb24obil7dmFyIHI7Zm9yKHIgaW4gdCl0Lmhhc093blByb3BlcnR5KHIpJiYwPT09ci5pbmRleE9mKG4pJiZkZWxldGUgdFtyXX0sbi51bnN1YnNjcmliZT1mdW5jdGlvbihyKXt2YXIgZSxvLGksdT1cInN0cmluZ1wiPT10eXBlb2YgciYmKHQuaGFzT3duUHJvcGVydHkocil8fGZ1bmN0aW9uKG4pe3ZhciByO2ZvcihyIGluIHQpaWYodC5oYXNPd25Qcm9wZXJ0eShyKSYmMD09PXIuaW5kZXhPZihuKSlyZXR1cm4hMDtyZXR1cm4hMX0ocikpLGY9IXUmJlwic3RyaW5nXCI9PXR5cGVvZiByLHM9XCJmdW5jdGlvblwiPT10eXBlb2YgcixjPSExO2lmKCF1KXtmb3IoZSBpbiB0KWlmKHQuaGFzT3duUHJvcGVydHkoZSkpe2lmKG89dFtlXSxmJiZvW3JdKXtkZWxldGUgb1tyXSxjPXI7YnJlYWt9aWYocylmb3IoaSBpbiBvKW8uaGFzT3duUHJvcGVydHkoaSkmJm9baV09PT1yJiYoZGVsZXRlIG9baV0sYz0hMCl9cmV0dXJuIGN9bi5jbGVhclN1YnNjcmlwdGlvbnMocil9fShyKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlLmFtZD9lKGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmKHZvaWQgMCE9PW1vZHVsZSYmbW9kdWxlLmV4cG9ydHMmJihleHBvcnRzPW1vZHVsZS5leHBvcnRzPXIpLGV4cG9ydHMuUHViU3ViPXIsbW9kdWxlLmV4cG9ydHM9ZXhwb3J0cz1yKX0oXCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93fHx0aGlzKTsiLCIvKiEgVVRGLThcclxuXHJcbsKpIGtvdnJpZ2luXHJcbtCS0YHQtSDQv9GA0LDQstCwINGA0LDQt9GA0LXRiNC10L3Ri1xyXG7QutGA0LDRgdC40LLRi9C5INC00LjQt9Cw0LnQvSDQtNC+0LvQttC10L0g0LjQvNC10YLRjCDQutGA0LDRgdC40LLRi9C5INC60L7QtMKuXHJcblxyXG5odHRwczovL2dpdGh1Yi5jb20vaHRtbHBsdXNjc3MvXHJcblxyXG4qL1xyXG5cclxuKCAoKSA9PiB7XHJcblxyXG5cdGxldCByZXNpemVUaW1lb3V0ID0gbnVsbCxcclxuXHRcdHdpbmRvd1dpZHRoT0xkID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuXHJcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoIXJlc2l6ZVRpbWVvdXQpIHtcclxuXHJcblx0XHRcdFx0cmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHJcblx0XHRcdFx0XHRpZih3aW5kb3dXaWR0aE9MZCAhPT0gd2luZG93LmlubmVyV2lkdGgpIHtcclxuXHJcblx0XHRcdFx0XHRcdHdpbmRvd1dpZHRoT0xkID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG5cdFx0XHRcdFx0XHRQdWJTdWIucHVibGlzaCgnd2luZG93V2lkdGhSZXNpemUnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0sIDEwMCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFB1YlN1Yi5wdWJsaXNoKCdwYWdlTG9hZCcpO1xyXG5cclxuXHRcdENvb2tpZXMuc2V0KCdmYXN0TG9hZFNjcmlwdCcsIHRydWUpO1xyXG5cclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10cmFuc2l0aW9uRGVmYXVsdCcsICcuM3MnKTtcclxuXHJcblx0XHRpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykpIHtcclxuXHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oZWFkZXJIZWlnaHQnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuY2xpZW50SGVpZ2h0ICsgJ3B4Jyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKSkge1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZvb3RlckhlaWdodCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKS5jbGllbnRIZWlnaHQgKyAncHgnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQsNC90LjQvNCw0YbQuNC5XHJcblx0d2luZG93LmNzc0FuaW1hdGlvbiA9IGE9PntsZXQgYixjLGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNzc2FuaW1hdGlvblwiKTtzd2l0Y2goYSl7Y2FzZSdhbmltYXRpb24nOmI9e1wiYW5pbWF0aW9uXCI6XCJhbmltYXRpb25lbmRcIixcIk9BbmltYXRpb25cIjpcIm9BbmltYXRpb25FbmRcIixcIk1vekFuaW1hdGlvblwiOlwiYW5pbWF0aW9uZW5kXCIsXCJXZWJraXRBbmltYXRpb25cIjpcIndlYmtpdEFuaW1hdGlvbkVuZFwifTticmVhaztjYXNlJ3RyYW5zaXRpb24nOmI9e1widHJhbnNpdGlvblwiOlwidHJhbnNpdGlvbmVuZFwiLFwiT1RyYW5zaXRpb25cIjpcIm9UcmFuc2l0aW9uRW5kXCIsXCJNb3pUcmFuc2l0aW9uXCI6XCJ0cmFuc2l0aW9uZW5kXCIsXCJXZWJraXRUcmFuc2l0aW9uXCI6XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCJ9fWZvcihjIGluIGIpaWYoZC5zdHlsZVtjXSE9PXVuZGVmaW5lZClyZXR1cm4gYltjXX1cclxuXHJcblx0Ly8gRGV0ZXJtaW5lIGlmIGFuIGVsZW1lbnQgaXMgaW4gdGhlIHZpc2libGUgdmlld3BvcnRcclxuXHR3aW5kb3cuaXNJblZpZXdwb3J0ID0gZWwgPT4ge1xyXG5cdFx0Y29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0cmV0dXJuIChyZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblx0fVxyXG5cclxuXHQvLyDQvtGC0LTQtdC70Y/QtdC8INGC0YvRgdGP0YfQuFxyXG5cdHdpbmRvdy5zZXBOdW1iZXIgPSBmdW5jdGlvbihzdHIpe1xyXG5cdFx0c3RyID0gc3RyLnRvU3RyaW5nKCk7XHJcblx0XHRzdHIgPSBzdHIucmVwbGFjZSgvXFxzKy9nLCcnKTtcclxuXHRcdHJldHVybiBzdHIucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoW15cXGRdfCQpKS9nLCAnJDEgJyk7XHJcblx0fVxyXG5cclxuXHQvLyDRgdC60LvQtdC40LLQsNC10Lwg0YLRi9GB0Y/Rh9C4XHJcblx0d2luZG93LnN0clRvTnVtYmVyID0gZnVuY3Rpb24obil7XHJcblx0XHRyZXR1cm4gcGFyc2VJbnQobi5yZXBsYWNlKC9cXHMrL2csJycpLCAxMCk7XHJcblx0fVxyXG5cclxuLy8g0YHQutC70L7QvdC10L3QuNC1XHJcblx0d2luZG93LmRlY2xlbnNpb24gPSAobnVtLCBleHByZXNzaW9ucykgPT4ge1xyXG5cclxuXHRcdGxldCByLFxyXG5cdFx0XHRjb3VudCA9IG51bSAlIDEwMDtcclxuXHJcblx0XHRpZiAoY291bnQgPiA0ICYmIGNvdW50IDwgMjEpe1xyXG5cclxuXHRcdFx0ciA9IGV4cHJlc3Npb25zWycyJ107XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRjb3VudCA9IGNvdW50ICUgMTA7XHJcblxyXG5cdFx0XHRpZiAoY291bnQgPT0gMSl7XHJcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycwJ107XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoY291bnQgPiAxICYmIGNvdW50IDwgNSl7XHJcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycxJ107XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRyID0gZXhwcmVzc2lvbnNbJzInXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcjtcclxuXHJcblx0fVxyXG5cclxufSkoKTsiLCIoIGl0ZW1zID0+IHtcblxuXHRpZighaXRlbXMubGVuZ3RoKSB7XG5cblx0XHRyZXR1cm47XG5cblx0fVxuXG5cdEFycmF5LmZyb20oaXRlbXMsIGFjY29yZGlvbiA9PiB7XG5cblx0XHRsZXQgYW5pbWF0ZU9uID0gZmFsc2UsXG5cdFx0XHRhY3RpdmVJdGVtID0gbnVsbDtcblxuXHRcdGNvbnN0IGl0ZW1zID0gYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2l0ZW0nKTtcblxuXHRcdEFycmF5LmZyb20oaXRlbXMsIGl0ZW0gPT4ge1xuXG5cdFx0XHRjb25zdCBidG4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2J0bicpLFxuXHRcdFx0XHQgIGhlYWQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2hlYWQnKSxcblx0XHRcdFx0ICBib2R5ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19ib2R5Jyk7XG5cblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuXHRcdFx0XHRhbmltYXRlT24gPSB0cnVlO1xuXG5cdFx0XHRcdGlmKCBpdGVtID09PSBhY3RpdmVJdGVtICl7XG5cblx0XHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpO1xuXHRcdFx0XHRcdGFjdGl2ZUl0ZW0gPSBudWxsO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRhY3RpdmVJdGVtID0gaXRlbTtcblxuXHRcdFx0XHRcdEFycmF5LmZyb20oaXRlbXMsIGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicsIGVsID09PSBpdGVtKSk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdFx0Ym9keS5hZGRFdmVudExpc3RlbmVyKHdpbmRvdy5jc3NBbmltYXRpb24oJ3RyYW5zaXRpb24nKSwgKCkgPT4ge1xuXG5cdFx0XHRcdGlmKGFuaW1hdGVPbiAmJiBhY3RpdmVJdGVtICYmICF3aW5kb3cuaXNJblZpZXdwb3J0KGhlYWQpKXtcblxuXHRcdFx0XHRcdGhlYWQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFuaW1hdGVPbiA9IGZhbHNlO1xuXG5cdFx0XHR9KTtcblxuXHRcdH0pO1xuXG5cdH0pO1xuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uJykpOyIsIiggYWNjb3VudCA9PiB7XHJcblxyXG5cdGlmKCFhY2NvdW50KSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGZvcm0gPSBhY2NvdW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19mb3JtJyksXHJcblx0XHQgIHRlbXBsYXRlRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWNjb3VudC1mb3JtLWVycm9yLXRvb2x0aXAtdGVtcGxhdGUnKTtcclxuXHJcblx0Ly8g0LTQu9GPINGD0LLQtdC00L7QvNC70LXQvdC40LlcclxuXHJcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWhlYWRlckhlaWdodCcsICcxNXB4Jyk7XHJcblxyXG5cdC8vINC/0L7QutCw0LfQsNGC0Ywg0L/QsNGA0L7Qu9GMXHJcblxyXG5cdGNvbnN0IHRvZ2dsZVBhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3VudF9fdmlzaWJsZS10b2dnbGUtcGFzc3dvcmQnKTtcclxuXHJcblx0QXJyYXkuZnJvbSh0b2dnbGVQYXNzLCBlbCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRuID0gZWwucXVlcnlTZWxlY3RvcignLmFjY291bnRfX3Zpc2libGUtdG9nZ2xlLXBhc3N3b3JkLWJ0bicpLFxyXG5cdFx0XHQgIGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcignLmFjY291bnRfX3Zpc2libGUtdG9nZ2xlLXBhc3N3b3JkLWlucHV0Jyk7XHJcblxyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcblxyXG5cdFx0XHRpbnB1dC50eXBlID0gaW5wdXQudHlwZSA9PT0gJ3Bhc3N3b3JkJyA/ICd0ZXh0JyA6ICdwYXNzd29yZCc7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGJ0bi5xdWVyeVNlbGVjdG9yQWxsKCdzdmcnKSwgc3ZnID0+IHN2Zy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJykpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8g0YDQtdCz0LjRgdGC0YDQsNGG0LjRj1xyXG5cclxuXHRjb25zdCBmb3JtUmVnID0gYWNjb3VudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fZm9ybS0tc2lnbnVwJyk7XHJcblxyXG5cdGlmKCBmb3JtUmVnICkge1xyXG5cclxuXHRcdGZvcm1SZWcuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Ly8g0L/QtdGA0LLRi9C5INGI0LDQsywg0LLRi9Cx0L7RgCDRgtC40L/QsCDRg9GH0LXRgtC60LhcclxuXHJcblx0XHRcdGlmKCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvdW50X19yYWRpby1pbnB1dCcpICkge1xyXG5cclxuXHRcdFx0XHRjb25zdCBmaWVsZHNldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuYWNjb3VudF9fZmllbGRzZXQnKTtcclxuXHJcblx0XHRcdFx0ZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnaXMtdmFsaWQnKTtcclxuXHJcblx0XHRcdFx0ZmllbGRzZXQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX25leHQnKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIGJ0biBuZXh0XHJcblxyXG5cdFx0Y29uc3QgYnRuTmV4dCA9IGZvcm1SZWcucXVlcnlTZWxlY3RvckFsbCgnLmFjY291bnRfX25leHQnKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGJ0bk5leHQsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGJ0bi5jbG9zZXN0KCcuYWNjb3VudF9fZmllbGRzZXQnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdFx0YnRuLmNsb3Nlc3QoJy5hY2NvdW50X19maWVsZHNldCcpLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBidG4gcHJldlxyXG5cclxuXHRcdGNvbnN0IGJ0blByZXYgPSBmb3JtUmVnLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvdW50X19wcmV2Jyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShidG5QcmV2LCBidG4gPT4ge1xyXG5cclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRidG4uY2xvc2VzdCgnLmFjY291bnRfX2ZpZWxkc2V0JykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRcdGJ0bi5jbG9zZXN0KCcuYWNjb3VudF9fZmllbGRzZXQnKS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vINCy0YvQsdC+0YAg0LrQvtC80L/QsNC90LjQuFxyXG5cclxuXHRcdGNvbnN0IGNvbXBhbnkgPSBmb3JtUmVnLmVsZW1lbnRzLmNvbXBhbnk7XHJcblxyXG5cdFx0Y29tcGFueS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcclxuXHJcblx0XHRcdGxldCBpc1Rvb2x0aXAgPSBmYWxzZTtcclxuXHJcblx0XHRcdGNvbnN0IG5leHQgPSBjb21wYW55Lm5leHRFbGVtZW50U2libGluZztcclxuXHJcblx0XHRcdGlmICggbmV4dCAmJiBuZXh0LmNsYXNzTGlzdC5jb250YWlucygnaW5wdXRib3hfX2Vycm9yJykgKSB7XHJcblxyXG5cdFx0XHRcdGlzVG9vbHRpcCA9IHRydWU7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIGNvbXBhbnkuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1lbXB0eScpICkge1xyXG5cclxuXHRcdFx0XHRpZiAoIGlzVG9vbHRpcCA9PT0gZmFsc2UgKSB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgdGV4dCA9IGNvbXBhbnkuZ2V0QXR0cmlidXRlKCdkYXRhLWVtcHR5LXRvb2x0aXAnKTtcclxuXHRcdFx0XHRcdGNvbnN0IGVycm9yID0gTXVzdGFjaGUucmVuZGVyKCB0ZW1wbGF0ZUVycm9yLmlubmVySFRNTCwgeyB0ZXh0IH0pO1xyXG5cclxuXHRcdFx0XHRcdGNvbXBhbnkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGVycm9yKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0aXNUb29sdGlwICYmIG5leHQucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8g0YLQtdC60YHRgiDQutC+0YDQv9C+0YDQvtGC0LjQstC90L7Qs9C+INC10LzQsNC50LtcclxuXHJcblx0XHRjb25zdCBlbWFpbENvbXBhbnkgPSBmb3JtUmVnLnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLWFjY291bnQtZW1haWwnKSxcclxuXHRcdFx0ICBwYXR0ZXJuID0gZW1haWxDb21wYW55LmdldEF0dHJpYnV0ZSgnZGF0YS1wYXR0ZXJuJykuc3BsaXQoJ3wnKTtcclxuXHJcblx0XHRlbWFpbENvbXBhbnkuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoIGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJyb2xlXCJdOmNoZWNrZWQnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZm9ybS1hY2NvdW50LWVtYWlsLXBhdHRlcm4nKSA9PT0gXCJvZmZcIiApIHtcclxuXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGV0IHZhbGlkID0gdHJ1ZTtcclxuXHJcblx0XHRcdHBhdHRlcm4uZm9yRWFjaCggZWwgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoZW1haWxDb21wYW55LnZhbHVlLmluZGV4T2YoJ0AnICsgZWwpICE9PSAtMSkge1xyXG5cclxuXHRcdFx0XHRcdHZhbGlkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0bGV0IGlzVG9vbHRpcCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0Y29uc3QgbmV4dCA9IGVtYWlsQ29tcGFueS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG5cdFx0XHRpZiAoIG5leHQgJiYgbmV4dC5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0Ym94X19lcnJvcicpICkge1xyXG5cclxuXHRcdFx0XHRpc1Rvb2x0aXAgPSB0cnVlO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCB2YWxpZCA9PT0gZmFsc2UgKSB7XHJcblxyXG5cdFx0XHRcdGlmICggaXNUb29sdGlwID09PSBmYWxzZSApIHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCB0ZXh0ID0gZW1haWxDb21wYW55LmdldEF0dHJpYnV0ZSgnZGF0YS10ZXh0LXZhbGlkJyk7XHJcblx0XHRcdFx0XHRjb25zdCBlcnJvciA9IE11c3RhY2hlLnJlbmRlciggdGVtcGxhdGVFcnJvci5pbm5lckhUTUwsIHsgdGV4dCB9KTtcclxuXHJcblx0XHRcdFx0XHRlbWFpbENvbXBhbnkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGVycm9yKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0aXNUb29sdGlwICYmIG5leHQucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0Ly8gc3VibWl0IGZvcm1cclxuXHJcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRjb25zdCBidG5TdWJtaXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19zdWJtaXQnKTtcclxuXHJcblx0XHRidG5TdWJtaXQuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHR9KVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0LnRoZW4oanNvbiA9PiB7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhqc29uKTtcclxuXHJcblx0XHRcdGJ0blN1Ym1pdC5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0aWYoIGpzb24uZXJyb3JMaXN0ICkge1xyXG5cclxuXHRcdFx0XHRqc29uLmVycm9yTGlzdC5mb3JFYWNoKCBpbnB1dCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coaW5wdXQpO1xyXG5cclxuXHRcdFx0XHRcdGZvciAobGV0IHR5cGUgaW4gaW5wdXQpIHtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnN0IHRleHQgPSBpbnB1dFt0eXBlXTtcclxuXHRcdFx0XHRcdFx0Y29uc3QgZXJyb3IgPSBNdXN0YWNoZS5yZW5kZXIoIHRlbXBsYXRlRXJyb3IuaW5uZXJIVE1MLCB7IHRleHQgfSk7XHJcblxyXG5cdFx0XHRcdFx0XHRjb25zdCBpbnB1dEluRm9ybSA9IGZvcm0uZWxlbWVudHNbdHlwZV07XHJcblxyXG5cdFx0XHRcdFx0XHRpbnB1dEluRm9ybS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHRpbnB1dEluRm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1lcnJvcicpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZigganNvbi5ub3RpZmljYXRpb24gKSB7XHJcblxyXG5cdFx0XHRcdG5vdGlmaWNhdGlvbiguLi5qc29uLm5vdGlmaWNhdGlvbik7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyByZWRpcmVjdFxyXG5cclxuXHRcdFx0aWYoIGpzb24ucmVkaXJlY3QgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGRlbGF5ID0ganNvbi5yZWRpcmVjdERlbGF5ID8ganNvbi5yZWRpcmVjdERlbGF5ICogMTAwMCA6IDA7XHJcblxyXG5cdFx0XHRcdHNldFRpbWVvdXQoICgpPT4gbG9jYXRpb24uYXNzaWduKGpzb24ucmVkaXJlY3QpLCBkZWxheSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyDRgdC60YDRi9GC0LjQtSDQvtGI0LjQsdC+0Log0L/RgNC4INCy0LLQvtC00LVcclxuXHJcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZiAoIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWVycm9yJykgKSB7XHJcblxyXG5cdFx0XHRldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZXJyb3InKTtcclxuXHJcblx0XHRcdGNvbnN0IGVycm9yID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmlucHV0Ym94X19lcnJvcicpO1xyXG5cclxuXHRcdFx0aWYgKCBlcnJvciApIHtcclxuXHJcblx0XHRcdFx0ZXJyb3IuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3cuY3NzQW5pbWF0aW9uKCd0cmFuc2l0aW9uJyksICgpID0+IGVycm9yLnJlbW92ZSgpKTtcclxuXHJcblx0XHRcdFx0c2V0VGltZW91dCggKCkgPT4gZXJyb3IuY2xhc3NMaXN0LmFkZCgnaXMtZmFkZW91dCcpLCAxMDApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudCcpKTsiLCJcclxuKCBsaW5rcyA9PiB7XHJcblxyXG5cdGlmKGxpbmtzLmxlbmd0aCkge1xyXG5cclxuXHRcdGNvbnN0IGhpc3RvcnlCYWNrID0gZXZlbnQ9PiB7XHJcblxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRoaXN0b3J5LmJhY2soKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0QXJyYXkuZnJvbShsaW5rcywgbGluayA9PiB7XHJcblxyXG5cdFx0XHRpZihkb2N1bWVudC5yZWZlcnJlci5pbmRleE9mKGxvY2F0aW9uLmhvc3RuYW1lKSA+IDApIHtcclxuXHJcblx0XHRcdFx0bGluay5vbmNsaWNrID0gaGlzdG9yeUJhY2s7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1idG4tYmFjaycpKTsiLCIoIGRhdGFsaXN0cyA9PiB7XHJcblxyXG5cdGlmICggZGF0YWxpc3RzLmxlbmd0aCA9PT0gMCApIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShkYXRhbGlzdHMsIGRhdGFsaXN0ID0+IHtcclxuXHJcblx0XHRjb25zdCBpbnB1dCA9IGRhdGFsaXN0LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1kYXRhbGlzdF9faW5wdXQnKSxcclxuXHRcdFx0ICBsaXN0ID0gZGF0YWxpc3QucXVlcnlTZWxlY3RvcignLmlucHV0LWRhdGFsaXN0X19saXN0JyksXHJcblx0XHRcdCAgaXRlbXMgPSBkYXRhbGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZGF0YWxpc3RfX2l0ZW0nKTtcclxuXHJcblx0XHRsZXQgY2hlY2tlZCA9IG51bGw7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShpdGVtcywgaXRlbSA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBsYWJlbCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmlucHV0LWRhdGFsaXN0X19sYWJlbCcpLFxyXG5cdFx0XHRcdCAgcmFkaW8gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1kYXRhbGlzdF9fcmFkaW8nKTtcclxuXHJcblx0XHRcdHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpbnB1dC52YWx1ZSA9IGxhYmVsLnRleHRDb250ZW50LnRyaW0oKTtcclxuXHRcdFx0XHRkYXRhbGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1mb2N1cycpO1xyXG5cdFx0XHRcdGNoZWNrZWQgPSByYWRpbztcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4gZGF0YWxpc3QuY2xhc3NMaXN0LmFkZCgnaXMtZm9jdXMnKSk7XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRpZiAoIGNoZWNrZWQgKSB7XHJcblxyXG5cdFx0XHRcdGNoZWNrZWQuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdGNoZWNrZWQgPSBudWxsO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYodmFsdWUubGVuZ3RoID4gMSkge1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGl0ZW1zLCBpdGVtID0+IHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCB0ZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZGF0YWxpc3RfX2xhYmVsJykudGV4dENvbnRlbnQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRcdFx0aXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgdGV4dC5pbmRleE9mKHZhbHVlKSA9PT0gLTEpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0aW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZW1wdHknLCBpdGVtcy5sZW5ndGggPT09IGxpc3QucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWRhdGFsaXN0X19pdGVtLmhpZGUnKS5sZW5ndGgpO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShpdGVtcywgaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XHJcblx0XHRcdFx0aW5wdXQuY2xhc3NMaXN0LmFkZCgnaXMtZW1wdHknKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5pbnB1dC1kYXRhbGlzdCcpID09PSBudWxsICkge1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShkYXRhbGlzdHMsIGRhdGFsaXN0ID0+IGRhdGFsaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZvY3VzJykpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZGF0YWxpc3QnKSk7IiwiXHJcbi8vIGxhbmcgRU58UlUg0LIg0YLQvtCy0LDRgNC1XHJcblxyXG4oIGZvcm0gPT4ge1xyXG5cclxuXHRpZihmb3JtID09PSBudWxsKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vINC60L3QvtC/0LrQuCDRgdC60LDRh9Cw0YLRjFxyXG5cclxuXHRjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZG9jcy1pdGVtLWxhbmddJyk7XHJcblxyXG5cdGlmKGJ0bnMubGVuZ3RoKSB7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBsYW5nID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRvY3MtaXRlbS1sYW5nXCJdOmNoZWNrZWQnKS52YWx1ZTtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oYnRucywgZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1kb2NzLWl0ZW0tbGFuZycpICE9PSBsYW5nKSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0Ly8g0YTQvtGA0LzQsCDQt9Cw0L/RgNC+0YHQsCDRhtC10L3RiyDQsiDQvNC+0LTQsNC70LrQtSAo0J3QlSDQsNCy0YLQvtGA0LjQt9C40YDQvtCy0LDQvSlcclxuXHJcblx0Y29uc3QgZm9ybU1vZGFsR2V0UHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1tb2RhbC1nZXQtcHJpY2UnKTtcclxuXHJcblx0aWYoZm9ybU1vZGFsR2V0UHJpY2UpIHtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGxhbmcgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZG9jcy1pdGVtLWxhbmdcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG5cclxuXHRcdFx0Zm9ybU1vZGFsR2V0UHJpY2UuZWxlbWVudHMubGFuZy52YWx1ZSA9IGxhbmc7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0Ly8g0YTQvtGA0LzQsCDQt9Cw0L/RgNC+0YHQsCDRhtC10L3RiyDQvdCwINGB0YLRgNCw0L3QuNGG0LUgKNCw0LLRgtC+0YDQuNC30L7QstCw0L0pXHJcblxyXG5cdGNvbnN0IGZvcm1HZXRQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWdldC1wcmljZScpO1xyXG5cclxuXHRpZihmb3JtR2V0UHJpY2UpIHtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGxhbmcgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZG9jcy1pdGVtLWxhbmdcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG5cclxuXHRcdFx0Zm9ybUdldFByaWNlLmVsZW1lbnRzLmxhbmcudmFsdWUgPSBsYW5nO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1pdGVtX19sYW5nJykpOyIsIlxyXG4oIGZvcm1zID0+IHtcclxuXHJcblx0aWYoZm9ybXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0Y29uc3QgYWRkQWpheEl0ZW0gPSAoaHRtbCwgc2VhcmNoUmVzdWx0Qm94KSA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBib3hSZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblx0XHRcdGJveFJlc3VsdC5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShib3hSZXN1bHQucXVlcnlTZWxlY3RvckFsbCgnLmRvY3MtY2F0YWxvZ19faXRlbScpLCBpdGVtID0+IHtcclxuXHJcblx0XHRcdFx0c2VhcmNoUmVzdWx0Qm94LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWNhdGFsb2dfX2xpc3QnKS5hcHBlbmRDaGlsZChpdGVtKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKCBib3hSZXN1bHQucXVlcnlTZWxlY3RvcignLmRvY3Mtdmlld2VkJykgKSB7XHJcblxyXG5cdFx0XHRcdHNlYXJjaFJlc3VsdEJveC5xdWVyeVNlbGVjdG9yKCcuZG9jcy12aWV3ZWQnKS5pbm5lckhUTUwgPSBib3hSZXN1bHQucXVlcnlTZWxlY3RvcignLmRvY3Mtdmlld2VkJykuaW5uZXJIVE1MO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBib3hSZXN1bHQucXVlcnlTZWxlY3RvcignLnBhZ2luJykgKSB7XHJcblxyXG5cdFx0XHRcdHNlYXJjaFJlc3VsdEJveC5xdWVyeVNlbGVjdG9yKCcucGFnaW4nKS5pbm5lckhUTUwgPSBib3hSZXN1bHQucXVlcnlTZWxlY3RvcignLnBhZ2luJykuaW5uZXJIVE1MO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoIGJveFJlc3VsdC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1hamF4X19idG4nKSApIHtcclxuXHJcblx0XHRcdFx0c2VhcmNoUmVzdWx0Qm94LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWFqYXhfX2J0bicpLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG5cdFx0XHR9IGVsc2UgaWYgKHNlYXJjaFJlc3VsdEJveC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1hamF4JykpIHtcclxuXHJcblx0XHRcdFx0c2VhcmNoUmVzdWx0Qm94LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWFqYXgnKS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKCB3aW5kb3dTY3JvbGwgIT09IHdpbmRvdy5wYWdlWU9mZnNldCApIHtcclxuXHJcblx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsd2luZG93U2Nyb2xsKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNlYXJjaFJlc3VsdC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJywnaXMtbG9hZGluZy1hZGQnKTtcclxuXHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXBhZ2VfX3RhYnMtaXRlbS5pcy1hY3RpdmUnKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaGlzdG9yeScsIGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoKTtcclxuXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGZvcm1TaG9ydFN0YXR1cyA9ICgpPT4ge1xyXG5cclxuXHRcdFx0aWYoZm9ybVNob3J0ID09PSBudWxsKSB7XHJcblxyXG5cdFx0XHRcdGZvcm1TaG9ydCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgncGFnZS1ibHVlJyk7XHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3MtcGFnZScpLmNsYXNzTGlzdC5hZGQoJ2RvY3MtcGFnZS0tc2hvcnQnKTtcclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1wYWdlX19kZXNjcmlwdGlvbicpLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgc2VhcmNoUmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3Mtc2VhcmNoLXJlc3VsdCcpLFxyXG5cdFx0XHQgIHNlYXJjaFJlc3VsdFN0YW5kYXJ0cyA9IHNlYXJjaFJlc3VsdC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1zZWFyY2gtcmVzdWx0X19zdGFuZGFydHMnKSxcclxuXHRcdFx0ICBzZWFyY2hSZXN1bHRBbmFseXRpY3MgPSBzZWFyY2hSZXN1bHQucXVlcnlTZWxlY3RvcignLmRvY3Mtc2VhcmNoLXJlc3VsdF9fYW5hbHl0aWNzJyksXHJcblx0XHRcdCAgZmllbGRzZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvY3MtZm9ybV9fZmllbGRzZXQnKTtcclxuXHJcblx0XHRsZXQgd2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0LFxyXG5cdFx0XHRmb3JtU2hvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1wYWdlLS1zaG9ydCcpLFxyXG5cdFx0XHRhY3RpdmVUYWJTdGFuZGFydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1wYWdlX190YWJzLWl0ZW0tLXN0YW5kYXJ0cycpLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJyksXHJcblx0XHRcdHNlYXJjaFJlc3VsdFN0YW5kYXJ0c0VtcHR5ID0gc2VhcmNoUmVzdWx0U3RhbmRhcnRzLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpLFxyXG5cdFx0XHRzZWFyY2hSZXN1bHRBbmFseXRpY3NFbXB0eSA9IHNlYXJjaFJlc3VsdEFuYWx5dGljcy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGZvcm1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRcdC8vIGtleXdvcmRzXHJcblxyXG5cdFx0XHRpZiggZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2RvY3MtZm9ybS0tcHJvZHVjdCcpICkge1xyXG5cclxuXHRcdFx0XHRjb25zdCBpbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmRvY3MtZm9ybV9faW5wdXQnKSxcclxuXHRcdFx0XHRcdCAgcmVzdWx0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZG9jcy1mb3JtX19yZXN1bHQnKTtcclxuXHJcblx0XHRcdFx0Ly8gaW5wdXRcclxuXHJcblx0XHRcdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYoaW5wdXQudmFsdWUubGVuZ3RoID4gMiAmJiBldmVudC5rZXkgIT09ICdlbnRlcicpe1xyXG5cclxuXHRcdFx0XHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJyksIHtcclxuXHRcdFx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG5cdFx0XHRcdFx0XHQudGhlbihodG1sID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coaHRtbCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5pbm5lckhUTUwgPSBodG1sO1xyXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmICggaW5wdXQudmFsdWUubGVuZ3RoID09PSAwICkge1xyXG5cclxuXHRcdFx0XHRcdFx0QXJyYXkuZnJvbShmaWVsZHNldHMsIGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZvY3VzJywgJ2hpZGUnKSk7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJlc3VsdC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0c2VhcmNoUmVzdWx0LmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHJcblx0XHRcdFx0XHRpZiggYWN0aXZlVGFiU3RhbmRhcnRzICkge1xyXG5cclxuXHRcdFx0XHRcdFx0c2VhcmNoUmVzdWx0U3RhbmRhcnRzLmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRcdFx0XHRzZWFyY2hSZXN1bHRTdGFuZGFydHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUodW5kZWZpbmVkLCAnJywgc2VhcmNoUmVzdWx0LmdldEF0dHJpYnV0ZSgnZGF0YS1zdGF0bmRhcnRzJykpO1xyXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1wYWdlX190YWJzLWl0ZW0uaXMtYWN0aXZlJykuc2V0QXR0cmlidXRlKCdkYXRhLWhpc3RvcnknLCBzZWFyY2hSZXN1bHQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXRuZGFydHMnKSk7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdHNlYXJjaFJlc3VsdEFuYWx5dGljcy5pbm5lckhUTUwgPSAnJztcclxuXHRcdFx0XHRcdFx0c2VhcmNoUmVzdWx0QW5hbHl0aWNzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRcdGhpc3RvcnkucHVzaFN0YXRlKHVuZGVmaW5lZCwgJycsIHNlYXJjaFJlc3VsdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5hbHl0aWNzJykpO1xyXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1wYWdlX190YWJzLWl0ZW0uaXMtYWN0aXZlJykuc2V0QXR0cmlidXRlKCdkYXRhLWhpc3RvcnknLCBzZWFyY2hSZXN1bHQuZ2V0QXR0cmlidXRlKCdkYXRhLWFuYWx5dGljcycpKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Zm9ybVNob3J0U3RhdHVzKCk7XHJcblxyXG5cdFx0XHRcdFx0c2V0VGltZW91dCggKCk9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9ICcnO1xyXG5cdFx0XHRcdFx0XHRpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRsZXQgdXJsID0gZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpICsgJz8nO1xyXG5cclxuXHRcdFx0XHRcdFx0bmV3IEZvcm1EYXRhKGZvcm0pLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0dXJsICs9IGtleSArIFwiPVwiICsgdmFsdWUgKyBcIiZcIjtcclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0ZmV0Y2godXJsKVxyXG5cdFx0XHRcdFx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcclxuXHRcdFx0XHRcdFx0XHQudGhlbihodG1sID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBib3hSZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRib3hSZXN1bHQuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiggYWN0aXZlVGFiU3RhbmRhcnRzICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c2VhcmNoUmVzdWx0U3RhbmRhcnRzLmlubmVySFRNTCA9IGJveFJlc3VsdC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1zZWFyY2gtcmVzdWx0X19zdGFuZGFydHMnKS5pbm5lckhUTUw7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNlYXJjaFJlc3VsdEFuYWx5dGljcy5pbm5lckhUTUwgPSBib3hSZXN1bHQucXVlcnlTZWxlY3RvcignLmRvY3Mtc2VhcmNoLXJlc3VsdF9fYW5hbHl0aWNzJykuaW5uZXJIVE1MO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRzZWFyY2hSZXN1bHQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xyXG5cdFx0XHRcdFx0XHRcdFx0aW5wdXQuZm9jdXMoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0fSwgMTAwKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdC8vINC60L3QvtC/0LrQsCDQtdGJ0LVcclxuXHJcblx0XHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdhamF4JywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdhamF4Jywgd2luZG93U2Nyb2xsKTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBzZWFyY2hSZXN1bHRCb3ggPSBzZWFyY2hSZXN1bHRTdGFuZGFydHMuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykgPyBzZWFyY2hSZXN1bHRBbmFseXRpY3MgOiBzZWFyY2hSZXN1bHRTdGFuZGFydHM7XHJcblxyXG5cdFx0XHRcdFx0c2VhcmNoUmVzdWx0LmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmctYWRkJyk7XHJcblxyXG5cdFx0XHRcdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0XHRcdGZvcm0uZWxlbWVudHMuUEFHRU5fMS52YWx1ZSA9IHBhcnNlSW50KGZvcm0uZWxlbWVudHMuUEFHRU5fMS52YWx1ZSkgKyAxO1xyXG5cclxuXHJcblx0XHRcdFx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBxdWVyeVN0cmluZyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoZm9ybURhdGEpLnRvU3RyaW5nKCk7XHJcblxyXG5cdFx0XHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUodW5kZWZpbmVkLCAnJywgJz8nICsgcXVlcnlTdHJpbmcpO1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHF1ZXJ5U3RyaW5nKTtcclxuXHJcblx0XHRcdFx0XHRsZXQgdXJsID0gZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpICsgJz8nO1xyXG5cclxuXHRcdFx0XHRcdG5ldyBGb3JtRGF0YShmb3JtKS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHR1cmwgKz0ga2V5ICsgXCI9XCIgKyB2YWx1ZSArIFwiJlwiO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG5cdFx0XHRcdFx0ZmV0Y2godXJsKVxyXG5cdFx0XHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcblx0XHRcdFx0XHRcdC50aGVuKGh0bWwgPT4gYWRkQWpheEl0ZW0oaHRtbCwgc2VhcmNoUmVzdWx0Qm94KSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8g0LrQsNGA0YLQvtGH0LrQuCwg0L3QvtC80LXRgNC60LvQsNGC0YPRgNCwINC4INGA0LDQt9GA0LDQsdC+0YLRh9C40LpcclxuXHJcblx0XHRcdGlmKCBmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZG9jcy1mb3JtLS1saXN0JykgKSB7XHJcblxyXG5cdFx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdC8vINC10YHQu9C4IGlucHV0ID09PSByYWRpb1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IG5vbWVuY2xhdHVyZSA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmRvY3MtZm9ybV9fcmVzdWx0LWRhdGFsaXN0Om5vdCguaGlkZSknKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIG5vbWVuY2xhdHVyZS5sZW5ndGggPT09IDEgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIG5vbWVuY2xhdHVyZVswXS50ZXh0Q29udGVudC50cmltKCkudG9Mb3dlckNhc2UoKSA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tZG9jcy1zdGFuZGFydHMtbm9tZW5jbGF0dXJlJykudmFsdWUudG9Mb3dlckNhc2UoKSApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0bm9tZW5jbGF0dXJlWzBdLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0bm9tZW5jbGF0dXJlWzBdLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2NoYW5nZScpO1xyXG5cclxuXHRcdFx0XHRcdHNlYXJjaFJlc3VsdFN0YW5kYXJ0c0VtcHR5ID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBzZWFyY2hSZXN1bHRTdGFuZGFydHMucXVlcnlTZWxlY3RvcignLmRvY3MtYWpheF9fYnRuOmRpc2FibGVkJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRzZWFyY2hSZXN1bHQuY2xhc3NMaXN0LmFkZCgnaXMtbG9hZGluZy1hZGQnKTtcclxuXHJcblx0XHRcdFx0XHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdFx0XHRcdGZvcm0uZWxlbWVudHMuUEFHRU5fMS52YWx1ZSA9IHBhcnNlSW50KGZvcm0uZWxlbWVudHMuUEFHRU5fMS52YWx1ZSkgKyAxO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRzZWFyY2hSZXN1bHQuY2xhc3NMaXN0LmFkZCgnaXMtbG9hZGluZycpO1xyXG5cdFx0XHRcdFx0XHRzZWFyY2hSZXN1bHRTdGFuZGFydHMuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRcdFx0XHRcdGZvcm0uZWxlbWVudHMuUEFHRU5fMS52YWx1ZSA9IDE7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhmb3JtRGF0YSkudG9TdHJpbmcoKTtcclxuXHJcblx0XHRcdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZSh1bmRlZmluZWQsICcnLCAnPycgKyBxdWVyeVN0cmluZyk7XHJcblxyXG5cdFx0XHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJyksIHtcclxuXHRcdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0XHRcdGJvZHk6IGZvcm1EYXRhXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG5cdFx0XHRcdFx0LnRoZW4oaHRtbCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRzZWFyY2hSZXN1bHRTdGFuZGFydHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8g0LrQvdC+0L/QutCwINC10YnRkVxyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCBzZWFyY2hSZXN1bHRTdGFuZGFydHMucXVlcnlTZWxlY3RvcignLmRvY3MtYWpheF9fYnRuOmRpc2FibGVkJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGFkZEFqYXhJdGVtKGh0bWwsIHNlYXJjaFJlc3VsdFN0YW5kYXJ0cyk7XHJcblxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRzZWFyY2hSZXN1bHRTdGFuZGFydHMuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcblx0XHRcdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3MtcGFnZV9fdGFicy1pdGVtLmlzLWFjdGl2ZScpLnNldEF0dHJpYnV0ZSgnZGF0YS1oaXN0b3J5JywgbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2gpO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0c2VhcmNoUmVzdWx0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnLCdpcy1sb2FkaW5nLWFkZCcpO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdGZvcm1TaG9ydFN0YXR1cygpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Ly8gc3VibWl0XHJcblxyXG5cdFx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdFx0Zm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQvLyDQutC90L7Qv9C60LAg0LXRidC1XHJcblxyXG5cdFx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignYWpheCcsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShmaWVsZHNldHMsIGZpZWxkc2V0ID0+IHtcclxuXHJcblx0XHRcdC8vIG9wZW5cclxuXHJcblx0XHRcdGZpZWxkc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZG9jcy1mb3JtX19yZXN1bHQnKSApIHtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShmaWVsZHNldHMsIGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWZvY3VzJywgZWwgPT09IGZpZWxkc2V0KSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNvbnN0IGZvcm0gPSBmaWVsZHNldC5jbG9zZXN0KCcuZG9jcy1mb3JtJyksXHJcblx0XHRcdFx0ICBpbnB1dCA9IGZpZWxkc2V0LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWZvcm1fX2lucHV0JyksXHJcblx0XHRcdFx0ICByZXNldCA9IGZpZWxkc2V0LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWZvcm1fX3Jlc2V0JyksXHJcblx0XHRcdFx0ICByZXN1bHQgPSBmaWVsZHNldC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1mb3JtX19yZXN1bHQnKTtcclxuXHJcblx0XHRcdC8vIGlucHV0XHJcblxyXG5cdFx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShmaWVsZHNldHMsIGVsID0+IHtcclxuXHJcblx0XHRcdFx0XHRlbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1mb2N1cycsIGVsID09PSBmaWVsZHNldCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBmaWVsZHNldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RvY3MtZm9ybV9fY2F0YWxvZycpICYmIGVsICE9PSBmaWVsZHNldCApIHtcclxuXHJcblx0XHRcdFx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBub21lbmNsYXR1cmVcclxuXHJcblx0XHRcdGlmKGZpZWxkc2V0LmNsYXNzTGlzdC5jb250YWlucygnZG9jcy1mb3JtX19ub21lbmNsYXR1cmUnKSkge1xyXG5cclxuXHRcdFx0XHQvLyBkYXRhbGlzdFxyXG5cclxuXHRcdFx0XHRjb25zdCBkYXRhbGlzdCA9IGZpZWxkc2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb2NzLWZvcm1fX3Jlc3VsdC1kYXRhbGlzdCcpO1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGRhdGFsaXN0LCBidG4gPT4ge1xyXG5cclxuXHRcdFx0XHRcdGJ0bi5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGZpZWxkc2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZvY3VzJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9IGJ0bi50ZXh0Q29udGVudC50cmltKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXNldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRcdFx0cmVzZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIHZhbHVlLmxlbmd0aCA9PT0gMCk7XHJcblxyXG5cdFx0XHRcdFx0aWYodmFsdWUubGVuZ3RoID4gMSkge1xyXG5cclxuXHRcdFx0XHRcdFx0QXJyYXkuZnJvbShkYXRhbGlzdCwgYnRuID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGV4dCA9IGJ0bi50ZXh0Q29udGVudC50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKCB0ZXh0LmluZGV4T2YodmFsdWUpID09PSAtMSApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnRuLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0aW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLWVtcHR5Jyk7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdEFycmF5LmZyb20oZGF0YWxpc3QsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0YnRuLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Ly8gcmVzZXQgPT09IGNsZWFyXHJcblxyXG5cdFx0XHRcdHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdEFycmF5LmZyb20oZGF0YWxpc3QsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRidG4ucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jaGVja2VkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0ZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnaXMtZm9jdXMnKTtcclxuXHRcdFx0XHRcdHJlc2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdGlucHV0LnZhbHVlID0gJyc7XHJcblx0XHRcdFx0XHRpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcblx0XHRcdFx0XHRpbnB1dC5mb2N1cygpO1xyXG5cdFx0XHRcdFx0Zm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gZGV2ZWxvcGVyXHJcblxyXG5cdFx0XHRpZihmaWVsZHNldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RvY3MtZm9ybV9fZGV2ZWxvcGVyJykpIHtcclxuXHJcblx0XHRcdFx0Ly8gY2hlY2tib3hcclxuXHJcblx0XHRcdFx0Y29uc3QgY2hlY2tib3ggPSBmaWVsZHNldC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3hfX2lucHV0Jyk7XHJcblxyXG5cdFx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmKCBldmVudC50YXJnZXQudHlwZSAhPT0gJ2NoZWNrYm94JyApIHtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0bGV0IHZhbHVlID0gJyc7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBldmVudC50YXJnZXQubmFtZSA9PT0gJ2FsbCcgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR2YWx1ZSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnRleHRDb250ZW50LnRyaW0oKTtcclxuXHJcblx0XHRcdFx0XHRcdEFycmF5LmZyb20oY2hlY2tib3gsIGVsID0+IGVsLmNoZWNrZWQgPSBldmVudC50YXJnZXQuY2hlY2tlZCk7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdEFycmF5LmZyb20oY2hlY2tib3gsIGVsID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYoIGVsLm5hbWUgPT09ICdhbGwnICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGVsLmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiggZWwuY2hlY2tlZCApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBsYWJlbCA9IGVsLnBhcmVudE5vZGU7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlICE9PSAnJyApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlICs9ICcsICc7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlICs9IGxhYmVsLnRleHRDb250ZW50LnRyaW0oKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlucHV0LnZhbHVlID0gdmFsdWU7XHJcblxyXG5cdFx0XHRcdFx0cmVzZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIHZhbHVlID09PSAnJyk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQvLyByZXNldCA9PT0gY2xlYXJcclxuXHJcblx0XHRcdFx0cmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0QXJyYXkuZnJvbShjaGVja2JveCwgZWwgPT4gZWwuY2hlY2tlZCA9IGZhbHNlKTtcclxuXHRcdFx0XHRcdGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2lzLWZvY3VzJyk7XHJcblx0XHRcdFx0XHRyZXNldC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9ICcnO1xyXG5cdFx0XHRcdFx0aW5wdXQucmVtb3ZlQXR0cmlidXRlKCd2YWx1ZScpO1xyXG5cdFx0XHRcdFx0Zm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0aWYoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZG9jcy1mb3JtX19maWVsZHNldCcpID09PSBudWxsICl7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oZmllbGRzZXRzLCBlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1mb2N1cycsICdoaWRlJykpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gdGFic1xyXG5cclxuXHRcdFx0Y29uc3QgdGFic0J0biA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZG9jcy1wYWdlX190YWJzLWl0ZW0nKTtcclxuXHJcblx0XHRcdGlmKCB0YWJzQnRuICl7XHJcblxyXG5cdFx0XHRcdGxldCBjdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3MtcGFnZV9fdGFicy1pdGVtLmlzLWFjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRjdXJyZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1oaXN0b3J5JywgbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2gpO1xyXG5cclxuXHRcdFx0XHRjdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHR0YWJzQnRuLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZSh1bmRlZmluZWQsICcnLCB0YWJzQnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1oaXN0b3J5JykpO1xyXG5cclxuXHRcdFx0XHRpZiggdGFic0J0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2RvY3MtcGFnZV9fdGFicy1pdGVtLS1zdGFuZGFydHMnKSApIHtcclxuXHJcblx0XHRcdFx0XHRhY3RpdmVUYWJTdGFuZGFydHMgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXBhZ2VfX2Zvcm1zLS1zdGFuZGFydHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1wYWdlX19mb3Jtcy0tYW5hbHl0aWNzJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdGlmKGZvcm1TaG9ydCkge1xyXG5cclxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3Mtc2VhcmNoLXJlc3VsdF9fc3RhbmRhcnRzJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1zZWFyY2gtcmVzdWx0X19hbmFseXRpY3MnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKCB0YWJzQnRuLmNsYXNzTGlzdC5jb250YWlucygnZG9jcy1wYWdlX190YWJzLWl0ZW0tLWFuYWx5dGljcycpICkge1xyXG5cclxuXHRcdFx0XHRcdGFjdGl2ZVRhYlN0YW5kYXJ0cyA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXBhZ2VfX2Zvcm1zLS1hbmFseXRpY3MnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1wYWdlX19mb3Jtcy0tc3RhbmRhcnRzJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdGlmKGZvcm1TaG9ydCkge1xyXG5cclxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3Mtc2VhcmNoLXJlc3VsdF9fYW5hbHl0aWNzJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1zZWFyY2gtcmVzdWx0X19zdGFuZGFydHMnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBhamF4XHJcblxyXG5cdFx0XHRjb25zdCBidG5BamF4ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kb2NzLWFqYXhfX2J0bicpO1xyXG5cclxuXHRcdFx0aWYgKCBidG5BamF4ICkge1xyXG5cclxuXHRcdFx0XHRidG5BamF4LmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYnRuQWpheC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZm9ybScpKTtcclxuXHJcblx0XHRcdFx0Zm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImFqYXhcIikpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vINC/0L7QtNCz0YDRg9C30LrQsCDRgtC+0LLQsNGA0L7QslxyXG5cclxuXHRcdGlmICggc2VhcmNoUmVzdWx0U3RhbmRhcnRzRW1wdHkgKSB7XHJcblxyXG5cdFx0XHRmZXRjaChzZWFyY2hSZXN1bHQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXRuZGFydHMnKSlcclxuXHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcblx0XHRcdFx0LnRoZW4oaHRtbCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBzZWFyY2hSZXN1bHRTdGFuZGFydHNFbXB0eSApIHtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnN0IGJveFJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ym94UmVzdWx0LmlubmVySFRNTCA9IGh0bWw7XHJcblxyXG5cdFx0XHRcdFx0XHRzZWFyY2hSZXN1bHRTdGFuZGFydHMuaW5uZXJIVE1MID0gYm94UmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXNlYXJjaC1yZXN1bHRfX3N0YW5kYXJ0cycpLmlubmVySFRNTDtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHNlYXJjaFJlc3VsdEFuYWx5dGljc0VtcHR5ICkge1xyXG5cclxuXHRcdFx0ZmV0Y2goc2VhcmNoUmVzdWx0LmdldEF0dHJpYnV0ZSgnZGF0YS1hbmFseXRpY3MnKSlcclxuXHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcblx0XHRcdFx0LnRoZW4oaHRtbCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBzZWFyY2hSZXN1bHRBbmFseXRpY3NFbXB0eSApIHtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnN0IGJveFJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ym94UmVzdWx0LmlubmVySFRNTCA9IGh0bWw7XHJcblxyXG5cdFx0XHRcdFx0XHRzZWFyY2hSZXN1bHRBbmFseXRpY3MuaW5uZXJIVE1MID0gYm94UmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXNlYXJjaC1yZXN1bHRfX2FuYWx5dGljcycpLmlubmVySFRNTDtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvY3MtZm9ybScpKTsiLCIoKCkgPT4ge1xyXG5cclxuXHRpZiAoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpIHtcclxuXHJcblx0XHRjb25zdCBjYWxsYmFjayA9IChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShlbnRyaWVzLCBlbnRyeSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG5cclxuXHRcdFx0XHRcdGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdpcy1zaG93Jyk7XHJcblx0XHRcdFx0XHRvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZS1pbicsICdpcy1zaG93JyksIDEwMDApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYWRlLWluJyksIGVsID0+IG9ic2VydmVyLm9ic2VydmUoZWwpKSwgMTAwMCk7XHJcblxyXG5cdH0gZWxzZSB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmFkZS1pbicpLCBlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKCdpcy1zaG93JykpO1xyXG5cclxuXHR9XHJcblxyXG59KSgpOyIsIiggKCkgPT4ge1xyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0bGV0IGZvcm0gPSBldmVudC50YXJnZXQ7XHJcblxyXG5cdFx0Ly8g0LTQvtCx0LDQstC40YLRjCDQsiDQuNC30LHRgNCw0L3QvdC+0LVcclxuXHJcblx0XHRpZiAoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0tYWRkLWZhdm91cml0ZScpKSB7XHJcblxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oanNvbiA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGpzb24pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vINC30LDQv9GA0L7RgSDRhtC10L3RiyBET0NTINCyINGB0L/QuNGB0LrQtSDRgNC10LfRg9C70YzRgtCw0YLQvtCyINC4INC60LDRgNGC0L7Rh9C60LUg0JDQstGC0L7RgNC40LfQvtCy0LDQvVxyXG5cclxuXHRcdGlmIChmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1nZXQtcHJpY2UnKSkge1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGNvbnN0IGJ0blN1Ym1pdCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0tZ2V0LXByaWNlX19zdWJtaXQnKTtcclxuXHJcblx0XHRcdGJ0blN1Ym1pdC5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0XHQudGhlbihqc29uID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2coanNvbik7XHJcblxyXG5cdFx0XHRcdGJ0blN1Ym1pdC50ZXh0Q29udGVudCA9IGJ0blN1Ym1pdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZG9uZScpO1xyXG5cclxuXHRcdFx0XHRub3RpZmljYXRpb24oLi4ubm90aWZpY2F0aW9uKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KSgpOyIsIiggaXRlbXMgPT4ge1xyXG5cclxuXHRpZighaXRlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oaXRlbXMsIGZvcm0gPT4ge1xyXG5cclxuXHRcdGNvbnN0IGJ0biA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm1fX3N1Ym1pdCcpO1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtbG9hZGluZycpO1xyXG5cdFx0XHRidG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcblx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XHJcblx0XHRcdFx0YnRuLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG5cdFx0XHQvLyBub3RpZmljYXRpb25cclxuXHJcblx0XHRcdFx0aWYocmVzdWx0Lm5vdGlmaWNhdGlvbikge1xyXG5cclxuXHRcdFx0XHRcdG5vdGlmaWNhdGlvbiguLi5yZXN1bHQubm90aWZpY2F0aW9uKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gcmVkaXJlY3RcclxuXHJcblx0XHRcdFx0aWYocmVzdWx0LnJlZGlyZWN0KSB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgZGVsYXkgPSByZXN1bHQucmVkaXJlY3REZWxheSA/IHJlc3VsdC5yZWRpcmVjdERlbGF5ICogMTAwMCA6IDA7XHJcblxyXG5cdFx0XHRcdFx0c2V0VGltZW91dCggKCk9PiBsb2NhdGlvbi5hc3NpZ24ocmVzdWx0LnJlZGlyZWN0KSwgZGVsYXkpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyByZXNldFxyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQucmVzZXQpIHtcclxuXHJcblx0XHRcdFx0XHRmb3JtLnJlc2V0KCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHJlbG9hZFxyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQucmVmcmVzaCkge1xyXG5cclxuXHRcdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBjbG9zZSBtb2RhbFxyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQubW9kYWxDbG9zZSkge1xyXG5cclxuXHRcdFx0XHRcdG1vZGFsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiaGlkZVwiKSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtJykpO1xyXG5cclxuLy8gbGlrZVxyXG5cclxuKCBpdGVtcyA9PiB7XHJcblxyXG5cdGlmKCFpdGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShpdGVtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgY291bnRlckxpa2UgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWxpa2VfX2NvdW50ZXItbGlrZScpLFxyXG5cdFx0XHQgIGNvdW50ZXJEaXNMaWtlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1saWtlX19jb3VudGVyLWRpc2xpa2UnKTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG5cdFx0XHRcdGNvdW50ZXJMaWtlLnRleHRDb250ZW50ID0gcmVzdWx0Lmxpa2U7XHJcblx0XHRcdFx0Y291bnRlckRpc0xpa2UudGV4dENvbnRlbnQgPSByZXN1bHQuZGlzbGlrZTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWxpa2UnKSk7IiwiKCBmb3JtR2V0UHJpY2UgPT4ge1xyXG5cclxuXHRpZiAoIGZvcm1HZXRQcmljZSA9PT0gbnVsbCApIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Ly8g0LrQu9C40LrQtSDQsiDRgNC10LfRg9C70YzRgtCw0YLQsNGFINC/0L7QuNGB0LrQsCDQv9C+INC60L3QvtC/0LrQtSDQo9C30L3QsNGC0Ywg0YHRgtC+0LjQvNC+0YHRgtGMXHJcblxyXG5cdGNvbnN0IHNlYXJjaFJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXNlYXJjaC1yZXN1bHQnKTtcclxuXHJcblx0aWYgKCBzZWFyY2hSZXN1bHQgKSB7XHJcblxyXG5cdFx0c2VhcmNoUmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0aWYoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbZGF0YS1tb2RhbD1cImdldC1wcmljZVwiXScpICkge1xyXG5cclxuXHRcdFx0XHRmb3JtR2V0UHJpY2UuZWxlbWVudHMuaWQudmFsdWUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnW2RhdGEtbW9kYWw9XCJnZXQtcHJpY2VcIl0nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHQvLyDQvtCx0YDQsNCx0L7RgtC60LAg0YTQvtGA0LzRiyDQsiDQvNC+0LTQsNC70LrQtVxyXG5cclxuXHRmb3JtR2V0UHJpY2UuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0ZmV0Y2goZm9ybUdldFByaWNlLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtR2V0UHJpY2UpXHJcblx0XHR9KVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0LnRoZW4oanNvbiA9PiB7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhqc29uKTtcclxuXHJcblx0XHRcdGlmKCBqc29uLmlkICkge1xyXG5cclxuXHRcdFx0XHQvLyDQtdGB0LvQuCDQvdCwINGB0YLRgNCw0L3QuNGG0LUg0LrQsNGC0LDQu9C+0LPQsCwg0YLQviDQvNC10L3Rj9C10Lwg0YLQtdC60YHRgiDQsiDQutC90L7Qv9C60LUuXHJcblxyXG5cdFx0XHRcdGNvbnN0IGJ0blRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kb2NzLWNhdGFsb2ctaXRlbV9fcmVxdWVzdFtkYXRhLWlkPVwiJHtqc29uLmlkfVwiXWApO1xyXG5cclxuXHRcdFx0XHRpZiAoIGJ0blRhcmdldCApIHtcclxuXHJcblx0XHRcdFx0XHRidG5UYXJnZXQudGV4dENvbnRlbnQgPSBidG5UYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWRvbmUnKTtcclxuXHRcdFx0XHRcdGJ0blRhcmdldC5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vINGB0LrRgNGL0LLQsNC10Lwg0LzQvtC00LDQu9C60YMg0YEg0YTQvtGA0LzQvtC5XHJcblxyXG5cdFx0XHRtb2RhbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImhpZGVcIikpO1xyXG5cclxuXHRcdFx0Ly8g0LLRi9Cy0L7QtNC40Lwg0YPQstC10LTQvtC80LvQtdC90LjQtVxyXG5cclxuXHRcdFx0bm90aWZpY2F0aW9uKC4uLmpzb24ubm90aWZpY2F0aW9uKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1tb2RhbC1nZXQtcHJpY2UnKSk7IiwiXHJcbiggcGFnZSA9PiB7XHJcblxyXG5cdGlmKHBhZ2UpIHtcclxuXHJcblx0XHRsZXQgZm9ybVNob3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluc2lnaHRzLXBhZ2UtLXNob3J0Jyk7XHJcblxyXG5cdFx0Y29uc3Qgc2VhcmNoUmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluc2lnaHRzLXNlYXJjaC1yZXN1bHQnKSxcclxuXHRcdFx0ICBib3ggPSBwYWdlLnF1ZXJ5U2VsZWN0b3IoJy5pbnNpZ2h0cy1wYWdlX19ib3gnKSxcclxuXHRcdFx0ICBmb3JtID0gcGFnZS5xdWVyeVNlbGVjdG9yKCcuaW5zaWdodHMtZm9ybScpLFxyXG5cdFx0XHQgIGlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuaW5zaWdodHMtZm9ybV9faW5wdXQnKSxcclxuXHRcdFx0ICBjb3VudHJ5ID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuaW5zaWdodHMtZm9ybS1maWx0ZXItY2hlY2tib3gtZ3JvdXAnKTtcclxuXHJcblx0XHRjb25zdCByZXF1ZXN0Rm9ybSA9ICgpPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG5cdFx0XHRpZiAoIGZvcm0uZWxlbWVudHMucmF0aW5nLnZhbHVlID09PSAnJyApIHtcclxuXHJcblx0XHRcdFx0Zm9ybURhdGEuZGVsZXRlKCdyYXRpbmcnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggZm9ybS5lbGVtZW50cy5rZXl3b3Jkcy52YWx1ZS5sZW5ndGggPT09IDAgKSB7XHJcblxyXG5cdFx0XHRcdGZvcm1EYXRhLmRlbGV0ZSgna2V5d29yZHMnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhmb3JtRGF0YSkudG9TdHJpbmcoKTtcclxuXHJcblx0XHRcdGhpc3RvcnkucHVzaFN0YXRlKHVuZGVmaW5lZCwgJycsICc/JyArIHF1ZXJ5U3RyaW5nKTtcclxuXHJcblx0XHRcdHNlYXJjaFJlc3VsdC5jbGFzc0xpc3QuYWRkKCdpcy1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGJvZHk6IGZvcm1EYXRhXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcclxuXHRcdFx0LnRoZW4oaHRtbCA9PiB7XHJcblxyXG5cdFx0XHRcdHNlYXJjaFJlc3VsdC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRcdHNlYXJjaFJlc3VsdC5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZihmb3JtU2hvcnQgPT09IG51bGwpIHtcclxuXHJcblx0XHRcdFx0Zm9ybVNob3J0ID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluc2lnaHRzLXBhZ2UnKS5jbGFzc0xpc3QuYWRkKCdpbnNpZ2h0cy1wYWdlLS1zaG9ydCcpO1xyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnNpZ2h0cy1wYWdlX19kZXNjcmlwdGlvbicpLnJlbW92ZSgpO1xyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnNpZ2h0cy1jYXRlZ29yeScpLnJlbW92ZSgpO1xyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnNpZ2h0cy1pbmZvJykucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fTtcclxuXHJcblx0XHQvLyDQutC90L7Qv9C60LAg0LrQsNGC0LDQu9C+0LNcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGlmKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLmluc2lnaHRzLWNhdGVnb3J5LWxpc3QnKSA9PT0gbnVsbCApe1xyXG5cclxuXHRcdFx0XHRpZiggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5pbnNpZ2h0cy1wYWdlX19idG4tY2F0YWxvZycpICl7XHJcblxyXG5cdFx0XHRcdFx0Ym94LmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4tY2F0ZWdvcnknKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRib3guY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3Blbi1jYXRlZ29yeScpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyDQsiDQutCw0YLQsNC70L7Qs9C1INGA0LDQt9Cy0LXRgNC90YPRgtGMINGB0L/QuNGB0LrQuFxyXG5cclxuXHRcdFx0aWYoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuaW5zaWdodHMtY2F0ZWdvcnktbGlzdF9faXRlbScpICYmIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuaW5zaWdodHMtY2F0ZWdvcnktbGlzdF9fbGluaycpID09PSBudWxsICkge1xyXG5cclxuXHRcdFx0XHRldmVudC50YXJnZXQuY2xvc2VzdCgnLmluc2lnaHRzLWNhdGVnb3J5LWxpc3RfX2l0ZW0nKS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyDRg9Cx0LjRgNCw0LXQvCDRhNC+0LrRg9GBXHJcblxyXG5cdFx0XHRpZiggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5pbnNpZ2h0cy1mb3JtJykgPT09IG51bGwgKSB7XHJcblxyXG5cdFx0XHRcdGJveC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuLWZpbHRlcicpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8g0YTQuNC70YzRgtGAINCyINCy0YvQtNCw0YfQtVxyXG5cclxuXHRcdFx0aWYgKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLmluc2lnaHRzLWNhdGFsb2ctZmlsdGVyX19pdGVtJykgPT09IG51bGwgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG9wZW5Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5zaWdodHMtY2F0YWxvZy1maWx0ZXJfX2J0bi5pcy1vcGVuJyk7XHJcblxyXG5cdFx0XHRcdGlmIChvcGVuQm94KSB7XHJcblxyXG5cdFx0XHRcdFx0b3BlbkJveC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBpbnB1dFxyXG5cclxuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRib3guY2xhc3NMaXN0LmFkZCgnaXMtb3Blbi1maWx0ZXInKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBjaGFuZ2VcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHJlcXVlc3RGb3JtKCkpO1xyXG5cclxuXHRcdC8vIGlucHV0IGtleXVwXHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRmb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW5vZW1wdHknLCBpbnB1dC52YWx1ZS5sZW5ndGggPiAwKTtcclxuXHJcblx0XHRcdGlmKGlucHV0LnZhbHVlLmxlbmd0aCA+IDIgJiYgZXZlbnQua2V5ICE9PSAnZW50ZXInKXtcclxuXHJcblx0XHRcdFx0cmVxdWVzdEZvcm0oKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyByZXNldFxyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW5vZW1wdHknKTtcclxuXHJcblx0XHRcdGlmICggaW5wdXQudmFsdWUubGVuZ3RoID09PSAwICkge1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWRlZmF1bHQnKTtcclxuXHRcdFx0XHRib3guY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3Blbi1maWx0ZXInKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGlucHV0LnZhbHVlID0gJyc7XHJcblx0XHRcdFx0aW5wdXQucmVtb3ZlQXR0cmlidXRlKCd2YWx1ZScpO1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGZvcm0ucXVlcnlTZWxlY3RvcignLmNoZWNrYm94LWJ0bl9faW5wdXQnKSwgY2hlY2tib3ggPT4ge1xyXG5cclxuXHRcdFx0XHRcdGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGNoZWNrYm94LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0cmVxdWVzdEZvcm0oKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyDQs9GA0YPQv9C/0Ysg0YHRgtGA0LDQvSDQv9C+INC60L7QvdGC0LjQvdC10L3RgtCw0LxcclxuXHJcblx0XHRBcnJheS5mcm9tKGNvdW50cnksIGVsID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGdyb3VwID0gZWwucXVlcnlTZWxlY3RvckFsbCgnLmluc2lnaHRzLWZvcm0tZmlsdGVyLWNoZWNrYm94LWdyb3VwX19pdGVtJyksXHJcblx0XHRcdFx0ICBjaGVja2JveCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pbnNpZ2h0cy1mb3JtLWZpbHRlci1jaGVja2JveC1ncm91cF9fdHJpZ2dlcicpO1xyXG5cclxuXHRcdFx0Y2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShncm91cCwgZWwgPT4gZWwuY2hlY2tlZCA9IGNoZWNrYm94LmNoZWNrZWQpO1xyXG5cclxuXHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIHNlYXJjaFJlc3VsdFxyXG5cclxuXHRcdGNvbnN0IHNlYXJjaFJlc3VsdENoYW5nZUZpbHRlciA9ICggdGFyZ2V0LCBmaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5zaWdodHMtY2F0YWxvZy1maWx0ZXInKSApID0+IHtcclxuXHJcblx0XHRcdGxldCBuYW1lID0gdGFyZ2V0Lm5hbWU7XHJcblxyXG5cdFx0XHQvLyDQoNC10LnRgtC40L3Qs1xyXG5cclxuXHRcdFx0aWYgKCB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnNpZ2h0cy1jYXRhbG9nLWZpbHRlcl9fcmF0aW5nJykgKSB7XHJcblxyXG5cdFx0XHRcdGZvcm0uZWxlbWVudHNbdGFyZ2V0Lm5hbWVdLnZhbHVlID0gdGFyZ2V0LmNoZWNrZWQgPyB0YXJnZXQudmFsdWUgOiBcIlwiO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gY2hlY2tib3hcclxuXHJcblx0XHRcdGlmICggdGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcgKSB7XHJcblxyXG5cdFx0XHRcdC8vINCS0YHQtVxyXG5cclxuXHRcdFx0XHRjb25zdCBidG5BbGwgPSBmaWx0ZXIucXVlcnlTZWxlY3RvcignW25hbWU9XCInICsgbmFtZSArICdcIl1bdmFsdWU9XCJhbGxcIl0nKSxcclxuXHRcdFx0XHRcdCAgbGlzdE5vdEJ0bkFsbCA9IEFycmF5LmZyb20oZmlsdGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwiJyArIG5hbWUgKyAnXCJdJykpLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gYnRuQWxsKTtcclxuXHJcblx0XHRcdFx0aWYgKCBidG5BbGwgKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBidG5BbGwgPT09IHRhcmdldCApIHtcclxuXHJcblx0XHRcdFx0XHRcdEFycmF5LmZyb20obGlzdE5vdEJ0bkFsbCwgaW5wdXQgPT4gaW5wdXQuY2hlY2tlZCA9IGJ0bkFsbC5jaGVja2VkKTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0YnRuQWxsLmNoZWNrZWQgPSBsaXN0Tm90QnRuQWxsLmV2ZXJ5KCBpbnB1dCA9PiBpbnB1dC5jaGVja2VkID09PSB0cnVlICk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vINCf0YDQvtC00YPQutGCIC8g0JHQuNC30L3QtdGBIC8g0KDQtdCz0LjQvtC9IC8g0J/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70YxcclxuXHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaW5zaWdodHMtY2F0YWxvZy1maWx0ZXJfX2NhdCcpIHx8XHJcblx0XHRcdFx0XHR0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnNpZ2h0cy1jYXRhbG9nLWZpbHRlcl9fYmlzbmVzcycpIHx8XHJcblx0XHRcdFx0XHR0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnNpZ2h0cy1jYXRhbG9nLWZpbHRlcl9fY291bnRyeScpIHx8XHJcblx0XHRcdFx0XHR0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnNpZ2h0cy1jYXRhbG9nLWZpbHRlcl9fbWFudWZhY3R1cmVyJylcclxuXHRcdFx0XHQpIHtcclxuXHJcblx0XHRcdFx0XHRBcnJheS5mcm9tKGxpc3ROb3RCdG5BbGwsIGlucHV0ID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCInICsgaW5wdXQubmFtZSArICdcIl1bdmFsdWU9XCInICsgaW5wdXQudmFsdWUgKyAnXCJdJykuY2hlY2tlZCA9IGlucHV0LmNoZWNrZWQ7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0c2VhcmNoUmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCxcclxuXHRcdFx0XHQgIGZpbHRlciA9IHRhcmdldC5jbG9zZXN0KCcuaW5zaWdodHMtY2F0YWxvZy1maWx0ZXInKTtcclxuXHJcblx0XHRcdC8vINGE0LjQu9GM0YLRgCDQsiDQstGL0LTQsNGH0LVcclxuXHJcblx0XHRcdGlmICggZmlsdGVyICkge1xyXG5cclxuXHRcdFx0XHRzZWFyY2hSZXN1bHRDaGFuZ2VGaWx0ZXIodGFyZ2V0LCBmaWx0ZXIpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdHNlYXJjaFJlc3VsdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCxcclxuXHRcdFx0XHQgIGJ0bkZpbHRlciA9IHRhcmdldC5jbG9zZXN0KCcuaW5zaWdodHMtY2F0YWxvZy1maWx0ZXJfX2J0bicpO1xyXG5cclxuXHRcdFx0Ly8g0YTQuNC70YzRgtGAINC60L3QvtC/0LrQsFxyXG5cclxuXHRcdFx0aWYoIGJ0bkZpbHRlciApIHtcclxuXHJcblx0XHRcdFx0Y29uc3QgYm94VGFyZ2V0ID0gYnRuRmlsdGVyLmNsb3Nlc3QoJy5pbnNpZ2h0cy1jYXRhbG9nLWZpbHRlcl9faXRlbScpLFxyXG5cdFx0XHRcdFx0ICBsaXN0ID0gc2VhcmNoUmVzdWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnNpZ2h0cy1jYXRhbG9nLWZpbHRlcl9faXRlbScpO1xyXG5cclxuXHRcdFx0XHQvLyByZXNldCDQutC90L7Qv9C60LBcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShsaXN0LCBpdGVtID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGl0ZW0gPT09IGJveFRhcmdldCApIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmICggdGFyZ2V0LmNsb3Nlc3QoJy5pbnNpZ2h0cy1jYXRhbG9nLWZpbHRlcl9fYnRuLXJlc2V0JykgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGl0ZW0ucXVlcnlTZWxlY3RvcignLmluc2lnaHRzLWNhdGFsb2ctZmlsdGVyX19idG4nKS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1jaGVja2VkJyk7XHJcblx0XHRcdFx0XHRcdFx0aXRlbS5xdWVyeVNlbGVjdG9yKCcuaW5zaWdodHMtY2F0YWxvZy1maWx0ZXJfX2J0bi1yZXNldCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0XHRpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5pbnNpZ2h0cy1jYXRhbG9nLWZpbHRlcl9fYnRuLWNvdW50JykgJiYgaXRlbS5xdWVyeVNlbGVjdG9yKCcuaW5zaWdodHMtY2F0YWxvZy1maWx0ZXJfX2J0bi1jb3VudCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0QXJyYXkuZnJvbShpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWVdW3ZhbHVlXScpLCBpbnB1dCA9PiBpbnB1dC5jaGVja2VkID0gZmFsc2UpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRzZWFyY2hSZXN1bHRDaGFuZ2VGaWx0ZXIoaXRlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lXScpKTtcclxuXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGJ0bkZpbHRlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdGl0ZW0ucXVlcnlTZWxlY3RvcignLmluc2lnaHRzLWNhdGFsb2ctZmlsdGVyX19idG4nKS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluc2lnaHRzLXBhZ2UnKSk7IiwiKCBmb3JtcyA9PiB7XHJcblxyXG5cdGlmKCFmb3Jtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcbi8qXHRBcnJheS5mcm9tKGZvcm1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRjb25zdCBpbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmxpdmUtc2VhcmNoX19pbnB1dCcpLFxyXG5cdFx0XHQgIHJlc3VsdCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmxpdmUtc2VhcmNoX19yZXN1bHQnKTtcclxuXHJcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGlmKGlucHV0LnZhbHVlLmxlbmd0aCA+IDIgJiYgZXZlbnQua2V5ICE9PSAnZW50ZXInKXtcclxuXHJcblx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdsaXZlLXNlYXJjaC0tbG9hZGluZycsICdsaXZlLXNlYXJjaC0tb3BlbicpO1xyXG5cclxuXHRcdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcblx0XHRcdFx0LnRoZW4oaHRtbCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coaHRtbCk7XHJcblxyXG5cdFx0XHRcdFx0cmVzdWx0LmlubmVySFRNTCA9IGh0bWw7XHJcblx0XHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2xpdmUtc2VhcmNoLS1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8g0YHQutGA0YvRgtGMINGA0YPQt9C10LvRjNGC0LDRgtGLINC/0YDQuCDQutC70LjQutC1INCy0L3QtSDRhNC+0YDQvNGLXHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlzRm9ybSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubGl2ZS1zZWFyY2gnKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGZvcm1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRcdGlmKGlzRm9ybSAhPT0gZm9ybSkge1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2xpdmUtc2VhcmNoLS1vcGVuJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pOyovXHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGl2ZS1zZWFyY2gnKSk7IiwiKCBwYWdlID0+IHtcclxuXHJcblx0aWYocGFnZSkge1xyXG5cclxuXHRcdGNvbnN0IGNvbnRlbnQgPSBwYWdlLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXBhZ2VfX2NvbnRlbnQnKTtcclxuXHJcblx0XHRpZiAoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpIHtcclxuXHJcblx0XHRcdGNvbnN0IGNhbGxiYWNrID0gKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oZW50cmllcywgZW50cnkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2ssIHtcclxuXHRcdFx0XHR0aHJlc2hvbGQ6IDFcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRvYnNlcnZlci5vYnNlcnZlKGNvbnRlbnQpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tcGFnZScpKTsiLCIoIGVsZW1zID0+IHtcclxuXHJcblx0aWYoIWVsZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHRzY3JpcHQuc3JjID0gJy9qcy9pbnB1dG1hc2subWluLmpzJztcclxuXHRzY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG5cclxuXHRcdEFycmF5LmZyb20oZWxlbXMsIGVsID0+IHtcclxuXHJcblx0XHRcdGxldCBtYXNrSW5wdXQ7XHJcblxyXG5cdFx0XHRpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0bWFzay0tcGhvbmUnKSkge1xyXG5cclxuXHRcdFx0XHRtYXNrSW5wdXQgPSBuZXcgSW5wdXRtYXNrKHtcclxuXHRcdFx0XHRcdG1hc2s6IFwiKzcgKDk5OSkgOTk5IDk5IDk5XCIsXHJcblx0XHRcdFx0XHRzaG93TWFza09uSG92ZXI6IGZhbHNlXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtYXNrSW5wdXQubWFzayhlbCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH07XHJcblxyXG5cdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KSwgQ29va2llcy5nZXQoJ2Zhc3RMb2FkU2NyaXB0JykgPyAwIDogMTAwMDApO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0bWFzaycpKTsiLCIvLyBidG4gdG9nZ2xlXHJcblxyXG4vKiggYnRuID0+IHtcclxuXHJcblx0aWYoYnRuKSB7XHJcblxyXG5cdFx0bGV0IHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZihkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnbWVudS1zaG93JykpIHtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXNob3cnKTtcclxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCx3aW5kb3dTY3JvbGwpO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21lbnUtc2hvdycpO1xyXG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLW1lbnUtdG9nZ2xlJykpO1xyXG4qL1xyXG4vLyBtZW51IHNlcnZpY2VcclxuXHJcbiggbWVudSA9PiB7XHJcblxyXG5cdGlmKG1lbnUpIHtcclxuXHJcblx0XHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyksXHJcblx0XHRcdCAgbWVudVVzZXIgPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdXNlcicpO1xyXG5cclxuXHRcdGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBpdGVtID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tZW51X19pdGVtJyk7XHJcblxyXG5cdFx0XHRpZihpdGVtICE9PSBudWxsKSB7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1zZXJ2aWNlLXNob3cnLCBpdGVtLmNsYXNzTGlzdC5jb250YWlucygnbWVudV9fc2VydmljZScpKTtcclxuXHRcdFx0XHRtZW51VXNlciAmJiBtZW51VXNlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtc2VydmljZS1zaG93Jyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cclxuXHRcdC8vIG1lbnUgdXNlclxyXG5cclxuXHRcdGlmKG1lbnVVc2VyKSB7XHJcblxyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0aWYoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuaGVhZGVyX191c2VyLWJ0bicpICl7XHJcblxyXG5cdFx0XHRcdFx0bWVudVVzZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuaGVhZGVyX191c2VyJykgPT09IG51bGwgKXtcclxuXHJcblx0XHRcdFx0XHRtZW51VXNlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtc2VydmljZScpKTtcclxuXHJcblxyXG4vLyBzY3JvbGxcclxuXHJcbiggaGVhZGVyICA9PiB7XHJcblxyXG5cdGlmKGhlYWRlcikge1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuXHJcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcclxuXHJcblx0XHRcdFx0aWYoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLXNob3cnKSA9PT0gZmFsc2UgJiYgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtc2hvdycpID09PSBmYWxzZSkge1xyXG5cclxuXHRcdFx0XHRcdGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXItLXJlZHVjZScsIHdpbmRvdy5wYWdlWU9mZnNldCA+IDApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpKTsiLCIoIG1vZGFsID0+IHtcclxuXHJcblx0aWYoIW1vZGFsKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19pdGVtJyksXHJcblx0XHQgIGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbF0nKSxcclxuXHRcdCAgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyksXHJcblx0XHQgIGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcclxuXHJcblx0bGV0IGFjdGl2ZU1vZGFsID0gbnVsbCxcclxuXHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignaGlkZScsICgpID0+IHtcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXNob3cnKTtcclxuXHRcdHdyYXBwZXIuc3R5bGUudG9wID0gMDtcclxuXHRcdGhlYWRlci5zdHlsZS50b3AgPSAwO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsd2luZG93U2Nyb2xsKTtcclxuXHRcdGFjdGl2ZU1vZGFsID0gZmFsc2U7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuXHJcblx0XHRcdG1vZGFsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiaGlkZVwiKSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Y29uc3QgbW9kYWxTaG93ID0gc2VsZWN0b3IgPT4ge1xyXG5cclxuXHRcdGlmKCFhY3RpdmVNb2RhbCl7XHJcblxyXG5cdFx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnc2VhcmNoLW9wZW4nLCBzZWxlY3RvciA9PT0gJ3NlYXJjaCcpO1xyXG5cclxuXHRcdGFjdGl2ZU1vZGFsID0gbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS0nICsgc2VsZWN0b3IpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oaXRlbXMsIGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc3VhbGx5aGlkZGVuJywgZWwgIT09IGFjdGl2ZU1vZGFsKSk7XHJcblxyXG5cdFx0d3JhcHBlci5zdHlsZS50b3AgPSAtd2luZG93U2Nyb2xsICsgJ3B4JztcclxuXHRcdGhlYWRlci5zdHlsZS50b3AgPSB3aW5kb3dTY3JvbGwgKyAncHgnO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1zaG93Jyk7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuXHJcblx0XHRhY3RpdmVNb2RhbC5mb2N1cygpO1xyXG5cclxuXHRcdFB1YlN1Yi5wdWJsaXNoKCdvcGVuLScgKyBzZWxlY3Rvcik7XHJcblxyXG5cdH07XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKCAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwnKSAmJiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2VhcmNoLW9wZW4nKSA9PT0gZmFsc2UpIHx8IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubW9kYWxfX2Nsb3NlJykpe1xyXG5cclxuXHRcdFx0bW9kYWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJoaWRlXCIpKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuXHRcdHdoaWxlICh0YXJnZXQgIT09IGRvY3VtZW50KSB7XHJcblxyXG5cdFx0XHRpZiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpKSB7XHJcblxyXG5cdFx0XHRcdG1vZGFsU2hvdyh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsJykpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignbW9kYWxTaG93JywgZXZlbnQgPT4gbW9kYWxTaG93KGV2ZW50LmRldGFpbC5zZWxlY3RvcikpO1xyXG5cclxuXHRtb2RhbC5vayA9ICh0aXRsZSwgdGV4dCwgbW9kID0gJycpID0+IHtcclxuXHJcblx0XHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLW9rJykuc2V0QXR0cmlidXRlKCdkYXRhLW1vZCcsIG1vZCk7XHJcblx0XHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLW9rIC5tb2RhbC1taW5pX190aXRsZScpLmlubmVySFRNTCA9IHRpdGxlID8gdGl0bGUgOiAnJztcclxuXHRcdG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tb2sgLm1vZGFsLW1pbmlfX3RleHQnKS5pbm5lckhUTUwgPSB0ZXh0ID8gdGV4dCA6ICcnO1xyXG5cdFx0bW9kYWxTaG93KCdvaycpO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKSk7IiwiKCBub3RpZmljYXRpb24gPT4ge1xuXG5cdGlmKCFub3RpZmljYXRpb24pIHtcblxuXHRcdHJldHVybjtcblxuXHR9XG5cblx0Y29uc3QgYm94ID0gbm90aWZpY2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5jZW50ZXInKSxcblx0XHQgIHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGlmaWNhdGlvbi10ZW1wbGF0ZScpLmlubmVySFRNTDtcblxuXHR3aW5kb3cubm90aWZpY2F0aW9uID0gKGhlYWQsIHRleHQsIHRpbWVyID0gMy4zKSA9PiB7XG5cblx0XHRib3guaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUsIHsgaGVhZCwgdGV4dCB9KSk7XG5cblx0XHRjb25zdCBpdGVtID0gYm94LnF1ZXJ5U2VsZWN0b3IoJy5pcy1uZXcnKTtcblxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcblxuXHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1uZXcnKTtcblx0XHRcdGl0ZW0uc3R5bGUuaGVpZ2h0ID0gaXRlbS5jbGllbnRIZWlnaHQgKyAncHgnO1xuXG5cdFx0fSwgMTAwKTtcblxuXHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3cuY3NzQW5pbWF0aW9uKCd0cmFuc2l0aW9uJyksICgpID0+IHtcblxuXHRcdFx0aWYoIGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1oaWRlJykgKXtcblxuXHRcdFx0XHRpdGVtLnJlbW92ZSgpO1xuXG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cblx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtaGlkZScpO1xuXG5cdFx0fSk7XG5cblx0XHRzZXRUaW1lb3V0KCAoKT0+IHtcblxuXHRcdFx0aXRlbS5jbGFzc0xpc3QuYWRkKCdpcy1oaWRlJyk7XG5cblx0XHR9LCAxMDAwICogdGltZXIpO1xuXG5cdH1cblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGlmaWNhdGlvbicpKTsiLCIoIGZvcm0gPT4ge1xyXG5cclxuXHRpZighZm9ybSkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBpbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLnNlYXJjaF9faW5wdXQnKSxcclxuXHRcdCAgcmVzdWx0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19yZXN1bHQtaW5uZXInKTtcclxuXHJcblx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoaW5wdXQudmFsdWUubGVuZ3RoID4gMiAmJiBldmVudC5rZXkgIT09ICdlbnRlcicpe1xyXG5cclxuXHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcclxuXHRcdFx0LnRoZW4oaHRtbCA9PiB7XHJcblxyXG5cdFx0XHRcdHJlc3VsdC5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Y29uc3Qgc2V0SGVpZ2h0ID0gKCkgPT4ge1xyXG5cclxuXHRcdGNvbnN0IHJlY3QgPSByZXN1bHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRyZXN1bHQuc3R5bGUubWF4SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gcmVjdC50b3AgKyAncHgnO1xyXG5cclxuXHR9O1xyXG5cclxuXHRQdWJTdWIuc3Vic2NyaWJlKCdvcGVuLXNlYXJjaCcsICgpID0+IHtcclxuXHJcblx0XHRpbnB1dC5mb2N1cygpO1xyXG5cclxuXHRcdHNldEhlaWdodCgpO1xyXG5cclxuXHR9KTtcclxuXHJcblx0UHViU3ViLnN1YnNjcmliZSgnd2luZG93V2lkdGhSZXNpemUnLCAoKSA9PiBzZXRIZWlnaHQoKSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoJykpOyIsIndpbmRvdy5zZWxlY3RzID0gc2VsZWN0ID0+IHtcclxuXHJcblx0aWYoc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2xpc3QnKSkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0ICBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcblx0YXJyb3cuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIyOVwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyOSAyNFwiPjxwYXRoIGQ9XCJtOS44NSA5IDQuNSA1IDQuNS01aC05WlwiLz48L3N2Zz4nO1xyXG5cclxuXHR2YWx1ZS5jbGFzc05hbWUgPSAnc2VsZWN0X192YWx1ZSc7XHJcblx0dmFsdWUuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwic2VsZWN0X192YWx1ZS1pbm5lclwiPjwvc3Bhbj4nO1xyXG5cclxuXHR2YWx1ZS5hcHBlbmRDaGlsZChhcnJvdyk7XHJcblx0c2VsZWN0LmFwcGVuZENoaWxkKHZhbHVlKTtcclxuXHJcblx0Y29uc3QgZm9ybSA9IHNlbGVjdC5jbG9zZXN0KCdmb3JtJyksXHJcblx0XHRjb250cm9sID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLFxyXG5cdFx0b3B0aW9uID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpLFxyXG5cdFx0dmFsdWVUZXh0ID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX3ZhbHVlLWlubmVyJyksXHJcblx0XHRmaWx0ZXIgPSBzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3QtLWZpbHRlcicpLFxyXG5cdFx0bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRsaXN0LmNsYXNzTmFtZSA9ICdzZWxlY3RfX2xpc3QnO1xyXG5cclxuXHRsZXQgc2VsZWN0ZWQgPSBjb250cm9sLnF1ZXJ5U2VsZWN0b3IoJ1t2YWx1ZT1cIicgKyBjb250cm9sLnZhbHVlICsgJ1wiXScpO1xyXG5cclxuXHRjb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHNlbGVjdGVkID0gY29udHJvbC5xdWVyeVNlbGVjdG9yKCdbdmFsdWU9XCInICsgY29udHJvbC52YWx1ZSArICdcIl0nKTtcclxuXHJcblx0XHR2YWx1ZVRleHQudGV4dENvbnRlbnQgPSBzZWxlY3RlZC50ZXh0Q29udGVudDtcclxuXHJcblx0XHRzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0LS1kZWZhdWx0Jyk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB2YWx1ZURlZmF1bHQgPSBzZWxlY3RlZC50ZXh0Q29udGVudDtcclxuXHJcblx0aWYoY29udHJvbC5kaXNhYmxlZCl7XHJcblxyXG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC0tZGlzYWJsZWQnKTtcclxuXHJcblx0fVxyXG5cclxuXHRpZihjb250cm9sLnZhbHVlID09PSAnbm9uZScgfHwgY29udHJvbC52YWx1ZSA9PT0gJycpe1xyXG5cclxuXHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtLWRlZmF1bHQnKTtcclxuXHJcblx0fVxyXG5cclxuXHRpZiAoY29udHJvbC52YWx1ZSAhPT0gJycpIHtcclxuXHJcblx0XHR2YWx1ZVRleHQudGV4dENvbnRlbnQgPSBzZWxlY3QucXVlcnlTZWxlY3Rvcignb3B0aW9uW3ZhbHVlPVwiJyArIGNvbnRyb2wudmFsdWUgKyAnXCJdJykudGV4dENvbnRlbnQ7XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShvcHRpb24sIGVsID0+IHtcclxuXHJcblx0XHRjb25zdCBvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG5cdFx0by5jbGFzc05hbWUgPSAnYnV0dG9uIHNlbGVjdF9fbGlzdC1pdGVtJztcclxuXHJcblx0XHRvLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuXHRcdG8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsLmdldEF0dHJpYnV0ZSgndmFsdWUnKSk7XHJcblxyXG5cdFx0by50ZXh0Q29udGVudCA9IGVsLnRleHRDb250ZW50O1xyXG5cclxuXHRcdGxpc3QuYXBwZW5kQ2hpbGQobyk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRpZihmaWx0ZXIpe1xyXG5cclxuXHRcdGNvbnN0IGlucHV0RmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcblx0XHRpbnB1dEZpbHRlci5jbGFzc05hbWUgPSAnc2VsZWN0X19maWx0ZXIgaW5wdXQnO1xyXG5cclxuXHRcdHZhbHVlLmFwcGVuZENoaWxkKGlucHV0RmlsdGVyKTtcclxuXHJcblx0XHRpbnB1dEZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHZhbHVlID0gaW5wdXRGaWx0ZXIudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdGlmKHZhbHVlLmxlbmd0aCA+IDEpIHtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShsaXN0LmNoaWxkcmVuLCBvID0+IHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCB0ZXh0ID0gby50ZXh0Q29udGVudC50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdFx0XHRvLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCB0ZXh0LmluZGV4T2YodmFsdWUpID09PSAtMSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpZihsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RfX2xpc3QtaXRlbScpLmxlbmd0aCA9PT0gbGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19saXN0LWl0ZW0uaGlkZScpLmxlbmd0aCkge1xyXG5cclxuXHRcdFx0XHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtLWZpbHRlci1lbXB0eScpO1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3QtLWZpbHRlci1lbXB0eScpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGxpc3QuY2hpbGRyZW4sIG8gPT4gby5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0X19saXN0LWl0ZW0nKSl7XHJcblxyXG5cdFx0XHRjb250cm9sLnZhbHVlID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxuXHJcblx0XHRcdGNvbnRyb2wuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdFx0aWYoZm9ybSkge1xyXG5cclxuXHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRzZWxlY3QuYXBwZW5kQ2hpbGQobGlzdCk7XHJcblxyXG5cdGZvcm0gJiYgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwicmVzZXRcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtLWRlZmF1bHQnKTtcclxuXHRcdHZhbHVlVGV4dC50ZXh0Q29udGVudCA9IHZhbHVlRGVmYXVsdDtcclxuXHJcblx0fSk7XHJcblxyXG59O1xyXG5cclxuKCAoKSA9PiB7XHJcblxyXG5cdHdpbmRvdy5zZWxlY3RzQ29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QnKTtcclxuXHJcblx0aWYod2luZG93LnNlbGVjdHNDb2xsZWN0aW9uLmxlbmd0aCkge1xyXG5cclxuXHRcdEFycmF5LmZyb20od2luZG93LnNlbGVjdHNDb2xsZWN0aW9uLCBzZWxlY3QgPT4gd2luZG93LnNlbGVjdHMoc2VsZWN0KSk7XHJcblxyXG5cdH1cclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaXNTZWxlY3QgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNlbGVjdCcpO1xyXG5cclxuXHRcdEFycmF5LmZyb20od2luZG93LnNlbGVjdHNDb2xsZWN0aW9uLCBzZWxlY3QgPT4ge1xyXG5cclxuXHRcdFx0c2VsZWN0LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdC0tb3BlbicsIHNlbGVjdCA9PT0gaXNTZWxlY3QgJiYgaXNTZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3QtLW9wZW4nKSA9PT0gZmFsc2UpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKCk7IiwiKCBzd2lwZXJDb250YWluZXIgPT4ge1xyXG5cclxuXHRpZighc3dpcGVyQ29udGFpbmVyLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKHN3aXBlckNvbnRhaW5lciwgc3dpcGUgPT4ge1xyXG5cclxuXHRcdGxldCBteVN3aXBlID0gbnVsbCxcclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSBudWxsLFxyXG5cdFx0XHRyZXNldFN3aXBlID0gbnVsbDtcclxuXHJcblx0XHRjb25zdCBzd2lwZUNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRcdCAgc3dpcGVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdFx0ICBzd2lwZUJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdFx0ICBzd2lwZU5leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuXHRcdFx0ICBzd2lwZVByZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuXHRcdFx0ICBzY3JvbGxiYXIgPSBzd2lwZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItc2Nyb2xsYmFyJyksXHJcblx0XHRcdCAgaXRlbXMgPSBzd2lwZS5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLXNsaWRlJyksXHJcblx0XHRcdCAgY291bnQgPSBpdGVtcy5sZW5ndGgsXHJcblx0XHRcdCAgaW5zaWdodHNHYWxsZXJ5ID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1nYWxsZXJ5LWluc2lnaHRzJyk7XHJcblxyXG5cdFx0c3dpcGVOYXYuY2xhc3NOYW1lID0gJ3N3aXBlci1wYWdpbmF0aW9uJztcclxuXHRcdHN3aXBlQ29udHJvbHMuY2xhc3NOYW1lID0gJ3N3aXBlci1jb250cm9scyc7XHJcblxyXG5cdFx0c3dpcGVCdG5zLmNsYXNzTmFtZSA9ICdzd2lwZXItbmF2aWdhdGlvbic7XHJcblx0XHRzd2lwZVByZXYuY2xhc3NOYW1lID0gJ3N3aXBlci1idXR0b24tcHJldiBidXR0b24nO1xyXG5cdFx0c3dpcGVOZXh0LmNsYXNzTmFtZSA9ICdzd2lwZXItYnV0dG9uLW5leHQgYnV0dG9uJztcclxuXHJcblx0XHRzd2lwZVByZXYuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywnUHJldmlvdXMgc2xpZGUnKTtcclxuXHRcdHN3aXBlTmV4dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCdOZXh0IHNsaWRlJyk7XHJcblxyXG5cdFx0c3dpcGVQcmV2LmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMjZcIiBoZWlnaHQ9XCIyNlwiIHZpZXdCb3g9XCIwIDAgMjYgMjZcIj48cGF0aCBkPVwiTTggMTMuNSAxNi40OSA1IDE4IDYuNTFsLTYuOTggNi45OUwxOCAyMC40OSAxNi40OSAyMiA4IDEzLjVaXCIvPjwvc3ZnPic7XHJcblx0XHRzd2lwZU5leHQuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIyNlwiIGhlaWdodD1cIjI2XCIgdmlld0JveD1cIjAgMCAyNiAyNlwiPjxwYXRoIGQ9XCJNMTggMTIuNSA5LjUxIDIxIDggMTkuNDlsNi45OC02Ljk5TDggNS41MSA5LjUxIDQgMTggMTIuNVpcIi8+PC9zdmc+JztcclxuXHJcblx0XHRzd2lwZUJ0bnMuYXBwZW5kQ2hpbGQoc3dpcGVQcmV2KTtcclxuXHRcdHN3aXBlQnRucy5hcHBlbmRDaGlsZChzd2lwZU5leHQpO1xyXG5cdFx0c3dpcGVDb250cm9scy5hcHBlbmRDaGlsZChzd2lwZUJ0bnMpO1xyXG5cdFx0c3dpcGVDb250cm9scy5hcHBlbmRDaGlsZChzd2lwZU5hdik7XHJcblxyXG5cdFx0cmVzZXRTd2lwZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdGlmKG15U3dpcGUpIHtcclxuXHJcblx0XHRcdFx0bXlTd2lwZS5kZXN0cm95KGZhbHNlLHRydWUpO1xyXG5cdFx0XHRcdG15U3dpcGUgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdHN3aXBlQ29udHJvbHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0c3dpcGUucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChpbnNpZ2h0c0dhbGxlcnkpIHtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHR0b2dnbGVTd2lwZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0XHRuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRsb29wIDogdHJ1ZSxcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXcgOiBcImF1dG9cIixcclxuXHRcdFx0XHRcdG5hdmlnYXRpb24gOiB7XHJcblx0XHRcdFx0XHRcdG5leHRFbCA6IHN3aXBlTmV4dCxcclxuXHRcdFx0XHRcdFx0cHJldkVsIDogc3dpcGVQcmV2XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdFB1YlN1Yi5zdWJzY3JpYmUoJ3dpbmRvd1dpZHRoUmVzaXplJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKHdpbmRvdy5Td2lwZXIgJiYgdG9nZ2xlU3dpcGUpIHtcclxuXHJcblx0XHRcdFx0dG9nZ2xlU3dpcGUoKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRQdWJTdWIuc3Vic2NyaWJlKCdzd2lwZXJKc0xvYWQnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRzd2lwZS5hcHBlbmRDaGlsZChzd2lwZUNvbnRyb2xzKTtcclxuXHJcblx0XHRcdC8vIGVhZ2VyXHJcblx0XHRcdEFycmF5LmZyb20oc3dpcGUucXVlcnlTZWxlY3RvckFsbCgnW2xvYWRpbmc9XCJsYXp5XCJdJyksIGltZyA9PiBpbWcuc2V0QXR0cmlidXRlKCdsb2FkaW5nJywnZWFnZXInKSk7XHJcblxyXG5cdFx0XHQvLyBoaWRlXHJcblx0XHRcdEFycmF5LmZyb20oaXRlbXMsIGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XHJcblxyXG5cdFx0XHR0b2dnbGVTd2lwZSgpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Y29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblxyXG5cdHNjcmlwdC5zcmMgPSAnL2pzL3N3aXBlci5taW4uanMnO1xyXG5cclxuXHRzY3JpcHQub25sb2FkID0gKCkgPT4gUHViU3ViLnB1Ymxpc2goJ3N3aXBlckpzTG9hZCcpO1xyXG5cclxuXHRzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCksIENvb2tpZXMuZ2V0KCdmYXN0TG9hZFNjcmlwdCcpID8gMCA6IDEwMDAwKTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItY29udGFpbmVyJykpOyIsIi8qKCB0b29sdGlwcyA9PiB7XHJcblxyXG5cdGlmKHRvb2x0aXBzLmxlbmd0aCl7XHJcblxyXG5cdFx0QXJyYXkuZnJvbSh0b29sdGlwcywgdG9vbHRpcCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcblx0XHRcdHRpdGxlLmNsYXNzTmFtZSA9ICd0b29sdGlwLXRpdGxlX19pbm5lcic7XHJcblxyXG5cdFx0XHR0aXRsZS50ZXh0Q29udGVudCA9IHRvb2x0aXAuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xyXG5cdFx0XHR0b29sdGlwLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHRcdFx0dG9vbHRpcC5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b29sdGlwLXRpdGxlJykpO1xyXG4qL1xyXG4oIHRvb2x0aXBzID0+IHtcclxuXHJcblx0aWYodG9vbHRpcHMubGVuZ3RoKXtcclxuXHJcblx0XHRjb25zdCBpY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXHJcblx0XHRcdCAgaWNvQWNodHVuZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcblx0XHRpY28uaW5uZXJIVE1MID0gJzxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIwIDEyYTggOCAwIDExLTE2IDAgOCA4IDAgMDExNiAwem0tNS43NC0zLjg3YTMuMTggMy4xOCAwIDAxLjU2IDMuNzhjLS4zOC43LTEgMS4yMi0xLjc0IDEuNDlhLjQuNCAwIDAwLS4yOC4zOHYuNjJhLjguOCAwIDAxLTEuNiAwVjEyLjhBLjguOCAwIDAxMTIgMTJjLjg4IDAgMS42LS43MiAxLjYtMS42YTEuNiAxLjYgMCAwMC0zLjIgMCAuOC44IDAgMDEtMS41OS4wOGwtLjAxLS4xMmMuMDEtMiAxLjg2LTMuNTUgMy45NS0zLjA3LjU3LjEzIDEuMS40MiAxLjUxLjg0ek0xMi44IDE2LjhhLjguOCAwIDExLTEuNiAwIC44LjggMCAwMTEuNiAwelwiLz48L3N2Zz4nO1xyXG5cclxuXHRcdGljb0FjaHR1bmcuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAxMiAxMlwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTExIDZBNSA1IDAgMSAxIDEgNmE1IDUgMCAwIDEgMTAgMFpNNSA3VjJoMnY1SDVabTIuMDMgMWgtMnYySDdsLjAzLTJaXCIvPjwvc3ZnPic7XHJcblxyXG5cdFx0bGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25SZWNvcmRzID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHQgPSBtdXRhdGlvblJlY29yZHNbMF0udGFyZ2V0LFxyXG5cdFx0XHRcdCAgaW5uZXIgPSB0LnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwLWhlbHBfX2lubmVyJyk7XHJcblxyXG5cdFx0XHRpZih0Lm9wZW4pIHtcclxuXHJcblx0XHRcdFx0Y29uc3QgcmVjdCA9IGlubmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHRcdFx0XHRpZihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPCByZWN0LnJpZ2h0KSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8g0LvQtdCy0LXQtVxyXG5cclxuXHRcdFx0XHRcdGlubmVyLnN0eWxlLm1hcmdpbkxlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSByZWN0LnJpZ2h0ICsgJ3B4JztcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmKHJlY3QubGVmdCA8IDApIHtcclxuXHJcblx0XHRcdFx0XHQvLyDQv9GA0LDQstC10LVcclxuXHJcblx0XHRcdFx0XHRpbm5lci5zdHlsZS5tYXJnaW5MZWZ0ID0gLXJlY3QubGVmdCArICdweCc7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGlubmVyLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRBcnJheS5mcm9tKHRvb2x0aXBzLCB0b29sdGlwID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGJ0biA9IHRvb2x0aXAucXVlcnlTZWxlY3RvcignLnRvb2x0aXAtaGVscF9fYnRuJyk7XHJcblxyXG5cdFx0XHRpZiAoIHRvb2x0aXAuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b29sdGlwLWhlbHAtLWFjaHR1bmcnKSApIHtcclxuXHJcblx0XHRcdFx0YnRuLmFwcGVuZENoaWxkKGljb0FjaHR1bmcuY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGJ0bi5hcHBlbmRDaGlsZChpY28uY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG9ic2VydmVyLm9ic2VydmUodG9vbHRpcCwge1xyXG5cclxuXHRcdFx0XHRhdHRyaWJ1dGVzIDogdHJ1ZVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRvb2x0aXAtaGVscCcpO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbSh0b29sdGlwcywgdG9vbHRpcCA9PiB7XHJcblxyXG5cdFx0XHRcdGlmKHRhcmdldCAhPT0gdG9vbHRpcCkge1xyXG5cclxuXHRcdFx0XHRcdHRvb2x0aXAub3BlbiA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvb2x0aXAtaGVscCcpKTsiLCIoIGJ0bnMgPT4ge1xyXG5cclxuXHRpZiggYnRucy5sZW5ndGggPT09IDAgKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGlmICggQ29va2llcy5nZXQoJ2xhbmcnKSA9PT0gJ2VuJyApIHtcclxuXHJcblx0XHRjb25zdCB5dFdpZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0eXRXaWRnZXQuaWQgPSAneXRXaWRnZXQnO1xyXG5cdFx0eXRXaWRnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHl0V2lkZ2V0KTtcclxuXHJcblx0XHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHRcdHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vdHJhbnNsYXRlLnlhbmRleC5uZXQvd2Vic2l0ZS13aWRnZXQvdjEvd2lkZ2V0LmpzP3dpZGdldElkPXl0V2lkZ2V0JnBhZ2VMYW5nPXJ1JndpZGdldFRoZW1lPWxpZ2h0JmF1dG9Nb2RlPWZhbHNlXCI7XHJcblxyXG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oYnRucywgZWwgPT4ge1xyXG5cclxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3l0LXdpZGdldCcsIEpTT04uc3RyaW5naWZ5KHtcclxuXHRcdFx0XHRcImxhbmdcIjogZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWxhbmcnKSxcclxuXHRcdFx0XHRcImFjdGl2ZVwiOiB0cnVlXHJcblx0XHRcdH0pKTtcclxuXHJcblx0XHRcdENvb2tpZXMuc2V0KCdsYW5nJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWxhbmcnKSk7XHJcblxyXG5cdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19sYW5nLWJ0bicpKTsiXX0=
