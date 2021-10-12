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
/*( form => {

	if(form) {

		const result = document.querySelector('#ajax-load-scroll-result'),
			  box = document.createElement('div'),
			  pagin = form.elements.pagin;

		let windowScroll = window.pageYOffset;

		if ('IntersectionObserver' in window) {

			const callback = (entries, observer) => {

				Array.from(entries, entry => {

					if(entry.isIntersecting && form.classList.contains('is-loading') === false) {

						form.classList.add('is-loading');

						fetch(form.getAttribute('action'), {
							method: 'POST',
							body: new FormData(form)
						})
						.then(response => response.text())
						.then(html => {

							console.log(html);

							box.innerHTML = html;

							windowScroll = window.pageYOffset;

							Array.from(box.children, item => {

								result.appendChild(item);

							});

							if( windowScroll !== window.pageYOffset ) {

								window.scrollTo(0,windowScroll);

							}

							pagin.value = parseInt(pagin.value) + 1;

							form.classList.remove('is-loading');

						});

					}

				});

			};

			const observer = new IntersectionObserver(callback);

			observer.observe(form);

		}

	}

})(document.querySelector('.ajax-load-scroll'));*/

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

	const formGetPrice = document.querySelector('.modal__item--get-price form');

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


		// form

		Array.from(document.querySelectorAll('.docs-form'), form => {

			const input = form.querySelector('.docs-form__input'),
				  reset = form.querySelector('.docs-form__reset'),
				  result = form.querySelector('.docs-form__result');

			// reset

			form.addEventListener('reset', () => reset.classList.add('hide'));

			// change

			form.addEventListener('change', () => {

				console.log(form, 'change')

				searchResult.classList.add('is-loading');

				fetch(form.getAttribute('action'), {
					method: 'POST',
					body: new FormData(form)
				})
				.then(response => response.text())
				.then(html => {

			//		searchResult.innerHTML = html;
			//		searchResult.classList.remove('is-loading');

				});

				if(formShort === null) {

					formShort = true;

					document.body.classList.remove('page-blue');
					document.querySelector('.docs-page').classList.add('docs-page--short');
					document.querySelector('.docs-page__description').classList.add('hide');

				}

			});

			// input

			form.addEventListener('input', () => {

				form.classList.toggle('is-noempty', input.value.length > 0);

			});

			// submit

			form.addEventListener('submit', event => {

				event.preventDefault();

				form.dispatchEvent(new CustomEvent("change"));

			});

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

	let resizeTimeout = null;

	notification.addEventListener('click', () => {

		clearTimeout(resizeTimeout);
		notification.classList.remove('is-show');

	});

	window.notification = (head, text, timer = 3.3) => {

		notification.querySelector('.notification__head').innerHTML = head ? head : '';
		notification.querySelector('.notification__text').innerHTML = text ? text : '';

		notification.classList.add('is-show');

		resizeTimeout = setTimeout( ()=> {

			notification.classList.remove('is-show');

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50VXAubWluLmpzIiwianMuY29va2llLm1pbi5qcyIsIm11c3RhY2hlLm1pbi5qcyIsInB1YnN1Yi5taW4uanMiLCJqcy5qcyIsImFqYXgtbG9hZC1zY3JvbGwuanMiLCJidG4tYmFjay5qcyIsImRvY3MtaXRlbS5qcyIsImRvY3MuanMiLCJmb3JtLXN1Ym1pdC5qcyIsImZvcm0uanMiLCJsaXZlLXNlYXJjaC5qcyIsIm1haW4uanMiLCJtYXNrLmpzIiwibWVudS5qcyIsIm1vZGFsLmpzIiwibm90aWZpY2F0aW9uLmpzIiwic2VhcmNoLmpzIiwic2VsZWN0LmpzIiwic3dpcGVyLmpzIiwieWF0cmFuc2xhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUNGQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbihhLG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUobik6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9bihyZXF1aXJlLGV4cG9ydHMsbW9kdWxlKTphLkNvdW50VXA9bigpfSh0aGlzLGZ1bmN0aW9uKGEsbix0KXtyZXR1cm4gZnVuY3Rpb24oYSxuLHQsZSxpLHIpe3ZhciB1PXRoaXM7aWYodS52ZXJzaW9uPWZ1bmN0aW9uKCl7cmV0dXJuXCIxLjkuM1wifSx1Lm9wdGlvbnM9e3VzZUVhc2luZzohMCx1c2VHcm91cGluZzohMCxzZXBhcmF0b3I6XCIsXCIsZGVjaW1hbDpcIi5cIixlYXNpbmdGbjpmdW5jdGlvbihhLG4sdCxlKXtyZXR1cm4gdCooMS1NYXRoLnBvdygyLC0xMCphL2UpKSoxMDI0LzEwMjMrbn0sZm9ybWF0dGluZ0ZuOmZ1bmN0aW9uKGEpe3ZhciBuLHQsZSxpLHIsbyxzPWE8MDtpZihhPU1hdGguYWJzKGEpLnRvRml4ZWQodS5kZWNpbWFscyksbj0oYSs9XCJcIikuc3BsaXQoXCIuXCIpLHQ9blswXSxlPTE8bi5sZW5ndGg/dS5vcHRpb25zLmRlY2ltYWwrblsxXTpcIlwiLHUub3B0aW9ucy51c2VHcm91cGluZyl7Zm9yKGk9XCJcIixyPTAsbz10Lmxlbmd0aDtyPG87KytyKTAhPT1yJiZyJTM9PTAmJihpPXUub3B0aW9ucy5zZXBhcmF0b3IraSksaT10W28tci0xXStpO3Q9aX1yZXR1cm4gdS5vcHRpb25zLm51bWVyYWxzLmxlbmd0aCYmKHQ9dC5yZXBsYWNlKC9bMC05XS9nLGZ1bmN0aW9uKGEpe3JldHVybiB1Lm9wdGlvbnMubnVtZXJhbHNbK2FdfSksZT1lLnJlcGxhY2UoL1swLTldL2csZnVuY3Rpb24oYSl7cmV0dXJuIHUub3B0aW9ucy5udW1lcmFsc1srYV19KSksKHM/XCItXCI6XCJcIikrdS5vcHRpb25zLnByZWZpeCt0K2UrdS5vcHRpb25zLnN1ZmZpeH0scHJlZml4OlwiXCIsc3VmZml4OlwiXCIsbnVtZXJhbHM6W119LHImJlwib2JqZWN0XCI9PXR5cGVvZiByKWZvcih2YXIgbyBpbiB1Lm9wdGlvbnMpci5oYXNPd25Qcm9wZXJ0eShvKSYmbnVsbCE9PXJbb10mJih1Lm9wdGlvbnNbb109cltvXSk7XCJcIj09PXUub3B0aW9ucy5zZXBhcmF0b3I/dS5vcHRpb25zLnVzZUdyb3VwaW5nPSExOnUub3B0aW9ucy5zZXBhcmF0b3I9XCJcIit1Lm9wdGlvbnMuc2VwYXJhdG9yO2Zvcih2YXIgcz0wLGw9W1wid2Via2l0XCIsXCJtb3pcIixcIm1zXCIsXCJvXCJdLG09MDttPGwubGVuZ3RoJiYhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsrK20pd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT13aW5kb3dbbFttXStcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXSx3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU9d2luZG93W2xbbV0rXCJDYW5jZWxBbmltYXRpb25GcmFtZVwiXXx8d2luZG93W2xbbV0rXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07ZnVuY3Rpb24gZChhKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgYSYmIWlzTmFOKGEpfXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lPWZ1bmN0aW9uKGEsbil7dmFyIHQ9KG5ldyBEYXRlKS5nZXRUaW1lKCksZT1NYXRoLm1heCgwLDE2LSh0LXMpKSxpPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YSh0K2UpfSxlKTtyZXR1cm4gcz10K2UsaX0pLHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZXx8KHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZT1mdW5jdGlvbihhKXtjbGVhclRpbWVvdXQoYSl9KSx1LmluaXRpYWxpemU9ZnVuY3Rpb24oKXtyZXR1cm4hIXUuaW5pdGlhbGl6ZWR8fCh1LmVycm9yPVwiXCIsdS5kPVwic3RyaW5nXCI9PXR5cGVvZiBhP2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKGEpOmEsdS5kPyh1LnN0YXJ0VmFsPU51bWJlcihuKSx1LmVuZFZhbD1OdW1iZXIodCksZCh1LnN0YXJ0VmFsKSYmZCh1LmVuZFZhbCk/KHUuZGVjaW1hbHM9TWF0aC5tYXgoMCxlfHwwKSx1LmRlYz1NYXRoLnBvdygxMCx1LmRlY2ltYWxzKSx1LmR1cmF0aW9uPTFlMypOdW1iZXIoaSl8fDJlMyx1LmNvdW50RG93bj11LnN0YXJ0VmFsPnUuZW5kVmFsLHUuZnJhbWVWYWw9dS5zdGFydFZhbCx1LmluaXRpYWxpemVkPSEwKToodS5lcnJvcj1cIltDb3VudFVwXSBzdGFydFZhbCAoXCIrbitcIikgb3IgZW5kVmFsIChcIit0K1wiKSBpcyBub3QgYSBudW1iZXJcIiwhMSkpOiEodS5lcnJvcj1cIltDb3VudFVwXSB0YXJnZXQgaXMgbnVsbCBvciB1bmRlZmluZWRcIikpfSx1LnByaW50VmFsdWU9ZnVuY3Rpb24oYSl7dmFyIG49dS5vcHRpb25zLmZvcm1hdHRpbmdGbihhKTtcIklOUFVUXCI9PT11LmQudGFnTmFtZT90aGlzLmQudmFsdWU9bjpcInRleHRcIj09PXUuZC50YWdOYW1lfHxcInRzcGFuXCI9PT11LmQudGFnTmFtZT90aGlzLmQudGV4dENvbnRlbnQ9bjp0aGlzLmQuaW5uZXJIVE1MPW59LHUuY291bnQ9ZnVuY3Rpb24oYSl7dS5zdGFydFRpbWV8fCh1LnN0YXJ0VGltZT1hKTt2YXIgbj0odS50aW1lc3RhbXA9YSktdS5zdGFydFRpbWU7dS5yZW1haW5pbmc9dS5kdXJhdGlvbi1uLHUub3B0aW9ucy51c2VFYXNpbmc/dS5jb3VudERvd24/dS5mcmFtZVZhbD11LnN0YXJ0VmFsLXUub3B0aW9ucy5lYXNpbmdGbihuLDAsdS5zdGFydFZhbC11LmVuZFZhbCx1LmR1cmF0aW9uKTp1LmZyYW1lVmFsPXUub3B0aW9ucy5lYXNpbmdGbihuLHUuc3RhcnRWYWwsdS5lbmRWYWwtdS5zdGFydFZhbCx1LmR1cmF0aW9uKTp1LmNvdW50RG93bj91LmZyYW1lVmFsPXUuc3RhcnRWYWwtKHUuc3RhcnRWYWwtdS5lbmRWYWwpKihuL3UuZHVyYXRpb24pOnUuZnJhbWVWYWw9dS5zdGFydFZhbCsodS5lbmRWYWwtdS5zdGFydFZhbCkqKG4vdS5kdXJhdGlvbiksdS5jb3VudERvd24/dS5mcmFtZVZhbD11LmZyYW1lVmFsPHUuZW5kVmFsP3UuZW5kVmFsOnUuZnJhbWVWYWw6dS5mcmFtZVZhbD11LmZyYW1lVmFsPnUuZW5kVmFsP3UuZW5kVmFsOnUuZnJhbWVWYWwsdS5mcmFtZVZhbD1NYXRoLnJvdW5kKHUuZnJhbWVWYWwqdS5kZWMpL3UuZGVjLHUucHJpbnRWYWx1ZSh1LmZyYW1lVmFsKSxuPHUuZHVyYXRpb24/dS5yQUY9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUuY291bnQpOnUuY2FsbGJhY2smJnUuY2FsbGJhY2soKX0sdS5zdGFydD1mdW5jdGlvbihhKXt1LmluaXRpYWxpemUoKSYmKHUuY2FsbGJhY2s9YSx1LnJBRj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodS5jb3VudCkpfSx1LnBhdXNlUmVzdW1lPWZ1bmN0aW9uKCl7dS5wYXVzZWQ/KHUucGF1c2VkPSExLGRlbGV0ZSB1LnN0YXJ0VGltZSx1LmR1cmF0aW9uPXUucmVtYWluaW5nLHUuc3RhcnRWYWw9dS5mcmFtZVZhbCxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodS5jb3VudCkpOih1LnBhdXNlZD0hMCxjYW5jZWxBbmltYXRpb25GcmFtZSh1LnJBRikpfSx1LnJlc2V0PWZ1bmN0aW9uKCl7dS5wYXVzZWQ9ITEsZGVsZXRlIHUuc3RhcnRUaW1lLHUuaW5pdGlhbGl6ZWQ9ITEsdS5pbml0aWFsaXplKCkmJihjYW5jZWxBbmltYXRpb25GcmFtZSh1LnJBRiksdS5wcmludFZhbHVlKHUuc3RhcnRWYWwpKX0sdS51cGRhdGU9ZnVuY3Rpb24oYSl7dS5pbml0aWFsaXplKCkmJihkKGE9TnVtYmVyKGEpKT8odS5lcnJvcj1cIlwiLGEhPT11LmZyYW1lVmFsJiYoY2FuY2VsQW5pbWF0aW9uRnJhbWUodS5yQUYpLHUucGF1c2VkPSExLGRlbGV0ZSB1LnN0YXJ0VGltZSx1LnN0YXJ0VmFsPXUuZnJhbWVWYWwsdS5lbmRWYWw9YSx1LmNvdW50RG93bj11LnN0YXJ0VmFsPnUuZW5kVmFsLHUuckFGPXJlcXVlc3RBbmltYXRpb25GcmFtZSh1LmNvdW50KSkpOnUuZXJyb3I9XCJbQ291bnRVcF0gdXBkYXRlKCkgLSBuZXcgZW5kVmFsIGlzIG5vdCBhIG51bWJlcjogXCIrYSl9LHUuaW5pdGlhbGl6ZSgpJiZ1LnByaW50VmFsdWUodS5zdGFydFZhbCl9fSk7IiwiLyohIGpzLWNvb2tpZSB2My4wLjAtcmMuMSB8IE1JVCAqL1xyXG4hZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1lfHxzZWxmLGZ1bmN0aW9uKCl7dmFyIG49ZS5Db29raWVzLHI9ZS5Db29raWVzPXQoKTtyLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gZS5Db29raWVzPW4scn19KCkpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciByIGluIG4pZVtyXT1uW3JdfXJldHVybiBlfXZhciB0PXtyZWFkOmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoLyglW1xcZEEtRl17Mn0pKy9naSxkZWNvZGVVUklDb21wb25lbnQpfSx3cml0ZTpmdW5jdGlvbihlKXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGUpLnJlcGxhY2UoLyUoMlszNDZCRl18M1tBQy1GXXw0MHw1W0JERV18NjB8N1tCQ0RdKS9nLGRlY29kZVVSSUNvbXBvbmVudCl9fTtyZXR1cm4gZnVuY3Rpb24gbihyLG8pe2Z1bmN0aW9uIGkodCxuLGkpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCl7XCJudW1iZXJcIj09dHlwZW9mKGk9ZSh7fSxvLGkpKS5leHBpcmVzJiYoaS5leHBpcmVzPW5ldyBEYXRlKERhdGUubm93KCkrODY0ZTUqaS5leHBpcmVzKSksaS5leHBpcmVzJiYoaS5leHBpcmVzPWkuZXhwaXJlcy50b1VUQ1N0cmluZygpKSx0PWVuY29kZVVSSUNvbXBvbmVudCh0KS5yZXBsYWNlKC8lKDJbMzQ2Ql18NUV8NjB8N0MpL2csZGVjb2RlVVJJQ29tcG9uZW50KS5yZXBsYWNlKC9bKCldL2csZXNjYXBlKSxuPXIud3JpdGUobix0KTt2YXIgYz1cIlwiO2Zvcih2YXIgdSBpbiBpKWlbdV0mJihjKz1cIjsgXCIrdSwhMCE9PWlbdV0mJihjKz1cIj1cIitpW3VdLnNwbGl0KFwiO1wiKVswXSkpO3JldHVybiBkb2N1bWVudC5jb29raWU9dCtcIj1cIituK2N9fXJldHVybiBPYmplY3QuY3JlYXRlKHtzZXQ6aSxnZXQ6ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50JiYoIWFyZ3VtZW50cy5sZW5ndGh8fGUpKXtmb3IodmFyIG49ZG9jdW1lbnQuY29va2llP2RvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpOltdLG89e30saT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgYz1uW2ldLnNwbGl0KFwiPVwiKSx1PWMuc2xpY2UoMSkuam9pbihcIj1cIik7J1wiJz09PXVbMF0mJih1PXUuc2xpY2UoMSwtMSkpO3RyeXt2YXIgZj10LnJlYWQoY1swXSk7aWYob1tmXT1yLnJlYWQodSxmKSxlPT09ZilicmVha31jYXRjaChlKXt9fXJldHVybiBlP29bZV06b319LHJlbW92ZTpmdW5jdGlvbih0LG4pe2kodCxcIlwiLGUoe30sbix7ZXhwaXJlczotMX0pKX0sd2l0aEF0dHJpYnV0ZXM6ZnVuY3Rpb24odCl7cmV0dXJuIG4odGhpcy5jb252ZXJ0ZXIsZSh7fSx0aGlzLmF0dHJpYnV0ZXMsdCkpfSx3aXRoQ29udmVydGVyOmZ1bmN0aW9uKHQpe3JldHVybiBuKGUoe30sdGhpcy5jb252ZXJ0ZXIsdCksdGhpcy5hdHRyaWJ1dGVzKX19LHthdHRyaWJ1dGVzOnt2YWx1ZTpPYmplY3QuZnJlZXplKG8pfSxjb252ZXJ0ZXI6e3ZhbHVlOk9iamVjdC5mcmVlemUocil9fSl9KHQse3BhdGg6XCIvXCJ9KX0pO1xyXG4iLCIoZnVuY3Rpb24gZGVmaW5lTXVzdGFjaGUoZ2xvYmFsLGZhY3Rvcnkpe2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmZXhwb3J0cyYmdHlwZW9mIGV4cG9ydHMubm9kZU5hbWUhPT1cInN0cmluZ1wiKXtmYWN0b3J5KGV4cG9ydHMpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtcImV4cG9ydHNcIl0sZmFjdG9yeSl9ZWxzZXtnbG9iYWwuTXVzdGFjaGU9e307ZmFjdG9yeShnbG9iYWwuTXVzdGFjaGUpfX0pKHRoaXMsZnVuY3Rpb24gbXVzdGFjaGVGYWN0b3J5KG11c3RhY2hlKXt2YXIgb2JqZWN0VG9TdHJpbmc9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZzt2YXIgaXNBcnJheT1BcnJheS5pc0FycmF5fHxmdW5jdGlvbiBpc0FycmF5UG9seWZpbGwob2JqZWN0KXtyZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbChvYmplY3QpPT09XCJbb2JqZWN0IEFycmF5XVwifTtmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iamVjdCl7cmV0dXJuIHR5cGVvZiBvYmplY3Q9PT1cImZ1bmN0aW9uXCJ9ZnVuY3Rpb24gdHlwZVN0cihvYmope3JldHVybiBpc0FycmF5KG9iaik/XCJhcnJheVwiOnR5cGVvZiBvYmp9ZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cmluZyl7cmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bXFwtXFxbXFxde30oKSorPy4sXFxcXFxcXiR8I1xcc10vZyxcIlxcXFwkJlwiKX1mdW5jdGlvbiBoYXNQcm9wZXJ0eShvYmoscHJvcE5hbWUpe3JldHVybiBvYmohPW51bGwmJnR5cGVvZiBvYmo9PT1cIm9iamVjdFwiJiZwcm9wTmFtZSBpbiBvYmp9dmFyIHJlZ0V4cFRlc3Q9UmVnRXhwLnByb3RvdHlwZS50ZXN0O2Z1bmN0aW9uIHRlc3RSZWdFeHAocmUsc3RyaW5nKXtyZXR1cm4gcmVnRXhwVGVzdC5jYWxsKHJlLHN0cmluZyl9dmFyIG5vblNwYWNlUmU9L1xcUy87ZnVuY3Rpb24gaXNXaGl0ZXNwYWNlKHN0cmluZyl7cmV0dXJuIXRlc3RSZWdFeHAobm9uU3BhY2VSZSxzdHJpbmcpfXZhciBlbnRpdHlNYXA9e1wiJlwiOlwiJmFtcDtcIixcIjxcIjpcIiZsdDtcIixcIj5cIjpcIiZndDtcIiwnXCInOlwiJnF1b3Q7XCIsXCInXCI6XCImIzM5O1wiLFwiL1wiOlwiJiN4MkY7XCIsXCJgXCI6XCImI3g2MDtcIixcIj1cIjpcIiYjeDNEO1wifTtmdW5jdGlvbiBlc2NhcGVIdG1sKHN0cmluZyl7cmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UoL1smPD5cIidgPVxcL10vZyxmdW5jdGlvbiBmcm9tRW50aXR5TWFwKHMpe3JldHVybiBlbnRpdHlNYXBbc119KX12YXIgd2hpdGVSZT0vXFxzKi87dmFyIHNwYWNlUmU9L1xccysvO3ZhciBlcXVhbHNSZT0vXFxzKj0vO3ZhciBjdXJseVJlPS9cXHMqXFx9Lzt2YXIgdGFnUmU9LyN8XFxefFxcL3w+fFxce3wmfD18IS87ZnVuY3Rpb24gcGFyc2VUZW1wbGF0ZSh0ZW1wbGF0ZSx0YWdzKXtpZighdGVtcGxhdGUpcmV0dXJuW107dmFyIHNlY3Rpb25zPVtdO3ZhciB0b2tlbnM9W107dmFyIHNwYWNlcz1bXTt2YXIgaGFzVGFnPWZhbHNlO3ZhciBub25TcGFjZT1mYWxzZTtmdW5jdGlvbiBzdHJpcFNwYWNlKCl7aWYoaGFzVGFnJiYhbm9uU3BhY2Upe3doaWxlKHNwYWNlcy5sZW5ndGgpZGVsZXRlIHRva2Vuc1tzcGFjZXMucG9wKCldfWVsc2V7c3BhY2VzPVtdfWhhc1RhZz1mYWxzZTtub25TcGFjZT1mYWxzZX12YXIgb3BlbmluZ1RhZ1JlLGNsb3NpbmdUYWdSZSxjbG9zaW5nQ3VybHlSZTtmdW5jdGlvbiBjb21waWxlVGFncyh0YWdzVG9Db21waWxlKXtpZih0eXBlb2YgdGFnc1RvQ29tcGlsZT09PVwic3RyaW5nXCIpdGFnc1RvQ29tcGlsZT10YWdzVG9Db21waWxlLnNwbGl0KHNwYWNlUmUsMik7aWYoIWlzQXJyYXkodGFnc1RvQ29tcGlsZSl8fHRhZ3NUb0NvbXBpbGUubGVuZ3RoIT09Mil0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHRhZ3M6IFwiK3RhZ3NUb0NvbXBpbGUpO29wZW5pbmdUYWdSZT1uZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cCh0YWdzVG9Db21waWxlWzBdKStcIlxcXFxzKlwiKTtjbG9zaW5nVGFnUmU9bmV3IFJlZ0V4cChcIlxcXFxzKlwiK2VzY2FwZVJlZ0V4cCh0YWdzVG9Db21waWxlWzFdKSk7Y2xvc2luZ0N1cmx5UmU9bmV3IFJlZ0V4cChcIlxcXFxzKlwiK2VzY2FwZVJlZ0V4cChcIn1cIit0YWdzVG9Db21waWxlWzFdKSl9Y29tcGlsZVRhZ3ModGFnc3x8bXVzdGFjaGUudGFncyk7dmFyIHNjYW5uZXI9bmV3IFNjYW5uZXIodGVtcGxhdGUpO3ZhciBzdGFydCx0eXBlLHZhbHVlLGNocix0b2tlbixvcGVuU2VjdGlvbjt3aGlsZSghc2Nhbm5lci5lb3MoKSl7c3RhcnQ9c2Nhbm5lci5wb3M7dmFsdWU9c2Nhbm5lci5zY2FuVW50aWwob3BlbmluZ1RhZ1JlKTtpZih2YWx1ZSl7Zm9yKHZhciBpPTAsdmFsdWVMZW5ndGg9dmFsdWUubGVuZ3RoO2k8dmFsdWVMZW5ndGg7KytpKXtjaHI9dmFsdWUuY2hhckF0KGkpO2lmKGlzV2hpdGVzcGFjZShjaHIpKXtzcGFjZXMucHVzaCh0b2tlbnMubGVuZ3RoKX1lbHNle25vblNwYWNlPXRydWV9dG9rZW5zLnB1c2goW1widGV4dFwiLGNocixzdGFydCxzdGFydCsxXSk7c3RhcnQrPTE7aWYoY2hyPT09XCJcXG5cIilzdHJpcFNwYWNlKCl9fWlmKCFzY2FubmVyLnNjYW4ob3BlbmluZ1RhZ1JlKSlicmVhaztoYXNUYWc9dHJ1ZTt0eXBlPXNjYW5uZXIuc2Nhbih0YWdSZSl8fFwibmFtZVwiO3NjYW5uZXIuc2Nhbih3aGl0ZVJlKTtpZih0eXBlPT09XCI9XCIpe3ZhbHVlPXNjYW5uZXIuc2NhblVudGlsKGVxdWFsc1JlKTtzY2FubmVyLnNjYW4oZXF1YWxzUmUpO3NjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSl9ZWxzZSBpZih0eXBlPT09XCJ7XCIpe3ZhbHVlPXNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdDdXJseVJlKTtzY2FubmVyLnNjYW4oY3VybHlSZSk7c2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTt0eXBlPVwiJlwifWVsc2V7dmFsdWU9c2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKX1pZighc2Nhbm5lci5zY2FuKGNsb3NpbmdUYWdSZSkpdGhyb3cgbmV3IEVycm9yKFwiVW5jbG9zZWQgdGFnIGF0IFwiK3NjYW5uZXIucG9zKTt0b2tlbj1bdHlwZSx2YWx1ZSxzdGFydCxzY2FubmVyLnBvc107dG9rZW5zLnB1c2godG9rZW4pO2lmKHR5cGU9PT1cIiNcInx8dHlwZT09PVwiXlwiKXtzZWN0aW9ucy5wdXNoKHRva2VuKX1lbHNlIGlmKHR5cGU9PT1cIi9cIil7b3BlblNlY3Rpb249c2VjdGlvbnMucG9wKCk7aWYoIW9wZW5TZWN0aW9uKXRocm93IG5ldyBFcnJvcignVW5vcGVuZWQgc2VjdGlvbiBcIicrdmFsdWUrJ1wiIGF0ICcrc3RhcnQpO2lmKG9wZW5TZWN0aW9uWzFdIT09dmFsdWUpdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCBzZWN0aW9uIFwiJytvcGVuU2VjdGlvblsxXSsnXCIgYXQgJytzdGFydCl9ZWxzZSBpZih0eXBlPT09XCJuYW1lXCJ8fHR5cGU9PT1cIntcInx8dHlwZT09PVwiJlwiKXtub25TcGFjZT10cnVlfWVsc2UgaWYodHlwZT09PVwiPVwiKXtjb21waWxlVGFncyh2YWx1ZSl9fW9wZW5TZWN0aW9uPXNlY3Rpb25zLnBvcCgpO2lmKG9wZW5TZWN0aW9uKXRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicrb3BlblNlY3Rpb25bMV0rJ1wiIGF0ICcrc2Nhbm5lci5wb3MpO3JldHVybiBuZXN0VG9rZW5zKHNxdWFzaFRva2Vucyh0b2tlbnMpKX1mdW5jdGlvbiBzcXVhc2hUb2tlbnModG9rZW5zKXt2YXIgc3F1YXNoZWRUb2tlbnM9W107dmFyIHRva2VuLGxhc3RUb2tlbjtmb3IodmFyIGk9MCxudW1Ub2tlbnM9dG9rZW5zLmxlbmd0aDtpPG51bVRva2VuczsrK2kpe3Rva2VuPXRva2Vuc1tpXTtpZih0b2tlbil7aWYodG9rZW5bMF09PT1cInRleHRcIiYmbGFzdFRva2VuJiZsYXN0VG9rZW5bMF09PT1cInRleHRcIil7bGFzdFRva2VuWzFdKz10b2tlblsxXTtsYXN0VG9rZW5bM109dG9rZW5bM119ZWxzZXtzcXVhc2hlZFRva2Vucy5wdXNoKHRva2VuKTtsYXN0VG9rZW49dG9rZW59fX1yZXR1cm4gc3F1YXNoZWRUb2tlbnN9ZnVuY3Rpb24gbmVzdFRva2Vucyh0b2tlbnMpe3ZhciBuZXN0ZWRUb2tlbnM9W107dmFyIGNvbGxlY3Rvcj1uZXN0ZWRUb2tlbnM7dmFyIHNlY3Rpb25zPVtdO3ZhciB0b2tlbixzZWN0aW9uO2Zvcih2YXIgaT0wLG51bVRva2Vucz10b2tlbnMubGVuZ3RoO2k8bnVtVG9rZW5zOysraSl7dG9rZW49dG9rZW5zW2ldO3N3aXRjaCh0b2tlblswXSl7Y2FzZVwiI1wiOmNhc2VcIl5cIjpjb2xsZWN0b3IucHVzaCh0b2tlbik7c2VjdGlvbnMucHVzaCh0b2tlbik7Y29sbGVjdG9yPXRva2VuWzRdPVtdO2JyZWFrO2Nhc2VcIi9cIjpzZWN0aW9uPXNlY3Rpb25zLnBvcCgpO3NlY3Rpb25bNV09dG9rZW5bMl07Y29sbGVjdG9yPXNlY3Rpb25zLmxlbmd0aD4wP3NlY3Rpb25zW3NlY3Rpb25zLmxlbmd0aC0xXVs0XTpuZXN0ZWRUb2tlbnM7YnJlYWs7ZGVmYXVsdDpjb2xsZWN0b3IucHVzaCh0b2tlbil9fXJldHVybiBuZXN0ZWRUb2tlbnN9ZnVuY3Rpb24gU2Nhbm5lcihzdHJpbmcpe3RoaXMuc3RyaW5nPXN0cmluZzt0aGlzLnRhaWw9c3RyaW5nO3RoaXMucG9zPTB9U2Nhbm5lci5wcm90b3R5cGUuZW9zPWZ1bmN0aW9uIGVvcygpe3JldHVybiB0aGlzLnRhaWw9PT1cIlwifTtTY2FubmVyLnByb3RvdHlwZS5zY2FuPWZ1bmN0aW9uIHNjYW4ocmUpe3ZhciBtYXRjaD10aGlzLnRhaWwubWF0Y2gocmUpO2lmKCFtYXRjaHx8bWF0Y2guaW5kZXghPT0wKXJldHVyblwiXCI7dmFyIHN0cmluZz1tYXRjaFswXTt0aGlzLnRhaWw9dGhpcy50YWlsLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKTt0aGlzLnBvcys9c3RyaW5nLmxlbmd0aDtyZXR1cm4gc3RyaW5nfTtTY2FubmVyLnByb3RvdHlwZS5zY2FuVW50aWw9ZnVuY3Rpb24gc2NhblVudGlsKHJlKXt2YXIgaW5kZXg9dGhpcy50YWlsLnNlYXJjaChyZSksbWF0Y2g7c3dpdGNoKGluZGV4KXtjYXNlLTE6bWF0Y2g9dGhpcy50YWlsO3RoaXMudGFpbD1cIlwiO2JyZWFrO2Nhc2UgMDptYXRjaD1cIlwiO2JyZWFrO2RlZmF1bHQ6bWF0Y2g9dGhpcy50YWlsLnN1YnN0cmluZygwLGluZGV4KTt0aGlzLnRhaWw9dGhpcy50YWlsLnN1YnN0cmluZyhpbmRleCl9dGhpcy5wb3MrPW1hdGNoLmxlbmd0aDtyZXR1cm4gbWF0Y2h9O2Z1bmN0aW9uIENvbnRleHQodmlldyxwYXJlbnRDb250ZXh0KXt0aGlzLnZpZXc9dmlldzt0aGlzLmNhY2hlPXtcIi5cIjp0aGlzLnZpZXd9O3RoaXMucGFyZW50PXBhcmVudENvbnRleHR9Q29udGV4dC5wcm90b3R5cGUucHVzaD1mdW5jdGlvbiBwdXNoKHZpZXcpe3JldHVybiBuZXcgQ29udGV4dCh2aWV3LHRoaXMpfTtDb250ZXh0LnByb3RvdHlwZS5sb29rdXA9ZnVuY3Rpb24gbG9va3VwKG5hbWUpe3ZhciBjYWNoZT10aGlzLmNhY2hlO3ZhciB2YWx1ZTtpZihjYWNoZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSl7dmFsdWU9Y2FjaGVbbmFtZV19ZWxzZXt2YXIgY29udGV4dD10aGlzLG5hbWVzLGluZGV4LGxvb2t1cEhpdD1mYWxzZTt3aGlsZShjb250ZXh0KXtpZihuYW1lLmluZGV4T2YoXCIuXCIpPjApe3ZhbHVlPWNvbnRleHQudmlldztuYW1lcz1uYW1lLnNwbGl0KFwiLlwiKTtpbmRleD0wO3doaWxlKHZhbHVlIT1udWxsJiZpbmRleDxuYW1lcy5sZW5ndGgpe2lmKGluZGV4PT09bmFtZXMubGVuZ3RoLTEpbG9va3VwSGl0PWhhc1Byb3BlcnR5KHZhbHVlLG5hbWVzW2luZGV4XSk7dmFsdWU9dmFsdWVbbmFtZXNbaW5kZXgrK11dfX1lbHNle3ZhbHVlPWNvbnRleHQudmlld1tuYW1lXTtsb29rdXBIaXQ9aGFzUHJvcGVydHkoY29udGV4dC52aWV3LG5hbWUpfWlmKGxvb2t1cEhpdClicmVhaztjb250ZXh0PWNvbnRleHQucGFyZW50fWNhY2hlW25hbWVdPXZhbHVlfWlmKGlzRnVuY3Rpb24odmFsdWUpKXZhbHVlPXZhbHVlLmNhbGwodGhpcy52aWV3KTtyZXR1cm4gdmFsdWV9O2Z1bmN0aW9uIFdyaXRlcigpe3RoaXMuY2FjaGU9e319V3JpdGVyLnByb3RvdHlwZS5jbGVhckNhY2hlPWZ1bmN0aW9uIGNsZWFyQ2FjaGUoKXt0aGlzLmNhY2hlPXt9fTtXcml0ZXIucHJvdG90eXBlLnBhcnNlPWZ1bmN0aW9uIHBhcnNlKHRlbXBsYXRlLHRhZ3Mpe3ZhciBjYWNoZT10aGlzLmNhY2hlO3ZhciB0b2tlbnM9Y2FjaGVbdGVtcGxhdGVdO2lmKHRva2Vucz09bnVsbCl0b2tlbnM9Y2FjaGVbdGVtcGxhdGVdPXBhcnNlVGVtcGxhdGUodGVtcGxhdGUsdGFncyk7cmV0dXJuIHRva2Vuc307V3JpdGVyLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24gcmVuZGVyKHRlbXBsYXRlLHZpZXcscGFydGlhbHMpe3ZhciB0b2tlbnM9dGhpcy5wYXJzZSh0ZW1wbGF0ZSk7dmFyIGNvbnRleHQ9dmlldyBpbnN0YW5jZW9mIENvbnRleHQ/dmlldzpuZXcgQ29udGV4dCh2aWV3KTtyZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5zLGNvbnRleHQscGFydGlhbHMsdGVtcGxhdGUpfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlclRva2Vucz1mdW5jdGlvbiByZW5kZXJUb2tlbnModG9rZW5zLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl7dmFyIGJ1ZmZlcj1cIlwiO3ZhciB0b2tlbixzeW1ib2wsdmFsdWU7Zm9yKHZhciBpPTAsbnVtVG9rZW5zPXRva2Vucy5sZW5ndGg7aTxudW1Ub2tlbnM7KytpKXt2YWx1ZT11bmRlZmluZWQ7dG9rZW49dG9rZW5zW2ldO3N5bWJvbD10b2tlblswXTtpZihzeW1ib2w9PT1cIiNcIil2YWx1ZT10aGlzLnJlbmRlclNlY3Rpb24odG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKTtlbHNlIGlmKHN5bWJvbD09PVwiXlwiKXZhbHVlPXRoaXMucmVuZGVySW52ZXJ0ZWQodG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKTtlbHNlIGlmKHN5bWJvbD09PVwiPlwiKXZhbHVlPXRoaXMucmVuZGVyUGFydGlhbCh0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpO2Vsc2UgaWYoc3ltYm9sPT09XCImXCIpdmFsdWU9dGhpcy51bmVzY2FwZWRWYWx1ZSh0b2tlbixjb250ZXh0KTtlbHNlIGlmKHN5bWJvbD09PVwibmFtZVwiKXZhbHVlPXRoaXMuZXNjYXBlZFZhbHVlKHRva2VuLGNvbnRleHQpO2Vsc2UgaWYoc3ltYm9sPT09XCJ0ZXh0XCIpdmFsdWU9dGhpcy5yYXdWYWx1ZSh0b2tlbik7aWYodmFsdWUhPT11bmRlZmluZWQpYnVmZmVyKz12YWx1ZX1yZXR1cm4gYnVmZmVyfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlclNlY3Rpb249ZnVuY3Rpb24gcmVuZGVyU2VjdGlvbih0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpe3ZhciBzZWxmPXRoaXM7dmFyIGJ1ZmZlcj1cIlwiO3ZhciB2YWx1ZT1jb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7ZnVuY3Rpb24gc3ViUmVuZGVyKHRlbXBsYXRlKXtyZXR1cm4gc2VsZi5yZW5kZXIodGVtcGxhdGUsY29udGV4dCxwYXJ0aWFscyl9aWYoIXZhbHVlKXJldHVybjtpZihpc0FycmF5KHZhbHVlKSl7Zm9yKHZhciBqPTAsdmFsdWVMZW5ndGg9dmFsdWUubGVuZ3RoO2o8dmFsdWVMZW5ndGg7KytqKXtidWZmZXIrPXRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLGNvbnRleHQucHVzaCh2YWx1ZVtqXSkscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl9fWVsc2UgaWYodHlwZW9mIHZhbHVlPT09XCJvYmplY3RcInx8dHlwZW9mIHZhbHVlPT09XCJzdHJpbmdcInx8dHlwZW9mIHZhbHVlPT09XCJudW1iZXJcIil7YnVmZmVyKz10aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSxjb250ZXh0LnB1c2godmFsdWUpLHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpfWVsc2UgaWYoaXNGdW5jdGlvbih2YWx1ZSkpe2lmKHR5cGVvZiBvcmlnaW5hbFRlbXBsYXRlIT09XCJzdHJpbmdcIil0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgdXNlIGhpZ2hlci1vcmRlciBzZWN0aW9ucyB3aXRob3V0IHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZVwiKTt2YWx1ZT12YWx1ZS5jYWxsKGNvbnRleHQudmlldyxvcmlnaW5hbFRlbXBsYXRlLnNsaWNlKHRva2VuWzNdLHRva2VuWzVdKSxzdWJSZW5kZXIpO2lmKHZhbHVlIT1udWxsKWJ1ZmZlcis9dmFsdWV9ZWxzZXtidWZmZXIrPXRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl9cmV0dXJuIGJ1ZmZlcn07V3JpdGVyLnByb3RvdHlwZS5yZW5kZXJJbnZlcnRlZD1mdW5jdGlvbiByZW5kZXJJbnZlcnRlZCh0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpe3ZhciB2YWx1ZT1jb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7aWYoIXZhbHVlfHxpc0FycmF5KHZhbHVlKSYmdmFsdWUubGVuZ3RoPT09MClyZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKX07V3JpdGVyLnByb3RvdHlwZS5yZW5kZXJQYXJ0aWFsPWZ1bmN0aW9uIHJlbmRlclBhcnRpYWwodG9rZW4sY29udGV4dCxwYXJ0aWFscyl7aWYoIXBhcnRpYWxzKXJldHVybjt2YXIgdmFsdWU9aXNGdW5jdGlvbihwYXJ0aWFscyk/cGFydGlhbHModG9rZW5bMV0pOnBhcnRpYWxzW3Rva2VuWzFdXTtpZih2YWx1ZSE9bnVsbClyZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModGhpcy5wYXJzZSh2YWx1ZSksY29udGV4dCxwYXJ0aWFscyx2YWx1ZSl9O1dyaXRlci5wcm90b3R5cGUudW5lc2NhcGVkVmFsdWU9ZnVuY3Rpb24gdW5lc2NhcGVkVmFsdWUodG9rZW4sY29udGV4dCl7dmFyIHZhbHVlPWNvbnRleHQubG9va3VwKHRva2VuWzFdKTtpZih2YWx1ZSE9bnVsbClyZXR1cm4gdmFsdWV9O1dyaXRlci5wcm90b3R5cGUuZXNjYXBlZFZhbHVlPWZ1bmN0aW9uIGVzY2FwZWRWYWx1ZSh0b2tlbixjb250ZXh0KXt2YXIgdmFsdWU9Y29udGV4dC5sb29rdXAodG9rZW5bMV0pO2lmKHZhbHVlIT1udWxsKXJldHVybiBtdXN0YWNoZS5lc2NhcGUodmFsdWUpfTtXcml0ZXIucHJvdG90eXBlLnJhd1ZhbHVlPWZ1bmN0aW9uIHJhd1ZhbHVlKHRva2VuKXtyZXR1cm4gdG9rZW5bMV19O211c3RhY2hlLm5hbWU9XCJtdXN0YWNoZS5qc1wiO211c3RhY2hlLnZlcnNpb249XCIyLjMuMFwiO211c3RhY2hlLnRhZ3M9W1wiPCVcIixcIiU+XCJdO3ZhciBkZWZhdWx0V3JpdGVyPW5ldyBXcml0ZXI7bXVzdGFjaGUuY2xlYXJDYWNoZT1mdW5jdGlvbiBjbGVhckNhY2hlKCl7cmV0dXJuIGRlZmF1bHRXcml0ZXIuY2xlYXJDYWNoZSgpfTttdXN0YWNoZS5wYXJzZT1mdW5jdGlvbiBwYXJzZSh0ZW1wbGF0ZSx0YWdzKXtyZXR1cm4gZGVmYXVsdFdyaXRlci5wYXJzZSh0ZW1wbGF0ZSx0YWdzKX07bXVzdGFjaGUucmVuZGVyPWZ1bmN0aW9uIHJlbmRlcih0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzKXtpZih0eXBlb2YgdGVtcGxhdGUhPT1cInN0cmluZ1wiKXt0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHRlbXBsYXRlISBUZW1wbGF0ZSBzaG91bGQgYmUgYSBcInN0cmluZ1wiICcrJ2J1dCBcIicrdHlwZVN0cih0ZW1wbGF0ZSkrJ1wiIHdhcyBnaXZlbiBhcyB0aGUgZmlyc3QgJytcImFyZ3VtZW50IGZvciBtdXN0YWNoZSNyZW5kZXIodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKVwiKX1yZXR1cm4gZGVmYXVsdFdyaXRlci5yZW5kZXIodGVtcGxhdGUsdmlldyxwYXJ0aWFscyl9O211c3RhY2hlLnRvX2h0bWw9ZnVuY3Rpb24gdG9faHRtbCh0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzLHNlbmQpe3ZhciByZXN1bHQ9bXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLHZpZXcscGFydGlhbHMpO2lmKGlzRnVuY3Rpb24oc2VuZCkpe3NlbmQocmVzdWx0KX1lbHNle3JldHVybiByZXN1bHR9fTttdXN0YWNoZS5lc2NhcGU9ZXNjYXBlSHRtbDttdXN0YWNoZS5TY2FubmVyPVNjYW5uZXI7bXVzdGFjaGUuQ29udGV4dD1Db250ZXh0O211c3RhY2hlLldyaXRlcj1Xcml0ZXI7cmV0dXJuIG11c3RhY2hlfSk7IiwiLyoqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMCwyMDExLDIwMTIsMjAxMywyMDE0IE1vcmdhbiBSb2RlcmljayBodHRwOi8vcm9kZXJpY2suZGtcclxuICogTGljZW5zZTogTUlUIC0gaHR0cDovL21yZ25yZHJjay5taXQtbGljZW5zZS5vcmdcclxuICpcclxuICogaHR0cHM6Ly9naXRodWIuY29tL21yb2Rlcmljay9QdWJTdWJKU1xyXG4gKi9cclxuIWZ1bmN0aW9uKG4sdCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9e307bi5QdWJTdWI9cjt2YXIgZT1uLmRlZmluZTshZnVuY3Rpb24obil7dmFyIHQ9e30scj0tMTtmdW5jdGlvbiBlKG4pe3ZhciB0O2Zvcih0IGluIG4paWYobi5oYXNPd25Qcm9wZXJ0eSh0KSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBvKG4sdCxyKXt0cnl7bih0LHIpfWNhdGNoKG4pe3NldFRpbWVvdXQoZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKCl7dGhyb3cgbn19KG4pLDApfX1mdW5jdGlvbiBpKG4sdCxyKXtuKHQscil9ZnVuY3Rpb24gdShuLHIsZSx1KXt2YXIgZixzPXRbcl0sYz11P2k6bztpZih0Lmhhc093blByb3BlcnR5KHIpKWZvcihmIGluIHMpcy5oYXNPd25Qcm9wZXJ0eShmKSYmYyhzW2ZdLG4sZSl9ZnVuY3Rpb24gZihuLHIsbyxpKXt2YXIgZj1mdW5jdGlvbihuLHQscil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9U3RyaW5nKG4pLG89ZS5sYXN0SW5kZXhPZihcIi5cIik7Zm9yKHUobixuLHQscik7LTEhPT1vOyllPWUuc3Vic3RyKDAsbyksbz1lLmxhc3RJbmRleE9mKFwiLlwiKSx1KG4sZSx0LHIpfX0obj1cInN5bWJvbFwiPT10eXBlb2Ygbj9uLnRvU3RyaW5nKCk6bixyLGkpLHM9ZnVuY3Rpb24obil7dmFyIHI9U3RyaW5nKG4pLG89Qm9vbGVhbih0Lmhhc093blByb3BlcnR5KHIpJiZlKHRbcl0pKSxpPXIubGFzdEluZGV4T2YoXCIuXCIpO2Zvcig7IW8mJi0xIT09aTspcj1yLnN1YnN0cigwLGkpLGk9ci5sYXN0SW5kZXhPZihcIi5cIiksbz1Cb29sZWFuKHQuaGFzT3duUHJvcGVydHkocikmJmUodFtyXSkpO3JldHVybiBvfShuKTtyZXR1cm4hIXMmJighMD09PW8/ZigpOnNldFRpbWVvdXQoZiwwKSwhMCl9bi5wdWJsaXNoPWZ1bmN0aW9uKHQscil7cmV0dXJuIGYodCxyLCExLG4uaW1tZWRpYXRlRXhjZXB0aW9ucyl9LG4ucHVibGlzaFN5bmM9ZnVuY3Rpb24odCxyKXtyZXR1cm4gZih0LHIsITAsbi5pbW1lZGlhdGVFeGNlcHRpb25zKX0sbi5zdWJzY3JpYmU9ZnVuY3Rpb24obixlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXJldHVybiExO249XCJzeW1ib2xcIj09dHlwZW9mIG4/bi50b1N0cmluZygpOm4sdC5oYXNPd25Qcm9wZXJ0eShuKXx8KHRbbl09e30pO3ZhciBvPVwidWlkX1wiK1N0cmluZygrK3IpO3JldHVybiB0W25dW29dPWUsb30sbi5zdWJzY3JpYmVPbmNlPWZ1bmN0aW9uKHQscil7dmFyIGU9bi5zdWJzY3JpYmUodCxmdW5jdGlvbigpe24udW5zdWJzY3JpYmUoZSksci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KTtyZXR1cm4gbn0sbi5jbGVhckFsbFN1YnNjcmlwdGlvbnM9ZnVuY3Rpb24oKXt0PXt9fSxuLmNsZWFyU3Vic2NyaXB0aW9ucz1mdW5jdGlvbihuKXt2YXIgcjtmb3IociBpbiB0KXQuaGFzT3duUHJvcGVydHkocikmJjA9PT1yLmluZGV4T2YobikmJmRlbGV0ZSB0W3JdfSxuLnVuc3Vic2NyaWJlPWZ1bmN0aW9uKHIpe3ZhciBlLG8saSx1PVwic3RyaW5nXCI9PXR5cGVvZiByJiYodC5oYXNPd25Qcm9wZXJ0eShyKXx8ZnVuY3Rpb24obil7dmFyIHI7Zm9yKHIgaW4gdClpZih0Lmhhc093blByb3BlcnR5KHIpJiYwPT09ci5pbmRleE9mKG4pKXJldHVybiEwO3JldHVybiExfShyKSksZj0hdSYmXCJzdHJpbmdcIj09dHlwZW9mIHIscz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByLGM9ITE7aWYoIXUpe2ZvcihlIGluIHQpaWYodC5oYXNPd25Qcm9wZXJ0eShlKSl7aWYobz10W2VdLGYmJm9bcl0pe2RlbGV0ZSBvW3JdLGM9cjticmVha31pZihzKWZvcihpIGluIG8pby5oYXNPd25Qcm9wZXJ0eShpKSYmb1tpXT09PXImJihkZWxldGUgb1tpXSxjPSEwKX1yZXR1cm4gY31uLmNsZWFyU3Vic2NyaXB0aW9ucyhyKX19KHIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUuYW1kP2UoZnVuY3Rpb24oKXtyZXR1cm4gcn0pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiYodm9pZCAwIT09bW9kdWxlJiZtb2R1bGUuZXhwb3J0cyYmKGV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9ciksZXhwb3J0cy5QdWJTdWI9cixtb2R1bGUuZXhwb3J0cz1leHBvcnRzPXIpfShcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3d8fHRoaXMpOyIsIi8qISBVVEYtOFxyXG5cclxuwqkga292cmlnaW5cclxu0JLRgdC1INC/0YDQsNCy0LAg0YDQsNC30YDQtdGI0LXQvdGLXHJcbtC60YDQsNGB0LjQstGL0Lkg0LTQuNC30LDQudC9INC00L7Qu9C20LXQvSDQuNC80LXRgtGMINC60YDQsNGB0LjQstGL0Lkg0LrQvtC0wq5cclxuXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9odG1scGx1c2Nzcy9cclxuXHJcbiovXHJcblxyXG4oICgpID0+IHtcclxuXHJcblx0bGV0IHJlc2l6ZVRpbWVvdXQgPSBudWxsLFxyXG5cdFx0d2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcclxuXHJcblx0XHRcdGlmICghcmVzaXplVGltZW91dCkge1xyXG5cclxuXHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRcdGlmKHdpbmRvd1dpZHRoT0xkICE9PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xyXG5cclxuXHRcdFx0XHRcdFx0d2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcblx0XHRcdFx0XHRcdFB1YlN1Yi5wdWJsaXNoKCd3aW5kb3dXaWR0aFJlc2l6ZScpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSwgMTAwKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0UHViU3ViLnB1Ymxpc2goJ3BhZ2VMb2FkJyk7XHJcblxyXG5cdFx0Q29va2llcy5zZXQoJ2Zhc3RMb2FkU2NyaXB0JywgdHJ1ZSk7XHJcblxyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXRyYW5zaXRpb25EZWZhdWx0JywgJy4zcycpO1xyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWhlYWRlckhlaWdodCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5jbGllbnRIZWlnaHQgKyAncHgnKTtcclxuXHJcblx0XHRpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykpIHtcclxuXHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mb290ZXJIZWlnaHQnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykuY2xpZW50SGVpZ2h0ICsgJ3B4Jyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8g0L7QsdGA0LDQsdC+0YLRh9C40Log0LDQvdC40LzQsNGG0LjQuVxyXG5cdHdpbmRvdy5jc3NBbmltYXRpb24gPSBhPT57bGV0IGIsYyxkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjc3NhbmltYXRpb25cIik7c3dpdGNoKGEpe2Nhc2UnYW5pbWF0aW9uJzpiPXtcImFuaW1hdGlvblwiOlwiYW5pbWF0aW9uZW5kXCIsXCJPQW5pbWF0aW9uXCI6XCJvQW5pbWF0aW9uRW5kXCIsXCJNb3pBbmltYXRpb25cIjpcImFuaW1hdGlvbmVuZFwiLFwiV2Via2l0QW5pbWF0aW9uXCI6XCJ3ZWJraXRBbmltYXRpb25FbmRcIn07YnJlYWs7Y2FzZSd0cmFuc2l0aW9uJzpiPXtcInRyYW5zaXRpb25cIjpcInRyYW5zaXRpb25lbmRcIixcIk9UcmFuc2l0aW9uXCI6XCJvVHJhbnNpdGlvbkVuZFwiLFwiTW96VHJhbnNpdGlvblwiOlwidHJhbnNpdGlvbmVuZFwiLFwiV2Via2l0VHJhbnNpdGlvblwiOlwid2Via2l0VHJhbnNpdGlvbkVuZFwifX1mb3IoYyBpbiBiKWlmKGQuc3R5bGVbY10hPT11bmRlZmluZWQpcmV0dXJuIGJbY119XHJcblxyXG5cdC8vIERldGVybWluZSBpZiBhbiBlbGVtZW50IGlzIGluIHRoZSB2aXNpYmxlIHZpZXdwb3J0XHJcblx0d2luZG93LmlzSW5WaWV3cG9ydCA9IGVsID0+IHtcclxuXHRcdGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHJldHVybiAocmVjdC50b3AgPj0gMCAmJiByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cdH1cclxuXHJcblx0Ly8g0L7RgtC00LXQu9GP0LXQvCDRgtGL0YHRj9GH0LhcclxuXHR3aW5kb3cuc2VwTnVtYmVyID0gZnVuY3Rpb24oc3RyKXtcclxuXHRcdHN0ciA9IHN0ci50b1N0cmluZygpO1xyXG5cdFx0c3RyID0gc3RyLnJlcGxhY2UoL1xccysvZywnJyk7XHJcblx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKFteXFxkXXwkKSkvZywgJyQxICcpO1xyXG5cdH1cclxuXHJcblx0Ly8g0YHQutC70LXQuNCy0LDQtdC8INGC0YvRgdGP0YfQuFxyXG5cdHdpbmRvdy5zdHJUb051bWJlciA9IGZ1bmN0aW9uKG4pe1xyXG5cdFx0cmV0dXJuIHBhcnNlSW50KG4ucmVwbGFjZSgvXFxzKy9nLCcnKSwgMTApO1xyXG5cdH1cclxuXHJcbi8vINGB0LrQu9C+0L3QtdC90LjQtVxyXG5cdHdpbmRvdy5kZWNsZW5zaW9uID0gKG51bSwgZXhwcmVzc2lvbnMpID0+IHtcclxuXHJcblx0XHRsZXQgcixcclxuXHRcdFx0Y291bnQgPSBudW0gJSAxMDA7XHJcblxyXG5cdFx0aWYgKGNvdW50ID4gNCAmJiBjb3VudCA8IDIxKXtcclxuXHJcblx0XHRcdHIgPSBleHByZXNzaW9uc1snMiddO1xyXG5cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0Y291bnQgPSBjb3VudCAlIDEwO1xyXG5cclxuXHRcdFx0aWYgKGNvdW50ID09IDEpe1xyXG5cdFx0XHRcdHIgPSBleHByZXNzaW9uc1snMCddO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGNvdW50ID4gMSAmJiBjb3VudCA8IDUpe1xyXG5cdFx0XHRcdHIgPSBleHByZXNzaW9uc1snMSddO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2V7XHJcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycyJ107XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHI7XHJcblxyXG5cdH1cclxuXHJcbn0pKCk7IiwiLyooIGZvcm0gPT4ge1xyXG5cclxuXHRpZihmb3JtKSB7XHJcblxyXG5cdFx0Y29uc3QgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FqYXgtbG9hZC1zY3JvbGwtcmVzdWx0JyksXHJcblx0XHRcdCAgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRcdCAgcGFnaW4gPSBmb3JtLmVsZW1lbnRzLnBhZ2luO1xyXG5cclxuXHRcdGxldCB3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0aWYgKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XHJcblxyXG5cdFx0XHRjb25zdCBjYWxsYmFjayA9IChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGVudHJpZXMsIGVudHJ5ID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZihlbnRyeS5pc0ludGVyc2VjdGluZyAmJiBmb3JtLmNsYXNzTGlzdC5jb250YWlucygnaXMtbG9hZGluZycpID09PSBmYWxzZSkge1xyXG5cclxuXHRcdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG5cdFx0XHRcdFx0XHQudGhlbihodG1sID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coaHRtbCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGJveC5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRcdFx0XHRcdEFycmF5LmZyb20oYm94LmNoaWxkcmVuLCBpdGVtID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiggd2luZG93U2Nyb2xsICE9PSB3aW5kb3cucGFnZVlPZmZzZXQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsd2luZG93U2Nyb2xsKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRwYWdpbi52YWx1ZSA9IHBhcnNlSW50KHBhZ2luLnZhbHVlKSArIDE7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihjYWxsYmFjayk7XHJcblxyXG5cdFx0XHRvYnNlcnZlci5vYnNlcnZlKGZvcm0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFqYXgtbG9hZC1zY3JvbGwnKSk7Ki8iLCJcclxuKCBsaW5rcyA9PiB7XHJcblxyXG5cdGlmKGxpbmtzLmxlbmd0aCkge1xyXG5cclxuXHRcdGNvbnN0IGhpc3RvcnlCYWNrID0gZXZlbnQ9PiB7XHJcblxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRoaXN0b3J5LmJhY2soKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0QXJyYXkuZnJvbShsaW5rcywgbGluayA9PiB7XHJcblxyXG5cdFx0XHRpZihkb2N1bWVudC5yZWZlcnJlci5pbmRleE9mKGxvY2F0aW9uLmhvc3RuYW1lKSA+IDApIHtcclxuXHJcblx0XHRcdFx0bGluay5vbmNsaWNrID0gaGlzdG9yeUJhY2s7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1idG4tYmFjaycpKTsiLCJcclxuLy8gbGFuZyBFTnxSVSDQsiDRgtC+0LLQsNGA0LVcclxuXHJcbiggZm9ybSA9PiB7XHJcblxyXG5cdGlmKGZvcm0gPT09IG51bGwpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Ly8g0LrQvdC+0L/QutC4INGB0LrQsNGH0LDRgtGMXHJcblxyXG5cdGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kb2NzLWl0ZW0tbGFuZ10nKTtcclxuXHJcblx0aWYoYnRucy5sZW5ndGgpIHtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGxhbmcgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZG9jcy1pdGVtLWxhbmdcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShidG5zLCBlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWRvY3MtaXRlbS1sYW5nJykgIT09IGxhbmcpKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHQvLyDRhNC+0YDQvNCwINC30LDQv9GA0L7RgdCwINGG0LXQvdGLINCyINC80L7QtNCw0LvQutC1XHJcblxyXG5cdGNvbnN0IGZvcm1HZXRQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tZ2V0LXByaWNlIGZvcm0nKTtcclxuXHJcblx0aWYoZm9ybUdldFByaWNlKSB7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBsYW5nID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRvY3MtaXRlbS1sYW5nXCJdOmNoZWNrZWQnKS52YWx1ZTtcclxuXHJcblx0XHRcdGZvcm1HZXRQcmljZS5lbGVtZW50cy5sYW5nLnZhbHVlID0gbGFuZztcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3MtaXRlbV9fbGFuZycpKTsiLCJcclxuLy8gZm9ybXNcclxuXHJcbiggZmllbGRzZXRzID0+IHtcclxuXHJcblx0aWYoZmllbGRzZXRzLmxlbmd0aCkge1xyXG5cclxuXHRcdGNvbnN0IHNlYXJjaFJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXNlYXJjaC1yZXN1bHQnKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGZpZWxkc2V0cywgZmllbGRzZXQgPT4ge1xyXG5cclxuXHRcdFx0Ly8gb3BlblxyXG5cclxuXHRcdFx0ZmllbGRzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kb2NzLWZvcm1fX3Jlc3VsdCcpICkge1xyXG5cclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGZpZWxkc2V0cywgZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZm9jdXMnLCBlbCA9PT0gZmllbGRzZXQpKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y29uc3QgZm9ybSA9IGZpZWxkc2V0LmNsb3Nlc3QoJy5kb2NzLWZvcm0nKSxcclxuXHRcdFx0XHQgIGlucHV0ID0gZmllbGRzZXQucXVlcnlTZWxlY3RvcignLmRvY3MtZm9ybV9faW5wdXQnKSxcclxuXHRcdFx0XHQgIHJlc2V0ID0gZmllbGRzZXQucXVlcnlTZWxlY3RvcignLmRvY3MtZm9ybV9fcmVzZXQnKSxcclxuXHRcdFx0XHQgIHJlc3VsdCA9IGZpZWxkc2V0LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWZvcm1fX3Jlc3VsdCcpXHJcblx0XHRcdFx0ICBmb3JtU2hvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1wYWdlLS1zaG9ydCcpO1xyXG5cclxuXHRcdFx0Ly8gaW5wdXRcclxuXHJcblx0XHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGZpZWxkc2V0cywgZWwgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWZvY3VzJywgZWwgPT09IGZpZWxkc2V0KTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGZpZWxkc2V0LmNsYXNzTGlzdC5jb250YWlucygnZG9jcy1mb3JtX19jYXRhbG9nJykgJiYgZWwgIT09IGZpZWxkc2V0ICkge1xyXG5cclxuXHRcdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHQvKiBub21lbmNsYXR1cmUgKi9cclxuXHJcblx0XHRcdGlmKGZpZWxkc2V0LmNsYXNzTGlzdC5jb250YWlucygnZG9jcy1mb3JtX19ub21lbmNsYXR1cmUnKSkge1xyXG5cclxuXHRcdFx0XHQvLyBkYXRhbGlzdFxyXG5cclxuXHRcdFx0XHRjb25zdCBkYXRhbGlzdCA9IGZpZWxkc2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb2NzLWZvcm1fX3Jlc3VsdC1kYXRhbGlzdCcpO1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGRhdGFsaXN0LCBidG4gPT4ge1xyXG5cclxuXHRcdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGZpZWxkc2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZvY3VzJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9IGJ0bi50ZXh0Q29udGVudC50cmltKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXNldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLW5vZW1wdHknKTtcclxuXHJcblx0XHRcdFx0XHRcdGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdFx0XHRcdHJlc2V0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCB2YWx1ZS5sZW5ndGggPT09IDApO1xyXG5cclxuXHRcdFx0XHRcdGlmKHZhbHVlLmxlbmd0aCA+IDEpIHtcclxuXHJcblx0XHRcdFx0XHRcdEFycmF5LmZyb20oZGF0YWxpc3QsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRleHQgPSBidG4udGV4dENvbnRlbnQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgdGV4dC5pbmRleE9mKHZhbHVlKSA9PT0gLTEpO1xyXG5cclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0XHRpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZW1wdHknKTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0QXJyYXkuZnJvbShkYXRhbGlzdCwgYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdC8vIHJlc2V0ID09PSBjbGVhclxyXG5cclxuXHRcdFx0XHRyZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRBcnJheS5mcm9tKGRhdGFsaXN0LCBidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XHJcblx0XHRcdFx0XHRmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdpcy1mb2N1cycpO1xyXG5cdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1ub2VtcHR5Jyk7XHJcblx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9ICcnO1xyXG5cdFx0XHRcdFx0aW5wdXQuZm9jdXMoKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdC8vIHJlc2V0INGC0LDQvCDQs9C00LUg0YDQtdCw0LvRjNC90LDRjyDQutC90L7Qv9C60LAgcmVzZXRcclxuXHJcblx0XHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRBcnJheS5mcm9tKGRhdGFsaXN0LCBidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XHJcblx0XHRcdFx0XHRmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdpcy1mb2N1cycpO1xyXG5cdFx0XHRcdFx0aW5wdXQuZm9jdXMoKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0LyogZGV2ZWxvcGVyICovXHJcblxyXG5cdFx0XHRpZihmaWVsZHNldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RvY3MtZm9ybV9fZGV2ZWxvcGVyJykpIHtcclxuXHJcblx0XHRcdFx0Ly8gY2hlY2tib3hcclxuXHJcblx0XHRcdFx0Y29uc3QgY2hlY2tib3ggPSBmaWVsZHNldC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3hfX2lucHV0Jyk7XHJcblxyXG5cdFx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmKCBldmVudC50YXJnZXQudHlwZSAhPT0gJ2NoZWNrYm94JyApIHtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0bGV0IHZhbHVlID0gJyc7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBldmVudC50YXJnZXQubmFtZSA9PT0gJ2FsbCcgJiYgZXZlbnQudGFyZ2V0LmNoZWNrZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR2YWx1ZSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnRleHRDb250ZW50LnRyaW0oKTtcclxuXHJcblx0XHRcdFx0XHRcdEFycmF5LmZyb20oY2hlY2tib3gsIGVsID0+IGVsLmNoZWNrZWQgPSB0cnVlKTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0QXJyYXkuZnJvbShjaGVja2JveCwgZWwgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiggZWwubmFtZSA9PT0gJ2FsbCcgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0ZWwuY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmKCBlbC5jaGVja2VkICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGxhYmVsID0gZWwucGFyZW50Tm9kZTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiggdmFsdWUgIT09ICcnICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWUgKz0gJywgJztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWUgKz0gbGFiZWwudGV4dENvbnRlbnQudHJpbSgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aW5wdXQudmFsdWUgPSB2YWx1ZTtcclxuXHJcblx0XHRcdFx0XHRpZiggdmFsdWUgPT09ICcnICkge1xyXG5cclxuXHRcdFx0XHRcdFx0cmVzZXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW5vZW1wdHknKTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0cmVzZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLW5vZW1wdHknKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQvLyByZXNldCA9PT0gY2xlYXJcclxuXHJcblx0XHRcdFx0cmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0QXJyYXkuZnJvbShjaGVja2JveCwgZWwgPT4gZWwuY2hlY2tlZCA9IGZhbHNlKTtcclxuXHRcdFx0XHRcdGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2lzLWZvY3VzJyk7XHJcblx0XHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW5vZW1wdHknKTtcclxuXHRcdFx0XHRcdGlucHV0LnZhbHVlID0gJyc7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gcHJvZHVjdFxyXG5cclxuXHRcdFx0aWYoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2RvY3MtZm9ybS0tcHJvZHVjdCcpKSB7XHJcblxyXG5cdFx0XHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmKGlucHV0LnZhbHVlLmxlbmd0aCA+IDIgJiYgZXZlbnQua2V5ICE9PSAnZW50ZXInKXtcclxuXHJcblx0XHRcdFx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybS0tbG9hZGluZycpO1xyXG5cclxuXHRcdFx0XHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcclxuXHRcdFx0XHRcdFx0LnRoZW4oaHRtbCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGh0bWwpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRyZXN1bHQuaW5uZXJIVE1MID0gaHRtbDtcclxuXHRcdFx0XHRcdFx0XHRyZXN1bHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS0tbG9hZGluZycpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRyZXNldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdHJlc3VsdC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRpbnB1dC5mb2N1cygpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGlmKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLmRvY3MtZm9ybV9fZmllbGRzZXQnKSA9PT0gbnVsbCApe1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGZpZWxkc2V0cywgZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZm9jdXMnLCAnaGlkZScpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHRhYnNcclxuXHJcblx0XHRcdGNvbnN0IHRhYnNCdG4gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmRvY3MtcGFnZV9fdGFicy1pdGVtJyk7XHJcblxyXG5cdFx0XHRpZiggdGFic0J0biApe1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1wYWdlX190YWJzLWl0ZW0uaXMtYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XHJcblx0XHRcdFx0dGFic0J0bi5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0aWYoIHRhYnNCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdkb2NzLXBhZ2VfX3RhYnMtaXRlbS0tc3RhbmRhcnRzJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3MtcGFnZV9fZm9ybXMtLXN0YW5kYXJ0cycpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXBhZ2VfX2Zvcm1zLS1hbmFseXRpY3MnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYoIHRhYnNCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdkb2NzLXBhZ2VfX3RhYnMtaXRlbS0tYW5hbHl0aWNzJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3MtcGFnZV9fZm9ybXMtLWFuYWx5dGljcycpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXBhZ2VfX2Zvcm1zLS1zdGFuZGFydHMnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblxyXG5cdFx0Ly8gZm9ybVxyXG5cclxuXHRcdEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvY3MtZm9ybScpLCBmb3JtID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZG9jcy1mb3JtX19pbnB1dCcpLFxyXG5cdFx0XHRcdCAgcmVzZXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWZvcm1fX3Jlc2V0JyksXHJcblx0XHRcdFx0ICByZXN1bHQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWZvcm1fX3Jlc3VsdCcpO1xyXG5cclxuXHRcdFx0Ly8gcmVzZXRcclxuXHJcblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCAoKSA9PiByZXNldC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xyXG5cclxuXHRcdFx0Ly8gY2hhbmdlXHJcblxyXG5cdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2coZm9ybSwgJ2NoYW5nZScpXHJcblxyXG5cdFx0XHRcdHNlYXJjaFJlc3VsdC5jbGFzc0xpc3QuYWRkKCdpcy1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcclxuXHRcdFx0XHQudGhlbihodG1sID0+IHtcclxuXHJcblx0XHRcdC8vXHRcdHNlYXJjaFJlc3VsdC5pbm5lckhUTUwgPSBodG1sO1xyXG5cdFx0XHQvL1x0XHRzZWFyY2hSZXN1bHQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0aWYoZm9ybVNob3J0ID09PSBudWxsKSB7XHJcblxyXG5cdFx0XHRcdFx0Zm9ybVNob3J0ID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2UtYmx1ZScpO1xyXG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3MtcGFnZScpLmNsYXNzTGlzdC5hZGQoJ2RvY3MtcGFnZS0tc2hvcnQnKTtcclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXBhZ2VfX2Rlc2NyaXB0aW9uJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGlucHV0XHJcblxyXG5cdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW5vZW1wdHknLCBpbnB1dC52YWx1ZS5sZW5ndGggPiAwKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gc3VibWl0XHJcblxyXG5cdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0Zm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvY3MtZm9ybV9fZmllbGRzZXQnKSk7IiwiKCAoKSA9PiB7XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRsZXQgZm9ybSA9IGV2ZW50LnRhcmdldDtcclxuXHJcblx0XHQvLyDQtNC+0LHQsNCy0LjRgtGMINCyINC40LfQsdGA0LDQvdC90L7QtVxyXG5cclxuXHRcdGlmIChmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1hZGQtZmF2b3VyaXRlJykpIHtcclxuXHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0XHQudGhlbihqc29uID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2coanNvbik7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxufSkoKTsiLCIoIGl0ZW1zID0+IHtcclxuXHJcblx0aWYoIWl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGl0ZW1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRjb25zdCBidG4gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19zdWJtaXQnKSxcclxuXHRcdFx0ICBva1RleHQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19vaycpLFxyXG5cdFx0XHQgIGVycm9yVGV4dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm1fX2Vycm9yJyk7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1sb2FkaW5nJyk7XHJcblx0XHRcdGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0XHQudGhlbihyZXN1bHQgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKTtcclxuXHRcdFx0XHRidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuLypcclxuXHRcdFx0XHRpZihyZXN1bHQubXNnKSB7XHJcblxyXG5cdFx0XHRcdFx0Zm9ybS5yZXNldCgpO1xyXG5cclxuXHRcdFx0XHRcdG1vZGFsLm9rKHJlc3VsdC5tc2cudGl0bGUsIHJlc3VsdC5tc2cudGV4dCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdC8vINGA0LXQt9GD0LvRjNGC0LDRgiDRg9GB0L/QtdGF0LAg0LfQsNGP0LLQutC4IHF1YWxpdHlcclxuXHJcblx0XHRcdFx0aWYocmVzdWx0Lm1vZGFsID09PSAncXVhbGl0eS1vaycpIHtcclxuXHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVhbGl0eS1yZXN1bHRfX251bWJlcicpLnRleHRDb250ZW50ID0gcmVzdWx0Lm51bWJlcjtcclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWFsaXR5LXJlc3VsdF9fcHJvZHVjdCcpLnRleHRDb250ZW50ID0gcmVzdWx0LnByb2R1Y3ROYW1lO1xyXG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1YWxpdHktcmVzdWx0X19wcm9kdWN0JykuZ2V0QXR0cmlidXRlKCdocmVmJywgcmVzdWx0LnByb2R1Y3RMaW5rKTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBldmVudE1vZGFsU2hvdyA9IG5ldyBDdXN0b21FdmVudChcIm1vZGFsU2hvd1wiLCB7XHJcblx0XHRcdFx0XHRcdGRldGFpbDoge1xyXG5cdFx0XHRcdFx0XHRcdHNlbGVjdG9yOiByZXN1bHQubW9kYWxcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0d2luZG93Lm1vZGFsLmRpc3BhdGNoRXZlbnQoZXZlbnRNb2RhbFNob3cpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBpbmZvIG1vZGFsXHJcblxyXG5cdFx0XHRcdGlmKHJlc3VsdC50eXBlID09PSAnb2snIHx8IHJlc3VsdC50eXBlID09PSAnZXJyb3InKSB7XHJcblxyXG5cdFx0XHRcdFx0bW9kYWwub2socmVzdWx0LnRpdGxlLCByZXN1bHQudGV4dCwgcmVzdWx0Lm1vZCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdC8vIG9rIGluIGZvcm1cclxuXHJcblx0XHRcdFx0aWYob2tUZXh0KSB7XHJcblxyXG5cdFx0XHRcdFx0aWYocmVzdWx0LnR5cGUgPT09ICdmb3JtLW9rJykge1xyXG5cclxuXHRcdFx0XHRcdFx0b2tUZXh0LnRleHRDb250ZW50ID0gcmVzdWx0LnRleHQ7XHJcblx0XHRcdFx0XHRcdG9rVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZighSU5USS5pc0luVmlld3BvcnQob2tUZXh0KSl7XHJcblxyXG5cdFx0XHRcdFx0XHRcdG9rVGV4dC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0b2tUZXh0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGVycm9yIGluIGZvcm1cclxuXHJcblx0XHRcdFx0aWYoZXJyb3JUZXh0KSB7XHJcblxyXG5cdFx0XHRcdFx0aWYocmVzdWx0LnR5cGUgPT09ICdmb3JtLWVycm9yJykge1xyXG5cclxuXHRcdFx0XHRcdFx0ZXJyb3JUZXh0LnRleHRDb250ZW50ID0gcmVzdWx0LnRleHQ7XHJcblx0XHRcdFx0XHRcdGVycm9yVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZighSU5USS5pc0luVmlld3BvcnQoZXJyb3JUZXh0KSl7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGVycm9yVGV4dC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0ZXJyb3JUZXh0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHJlZGlyZWN0XHJcblxyXG5cdFx0XHRcdGlmKHJlc3VsdC5yZWRpcmVjdCkge1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGRlbGF5ID0gcmVzdWx0LnJlZGlyZWN0RGVsYXkgPyByZXN1bHQucmVkaXJlY3REZWxheSAqIDEwMDAgOiAwO1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoICgpPT4gbG9jYXRpb24uYXNzaWduKHJlc3VsdC5yZWRpcmVjdCksIGRlbGF5KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gZmFkZW91dFxyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQuZmFkZW91dCkge1xyXG5cclxuXHRcdFx0XHRcdG9rVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1mYWRlb3V0Jyk7XHJcblxyXG5cdFx0XHRcdFx0c2V0VGltZW91dCggKCk9PiBva1RleHQuY2xhc3NMaXN0LmFkZCgnaXMtZmFkZW91dCcpLCByZXN1bHQuZmFkZW91dCAqIDEwMDApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyByZXNldFxyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQucmVzZXQpIHtcclxuXHJcblx0XHRcdFx0XHRmb3JtLnJlc2V0KCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHJlbG9hZFxyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQucmVmcmVzaCkge1xyXG5cclxuXHRcdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cclxuXHRcdFx0XHR9XHJcbiovXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtJykpO1xyXG5cclxuKCBmaWxlcyA9PiB7XHJcblxyXG5cdGlmKCFmaWxlcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShmaWxlcywgZWwgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcignLmlucHV0LWZpbGVfX2lucHV0JyksXHJcblx0XHRcdCAgdmFsdWUgPSBlbC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZmlsZV9fdmFsdWUnKTtcclxuXHJcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRlbC5jbGFzc0xpc3QuYWRkKCdpcy1jaGFuZ2UnKTtcclxuXHRcdFx0dmFsdWUudGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZmlsZScpKTsiLCIoIGZvcm1zID0+IHtcclxuXHJcblx0aWYoIWZvcm1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuLypcdEFycmF5LmZyb20oZm9ybXMsIGZvcm0gPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcubGl2ZS1zZWFyY2hfX2lucHV0JyksXHJcblx0XHRcdCAgcmVzdWx0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcubGl2ZS1zZWFyY2hfX3Jlc3VsdCcpO1xyXG5cclxuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0aWYoaW5wdXQudmFsdWUubGVuZ3RoID4gMiAmJiBldmVudC5rZXkgIT09ICdlbnRlcicpe1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2xpdmUtc2VhcmNoLS1sb2FkaW5nJywgJ2xpdmUtc2VhcmNoLS1vcGVuJyk7XHJcblxyXG5cdFx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcclxuXHRcdFx0XHQudGhlbihodG1sID0+IHtcclxuXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhodG1sKTtcclxuXHJcblx0XHRcdFx0XHRyZXN1bHQuaW5uZXJIVE1MID0gaHRtbDtcclxuXHRcdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnbGl2ZS1zZWFyY2gtLWxvYWRpbmcnKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyDRgdC60YDRi9GC0Ywg0YDRg9C30LXQu9GM0YLQsNGC0Ysg0L/RgNC4INC60LvQuNC60LUg0LLQvdC1INGE0L7RgNC80YtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaXNGb3JtID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5saXZlLXNlYXJjaCcpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oZm9ybXMsIGZvcm0gPT4ge1xyXG5cclxuXHRcdFx0aWYoaXNGb3JtICE9PSBmb3JtKSB7XHJcblxyXG5cdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnbGl2ZS1zZWFyY2gtLW9wZW4nKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7Ki9cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXZlLXNlYXJjaCcpKTsiLCIoIHBhZ2UgPT4ge1xyXG5cclxuXHRpZihwYWdlKSB7XHJcblxyXG5cdFx0Y29uc3QgY29udGVudCA9IHBhZ2UucXVlcnlTZWxlY3RvcignLm1haW4tcGFnZV9fY29udGVudCcpO1xyXG5cclxuXHRcdGlmICgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xyXG5cclxuXHRcdFx0Y29uc3QgY2FsbGJhY2sgPSAoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShlbnRyaWVzLCBlbnRyeSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihjYWxsYmFjaywge1xyXG5cdFx0XHRcdHRocmVzaG9sZDogMVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdG9ic2VydmVyLm9ic2VydmUoY29udGVudCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1wYWdlJykpOyIsIiggZWxlbXMgPT4ge1xyXG5cclxuXHRpZighZWxlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cdHNjcmlwdC5zcmMgPSAnL2pzL2lucHV0bWFzay5taW4uanMnO1xyXG5cdHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShlbGVtcywgZWwgPT4ge1xyXG5cclxuXHRcdFx0bGV0IG1hc2tJbnB1dDtcclxuXHJcblx0XHRcdGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnaW5wdXRtYXNrLS1waG9uZScpKSB7XHJcblxyXG5cdFx0XHRcdG1hc2tJbnB1dCA9IG5ldyBJbnB1dG1hc2soe1xyXG5cdFx0XHRcdFx0bWFzazogXCIrNyAoOTk5KSA5OTkgOTkgOTlcIixcclxuXHRcdFx0XHRcdHNob3dNYXNrT25Ib3ZlcjogZmFsc2VcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1hc2tJbnB1dC5tYXNrKGVsKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fTtcclxuXHJcblx0c2V0VGltZW91dCggKCkgPT4gZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpLCBDb29raWVzLmdldCgnZmFzdExvYWRTY3JpcHQnKSA/IDAgOiAxMDAwMCk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXRtYXNrJykpOyIsIi8vIGJ0biB0b2dnbGVcclxuXHJcbi8qKCBidG4gPT4ge1xyXG5cclxuXHRpZihidG4pIHtcclxuXHJcblx0XHRsZXQgd2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdGlmKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LXNob3cnKSkge1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtc2hvdycpO1xyXG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLHdpbmRvd1Njcm9sbCk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbWVudS1zaG93Jyk7XHJcblx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsMCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tbWVudS10b2dnbGUnKSk7XHJcbiovXHJcbi8vIG1lbnUgc2VydmljZVxyXG5cclxuKCBtZW51ID0+IHtcclxuXHJcblx0aWYobWVudSkge1xyXG5cclxuXHRcdGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKSxcclxuXHRcdFx0ICBtZW51VXNlciA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX191c2VyJyk7XHJcblxyXG5cdFx0aGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGl0ZW0gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1lbnVfX2l0ZW0nKTtcclxuXHJcblx0XHRcdGlmKGl0ZW0gIT09IG51bGwpIHtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LXNlcnZpY2Utc2hvdycsIGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51X19zZXJ2aWNlJykpO1xyXG5cdFx0XHRcdG1lbnVVc2VyICYmIG1lbnVVc2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuXHJcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zZXJ2aWNlLXNob3cnKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblxyXG5cdFx0Ly8gbWVudSB1c2VyXHJcblxyXG5cdFx0aWYobWVudVVzZXIpIHtcclxuXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5oZWFkZXJfX3VzZXItYnRuJykgKXtcclxuXHJcblx0XHRcdFx0XHRtZW51VXNlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5oZWFkZXJfX3VzZXInKSA9PT0gbnVsbCApe1xyXG5cclxuXHRcdFx0XHRcdG1lbnVVc2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1zZXJ2aWNlJykpO1xyXG4iLCIoIG1vZGFsID0+IHtcclxuXHJcblx0aWYoIW1vZGFsKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19pdGVtJyksXHJcblx0XHQgIGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbF0nKSxcclxuXHRcdCAgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyksXHJcblx0XHQgIGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcclxuXHJcblx0bGV0IGFjdGl2ZU1vZGFsID0gbnVsbCxcclxuXHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignaGlkZScsICgpID0+IHtcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXNob3cnKTtcclxuXHRcdHdyYXBwZXIuc3R5bGUudG9wID0gMDtcclxuXHRcdGhlYWRlci5zdHlsZS50b3AgPSAwO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsd2luZG93U2Nyb2xsKTtcclxuXHRcdGFjdGl2ZU1vZGFsID0gZmFsc2U7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuXHJcblx0XHRcdG1vZGFsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiaGlkZVwiKSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Y29uc3QgbW9kYWxTaG93ID0gc2VsZWN0b3IgPT4ge1xyXG5cclxuXHRcdGlmKCFhY3RpdmVNb2RhbCl7XHJcblxyXG5cdFx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnc2VhcmNoLW9wZW4nLCBzZWxlY3RvciA9PT0gJ3NlYXJjaCcpO1xyXG5cclxuXHRcdGFjdGl2ZU1vZGFsID0gbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS0nICsgc2VsZWN0b3IpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oaXRlbXMsIGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc3VhbGx5aGlkZGVuJywgZWwgIT09IGFjdGl2ZU1vZGFsKSk7XHJcblxyXG5cdFx0d3JhcHBlci5zdHlsZS50b3AgPSAtd2luZG93U2Nyb2xsICsgJ3B4JztcclxuXHRcdGhlYWRlci5zdHlsZS50b3AgPSB3aW5kb3dTY3JvbGwgKyAncHgnO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1zaG93Jyk7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuXHJcblx0XHRhY3RpdmVNb2RhbC5mb2N1cygpO1xyXG5cclxuXHRcdFB1YlN1Yi5wdWJsaXNoKCdvcGVuLScgKyBzZWxlY3Rvcik7XHJcblxyXG5cdH07XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKCAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwnKSAmJiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2VhcmNoLW9wZW4nKSA9PT0gZmFsc2UpIHx8IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubW9kYWxfX2Nsb3NlJykpe1xyXG5cclxuXHRcdFx0bW9kYWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJoaWRlXCIpKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuXHRcdHdoaWxlICh0YXJnZXQgIT09IGRvY3VtZW50KSB7XHJcblxyXG5cdFx0XHRpZiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpKSB7XHJcblxyXG5cdFx0XHRcdG1vZGFsU2hvdyh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsJykpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignbW9kYWxTaG93JywgZXZlbnQgPT4gbW9kYWxTaG93KGV2ZW50LmRldGFpbC5zZWxlY3RvcikpO1xyXG5cclxuXHRtb2RhbC5vayA9ICh0aXRsZSwgdGV4dCwgbW9kID0gJycpID0+IHtcclxuXHJcblx0XHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLW9rJykuc2V0QXR0cmlidXRlKCdkYXRhLW1vZCcsIG1vZCk7XHJcblx0XHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLW9rIC5tb2RhbC1taW5pX190aXRsZScpLmlubmVySFRNTCA9IHRpdGxlID8gdGl0bGUgOiAnJztcclxuXHRcdG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tb2sgLm1vZGFsLW1pbmlfX3RleHQnKS5pbm5lckhUTUwgPSB0ZXh0ID8gdGV4dCA6ICcnO1xyXG5cdFx0bW9kYWxTaG93KCdvaycpO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKSk7IiwiKCBub3RpZmljYXRpb24gPT4ge1xyXG5cclxuXHRpZighbm90aWZpY2F0aW9uKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGxldCByZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHJcblx0bm90aWZpY2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdGNsZWFyVGltZW91dChyZXNpemVUaW1lb3V0KTtcclxuXHRcdG5vdGlmaWNhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zaG93Jyk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHR3aW5kb3cubm90aWZpY2F0aW9uID0gKGhlYWQsIHRleHQsIHRpbWVyID0gMy4zKSA9PiB7XHJcblxyXG5cdFx0bm90aWZpY2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb25fX2hlYWQnKS5pbm5lckhUTUwgPSBoZWFkID8gaGVhZCA6ICcnO1xyXG5cdFx0bm90aWZpY2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb25fX3RleHQnKS5pbm5lckhUTUwgPSB0ZXh0ID8gdGV4dCA6ICcnO1xyXG5cclxuXHRcdG5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKCdpcy1zaG93Jyk7XHJcblxyXG5cdFx0cmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoICgpPT4ge1xyXG5cclxuXHRcdFx0bm90aWZpY2F0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXNob3cnKTtcclxuXHJcblx0XHR9LCAxMDAwICogdGltZXIpO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90aWZpY2F0aW9uJykpOyIsIiggZm9ybSA9PiB7XHJcblxyXG5cdGlmKCFmb3JtKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19pbnB1dCcpLFxyXG5cdFx0ICByZXN1bHQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX3Jlc3VsdC1pbm5lcicpO1xyXG5cclxuXHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihpbnB1dC52YWx1ZS5sZW5ndGggPiAyICYmIGV2ZW50LmtleSAhPT0gJ2VudGVyJyl7XHJcblxyXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG5cdFx0XHQudGhlbihodG1sID0+IHtcclxuXHJcblx0XHRcdFx0cmVzdWx0LmlubmVySFRNTCA9IGh0bWw7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBzZXRIZWlnaHQgPSAoKSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgcmVjdCA9IHJlc3VsdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHJlc3VsdC5zdHlsZS5tYXhIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSByZWN0LnRvcCArICdweCc7XHJcblxyXG5cdH07XHJcblxyXG5cdFB1YlN1Yi5zdWJzY3JpYmUoJ29wZW4tc2VhcmNoJywgKCkgPT4ge1xyXG5cclxuXHRcdGlucHV0LmZvY3VzKCk7XHJcblxyXG5cdFx0c2V0SGVpZ2h0KCk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRQdWJTdWIuc3Vic2NyaWJlKCd3aW5kb3dXaWR0aFJlc2l6ZScsICgpID0+IHNldEhlaWdodCgpKTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gnKSk7Iiwid2luZG93LnNlbGVjdHMgPSBzZWxlY3QgPT4ge1xyXG5cclxuXHRpZihzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fbGlzdCcpKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHQgIGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuXHRhcnJvdy5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjI5XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI5IDI0XCI+PHBhdGggZD1cIm05Ljg1IDkgNC41IDUgNC41LTVoLTlaXCIvPjwvc3ZnPic7XHJcblxyXG5cdHZhbHVlLmNsYXNzTmFtZSA9ICdzZWxlY3RfX3ZhbHVlJztcclxuXHR2YWx1ZS5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJzZWxlY3RfX3ZhbHVlLWlubmVyXCI+PC9zcGFuPic7XHJcblxyXG5cdHZhbHVlLmFwcGVuZENoaWxkKGFycm93KTtcclxuXHRzZWxlY3QuYXBwZW5kQ2hpbGQodmFsdWUpO1xyXG5cclxuXHRjb25zdCBmb3JtID0gc2VsZWN0LmNsb3Nlc3QoJ2Zvcm0nKSxcclxuXHRcdGNvbnRyb2wgPSBzZWxlY3QucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksXHJcblx0XHRvcHRpb24gPSBzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyksXHJcblx0XHR2YWx1ZVRleHQgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fdmFsdWUtaW5uZXInKSxcclxuXHRcdGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblx0bGlzdC5jbGFzc05hbWUgPSAnc2VsZWN0X19saXN0JztcclxuXHJcblx0bGV0IHNlbGVjdGVkID0gY29udHJvbC5xdWVyeVNlbGVjdG9yKCdbdmFsdWU9XCInICsgY29udHJvbC52YWx1ZSArICdcIl0nKTtcclxuXHJcblx0Y29udHJvbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuXHJcblx0XHRzZWxlY3RlZCA9IGNvbnRyb2wucXVlcnlTZWxlY3RvcignW3ZhbHVlPVwiJyArIGNvbnRyb2wudmFsdWUgKyAnXCJdJyk7XHJcblxyXG5cdFx0dmFsdWVUZXh0LnRleHRDb250ZW50ID0gc2VsZWN0ZWQudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdC0tZGVmYXVsdCcpO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Y29uc3QgdmFsdWVEZWZhdWx0ID0gc2VsZWN0ZWQudGV4dENvbnRlbnQ7XHJcblxyXG5cdGlmKGNvbnRyb2wuZGlzYWJsZWQpe1xyXG5cclxuXHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtLWRpc2FibGVkJyk7XHJcblxyXG5cdH1cclxuXHJcblx0aWYoY29udHJvbC52YWx1ZSA9PT0gJ25vbmUnIHx8IGNvbnRyb2wudmFsdWUgPT09ICcnKXtcclxuXHJcblx0XHRzZWxlY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LS1kZWZhdWx0Jyk7XHJcblxyXG5cdH1cclxuXHJcblx0aWYgKGNvbnRyb2wudmFsdWUgIT09ICcnKSB7XHJcblxyXG5cdFx0dmFsdWVUZXh0LnRleHRDb250ZW50ID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJ29wdGlvblt2YWx1ZT1cIicgKyBjb250cm9sLnZhbHVlICsgJ1wiXScpLnRleHRDb250ZW50O1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20ob3B0aW9uLCBlbCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuXHRcdG8uY2xhc3NOYW1lID0gJ2J1dHRvbiBzZWxlY3RfX2xpc3QtaXRlbSc7XHJcblxyXG5cdFx0by5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcblx0XHRvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBlbC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpO1xyXG5cclxuXHRcdG8udGV4dENvbnRlbnQgPSBlbC50ZXh0Q29udGVudDtcclxuXHJcblx0XHRsaXN0LmFwcGVuZENoaWxkKG8pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0c2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0X19saXN0LWl0ZW0nKSl7XHJcblxyXG5cdFx0XHRjb250cm9sLnZhbHVlID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxuXHJcblx0XHRcdGNvbnRyb2wuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdFx0aWYoZm9ybSkge1xyXG5cclxuXHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRzZWxlY3QuYXBwZW5kQ2hpbGQobGlzdCk7XHJcblxyXG5cdGZvcm0gJiYgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwicmVzZXRcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtLWRlZmF1bHQnKTtcclxuXHRcdHZhbHVlVGV4dC50ZXh0Q29udGVudCA9IHZhbHVlRGVmYXVsdDtcclxuXHJcblx0fSk7XHJcblxyXG59O1xyXG5cclxuKCAoKSA9PiB7XHJcblxyXG5cdHdpbmRvdy5zZWxlY3RzQ29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QnKTtcclxuXHJcblx0aWYod2luZG93LnNlbGVjdHNDb2xsZWN0aW9uLmxlbmd0aCkge1xyXG5cclxuXHRcdEFycmF5LmZyb20od2luZG93LnNlbGVjdHNDb2xsZWN0aW9uLCBzZWxlY3QgPT4gd2luZG93LnNlbGVjdHMoc2VsZWN0KSk7XHJcblxyXG5cdH1cclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaXNTZWxlY3QgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNlbGVjdCcpO1xyXG5cclxuXHRcdEFycmF5LmZyb20od2luZG93LnNlbGVjdHNDb2xsZWN0aW9uLCBzZWxlY3QgPT4ge1xyXG5cclxuXHRcdFx0c2VsZWN0LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdC0tb3BlbicsIHNlbGVjdCA9PT0gaXNTZWxlY3QgJiYgaXNTZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3QtLW9wZW4nKSA9PT0gZmFsc2UpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKCk7IiwiKCBzd2lwZXJDb250YWluZXIgPT4ge1xyXG5cclxuXHRpZighc3dpcGVyQ29udGFpbmVyLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKHN3aXBlckNvbnRhaW5lciwgc3dpcGUgPT4ge1xyXG5cclxuXHRcdGxldCBteVN3aXBlID0gbnVsbCxcclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSBudWxsLFxyXG5cdFx0XHRyZXNldFN3aXBlID0gbnVsbDtcclxuXHJcblx0XHRjb25zdCBzd2lwZUNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRcdCAgc3dpcGVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdFx0ICBzd2lwZUJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdFx0ICBzd2lwZU5leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuXHRcdFx0ICBzd2lwZVByZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuXHRcdFx0ICBzY3JvbGxiYXIgPSBzd2lwZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItc2Nyb2xsYmFyJyksXHJcblx0XHRcdCAgaXRlbXMgPSBzd2lwZS5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLXNsaWRlJyksXHJcblx0XHRcdCAgY291bnQgPSBpdGVtcy5sZW5ndGgsXHJcblx0XHRcdCAgY2xpZW50cyA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tY2xpZW50cycpLFxyXG5cdFx0XHQgIHByb2R1Y3RHYWxsZXJ5ID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1nYWxsZXJ5JyksXHJcblx0XHRcdCAgcHJvZHVjdEdhbGxlcnlQcmV2aWV3ID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1nYWxsZXJ5LXByZXZpZXcnKSxcclxuXHRcdFx0ICBiaWxsYm9hcmQgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWJpbGxib2FyZCcpO1xyXG5cclxuXHRcdHN3aXBlTmF2LmNsYXNzTmFtZSA9ICdzd2lwZXItcGFnaW5hdGlvbic7XHJcblx0XHRzd2lwZUNvbnRyb2xzLmNsYXNzTmFtZSA9ICdzd2lwZXItY29udHJvbHMnO1xyXG5cclxuXHRcdHN3aXBlQnRucy5jbGFzc05hbWUgPSAnc3dpcGVyLW5hdmlnYXRpb24nO1xyXG5cdFx0c3dpcGVQcmV2LmNsYXNzTmFtZSA9ICdzd2lwZXItYnV0dG9uLXByZXYgYnV0dG9uJztcclxuXHRcdHN3aXBlTmV4dC5jbGFzc05hbWUgPSAnc3dpcGVyLWJ1dHRvbi1uZXh0IGJ1dHRvbic7XHJcblxyXG5cdFx0c3dpcGVQcmV2LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsJ1ByZXZpb3VzIHNsaWRlJyk7XHJcblx0XHRzd2lwZU5leHQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywnTmV4dCBzbGlkZScpO1xyXG5cclxuXHRcdHN3aXBlUHJldi5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk05IDExbDQuNi00LjZBLjk5Ljk5IDAgMTExNSA3LjhsLTMuOSAzLjkgMy45IDMuOWEuOTkuOTkgMCAwMS0xLjQgMS40TDkgMTIuNDFBMSAxIDAgMDE5IDExelwiLz48L3N2Zz4nO1xyXG5cdFx0c3dpcGVOZXh0LmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE1IDExYTEgMSAwIDAxMCAxLjRMMTAuNCAxN0EuOTkuOTkgMCAwMTkgMTUuNmwzLjktMy45TDkgNy44YS45OS45OSAwIDAxMS40LTEuNEwxNSAxMXpcIi8+PC9zdmc+JztcclxuXHJcblx0XHRzd2lwZUJ0bnMuYXBwZW5kQ2hpbGQoc3dpcGVQcmV2KTtcclxuXHRcdHN3aXBlQnRucy5hcHBlbmRDaGlsZChzd2lwZU5leHQpO1xyXG5cdFx0c3dpcGVDb250cm9scy5hcHBlbmRDaGlsZChzd2lwZUJ0bnMpO1xyXG5cdFx0c3dpcGVDb250cm9scy5hcHBlbmRDaGlsZChzd2lwZU5hdik7XHJcblxyXG5cdFx0cmVzZXRTd2lwZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdGlmKG15U3dpcGUpIHtcclxuXHJcblx0XHRcdFx0bXlTd2lwZS5kZXN0cm95KGZhbHNlLHRydWUpO1xyXG5cdFx0XHRcdG15U3dpcGUgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdHN3aXBlQ29udHJvbHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0c3dpcGUucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHJcblxyXG5cdFx0UHViU3ViLnN1YnNjcmliZSgnd2luZG93V2lkdGhSZXNpemUnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAod2luZG93LlN3aXBlciAmJiB0b2dnbGVTd2lwZSkge1xyXG5cclxuXHRcdFx0XHR0b2dnbGVTd2lwZSgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdFB1YlN1Yi5zdWJzY3JpYmUoJ3N3aXBlckpzTG9hZCcsICgpID0+IHtcclxuXHJcblx0XHRcdHN3aXBlLmFwcGVuZENoaWxkKHN3aXBlQ29udHJvbHMpO1xyXG5cclxuXHRcdFx0Ly8gZWFnZXJcclxuXHRcdFx0QXJyYXkuZnJvbShzd2lwZS5xdWVyeVNlbGVjdG9yQWxsKCdbbG9hZGluZz1cImxhenlcIl0nKSwgaW1nID0+IGltZy5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCdlYWdlcicpKTtcclxuXHJcblx0XHRcdC8vIGhpZGVcclxuXHRcdFx0QXJyYXkuZnJvbShpdGVtcywgZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlKCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHJcblx0c2NyaXB0LnNyYyA9ICcvanMvc3dpcGVyLm1pbi5qcyc7XHJcblxyXG5cdHNjcmlwdC5vbmxvYWQgPSAoKSA9PiBQdWJTdWIucHVibGlzaCgnc3dpcGVySnNMb2FkJyk7XHJcblxyXG5cdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KSwgQ29va2llcy5nZXQoJ2Zhc3RMb2FkU2NyaXB0JykgPyAwIDogMTAwMDApO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1jb250YWluZXInKSk7IiwiKCBidG5zID0+IHtcclxuXHJcblx0aWYoIGJ0bnMubGVuZ3RoID09PSAwICkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRpZiAoIENvb2tpZXMuZ2V0KCdsYW5nJykgPT09ICdlbicgKSB7XHJcblxyXG5cdFx0Y29uc3QgeXRXaWRnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHl0V2lkZ2V0LmlkID0gJ3l0V2lkZ2V0JztcclxuXHRcdHl0V2lkZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh5dFdpZGdldCk7XHJcblxyXG5cdFx0Y29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblx0XHRzY3JpcHQuc3JjID0gXCJodHRwczovL3RyYW5zbGF0ZS55YW5kZXgubmV0L3dlYnNpdGUtd2lkZ2V0L3YxL3dpZGdldC5qcz93aWRnZXRJZD15dFdpZGdldCZwYWdlTGFuZz1ydSZ3aWRnZXRUaGVtZT1saWdodCZhdXRvTW9kZT1mYWxzZVwiO1xyXG5cclxuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGJ0bnMsIGVsID0+IHtcclxuXHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd5dC13aWRnZXQnLCBKU09OLnN0cmluZ2lmeSh7XHJcblx0XHRcdFx0XCJsYW5nXCI6IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1sYW5nJyksXHJcblx0XHRcdFx0XCJhY3RpdmVcIjogdHJ1ZVxyXG5cdFx0XHR9KSk7XHJcblxyXG5cdFx0XHRDb29raWVzLnNldCgnbGFuZycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1sYW5nJykpO1xyXG5cclxuXHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbGFuZy1idG4nKSk7Il19
