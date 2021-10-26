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
window.datalists = datalist => {

	const arrow = document.createElement('span');

	arrow.className = 'input-datalist__arrow';
	arrow.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="m7.5 9 4.5 5 4.5-5h-9Z"/></svg>';

	datalist.appendChild(arrow);

	const control = datalist.querySelector('input'),
		option = datalist.querySelectorAll('option'),
		list = document.createElement('div');

	list.className = 'input-datalist__list';

	Array.from(option, el => {

		const o = document.createElement('button');

		o.className = 'button input-datalist__list-item';

		o.setAttribute('type', 'button');

		o.textContent = el.getAttribute('value');

		list.appendChild(o);

		o.addEventListener("click", () => {

			control.value = o.textContent;

			control.dispatchEvent(new CustomEvent("change"));

		});

	});

	control.addEventListener('focus', () => {

		setTimeout( ()=> datalist.classList.add('is-focus'), 100);

	});

	window.addEventListener("click", event => {

		if (event.target !== control ) {

			datalist.classList.remove('is-focus');

		}

	});

	control.addEventListener('input', () => {

		const value = control.value.toLowerCase();

		if(value.length > 1) {

			Array.from(list.children, o => {

				const text = o.textContent.trim().toLowerCase();

				o.classList.toggle('hide', text.indexOf(value) === -1);

			});

			if(list.querySelectorAll('.input-datalist__list-item').length === list.querySelectorAll('.input-datalist__list-item.hide').length) {

				control.classList.add('is-empty');
				list.classList.add('hide');

			} else {

				control.classList.remove('is-empty');
				list.classList.remove('hide');

			}

		} else {

			Array.from(list.children, o => o.classList.remove('hide'));
			control.classList.remove('is-empty');
			list.classList.remove('hide');

		}

	});

	datalist.appendChild(list);

	datalist.querySelector('datalist').remove();

};

( () => {

	window.datalistsCollection = document.querySelectorAll('.input-datalist');

	if(window.datalistsCollection.length) {

		Array.from(window.datalistsCollection, datalist => window.datalists(datalist));

	}

})();

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

	// форма запроса цены в модалке

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

		const searchResult = document.querySelector('.docs-search-result'),
			  fieldsets = document.querySelectorAll('.docs-form__fieldset'),
			  formShort = document.querySelector('.docs-page--short');

		Array.from(forms, form => {

			// keywords

			if( form.classList.contains('docs-form--product') ) {

				const input = form.querySelector('.docs-form__input'),
					  reset = form.querySelector('.docs-form__reset'),
					  result = form.querySelector('.docs-form__result');

				// input

				input.addEventListener('keyup', event => {

					form.classList.toggle('is-noempty', input.value.length > 0);

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
							reset.classList.remove('hide');

						});

					}

				});

				form.addEventListener('reset', () => {

					reset.classList.add('hide');
					result.classList.add('hide');
					history.pushState(undefined, '', '?');

					searchResult.classList.add('is-loading');
					searchResult.innerHTML = '';

					setTimeout( ()=> {

						input.value = '';

						let url = form.getAttribute('action') + '?';

						new FormData(form).forEach((value, key) => {

							url += key + "=" + value + "&";

						});

						fetch(url)
							.then(response => response.text())
							.then(html => {

								const boxResult = document.createElement('div');

								boxResult.innerHTML = html;

								searchResult.innerHTML = boxResult.querySelector('.docs-search-result').innerHTML;

								searchResult.classList.remove('is-loading');
								input.focus();

							});

					}, 100);

				});

			}

			// карточки, номерклатура и разработчик

			if( form.classList.contains('docs-form--list') ) {

				form.addEventListener('change', () => {

					console.log(form, 'change');

					const formData = new FormData(form);

					const queryString = new URLSearchParams(formData).toString();

					history.pushState(undefined, '', '?' + queryString);

					let windowScroll = window.pageYOffset;

					if (document.querySelector('.docs-ajax__btn:disabled') ) {

						searchResult.classList.add('is-loading-add');

						windowScroll = window.pageYOffset;

					} else {

						searchResult.classList.add('is-loading');
						searchResult.innerHTML = '';

					}

					fetch(form.getAttribute('data-action'), {
						method: 'POST',
						body: formData
					})
					.then(response => response.text())
					.then(html => {

						// кнопка ещё

						if (document.querySelector('.docs-ajax__btn:disabled')) {

							const boxResult = document.createElement('div');

							boxResult.innerHTML = html;

							Array.from(boxResult.querySelectorAll('.docs-catalog__item'), item => {

								searchResult.querySelector('.docs-catalog__list').appendChild(item);

							});

							if ( boxResult.querySelector('.pagin') ) {

								searchResult.querySelector('.pagin').innerHTML = boxResult.querySelector('.pagin').innerHTML;

							}

							if( searchResult.querySelector('.docs-ajax__btn') ) {

								document.querySelector('.docs-ajax__btn').disabled = false;

							} else {

								document.querySelector('.docs-ajax').remove();

							}

							if( windowScroll !== window.pageYOffset ) {

								window.scrollTo(0,windowScroll);

							}

						} else {

							searchResult.innerHTML = html;

						}

						searchResult.classList.remove('is-loading','is-loading-add');

					});

					if(formShort === null) {

						formShort = true;

						document.body.classList.remove('page-blue');
						document.querySelector('.docs-page').classList.add('docs-page--short');
						document.querySelector('.docs-page__description').classList.add('hide');
						searchResult.classList.remove('hide');

					}

				});

				// submit

				form.addEventListener('submit', event => {

					event.preventDefault();

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

					btn.addEventListener('click', () => {

						fieldset.classList.remove('is-focus');

						input.value = btn.textContent.trim();

						reset.classList.remove('hide');

						form.classList.add('is-noempty');

						form.dispatchEvent(new CustomEvent("change"));

					});

				});

				input.addEventListener('input', () => {

					const value = input.value.toLowerCase();

					reset.classList.toggle('hide', value.length === 0);

					if(value.length > 1) {

						Array.from(datalist, btn => {

							const text = btn.textContent.trim().toLowerCase();

							btn.classList.toggle('hide', text.indexOf(value) === -1);

						});

						input.getAttribute('data-empty');

					} else {

						Array.from(datalist, btn => btn.classList.remove('hide'));

					}

				});

				// reset === clear

				reset.addEventListener('click', () => {

					Array.from(datalist, btn => btn.classList.remove('hide'));
					fieldset.classList.add('is-focus');
					reset.classList.add('hide');
					input.value = '';
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

					if ( event.target.name === 'all' && event.target.checked ) {

						value = event.target.parentNode.textContent.trim();

						Array.from(checkbox, el => el.checked = true);

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

					if( value === '' ) {

						reset.classList.add('hide');
						form.classList.remove('is-noempty');

					} else {

						reset.classList.remove('hide');
						form.classList.add('is-noempty');

					}

				});

				// reset === clear

				reset.addEventListener('click', () => {

					Array.from(checkbox, el => el.checked = false);
					fieldset.classList.add('is-focus');
					reset.classList.add('hide');
					input.value = '';
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

				document.querySelector('.docs-page__tabs-item.is-active').classList.remove('is-active');
				tabsBtn.classList.add('is-active');

				if( tabsBtn.classList.contains('docs-page__tabs-item--standarts') ) {

					document.querySelector('.docs-page__forms--standarts').classList.remove('hide');
					document.querySelector('.docs-page__forms--analytics').classList.add('hide');

					document.querySelector('.docs-search-result__standarts').classList.remove('hide');
					document.querySelector('.docs-search-result__analytics').classList.add('hide');

				}

				if( tabsBtn.classList.contains('docs-page__tabs-item--analytics') ) {

					document.querySelector('.docs-page__forms--analytics').classList.remove('hide');
					document.querySelector('.docs-page__forms--standarts').classList.add('hide');

					document.querySelector('.docs-search-result__analytics').classList.remove('hide');
					document.querySelector('.docs-search-result__standarts').classList.add('hide');

				}

			}

			// ajax

			if ( event.target.closest('.docs-ajax__btn') ) {

				document.querySelector('.docs-ajax__btn').disabled = true;

				const pagin = document.querySelector('.docs-form--list').elements['PAGEN_1'];

				pagin.value = parseInt(pagin.value) + 1;

				pagin.parentNode.dispatchEvent(new CustomEvent("change"));

			}

		});

	}

})(document.querySelectorAll('.docs-form'));
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

		// запрос цены в списке результатов Авторизован

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

				notification(json.notificationTitle,json.notificationText,json.notificationTimer);

			});

		}

	});

})();
( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, form => {

		const btn = form.querySelector('.form__submit'),
			  okText = form.querySelector('.form__ok'),
			  errorText = form.querySelector('.form__error');

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
/*
				if(result.msg) {

					form.reset();

					modal.ok(result.msg.title, result.msg.text);

				}

			// результат успеха заявки quality

				if(result.modal === 'quality-ok') {

					document.querySelector('.quality-result__number').textContent = result.number;
					document.querySelector('.quality-result__product').textContent = result.productName;
					document.querySelector('.quality-result__product').getAttribute('href', result.productLink);

					const eventModalShow = new CustomEvent("modalShow", {
						detail: {
							selector: result.modal
						}
					});

					window.modal.dispatchEvent(eventModalShow);

				}

			// info modal

				if(result.type === 'ok' || result.type === 'error') {

					modal.ok(result.title, result.text, result.mod);

				}

			// ok in form

				if(okText) {

					if(result.type === 'form-ok') {

						okText.textContent = result.text;
						okText.classList.remove('hide');

						if(!INTI.isInViewport(okText)){

							okText.scrollIntoView({ behavior: 'smooth' });

						}

					} else {

						okText.classList.add('hide');

					}

				}

			// error in form

				if(errorText) {

					if(result.type === 'form-error') {

						errorText.textContent = result.text;
						errorText.classList.remove('hide');

						if(!INTI.isInViewport(errorText)){

							errorText.scrollIntoView({ behavior: 'smooth' });

						}

					} else {

						errorText.classList.add('hide');

					}

				}

			// redirect

				if(result.redirect) {

					const delay = result.redirectDelay ? result.redirectDelay * 1000 : 0;

					setTimeout( ()=> location.assign(result.redirect), delay);

				}

			// fadeout

				if(result.fadeout) {

					okText.classList.remove('is-fadeout');

					setTimeout( ()=> okText.classList.add('is-fadeout'), result.fadeout * 1000);

				}

			// reset

				if(result.reset) {

					form.reset();

				}

			// reload

				if(result.refresh) {

					location.reload();

				}
*/
			});

		});

	});

})(document.querySelectorAll('.form'));

( files => {

	if(!files.length) {

		return;

	}

	Array.from(files, el => {

		const input = el.querySelector('.input-file__input'),
			  value = el.querySelector('.input-file__value');

		input.addEventListener('change', () => {

			el.classList.add('is-change');
			value.textContent = input.value;

		});

	});

})(document.querySelectorAll('.input-file'));
( formGetPrice => {

	if ( formGetPrice === null ) {

		return;

	}

	// клике в результатах поиска по кнопке Узнать стоимость

	const searchResult = document.querySelector('.docs-search-result');

	if ( searchResult ) {

		searchResult.addEventListener('click', event => {

			if( event.target.closest('.docs-catalog-item__request[data-modal="get-price"]') ) {

				formGetPrice.elements.id.value = event.target.closest('.docs-catalog-item__request[data-modal="get-price"]').getAttribute('data-id');

			}

		});

	}

	// обработка формы в модалке

	formGetPrice.addEventListener('submit', event => {

		event.preventDefault();

		fetch(form.getAttribute('action'), {
			method: 'POST',
			body: new FormData(form)
		})
		.then(response => response.json())
		.then(json => {

			console.log(json);

			if( json.id ) {

				const btnTarget = document.querySelector(`.docs-catalog-item__request[data-id="${json.id}"]`);

				btnTarget.textContent = btnTarget.getAttribute('data-done');
				btnTarget.disabled = true;

			}

			notification(json.notificationTitle,json.notificationText,json.notificationTimer);

		});

	});

})(document.querySelector('#form-get-price'));

