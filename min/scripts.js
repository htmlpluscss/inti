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

		const formShortStatus = ()=> {

			if(formShort === null) {

				formShort = true;

				document.body.classList.remove('page-blue');
				document.querySelector('.docs-page').classList.add('docs-page--short');
				document.querySelector('.docs-page__description').remove();

			}

		}

		let formShort = document.querySelector('.docs-page--short'),
			activeTabStandarts = document.querySelector('.docs-page__tabs-item--standarts').classList.contains('is-active');

		const searchResult = document.querySelector('.docs-search-result'),
			  searchResultStandarts = searchResult.querySelector('.docs-search-result__standarts'),
			  searchResultAnalytics = searchResult.querySelector('.docs-search-result__analytics'),
			  fieldsets = document.querySelectorAll('.docs-form__fieldset');

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
					history.pushState(undefined, '', '?');

					searchResult.classList.add('is-loading');

					if( activeTabStandarts ) {

						searchResultStandarts.innerHTML = '';
						searchResultStandarts.classList.remove('hide');

					} else {

						searchResultAnalytics.innerHTML = '';
						searchResultAnalytics.classList.remove('hide');

					}

					formShortStatus();

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
						searchResultStandarts.innerHTML = '';
						searchResultStandarts.classList.remove('hide');

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

							Array.from(boxResult.querySelectorAll('.docs-search-result__standarts .docs-catalog__item'), item => {

								searchResultStandarts.querySelector('.docs-catalog__list').appendChild(item);

							});

							if ( boxResult.querySelector('.docs-search-result__standarts .docs-viewed') ) {

								searchResultStandarts.querySelector('.docs-viewed').innerHTML = boxResult.querySelector('.docs-search-result__standarts .docs-viewed').innerHTML;

							}

							if ( boxResult.querySelector('.docs-search-result__standarts .pagin') ) {

								searchResultStandarts.querySelector('.pagin').innerHTML = boxResult.querySelector('.docs-search-result__standarts .pagin').innerHTML;

							}

							if( boxResult.querySelector('.docs-search-result__standarts .docs-ajax__btn') ) {

								searchResultStandarts.querySelector('.docs-ajax__btn').disabled = false;

							} else if (searchResultStandarts.querySelector('.docs-ajax')) {

								searchResultStandarts.querySelector('.docs-ajax').remove();

							}

							if( windowScroll !== window.pageYOffset ) {

								window.scrollTo(0,windowScroll);

							}

						} else {

							searchResultStandarts.innerHTML = html;

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

					reset.classList.toggle('hide', value === '');

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

			if ( event.target.closest('.docs-ajax__btn') ) {

				document.querySelector('.docs-ajax__btn').disabled = true;

				const pagin = document.querySelector('.docs-form--list').elements['PAGEN_1'];

				pagin.value = parseInt(pagin.value) + 1;

				pagin.parentNode.dispatchEvent(new CustomEvent("change"));

			}

		});

		// подгрузка товаров

		if ( searchResultStandarts.classList.contains('hide') ) {

			fetch(searchResult.getAttribute('data-statndarts'))
				.then(response => response.text())
				.then(html => {

					const boxResult = document.createElement('div');

					boxResult.innerHTML = html;

					searchResultStandarts.innerHTML = boxResult.querySelector('.docs-search-result__standarts').innerHTML;

				});

		}

		if ( searchResultAnalytics.classList.contains('hide') ) {

			fetch(searchResult.getAttribute('data-analytics'))
				.then(response => response.text())
				.then(html => {

					const boxResult = document.createElement('div');

					boxResult.innerHTML = html;

					searchResultAnalytics.innerHTML = boxResult.querySelector('.docs-search-result__analytics').innerHTML;

				});

		}

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

		let formShort = document.querySelector('.insights-page--short');

		const searchResult = document.querySelector('.insights-search-result'),
			  box = page.querySelector('.insights-page__box'),
			  form = page.querySelector('.insights-form'),
			  input = form.querySelector('.insights-form__input'),
			  country = form.querySelectorAll('.insights-form-filter-checkbox-group');

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

				if(formShort === null) {

					formShort = true;

					document.querySelector('.insights-page').classList.add('insights-page--short');
					document.querySelector('.insights-page__description').remove();
					document.querySelector('.insights-category').remove();
					document.querySelector('.insights-info').remove();

				}

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

					if ( input.value !== 'all' ) {

						form.querySelector('[name="' + input.getAttribute('name') + '"][value="' + input.value + '"]').checked = input.checked;

					}

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50VXAubWluLmpzIiwianMuY29va2llLm1pbi5qcyIsIm11c3RhY2hlLm1pbi5qcyIsInB1YnN1Yi5taW4uanMiLCJqcy5qcyIsImFjY291bnQuanMiLCJidG4tYmFjay5qcyIsImRhdGFsaXN0LmpzIiwiZG9jcy1pdGVtLmpzIiwiZG9jcy5qcyIsImZvcm0tc3VibWl0LmpzIiwiZm9ybS5qcyIsImdldC1wcmljZS5qcyIsImluc2lnaHRzLmpzIiwibGl2ZS1zZWFyY2guanMiLCJtYWluLmpzIiwibWFzay5qcyIsIm1lbnUuanMiLCJtb2RhbC5qcyIsIm5vdGlmaWNhdGlvbi5qcyIsInNlYXJjaC5qcyIsInNlbGVjdC5qcyIsInN3aXBlci5qcyIsInRvb2x0aXAuanMiLCJ5YXRyYW5zbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQ0ZBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25WQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24oYSxuKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKG4pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPW4ocmVxdWlyZSxleHBvcnRzLG1vZHVsZSk6YS5Db3VudFVwPW4oKX0odGhpcyxmdW5jdGlvbihhLG4sdCl7cmV0dXJuIGZ1bmN0aW9uKGEsbix0LGUsaSxyKXt2YXIgdT10aGlzO2lmKHUudmVyc2lvbj1mdW5jdGlvbigpe3JldHVyblwiMS45LjNcIn0sdS5vcHRpb25zPXt1c2VFYXNpbmc6ITAsdXNlR3JvdXBpbmc6ITAsc2VwYXJhdG9yOlwiLFwiLGRlY2ltYWw6XCIuXCIsZWFzaW5nRm46ZnVuY3Rpb24oYSxuLHQsZSl7cmV0dXJuIHQqKDEtTWF0aC5wb3coMiwtMTAqYS9lKSkqMTAyNC8xMDIzK259LGZvcm1hdHRpbmdGbjpmdW5jdGlvbihhKXt2YXIgbix0LGUsaSxyLG8scz1hPDA7aWYoYT1NYXRoLmFicyhhKS50b0ZpeGVkKHUuZGVjaW1hbHMpLG49KGErPVwiXCIpLnNwbGl0KFwiLlwiKSx0PW5bMF0sZT0xPG4ubGVuZ3RoP3Uub3B0aW9ucy5kZWNpbWFsK25bMV06XCJcIix1Lm9wdGlvbnMudXNlR3JvdXBpbmcpe2ZvcihpPVwiXCIscj0wLG89dC5sZW5ndGg7cjxvOysrcikwIT09ciYmciUzPT0wJiYoaT11Lm9wdGlvbnMuc2VwYXJhdG9yK2kpLGk9dFtvLXItMV0raTt0PWl9cmV0dXJuIHUub3B0aW9ucy5udW1lcmFscy5sZW5ndGgmJih0PXQucmVwbGFjZSgvWzAtOV0vZyxmdW5jdGlvbihhKXtyZXR1cm4gdS5vcHRpb25zLm51bWVyYWxzWythXX0pLGU9ZS5yZXBsYWNlKC9bMC05XS9nLGZ1bmN0aW9uKGEpe3JldHVybiB1Lm9wdGlvbnMubnVtZXJhbHNbK2FdfSkpLChzP1wiLVwiOlwiXCIpK3Uub3B0aW9ucy5wcmVmaXgrdCtlK3Uub3B0aW9ucy5zdWZmaXh9LHByZWZpeDpcIlwiLHN1ZmZpeDpcIlwiLG51bWVyYWxzOltdfSxyJiZcIm9iamVjdFwiPT10eXBlb2Ygcilmb3IodmFyIG8gaW4gdS5vcHRpb25zKXIuaGFzT3duUHJvcGVydHkobykmJm51bGwhPT1yW29dJiYodS5vcHRpb25zW29dPXJbb10pO1wiXCI9PT11Lm9wdGlvbnMuc2VwYXJhdG9yP3Uub3B0aW9ucy51c2VHcm91cGluZz0hMTp1Lm9wdGlvbnMuc2VwYXJhdG9yPVwiXCIrdS5vcHRpb25zLnNlcGFyYXRvcjtmb3IodmFyIHM9MCxsPVtcIndlYmtpdFwiLFwibW96XCIsXCJtc1wiLFwib1wiXSxtPTA7bTxsLmxlbmd0aCYmIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7KyttKXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9d2luZG93W2xbbV0rXCJSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl0sd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lPXdpbmRvd1tsW21dK1wiQ2FuY2VsQW5pbWF0aW9uRnJhbWVcIl18fHdpbmRvd1tsW21dK1wiQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO2Z1bmN0aW9uIGQoYSl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIGEmJiFpc05hTihhKX13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT1mdW5jdGlvbihhLG4pe3ZhciB0PShuZXcgRGF0ZSkuZ2V0VGltZSgpLGU9TWF0aC5tYXgoMCwxNi0odC1zKSksaT13aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe2EodCtlKX0sZSk7cmV0dXJuIHM9dCtlLGl9KSx3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fCh3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oYSl7Y2xlYXJUaW1lb3V0KGEpfSksdS5pbml0aWFsaXplPWZ1bmN0aW9uKCl7cmV0dXJuISF1LmluaXRpYWxpemVkfHwodS5lcnJvcj1cIlwiLHUuZD1cInN0cmluZ1wiPT10eXBlb2YgYT9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChhKTphLHUuZD8odS5zdGFydFZhbD1OdW1iZXIobiksdS5lbmRWYWw9TnVtYmVyKHQpLGQodS5zdGFydFZhbCkmJmQodS5lbmRWYWwpPyh1LmRlY2ltYWxzPU1hdGgubWF4KDAsZXx8MCksdS5kZWM9TWF0aC5wb3coMTAsdS5kZWNpbWFscyksdS5kdXJhdGlvbj0xZTMqTnVtYmVyKGkpfHwyZTMsdS5jb3VudERvd249dS5zdGFydFZhbD51LmVuZFZhbCx1LmZyYW1lVmFsPXUuc3RhcnRWYWwsdS5pbml0aWFsaXplZD0hMCk6KHUuZXJyb3I9XCJbQ291bnRVcF0gc3RhcnRWYWwgKFwiK24rXCIpIG9yIGVuZFZhbCAoXCIrdCtcIikgaXMgbm90IGEgbnVtYmVyXCIsITEpKTohKHUuZXJyb3I9XCJbQ291bnRVcF0gdGFyZ2V0IGlzIG51bGwgb3IgdW5kZWZpbmVkXCIpKX0sdS5wcmludFZhbHVlPWZ1bmN0aW9uKGEpe3ZhciBuPXUub3B0aW9ucy5mb3JtYXR0aW5nRm4oYSk7XCJJTlBVVFwiPT09dS5kLnRhZ05hbWU/dGhpcy5kLnZhbHVlPW46XCJ0ZXh0XCI9PT11LmQudGFnTmFtZXx8XCJ0c3BhblwiPT09dS5kLnRhZ05hbWU/dGhpcy5kLnRleHRDb250ZW50PW46dGhpcy5kLmlubmVySFRNTD1ufSx1LmNvdW50PWZ1bmN0aW9uKGEpe3Uuc3RhcnRUaW1lfHwodS5zdGFydFRpbWU9YSk7dmFyIG49KHUudGltZXN0YW1wPWEpLXUuc3RhcnRUaW1lO3UucmVtYWluaW5nPXUuZHVyYXRpb24tbix1Lm9wdGlvbnMudXNlRWFzaW5nP3UuY291bnREb3duP3UuZnJhbWVWYWw9dS5zdGFydFZhbC11Lm9wdGlvbnMuZWFzaW5nRm4obiwwLHUuc3RhcnRWYWwtdS5lbmRWYWwsdS5kdXJhdGlvbik6dS5mcmFtZVZhbD11Lm9wdGlvbnMuZWFzaW5nRm4obix1LnN0YXJ0VmFsLHUuZW5kVmFsLXUuc3RhcnRWYWwsdS5kdXJhdGlvbik6dS5jb3VudERvd24/dS5mcmFtZVZhbD11LnN0YXJ0VmFsLSh1LnN0YXJ0VmFsLXUuZW5kVmFsKSoobi91LmR1cmF0aW9uKTp1LmZyYW1lVmFsPXUuc3RhcnRWYWwrKHUuZW5kVmFsLXUuc3RhcnRWYWwpKihuL3UuZHVyYXRpb24pLHUuY291bnREb3duP3UuZnJhbWVWYWw9dS5mcmFtZVZhbDx1LmVuZFZhbD91LmVuZFZhbDp1LmZyYW1lVmFsOnUuZnJhbWVWYWw9dS5mcmFtZVZhbD51LmVuZFZhbD91LmVuZFZhbDp1LmZyYW1lVmFsLHUuZnJhbWVWYWw9TWF0aC5yb3VuZCh1LmZyYW1lVmFsKnUuZGVjKS91LmRlYyx1LnByaW50VmFsdWUodS5mcmFtZVZhbCksbjx1LmR1cmF0aW9uP3UuckFGPXJlcXVlc3RBbmltYXRpb25GcmFtZSh1LmNvdW50KTp1LmNhbGxiYWNrJiZ1LmNhbGxiYWNrKCl9LHUuc3RhcnQ9ZnVuY3Rpb24oYSl7dS5pbml0aWFsaXplKCkmJih1LmNhbGxiYWNrPWEsdS5yQUY9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUuY291bnQpKX0sdS5wYXVzZVJlc3VtZT1mdW5jdGlvbigpe3UucGF1c2VkPyh1LnBhdXNlZD0hMSxkZWxldGUgdS5zdGFydFRpbWUsdS5kdXJhdGlvbj11LnJlbWFpbmluZyx1LnN0YXJ0VmFsPXUuZnJhbWVWYWwscmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUuY291bnQpKToodS5wYXVzZWQ9ITAsY2FuY2VsQW5pbWF0aW9uRnJhbWUodS5yQUYpKX0sdS5yZXNldD1mdW5jdGlvbigpe3UucGF1c2VkPSExLGRlbGV0ZSB1LnN0YXJ0VGltZSx1LmluaXRpYWxpemVkPSExLHUuaW5pdGlhbGl6ZSgpJiYoY2FuY2VsQW5pbWF0aW9uRnJhbWUodS5yQUYpLHUucHJpbnRWYWx1ZSh1LnN0YXJ0VmFsKSl9LHUudXBkYXRlPWZ1bmN0aW9uKGEpe3UuaW5pdGlhbGl6ZSgpJiYoZChhPU51bWJlcihhKSk/KHUuZXJyb3I9XCJcIixhIT09dS5mcmFtZVZhbCYmKGNhbmNlbEFuaW1hdGlvbkZyYW1lKHUuckFGKSx1LnBhdXNlZD0hMSxkZWxldGUgdS5zdGFydFRpbWUsdS5zdGFydFZhbD11LmZyYW1lVmFsLHUuZW5kVmFsPWEsdS5jb3VudERvd249dS5zdGFydFZhbD51LmVuZFZhbCx1LnJBRj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodS5jb3VudCkpKTp1LmVycm9yPVwiW0NvdW50VXBdIHVwZGF0ZSgpIC0gbmV3IGVuZFZhbCBpcyBub3QgYSBudW1iZXI6IFwiK2EpfSx1LmluaXRpYWxpemUoKSYmdS5wcmludFZhbHVlKHUuc3RhcnRWYWwpfX0pOyIsIi8qISBqcy1jb29raWUgdjMuMC4wLXJjLjEgfCBNSVQgKi9cbiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOihlPWV8fHNlbGYsZnVuY3Rpb24oKXt2YXIgbj1lLkNvb2tpZXMscj1lLkNvb2tpZXM9dCgpO3Iubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBlLkNvb2tpZXM9bixyfX0oKSl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIHIgaW4gbillW3JdPW5bcl19cmV0dXJuIGV9dmFyIHQ9e3JlYWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZSgvKCVbXFxkQS1GXXsyfSkrL2dpLGRlY29kZVVSSUNvbXBvbmVudCl9LHdyaXRlOmZ1bmN0aW9uKGUpe3JldHVybiBlbmNvZGVVUklDb21wb25lbnQoZSkucmVwbGFjZSgvJSgyWzM0NkJGXXwzW0FDLUZdfDQwfDVbQkRFXXw2MHw3W0JDRF0pL2csZGVjb2RlVVJJQ29tcG9uZW50KX19O3JldHVybiBmdW5jdGlvbiBuKHIsbyl7ZnVuY3Rpb24gaSh0LG4saSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50KXtcIm51bWJlclwiPT10eXBlb2YoaT1lKHt9LG8saSkpLmV4cGlyZXMmJihpLmV4cGlyZXM9bmV3IERhdGUoRGF0ZS5ub3coKSs4NjRlNSppLmV4cGlyZXMpKSxpLmV4cGlyZXMmJihpLmV4cGlyZXM9aS5leHBpcmVzLnRvVVRDU3RyaW5nKCkpLHQ9ZW5jb2RlVVJJQ29tcG9uZW50KHQpLnJlcGxhY2UoLyUoMlszNDZCXXw1RXw2MHw3QykvZyxkZWNvZGVVUklDb21wb25lbnQpLnJlcGxhY2UoL1soKV0vZyxlc2NhcGUpLG49ci53cml0ZShuLHQpO3ZhciBjPVwiXCI7Zm9yKHZhciB1IGluIGkpaVt1XSYmKGMrPVwiOyBcIit1LCEwIT09aVt1XSYmKGMrPVwiPVwiK2lbdV0uc3BsaXQoXCI7XCIpWzBdKSk7cmV0dXJuIGRvY3VtZW50LmNvb2tpZT10K1wiPVwiK24rY319cmV0dXJuIE9iamVjdC5jcmVhdGUoe3NldDppLGdldDpmdW5jdGlvbihlKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQmJighYXJndW1lbnRzLmxlbmd0aHx8ZSkpe2Zvcih2YXIgbj1kb2N1bWVudC5jb29raWU/ZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIik6W10sbz17fSxpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciBjPW5baV0uc3BsaXQoXCI9XCIpLHU9Yy5zbGljZSgxKS5qb2luKFwiPVwiKTsnXCInPT09dVswXSYmKHU9dS5zbGljZSgxLC0xKSk7dHJ5e3ZhciBmPXQucmVhZChjWzBdKTtpZihvW2ZdPXIucmVhZCh1LGYpLGU9PT1mKWJyZWFrfWNhdGNoKGUpe319cmV0dXJuIGU/b1tlXTpvfX0scmVtb3ZlOmZ1bmN0aW9uKHQsbil7aSh0LFwiXCIsZSh7fSxuLHtleHBpcmVzOi0xfSkpfSx3aXRoQXR0cmlidXRlczpmdW5jdGlvbih0KXtyZXR1cm4gbih0aGlzLmNvbnZlcnRlcixlKHt9LHRoaXMuYXR0cmlidXRlcyx0KSl9LHdpdGhDb252ZXJ0ZXI6ZnVuY3Rpb24odCl7cmV0dXJuIG4oZSh7fSx0aGlzLmNvbnZlcnRlcix0KSx0aGlzLmF0dHJpYnV0ZXMpfX0se2F0dHJpYnV0ZXM6e3ZhbHVlOk9iamVjdC5mcmVlemUobyl9LGNvbnZlcnRlcjp7dmFsdWU6T2JqZWN0LmZyZWV6ZShyKX19KX0odCx7cGF0aDpcIi9cIn0pfSk7XG4iLCIoZnVuY3Rpb24gZGVmaW5lTXVzdGFjaGUoZ2xvYmFsLGZhY3Rvcnkpe2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmZXhwb3J0cyYmdHlwZW9mIGV4cG9ydHMubm9kZU5hbWUhPT1cInN0cmluZ1wiKXtmYWN0b3J5KGV4cG9ydHMpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtcImV4cG9ydHNcIl0sZmFjdG9yeSl9ZWxzZXtnbG9iYWwuTXVzdGFjaGU9e307ZmFjdG9yeShnbG9iYWwuTXVzdGFjaGUpfX0pKHRoaXMsZnVuY3Rpb24gbXVzdGFjaGVGYWN0b3J5KG11c3RhY2hlKXt2YXIgb2JqZWN0VG9TdHJpbmc9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZzt2YXIgaXNBcnJheT1BcnJheS5pc0FycmF5fHxmdW5jdGlvbiBpc0FycmF5UG9seWZpbGwob2JqZWN0KXtyZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbChvYmplY3QpPT09XCJbb2JqZWN0IEFycmF5XVwifTtmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iamVjdCl7cmV0dXJuIHR5cGVvZiBvYmplY3Q9PT1cImZ1bmN0aW9uXCJ9ZnVuY3Rpb24gdHlwZVN0cihvYmope3JldHVybiBpc0FycmF5KG9iaik/XCJhcnJheVwiOnR5cGVvZiBvYmp9ZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cmluZyl7cmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bXFwtXFxbXFxde30oKSorPy4sXFxcXFxcXiR8I1xcc10vZyxcIlxcXFwkJlwiKX1mdW5jdGlvbiBoYXNQcm9wZXJ0eShvYmoscHJvcE5hbWUpe3JldHVybiBvYmohPW51bGwmJnR5cGVvZiBvYmo9PT1cIm9iamVjdFwiJiZwcm9wTmFtZSBpbiBvYmp9dmFyIHJlZ0V4cFRlc3Q9UmVnRXhwLnByb3RvdHlwZS50ZXN0O2Z1bmN0aW9uIHRlc3RSZWdFeHAocmUsc3RyaW5nKXtyZXR1cm4gcmVnRXhwVGVzdC5jYWxsKHJlLHN0cmluZyl9dmFyIG5vblNwYWNlUmU9L1xcUy87ZnVuY3Rpb24gaXNXaGl0ZXNwYWNlKHN0cmluZyl7cmV0dXJuIXRlc3RSZWdFeHAobm9uU3BhY2VSZSxzdHJpbmcpfXZhciBlbnRpdHlNYXA9e1wiJlwiOlwiJmFtcDtcIixcIjxcIjpcIiZsdDtcIixcIj5cIjpcIiZndDtcIiwnXCInOlwiJnF1b3Q7XCIsXCInXCI6XCImIzM5O1wiLFwiL1wiOlwiJiN4MkY7XCIsXCJgXCI6XCImI3g2MDtcIixcIj1cIjpcIiYjeDNEO1wifTtmdW5jdGlvbiBlc2NhcGVIdG1sKHN0cmluZyl7cmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UoL1smPD5cIidgPVxcL10vZyxmdW5jdGlvbiBmcm9tRW50aXR5TWFwKHMpe3JldHVybiBlbnRpdHlNYXBbc119KX12YXIgd2hpdGVSZT0vXFxzKi87dmFyIHNwYWNlUmU9L1xccysvO3ZhciBlcXVhbHNSZT0vXFxzKj0vO3ZhciBjdXJseVJlPS9cXHMqXFx9Lzt2YXIgdGFnUmU9LyN8XFxefFxcL3w+fFxce3wmfD18IS87ZnVuY3Rpb24gcGFyc2VUZW1wbGF0ZSh0ZW1wbGF0ZSx0YWdzKXtpZighdGVtcGxhdGUpcmV0dXJuW107dmFyIHNlY3Rpb25zPVtdO3ZhciB0b2tlbnM9W107dmFyIHNwYWNlcz1bXTt2YXIgaGFzVGFnPWZhbHNlO3ZhciBub25TcGFjZT1mYWxzZTtmdW5jdGlvbiBzdHJpcFNwYWNlKCl7aWYoaGFzVGFnJiYhbm9uU3BhY2Upe3doaWxlKHNwYWNlcy5sZW5ndGgpZGVsZXRlIHRva2Vuc1tzcGFjZXMucG9wKCldfWVsc2V7c3BhY2VzPVtdfWhhc1RhZz1mYWxzZTtub25TcGFjZT1mYWxzZX12YXIgb3BlbmluZ1RhZ1JlLGNsb3NpbmdUYWdSZSxjbG9zaW5nQ3VybHlSZTtmdW5jdGlvbiBjb21waWxlVGFncyh0YWdzVG9Db21waWxlKXtpZih0eXBlb2YgdGFnc1RvQ29tcGlsZT09PVwic3RyaW5nXCIpdGFnc1RvQ29tcGlsZT10YWdzVG9Db21waWxlLnNwbGl0KHNwYWNlUmUsMik7aWYoIWlzQXJyYXkodGFnc1RvQ29tcGlsZSl8fHRhZ3NUb0NvbXBpbGUubGVuZ3RoIT09Mil0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHRhZ3M6IFwiK3RhZ3NUb0NvbXBpbGUpO29wZW5pbmdUYWdSZT1uZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cCh0YWdzVG9Db21waWxlWzBdKStcIlxcXFxzKlwiKTtjbG9zaW5nVGFnUmU9bmV3IFJlZ0V4cChcIlxcXFxzKlwiK2VzY2FwZVJlZ0V4cCh0YWdzVG9Db21waWxlWzFdKSk7Y2xvc2luZ0N1cmx5UmU9bmV3IFJlZ0V4cChcIlxcXFxzKlwiK2VzY2FwZVJlZ0V4cChcIn1cIit0YWdzVG9Db21waWxlWzFdKSl9Y29tcGlsZVRhZ3ModGFnc3x8bXVzdGFjaGUudGFncyk7dmFyIHNjYW5uZXI9bmV3IFNjYW5uZXIodGVtcGxhdGUpO3ZhciBzdGFydCx0eXBlLHZhbHVlLGNocix0b2tlbixvcGVuU2VjdGlvbjt3aGlsZSghc2Nhbm5lci5lb3MoKSl7c3RhcnQ9c2Nhbm5lci5wb3M7dmFsdWU9c2Nhbm5lci5zY2FuVW50aWwob3BlbmluZ1RhZ1JlKTtpZih2YWx1ZSl7Zm9yKHZhciBpPTAsdmFsdWVMZW5ndGg9dmFsdWUubGVuZ3RoO2k8dmFsdWVMZW5ndGg7KytpKXtjaHI9dmFsdWUuY2hhckF0KGkpO2lmKGlzV2hpdGVzcGFjZShjaHIpKXtzcGFjZXMucHVzaCh0b2tlbnMubGVuZ3RoKX1lbHNle25vblNwYWNlPXRydWV9dG9rZW5zLnB1c2goW1widGV4dFwiLGNocixzdGFydCxzdGFydCsxXSk7c3RhcnQrPTE7aWYoY2hyPT09XCJcXG5cIilzdHJpcFNwYWNlKCl9fWlmKCFzY2FubmVyLnNjYW4ob3BlbmluZ1RhZ1JlKSlicmVhaztoYXNUYWc9dHJ1ZTt0eXBlPXNjYW5uZXIuc2Nhbih0YWdSZSl8fFwibmFtZVwiO3NjYW5uZXIuc2Nhbih3aGl0ZVJlKTtpZih0eXBlPT09XCI9XCIpe3ZhbHVlPXNjYW5uZXIuc2NhblVudGlsKGVxdWFsc1JlKTtzY2FubmVyLnNjYW4oZXF1YWxzUmUpO3NjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSl9ZWxzZSBpZih0eXBlPT09XCJ7XCIpe3ZhbHVlPXNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdDdXJseVJlKTtzY2FubmVyLnNjYW4oY3VybHlSZSk7c2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTt0eXBlPVwiJlwifWVsc2V7dmFsdWU9c2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKX1pZighc2Nhbm5lci5zY2FuKGNsb3NpbmdUYWdSZSkpdGhyb3cgbmV3IEVycm9yKFwiVW5jbG9zZWQgdGFnIGF0IFwiK3NjYW5uZXIucG9zKTt0b2tlbj1bdHlwZSx2YWx1ZSxzdGFydCxzY2FubmVyLnBvc107dG9rZW5zLnB1c2godG9rZW4pO2lmKHR5cGU9PT1cIiNcInx8dHlwZT09PVwiXlwiKXtzZWN0aW9ucy5wdXNoKHRva2VuKX1lbHNlIGlmKHR5cGU9PT1cIi9cIil7b3BlblNlY3Rpb249c2VjdGlvbnMucG9wKCk7aWYoIW9wZW5TZWN0aW9uKXRocm93IG5ldyBFcnJvcignVW5vcGVuZWQgc2VjdGlvbiBcIicrdmFsdWUrJ1wiIGF0ICcrc3RhcnQpO2lmKG9wZW5TZWN0aW9uWzFdIT09dmFsdWUpdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCBzZWN0aW9uIFwiJytvcGVuU2VjdGlvblsxXSsnXCIgYXQgJytzdGFydCl9ZWxzZSBpZih0eXBlPT09XCJuYW1lXCJ8fHR5cGU9PT1cIntcInx8dHlwZT09PVwiJlwiKXtub25TcGFjZT10cnVlfWVsc2UgaWYodHlwZT09PVwiPVwiKXtjb21waWxlVGFncyh2YWx1ZSl9fW9wZW5TZWN0aW9uPXNlY3Rpb25zLnBvcCgpO2lmKG9wZW5TZWN0aW9uKXRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicrb3BlblNlY3Rpb25bMV0rJ1wiIGF0ICcrc2Nhbm5lci5wb3MpO3JldHVybiBuZXN0VG9rZW5zKHNxdWFzaFRva2Vucyh0b2tlbnMpKX1mdW5jdGlvbiBzcXVhc2hUb2tlbnModG9rZW5zKXt2YXIgc3F1YXNoZWRUb2tlbnM9W107dmFyIHRva2VuLGxhc3RUb2tlbjtmb3IodmFyIGk9MCxudW1Ub2tlbnM9dG9rZW5zLmxlbmd0aDtpPG51bVRva2VuczsrK2kpe3Rva2VuPXRva2Vuc1tpXTtpZih0b2tlbil7aWYodG9rZW5bMF09PT1cInRleHRcIiYmbGFzdFRva2VuJiZsYXN0VG9rZW5bMF09PT1cInRleHRcIil7bGFzdFRva2VuWzFdKz10b2tlblsxXTtsYXN0VG9rZW5bM109dG9rZW5bM119ZWxzZXtzcXVhc2hlZFRva2Vucy5wdXNoKHRva2VuKTtsYXN0VG9rZW49dG9rZW59fX1yZXR1cm4gc3F1YXNoZWRUb2tlbnN9ZnVuY3Rpb24gbmVzdFRva2Vucyh0b2tlbnMpe3ZhciBuZXN0ZWRUb2tlbnM9W107dmFyIGNvbGxlY3Rvcj1uZXN0ZWRUb2tlbnM7dmFyIHNlY3Rpb25zPVtdO3ZhciB0b2tlbixzZWN0aW9uO2Zvcih2YXIgaT0wLG51bVRva2Vucz10b2tlbnMubGVuZ3RoO2k8bnVtVG9rZW5zOysraSl7dG9rZW49dG9rZW5zW2ldO3N3aXRjaCh0b2tlblswXSl7Y2FzZVwiI1wiOmNhc2VcIl5cIjpjb2xsZWN0b3IucHVzaCh0b2tlbik7c2VjdGlvbnMucHVzaCh0b2tlbik7Y29sbGVjdG9yPXRva2VuWzRdPVtdO2JyZWFrO2Nhc2VcIi9cIjpzZWN0aW9uPXNlY3Rpb25zLnBvcCgpO3NlY3Rpb25bNV09dG9rZW5bMl07Y29sbGVjdG9yPXNlY3Rpb25zLmxlbmd0aD4wP3NlY3Rpb25zW3NlY3Rpb25zLmxlbmd0aC0xXVs0XTpuZXN0ZWRUb2tlbnM7YnJlYWs7ZGVmYXVsdDpjb2xsZWN0b3IucHVzaCh0b2tlbil9fXJldHVybiBuZXN0ZWRUb2tlbnN9ZnVuY3Rpb24gU2Nhbm5lcihzdHJpbmcpe3RoaXMuc3RyaW5nPXN0cmluZzt0aGlzLnRhaWw9c3RyaW5nO3RoaXMucG9zPTB9U2Nhbm5lci5wcm90b3R5cGUuZW9zPWZ1bmN0aW9uIGVvcygpe3JldHVybiB0aGlzLnRhaWw9PT1cIlwifTtTY2FubmVyLnByb3RvdHlwZS5zY2FuPWZ1bmN0aW9uIHNjYW4ocmUpe3ZhciBtYXRjaD10aGlzLnRhaWwubWF0Y2gocmUpO2lmKCFtYXRjaHx8bWF0Y2guaW5kZXghPT0wKXJldHVyblwiXCI7dmFyIHN0cmluZz1tYXRjaFswXTt0aGlzLnRhaWw9dGhpcy50YWlsLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKTt0aGlzLnBvcys9c3RyaW5nLmxlbmd0aDtyZXR1cm4gc3RyaW5nfTtTY2FubmVyLnByb3RvdHlwZS5zY2FuVW50aWw9ZnVuY3Rpb24gc2NhblVudGlsKHJlKXt2YXIgaW5kZXg9dGhpcy50YWlsLnNlYXJjaChyZSksbWF0Y2g7c3dpdGNoKGluZGV4KXtjYXNlLTE6bWF0Y2g9dGhpcy50YWlsO3RoaXMudGFpbD1cIlwiO2JyZWFrO2Nhc2UgMDptYXRjaD1cIlwiO2JyZWFrO2RlZmF1bHQ6bWF0Y2g9dGhpcy50YWlsLnN1YnN0cmluZygwLGluZGV4KTt0aGlzLnRhaWw9dGhpcy50YWlsLnN1YnN0cmluZyhpbmRleCl9dGhpcy5wb3MrPW1hdGNoLmxlbmd0aDtyZXR1cm4gbWF0Y2h9O2Z1bmN0aW9uIENvbnRleHQodmlldyxwYXJlbnRDb250ZXh0KXt0aGlzLnZpZXc9dmlldzt0aGlzLmNhY2hlPXtcIi5cIjp0aGlzLnZpZXd9O3RoaXMucGFyZW50PXBhcmVudENvbnRleHR9Q29udGV4dC5wcm90b3R5cGUucHVzaD1mdW5jdGlvbiBwdXNoKHZpZXcpe3JldHVybiBuZXcgQ29udGV4dCh2aWV3LHRoaXMpfTtDb250ZXh0LnByb3RvdHlwZS5sb29rdXA9ZnVuY3Rpb24gbG9va3VwKG5hbWUpe3ZhciBjYWNoZT10aGlzLmNhY2hlO3ZhciB2YWx1ZTtpZihjYWNoZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSl7dmFsdWU9Y2FjaGVbbmFtZV19ZWxzZXt2YXIgY29udGV4dD10aGlzLG5hbWVzLGluZGV4LGxvb2t1cEhpdD1mYWxzZTt3aGlsZShjb250ZXh0KXtpZihuYW1lLmluZGV4T2YoXCIuXCIpPjApe3ZhbHVlPWNvbnRleHQudmlldztuYW1lcz1uYW1lLnNwbGl0KFwiLlwiKTtpbmRleD0wO3doaWxlKHZhbHVlIT1udWxsJiZpbmRleDxuYW1lcy5sZW5ndGgpe2lmKGluZGV4PT09bmFtZXMubGVuZ3RoLTEpbG9va3VwSGl0PWhhc1Byb3BlcnR5KHZhbHVlLG5hbWVzW2luZGV4XSk7dmFsdWU9dmFsdWVbbmFtZXNbaW5kZXgrK11dfX1lbHNle3ZhbHVlPWNvbnRleHQudmlld1tuYW1lXTtsb29rdXBIaXQ9aGFzUHJvcGVydHkoY29udGV4dC52aWV3LG5hbWUpfWlmKGxvb2t1cEhpdClicmVhaztjb250ZXh0PWNvbnRleHQucGFyZW50fWNhY2hlW25hbWVdPXZhbHVlfWlmKGlzRnVuY3Rpb24odmFsdWUpKXZhbHVlPXZhbHVlLmNhbGwodGhpcy52aWV3KTtyZXR1cm4gdmFsdWV9O2Z1bmN0aW9uIFdyaXRlcigpe3RoaXMuY2FjaGU9e319V3JpdGVyLnByb3RvdHlwZS5jbGVhckNhY2hlPWZ1bmN0aW9uIGNsZWFyQ2FjaGUoKXt0aGlzLmNhY2hlPXt9fTtXcml0ZXIucHJvdG90eXBlLnBhcnNlPWZ1bmN0aW9uIHBhcnNlKHRlbXBsYXRlLHRhZ3Mpe3ZhciBjYWNoZT10aGlzLmNhY2hlO3ZhciB0b2tlbnM9Y2FjaGVbdGVtcGxhdGVdO2lmKHRva2Vucz09bnVsbCl0b2tlbnM9Y2FjaGVbdGVtcGxhdGVdPXBhcnNlVGVtcGxhdGUodGVtcGxhdGUsdGFncyk7cmV0dXJuIHRva2Vuc307V3JpdGVyLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24gcmVuZGVyKHRlbXBsYXRlLHZpZXcscGFydGlhbHMpe3ZhciB0b2tlbnM9dGhpcy5wYXJzZSh0ZW1wbGF0ZSk7dmFyIGNvbnRleHQ9dmlldyBpbnN0YW5jZW9mIENvbnRleHQ/dmlldzpuZXcgQ29udGV4dCh2aWV3KTtyZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5zLGNvbnRleHQscGFydGlhbHMsdGVtcGxhdGUpfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlclRva2Vucz1mdW5jdGlvbiByZW5kZXJUb2tlbnModG9rZW5zLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl7dmFyIGJ1ZmZlcj1cIlwiO3ZhciB0b2tlbixzeW1ib2wsdmFsdWU7Zm9yKHZhciBpPTAsbnVtVG9rZW5zPXRva2Vucy5sZW5ndGg7aTxudW1Ub2tlbnM7KytpKXt2YWx1ZT11bmRlZmluZWQ7dG9rZW49dG9rZW5zW2ldO3N5bWJvbD10b2tlblswXTtpZihzeW1ib2w9PT1cIiNcIil2YWx1ZT10aGlzLnJlbmRlclNlY3Rpb24odG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKTtlbHNlIGlmKHN5bWJvbD09PVwiXlwiKXZhbHVlPXRoaXMucmVuZGVySW52ZXJ0ZWQodG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKTtlbHNlIGlmKHN5bWJvbD09PVwiPlwiKXZhbHVlPXRoaXMucmVuZGVyUGFydGlhbCh0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpO2Vsc2UgaWYoc3ltYm9sPT09XCImXCIpdmFsdWU9dGhpcy51bmVzY2FwZWRWYWx1ZSh0b2tlbixjb250ZXh0KTtlbHNlIGlmKHN5bWJvbD09PVwibmFtZVwiKXZhbHVlPXRoaXMuZXNjYXBlZFZhbHVlKHRva2VuLGNvbnRleHQpO2Vsc2UgaWYoc3ltYm9sPT09XCJ0ZXh0XCIpdmFsdWU9dGhpcy5yYXdWYWx1ZSh0b2tlbik7aWYodmFsdWUhPT11bmRlZmluZWQpYnVmZmVyKz12YWx1ZX1yZXR1cm4gYnVmZmVyfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlclNlY3Rpb249ZnVuY3Rpb24gcmVuZGVyU2VjdGlvbih0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpe3ZhciBzZWxmPXRoaXM7dmFyIGJ1ZmZlcj1cIlwiO3ZhciB2YWx1ZT1jb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7ZnVuY3Rpb24gc3ViUmVuZGVyKHRlbXBsYXRlKXtyZXR1cm4gc2VsZi5yZW5kZXIodGVtcGxhdGUsY29udGV4dCxwYXJ0aWFscyl9aWYoIXZhbHVlKXJldHVybjtpZihpc0FycmF5KHZhbHVlKSl7Zm9yKHZhciBqPTAsdmFsdWVMZW5ndGg9dmFsdWUubGVuZ3RoO2o8dmFsdWVMZW5ndGg7KytqKXtidWZmZXIrPXRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLGNvbnRleHQucHVzaCh2YWx1ZVtqXSkscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl9fWVsc2UgaWYodHlwZW9mIHZhbHVlPT09XCJvYmplY3RcInx8dHlwZW9mIHZhbHVlPT09XCJzdHJpbmdcInx8dHlwZW9mIHZhbHVlPT09XCJudW1iZXJcIil7YnVmZmVyKz10aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSxjb250ZXh0LnB1c2godmFsdWUpLHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpfWVsc2UgaWYoaXNGdW5jdGlvbih2YWx1ZSkpe2lmKHR5cGVvZiBvcmlnaW5hbFRlbXBsYXRlIT09XCJzdHJpbmdcIil0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgdXNlIGhpZ2hlci1vcmRlciBzZWN0aW9ucyB3aXRob3V0IHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZVwiKTt2YWx1ZT12YWx1ZS5jYWxsKGNvbnRleHQudmlldyxvcmlnaW5hbFRlbXBsYXRlLnNsaWNlKHRva2VuWzNdLHRva2VuWzVdKSxzdWJSZW5kZXIpO2lmKHZhbHVlIT1udWxsKWJ1ZmZlcis9dmFsdWV9ZWxzZXtidWZmZXIrPXRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl9cmV0dXJuIGJ1ZmZlcn07V3JpdGVyLnByb3RvdHlwZS5yZW5kZXJJbnZlcnRlZD1mdW5jdGlvbiByZW5kZXJJbnZlcnRlZCh0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpe3ZhciB2YWx1ZT1jb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7aWYoIXZhbHVlfHxpc0FycmF5KHZhbHVlKSYmdmFsdWUubGVuZ3RoPT09MClyZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKX07V3JpdGVyLnByb3RvdHlwZS5yZW5kZXJQYXJ0aWFsPWZ1bmN0aW9uIHJlbmRlclBhcnRpYWwodG9rZW4sY29udGV4dCxwYXJ0aWFscyl7aWYoIXBhcnRpYWxzKXJldHVybjt2YXIgdmFsdWU9aXNGdW5jdGlvbihwYXJ0aWFscyk/cGFydGlhbHModG9rZW5bMV0pOnBhcnRpYWxzW3Rva2VuWzFdXTtpZih2YWx1ZSE9bnVsbClyZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModGhpcy5wYXJzZSh2YWx1ZSksY29udGV4dCxwYXJ0aWFscyx2YWx1ZSl9O1dyaXRlci5wcm90b3R5cGUudW5lc2NhcGVkVmFsdWU9ZnVuY3Rpb24gdW5lc2NhcGVkVmFsdWUodG9rZW4sY29udGV4dCl7dmFyIHZhbHVlPWNvbnRleHQubG9va3VwKHRva2VuWzFdKTtpZih2YWx1ZSE9bnVsbClyZXR1cm4gdmFsdWV9O1dyaXRlci5wcm90b3R5cGUuZXNjYXBlZFZhbHVlPWZ1bmN0aW9uIGVzY2FwZWRWYWx1ZSh0b2tlbixjb250ZXh0KXt2YXIgdmFsdWU9Y29udGV4dC5sb29rdXAodG9rZW5bMV0pO2lmKHZhbHVlIT1udWxsKXJldHVybiBtdXN0YWNoZS5lc2NhcGUodmFsdWUpfTtXcml0ZXIucHJvdG90eXBlLnJhd1ZhbHVlPWZ1bmN0aW9uIHJhd1ZhbHVlKHRva2VuKXtyZXR1cm4gdG9rZW5bMV19O211c3RhY2hlLm5hbWU9XCJtdXN0YWNoZS5qc1wiO211c3RhY2hlLnZlcnNpb249XCIyLjMuMFwiO211c3RhY2hlLnRhZ3M9W1wiPCVcIixcIiU+XCJdO3ZhciBkZWZhdWx0V3JpdGVyPW5ldyBXcml0ZXI7bXVzdGFjaGUuY2xlYXJDYWNoZT1mdW5jdGlvbiBjbGVhckNhY2hlKCl7cmV0dXJuIGRlZmF1bHRXcml0ZXIuY2xlYXJDYWNoZSgpfTttdXN0YWNoZS5wYXJzZT1mdW5jdGlvbiBwYXJzZSh0ZW1wbGF0ZSx0YWdzKXtyZXR1cm4gZGVmYXVsdFdyaXRlci5wYXJzZSh0ZW1wbGF0ZSx0YWdzKX07bXVzdGFjaGUucmVuZGVyPWZ1bmN0aW9uIHJlbmRlcih0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzKXtpZih0eXBlb2YgdGVtcGxhdGUhPT1cInN0cmluZ1wiKXt0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHRlbXBsYXRlISBUZW1wbGF0ZSBzaG91bGQgYmUgYSBcInN0cmluZ1wiICcrJ2J1dCBcIicrdHlwZVN0cih0ZW1wbGF0ZSkrJ1wiIHdhcyBnaXZlbiBhcyB0aGUgZmlyc3QgJytcImFyZ3VtZW50IGZvciBtdXN0YWNoZSNyZW5kZXIodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKVwiKX1yZXR1cm4gZGVmYXVsdFdyaXRlci5yZW5kZXIodGVtcGxhdGUsdmlldyxwYXJ0aWFscyl9O211c3RhY2hlLnRvX2h0bWw9ZnVuY3Rpb24gdG9faHRtbCh0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzLHNlbmQpe3ZhciByZXN1bHQ9bXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLHZpZXcscGFydGlhbHMpO2lmKGlzRnVuY3Rpb24oc2VuZCkpe3NlbmQocmVzdWx0KX1lbHNle3JldHVybiByZXN1bHR9fTttdXN0YWNoZS5lc2NhcGU9ZXNjYXBlSHRtbDttdXN0YWNoZS5TY2FubmVyPVNjYW5uZXI7bXVzdGFjaGUuQ29udGV4dD1Db250ZXh0O211c3RhY2hlLldyaXRlcj1Xcml0ZXI7cmV0dXJuIG11c3RhY2hlfSk7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXG4gKiBMaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tcm9kZXJpY2svUHViU3ViSlNcbiAqL1xuIWZ1bmN0aW9uKG4sdCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9e307bi5QdWJTdWI9cjt2YXIgZT1uLmRlZmluZTshZnVuY3Rpb24obil7dmFyIHQ9e30scj0tMTtmdW5jdGlvbiBlKG4pe3ZhciB0O2Zvcih0IGluIG4paWYobi5oYXNPd25Qcm9wZXJ0eSh0KSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBvKG4sdCxyKXt0cnl7bih0LHIpfWNhdGNoKG4pe3NldFRpbWVvdXQoZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKCl7dGhyb3cgbn19KG4pLDApfX1mdW5jdGlvbiBpKG4sdCxyKXtuKHQscil9ZnVuY3Rpb24gdShuLHIsZSx1KXt2YXIgZixzPXRbcl0sYz11P2k6bztpZih0Lmhhc093blByb3BlcnR5KHIpKWZvcihmIGluIHMpcy5oYXNPd25Qcm9wZXJ0eShmKSYmYyhzW2ZdLG4sZSl9ZnVuY3Rpb24gZihuLHIsbyxpKXt2YXIgZj1mdW5jdGlvbihuLHQscil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9U3RyaW5nKG4pLG89ZS5sYXN0SW5kZXhPZihcIi5cIik7Zm9yKHUobixuLHQscik7LTEhPT1vOyllPWUuc3Vic3RyKDAsbyksbz1lLmxhc3RJbmRleE9mKFwiLlwiKSx1KG4sZSx0LHIpfX0obj1cInN5bWJvbFwiPT10eXBlb2Ygbj9uLnRvU3RyaW5nKCk6bixyLGkpLHM9ZnVuY3Rpb24obil7dmFyIHI9U3RyaW5nKG4pLG89Qm9vbGVhbih0Lmhhc093blByb3BlcnR5KHIpJiZlKHRbcl0pKSxpPXIubGFzdEluZGV4T2YoXCIuXCIpO2Zvcig7IW8mJi0xIT09aTspcj1yLnN1YnN0cigwLGkpLGk9ci5sYXN0SW5kZXhPZihcIi5cIiksbz1Cb29sZWFuKHQuaGFzT3duUHJvcGVydHkocikmJmUodFtyXSkpO3JldHVybiBvfShuKTtyZXR1cm4hIXMmJighMD09PW8/ZigpOnNldFRpbWVvdXQoZiwwKSwhMCl9bi5wdWJsaXNoPWZ1bmN0aW9uKHQscil7cmV0dXJuIGYodCxyLCExLG4uaW1tZWRpYXRlRXhjZXB0aW9ucyl9LG4ucHVibGlzaFN5bmM9ZnVuY3Rpb24odCxyKXtyZXR1cm4gZih0LHIsITAsbi5pbW1lZGlhdGVFeGNlcHRpb25zKX0sbi5zdWJzY3JpYmU9ZnVuY3Rpb24obixlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXJldHVybiExO249XCJzeW1ib2xcIj09dHlwZW9mIG4/bi50b1N0cmluZygpOm4sdC5oYXNPd25Qcm9wZXJ0eShuKXx8KHRbbl09e30pO3ZhciBvPVwidWlkX1wiK1N0cmluZygrK3IpO3JldHVybiB0W25dW29dPWUsb30sbi5zdWJzY3JpYmVPbmNlPWZ1bmN0aW9uKHQscil7dmFyIGU9bi5zdWJzY3JpYmUodCxmdW5jdGlvbigpe24udW5zdWJzY3JpYmUoZSksci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KTtyZXR1cm4gbn0sbi5jbGVhckFsbFN1YnNjcmlwdGlvbnM9ZnVuY3Rpb24oKXt0PXt9fSxuLmNsZWFyU3Vic2NyaXB0aW9ucz1mdW5jdGlvbihuKXt2YXIgcjtmb3IociBpbiB0KXQuaGFzT3duUHJvcGVydHkocikmJjA9PT1yLmluZGV4T2YobikmJmRlbGV0ZSB0W3JdfSxuLnVuc3Vic2NyaWJlPWZ1bmN0aW9uKHIpe3ZhciBlLG8saSx1PVwic3RyaW5nXCI9PXR5cGVvZiByJiYodC5oYXNPd25Qcm9wZXJ0eShyKXx8ZnVuY3Rpb24obil7dmFyIHI7Zm9yKHIgaW4gdClpZih0Lmhhc093blByb3BlcnR5KHIpJiYwPT09ci5pbmRleE9mKG4pKXJldHVybiEwO3JldHVybiExfShyKSksZj0hdSYmXCJzdHJpbmdcIj09dHlwZW9mIHIscz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByLGM9ITE7aWYoIXUpe2ZvcihlIGluIHQpaWYodC5oYXNPd25Qcm9wZXJ0eShlKSl7aWYobz10W2VdLGYmJm9bcl0pe2RlbGV0ZSBvW3JdLGM9cjticmVha31pZihzKWZvcihpIGluIG8pby5oYXNPd25Qcm9wZXJ0eShpKSYmb1tpXT09PXImJihkZWxldGUgb1tpXSxjPSEwKX1yZXR1cm4gY31uLmNsZWFyU3Vic2NyaXB0aW9ucyhyKX19KHIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUuYW1kP2UoZnVuY3Rpb24oKXtyZXR1cm4gcn0pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiYodm9pZCAwIT09bW9kdWxlJiZtb2R1bGUuZXhwb3J0cyYmKGV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9ciksZXhwb3J0cy5QdWJTdWI9cixtb2R1bGUuZXhwb3J0cz1leHBvcnRzPXIpfShcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3d8fHRoaXMpOyIsIi8qISBVVEYtOFxyXG5cclxuwqkga292cmlnaW5cclxu0JLRgdC1INC/0YDQsNCy0LAg0YDQsNC30YDQtdGI0LXQvdGLXHJcbtC60YDQsNGB0LjQstGL0Lkg0LTQuNC30LDQudC9INC00L7Qu9C20LXQvSDQuNC80LXRgtGMINC60YDQsNGB0LjQstGL0Lkg0LrQvtC0wq5cclxuXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9odG1scGx1c2Nzcy9cclxuXHJcbiovXHJcblxyXG4oICgpID0+IHtcclxuXHJcblx0bGV0IHJlc2l6ZVRpbWVvdXQgPSBudWxsLFxyXG5cdFx0d2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcclxuXHJcblx0XHRcdGlmICghcmVzaXplVGltZW91dCkge1xyXG5cclxuXHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRcdGlmKHdpbmRvd1dpZHRoT0xkICE9PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xyXG5cclxuXHRcdFx0XHRcdFx0d2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcblx0XHRcdFx0XHRcdFB1YlN1Yi5wdWJsaXNoKCd3aW5kb3dXaWR0aFJlc2l6ZScpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSwgMTAwKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0UHViU3ViLnB1Ymxpc2goJ3BhZ2VMb2FkJyk7XHJcblxyXG5cdFx0Q29va2llcy5zZXQoJ2Zhc3RMb2FkU2NyaXB0JywgdHJ1ZSk7XHJcblxyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXRyYW5zaXRpb25EZWZhdWx0JywgJy4zcycpO1xyXG5cclxuXHRcdGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKSkge1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWhlYWRlckhlaWdodCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5jbGllbnRIZWlnaHQgKyAncHgnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpKSB7XHJcblxyXG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZm9vdGVySGVpZ2h0JywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpLmNsaWVudEhlaWdodCArICdweCcpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINC+0LHRgNCw0LHQvtGC0YfQuNC6INCw0L3QuNC80LDRhtC40LlcclxuXHR3aW5kb3cuY3NzQW5pbWF0aW9uID0gYT0+e2xldCBiLGMsZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY3NzYW5pbWF0aW9uXCIpO3N3aXRjaChhKXtjYXNlJ2FuaW1hdGlvbic6Yj17XCJhbmltYXRpb25cIjpcImFuaW1hdGlvbmVuZFwiLFwiT0FuaW1hdGlvblwiOlwib0FuaW1hdGlvbkVuZFwiLFwiTW96QW5pbWF0aW9uXCI6XCJhbmltYXRpb25lbmRcIixcIldlYmtpdEFuaW1hdGlvblwiOlwid2Via2l0QW5pbWF0aW9uRW5kXCJ9O2JyZWFrO2Nhc2UndHJhbnNpdGlvbic6Yj17XCJ0cmFuc2l0aW9uXCI6XCJ0cmFuc2l0aW9uZW5kXCIsXCJPVHJhbnNpdGlvblwiOlwib1RyYW5zaXRpb25FbmRcIixcIk1velRyYW5zaXRpb25cIjpcInRyYW5zaXRpb25lbmRcIixcIldlYmtpdFRyYW5zaXRpb25cIjpcIndlYmtpdFRyYW5zaXRpb25FbmRcIn19Zm9yKGMgaW4gYilpZihkLnN0eWxlW2NdIT09dW5kZWZpbmVkKXJldHVybiBiW2NdfVxyXG5cclxuXHQvLyBEZXRlcm1pbmUgaWYgYW4gZWxlbWVudCBpcyBpbiB0aGUgdmlzaWJsZSB2aWV3cG9ydFxyXG5cdHdpbmRvdy5pc0luVmlld3BvcnQgPSBlbCA9PiB7XHJcblx0XHRjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRyZXR1cm4gKHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHR9XHJcblxyXG5cdC8vINC+0YLQtNC10LvRj9C10Lwg0YLRi9GB0Y/Rh9C4XHJcblx0d2luZG93LnNlcE51bWJlciA9IGZ1bmN0aW9uKHN0cil7XHJcblx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcclxuXHRcdHN0ciA9IHN0ci5yZXBsYWNlKC9cXHMrL2csJycpO1xyXG5cdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGRcXGQpKyhbXlxcZF18JCkpL2csICckMSAnKTtcclxuXHR9XHJcblxyXG5cdC8vINGB0LrQu9C10LjQstCw0LXQvCDRgtGL0YHRj9GH0LhcclxuXHR3aW5kb3cuc3RyVG9OdW1iZXIgPSBmdW5jdGlvbihuKXtcclxuXHRcdHJldHVybiBwYXJzZUludChuLnJlcGxhY2UoL1xccysvZywnJyksIDEwKTtcclxuXHR9XHJcblxyXG4vLyDRgdC60LvQvtC90LXQvdC40LVcclxuXHR3aW5kb3cuZGVjbGVuc2lvbiA9IChudW0sIGV4cHJlc3Npb25zKSA9PiB7XHJcblxyXG5cdFx0bGV0IHIsXHJcblx0XHRcdGNvdW50ID0gbnVtICUgMTAwO1xyXG5cclxuXHRcdGlmIChjb3VudCA+IDQgJiYgY291bnQgPCAyMSl7XHJcblxyXG5cdFx0XHRyID0gZXhwcmVzc2lvbnNbJzInXTtcclxuXHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHJcblx0XHRcdGNvdW50ID0gY291bnQgJSAxMDtcclxuXHJcblx0XHRcdGlmIChjb3VudCA9PSAxKXtcclxuXHRcdFx0XHRyID0gZXhwcmVzc2lvbnNbJzAnXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChjb3VudCA+IDEgJiYgY291bnQgPCA1KXtcclxuXHRcdFx0XHRyID0gZXhwcmVzc2lvbnNbJzEnXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNle1xyXG5cdFx0XHRcdHIgPSBleHByZXNzaW9uc1snMiddO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByO1xyXG5cclxuXHR9XHJcblxyXG59KSgpOyIsIiggYWNjb3VudCA9PiB7XHJcblxyXG5cdGlmKCFhY2NvdW50KSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGZvcm0gPSBhY2NvdW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19mb3JtJyksXHJcblx0XHQgIHRlbXBsYXRlRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWNjb3VudC1mb3JtLWVycm9yLXRvb2x0aXAtdGVtcGxhdGUnKTtcclxuXHJcblx0Ly8g0LTQu9GPINGD0LLQtdC00L7QvNC70LXQvdC40LlcclxuXHJcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWhlYWRlckhlaWdodCcsICcxNXB4Jyk7XHJcblxyXG5cdC8vINC/0L7QutCw0LfQsNGC0Ywg0L/QsNGA0L7Qu9GMXHJcblxyXG5cdGNvbnN0IHRvZ2dsZVBhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3VudF9fdmlzaWJsZS10b2dnbGUtcGFzc3dvcmQnKTtcclxuXHJcblx0QXJyYXkuZnJvbSh0b2dnbGVQYXNzLCBlbCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRuID0gZWwucXVlcnlTZWxlY3RvcignLmFjY291bnRfX3Zpc2libGUtdG9nZ2xlLXBhc3N3b3JkLWJ0bicpLFxyXG5cdFx0XHQgIGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcignLmFjY291bnRfX3Zpc2libGUtdG9nZ2xlLXBhc3N3b3JkLWlucHV0Jyk7XHJcblxyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcblxyXG5cdFx0XHRpbnB1dC50eXBlID0gaW5wdXQudHlwZSA9PT0gJ3Bhc3N3b3JkJyA/ICd0ZXh0JyA6ICdwYXNzd29yZCc7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGJ0bi5xdWVyeVNlbGVjdG9yQWxsKCdzdmcnKSwgc3ZnID0+IHN2Zy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJykpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8g0YDQtdCz0LjRgdGC0YDQsNGG0LjRj1xyXG5cclxuXHRjb25zdCBmb3JtUmVnID0gYWNjb3VudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fZm9ybS0tc2lnbnVwJyk7XHJcblxyXG5cdGlmKCBmb3JtUmVnICkge1xyXG5cclxuXHRcdGZvcm1SZWcuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Ly8g0L/QtdGA0LLRi9C5INGI0LDQsywg0LLRi9Cx0L7RgCDRgtC40L/QsCDRg9GH0LXRgtC60LhcclxuXHJcblx0XHRcdGlmKCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvdW50X19yYWRpby1pbnB1dCcpICkge1xyXG5cclxuXHRcdFx0XHRjb25zdCBmaWVsZHNldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuYWNjb3VudF9fZmllbGRzZXQnKTtcclxuXHJcblx0XHRcdFx0ZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnaXMtdmFsaWQnKTtcclxuXHJcblx0XHRcdFx0ZmllbGRzZXQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX25leHQnKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIGJ0biBuZXh0XHJcblxyXG5cdFx0Y29uc3QgYnRuTmV4dCA9IGZvcm1SZWcucXVlcnlTZWxlY3RvckFsbCgnLmFjY291bnRfX25leHQnKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGJ0bk5leHQsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGJ0bi5jbG9zZXN0KCcuYWNjb3VudF9fZmllbGRzZXQnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdFx0YnRuLmNsb3Nlc3QoJy5hY2NvdW50X19maWVsZHNldCcpLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBidG4gcHJldlxyXG5cclxuXHRcdGNvbnN0IGJ0blByZXYgPSBmb3JtUmVnLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvdW50X19wcmV2Jyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShidG5QcmV2LCBidG4gPT4ge1xyXG5cclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRidG4uY2xvc2VzdCgnLmFjY291bnRfX2ZpZWxkc2V0JykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRcdGJ0bi5jbG9zZXN0KCcuYWNjb3VudF9fZmllbGRzZXQnKS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vINCy0YvQsdC+0YAg0LrQvtC80L/QsNC90LjQuFxyXG5cclxuXHRcdGNvbnN0IGNvbXBhbnkgPSBmb3JtUmVnLmVsZW1lbnRzLmNvbXBhbnk7XHJcblxyXG5cdFx0Y29tcGFueS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcclxuXHJcblx0XHRcdGxldCBpc1Rvb2x0aXAgPSBmYWxzZTtcclxuXHJcblx0XHRcdGNvbnN0IG5leHQgPSBjb21wYW55Lm5leHRFbGVtZW50U2libGluZztcclxuXHJcblx0XHRcdGlmICggbmV4dCAmJiBuZXh0LmNsYXNzTGlzdC5jb250YWlucygnaW5wdXRib3hfX2Vycm9yJykgKSB7XHJcblxyXG5cdFx0XHRcdGlzVG9vbHRpcCA9IHRydWU7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIGNvbXBhbnkuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1lbXB0eScpICkge1xyXG5cclxuXHRcdFx0XHRpZiAoIGlzVG9vbHRpcCA9PT0gZmFsc2UgKSB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgdGV4dCA9IGNvbXBhbnkuZ2V0QXR0cmlidXRlKCdkYXRhLWVtcHR5LXRvb2x0aXAnKTtcclxuXHRcdFx0XHRcdGNvbnN0IGVycm9yID0gTXVzdGFjaGUucmVuZGVyKCB0ZW1wbGF0ZUVycm9yLmlubmVySFRNTCwgeyB0ZXh0IH0pO1xyXG5cclxuXHRcdFx0XHRcdGNvbXBhbnkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGVycm9yKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0aXNUb29sdGlwICYmIG5leHQucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8g0YLQtdC60YHRgiDQutC+0YDQv9C+0YDQvtGC0LjQstC90L7Qs9C+INC10LzQsNC50LtcclxuXHJcblx0XHRjb25zdCBlbWFpbENvbXBhbnkgPSBmb3JtUmVnLnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLWFjY291bnQtZW1haWwnKSxcclxuXHRcdFx0ICBwYXR0ZXJuID0gZW1haWxDb21wYW55LmdldEF0dHJpYnV0ZSgnZGF0YS1wYXR0ZXJuJykuc3BsaXQoJ3wnKTtcclxuXHJcblx0XHRlbWFpbENvbXBhbnkuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgdmFsaWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0cGF0dGVybi5mb3JFYWNoKCBlbCA9PiB7XHJcblxyXG5cdFx0XHRcdGlmIChlbWFpbENvbXBhbnkudmFsdWUuaW5kZXhPZignQCcgKyBlbCkgIT09IC0xKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFsaWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRsZXQgaXNUb29sdGlwID0gZmFsc2U7XHJcblxyXG5cdFx0XHRjb25zdCBuZXh0ID0gZW1haWxDb21wYW55Lm5leHRFbGVtZW50U2libGluZztcclxuXHJcblx0XHRcdGlmICggbmV4dCAmJiBuZXh0LmNsYXNzTGlzdC5jb250YWlucygnaW5wdXRib3hfX2Vycm9yJykgKSB7XHJcblxyXG5cdFx0XHRcdGlzVG9vbHRpcCA9IHRydWU7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIHZhbGlkID09PSBmYWxzZSApIHtcclxuXHJcblx0XHRcdFx0aWYgKCBpc1Rvb2x0aXAgPT09IGZhbHNlICkge1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IHRleHQgPSBlbWFpbENvbXBhbnkuZ2V0QXR0cmlidXRlKCdkYXRhLXRleHQtdmFsaWQnKTtcclxuXHRcdFx0XHRcdGNvbnN0IGVycm9yID0gTXVzdGFjaGUucmVuZGVyKCB0ZW1wbGF0ZUVycm9yLmlubmVySFRNTCwgeyB0ZXh0IH0pO1xyXG5cclxuXHRcdFx0XHRcdGVtYWlsQ29tcGFueS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgZXJyb3IpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRpc1Rvb2x0aXAgJiYgbmV4dC5yZW1vdmUoKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHQvLyBzdWJtaXQgZm9ybVxyXG5cclxuXHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGNvbnN0IGJ0blN1Ym1pdCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmFjY291bnRfX3N1Ym1pdCcpO1xyXG5cclxuXHRcdGJ0blN1Ym1pdC5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdH0pXHJcblx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHQudGhlbihqc29uID0+IHtcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKGpzb24pO1xyXG5cclxuXHRcdFx0YnRuU3VibWl0LmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRpZigganNvbi5lcnJvckxpc3QgKSB7XHJcblxyXG5cdFx0XHRcdGpzb24uZXJyb3JMaXN0LmZvckVhY2goIGlucHV0ID0+IHtcclxuXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhpbnB1dCk7XHJcblxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgdHlwZSBpbiBpbnB1dCkge1xyXG5cclxuXHRcdFx0XHRcdFx0Y29uc3QgdGV4dCA9IGlucHV0W3R5cGVdO1xyXG5cdFx0XHRcdFx0XHRjb25zdCBlcnJvciA9IE11c3RhY2hlLnJlbmRlciggdGVtcGxhdGVFcnJvci5pbm5lckhUTUwsIHsgdGV4dCB9KTtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnN0IGlucHV0SW5Gb3JtID0gZm9ybS5lbGVtZW50c1t0eXBlXTtcclxuXHJcblx0XHRcdFx0XHRcdGlucHV0SW5Gb3JtLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBlcnJvcik7XHJcblx0XHRcdFx0XHRcdGlucHV0SW5Gb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWVycm9yJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKCBqc29uLm5vdGlmaWNhdGlvbiApIHtcclxuXHJcblx0XHRcdFx0bm90aWZpY2F0aW9uKC4uLmpzb24ubm90aWZpY2F0aW9uKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHJlZGlyZWN0XHJcblxyXG5cdFx0XHRpZigganNvbi5yZWRpcmVjdCApIHtcclxuXHJcblx0XHRcdFx0Y29uc3QgZGVsYXkgPSBqc29uLnJlZGlyZWN0RGVsYXkgPyBqc29uLnJlZGlyZWN0RGVsYXkgKiAxMDAwIDogMDtcclxuXHJcblx0XHRcdFx0c2V0VGltZW91dCggKCk9PiBsb2NhdGlvbi5hc3NpZ24oanNvbi5yZWRpcmVjdCksIGRlbGF5KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINGB0LrRgNGL0YLQuNC1INC+0YjQuNCx0L7QuiDQv9GA0Lgg0LLQstC+0LTQtVxyXG5cclxuXHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmICggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaXMtZXJyb3InKSApIHtcclxuXHJcblx0XHRcdGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1lcnJvcicpO1xyXG5cclxuXHRcdFx0Y29uc3QgZXJyb3IgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuaW5wdXRib3hfX2Vycm9yJyk7XHJcblxyXG5cdFx0XHRpZiAoIGVycm9yICkge1xyXG5cclxuXHRcdFx0XHRlcnJvci5hZGRFdmVudExpc3RlbmVyKHdpbmRvdy5jc3NBbmltYXRpb24oJ3RyYW5zaXRpb24nKSwgKCkgPT4gZXJyb3IucmVtb3ZlKCkpO1xyXG5cclxuXHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiBlcnJvci5jbGFzc0xpc3QuYWRkKCdpcy1mYWRlb3V0JyksIDEwMCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50JykpOyIsIlxyXG4oIGxpbmtzID0+IHtcclxuXHJcblx0aWYobGlua3MubGVuZ3RoKSB7XHJcblxyXG5cdFx0Y29uc3QgaGlzdG9yeUJhY2sgPSBldmVudD0+IHtcclxuXHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGhpc3RvcnkuYmFjaygpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRBcnJheS5mcm9tKGxpbmtzLCBsaW5rID0+IHtcclxuXHJcblx0XHRcdGlmKGRvY3VtZW50LnJlZmVycmVyLmluZGV4T2YobG9jYXRpb24uaG9zdG5hbWUpID4gMCkge1xyXG5cclxuXHRcdFx0XHRsaW5rLm9uY2xpY2sgPSBoaXN0b3J5QmFjaztcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWJ0bi1iYWNrJykpOyIsIndpbmRvdy5kYXRhbGlzdHMgPSBkYXRhbGlzdCA9PiB7XHJcblxyXG5cdGNvbnN0IGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuXHRhcnJvdy5jbGFzc05hbWUgPSAnaW5wdXQtZGF0YWxpc3RfX2Fycm93JztcclxuXHRhcnJvdy5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIm03LjUgOSA0LjUgNSA0LjUtNWgtOVpcIi8+PC9zdmc+JztcclxuXHJcblx0ZGF0YWxpc3QuYXBwZW5kQ2hpbGQoYXJyb3cpO1xyXG5cclxuXHRjb25zdCBjb250cm9sID0gZGF0YWxpc3QucXVlcnlTZWxlY3RvcignaW5wdXQnKSxcclxuXHRcdG9wdGlvbiA9IGRhdGFsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpLFxyXG5cdFx0bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRsaXN0LmNsYXNzTmFtZSA9ICdpbnB1dC1kYXRhbGlzdF9fbGlzdCc7XHJcblxyXG5cdEFycmF5LmZyb20ob3B0aW9uLCBlbCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuXHRcdG8uY2xhc3NOYW1lID0gJ2J1dHRvbiBpbnB1dC1kYXRhbGlzdF9fbGlzdC1pdGVtJztcclxuXHJcblx0XHRvLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuXHJcblx0XHRvLnRleHRDb250ZW50ID0gZWwuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xyXG5cclxuXHRcdGxpc3QuYXBwZW5kQ2hpbGQobyk7XHJcblxyXG5cdFx0by5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0Y29udHJvbC52YWx1ZSA9IG8udGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0XHRjb250cm9sLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdGNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XHJcblxyXG5cdFx0c2V0VGltZW91dCggKCk9PiBkYXRhbGlzdC5jbGFzc0xpc3QuYWRkKCdpcy1mb2N1cycpLCAxMDApO1xyXG5cclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYgKGV2ZW50LnRhcmdldCAhPT0gY29udHJvbCApIHtcclxuXHJcblx0XHRcdGRhdGFsaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZvY3VzJyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Y29udHJvbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuXHJcblx0XHRjb25zdCB2YWx1ZSA9IGNvbnRyb2wudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRpZih2YWx1ZS5sZW5ndGggPiAxKSB7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGxpc3QuY2hpbGRyZW4sIG8gPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zdCB0ZXh0ID0gby50ZXh0Q29udGVudC50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdFx0by5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgdGV4dC5pbmRleE9mKHZhbHVlKSA9PT0gLTEpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZihsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1kYXRhbGlzdF9fbGlzdC1pdGVtJykubGVuZ3RoID09PSBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1kYXRhbGlzdF9fbGlzdC1pdGVtLmhpZGUnKS5sZW5ndGgpIHtcclxuXHJcblx0XHRcdFx0Y29udHJvbC5jbGFzc0xpc3QuYWRkKCdpcy1lbXB0eScpO1xyXG5cdFx0XHRcdGxpc3QuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0Y29udHJvbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1lbXB0eScpO1xyXG5cdFx0XHRcdGxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGxpc3QuY2hpbGRyZW4sIG8gPT4gby5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xyXG5cdFx0XHRjb250cm9sLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWVtcHR5Jyk7XHJcblx0XHRcdGxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdGRhdGFsaXN0LmFwcGVuZENoaWxkKGxpc3QpO1xyXG5cclxuXHRkYXRhbGlzdC5xdWVyeVNlbGVjdG9yKCdkYXRhbGlzdCcpLnJlbW92ZSgpO1xyXG5cclxufTtcclxuXHJcbiggKCkgPT4ge1xyXG5cclxuXHR3aW5kb3cuZGF0YWxpc3RzQ29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1kYXRhbGlzdCcpO1xyXG5cclxuXHRpZih3aW5kb3cuZGF0YWxpc3RzQ29sbGVjdGlvbi5sZW5ndGgpIHtcclxuXHJcblx0XHRBcnJheS5mcm9tKHdpbmRvdy5kYXRhbGlzdHNDb2xsZWN0aW9uLCBkYXRhbGlzdCA9PiB3aW5kb3cuZGF0YWxpc3RzKGRhdGFsaXN0KSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKCk7IiwiXHJcbi8vIGxhbmcgRU58UlUg0LIg0YLQvtCy0LDRgNC1XHJcblxyXG4oIGZvcm0gPT4ge1xyXG5cclxuXHRpZihmb3JtID09PSBudWxsKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vINC60L3QvtC/0LrQuCDRgdC60LDRh9Cw0YLRjFxyXG5cclxuXHRjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZG9jcy1pdGVtLWxhbmddJyk7XHJcblxyXG5cdGlmKGJ0bnMubGVuZ3RoKSB7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBsYW5nID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRvY3MtaXRlbS1sYW5nXCJdOmNoZWNrZWQnKS52YWx1ZTtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oYnRucywgZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1kb2NzLWl0ZW0tbGFuZycpICE9PSBsYW5nKSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0Ly8g0YTQvtGA0LzQsCDQt9Cw0L/RgNC+0YHQsCDRhtC10L3RiyDQsiDQvNC+0LTQsNC70LrQtVxyXG5cclxuXHRjb25zdCBmb3JtTW9kYWxHZXRQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLW1vZGFsLWdldC1wcmljZScpO1xyXG5cclxuXHRpZihmb3JtTW9kYWxHZXRQcmljZSkge1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgbGFuZyA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJkb2NzLWl0ZW0tbGFuZ1wiXTpjaGVja2VkJykudmFsdWU7XHJcblxyXG5cdFx0XHRmb3JtTW9kYWxHZXRQcmljZS5lbGVtZW50cy5sYW5nLnZhbHVlID0gbGFuZztcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHQvLyDRhNC+0YDQvNCwINC30LDQv9GA0L7RgdCwINGG0LXQvdGLINC90LAg0YHRgtGA0LDQvdC40YbQtSAo0LDQstGC0L7RgNC40LfQvtCy0LDQvSlcclxuXHJcblx0Y29uc3QgZm9ybUdldFByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tZ2V0LXByaWNlJyk7XHJcblxyXG5cdGlmKGZvcm1HZXRQcmljZSkge1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgbGFuZyA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJkb2NzLWl0ZW0tbGFuZ1wiXTpjaGVja2VkJykudmFsdWU7XHJcblxyXG5cdFx0XHRmb3JtR2V0UHJpY2UuZWxlbWVudHMubGFuZy52YWx1ZSA9IGxhbmc7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWl0ZW1fX2xhbmcnKSk7IiwiXHJcbiggZm9ybXMgPT4ge1xyXG5cclxuXHRpZihmb3Jtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRjb25zdCBmb3JtU2hvcnRTdGF0dXMgPSAoKT0+IHtcclxuXHJcblx0XHRcdGlmKGZvcm1TaG9ydCA9PT0gbnVsbCkge1xyXG5cclxuXHRcdFx0XHRmb3JtU2hvcnQgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2UtYmx1ZScpO1xyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXBhZ2UnKS5jbGFzc0xpc3QuYWRkKCdkb2NzLXBhZ2UtLXNob3J0Jyk7XHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3MtcGFnZV9fZGVzY3JpcHRpb24nKS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGZvcm1TaG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXBhZ2UtLXNob3J0JyksXHJcblx0XHRcdGFjdGl2ZVRhYlN0YW5kYXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXBhZ2VfX3RhYnMtaXRlbS0tc3RhbmRhcnRzJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKTtcclxuXHJcblx0XHRjb25zdCBzZWFyY2hSZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1zZWFyY2gtcmVzdWx0JyksXHJcblx0XHRcdCAgc2VhcmNoUmVzdWx0U3RhbmRhcnRzID0gc2VhcmNoUmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXNlYXJjaC1yZXN1bHRfX3N0YW5kYXJ0cycpLFxyXG5cdFx0XHQgIHNlYXJjaFJlc3VsdEFuYWx5dGljcyA9IHNlYXJjaFJlc3VsdC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1zZWFyY2gtcmVzdWx0X19hbmFseXRpY3MnKSxcclxuXHRcdFx0ICBmaWVsZHNldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG9jcy1mb3JtX19maWVsZHNldCcpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oZm9ybXMsIGZvcm0gPT4ge1xyXG5cclxuXHRcdFx0Ly8ga2V5d29yZHNcclxuXHJcblx0XHRcdGlmKCBmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZG9jcy1mb3JtLS1wcm9kdWN0JykgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZG9jcy1mb3JtX19pbnB1dCcpLFxyXG5cdFx0XHRcdFx0ICByZXN1bHQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWZvcm1fX3Jlc3VsdCcpO1xyXG5cclxuXHRcdFx0XHQvLyBpbnB1dFxyXG5cclxuXHRcdFx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZihpbnB1dC52YWx1ZS5sZW5ndGggPiAyICYmIGV2ZW50LmtleSAhPT0gJ2VudGVyJyl7XHJcblxyXG5cdFx0XHRcdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKSwge1xyXG5cdFx0XHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcblx0XHRcdFx0XHRcdC50aGVuKGh0bWwgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhodG1sKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0cmVzdWx0LmlubmVySFRNTCA9IGh0bWw7XHJcblx0XHRcdFx0XHRcdFx0cmVzdWx0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBpbnB1dC52YWx1ZS5sZW5ndGggPT09IDAgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRBcnJheS5mcm9tKGZpZWxkc2V0cywgZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZm9jdXMnLCAnaGlkZScpKTtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmVzdWx0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdGhpc3RvcnkucHVzaFN0YXRlKHVuZGVmaW5lZCwgJycsICc/Jyk7XHJcblxyXG5cdFx0XHRcdFx0c2VhcmNoUmVzdWx0LmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHJcblx0XHRcdFx0XHRpZiggYWN0aXZlVGFiU3RhbmRhcnRzICkge1xyXG5cclxuXHRcdFx0XHRcdFx0c2VhcmNoUmVzdWx0U3RhbmRhcnRzLmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRcdFx0XHRzZWFyY2hSZXN1bHRTdGFuZGFydHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRzZWFyY2hSZXN1bHRBbmFseXRpY3MuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRcdFx0XHRcdHNlYXJjaFJlc3VsdEFuYWx5dGljcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGZvcm1TaG9ydFN0YXR1cygpO1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoICgpPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0aW5wdXQudmFsdWUgPSAnJztcclxuXHJcblx0XHRcdFx0XHRcdGxldCB1cmwgPSBmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJykgKyAnPyc7XHJcblxyXG5cdFx0XHRcdFx0XHRuZXcgRm9ybURhdGEoZm9ybSkuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHR1cmwgKz0ga2V5ICsgXCI9XCIgKyB2YWx1ZSArIFwiJlwiO1xyXG5cclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0XHRmZXRjaCh1cmwpXHJcblx0XHRcdFx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG5cdFx0XHRcdFx0XHRcdC50aGVuKGh0bWwgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGJveFJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGJveFJlc3VsdC5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmKCBhY3RpdmVUYWJTdGFuZGFydHMgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZWFyY2hSZXN1bHRTdGFuZGFydHMuaW5uZXJIVE1MID0gYm94UmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXNlYXJjaC1yZXN1bHRfX3N0YW5kYXJ0cycpLmlubmVySFRNTDtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c2VhcmNoUmVzdWx0QW5hbHl0aWNzLmlubmVySFRNTCA9IGJveFJlc3VsdC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1zZWFyY2gtcmVzdWx0X19hbmFseXRpY3MnKS5pbm5lckhUTUw7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHNlYXJjaFJlc3VsdC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRpbnB1dC5mb2N1cygpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR9LCAxMDApO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vINC60LDRgNGC0L7Rh9C60LgsINC90L7QvNC10YDQutC70LDRgtGD0YDQsCDQuCDRgNCw0LfRgNCw0LHQvtGC0YfQuNC6XHJcblxyXG5cdFx0XHRpZiggZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2RvY3MtZm9ybS0tbGlzdCcpICkge1xyXG5cclxuXHRcdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhmb3JtLCAnY2hhbmdlJyk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgcXVlcnlTdHJpbmcgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGZvcm1EYXRhKS50b1N0cmluZygpO1xyXG5cclxuXHRcdFx0XHRcdGhpc3RvcnkucHVzaFN0YXRlKHVuZGVmaW5lZCwgJycsICc/JyArIHF1ZXJ5U3RyaW5nKTtcclxuXHJcblx0XHRcdFx0XHRsZXQgd2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0XHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1hamF4X19idG46ZGlzYWJsZWQnKSApIHtcclxuXHJcblx0XHRcdFx0XHRcdHNlYXJjaFJlc3VsdC5jbGFzc0xpc3QuYWRkKCdpcy1sb2FkaW5nLWFkZCcpO1xyXG5cclxuXHRcdFx0XHRcdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRzZWFyY2hSZXN1bHQuY2xhc3NMaXN0LmFkZCgnaXMtbG9hZGluZycpO1xyXG5cdFx0XHRcdFx0XHRzZWFyY2hSZXN1bHRTdGFuZGFydHMuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRcdFx0XHRcdHNlYXJjaFJlc3VsdFN0YW5kYXJ0cy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpLCB7XHJcblx0XHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0XHRib2R5OiBmb3JtRGF0YVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcclxuXHRcdFx0XHRcdC50aGVuKGh0bWwgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8g0LrQvdC+0L/QutCwINC10YnRkVxyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWFqYXhfX2J0bjpkaXNhYmxlZCcpKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGJveFJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRib3hSZXN1bHQuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcblx0XHRcdFx0XHRcdFx0QXJyYXkuZnJvbShib3hSZXN1bHQucXVlcnlTZWxlY3RvckFsbCgnLmRvY3Mtc2VhcmNoLXJlc3VsdF9fc3RhbmRhcnRzIC5kb2NzLWNhdGFsb2dfX2l0ZW0nKSwgaXRlbSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0c2VhcmNoUmVzdWx0U3RhbmRhcnRzLnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWNhdGFsb2dfX2xpc3QnKS5hcHBlbmRDaGlsZChpdGVtKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmICggYm94UmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXNlYXJjaC1yZXN1bHRfX3N0YW5kYXJ0cyAuZG9jcy12aWV3ZWQnKSApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRzZWFyY2hSZXN1bHRTdGFuZGFydHMucXVlcnlTZWxlY3RvcignLmRvY3Mtdmlld2VkJykuaW5uZXJIVE1MID0gYm94UmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXNlYXJjaC1yZXN1bHRfX3N0YW5kYXJ0cyAuZG9jcy12aWV3ZWQnKS5pbm5lckhUTUw7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKCBib3hSZXN1bHQucXVlcnlTZWxlY3RvcignLmRvY3Mtc2VhcmNoLXJlc3VsdF9fc3RhbmRhcnRzIC5wYWdpbicpICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHNlYXJjaFJlc3VsdFN0YW5kYXJ0cy5xdWVyeVNlbGVjdG9yKCcucGFnaW4nKS5pbm5lckhUTUwgPSBib3hSZXN1bHQucXVlcnlTZWxlY3RvcignLmRvY3Mtc2VhcmNoLXJlc3VsdF9fc3RhbmRhcnRzIC5wYWdpbicpLmlubmVySFRNTDtcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiggYm94UmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXNlYXJjaC1yZXN1bHRfX3N0YW5kYXJ0cyAuZG9jcy1hamF4X19idG4nKSApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRzZWFyY2hSZXN1bHRTdGFuZGFydHMucXVlcnlTZWxlY3RvcignLmRvY3MtYWpheF9fYnRuJykuZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChzZWFyY2hSZXN1bHRTdGFuZGFydHMucXVlcnlTZWxlY3RvcignLmRvY3MtYWpheCcpKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0c2VhcmNoUmVzdWx0U3RhbmRhcnRzLnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWFqYXgnKS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiggd2luZG93U2Nyb2xsICE9PSB3aW5kb3cucGFnZVlPZmZzZXQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsd2luZG93U2Nyb2xsKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0c2VhcmNoUmVzdWx0U3RhbmRhcnRzLmlubmVySFRNTCA9IGh0bWw7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRzZWFyY2hSZXN1bHQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycsJ2lzLWxvYWRpbmctYWRkJyk7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0Zm9ybVNob3J0U3RhdHVzKCk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQvLyBzdWJtaXRcclxuXHJcblx0XHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShmaWVsZHNldHMsIGZpZWxkc2V0ID0+IHtcclxuXHJcblx0XHRcdC8vIG9wZW5cclxuXHJcblx0XHRcdGZpZWxkc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZG9jcy1mb3JtX19yZXN1bHQnKSApIHtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShmaWVsZHNldHMsIGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWZvY3VzJywgZWwgPT09IGZpZWxkc2V0KSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNvbnN0IGZvcm0gPSBmaWVsZHNldC5jbG9zZXN0KCcuZG9jcy1mb3JtJyksXHJcblx0XHRcdFx0ICBpbnB1dCA9IGZpZWxkc2V0LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWZvcm1fX2lucHV0JyksXHJcblx0XHRcdFx0ICByZXNldCA9IGZpZWxkc2V0LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWZvcm1fX3Jlc2V0JyksXHJcblx0XHRcdFx0ICByZXN1bHQgPSBmaWVsZHNldC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1mb3JtX19yZXN1bHQnKTtcclxuXHJcblx0XHRcdC8vIGlucHV0XHJcblxyXG5cdFx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShmaWVsZHNldHMsIGVsID0+IHtcclxuXHJcblx0XHRcdFx0XHRlbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1mb2N1cycsIGVsID09PSBmaWVsZHNldCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBmaWVsZHNldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RvY3MtZm9ybV9fY2F0YWxvZycpICYmIGVsICE9PSBmaWVsZHNldCApIHtcclxuXHJcblx0XHRcdFx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBub21lbmNsYXR1cmVcclxuXHJcblx0XHRcdGlmKGZpZWxkc2V0LmNsYXNzTGlzdC5jb250YWlucygnZG9jcy1mb3JtX19ub21lbmNsYXR1cmUnKSkge1xyXG5cclxuXHRcdFx0XHQvLyBkYXRhbGlzdFxyXG5cclxuXHRcdFx0XHRjb25zdCBkYXRhbGlzdCA9IGZpZWxkc2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb2NzLWZvcm1fX3Jlc3VsdC1kYXRhbGlzdCcpO1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGRhdGFsaXN0LCBidG4gPT4ge1xyXG5cclxuXHRcdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGZpZWxkc2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZvY3VzJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9IGJ0bi50ZXh0Q29udGVudC50cmltKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXNldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdFx0XHRyZXNldC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgdmFsdWUubGVuZ3RoID09PSAwKTtcclxuXHJcblx0XHRcdFx0XHRpZih2YWx1ZS5sZW5ndGggPiAxKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRBcnJheS5mcm9tKGRhdGFsaXN0LCBidG4gPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0ID0gYnRuLnRleHRDb250ZW50LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIHRleHQuaW5kZXhPZih2YWx1ZSkgPT09IC0xKTtcclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0aW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLWVtcHR5Jyk7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdEFycmF5LmZyb20oZGF0YWxpc3QsIGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQvLyByZXNldCA9PT0gY2xlYXJcclxuXHJcblx0XHRcdFx0cmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0QXJyYXkuZnJvbShkYXRhbGlzdCwgYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xyXG5cdFx0XHRcdFx0ZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnaXMtZm9jdXMnKTtcclxuXHRcdFx0XHRcdHJlc2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdGlucHV0LnZhbHVlID0gJyc7XHJcblx0XHRcdFx0XHRpbnB1dC5mb2N1cygpO1xyXG5cdFx0XHRcdFx0Zm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gZGV2ZWxvcGVyXHJcblxyXG5cdFx0XHRpZihmaWVsZHNldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RvY3MtZm9ybV9fZGV2ZWxvcGVyJykpIHtcclxuXHJcblx0XHRcdFx0Ly8gY2hlY2tib3hcclxuXHJcblx0XHRcdFx0Y29uc3QgY2hlY2tib3ggPSBmaWVsZHNldC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3hfX2lucHV0Jyk7XHJcblxyXG5cdFx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmKCBldmVudC50YXJnZXQudHlwZSAhPT0gJ2NoZWNrYm94JyApIHtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0bGV0IHZhbHVlID0gJyc7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBldmVudC50YXJnZXQubmFtZSA9PT0gJ2FsbCcgJiYgZXZlbnQudGFyZ2V0LmNoZWNrZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR2YWx1ZSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnRleHRDb250ZW50LnRyaW0oKTtcclxuXHJcblx0XHRcdFx0XHRcdEFycmF5LmZyb20oY2hlY2tib3gsIGVsID0+IGVsLmNoZWNrZWQgPSB0cnVlKTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0QXJyYXkuZnJvbShjaGVja2JveCwgZWwgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiggZWwubmFtZSA9PT0gJ2FsbCcgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0ZWwuY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmKCBlbC5jaGVja2VkICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGxhYmVsID0gZWwucGFyZW50Tm9kZTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiggdmFsdWUgIT09ICcnICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWUgKz0gJywgJztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWUgKz0gbGFiZWwudGV4dENvbnRlbnQudHJpbSgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aW5wdXQudmFsdWUgPSB2YWx1ZTtcclxuXHJcblx0XHRcdFx0XHRyZXNldC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgdmFsdWUgPT09ICcnKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdC8vIHJlc2V0ID09PSBjbGVhclxyXG5cclxuXHRcdFx0XHRyZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRBcnJheS5mcm9tKGNoZWNrYm94LCBlbCA9PiBlbC5jaGVja2VkID0gZmFsc2UpO1xyXG5cdFx0XHRcdFx0ZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnaXMtZm9jdXMnKTtcclxuXHRcdFx0XHRcdHJlc2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdGlucHV0LnZhbHVlID0gJyc7XHJcblx0XHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRpZiggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kb2NzLWZvcm1fX2ZpZWxkc2V0JykgPT09IG51bGwgKXtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShmaWVsZHNldHMsIGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZvY3VzJywgJ2hpZGUnKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyB0YWJzXHJcblxyXG5cdFx0XHRjb25zdCB0YWJzQnRuID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kb2NzLXBhZ2VfX3RhYnMtaXRlbScpO1xyXG5cclxuXHRcdFx0aWYoIHRhYnNCdG4gKXtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3MtcGFnZV9fdGFicy1pdGVtLmlzLWFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xyXG5cdFx0XHRcdHRhYnNCdG4uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdGlmKCB0YWJzQnRuLmNsYXNzTGlzdC5jb250YWlucygnZG9jcy1wYWdlX190YWJzLWl0ZW0tLXN0YW5kYXJ0cycpICkge1xyXG5cclxuXHRcdFx0XHRcdGFjdGl2ZVRhYlN0YW5kYXJ0cyA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3MtcGFnZV9fZm9ybXMtLXN0YW5kYXJ0cycpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXBhZ2VfX2Zvcm1zLS1hbmFseXRpY3MnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0aWYoZm9ybVNob3J0KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1zZWFyY2gtcmVzdWx0X19zdGFuZGFydHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXNlYXJjaC1yZXN1bHRfX2FuYWx5dGljcycpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYoIHRhYnNCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdkb2NzLXBhZ2VfX3RhYnMtaXRlbS0tYW5hbHl0aWNzJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0YWN0aXZlVGFiU3RhbmRhcnRzID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3MtcGFnZV9fZm9ybXMtLWFuYWx5dGljcycpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXBhZ2VfX2Zvcm1zLS1zdGFuZGFydHMnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0aWYoZm9ybVNob3J0KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1zZWFyY2gtcmVzdWx0X19hbmFseXRpY3MnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXNlYXJjaC1yZXN1bHRfX3N0YW5kYXJ0cycpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGFqYXhcclxuXHJcblx0XHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kb2NzLWFqYXhfX2J0bicpICkge1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1hamF4X19idG4nKS5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdGNvbnN0IHBhZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3MtZm9ybS0tbGlzdCcpLmVsZW1lbnRzWydQQUdFTl8xJ107XHJcblxyXG5cdFx0XHRcdHBhZ2luLnZhbHVlID0gcGFyc2VJbnQocGFnaW4udmFsdWUpICsgMTtcclxuXHJcblx0XHRcdFx0cGFnaW4ucGFyZW50Tm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8g0L/QvtC00LPRgNGD0LfQutCwINGC0L7QstCw0YDQvtCyXHJcblxyXG5cdFx0aWYgKCBzZWFyY2hSZXN1bHRTdGFuZGFydHMuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykgKSB7XHJcblxyXG5cdFx0XHRmZXRjaChzZWFyY2hSZXN1bHQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXRuZGFydHMnKSlcclxuXHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcblx0XHRcdFx0LnRoZW4oaHRtbCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgYm94UmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5cdFx0XHRcdFx0Ym94UmVzdWx0LmlubmVySFRNTCA9IGh0bWw7XHJcblxyXG5cdFx0XHRcdFx0c2VhcmNoUmVzdWx0U3RhbmRhcnRzLmlubmVySFRNTCA9IGJveFJlc3VsdC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1zZWFyY2gtcmVzdWx0X19zdGFuZGFydHMnKS5pbm5lckhUTUw7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHNlYXJjaFJlc3VsdEFuYWx5dGljcy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSApIHtcclxuXHJcblx0XHRcdGZldGNoKHNlYXJjaFJlc3VsdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5hbHl0aWNzJykpXHJcblx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG5cdFx0XHRcdC50aGVuKGh0bWwgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGJveFJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRcdFx0XHRcdGJveFJlc3VsdC5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuXHRcdFx0XHRcdHNlYXJjaFJlc3VsdEFuYWx5dGljcy5pbm5lckhUTUwgPSBib3hSZXN1bHQucXVlcnlTZWxlY3RvcignLmRvY3Mtc2VhcmNoLXJlc3VsdF9fYW5hbHl0aWNzJykuaW5uZXJIVE1MO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb2NzLWZvcm0nKSk7IiwiKCAoKSA9PiB7XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRsZXQgZm9ybSA9IGV2ZW50LnRhcmdldDtcclxuXHJcblx0XHQvLyDQtNC+0LHQsNCy0LjRgtGMINCyINC40LfQsdGA0LDQvdC90L7QtVxyXG5cclxuXHRcdGlmIChmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1hZGQtZmF2b3VyaXRlJykpIHtcclxuXHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0XHQudGhlbihqc29uID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2coanNvbik7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g0LfQsNC/0YDQvtGBINGG0LXQvdGLINCyINGB0L/QuNGB0LrQtSDRgNC10LfRg9C70YzRgtCw0YLQvtCyINCQ0LLRgtC+0YDQuNC30L7QstCw0L1cclxuXHJcblx0XHRpZiAoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0tZ2V0LXByaWNlJykpIHtcclxuXHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRjb25zdCBidG5TdWJtaXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWdldC1wcmljZV9fc3VibWl0Jyk7XHJcblxyXG5cdFx0XHRidG5TdWJtaXQuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oanNvbiA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGpzb24pO1xyXG5cclxuXHRcdFx0XHRidG5TdWJtaXQudGV4dENvbnRlbnQgPSBidG5TdWJtaXQuZ2V0QXR0cmlidXRlKCdkYXRhLWRvbmUnKTtcclxuXHJcblx0XHRcdFx0bm90aWZpY2F0aW9uKGpzb24ubm90aWZpY2F0aW9uVGl0bGUsanNvbi5ub3RpZmljYXRpb25UZXh0LGpzb24ubm90aWZpY2F0aW9uVGltZXIpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcbn0pKCk7IiwiKCBpdGVtcyA9PiB7XHJcblxyXG5cdGlmKCFpdGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShpdGVtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRuID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fc3VibWl0JyksXHJcblx0XHRcdCAgb2tUZXh0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fb2snKSxcclxuXHRcdFx0ICBlcnJvclRleHQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19lcnJvcicpO1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtbG9hZGluZycpO1xyXG5cdFx0XHRidG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcblx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XHJcblx0XHRcdFx0YnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbi8qXHJcblx0XHRcdFx0aWYocmVzdWx0Lm1zZykge1xyXG5cclxuXHRcdFx0XHRcdGZvcm0ucmVzZXQoKTtcclxuXHJcblx0XHRcdFx0XHRtb2RhbC5vayhyZXN1bHQubXNnLnRpdGxlLCByZXN1bHQubXNnLnRleHQpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyDRgNC10LfRg9C70YzRgtCw0YIg0YPRgdC/0LXRhdCwINC30LDRj9Cy0LrQuCBxdWFsaXR5XHJcblxyXG5cdFx0XHRcdGlmKHJlc3VsdC5tb2RhbCA9PT0gJ3F1YWxpdHktb2snKSB7XHJcblxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1YWxpdHktcmVzdWx0X19udW1iZXInKS50ZXh0Q29udGVudCA9IHJlc3VsdC5udW1iZXI7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVhbGl0eS1yZXN1bHRfX3Byb2R1Y3QnKS50ZXh0Q29udGVudCA9IHJlc3VsdC5wcm9kdWN0TmFtZTtcclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWFsaXR5LXJlc3VsdF9fcHJvZHVjdCcpLmdldEF0dHJpYnV0ZSgnaHJlZicsIHJlc3VsdC5wcm9kdWN0TGluayk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgZXZlbnRNb2RhbFNob3cgPSBuZXcgQ3VzdG9tRXZlbnQoXCJtb2RhbFNob3dcIiwge1xyXG5cdFx0XHRcdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRcdFx0XHRzZWxlY3RvcjogcmVzdWx0Lm1vZGFsXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdHdpbmRvdy5tb2RhbC5kaXNwYXRjaEV2ZW50KGV2ZW50TW9kYWxTaG93KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaW5mbyBtb2RhbFxyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQudHlwZSA9PT0gJ29rJyB8fCByZXN1bHQudHlwZSA9PT0gJ2Vycm9yJykge1xyXG5cclxuXHRcdFx0XHRcdG1vZGFsLm9rKHJlc3VsdC50aXRsZSwgcmVzdWx0LnRleHQsIHJlc3VsdC5tb2QpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBvayBpbiBmb3JtXHJcblxyXG5cdFx0XHRcdGlmKG9rVGV4dCkge1xyXG5cclxuXHRcdFx0XHRcdGlmKHJlc3VsdC50eXBlID09PSAnZm9ybS1vaycpIHtcclxuXHJcblx0XHRcdFx0XHRcdG9rVGV4dC50ZXh0Q29udGVudCA9IHJlc3VsdC50ZXh0O1xyXG5cdFx0XHRcdFx0XHRva1RleHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYoIUlOVEkuaXNJblZpZXdwb3J0KG9rVGV4dCkpe1xyXG5cclxuXHRcdFx0XHRcdFx0XHRva1RleHQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdG9rVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBlcnJvciBpbiBmb3JtXHJcblxyXG5cdFx0XHRcdGlmKGVycm9yVGV4dCkge1xyXG5cclxuXHRcdFx0XHRcdGlmKHJlc3VsdC50eXBlID09PSAnZm9ybS1lcnJvcicpIHtcclxuXHJcblx0XHRcdFx0XHRcdGVycm9yVGV4dC50ZXh0Q29udGVudCA9IHJlc3VsdC50ZXh0O1xyXG5cdFx0XHRcdFx0XHRlcnJvclRleHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYoIUlOVEkuaXNJblZpZXdwb3J0KGVycm9yVGV4dCkpe1xyXG5cclxuXHRcdFx0XHRcdFx0XHRlcnJvclRleHQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdGVycm9yVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyByZWRpcmVjdFxyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQucmVkaXJlY3QpIHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBkZWxheSA9IHJlc3VsdC5yZWRpcmVjdERlbGF5ID8gcmVzdWx0LnJlZGlyZWN0RGVsYXkgKiAxMDAwIDogMDtcclxuXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKT0+IGxvY2F0aW9uLmFzc2lnbihyZXN1bHQucmVkaXJlY3QpLCBkZWxheSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGZhZGVvdXRcclxuXHJcblx0XHRcdFx0aWYocmVzdWx0LmZhZGVvdXQpIHtcclxuXHJcblx0XHRcdFx0XHRva1RleHQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZmFkZW91dCcpO1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoICgpPT4gb2tUZXh0LmNsYXNzTGlzdC5hZGQoJ2lzLWZhZGVvdXQnKSwgcmVzdWx0LmZhZGVvdXQgKiAxMDAwKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gcmVzZXRcclxuXHJcblx0XHRcdFx0aWYocmVzdWx0LnJlc2V0KSB7XHJcblxyXG5cdFx0XHRcdFx0Zm9ybS5yZXNldCgpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyByZWxvYWRcclxuXHJcblx0XHRcdFx0aWYocmVzdWx0LnJlZnJlc2gpIHtcclxuXHJcblx0XHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcclxuXHJcblx0XHRcdFx0fVxyXG4qL1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybScpKTtcclxuXHJcbiggZmlsZXMgPT4ge1xyXG5cclxuXHRpZighZmlsZXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oZmlsZXMsIGVsID0+IHtcclxuXHJcblx0XHRjb25zdCBpbnB1dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1maWxlX19pbnB1dCcpLFxyXG5cdFx0XHQgIHZhbHVlID0gZWwucXVlcnlTZWxlY3RvcignLmlucHV0LWZpbGVfX3ZhbHVlJyk7XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnaXMtY2hhbmdlJyk7XHJcblx0XHRcdHZhbHVlLnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWZpbGUnKSk7IiwiKCBmb3JtR2V0UHJpY2UgPT4ge1xyXG5cclxuXHRpZiAoIGZvcm1HZXRQcmljZSA9PT0gbnVsbCApIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Ly8g0LrQu9C40LrQtSDQsiDRgNC10LfRg9C70YzRgtCw0YLQsNGFINC/0L7QuNGB0LrQsCDQv9C+INC60L3QvtC/0LrQtSDQo9C30L3QsNGC0Ywg0YHRgtC+0LjQvNC+0YHRgtGMXHJcblxyXG5cdGNvbnN0IHNlYXJjaFJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXNlYXJjaC1yZXN1bHQnKTtcclxuXHJcblx0aWYgKCBzZWFyY2hSZXN1bHQgKSB7XHJcblxyXG5cdFx0c2VhcmNoUmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0aWYoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZG9jcy1jYXRhbG9nLWl0ZW1fX3JlcXVlc3RbZGF0YS1tb2RhbD1cImdldC1wcmljZVwiXScpICkge1xyXG5cclxuXHRcdFx0XHRmb3JtR2V0UHJpY2UuZWxlbWVudHMuaWQudmFsdWUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmRvY3MtY2F0YWxvZy1pdGVtX19yZXF1ZXN0W2RhdGEtbW9kYWw9XCJnZXQtcHJpY2VcIl0nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHQvLyDQvtCx0YDQsNCx0L7RgtC60LAg0YTQvtGA0LzRiyDQsiDQvNC+0LTQsNC70LrQtVxyXG5cclxuXHRmb3JtR2V0UHJpY2UuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdH0pXHJcblx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHQudGhlbihqc29uID0+IHtcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKGpzb24pO1xyXG5cclxuXHRcdFx0aWYoIGpzb24uaWQgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGJ0blRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kb2NzLWNhdGFsb2ctaXRlbV9fcmVxdWVzdFtkYXRhLWlkPVwiJHtqc29uLmlkfVwiXWApO1xyXG5cclxuXHRcdFx0XHRidG5UYXJnZXQudGV4dENvbnRlbnQgPSBidG5UYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWRvbmUnKTtcclxuXHRcdFx0XHRidG5UYXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bm90aWZpY2F0aW9uKGpzb24ubm90aWZpY2F0aW9uVGl0bGUsanNvbi5ub3RpZmljYXRpb25UZXh0LGpzb24ubm90aWZpY2F0aW9uVGltZXIpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLWdldC1wcmljZScpKTsiLCJcclxuKCBwYWdlID0+IHtcclxuXHJcblx0aWYocGFnZSkge1xyXG5cclxuXHRcdGxldCBmb3JtU2hvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5zaWdodHMtcGFnZS0tc2hvcnQnKTtcclxuXHJcblx0XHRjb25zdCBzZWFyY2hSZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5zaWdodHMtc2VhcmNoLXJlc3VsdCcpLFxyXG5cdFx0XHQgIGJveCA9IHBhZ2UucXVlcnlTZWxlY3RvcignLmluc2lnaHRzLXBhZ2VfX2JveCcpLFxyXG5cdFx0XHQgIGZvcm0gPSBwYWdlLnF1ZXJ5U2VsZWN0b3IoJy5pbnNpZ2h0cy1mb3JtJyksXHJcblx0XHRcdCAgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5pbnNpZ2h0cy1mb3JtX19pbnB1dCcpLFxyXG5cdFx0XHQgIGNvdW50cnkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnNpZ2h0cy1mb3JtLWZpbHRlci1jaGVja2JveC1ncm91cCcpO1xyXG5cclxuXHRcdC8vINC60L3QvtC/0LrQsCDQutCw0YLQsNC70L7Qs1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0aWYoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuaW5zaWdodHMtY2F0ZWdvcnktbGlzdCcpID09PSBudWxsICl7XHJcblxyXG5cdFx0XHRcdGlmKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLmluc2lnaHRzLXBhZ2VfX2J0bi1jYXRhbG9nJykgKXtcclxuXHJcblx0XHRcdFx0XHRib3guY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3Blbi1jYXRlZ29yeScpO1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdGJveC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuLWNhdGVnb3J5Jyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vINCyINC60LDRgtCw0LvQvtCz0LUg0YDQsNC30LLQtdGA0L3Rg9GC0Ywg0YHQv9C40YHQutC4XHJcblxyXG5cdFx0XHRpZiggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5pbnNpZ2h0cy1jYXRlZ29yeS1saXN0X19pdGVtJykgJiYgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5pbnNpZ2h0cy1jYXRlZ29yeS1saXN0X19saW5rJykgPT09IG51bGwgKSB7XHJcblxyXG5cdFx0XHRcdGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuaW5zaWdodHMtY2F0ZWdvcnktbGlzdF9faXRlbScpLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vINGD0LHQuNGA0LDQtdC8INGE0L7QutGD0YFcclxuXHJcblx0XHRcdGlmKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLmluc2lnaHRzLWZvcm0nKSA9PT0gbnVsbCApIHtcclxuXHJcblx0XHRcdFx0Ym94LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4tZmlsdGVyJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyDRhNC40LvRjNGC0YAg0LIg0LLRi9C00LDRh9C1XHJcblxyXG5cdFx0XHRpZiAoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuaW5zaWdodHMtY2F0YWxvZy1maWx0ZXJfX2l0ZW0nKSA9PT0gbnVsbCApIHtcclxuXHJcblx0XHRcdFx0Y29uc3Qgb3BlbkJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnNpZ2h0cy1jYXRhbG9nLWZpbHRlcl9fYnRuLmlzLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0aWYgKG9wZW5Cb3gpIHtcclxuXHJcblx0XHRcdFx0XHRvcGVuQm94LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIGlucHV0XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcclxuXHJcblx0XHRcdGJveC5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuLWZpbHRlcicpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIGNoYW5nZVxyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coZm9ybSwgJ2NoYW5nZScpO1xyXG5cclxuXHRcdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG5cdFx0XHRjb25zdCBxdWVyeVN0cmluZyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoZm9ybURhdGEpLnRvU3RyaW5nKCk7XHJcblxyXG5cdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZSh1bmRlZmluZWQsICcnLCAnPycgKyBxdWVyeVN0cmluZyk7XHJcblxyXG5cdFx0XHRzZWFyY2hSZXN1bHQuY2xhc3NMaXN0LmFkZCgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0Ym9keTogZm9ybURhdGFcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG5cdFx0XHQudGhlbihodG1sID0+IHtcclxuXHJcblx0XHRcdFx0c2VhcmNoUmVzdWx0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKTtcclxuXHJcblx0XHRcdFx0aWYoZm9ybVNob3J0ID09PSBudWxsKSB7XHJcblxyXG5cdFx0XHRcdFx0Zm9ybVNob3J0ID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5zaWdodHMtcGFnZScpLmNsYXNzTGlzdC5hZGQoJ2luc2lnaHRzLXBhZ2UtLXNob3J0Jyk7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5zaWdodHMtcGFnZV9fZGVzY3JpcHRpb24nKS5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnNpZ2h0cy1jYXRlZ29yeScpLnJlbW92ZSgpO1xyXG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluc2lnaHRzLWluZm8nKS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gaW5wdXQga2V5dXBcclxuXHJcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtbm9lbXB0eScsIGlucHV0LnZhbHVlLmxlbmd0aCA+IDApO1xyXG5cclxuXHRcdFx0aWYoaW5wdXQudmFsdWUubGVuZ3RoID4gMiAmJiBldmVudC5rZXkgIT09ICdlbnRlcicpe1xyXG5cclxuXHRcdFx0XHRzZWFyY2hSZXN1bHQuY2xhc3NMaXN0LmFkZCgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcblx0XHRcdFx0LnRoZW4oaHRtbCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coaHRtbCk7XHJcblxyXG5cdFx0XHRcdFx0c2VhcmNoUmVzdWx0LmlubmVySFRNTCA9IGh0bWw7XHJcblx0XHRcdFx0XHRzZWFyY2hSZXN1bHQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyByZXNldFxyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW5vZW1wdHknKTtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoICgpPT4ge1xyXG5cclxuXHRcdFx0XHRpbnB1dC52YWx1ZSA9ICcnO1xyXG5cdFx0XHRcdGlucHV0LmZvY3VzKCk7XHJcblxyXG5cdFx0XHR9LDEwMCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8g0LPRgNGD0L/Qv9GLINGB0YLRgNCw0L0g0L/QviDQutC+0L3RgtC40L3QtdC90YLQsNC8XHJcblxyXG5cdFx0QXJyYXkuZnJvbShjb3VudHJ5LCBlbCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBncm91cCA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnNpZ2h0cy1mb3JtLWZpbHRlci1jaGVja2JveC1ncm91cF9faXRlbScpLFxyXG5cdFx0XHRcdCAgY2hlY2tib3ggPSBlbC5xdWVyeVNlbGVjdG9yKCcuaW5zaWdodHMtZm9ybS1maWx0ZXItY2hlY2tib3gtZ3JvdXBfX3RyaWdnZXInKTtcclxuXHJcblx0XHRcdGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oZ3JvdXAsIGVsID0+IGVsLmNoZWNrZWQgPSBjaGVja2JveC5jaGVja2VkKTtcclxuXHJcblx0XHRcdFx0Zm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBzZWFyY2hSZXN1bHRcclxuXHJcblx0XHRzZWFyY2hSZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcclxuXHJcblx0XHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCxcclxuXHRcdFx0XHQgIGZpbHRlciA9IHRhcmdldC5jbG9zZXN0KCcuaW5zaWdodHMtY2F0YWxvZy1maWx0ZXInKTtcclxuXHJcblx0XHRcdC8vINGE0LjQu9GM0YLRgCDQsiDQstGL0LTQsNGH0LVcclxuXHJcblx0XHRcdGlmICggZmlsdGVyICkge1xyXG5cclxuXHRcdFx0XHRpZiggdGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcgKSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8g0JLRgdC1XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgbmFtZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSxcclxuXHRcdFx0XHRcdFx0ICBidG5BbGwgPSBmaWx0ZXIucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIicgKyBuYW1lICsgJ1wiXVt2YWx1ZT1cImFsbFwiXScpO1xyXG5cclxuXHRcdFx0XHRcdGlmICggYnRuQWxsICkge1xyXG5cclxuXHRcdFx0XHRcdFx0Y29uc3QgbGlzdCA9IEFycmF5LmZyb20oZmlsdGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCInICsgbmFtZSArICdcIl0nKSkuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBidG5BbGwpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCB0YXJnZXQgPT09IGJ0bkFsbCApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0QXJyYXkuZnJvbShsaXN0LCBpbnB1dCA9PiBpbnB1dC5jaGVja2VkID0gYnRuQWxsLmNoZWNrZWQpO1xyXG5cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0YnRuQWxsLmNoZWNrZWQgPSBsaXN0LmV2ZXJ5KCBpbnB1dCA9PiBpbnB1dC5jaGVja2VkID09PSB0cnVlICk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyDQoNC10LnRgtC40L3Qs1xyXG5cclxuXHRcdFx0aWYgKCB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnNpZ2h0cy1jYXRhbG9nLWZpbHRlcl9fcmF0aW5nJykgKSB7XHJcblxyXG5cdFx0XHRcdGZvcm0uZWxlbWVudHNbdGFyZ2V0LmdldEF0dHJpYnV0ZSgnbmFtZScpXS52YWx1ZSA9IHRhcmdldC52YWx1ZTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vINCf0YDQvtC40LfQstC+0LTQuNGC0LXQu9GMXHJcblxyXG5cdFx0XHRpZiAoIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2luc2lnaHRzLWNhdGFsb2ctZmlsdGVyX19tYW51ZmFjdHVyZXInKSApIHtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShzZWFyY2hSZXN1bHQucXVlcnlTZWxlY3RvckFsbCgnLmluc2lnaHRzLWNhdGFsb2ctZmlsdGVyX19tYW51ZmFjdHVyZXInKSwgaW5wdXQgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGhpZGRlbkNvbnRyb2wgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiJyArIGlucHV0LmdldEF0dHJpYnV0ZSgnbmFtZScpICsgJ1wiXVt2YWx1ZT1cIicgKyBpbnB1dC52YWx1ZSArICdcIl0nKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGlucHV0LmNoZWNrZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIGhpZGRlbkNvbnRyb2wgPT09IG51bGwgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGhpZGRlbkNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRoaWRkZW5Db250cm9sLnR5cGUgPSAnaGlkZGVuJztcclxuXHRcdFx0XHRcdFx0XHRoaWRkZW5Db250cm9sLnZhbHVlID0gaW5wdXQudmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0aGlkZGVuQ29udHJvbC5uYW1lID0gaW5wdXQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGZvcm0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlckJlZ2luJywgaGlkZGVuQ29udHJvbCk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChoaWRkZW5Db250cm9sKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRoaWRkZW5Db250cm9sLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyDQn9GA0L7QtNGD0LrRglxyXG5cclxuXHRcdFx0aWYgKCB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnNpZ2h0cy1jYXRhbG9nLWZpbHRlcl9fY2F0JykgKSB7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oc2VhcmNoUmVzdWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnNpZ2h0cy1jYXRhbG9nLWZpbHRlcl9fY2F0JyksIGlucHV0ID0+IHtcclxuXHJcblx0XHRcdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiJyArIGlucHV0LmdldEF0dHJpYnV0ZSgnbmFtZScpICsgJ1wiXVt2YWx1ZT1cIicgKyBpbnB1dC52YWx1ZSArICdcIl0nKS5jaGVja2VkID0gaW5wdXQuY2hlY2tlZDtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyDQkdC40LfQvdC10YFcclxuXHJcblx0XHRcdGlmICggdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaW5zaWdodHMtY2F0YWxvZy1maWx0ZXJfX2Jpc25lc3MnKSApIHtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShzZWFyY2hSZXN1bHQucXVlcnlTZWxlY3RvckFsbCgnLmluc2lnaHRzLWNhdGFsb2ctZmlsdGVyX19iaXNuZXNzJyksIGlucHV0ID0+IHtcclxuXHJcblx0XHRcdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiJyArIGlucHV0LmdldEF0dHJpYnV0ZSgnbmFtZScpICsgJ1wiXVt2YWx1ZT1cIicgKyBpbnB1dC52YWx1ZSArICdcIl0nKS5jaGVja2VkID0gaW5wdXQuY2hlY2tlZDtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyDQoNC10LPQuNC+0L1cclxuXHJcblx0XHRcdGlmICggdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaW5zaWdodHMtY2F0YWxvZy1maWx0ZXJfX2NvdW50cnknKSApIHtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShzZWFyY2hSZXN1bHQucXVlcnlTZWxlY3RvckFsbCgnLmluc2lnaHRzLWNhdGFsb2ctZmlsdGVyX19jb3VudHJ5JyksIGlucHV0ID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGlucHV0LnZhbHVlICE9PSAnYWxsJyApIHtcclxuXHJcblx0XHRcdFx0XHRcdGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCInICsgaW5wdXQuZ2V0QXR0cmlidXRlKCduYW1lJykgKyAnXCJdW3ZhbHVlPVwiJyArIGlucHV0LnZhbHVlICsgJ1wiXScpLmNoZWNrZWQgPSBpbnB1dC5jaGVja2VkO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRzZWFyY2hSZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQsXHJcblx0XHRcdFx0ICBidG5GaWx0ZXIgPSB0YXJnZXQuY2xvc2VzdCgnLmluc2lnaHRzLWNhdGFsb2ctZmlsdGVyX19idG4nKTtcclxuXHJcblx0XHRcdC8vINGE0LjQu9GM0YLRgCDQutC90L7Qv9C60LBcclxuXHJcblx0XHRcdGlmKCBidG5GaWx0ZXIgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGJveFRhcmdldCA9IGJ0bkZpbHRlci5jbG9zZXN0KCcuaW5zaWdodHMtY2F0YWxvZy1maWx0ZXJfX2l0ZW0nKSxcclxuXHRcdFx0XHRcdCAgbGlzdCA9IHNlYXJjaFJlc3VsdC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5zaWdodHMtY2F0YWxvZy1maWx0ZXJfX2l0ZW0nKTtcclxuXHJcblx0XHRcdFx0Ly8gcmVzZXQg0LrQvdC+0L/QutCwXHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20obGlzdCwgaXRlbSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBpdGVtID09PSBib3hUYXJnZXQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIHRhcmdldC5jbG9zZXN0KCcuaW5zaWdodHMtY2F0YWxvZy1maWx0ZXJfX2J0bi1yZXNldCcpICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5pbnNpZ2h0cy1jYXRhbG9nLWZpbHRlcl9fYnRuJykuY2xhc3NMaXN0LnJlbW92ZSgnaXMtY2hlY2tlZCcpO1xyXG5cdFx0XHRcdFx0XHRcdGl0ZW0ucXVlcnlTZWxlY3RvcignLmluc2lnaHRzLWNhdGFsb2ctZmlsdGVyX19idG4tcmVzZXQnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0aXRlbS5xdWVyeVNlbGVjdG9yKCcuaW5zaWdodHMtY2F0YWxvZy1maWx0ZXJfX2J0bi1jb3VudCcpICYmIGl0ZW0ucXVlcnlTZWxlY3RvcignLmluc2lnaHRzLWNhdGFsb2ctZmlsdGVyX19idG4tY291bnQnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRidG5GaWx0ZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5pbnNpZ2h0cy1jYXRhbG9nLWZpbHRlcl9fYnRuJykuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnNpZ2h0cy1wYWdlJykpOyIsIiggZm9ybXMgPT4ge1xyXG5cclxuXHRpZighZm9ybXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG4vKlx0QXJyYXkuZnJvbShmb3JtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5saXZlLXNlYXJjaF9faW5wdXQnKSxcclxuXHRcdFx0ICByZXN1bHQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5saXZlLXNlYXJjaF9fcmVzdWx0Jyk7XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRpZihpbnB1dC52YWx1ZS5sZW5ndGggPiAyICYmIGV2ZW50LmtleSAhPT0gJ2VudGVyJyl7XHJcblxyXG5cdFx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnbGl2ZS1zZWFyY2gtLWxvYWRpbmcnLCAnbGl2ZS1zZWFyY2gtLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG5cdFx0XHRcdC50aGVuKGh0bWwgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGh0bWwpO1xyXG5cclxuXHRcdFx0XHRcdHJlc3VsdC5pbm5lckhUTUwgPSBodG1sO1xyXG5cdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdsaXZlLXNlYXJjaC0tbG9hZGluZycpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINGB0LrRgNGL0YLRjCDRgNGD0LfQtdC70YzRgtCw0YLRiyDQv9GA0Lgg0LrQu9C40LrQtSDQstC90LUg0YTQvtGA0LzRi1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCBpc0Zvcm0gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmxpdmUtc2VhcmNoJyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShmb3JtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0XHRpZihpc0Zvcm0gIT09IGZvcm0pIHtcclxuXHJcblx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdsaXZlLXNlYXJjaC0tb3BlbicpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTsqL1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpdmUtc2VhcmNoJykpOyIsIiggcGFnZSA9PiB7XHJcblxyXG5cdGlmKHBhZ2UpIHtcclxuXHJcblx0XHRjb25zdCBjb250ZW50ID0gcGFnZS5xdWVyeVNlbGVjdG9yKCcubWFpbi1wYWdlX19jb250ZW50Jyk7XHJcblxyXG5cdFx0aWYgKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XHJcblxyXG5cdFx0XHRjb25zdCBjYWxsYmFjayA9IChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGVudHJpZXMsIGVudHJ5ID0+IHtcclxuXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrLCB7XHJcblx0XHRcdFx0dGhyZXNob2xkOiAxXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0b2JzZXJ2ZXIub2JzZXJ2ZShjb250ZW50KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXBhZ2UnKSk7IiwiKCBlbGVtcyA9PiB7XHJcblxyXG5cdGlmKCFlbGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblx0c2NyaXB0LnNyYyA9ICcvanMvaW5wdXRtYXNrLm1pbi5qcyc7XHJcblx0c2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcclxuXHJcblx0XHRBcnJheS5mcm9tKGVsZW1zLCBlbCA9PiB7XHJcblxyXG5cdFx0XHRsZXQgbWFza0lucHV0O1xyXG5cclxuXHRcdFx0aWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dG1hc2stLXBob25lJykpIHtcclxuXHJcblx0XHRcdFx0bWFza0lucHV0ID0gbmV3IElucHV0bWFzayh7XHJcblx0XHRcdFx0XHRtYXNrOiBcIis3ICg5OTkpIDk5OSA5OSA5OVwiLFxyXG5cdFx0XHRcdFx0c2hvd01hc2tPbkhvdmVyOiBmYWxzZVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bWFza0lucHV0Lm1hc2soZWwpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9O1xyXG5cclxuXHRzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCksIENvb2tpZXMuZ2V0KCdmYXN0TG9hZFNjcmlwdCcpID8gMCA6IDEwMDAwKTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dG1hc2snKSk7IiwiLy8gYnRuIHRvZ2dsZVxyXG5cclxuLyooIGJ0biA9PiB7XHJcblxyXG5cdGlmKGJ0bikge1xyXG5cclxuXHRcdGxldCB3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtc2hvdycpKSB7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zaG93Jyk7XHJcblx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsd2luZG93U2Nyb2xsKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtZW51LXNob3cnKTtcclxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1tZW51LXRvZ2dsZScpKTtcclxuKi9cclxuLy8gbWVudSBzZXJ2aWNlXHJcblxyXG4oIG1lbnUgPT4ge1xyXG5cclxuXHRpZihtZW51KSB7XHJcblxyXG5cdFx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLFxyXG5cdFx0XHQgIG1lbnVVc2VyID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3VzZXInKTtcclxuXHJcblx0XHRoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgaXRlbSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubWVudV9faXRlbScpO1xyXG5cclxuXHRcdFx0aWYoaXRlbSAhPT0gbnVsbCkge1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtc2VydmljZS1zaG93JywgaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnVfX3NlcnZpY2UnKSk7XHJcblx0XHRcdFx0bWVudVVzZXIgJiYgbWVudVVzZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXNlcnZpY2Utc2hvdycpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHJcblx0XHQvLyBtZW51IHVzZXJcclxuXHJcblx0XHRpZihtZW51VXNlcikge1xyXG5cclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdGlmKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLmhlYWRlcl9fdXNlci1idG4nKSApe1xyXG5cclxuXHRcdFx0XHRcdG1lbnVVc2VyLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLmhlYWRlcl9fdXNlcicpID09PSBudWxsICl7XHJcblxyXG5cdFx0XHRcdFx0bWVudVVzZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXNlcnZpY2UnKSk7XHJcblxyXG5cclxuLy8gc2Nyb2xsXHJcblxyXG4oIGhlYWRlciAgPT4ge1xyXG5cclxuXHRpZihoZWFkZXIpIHtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1zaG93JykgPT09IGZhbHNlICYmIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LXNob3cnKSA9PT0gZmFsc2UpIHtcclxuXHJcblx0XHRcdFx0XHRoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyLS1yZWR1Y2UnLCB3aW5kb3cucGFnZVlPZmZzZXQgPiAwKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKSk7IiwiKCBtb2RhbCA9PiB7XHJcblxyXG5cdGlmKCFtb2RhbCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBpdGVtcyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9faXRlbScpLFxyXG5cdFx0ICBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWxdJyksXHJcblx0XHQgIHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpLFxyXG5cdFx0ICBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XHJcblxyXG5cdGxldCBhY3RpdmVNb2RhbCA9IG51bGwsXHJcblx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUnLCAoKSA9PiB7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1zaG93Jyk7XHJcblx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IDA7XHJcblx0XHRoZWFkZXIuc3R5bGUudG9wID0gMDtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLHdpbmRvd1Njcm9sbCk7XHJcblx0XHRhY3RpdmVNb2RhbCA9IGZhbHNlO1xyXG5cclxuXHR9KTtcclxuXHJcblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcblxyXG5cdFx0XHRtb2RhbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImhpZGVcIikpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IG1vZGFsU2hvdyA9IHNlbGVjdG9yID0+IHtcclxuXHJcblx0XHRpZighYWN0aXZlTW9kYWwpe1xyXG5cclxuXHRcdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3NlYXJjaC1vcGVuJywgc2VsZWN0b3IgPT09ICdzZWFyY2gnKTtcclxuXHJcblx0XHRhY3RpdmVNb2RhbCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tJyArIHNlbGVjdG9yKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGl0ZW1zLCBlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCd2aXN1YWxseWhpZGRlbicsIGVsICE9PSBhY3RpdmVNb2RhbCkpO1xyXG5cclxuXHRcdHdyYXBwZXIuc3R5bGUudG9wID0gLXdpbmRvd1Njcm9sbCArICdweCc7XHJcblx0XHRoZWFkZXIuc3R5bGUudG9wID0gd2luZG93U2Nyb2xsICsgJ3B4JztcclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtc2hvdycpO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsMCk7XHJcblxyXG5cdFx0YWN0aXZlTW9kYWwuZm9jdXMoKTtcclxuXHJcblx0XHRQdWJTdWIucHVibGlzaCgnb3Blbi0nICsgc2VsZWN0b3IpO1xyXG5cclxuXHR9O1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZiggKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsJykgJiYgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlYXJjaC1vcGVuJykgPT09IGZhbHNlKSB8fCBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1vZGFsX19jbG9zZScpKXtcclxuXHJcblx0XHRcdG1vZGFsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiaGlkZVwiKSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0bGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHJcblx0XHR3aGlsZSAodGFyZ2V0ICE9PSBkb2N1bWVudCkge1xyXG5cclxuXHRcdFx0aWYgKHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwnKSkge1xyXG5cclxuXHRcdFx0XHRtb2RhbFNob3codGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ21vZGFsU2hvdycsIGV2ZW50ID0+IG1vZGFsU2hvdyhldmVudC5kZXRhaWwuc2VsZWN0b3IpKTtcclxuXHJcblx0bW9kYWwub2sgPSAodGl0bGUsIHRleHQsIG1vZCA9ICcnKSA9PiB7XHJcblxyXG5cdFx0bW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS1vaycpLnNldEF0dHJpYnV0ZSgnZGF0YS1tb2QnLCBtb2QpO1xyXG5cdFx0bW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS1vayAubW9kYWwtbWluaV9fdGl0bGUnKS5pbm5lckhUTUwgPSB0aXRsZSA/IHRpdGxlIDogJyc7XHJcblx0XHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLW9rIC5tb2RhbC1taW5pX190ZXh0JykuaW5uZXJIVE1MID0gdGV4dCA/IHRleHQgOiAnJztcclxuXHRcdG1vZGFsU2hvdygnb2snKTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykpOyIsIiggbm90aWZpY2F0aW9uID0+IHtcblxuXHRpZighbm90aWZpY2F0aW9uKSB7XG5cblx0XHRyZXR1cm47XG5cblx0fVxuXG5cdGNvbnN0IGJveCA9IG5vdGlmaWNhdGlvbi5xdWVyeVNlbGVjdG9yKCcuY2VudGVyJyksXG5cdFx0ICB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RpZmljYXRpb24tdGVtcGxhdGUnKS5pbm5lckhUTUw7XG5cblx0d2luZG93Lm5vdGlmaWNhdGlvbiA9IChoZWFkLCB0ZXh0LCB0aW1lciA9IDMuMykgPT4ge1xuXG5cdFx0Ym94Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLCB7IGhlYWQsIHRleHQgfSkpO1xuXG5cdFx0Y29uc3QgaXRlbSA9IGJveC5xdWVyeVNlbGVjdG9yKCcuaXMtbmV3Jyk7XG5cblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XG5cblx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtbmV3Jyk7XG5cdFx0XHRpdGVtLnN0eWxlLmhlaWdodCA9IGl0ZW0uY2xpZW50SGVpZ2h0ICsgJ3B4JztcblxuXHRcdH0sIDEwMCk7XG5cblx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LmNzc0FuaW1hdGlvbigndHJhbnNpdGlvbicpLCAoKSA9PiB7XG5cblx0XHRcdGlmKCBpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaXMtaGlkZScpICl7XG5cblx0XHRcdFx0aXRlbS5yZW1vdmUoKTtcblxuXHRcdFx0fVxuXG5cdFx0fSk7XG5cblx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGUnKTtcblxuXHRcdH0pO1xuXG5cdFx0c2V0VGltZW91dCggKCk9PiB7XG5cblx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtaGlkZScpO1xuXG5cdFx0fSwgMTAwMCAqIHRpbWVyKTtcblxuXHR9XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb24nKSk7IiwiKCBmb3JtID0+IHtcclxuXHJcblx0aWYoIWZvcm0pIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2lucHV0JyksXHJcblx0XHQgIHJlc3VsdCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLnNlYXJjaF9fcmVzdWx0LWlubmVyJyk7XHJcblxyXG5cdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKGlucHV0LnZhbHVlLmxlbmd0aCA+IDIgJiYgZXZlbnQua2V5ICE9PSAnZW50ZXInKXtcclxuXHJcblx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcblx0XHRcdC50aGVuKGh0bWwgPT4ge1xyXG5cclxuXHRcdFx0XHRyZXN1bHQuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHNldEhlaWdodCA9ICgpID0+IHtcclxuXHJcblx0XHRjb25zdCByZWN0ID0gcmVzdWx0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0cmVzdWx0LnN0eWxlLm1heEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHJlY3QudG9wICsgJ3B4JztcclxuXHJcblx0fTtcclxuXHJcblx0UHViU3ViLnN1YnNjcmliZSgnb3Blbi1zZWFyY2gnLCAoKSA9PiB7XHJcblxyXG5cdFx0aW5wdXQuZm9jdXMoKTtcclxuXHJcblx0XHRzZXRIZWlnaHQoKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdFB1YlN1Yi5zdWJzY3JpYmUoJ3dpbmRvd1dpZHRoUmVzaXplJywgKCkgPT4gc2V0SGVpZ2h0KCkpO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaCcpKTsiLCJ3aW5kb3cuc2VsZWN0cyA9IHNlbGVjdCA9PiB7XHJcblxyXG5cdGlmKHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19saXN0JykpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgdmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdCAgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG5cdGFycm93LmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMjlcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjkgMjRcIj48cGF0aCBkPVwibTkuODUgOSA0LjUgNSA0LjUtNWgtOVpcIi8+PC9zdmc+JztcclxuXHJcblx0dmFsdWUuY2xhc3NOYW1lID0gJ3NlbGVjdF9fdmFsdWUnO1xyXG5cdHZhbHVlLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cInNlbGVjdF9fdmFsdWUtaW5uZXJcIj48L3NwYW4+JztcclxuXHJcblx0dmFsdWUuYXBwZW5kQ2hpbGQoYXJyb3cpO1xyXG5cdHNlbGVjdC5hcHBlbmRDaGlsZCh2YWx1ZSk7XHJcblxyXG5cdGNvbnN0IGZvcm0gPSBzZWxlY3QuY2xvc2VzdCgnZm9ybScpLFxyXG5cdFx0Y29udHJvbCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcclxuXHRcdG9wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKSxcclxuXHRcdHZhbHVlVGV4dCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X192YWx1ZS1pbm5lcicpLFxyXG5cdFx0ZmlsdGVyID0gc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0LS1maWx0ZXInKSxcclxuXHRcdGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblx0bGlzdC5jbGFzc05hbWUgPSAnc2VsZWN0X19saXN0JztcclxuXHJcblx0bGV0IHNlbGVjdGVkID0gY29udHJvbC5xdWVyeVNlbGVjdG9yKCdbdmFsdWU9XCInICsgY29udHJvbC52YWx1ZSArICdcIl0nKTtcclxuXHJcblx0Y29udHJvbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuXHJcblx0XHRzZWxlY3RlZCA9IGNvbnRyb2wucXVlcnlTZWxlY3RvcignW3ZhbHVlPVwiJyArIGNvbnRyb2wudmFsdWUgKyAnXCJdJyk7XHJcblxyXG5cdFx0dmFsdWVUZXh0LnRleHRDb250ZW50ID0gc2VsZWN0ZWQudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdC0tZGVmYXVsdCcpO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Y29uc3QgdmFsdWVEZWZhdWx0ID0gc2VsZWN0ZWQudGV4dENvbnRlbnQ7XHJcblxyXG5cdGlmKGNvbnRyb2wuZGlzYWJsZWQpe1xyXG5cclxuXHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtLWRpc2FibGVkJyk7XHJcblxyXG5cdH1cclxuXHJcblx0aWYoY29udHJvbC52YWx1ZSA9PT0gJ25vbmUnIHx8IGNvbnRyb2wudmFsdWUgPT09ICcnKXtcclxuXHJcblx0XHRzZWxlY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LS1kZWZhdWx0Jyk7XHJcblxyXG5cdH1cclxuXHJcblx0aWYgKGNvbnRyb2wudmFsdWUgIT09ICcnKSB7XHJcblxyXG5cdFx0dmFsdWVUZXh0LnRleHRDb250ZW50ID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJ29wdGlvblt2YWx1ZT1cIicgKyBjb250cm9sLnZhbHVlICsgJ1wiXScpLnRleHRDb250ZW50O1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20ob3B0aW9uLCBlbCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuXHRcdG8uY2xhc3NOYW1lID0gJ2J1dHRvbiBzZWxlY3RfX2xpc3QtaXRlbSc7XHJcblxyXG5cdFx0by5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcblx0XHRvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBlbC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpO1xyXG5cclxuXHRcdG8udGV4dENvbnRlbnQgPSBlbC50ZXh0Q29udGVudDtcclxuXHJcblx0XHRsaXN0LmFwcGVuZENoaWxkKG8pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0aWYoZmlsdGVyKXtcclxuXHJcblx0XHRjb25zdCBpbnB1dEZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG5cdFx0aW5wdXRGaWx0ZXIuY2xhc3NOYW1lID0gJ3NlbGVjdF9fZmlsdGVyIGlucHV0JztcclxuXHJcblx0XHR2YWx1ZS5hcHBlbmRDaGlsZChpbnB1dEZpbHRlcik7XHJcblxyXG5cdFx0aW5wdXRGaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IGlucHV0RmlsdGVyLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRpZih2YWx1ZS5sZW5ndGggPiAxKSB7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20obGlzdC5jaGlsZHJlbiwgbyA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgdGV4dCA9IG8udGV4dENvbnRlbnQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRcdFx0by5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgdGV4dC5pbmRleE9mKHZhbHVlKSA9PT0gLTEpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0aWYobGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19saXN0LWl0ZW0nKS5sZW5ndGggPT09IGxpc3QucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9fbGlzdC1pdGVtLmhpZGUnKS5sZW5ndGgpIHtcclxuXHJcblx0XHRcdFx0XHRzZWxlY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LS1maWx0ZXItZW1wdHknKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0LS1maWx0ZXItZW1wdHknKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShsaXN0LmNoaWxkcmVuLCBvID0+IG8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdF9fbGlzdC1pdGVtJykpe1xyXG5cclxuXHRcdFx0Y29udHJvbC52YWx1ZSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcblxyXG5cdFx0XHRjb250cm9sLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdGlmKGZvcm0pIHtcclxuXHJcblx0XHRcdFx0Zm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0c2VsZWN0LmFwcGVuZENoaWxkKGxpc3QpO1xyXG5cclxuXHRmb3JtICYmIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInJlc2V0XCIsICgpID0+IHtcclxuXHJcblx0XHRzZWxlY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LS1kZWZhdWx0Jyk7XHJcblx0XHR2YWx1ZVRleHQudGV4dENvbnRlbnQgPSB2YWx1ZURlZmF1bHQ7XHJcblxyXG5cdH0pO1xyXG5cclxufTtcclxuXHJcbiggKCkgPT4ge1xyXG5cclxuXHR3aW5kb3cuc2VsZWN0c0NvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0Jyk7XHJcblxyXG5cdGlmKHdpbmRvdy5zZWxlY3RzQ29sbGVjdGlvbi5sZW5ndGgpIHtcclxuXHJcblx0XHRBcnJheS5mcm9tKHdpbmRvdy5zZWxlY3RzQ29sbGVjdGlvbiwgc2VsZWN0ID0+IHdpbmRvdy5zZWxlY3RzKHNlbGVjdCkpO1xyXG5cclxuXHR9XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlzU2VsZWN0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3QnKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKHdpbmRvdy5zZWxlY3RzQ29sbGVjdGlvbiwgc2VsZWN0ID0+IHtcclxuXHJcblx0XHRcdHNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3QtLW9wZW4nLCBzZWxlY3QgPT09IGlzU2VsZWN0ICYmIGlzU2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0LS1vcGVuJykgPT09IGZhbHNlKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KSgpOyIsIiggc3dpcGVyQ29udGFpbmVyID0+IHtcclxuXHJcblx0aWYoIXN3aXBlckNvbnRhaW5lci5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShzd2lwZXJDb250YWluZXIsIHN3aXBlID0+IHtcclxuXHJcblx0XHRsZXQgbXlTd2lwZSA9IG51bGwsXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gbnVsbCxcclxuXHRcdFx0cmVzZXRTd2lwZSA9IG51bGw7XHJcblxyXG5cdFx0Y29uc3Qgc3dpcGVDb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0XHQgIHN3aXBlTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRcdCAgc3dpcGVCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRcdCAgc3dpcGVOZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcblx0XHRcdCAgc3dpcGVQcmV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcblx0XHRcdCAgc2Nyb2xsYmFyID0gc3dpcGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLXNjcm9sbGJhcicpLFxyXG5cdFx0XHQgIGl0ZW1zID0gc3dpcGUucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1zbGlkZScpLFxyXG5cdFx0XHQgIGNvdW50ID0gaXRlbXMubGVuZ3RoLFxyXG5cdFx0XHQgIGNsaWVudHMgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWNsaWVudHMnKSxcclxuXHRcdFx0ICBwcm9kdWN0R2FsbGVyeSA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tZ2FsbGVyeScpLFxyXG5cdFx0XHQgIHByb2R1Y3RHYWxsZXJ5UHJldmlldyA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tZ2FsbGVyeS1wcmV2aWV3JyksXHJcblx0XHRcdCAgYmlsbGJvYXJkID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1iaWxsYm9hcmQnKTtcclxuXHJcblx0XHRzd2lwZU5hdi5jbGFzc05hbWUgPSAnc3dpcGVyLXBhZ2luYXRpb24nO1xyXG5cdFx0c3dpcGVDb250cm9scy5jbGFzc05hbWUgPSAnc3dpcGVyLWNvbnRyb2xzJztcclxuXHJcblx0XHRzd2lwZUJ0bnMuY2xhc3NOYW1lID0gJ3N3aXBlci1uYXZpZ2F0aW9uJztcclxuXHRcdHN3aXBlUHJldi5jbGFzc05hbWUgPSAnc3dpcGVyLWJ1dHRvbi1wcmV2IGJ1dHRvbic7XHJcblx0XHRzd2lwZU5leHQuY2xhc3NOYW1lID0gJ3N3aXBlci1idXR0b24tbmV4dCBidXR0b24nO1xyXG5cclxuXHRcdHN3aXBlUHJldi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCdQcmV2aW91cyBzbGlkZScpO1xyXG5cdFx0c3dpcGVOZXh0LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsJ05leHQgc2xpZGUnKTtcclxuXHJcblx0XHRzd2lwZVByZXYuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNOSAxMWw0LjYtNC42QS45OS45OSAwIDExMTUgNy44bC0zLjkgMy45IDMuOSAzLjlhLjk5Ljk5IDAgMDEtMS40IDEuNEw5IDEyLjQxQTEgMSAwIDAxOSAxMXpcIi8+PC9zdmc+JztcclxuXHRcdHN3aXBlTmV4dC5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xNSAxMWExIDEgMCAwMTAgMS40TDEwLjQgMTdBLjk5Ljk5IDAgMDE5IDE1LjZsMy45LTMuOUw5IDcuOGEuOTkuOTkgMCAwMTEuNC0xLjRMMTUgMTF6XCIvPjwvc3ZnPic7XHJcblxyXG5cdFx0c3dpcGVCdG5zLmFwcGVuZENoaWxkKHN3aXBlUHJldik7XHJcblx0XHRzd2lwZUJ0bnMuYXBwZW5kQ2hpbGQoc3dpcGVOZXh0KTtcclxuXHRcdHN3aXBlQ29udHJvbHMuYXBwZW5kQ2hpbGQoc3dpcGVCdG5zKTtcclxuXHRcdHN3aXBlQ29udHJvbHMuYXBwZW5kQ2hpbGQoc3dpcGVOYXYpO1xyXG5cclxuXHRcdHJlc2V0U3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZihteVN3aXBlKSB7XHJcblxyXG5cdFx0XHRcdG15U3dpcGUuZGVzdHJveShmYWxzZSx0cnVlKTtcclxuXHRcdFx0XHRteVN3aXBlID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRzd2lwZUJ0bnMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRzd2lwZUNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdH1cclxuXHJcblxyXG5cclxuXHRcdFB1YlN1Yi5zdWJzY3JpYmUoJ3dpbmRvd1dpZHRoUmVzaXplJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKHdpbmRvdy5Td2lwZXIgJiYgdG9nZ2xlU3dpcGUpIHtcclxuXHJcblx0XHRcdFx0dG9nZ2xlU3dpcGUoKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRQdWJTdWIuc3Vic2NyaWJlKCdzd2lwZXJKc0xvYWQnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRzd2lwZS5hcHBlbmRDaGlsZChzd2lwZUNvbnRyb2xzKTtcclxuXHJcblx0XHRcdC8vIGVhZ2VyXHJcblx0XHRcdEFycmF5LmZyb20oc3dpcGUucXVlcnlTZWxlY3RvckFsbCgnW2xvYWRpbmc9XCJsYXp5XCJdJyksIGltZyA9PiBpbWcuc2V0QXR0cmlidXRlKCdsb2FkaW5nJywnZWFnZXInKSk7XHJcblxyXG5cdFx0XHQvLyBoaWRlXHJcblx0XHRcdEFycmF5LmZyb20oaXRlbXMsIGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XHJcblxyXG5cdFx0XHR0b2dnbGVTd2lwZSgpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Y29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblxyXG5cdHNjcmlwdC5zcmMgPSAnL2pzL3N3aXBlci5taW4uanMnO1xyXG5cclxuXHRzY3JpcHQub25sb2FkID0gKCkgPT4gUHViU3ViLnB1Ymxpc2goJ3N3aXBlckpzTG9hZCcpO1xyXG5cclxuXHRzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCksIENvb2tpZXMuZ2V0KCdmYXN0TG9hZFNjcmlwdCcpID8gMCA6IDEwMDAwKTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItY29udGFpbmVyJykpOyIsIi8qKCB0b29sdGlwcyA9PiB7XHJcblxyXG5cdGlmKHRvb2x0aXBzLmxlbmd0aCl7XHJcblxyXG5cdFx0QXJyYXkuZnJvbSh0b29sdGlwcywgdG9vbHRpcCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcblx0XHRcdHRpdGxlLmNsYXNzTmFtZSA9ICd0b29sdGlwLXRpdGxlX19pbm5lcic7XHJcblxyXG5cdFx0XHR0aXRsZS50ZXh0Q29udGVudCA9IHRvb2x0aXAuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xyXG5cdFx0XHR0b29sdGlwLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHRcdFx0dG9vbHRpcC5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b29sdGlwLXRpdGxlJykpO1xyXG4qL1xyXG4oIHRvb2x0aXBzID0+IHtcclxuXHJcblx0aWYodG9vbHRpcHMubGVuZ3RoKXtcclxuXHJcblx0XHRjb25zdCBpY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXHJcblx0XHRcdCAgaWNvQWNodHVuZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcblx0XHRpY28uaW5uZXJIVE1MID0gJzxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIwIDEyYTggOCAwIDExLTE2IDAgOCA4IDAgMDExNiAwem0tNS43NC0zLjg3YTMuMTggMy4xOCAwIDAxLjU2IDMuNzhjLS4zOC43LTEgMS4yMi0xLjc0IDEuNDlhLjQuNCAwIDAwLS4yOC4zOHYuNjJhLjguOCAwIDAxLTEuNiAwVjEyLjhBLjguOCAwIDAxMTIgMTJjLjg4IDAgMS42LS43MiAxLjYtMS42YTEuNiAxLjYgMCAwMC0zLjIgMCAuOC44IDAgMDEtMS41OS4wOGwtLjAxLS4xMmMuMDEtMiAxLjg2LTMuNTUgMy45NS0zLjA3LjU3LjEzIDEuMS40MiAxLjUxLjg0ek0xMi44IDE2LjhhLjguOCAwIDExLTEuNiAwIC44LjggMCAwMTEuNiAwelwiLz48L3N2Zz4nO1xyXG5cclxuXHRcdGljb0FjaHR1bmcuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAxMiAxMlwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTExIDZBNSA1IDAgMSAxIDEgNmE1IDUgMCAwIDEgMTAgMFpNNSA3VjJoMnY1SDVabTIuMDMgMWgtMnYySDdsLjAzLTJaXCIvPjwvc3ZnPic7XHJcblxyXG5cdFx0bGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25SZWNvcmRzID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHQgPSBtdXRhdGlvblJlY29yZHNbMF0udGFyZ2V0LFxyXG5cdFx0XHRcdCAgaW5uZXIgPSB0LnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwLWhlbHBfX2lubmVyJyk7XHJcblxyXG5cdFx0XHRpZih0Lm9wZW4pIHtcclxuXHJcblx0XHRcdFx0Y29uc3QgcmVjdCA9IGlubmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHRcdFx0XHRpZihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPCByZWN0LnJpZ2h0KSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8g0LvQtdCy0LXQtVxyXG5cclxuXHRcdFx0XHRcdGlubmVyLnN0eWxlLm1hcmdpbkxlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSByZWN0LnJpZ2h0ICsgJ3B4JztcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmKHJlY3QubGVmdCA8IDApIHtcclxuXHJcblx0XHRcdFx0XHQvLyDQv9GA0LDQstC10LVcclxuXHJcblx0XHRcdFx0XHRpbm5lci5zdHlsZS5tYXJnaW5MZWZ0ID0gLXJlY3QubGVmdCArICdweCc7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGlubmVyLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRBcnJheS5mcm9tKHRvb2x0aXBzLCB0b29sdGlwID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGJ0biA9IHRvb2x0aXAucXVlcnlTZWxlY3RvcignLnRvb2x0aXAtaGVscF9fYnRuJyk7XHJcblxyXG5cdFx0XHRpZiAoIHRvb2x0aXAuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b29sdGlwLWhlbHAtLWFjaHR1bmcnKSApIHtcclxuXHJcblx0XHRcdFx0YnRuLmFwcGVuZENoaWxkKGljb0FjaHR1bmcuY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGJ0bi5hcHBlbmRDaGlsZChpY28uY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG9ic2VydmVyLm9ic2VydmUodG9vbHRpcCwge1xyXG5cclxuXHRcdFx0XHRhdHRyaWJ1dGVzIDogdHJ1ZVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRvb2x0aXAtaGVscCcpO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbSh0b29sdGlwcywgdG9vbHRpcCA9PiB7XHJcblxyXG5cdFx0XHRcdGlmKHRhcmdldCAhPT0gdG9vbHRpcCkge1xyXG5cclxuXHRcdFx0XHRcdHRvb2x0aXAub3BlbiA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvb2x0aXAtaGVscCcpKTsiLCIoIGJ0bnMgPT4ge1xyXG5cclxuXHRpZiggYnRucy5sZW5ndGggPT09IDAgKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGlmICggQ29va2llcy5nZXQoJ2xhbmcnKSA9PT0gJ2VuJyApIHtcclxuXHJcblx0XHRjb25zdCB5dFdpZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0eXRXaWRnZXQuaWQgPSAneXRXaWRnZXQnO1xyXG5cdFx0eXRXaWRnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHl0V2lkZ2V0KTtcclxuXHJcblx0XHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHRcdHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vdHJhbnNsYXRlLnlhbmRleC5uZXQvd2Vic2l0ZS13aWRnZXQvdjEvd2lkZ2V0LmpzP3dpZGdldElkPXl0V2lkZ2V0JnBhZ2VMYW5nPXJ1JndpZGdldFRoZW1lPWxpZ2h0JmF1dG9Nb2RlPWZhbHNlXCI7XHJcblxyXG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oYnRucywgZWwgPT4ge1xyXG5cclxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3l0LXdpZGdldCcsIEpTT04uc3RyaW5naWZ5KHtcclxuXHRcdFx0XHRcImxhbmdcIjogZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWxhbmcnKSxcclxuXHRcdFx0XHRcImFjdGl2ZVwiOiB0cnVlXHJcblx0XHRcdH0pKTtcclxuXHJcblx0XHRcdENvb2tpZXMuc2V0KCdsYW5nJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWxhbmcnKSk7XHJcblxyXG5cdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19sYW5nLWJ0bicpKTsiXX0=
