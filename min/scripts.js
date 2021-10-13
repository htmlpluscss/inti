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
		document.documentElement.style.setProperty('--headerHeight', document.querySelector('.header').clientHeight + 'px');

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

	const formGetPrice = document.querySelector('#form-modal-get-price');

	if(formGetPrice) {

		form.addEventListener('change', () => {

			const lang = form.querySelector('[name="docs-item-lang"]:checked').value;

			formGetPrice.elements.lang.value = lang;

		});

	}

})(document.querySelector('.docs-item__lang'));

// forms

( fieldsets => {

	if(fieldsets.length) {

		const searchResult = document.querySelector('.docs-search-result');

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
				  result = fieldset.querySelector('.docs-form__result')
				  formShort = document.querySelector('.docs-page--short');

			// input

			input.addEventListener('focus', () => {

				Array.from(fieldsets, el => {

					el.classList.toggle('is-focus', el === fieldset);

					if ( fieldset.classList.contains('docs-form__catalog') && el !== fieldset ) {

						el.classList.add('hide');

					}

				});

			});

		/* nomenclature */

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
					form.classList.remove('is-noempty');
					input.value = '';
					input.focus();

				});

				// reset там где реальная кнопка reset

				form.addEventListener('reset', () => {

					Array.from(datalist, btn => btn.classList.remove('hide'));
					fieldset.classList.add('is-focus');
					input.focus();

				});

			}

		/* developer */

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
					form.classList.remove('is-noempty');
					input.value = '';

				});

			}

			// product

			if(form.classList.contains('docs-form--product')) {

				input.addEventListener('keyup', event => {

					if(input.value.length > 2 && event.key !== 'enter'){

						form.classList.add('form--loading');

						fetch(form.getAttribute('action'), {
							method: 'POST',
							body: new FormData(form)
						})
						.then(response => response.text())
						.then(html => {

							console.log(html);

							result.innerHTML = html;
							result.classList.remove('hide');
							form.classList.remove('form--loading');

							reset.classList.remove('hide');

						});

					}

				});

				form.addEventListener('reset', () => {

					result.classList.add('hide');
					input.focus();

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

				}

				if( tabsBtn.classList.contains('docs-page__tabs-item--analytics') ) {

					document.querySelector('.docs-page__forms--analytics').classList.remove('hide');
					document.querySelector('.docs-page__forms--standarts').classList.add('hide');

				}

			}

		});


		// form list

		Array.from(document.querySelectorAll('.docs-form'), form => {

			const input = form.querySelector('.docs-form__input'),
				  reset = form.querySelector('.docs-form__reset');

			// reset

			form.addEventListener('reset', () => reset.classList.add('hide'));

			// input

			form.addEventListener('input', () => {

				form.classList.toggle('is-noempty', input.value.length > 0);

			});

			// submit

			form.addEventListener('submit', event => {

				event.preventDefault();

				form.dispatchEvent(new CustomEvent("input"));
				form.dispatchEvent(new CustomEvent("change"));

			});

		});

		// form list

		Array.from(document.querySelectorAll('.docs-form--list'), form => {

			const input = form.querySelector('.docs-form__input'),
				  reset = form.querySelector('.docs-form__reset'),
				  result = form.querySelector('.docs-form__result');

			// change

			let controller = new AbortController();

			form.addEventListener('change', () => {

				if(searchResult.classList.contains('is-loading')) {

					controller.abort();

				}

				console.log(form, 'change');

				searchResult.classList.add('is-loading');
				searchResult.innerHTML = '';

				fetch(form.getAttribute('action'), {
					method: 'POST',
					body: new FormData(form),
					signal: controller.signal
				})
				.then(response => response.text())
				.then(html => {

					searchResult.innerHTML = html;
					searchResult.classList.remove('is-loading');

				});

				if(formShort === null) {

					formShort = true;

					document.body.classList.remove('page-blue');
					document.querySelector('.docs-page').classList.add('docs-page--short');
					document.querySelector('.docs-page__description').classList.add('hide');

				}

			});

			// ajax load scroll

			if ('IntersectionObserver' in window) {

				const boxResult = document.createElement('div');

				let pagin = 2,
					windowScroll = window.pageYOffset;

				const callback = (entries, observer) => {

					Array.from(entries, entry => {

						if(entry.isIntersecting && form.classList.contains('is-loading') === false && form.offsetParent !== null) {

							form.classList.add('is-loading');

							let formData = new FormData(form);
							formData.append('pagin', pagin);

							fetch(form.getAttribute('action'), {
								method: 'POST',
								body: formData
							})
							.then(response => response.text())
							.then(html => {

								console.log(html);

								boxResult.innerHTML = html;

								windowScroll = window.pageYOffset;

								Array.from(boxResult.querySelectorAll('.docs-catalog__item'), item => {

									searchResult.querySelector('.docs-catalog__list').appendChild(item);

								});

								if( windowScroll !== window.pageYOffset ) {

									window.scrollTo(0,windowScroll);

								}

								pagin++;

								form.classList.remove('is-loading');

							});

						}

					});

				};

				const observer = new IntersectionObserver(callback);

				observer.observe(document.querySelector('.footer'));

			}

		});

	}

})(document.querySelectorAll('.docs-form__fieldset'));
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50VXAubWluLmpzIiwianMuY29va2llLm1pbi5qcyIsIm11c3RhY2hlLm1pbi5qcyIsInB1YnN1Yi5taW4uanMiLCJqcy5qcyIsImJ0bi1iYWNrLmpzIiwiZG9jcy1pdGVtLmpzIiwiZG9jcy5qcyIsImZvcm0tc3VibWl0LmpzIiwiZm9ybS5qcyIsImdldC1wcmljZS5qcyIsImxpdmUtc2VhcmNoLmpzIiwibWFpbi5qcyIsIm1hc2suanMiLCJtZW51LmpzIiwibW9kYWwuanMiLCJub3RpZmljYXRpb24uanMiLCJzZWFyY2guanMiLCJzZWxlY3QuanMiLCJzd2lwZXIuanMiLCJ5YXRyYW5zbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQ0ZBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDamJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25MQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGEsbil7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShuKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1uKHJlcXVpcmUsZXhwb3J0cyxtb2R1bGUpOmEuQ291bnRVcD1uKCl9KHRoaXMsZnVuY3Rpb24oYSxuLHQpe3JldHVybiBmdW5jdGlvbihhLG4sdCxlLGkscil7dmFyIHU9dGhpcztpZih1LnZlcnNpb249ZnVuY3Rpb24oKXtyZXR1cm5cIjEuOS4zXCJ9LHUub3B0aW9ucz17dXNlRWFzaW5nOiEwLHVzZUdyb3VwaW5nOiEwLHNlcGFyYXRvcjpcIixcIixkZWNpbWFsOlwiLlwiLGVhc2luZ0ZuOmZ1bmN0aW9uKGEsbix0LGUpe3JldHVybiB0KigxLU1hdGgucG93KDIsLTEwKmEvZSkpKjEwMjQvMTAyMytufSxmb3JtYXR0aW5nRm46ZnVuY3Rpb24oYSl7dmFyIG4sdCxlLGkscixvLHM9YTwwO2lmKGE9TWF0aC5hYnMoYSkudG9GaXhlZCh1LmRlY2ltYWxzKSxuPShhKz1cIlwiKS5zcGxpdChcIi5cIiksdD1uWzBdLGU9MTxuLmxlbmd0aD91Lm9wdGlvbnMuZGVjaW1hbCtuWzFdOlwiXCIsdS5vcHRpb25zLnVzZUdyb3VwaW5nKXtmb3IoaT1cIlwiLHI9MCxvPXQubGVuZ3RoO3I8bzsrK3IpMCE9PXImJnIlMz09MCYmKGk9dS5vcHRpb25zLnNlcGFyYXRvcitpKSxpPXRbby1yLTFdK2k7dD1pfXJldHVybiB1Lm9wdGlvbnMubnVtZXJhbHMubGVuZ3RoJiYodD10LnJlcGxhY2UoL1swLTldL2csZnVuY3Rpb24oYSl7cmV0dXJuIHUub3B0aW9ucy5udW1lcmFsc1srYV19KSxlPWUucmVwbGFjZSgvWzAtOV0vZyxmdW5jdGlvbihhKXtyZXR1cm4gdS5vcHRpb25zLm51bWVyYWxzWythXX0pKSwocz9cIi1cIjpcIlwiKSt1Lm9wdGlvbnMucHJlZml4K3QrZSt1Lm9wdGlvbnMuc3VmZml4fSxwcmVmaXg6XCJcIixzdWZmaXg6XCJcIixudW1lcmFsczpbXX0sciYmXCJvYmplY3RcIj09dHlwZW9mIHIpZm9yKHZhciBvIGluIHUub3B0aW9ucylyLmhhc093blByb3BlcnR5KG8pJiZudWxsIT09cltvXSYmKHUub3B0aW9uc1tvXT1yW29dKTtcIlwiPT09dS5vcHRpb25zLnNlcGFyYXRvcj91Lm9wdGlvbnMudXNlR3JvdXBpbmc9ITE6dS5vcHRpb25zLnNlcGFyYXRvcj1cIlwiK3Uub3B0aW9ucy5zZXBhcmF0b3I7Zm9yKHZhciBzPTAsbD1bXCJ3ZWJraXRcIixcIm1velwiLFwibXNcIixcIm9cIl0sbT0wO208bC5sZW5ndGgmJiF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOysrbSl3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lPXdpbmRvd1tsW21dK1wiUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdLHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZT13aW5kb3dbbFttXStcIkNhbmNlbEFuaW1hdGlvbkZyYW1lXCJdfHx3aW5kb3dbbFttXStcIkNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtmdW5jdGlvbiBkKGEpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBhJiYhaXNOYU4oYSl9d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oYSxuKXt2YXIgdD0obmV3IERhdGUpLmdldFRpbWUoKSxlPU1hdGgubWF4KDAsMTYtKHQtcykpLGk9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXthKHQrZSl9LGUpO3JldHVybiBzPXQrZSxpfSksd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lfHwod2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lPWZ1bmN0aW9uKGEpe2NsZWFyVGltZW91dChhKX0pLHUuaW5pdGlhbGl6ZT1mdW5jdGlvbigpe3JldHVybiEhdS5pbml0aWFsaXplZHx8KHUuZXJyb3I9XCJcIix1LmQ9XCJzdHJpbmdcIj09dHlwZW9mIGE/ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYSk6YSx1LmQ/KHUuc3RhcnRWYWw9TnVtYmVyKG4pLHUuZW5kVmFsPU51bWJlcih0KSxkKHUuc3RhcnRWYWwpJiZkKHUuZW5kVmFsKT8odS5kZWNpbWFscz1NYXRoLm1heCgwLGV8fDApLHUuZGVjPU1hdGgucG93KDEwLHUuZGVjaW1hbHMpLHUuZHVyYXRpb249MWUzKk51bWJlcihpKXx8MmUzLHUuY291bnREb3duPXUuc3RhcnRWYWw+dS5lbmRWYWwsdS5mcmFtZVZhbD11LnN0YXJ0VmFsLHUuaW5pdGlhbGl6ZWQ9ITApOih1LmVycm9yPVwiW0NvdW50VXBdIHN0YXJ0VmFsIChcIituK1wiKSBvciBlbmRWYWwgKFwiK3QrXCIpIGlzIG5vdCBhIG51bWJlclwiLCExKSk6ISh1LmVycm9yPVwiW0NvdW50VXBdIHRhcmdldCBpcyBudWxsIG9yIHVuZGVmaW5lZFwiKSl9LHUucHJpbnRWYWx1ZT1mdW5jdGlvbihhKXt2YXIgbj11Lm9wdGlvbnMuZm9ybWF0dGluZ0ZuKGEpO1wiSU5QVVRcIj09PXUuZC50YWdOYW1lP3RoaXMuZC52YWx1ZT1uOlwidGV4dFwiPT09dS5kLnRhZ05hbWV8fFwidHNwYW5cIj09PXUuZC50YWdOYW1lP3RoaXMuZC50ZXh0Q29udGVudD1uOnRoaXMuZC5pbm5lckhUTUw9bn0sdS5jb3VudD1mdW5jdGlvbihhKXt1LnN0YXJ0VGltZXx8KHUuc3RhcnRUaW1lPWEpO3ZhciBuPSh1LnRpbWVzdGFtcD1hKS11LnN0YXJ0VGltZTt1LnJlbWFpbmluZz11LmR1cmF0aW9uLW4sdS5vcHRpb25zLnVzZUVhc2luZz91LmNvdW50RG93bj91LmZyYW1lVmFsPXUuc3RhcnRWYWwtdS5vcHRpb25zLmVhc2luZ0ZuKG4sMCx1LnN0YXJ0VmFsLXUuZW5kVmFsLHUuZHVyYXRpb24pOnUuZnJhbWVWYWw9dS5vcHRpb25zLmVhc2luZ0ZuKG4sdS5zdGFydFZhbCx1LmVuZFZhbC11LnN0YXJ0VmFsLHUuZHVyYXRpb24pOnUuY291bnREb3duP3UuZnJhbWVWYWw9dS5zdGFydFZhbC0odS5zdGFydFZhbC11LmVuZFZhbCkqKG4vdS5kdXJhdGlvbik6dS5mcmFtZVZhbD11LnN0YXJ0VmFsKyh1LmVuZFZhbC11LnN0YXJ0VmFsKSoobi91LmR1cmF0aW9uKSx1LmNvdW50RG93bj91LmZyYW1lVmFsPXUuZnJhbWVWYWw8dS5lbmRWYWw/dS5lbmRWYWw6dS5mcmFtZVZhbDp1LmZyYW1lVmFsPXUuZnJhbWVWYWw+dS5lbmRWYWw/dS5lbmRWYWw6dS5mcmFtZVZhbCx1LmZyYW1lVmFsPU1hdGgucm91bmQodS5mcmFtZVZhbCp1LmRlYykvdS5kZWMsdS5wcmludFZhbHVlKHUuZnJhbWVWYWwpLG48dS5kdXJhdGlvbj91LnJBRj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodS5jb3VudCk6dS5jYWxsYmFjayYmdS5jYWxsYmFjaygpfSx1LnN0YXJ0PWZ1bmN0aW9uKGEpe3UuaW5pdGlhbGl6ZSgpJiYodS5jYWxsYmFjaz1hLHUuckFGPXJlcXVlc3RBbmltYXRpb25GcmFtZSh1LmNvdW50KSl9LHUucGF1c2VSZXN1bWU9ZnVuY3Rpb24oKXt1LnBhdXNlZD8odS5wYXVzZWQ9ITEsZGVsZXRlIHUuc3RhcnRUaW1lLHUuZHVyYXRpb249dS5yZW1haW5pbmcsdS5zdGFydFZhbD11LmZyYW1lVmFsLHJlcXVlc3RBbmltYXRpb25GcmFtZSh1LmNvdW50KSk6KHUucGF1c2VkPSEwLGNhbmNlbEFuaW1hdGlvbkZyYW1lKHUuckFGKSl9LHUucmVzZXQ9ZnVuY3Rpb24oKXt1LnBhdXNlZD0hMSxkZWxldGUgdS5zdGFydFRpbWUsdS5pbml0aWFsaXplZD0hMSx1LmluaXRpYWxpemUoKSYmKGNhbmNlbEFuaW1hdGlvbkZyYW1lKHUuckFGKSx1LnByaW50VmFsdWUodS5zdGFydFZhbCkpfSx1LnVwZGF0ZT1mdW5jdGlvbihhKXt1LmluaXRpYWxpemUoKSYmKGQoYT1OdW1iZXIoYSkpPyh1LmVycm9yPVwiXCIsYSE9PXUuZnJhbWVWYWwmJihjYW5jZWxBbmltYXRpb25GcmFtZSh1LnJBRiksdS5wYXVzZWQ9ITEsZGVsZXRlIHUuc3RhcnRUaW1lLHUuc3RhcnRWYWw9dS5mcmFtZVZhbCx1LmVuZFZhbD1hLHUuY291bnREb3duPXUuc3RhcnRWYWw+dS5lbmRWYWwsdS5yQUY9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUuY291bnQpKSk6dS5lcnJvcj1cIltDb3VudFVwXSB1cGRhdGUoKSAtIG5ldyBlbmRWYWwgaXMgbm90IGEgbnVtYmVyOiBcIithKX0sdS5pbml0aWFsaXplKCkmJnUucHJpbnRWYWx1ZSh1LnN0YXJ0VmFsKX19KTsiLCIvKiEganMtY29va2llIHYzLjAuMC1yYy4xIHwgTUlUICovXHJcbiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOihlPWV8fHNlbGYsZnVuY3Rpb24oKXt2YXIgbj1lLkNvb2tpZXMscj1lLkNvb2tpZXM9dCgpO3Iubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBlLkNvb2tpZXM9bixyfX0oKSl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIHIgaW4gbillW3JdPW5bcl19cmV0dXJuIGV9dmFyIHQ9e3JlYWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZSgvKCVbXFxkQS1GXXsyfSkrL2dpLGRlY29kZVVSSUNvbXBvbmVudCl9LHdyaXRlOmZ1bmN0aW9uKGUpe3JldHVybiBlbmNvZGVVUklDb21wb25lbnQoZSkucmVwbGFjZSgvJSgyWzM0NkJGXXwzW0FDLUZdfDQwfDVbQkRFXXw2MHw3W0JDRF0pL2csZGVjb2RlVVJJQ29tcG9uZW50KX19O3JldHVybiBmdW5jdGlvbiBuKHIsbyl7ZnVuY3Rpb24gaSh0LG4saSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50KXtcIm51bWJlclwiPT10eXBlb2YoaT1lKHt9LG8saSkpLmV4cGlyZXMmJihpLmV4cGlyZXM9bmV3IERhdGUoRGF0ZS5ub3coKSs4NjRlNSppLmV4cGlyZXMpKSxpLmV4cGlyZXMmJihpLmV4cGlyZXM9aS5leHBpcmVzLnRvVVRDU3RyaW5nKCkpLHQ9ZW5jb2RlVVJJQ29tcG9uZW50KHQpLnJlcGxhY2UoLyUoMlszNDZCXXw1RXw2MHw3QykvZyxkZWNvZGVVUklDb21wb25lbnQpLnJlcGxhY2UoL1soKV0vZyxlc2NhcGUpLG49ci53cml0ZShuLHQpO3ZhciBjPVwiXCI7Zm9yKHZhciB1IGluIGkpaVt1XSYmKGMrPVwiOyBcIit1LCEwIT09aVt1XSYmKGMrPVwiPVwiK2lbdV0uc3BsaXQoXCI7XCIpWzBdKSk7cmV0dXJuIGRvY3VtZW50LmNvb2tpZT10K1wiPVwiK24rY319cmV0dXJuIE9iamVjdC5jcmVhdGUoe3NldDppLGdldDpmdW5jdGlvbihlKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQmJighYXJndW1lbnRzLmxlbmd0aHx8ZSkpe2Zvcih2YXIgbj1kb2N1bWVudC5jb29raWU/ZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIik6W10sbz17fSxpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciBjPW5baV0uc3BsaXQoXCI9XCIpLHU9Yy5zbGljZSgxKS5qb2luKFwiPVwiKTsnXCInPT09dVswXSYmKHU9dS5zbGljZSgxLC0xKSk7dHJ5e3ZhciBmPXQucmVhZChjWzBdKTtpZihvW2ZdPXIucmVhZCh1LGYpLGU9PT1mKWJyZWFrfWNhdGNoKGUpe319cmV0dXJuIGU/b1tlXTpvfX0scmVtb3ZlOmZ1bmN0aW9uKHQsbil7aSh0LFwiXCIsZSh7fSxuLHtleHBpcmVzOi0xfSkpfSx3aXRoQXR0cmlidXRlczpmdW5jdGlvbih0KXtyZXR1cm4gbih0aGlzLmNvbnZlcnRlcixlKHt9LHRoaXMuYXR0cmlidXRlcyx0KSl9LHdpdGhDb252ZXJ0ZXI6ZnVuY3Rpb24odCl7cmV0dXJuIG4oZSh7fSx0aGlzLmNvbnZlcnRlcix0KSx0aGlzLmF0dHJpYnV0ZXMpfX0se2F0dHJpYnV0ZXM6e3ZhbHVlOk9iamVjdC5mcmVlemUobyl9LGNvbnZlcnRlcjp7dmFsdWU6T2JqZWN0LmZyZWV6ZShyKX19KX0odCx7cGF0aDpcIi9cIn0pfSk7XHJcbiIsIihmdW5jdGlvbiBkZWZpbmVNdXN0YWNoZShnbG9iYWwsZmFjdG9yeSl7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZleHBvcnRzJiZ0eXBlb2YgZXhwb3J0cy5ub2RlTmFtZSE9PVwic3RyaW5nXCIpe2ZhY3RvcnkoZXhwb3J0cyl9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW1wiZXhwb3J0c1wiXSxmYWN0b3J5KX1lbHNle2dsb2JhbC5NdXN0YWNoZT17fTtmYWN0b3J5KGdsb2JhbC5NdXN0YWNoZSl9fSkodGhpcyxmdW5jdGlvbiBtdXN0YWNoZUZhY3RvcnkobXVzdGFjaGUpe3ZhciBvYmplY3RUb1N0cmluZz1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO3ZhciBpc0FycmF5PUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uIGlzQXJyYXlQb2x5ZmlsbChvYmplY3Qpe3JldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKG9iamVjdCk9PT1cIltvYmplY3QgQXJyYXldXCJ9O2Z1bmN0aW9uIGlzRnVuY3Rpb24ob2JqZWN0KXtyZXR1cm4gdHlwZW9mIG9iamVjdD09PVwiZnVuY3Rpb25cIn1mdW5jdGlvbiB0eXBlU3RyKG9iail7cmV0dXJuIGlzQXJyYXkob2JqKT9cImFycmF5XCI6dHlwZW9mIG9ian1mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyaW5nKXtyZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1tcXC1cXFtcXF17fSgpKis/LixcXFxcXFxeJHwjXFxzXS9nLFwiXFxcXCQmXCIpfWZ1bmN0aW9uIGhhc1Byb3BlcnR5KG9iaixwcm9wTmFtZSl7cmV0dXJuIG9iaiE9bnVsbCYmdHlwZW9mIG9iaj09PVwib2JqZWN0XCImJnByb3BOYW1lIGluIG9ian12YXIgcmVnRXhwVGVzdD1SZWdFeHAucHJvdG90eXBlLnRlc3Q7ZnVuY3Rpb24gdGVzdFJlZ0V4cChyZSxzdHJpbmcpe3JldHVybiByZWdFeHBUZXN0LmNhbGwocmUsc3RyaW5nKX12YXIgbm9uU3BhY2VSZT0vXFxTLztmdW5jdGlvbiBpc1doaXRlc3BhY2Uoc3RyaW5nKXtyZXR1cm4hdGVzdFJlZ0V4cChub25TcGFjZVJlLHN0cmluZyl9dmFyIGVudGl0eU1hcD17XCImXCI6XCImYW1wO1wiLFwiPFwiOlwiJmx0O1wiLFwiPlwiOlwiJmd0O1wiLCdcIic6XCImcXVvdDtcIixcIidcIjpcIiYjMzk7XCIsXCIvXCI6XCImI3gyRjtcIixcImBcIjpcIiYjeDYwO1wiLFwiPVwiOlwiJiN4M0Q7XCJ9O2Z1bmN0aW9uIGVzY2FwZUh0bWwoc3RyaW5nKXtyZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZSgvWyY8PlwiJ2A9XFwvXS9nLGZ1bmN0aW9uIGZyb21FbnRpdHlNYXAocyl7cmV0dXJuIGVudGl0eU1hcFtzXX0pfXZhciB3aGl0ZVJlPS9cXHMqLzt2YXIgc3BhY2VSZT0vXFxzKy87dmFyIGVxdWFsc1JlPS9cXHMqPS87dmFyIGN1cmx5UmU9L1xccypcXH0vO3ZhciB0YWdSZT0vI3xcXF58XFwvfD58XFx7fCZ8PXwhLztmdW5jdGlvbiBwYXJzZVRlbXBsYXRlKHRlbXBsYXRlLHRhZ3Mpe2lmKCF0ZW1wbGF0ZSlyZXR1cm5bXTt2YXIgc2VjdGlvbnM9W107dmFyIHRva2Vucz1bXTt2YXIgc3BhY2VzPVtdO3ZhciBoYXNUYWc9ZmFsc2U7dmFyIG5vblNwYWNlPWZhbHNlO2Z1bmN0aW9uIHN0cmlwU3BhY2UoKXtpZihoYXNUYWcmJiFub25TcGFjZSl7d2hpbGUoc3BhY2VzLmxlbmd0aClkZWxldGUgdG9rZW5zW3NwYWNlcy5wb3AoKV19ZWxzZXtzcGFjZXM9W119aGFzVGFnPWZhbHNlO25vblNwYWNlPWZhbHNlfXZhciBvcGVuaW5nVGFnUmUsY2xvc2luZ1RhZ1JlLGNsb3NpbmdDdXJseVJlO2Z1bmN0aW9uIGNvbXBpbGVUYWdzKHRhZ3NUb0NvbXBpbGUpe2lmKHR5cGVvZiB0YWdzVG9Db21waWxlPT09XCJzdHJpbmdcIil0YWdzVG9Db21waWxlPXRhZ3NUb0NvbXBpbGUuc3BsaXQoc3BhY2VSZSwyKTtpZighaXNBcnJheSh0YWdzVG9Db21waWxlKXx8dGFnc1RvQ29tcGlsZS5sZW5ndGghPT0yKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdGFnczogXCIrdGFnc1RvQ29tcGlsZSk7b3BlbmluZ1RhZ1JlPW5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKHRhZ3NUb0NvbXBpbGVbMF0pK1wiXFxcXHMqXCIpO2Nsb3NpbmdUYWdSZT1uZXcgUmVnRXhwKFwiXFxcXHMqXCIrZXNjYXBlUmVnRXhwKHRhZ3NUb0NvbXBpbGVbMV0pKTtjbG9zaW5nQ3VybHlSZT1uZXcgUmVnRXhwKFwiXFxcXHMqXCIrZXNjYXBlUmVnRXhwKFwifVwiK3RhZ3NUb0NvbXBpbGVbMV0pKX1jb21waWxlVGFncyh0YWdzfHxtdXN0YWNoZS50YWdzKTt2YXIgc2Nhbm5lcj1uZXcgU2Nhbm5lcih0ZW1wbGF0ZSk7dmFyIHN0YXJ0LHR5cGUsdmFsdWUsY2hyLHRva2VuLG9wZW5TZWN0aW9uO3doaWxlKCFzY2FubmVyLmVvcygpKXtzdGFydD1zY2FubmVyLnBvczt2YWx1ZT1zY2FubmVyLnNjYW5VbnRpbChvcGVuaW5nVGFnUmUpO2lmKHZhbHVlKXtmb3IodmFyIGk9MCx2YWx1ZUxlbmd0aD12YWx1ZS5sZW5ndGg7aTx2YWx1ZUxlbmd0aDsrK2kpe2Nocj12YWx1ZS5jaGFyQXQoaSk7aWYoaXNXaGl0ZXNwYWNlKGNocikpe3NwYWNlcy5wdXNoKHRva2Vucy5sZW5ndGgpfWVsc2V7bm9uU3BhY2U9dHJ1ZX10b2tlbnMucHVzaChbXCJ0ZXh0XCIsY2hyLHN0YXJ0LHN0YXJ0KzFdKTtzdGFydCs9MTtpZihjaHI9PT1cIlxcblwiKXN0cmlwU3BhY2UoKX19aWYoIXNjYW5uZXIuc2NhbihvcGVuaW5nVGFnUmUpKWJyZWFrO2hhc1RhZz10cnVlO3R5cGU9c2Nhbm5lci5zY2FuKHRhZ1JlKXx8XCJuYW1lXCI7c2Nhbm5lci5zY2FuKHdoaXRlUmUpO2lmKHR5cGU9PT1cIj1cIil7dmFsdWU9c2Nhbm5lci5zY2FuVW50aWwoZXF1YWxzUmUpO3NjYW5uZXIuc2NhbihlcXVhbHNSZSk7c2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKX1lbHNlIGlmKHR5cGU9PT1cIntcIil7dmFsdWU9c2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ0N1cmx5UmUpO3NjYW5uZXIuc2NhbihjdXJseVJlKTtzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nVGFnUmUpO3R5cGU9XCImXCJ9ZWxzZXt2YWx1ZT1zY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nVGFnUmUpfWlmKCFzY2FubmVyLnNjYW4oY2xvc2luZ1RhZ1JlKSl0aHJvdyBuZXcgRXJyb3IoXCJVbmNsb3NlZCB0YWcgYXQgXCIrc2Nhbm5lci5wb3MpO3Rva2VuPVt0eXBlLHZhbHVlLHN0YXJ0LHNjYW5uZXIucG9zXTt0b2tlbnMucHVzaCh0b2tlbik7aWYodHlwZT09PVwiI1wifHx0eXBlPT09XCJeXCIpe3NlY3Rpb25zLnB1c2godG9rZW4pfWVsc2UgaWYodHlwZT09PVwiL1wiKXtvcGVuU2VjdGlvbj1zZWN0aW9ucy5wb3AoKTtpZighb3BlblNlY3Rpb24pdGhyb3cgbmV3IEVycm9yKCdVbm9wZW5lZCBzZWN0aW9uIFwiJyt2YWx1ZSsnXCIgYXQgJytzdGFydCk7aWYob3BlblNlY3Rpb25bMV0hPT12YWx1ZSl0aHJvdyBuZXcgRXJyb3IoJ1VuY2xvc2VkIHNlY3Rpb24gXCInK29wZW5TZWN0aW9uWzFdKydcIiBhdCAnK3N0YXJ0KX1lbHNlIGlmKHR5cGU9PT1cIm5hbWVcInx8dHlwZT09PVwie1wifHx0eXBlPT09XCImXCIpe25vblNwYWNlPXRydWV9ZWxzZSBpZih0eXBlPT09XCI9XCIpe2NvbXBpbGVUYWdzKHZhbHVlKX19b3BlblNlY3Rpb249c2VjdGlvbnMucG9wKCk7aWYob3BlblNlY3Rpb24pdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCBzZWN0aW9uIFwiJytvcGVuU2VjdGlvblsxXSsnXCIgYXQgJytzY2FubmVyLnBvcyk7cmV0dXJuIG5lc3RUb2tlbnMoc3F1YXNoVG9rZW5zKHRva2VucykpfWZ1bmN0aW9uIHNxdWFzaFRva2Vucyh0b2tlbnMpe3ZhciBzcXVhc2hlZFRva2Vucz1bXTt2YXIgdG9rZW4sbGFzdFRva2VuO2Zvcih2YXIgaT0wLG51bVRva2Vucz10b2tlbnMubGVuZ3RoO2k8bnVtVG9rZW5zOysraSl7dG9rZW49dG9rZW5zW2ldO2lmKHRva2VuKXtpZih0b2tlblswXT09PVwidGV4dFwiJiZsYXN0VG9rZW4mJmxhc3RUb2tlblswXT09PVwidGV4dFwiKXtsYXN0VG9rZW5bMV0rPXRva2VuWzFdO2xhc3RUb2tlblszXT10b2tlblszXX1lbHNle3NxdWFzaGVkVG9rZW5zLnB1c2godG9rZW4pO2xhc3RUb2tlbj10b2tlbn19fXJldHVybiBzcXVhc2hlZFRva2Vuc31mdW5jdGlvbiBuZXN0VG9rZW5zKHRva2Vucyl7dmFyIG5lc3RlZFRva2Vucz1bXTt2YXIgY29sbGVjdG9yPW5lc3RlZFRva2Vuczt2YXIgc2VjdGlvbnM9W107dmFyIHRva2VuLHNlY3Rpb247Zm9yKHZhciBpPTAsbnVtVG9rZW5zPXRva2Vucy5sZW5ndGg7aTxudW1Ub2tlbnM7KytpKXt0b2tlbj10b2tlbnNbaV07c3dpdGNoKHRva2VuWzBdKXtjYXNlXCIjXCI6Y2FzZVwiXlwiOmNvbGxlY3Rvci5wdXNoKHRva2VuKTtzZWN0aW9ucy5wdXNoKHRva2VuKTtjb2xsZWN0b3I9dG9rZW5bNF09W107YnJlYWs7Y2FzZVwiL1wiOnNlY3Rpb249c2VjdGlvbnMucG9wKCk7c2VjdGlvbls1XT10b2tlblsyXTtjb2xsZWN0b3I9c2VjdGlvbnMubGVuZ3RoPjA/c2VjdGlvbnNbc2VjdGlvbnMubGVuZ3RoLTFdWzRdOm5lc3RlZFRva2VuczticmVhaztkZWZhdWx0OmNvbGxlY3Rvci5wdXNoKHRva2VuKX19cmV0dXJuIG5lc3RlZFRva2Vuc31mdW5jdGlvbiBTY2FubmVyKHN0cmluZyl7dGhpcy5zdHJpbmc9c3RyaW5nO3RoaXMudGFpbD1zdHJpbmc7dGhpcy5wb3M9MH1TY2FubmVyLnByb3RvdHlwZS5lb3M9ZnVuY3Rpb24gZW9zKCl7cmV0dXJuIHRoaXMudGFpbD09PVwiXCJ9O1NjYW5uZXIucHJvdG90eXBlLnNjYW49ZnVuY3Rpb24gc2NhbihyZSl7dmFyIG1hdGNoPXRoaXMudGFpbC5tYXRjaChyZSk7aWYoIW1hdGNofHxtYXRjaC5pbmRleCE9PTApcmV0dXJuXCJcIjt2YXIgc3RyaW5nPW1hdGNoWzBdO3RoaXMudGFpbD10aGlzLnRhaWwuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpO3RoaXMucG9zKz1zdHJpbmcubGVuZ3RoO3JldHVybiBzdHJpbmd9O1NjYW5uZXIucHJvdG90eXBlLnNjYW5VbnRpbD1mdW5jdGlvbiBzY2FuVW50aWwocmUpe3ZhciBpbmRleD10aGlzLnRhaWwuc2VhcmNoKHJlKSxtYXRjaDtzd2l0Y2goaW5kZXgpe2Nhc2UtMTptYXRjaD10aGlzLnRhaWw7dGhpcy50YWlsPVwiXCI7YnJlYWs7Y2FzZSAwOm1hdGNoPVwiXCI7YnJlYWs7ZGVmYXVsdDptYXRjaD10aGlzLnRhaWwuc3Vic3RyaW5nKDAsaW5kZXgpO3RoaXMudGFpbD10aGlzLnRhaWwuc3Vic3RyaW5nKGluZGV4KX10aGlzLnBvcys9bWF0Y2gubGVuZ3RoO3JldHVybiBtYXRjaH07ZnVuY3Rpb24gQ29udGV4dCh2aWV3LHBhcmVudENvbnRleHQpe3RoaXMudmlldz12aWV3O3RoaXMuY2FjaGU9e1wiLlwiOnRoaXMudmlld307dGhpcy5wYXJlbnQ9cGFyZW50Q29udGV4dH1Db250ZXh0LnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uIHB1c2godmlldyl7cmV0dXJuIG5ldyBDb250ZXh0KHZpZXcsdGhpcyl9O0NvbnRleHQucHJvdG90eXBlLmxvb2t1cD1mdW5jdGlvbiBsb29rdXAobmFtZSl7dmFyIGNhY2hlPXRoaXMuY2FjaGU7dmFyIHZhbHVlO2lmKGNhY2hlLmhhc093blByb3BlcnR5KG5hbWUpKXt2YWx1ZT1jYWNoZVtuYW1lXX1lbHNle3ZhciBjb250ZXh0PXRoaXMsbmFtZXMsaW5kZXgsbG9va3VwSGl0PWZhbHNlO3doaWxlKGNvbnRleHQpe2lmKG5hbWUuaW5kZXhPZihcIi5cIik+MCl7dmFsdWU9Y29udGV4dC52aWV3O25hbWVzPW5hbWUuc3BsaXQoXCIuXCIpO2luZGV4PTA7d2hpbGUodmFsdWUhPW51bGwmJmluZGV4PG5hbWVzLmxlbmd0aCl7aWYoaW5kZXg9PT1uYW1lcy5sZW5ndGgtMSlsb29rdXBIaXQ9aGFzUHJvcGVydHkodmFsdWUsbmFtZXNbaW5kZXhdKTt2YWx1ZT12YWx1ZVtuYW1lc1tpbmRleCsrXV19fWVsc2V7dmFsdWU9Y29udGV4dC52aWV3W25hbWVdO2xvb2t1cEhpdD1oYXNQcm9wZXJ0eShjb250ZXh0LnZpZXcsbmFtZSl9aWYobG9va3VwSGl0KWJyZWFrO2NvbnRleHQ9Y29udGV4dC5wYXJlbnR9Y2FjaGVbbmFtZV09dmFsdWV9aWYoaXNGdW5jdGlvbih2YWx1ZSkpdmFsdWU9dmFsdWUuY2FsbCh0aGlzLnZpZXcpO3JldHVybiB2YWx1ZX07ZnVuY3Rpb24gV3JpdGVyKCl7dGhpcy5jYWNoZT17fX1Xcml0ZXIucHJvdG90eXBlLmNsZWFyQ2FjaGU9ZnVuY3Rpb24gY2xlYXJDYWNoZSgpe3RoaXMuY2FjaGU9e319O1dyaXRlci5wcm90b3R5cGUucGFyc2U9ZnVuY3Rpb24gcGFyc2UodGVtcGxhdGUsdGFncyl7dmFyIGNhY2hlPXRoaXMuY2FjaGU7dmFyIHRva2Vucz1jYWNoZVt0ZW1wbGF0ZV07aWYodG9rZW5zPT1udWxsKXRva2Vucz1jYWNoZVt0ZW1wbGF0ZV09cGFyc2VUZW1wbGF0ZSh0ZW1wbGF0ZSx0YWdzKTtyZXR1cm4gdG9rZW5zfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbiByZW5kZXIodGVtcGxhdGUsdmlldyxwYXJ0aWFscyl7dmFyIHRva2Vucz10aGlzLnBhcnNlKHRlbXBsYXRlKTt2YXIgY29udGV4dD12aWV3IGluc3RhbmNlb2YgQ29udGV4dD92aWV3Om5ldyBDb250ZXh0KHZpZXcpO3JldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbnMsY29udGV4dCxwYXJ0aWFscyx0ZW1wbGF0ZSl9O1dyaXRlci5wcm90b3R5cGUucmVuZGVyVG9rZW5zPWZ1bmN0aW9uIHJlbmRlclRva2Vucyh0b2tlbnMsY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKXt2YXIgYnVmZmVyPVwiXCI7dmFyIHRva2VuLHN5bWJvbCx2YWx1ZTtmb3IodmFyIGk9MCxudW1Ub2tlbnM9dG9rZW5zLmxlbmd0aDtpPG51bVRva2VuczsrK2kpe3ZhbHVlPXVuZGVmaW5lZDt0b2tlbj10b2tlbnNbaV07c3ltYm9sPXRva2VuWzBdO2lmKHN5bWJvbD09PVwiI1wiKXZhbHVlPXRoaXMucmVuZGVyU2VjdGlvbih0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpO2Vsc2UgaWYoc3ltYm9sPT09XCJeXCIpdmFsdWU9dGhpcy5yZW5kZXJJbnZlcnRlZCh0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpO2Vsc2UgaWYoc3ltYm9sPT09XCI+XCIpdmFsdWU9dGhpcy5yZW5kZXJQYXJ0aWFsKHRva2VuLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSk7ZWxzZSBpZihzeW1ib2w9PT1cIiZcIil2YWx1ZT10aGlzLnVuZXNjYXBlZFZhbHVlKHRva2VuLGNvbnRleHQpO2Vsc2UgaWYoc3ltYm9sPT09XCJuYW1lXCIpdmFsdWU9dGhpcy5lc2NhcGVkVmFsdWUodG9rZW4sY29udGV4dCk7ZWxzZSBpZihzeW1ib2w9PT1cInRleHRcIil2YWx1ZT10aGlzLnJhd1ZhbHVlKHRva2VuKTtpZih2YWx1ZSE9PXVuZGVmaW5lZClidWZmZXIrPXZhbHVlfXJldHVybiBidWZmZXJ9O1dyaXRlci5wcm90b3R5cGUucmVuZGVyU2VjdGlvbj1mdW5jdGlvbiByZW5kZXJTZWN0aW9uKHRva2VuLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl7dmFyIHNlbGY9dGhpczt2YXIgYnVmZmVyPVwiXCI7dmFyIHZhbHVlPWNvbnRleHQubG9va3VwKHRva2VuWzFdKTtmdW5jdGlvbiBzdWJSZW5kZXIodGVtcGxhdGUpe3JldHVybiBzZWxmLnJlbmRlcih0ZW1wbGF0ZSxjb250ZXh0LHBhcnRpYWxzKX1pZighdmFsdWUpcmV0dXJuO2lmKGlzQXJyYXkodmFsdWUpKXtmb3IodmFyIGo9MCx2YWx1ZUxlbmd0aD12YWx1ZS5sZW5ndGg7ajx2YWx1ZUxlbmd0aDsrK2ope2J1ZmZlcis9dGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sY29udGV4dC5wdXNoKHZhbHVlW2pdKSxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKX19ZWxzZSBpZih0eXBlb2YgdmFsdWU9PT1cIm9iamVjdFwifHx0eXBlb2YgdmFsdWU9PT1cInN0cmluZ1wifHx0eXBlb2YgdmFsdWU9PT1cIm51bWJlclwiKXtidWZmZXIrPXRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLGNvbnRleHQucHVzaCh2YWx1ZSkscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl9ZWxzZSBpZihpc0Z1bmN0aW9uKHZhbHVlKSl7aWYodHlwZW9mIG9yaWdpbmFsVGVtcGxhdGUhPT1cInN0cmluZ1wiKXRocm93IG5ldyBFcnJvcihcIkNhbm5vdCB1c2UgaGlnaGVyLW9yZGVyIHNlY3Rpb25zIHdpdGhvdXQgdGhlIG9yaWdpbmFsIHRlbXBsYXRlXCIpO3ZhbHVlPXZhbHVlLmNhbGwoY29udGV4dC52aWV3LG9yaWdpbmFsVGVtcGxhdGUuc2xpY2UodG9rZW5bM10sdG9rZW5bNV0pLHN1YlJlbmRlcik7aWYodmFsdWUhPW51bGwpYnVmZmVyKz12YWx1ZX1lbHNle2J1ZmZlcis9dGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKX1yZXR1cm4gYnVmZmVyfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlckludmVydGVkPWZ1bmN0aW9uIHJlbmRlckludmVydGVkKHRva2VuLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl7dmFyIHZhbHVlPWNvbnRleHQubG9va3VwKHRva2VuWzFdKTtpZighdmFsdWV8fGlzQXJyYXkodmFsdWUpJiZ2YWx1ZS5sZW5ndGg9PT0wKXJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSxjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlclBhcnRpYWw9ZnVuY3Rpb24gcmVuZGVyUGFydGlhbCh0b2tlbixjb250ZXh0LHBhcnRpYWxzKXtpZighcGFydGlhbHMpcmV0dXJuO3ZhciB2YWx1ZT1pc0Z1bmN0aW9uKHBhcnRpYWxzKT9wYXJ0aWFscyh0b2tlblsxXSk6cGFydGlhbHNbdG9rZW5bMV1dO2lmKHZhbHVlIT1udWxsKXJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0aGlzLnBhcnNlKHZhbHVlKSxjb250ZXh0LHBhcnRpYWxzLHZhbHVlKX07V3JpdGVyLnByb3RvdHlwZS51bmVzY2FwZWRWYWx1ZT1mdW5jdGlvbiB1bmVzY2FwZWRWYWx1ZSh0b2tlbixjb250ZXh0KXt2YXIgdmFsdWU9Y29udGV4dC5sb29rdXAodG9rZW5bMV0pO2lmKHZhbHVlIT1udWxsKXJldHVybiB2YWx1ZX07V3JpdGVyLnByb3RvdHlwZS5lc2NhcGVkVmFsdWU9ZnVuY3Rpb24gZXNjYXBlZFZhbHVlKHRva2VuLGNvbnRleHQpe3ZhciB2YWx1ZT1jb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7aWYodmFsdWUhPW51bGwpcmV0dXJuIG11c3RhY2hlLmVzY2FwZSh2YWx1ZSl9O1dyaXRlci5wcm90b3R5cGUucmF3VmFsdWU9ZnVuY3Rpb24gcmF3VmFsdWUodG9rZW4pe3JldHVybiB0b2tlblsxXX07bXVzdGFjaGUubmFtZT1cIm11c3RhY2hlLmpzXCI7bXVzdGFjaGUudmVyc2lvbj1cIjIuMy4wXCI7bXVzdGFjaGUudGFncz1bXCI8JVwiLFwiJT5cIl07dmFyIGRlZmF1bHRXcml0ZXI9bmV3IFdyaXRlcjttdXN0YWNoZS5jbGVhckNhY2hlPWZ1bmN0aW9uIGNsZWFyQ2FjaGUoKXtyZXR1cm4gZGVmYXVsdFdyaXRlci5jbGVhckNhY2hlKCl9O211c3RhY2hlLnBhcnNlPWZ1bmN0aW9uIHBhcnNlKHRlbXBsYXRlLHRhZ3Mpe3JldHVybiBkZWZhdWx0V3JpdGVyLnBhcnNlKHRlbXBsYXRlLHRhZ3MpfTttdXN0YWNoZS5yZW5kZXI9ZnVuY3Rpb24gcmVuZGVyKHRlbXBsYXRlLHZpZXcscGFydGlhbHMpe2lmKHR5cGVvZiB0ZW1wbGF0ZSE9PVwic3RyaW5nXCIpe3Rocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgdGVtcGxhdGUhIFRlbXBsYXRlIHNob3VsZCBiZSBhIFwic3RyaW5nXCIgJysnYnV0IFwiJyt0eXBlU3RyKHRlbXBsYXRlKSsnXCIgd2FzIGdpdmVuIGFzIHRoZSBmaXJzdCAnK1wiYXJndW1lbnQgZm9yIG11c3RhY2hlI3JlbmRlcih0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMpXCIpfXJldHVybiBkZWZhdWx0V3JpdGVyLnJlbmRlcih0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzKX07bXVzdGFjaGUudG9faHRtbD1mdW5jdGlvbiB0b19odG1sKHRlbXBsYXRlLHZpZXcscGFydGlhbHMsc2VuZCl7dmFyIHJlc3VsdD1tdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUsdmlldyxwYXJ0aWFscyk7aWYoaXNGdW5jdGlvbihzZW5kKSl7c2VuZChyZXN1bHQpfWVsc2V7cmV0dXJuIHJlc3VsdH19O211c3RhY2hlLmVzY2FwZT1lc2NhcGVIdG1sO211c3RhY2hlLlNjYW5uZXI9U2Nhbm5lcjttdXN0YWNoZS5Db250ZXh0PUNvbnRleHQ7bXVzdGFjaGUuV3JpdGVyPVdyaXRlcjtyZXR1cm4gbXVzdGFjaGV9KTsiLCIvKipcclxuICogQ29weXJpZ2h0IChjKSAyMDEwLDIwMTEsMjAxMiwyMDEzLDIwMTQgTW9yZ2FuIFJvZGVyaWNrIGh0dHA6Ly9yb2Rlcmljay5ka1xyXG4gKiBMaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xyXG4gKlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbXJvZGVyaWNrL1B1YlN1YkpTXHJcbiAqL1xyXG4hZnVuY3Rpb24obix0KXtcInVzZSBzdHJpY3RcIjt2YXIgcj17fTtuLlB1YlN1Yj1yO3ZhciBlPW4uZGVmaW5lOyFmdW5jdGlvbihuKXt2YXIgdD17fSxyPS0xO2Z1bmN0aW9uIGUobil7dmFyIHQ7Zm9yKHQgaW4gbilpZihuLmhhc093blByb3BlcnR5KHQpKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIG8obix0LHIpe3RyeXtuKHQscil9Y2F0Y2gobil7c2V0VGltZW91dChmdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24oKXt0aHJvdyBufX0obiksMCl9fWZ1bmN0aW9uIGkobix0LHIpe24odCxyKX1mdW5jdGlvbiB1KG4scixlLHUpe3ZhciBmLHM9dFtyXSxjPXU/aTpvO2lmKHQuaGFzT3duUHJvcGVydHkocikpZm9yKGYgaW4gcylzLmhhc093blByb3BlcnR5KGYpJiZjKHNbZl0sbixlKX1mdW5jdGlvbiBmKG4scixvLGkpe3ZhciBmPWZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZT1TdHJpbmcobiksbz1lLmxhc3RJbmRleE9mKFwiLlwiKTtmb3IodShuLG4sdCxyKTstMSE9PW87KWU9ZS5zdWJzdHIoMCxvKSxvPWUubGFzdEluZGV4T2YoXCIuXCIpLHUobixlLHQscil9fShuPVwic3ltYm9sXCI9PXR5cGVvZiBuP24udG9TdHJpbmcoKTpuLHIsaSkscz1mdW5jdGlvbihuKXt2YXIgcj1TdHJpbmcobiksbz1Cb29sZWFuKHQuaGFzT3duUHJvcGVydHkocikmJmUodFtyXSkpLGk9ci5sYXN0SW5kZXhPZihcIi5cIik7Zm9yKDshbyYmLTEhPT1pOylyPXIuc3Vic3RyKDAsaSksaT1yLmxhc3RJbmRleE9mKFwiLlwiKSxvPUJvb2xlYW4odC5oYXNPd25Qcm9wZXJ0eShyKSYmZSh0W3JdKSk7cmV0dXJuIG99KG4pO3JldHVybiEhcyYmKCEwPT09bz9mKCk6c2V0VGltZW91dChmLDApLCEwKX1uLnB1Ymxpc2g9ZnVuY3Rpb24odCxyKXtyZXR1cm4gZih0LHIsITEsbi5pbW1lZGlhdGVFeGNlcHRpb25zKX0sbi5wdWJsaXNoU3luYz1mdW5jdGlvbih0LHIpe3JldHVybiBmKHQsciwhMCxuLmltbWVkaWF0ZUV4Y2VwdGlvbnMpfSxuLnN1YnNjcmliZT1mdW5jdGlvbihuLGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpcmV0dXJuITE7bj1cInN5bWJvbFwiPT10eXBlb2Ygbj9uLnRvU3RyaW5nKCk6bix0Lmhhc093blByb3BlcnR5KG4pfHwodFtuXT17fSk7dmFyIG89XCJ1aWRfXCIrU3RyaW5nKCsrcik7cmV0dXJuIHRbbl1bb109ZSxvfSxuLnN1YnNjcmliZU9uY2U9ZnVuY3Rpb24odCxyKXt2YXIgZT1uLnN1YnNjcmliZSh0LGZ1bmN0aW9uKCl7bi51bnN1YnNjcmliZShlKSxyLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pO3JldHVybiBufSxuLmNsZWFyQWxsU3Vic2NyaXB0aW9ucz1mdW5jdGlvbigpe3Q9e319LG4uY2xlYXJTdWJzY3JpcHRpb25zPWZ1bmN0aW9uKG4pe3ZhciByO2ZvcihyIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShyKSYmMD09PXIuaW5kZXhPZihuKSYmZGVsZXRlIHRbcl19LG4udW5zdWJzY3JpYmU9ZnVuY3Rpb24ocil7dmFyIGUsbyxpLHU9XCJzdHJpbmdcIj09dHlwZW9mIHImJih0Lmhhc093blByb3BlcnR5KHIpfHxmdW5jdGlvbihuKXt2YXIgcjtmb3IociBpbiB0KWlmKHQuaGFzT3duUHJvcGVydHkocikmJjA9PT1yLmluZGV4T2YobikpcmV0dXJuITA7cmV0dXJuITF9KHIpKSxmPSF1JiZcInN0cmluZ1wiPT10eXBlb2YgcixzPVwiZnVuY3Rpb25cIj09dHlwZW9mIHIsYz0hMTtpZighdSl7Zm9yKGUgaW4gdClpZih0Lmhhc093blByb3BlcnR5KGUpKXtpZihvPXRbZV0sZiYmb1tyXSl7ZGVsZXRlIG9bcl0sYz1yO2JyZWFrfWlmKHMpZm9yKGkgaW4gbylvLmhhc093blByb3BlcnR5KGkpJiZvW2ldPT09ciYmKGRlbGV0ZSBvW2ldLGM9ITApfXJldHVybiBjfW4uY2xlYXJTdWJzY3JpcHRpb25zKHIpfX0ociksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZS5hbWQ/ZShmdW5jdGlvbigpe3JldHVybiByfSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJih2b2lkIDAhPT1tb2R1bGUmJm1vZHVsZS5leHBvcnRzJiYoZXhwb3J0cz1tb2R1bGUuZXhwb3J0cz1yKSxleHBvcnRzLlB1YlN1Yj1yLG1vZHVsZS5leHBvcnRzPWV4cG9ydHM9cil9KFwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvd3x8dGhpcyk7IiwiLyohIFVURi04XHJcblxyXG7CqSBrb3ZyaWdpblxyXG7QktGB0LUg0L/RgNCw0LLQsCDRgNCw0LfRgNC10YjQtdC90Ytcclxu0LrRgNCw0YHQuNCy0YvQuSDQtNC40LfQsNC50L0g0LTQvtC70LbQtdC9INC40LzQtdGC0Ywg0LrRgNCw0YHQuNCy0YvQuSDQutC+0LTCrlxyXG5cclxuaHR0cHM6Ly9naXRodWIuY29tL2h0bWxwbHVzY3NzL1xyXG5cclxuKi9cclxuXHJcbiggKCkgPT4ge1xyXG5cclxuXHRsZXQgcmVzaXplVGltZW91dCA9IG51bGwsXHJcblx0XHR3aW5kb3dXaWR0aE9MZCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcblxyXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKCFyZXNpemVUaW1lb3V0KSB7XHJcblxyXG5cdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0cmVzaXplVGltZW91dCA9IG51bGw7XHJcblxyXG5cdFx0XHRcdFx0aWYod2luZG93V2lkdGhPTGQgIT09IHdpbmRvdy5pbm5lcldpZHRoKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR3aW5kb3dXaWR0aE9MZCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuXHRcdFx0XHRcdFx0UHViU3ViLnB1Ymxpc2goJ3dpbmRvd1dpZHRoUmVzaXplJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9LCAxMDApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuXHJcblx0XHRQdWJTdWIucHVibGlzaCgncGFnZUxvYWQnKTtcclxuXHJcblx0XHRDb29raWVzLnNldCgnZmFzdExvYWRTY3JpcHQnLCB0cnVlKTtcclxuXHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdHJhbnNpdGlvbkRlZmF1bHQnLCAnLjNzJyk7XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0taGVhZGVySGVpZ2h0JywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLmNsaWVudEhlaWdodCArICdweCcpO1xyXG5cclxuXHRcdGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKSkge1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZvb3RlckhlaWdodCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKS5jbGllbnRIZWlnaHQgKyAncHgnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQsNC90LjQvNCw0YbQuNC5XHJcblx0d2luZG93LmNzc0FuaW1hdGlvbiA9IGE9PntsZXQgYixjLGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNzc2FuaW1hdGlvblwiKTtzd2l0Y2goYSl7Y2FzZSdhbmltYXRpb24nOmI9e1wiYW5pbWF0aW9uXCI6XCJhbmltYXRpb25lbmRcIixcIk9BbmltYXRpb25cIjpcIm9BbmltYXRpb25FbmRcIixcIk1vekFuaW1hdGlvblwiOlwiYW5pbWF0aW9uZW5kXCIsXCJXZWJraXRBbmltYXRpb25cIjpcIndlYmtpdEFuaW1hdGlvbkVuZFwifTticmVhaztjYXNlJ3RyYW5zaXRpb24nOmI9e1widHJhbnNpdGlvblwiOlwidHJhbnNpdGlvbmVuZFwiLFwiT1RyYW5zaXRpb25cIjpcIm9UcmFuc2l0aW9uRW5kXCIsXCJNb3pUcmFuc2l0aW9uXCI6XCJ0cmFuc2l0aW9uZW5kXCIsXCJXZWJraXRUcmFuc2l0aW9uXCI6XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCJ9fWZvcihjIGluIGIpaWYoZC5zdHlsZVtjXSE9PXVuZGVmaW5lZClyZXR1cm4gYltjXX1cclxuXHJcblx0Ly8gRGV0ZXJtaW5lIGlmIGFuIGVsZW1lbnQgaXMgaW4gdGhlIHZpc2libGUgdmlld3BvcnRcclxuXHR3aW5kb3cuaXNJblZpZXdwb3J0ID0gZWwgPT4ge1xyXG5cdFx0Y29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0cmV0dXJuIChyZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblx0fVxyXG5cclxuXHQvLyDQvtGC0LTQtdC70Y/QtdC8INGC0YvRgdGP0YfQuFxyXG5cdHdpbmRvdy5zZXBOdW1iZXIgPSBmdW5jdGlvbihzdHIpe1xyXG5cdFx0c3RyID0gc3RyLnRvU3RyaW5nKCk7XHJcblx0XHRzdHIgPSBzdHIucmVwbGFjZSgvXFxzKy9nLCcnKTtcclxuXHRcdHJldHVybiBzdHIucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoW15cXGRdfCQpKS9nLCAnJDEgJyk7XHJcblx0fVxyXG5cclxuXHQvLyDRgdC60LvQtdC40LLQsNC10Lwg0YLRi9GB0Y/Rh9C4XHJcblx0d2luZG93LnN0clRvTnVtYmVyID0gZnVuY3Rpb24obil7XHJcblx0XHRyZXR1cm4gcGFyc2VJbnQobi5yZXBsYWNlKC9cXHMrL2csJycpLCAxMCk7XHJcblx0fVxyXG5cclxuLy8g0YHQutC70L7QvdC10L3QuNC1XHJcblx0d2luZG93LmRlY2xlbnNpb24gPSAobnVtLCBleHByZXNzaW9ucykgPT4ge1xyXG5cclxuXHRcdGxldCByLFxyXG5cdFx0XHRjb3VudCA9IG51bSAlIDEwMDtcclxuXHJcblx0XHRpZiAoY291bnQgPiA0ICYmIGNvdW50IDwgMjEpe1xyXG5cclxuXHRcdFx0ciA9IGV4cHJlc3Npb25zWycyJ107XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRjb3VudCA9IGNvdW50ICUgMTA7XHJcblxyXG5cdFx0XHRpZiAoY291bnQgPT0gMSl7XHJcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycwJ107XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoY291bnQgPiAxICYmIGNvdW50IDwgNSl7XHJcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycxJ107XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRyID0gZXhwcmVzc2lvbnNbJzInXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcjtcclxuXHJcblx0fVxyXG5cclxufSkoKTsiLCJcclxuKCBsaW5rcyA9PiB7XHJcblxyXG5cdGlmKGxpbmtzLmxlbmd0aCkge1xyXG5cclxuXHRcdGNvbnN0IGhpc3RvcnlCYWNrID0gZXZlbnQ9PiB7XHJcblxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRoaXN0b3J5LmJhY2soKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0QXJyYXkuZnJvbShsaW5rcywgbGluayA9PiB7XHJcblxyXG5cdFx0XHRpZihkb2N1bWVudC5yZWZlcnJlci5pbmRleE9mKGxvY2F0aW9uLmhvc3RuYW1lKSA+IDApIHtcclxuXHJcblx0XHRcdFx0bGluay5vbmNsaWNrID0gaGlzdG9yeUJhY2s7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1idG4tYmFjaycpKTsiLCJcclxuLy8gbGFuZyBFTnxSVSDQsiDRgtC+0LLQsNGA0LVcclxuXHJcbiggZm9ybSA9PiB7XHJcblxyXG5cdGlmKGZvcm0gPT09IG51bGwpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Ly8g0LrQvdC+0L/QutC4INGB0LrQsNGH0LDRgtGMXHJcblxyXG5cdGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kb2NzLWl0ZW0tbGFuZ10nKTtcclxuXHJcblx0aWYoYnRucy5sZW5ndGgpIHtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGxhbmcgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZG9jcy1pdGVtLWxhbmdcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShidG5zLCBlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWRvY3MtaXRlbS1sYW5nJykgIT09IGxhbmcpKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHQvLyDRhNC+0YDQvNCwINC30LDQv9GA0L7RgdCwINGG0LXQvdGLINCyINC80L7QtNCw0LvQutC1XHJcblxyXG5cdGNvbnN0IGZvcm1HZXRQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLW1vZGFsLWdldC1wcmljZScpO1xyXG5cclxuXHRpZihmb3JtR2V0UHJpY2UpIHtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGxhbmcgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZG9jcy1pdGVtLWxhbmdcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG5cclxuXHRcdFx0Zm9ybUdldFByaWNlLmVsZW1lbnRzLmxhbmcudmFsdWUgPSBsYW5nO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1pdGVtX19sYW5nJykpOyIsIlxyXG4vLyBmb3Jtc1xyXG5cclxuKCBmaWVsZHNldHMgPT4ge1xyXG5cclxuXHRpZihmaWVsZHNldHMubGVuZ3RoKSB7XHJcblxyXG5cdFx0Y29uc3Qgc2VhcmNoUmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3Mtc2VhcmNoLXJlc3VsdCcpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oZmllbGRzZXRzLCBmaWVsZHNldCA9PiB7XHJcblxyXG5cdFx0XHQvLyBvcGVuXHJcblxyXG5cdFx0XHRmaWVsZHNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0aWYgKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLmRvY3MtZm9ybV9fcmVzdWx0JykgKSB7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oZmllbGRzZXRzLCBlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1mb2N1cycsIGVsID09PSBmaWVsZHNldCkpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRjb25zdCBmb3JtID0gZmllbGRzZXQuY2xvc2VzdCgnLmRvY3MtZm9ybScpLFxyXG5cdFx0XHRcdCAgaW5wdXQgPSBmaWVsZHNldC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1mb3JtX19pbnB1dCcpLFxyXG5cdFx0XHRcdCAgcmVzZXQgPSBmaWVsZHNldC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1mb3JtX19yZXNldCcpLFxyXG5cdFx0XHRcdCAgcmVzdWx0ID0gZmllbGRzZXQucXVlcnlTZWxlY3RvcignLmRvY3MtZm9ybV9fcmVzdWx0JylcclxuXHRcdFx0XHQgIGZvcm1TaG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXBhZ2UtLXNob3J0Jyk7XHJcblxyXG5cdFx0XHQvLyBpbnB1dFxyXG5cclxuXHRcdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oZmllbGRzZXRzLCBlbCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZm9jdXMnLCBlbCA9PT0gZmllbGRzZXQpO1xyXG5cclxuXHRcdFx0XHRcdGlmICggZmllbGRzZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkb2NzLWZvcm1fX2NhdGFsb2cnKSAmJiBlbCAhPT0gZmllbGRzZXQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdC8qIG5vbWVuY2xhdHVyZSAqL1xyXG5cclxuXHRcdFx0aWYoZmllbGRzZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkb2NzLWZvcm1fX25vbWVuY2xhdHVyZScpKSB7XHJcblxyXG5cdFx0XHRcdC8vIGRhdGFsaXN0XHJcblxyXG5cdFx0XHRcdGNvbnN0IGRhdGFsaXN0ID0gZmllbGRzZXQucXVlcnlTZWxlY3RvckFsbCgnLmRvY3MtZm9ybV9fcmVzdWx0LWRhdGFsaXN0Jyk7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oZGF0YWxpc3QsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0ZmllbGRzZXQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZm9jdXMnKTtcclxuXHJcblx0XHRcdFx0XHRcdGlucHV0LnZhbHVlID0gYnRuLnRleHRDb250ZW50LnRyaW0oKTtcclxuXHJcblx0XHRcdFx0XHRcdHJlc2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtbm9lbXB0eScpO1xyXG5cclxuXHRcdFx0XHRcdFx0Zm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRcdFx0cmVzZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIHZhbHVlLmxlbmd0aCA9PT0gMCk7XHJcblxyXG5cdFx0XHRcdFx0aWYodmFsdWUubGVuZ3RoID4gMSkge1xyXG5cclxuXHRcdFx0XHRcdFx0QXJyYXkuZnJvbShkYXRhbGlzdCwgYnRuID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGV4dCA9IGJ0bi50ZXh0Q29udGVudC50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCB0ZXh0LmluZGV4T2YodmFsdWUpID09PSAtMSk7XHJcblxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1lbXB0eScpO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRBcnJheS5mcm9tKGRhdGFsaXN0LCBidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Ly8gcmVzZXQgPT09IGNsZWFyXHJcblxyXG5cdFx0XHRcdHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdEFycmF5LmZyb20oZGF0YWxpc3QsIGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcclxuXHRcdFx0XHRcdGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2lzLWZvY3VzJyk7XHJcblx0XHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW5vZW1wdHknKTtcclxuXHRcdFx0XHRcdGlucHV0LnZhbHVlID0gJyc7XHJcblx0XHRcdFx0XHRpbnB1dC5mb2N1cygpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Ly8gcmVzZXQg0YLQsNC8INCz0LTQtSDRgNC10LDQu9GM0L3QsNGPINC60L3QvtC/0LrQsCByZXNldFxyXG5cclxuXHRcdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdEFycmF5LmZyb20oZGF0YWxpc3QsIGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcclxuXHRcdFx0XHRcdGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2lzLWZvY3VzJyk7XHJcblx0XHRcdFx0XHRpbnB1dC5mb2N1cygpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHQvKiBkZXZlbG9wZXIgKi9cclxuXHJcblx0XHRcdGlmKGZpZWxkc2V0LmNsYXNzTGlzdC5jb250YWlucygnZG9jcy1mb3JtX19kZXZlbG9wZXInKSkge1xyXG5cclxuXHRcdFx0XHQvLyBjaGVja2JveFxyXG5cclxuXHRcdFx0XHRjb25zdCBjaGVja2JveCA9IGZpZWxkc2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveF9faW5wdXQnKTtcclxuXHJcblx0XHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYoIGV2ZW50LnRhcmdldC50eXBlICE9PSAnY2hlY2tib3gnICkge1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRsZXQgdmFsdWUgPSAnJztcclxuXHJcblx0XHRcdFx0XHRpZiAoIGV2ZW50LnRhcmdldC5uYW1lID09PSAnYWxsJyAmJiBldmVudC50YXJnZXQuY2hlY2tlZCApIHtcclxuXHJcblx0XHRcdFx0XHRcdHZhbHVlID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUudGV4dENvbnRlbnQudHJpbSgpO1xyXG5cclxuXHRcdFx0XHRcdFx0QXJyYXkuZnJvbShjaGVja2JveCwgZWwgPT4gZWwuY2hlY2tlZCA9IHRydWUpO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRBcnJheS5mcm9tKGNoZWNrYm94LCBlbCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmKCBlbC5uYW1lID09PSAnYWxsJyApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRlbC5jaGVja2VkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0aWYoIGVsLmNoZWNrZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgbGFiZWwgPSBlbC5wYXJlbnROb2RlO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmKCB2YWx1ZSAhPT0gJycgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZSArPSAnLCAnO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZSArPSBsYWJlbC50ZXh0Q29udGVudC50cmltKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9IHZhbHVlO1xyXG5cclxuXHRcdFx0XHRcdGlmKCB2YWx1ZSA9PT0gJycgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXNldC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtbm9lbXB0eScpO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXNldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtbm9lbXB0eScpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdC8vIHJlc2V0ID09PSBjbGVhclxyXG5cclxuXHRcdFx0XHRyZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRBcnJheS5mcm9tKGNoZWNrYm94LCBlbCA9PiBlbC5jaGVja2VkID0gZmFsc2UpO1xyXG5cdFx0XHRcdFx0ZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnaXMtZm9jdXMnKTtcclxuXHRcdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtbm9lbXB0eScpO1xyXG5cdFx0XHRcdFx0aW5wdXQudmFsdWUgPSAnJztcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBwcm9kdWN0XHJcblxyXG5cdFx0XHRpZihmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZG9jcy1mb3JtLS1wcm9kdWN0JykpIHtcclxuXHJcblx0XHRcdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYoaW5wdXQudmFsdWUubGVuZ3RoID4gMiAmJiBldmVudC5rZXkgIT09ICdlbnRlcicpe1xyXG5cclxuXHRcdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtLS1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG5cdFx0XHRcdFx0XHQudGhlbihodG1sID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coaHRtbCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5pbm5lckhUTUwgPSBodG1sO1xyXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLS1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHJlc2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0cmVzdWx0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdGlucHV0LmZvY3VzKCk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0aWYoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZG9jcy1mb3JtX19maWVsZHNldCcpID09PSBudWxsICl7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oZmllbGRzZXRzLCBlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1mb2N1cycsICdoaWRlJykpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gdGFic1xyXG5cclxuXHRcdFx0Y29uc3QgdGFic0J0biA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZG9jcy1wYWdlX190YWJzLWl0ZW0nKTtcclxuXHJcblx0XHRcdGlmKCB0YWJzQnRuICl7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXBhZ2VfX3RhYnMtaXRlbS5pcy1hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuXHRcdFx0XHR0YWJzQnRuLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRpZiggdGFic0J0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2RvY3MtcGFnZV9fdGFicy1pdGVtLS1zdGFuZGFydHMnKSApIHtcclxuXHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1wYWdlX19mb3Jtcy0tc3RhbmRhcnRzJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3MtcGFnZV9fZm9ybXMtLWFuYWx5dGljcycpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiggdGFic0J0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2RvY3MtcGFnZV9fdGFicy1pdGVtLS1hbmFseXRpY3MnKSApIHtcclxuXHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1wYWdlX19mb3Jtcy0tYW5hbHl0aWNzJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3MtcGFnZV9fZm9ybXMtLXN0YW5kYXJ0cycpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHJcblx0XHQvLyBmb3JtIGxpc3RcclxuXHJcblx0XHRBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb2NzLWZvcm0nKSwgZm9ybSA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBpbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmRvY3MtZm9ybV9faW5wdXQnKSxcclxuXHRcdFx0XHQgIHJlc2V0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZG9jcy1mb3JtX19yZXNldCcpO1xyXG5cclxuXHRcdFx0Ly8gcmVzZXRcclxuXHJcblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCAoKSA9PiByZXNldC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xyXG5cclxuXHRcdFx0Ly8gaW5wdXRcclxuXHJcblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtbm9lbXB0eScsIGlucHV0LnZhbHVlLmxlbmd0aCA+IDApO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBzdWJtaXRcclxuXHJcblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiaW5wdXRcIikpO1xyXG5cdFx0XHRcdGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gZm9ybSBsaXN0XHJcblxyXG5cdFx0QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG9jcy1mb3JtLS1saXN0JyksIGZvcm0gPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWZvcm1fX2lucHV0JyksXHJcblx0XHRcdFx0ICByZXNldCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmRvY3MtZm9ybV9fcmVzZXQnKSxcclxuXHRcdFx0XHQgIHJlc3VsdCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmRvY3MtZm9ybV9fcmVzdWx0Jyk7XHJcblxyXG5cdFx0XHQvLyBjaGFuZ2VcclxuXHJcblx0XHRcdGxldCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG5cclxuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmKHNlYXJjaFJlc3VsdC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWxvYWRpbmcnKSkge1xyXG5cclxuXHRcdFx0XHRcdGNvbnRyb2xsZXIuYWJvcnQoKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhmb3JtLCAnY2hhbmdlJyk7XHJcblxyXG5cdFx0XHRcdHNlYXJjaFJlc3VsdC5jbGFzc0xpc3QuYWRkKCdpcy1sb2FkaW5nJyk7XHJcblx0XHRcdFx0c2VhcmNoUmVzdWx0LmlubmVySFRNTCA9ICcnO1xyXG5cclxuXHRcdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pLFxyXG5cdFx0XHRcdFx0c2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG5cdFx0XHRcdC50aGVuKGh0bWwgPT4ge1xyXG5cclxuXHRcdFx0XHRcdHNlYXJjaFJlc3VsdC5pbm5lckhUTUwgPSBodG1sO1xyXG5cdFx0XHRcdFx0c2VhcmNoUmVzdWx0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGlmKGZvcm1TaG9ydCA9PT0gbnVsbCkge1xyXG5cclxuXHRcdFx0XHRcdGZvcm1TaG9ydCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlLWJsdWUnKTtcclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXBhZ2UnKS5jbGFzc0xpc3QuYWRkKCdkb2NzLXBhZ2UtLXNob3J0Jyk7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1wYWdlX19kZXNjcmlwdGlvbicpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBhamF4IGxvYWQgc2Nyb2xsXHJcblxyXG5cdFx0XHRpZiAoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpIHtcclxuXHJcblx0XHRcdFx0Y29uc3QgYm94UmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5cdFx0XHRcdGxldCBwYWdpbiA9IDIsXHJcblx0XHRcdFx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGNhbGxiYWNrID0gKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0QXJyYXkuZnJvbShlbnRyaWVzLCBlbnRyeSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZihlbnRyeS5pc0ludGVyc2VjdGluZyAmJiBmb3JtLmNsYXNzTGlzdC5jb250YWlucygnaXMtbG9hZGluZycpID09PSBmYWxzZSAmJiBmb3JtLm9mZnNldFBhcmVudCAhPT0gbnVsbCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0bGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG5cdFx0XHRcdFx0XHRcdGZvcm1EYXRhLmFwcGVuZCgncGFnaW4nLCBwYWdpbik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0XHRcdFx0XHRib2R5OiBmb3JtRGF0YVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG5cdFx0XHRcdFx0XHRcdC50aGVuKGh0bWwgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGh0bWwpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGJveFJlc3VsdC5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRBcnJheS5mcm9tKGJveFJlc3VsdC5xdWVyeVNlbGVjdG9yQWxsKCcuZG9jcy1jYXRhbG9nX19pdGVtJyksIGl0ZW0gPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c2VhcmNoUmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWNhdGFsb2dfX2xpc3QnKS5hcHBlbmRDaGlsZChpdGVtKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiggd2luZG93U2Nyb2xsICE9PSB3aW5kb3cucGFnZVlPZmZzZXQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCx3aW5kb3dTY3JvbGwpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRwYWdpbisrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xyXG5cclxuXHRcdFx0XHRvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb2NzLWZvcm1fX2ZpZWxkc2V0JykpOyIsIiggKCkgPT4ge1xyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0bGV0IGZvcm0gPSBldmVudC50YXJnZXQ7XHJcblxyXG5cdFx0Ly8g0LTQvtCx0LDQstC40YLRjCDQsiDQuNC30LHRgNCw0L3QvdC+0LVcclxuXHJcblx0XHRpZiAoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0tYWRkLWZhdm91cml0ZScpKSB7XHJcblxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oanNvbiA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGpzb24pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vINC30LDQv9GA0L7RgSDRhtC10L3RiyDQsiDRgdC/0LjRgdC60LUg0YDQtdC30YPQu9GM0YLQsNGC0L7QsiDQkNCy0YLQvtGA0LjQt9C+0LLQsNC9XHJcblxyXG5cdFx0aWYgKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtLWdldC1wcmljZScpKSB7XHJcblxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Y29uc3QgYnRuU3VibWl0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1nZXQtcHJpY2VfX3N1Ym1pdCcpO1xyXG5cclxuXHRcdFx0YnRuU3VibWl0LmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRcdC50aGVuKGpzb24gPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhqc29uKTtcclxuXHJcblx0XHRcdFx0YnRuU3VibWl0LnRleHRDb250ZW50ID0gYnRuU3VibWl0LmdldEF0dHJpYnV0ZSgnZGF0YS1kb25lJyk7XHJcblxyXG5cdFx0XHRcdG5vdGlmaWNhdGlvbihqc29uLm5vdGlmaWNhdGlvblRpdGxlLGpzb24ubm90aWZpY2F0aW9uVGV4dCxqc29uLm5vdGlmaWNhdGlvblRpbWVyKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KSgpOyIsIiggaXRlbXMgPT4ge1xyXG5cclxuXHRpZighaXRlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oaXRlbXMsIGZvcm0gPT4ge1xyXG5cclxuXHRcdGNvbnN0IGJ0biA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm1fX3N1Ym1pdCcpLFxyXG5cdFx0XHQgIG9rVGV4dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm1fX29rJyksXHJcblx0XHRcdCAgZXJyb3JUZXh0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fZXJyb3InKTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHRcdFx0YnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG5cdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xyXG5cdFx0XHRcdGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4vKlxyXG5cdFx0XHRcdGlmKHJlc3VsdC5tc2cpIHtcclxuXHJcblx0XHRcdFx0XHRmb3JtLnJlc2V0KCk7XHJcblxyXG5cdFx0XHRcdFx0bW9kYWwub2socmVzdWx0Lm1zZy50aXRsZSwgcmVzdWx0Lm1zZy50ZXh0KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8g0YDQtdC30YPQu9GM0YLQsNGCINGD0YHQv9C10YXQsCDQt9Cw0Y/QstC60LggcXVhbGl0eVxyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQubW9kYWwgPT09ICdxdWFsaXR5LW9rJykge1xyXG5cclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWFsaXR5LXJlc3VsdF9fbnVtYmVyJykudGV4dENvbnRlbnQgPSByZXN1bHQubnVtYmVyO1xyXG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1YWxpdHktcmVzdWx0X19wcm9kdWN0JykudGV4dENvbnRlbnQgPSByZXN1bHQucHJvZHVjdE5hbWU7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVhbGl0eS1yZXN1bHRfX3Byb2R1Y3QnKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnLCByZXN1bHQucHJvZHVjdExpbmspO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGV2ZW50TW9kYWxTaG93ID0gbmV3IEN1c3RvbUV2ZW50KFwibW9kYWxTaG93XCIsIHtcclxuXHRcdFx0XHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0XHRcdFx0c2VsZWN0b3I6IHJlc3VsdC5tb2RhbFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR3aW5kb3cubW9kYWwuZGlzcGF0Y2hFdmVudChldmVudE1vZGFsU2hvdyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGluZm8gbW9kYWxcclxuXHJcblx0XHRcdFx0aWYocmVzdWx0LnR5cGUgPT09ICdvaycgfHwgcmVzdWx0LnR5cGUgPT09ICdlcnJvcicpIHtcclxuXHJcblx0XHRcdFx0XHRtb2RhbC5vayhyZXN1bHQudGl0bGUsIHJlc3VsdC50ZXh0LCByZXN1bHQubW9kKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gb2sgaW4gZm9ybVxyXG5cclxuXHRcdFx0XHRpZihva1RleHQpIHtcclxuXHJcblx0XHRcdFx0XHRpZihyZXN1bHQudHlwZSA9PT0gJ2Zvcm0tb2snKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRva1RleHQudGV4dENvbnRlbnQgPSByZXN1bHQudGV4dDtcclxuXHRcdFx0XHRcdFx0b2tUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmKCFJTlRJLmlzSW5WaWV3cG9ydChva1RleHQpKXtcclxuXHJcblx0XHRcdFx0XHRcdFx0b2tUZXh0LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRva1RleHQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gZXJyb3IgaW4gZm9ybVxyXG5cclxuXHRcdFx0XHRpZihlcnJvclRleHQpIHtcclxuXHJcblx0XHRcdFx0XHRpZihyZXN1bHQudHlwZSA9PT0gJ2Zvcm0tZXJyb3InKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRlcnJvclRleHQudGV4dENvbnRlbnQgPSByZXN1bHQudGV4dDtcclxuXHRcdFx0XHRcdFx0ZXJyb3JUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmKCFJTlRJLmlzSW5WaWV3cG9ydChlcnJvclRleHQpKXtcclxuXHJcblx0XHRcdFx0XHRcdFx0ZXJyb3JUZXh0LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRlcnJvclRleHQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gcmVkaXJlY3RcclxuXHJcblx0XHRcdFx0aWYocmVzdWx0LnJlZGlyZWN0KSB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgZGVsYXkgPSByZXN1bHQucmVkaXJlY3REZWxheSA/IHJlc3VsdC5yZWRpcmVjdERlbGF5ICogMTAwMCA6IDA7XHJcblxyXG5cdFx0XHRcdFx0c2V0VGltZW91dCggKCk9PiBsb2NhdGlvbi5hc3NpZ24ocmVzdWx0LnJlZGlyZWN0KSwgZGVsYXkpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBmYWRlb3V0XHJcblxyXG5cdFx0XHRcdGlmKHJlc3VsdC5mYWRlb3V0KSB7XHJcblxyXG5cdFx0XHRcdFx0b2tUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZhZGVvdXQnKTtcclxuXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKT0+IG9rVGV4dC5jbGFzc0xpc3QuYWRkKCdpcy1mYWRlb3V0JyksIHJlc3VsdC5mYWRlb3V0ICogMTAwMCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHJlc2V0XHJcblxyXG5cdFx0XHRcdGlmKHJlc3VsdC5yZXNldCkge1xyXG5cclxuXHRcdFx0XHRcdGZvcm0ucmVzZXQoKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gcmVsb2FkXHJcblxyXG5cdFx0XHRcdGlmKHJlc3VsdC5yZWZyZXNoKSB7XHJcblxyXG5cdFx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XHJcblxyXG5cdFx0XHRcdH1cclxuKi9cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0nKSk7XHJcblxyXG4oIGZpbGVzID0+IHtcclxuXHJcblx0aWYoIWZpbGVzLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGZpbGVzLCBlbCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaW5wdXQgPSBlbC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZmlsZV9faW5wdXQnKSxcclxuXHRcdFx0ICB2YWx1ZSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1maWxlX192YWx1ZScpO1xyXG5cclxuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoJ2lzLWNoYW5nZScpO1xyXG5cdFx0XHR2YWx1ZS50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1maWxlJykpOyIsIiggZm9ybUdldFByaWNlID0+IHtcclxuXHJcblx0aWYgKCBmb3JtR2V0UHJpY2UgPT09IG51bGwgKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vINC60LvQuNC60LUg0LIg0YDQtdC30YPQu9GM0YLQsNGC0LDRhSDQv9C+0LjRgdC60LAg0L/QviDQutC90L7Qv9C60LUg0KPQt9C90LDRgtGMINGB0YLQvtC40LzQvtGB0YLRjFxyXG5cclxuXHRjb25zdCBzZWFyY2hSZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1zZWFyY2gtcmVzdWx0Jyk7XHJcblxyXG5cdGlmICggc2VhcmNoUmVzdWx0ICkge1xyXG5cclxuXHRcdHNlYXJjaFJlc3VsdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGlmKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLmRvY3MtY2F0YWxvZy1pdGVtX19yZXF1ZXN0W2RhdGEtbW9kYWw9XCJnZXQtcHJpY2VcIl0nKSApIHtcclxuXHJcblx0XHRcdFx0Zm9ybUdldFByaWNlLmVsZW1lbnRzLmlkLnZhbHVlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kb2NzLWNhdGFsb2ctaXRlbV9fcmVxdWVzdFtkYXRhLW1vZGFsPVwiZ2V0LXByaWNlXCJdJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0Ly8g0L7QsdGA0LDQsdC+0YLQutCwINGE0L7RgNC80Ysg0LIg0LzQvtC00LDQu9C60LVcclxuXHJcblx0Zm9ybUdldFByaWNlLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHR9KVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0LnRoZW4oanNvbiA9PiB7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhqc29uKTtcclxuXHJcblx0XHRcdGlmKCBqc29uLmlkICkge1xyXG5cclxuXHRcdFx0XHRjb25zdCBidG5UYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZG9jcy1jYXRhbG9nLWl0ZW1fX3JlcXVlc3RbZGF0YS1pZD1cIiR7anNvbi5pZH1cIl1gKTtcclxuXHJcblx0XHRcdFx0YnRuVGFyZ2V0LnRleHRDb250ZW50ID0gYnRuVGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1kb25lJyk7XHJcblx0XHRcdFx0YnRuVGFyZ2V0LmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG5vdGlmaWNhdGlvbihqc29uLm5vdGlmaWNhdGlvblRpdGxlLGpzb24ubm90aWZpY2F0aW9uVGV4dCxqc29uLm5vdGlmaWNhdGlvblRpbWVyKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1nZXQtcHJpY2UnKSk7IiwiKCBmb3JtcyA9PiB7XHJcblxyXG5cdGlmKCFmb3Jtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcbi8qXHRBcnJheS5mcm9tKGZvcm1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRjb25zdCBpbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmxpdmUtc2VhcmNoX19pbnB1dCcpLFxyXG5cdFx0XHQgIHJlc3VsdCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmxpdmUtc2VhcmNoX19yZXN1bHQnKTtcclxuXHJcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGlmKGlucHV0LnZhbHVlLmxlbmd0aCA+IDIgJiYgZXZlbnQua2V5ICE9PSAnZW50ZXInKXtcclxuXHJcblx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdsaXZlLXNlYXJjaC0tbG9hZGluZycsICdsaXZlLXNlYXJjaC0tb3BlbicpO1xyXG5cclxuXHRcdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcblx0XHRcdFx0LnRoZW4oaHRtbCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coaHRtbCk7XHJcblxyXG5cdFx0XHRcdFx0cmVzdWx0LmlubmVySFRNTCA9IGh0bWw7XHJcblx0XHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2xpdmUtc2VhcmNoLS1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8g0YHQutGA0YvRgtGMINGA0YPQt9C10LvRjNGC0LDRgtGLINC/0YDQuCDQutC70LjQutC1INCy0L3QtSDRhNC+0YDQvNGLXHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlzRm9ybSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubGl2ZS1zZWFyY2gnKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGZvcm1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRcdGlmKGlzRm9ybSAhPT0gZm9ybSkge1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2xpdmUtc2VhcmNoLS1vcGVuJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pOyovXHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGl2ZS1zZWFyY2gnKSk7IiwiKCBwYWdlID0+IHtcclxuXHJcblx0aWYocGFnZSkge1xyXG5cclxuXHRcdGNvbnN0IGNvbnRlbnQgPSBwYWdlLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXBhZ2VfX2NvbnRlbnQnKTtcclxuXHJcblx0XHRpZiAoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpIHtcclxuXHJcblx0XHRcdGNvbnN0IGNhbGxiYWNrID0gKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oZW50cmllcywgZW50cnkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2ssIHtcclxuXHRcdFx0XHR0aHJlc2hvbGQ6IDFcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRvYnNlcnZlci5vYnNlcnZlKGNvbnRlbnQpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tcGFnZScpKTsiLCIoIGVsZW1zID0+IHtcclxuXHJcblx0aWYoIWVsZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHRzY3JpcHQuc3JjID0gJy9qcy9pbnB1dG1hc2subWluLmpzJztcclxuXHRzY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG5cclxuXHRcdEFycmF5LmZyb20oZWxlbXMsIGVsID0+IHtcclxuXHJcblx0XHRcdGxldCBtYXNrSW5wdXQ7XHJcblxyXG5cdFx0XHRpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0bWFzay0tcGhvbmUnKSkge1xyXG5cclxuXHRcdFx0XHRtYXNrSW5wdXQgPSBuZXcgSW5wdXRtYXNrKHtcclxuXHRcdFx0XHRcdG1hc2s6IFwiKzcgKDk5OSkgOTk5IDk5IDk5XCIsXHJcblx0XHRcdFx0XHRzaG93TWFza09uSG92ZXI6IGZhbHNlXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtYXNrSW5wdXQubWFzayhlbCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH07XHJcblxyXG5cdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KSwgQ29va2llcy5nZXQoJ2Zhc3RMb2FkU2NyaXB0JykgPyAwIDogMTAwMDApO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0bWFzaycpKTsiLCIvLyBidG4gdG9nZ2xlXHJcblxyXG4vKiggYnRuID0+IHtcclxuXHJcblx0aWYoYnRuKSB7XHJcblxyXG5cdFx0bGV0IHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZihkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnbWVudS1zaG93JykpIHtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXNob3cnKTtcclxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCx3aW5kb3dTY3JvbGwpO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21lbnUtc2hvdycpO1xyXG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLW1lbnUtdG9nZ2xlJykpO1xyXG4qL1xyXG4vLyBtZW51IHNlcnZpY2VcclxuXHJcbiggbWVudSA9PiB7XHJcblxyXG5cdGlmKG1lbnUpIHtcclxuXHJcblx0XHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyksXHJcblx0XHRcdCAgbWVudVVzZXIgPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdXNlcicpO1xyXG5cclxuXHRcdGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBpdGVtID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tZW51X19pdGVtJyk7XHJcblxyXG5cdFx0XHRpZihpdGVtICE9PSBudWxsKSB7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1zZXJ2aWNlLXNob3cnLCBpdGVtLmNsYXNzTGlzdC5jb250YWlucygnbWVudV9fc2VydmljZScpKTtcclxuXHRcdFx0XHRtZW51VXNlciAmJiBtZW51VXNlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtc2VydmljZS1zaG93Jyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cclxuXHRcdC8vIG1lbnUgdXNlclxyXG5cclxuXHRcdGlmKG1lbnVVc2VyKSB7XHJcblxyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0aWYoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuaGVhZGVyX191c2VyLWJ0bicpICl7XHJcblxyXG5cdFx0XHRcdFx0bWVudVVzZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuaGVhZGVyX191c2VyJykgPT09IG51bGwgKXtcclxuXHJcblx0XHRcdFx0XHRtZW51VXNlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtc2VydmljZScpKTtcclxuIiwiKCBtb2RhbCA9PiB7XHJcblxyXG5cdGlmKCFtb2RhbCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBpdGVtcyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9faXRlbScpLFxyXG5cdFx0ICBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWxdJyksXHJcblx0XHQgIHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpLFxyXG5cdFx0ICBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XHJcblxyXG5cdGxldCBhY3RpdmVNb2RhbCA9IG51bGwsXHJcblx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUnLCAoKSA9PiB7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1zaG93Jyk7XHJcblx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IDA7XHJcblx0XHRoZWFkZXIuc3R5bGUudG9wID0gMDtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLHdpbmRvd1Njcm9sbCk7XHJcblx0XHRhY3RpdmVNb2RhbCA9IGZhbHNlO1xyXG5cclxuXHR9KTtcclxuXHJcblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcblxyXG5cdFx0XHRtb2RhbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImhpZGVcIikpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IG1vZGFsU2hvdyA9IHNlbGVjdG9yID0+IHtcclxuXHJcblx0XHRpZighYWN0aXZlTW9kYWwpe1xyXG5cclxuXHRcdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3NlYXJjaC1vcGVuJywgc2VsZWN0b3IgPT09ICdzZWFyY2gnKTtcclxuXHJcblx0XHRhY3RpdmVNb2RhbCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tJyArIHNlbGVjdG9yKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGl0ZW1zLCBlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCd2aXN1YWxseWhpZGRlbicsIGVsICE9PSBhY3RpdmVNb2RhbCkpO1xyXG5cclxuXHRcdHdyYXBwZXIuc3R5bGUudG9wID0gLXdpbmRvd1Njcm9sbCArICdweCc7XHJcblx0XHRoZWFkZXIuc3R5bGUudG9wID0gd2luZG93U2Nyb2xsICsgJ3B4JztcclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtc2hvdycpO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsMCk7XHJcblxyXG5cdFx0YWN0aXZlTW9kYWwuZm9jdXMoKTtcclxuXHJcblx0XHRQdWJTdWIucHVibGlzaCgnb3Blbi0nICsgc2VsZWN0b3IpO1xyXG5cclxuXHR9O1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZiggKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsJykgJiYgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlYXJjaC1vcGVuJykgPT09IGZhbHNlKSB8fCBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1vZGFsX19jbG9zZScpKXtcclxuXHJcblx0XHRcdG1vZGFsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiaGlkZVwiKSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0bGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHJcblx0XHR3aGlsZSAodGFyZ2V0ICE9PSBkb2N1bWVudCkge1xyXG5cclxuXHRcdFx0aWYgKHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwnKSkge1xyXG5cclxuXHRcdFx0XHRtb2RhbFNob3codGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ21vZGFsU2hvdycsIGV2ZW50ID0+IG1vZGFsU2hvdyhldmVudC5kZXRhaWwuc2VsZWN0b3IpKTtcclxuXHJcblx0bW9kYWwub2sgPSAodGl0bGUsIHRleHQsIG1vZCA9ICcnKSA9PiB7XHJcblxyXG5cdFx0bW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS1vaycpLnNldEF0dHJpYnV0ZSgnZGF0YS1tb2QnLCBtb2QpO1xyXG5cdFx0bW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS1vayAubW9kYWwtbWluaV9fdGl0bGUnKS5pbm5lckhUTUwgPSB0aXRsZSA/IHRpdGxlIDogJyc7XHJcblx0XHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLW9rIC5tb2RhbC1taW5pX190ZXh0JykuaW5uZXJIVE1MID0gdGV4dCA/IHRleHQgOiAnJztcclxuXHRcdG1vZGFsU2hvdygnb2snKTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykpOyIsIiggbm90aWZpY2F0aW9uID0+IHtcclxuXHJcblx0aWYoIW5vdGlmaWNhdGlvbikge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBib3ggPSBub3RpZmljYXRpb24ucXVlcnlTZWxlY3RvcignLmNlbnRlcicpLFxyXG5cdFx0ICB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RpZmljYXRpb24tdGVtcGxhdGUnKS5pbm5lckhUTUw7XHJcblxyXG5cdHdpbmRvdy5ub3RpZmljYXRpb24gPSAoaGVhZCwgdGV4dCwgdGltZXIgPSAzLjMpID0+IHtcclxuXHJcblx0XHRib3guaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUsIHsgaGVhZCwgdGV4dCB9KSk7XHJcblxyXG5cdFx0Y29uc3QgaXRlbSA9IGJveC5xdWVyeVNlbGVjdG9yKCcuaXMtbmV3Jyk7XHJcblxyXG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuXHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1uZXcnKTtcclxuXHRcdFx0aXRlbS5zdHlsZS5oZWlnaHQgPSBpdGVtLmNsaWVudEhlaWdodCArICdweCc7XHJcblxyXG5cdFx0fSwgMTAwKTtcclxuXHJcblx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LmNzc0FuaW1hdGlvbigndHJhbnNpdGlvbicpLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiggaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWhpZGUnKSApe1xyXG5cclxuXHRcdFx0XHRpdGVtLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGUnKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCAoKT0+IHtcclxuXHJcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtaGlkZScpO1xyXG5cclxuXHRcdH0sIDEwMDAgKiB0aW1lcik7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb24nKSk7IiwiKCBmb3JtID0+IHtcclxuXHJcblx0aWYoIWZvcm0pIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2lucHV0JyksXHJcblx0XHQgIHJlc3VsdCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLnNlYXJjaF9fcmVzdWx0LWlubmVyJyk7XHJcblxyXG5cdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKGlucHV0LnZhbHVlLmxlbmd0aCA+IDIgJiYgZXZlbnQua2V5ICE9PSAnZW50ZXInKXtcclxuXHJcblx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcblx0XHRcdC50aGVuKGh0bWwgPT4ge1xyXG5cclxuXHRcdFx0XHRyZXN1bHQuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHNldEhlaWdodCA9ICgpID0+IHtcclxuXHJcblx0XHRjb25zdCByZWN0ID0gcmVzdWx0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0cmVzdWx0LnN0eWxlLm1heEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHJlY3QudG9wICsgJ3B4JztcclxuXHJcblx0fTtcclxuXHJcblx0UHViU3ViLnN1YnNjcmliZSgnb3Blbi1zZWFyY2gnLCAoKSA9PiB7XHJcblxyXG5cdFx0aW5wdXQuZm9jdXMoKTtcclxuXHJcblx0XHRzZXRIZWlnaHQoKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdFB1YlN1Yi5zdWJzY3JpYmUoJ3dpbmRvd1dpZHRoUmVzaXplJywgKCkgPT4gc2V0SGVpZ2h0KCkpO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaCcpKTsiLCJ3aW5kb3cuc2VsZWN0cyA9IHNlbGVjdCA9PiB7XHJcblxyXG5cdGlmKHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19saXN0JykpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgdmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdCAgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG5cdGFycm93LmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMjlcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjkgMjRcIj48cGF0aCBkPVwibTkuODUgOSA0LjUgNSA0LjUtNWgtOVpcIi8+PC9zdmc+JztcclxuXHJcblx0dmFsdWUuY2xhc3NOYW1lID0gJ3NlbGVjdF9fdmFsdWUnO1xyXG5cdHZhbHVlLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cInNlbGVjdF9fdmFsdWUtaW5uZXJcIj48L3NwYW4+JztcclxuXHJcblx0dmFsdWUuYXBwZW5kQ2hpbGQoYXJyb3cpO1xyXG5cdHNlbGVjdC5hcHBlbmRDaGlsZCh2YWx1ZSk7XHJcblxyXG5cdGNvbnN0IGZvcm0gPSBzZWxlY3QuY2xvc2VzdCgnZm9ybScpLFxyXG5cdFx0Y29udHJvbCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcclxuXHRcdG9wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKSxcclxuXHRcdHZhbHVlVGV4dCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X192YWx1ZS1pbm5lcicpLFxyXG5cdFx0bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRsaXN0LmNsYXNzTmFtZSA9ICdzZWxlY3RfX2xpc3QnO1xyXG5cclxuXHRsZXQgc2VsZWN0ZWQgPSBjb250cm9sLnF1ZXJ5U2VsZWN0b3IoJ1t2YWx1ZT1cIicgKyBjb250cm9sLnZhbHVlICsgJ1wiXScpO1xyXG5cclxuXHRjb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHNlbGVjdGVkID0gY29udHJvbC5xdWVyeVNlbGVjdG9yKCdbdmFsdWU9XCInICsgY29udHJvbC52YWx1ZSArICdcIl0nKTtcclxuXHJcblx0XHR2YWx1ZVRleHQudGV4dENvbnRlbnQgPSBzZWxlY3RlZC50ZXh0Q29udGVudDtcclxuXHJcblx0XHRzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0LS1kZWZhdWx0Jyk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB2YWx1ZURlZmF1bHQgPSBzZWxlY3RlZC50ZXh0Q29udGVudDtcclxuXHJcblx0aWYoY29udHJvbC5kaXNhYmxlZCl7XHJcblxyXG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC0tZGlzYWJsZWQnKTtcclxuXHJcblx0fVxyXG5cclxuXHRpZihjb250cm9sLnZhbHVlID09PSAnbm9uZScgfHwgY29udHJvbC52YWx1ZSA9PT0gJycpe1xyXG5cclxuXHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtLWRlZmF1bHQnKTtcclxuXHJcblx0fVxyXG5cclxuXHRpZiAoY29udHJvbC52YWx1ZSAhPT0gJycpIHtcclxuXHJcblx0XHR2YWx1ZVRleHQudGV4dENvbnRlbnQgPSBzZWxlY3QucXVlcnlTZWxlY3Rvcignb3B0aW9uW3ZhbHVlPVwiJyArIGNvbnRyb2wudmFsdWUgKyAnXCJdJykudGV4dENvbnRlbnQ7XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShvcHRpb24sIGVsID0+IHtcclxuXHJcblx0XHRjb25zdCBvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG5cdFx0by5jbGFzc05hbWUgPSAnYnV0dG9uIHNlbGVjdF9fbGlzdC1pdGVtJztcclxuXHJcblx0XHRvLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuXHRcdG8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsLmdldEF0dHJpYnV0ZSgndmFsdWUnKSk7XHJcblxyXG5cdFx0by50ZXh0Q29udGVudCA9IGVsLnRleHRDb250ZW50O1xyXG5cclxuXHRcdGxpc3QuYXBwZW5kQ2hpbGQobyk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RfX2xpc3QtaXRlbScpKXtcclxuXHJcblx0XHRcdGNvbnRyb2wudmFsdWUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xyXG5cclxuXHRcdFx0Y29udHJvbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0XHRpZihmb3JtKSB7XHJcblxyXG5cdFx0XHRcdGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdHNlbGVjdC5hcHBlbmRDaGlsZChsaXN0KTtcclxuXHJcblx0Zm9ybSAmJiBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNldFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC0tZGVmYXVsdCcpO1xyXG5cdFx0dmFsdWVUZXh0LnRleHRDb250ZW50ID0gdmFsdWVEZWZhdWx0O1xyXG5cclxuXHR9KTtcclxuXHJcbn07XHJcblxyXG4oICgpID0+IHtcclxuXHJcblx0d2luZG93LnNlbGVjdHNDb2xsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdCcpO1xyXG5cclxuXHRpZih3aW5kb3cuc2VsZWN0c0NvbGxlY3Rpb24ubGVuZ3RoKSB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbSh3aW5kb3cuc2VsZWN0c0NvbGxlY3Rpb24sIHNlbGVjdCA9PiB3aW5kb3cuc2VsZWN0cyhzZWxlY3QpKTtcclxuXHJcblx0fVxyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCBpc1NlbGVjdCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2VsZWN0Jyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbSh3aW5kb3cuc2VsZWN0c0NvbGxlY3Rpb24sIHNlbGVjdCA9PiB7XHJcblxyXG5cdFx0XHRzZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0LS1vcGVuJywgc2VsZWN0ID09PSBpc1NlbGVjdCAmJiBpc1NlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdC0tb3BlbicpID09PSBmYWxzZSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoKTsiLCIoIHN3aXBlckNvbnRhaW5lciA9PiB7XHJcblxyXG5cdGlmKCFzd2lwZXJDb250YWluZXIubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oc3dpcGVyQ29udGFpbmVyLCBzd2lwZSA9PiB7XHJcblxyXG5cdFx0bGV0IG15U3dpcGUgPSBudWxsLFxyXG5cdFx0XHR0b2dnbGVTd2lwZSA9IG51bGwsXHJcblx0XHRcdHJlc2V0U3dpcGUgPSBudWxsO1xyXG5cclxuXHRcdGNvbnN0IHN3aXBlQ29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdFx0ICBzd2lwZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0XHQgIHN3aXBlQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0XHQgIHN3aXBlTmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG5cdFx0XHQgIHN3aXBlUHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG5cdFx0XHQgIHNjcm9sbGJhciA9IHN3aXBlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnN3aXBlci1zY3JvbGxiYXInKSxcclxuXHRcdFx0ICBpdGVtcyA9IHN3aXBlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItc2xpZGUnKSxcclxuXHRcdFx0ICBjb3VudCA9IGl0ZW1zLmxlbmd0aCxcclxuXHRcdFx0ICBjbGllbnRzID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1jbGllbnRzJyksXHJcblx0XHRcdCAgcHJvZHVjdEdhbGxlcnkgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWdhbGxlcnknKSxcclxuXHRcdFx0ICBwcm9kdWN0R2FsbGVyeVByZXZpZXcgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWdhbGxlcnktcHJldmlldycpLFxyXG5cdFx0XHQgIGJpbGxib2FyZCA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tYmlsbGJvYXJkJyk7XHJcblxyXG5cdFx0c3dpcGVOYXYuY2xhc3NOYW1lID0gJ3N3aXBlci1wYWdpbmF0aW9uJztcclxuXHRcdHN3aXBlQ29udHJvbHMuY2xhc3NOYW1lID0gJ3N3aXBlci1jb250cm9scyc7XHJcblxyXG5cdFx0c3dpcGVCdG5zLmNsYXNzTmFtZSA9ICdzd2lwZXItbmF2aWdhdGlvbic7XHJcblx0XHRzd2lwZVByZXYuY2xhc3NOYW1lID0gJ3N3aXBlci1idXR0b24tcHJldiBidXR0b24nO1xyXG5cdFx0c3dpcGVOZXh0LmNsYXNzTmFtZSA9ICdzd2lwZXItYnV0dG9uLW5leHQgYnV0dG9uJztcclxuXHJcblx0XHRzd2lwZVByZXYuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywnUHJldmlvdXMgc2xpZGUnKTtcclxuXHRcdHN3aXBlTmV4dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCdOZXh0IHNsaWRlJyk7XHJcblxyXG5cdFx0c3dpcGVQcmV2LmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTkgMTFsNC42LTQuNkEuOTkuOTkgMCAxMTE1IDcuOGwtMy45IDMuOSAzLjkgMy45YS45OS45OSAwIDAxLTEuNCAxLjRMOSAxMi40MUExIDEgMCAwMTkgMTF6XCIvPjwvc3ZnPic7XHJcblx0XHRzd2lwZU5leHQuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTUgMTFhMSAxIDAgMDEwIDEuNEwxMC40IDE3QS45OS45OSAwIDAxOSAxNS42bDMuOS0zLjlMOSA3LjhhLjk5Ljk5IDAgMDExLjQtMS40TDE1IDExelwiLz48L3N2Zz4nO1xyXG5cclxuXHRcdHN3aXBlQnRucy5hcHBlbmRDaGlsZChzd2lwZVByZXYpO1xyXG5cdFx0c3dpcGVCdG5zLmFwcGVuZENoaWxkKHN3aXBlTmV4dCk7XHJcblx0XHRzd2lwZUNvbnRyb2xzLmFwcGVuZENoaWxkKHN3aXBlQnRucyk7XHJcblx0XHRzd2lwZUNvbnRyb2xzLmFwcGVuZENoaWxkKHN3aXBlTmF2KTtcclxuXHJcblx0XHRyZXNldFN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYobXlTd2lwZSkge1xyXG5cclxuXHRcdFx0XHRteVN3aXBlLmRlc3Ryb3koZmFsc2UsdHJ1ZSk7XHJcblx0XHRcdFx0bXlTd2lwZSA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0c3dpcGVCdG5zLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0c3dpcGVDb250cm9scy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRzd2lwZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3N3aXBlci1jb250YWluZXItc3R5bGUnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cclxuXHJcblx0XHRQdWJTdWIuc3Vic2NyaWJlKCd3aW5kb3dXaWR0aFJlc2l6ZScsICgpID0+IHtcclxuXHJcblx0XHRcdGlmICh3aW5kb3cuU3dpcGVyICYmIHRvZ2dsZVN3aXBlKSB7XHJcblxyXG5cdFx0XHRcdHRvZ2dsZVN3aXBlKCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0UHViU3ViLnN1YnNjcmliZSgnc3dpcGVySnNMb2FkJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0c3dpcGUuYXBwZW5kQ2hpbGQoc3dpcGVDb250cm9scyk7XHJcblxyXG5cdFx0XHQvLyBlYWdlclxyXG5cdFx0XHRBcnJheS5mcm9tKHN3aXBlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tsb2FkaW5nPVwibGF6eVwiXScpLCBpbWcgPT4gaW1nLnNldEF0dHJpYnV0ZSgnbG9hZGluZycsJ2VhZ2VyJykpO1xyXG5cclxuXHRcdFx0Ly8gaGlkZVxyXG5cdFx0XHRBcnJheS5mcm9tKGl0ZW1zLCBlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUoKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuXHRzY3JpcHQuc3JjID0gJy9qcy9zd2lwZXIubWluLmpzJztcclxuXHJcblx0c2NyaXB0Lm9ubG9hZCA9ICgpID0+IFB1YlN1Yi5wdWJsaXNoKCdzd2lwZXJKc0xvYWQnKTtcclxuXHJcblx0c2V0VGltZW91dCggKCkgPT4gZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpLCBDb29raWVzLmdldCgnZmFzdExvYWRTY3JpcHQnKSA/IDAgOiAxMDAwMCk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLWNvbnRhaW5lcicpKTsiLCIoIGJ0bnMgPT4ge1xyXG5cclxuXHRpZiggYnRucy5sZW5ndGggPT09IDAgKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGlmICggQ29va2llcy5nZXQoJ2xhbmcnKSA9PT0gJ2VuJyApIHtcclxuXHJcblx0XHRjb25zdCB5dFdpZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0eXRXaWRnZXQuaWQgPSAneXRXaWRnZXQnO1xyXG5cdFx0eXRXaWRnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHl0V2lkZ2V0KTtcclxuXHJcblx0XHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHRcdHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vdHJhbnNsYXRlLnlhbmRleC5uZXQvd2Vic2l0ZS13aWRnZXQvdjEvd2lkZ2V0LmpzP3dpZGdldElkPXl0V2lkZ2V0JnBhZ2VMYW5nPXJ1JndpZGdldFRoZW1lPWxpZ2h0JmF1dG9Nb2RlPWZhbHNlXCI7XHJcblxyXG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oYnRucywgZWwgPT4ge1xyXG5cclxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3l0LXdpZGdldCcsIEpTT04uc3RyaW5naWZ5KHtcclxuXHRcdFx0XHRcImxhbmdcIjogZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWxhbmcnKSxcclxuXHRcdFx0XHRcImFjdGl2ZVwiOiB0cnVlXHJcblx0XHRcdH0pKTtcclxuXHJcblx0XHRcdENvb2tpZXMuc2V0KCdsYW5nJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWxhbmcnKSk7XHJcblxyXG5cdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19sYW5nLWJ0bicpKTsiXX0=