( page => {

	if(page) {

		const searchResult = document.querySelector('.insights-search-result'),
			  box = page.querySelector('.insights-page__box'),
			  form = page.querySelector('.insights-form'),
			  input = form.querySelector('.insights-form__input');

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

		form.addEventListener('change', () => {

			console.log(form, 'change');

			const formData = new FormData(form);

			const queryString = new URLSearchParams(formData).toString();

			history.pushState(undefined, '', '?' + queryString);

			searchResult.classList.add('is-loading');

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: formData
			})
			.then(response => response.text())
			.then(html => {

				searchResult.classList.remove('is-loading');

			});

		});

		// input keyup

		input.addEventListener('keyup', event => {

			form.classList.toggle('is-noempty', input.value.length > 0);

			if(input.value.length > 2 && event.key !== 'enter'){

				searchResult.classList.add('is-loading');

				fetch(form.getAttribute('action'), {
					method: 'POST',
					body: new FormData(form)
				})
				.then(response => response.text())
				.then(html => {

					console.log(html);

					searchResult.innerHTML = html;
					searchResult.classList.remove('is-loading');

				});

			}

		});

		// reset

		form.addEventListener('reset', () => {

			form.classList.remove('is-noempty');

			setTimeout( ()=> {

				input.value = '';
				input.focus();

			},100);

		});

		// searchResult

		searchResult.addEventListener('change', event => {

			console.log(event.target);

			const target = event.target,
				  filter = target.closest('.insights-catalog-filter');

			// фильтр в выдаче

			if ( filter ) {

				if( target.type === 'checkbox' ) {

					// Все

					const name = target.getAttribute('name'),
						  btnAll = filter.querySelector('input[name="' + name + '"][value="all"]');

					if ( btnAll ) {

						const list = Array.from(filter.querySelectorAll('input[name="' + name + '"]')).filter(input => input !== btnAll);

						if ( target === btnAll ) {

							Array.from(list, input => input.checked = btnAll.checked);

						} else {

							btnAll.checked = list.every( input => input.checked === true );

						}

					}

				}

			}

			// Рейтинг

			if ( target.classList.contains('insights-catalog-filter__rating') ) {

				form.elements[target.getAttribute('name')].value = target.value;

			}

			// Производитель

			if ( target.classList.contains('insights-catalog-filter__manufacturer') ) {

				Array.from(searchResult.querySelectorAll('.insights-catalog-filter__manufacturer'), input => {

					const hiddenControl = form.querySelector('[name="' + input.getAttribute('name') + '"][value="' + input.value + '"]');

					if ( input.checked ) {

						if ( hiddenControl === null ) {

							const hiddenControl = document.createElement('input');

							hiddenControl.type = 'hidden';
							hiddenControl.value = input.value;
							hiddenControl.name = input.getAttribute('name');

							form.insertAdjacentElement('afterBegin', hiddenControl);

						}

					} else if (hiddenControl) {

						hiddenControl.remove();

					}

				});

			}

			// Продукт

			if ( target.classList.contains('insights-catalog-filter__cat') ) {

				Array.from(searchResult.querySelectorAll('.insights-catalog-filter__cat'), input => {

					form.querySelector('[name="' + input.getAttribute('name') + '"][value="' + input.value + '"]').checked = input.checked;

				});

			}

			// Бизнес

			if ( target.classList.contains('insights-catalog-filter__bisness') ) {

				Array.from(searchResult.querySelectorAll('.insights-catalog-filter__bisness'), input => {

					form.querySelector('[name="' + input.getAttribute('name') + '"][value="' + input.value + '"]').checked = input.checked;

				});

			}

			// Регион

			if ( target.classList.contains('insights-catalog-filter__country') ) {

				Array.from(searchResult.querySelectorAll('.insights-catalog-filter__country'), input => {

//					form.querySelector('[name="' + input.getAttribute('name') + '"][value="' + input.value + '"]').checked = input.checked;

				});

			}

			form.dispatchEvent(new CustomEvent("change"));

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
			  clients = swipe.classList.contains('swiper-container--clients'),
			  productGallery = swipe.classList.contains('swiper-container--gallery'),
			  productGalleryPreview = swipe.classList.contains('swiper-container--gallery-preview'),
			  billboard = swipe.classList.contains('swiper-container--billboard');

		swipeNav.className = 'swiper-pagination';
		swipeControls.className = 'swiper-controls';

		swipeBtns.className = 'swiper-navigation';
		swipePrev.className = 'swiper-button-prev button';
		swipeNext.className = 'swiper-button-next button';

		swipePrev.setAttribute('aria-label','Previous slide');
		swipeNext.setAttribute('aria-label','Next slide');

		swipePrev.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M9 11l4.6-4.6A.99.99 0 1115 7.8l-3.9 3.9 3.9 3.9a.99.99 0 01-1.4 1.4L9 12.41A1 1 0 019 11z"/></svg>';
		swipeNext.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M15 11a1 1 0 010 1.4L10.4 17A.99.99 0 019 15.6l3.9-3.9L9 7.8a.99.99 0 011.4-1.4L15 11z"/></svg>';

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

( tooltips => {

	if(tooltips.length){

		const ico = document.createElement('span');

		ico.innerHTML = '<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M20 12a8 8 0 11-16 0 8 8 0 0116 0zm-5.74-3.87a3.18 3.18 0 01.56 3.78c-.38.7-1 1.22-1.74 1.49a.4.4 0 00-.28.38v.62a.8.8 0 01-1.6 0V12.8A.8.8 0 0112 12c.88 0 1.6-.72 1.6-1.6a1.6 1.6 0 00-3.2 0 .8.8 0 01-1.59.08l-.01-.12c.01-2 1.86-3.55 3.95-3.07.57.13 1.1.42 1.51.84zM12.8 16.8a.8.8 0 11-1.6 0 .8.8 0 011.6 0z"/></svg>';

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

			btn.appendChild(ico.cloneNode(true));

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

})(document.querySelectorAll('.tooltip-help'));*/
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50VXAubWluLmpzIiwianMuY29va2llLm1pbi5qcyIsIm11c3RhY2hlLm1pbi5qcyIsInB1YnN1Yi5taW4uanMiLCJqcy5qcyIsImFjY291bnQuanMiLCJidG4tYmFjay5qcyIsImRhdGFsaXN0LmpzIiwiZG9jcy1pdGVtLmpzIiwiZG9jcy5qcyIsImZvcm0tc3VibWl0LmpzIiwiZm9ybS5qcyIsImdldC1wcmljZS5qcyIsImluc2lnaHRzLmpzIiwibGl2ZS1zZWFyY2guanMiLCJtYWluLmpzIiwibWFzay5qcyIsIm1lbnUuanMiLCJtb2RhbC5qcyIsIm5vdGlmaWNhdGlvbi5qcyIsInNlYXJjaC5qcyIsInNlbGVjdC5qcyIsInN3aXBlci5qcyIsInRvb2x0aXAuanMiLCJ5YXRyYW5zbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQ0ZBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNWJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25MQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGEsbil7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShuKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1uKHJlcXVpcmUsZXhwb3J0cyxtb2R1bGUpOmEuQ291bnRVcD1uKCl9KHRoaXMsZnVuY3Rpb24oYSxuLHQpe3JldHVybiBmdW5jdGlvbihhLG4sdCxlLGkscil7dmFyIHU9dGhpcztpZih1LnZlcnNpb249ZnVuY3Rpb24oKXtyZXR1cm5cIjEuOS4zXCJ9LHUub3B0aW9ucz17dXNlRWFzaW5nOiEwLHVzZUdyb3VwaW5nOiEwLHNlcGFyYXRvcjpcIixcIixkZWNpbWFsOlwiLlwiLGVhc2luZ0ZuOmZ1bmN0aW9uKGEsbix0LGUpe3JldHVybiB0KigxLU1hdGgucG93KDIsLTEwKmEvZSkpKjEwMjQvMTAyMytufSxmb3JtYXR0aW5nRm46ZnVuY3Rpb24oYSl7dmFyIG4sdCxlLGkscixvLHM9YTwwO2lmKGE9TWF0aC5hYnMoYSkudG9GaXhlZCh1LmRlY2ltYWxzKSxuPShhKz1cIlwiKS5zcGxpdChcIi5cIiksdD1uWzBdLGU9MTxuLmxlbmd0aD91Lm9wdGlvbnMuZGVjaW1hbCtuWzFdOlwiXCIsdS5vcHRpb25zLnVzZUdyb3VwaW5nKXtmb3IoaT1cIlwiLHI9MCxvPXQubGVuZ3RoO3I8bzsrK3IpMCE9PXImJnIlMz09MCYmKGk9dS5vcHRpb25zLnNlcGFyYXRvcitpKSxpPXRbby1yLTFdK2k7dD1pfXJldHVybiB1Lm9wdGlvbnMubnVtZXJhbHMubGVuZ3RoJiYodD10LnJlcGxhY2UoL1swLTldL2csZnVuY3Rpb24oYSl7cmV0dXJuIHUub3B0aW9ucy5udW1lcmFsc1srYV19KSxlPWUucmVwbGFjZSgvWzAtOV0vZyxmdW5jdGlvbihhKXtyZXR1cm4gdS5vcHRpb25zLm51bWVyYWxzWythXX0pKSwocz9cIi1cIjpcIlwiKSt1Lm9wdGlvbnMucHJlZml4K3QrZSt1Lm9wdGlvbnMuc3VmZml4fSxwcmVmaXg6XCJcIixzdWZmaXg6XCJcIixudW1lcmFsczpbXX0sciYmXCJvYmplY3RcIj09dHlwZW9mIHIpZm9yKHZhciBvIGluIHUub3B0aW9ucylyLmhhc093blByb3BlcnR5KG8pJiZudWxsIT09cltvXSYmKHUub3B0aW9uc1tvXT1yW29dKTtcIlwiPT09dS5vcHRpb25zLnNlcGFyYXRvcj91Lm9wdGlvbnMudXNlR3JvdXBpbmc9ITE6dS5vcHRpb25zLnNlcGFyYXRvcj1cIlwiK3Uub3B0aW9ucy5zZXBhcmF0b3I7Zm9yKHZhciBzPTAsbD1bXCJ3ZWJraXRcIixcIm1velwiLFwibXNcIixcIm9cIl0sbT0wO208bC5sZW5ndGgmJiF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOysrbSl3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lPXdpbmRvd1tsW21dK1wiUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdLHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZT13aW5kb3dbbFttXStcIkNhbmNlbEFuaW1hdGlvbkZyYW1lXCJdfHx3aW5kb3dbbFttXStcIkNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtmdW5jdGlvbiBkKGEpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBhJiYhaXNOYU4oYSl9d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oYSxuKXt2YXIgdD0obmV3IERhdGUpLmdldFRpbWUoKSxlPU1hdGgubWF4KDAsMTYtKHQtcykpLGk9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXthKHQrZSl9LGUpO3JldHVybiBzPXQrZSxpfSksd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lfHwod2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lPWZ1bmN0aW9uKGEpe2NsZWFyVGltZW91dChhKX0pLHUuaW5pdGlhbGl6ZT1mdW5jdGlvbigpe3JldHVybiEhdS5pbml0aWFsaXplZHx8KHUuZXJyb3I9XCJcIix1LmQ9XCJzdHJpbmdcIj09dHlwZW9mIGE/ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYSk6YSx1LmQ/KHUuc3RhcnRWYWw9TnVtYmVyKG4pLHUuZW5kVmFsPU51bWJlcih0KSxkKHUuc3RhcnRWYWwpJiZkKHUuZW5kVmFsKT8odS5kZWNpbWFscz1NYXRoLm1heCgwLGV8fDApLHUuZGVjPU1hdGgucG93KDEwLHUuZGVjaW1hbHMpLHUuZHVyYXRpb249MWUzKk51bWJlcihpKXx8MmUzLHUuY291bnREb3duPXUuc3RhcnRWYWw+dS5lbmRWYWwsdS5mcmFtZVZhbD11LnN0YXJ0VmFsLHUuaW5pdGlhbGl6ZWQ9ITApOih1LmVycm9yPVwiW0NvdW50VXBdIHN0YXJ0VmFsIChcIituK1wiKSBvciBlbmRWYWwgKFwiK3QrXCIpIGlzIG5vdCBhIG51bWJlclwiLCExKSk6ISh1LmVycm9yPVwiW0NvdW50VXBdIHRhcmdldCBpcyBudWxsIG9yIHVuZGVmaW5lZFwiKSl9LHUucHJpbnRWYWx1ZT1mdW5jdGlvbihhKXt2YXIgbj11Lm9wdGlvbnMuZm9ybWF0dGluZ0ZuKGEpO1wiSU5QVVRcIj09PXUuZC50YWdOYW1lP3RoaXMuZC52YWx1ZT1uOlwidGV4dFwiPT09dS5kLnRhZ05hbWV8fFwidHNwYW5cIj09PXUuZC50YWdOYW1lP3RoaXMuZC50ZXh0Q29udGVudD1uOnRoaXMuZC5pbm5lckhUTUw9bn0sdS5jb3VudD1mdW5jdGlvbihhKXt1LnN0YXJ0VGltZXx8KHUuc3RhcnRUaW1lPWEpO3ZhciBuPSh1LnRpbWVzdGFtcD1hKS11LnN0YXJ0VGltZTt1LnJlbWFpbmluZz11LmR1cmF0aW9uLW4sdS5vcHRpb25zLnVzZUVhc2luZz91LmNvdW50RG93bj91LmZyYW1lVmFsPXUuc3RhcnRWYWwtdS5vcHRpb25zLmVhc2luZ0ZuKG4sMCx1LnN0YXJ0VmFsLXUuZW5kVmFsLHUuZHVyYXRpb24pOnUuZnJhbWVWYWw9dS5vcHRpb25zLmVhc2luZ0ZuKG4sdS5zdGFydFZhbCx1LmVuZFZhbC11LnN0YXJ0VmFsLHUuZHVyYXRpb24pOnUuY291bnREb3duP3UuZnJhbWVWYWw9dS5zdGFydFZhbC0odS5zdGFydFZhbC11LmVuZFZhbCkqKG4vdS5kdXJhdGlvbik6dS5mcmFtZVZhbD11LnN0YXJ0VmFsKyh1LmVuZFZhbC11LnN0YXJ0VmFsKSoobi91LmR1cmF0aW9uKSx1LmNvdW50RG93bj91LmZyYW1lVmFsPXUuZnJhbWVWYWw8dS5lbmRWYWw/dS5lbmRWYWw6dS5mcmFtZVZhbDp1LmZyYW1lVmFsPXUuZnJhbWVWYWw+dS5lbmRWYWw/dS5lbmRWYWw6dS5mcmFtZVZhbCx1LmZyYW1lVmFsPU1hdGgucm91bmQodS5mcmFtZVZhbCp1LmRlYykvdS5kZWMsdS5wcmludFZhbHVlKHUuZnJhbWVWYWwpLG48dS5kdXJhdGlvbj91LnJBRj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodS5jb3VudCk6dS5jYWxsYmFjayYmdS5jYWxsYmFjaygpfSx1LnN0YXJ0PWZ1bmN0aW9uKGEpe3UuaW5pdGlhbGl6ZSgpJiYodS5jYWxsYmFjaz1hLHUuckFGPXJlcXVlc3RBbmltYXRpb25GcmFtZSh1LmNvdW50KSl9LHUucGF1c2VSZXN1bWU9ZnVuY3Rpb24oKXt1LnBhdXNlZD8odS5wYXVzZWQ9ITEsZGVsZXRlIHUuc3RhcnRUaW1lLHUuZHVyYXRpb249dS5yZW1haW5pbmcsdS5zdGFydFZhbD11LmZyYW1lVmFsLHJlcXVlc3RBbmltYXRpb25GcmFtZSh1LmNvdW50KSk6KHUucGF1c2VkPSEwLGNhbmNlbEFuaW1hdGlvbkZyYW1lKHUuckFGKSl9LHUucmVzZXQ9ZnVuY3Rpb24oKXt1LnBhdXNlZD0hMSxkZWxldGUgdS5zdGFydFRpbWUsdS5pbml0aWFsaXplZD0hMSx1LmluaXRpYWxpemUoKSYmKGNhbmNlbEFuaW1hdGlvbkZyYW1lKHUuckFGKSx1LnByaW50VmFsdWUodS5zdGFydFZhbCkpfSx1LnVwZGF0ZT1mdW5jdGlvbihhKXt1LmluaXRpYWxpemUoKSYmKGQoYT1OdW1iZXIoYSkpPyh1LmVycm9yPVwiXCIsYSE9PXUuZnJhbWVWYWwmJihjYW5jZWxBbmltYXRpb25GcmFtZSh1LnJBRiksdS5wYXVzZWQ9ITEsZGVsZXRlIHUuc3RhcnRUaW1lLHUuc3RhcnRWYWw9dS5mcmFtZVZhbCx1LmVuZFZhbD1hLHUuY291bnREb3duPXUuc3RhcnRWYWw+dS5lbmRWYWwsdS5yQUY9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUuY291bnQpKSk6dS5lcnJvcj1cIltDb3VudFVwXSB1cGRhdGUoKSAtIG5ldyBlbmRWYWwgaXMgbm90IGEgbnVtYmVyOiBcIithKX0sdS5pbml0aWFsaXplKCkmJnUucHJpbnRWYWx1ZSh1LnN0YXJ0VmFsKX19KTsiLCIvKiEganMtY29va2llIHYzLjAuMC1yYy4xIHwgTUlUICovXG4hZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1lfHxzZWxmLGZ1bmN0aW9uKCl7dmFyIG49ZS5Db29raWVzLHI9ZS5Db29raWVzPXQoKTtyLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gZS5Db29raWVzPW4scn19KCkpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciByIGluIG4pZVtyXT1uW3JdfXJldHVybiBlfXZhciB0PXtyZWFkOmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoLyglW1xcZEEtRl17Mn0pKy9naSxkZWNvZGVVUklDb21wb25lbnQpfSx3cml0ZTpmdW5jdGlvbihlKXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGUpLnJlcGxhY2UoLyUoMlszNDZCRl18M1tBQy1GXXw0MHw1W0JERV18NjB8N1tCQ0RdKS9nLGRlY29kZVVSSUNvbXBvbmVudCl9fTtyZXR1cm4gZnVuY3Rpb24gbihyLG8pe2Z1bmN0aW9uIGkodCxuLGkpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCl7XCJudW1iZXJcIj09dHlwZW9mKGk9ZSh7fSxvLGkpKS5leHBpcmVzJiYoaS5leHBpcmVzPW5ldyBEYXRlKERhdGUubm93KCkrODY0ZTUqaS5leHBpcmVzKSksaS5leHBpcmVzJiYoaS5leHBpcmVzPWkuZXhwaXJlcy50b1VUQ1N0cmluZygpKSx0PWVuY29kZVVSSUNvbXBvbmVudCh0KS5yZXBsYWNlKC8lKDJbMzQ2Ql18NUV8NjB8N0MpL2csZGVjb2RlVVJJQ29tcG9uZW50KS5yZXBsYWNlKC9bKCldL2csZXNjYXBlKSxuPXIud3JpdGUobix0KTt2YXIgYz1cIlwiO2Zvcih2YXIgdSBpbiBpKWlbdV0mJihjKz1cIjsgXCIrdSwhMCE9PWlbdV0mJihjKz1cIj1cIitpW3VdLnNwbGl0KFwiO1wiKVswXSkpO3JldHVybiBkb2N1bWVudC5jb29raWU9dCtcIj1cIituK2N9fXJldHVybiBPYmplY3QuY3JlYXRlKHtzZXQ6aSxnZXQ6ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50JiYoIWFyZ3VtZW50cy5sZW5ndGh8fGUpKXtmb3IodmFyIG49ZG9jdW1lbnQuY29va2llP2RvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpOltdLG89e30saT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgYz1uW2ldLnNwbGl0KFwiPVwiKSx1PWMuc2xpY2UoMSkuam9pbihcIj1cIik7J1wiJz09PXVbMF0mJih1PXUuc2xpY2UoMSwtMSkpO3RyeXt2YXIgZj10LnJlYWQoY1swXSk7aWYob1tmXT1yLnJlYWQodSxmKSxlPT09ZilicmVha31jYXRjaChlKXt9fXJldHVybiBlP29bZV06b319LHJlbW92ZTpmdW5jdGlvbih0LG4pe2kodCxcIlwiLGUoe30sbix7ZXhwaXJlczotMX0pKX0sd2l0aEF0dHJpYnV0ZXM6ZnVuY3Rpb24odCl7cmV0dXJuIG4odGhpcy5jb252ZXJ0ZXIsZSh7fSx0aGlzLmF0dHJpYnV0ZXMsdCkpfSx3aXRoQ29udmVydGVyOmZ1bmN0aW9uKHQpe3JldHVybiBuKGUoe30sdGhpcy5jb252ZXJ0ZXIsdCksdGhpcy5hdHRyaWJ1dGVzKX19LHthdHRyaWJ1dGVzOnt2YWx1ZTpPYmplY3QuZnJlZXplKG8pfSxjb252ZXJ0ZXI6e3ZhbHVlOk9iamVjdC5mcmVlemUocil9fSl9KHQse3BhdGg6XCIvXCJ9KX0pO1xuIiwiKGZ1bmN0aW9uIGRlZmluZU11c3RhY2hlKGdsb2JhbCxmYWN0b3J5KXtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJmV4cG9ydHMmJnR5cGVvZiBleHBvcnRzLm5vZGVOYW1lIT09XCJzdHJpbmdcIil7ZmFjdG9yeShleHBvcnRzKX1lbHNlIGlmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShbXCJleHBvcnRzXCJdLGZhY3RvcnkpfWVsc2V7Z2xvYmFsLk11c3RhY2hlPXt9O2ZhY3RvcnkoZ2xvYmFsLk11c3RhY2hlKX19KSh0aGlzLGZ1bmN0aW9uIG11c3RhY2hlRmFjdG9yeShtdXN0YWNoZSl7dmFyIG9iamVjdFRvU3RyaW5nPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7dmFyIGlzQXJyYXk9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24gaXNBcnJheVBvbHlmaWxsKG9iamVjdCl7cmV0dXJuIG9iamVjdFRvU3RyaW5nLmNhbGwob2JqZWN0KT09PVwiW29iamVjdCBBcnJheV1cIn07ZnVuY3Rpb24gaXNGdW5jdGlvbihvYmplY3Qpe3JldHVybiB0eXBlb2Ygb2JqZWN0PT09XCJmdW5jdGlvblwifWZ1bmN0aW9uIHR5cGVTdHIob2JqKXtyZXR1cm4gaXNBcnJheShvYmopP1wiYXJyYXlcIjp0eXBlb2Ygb2JqfWZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHJpbmcpe3JldHVybiBzdHJpbmcucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csXCJcXFxcJCZcIil9ZnVuY3Rpb24gaGFzUHJvcGVydHkob2JqLHByb3BOYW1lKXtyZXR1cm4gb2JqIT1udWxsJiZ0eXBlb2Ygb2JqPT09XCJvYmplY3RcIiYmcHJvcE5hbWUgaW4gb2JqfXZhciByZWdFeHBUZXN0PVJlZ0V4cC5wcm90b3R5cGUudGVzdDtmdW5jdGlvbiB0ZXN0UmVnRXhwKHJlLHN0cmluZyl7cmV0dXJuIHJlZ0V4cFRlc3QuY2FsbChyZSxzdHJpbmcpfXZhciBub25TcGFjZVJlPS9cXFMvO2Z1bmN0aW9uIGlzV2hpdGVzcGFjZShzdHJpbmcpe3JldHVybiF0ZXN0UmVnRXhwKG5vblNwYWNlUmUsc3RyaW5nKX12YXIgZW50aXR5TWFwPXtcIiZcIjpcIiZhbXA7XCIsXCI8XCI6XCImbHQ7XCIsXCI+XCI6XCImZ3Q7XCIsJ1wiJzpcIiZxdW90O1wiLFwiJ1wiOlwiJiMzOTtcIixcIi9cIjpcIiYjeDJGO1wiLFwiYFwiOlwiJiN4NjA7XCIsXCI9XCI6XCImI3gzRDtcIn07ZnVuY3Rpb24gZXNjYXBlSHRtbChzdHJpbmcpe3JldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKC9bJjw+XCInYD1cXC9dL2csZnVuY3Rpb24gZnJvbUVudGl0eU1hcChzKXtyZXR1cm4gZW50aXR5TWFwW3NdfSl9dmFyIHdoaXRlUmU9L1xccyovO3ZhciBzcGFjZVJlPS9cXHMrLzt2YXIgZXF1YWxzUmU9L1xccyo9Lzt2YXIgY3VybHlSZT0vXFxzKlxcfS87dmFyIHRhZ1JlPS8jfFxcXnxcXC98PnxcXHt8Jnw9fCEvO2Z1bmN0aW9uIHBhcnNlVGVtcGxhdGUodGVtcGxhdGUsdGFncyl7aWYoIXRlbXBsYXRlKXJldHVybltdO3ZhciBzZWN0aW9ucz1bXTt2YXIgdG9rZW5zPVtdO3ZhciBzcGFjZXM9W107dmFyIGhhc1RhZz1mYWxzZTt2YXIgbm9uU3BhY2U9ZmFsc2U7ZnVuY3Rpb24gc3RyaXBTcGFjZSgpe2lmKGhhc1RhZyYmIW5vblNwYWNlKXt3aGlsZShzcGFjZXMubGVuZ3RoKWRlbGV0ZSB0b2tlbnNbc3BhY2VzLnBvcCgpXX1lbHNle3NwYWNlcz1bXX1oYXNUYWc9ZmFsc2U7bm9uU3BhY2U9ZmFsc2V9dmFyIG9wZW5pbmdUYWdSZSxjbG9zaW5nVGFnUmUsY2xvc2luZ0N1cmx5UmU7ZnVuY3Rpb24gY29tcGlsZVRhZ3ModGFnc1RvQ29tcGlsZSl7aWYodHlwZW9mIHRhZ3NUb0NvbXBpbGU9PT1cInN0cmluZ1wiKXRhZ3NUb0NvbXBpbGU9dGFnc1RvQ29tcGlsZS5zcGxpdChzcGFjZVJlLDIpO2lmKCFpc0FycmF5KHRhZ3NUb0NvbXBpbGUpfHx0YWdzVG9Db21waWxlLmxlbmd0aCE9PTIpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB0YWdzOiBcIit0YWdzVG9Db21waWxlKTtvcGVuaW5nVGFnUmU9bmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVswXSkrXCJcXFxccypcIik7Y2xvc2luZ1RhZ1JlPW5ldyBSZWdFeHAoXCJcXFxccypcIitlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVsxXSkpO2Nsb3NpbmdDdXJseVJlPW5ldyBSZWdFeHAoXCJcXFxccypcIitlc2NhcGVSZWdFeHAoXCJ9XCIrdGFnc1RvQ29tcGlsZVsxXSkpfWNvbXBpbGVUYWdzKHRhZ3N8fG11c3RhY2hlLnRhZ3MpO3ZhciBzY2FubmVyPW5ldyBTY2FubmVyKHRlbXBsYXRlKTt2YXIgc3RhcnQsdHlwZSx2YWx1ZSxjaHIsdG9rZW4sb3BlblNlY3Rpb247d2hpbGUoIXNjYW5uZXIuZW9zKCkpe3N0YXJ0PXNjYW5uZXIucG9zO3ZhbHVlPXNjYW5uZXIuc2NhblVudGlsKG9wZW5pbmdUYWdSZSk7aWYodmFsdWUpe2Zvcih2YXIgaT0wLHZhbHVlTGVuZ3RoPXZhbHVlLmxlbmd0aDtpPHZhbHVlTGVuZ3RoOysraSl7Y2hyPXZhbHVlLmNoYXJBdChpKTtpZihpc1doaXRlc3BhY2UoY2hyKSl7c3BhY2VzLnB1c2godG9rZW5zLmxlbmd0aCl9ZWxzZXtub25TcGFjZT10cnVlfXRva2Vucy5wdXNoKFtcInRleHRcIixjaHIsc3RhcnQsc3RhcnQrMV0pO3N0YXJ0Kz0xO2lmKGNocj09PVwiXFxuXCIpc3RyaXBTcGFjZSgpfX1pZighc2Nhbm5lci5zY2FuKG9wZW5pbmdUYWdSZSkpYnJlYWs7aGFzVGFnPXRydWU7dHlwZT1zY2FubmVyLnNjYW4odGFnUmUpfHxcIm5hbWVcIjtzY2FubmVyLnNjYW4od2hpdGVSZSk7aWYodHlwZT09PVwiPVwiKXt2YWx1ZT1zY2FubmVyLnNjYW5VbnRpbChlcXVhbHNSZSk7c2Nhbm5lci5zY2FuKGVxdWFsc1JlKTtzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nVGFnUmUpfWVsc2UgaWYodHlwZT09PVwie1wiKXt2YWx1ZT1zY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nQ3VybHlSZSk7c2Nhbm5lci5zY2FuKGN1cmx5UmUpO3NjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7dHlwZT1cIiZcIn1lbHNle3ZhbHVlPXNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSl9aWYoIXNjYW5uZXIuc2NhbihjbG9zaW5nVGFnUmUpKXRocm93IG5ldyBFcnJvcihcIlVuY2xvc2VkIHRhZyBhdCBcIitzY2FubmVyLnBvcyk7dG9rZW49W3R5cGUsdmFsdWUsc3RhcnQsc2Nhbm5lci5wb3NdO3Rva2Vucy5wdXNoKHRva2VuKTtpZih0eXBlPT09XCIjXCJ8fHR5cGU9PT1cIl5cIil7c2VjdGlvbnMucHVzaCh0b2tlbil9ZWxzZSBpZih0eXBlPT09XCIvXCIpe29wZW5TZWN0aW9uPXNlY3Rpb25zLnBvcCgpO2lmKCFvcGVuU2VjdGlvbil0aHJvdyBuZXcgRXJyb3IoJ1Vub3BlbmVkIHNlY3Rpb24gXCInK3ZhbHVlKydcIiBhdCAnK3N0YXJ0KTtpZihvcGVuU2VjdGlvblsxXSE9PXZhbHVlKXRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicrb3BlblNlY3Rpb25bMV0rJ1wiIGF0ICcrc3RhcnQpfWVsc2UgaWYodHlwZT09PVwibmFtZVwifHx0eXBlPT09XCJ7XCJ8fHR5cGU9PT1cIiZcIil7bm9uU3BhY2U9dHJ1ZX1lbHNlIGlmKHR5cGU9PT1cIj1cIil7Y29tcGlsZVRhZ3ModmFsdWUpfX1vcGVuU2VjdGlvbj1zZWN0aW9ucy5wb3AoKTtpZihvcGVuU2VjdGlvbil0aHJvdyBuZXcgRXJyb3IoJ1VuY2xvc2VkIHNlY3Rpb24gXCInK29wZW5TZWN0aW9uWzFdKydcIiBhdCAnK3NjYW5uZXIucG9zKTtyZXR1cm4gbmVzdFRva2VucyhzcXVhc2hUb2tlbnModG9rZW5zKSl9ZnVuY3Rpb24gc3F1YXNoVG9rZW5zKHRva2Vucyl7dmFyIHNxdWFzaGVkVG9rZW5zPVtdO3ZhciB0b2tlbixsYXN0VG9rZW47Zm9yKHZhciBpPTAsbnVtVG9rZW5zPXRva2Vucy5sZW5ndGg7aTxudW1Ub2tlbnM7KytpKXt0b2tlbj10b2tlbnNbaV07aWYodG9rZW4pe2lmKHRva2VuWzBdPT09XCJ0ZXh0XCImJmxhc3RUb2tlbiYmbGFzdFRva2VuWzBdPT09XCJ0ZXh0XCIpe2xhc3RUb2tlblsxXSs9dG9rZW5bMV07bGFzdFRva2VuWzNdPXRva2VuWzNdfWVsc2V7c3F1YXNoZWRUb2tlbnMucHVzaCh0b2tlbik7bGFzdFRva2VuPXRva2VufX19cmV0dXJuIHNxdWFzaGVkVG9rZW5zfWZ1bmN0aW9uIG5lc3RUb2tlbnModG9rZW5zKXt2YXIgbmVzdGVkVG9rZW5zPVtdO3ZhciBjb2xsZWN0b3I9bmVzdGVkVG9rZW5zO3ZhciBzZWN0aW9ucz1bXTt2YXIgdG9rZW4sc2VjdGlvbjtmb3IodmFyIGk9MCxudW1Ub2tlbnM9dG9rZW5zLmxlbmd0aDtpPG51bVRva2VuczsrK2kpe3Rva2VuPXRva2Vuc1tpXTtzd2l0Y2godG9rZW5bMF0pe2Nhc2VcIiNcIjpjYXNlXCJeXCI6Y29sbGVjdG9yLnB1c2godG9rZW4pO3NlY3Rpb25zLnB1c2godG9rZW4pO2NvbGxlY3Rvcj10b2tlbls0XT1bXTticmVhaztjYXNlXCIvXCI6c2VjdGlvbj1zZWN0aW9ucy5wb3AoKTtzZWN0aW9uWzVdPXRva2VuWzJdO2NvbGxlY3Rvcj1zZWN0aW9ucy5sZW5ndGg+MD9zZWN0aW9uc1tzZWN0aW9ucy5sZW5ndGgtMV1bNF06bmVzdGVkVG9rZW5zO2JyZWFrO2RlZmF1bHQ6Y29sbGVjdG9yLnB1c2godG9rZW4pfX1yZXR1cm4gbmVzdGVkVG9rZW5zfWZ1bmN0aW9uIFNjYW5uZXIoc3RyaW5nKXt0aGlzLnN0cmluZz1zdHJpbmc7dGhpcy50YWlsPXN0cmluZzt0aGlzLnBvcz0wfVNjYW5uZXIucHJvdG90eXBlLmVvcz1mdW5jdGlvbiBlb3MoKXtyZXR1cm4gdGhpcy50YWlsPT09XCJcIn07U2Nhbm5lci5wcm90b3R5cGUuc2Nhbj1mdW5jdGlvbiBzY2FuKHJlKXt2YXIgbWF0Y2g9dGhpcy50YWlsLm1hdGNoKHJlKTtpZighbWF0Y2h8fG1hdGNoLmluZGV4IT09MClyZXR1cm5cIlwiO3ZhciBzdHJpbmc9bWF0Y2hbMF07dGhpcy50YWlsPXRoaXMudGFpbC5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCk7dGhpcy5wb3MrPXN0cmluZy5sZW5ndGg7cmV0dXJuIHN0cmluZ307U2Nhbm5lci5wcm90b3R5cGUuc2NhblVudGlsPWZ1bmN0aW9uIHNjYW5VbnRpbChyZSl7dmFyIGluZGV4PXRoaXMudGFpbC5zZWFyY2gocmUpLG1hdGNoO3N3aXRjaChpbmRleCl7Y2FzZS0xOm1hdGNoPXRoaXMudGFpbDt0aGlzLnRhaWw9XCJcIjticmVhaztjYXNlIDA6bWF0Y2g9XCJcIjticmVhaztkZWZhdWx0Om1hdGNoPXRoaXMudGFpbC5zdWJzdHJpbmcoMCxpbmRleCk7dGhpcy50YWlsPXRoaXMudGFpbC5zdWJzdHJpbmcoaW5kZXgpfXRoaXMucG9zKz1tYXRjaC5sZW5ndGg7cmV0dXJuIG1hdGNofTtmdW5jdGlvbiBDb250ZXh0KHZpZXcscGFyZW50Q29udGV4dCl7dGhpcy52aWV3PXZpZXc7dGhpcy5jYWNoZT17XCIuXCI6dGhpcy52aWV3fTt0aGlzLnBhcmVudD1wYXJlbnRDb250ZXh0fUNvbnRleHQucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24gcHVzaCh2aWV3KXtyZXR1cm4gbmV3IENvbnRleHQodmlldyx0aGlzKX07Q29udGV4dC5wcm90b3R5cGUubG9va3VwPWZ1bmN0aW9uIGxvb2t1cChuYW1lKXt2YXIgY2FjaGU9dGhpcy5jYWNoZTt2YXIgdmFsdWU7aWYoY2FjaGUuaGFzT3duUHJvcGVydHkobmFtZSkpe3ZhbHVlPWNhY2hlW25hbWVdfWVsc2V7dmFyIGNvbnRleHQ9dGhpcyxuYW1lcyxpbmRleCxsb29rdXBIaXQ9ZmFsc2U7d2hpbGUoY29udGV4dCl7aWYobmFtZS5pbmRleE9mKFwiLlwiKT4wKXt2YWx1ZT1jb250ZXh0LnZpZXc7bmFtZXM9bmFtZS5zcGxpdChcIi5cIik7aW5kZXg9MDt3aGlsZSh2YWx1ZSE9bnVsbCYmaW5kZXg8bmFtZXMubGVuZ3RoKXtpZihpbmRleD09PW5hbWVzLmxlbmd0aC0xKWxvb2t1cEhpdD1oYXNQcm9wZXJ0eSh2YWx1ZSxuYW1lc1tpbmRleF0pO3ZhbHVlPXZhbHVlW25hbWVzW2luZGV4KytdXX19ZWxzZXt2YWx1ZT1jb250ZXh0LnZpZXdbbmFtZV07bG9va3VwSGl0PWhhc1Byb3BlcnR5KGNvbnRleHQudmlldyxuYW1lKX1pZihsb29rdXBIaXQpYnJlYWs7Y29udGV4dD1jb250ZXh0LnBhcmVudH1jYWNoZVtuYW1lXT12YWx1ZX1pZihpc0Z1bmN0aW9uKHZhbHVlKSl2YWx1ZT12YWx1ZS5jYWxsKHRoaXMudmlldyk7cmV0dXJuIHZhbHVlfTtmdW5jdGlvbiBXcml0ZXIoKXt0aGlzLmNhY2hlPXt9fVdyaXRlci5wcm90b3R5cGUuY2xlYXJDYWNoZT1mdW5jdGlvbiBjbGVhckNhY2hlKCl7dGhpcy5jYWNoZT17fX07V3JpdGVyLnByb3RvdHlwZS5wYXJzZT1mdW5jdGlvbiBwYXJzZSh0ZW1wbGF0ZSx0YWdzKXt2YXIgY2FjaGU9dGhpcy5jYWNoZTt2YXIgdG9rZW5zPWNhY2hlW3RlbXBsYXRlXTtpZih0b2tlbnM9PW51bGwpdG9rZW5zPWNhY2hlW3RlbXBsYXRlXT1wYXJzZVRlbXBsYXRlKHRlbXBsYXRlLHRhZ3MpO3JldHVybiB0b2tlbnN9O1dyaXRlci5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uIHJlbmRlcih0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzKXt2YXIgdG9rZW5zPXRoaXMucGFyc2UodGVtcGxhdGUpO3ZhciBjb250ZXh0PXZpZXcgaW5zdGFuY2VvZiBDb250ZXh0P3ZpZXc6bmV3IENvbnRleHQodmlldyk7cmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRva2Vucyxjb250ZXh0LHBhcnRpYWxzLHRlbXBsYXRlKX07V3JpdGVyLnByb3RvdHlwZS5yZW5kZXJUb2tlbnM9ZnVuY3Rpb24gcmVuZGVyVG9rZW5zKHRva2Vucyxjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpe3ZhciBidWZmZXI9XCJcIjt2YXIgdG9rZW4sc3ltYm9sLHZhbHVlO2Zvcih2YXIgaT0wLG51bVRva2Vucz10b2tlbnMubGVuZ3RoO2k8bnVtVG9rZW5zOysraSl7dmFsdWU9dW5kZWZpbmVkO3Rva2VuPXRva2Vuc1tpXTtzeW1ib2w9dG9rZW5bMF07aWYoc3ltYm9sPT09XCIjXCIpdmFsdWU9dGhpcy5yZW5kZXJTZWN0aW9uKHRva2VuLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSk7ZWxzZSBpZihzeW1ib2w9PT1cIl5cIil2YWx1ZT10aGlzLnJlbmRlckludmVydGVkKHRva2VuLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSk7ZWxzZSBpZihzeW1ib2w9PT1cIj5cIil2YWx1ZT10aGlzLnJlbmRlclBhcnRpYWwodG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKTtlbHNlIGlmKHN5bWJvbD09PVwiJlwiKXZhbHVlPXRoaXMudW5lc2NhcGVkVmFsdWUodG9rZW4sY29udGV4dCk7ZWxzZSBpZihzeW1ib2w9PT1cIm5hbWVcIil2YWx1ZT10aGlzLmVzY2FwZWRWYWx1ZSh0b2tlbixjb250ZXh0KTtlbHNlIGlmKHN5bWJvbD09PVwidGV4dFwiKXZhbHVlPXRoaXMucmF3VmFsdWUodG9rZW4pO2lmKHZhbHVlIT09dW5kZWZpbmVkKWJ1ZmZlcis9dmFsdWV9cmV0dXJuIGJ1ZmZlcn07V3JpdGVyLnByb3RvdHlwZS5yZW5kZXJTZWN0aW9uPWZ1bmN0aW9uIHJlbmRlclNlY3Rpb24odG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKXt2YXIgc2VsZj10aGlzO3ZhciBidWZmZXI9XCJcIjt2YXIgdmFsdWU9Y29udGV4dC5sb29rdXAodG9rZW5bMV0pO2Z1bmN0aW9uIHN1YlJlbmRlcih0ZW1wbGF0ZSl7cmV0dXJuIHNlbGYucmVuZGVyKHRlbXBsYXRlLGNvbnRleHQscGFydGlhbHMpfWlmKCF2YWx1ZSlyZXR1cm47aWYoaXNBcnJheSh2YWx1ZSkpe2Zvcih2YXIgaj0wLHZhbHVlTGVuZ3RoPXZhbHVlLmxlbmd0aDtqPHZhbHVlTGVuZ3RoOysrail7YnVmZmVyKz10aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSxjb250ZXh0LnB1c2godmFsdWVbal0pLHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpfX1lbHNlIGlmKHR5cGVvZiB2YWx1ZT09PVwib2JqZWN0XCJ8fHR5cGVvZiB2YWx1ZT09PVwic3RyaW5nXCJ8fHR5cGVvZiB2YWx1ZT09PVwibnVtYmVyXCIpe2J1ZmZlcis9dGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sY29udGV4dC5wdXNoKHZhbHVlKSxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKX1lbHNlIGlmKGlzRnVuY3Rpb24odmFsdWUpKXtpZih0eXBlb2Ygb3JpZ2luYWxUZW1wbGF0ZSE9PVwic3RyaW5nXCIpdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHVzZSBoaWdoZXItb3JkZXIgc2VjdGlvbnMgd2l0aG91dCB0aGUgb3JpZ2luYWwgdGVtcGxhdGVcIik7dmFsdWU9dmFsdWUuY2FsbChjb250ZXh0LnZpZXcsb3JpZ2luYWxUZW1wbGF0ZS5zbGljZSh0b2tlblszXSx0b2tlbls1XSksc3ViUmVuZGVyKTtpZih2YWx1ZSE9bnVsbClidWZmZXIrPXZhbHVlfWVsc2V7YnVmZmVyKz10aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSxjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpfXJldHVybiBidWZmZXJ9O1dyaXRlci5wcm90b3R5cGUucmVuZGVySW52ZXJ0ZWQ9ZnVuY3Rpb24gcmVuZGVySW52ZXJ0ZWQodG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKXt2YXIgdmFsdWU9Y29udGV4dC5sb29rdXAodG9rZW5bMV0pO2lmKCF2YWx1ZXx8aXNBcnJheSh2YWx1ZSkmJnZhbHVlLmxlbmd0aD09PTApcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl9O1dyaXRlci5wcm90b3R5cGUucmVuZGVyUGFydGlhbD1mdW5jdGlvbiByZW5kZXJQYXJ0aWFsKHRva2VuLGNvbnRleHQscGFydGlhbHMpe2lmKCFwYXJ0aWFscylyZXR1cm47dmFyIHZhbHVlPWlzRnVuY3Rpb24ocGFydGlhbHMpP3BhcnRpYWxzKHRva2VuWzFdKTpwYXJ0aWFsc1t0b2tlblsxXV07aWYodmFsdWUhPW51bGwpcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRoaXMucGFyc2UodmFsdWUpLGNvbnRleHQscGFydGlhbHMsdmFsdWUpfTtXcml0ZXIucHJvdG90eXBlLnVuZXNjYXBlZFZhbHVlPWZ1bmN0aW9uIHVuZXNjYXBlZFZhbHVlKHRva2VuLGNvbnRleHQpe3ZhciB2YWx1ZT1jb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7aWYodmFsdWUhPW51bGwpcmV0dXJuIHZhbHVlfTtXcml0ZXIucHJvdG90eXBlLmVzY2FwZWRWYWx1ZT1mdW5jdGlvbiBlc2NhcGVkVmFsdWUodG9rZW4sY29udGV4dCl7dmFyIHZhbHVlPWNvbnRleHQubG9va3VwKHRva2VuWzFdKTtpZih2YWx1ZSE9bnVsbClyZXR1cm4gbXVzdGFjaGUuZXNjYXBlKHZhbHVlKX07V3JpdGVyLnByb3RvdHlwZS5yYXdWYWx1ZT1mdW5jdGlvbiByYXdWYWx1ZSh0b2tlbil7cmV0dXJuIHRva2VuWzFdfTttdXN0YWNoZS5uYW1lPVwibXVzdGFjaGUuanNcIjttdXN0YWNoZS52ZXJzaW9uPVwiMi4zLjBcIjttdXN0YWNoZS50YWdzPVtcIjwlXCIsXCIlPlwiXTt2YXIgZGVmYXVsdFdyaXRlcj1uZXcgV3JpdGVyO211c3RhY2hlLmNsZWFyQ2FjaGU9ZnVuY3Rpb24gY2xlYXJDYWNoZSgpe3JldHVybiBkZWZhdWx0V3JpdGVyLmNsZWFyQ2FjaGUoKX07bXVzdGFjaGUucGFyc2U9ZnVuY3Rpb24gcGFyc2UodGVtcGxhdGUsdGFncyl7cmV0dXJuIGRlZmF1bHRXcml0ZXIucGFyc2UodGVtcGxhdGUsdGFncyl9O211c3RhY2hlLnJlbmRlcj1mdW5jdGlvbiByZW5kZXIodGVtcGxhdGUsdmlldyxwYXJ0aWFscyl7aWYodHlwZW9mIHRlbXBsYXRlIT09XCJzdHJpbmdcIil7dGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCB0ZW1wbGF0ZSEgVGVtcGxhdGUgc2hvdWxkIGJlIGEgXCJzdHJpbmdcIiAnKydidXQgXCInK3R5cGVTdHIodGVtcGxhdGUpKydcIiB3YXMgZ2l2ZW4gYXMgdGhlIGZpcnN0ICcrXCJhcmd1bWVudCBmb3IgbXVzdGFjaGUjcmVuZGVyKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscylcIil9cmV0dXJuIGRlZmF1bHRXcml0ZXIucmVuZGVyKHRlbXBsYXRlLHZpZXcscGFydGlhbHMpfTttdXN0YWNoZS50b19odG1sPWZ1bmN0aW9uIHRvX2h0bWwodGVtcGxhdGUsdmlldyxwYXJ0aWFscyxzZW5kKXt2YXIgcmVzdWx0PW11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzKTtpZihpc0Z1bmN0aW9uKHNlbmQpKXtzZW5kKHJlc3VsdCl9ZWxzZXtyZXR1cm4gcmVzdWx0fX07bXVzdGFjaGUuZXNjYXBlPWVzY2FwZUh0bWw7bXVzdGFjaGUuU2Nhbm5lcj1TY2FubmVyO211c3RhY2hlLkNvbnRleHQ9Q29udGV4dDttdXN0YWNoZS5Xcml0ZXI9V3JpdGVyO3JldHVybiBtdXN0YWNoZX0pOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLDIwMTEsMjAxMiwyMDEzLDIwMTQgTW9yZ2FuIFJvZGVyaWNrIGh0dHA6Ly9yb2Rlcmljay5ka1xuICogTGljZW5zZTogTUlUIC0gaHR0cDovL21yZ25yZHJjay5taXQtbGljZW5zZS5vcmdcbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbXJvZGVyaWNrL1B1YlN1YkpTXG4gKi9cbiFmdW5jdGlvbihuLHQpe1widXNlIHN0cmljdFwiO3ZhciByPXt9O24uUHViU3ViPXI7dmFyIGU9bi5kZWZpbmU7IWZ1bmN0aW9uKG4pe3ZhciB0PXt9LHI9LTE7ZnVuY3Rpb24gZShuKXt2YXIgdDtmb3IodCBpbiBuKWlmKG4uaGFzT3duUHJvcGVydHkodCkpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gbyhuLHQscil7dHJ5e24odCxyKX1jYXRjaChuKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbigpe3Rocm93IG59fShuKSwwKX19ZnVuY3Rpb24gaShuLHQscil7bih0LHIpfWZ1bmN0aW9uIHUobixyLGUsdSl7dmFyIGYscz10W3JdLGM9dT9pOm87aWYodC5oYXNPd25Qcm9wZXJ0eShyKSlmb3IoZiBpbiBzKXMuaGFzT3duUHJvcGVydHkoZikmJmMoc1tmXSxuLGUpfWZ1bmN0aW9uIGYobixyLG8saSl7dmFyIGY9ZnVuY3Rpb24obix0LHIpe3JldHVybiBmdW5jdGlvbigpe3ZhciBlPVN0cmluZyhuKSxvPWUubGFzdEluZGV4T2YoXCIuXCIpO2Zvcih1KG4sbix0LHIpOy0xIT09bzspZT1lLnN1YnN0cigwLG8pLG89ZS5sYXN0SW5kZXhPZihcIi5cIiksdShuLGUsdCxyKX19KG49XCJzeW1ib2xcIj09dHlwZW9mIG4/bi50b1N0cmluZygpOm4scixpKSxzPWZ1bmN0aW9uKG4pe3ZhciByPVN0cmluZyhuKSxvPUJvb2xlYW4odC5oYXNPd25Qcm9wZXJ0eShyKSYmZSh0W3JdKSksaT1yLmxhc3RJbmRleE9mKFwiLlwiKTtmb3IoOyFvJiYtMSE9PWk7KXI9ci5zdWJzdHIoMCxpKSxpPXIubGFzdEluZGV4T2YoXCIuXCIpLG89Qm9vbGVhbih0Lmhhc093blByb3BlcnR5KHIpJiZlKHRbcl0pKTtyZXR1cm4gb30obik7cmV0dXJuISFzJiYoITA9PT1vP2YoKTpzZXRUaW1lb3V0KGYsMCksITApfW4ucHVibGlzaD1mdW5jdGlvbih0LHIpe3JldHVybiBmKHQsciwhMSxuLmltbWVkaWF0ZUV4Y2VwdGlvbnMpfSxuLnB1Ymxpc2hTeW5jPWZ1bmN0aW9uKHQscil7cmV0dXJuIGYodCxyLCEwLG4uaW1tZWRpYXRlRXhjZXB0aW9ucyl9LG4uc3Vic2NyaWJlPWZ1bmN0aW9uKG4sZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSlyZXR1cm4hMTtuPVwic3ltYm9sXCI9PXR5cGVvZiBuP24udG9TdHJpbmcoKTpuLHQuaGFzT3duUHJvcGVydHkobil8fCh0W25dPXt9KTt2YXIgbz1cInVpZF9cIitTdHJpbmcoKytyKTtyZXR1cm4gdFtuXVtvXT1lLG99LG4uc3Vic2NyaWJlT25jZT1mdW5jdGlvbih0LHIpe3ZhciBlPW4uc3Vic2NyaWJlKHQsZnVuY3Rpb24oKXtuLnVuc3Vic2NyaWJlKGUpLHIuYXBwbHkodGhpcyxhcmd1bWVudHMpfSk7cmV0dXJuIG59LG4uY2xlYXJBbGxTdWJzY3JpcHRpb25zPWZ1bmN0aW9uKCl7dD17fX0sbi5jbGVhclN1YnNjcmlwdGlvbnM9ZnVuY3Rpb24obil7dmFyIHI7Zm9yKHIgaW4gdCl0Lmhhc093blByb3BlcnR5KHIpJiYwPT09ci5pbmRleE9mKG4pJiZkZWxldGUgdFtyXX0sbi51bnN1YnNjcmliZT1mdW5jdGlvbihyKXt2YXIgZSxvLGksdT1cInN0cmluZ1wiPT10eXBlb2YgciYmKHQuaGFzT3duUHJvcGVydHkocil8fGZ1bmN0aW9uKG4pe3ZhciByO2ZvcihyIGluIHQpaWYodC5oYXNPd25Qcm9wZXJ0eShyKSYmMD09PXIuaW5kZXhPZihuKSlyZXR1cm4hMDtyZXR1cm4hMX0ocikpLGY9IXUmJlwic3RyaW5nXCI9PXR5cGVvZiByLHM9XCJmdW5jdGlvblwiPT10eXBlb2YgcixjPSExO2lmKCF1KXtmb3IoZSBpbiB0KWlmKHQuaGFzT3duUHJvcGVydHkoZSkpe2lmKG89dFtlXSxmJiZvW3JdKXtkZWxldGUgb1tyXSxjPXI7YnJlYWt9aWYocylmb3IoaSBpbiBvKW8uaGFzT3duUHJvcGVydHkoaSkmJm9baV09PT1yJiYoZGVsZXRlIG9baV0sYz0hMCl9cmV0dXJuIGN9bi5jbGVhclN1YnNjcmlwdGlvbnMocil9fShyKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlLmFtZD9lKGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmKHZvaWQgMCE9PW1vZHVsZSYmbW9kdWxlLmV4cG9ydHMmJihleHBvcnRzPW1vZHVsZS5leHBvcnRzPXIpLGV4cG9ydHMuUHViU3ViPXIsbW9kdWxlLmV4cG9ydHM9ZXhwb3J0cz1yKX0oXCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93fHx0aGlzKTsiLCIvKiEgVVRGLThcclxuXHJcbsKpIGtvdnJpZ2luXHJcbtCS0YHQtSDQv9GA0LDQstCwINGA0LDQt9GA0LXRiNC10L3Ri1xyXG7QutGA0LDRgdC40LLRi9C5INC00LjQt9Cw0LnQvSDQtNC+0LvQttC10L0g0LjQvNC10YLRjCDQutGA0LDRgdC40LLRi9C5INC60L7QtMKuXHJcblxyXG5odHRwczovL2dpdGh1Yi5jb20vaHRtbHBsdXNjc3MvXHJcblxyXG4qL1xyXG5cclxuKCAoKSA9PiB7XHJcblxyXG5cdGxldCByZXNpemVUaW1lb3V0ID0gbnVsbCxcclxuXHRcdHdpbmRvd1dpZHRoT0xkID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuXHJcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoIXJlc2l6ZVRpbWVvdXQpIHtcclxuXHJcblx0XHRcdFx0cmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHJcblx0XHRcdFx0XHRpZih3aW5kb3dXaWR0aE9MZCAhPT0gd2luZG93LmlubmVyV2lkdGgpIHtcclxuXHJcblx0XHRcdFx0XHRcdHdpbmRvd1dpZHRoT0xkID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG5cdFx0XHRcdFx0XHRQdWJTdWIucHVibGlzaCgnd2luZG93V2lkdGhSZXNpemUnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0sIDEwMCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFB1YlN1Yi5wdWJsaXNoKCdwYWdlTG9hZCcpO1xyXG5cclxuXHRcdENvb2tpZXMuc2V0KCdmYXN0TG9hZFNjcmlwdCcsIHRydWUpO1xyXG5cclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10cmFuc2l0aW9uRGVmYXVsdCcsICcuM3MnKTtcclxuXHJcblx0XHRpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykpIHtcclxuXHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oZWFkZXJIZWlnaHQnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuY2xpZW50SGVpZ2h0ICsgJ3B4Jyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKSkge1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZvb3RlckhlaWdodCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKS5jbGllbnRIZWlnaHQgKyAncHgnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQsNC90LjQvNCw0YbQuNC5XHJcblx0d2luZG93LmNzc0FuaW1hdGlvbiA9IGE9PntsZXQgYixjLGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNzc2FuaW1hdGlvblwiKTtzd2l0Y2goYSl7Y2FzZSdhbmltYXRpb24nOmI9e1wiYW5pbWF0aW9uXCI6XCJhbmltYXRpb25lbmRcIixcIk9BbmltYXRpb25cIjpcIm9BbmltYXRpb25FbmRcIixcIk1vekFuaW1hdGlvblwiOlwiYW5pbWF0aW9uZW5kXCIsXCJXZWJraXRBbmltYXRpb25cIjpcIndlYmtpdEFuaW1hdGlvbkVuZFwifTticmVhaztjYXNlJ3RyYW5zaXRpb24nOmI9e1widHJhbnNpdGlvblwiOlwidHJhbnNpdGlvbmVuZFwiLFwiT1RyYW5zaXRpb25cIjpcIm9UcmFuc2l0aW9uRW5kXCIsXCJNb3pUcmFuc2l0aW9uXCI6XCJ0cmFuc2l0aW9uZW5kXCIsXCJXZWJraXRUcmFuc2l0aW9uXCI6XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCJ9fWZvcihjIGluIGIpaWYoZC5zdHlsZVtjXSE9PXVuZGVmaW5lZClyZXR1cm4gYltjXX1cclxuXHJcblx0Ly8gRGV0ZXJtaW5lIGlmIGFuIGVsZW1lbnQgaXMgaW4gdGhlIHZpc2libGUgdmlld3BvcnRcclxuXHR3aW5kb3cuaXNJblZpZXdwb3J0ID0gZWwgPT4ge1xyXG5cdFx0Y29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0cmV0dXJuIChyZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblx0fVxyXG5cclxuXHQvLyDQvtGC0LTQtdC70Y/QtdC8INGC0YvRgdGP0YfQuFxyXG5cdHdpbmRvdy5zZXBOdW1iZXIgPSBmdW5jdGlvbihzdHIpe1xyXG5cdFx0c3RyID0gc3RyLnRvU3RyaW5nKCk7XHJcblx0XHRzdHIgPSBzdHIucmVwbGFjZSgvXFxzKy9nLCcnKTtcclxuXHRcdHJldHVybiBzdHIucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoW15cXGRdfCQpKS9nLCAnJDEgJyk7XHJcblx0fVxyXG5cclxuXHQvLyDRgdC60LvQtdC40LLQsNC10Lwg0YLRi9GB0Y/Rh9C4XHJcblx0d2luZG93LnN0clRvTnVtYmVyID0gZnVuY3Rpb24obil7XHJcblx0XHRyZXR1cm4gcGFyc2VJbnQobi5yZXBsYWNlKC9cXHMrL2csJycpLCAxMCk7XHJcblx0fVxyXG5cclxuLy8g0YHQutC70L7QvdC10L3QuNC1XHJcblx0d2luZG93LmRlY2xlbnNpb24gPSAobnVtLCBleHByZXNzaW9ucykgPT4ge1xyXG5cclxuXHRcdGxldCByLFxyXG5cdFx0XHRjb3VudCA9IG51bSAlIDEwMDtcclxuXHJcblx0XHRpZiAoY291bnQgPiA0ICYmIGNvdW50IDwgMjEpe1xyXG5cclxuXHRcdFx0ciA9IGV4cHJlc3Npb25zWycyJ107XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRjb3VudCA9IGNvdW50ICUgMTA7XHJcblxyXG5cdFx0XHRpZiAoY291bnQgPT0gMSl7XHJcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycwJ107XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoY291bnQgPiAxICYmIGNvdW50IDwgNSl7XHJcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycxJ107XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRyID0gZXhwcmVzc2lvbnNbJzInXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcjtcclxuXHJcblx0fVxyXG5cclxufSkoKTsiLCIoIGFjY291bnQgPT4ge1xyXG5cclxuXHRpZighYWNjb3VudCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBmb3JtID0gYWNjb3VudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fZm9ybScpLFxyXG5cdFx0ICB0ZW1wbGF0ZUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjY291bnQtZm9ybS1lcnJvci10b29sdGlwLXRlbXBsYXRlJyk7XHJcblxyXG5cdC8vINC00LvRjyDRg9Cy0LXQtNC+0LzQu9C10L3QuNC5XHJcblxyXG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oZWFkZXJIZWlnaHQnLCAnMTVweCcpO1xyXG5cclxuXHQvLyDQv9C+0LrQsNC30LDRgtGMINC/0LDRgNC+0LvRjFxyXG5cclxuXHRjb25zdCB0b2dnbGVQYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY291bnRfX3Zpc2libGUtdG9nZ2xlLXBhc3N3b3JkJyk7XHJcblxyXG5cdEFycmF5LmZyb20odG9nZ2xlUGFzcywgZWwgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGJ0biA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X192aXNpYmxlLXRvZ2dsZS1wYXNzd29yZC1idG4nKSxcclxuXHRcdFx0ICBpbnB1dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X192aXNpYmxlLXRvZ2dsZS1wYXNzd29yZC1pbnB1dCcpO1xyXG5cclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG5cclxuXHRcdFx0aW5wdXQudHlwZSA9IGlucHV0LnR5cGUgPT09ICdwYXNzd29yZCcgPyAndGV4dCcgOiAncGFzc3dvcmQnO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShidG4ucXVlcnlTZWxlY3RvckFsbCgnc3ZnJyksIHN2ZyA9PiBzdmcuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINGA0LXQs9C40YHRgtGA0LDRhtC40Y9cclxuXHJcblx0Y29uc3QgZm9ybVJlZyA9IGFjY291bnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2Zvcm0tLXNpZ251cCcpO1xyXG5cclxuXHRpZiggZm9ybVJlZyApIHtcclxuXHJcblx0XHRmb3JtUmVnLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdC8vINC/0LXRgNCy0YvQuSDRiNCw0LMsINCy0YvQsdC+0YAg0YLQuNC/0LAg0YPRh9C10YLQutC4XHJcblxyXG5cdFx0XHRpZiggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWNjb3VudF9fcmFkaW8taW5wdXQnKSApIHtcclxuXHJcblx0XHRcdFx0Y29uc3QgZmllbGRzZXQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmFjY291bnRfX2ZpZWxkc2V0Jyk7XHJcblxyXG5cdFx0XHRcdGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2lzLXZhbGlkJyk7XHJcblxyXG5cdFx0XHRcdGZpZWxkc2V0LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19uZXh0JykuZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBidG4gbmV4dFxyXG5cclxuXHRcdGNvbnN0IGJ0bk5leHQgPSBmb3JtUmVnLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvdW50X19uZXh0Jyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShidG5OZXh0LCBidG4gPT4ge1xyXG5cclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRidG4uY2xvc2VzdCgnLmFjY291bnRfX2ZpZWxkc2V0JykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRcdGJ0bi5jbG9zZXN0KCcuYWNjb3VudF9fZmllbGRzZXQnKS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gYnRuIHByZXZcclxuXHJcblx0XHRjb25zdCBidG5QcmV2ID0gZm9ybVJlZy5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3VudF9fcHJldicpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oYnRuUHJldiwgYnRuID0+IHtcclxuXHJcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0YnRuLmNsb3Nlc3QoJy5hY2NvdW50X19maWVsZHNldCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0XHRidG4uY2xvc2VzdCgnLmFjY291bnRfX2ZpZWxkc2V0JykucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyDQstGL0LHQvtGAINC60L7QvNC/0LDQvdC40LhcclxuXHJcblx0XHRjb25zdCBjb21wYW55ID0gZm9ybVJlZy5lbGVtZW50cy5jb21wYW55O1xyXG5cclxuXHRcdGNvbXBhbnkuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgaXNUb29sdGlwID0gZmFsc2U7XHJcblxyXG5cdFx0XHRjb25zdCBuZXh0ID0gY29tcGFueS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG5cdFx0XHRpZiAoIG5leHQgJiYgbmV4dC5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0Ym94X19lcnJvcicpICkge1xyXG5cclxuXHRcdFx0XHRpc1Rvb2x0aXAgPSB0cnVlO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBjb21wYW55LmNsYXNzTGlzdC5jb250YWlucygnaXMtZW1wdHknKSApIHtcclxuXHJcblx0XHRcdFx0aWYgKCBpc1Rvb2x0aXAgPT09IGZhbHNlICkge1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IHRleHQgPSBjb21wYW55LmdldEF0dHJpYnV0ZSgnZGF0YS1lbXB0eS10b29sdGlwJyk7XHJcblx0XHRcdFx0XHRjb25zdCBlcnJvciA9IE11c3RhY2hlLnJlbmRlciggdGVtcGxhdGVFcnJvci5pbm5lckhUTUwsIHsgdGV4dCB9KTtcclxuXHJcblx0XHRcdFx0XHRjb21wYW55Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBlcnJvcik7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGlzVG9vbHRpcCAmJiBuZXh0LnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vINGC0LXQutGB0YIg0LrQvtGA0L/QvtGA0L7RgtC40LLQvdC+0LPQviDQtdC80LDQudC7XHJcblxyXG5cdFx0Y29uc3QgZW1haWxDb21wYW55ID0gZm9ybVJlZy5xdWVyeVNlbGVjdG9yKCcjZm9ybS1hY2NvdW50LWVtYWlsJyksXHJcblx0XHRcdCAgcGF0dGVybiA9IGVtYWlsQ29tcGFueS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0dGVybicpLnNwbGl0KCd8Jyk7XHJcblxyXG5cdFx0ZW1haWxDb21wYW55LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHZhbGlkID0gdHJ1ZTtcclxuXHJcblx0XHRcdHBhdHRlcm4uZm9yRWFjaCggZWwgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoZW1haWxDb21wYW55LnZhbHVlLmluZGV4T2YoJ0AnICsgZWwpICE9PSAtMSkge1xyXG5cclxuXHRcdFx0XHRcdHZhbGlkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0bGV0IGlzVG9vbHRpcCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0Y29uc3QgbmV4dCA9IGVtYWlsQ29tcGFueS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG5cdFx0XHRpZiAoIG5leHQgJiYgbmV4dC5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0Ym94X19lcnJvcicpICkge1xyXG5cclxuXHRcdFx0XHRpc1Rvb2x0aXAgPSB0cnVlO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCB2YWxpZCA9PT0gZmFsc2UgKSB7XHJcblxyXG5cdFx0XHRcdGlmICggaXNUb29sdGlwID09PSBmYWxzZSApIHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCB0ZXh0ID0gZW1haWxDb21wYW55LmdldEF0dHJpYnV0ZSgnZGF0YS10ZXh0LXZhbGlkJyk7XHJcblx0XHRcdFx0XHRjb25zdCBlcnJvciA9IE11c3RhY2hlLnJlbmRlciggdGVtcGxhdGVFcnJvci5pbm5lckhUTUwsIHsgdGV4dCB9KTtcclxuXHJcblx0XHRcdFx0XHRlbWFpbENvbXBhbnkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGVycm9yKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0aXNUb29sdGlwICYmIG5leHQucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0Ly8gc3VibWl0IGZvcm1cclxuXHJcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRjb25zdCBidG5TdWJtaXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19zdWJtaXQnKTtcclxuXHJcblx0XHRidG5TdWJtaXQuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHR9KVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0LnRoZW4oanNvbiA9PiB7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhqc29uKTtcclxuXHJcblx0XHRcdGJ0blN1Ym1pdC5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0aWYoIGpzb24uZXJyb3JMaXN0ICkge1xyXG5cclxuXHRcdFx0XHRqc29uLmVycm9yTGlzdC5mb3JFYWNoKCBpbnB1dCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coaW5wdXQpO1xyXG5cclxuXHRcdFx0XHRcdGZvciAobGV0IHR5cGUgaW4gaW5wdXQpIHtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnN0IHRleHQgPSBpbnB1dFt0eXBlXTtcclxuXHRcdFx0XHRcdFx0Y29uc3QgZXJyb3IgPSBNdXN0YWNoZS5yZW5kZXIoIHRlbXBsYXRlRXJyb3IuaW5uZXJIVE1MLCB7IHRleHQgfSk7XHJcblxyXG5cdFx0XHRcdFx0XHRjb25zdCBpbnB1dEluRm9ybSA9IGZvcm0uZWxlbWVudHNbdHlwZV07XHJcblxyXG5cdFx0XHRcdFx0XHRpbnB1dEluRm9ybS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHRpbnB1dEluRm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1lcnJvcicpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZigganNvbi5ub3RpZmljYXRpb24gKSB7XHJcblxyXG5cdFx0XHRcdG5vdGlmaWNhdGlvbiguLi5qc29uLm5vdGlmaWNhdGlvbik7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyByZWRpcmVjdFxyXG5cclxuXHRcdFx0aWYoIGpzb24ucmVkaXJlY3QgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGRlbGF5ID0ganNvbi5yZWRpcmVjdERlbGF5ID8ganNvbi5yZWRpcmVjdERlbGF5ICogMTAwMCA6IDA7XHJcblxyXG5cdFx0XHRcdHNldFRpbWVvdXQoICgpPT4gbG9jYXRpb24uYXNzaWduKGpzb24ucmVkaXJlY3QpLCBkZWxheSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyDRgdC60YDRi9GC0LjQtSDQvtGI0LjQsdC+0Log0L/RgNC4INCy0LLQvtC00LVcclxuXHJcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZiAoIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWVycm9yJykgKSB7XHJcblxyXG5cdFx0XHRldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZXJyb3InKTtcclxuXHJcblx0XHRcdGNvbnN0IGVycm9yID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmlucHV0Ym94X19lcnJvcicpO1xyXG5cclxuXHRcdFx0aWYgKCBlcnJvciApIHtcclxuXHJcblx0XHRcdFx0ZXJyb3IuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3cuY3NzQW5pbWF0aW9uKCd0cmFuc2l0aW9uJyksICgpID0+IGVycm9yLnJlbW92ZSgpKTtcclxuXHJcblx0XHRcdFx0c2V0VGltZW91dCggKCkgPT4gZXJyb3IuY2xhc3NMaXN0LmFkZCgnaXMtZmFkZW91dCcpLCAxMDApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudCcpKTsiLCJcclxuKCBsaW5rcyA9PiB7XHJcblxyXG5cdGlmKGxpbmtzLmxlbmd0aCkge1xyXG5cclxuXHRcdGNvbnN0IGhpc3RvcnlCYWNrID0gZXZlbnQ9PiB7XHJcblxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRoaXN0b3J5LmJhY2soKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0QXJyYXkuZnJvbShsaW5rcywgbGluayA9PiB7XHJcblxyXG5cdFx0XHRpZihkb2N1bWVudC5yZWZlcnJlci5pbmRleE9mKGxvY2F0aW9uLmhvc3RuYW1lKSA+IDApIHtcclxuXHJcblx0XHRcdFx0bGluay5vbmNsaWNrID0gaGlzdG9yeUJhY2s7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1idG4tYmFjaycpKTsiLCJ3aW5kb3cuZGF0YWxpc3RzID0gZGF0YWxpc3QgPT4ge1xyXG5cclxuXHRjb25zdCBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcblx0YXJyb3cuY2xhc3NOYW1lID0gJ2lucHV0LWRhdGFsaXN0X19hcnJvdyc7XHJcblx0YXJyb3cuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJtNy41IDkgNC41IDUgNC41LTVoLTlaXCIvPjwvc3ZnPic7XHJcblxyXG5cdGRhdGFsaXN0LmFwcGVuZENoaWxkKGFycm93KTtcclxuXHJcblx0Y29uc3QgY29udHJvbCA9IGRhdGFsaXN0LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JyksXHJcblx0XHRvcHRpb24gPSBkYXRhbGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKSxcclxuXHRcdGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblx0bGlzdC5jbGFzc05hbWUgPSAnaW5wdXQtZGF0YWxpc3RfX2xpc3QnO1xyXG5cclxuXHRBcnJheS5mcm9tKG9wdGlvbiwgZWwgPT4ge1xyXG5cclxuXHRcdGNvbnN0IG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcblx0XHRvLmNsYXNzTmFtZSA9ICdidXR0b24gaW5wdXQtZGF0YWxpc3RfX2xpc3QtaXRlbSc7XHJcblxyXG5cdFx0by5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcblxyXG5cdFx0by50ZXh0Q29udGVudCA9IGVsLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxuXHJcblx0XHRsaXN0LmFwcGVuZENoaWxkKG8pO1xyXG5cclxuXHRcdG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHJcblx0XHRcdGNvbnRyb2wudmFsdWUgPSBvLnRleHRDb250ZW50O1xyXG5cclxuXHRcdFx0Y29udHJvbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRjb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xyXG5cclxuXHRcdHNldFRpbWVvdXQoICgpPT4gZGF0YWxpc3QuY2xhc3NMaXN0LmFkZCgnaXMtZm9jdXMnKSwgMTAwKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmIChldmVudC50YXJnZXQgIT09IGNvbnRyb2wgKSB7XHJcblxyXG5cdFx0XHRkYXRhbGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1mb2N1cycpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdGNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgdmFsdWUgPSBjb250cm9sLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0aWYodmFsdWUubGVuZ3RoID4gMSkge1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShsaXN0LmNoaWxkcmVuLCBvID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc3QgdGV4dCA9IG8udGV4dENvbnRlbnQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRcdG8uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIHRleHQuaW5kZXhPZih2YWx1ZSkgPT09IC0xKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYobGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZGF0YWxpc3RfX2xpc3QtaXRlbScpLmxlbmd0aCA9PT0gbGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZGF0YWxpc3RfX2xpc3QtaXRlbS5oaWRlJykubGVuZ3RoKSB7XHJcblxyXG5cdFx0XHRcdGNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnaXMtZW1wdHknKTtcclxuXHRcdFx0XHRsaXN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGNvbnRyb2wuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZW1wdHknKTtcclxuXHRcdFx0XHRsaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShsaXN0LmNoaWxkcmVuLCBvID0+IG8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcclxuXHRcdFx0Y29udHJvbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1lbXB0eScpO1xyXG5cdFx0XHRsaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRkYXRhbGlzdC5hcHBlbmRDaGlsZChsaXN0KTtcclxuXHJcblx0ZGF0YWxpc3QucXVlcnlTZWxlY3RvcignZGF0YWxpc3QnKS5yZW1vdmUoKTtcclxuXHJcbn07XHJcblxyXG4oICgpID0+IHtcclxuXHJcblx0d2luZG93LmRhdGFsaXN0c0NvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZGF0YWxpc3QnKTtcclxuXHJcblx0aWYod2luZG93LmRhdGFsaXN0c0NvbGxlY3Rpb24ubGVuZ3RoKSB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbSh3aW5kb3cuZGF0YWxpc3RzQ29sbGVjdGlvbiwgZGF0YWxpc3QgPT4gd2luZG93LmRhdGFsaXN0cyhkYXRhbGlzdCkpO1xyXG5cclxuXHR9XHJcblxyXG59KSgpOyIsIlxyXG4vLyBsYW5nIEVOfFJVINCyINGC0L7QstCw0YDQtVxyXG5cclxuKCBmb3JtID0+IHtcclxuXHJcblx0aWYoZm9ybSA9PT0gbnVsbCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHQvLyDQutC90L7Qv9C60Lgg0YHQutCw0YfQsNGC0YxcclxuXHJcblx0Y29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRvY3MtaXRlbS1sYW5nXScpO1xyXG5cclxuXHRpZihidG5zLmxlbmd0aCkge1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgbGFuZyA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJkb2NzLWl0ZW0tbGFuZ1wiXTpjaGVja2VkJykudmFsdWU7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGJ0bnMsIGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZG9jcy1pdGVtLWxhbmcnKSAhPT0gbGFuZykpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vINGE0L7RgNC80LAg0LfQsNC/0YDQvtGB0LAg0YbQtdC90Ysg0LIg0LzQvtC00LDQu9C60LVcclxuXHJcblx0Y29uc3QgZm9ybU1vZGFsR2V0UHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1tb2RhbC1nZXQtcHJpY2UnKTtcclxuXHJcblx0aWYoZm9ybU1vZGFsR2V0UHJpY2UpIHtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGxhbmcgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZG9jcy1pdGVtLWxhbmdcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG5cclxuXHRcdFx0Zm9ybU1vZGFsR2V0UHJpY2UuZWxlbWVudHMubGFuZy52YWx1ZSA9IGxhbmc7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0Ly8g0YTQvtGA0LzQsCDQt9Cw0L/RgNC+0YHQsCDRhtC10L3RiyDQvdCwINGB0YLRgNCw0L3QuNGG0LUgKNCw0LLRgtC+0YDQuNC30L7QstCw0L0pXHJcblxyXG5cdGNvbnN0IGZvcm1HZXRQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWdldC1wcmljZScpO1xyXG5cclxuXHRpZihmb3JtR2V0UHJpY2UpIHtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGxhbmcgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZG9jcy1pdGVtLWxhbmdcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG5cclxuXHRcdFx0Zm9ybUdldFByaWNlLmVsZW1lbnRzLmxhbmcudmFsdWUgPSBsYW5nO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1pdGVtX19sYW5nJykpOyIsIlxyXG4oIGZvcm1zID0+IHtcclxuXHJcblx0aWYoZm9ybXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0Y29uc3Qgc2VhcmNoUmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3Mtc2VhcmNoLXJlc3VsdCcpLFxyXG5cdFx0XHQgIGZpZWxkc2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb2NzLWZvcm1fX2ZpZWxkc2V0JyksXHJcblx0XHRcdCAgZm9ybVNob3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3MtcGFnZS0tc2hvcnQnKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGZvcm1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRcdC8vIGtleXdvcmRzXHJcblxyXG5cdFx0XHRpZiggZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2RvY3MtZm9ybS0tcHJvZHVjdCcpICkge1xyXG5cclxuXHRcdFx0XHRjb25zdCBpbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmRvY3MtZm9ybV9faW5wdXQnKSxcclxuXHRcdFx0XHRcdCAgcmVzZXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWZvcm1fX3Jlc2V0JyksXHJcblx0XHRcdFx0XHQgIHJlc3VsdCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmRvY3MtZm9ybV9fcmVzdWx0Jyk7XHJcblxyXG5cdFx0XHRcdC8vIGlucHV0XHJcblxyXG5cdFx0XHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtbm9lbXB0eScsIGlucHV0LnZhbHVlLmxlbmd0aCA+IDApO1xyXG5cclxuXHRcdFx0XHRcdGlmKGlucHV0LnZhbHVlLmxlbmd0aCA+IDIgJiYgZXZlbnQua2V5ICE9PSAnZW50ZXInKXtcclxuXHJcblx0XHRcdFx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpLCB7XHJcblx0XHRcdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcclxuXHRcdFx0XHRcdFx0LnRoZW4oaHRtbCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGh0bWwpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRyZXN1bHQuaW5uZXJIVE1MID0gaHRtbDtcclxuXHRcdFx0XHRcdFx0XHRyZXN1bHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRcdHJlc2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0cmVzZXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRcdFx0cmVzdWx0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdGhpc3RvcnkucHVzaFN0YXRlKHVuZGVmaW5lZCwgJycsICc/Jyk7XHJcblxyXG5cdFx0XHRcdFx0c2VhcmNoUmVzdWx0LmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHRcdFx0XHRcdHNlYXJjaFJlc3VsdC5pbm5lckhUTUwgPSAnJztcclxuXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKT0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGlucHV0LnZhbHVlID0gJyc7XHJcblxyXG5cdFx0XHRcdFx0XHRsZXQgdXJsID0gZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpICsgJz8nO1xyXG5cclxuXHRcdFx0XHRcdFx0bmV3IEZvcm1EYXRhKGZvcm0pLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0dXJsICs9IGtleSArIFwiPVwiICsgdmFsdWUgKyBcIiZcIjtcclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0ZmV0Y2godXJsKVxyXG5cdFx0XHRcdFx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcclxuXHRcdFx0XHRcdFx0XHQudGhlbihodG1sID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBib3hSZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRib3hSZXN1bHQuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRzZWFyY2hSZXN1bHQuaW5uZXJIVE1MID0gYm94UmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXNlYXJjaC1yZXN1bHQnKS5pbm5lckhUTUw7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0c2VhcmNoUmVzdWx0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKTtcclxuXHRcdFx0XHRcdFx0XHRcdGlucHV0LmZvY3VzKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdH0sIDEwMCk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8g0LrQsNGA0YLQvtGH0LrQuCwg0L3QvtC80LXRgNC60LvQsNGC0YPRgNCwINC4INGA0LDQt9GA0LDQsdC+0YLRh9C40LpcclxuXHJcblx0XHRcdGlmKCBmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZG9jcy1mb3JtLS1saXN0JykgKSB7XHJcblxyXG5cdFx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGZvcm0sICdjaGFuZ2UnKTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBxdWVyeVN0cmluZyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoZm9ybURhdGEpLnRvU3RyaW5nKCk7XHJcblxyXG5cdFx0XHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUodW5kZWZpbmVkLCAnJywgJz8nICsgcXVlcnlTdHJpbmcpO1xyXG5cclxuXHRcdFx0XHRcdGxldCB3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWFqYXhfX2J0bjpkaXNhYmxlZCcpICkge1xyXG5cclxuXHRcdFx0XHRcdFx0c2VhcmNoUmVzdWx0LmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmctYWRkJyk7XHJcblxyXG5cdFx0XHRcdFx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdHNlYXJjaFJlc3VsdC5jbGFzc0xpc3QuYWRkKCdpcy1sb2FkaW5nJyk7XHJcblx0XHRcdFx0XHRcdHNlYXJjaFJlc3VsdC5pbm5lckhUTUwgPSAnJztcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJyksIHtcclxuXHRcdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0XHRcdGJvZHk6IGZvcm1EYXRhXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG5cdFx0XHRcdFx0LnRoZW4oaHRtbCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyDQutC90L7Qv9C60LAg0LXRidGRXHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3MtYWpheF9fYnRuOmRpc2FibGVkJykpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgYm94UmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGJveFJlc3VsdC5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRBcnJheS5mcm9tKGJveFJlc3VsdC5xdWVyeVNlbGVjdG9yQWxsKCcuZG9jcy1jYXRhbG9nX19pdGVtJyksIGl0ZW0gPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHNlYXJjaFJlc3VsdC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1jYXRhbG9nX19saXN0JykuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoIGJveFJlc3VsdC5xdWVyeVNlbGVjdG9yKCcucGFnaW4nKSApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRzZWFyY2hSZXN1bHQucXVlcnlTZWxlY3RvcignLnBhZ2luJykuaW5uZXJIVE1MID0gYm94UmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJy5wYWdpbicpLmlubmVySFRNTDtcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiggc2VhcmNoUmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWFqYXhfX2J0bicpICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWFqYXhfX2J0bicpLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3MtYWpheCcpLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmKCB3aW5kb3dTY3JvbGwgIT09IHdpbmRvdy5wYWdlWU9mZnNldCApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCx3aW5kb3dTY3JvbGwpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRzZWFyY2hSZXN1bHQuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHNlYXJjaFJlc3VsdC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJywnaXMtbG9hZGluZy1hZGQnKTtcclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRpZihmb3JtU2hvcnQgPT09IG51bGwpIHtcclxuXHJcblx0XHRcdFx0XHRcdGZvcm1TaG9ydCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2UtYmx1ZScpO1xyXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1wYWdlJykuY2xhc3NMaXN0LmFkZCgnZG9jcy1wYWdlLS1zaG9ydCcpO1xyXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1wYWdlX19kZXNjcmlwdGlvbicpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0c2VhcmNoUmVzdWx0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQvLyBzdWJtaXRcclxuXHJcblx0XHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShmaWVsZHNldHMsIGZpZWxkc2V0ID0+IHtcclxuXHJcblx0XHRcdC8vIG9wZW5cclxuXHJcblx0XHRcdGZpZWxkc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZG9jcy1mb3JtX19yZXN1bHQnKSApIHtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShmaWVsZHNldHMsIGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWZvY3VzJywgZWwgPT09IGZpZWxkc2V0KSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNvbnN0IGZvcm0gPSBmaWVsZHNldC5jbG9zZXN0KCcuZG9jcy1mb3JtJyksXHJcblx0XHRcdFx0ICBpbnB1dCA9IGZpZWxkc2V0LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWZvcm1fX2lucHV0JyksXHJcblx0XHRcdFx0ICByZXNldCA9IGZpZWxkc2V0LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWZvcm1fX3Jlc2V0JyksXHJcblx0XHRcdFx0ICByZXN1bHQgPSBmaWVsZHNldC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1mb3JtX19yZXN1bHQnKTtcclxuXHJcblx0XHRcdC8vIGlucHV0XHJcblxyXG5cdFx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShmaWVsZHNldHMsIGVsID0+IHtcclxuXHJcblx0XHRcdFx0XHRlbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1mb2N1cycsIGVsID09PSBmaWVsZHNldCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBmaWVsZHNldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RvY3MtZm9ybV9fY2F0YWxvZycpICYmIGVsICE9PSBmaWVsZHNldCApIHtcclxuXHJcblx0XHRcdFx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBub21lbmNsYXR1cmVcclxuXHJcblx0XHRcdGlmKGZpZWxkc2V0LmNsYXNzTGlzdC5jb250YWlucygnZG9jcy1mb3JtX19ub21lbmNsYXR1cmUnKSkge1xyXG5cclxuXHRcdFx0XHQvLyBkYXRhbGlzdFxyXG5cclxuXHRcdFx0XHRjb25zdCBkYXRhbGlzdCA9IGZpZWxkc2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb2NzLWZvcm1fX3Jlc3VsdC1kYXRhbGlzdCcpO1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGRhdGFsaXN0LCBidG4gPT4ge1xyXG5cclxuXHRcdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGZpZWxkc2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZvY3VzJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9IGJ0bi50ZXh0Q29udGVudC50cmltKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXNldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLW5vZW1wdHknKTtcclxuXHJcblx0XHRcdFx0XHRcdGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdFx0XHRcdHJlc2V0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCB2YWx1ZS5sZW5ndGggPT09IDApO1xyXG5cclxuXHRcdFx0XHRcdGlmKHZhbHVlLmxlbmd0aCA+IDEpIHtcclxuXHJcblx0XHRcdFx0XHRcdEFycmF5LmZyb20oZGF0YWxpc3QsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRleHQgPSBidG4udGV4dENvbnRlbnQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgdGV4dC5pbmRleE9mKHZhbHVlKSA9PT0gLTEpO1xyXG5cclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0XHRpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZW1wdHknKTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0QXJyYXkuZnJvbShkYXRhbGlzdCwgYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdC8vIHJlc2V0ID09PSBjbGVhclxyXG5cclxuXHRcdFx0XHRyZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRBcnJheS5mcm9tKGRhdGFsaXN0LCBidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XHJcblx0XHRcdFx0XHRmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdpcy1mb2N1cycpO1xyXG5cdFx0XHRcdFx0cmVzZXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRcdFx0aW5wdXQudmFsdWUgPSAnJztcclxuXHRcdFx0XHRcdGlucHV0LmZvY3VzKCk7XHJcblx0XHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBkZXZlbG9wZXJcclxuXHJcblx0XHRcdGlmKGZpZWxkc2V0LmNsYXNzTGlzdC5jb250YWlucygnZG9jcy1mb3JtX19kZXZlbG9wZXInKSkge1xyXG5cclxuXHRcdFx0XHQvLyBjaGVja2JveFxyXG5cclxuXHRcdFx0XHRjb25zdCBjaGVja2JveCA9IGZpZWxkc2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveF9faW5wdXQnKTtcclxuXHJcblx0XHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYoIGV2ZW50LnRhcmdldC50eXBlICE9PSAnY2hlY2tib3gnICkge1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRsZXQgdmFsdWUgPSAnJztcclxuXHJcblx0XHRcdFx0XHRpZiAoIGV2ZW50LnRhcmdldC5uYW1lID09PSAnYWxsJyAmJiBldmVudC50YXJnZXQuY2hlY2tlZCApIHtcclxuXHJcblx0XHRcdFx0XHRcdHZhbHVlID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUudGV4dENvbnRlbnQudHJpbSgpO1xyXG5cclxuXHRcdFx0XHRcdFx0QXJyYXkuZnJvbShjaGVja2JveCwgZWwgPT4gZWwuY2hlY2tlZCA9IHRydWUpO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRBcnJheS5mcm9tKGNoZWNrYm94LCBlbCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmKCBlbC5uYW1lID09PSAnYWxsJyApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRlbC5jaGVja2VkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0aWYoIGVsLmNoZWNrZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgbGFiZWwgPSBlbC5wYXJlbnROb2RlO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmKCB2YWx1ZSAhPT0gJycgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZSArPSAnLCAnO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZSArPSBsYWJlbC50ZXh0Q29udGVudC50cmltKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9IHZhbHVlO1xyXG5cclxuXHRcdFx0XHRcdGlmKCB2YWx1ZSA9PT0gJycgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXNldC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtbm9lbXB0eScpO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXNldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtbm9lbXB0eScpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdC8vIHJlc2V0ID09PSBjbGVhclxyXG5cclxuXHRcdFx0XHRyZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRBcnJheS5mcm9tKGNoZWNrYm94LCBlbCA9PiBlbC5jaGVja2VkID0gZmFsc2UpO1xyXG5cdFx0XHRcdFx0ZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnaXMtZm9jdXMnKTtcclxuXHRcdFx0XHRcdHJlc2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdGlucHV0LnZhbHVlID0gJyc7XHJcblx0XHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRpZiggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kb2NzLWZvcm1fX2ZpZWxkc2V0JykgPT09IG51bGwgKXtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShmaWVsZHNldHMsIGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZvY3VzJywgJ2hpZGUnKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyB0YWJzXHJcblxyXG5cdFx0XHRjb25zdCB0YWJzQnRuID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kb2NzLXBhZ2VfX3RhYnMtaXRlbScpO1xyXG5cclxuXHRcdFx0aWYoIHRhYnNCdG4gKXtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3MtcGFnZV9fdGFicy1pdGVtLmlzLWFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xyXG5cdFx0XHRcdHRhYnNCdG4uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdGlmKCB0YWJzQnRuLmNsYXNzTGlzdC5jb250YWlucygnZG9jcy1wYWdlX190YWJzLWl0ZW0tLXN0YW5kYXJ0cycpICkge1xyXG5cclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXBhZ2VfX2Zvcm1zLS1zdGFuZGFydHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1wYWdlX19mb3Jtcy0tYW5hbHl0aWNzJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXNlYXJjaC1yZXN1bHRfX3N0YW5kYXJ0cycpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXNlYXJjaC1yZXN1bHRfX2FuYWx5dGljcycpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiggdGFic0J0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2RvY3MtcGFnZV9fdGFicy1pdGVtLS1hbmFseXRpY3MnKSApIHtcclxuXHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1wYWdlX19mb3Jtcy0tYW5hbHl0aWNzJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3MtcGFnZV9fZm9ybXMtLXN0YW5kYXJ0cycpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1zZWFyY2gtcmVzdWx0X19hbmFseXRpY3MnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1zZWFyY2gtcmVzdWx0X19zdGFuZGFydHMnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGFqYXhcclxuXHJcblx0XHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kb2NzLWFqYXhfX2J0bicpICkge1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1hamF4X19idG4nKS5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdGNvbnN0IHBhZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3MtZm9ybS0tbGlzdCcpLmVsZW1lbnRzWydQQUdFTl8xJ107XHJcblxyXG5cdFx0XHRcdHBhZ2luLnZhbHVlID0gcGFyc2VJbnQocGFnaW4udmFsdWUpICsgMTtcclxuXHJcblx0XHRcdFx0cGFnaW4ucGFyZW50Tm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb2NzLWZvcm0nKSk7IiwiKCAoKSA9PiB7XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRsZXQgZm9ybSA9IGV2ZW50LnRhcmdldDtcclxuXHJcblx0XHQvLyDQtNC+0LHQsNCy0LjRgtGMINCyINC40LfQsdGA0LDQvdC90L7QtVxyXG5cclxuXHRcdGlmIChmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1hZGQtZmF2b3VyaXRlJykpIHtcclxuXHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0XHQudGhlbihqc29uID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2coanNvbik7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g0LfQsNC/0YDQvtGBINGG0LXQvdGLINCyINGB0L/QuNGB0LrQtSDRgNC10LfRg9C70YzRgtCw0YLQvtCyINCQ0LLRgtC+0YDQuNC30L7QstCw0L1cclxuXHJcblx0XHRpZiAoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0tZ2V0LXByaWNlJykpIHtcclxuXHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRjb25zdCBidG5TdWJtaXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWdldC1wcmljZV9fc3VibWl0Jyk7XHJcblxyXG5cdFx0XHRidG5TdWJtaXQuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oanNvbiA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGpzb24pO1xyXG5cclxuXHRcdFx0XHRidG5TdWJtaXQudGV4dENvbnRlbnQgPSBidG5TdWJtaXQuZ2V0QXR0cmlidXRlKCdkYXRhLWRvbmUnKTtcclxuXHJcblx0XHRcdFx0bm90aWZpY2F0aW9uKGpzb24ubm90aWZpY2F0aW9uVGl0bGUsanNvbi5ub3RpZmljYXRpb25UZXh0LGpzb24ubm90aWZpY2F0aW9uVGltZXIpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcbn0pKCk7IiwiKCBpdGVtcyA9PiB7XHJcblxyXG5cdGlmKCFpdGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShpdGVtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRuID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fc3VibWl0JyksXHJcblx0XHRcdCAgb2tUZXh0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fb2snKSxcclxuXHRcdFx0ICBlcnJvclRleHQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19lcnJvcicpO1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtbG9hZGluZycpO1xyXG5cdFx0XHRidG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcblx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XHJcblx0XHRcdFx0YnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbi8qXHJcblx0XHRcdFx0aWYocmVzdWx0Lm1zZykge1xyXG5cclxuXHRcdFx0XHRcdGZvcm0ucmVzZXQoKTtcclxuXHJcblx0XHRcdFx0XHRtb2RhbC5vayhyZXN1bHQubXNnLnRpdGxlLCByZXN1bHQubXNnLnRleHQpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyDRgNC10LfRg9C70YzRgtCw0YIg0YPRgdC/0LXRhdCwINC30LDRj9Cy0LrQuCBxdWFsaXR5XHJcblxyXG5cdFx0XHRcdGlmKHJlc3VsdC5tb2RhbCA9PT0gJ3F1YWxpdHktb2snKSB7XHJcblxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1YWxpdHktcmVzdWx0X19udW1iZXInKS50ZXh0Q29udGVudCA9IHJlc3VsdC5udW1iZXI7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVhbGl0eS1yZXN1bHRfX3Byb2R1Y3QnKS50ZXh0Q29udGVudCA9IHJlc3VsdC5wcm9kdWN0TmFtZTtcclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWFsaXR5LXJlc3VsdF9fcHJvZHVjdCcpLmdldEF0dHJpYnV0ZSgnaHJlZicsIHJlc3VsdC5wcm9kdWN0TGluayk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgZXZlbnRNb2RhbFNob3cgPSBuZXcgQ3VzdG9tRXZlbnQoXCJtb2RhbFNob3dcIiwge1xyXG5cdFx0XHRcdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRcdFx0XHRzZWxlY3RvcjogcmVzdWx0Lm1vZGFsXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdHdpbmRvdy5tb2RhbC5kaXNwYXRjaEV2ZW50KGV2ZW50TW9kYWxTaG93KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaW5mbyBtb2RhbFxyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQudHlwZSA9PT0gJ29rJyB8fCByZXN1bHQudHlwZSA9PT0gJ2Vycm9yJykge1xyXG5cclxuXHRcdFx0XHRcdG1vZGFsLm9rKHJlc3VsdC50aXRsZSwgcmVzdWx0LnRleHQsIHJlc3VsdC5tb2QpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBvayBpbiBmb3JtXHJcblxyXG5cdFx0XHRcdGlmKG9rVGV4dCkge1xyXG5cclxuXHRcdFx0XHRcdGlmKHJlc3VsdC50eXBlID09PSAnZm9ybS1vaycpIHtcclxuXHJcblx0XHRcdFx0XHRcdG9rVGV4dC50ZXh0Q29udGVudCA9IHJlc3VsdC50ZXh0O1xyXG5cdFx0XHRcdFx0XHRva1RleHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYoIUlOVEkuaXNJblZpZXdwb3J0KG9rVGV4dCkpe1xyXG5cclxuXHRcdFx0XHRcdFx0XHRva1RleHQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdG9rVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBlcnJvciBpbiBmb3JtXHJcblxyXG5cdFx0XHRcdGlmKGVycm9yVGV4dCkge1xyXG5cclxuXHRcdFx0XHRcdGlmKHJlc3VsdC50eXBlID09PSAnZm9ybS1lcnJvcicpIHtcclxuXHJcblx0XHRcdFx0XHRcdGVycm9yVGV4dC50ZXh0Q29udGVudCA9IHJlc3VsdC50ZXh0O1xyXG5cdFx0XHRcdFx0XHRlcnJvclRleHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYoIUlOVEkuaXNJblZpZXdwb3J0KGVycm9yVGV4dCkpe1xyXG5cclxuXHRcdFx0XHRcdFx0XHRlcnJvclRleHQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdGVycm9yVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyByZWRpcmVjdFxyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQucmVkaXJlY3QpIHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBkZWxheSA9IHJlc3VsdC5yZWRpcmVjdERlbGF5ID8gcmVzdWx0LnJlZGlyZWN0RGVsYXkgKiAxMDAwIDogMDtcclxuXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKT0+IGxvY2F0aW9uLmFzc2lnbihyZXN1bHQucmVkaXJlY3QpLCBkZWxheSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGZhZGVvdXRcclxuXHJcblx0XHRcdFx0aWYocmVzdWx0LmZhZGVvdXQpIHtcclxuXHJcblx0XHRcdFx0XHRva1RleHQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZmFkZW91dCcpO1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoICgpPT4gb2tUZXh0LmNsYXNzTGlzdC5hZGQoJ2lzLWZhZGVvdXQnKSwgcmVzdWx0LmZhZGVvdXQgKiAxMDAwKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gcmVzZXRcclxuXHJcblx0XHRcdFx0aWYocmVzdWx0LnJlc2V0KSB7XHJcblxyXG5cdFx0XHRcdFx0Zm9ybS5yZXNldCgpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyByZWxvYWRcclxuXHJcblx0XHRcdFx0aWYocmVzdWx0LnJlZnJlc2gpIHtcclxuXHJcblx0XHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcclxuXHJcblx0XHRcdFx0fVxyXG4qL1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybScpKTtcclxuXHJcbiggZmlsZXMgPT4ge1xyXG5cclxuXHRpZighZmlsZXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oZmlsZXMsIGVsID0+IHtcclxuXHJcblx0XHRjb25zdCBpbnB1dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1maWxlX19pbnB1dCcpLFxyXG5cdFx0XHQgIHZhbHVlID0gZWwucXVlcnlTZWxlY3RvcignLmlucHV0LWZpbGVfX3ZhbHVlJyk7XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnaXMtY2hhbmdlJyk7XHJcblx0XHRcdHZhbHVlLnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWZpbGUnKSk7IiwiKCBmb3JtR2V0UHJpY2UgPT4ge1xyXG5cclxuXHRpZiAoIGZvcm1HZXRQcmljZSA9PT0gbnVsbCApIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Ly8g0LrQu9C40LrQtSDQsiDRgNC10LfRg9C70YzRgtCw0YLQsNGFINC/0L7QuNGB0LrQsCDQv9C+INC60L3QvtC/0LrQtSDQo9C30L3QsNGC0Ywg0YHRgtC+0LjQvNC+0YHRgtGMXHJcblxyXG5cdGNvbnN0IHNlYXJjaFJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXNlYXJjaC1yZXN1bHQnKTtcclxuXHJcblx0aWYgKCBzZWFyY2hSZXN1bHQgKSB7XHJcblxyXG5cdFx0c2VhcmNoUmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0aWYoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZG9jcy1jYXRhbG9nLWl0ZW1fX3JlcXVlc3RbZGF0YS1tb2RhbD1cImdldC1wcmljZVwiXScpICkge1xyXG5cclxuXHRcdFx0XHRmb3JtR2V0UHJpY2UuZWxlbWVudHMuaWQudmFsdWUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmRvY3MtY2F0YWxvZy1pdGVtX19yZXF1ZXN0W2RhdGEtbW9kYWw9XCJnZXQtcHJpY2VcIl0nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHQvLyDQvtCx0YDQsNCx0L7RgtC60LAg0YTQvtGA0LzRiyDQsiDQvNC+0LTQsNC70LrQtVxyXG5cclxuXHRmb3JtR2V0UHJpY2UuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdH0pXHJcblx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHQudGhlbihqc29uID0+IHtcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKGpzb24pO1xyXG5cclxuXHRcdFx0aWYoIGpzb24uaWQgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGJ0blRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kb2NzLWNhdGFsb2ctaXRlbV9fcmVxdWVzdFtkYXRhLWlkPVwiJHtqc29uLmlkfVwiXWApO1xyXG5cclxuXHRcdFx0XHRidG5UYXJnZXQudGV4dENvbnRlbnQgPSBidG5UYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWRvbmUnKTtcclxuXHRcdFx0XHRidG5UYXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bm90aWZpY2F0aW9uKGpzb24ubm90aWZpY2F0aW9uVGl0bGUsanNvbi5ub3RpZmljYXRpb25UZXh0LGpzb24ubm90aWZpY2F0aW9uVGltZXIpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLWdldC1wcmljZScpKTsiLCJcclxuKCBwYWdlID0+IHtcclxuXHJcblx0aWYocGFnZSkge1xyXG5cclxuXHRcdGNvbnN0IHNlYXJjaFJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnNpZ2h0cy1zZWFyY2gtcmVzdWx0JyksXHJcblx0XHRcdCAgYm94ID0gcGFnZS5xdWVyeVNlbGVjdG9yKCcuaW5zaWdodHMtcGFnZV9fYm94JyksXHJcblx0XHRcdCAgZm9ybSA9IHBhZ2UucXVlcnlTZWxlY3RvcignLmluc2lnaHRzLWZvcm0nKSxcclxuXHRcdFx0ICBpbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmluc2lnaHRzLWZvcm1fX2lucHV0Jyk7XHJcblxyXG5cdFx0Ly8g0LrQvdC+0L/QutCwINC60LDRgtCw0LvQvtCzXHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRpZiggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5pbnNpZ2h0cy1jYXRlZ29yeS1saXN0JykgPT09IG51bGwgKXtcclxuXHJcblx0XHRcdFx0aWYoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuaW5zaWdodHMtcGFnZV9fYnRuLWNhdGFsb2cnKSApe1xyXG5cclxuXHRcdFx0XHRcdGJveC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuLWNhdGVnb3J5Jyk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0Ym94LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4tY2F0ZWdvcnknKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8g0LIg0LrQsNGC0LDQu9C+0LPQtSDRgNCw0LfQstC10YDQvdGD0YLRjCDRgdC/0LjRgdC60LhcclxuXHJcblx0XHRcdGlmKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLmluc2lnaHRzLWNhdGVnb3J5LWxpc3RfX2l0ZW0nKSAmJiBldmVudC50YXJnZXQuY2xvc2VzdCgnLmluc2lnaHRzLWNhdGVnb3J5LWxpc3RfX2xpbmsnKSA9PT0gbnVsbCApIHtcclxuXHJcblx0XHRcdFx0ZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5pbnNpZ2h0cy1jYXRlZ29yeS1saXN0X19pdGVtJykuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8g0YPQsdC40YDQsNC10Lwg0YTQvtC60YPRgVxyXG5cclxuXHRcdFx0aWYoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuaW5zaWdodHMtZm9ybScpID09PSBudWxsICkge1xyXG5cclxuXHRcdFx0XHRib3guY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3Blbi1maWx0ZXInKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vINGE0LjQu9GM0YLRgCDQsiDQstGL0LTQsNGH0LVcclxuXHJcblx0XHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5pbnNpZ2h0cy1jYXRhbG9nLWZpbHRlcl9faXRlbScpID09PSBudWxsICkge1xyXG5cclxuXHRcdFx0XHRjb25zdCBvcGVuQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluc2lnaHRzLWNhdGFsb2ctZmlsdGVyX19idG4uaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0XHRpZiAob3BlbkJveCkge1xyXG5cclxuXHRcdFx0XHRcdG9wZW5Cb3guY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gaW5wdXRcclxuXHJcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0Ym94LmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4tZmlsdGVyJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gY2hhbmdlXHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhmb3JtLCAnY2hhbmdlJyk7XHJcblxyXG5cdFx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuXHJcblx0XHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhmb3JtRGF0YSkudG9TdHJpbmcoKTtcclxuXHJcblx0XHRcdGhpc3RvcnkucHVzaFN0YXRlKHVuZGVmaW5lZCwgJycsICc/JyArIHF1ZXJ5U3RyaW5nKTtcclxuXHJcblx0XHRcdHNlYXJjaFJlc3VsdC5jbGFzc0xpc3QuYWRkKCdpcy1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRib2R5OiBmb3JtRGF0YVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcblx0XHRcdC50aGVuKGh0bWwgPT4ge1xyXG5cclxuXHRcdFx0XHRzZWFyY2hSZXN1bHQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gaW5wdXQga2V5dXBcclxuXHJcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtbm9lbXB0eScsIGlucHV0LnZhbHVlLmxlbmd0aCA+IDApO1xyXG5cclxuXHRcdFx0aWYoaW5wdXQudmFsdWUubGVuZ3RoID4gMiAmJiBldmVudC5rZXkgIT09ICdlbnRlcicpe1xyXG5cclxuXHRcdFx0XHRzZWFyY2hSZXN1bHQuY2xhc3NMaXN0LmFkZCgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcblx0XHRcdFx0LnRoZW4oaHRtbCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coaHRtbCk7XHJcblxyXG5cdFx0XHRcdFx0c2VhcmNoUmVzdWx0LmlubmVySFRNTCA9IGh0bWw7XHJcblx0XHRcdFx0XHRzZWFyY2hSZXN1bHQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyByZXNldFxyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW5vZW1wdHknKTtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoICgpPT4ge1xyXG5cclxuXHRcdFx0XHRpbnB1dC52YWx1ZSA9ICcnO1xyXG5cdFx0XHRcdGlucHV0LmZvY3VzKCk7XHJcblxyXG5cdFx0XHR9LDEwMCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gc2VhcmNoUmVzdWx0XHJcblxyXG5cdFx0c2VhcmNoUmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XHJcblxyXG5cdFx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQsXHJcblx0XHRcdFx0ICBmaWx0ZXIgPSB0YXJnZXQuY2xvc2VzdCgnLmluc2lnaHRzLWNhdGFsb2ctZmlsdGVyJyk7XHJcblxyXG5cdFx0XHQvLyDRhNC40LvRjNGC0YAg0LIg0LLRi9C00LDRh9C1XHJcblxyXG5cdFx0XHRpZiAoIGZpbHRlciApIHtcclxuXHJcblx0XHRcdFx0aWYoIHRhcmdldC50eXBlID09PSAnY2hlY2tib3gnICkge1xyXG5cclxuXHRcdFx0XHRcdC8vINCS0YHQtVxyXG5cclxuXHRcdFx0XHRcdGNvbnN0IG5hbWUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCduYW1lJyksXHJcblx0XHRcdFx0XHRcdCAgYnRuQWxsID0gZmlsdGVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCInICsgbmFtZSArICdcIl1bdmFsdWU9XCJhbGxcIl0nKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGJ0bkFsbCApIHtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnN0IGxpc3QgPSBBcnJheS5mcm9tKGZpbHRlci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwiJyArIG5hbWUgKyAnXCJdJykpLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gYnRuQWxsKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmICggdGFyZ2V0ID09PSBidG5BbGwgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdEFycmF5LmZyb20obGlzdCwgaW5wdXQgPT4gaW5wdXQuY2hlY2tlZCA9IGJ0bkFsbC5jaGVja2VkKTtcclxuXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGJ0bkFsbC5jaGVja2VkID0gbGlzdC5ldmVyeSggaW5wdXQgPT4gaW5wdXQuY2hlY2tlZCA9PT0gdHJ1ZSApO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8g0KDQtdC50YLQuNC90LNcclxuXHJcblx0XHRcdGlmICggdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaW5zaWdodHMtY2F0YWxvZy1maWx0ZXJfX3JhdGluZycpICkge1xyXG5cclxuXHRcdFx0XHRmb3JtLmVsZW1lbnRzW3RhcmdldC5nZXRBdHRyaWJ1dGUoJ25hbWUnKV0udmFsdWUgPSB0YXJnZXQudmFsdWU7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyDQn9GA0L7QuNC30LLQvtC00LjRgtC10LvRjFxyXG5cclxuXHRcdFx0aWYgKCB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnNpZ2h0cy1jYXRhbG9nLWZpbHRlcl9fbWFudWZhY3R1cmVyJykgKSB7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oc2VhcmNoUmVzdWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnNpZ2h0cy1jYXRhbG9nLWZpbHRlcl9fbWFudWZhY3R1cmVyJyksIGlucHV0ID0+IHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBoaWRkZW5Db250cm9sID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIicgKyBpbnB1dC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSArICdcIl1bdmFsdWU9XCInICsgaW5wdXQudmFsdWUgKyAnXCJdJyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBpbnB1dC5jaGVja2VkICkge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCBoaWRkZW5Db250cm9sID09PSBudWxsICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRjb25zdCBoaWRkZW5Db250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aGlkZGVuQ29udHJvbC50eXBlID0gJ2hpZGRlbic7XHJcblx0XHRcdFx0XHRcdFx0aGlkZGVuQ29udHJvbC52YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdGhpZGRlbkNvbnRyb2wubmFtZSA9IGlucHV0LmdldEF0dHJpYnV0ZSgnbmFtZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRmb3JtLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJCZWdpbicsIGhpZGRlbkNvbnRyb2wpO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoaGlkZGVuQ29udHJvbCkge1xyXG5cclxuXHRcdFx0XHRcdFx0aGlkZGVuQ29udHJvbC5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8g0J/RgNC+0LTRg9C60YJcclxuXHJcblx0XHRcdGlmICggdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaW5zaWdodHMtY2F0YWxvZy1maWx0ZXJfX2NhdCcpICkge1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKHNlYXJjaFJlc3VsdC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5zaWdodHMtY2F0YWxvZy1maWx0ZXJfX2NhdCcpLCBpbnB1dCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIicgKyBpbnB1dC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSArICdcIl1bdmFsdWU9XCInICsgaW5wdXQudmFsdWUgKyAnXCJdJykuY2hlY2tlZCA9IGlucHV0LmNoZWNrZWQ7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8g0JHQuNC30L3QtdGBXHJcblxyXG5cdFx0XHRpZiAoIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2luc2lnaHRzLWNhdGFsb2ctZmlsdGVyX19iaXNuZXNzJykgKSB7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oc2VhcmNoUmVzdWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnNpZ2h0cy1jYXRhbG9nLWZpbHRlcl9fYmlzbmVzcycpLCBpbnB1dCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIicgKyBpbnB1dC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSArICdcIl1bdmFsdWU9XCInICsgaW5wdXQudmFsdWUgKyAnXCJdJykuY2hlY2tlZCA9IGlucHV0LmNoZWNrZWQ7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8g0KDQtdCz0LjQvtC9XHJcblxyXG5cdFx0XHRpZiAoIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2luc2lnaHRzLWNhdGFsb2ctZmlsdGVyX19jb3VudHJ5JykgKSB7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oc2VhcmNoUmVzdWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnNpZ2h0cy1jYXRhbG9nLWZpbHRlcl9fY291bnRyeScpLCBpbnB1dCA9PiB7XHJcblxyXG4vL1x0XHRcdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiJyArIGlucHV0LmdldEF0dHJpYnV0ZSgnbmFtZScpICsgJ1wiXVt2YWx1ZT1cIicgKyBpbnB1dC52YWx1ZSArICdcIl0nKS5jaGVja2VkID0gaW5wdXQuY2hlY2tlZDtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRzZWFyY2hSZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQsXHJcblx0XHRcdFx0ICBidG5GaWx0ZXIgPSB0YXJnZXQuY2xvc2VzdCgnLmluc2lnaHRzLWNhdGFsb2ctZmlsdGVyX19idG4nKTtcclxuXHJcblx0XHRcdC8vINGE0LjQu9GM0YLRgCDQutC90L7Qv9C60LBcclxuXHJcblx0XHRcdGlmKCBidG5GaWx0ZXIgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGJveFRhcmdldCA9IGJ0bkZpbHRlci5jbG9zZXN0KCcuaW5zaWdodHMtY2F0YWxvZy1maWx0ZXJfX2l0ZW0nKSxcclxuXHRcdFx0XHRcdCAgbGlzdCA9IHNlYXJjaFJlc3VsdC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5zaWdodHMtY2F0YWxvZy1maWx0ZXJfX2l0ZW0nKTtcclxuXHJcblx0XHRcdFx0Ly8gcmVzZXQg0LrQvdC+0L/QutCwXHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20obGlzdCwgaXRlbSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBpdGVtID09PSBib3hUYXJnZXQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIHRhcmdldC5jbG9zZXN0KCcuaW5zaWdodHMtY2F0YWxvZy1maWx0ZXJfX2J0bi1yZXNldCcpICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5pbnNpZ2h0cy1jYXRhbG9nLWZpbHRlcl9fYnRuJykuY2xhc3NMaXN0LnJlbW92ZSgnaXMtY2hlY2tlZCcpO1xyXG5cdFx0XHRcdFx0XHRcdGl0ZW0ucXVlcnlTZWxlY3RvcignLmluc2lnaHRzLWNhdGFsb2ctZmlsdGVyX19idG4tcmVzZXQnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0aXRlbS5xdWVyeVNlbGVjdG9yKCcuaW5zaWdodHMtY2F0YWxvZy1maWx0ZXJfX2J0bi1jb3VudCcpICYmIGl0ZW0ucXVlcnlTZWxlY3RvcignLmluc2lnaHRzLWNhdGFsb2ctZmlsdGVyX19idG4tY291bnQnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRidG5GaWx0ZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5pbnNpZ2h0cy1jYXRhbG9nLWZpbHRlcl9fYnRuJykuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnNpZ2h0cy1wYWdlJykpOyIsIiggZm9ybXMgPT4ge1xyXG5cclxuXHRpZighZm9ybXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG4vKlx0QXJyYXkuZnJvbShmb3JtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5saXZlLXNlYXJjaF9faW5wdXQnKSxcclxuXHRcdFx0ICByZXN1bHQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5saXZlLXNlYXJjaF9fcmVzdWx0Jyk7XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRpZihpbnB1dC52YWx1ZS5sZW5ndGggPiAyICYmIGV2ZW50LmtleSAhPT0gJ2VudGVyJyl7XHJcblxyXG5cdFx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnbGl2ZS1zZWFyY2gtLWxvYWRpbmcnLCAnbGl2ZS1zZWFyY2gtLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG5cdFx0XHRcdC50aGVuKGh0bWwgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGh0bWwpO1xyXG5cclxuXHRcdFx0XHRcdHJlc3VsdC5pbm5lckhUTUwgPSBodG1sO1xyXG5cdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdsaXZlLXNlYXJjaC0tbG9hZGluZycpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINGB0LrRgNGL0YLRjCDRgNGD0LfQtdC70YzRgtCw0YLRiyDQv9GA0Lgg0LrQu9C40LrQtSDQstC90LUg0YTQvtGA0LzRi1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCBpc0Zvcm0gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmxpdmUtc2VhcmNoJyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShmb3JtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0XHRpZihpc0Zvcm0gIT09IGZvcm0pIHtcclxuXHJcblx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdsaXZlLXNlYXJjaC0tb3BlbicpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTsqL1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpdmUtc2VhcmNoJykpOyIsIiggcGFnZSA9PiB7XHJcblxyXG5cdGlmKHBhZ2UpIHtcclxuXHJcblx0XHRjb25zdCBjb250ZW50ID0gcGFnZS5xdWVyeVNlbGVjdG9yKCcubWFpbi1wYWdlX19jb250ZW50Jyk7XHJcblxyXG5cdFx0aWYgKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XHJcblxyXG5cdFx0XHRjb25zdCBjYWxsYmFjayA9IChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGVudHJpZXMsIGVudHJ5ID0+IHtcclxuXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrLCB7XHJcblx0XHRcdFx0dGhyZXNob2xkOiAxXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0b2JzZXJ2ZXIub2JzZXJ2ZShjb250ZW50KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXBhZ2UnKSk7IiwiKCBlbGVtcyA9PiB7XHJcblxyXG5cdGlmKCFlbGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblx0c2NyaXB0LnNyYyA9ICcvanMvaW5wdXRtYXNrLm1pbi5qcyc7XHJcblx0c2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcclxuXHJcblx0XHRBcnJheS5mcm9tKGVsZW1zLCBlbCA9PiB7XHJcblxyXG5cdFx0XHRsZXQgbWFza0lucHV0O1xyXG5cclxuXHRcdFx0aWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dG1hc2stLXBob25lJykpIHtcclxuXHJcblx0XHRcdFx0bWFza0lucHV0ID0gbmV3IElucHV0bWFzayh7XHJcblx0XHRcdFx0XHRtYXNrOiBcIis3ICg5OTkpIDk5OSA5OSA5OVwiLFxyXG5cdFx0XHRcdFx0c2hvd01hc2tPbkhvdmVyOiBmYWxzZVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bWFza0lucHV0Lm1hc2soZWwpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9O1xyXG5cclxuXHRzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCksIENvb2tpZXMuZ2V0KCdmYXN0TG9hZFNjcmlwdCcpID8gMCA6IDEwMDAwKTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dG1hc2snKSk7IiwiLy8gYnRuIHRvZ2dsZVxyXG5cclxuLyooIGJ0biA9PiB7XHJcblxyXG5cdGlmKGJ0bikge1xyXG5cclxuXHRcdGxldCB3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtc2hvdycpKSB7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zaG93Jyk7XHJcblx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsd2luZG93U2Nyb2xsKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtZW51LXNob3cnKTtcclxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1tZW51LXRvZ2dsZScpKTtcclxuKi9cclxuLy8gbWVudSBzZXJ2aWNlXHJcblxyXG4oIG1lbnUgPT4ge1xyXG5cclxuXHRpZihtZW51KSB7XHJcblxyXG5cdFx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLFxyXG5cdFx0XHQgIG1lbnVVc2VyID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3VzZXInKTtcclxuXHJcblx0XHRoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgaXRlbSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubWVudV9faXRlbScpO1xyXG5cclxuXHRcdFx0aWYoaXRlbSAhPT0gbnVsbCkge1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtc2VydmljZS1zaG93JywgaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnVfX3NlcnZpY2UnKSk7XHJcblx0XHRcdFx0bWVudVVzZXIgJiYgbWVudVVzZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXNlcnZpY2Utc2hvdycpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHJcblx0XHQvLyBtZW51IHVzZXJcclxuXHJcblx0XHRpZihtZW51VXNlcikge1xyXG5cclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdGlmKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLmhlYWRlcl9fdXNlci1idG4nKSApe1xyXG5cclxuXHRcdFx0XHRcdG1lbnVVc2VyLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLmhlYWRlcl9fdXNlcicpID09PSBudWxsICl7XHJcblxyXG5cdFx0XHRcdFx0bWVudVVzZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXNlcnZpY2UnKSk7XHJcbiIsIiggbW9kYWwgPT4ge1xyXG5cclxuXHRpZighbW9kYWwpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgaXRlbXMgPSBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWxfX2l0ZW0nKSxcclxuXHRcdCAgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsXScpLFxyXG5cdFx0ICB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKSxcclxuXHRcdCAgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xyXG5cclxuXHRsZXQgYWN0aXZlTW9kYWwgPSBudWxsLFxyXG5cdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdoaWRlJywgKCkgPT4ge1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtc2hvdycpO1xyXG5cdFx0d3JhcHBlci5zdHlsZS50b3AgPSAwO1xyXG5cdFx0aGVhZGVyLnN0eWxlLnRvcCA9IDA7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCx3aW5kb3dTY3JvbGwpO1xyXG5cdFx0YWN0aXZlTW9kYWwgPSBmYWxzZTtcclxuXHJcblx0fSk7XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG5cclxuXHRcdFx0bW9kYWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJoaWRlXCIpKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBtb2RhbFNob3cgPSBzZWxlY3RvciA9PiB7XHJcblxyXG5cdFx0aWYoIWFjdGl2ZU1vZGFsKXtcclxuXHJcblx0XHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdzZWFyY2gtb3BlbicsIHNlbGVjdG9yID09PSAnc2VhcmNoJyk7XHJcblxyXG5cdFx0YWN0aXZlTW9kYWwgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLScgKyBzZWxlY3Rvcik7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShpdGVtcywgZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgndmlzdWFsbHloaWRkZW4nLCBlbCAhPT0gYWN0aXZlTW9kYWwpKTtcclxuXHJcblx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IC13aW5kb3dTY3JvbGwgKyAncHgnO1xyXG5cdFx0aGVhZGVyLnN0eWxlLnRvcCA9IHdpbmRvd1Njcm9sbCArICdweCc7XHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXNob3cnKTtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG5cclxuXHRcdGFjdGl2ZU1vZGFsLmZvY3VzKCk7XHJcblxyXG5cdFx0UHViU3ViLnB1Ymxpc2goJ29wZW4tJyArIHNlbGVjdG9yKTtcclxuXHJcblx0fTtcclxuXHJcblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbCcpICYmIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWFyY2gtb3BlbicpID09PSBmYWxzZSkgfHwgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbF9fY2xvc2UnKSl7XHJcblxyXG5cdFx0XHRtb2RhbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImhpZGVcIikpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblxyXG5cdFx0d2hpbGUgKHRhcmdldCAhPT0gZG9jdW1lbnQpIHtcclxuXHJcblx0XHRcdGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLW1vZGFsJykpIHtcclxuXHJcblx0XHRcdFx0bW9kYWxTaG93KHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwnKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdtb2RhbFNob3cnLCBldmVudCA9PiBtb2RhbFNob3coZXZlbnQuZGV0YWlsLnNlbGVjdG9yKSk7XHJcblxyXG5cdG1vZGFsLm9rID0gKHRpdGxlLCB0ZXh0LCBtb2QgPSAnJykgPT4ge1xyXG5cclxuXHRcdG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tb2snKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kJywgbW9kKTtcclxuXHRcdG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tb2sgLm1vZGFsLW1pbmlfX3RpdGxlJykuaW5uZXJIVE1MID0gdGl0bGUgPyB0aXRsZSA6ICcnO1xyXG5cdFx0bW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS1vayAubW9kYWwtbWluaV9fdGV4dCcpLmlubmVySFRNTCA9IHRleHQgPyB0ZXh0IDogJyc7XHJcblx0XHRtb2RhbFNob3coJ29rJyk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpKTsiLCIoIG5vdGlmaWNhdGlvbiA9PiB7XG5cblx0aWYoIW5vdGlmaWNhdGlvbikge1xuXG5cdFx0cmV0dXJuO1xuXG5cdH1cblxuXHRjb25zdCBib3ggPSBub3RpZmljYXRpb24ucXVlcnlTZWxlY3RvcignLmNlbnRlcicpLFxuXHRcdCAgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90aWZpY2F0aW9uLXRlbXBsYXRlJykuaW5uZXJIVE1MO1xuXG5cdHdpbmRvdy5ub3RpZmljYXRpb24gPSAoaGVhZCwgdGV4dCwgdGltZXIgPSAzLjMpID0+IHtcblxuXHRcdGJveC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZSwgeyBoZWFkLCB0ZXh0IH0pKTtcblxuXHRcdGNvbnN0IGl0ZW0gPSBib3gucXVlcnlTZWxlY3RvcignLmlzLW5ldycpO1xuXG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW5ldycpO1xuXHRcdFx0aXRlbS5zdHlsZS5oZWlnaHQgPSBpdGVtLmNsaWVudEhlaWdodCArICdweCc7XG5cblx0XHR9LCAxMDApO1xuXG5cdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKHdpbmRvdy5jc3NBbmltYXRpb24oJ3RyYW5zaXRpb24nKSwgKCkgPT4ge1xuXG5cdFx0XHRpZiggaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWhpZGUnKSApe1xuXG5cdFx0XHRcdGl0ZW0ucmVtb3ZlKCk7XG5cblx0XHRcdH1cblxuXHRcdH0pO1xuXG5cdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuXHRcdFx0aXRlbS5jbGFzc0xpc3QuYWRkKCdpcy1oaWRlJyk7XG5cblx0XHR9KTtcblxuXHRcdHNldFRpbWVvdXQoICgpPT4ge1xuXG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGUnKTtcblxuXHRcdH0sIDEwMDAgKiB0aW1lcik7XG5cblx0fVxuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90aWZpY2F0aW9uJykpOyIsIiggZm9ybSA9PiB7XHJcblxyXG5cdGlmKCFmb3JtKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19pbnB1dCcpLFxyXG5cdFx0ICByZXN1bHQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX3Jlc3VsdC1pbm5lcicpO1xyXG5cclxuXHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihpbnB1dC52YWx1ZS5sZW5ndGggPiAyICYmIGV2ZW50LmtleSAhPT0gJ2VudGVyJyl7XHJcblxyXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG5cdFx0XHQudGhlbihodG1sID0+IHtcclxuXHJcblx0XHRcdFx0cmVzdWx0LmlubmVySFRNTCA9IGh0bWw7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBzZXRIZWlnaHQgPSAoKSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgcmVjdCA9IHJlc3VsdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHJlc3VsdC5zdHlsZS5tYXhIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSByZWN0LnRvcCArICdweCc7XHJcblxyXG5cdH07XHJcblxyXG5cdFB1YlN1Yi5zdWJzY3JpYmUoJ29wZW4tc2VhcmNoJywgKCkgPT4ge1xyXG5cclxuXHRcdGlucHV0LmZvY3VzKCk7XHJcblxyXG5cdFx0c2V0SGVpZ2h0KCk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRQdWJTdWIuc3Vic2NyaWJlKCd3aW5kb3dXaWR0aFJlc2l6ZScsICgpID0+IHNldEhlaWdodCgpKTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gnKSk7Iiwid2luZG93LnNlbGVjdHMgPSBzZWxlY3QgPT4ge1xyXG5cclxuXHRpZihzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fbGlzdCcpKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHQgIGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuXHRhcnJvdy5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjI5XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI5IDI0XCI+PHBhdGggZD1cIm05Ljg1IDkgNC41IDUgNC41LTVoLTlaXCIvPjwvc3ZnPic7XHJcblxyXG5cdHZhbHVlLmNsYXNzTmFtZSA9ICdzZWxlY3RfX3ZhbHVlJztcclxuXHR2YWx1ZS5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJzZWxlY3RfX3ZhbHVlLWlubmVyXCI+PC9zcGFuPic7XHJcblxyXG5cdHZhbHVlLmFwcGVuZENoaWxkKGFycm93KTtcclxuXHRzZWxlY3QuYXBwZW5kQ2hpbGQodmFsdWUpO1xyXG5cclxuXHRjb25zdCBmb3JtID0gc2VsZWN0LmNsb3Nlc3QoJ2Zvcm0nKSxcclxuXHRcdGNvbnRyb2wgPSBzZWxlY3QucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksXHJcblx0XHRvcHRpb24gPSBzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyksXHJcblx0XHR2YWx1ZVRleHQgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fdmFsdWUtaW5uZXInKSxcclxuXHRcdGZpbHRlciA9IHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdC0tZmlsdGVyJyksXHJcblx0XHRsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5cdGxpc3QuY2xhc3NOYW1lID0gJ3NlbGVjdF9fbGlzdCc7XHJcblxyXG5cdGxldCBzZWxlY3RlZCA9IGNvbnRyb2wucXVlcnlTZWxlY3RvcignW3ZhbHVlPVwiJyArIGNvbnRyb2wudmFsdWUgKyAnXCJdJyk7XHJcblxyXG5cdGNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcblxyXG5cdFx0c2VsZWN0ZWQgPSBjb250cm9sLnF1ZXJ5U2VsZWN0b3IoJ1t2YWx1ZT1cIicgKyBjb250cm9sLnZhbHVlICsgJ1wiXScpO1xyXG5cclxuXHRcdHZhbHVlVGV4dC50ZXh0Q29udGVudCA9IHNlbGVjdGVkLnRleHRDb250ZW50O1xyXG5cclxuXHRcdHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3QtLWRlZmF1bHQnKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHZhbHVlRGVmYXVsdCA9IHNlbGVjdGVkLnRleHRDb250ZW50O1xyXG5cclxuXHRpZihjb250cm9sLmRpc2FibGVkKXtcclxuXHJcblx0XHRzZWxlY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LS1kaXNhYmxlZCcpO1xyXG5cclxuXHR9XHJcblxyXG5cdGlmKGNvbnRyb2wudmFsdWUgPT09ICdub25lJyB8fCBjb250cm9sLnZhbHVlID09PSAnJyl7XHJcblxyXG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC0tZGVmYXVsdCcpO1xyXG5cclxuXHR9XHJcblxyXG5cdGlmIChjb250cm9sLnZhbHVlICE9PSAnJykge1xyXG5cclxuXHRcdHZhbHVlVGV4dC50ZXh0Q29udGVudCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCdvcHRpb25bdmFsdWU9XCInICsgY29udHJvbC52YWx1ZSArICdcIl0nKS50ZXh0Q29udGVudDtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKG9wdGlvbiwgZWwgPT4ge1xyXG5cclxuXHRcdGNvbnN0IG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcblx0XHRvLmNsYXNzTmFtZSA9ICdidXR0b24gc2VsZWN0X19saXN0LWl0ZW0nO1xyXG5cclxuXHRcdG8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG5cdFx0by5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZWwuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKTtcclxuXHJcblx0XHRvLnRleHRDb250ZW50ID0gZWwudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0bGlzdC5hcHBlbmRDaGlsZChvKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdGlmKGZpbHRlcil7XHJcblxyXG5cdFx0Y29uc3QgaW5wdXRGaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuXHRcdGlucHV0RmlsdGVyLmNsYXNzTmFtZSA9ICdzZWxlY3RfX2ZpbHRlciBpbnB1dCc7XHJcblxyXG5cdFx0dmFsdWUuYXBwZW5kQ2hpbGQoaW5wdXRGaWx0ZXIpO1xyXG5cclxuXHRcdGlucHV0RmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdmFsdWUgPSBpbnB1dEZpbHRlci52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdFx0aWYodmFsdWUubGVuZ3RoID4gMSkge1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGxpc3QuY2hpbGRyZW4sIG8gPT4ge1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IHRleHQgPSBvLnRleHRDb250ZW50LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdFx0XHRcdG8uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIHRleHQuaW5kZXhPZih2YWx1ZSkgPT09IC0xKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGlmKGxpc3QucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9fbGlzdC1pdGVtJykubGVuZ3RoID09PSBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RfX2xpc3QtaXRlbS5oaWRlJykubGVuZ3RoKSB7XHJcblxyXG5cdFx0XHRcdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC0tZmlsdGVyLWVtcHR5Jyk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0c2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdC0tZmlsdGVyLWVtcHR5Jyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20obGlzdC5jaGlsZHJlbiwgbyA9PiBvLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RfX2xpc3QtaXRlbScpKXtcclxuXHJcblx0XHRcdGNvbnRyb2wudmFsdWUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xyXG5cclxuXHRcdFx0Y29udHJvbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0XHRpZihmb3JtKSB7XHJcblxyXG5cdFx0XHRcdGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdHNlbGVjdC5hcHBlbmRDaGlsZChsaXN0KTtcclxuXHJcblx0Zm9ybSAmJiBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNldFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC0tZGVmYXVsdCcpO1xyXG5cdFx0dmFsdWVUZXh0LnRleHRDb250ZW50ID0gdmFsdWVEZWZhdWx0O1xyXG5cclxuXHR9KTtcclxuXHJcbn07XHJcblxyXG4oICgpID0+IHtcclxuXHJcblx0d2luZG93LnNlbGVjdHNDb2xsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdCcpO1xyXG5cclxuXHRpZih3aW5kb3cuc2VsZWN0c0NvbGxlY3Rpb24ubGVuZ3RoKSB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbSh3aW5kb3cuc2VsZWN0c0NvbGxlY3Rpb24sIHNlbGVjdCA9PiB3aW5kb3cuc2VsZWN0cyhzZWxlY3QpKTtcclxuXHJcblx0fVxyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCBpc1NlbGVjdCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2VsZWN0Jyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbSh3aW5kb3cuc2VsZWN0c0NvbGxlY3Rpb24sIHNlbGVjdCA9PiB7XHJcblxyXG5cdFx0XHRzZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0LS1vcGVuJywgc2VsZWN0ID09PSBpc1NlbGVjdCAmJiBpc1NlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdC0tb3BlbicpID09PSBmYWxzZSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoKTsiLCIoIHN3aXBlckNvbnRhaW5lciA9PiB7XHJcblxyXG5cdGlmKCFzd2lwZXJDb250YWluZXIubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oc3dpcGVyQ29udGFpbmVyLCBzd2lwZSA9PiB7XHJcblxyXG5cdFx0bGV0IG15U3dpcGUgPSBudWxsLFxyXG5cdFx0XHR0b2dnbGVTd2lwZSA9IG51bGwsXHJcblx0XHRcdHJlc2V0U3dpcGUgPSBudWxsO1xyXG5cclxuXHRcdGNvbnN0IHN3aXBlQ29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdFx0ICBzd2lwZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0XHQgIHN3aXBlQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0XHQgIHN3aXBlTmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG5cdFx0XHQgIHN3aXBlUHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG5cdFx0XHQgIHNjcm9sbGJhciA9IHN3aXBlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnN3aXBlci1zY3JvbGxiYXInKSxcclxuXHRcdFx0ICBpdGVtcyA9IHN3aXBlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItc2xpZGUnKSxcclxuXHRcdFx0ICBjb3VudCA9IGl0ZW1zLmxlbmd0aCxcclxuXHRcdFx0ICBjbGllbnRzID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1jbGllbnRzJyksXHJcblx0XHRcdCAgcHJvZHVjdEdhbGxlcnkgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWdhbGxlcnknKSxcclxuXHRcdFx0ICBwcm9kdWN0R2FsbGVyeVByZXZpZXcgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWdhbGxlcnktcHJldmlldycpLFxyXG5cdFx0XHQgIGJpbGxib2FyZCA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tYmlsbGJvYXJkJyk7XHJcblxyXG5cdFx0c3dpcGVOYXYuY2xhc3NOYW1lID0gJ3N3aXBlci1wYWdpbmF0aW9uJztcclxuXHRcdHN3aXBlQ29udHJvbHMuY2xhc3NOYW1lID0gJ3N3aXBlci1jb250cm9scyc7XHJcblxyXG5cdFx0c3dpcGVCdG5zLmNsYXNzTmFtZSA9ICdzd2lwZXItbmF2aWdhdGlvbic7XHJcblx0XHRzd2lwZVByZXYuY2xhc3NOYW1lID0gJ3N3aXBlci1idXR0b24tcHJldiBidXR0b24nO1xyXG5cdFx0c3dpcGVOZXh0LmNsYXNzTmFtZSA9ICdzd2lwZXItYnV0dG9uLW5leHQgYnV0dG9uJztcclxuXHJcblx0XHRzd2lwZVByZXYuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywnUHJldmlvdXMgc2xpZGUnKTtcclxuXHRcdHN3aXBlTmV4dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCdOZXh0IHNsaWRlJyk7XHJcblxyXG5cdFx0c3dpcGVQcmV2LmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTkgMTFsNC42LTQuNkEuOTkuOTkgMCAxMTE1IDcuOGwtMy45IDMuOSAzLjkgMy45YS45OS45OSAwIDAxLTEuNCAxLjRMOSAxMi40MUExIDEgMCAwMTkgMTF6XCIvPjwvc3ZnPic7XHJcblx0XHRzd2lwZU5leHQuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTUgMTFhMSAxIDAgMDEwIDEuNEwxMC40IDE3QS45OS45OSAwIDAxOSAxNS42bDMuOS0zLjlMOSA3LjhhLjk5Ljk5IDAgMDExLjQtMS40TDE1IDExelwiLz48L3N2Zz4nO1xyXG5cclxuXHRcdHN3aXBlQnRucy5hcHBlbmRDaGlsZChzd2lwZVByZXYpO1xyXG5cdFx0c3dpcGVCdG5zLmFwcGVuZENoaWxkKHN3aXBlTmV4dCk7XHJcblx0XHRzd2lwZUNvbnRyb2xzLmFwcGVuZENoaWxkKHN3aXBlQnRucyk7XHJcblx0XHRzd2lwZUNvbnRyb2xzLmFwcGVuZENoaWxkKHN3aXBlTmF2KTtcclxuXHJcblx0XHRyZXNldFN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYobXlTd2lwZSkge1xyXG5cclxuXHRcdFx0XHRteVN3aXBlLmRlc3Ryb3koZmFsc2UsdHJ1ZSk7XHJcblx0XHRcdFx0bXlTd2lwZSA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0c3dpcGVCdG5zLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0c3dpcGVDb250cm9scy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRzd2lwZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3N3aXBlci1jb250YWluZXItc3R5bGUnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cclxuXHJcblx0XHRQdWJTdWIuc3Vic2NyaWJlKCd3aW5kb3dXaWR0aFJlc2l6ZScsICgpID0+IHtcclxuXHJcblx0XHRcdGlmICh3aW5kb3cuU3dpcGVyICYmIHRvZ2dsZVN3aXBlKSB7XHJcblxyXG5cdFx0XHRcdHRvZ2dsZVN3aXBlKCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0UHViU3ViLnN1YnNjcmliZSgnc3dpcGVySnNMb2FkJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0c3dpcGUuYXBwZW5kQ2hpbGQoc3dpcGVDb250cm9scyk7XHJcblxyXG5cdFx0XHQvLyBlYWdlclxyXG5cdFx0XHRBcnJheS5mcm9tKHN3aXBlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tsb2FkaW5nPVwibGF6eVwiXScpLCBpbWcgPT4gaW1nLnNldEF0dHJpYnV0ZSgnbG9hZGluZycsJ2VhZ2VyJykpO1xyXG5cclxuXHRcdFx0Ly8gaGlkZVxyXG5cdFx0XHRBcnJheS5mcm9tKGl0ZW1zLCBlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUoKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuXHRzY3JpcHQuc3JjID0gJy9qcy9zd2lwZXIubWluLmpzJztcclxuXHJcblx0c2NyaXB0Lm9ubG9hZCA9ICgpID0+IFB1YlN1Yi5wdWJsaXNoKCdzd2lwZXJKc0xvYWQnKTtcclxuXHJcblx0c2V0VGltZW91dCggKCkgPT4gZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpLCBDb29raWVzLmdldCgnZmFzdExvYWRTY3JpcHQnKSA/IDAgOiAxMDAwMCk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLWNvbnRhaW5lcicpKTsiLCIvKiggdG9vbHRpcHMgPT4ge1xyXG5cclxuXHRpZih0b29sdGlwcy5sZW5ndGgpe1xyXG5cclxuXHRcdEFycmF5LmZyb20odG9vbHRpcHMsIHRvb2x0aXAgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG5cdFx0XHR0aXRsZS5jbGFzc05hbWUgPSAndG9vbHRpcC10aXRsZV9faW5uZXInO1xyXG5cclxuXHRcdFx0dGl0bGUudGV4dENvbnRlbnQgPSB0b29sdGlwLmdldEF0dHJpYnV0ZSgndGl0bGUnKTtcclxuXHRcdFx0dG9vbHRpcC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblx0XHRcdHRvb2x0aXAucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9vbHRpcC10aXRsZScpKTtcclxuXHJcbiggdG9vbHRpcHMgPT4ge1xyXG5cclxuXHRpZih0b29sdGlwcy5sZW5ndGgpe1xyXG5cclxuXHRcdGNvbnN0IGljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcblx0XHRpY28uaW5uZXJIVE1MID0gJzxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIwIDEyYTggOCAwIDExLTE2IDAgOCA4IDAgMDExNiAwem0tNS43NC0zLjg3YTMuMTggMy4xOCAwIDAxLjU2IDMuNzhjLS4zOC43LTEgMS4yMi0xLjc0IDEuNDlhLjQuNCAwIDAwLS4yOC4zOHYuNjJhLjguOCAwIDAxLTEuNiAwVjEyLjhBLjguOCAwIDAxMTIgMTJjLjg4IDAgMS42LS43MiAxLjYtMS42YTEuNiAxLjYgMCAwMC0zLjIgMCAuOC44IDAgMDEtMS41OS4wOGwtLjAxLS4xMmMuMDEtMiAxLjg2LTMuNTUgMy45NS0zLjA3LjU3LjEzIDEuMS40MiAxLjUxLjg0ek0xMi44IDE2LjhhLjguOCAwIDExLTEuNiAwIC44LjggMCAwMTEuNiAwelwiLz48L3N2Zz4nO1xyXG5cclxuXHRcdGxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9uUmVjb3JkcyA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB0ID0gbXV0YXRpb25SZWNvcmRzWzBdLnRhcmdldCxcclxuXHRcdFx0XHQgIGlubmVyID0gdC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1oZWxwX19pbm5lcicpO1xyXG5cclxuXHRcdFx0aWYodC5vcGVuKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IHJlY3QgPSBpbm5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblx0XHRcdFx0aWYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDwgcmVjdC5yaWdodCkge1xyXG5cclxuXHRcdFx0XHRcdC8vINC70LXQstC10LVcclxuXHJcblx0XHRcdFx0XHRpbm5lci5zdHlsZS5tYXJnaW5MZWZ0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIC0gcmVjdC5yaWdodCArICdweCc7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZihyZWN0LmxlZnQgPCAwKSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8g0L/RgNCw0LLQtdC1XHJcblxyXG5cdFx0XHRcdFx0aW5uZXIuc3R5bGUubWFyZ2luTGVmdCA9IC1yZWN0LmxlZnQgKyAncHgnO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRpbm5lci5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbSh0b29sdGlwcywgdG9vbHRpcCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBidG4gPSB0b29sdGlwLnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwLWhlbHBfX2J0bicpO1xyXG5cclxuXHRcdFx0YnRuLmFwcGVuZENoaWxkKGljby5jbG9uZU5vZGUodHJ1ZSkpO1xyXG5cclxuXHRcdFx0b2JzZXJ2ZXIub2JzZXJ2ZSh0b29sdGlwLCB7XHJcblxyXG5cdFx0XHRcdGF0dHJpYnV0ZXMgOiB0cnVlXHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudG9vbHRpcC1oZWxwJyk7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKHRvb2x0aXBzLCB0b29sdGlwID0+IHtcclxuXHJcblx0XHRcdFx0aWYodGFyZ2V0ICE9PSB0b29sdGlwKSB7XHJcblxyXG5cdFx0XHRcdFx0dG9vbHRpcC5vcGVuID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9vbHRpcC1oZWxwJykpOyovIiwiKCBidG5zID0+IHtcclxuXHJcblx0aWYoIGJ0bnMubGVuZ3RoID09PSAwICkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRpZiAoIENvb2tpZXMuZ2V0KCdsYW5nJykgPT09ICdlbicgKSB7XHJcblxyXG5cdFx0Y29uc3QgeXRXaWRnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHl0V2lkZ2V0LmlkID0gJ3l0V2lkZ2V0JztcclxuXHRcdHl0V2lkZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh5dFdpZGdldCk7XHJcblxyXG5cdFx0Y29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblx0XHRzY3JpcHQuc3JjID0gXCJodHRwczovL3RyYW5zbGF0ZS55YW5kZXgubmV0L3dlYnNpdGUtd2lkZ2V0L3YxL3dpZGdldC5qcz93aWRnZXRJZD15dFdpZGdldCZwYWdlTGFuZz1ydSZ3aWRnZXRUaGVtZT1saWdodCZhdXRvTW9kZT1mYWxzZVwiO1xyXG5cclxuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGJ0bnMsIGVsID0+IHtcclxuXHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd5dC13aWRnZXQnLCBKU09OLnN0cmluZ2lmeSh7XHJcblx0XHRcdFx0XCJsYW5nXCI6IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1sYW5nJyksXHJcblx0XHRcdFx0XCJhY3RpdmVcIjogdHJ1ZVxyXG5cdFx0XHR9KSk7XHJcblxyXG5cdFx0XHRDb29raWVzLnNldCgnbGFuZycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1sYW5nJykpO1xyXG5cclxuXHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbGFuZy1idG4nKSk7Il19
