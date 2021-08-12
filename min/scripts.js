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

	window.INTI = {};
	INTI.resizeTimeout = null;
	INTI.windowWidthOLd = window.innerWidth;

	window.addEventListener("resize", () => {

		window.requestAnimationFrame(() => {

			if (!INTI.resizeTimeout) {

				INTI.resizeTimeout = setTimeout(() =>  {

					INTI.resizeTimeout = null;

					if(INTI.windowWidthOLd !== window.innerWidth) {

						INTI.windowWidthOLd = window.innerWidth;

						PubSub.publish('windowWidthResize');

					}

				}, 100);

			}

		});

	});

	window.addEventListener("scroll", () => {

		window.requestAnimationFrame(() => {

			PubSub.publish('windowScroll');

		});

	});

	window.addEventListener("DOMContentLoaded", () => {

		PubSub.publish('DOMContentLoaded');

	});

	window.addEventListener("load", () => {

		PubSub.publish('pageLoad');

		Cookies.set('fastLoadScript', true);

	});

	// обработчик анимаций
	INTI.cssAnimation = a=>{let b,c,d=document.createElement("cssanimation");switch(a){case'animation':b={"animation":"animationend","OAnimation":"oAnimationEnd","MozAnimation":"animationend","WebkitAnimation":"webkitAnimationEnd"};break;case'transition':b={"transition":"transitionend","OTransition":"oTransitionEnd","MozTransition":"transitionend","WebkitTransition":"webkitTransitionEnd"}}for(c in b)if(d.style[c]!==undefined)return b[c]}

	// Determine if an element is in the visible viewport
	INTI.isInViewport = el => {
		const rect = el.getBoundingClientRect();
		return (rect.top >= 0 && rect.bottom <= window.innerHeight);
	}

	// отделяем тысячи
	INTI.sepNumber = function(str){
		str = str.toString();
		str = str.replace(/\s+/g,'');
		return str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	}

	// склеиваем тысячи
	INTI.strToNumber = function(n){
		return parseInt(n.replace(/\s+/g,''), 10);
	}

// склонение
	INTI.declension = (num, expressions) => {

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

		let animateOn = false;

		const btns = accordion.querySelectorAll('.accordion__btn');

		Array.from(btns, btn => {

			const item = btn.closest('.accordion__item'),
				  head = item.querySelector('.accordion__head'),
				  body = item.querySelector('.accordion__body');

			btn.addEventListener('click', () => {

				animateOn = true;

				item.classList.toggle('accordion__item--open');

			});

			body.addEventListener(INTI.cssAnimation('transition'), () => {

				if(animateOn && !INTI.isInViewport(head)){

					head.scrollIntoView({ behavior: 'smooth' });

				}

				animateOn = false;

			});

		});

	});

})(document.querySelectorAll('.accordion'));
( items => {

	if(!items) {

		return;

	}

	// если есть возможносчть вернуться назад

	if(document.referrer.indexOf(location.hostname) > 0) {

		document.querySelector('.account-form__back').addEventListener('click', event => {

			event.preventDefault();

			history.back();

		});

	}

	// показать пароль

	const togglePass = document.querySelectorAll('.account-form__visible-toggle-password');

	Array.from(togglePass, el => {

		const btn = el.querySelector('.account-form__visible-toggle-password-btn'),
			  input = el.querySelector('.account-form__visible-toggle-password-input');

		btn.addEventListener('click', ()=> {

			input.type = input.type === 'password' ? 'text' : 'password';

		});

	});

})(document.querySelector('.account-form'));
( form => {

	if(!form) {

		return;

	}

	const count = form.querySelector('.cart__count'),
		  total = form.querySelector('.cart__total'),
		  items = form.querySelectorAll('.docs-catalog__item'),
		  countUpOption = {
				useEasing: false,
				useGrouping: true,
				separator: ' ',
				decimal: ''
			};

	Array.from(items, item => {

		const btnRemove = item.querySelector('.cart__remove');

		btnRemove.addEventListener('click', () => {

			item.style.height = item.clientHeight + 'px';

			item.addEventListener(INTI.cssAnimation('transition'), ()=> {

				if(item.clientHeight > 0) {

					item.style.height = 0;

				} else {

					item.remove();

					submit();

				}

			});

			item.classList.add('is-remove');

		});

	});

	const submit = ()=> {

		console.log('submit');

		return invoice();

		fetch(form.getAttribute('action'), {
			method: 'POST',
			body: new FormData(form)
		})
		.then(response => response.json())
		.then(result => {

			console.log(result);

			if(result.countCart){

				document.querySelector('.header__cart a').setAttribute('data-count', result.countCart);

			}

			invoice();

		});

	};

	form.addEventListener('change', submit);

	const invoice = ()=> {

		let s = 0;

		const items = form.querySelectorAll('.docs-catalog__item');

		Array.from(items, el => {

			const price = parseInt(el.querySelector('.cart__price').getAttribute('data-price'));
			s += price;

		});

	// total sum
		let countUp = new CountUp(
			total,
			INTI.strToNumber(total.textContent),
			s,
			0,
			0.5,
			countUpOption);

		if (!countUp.error) {

			countUp.start();

		} else {

			total.textContent = INTI.sepNumber(s);

		}

	// hide form empty

		if(s === 0) {

			form.classList.add('is-empty');

		} else {

			count.textContent = items.length + ' ' + INTI.declension(items.length, count.getAttribute('data-declension').split(','));

		}

	}

	// order

	const next = form.querySelector('.cart__next');

	next.addEventListener('click', ()=> {

		const eventModalShow = new CustomEvent("modalShow", {
			detail: {
				selector: "order"
			}
		});

		window.modal.dispatchEvent(eventModalShow);

	});

})(document.querySelector('.cart'));
( forms => {

	if(!forms.length) {

		return;

	}

	Array.from(forms, form => {

		const checkboxes = form.querySelectorAll('.checkbox__input:not([value="all"])'),
			  checkboxAll = form.querySelector('.checkbox__input[value="all"]');

		form.addEventListener("change", events => {

			if(events.target === checkboxAll) {

				Array.from(checkboxes, checkbox => checkbox.checked = checkboxAll.checked);

			} else {

				let count = 0;

				Array.from(checkboxes, checkbox => checkbox.checked ? count++ : '');

				checkboxAll.checked = checkboxes.length === count;

			}

		});

	});

})(document.querySelectorAll('.checkbox-list-all'));

( dropdowns => {

	if(!dropdowns.length) {

		return;

	}

	Array.from(dropdowns, el => {

		const form = el.closest('form'),
			  reset = document.createElement('button'),
			  arrow = document.createElement('span'),
			  btn = el.querySelector('.checkbox-dropdown__btn'),
			  btnTextDefault = btn.textContent,
			  expressions = btn.getAttribute('data-declension').split(','),
			  inputList = el.querySelectorAll('.checkbox-dropdown__input');

		arrow.className ='checkbox-dropdown__arrow';
		arrow.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M8.3 10.3a1 1 0 000 1.41l2.93 2.97c.22.21.5.32.78.32s.56-.1.77-.32l2.93-2.96a1.01 1.01 0 00-.32-1.63.99.99 0 00-1.09.21L12 12.62l-2.3-2.33a.99.99 0 00-1.4 0z"/></svg>';

		reset.setAttribute('type','button');
		reset.className = 'checkbox-dropdown__reset button hide';
		reset.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 10.59l-5.3-5.3a1 1 0 00-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 001.42 1.4L12 13.42l5.3 5.3a1 1 0 001.4-1.42L13.42 12l5.3-5.3a1 1 0 10-1.42-1.4L12 10.58z"/></svg>';

		el.appendChild(arrow);
		el.appendChild(reset);

		const Reset = () => {

			arrow.classList.remove('hide');
			reset.classList.add('hide');

			btn.textContent = btnTextDefault;
			el.classList.remove('checkbox-dropdown--checked');

			Array.from(inputList, input => {

				input.checked = false;

			});

		}

		form && form.addEventListener("reset", () => Reset());
		reset.addEventListener("click", () => Reset());

		Array.from(inputList, input => {

			input.addEventListener("change", () => {

				let countChecked = 0,
					textChecked;

				Array.from(inputList, input => {

					if(input.checked) {

						countChecked++;
						textChecked = input.nextElementSibling.textContent;

					}

				});

				if(countChecked === 0) {

					btn.textContent = btnTextDefault;
					el.classList.remove('checkbox-dropdown--checked');

				}
				else if(countChecked === 1) {

					arrow.classList.remove('hide');
					reset.classList.add('hide');
					btn.textContent = textChecked;
					el.classList.add('checkbox-dropdown--checked');

				}
				else {

					arrow.classList.add('hide');
					reset.classList.remove('hide');
					btn.textContent = countChecked + ' ' + INTI.declension(countChecked, expressions);

				}

			});

		});

	});


//	data-declension


	window.addEventListener("click", event => {

		const isDropdown = event.target.closest('.checkbox-dropdown');

		Array.from(dropdowns, el => {

			if(el === isDropdown){

				if(event.target.closest('.checkbox-dropdown__btn')) {

					el.classList.toggle('checkbox-dropdown--open');

				}

			}
			else {

				el.classList.remove('checkbox-dropdown--open');

			}

		});

	});

})(document.querySelectorAll('.checkbox-dropdown'));
( elems => {

	if(!elems.length) {

		return;

	}

	if ('IntersectionObserver' in window) {

		const callback = (entries, observer) => {

			Array.from(entries, entry => {

				if(entry.isIntersecting) {

					const target = entry.target;

					observer.unobserve(target);

					const svg = target.querySelector('.circle-progress__svg'),
						  text = target.querySelector('.circle-progress__value'),
						  value = parseInt(text.textContent);

					// анимация прогресса
					const circle = svg.querySelector('circle'),
						  pi2r = parseInt(circle.getAttribute('r')) * 2 * Math.PI;

					let count = 0;

					if(value > 0) {

						target.classList.add('circle-progress--init');

						const idTimer = setInterval( () => {

							if(count === value) {

								clearInterval(idTimer);

							}

							text.textContent = count++;

							circle.setAttribute('stroke-dasharray', pi2r / 100 * count + ' ' + pi2r);

						}, 1000 / value);

					}

				}

			});

		};

		const observer = new IntersectionObserver(callback);

		Array.from(elems, el => observer.observe(el));

	}

})(document.querySelectorAll('.circle-progress'));
( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, form => {

		const btn = form.querySelector('.docs-standart-form__submit');

		form.addEventListener('change', () => {

			const object = {};
			new FormData(form).forEach((value, key) => (object[key] = value));
			object.type = "update";
			const json = JSON.stringify(object);

			fetch(form.getAttribute("action"), {
				method: "POST",
				body: json
			})
			.then(response => response.json())
			.then(result => {

				console.log(result);

				form.querySelector('.docs-item__title').textContent = result.name;
				form.querySelector('.docs-item__price-number').textContent = result.price;

				if(result.buy === 'off') {

					form.classList.add('is-buy-off');

					new FormData(form).forEach((value, key) => {

						const name = document.querySelector('.modal__item--get-price').elements[key];

						if(name) {

							name.value = value;

						}

					});

				} else {

					form.classList.add('is-buy-off');

				}

			});

		});

		form.addEventListener('submit', event => {

			event.preventDefault();

			const object = {};
			new FormData(form).forEach((value, key) => (object[key] = value));
			const json = JSON.stringify(object);

			form.classList.add('is-loading');
			btn.disabled = true;

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: json
			})
			.then(response => response.json())
			.then(result => {

				console.log(result);

				form.classList.remove('is-loading');
				btn.disabled = false;

				document.querySelector('#name-product-add-in-cart').textContent = result.addProduct;

				const eventModalShow = new CustomEvent("modalShow", {
					detail: {
						selector: "cart"
					}
				});

				window.modal.dispatchEvent(eventModalShow);

				if(result.countCart === "0"){

					result.countCart = '';

				}

				document.querySelector('.header__cart a').setAttribute('data-count', result.countCart);

			});

		});

	});

})(document.querySelectorAll('.docs-standart-form'));
( dropdowns => {

	if(!dropdowns.length) {

		return;

	}

	Array.from(dropdowns, el => {

		if(el.classList.contains('dropdown-toggle--value-in-btn')){

			const btn = el.querySelector('.dropdown-toggle__btn-value'),
				  items = el.querySelectorAll('.dropdown-toggle__value');

			Array.from(items, item => {

				const label = item.parentNode.textContent.trim();

				item.addEventListener("change", () => {

					btn.textContent = label;

					el.classList.remove('dropdown-toggle--open');

				});

			});

		}

		if(el.classList.contains('dropdown-toggle-radio')){

			const current = el.querySelector('.dropdown-toggle-radio__current'),
				  items = el.querySelectorAll('.dropdown-toggle-radio__item');

			Array.from(items, item => {

				const label = item.querySelector('.dropdown-toggle-radio__label'),
					  input = item.querySelector('.dropdown-toggle-radio__input')

				input.addEventListener("change", () => current.textContent = label.textContent);

			});

		}

		const inputFilter = el.querySelector('.dropdown-toggle__input-filter');

		if(inputFilter) {

			const bodyMenu = el.querySelector('.dropdown-toggle__menu'),
				  bodyMenuClone = bodyMenu.cloneNode(true);

			inputFilter.addEventListener('input', () => {

				const value = inputFilter.value.toLowerCase();

				if(value.length > 1) {

					let ul = '';

					Array.from(bodyMenuClone.querySelectorAll('li'), li => {

						const link = li.innerHTML,
							  category = li.textContent.trim().toLowerCase();

						if(category.indexOf(value) !== -1){

							ul += '<li>' + link + '</li>';

						}

					});

					if(ul.length) {

						bodyMenu.innerHTML = ul;

					} else {

						bodyMenu.innerHTML = '<span class="dropdown-toggle__link">' + inputFilter.getAttribute('data-empty') + '</span>';

					}

				} else {

					bodyMenu.innerHTML = bodyMenuClone.innerHTML;

				}

			});

		}

	});

	window.addEventListener("click", event => {

		const isDropdown = event.target.closest('.dropdown-toggle');

		Array.from(dropdowns, el => el.classList.toggle('dropdown-toggle--open', el === isDropdown && isDropdown.classList.contains('dropdown-toggle--open') === false));

	});

})(document.querySelectorAll('.dropdown-toggle'));
( items => {

	if(!items.length) {

		return;

	}

	const resultHTML = document.querySelector('#filter-result');

	const submit = form => {

		fetch(form.getAttribute('action'), {
			method: 'POST',
			body: new FormData(form)
		})
		.then(response => response.html())
		.then(result => {

			console.log(result);

			resultHTML.innerHTML = result;

		});

	};

	Array.from(items, form => {

		const btn = form.querySelector('.filter__submit');

		form.addEventListener('reset', () => {

			btn.disabled = true;

			submit(form);

		});

		form.addEventListener('change', event => {

			btn.disabled = false;

			console.log(event.target);

			if(event.target.classList.contains('filter__tag')) {

				const item = event.target.closest('.filter-tags__item');

				item.addEventListener(INTI.cssAnimation('transition'), ()=> {

					if(form.querySelectorAll('.filter__tag').length === 1) {

						item.closest('.filter__item').classList.add('hide');

					}

					item.remove();

				});

				item.classList.add('is-remove');

			}

			submit(form);

		});

		form.addEventListener('submit', event => {

			event.preventDefault();
			submit(form);

		});

		// menu tasg

		const boxTags = form.querySelector('.filter-tags');

		if(boxTags) {

			const tags = document.querySelectorAll('.menu-tags__tag[data-value]'),
				  template = form.querySelector('#filter-tags-template').innerHTML;

			Array.from(tags, link => {

				const label = link.textContent.trim(),
					  value = link.getAttribute('data-value');

				link.addEventListener('click', event => {

					event.preventDefault();

					let append = true;

					Array.from(boxTags.querySelectorAll('input'), input => {

						if( input.value === value) {

							append = false;

						}

					});

					if(append) {

						const checkbox = Mustache.render(template, { label, value });

						boxTags.insertAdjacentHTML('beforeend', checkbox);

						submit(form);

					}

				});

			});

		}

	});

})(document.querySelectorAll('.filter'));

// btm toggle filter in tablet|mobile

( btns => {

	if(btns.length) {

		Array.from(btns, btn => {

			btn.addEventListener("click", () => document.body.classList.toggle('filter-show'));

		})

	}

})(document.querySelectorAll('.btn-open-filter, .search-menu__toggle-filter'));


// filter-sort-trigger

( form => {

	if(form.length) {

		Array.from(form, form => {

			const filter = document.querySelector('#' + form.getAttribute('data-id'));

			form.addEventListener("change", event => {

				console.log(event.target.value);
				filter.elements.sort.value = event.target.value;
				filter.elements.sort.dispatchEvent(new CustomEvent("change"));
				filter.dispatchEvent(new CustomEvent("change"));

			});

		})

	}

})(document.querySelectorAll('.filter-sort-trigger'));
( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, form => {

		const resultContainer = document.querySelector('#' + form.getAttribute('data-result'));

		form.addEventListener('change', () => {

			const object = {};
			new FormData(form).forEach((value, key) => (object[key] = value));
			const json = JSON.stringify(object);

			fetch(form.getAttribute("action"), {
				method: "POST",
				body: json
			})
			.then(response => response.html())
			.then(result => {

				console.log(result);

				resultContainer.innerHTML = result;

			});

		});

	});

})(document.querySelectorAll('.form-html'));
( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, form => {

		const item = form.querySelectorAll('.form-required__item'),
			  submit = form.querySelector('.form-required__submit');

		form.addEventListener("change", () => {

			let falid = true;

			Array.from(item, el => {

				if(el.value === 'none') {

					falid = false;

				}

			});

			if(falid) {

				submit.disabled = false;

			}

		});

	});

})(document.querySelectorAll('.form-required'));
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


			// login

				if(result.type === 'error') {

/*					document.querySelector('.quality-result__number').textContent = result.number;
					document.querySelector('.quality-result__product').textContent = result.productName;
					document.querySelector('.quality-result__product').getAttribute('href', result.productLink);*/
/*
					const eventModalShow = new CustomEvent("modalShow", {
						detail: {
							selector: 'error'
						}
					});

					window.modal.dispatchEvent(eventModalShow);*/

				}

			});

		});

	});

})(document.querySelectorAll('.form'));
( img => {

	if(img) {

		const big = img.querySelectorAll('.swiper-gallery-preview__big-item');

		img.addEventListener('click', event => {

			if(event.target.closest('.swiper-gallery-preview__link')) {

				event.preventDefault();

				if(!event.target.closest('.swiper-container-style')){

					const item = event.target.closest('.swiper-gallery-preview__item');

					Array.from(img.querySelectorAll('.swiper-gallery-preview__item'), (el,index) => {

						el.classList.toggle('is-current', item === el);
						big[index].classList.toggle('hide', item !== el);

					});

				}

			}

		});

	}

})(document.querySelector('.swiper-gallery-preview'));
( elems => {

	if(!elems.length) {

		return;

	}

	if ('IntersectionObserver' in window) {

		const callback = (entries, observer) => {

			Array.from(entries, entry => {

				if(entry.isIntersecting) {

					const target = entry.target;

					observer.unobserve(target);

					const bar = target.querySelector('.line-progress__bar'),
						  text = target.querySelector('.line-progress__value'),
						  value = parseInt(text.textContent);

					// анимация прогресса
					let count = 0;

					if(value > 0) {

						target.classList.add('line-progress--init');

						const idTimer = setInterval( () => {

							if(count === value) {

								clearInterval(idTimer);

							}

							bar.style.width = count + '%';

							text.textContent = count++;

						}, 1000 / value);

					}

				}

			});

		};

		const observer = new IntersectionObserver(callback);

		Array.from(elems, el => observer.observe(el));

	}

})(document.querySelectorAll('.line-progress'));
( forms => {

	if(!forms.length) {

		return;

	}

	Array.from(forms, form => {

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

	});

})(document.querySelectorAll('.live-search'));
( elems => {

	if(!elems.length) {

		return;

	}

	const script = document.createElement('script');
	script.src = '/bitrix/templates/inti-v2/js/inputmask.min.js';
	script.onload = () => {

		Array.from(elems, el => {

			let maskInput;

			if(el.classList.contains('inputmask--phone')) {

				maskInput = new Inputmask({
					mask: "[+7]|8-999-999-99-99",
					showMaskOnHover: false
				});

			}

			maskInput.mask(el);

		});

	};

	setTimeout( () => document.head.appendChild(script), Cookies.get('fastLoadScript') ? 0 : 10000);

})(document.querySelectorAll('.inputmask'));
// btn toggle

( btn => {

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

// menu-tags

( btns => {

	if(btns.length) {

		window.addEventListener("click", event => {

			const isBtn = event.target.closest('.menu-tags__btn');

			Array.from(btns, btn => {

				btn.classList.toggle('is-active', btn === isBtn && isBtn.classList.contains('is-active') === false);

			});

			if(isBtn) {

				document.body.classList.add('filter-show');

			}

		});

	}

})(document.querySelectorAll('.menu-tags__btn'));
( items => {

	if(items.length) {

		Array.from(items, link => {

			link.addEventListener('click', event => {

				event.preventDefault();

				const src = link.getAttribute('href');

				document.querySelector('#modal-photo').innerHTML = '<img src="' + src + '">';

				const eventModalShow = new CustomEvent("modalShow", {
					detail: {
						selector: "photo"
					}
				});

				window.modal.dispatchEvent(eventModalShow);

			});

		});

	}

})(document.querySelectorAll('.modal-img'));
( modal => {

	if(!modal) {

		return;

	}

	const items = modal.querySelectorAll('.modal__item'),
		  btns = document.querySelectorAll('[data-modal]'),
		  wrapper = document.querySelector('.wrapper');

	let activeModal = null,
		windowScroll = window.pageYOffset;

	modal.addEventListener('hide', () => {

		document.body.classList.remove('modal-show');
		wrapper.style.top = 0;
		window.scrollTo(0,windowScroll);
		activeModal = false;

	});

	const modalShow = selector => {

		if(!activeModal){

			windowScroll = window.pageYOffset;

		}

		activeModal = modal.querySelector('.modal__item--' + selector);

		Array.from(items, el => el.classList.toggle('visuallyhidden', el !== activeModal));

		wrapper.style.top = -windowScroll + 'px';
		document.body.classList.add('modal-show');
		window.scrollTo(0,0);

		activeModal.focus();

	};

	modal.addEventListener('click', event => {

		if(event.target.classList.contains('modal') || event.target.closest('.modal__close')){

			if(event.target.closest('[data-modal]') === null) {

				modal.dispatchEvent(new CustomEvent("hide"));

			}

		}

	});

	Array.from(btns, btn =>
		btn.addEventListener('click', () =>
			modalShow(btn.getAttribute('data-modal'))));

	modal.addEventListener('modalShow', event => modalShow(event.detail.selector));

	modal.ok = (title, text, mod = '') => {

		modal.querySelector('.modal__item--ok').setAttribute('data-mod', mod);
		modal.querySelector('.modal__item--ok .modal-mini__title').innerHTML = title ? title : '';
		modal.querySelector('.modal__item--ok .modal-mini__text').innerHTML = text ? text : '';
		modalShow('ok');

	}

})(document.querySelector('.modal'));
( product => {

	if(!product) {

		return;

	}

	const linkBack = document.querySelector('.head-back .link'),
		  tabs = document.querySelectorAll('.product__tab');

	const initial = tab=> {

		document.querySelector('.product__body').classList.toggle('is-initial', tab === 'main');
		document.querySelector('.product__body').classList.toggle('is-lock', tab === 'lock');

	}

	const historyBack = event=> {

		event.preventDefault();

		history.back();

	}

	if(document.referrer.indexOf(location.hostname) > 0) {

		linkBack.onclick = historyBack;

	}

	window.addEventListener('hashchange', () => {

		const hash = location.hash,
			  modTab = hash === '' ? 'main' : hash.slice(1),
			  next = document.querySelector('.product__tab--' + modTab);

		Array.from(tabs, tab => tab.classList.toggle('visuallyhidden', next !== tab));

		if(linkBack.onclick === null) {

			linkBack.onclick = historyBack;

		}

		if(document.querySelector('video')){

			Array.from(document.querySelectorAll('video'), video => video.pause());

		}

		initial(modTab);

	});

})(document.querySelector('.product'));
( elems => {

	if(!elems) {

		return;

	}

	if ('IntersectionObserver' in window) {

		const callback = (entries, observer) => {

			Array.from(entries, entry => {

				if(entry.isIntersecting) {

					const target = entry.target;

					observer.unobserve(target);

					const bar = document.createElement('span'),
						  text = target.querySelector('.review-stat__details-value'),
						  value = parseFloat(text.textContent) * 20; // 5.0 max, для 100% умножаем на 20

					bar.className = 'review-stat__details-progress';
					target.appendChild(bar);

					// анимация прогресса
					let count = 0;

					if(value > 0) {

						const idTimer = setInterval( () => {

							count++;

							if(count === value) {

								clearInterval(idTimer);

							}

							bar.style.width = count + '%';

						}, 1000 / value);

					}

				}

			});

		};

		const observer = new IntersectionObserver(callback);

		Array.from(elems.querySelectorAll('.review-stat__details-row'), el => observer.observe(el));

	}

})(document.querySelector('.review-stat__details'));
( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, form => {

		Array.from(form.querySelectorAll('.modal-review__control'), btn => {

			const value = btn.querySelector('.modal-review__value'),
				  stars = btn.querySelectorAll('.modal-review__input');

			Array.from(stars, input => {

				input.addEventListener('change', () => value.textContent = input.getAttribute('data-star'));

			});

		});

	});

})(document.querySelectorAll('.modal-review'));
( forms => {

	if(!forms.length) {

		return;

	}

	Array.from(forms, elem => {

		const form = elem.querySelector('.search-menu__form'),
			  input = form.querySelector('.input'),
			  btnToggle = form.querySelector('.search-menu__toggle-menu');

		input.addEventListener('focus', () => elem.classList.add('is-form-only'));

		btnToggle && btnToggle.addEventListener('click', ()=> {

			elem.classList.toggle('is-full');

		});

		document.body.addEventListener('click', event => {

			if(event.target.closest('.search-menu__form') === null) {

				elem.classList.remove('is-form-only');

			}

		});

	});

})(document.querySelectorAll('.search-menu'));
window.selects = select => {

	if(select.querySelector('.select__list')) {

		return;

	}

	const value = document.createElement('div'),
		  arrow = document.createElement('span');

	arrow.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M8.3 10.3a1 1 0 000 1.41l2.93 2.97c.22.21.5.32.78.32s.56-.1.77-.32l2.93-2.96a1.01 1.01 0 00-.32-1.63.99.99 0 00-1.09.21L12 12.62l-2.3-2.33a1 1 0 00-1.4 0z"/></svg>';

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

	valueText.textContent = select.querySelector('option[value="' + control.value + '"]').textContent;

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
( sliders => {

	if(!sliders.length) {

		return;

	}

	const noUiSliderInit = () => {

		Array.from(sliders, slider => {

			const track = slider.querySelector('.slider__track'),
				  form = slider.closest('form'),
				  minInput = slider.querySelector('.slider__min'),
				  maxInput = slider.querySelector('.slider__max'),
				  min   = parseInt(slider.getAttribute('data-min')),
				  max   = parseInt(slider.getAttribute('data-max')),
				  step  = parseInt(slider.getAttribute('data-step'));

			noUiSlider.create(track, {
				start: [min,max],
				step: step,
				connect: true,
				range: {
					'min': min,
					'max': max
				}
			});

			track.noUiSlider.on('slide', values => {

				minInput.value = parseInt(values[0]);
				maxInput.value = parseInt(values[1]);

			});

			track.noUiSlider.on('end', values => {

				form.dispatchEvent(new CustomEvent("change"));

			});

			form.addEventListener("reset", () => {

				track.noUiSlider.set([min,max]);

				minInput.value = min;
				maxInput.value = max;

			});

			form.addEventListener("input", event => {

				if(event.target === maxInput || event.target === minInput) {

					track.noUiSlider.set([parseInt(minInput.value),parseInt(maxInput.value)]);

				}

			});

			maxInput.addEventListener('focus', () => maxInput.setSelectionRange(0,99));
			minInput.addEventListener('focus', () => minInput.setSelectionRange(0,99));

			if(min !== parseInt(minInput.value) || max !== parseInt(maxInput.value)) {

				track.noUiSlider.set([parseInt(minInput.value),parseInt(maxInput.value)]);

			}

		});

	};

	// load
	const script = document.createElement('script');
	script.src = '/bitrix/templates/inti-v2/js/nouislider.min.js';
	script.onload = () => noUiSliderInit();
	setTimeout( () => document.head.appendChild(script), Cookies.get('fastLoadScript') ? 0 : 10000);

})(document.querySelectorAll('.slider'));
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

		if (clients) {

			toggleSwipe = () => {

				toggleSwipe = false;

				mySwipe = new Swiper(swipe, {
					loop: true,
					//loopedSlides : 2,
					slidesPerView : 'auto',
					navigation: {
						nextEl: swipeNext,
						prevEl: swipePrev
					}
				});

			}

		}

		if (productGallery) {

			toggleSwipe = () => {

				toggleSwipe = false;
				swipe.parentNode.classList.add('swiper-container-style');

				const current = swipe.querySelector('.swiper-counter__current-slide'),
					  caption = swipe.parentNode.querySelector('.swiper-gallery__current-caption');

				mySwipe = new Swiper(swipe, {
					loop: true,
					navigation: {
						nextEl: swipeNext,
						prevEl: swipePrev
					},
/*					pagination: {
						el: swipeNav,
						bulletClass: 'button',
						bulletActiveClass: 'is-active'
					},*/
					on: {
						slideChange : () => {
							current.textContent = swipe.swiper.realIndex % count + 1;
							caption.innerHTML = swipe.swiper.slides[swipe.swiper.activeIndex].querySelector('.swiper-gallery__caption').innerHTML;
						}
					}
				});

			}

		}

		if (billboard) {

			toggleSwipe = () => {

				toggleSwipe = false;
				swipe.parentNode.classList.add('swiper-container-style');

				new Swiper(swipe, {
					loop: true,
					autoplay: {
						delay: 5000
					},
					pagination: {
						el: swipeNav,
						clickable: true,
						bulletClass: 'button',
						bulletActiveClass: 'is-active'
					}
				});

			}

		}

		if (productGalleryPreview) {

			toggleSwipe = () => {

				let initialSlide = 0,
					slidesPerView = 5,
					spaceBetween = 20;

				swipe.parentNode.appendChild(swipeControls);

				Array.from(items, (el,index) => {

					if(el.classList.contains('is-current')) {

						initialSlide = index;

					}

				});

				toggleSwipe = false;
				swipe.parentNode.classList.add('swiper-container-style');

				if(swipe.classList.contains('is-style-use')){

					slidesPerView = 3;
					spaceBetween = 0;

				}

				const box = swipe.closest('.swiper-gallery-preview'),
					  big = box.querySelectorAll('.swiper-gallery-preview__big-item');

				new Swiper(swipe, {
					loop: true,
					slideActiveClass: 'is-current',
					direction: 'vertical',
					slidesPerView : slidesPerView,
					spaceBetween: spaceBetween,
					slideToClickedSlide: true,
					initialSlide: initialSlide,
					navigation: {
						nextEl: swipeNext,
						prevEl: swipePrev
					},
					on: {
						slideChange : () => {

							Array.from(big, (item,index) => {

								item.classList.toggle('hide', swipe.swiper.realIndex !== index);

								if(item.querySelector('video')){

									item.querySelector('video').pause();

								}

							});

						}
					},
					breakpoints: {
						320: {
							slidesPerView: 3,
							spaceBetween: 8
						},
						768: {
							slidesPerView: slidesPerView,
							spaceBetween: spaceBetween
						}
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

	script.src = '/bitrix/templates/inti-v2/js/swiper.min.js';

	script.onload = () => PubSub.publish('swiperJsLoad');

	setTimeout( () => document.head.appendChild(script), Cookies.get('fastLoadScript') ? 0 : 10000);

})(document.querySelectorAll('.swiper-container'));
( tabs => {

	if(!tabs.length) {

		return;

	}

	const setActive = (btn, item, toggle) => {

		btn.classList.toggle('is-active', toggle);
		item.classList.toggle('is-active', toggle);

	}

	Array.from(tabs, tab => {

		const btns = tab.querySelectorAll('.tabs__btn'),
			  items = tab.querySelectorAll('.tabs__item'),
			  nav = document.createElement('div'),
			  navWrap = document.createElement('div');

		nav.className = 'tabs__nav';
		navWrap.className = 'tabs__nav-wrap';
		navWrap.appendChild(nav);

		if(tab.classList.contains('tabs--nav')) {

			Array.from(btns, btn => {

				btn.setAttribute('role','button');

				nav.appendChild(btn);

			});

			tab.insertBefore(navWrap, items[0]);

			setActive(btns[0], items[0], true);

		}

		Array.from(btns, btn => {

			btn.addEventListener('click', event =>
				Array.from(btns, (_btn, index) =>
					setActive(_btn, items[index], _btn === btn)))

		});

	});

})(document.querySelectorAll('.tabs'));
( tooltips => {

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

})(document.querySelectorAll('.tooltip-help'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50VXAubWluLmpzIiwianMuY29va2llLm1pbi5qcyIsIm11c3RhY2hlLm1pbi5qcyIsInB1YnN1Yi5taW4uanMiLCJqcy5qcyIsImFjY29yZGlvbi5qcyIsImFjY291bnQuanMiLCJjYXJ0LmpzIiwiY2hlY2tib3gtZHJvcGRvd24uanMiLCJjaXJjbGUtcHJvZ3Jlc3MuanMiLCJkb2NzLXN0YW5kYXJ0LWZvcm0uanMiLCJkcm9wZG93bi10b2dnbGUuanMiLCJmaWx0ZXIuanMiLCJmb3JtLWh0bWwuanMiLCJmb3JtLXJlcXVpcmVkLmpzIiwiZm9ybS5qcyIsImdhbGxlcnkuanMiLCJsaW5lLXByb2dyZXNzLmpzIiwibGl2ZS1zZWFyY2guanMiLCJtYXNrLmpzIiwibWVudS5qcyIsIm1vZGFsLWltZy5qcyIsIm1vZGFsLmpzIiwicHJvZHVjdC5qcyIsInJldmlldy1zdGF0LmpzIiwicmV2aWV3LmpzIiwic2VhcmNoLW1lbnUuanMiLCJzZWxlY3QuanMiLCJzbGlkZXIuanMiLCJzd2lwZXIuanMiLCJ0YWJzLmpzIiwidG9vbHRpcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQ0ZBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGEsbil7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShuKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1uKHJlcXVpcmUsZXhwb3J0cyxtb2R1bGUpOmEuQ291bnRVcD1uKCl9KHRoaXMsZnVuY3Rpb24oYSxuLHQpe3JldHVybiBmdW5jdGlvbihhLG4sdCxlLGkscil7dmFyIHU9dGhpcztpZih1LnZlcnNpb249ZnVuY3Rpb24oKXtyZXR1cm5cIjEuOS4zXCJ9LHUub3B0aW9ucz17dXNlRWFzaW5nOiEwLHVzZUdyb3VwaW5nOiEwLHNlcGFyYXRvcjpcIixcIixkZWNpbWFsOlwiLlwiLGVhc2luZ0ZuOmZ1bmN0aW9uKGEsbix0LGUpe3JldHVybiB0KigxLU1hdGgucG93KDIsLTEwKmEvZSkpKjEwMjQvMTAyMytufSxmb3JtYXR0aW5nRm46ZnVuY3Rpb24oYSl7dmFyIG4sdCxlLGkscixvLHM9YTwwO2lmKGE9TWF0aC5hYnMoYSkudG9GaXhlZCh1LmRlY2ltYWxzKSxuPShhKz1cIlwiKS5zcGxpdChcIi5cIiksdD1uWzBdLGU9MTxuLmxlbmd0aD91Lm9wdGlvbnMuZGVjaW1hbCtuWzFdOlwiXCIsdS5vcHRpb25zLnVzZUdyb3VwaW5nKXtmb3IoaT1cIlwiLHI9MCxvPXQubGVuZ3RoO3I8bzsrK3IpMCE9PXImJnIlMz09MCYmKGk9dS5vcHRpb25zLnNlcGFyYXRvcitpKSxpPXRbby1yLTFdK2k7dD1pfXJldHVybiB1Lm9wdGlvbnMubnVtZXJhbHMubGVuZ3RoJiYodD10LnJlcGxhY2UoL1swLTldL2csZnVuY3Rpb24oYSl7cmV0dXJuIHUub3B0aW9ucy5udW1lcmFsc1srYV19KSxlPWUucmVwbGFjZSgvWzAtOV0vZyxmdW5jdGlvbihhKXtyZXR1cm4gdS5vcHRpb25zLm51bWVyYWxzWythXX0pKSwocz9cIi1cIjpcIlwiKSt1Lm9wdGlvbnMucHJlZml4K3QrZSt1Lm9wdGlvbnMuc3VmZml4fSxwcmVmaXg6XCJcIixzdWZmaXg6XCJcIixudW1lcmFsczpbXX0sciYmXCJvYmplY3RcIj09dHlwZW9mIHIpZm9yKHZhciBvIGluIHUub3B0aW9ucylyLmhhc093blByb3BlcnR5KG8pJiZudWxsIT09cltvXSYmKHUub3B0aW9uc1tvXT1yW29dKTtcIlwiPT09dS5vcHRpb25zLnNlcGFyYXRvcj91Lm9wdGlvbnMudXNlR3JvdXBpbmc9ITE6dS5vcHRpb25zLnNlcGFyYXRvcj1cIlwiK3Uub3B0aW9ucy5zZXBhcmF0b3I7Zm9yKHZhciBzPTAsbD1bXCJ3ZWJraXRcIixcIm1velwiLFwibXNcIixcIm9cIl0sbT0wO208bC5sZW5ndGgmJiF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOysrbSl3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lPXdpbmRvd1tsW21dK1wiUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdLHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZT13aW5kb3dbbFttXStcIkNhbmNlbEFuaW1hdGlvbkZyYW1lXCJdfHx3aW5kb3dbbFttXStcIkNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtmdW5jdGlvbiBkKGEpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBhJiYhaXNOYU4oYSl9d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oYSxuKXt2YXIgdD0obmV3IERhdGUpLmdldFRpbWUoKSxlPU1hdGgubWF4KDAsMTYtKHQtcykpLGk9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXthKHQrZSl9LGUpO3JldHVybiBzPXQrZSxpfSksd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lfHwod2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lPWZ1bmN0aW9uKGEpe2NsZWFyVGltZW91dChhKX0pLHUuaW5pdGlhbGl6ZT1mdW5jdGlvbigpe3JldHVybiEhdS5pbml0aWFsaXplZHx8KHUuZXJyb3I9XCJcIix1LmQ9XCJzdHJpbmdcIj09dHlwZW9mIGE/ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYSk6YSx1LmQ/KHUuc3RhcnRWYWw9TnVtYmVyKG4pLHUuZW5kVmFsPU51bWJlcih0KSxkKHUuc3RhcnRWYWwpJiZkKHUuZW5kVmFsKT8odS5kZWNpbWFscz1NYXRoLm1heCgwLGV8fDApLHUuZGVjPU1hdGgucG93KDEwLHUuZGVjaW1hbHMpLHUuZHVyYXRpb249MWUzKk51bWJlcihpKXx8MmUzLHUuY291bnREb3duPXUuc3RhcnRWYWw+dS5lbmRWYWwsdS5mcmFtZVZhbD11LnN0YXJ0VmFsLHUuaW5pdGlhbGl6ZWQ9ITApOih1LmVycm9yPVwiW0NvdW50VXBdIHN0YXJ0VmFsIChcIituK1wiKSBvciBlbmRWYWwgKFwiK3QrXCIpIGlzIG5vdCBhIG51bWJlclwiLCExKSk6ISh1LmVycm9yPVwiW0NvdW50VXBdIHRhcmdldCBpcyBudWxsIG9yIHVuZGVmaW5lZFwiKSl9LHUucHJpbnRWYWx1ZT1mdW5jdGlvbihhKXt2YXIgbj11Lm9wdGlvbnMuZm9ybWF0dGluZ0ZuKGEpO1wiSU5QVVRcIj09PXUuZC50YWdOYW1lP3RoaXMuZC52YWx1ZT1uOlwidGV4dFwiPT09dS5kLnRhZ05hbWV8fFwidHNwYW5cIj09PXUuZC50YWdOYW1lP3RoaXMuZC50ZXh0Q29udGVudD1uOnRoaXMuZC5pbm5lckhUTUw9bn0sdS5jb3VudD1mdW5jdGlvbihhKXt1LnN0YXJ0VGltZXx8KHUuc3RhcnRUaW1lPWEpO3ZhciBuPSh1LnRpbWVzdGFtcD1hKS11LnN0YXJ0VGltZTt1LnJlbWFpbmluZz11LmR1cmF0aW9uLW4sdS5vcHRpb25zLnVzZUVhc2luZz91LmNvdW50RG93bj91LmZyYW1lVmFsPXUuc3RhcnRWYWwtdS5vcHRpb25zLmVhc2luZ0ZuKG4sMCx1LnN0YXJ0VmFsLXUuZW5kVmFsLHUuZHVyYXRpb24pOnUuZnJhbWVWYWw9dS5vcHRpb25zLmVhc2luZ0ZuKG4sdS5zdGFydFZhbCx1LmVuZFZhbC11LnN0YXJ0VmFsLHUuZHVyYXRpb24pOnUuY291bnREb3duP3UuZnJhbWVWYWw9dS5zdGFydFZhbC0odS5zdGFydFZhbC11LmVuZFZhbCkqKG4vdS5kdXJhdGlvbik6dS5mcmFtZVZhbD11LnN0YXJ0VmFsKyh1LmVuZFZhbC11LnN0YXJ0VmFsKSoobi91LmR1cmF0aW9uKSx1LmNvdW50RG93bj91LmZyYW1lVmFsPXUuZnJhbWVWYWw8dS5lbmRWYWw/dS5lbmRWYWw6dS5mcmFtZVZhbDp1LmZyYW1lVmFsPXUuZnJhbWVWYWw+dS5lbmRWYWw/dS5lbmRWYWw6dS5mcmFtZVZhbCx1LmZyYW1lVmFsPU1hdGgucm91bmQodS5mcmFtZVZhbCp1LmRlYykvdS5kZWMsdS5wcmludFZhbHVlKHUuZnJhbWVWYWwpLG48dS5kdXJhdGlvbj91LnJBRj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodS5jb3VudCk6dS5jYWxsYmFjayYmdS5jYWxsYmFjaygpfSx1LnN0YXJ0PWZ1bmN0aW9uKGEpe3UuaW5pdGlhbGl6ZSgpJiYodS5jYWxsYmFjaz1hLHUuckFGPXJlcXVlc3RBbmltYXRpb25GcmFtZSh1LmNvdW50KSl9LHUucGF1c2VSZXN1bWU9ZnVuY3Rpb24oKXt1LnBhdXNlZD8odS5wYXVzZWQ9ITEsZGVsZXRlIHUuc3RhcnRUaW1lLHUuZHVyYXRpb249dS5yZW1haW5pbmcsdS5zdGFydFZhbD11LmZyYW1lVmFsLHJlcXVlc3RBbmltYXRpb25GcmFtZSh1LmNvdW50KSk6KHUucGF1c2VkPSEwLGNhbmNlbEFuaW1hdGlvbkZyYW1lKHUuckFGKSl9LHUucmVzZXQ9ZnVuY3Rpb24oKXt1LnBhdXNlZD0hMSxkZWxldGUgdS5zdGFydFRpbWUsdS5pbml0aWFsaXplZD0hMSx1LmluaXRpYWxpemUoKSYmKGNhbmNlbEFuaW1hdGlvbkZyYW1lKHUuckFGKSx1LnByaW50VmFsdWUodS5zdGFydFZhbCkpfSx1LnVwZGF0ZT1mdW5jdGlvbihhKXt1LmluaXRpYWxpemUoKSYmKGQoYT1OdW1iZXIoYSkpPyh1LmVycm9yPVwiXCIsYSE9PXUuZnJhbWVWYWwmJihjYW5jZWxBbmltYXRpb25GcmFtZSh1LnJBRiksdS5wYXVzZWQ9ITEsZGVsZXRlIHUuc3RhcnRUaW1lLHUuc3RhcnRWYWw9dS5mcmFtZVZhbCx1LmVuZFZhbD1hLHUuY291bnREb3duPXUuc3RhcnRWYWw+dS5lbmRWYWwsdS5yQUY9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUuY291bnQpKSk6dS5lcnJvcj1cIltDb3VudFVwXSB1cGRhdGUoKSAtIG5ldyBlbmRWYWwgaXMgbm90IGEgbnVtYmVyOiBcIithKX0sdS5pbml0aWFsaXplKCkmJnUucHJpbnRWYWx1ZSh1LnN0YXJ0VmFsKX19KTsiLCIvKiEganMtY29va2llIHYzLjAuMC1yYy4xIHwgTUlUICovXHJcbiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOihlPWV8fHNlbGYsZnVuY3Rpb24oKXt2YXIgbj1lLkNvb2tpZXMscj1lLkNvb2tpZXM9dCgpO3Iubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBlLkNvb2tpZXM9bixyfX0oKSl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIHIgaW4gbillW3JdPW5bcl19cmV0dXJuIGV9dmFyIHQ9e3JlYWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZSgvKCVbXFxkQS1GXXsyfSkrL2dpLGRlY29kZVVSSUNvbXBvbmVudCl9LHdyaXRlOmZ1bmN0aW9uKGUpe3JldHVybiBlbmNvZGVVUklDb21wb25lbnQoZSkucmVwbGFjZSgvJSgyWzM0NkJGXXwzW0FDLUZdfDQwfDVbQkRFXXw2MHw3W0JDRF0pL2csZGVjb2RlVVJJQ29tcG9uZW50KX19O3JldHVybiBmdW5jdGlvbiBuKHIsbyl7ZnVuY3Rpb24gaSh0LG4saSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50KXtcIm51bWJlclwiPT10eXBlb2YoaT1lKHt9LG8saSkpLmV4cGlyZXMmJihpLmV4cGlyZXM9bmV3IERhdGUoRGF0ZS5ub3coKSs4NjRlNSppLmV4cGlyZXMpKSxpLmV4cGlyZXMmJihpLmV4cGlyZXM9aS5leHBpcmVzLnRvVVRDU3RyaW5nKCkpLHQ9ZW5jb2RlVVJJQ29tcG9uZW50KHQpLnJlcGxhY2UoLyUoMlszNDZCXXw1RXw2MHw3QykvZyxkZWNvZGVVUklDb21wb25lbnQpLnJlcGxhY2UoL1soKV0vZyxlc2NhcGUpLG49ci53cml0ZShuLHQpO3ZhciBjPVwiXCI7Zm9yKHZhciB1IGluIGkpaVt1XSYmKGMrPVwiOyBcIit1LCEwIT09aVt1XSYmKGMrPVwiPVwiK2lbdV0uc3BsaXQoXCI7XCIpWzBdKSk7cmV0dXJuIGRvY3VtZW50LmNvb2tpZT10K1wiPVwiK24rY319cmV0dXJuIE9iamVjdC5jcmVhdGUoe3NldDppLGdldDpmdW5jdGlvbihlKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQmJighYXJndW1lbnRzLmxlbmd0aHx8ZSkpe2Zvcih2YXIgbj1kb2N1bWVudC5jb29raWU/ZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIik6W10sbz17fSxpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciBjPW5baV0uc3BsaXQoXCI9XCIpLHU9Yy5zbGljZSgxKS5qb2luKFwiPVwiKTsnXCInPT09dVswXSYmKHU9dS5zbGljZSgxLC0xKSk7dHJ5e3ZhciBmPXQucmVhZChjWzBdKTtpZihvW2ZdPXIucmVhZCh1LGYpLGU9PT1mKWJyZWFrfWNhdGNoKGUpe319cmV0dXJuIGU/b1tlXTpvfX0scmVtb3ZlOmZ1bmN0aW9uKHQsbil7aSh0LFwiXCIsZSh7fSxuLHtleHBpcmVzOi0xfSkpfSx3aXRoQXR0cmlidXRlczpmdW5jdGlvbih0KXtyZXR1cm4gbih0aGlzLmNvbnZlcnRlcixlKHt9LHRoaXMuYXR0cmlidXRlcyx0KSl9LHdpdGhDb252ZXJ0ZXI6ZnVuY3Rpb24odCl7cmV0dXJuIG4oZSh7fSx0aGlzLmNvbnZlcnRlcix0KSx0aGlzLmF0dHJpYnV0ZXMpfX0se2F0dHJpYnV0ZXM6e3ZhbHVlOk9iamVjdC5mcmVlemUobyl9LGNvbnZlcnRlcjp7dmFsdWU6T2JqZWN0LmZyZWV6ZShyKX19KX0odCx7cGF0aDpcIi9cIn0pfSk7XHJcbiIsIihmdW5jdGlvbiBkZWZpbmVNdXN0YWNoZShnbG9iYWwsZmFjdG9yeSl7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZleHBvcnRzJiZ0eXBlb2YgZXhwb3J0cy5ub2RlTmFtZSE9PVwic3RyaW5nXCIpe2ZhY3RvcnkoZXhwb3J0cyl9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW1wiZXhwb3J0c1wiXSxmYWN0b3J5KX1lbHNle2dsb2JhbC5NdXN0YWNoZT17fTtmYWN0b3J5KGdsb2JhbC5NdXN0YWNoZSl9fSkodGhpcyxmdW5jdGlvbiBtdXN0YWNoZUZhY3RvcnkobXVzdGFjaGUpe3ZhciBvYmplY3RUb1N0cmluZz1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO3ZhciBpc0FycmF5PUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uIGlzQXJyYXlQb2x5ZmlsbChvYmplY3Qpe3JldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKG9iamVjdCk9PT1cIltvYmplY3QgQXJyYXldXCJ9O2Z1bmN0aW9uIGlzRnVuY3Rpb24ob2JqZWN0KXtyZXR1cm4gdHlwZW9mIG9iamVjdD09PVwiZnVuY3Rpb25cIn1mdW5jdGlvbiB0eXBlU3RyKG9iail7cmV0dXJuIGlzQXJyYXkob2JqKT9cImFycmF5XCI6dHlwZW9mIG9ian1mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyaW5nKXtyZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1tcXC1cXFtcXF17fSgpKis/LixcXFxcXFxeJHwjXFxzXS9nLFwiXFxcXCQmXCIpfWZ1bmN0aW9uIGhhc1Byb3BlcnR5KG9iaixwcm9wTmFtZSl7cmV0dXJuIG9iaiE9bnVsbCYmdHlwZW9mIG9iaj09PVwib2JqZWN0XCImJnByb3BOYW1lIGluIG9ian12YXIgcmVnRXhwVGVzdD1SZWdFeHAucHJvdG90eXBlLnRlc3Q7ZnVuY3Rpb24gdGVzdFJlZ0V4cChyZSxzdHJpbmcpe3JldHVybiByZWdFeHBUZXN0LmNhbGwocmUsc3RyaW5nKX12YXIgbm9uU3BhY2VSZT0vXFxTLztmdW5jdGlvbiBpc1doaXRlc3BhY2Uoc3RyaW5nKXtyZXR1cm4hdGVzdFJlZ0V4cChub25TcGFjZVJlLHN0cmluZyl9dmFyIGVudGl0eU1hcD17XCImXCI6XCImYW1wO1wiLFwiPFwiOlwiJmx0O1wiLFwiPlwiOlwiJmd0O1wiLCdcIic6XCImcXVvdDtcIixcIidcIjpcIiYjMzk7XCIsXCIvXCI6XCImI3gyRjtcIixcImBcIjpcIiYjeDYwO1wiLFwiPVwiOlwiJiN4M0Q7XCJ9O2Z1bmN0aW9uIGVzY2FwZUh0bWwoc3RyaW5nKXtyZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZSgvWyY8PlwiJ2A9XFwvXS9nLGZ1bmN0aW9uIGZyb21FbnRpdHlNYXAocyl7cmV0dXJuIGVudGl0eU1hcFtzXX0pfXZhciB3aGl0ZVJlPS9cXHMqLzt2YXIgc3BhY2VSZT0vXFxzKy87dmFyIGVxdWFsc1JlPS9cXHMqPS87dmFyIGN1cmx5UmU9L1xccypcXH0vO3ZhciB0YWdSZT0vI3xcXF58XFwvfD58XFx7fCZ8PXwhLztmdW5jdGlvbiBwYXJzZVRlbXBsYXRlKHRlbXBsYXRlLHRhZ3Mpe2lmKCF0ZW1wbGF0ZSlyZXR1cm5bXTt2YXIgc2VjdGlvbnM9W107dmFyIHRva2Vucz1bXTt2YXIgc3BhY2VzPVtdO3ZhciBoYXNUYWc9ZmFsc2U7dmFyIG5vblNwYWNlPWZhbHNlO2Z1bmN0aW9uIHN0cmlwU3BhY2UoKXtpZihoYXNUYWcmJiFub25TcGFjZSl7d2hpbGUoc3BhY2VzLmxlbmd0aClkZWxldGUgdG9rZW5zW3NwYWNlcy5wb3AoKV19ZWxzZXtzcGFjZXM9W119aGFzVGFnPWZhbHNlO25vblNwYWNlPWZhbHNlfXZhciBvcGVuaW5nVGFnUmUsY2xvc2luZ1RhZ1JlLGNsb3NpbmdDdXJseVJlO2Z1bmN0aW9uIGNvbXBpbGVUYWdzKHRhZ3NUb0NvbXBpbGUpe2lmKHR5cGVvZiB0YWdzVG9Db21waWxlPT09XCJzdHJpbmdcIil0YWdzVG9Db21waWxlPXRhZ3NUb0NvbXBpbGUuc3BsaXQoc3BhY2VSZSwyKTtpZighaXNBcnJheSh0YWdzVG9Db21waWxlKXx8dGFnc1RvQ29tcGlsZS5sZW5ndGghPT0yKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdGFnczogXCIrdGFnc1RvQ29tcGlsZSk7b3BlbmluZ1RhZ1JlPW5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKHRhZ3NUb0NvbXBpbGVbMF0pK1wiXFxcXHMqXCIpO2Nsb3NpbmdUYWdSZT1uZXcgUmVnRXhwKFwiXFxcXHMqXCIrZXNjYXBlUmVnRXhwKHRhZ3NUb0NvbXBpbGVbMV0pKTtjbG9zaW5nQ3VybHlSZT1uZXcgUmVnRXhwKFwiXFxcXHMqXCIrZXNjYXBlUmVnRXhwKFwifVwiK3RhZ3NUb0NvbXBpbGVbMV0pKX1jb21waWxlVGFncyh0YWdzfHxtdXN0YWNoZS50YWdzKTt2YXIgc2Nhbm5lcj1uZXcgU2Nhbm5lcih0ZW1wbGF0ZSk7dmFyIHN0YXJ0LHR5cGUsdmFsdWUsY2hyLHRva2VuLG9wZW5TZWN0aW9uO3doaWxlKCFzY2FubmVyLmVvcygpKXtzdGFydD1zY2FubmVyLnBvczt2YWx1ZT1zY2FubmVyLnNjYW5VbnRpbChvcGVuaW5nVGFnUmUpO2lmKHZhbHVlKXtmb3IodmFyIGk9MCx2YWx1ZUxlbmd0aD12YWx1ZS5sZW5ndGg7aTx2YWx1ZUxlbmd0aDsrK2kpe2Nocj12YWx1ZS5jaGFyQXQoaSk7aWYoaXNXaGl0ZXNwYWNlKGNocikpe3NwYWNlcy5wdXNoKHRva2Vucy5sZW5ndGgpfWVsc2V7bm9uU3BhY2U9dHJ1ZX10b2tlbnMucHVzaChbXCJ0ZXh0XCIsY2hyLHN0YXJ0LHN0YXJ0KzFdKTtzdGFydCs9MTtpZihjaHI9PT1cIlxcblwiKXN0cmlwU3BhY2UoKX19aWYoIXNjYW5uZXIuc2NhbihvcGVuaW5nVGFnUmUpKWJyZWFrO2hhc1RhZz10cnVlO3R5cGU9c2Nhbm5lci5zY2FuKHRhZ1JlKXx8XCJuYW1lXCI7c2Nhbm5lci5zY2FuKHdoaXRlUmUpO2lmKHR5cGU9PT1cIj1cIil7dmFsdWU9c2Nhbm5lci5zY2FuVW50aWwoZXF1YWxzUmUpO3NjYW5uZXIuc2NhbihlcXVhbHNSZSk7c2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKX1lbHNlIGlmKHR5cGU9PT1cIntcIil7dmFsdWU9c2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ0N1cmx5UmUpO3NjYW5uZXIuc2NhbihjdXJseVJlKTtzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nVGFnUmUpO3R5cGU9XCImXCJ9ZWxzZXt2YWx1ZT1zY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nVGFnUmUpfWlmKCFzY2FubmVyLnNjYW4oY2xvc2luZ1RhZ1JlKSl0aHJvdyBuZXcgRXJyb3IoXCJVbmNsb3NlZCB0YWcgYXQgXCIrc2Nhbm5lci5wb3MpO3Rva2VuPVt0eXBlLHZhbHVlLHN0YXJ0LHNjYW5uZXIucG9zXTt0b2tlbnMucHVzaCh0b2tlbik7aWYodHlwZT09PVwiI1wifHx0eXBlPT09XCJeXCIpe3NlY3Rpb25zLnB1c2godG9rZW4pfWVsc2UgaWYodHlwZT09PVwiL1wiKXtvcGVuU2VjdGlvbj1zZWN0aW9ucy5wb3AoKTtpZighb3BlblNlY3Rpb24pdGhyb3cgbmV3IEVycm9yKCdVbm9wZW5lZCBzZWN0aW9uIFwiJyt2YWx1ZSsnXCIgYXQgJytzdGFydCk7aWYob3BlblNlY3Rpb25bMV0hPT12YWx1ZSl0aHJvdyBuZXcgRXJyb3IoJ1VuY2xvc2VkIHNlY3Rpb24gXCInK29wZW5TZWN0aW9uWzFdKydcIiBhdCAnK3N0YXJ0KX1lbHNlIGlmKHR5cGU9PT1cIm5hbWVcInx8dHlwZT09PVwie1wifHx0eXBlPT09XCImXCIpe25vblNwYWNlPXRydWV9ZWxzZSBpZih0eXBlPT09XCI9XCIpe2NvbXBpbGVUYWdzKHZhbHVlKX19b3BlblNlY3Rpb249c2VjdGlvbnMucG9wKCk7aWYob3BlblNlY3Rpb24pdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCBzZWN0aW9uIFwiJytvcGVuU2VjdGlvblsxXSsnXCIgYXQgJytzY2FubmVyLnBvcyk7cmV0dXJuIG5lc3RUb2tlbnMoc3F1YXNoVG9rZW5zKHRva2VucykpfWZ1bmN0aW9uIHNxdWFzaFRva2Vucyh0b2tlbnMpe3ZhciBzcXVhc2hlZFRva2Vucz1bXTt2YXIgdG9rZW4sbGFzdFRva2VuO2Zvcih2YXIgaT0wLG51bVRva2Vucz10b2tlbnMubGVuZ3RoO2k8bnVtVG9rZW5zOysraSl7dG9rZW49dG9rZW5zW2ldO2lmKHRva2VuKXtpZih0b2tlblswXT09PVwidGV4dFwiJiZsYXN0VG9rZW4mJmxhc3RUb2tlblswXT09PVwidGV4dFwiKXtsYXN0VG9rZW5bMV0rPXRva2VuWzFdO2xhc3RUb2tlblszXT10b2tlblszXX1lbHNle3NxdWFzaGVkVG9rZW5zLnB1c2godG9rZW4pO2xhc3RUb2tlbj10b2tlbn19fXJldHVybiBzcXVhc2hlZFRva2Vuc31mdW5jdGlvbiBuZXN0VG9rZW5zKHRva2Vucyl7dmFyIG5lc3RlZFRva2Vucz1bXTt2YXIgY29sbGVjdG9yPW5lc3RlZFRva2Vuczt2YXIgc2VjdGlvbnM9W107dmFyIHRva2VuLHNlY3Rpb247Zm9yKHZhciBpPTAsbnVtVG9rZW5zPXRva2Vucy5sZW5ndGg7aTxudW1Ub2tlbnM7KytpKXt0b2tlbj10b2tlbnNbaV07c3dpdGNoKHRva2VuWzBdKXtjYXNlXCIjXCI6Y2FzZVwiXlwiOmNvbGxlY3Rvci5wdXNoKHRva2VuKTtzZWN0aW9ucy5wdXNoKHRva2VuKTtjb2xsZWN0b3I9dG9rZW5bNF09W107YnJlYWs7Y2FzZVwiL1wiOnNlY3Rpb249c2VjdGlvbnMucG9wKCk7c2VjdGlvbls1XT10b2tlblsyXTtjb2xsZWN0b3I9c2VjdGlvbnMubGVuZ3RoPjA/c2VjdGlvbnNbc2VjdGlvbnMubGVuZ3RoLTFdWzRdOm5lc3RlZFRva2VuczticmVhaztkZWZhdWx0OmNvbGxlY3Rvci5wdXNoKHRva2VuKX19cmV0dXJuIG5lc3RlZFRva2Vuc31mdW5jdGlvbiBTY2FubmVyKHN0cmluZyl7dGhpcy5zdHJpbmc9c3RyaW5nO3RoaXMudGFpbD1zdHJpbmc7dGhpcy5wb3M9MH1TY2FubmVyLnByb3RvdHlwZS5lb3M9ZnVuY3Rpb24gZW9zKCl7cmV0dXJuIHRoaXMudGFpbD09PVwiXCJ9O1NjYW5uZXIucHJvdG90eXBlLnNjYW49ZnVuY3Rpb24gc2NhbihyZSl7dmFyIG1hdGNoPXRoaXMudGFpbC5tYXRjaChyZSk7aWYoIW1hdGNofHxtYXRjaC5pbmRleCE9PTApcmV0dXJuXCJcIjt2YXIgc3RyaW5nPW1hdGNoWzBdO3RoaXMudGFpbD10aGlzLnRhaWwuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpO3RoaXMucG9zKz1zdHJpbmcubGVuZ3RoO3JldHVybiBzdHJpbmd9O1NjYW5uZXIucHJvdG90eXBlLnNjYW5VbnRpbD1mdW5jdGlvbiBzY2FuVW50aWwocmUpe3ZhciBpbmRleD10aGlzLnRhaWwuc2VhcmNoKHJlKSxtYXRjaDtzd2l0Y2goaW5kZXgpe2Nhc2UtMTptYXRjaD10aGlzLnRhaWw7dGhpcy50YWlsPVwiXCI7YnJlYWs7Y2FzZSAwOm1hdGNoPVwiXCI7YnJlYWs7ZGVmYXVsdDptYXRjaD10aGlzLnRhaWwuc3Vic3RyaW5nKDAsaW5kZXgpO3RoaXMudGFpbD10aGlzLnRhaWwuc3Vic3RyaW5nKGluZGV4KX10aGlzLnBvcys9bWF0Y2gubGVuZ3RoO3JldHVybiBtYXRjaH07ZnVuY3Rpb24gQ29udGV4dCh2aWV3LHBhcmVudENvbnRleHQpe3RoaXMudmlldz12aWV3O3RoaXMuY2FjaGU9e1wiLlwiOnRoaXMudmlld307dGhpcy5wYXJlbnQ9cGFyZW50Q29udGV4dH1Db250ZXh0LnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uIHB1c2godmlldyl7cmV0dXJuIG5ldyBDb250ZXh0KHZpZXcsdGhpcyl9O0NvbnRleHQucHJvdG90eXBlLmxvb2t1cD1mdW5jdGlvbiBsb29rdXAobmFtZSl7dmFyIGNhY2hlPXRoaXMuY2FjaGU7dmFyIHZhbHVlO2lmKGNhY2hlLmhhc093blByb3BlcnR5KG5hbWUpKXt2YWx1ZT1jYWNoZVtuYW1lXX1lbHNle3ZhciBjb250ZXh0PXRoaXMsbmFtZXMsaW5kZXgsbG9va3VwSGl0PWZhbHNlO3doaWxlKGNvbnRleHQpe2lmKG5hbWUuaW5kZXhPZihcIi5cIik+MCl7dmFsdWU9Y29udGV4dC52aWV3O25hbWVzPW5hbWUuc3BsaXQoXCIuXCIpO2luZGV4PTA7d2hpbGUodmFsdWUhPW51bGwmJmluZGV4PG5hbWVzLmxlbmd0aCl7aWYoaW5kZXg9PT1uYW1lcy5sZW5ndGgtMSlsb29rdXBIaXQ9aGFzUHJvcGVydHkodmFsdWUsbmFtZXNbaW5kZXhdKTt2YWx1ZT12YWx1ZVtuYW1lc1tpbmRleCsrXV19fWVsc2V7dmFsdWU9Y29udGV4dC52aWV3W25hbWVdO2xvb2t1cEhpdD1oYXNQcm9wZXJ0eShjb250ZXh0LnZpZXcsbmFtZSl9aWYobG9va3VwSGl0KWJyZWFrO2NvbnRleHQ9Y29udGV4dC5wYXJlbnR9Y2FjaGVbbmFtZV09dmFsdWV9aWYoaXNGdW5jdGlvbih2YWx1ZSkpdmFsdWU9dmFsdWUuY2FsbCh0aGlzLnZpZXcpO3JldHVybiB2YWx1ZX07ZnVuY3Rpb24gV3JpdGVyKCl7dGhpcy5jYWNoZT17fX1Xcml0ZXIucHJvdG90eXBlLmNsZWFyQ2FjaGU9ZnVuY3Rpb24gY2xlYXJDYWNoZSgpe3RoaXMuY2FjaGU9e319O1dyaXRlci5wcm90b3R5cGUucGFyc2U9ZnVuY3Rpb24gcGFyc2UodGVtcGxhdGUsdGFncyl7dmFyIGNhY2hlPXRoaXMuY2FjaGU7dmFyIHRva2Vucz1jYWNoZVt0ZW1wbGF0ZV07aWYodG9rZW5zPT1udWxsKXRva2Vucz1jYWNoZVt0ZW1wbGF0ZV09cGFyc2VUZW1wbGF0ZSh0ZW1wbGF0ZSx0YWdzKTtyZXR1cm4gdG9rZW5zfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbiByZW5kZXIodGVtcGxhdGUsdmlldyxwYXJ0aWFscyl7dmFyIHRva2Vucz10aGlzLnBhcnNlKHRlbXBsYXRlKTt2YXIgY29udGV4dD12aWV3IGluc3RhbmNlb2YgQ29udGV4dD92aWV3Om5ldyBDb250ZXh0KHZpZXcpO3JldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbnMsY29udGV4dCxwYXJ0aWFscyx0ZW1wbGF0ZSl9O1dyaXRlci5wcm90b3R5cGUucmVuZGVyVG9rZW5zPWZ1bmN0aW9uIHJlbmRlclRva2Vucyh0b2tlbnMsY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKXt2YXIgYnVmZmVyPVwiXCI7dmFyIHRva2VuLHN5bWJvbCx2YWx1ZTtmb3IodmFyIGk9MCxudW1Ub2tlbnM9dG9rZW5zLmxlbmd0aDtpPG51bVRva2VuczsrK2kpe3ZhbHVlPXVuZGVmaW5lZDt0b2tlbj10b2tlbnNbaV07c3ltYm9sPXRva2VuWzBdO2lmKHN5bWJvbD09PVwiI1wiKXZhbHVlPXRoaXMucmVuZGVyU2VjdGlvbih0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpO2Vsc2UgaWYoc3ltYm9sPT09XCJeXCIpdmFsdWU9dGhpcy5yZW5kZXJJbnZlcnRlZCh0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpO2Vsc2UgaWYoc3ltYm9sPT09XCI+XCIpdmFsdWU9dGhpcy5yZW5kZXJQYXJ0aWFsKHRva2VuLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSk7ZWxzZSBpZihzeW1ib2w9PT1cIiZcIil2YWx1ZT10aGlzLnVuZXNjYXBlZFZhbHVlKHRva2VuLGNvbnRleHQpO2Vsc2UgaWYoc3ltYm9sPT09XCJuYW1lXCIpdmFsdWU9dGhpcy5lc2NhcGVkVmFsdWUodG9rZW4sY29udGV4dCk7ZWxzZSBpZihzeW1ib2w9PT1cInRleHRcIil2YWx1ZT10aGlzLnJhd1ZhbHVlKHRva2VuKTtpZih2YWx1ZSE9PXVuZGVmaW5lZClidWZmZXIrPXZhbHVlfXJldHVybiBidWZmZXJ9O1dyaXRlci5wcm90b3R5cGUucmVuZGVyU2VjdGlvbj1mdW5jdGlvbiByZW5kZXJTZWN0aW9uKHRva2VuLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl7dmFyIHNlbGY9dGhpczt2YXIgYnVmZmVyPVwiXCI7dmFyIHZhbHVlPWNvbnRleHQubG9va3VwKHRva2VuWzFdKTtmdW5jdGlvbiBzdWJSZW5kZXIodGVtcGxhdGUpe3JldHVybiBzZWxmLnJlbmRlcih0ZW1wbGF0ZSxjb250ZXh0LHBhcnRpYWxzKX1pZighdmFsdWUpcmV0dXJuO2lmKGlzQXJyYXkodmFsdWUpKXtmb3IodmFyIGo9MCx2YWx1ZUxlbmd0aD12YWx1ZS5sZW5ndGg7ajx2YWx1ZUxlbmd0aDsrK2ope2J1ZmZlcis9dGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sY29udGV4dC5wdXNoKHZhbHVlW2pdKSxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKX19ZWxzZSBpZih0eXBlb2YgdmFsdWU9PT1cIm9iamVjdFwifHx0eXBlb2YgdmFsdWU9PT1cInN0cmluZ1wifHx0eXBlb2YgdmFsdWU9PT1cIm51bWJlclwiKXtidWZmZXIrPXRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLGNvbnRleHQucHVzaCh2YWx1ZSkscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl9ZWxzZSBpZihpc0Z1bmN0aW9uKHZhbHVlKSl7aWYodHlwZW9mIG9yaWdpbmFsVGVtcGxhdGUhPT1cInN0cmluZ1wiKXRocm93IG5ldyBFcnJvcihcIkNhbm5vdCB1c2UgaGlnaGVyLW9yZGVyIHNlY3Rpb25zIHdpdGhvdXQgdGhlIG9yaWdpbmFsIHRlbXBsYXRlXCIpO3ZhbHVlPXZhbHVlLmNhbGwoY29udGV4dC52aWV3LG9yaWdpbmFsVGVtcGxhdGUuc2xpY2UodG9rZW5bM10sdG9rZW5bNV0pLHN1YlJlbmRlcik7aWYodmFsdWUhPW51bGwpYnVmZmVyKz12YWx1ZX1lbHNle2J1ZmZlcis9dGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKX1yZXR1cm4gYnVmZmVyfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlckludmVydGVkPWZ1bmN0aW9uIHJlbmRlckludmVydGVkKHRva2VuLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl7dmFyIHZhbHVlPWNvbnRleHQubG9va3VwKHRva2VuWzFdKTtpZighdmFsdWV8fGlzQXJyYXkodmFsdWUpJiZ2YWx1ZS5sZW5ndGg9PT0wKXJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSxjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlclBhcnRpYWw9ZnVuY3Rpb24gcmVuZGVyUGFydGlhbCh0b2tlbixjb250ZXh0LHBhcnRpYWxzKXtpZighcGFydGlhbHMpcmV0dXJuO3ZhciB2YWx1ZT1pc0Z1bmN0aW9uKHBhcnRpYWxzKT9wYXJ0aWFscyh0b2tlblsxXSk6cGFydGlhbHNbdG9rZW5bMV1dO2lmKHZhbHVlIT1udWxsKXJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0aGlzLnBhcnNlKHZhbHVlKSxjb250ZXh0LHBhcnRpYWxzLHZhbHVlKX07V3JpdGVyLnByb3RvdHlwZS51bmVzY2FwZWRWYWx1ZT1mdW5jdGlvbiB1bmVzY2FwZWRWYWx1ZSh0b2tlbixjb250ZXh0KXt2YXIgdmFsdWU9Y29udGV4dC5sb29rdXAodG9rZW5bMV0pO2lmKHZhbHVlIT1udWxsKXJldHVybiB2YWx1ZX07V3JpdGVyLnByb3RvdHlwZS5lc2NhcGVkVmFsdWU9ZnVuY3Rpb24gZXNjYXBlZFZhbHVlKHRva2VuLGNvbnRleHQpe3ZhciB2YWx1ZT1jb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7aWYodmFsdWUhPW51bGwpcmV0dXJuIG11c3RhY2hlLmVzY2FwZSh2YWx1ZSl9O1dyaXRlci5wcm90b3R5cGUucmF3VmFsdWU9ZnVuY3Rpb24gcmF3VmFsdWUodG9rZW4pe3JldHVybiB0b2tlblsxXX07bXVzdGFjaGUubmFtZT1cIm11c3RhY2hlLmpzXCI7bXVzdGFjaGUudmVyc2lvbj1cIjIuMy4wXCI7bXVzdGFjaGUudGFncz1bXCI8JVwiLFwiJT5cIl07dmFyIGRlZmF1bHRXcml0ZXI9bmV3IFdyaXRlcjttdXN0YWNoZS5jbGVhckNhY2hlPWZ1bmN0aW9uIGNsZWFyQ2FjaGUoKXtyZXR1cm4gZGVmYXVsdFdyaXRlci5jbGVhckNhY2hlKCl9O211c3RhY2hlLnBhcnNlPWZ1bmN0aW9uIHBhcnNlKHRlbXBsYXRlLHRhZ3Mpe3JldHVybiBkZWZhdWx0V3JpdGVyLnBhcnNlKHRlbXBsYXRlLHRhZ3MpfTttdXN0YWNoZS5yZW5kZXI9ZnVuY3Rpb24gcmVuZGVyKHRlbXBsYXRlLHZpZXcscGFydGlhbHMpe2lmKHR5cGVvZiB0ZW1wbGF0ZSE9PVwic3RyaW5nXCIpe3Rocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgdGVtcGxhdGUhIFRlbXBsYXRlIHNob3VsZCBiZSBhIFwic3RyaW5nXCIgJysnYnV0IFwiJyt0eXBlU3RyKHRlbXBsYXRlKSsnXCIgd2FzIGdpdmVuIGFzIHRoZSBmaXJzdCAnK1wiYXJndW1lbnQgZm9yIG11c3RhY2hlI3JlbmRlcih0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMpXCIpfXJldHVybiBkZWZhdWx0V3JpdGVyLnJlbmRlcih0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzKX07bXVzdGFjaGUudG9faHRtbD1mdW5jdGlvbiB0b19odG1sKHRlbXBsYXRlLHZpZXcscGFydGlhbHMsc2VuZCl7dmFyIHJlc3VsdD1tdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUsdmlldyxwYXJ0aWFscyk7aWYoaXNGdW5jdGlvbihzZW5kKSl7c2VuZChyZXN1bHQpfWVsc2V7cmV0dXJuIHJlc3VsdH19O211c3RhY2hlLmVzY2FwZT1lc2NhcGVIdG1sO211c3RhY2hlLlNjYW5uZXI9U2Nhbm5lcjttdXN0YWNoZS5Db250ZXh0PUNvbnRleHQ7bXVzdGFjaGUuV3JpdGVyPVdyaXRlcjtyZXR1cm4gbXVzdGFjaGV9KTsiLCIvKipcclxuICogQ29weXJpZ2h0IChjKSAyMDEwLDIwMTEsMjAxMiwyMDEzLDIwMTQgTW9yZ2FuIFJvZGVyaWNrIGh0dHA6Ly9yb2Rlcmljay5ka1xyXG4gKiBMaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xyXG4gKlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbXJvZGVyaWNrL1B1YlN1YkpTXHJcbiAqL1xyXG4hZnVuY3Rpb24obix0KXtcInVzZSBzdHJpY3RcIjt2YXIgcj17fTtuLlB1YlN1Yj1yO3ZhciBlPW4uZGVmaW5lOyFmdW5jdGlvbihuKXt2YXIgdD17fSxyPS0xO2Z1bmN0aW9uIGUobil7dmFyIHQ7Zm9yKHQgaW4gbilpZihuLmhhc093blByb3BlcnR5KHQpKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIG8obix0LHIpe3RyeXtuKHQscil9Y2F0Y2gobil7c2V0VGltZW91dChmdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24oKXt0aHJvdyBufX0obiksMCl9fWZ1bmN0aW9uIGkobix0LHIpe24odCxyKX1mdW5jdGlvbiB1KG4scixlLHUpe3ZhciBmLHM9dFtyXSxjPXU/aTpvO2lmKHQuaGFzT3duUHJvcGVydHkocikpZm9yKGYgaW4gcylzLmhhc093blByb3BlcnR5KGYpJiZjKHNbZl0sbixlKX1mdW5jdGlvbiBmKG4scixvLGkpe3ZhciBmPWZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZT1TdHJpbmcobiksbz1lLmxhc3RJbmRleE9mKFwiLlwiKTtmb3IodShuLG4sdCxyKTstMSE9PW87KWU9ZS5zdWJzdHIoMCxvKSxvPWUubGFzdEluZGV4T2YoXCIuXCIpLHUobixlLHQscil9fShuPVwic3ltYm9sXCI9PXR5cGVvZiBuP24udG9TdHJpbmcoKTpuLHIsaSkscz1mdW5jdGlvbihuKXt2YXIgcj1TdHJpbmcobiksbz1Cb29sZWFuKHQuaGFzT3duUHJvcGVydHkocikmJmUodFtyXSkpLGk9ci5sYXN0SW5kZXhPZihcIi5cIik7Zm9yKDshbyYmLTEhPT1pOylyPXIuc3Vic3RyKDAsaSksaT1yLmxhc3RJbmRleE9mKFwiLlwiKSxvPUJvb2xlYW4odC5oYXNPd25Qcm9wZXJ0eShyKSYmZSh0W3JdKSk7cmV0dXJuIG99KG4pO3JldHVybiEhcyYmKCEwPT09bz9mKCk6c2V0VGltZW91dChmLDApLCEwKX1uLnB1Ymxpc2g9ZnVuY3Rpb24odCxyKXtyZXR1cm4gZih0LHIsITEsbi5pbW1lZGlhdGVFeGNlcHRpb25zKX0sbi5wdWJsaXNoU3luYz1mdW5jdGlvbih0LHIpe3JldHVybiBmKHQsciwhMCxuLmltbWVkaWF0ZUV4Y2VwdGlvbnMpfSxuLnN1YnNjcmliZT1mdW5jdGlvbihuLGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpcmV0dXJuITE7bj1cInN5bWJvbFwiPT10eXBlb2Ygbj9uLnRvU3RyaW5nKCk6bix0Lmhhc093blByb3BlcnR5KG4pfHwodFtuXT17fSk7dmFyIG89XCJ1aWRfXCIrU3RyaW5nKCsrcik7cmV0dXJuIHRbbl1bb109ZSxvfSxuLnN1YnNjcmliZU9uY2U9ZnVuY3Rpb24odCxyKXt2YXIgZT1uLnN1YnNjcmliZSh0LGZ1bmN0aW9uKCl7bi51bnN1YnNjcmliZShlKSxyLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pO3JldHVybiBufSxuLmNsZWFyQWxsU3Vic2NyaXB0aW9ucz1mdW5jdGlvbigpe3Q9e319LG4uY2xlYXJTdWJzY3JpcHRpb25zPWZ1bmN0aW9uKG4pe3ZhciByO2ZvcihyIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShyKSYmMD09PXIuaW5kZXhPZihuKSYmZGVsZXRlIHRbcl19LG4udW5zdWJzY3JpYmU9ZnVuY3Rpb24ocil7dmFyIGUsbyxpLHU9XCJzdHJpbmdcIj09dHlwZW9mIHImJih0Lmhhc093blByb3BlcnR5KHIpfHxmdW5jdGlvbihuKXt2YXIgcjtmb3IociBpbiB0KWlmKHQuaGFzT3duUHJvcGVydHkocikmJjA9PT1yLmluZGV4T2YobikpcmV0dXJuITA7cmV0dXJuITF9KHIpKSxmPSF1JiZcInN0cmluZ1wiPT10eXBlb2YgcixzPVwiZnVuY3Rpb25cIj09dHlwZW9mIHIsYz0hMTtpZighdSl7Zm9yKGUgaW4gdClpZih0Lmhhc093blByb3BlcnR5KGUpKXtpZihvPXRbZV0sZiYmb1tyXSl7ZGVsZXRlIG9bcl0sYz1yO2JyZWFrfWlmKHMpZm9yKGkgaW4gbylvLmhhc093blByb3BlcnR5KGkpJiZvW2ldPT09ciYmKGRlbGV0ZSBvW2ldLGM9ITApfXJldHVybiBjfW4uY2xlYXJTdWJzY3JpcHRpb25zKHIpfX0ociksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZS5hbWQ/ZShmdW5jdGlvbigpe3JldHVybiByfSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJih2b2lkIDAhPT1tb2R1bGUmJm1vZHVsZS5leHBvcnRzJiYoZXhwb3J0cz1tb2R1bGUuZXhwb3J0cz1yKSxleHBvcnRzLlB1YlN1Yj1yLG1vZHVsZS5leHBvcnRzPWV4cG9ydHM9cil9KFwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvd3x8dGhpcyk7IiwiLyohIFVURi04XHJcblxyXG7CqSBrb3ZyaWdpblxyXG7QktGB0LUg0L/RgNCw0LLQsCDRgNCw0LfRgNC10YjQtdC90Ytcclxu0LrRgNCw0YHQuNCy0YvQuSDQtNC40LfQsNC50L0g0LTQvtC70LbQtdC9INC40LzQtdGC0Ywg0LrRgNCw0YHQuNCy0YvQuSDQutC+0LTCrlxyXG5cclxuaHR0cHM6Ly9naXRodWIuY29tL2h0bWxwbHVzY3NzL1xyXG5cclxuKi9cclxuXHJcbiggKCkgPT4ge1xyXG5cclxuXHR3aW5kb3cuSU5USSA9IHt9O1xyXG5cdElOVEkucmVzaXplVGltZW91dCA9IG51bGw7XHJcblx0SU5USS53aW5kb3dXaWR0aE9MZCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcblxyXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoIUlOVEkucmVzaXplVGltZW91dCkge1xyXG5cclxuXHRcdFx0XHRJTlRJLnJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+ICB7XHJcblxyXG5cdFx0XHRcdFx0SU5USS5yZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHJcblx0XHRcdFx0XHRpZihJTlRJLndpbmRvd1dpZHRoT0xkICE9PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xyXG5cclxuXHRcdFx0XHRcdFx0SU5USS53aW5kb3dXaWR0aE9MZCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuXHRcdFx0XHRcdFx0UHViU3ViLnB1Ymxpc2goJ3dpbmRvd1dpZHRoUmVzaXplJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9LCAxMDApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG5cclxuXHRcdFx0UHViU3ViLnB1Ymxpc2goJ3dpbmRvd1Njcm9sbCcpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuXHJcblx0XHRQdWJTdWIucHVibGlzaCgnRE9NQ29udGVudExvYWRlZCcpO1xyXG5cclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuXHJcblx0XHRQdWJTdWIucHVibGlzaCgncGFnZUxvYWQnKTtcclxuXHJcblx0XHRDb29raWVzLnNldCgnZmFzdExvYWRTY3JpcHQnLCB0cnVlKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINC+0LHRgNCw0LHQvtGC0YfQuNC6INCw0L3QuNC80LDRhtC40LlcclxuXHRJTlRJLmNzc0FuaW1hdGlvbiA9IGE9PntsZXQgYixjLGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNzc2FuaW1hdGlvblwiKTtzd2l0Y2goYSl7Y2FzZSdhbmltYXRpb24nOmI9e1wiYW5pbWF0aW9uXCI6XCJhbmltYXRpb25lbmRcIixcIk9BbmltYXRpb25cIjpcIm9BbmltYXRpb25FbmRcIixcIk1vekFuaW1hdGlvblwiOlwiYW5pbWF0aW9uZW5kXCIsXCJXZWJraXRBbmltYXRpb25cIjpcIndlYmtpdEFuaW1hdGlvbkVuZFwifTticmVhaztjYXNlJ3RyYW5zaXRpb24nOmI9e1widHJhbnNpdGlvblwiOlwidHJhbnNpdGlvbmVuZFwiLFwiT1RyYW5zaXRpb25cIjpcIm9UcmFuc2l0aW9uRW5kXCIsXCJNb3pUcmFuc2l0aW9uXCI6XCJ0cmFuc2l0aW9uZW5kXCIsXCJXZWJraXRUcmFuc2l0aW9uXCI6XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCJ9fWZvcihjIGluIGIpaWYoZC5zdHlsZVtjXSE9PXVuZGVmaW5lZClyZXR1cm4gYltjXX1cclxuXHJcblx0Ly8gRGV0ZXJtaW5lIGlmIGFuIGVsZW1lbnQgaXMgaW4gdGhlIHZpc2libGUgdmlld3BvcnRcclxuXHRJTlRJLmlzSW5WaWV3cG9ydCA9IGVsID0+IHtcclxuXHRcdGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHJldHVybiAocmVjdC50b3AgPj0gMCAmJiByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cdH1cclxuXHJcblx0Ly8g0L7RgtC00LXQu9GP0LXQvCDRgtGL0YHRj9GH0LhcclxuXHRJTlRJLnNlcE51bWJlciA9IGZ1bmN0aW9uKHN0cil7XHJcblx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcclxuXHRcdHN0ciA9IHN0ci5yZXBsYWNlKC9cXHMrL2csJycpO1xyXG5cdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGRcXGQpKyhbXlxcZF18JCkpL2csICckMSAnKTtcclxuXHR9XHJcblxyXG5cdC8vINGB0LrQu9C10LjQstCw0LXQvCDRgtGL0YHRj9GH0LhcclxuXHRJTlRJLnN0clRvTnVtYmVyID0gZnVuY3Rpb24obil7XHJcblx0XHRyZXR1cm4gcGFyc2VJbnQobi5yZXBsYWNlKC9cXHMrL2csJycpLCAxMCk7XHJcblx0fVxyXG5cclxuLy8g0YHQutC70L7QvdC10L3QuNC1XHJcblx0SU5USS5kZWNsZW5zaW9uID0gKG51bSwgZXhwcmVzc2lvbnMpID0+IHtcclxuXHJcblx0XHRsZXQgcixcclxuXHRcdFx0Y291bnQgPSBudW0gJSAxMDA7XHJcblxyXG5cdFx0aWYgKGNvdW50ID4gNCAmJiBjb3VudCA8IDIxKXtcclxuXHJcblx0XHRcdHIgPSBleHByZXNzaW9uc1snMiddO1xyXG5cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0Y291bnQgPSBjb3VudCAlIDEwO1xyXG5cclxuXHRcdFx0aWYgKGNvdW50ID09IDEpe1xyXG5cdFx0XHRcdHIgPSBleHByZXNzaW9uc1snMCddO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGNvdW50ID4gMSAmJiBjb3VudCA8IDUpe1xyXG5cdFx0XHRcdHIgPSBleHByZXNzaW9uc1snMSddO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2V7XHJcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycyJ107XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHI7XHJcblxyXG5cdH1cclxuXHJcbn0pKCk7IiwiKCBpdGVtcyA9PiB7XHJcblxyXG5cdGlmKCFpdGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShpdGVtcywgYWNjb3JkaW9uID0+IHtcclxuXHJcblx0XHRsZXQgYW5pbWF0ZU9uID0gZmFsc2U7XHJcblxyXG5cdFx0Y29uc3QgYnRucyA9IGFjY29yZGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19idG4nKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGJ0bnMsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBpdGVtID0gYnRuLmNsb3Nlc3QoJy5hY2NvcmRpb25fX2l0ZW0nKSxcclxuXHRcdFx0XHQgIGhlYWQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2hlYWQnKSxcclxuXHRcdFx0XHQgIGJvZHkgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2JvZHknKTtcclxuXHJcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0YW5pbWF0ZU9uID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0aXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ym9keS5hZGRFdmVudExpc3RlbmVyKElOVEkuY3NzQW5pbWF0aW9uKCd0cmFuc2l0aW9uJyksICgpID0+IHtcclxuXHJcblx0XHRcdFx0aWYoYW5pbWF0ZU9uICYmICFJTlRJLmlzSW5WaWV3cG9ydChoZWFkKSl7XHJcblxyXG5cdFx0XHRcdFx0aGVhZC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRhbmltYXRlT24gPSBmYWxzZTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb24nKSk7IiwiKCBpdGVtcyA9PiB7XHJcblxyXG5cdGlmKCFpdGVtcykge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHQvLyDQtdGB0LvQuCDQtdGB0YLRjCDQstC+0LfQvNC+0LbQvdC+0YHRh9GC0Ywg0LLQtdGA0L3Rg9GC0YzRgdGPINC90LDQt9Cw0LRcclxuXHJcblx0aWYoZG9jdW1lbnQucmVmZXJyZXIuaW5kZXhPZihsb2NhdGlvbi5ob3N0bmFtZSkgPiAwKSB7XHJcblxyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnQtZm9ybV9fYmFjaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGhpc3RvcnkuYmFjaygpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vINC/0L7QutCw0LfQsNGC0Ywg0L/QsNGA0L7Qu9GMXHJcblxyXG5cdGNvbnN0IHRvZ2dsZVBhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3VudC1mb3JtX192aXNpYmxlLXRvZ2dsZS1wYXNzd29yZCcpO1xyXG5cclxuXHRBcnJheS5mcm9tKHRvZ2dsZVBhc3MsIGVsID0+IHtcclxuXHJcblx0XHRjb25zdCBidG4gPSBlbC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudC1mb3JtX192aXNpYmxlLXRvZ2dsZS1wYXNzd29yZC1idG4nKSxcclxuXHRcdFx0ICBpbnB1dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50LWZvcm1fX3Zpc2libGUtdG9nZ2xlLXBhc3N3b3JkLWlucHV0Jyk7XHJcblxyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcblxyXG5cdFx0XHRpbnB1dC50eXBlID0gaW5wdXQudHlwZSA9PT0gJ3Bhc3N3b3JkJyA/ICd0ZXh0JyA6ICdwYXNzd29yZCc7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnQtZm9ybScpKTsiLCIoIGZvcm0gPT4ge1xyXG5cclxuXHRpZighZm9ybSkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBjb3VudCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmNhcnRfX2NvdW50JyksXHJcblx0XHQgIHRvdGFsID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuY2FydF9fdG90YWwnKSxcclxuXHRcdCAgaXRlbXMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb2NzLWNhdGFsb2dfX2l0ZW0nKSxcclxuXHRcdCAgY291bnRVcE9wdGlvbiA9IHtcclxuXHRcdFx0XHR1c2VFYXNpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdHVzZUdyb3VwaW5nOiB0cnVlLFxyXG5cdFx0XHRcdHNlcGFyYXRvcjogJyAnLFxyXG5cdFx0XHRcdGRlY2ltYWw6ICcnXHJcblx0XHRcdH07XHJcblxyXG5cdEFycmF5LmZyb20oaXRlbXMsIGl0ZW0gPT4ge1xyXG5cclxuXHRcdGNvbnN0IGJ0blJlbW92ZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmNhcnRfX3JlbW92ZScpO1xyXG5cclxuXHRcdGJ0blJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdGl0ZW0uc3R5bGUuaGVpZ2h0ID0gaXRlbS5jbGllbnRIZWlnaHQgKyAncHgnO1xyXG5cclxuXHRcdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKElOVEkuY3NzQW5pbWF0aW9uKCd0cmFuc2l0aW9uJyksICgpPT4ge1xyXG5cclxuXHRcdFx0XHRpZihpdGVtLmNsaWVudEhlaWdodCA+IDApIHtcclxuXHJcblx0XHRcdFx0XHRpdGVtLnN0eWxlLmhlaWdodCA9IDA7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0aXRlbS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFx0XHRzdWJtaXQoKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLXJlbW92ZScpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Y29uc3Qgc3VibWl0ID0gKCk9PiB7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coJ3N1Ym1pdCcpO1xyXG5cclxuXHRcdHJldHVybiBpbnZvaWNlKCk7XHJcblxyXG5cdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdH0pXHJcblx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHQudGhlbihyZXN1bHQgPT4ge1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcblx0XHRcdGlmKHJlc3VsdC5jb3VudENhcnQpe1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jYXJ0IGEnKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY291bnQnLCByZXN1bHQuY291bnRDYXJ0KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGludm9pY2UoKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fTtcclxuXHJcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzdWJtaXQpO1xyXG5cclxuXHRjb25zdCBpbnZvaWNlID0gKCk9PiB7XHJcblxyXG5cdFx0bGV0IHMgPSAwO1xyXG5cclxuXHRcdGNvbnN0IGl0ZW1zID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuZG9jcy1jYXRhbG9nX19pdGVtJyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShpdGVtcywgZWwgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgcHJpY2UgPSBwYXJzZUludChlbC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fcHJpY2UnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKSk7XHJcblx0XHRcdHMgKz0gcHJpY2U7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdC8vIHRvdGFsIHN1bVxyXG5cdFx0bGV0IGNvdW50VXAgPSBuZXcgQ291bnRVcChcclxuXHRcdFx0dG90YWwsXHJcblx0XHRcdElOVEkuc3RyVG9OdW1iZXIodG90YWwudGV4dENvbnRlbnQpLFxyXG5cdFx0XHRzLFxyXG5cdFx0XHQwLFxyXG5cdFx0XHQwLjUsXHJcblx0XHRcdGNvdW50VXBPcHRpb24pO1xyXG5cclxuXHRcdGlmICghY291bnRVcC5lcnJvcikge1xyXG5cclxuXHRcdFx0Y291bnRVcC5zdGFydCgpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHR0b3RhbC50ZXh0Q29udGVudCA9IElOVEkuc2VwTnVtYmVyKHMpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0Ly8gaGlkZSBmb3JtIGVtcHR5XHJcblxyXG5cdFx0aWYocyA9PT0gMCkge1xyXG5cclxuXHRcdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1lbXB0eScpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRjb3VudC50ZXh0Q29udGVudCA9IGl0ZW1zLmxlbmd0aCArICcgJyArIElOVEkuZGVjbGVuc2lvbihpdGVtcy5sZW5ndGgsIGNvdW50LmdldEF0dHJpYnV0ZSgnZGF0YS1kZWNsZW5zaW9uJykuc3BsaXQoJywnKSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdC8vIG9yZGVyXHJcblxyXG5cdGNvbnN0IG5leHQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19uZXh0Jyk7XHJcblxyXG5cdG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuXHJcblx0XHRjb25zdCBldmVudE1vZGFsU2hvdyA9IG5ldyBDdXN0b21FdmVudChcIm1vZGFsU2hvd1wiLCB7XHJcblx0XHRcdGRldGFpbDoge1xyXG5cdFx0XHRcdHNlbGVjdG9yOiBcIm9yZGVyXCJcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0d2luZG93Lm1vZGFsLmRpc3BhdGNoRXZlbnQoZXZlbnRNb2RhbFNob3cpO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0JykpOyIsIiggZm9ybXMgPT4ge1xyXG5cclxuXHRpZighZm9ybXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oZm9ybXMsIGZvcm0gPT4ge1xyXG5cclxuXHRcdGNvbnN0IGNoZWNrYm94ZXMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveF9faW5wdXQ6bm90KFt2YWx1ZT1cImFsbFwiXSknKSxcclxuXHRcdFx0ICBjaGVja2JveEFsbCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmNoZWNrYm94X19pbnB1dFt2YWx1ZT1cImFsbFwiXScpO1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBldmVudHMgPT4ge1xyXG5cclxuXHRcdFx0aWYoZXZlbnRzLnRhcmdldCA9PT0gY2hlY2tib3hBbGwpIHtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShjaGVja2JveGVzLCBjaGVja2JveCA9PiBjaGVja2JveC5jaGVja2VkID0gY2hlY2tib3hBbGwuY2hlY2tlZCk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRsZXQgY291bnQgPSAwO1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGNoZWNrYm94ZXMsIGNoZWNrYm94ID0+IGNoZWNrYm94LmNoZWNrZWQgPyBjb3VudCsrIDogJycpO1xyXG5cclxuXHRcdFx0XHRjaGVja2JveEFsbC5jaGVja2VkID0gY2hlY2tib3hlcy5sZW5ndGggPT09IGNvdW50O1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveC1saXN0LWFsbCcpKTtcclxuXHJcbiggZHJvcGRvd25zID0+IHtcclxuXHJcblx0aWYoIWRyb3Bkb3ducy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShkcm9wZG93bnMsIGVsID0+IHtcclxuXHJcblx0XHRjb25zdCBmb3JtID0gZWwuY2xvc2VzdCgnZm9ybScpLFxyXG5cdFx0XHQgIHJlc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcblx0XHRcdCAgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXHJcblx0XHRcdCAgYnRuID0gZWwucXVlcnlTZWxlY3RvcignLmNoZWNrYm94LWRyb3Bkb3duX19idG4nKSxcclxuXHRcdFx0ICBidG5UZXh0RGVmYXVsdCA9IGJ0bi50ZXh0Q29udGVudCxcclxuXHRcdFx0ICBleHByZXNzaW9ucyA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVjbGVuc2lvbicpLnNwbGl0KCcsJyksXHJcblx0XHRcdCAgaW5wdXRMaXN0ID0gZWwucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94LWRyb3Bkb3duX19pbnB1dCcpO1xyXG5cclxuXHRcdGFycm93LmNsYXNzTmFtZSA9J2NoZWNrYm94LWRyb3Bkb3duX19hcnJvdyc7XHJcblx0XHRhcnJvdy5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk04LjMgMTAuM2ExIDEgMCAwMDAgMS40MWwyLjkzIDIuOTdjLjIyLjIxLjUuMzIuNzguMzJzLjU2LS4xLjc3LS4zMmwyLjkzLTIuOTZhMS4wMSAxLjAxIDAgMDAtLjMyLTEuNjMuOTkuOTkgMCAwMC0xLjA5LjIxTDEyIDEyLjYybC0yLjMtMi4zM2EuOTkuOTkgMCAwMC0xLjQgMHpcIi8+PC9zdmc+JztcclxuXHJcblx0XHRyZXNldC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcclxuXHRcdHJlc2V0LmNsYXNzTmFtZSA9ICdjaGVja2JveC1kcm9wZG93bl9fcmVzZXQgYnV0dG9uIGhpZGUnO1xyXG5cdFx0cmVzZXQuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTIgMTAuNTlsLTUuMy01LjNhMSAxIDAgMDAtMS40IDEuNDJMMTAuNTggMTJsLTUuMyA1LjNhMSAxIDAgMDAxLjQyIDEuNEwxMiAxMy40Mmw1LjMgNS4zYTEgMSAwIDAwMS40LTEuNDJMMTMuNDIgMTJsNS4zLTUuM2ExIDEgMCAxMC0xLjQyLTEuNEwxMiAxMC41OHpcIi8+PC9zdmc+JztcclxuXHJcblx0XHRlbC5hcHBlbmRDaGlsZChhcnJvdyk7XHJcblx0XHRlbC5hcHBlbmRDaGlsZChyZXNldCk7XHJcblxyXG5cdFx0Y29uc3QgUmVzZXQgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRhcnJvdy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdHJlc2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdGJ0bi50ZXh0Q29udGVudCA9IGJ0blRleHREZWZhdWx0O1xyXG5cdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2JveC1kcm9wZG93bi0tY2hlY2tlZCcpO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShpbnB1dExpc3QsIGlucHV0ID0+IHtcclxuXHJcblx0XHRcdFx0aW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGZvcm0gJiYgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwicmVzZXRcIiwgKCkgPT4gUmVzZXQoKSk7XHJcblx0XHRyZXNldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gUmVzZXQoKSk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShpbnB1dExpc3QsIGlucHV0ID0+IHtcclxuXHJcblx0XHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRsZXQgY291bnRDaGVja2VkID0gMCxcclxuXHRcdFx0XHRcdHRleHRDaGVja2VkO1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGlucHV0TGlzdCwgaW5wdXQgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmKGlucHV0LmNoZWNrZWQpIHtcclxuXHJcblx0XHRcdFx0XHRcdGNvdW50Q2hlY2tlZCsrO1xyXG5cdFx0XHRcdFx0XHR0ZXh0Q2hlY2tlZCA9IGlucHV0Lm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpZihjb3VudENoZWNrZWQgPT09IDApIHtcclxuXHJcblx0XHRcdFx0XHRidG4udGV4dENvbnRlbnQgPSBidG5UZXh0RGVmYXVsdDtcclxuXHRcdFx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrYm94LWRyb3Bkb3duLS1jaGVja2VkJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmKGNvdW50Q2hlY2tlZCA9PT0gMSkge1xyXG5cclxuXHRcdFx0XHRcdGFycm93LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdHJlc2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdGJ0bi50ZXh0Q29udGVudCA9IHRleHRDaGVja2VkO1xyXG5cdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtZHJvcGRvd24tLWNoZWNrZWQnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdGFycm93LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdHJlc2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdGJ0bi50ZXh0Q29udGVudCA9IGNvdW50Q2hlY2tlZCArICcgJyArIElOVEkuZGVjbGVuc2lvbihjb3VudENoZWNrZWQsIGV4cHJlc3Npb25zKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHJcbi8vXHRkYXRhLWRlY2xlbnNpb25cclxuXHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlzRHJvcGRvd24gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmNoZWNrYm94LWRyb3Bkb3duJyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShkcm9wZG93bnMsIGVsID0+IHtcclxuXHJcblx0XHRcdGlmKGVsID09PSBpc0Ryb3Bkb3duKXtcclxuXHJcblx0XHRcdFx0aWYoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5jaGVja2JveC1kcm9wZG93bl9fYnRuJykpIHtcclxuXHJcblx0XHRcdFx0XHRlbC5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2JveC1kcm9wZG93bi0tb3BlbicpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2JveC1kcm9wZG93bi0tb3BlbicpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveC1kcm9wZG93bicpKTsiLCIoIGVsZW1zID0+IHtcclxuXHJcblx0aWYoIWVsZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRpZiAoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpIHtcclxuXHJcblx0XHRjb25zdCBjYWxsYmFjayA9IChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShlbnRyaWVzLCBlbnRyeSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gZW50cnkudGFyZ2V0O1xyXG5cclxuXHRcdFx0XHRcdG9ic2VydmVyLnVub2JzZXJ2ZSh0YXJnZXQpO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IHN2ZyA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcuY2lyY2xlLXByb2dyZXNzX19zdmcnKSxcclxuXHRcdFx0XHRcdFx0ICB0ZXh0ID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5jaXJjbGUtcHJvZ3Jlc3NfX3ZhbHVlJyksXHJcblx0XHRcdFx0XHRcdCAgdmFsdWUgPSBwYXJzZUludCh0ZXh0LnRleHRDb250ZW50KTtcclxuXHJcblx0XHRcdFx0XHQvLyDQsNC90LjQvNCw0YbQuNGPINC/0YDQvtCz0YDQtdGB0YHQsFxyXG5cdFx0XHRcdFx0Y29uc3QgY2lyY2xlID0gc3ZnLnF1ZXJ5U2VsZWN0b3IoJ2NpcmNsZScpLFxyXG5cdFx0XHRcdFx0XHQgIHBpMnIgPSBwYXJzZUludChjaXJjbGUuZ2V0QXR0cmlidXRlKCdyJykpICogMiAqIE1hdGguUEk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IGNvdW50ID0gMDtcclxuXHJcblx0XHRcdFx0XHRpZih2YWx1ZSA+IDApIHtcclxuXHJcblx0XHRcdFx0XHRcdHRhcmdldC5jbGFzc0xpc3QuYWRkKCdjaXJjbGUtcHJvZ3Jlc3MtLWluaXQnKTtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnN0IGlkVGltZXIgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZihjb3VudCA9PT0gdmFsdWUpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRjbGVhckludGVydmFsKGlkVGltZXIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdHRleHQudGV4dENvbnRlbnQgPSBjb3VudCsrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRjaXJjbGUuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgcGkyciAvIDEwMCAqIGNvdW50ICsgJyAnICsgcGkycik7XHJcblxyXG5cdFx0XHRcdFx0XHR9LCAxMDAwIC8gdmFsdWUpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihjYWxsYmFjayk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShlbGVtcywgZWwgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShlbCkpO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2lyY2xlLXByb2dyZXNzJykpOyIsIiggaXRlbXMgPT4ge1xyXG5cclxuXHRpZighaXRlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oaXRlbXMsIGZvcm0gPT4ge1xyXG5cclxuXHRcdGNvbnN0IGJ0biA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmRvY3Mtc3RhbmRhcnQtZm9ybV9fc3VibWl0Jyk7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBvYmplY3QgPSB7fTtcclxuXHRcdFx0bmV3IEZvcm1EYXRhKGZvcm0pLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IChvYmplY3Rba2V5XSA9IHZhbHVlKSk7XHJcblx0XHRcdG9iamVjdC50eXBlID0gXCJ1cGRhdGVcIjtcclxuXHRcdFx0Y29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KG9iamVjdCk7XHJcblxyXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZShcImFjdGlvblwiKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXHJcblx0XHRcdFx0Ym9keToganNvblxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG5cdFx0XHRcdGZvcm0ucXVlcnlTZWxlY3RvcignLmRvY3MtaXRlbV9fdGl0bGUnKS50ZXh0Q29udGVudCA9IHJlc3VsdC5uYW1lO1xyXG5cdFx0XHRcdGZvcm0ucXVlcnlTZWxlY3RvcignLmRvY3MtaXRlbV9fcHJpY2UtbnVtYmVyJykudGV4dENvbnRlbnQgPSByZXN1bHQucHJpY2U7XHJcblxyXG5cdFx0XHRcdGlmKHJlc3VsdC5idXkgPT09ICdvZmYnKSB7XHJcblxyXG5cdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1idXktb2ZmJyk7XHJcblxyXG5cdFx0XHRcdFx0bmV3IEZvcm1EYXRhKGZvcm0pLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLWdldC1wcmljZScpLmVsZW1lbnRzW2tleV07XHJcblxyXG5cdFx0XHRcdFx0XHRpZihuYW1lKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdG5hbWUudmFsdWUgPSB2YWx1ZTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWJ1eS1vZmYnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Y29uc3Qgb2JqZWN0ID0ge307XHJcblx0XHRcdG5ldyBGb3JtRGF0YShmb3JtKS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiAob2JqZWN0W2tleV0gPSB2YWx1ZSkpO1xyXG5cdFx0XHRjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkob2JqZWN0KTtcclxuXHJcblx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtbG9hZGluZycpO1xyXG5cdFx0XHRidG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0Ym9keToganNvblxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG5cdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xyXG5cdFx0XHRcdGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZS1wcm9kdWN0LWFkZC1pbi1jYXJ0JykudGV4dENvbnRlbnQgPSByZXN1bHQuYWRkUHJvZHVjdDtcclxuXHJcblx0XHRcdFx0Y29uc3QgZXZlbnRNb2RhbFNob3cgPSBuZXcgQ3VzdG9tRXZlbnQoXCJtb2RhbFNob3dcIiwge1xyXG5cdFx0XHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0XHRcdHNlbGVjdG9yOiBcImNhcnRcIlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR3aW5kb3cubW9kYWwuZGlzcGF0Y2hFdmVudChldmVudE1vZGFsU2hvdyk7XHJcblxyXG5cdFx0XHRcdGlmKHJlc3VsdC5jb3VudENhcnQgPT09IFwiMFwiKXtcclxuXHJcblx0XHRcdFx0XHRyZXN1bHQuY291bnRDYXJ0ID0gJyc7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY2FydCBhJykuc2V0QXR0cmlidXRlKCdkYXRhLWNvdW50JywgcmVzdWx0LmNvdW50Q2FydCk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG9jcy1zdGFuZGFydC1mb3JtJykpOyIsIiggZHJvcGRvd25zID0+IHtcclxuXHJcblx0aWYoIWRyb3Bkb3ducy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShkcm9wZG93bnMsIGVsID0+IHtcclxuXHJcblx0XHRpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duLXRvZ2dsZS0tdmFsdWUtaW4tYnRuJykpe1xyXG5cclxuXHRcdFx0Y29uc3QgYnRuID0gZWwucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLXRvZ2dsZV9fYnRuLXZhbHVlJyksXHJcblx0XHRcdFx0ICBpdGVtcyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bi10b2dnbGVfX3ZhbHVlJyk7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGl0ZW1zLCBpdGVtID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc3QgbGFiZWwgPSBpdGVtLnBhcmVudE5vZGUudGV4dENvbnRlbnQudHJpbSgpO1xyXG5cclxuXHRcdFx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGJ0bi50ZXh0Q29udGVudCA9IGxhYmVsO1xyXG5cclxuXHRcdFx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duLXRvZ2dsZS0tb3BlbicpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duLXRvZ2dsZS1yYWRpbycpKXtcclxuXHJcblx0XHRcdGNvbnN0IGN1cnJlbnQgPSBlbC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tdG9nZ2xlLXJhZGlvX19jdXJyZW50JyksXHJcblx0XHRcdFx0ICBpdGVtcyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bi10b2dnbGUtcmFkaW9fX2l0ZW0nKTtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oaXRlbXMsIGl0ZW0gPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zdCBsYWJlbCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLXRvZ2dsZS1yYWRpb19fbGFiZWwnKSxcclxuXHRcdFx0XHRcdCAgaW5wdXQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi10b2dnbGUtcmFkaW9fX2lucHV0JylcclxuXHJcblx0XHRcdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiBjdXJyZW50LnRleHRDb250ZW50ID0gbGFiZWwudGV4dENvbnRlbnQpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGlucHV0RmlsdGVyID0gZWwucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLXRvZ2dsZV9faW5wdXQtZmlsdGVyJyk7XHJcblxyXG5cdFx0aWYoaW5wdXRGaWx0ZXIpIHtcclxuXHJcblx0XHRcdGNvbnN0IGJvZHlNZW51ID0gZWwucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLXRvZ2dsZV9fbWVudScpLFxyXG5cdFx0XHRcdCAgYm9keU1lbnVDbG9uZSA9IGJvZHlNZW51LmNsb25lTm9kZSh0cnVlKTtcclxuXHJcblx0XHRcdGlucHV0RmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGlucHV0RmlsdGVyLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRcdGlmKHZhbHVlLmxlbmd0aCA+IDEpIHtcclxuXHJcblx0XHRcdFx0XHRsZXQgdWwgPSAnJztcclxuXHJcblx0XHRcdFx0XHRBcnJheS5mcm9tKGJvZHlNZW51Q2xvbmUucXVlcnlTZWxlY3RvckFsbCgnbGknKSwgbGkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0Y29uc3QgbGluayA9IGxpLmlubmVySFRNTCxcclxuXHRcdFx0XHRcdFx0XHQgIGNhdGVnb3J5ID0gbGkudGV4dENvbnRlbnQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZihjYXRlZ29yeS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpe1xyXG5cclxuXHRcdFx0XHRcdFx0XHR1bCArPSAnPGxpPicgKyBsaW5rICsgJzwvbGk+JztcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRpZih1bC5sZW5ndGgpIHtcclxuXHJcblx0XHRcdFx0XHRcdGJvZHlNZW51LmlubmVySFRNTCA9IHVsO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRib2R5TWVudS5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJkcm9wZG93bi10b2dnbGVfX2xpbmtcIj4nICsgaW5wdXRGaWx0ZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWVtcHR5JykgKyAnPC9zcGFuPic7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdGJvZHlNZW51LmlubmVySFRNTCA9IGJvZHlNZW51Q2xvbmUuaW5uZXJIVE1MO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCBpc0Ryb3Bkb3duID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kcm9wZG93bi10b2dnbGUnKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGRyb3Bkb3ducywgZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGRvd24tdG9nZ2xlLS1vcGVuJywgZWwgPT09IGlzRHJvcGRvd24gJiYgaXNEcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duLXRvZ2dsZS0tb3BlbicpID09PSBmYWxzZSkpO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bi10b2dnbGUnKSk7IiwiKCBpdGVtcyA9PiB7XHJcblxyXG5cdGlmKCFpdGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgcmVzdWx0SFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXItcmVzdWx0Jyk7XHJcblxyXG5cdGNvbnN0IHN1Ym1pdCA9IGZvcm0gPT4ge1xyXG5cclxuXHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHR9KVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuaHRtbCgpKVxyXG5cdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG5cdFx0XHRyZXN1bHRIVE1MLmlubmVySFRNTCA9IHJlc3VsdDtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fTtcclxuXHJcblx0QXJyYXkuZnJvbShpdGVtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRuID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19zdWJtaXQnKTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgKCkgPT4ge1xyXG5cclxuXHRcdFx0YnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdHN1Ym1pdChmb3JtKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcclxuXHJcblx0XHRcdGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpbHRlcl9fdGFnJykpIHtcclxuXHJcblx0XHRcdFx0Y29uc3QgaXRlbSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZmlsdGVyLXRhZ3NfX2l0ZW0nKTtcclxuXHJcblx0XHRcdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKElOVEkuY3NzQW5pbWF0aW9uKCd0cmFuc2l0aW9uJyksICgpPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmKGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcl9fdGFnJykubGVuZ3RoID09PSAxKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpdGVtLmNsb3Nlc3QoJy5maWx0ZXJfX2l0ZW0nKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGl0ZW0ucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLXJlbW92ZScpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3VibWl0KGZvcm0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0c3VibWl0KGZvcm0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIG1lbnUgdGFzZ1xyXG5cclxuXHRcdGNvbnN0IGJveFRhZ3MgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItdGFncycpO1xyXG5cclxuXHRcdGlmKGJveFRhZ3MpIHtcclxuXHJcblx0XHRcdGNvbnN0IHRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS10YWdzX190YWdbZGF0YS12YWx1ZV0nKSxcclxuXHRcdFx0XHQgIHRlbXBsYXRlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyLXRhZ3MtdGVtcGxhdGUnKS5pbm5lckhUTUw7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKHRhZ3MsIGxpbmsgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zdCBsYWJlbCA9IGxpbmsudGV4dENvbnRlbnQudHJpbSgpLFxyXG5cdFx0XHRcdFx0ICB2YWx1ZSA9IGxpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XHJcblxyXG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0XHRsZXQgYXBwZW5kID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0XHRBcnJheS5mcm9tKGJveFRhZ3MucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSwgaW5wdXQgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYoIGlucHV0LnZhbHVlID09PSB2YWx1ZSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRhcHBlbmQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRpZihhcHBlbmQpIHtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnN0IGNoZWNrYm94ID0gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLCB7IGxhYmVsLCB2YWx1ZSB9KTtcclxuXHJcblx0XHRcdFx0XHRcdGJveFRhZ3MuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBjaGVja2JveCk7XHJcblxyXG5cdFx0XHRcdFx0XHRzdWJtaXQoZm9ybSk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyJykpO1xyXG5cclxuLy8gYnRtIHRvZ2dsZSBmaWx0ZXIgaW4gdGFibGV0fG1vYmlsZVxyXG5cclxuKCBidG5zID0+IHtcclxuXHJcblx0aWYoYnRucy5sZW5ndGgpIHtcclxuXHJcblx0XHRBcnJheS5mcm9tKGJ0bnMsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZmlsdGVyLXNob3cnKSk7XHJcblxyXG5cdFx0fSlcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1vcGVuLWZpbHRlciwgLnNlYXJjaC1tZW51X190b2dnbGUtZmlsdGVyJykpO1xyXG5cclxuXHJcbi8vIGZpbHRlci1zb3J0LXRyaWdnZXJcclxuXHJcbiggZm9ybSA9PiB7XHJcblxyXG5cdGlmKGZvcm0ubGVuZ3RoKSB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShmb3JtLCBmb3JtID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgZm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcblxyXG5cdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xyXG5cdFx0XHRcdGZpbHRlci5lbGVtZW50cy5zb3J0LnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cdFx0XHRcdGZpbHRlci5lbGVtZW50cy5zb3J0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHRcdFx0XHRmaWx0ZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSlcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlci1zb3J0LXRyaWdnZXInKSk7IiwiKCBpdGVtcyA9PiB7XHJcblxyXG5cdGlmKCFpdGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShpdGVtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgcmVzdWx0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBmb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS1yZXN1bHQnKSk7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBvYmplY3QgPSB7fTtcclxuXHRcdFx0bmV3IEZvcm1EYXRhKGZvcm0pLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IChvYmplY3Rba2V5XSA9IHZhbHVlKSk7XHJcblx0XHRcdGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShvYmplY3QpO1xyXG5cclxuXHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiksIHtcclxuXHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxyXG5cdFx0XHRcdGJvZHk6IGpzb25cclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuaHRtbCgpKVxyXG5cdFx0XHQudGhlbihyZXN1bHQgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuXHRcdFx0XHRyZXN1bHRDb250YWluZXIuaW5uZXJIVE1MID0gcmVzdWx0O1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0taHRtbCcpKTsiLCIoIGl0ZW1zID0+IHtcclxuXHJcblx0aWYoIWl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGl0ZW1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRjb25zdCBpdGVtID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1yZXF1aXJlZF9faXRlbScpLFxyXG5cdFx0XHQgIHN1Ym1pdCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0tcmVxdWlyZWRfX3N1Ym1pdCcpO1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgZmFsaWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShpdGVtLCBlbCA9PiB7XHJcblxyXG5cdFx0XHRcdGlmKGVsLnZhbHVlID09PSAnbm9uZScpIHtcclxuXHJcblx0XHRcdFx0XHRmYWxpZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmKGZhbGlkKSB7XHJcblxyXG5cdFx0XHRcdHN1Ym1pdC5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLXJlcXVpcmVkJykpOyIsIiggaXRlbXMgPT4ge1xyXG5cclxuXHRpZighaXRlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oaXRlbXMsIGZvcm0gPT4ge1xyXG5cclxuXHRcdGNvbnN0IGJ0biA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm1fX3N1Ym1pdCcpO1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtbG9hZGluZycpO1xyXG5cdFx0XHRidG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcblx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XHJcblx0XHRcdFx0YnRuLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdGlmKHJlc3VsdC5tc2cpIHtcclxuXHJcblx0XHRcdFx0XHRmb3JtLnJlc2V0KCk7XHJcblxyXG5cdFx0XHRcdFx0bW9kYWwub2socmVzdWx0Lm1zZy50aXRsZSwgcmVzdWx0Lm1zZy50ZXh0KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8g0YDQtdC30YPQu9GM0YLQsNGCINGD0YHQv9C10YXQsCDQt9Cw0Y/QstC60LggcXVhbGl0eVxyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQubW9kYWwgPT09ICdxdWFsaXR5LW9rJykge1xyXG5cclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWFsaXR5LXJlc3VsdF9fbnVtYmVyJykudGV4dENvbnRlbnQgPSByZXN1bHQubnVtYmVyO1xyXG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1YWxpdHktcmVzdWx0X19wcm9kdWN0JykudGV4dENvbnRlbnQgPSByZXN1bHQucHJvZHVjdE5hbWU7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVhbGl0eS1yZXN1bHRfX3Byb2R1Y3QnKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnLCByZXN1bHQucHJvZHVjdExpbmspO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGV2ZW50TW9kYWxTaG93ID0gbmV3IEN1c3RvbUV2ZW50KFwibW9kYWxTaG93XCIsIHtcclxuXHRcdFx0XHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0XHRcdFx0c2VsZWN0b3I6IHJlc3VsdC5tb2RhbFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR3aW5kb3cubW9kYWwuZGlzcGF0Y2hFdmVudChldmVudE1vZGFsU2hvdyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHQvLyBsb2dpblxyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQudHlwZSA9PT0gJ2Vycm9yJykge1xyXG5cclxuLypcdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1YWxpdHktcmVzdWx0X19udW1iZXInKS50ZXh0Q29udGVudCA9IHJlc3VsdC5udW1iZXI7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVhbGl0eS1yZXN1bHRfX3Byb2R1Y3QnKS50ZXh0Q29udGVudCA9IHJlc3VsdC5wcm9kdWN0TmFtZTtcclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWFsaXR5LXJlc3VsdF9fcHJvZHVjdCcpLmdldEF0dHJpYnV0ZSgnaHJlZicsIHJlc3VsdC5wcm9kdWN0TGluayk7Ki9cclxuLypcclxuXHRcdFx0XHRcdGNvbnN0IGV2ZW50TW9kYWxTaG93ID0gbmV3IEN1c3RvbUV2ZW50KFwibW9kYWxTaG93XCIsIHtcclxuXHRcdFx0XHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0XHRcdFx0c2VsZWN0b3I6ICdlcnJvcidcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0d2luZG93Lm1vZGFsLmRpc3BhdGNoRXZlbnQoZXZlbnRNb2RhbFNob3cpOyovXHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtJykpOyIsIiggaW1nID0+IHtcclxuXHJcblx0aWYoaW1nKSB7XHJcblxyXG5cdFx0Y29uc3QgYmlnID0gaW1nLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3X19iaWctaXRlbScpO1xyXG5cclxuXHRcdGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGlmKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc3dpcGVyLWdhbGxlcnktcHJldmlld19fbGluaycpKSB7XHJcblxyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdGlmKCFldmVudC50YXJnZXQuY2xvc2VzdCgnLnN3aXBlci1jb250YWluZXItc3R5bGUnKSl7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgaXRlbSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc3dpcGVyLWdhbGxlcnktcHJldmlld19faXRlbScpO1xyXG5cclxuXHRcdFx0XHRcdEFycmF5LmZyb20oaW1nLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3X19pdGVtJyksIChlbCxpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtY3VycmVudCcsIGl0ZW0gPT09IGVsKTtcclxuXHRcdFx0XHRcdFx0YmlnW2luZGV4XS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgaXRlbSAhPT0gZWwpO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3JykpOyIsIiggZWxlbXMgPT4ge1xyXG5cclxuXHRpZighZWxlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGlmICgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xyXG5cclxuXHRcdGNvbnN0IGNhbGxiYWNrID0gKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGVudHJpZXMsIGVudHJ5ID0+IHtcclxuXHJcblx0XHRcdFx0aWYoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSBlbnRyeS50YXJnZXQ7XHJcblxyXG5cdFx0XHRcdFx0b2JzZXJ2ZXIudW5vYnNlcnZlKHRhcmdldCk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgYmFyID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5saW5lLXByb2dyZXNzX19iYXInKSxcclxuXHRcdFx0XHRcdFx0ICB0ZXh0ID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5saW5lLXByb2dyZXNzX192YWx1ZScpLFxyXG5cdFx0XHRcdFx0XHQgIHZhbHVlID0gcGFyc2VJbnQodGV4dC50ZXh0Q29udGVudCk7XHJcblxyXG5cdFx0XHRcdFx0Ly8g0LDQvdC40LzQsNGG0LjRjyDQv9GA0L7Qs9GA0LXRgdGB0LBcclxuXHRcdFx0XHRcdGxldCBjb3VudCA9IDA7XHJcblxyXG5cdFx0XHRcdFx0aWYodmFsdWUgPiAwKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR0YXJnZXQuY2xhc3NMaXN0LmFkZCgnbGluZS1wcm9ncmVzcy0taW5pdCcpO1xyXG5cclxuXHRcdFx0XHRcdFx0Y29uc3QgaWRUaW1lciA9IHNldEludGVydmFsKCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmKGNvdW50ID09PSB2YWx1ZSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoaWRUaW1lcik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0YmFyLnN0eWxlLndpZHRoID0gY291bnQgKyAnJSc7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHRleHQudGV4dENvbnRlbnQgPSBjb3VudCsrO1xyXG5cclxuXHRcdFx0XHRcdFx0fSwgMTAwMCAvIHZhbHVlKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xyXG5cclxuXHRcdEFycmF5LmZyb20oZWxlbXMsIGVsID0+IG9ic2VydmVyLm9ic2VydmUoZWwpKTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmUtcHJvZ3Jlc3MnKSk7IiwiKCBmb3JtcyA9PiB7XHJcblxyXG5cdGlmKCFmb3Jtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShmb3JtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5saXZlLXNlYXJjaF9faW5wdXQnKSxcclxuXHRcdFx0ICByZXN1bHQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5saXZlLXNlYXJjaF9fcmVzdWx0Jyk7XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRpZihpbnB1dC52YWx1ZS5sZW5ndGggPiAyICYmIGV2ZW50LmtleSAhPT0gJ2VudGVyJyl7XHJcblxyXG5cdFx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnbGl2ZS1zZWFyY2gtLWxvYWRpbmcnLCAnbGl2ZS1zZWFyY2gtLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG5cdFx0XHRcdC50aGVuKGh0bWwgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGh0bWwpO1xyXG5cclxuXHRcdFx0XHRcdHJlc3VsdC5pbm5lckhUTUwgPSBodG1sO1xyXG5cdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdsaXZlLXNlYXJjaC0tbG9hZGluZycpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINGB0LrRgNGL0YLRjCDRgNGD0LfQtdC70YzRgtCw0YLRiyDQv9GA0Lgg0LrQu9C40LrQtSDQstC90LUg0YTQvtGA0LzRi1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCBpc0Zvcm0gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmxpdmUtc2VhcmNoJyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShmb3JtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0XHRpZihpc0Zvcm0gIT09IGZvcm0pIHtcclxuXHJcblx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdsaXZlLXNlYXJjaC0tb3BlbicpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXZlLXNlYXJjaCcpKTsiLCIoIGVsZW1zID0+IHtcclxuXHJcblx0aWYoIWVsZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHRzY3JpcHQuc3JjID0gJy9qcy9pbnB1dG1hc2subWluLmpzJztcclxuXHRzY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG5cclxuXHRcdEFycmF5LmZyb20oZWxlbXMsIGVsID0+IHtcclxuXHJcblx0XHRcdGxldCBtYXNrSW5wdXQ7XHJcblxyXG5cdFx0XHRpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0bWFzay0tcGhvbmUnKSkge1xyXG5cclxuXHRcdFx0XHRtYXNrSW5wdXQgPSBuZXcgSW5wdXRtYXNrKHtcclxuXHRcdFx0XHRcdG1hc2s6IFwiWys3XXw4LTk5OS05OTktOTktOTlcIixcclxuXHRcdFx0XHRcdHNob3dNYXNrT25Ib3ZlcjogZmFsc2VcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1hc2tJbnB1dC5tYXNrKGVsKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fTtcclxuXHJcblx0c2V0VGltZW91dCggKCkgPT4gZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpLCBDb29raWVzLmdldCgnZmFzdExvYWRTY3JpcHQnKSA/IDAgOiAxMDAwMCk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXRtYXNrJykpOyIsIi8vIGJ0biB0b2dnbGVcclxuXHJcbiggYnRuID0+IHtcclxuXHJcblx0aWYoYnRuKSB7XHJcblxyXG5cdFx0bGV0IHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZihkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnbWVudS1zaG93JykpIHtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXNob3cnKTtcclxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCx3aW5kb3dTY3JvbGwpO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21lbnUtc2hvdycpO1xyXG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLW1lbnUtdG9nZ2xlJykpO1xyXG5cclxuLy8gbWVudS10YWdzXHJcblxyXG4oIGJ0bnMgPT4ge1xyXG5cclxuXHRpZihidG5zLmxlbmd0aCkge1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgaXNCdG4gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1lbnUtdGFnc19fYnRuJyk7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGJ0bnMsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRcdGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnLCBidG4gPT09IGlzQnRuICYmIGlzQnRuLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykgPT09IGZhbHNlKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYoaXNCdG4pIHtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdmaWx0ZXItc2hvdycpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS10YWdzX19idG4nKSk7IiwiKCBpdGVtcyA9PiB7XHJcblxyXG5cdGlmKGl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdEFycmF5LmZyb20oaXRlbXMsIGxpbmsgPT4ge1xyXG5cclxuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0Y29uc3Qgc3JjID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXBob3RvJykuaW5uZXJIVE1MID0gJzxpbWcgc3JjPVwiJyArIHNyYyArICdcIj4nO1xyXG5cclxuXHRcdFx0XHRjb25zdCBldmVudE1vZGFsU2hvdyA9IG5ldyBDdXN0b21FdmVudChcIm1vZGFsU2hvd1wiLCB7XHJcblx0XHRcdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRcdFx0c2VsZWN0b3I6IFwicGhvdG9cIlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR3aW5kb3cubW9kYWwuZGlzcGF0Y2hFdmVudChldmVudE1vZGFsU2hvdyk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWltZycpKTsiLCIoIG1vZGFsID0+IHtcclxuXHJcblx0aWYoIW1vZGFsKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19pdGVtJyksXHJcblx0XHQgIGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbF0nKSxcclxuXHRcdCAgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XHJcblxyXG5cdGxldCBhY3RpdmVNb2RhbCA9IG51bGwsXHJcblx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUnLCAoKSA9PiB7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1zaG93Jyk7XHJcblx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IDA7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCx3aW5kb3dTY3JvbGwpO1xyXG5cdFx0YWN0aXZlTW9kYWwgPSBmYWxzZTtcclxuXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IG1vZGFsU2hvdyA9IHNlbGVjdG9yID0+IHtcclxuXHJcblx0XHRpZighYWN0aXZlTW9kYWwpe1xyXG5cclxuXHRcdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRhY3RpdmVNb2RhbCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tJyArIHNlbGVjdG9yKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGl0ZW1zLCBlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCd2aXN1YWxseWhpZGRlbicsIGVsICE9PSBhY3RpdmVNb2RhbCkpO1xyXG5cclxuXHRcdHdyYXBwZXIuc3R5bGUudG9wID0gLXdpbmRvd1Njcm9sbCArICdweCc7XHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXNob3cnKTtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG5cclxuXHRcdGFjdGl2ZU1vZGFsLmZvY3VzKCk7XHJcblxyXG5cdH07XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsJykgfHwgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbF9fY2xvc2UnKSl7XHJcblxyXG5cdFx0XHRpZihldmVudC50YXJnZXQuY2xvc2VzdCgnW2RhdGEtbW9kYWxdJykgPT09IG51bGwpIHtcclxuXHJcblx0XHRcdFx0bW9kYWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJoaWRlXCIpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRBcnJheS5mcm9tKGJ0bnMsIGJ0biA9PlxyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cclxuXHRcdFx0bW9kYWxTaG93KGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwnKSkpKTtcclxuXHJcblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignbW9kYWxTaG93JywgZXZlbnQgPT4gbW9kYWxTaG93KGV2ZW50LmRldGFpbC5zZWxlY3RvcikpO1xyXG5cclxuXHRtb2RhbC5vayA9ICh0aXRsZSwgdGV4dCwgbW9kID0gJycpID0+IHtcclxuXHJcblx0XHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLW9rJykuc2V0QXR0cmlidXRlKCdkYXRhLW1vZCcsIG1vZCk7XHJcblx0XHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLW9rIC5tb2RhbC1taW5pX190aXRsZScpLmlubmVySFRNTCA9IHRpdGxlID8gdGl0bGUgOiAnJztcclxuXHRcdG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tb2sgLm1vZGFsLW1pbmlfX3RleHQnKS5pbm5lckhUTUwgPSB0ZXh0ID8gdGV4dCA6ICcnO1xyXG5cdFx0bW9kYWxTaG93KCdvaycpO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKSk7IiwiKCBwcm9kdWN0ID0+IHtcclxuXHJcblx0aWYoIXByb2R1Y3QpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgbGlua0JhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZC1iYWNrIC5saW5rJyksXHJcblx0XHQgIHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdF9fdGFiJyk7XHJcblxyXG5cdGNvbnN0IGluaXRpYWwgPSB0YWI9PiB7XHJcblxyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RfX2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1pbml0aWFsJywgdGFiID09PSAnbWFpbicpO1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RfX2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1sb2NrJywgdGFiID09PSAnbG9jaycpO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGhpc3RvcnlCYWNrID0gZXZlbnQ9PiB7XHJcblxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRoaXN0b3J5LmJhY2soKTtcclxuXHJcblx0fVxyXG5cclxuXHRpZihkb2N1bWVudC5yZWZlcnJlci5pbmRleE9mKGxvY2F0aW9uLmhvc3RuYW1lKSA+IDApIHtcclxuXHJcblx0XHRsaW5rQmFjay5vbmNsaWNrID0gaGlzdG9yeUJhY2s7XHJcblxyXG5cdH1cclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaGFzaCA9IGxvY2F0aW9uLmhhc2gsXHJcblx0XHRcdCAgbW9kVGFiID0gaGFzaCA9PT0gJycgPyAnbWFpbicgOiBoYXNoLnNsaWNlKDEpLFxyXG5cdFx0XHQgIG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9fdGFiLS0nICsgbW9kVGFiKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKHRhYnMsIHRhYiA9PiB0YWIuY2xhc3NMaXN0LnRvZ2dsZSgndmlzdWFsbHloaWRkZW4nLCBuZXh0ICE9PSB0YWIpKTtcclxuXHJcblx0XHRpZihsaW5rQmFjay5vbmNsaWNrID09PSBudWxsKSB7XHJcblxyXG5cdFx0XHRsaW5rQmFjay5vbmNsaWNrID0gaGlzdG9yeUJhY2s7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJykpe1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd2aWRlbycpLCB2aWRlbyA9PiB2aWRlby5wYXVzZSgpKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aW5pdGlhbChtb2RUYWIpO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0JykpOyIsIiggZWxlbXMgPT4ge1xyXG5cclxuXHRpZighZWxlbXMpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0aWYgKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XHJcblxyXG5cdFx0Y29uc3QgY2FsbGJhY2sgPSAoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oZW50cmllcywgZW50cnkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZihlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IHRhcmdldCA9IGVudHJ5LnRhcmdldDtcclxuXHJcblx0XHRcdFx0XHRvYnNlcnZlci51bm9ic2VydmUodGFyZ2V0KTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXHJcblx0XHRcdFx0XHRcdCAgdGV4dCA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcucmV2aWV3LXN0YXRfX2RldGFpbHMtdmFsdWUnKSxcclxuXHRcdFx0XHRcdFx0ICB2YWx1ZSA9IHBhcnNlRmxvYXQodGV4dC50ZXh0Q29udGVudCkgKiAyMDsgLy8gNS4wIG1heCwg0LTQu9GPIDEwMCUg0YPQvNC90L7QttCw0LXQvCDQvdCwIDIwXHJcblxyXG5cdFx0XHRcdFx0YmFyLmNsYXNzTmFtZSA9ICdyZXZpZXctc3RhdF9fZGV0YWlscy1wcm9ncmVzcyc7XHJcblx0XHRcdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoYmFyKTtcclxuXHJcblx0XHRcdFx0XHQvLyDQsNC90LjQvNCw0YbQuNGPINC/0YDQvtCz0YDQtdGB0YHQsFxyXG5cdFx0XHRcdFx0bGV0IGNvdW50ID0gMDtcclxuXHJcblx0XHRcdFx0XHRpZih2YWx1ZSA+IDApIHtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnN0IGlkVGltZXIgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRjb3VudCsrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZihjb3VudCA9PT0gdmFsdWUpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRjbGVhckludGVydmFsKGlkVGltZXIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdGJhci5zdHlsZS53aWR0aCA9IGNvdW50ICsgJyUnO1xyXG5cclxuXHRcdFx0XHRcdFx0fSwgMTAwMCAvIHZhbHVlKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xyXG5cclxuXHRcdEFycmF5LmZyb20oZWxlbXMucXVlcnlTZWxlY3RvckFsbCgnLnJldmlldy1zdGF0X19kZXRhaWxzLXJvdycpLCBlbCA9PiBvYnNlcnZlci5vYnNlcnZlKGVsKSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXZpZXctc3RhdF9fZGV0YWlscycpKTsiLCIoIGl0ZW1zID0+IHtcclxuXHJcblx0aWYoIWl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGl0ZW1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRBcnJheS5mcm9tKGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLXJldmlld19fY29udHJvbCcpLCBidG4gPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdmFsdWUgPSBidG4ucXVlcnlTZWxlY3RvcignLm1vZGFsLXJldmlld19fdmFsdWUnKSxcclxuXHRcdFx0XHQgIHN0YXJzID0gYnRuLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1yZXZpZXdfX2lucHV0Jyk7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKHN0YXJzLCBpbnB1dCA9PiB7XHJcblxyXG5cdFx0XHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHZhbHVlLnRleHRDb250ZW50ID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXInKSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtcmV2aWV3JykpOyIsIiggZm9ybXMgPT4ge1xyXG5cclxuXHRpZighZm9ybXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oZm9ybXMsIGVsZW0gPT4ge1xyXG5cclxuXHRcdGNvbnN0IGZvcm0gPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbWVudV9fZm9ybScpLFxyXG5cdFx0XHQgIGlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuaW5wdXQnKSxcclxuXHRcdFx0ICBidG5Ub2dnbGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbWVudV9fdG9nZ2xlLW1lbnUnKTtcclxuXHJcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IGVsZW0uY2xhc3NMaXN0LmFkZCgnaXMtZm9ybS1vbmx5JykpO1xyXG5cclxuXHRcdGJ0blRvZ2dsZSAmJiBidG5Ub2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuXHJcblx0XHRcdGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZnVsbCcpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRpZihldmVudC50YXJnZXQuY2xvc2VzdCgnLnNlYXJjaC1tZW51X19mb3JtJykgPT09IG51bGwpIHtcclxuXHJcblx0XHRcdFx0ZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1mb3JtLW9ubHknKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VhcmNoLW1lbnUnKSk7Iiwid2luZG93LnNlbGVjdHMgPSBzZWxlY3QgPT4ge1xyXG5cclxuXHRpZihzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fbGlzdCcpKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHQgIGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuXHRhcnJvdy5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk04LjMgMTAuM2ExIDEgMCAwMDAgMS40MWwyLjkzIDIuOTdjLjIyLjIxLjUuMzIuNzguMzJzLjU2LS4xLjc3LS4zMmwyLjkzLTIuOTZhMS4wMSAxLjAxIDAgMDAtLjMyLTEuNjMuOTkuOTkgMCAwMC0xLjA5LjIxTDEyIDEyLjYybC0yLjMtMi4zM2ExIDEgMCAwMC0xLjQgMHpcIi8+PC9zdmc+JztcclxuXHJcblx0dmFsdWUuY2xhc3NOYW1lID0gJ3NlbGVjdF9fdmFsdWUnO1xyXG5cdHZhbHVlLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cInNlbGVjdF9fdmFsdWUtaW5uZXJcIj48L3NwYW4+JztcclxuXHJcblx0dmFsdWUuYXBwZW5kQ2hpbGQoYXJyb3cpO1xyXG5cdHNlbGVjdC5hcHBlbmRDaGlsZCh2YWx1ZSk7XHJcblxyXG5cdGNvbnN0IGZvcm0gPSBzZWxlY3QuY2xvc2VzdCgnZm9ybScpLFxyXG5cdFx0Y29udHJvbCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcclxuXHRcdG9wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKSxcclxuXHRcdHZhbHVlVGV4dCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X192YWx1ZS1pbm5lcicpLFxyXG5cdFx0bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRsaXN0LmNsYXNzTmFtZSA9ICdzZWxlY3RfX2xpc3QnO1xyXG5cclxuXHRsZXQgc2VsZWN0ZWQgPSBjb250cm9sLnF1ZXJ5U2VsZWN0b3IoJ1t2YWx1ZT1cIicgKyBjb250cm9sLnZhbHVlICsgJ1wiXScpO1xyXG5cclxuXHRjb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHNlbGVjdGVkID0gY29udHJvbC5xdWVyeVNlbGVjdG9yKCdbdmFsdWU9XCInICsgY29udHJvbC52YWx1ZSArICdcIl0nKTtcclxuXHJcblx0XHR2YWx1ZVRleHQudGV4dENvbnRlbnQgPSBzZWxlY3RlZC50ZXh0Q29udGVudDtcclxuXHJcblx0XHRzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0LS1kZWZhdWx0Jyk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB2YWx1ZURlZmF1bHQgPSBzZWxlY3RlZC50ZXh0Q29udGVudDtcclxuXHJcblx0aWYoY29udHJvbC5kaXNhYmxlZCl7XHJcblxyXG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC0tZGlzYWJsZWQnKTtcclxuXHJcblx0fVxyXG5cclxuXHRpZihjb250cm9sLnZhbHVlID09PSAnbm9uZScgfHwgY29udHJvbC52YWx1ZSA9PT0gJycpe1xyXG5cclxuXHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtLWRlZmF1bHQnKTtcclxuXHJcblx0fVxyXG5cclxuXHR2YWx1ZVRleHQudGV4dENvbnRlbnQgPSBzZWxlY3QucXVlcnlTZWxlY3Rvcignb3B0aW9uW3ZhbHVlPVwiJyArIGNvbnRyb2wudmFsdWUgKyAnXCJdJykudGV4dENvbnRlbnQ7XHJcblxyXG5cdEFycmF5LmZyb20ob3B0aW9uLCBlbCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuXHRcdG8uY2xhc3NOYW1lID0gJ2J1dHRvbiBzZWxlY3RfX2xpc3QtaXRlbSc7XHJcblxyXG5cdFx0by5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcblx0XHRvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBlbC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpO1xyXG5cclxuXHRcdG8udGV4dENvbnRlbnQgPSBlbC50ZXh0Q29udGVudDtcclxuXHJcblx0XHRsaXN0LmFwcGVuZENoaWxkKG8pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0c2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0X19saXN0LWl0ZW0nKSl7XHJcblxyXG5cdFx0XHRjb250cm9sLnZhbHVlID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxuXHJcblx0XHRcdGNvbnRyb2wuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdFx0aWYoZm9ybSkge1xyXG5cclxuXHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRzZWxlY3QuYXBwZW5kQ2hpbGQobGlzdCk7XHJcblxyXG5cdGZvcm0gJiYgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwicmVzZXRcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtLWRlZmF1bHQnKTtcclxuXHRcdHZhbHVlVGV4dC50ZXh0Q29udGVudCA9IHZhbHVlRGVmYXVsdDtcclxuXHJcblx0fSk7XHJcblxyXG59O1xyXG5cclxuKCAoKSA9PiB7XHJcblxyXG5cdHdpbmRvdy5zZWxlY3RzQ29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QnKTtcclxuXHJcblx0aWYod2luZG93LnNlbGVjdHNDb2xsZWN0aW9uLmxlbmd0aCkge1xyXG5cclxuXHRcdEFycmF5LmZyb20od2luZG93LnNlbGVjdHNDb2xsZWN0aW9uLCBzZWxlY3QgPT4gd2luZG93LnNlbGVjdHMoc2VsZWN0KSk7XHJcblxyXG5cdH1cclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaXNTZWxlY3QgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNlbGVjdCcpO1xyXG5cclxuXHRcdEFycmF5LmZyb20od2luZG93LnNlbGVjdHNDb2xsZWN0aW9uLCBzZWxlY3QgPT4ge1xyXG5cclxuXHRcdFx0c2VsZWN0LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdC0tb3BlbicsIHNlbGVjdCA9PT0gaXNTZWxlY3QgJiYgaXNTZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3QtLW9wZW4nKSA9PT0gZmFsc2UpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKCk7IiwiKCBzbGlkZXJzID0+IHtcclxuXHJcblx0aWYoIXNsaWRlcnMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IG5vVWlTbGlkZXJJbml0ID0gKCkgPT4ge1xyXG5cclxuXHRcdEFycmF5LmZyb20oc2xpZGVycywgc2xpZGVyID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHRyYWNrID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3RyYWNrJyksXHJcblx0XHRcdFx0ICBmb3JtID0gc2xpZGVyLmNsb3Nlc3QoJ2Zvcm0nKSxcclxuXHRcdFx0XHQgIG1pbklucHV0ID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX21pbicpLFxyXG5cdFx0XHRcdCAgbWF4SW5wdXQgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fbWF4JyksXHJcblx0XHRcdFx0ICBtaW4gICA9IHBhcnNlSW50KHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWluJykpLFxyXG5cdFx0XHRcdCAgbWF4ICAgPSBwYXJzZUludChzbGlkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLW1heCcpKSxcclxuXHRcdFx0XHQgIHN0ZXAgID0gcGFyc2VJbnQoc2xpZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGVwJykpO1xyXG5cclxuXHRcdFx0bm9VaVNsaWRlci5jcmVhdGUodHJhY2ssIHtcclxuXHRcdFx0XHRzdGFydDogW21pbixtYXhdLFxyXG5cdFx0XHRcdHN0ZXA6IHN0ZXAsXHJcblx0XHRcdFx0Y29ubmVjdDogdHJ1ZSxcclxuXHRcdFx0XHRyYW5nZToge1xyXG5cdFx0XHRcdFx0J21pbic6IG1pbixcclxuXHRcdFx0XHRcdCdtYXgnOiBtYXhcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dHJhY2subm9VaVNsaWRlci5vbignc2xpZGUnLCB2YWx1ZXMgPT4ge1xyXG5cclxuXHRcdFx0XHRtaW5JbnB1dC52YWx1ZSA9IHBhcnNlSW50KHZhbHVlc1swXSk7XHJcblx0XHRcdFx0bWF4SW5wdXQudmFsdWUgPSBwYXJzZUludCh2YWx1ZXNbMV0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0cmFjay5ub1VpU2xpZGVyLm9uKCdlbmQnLCB2YWx1ZXMgPT4ge1xyXG5cclxuXHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKFwicmVzZXRcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHR0cmFjay5ub1VpU2xpZGVyLnNldChbbWluLG1heF0pO1xyXG5cclxuXHRcdFx0XHRtaW5JbnB1dC52YWx1ZSA9IG1pbjtcclxuXHRcdFx0XHRtYXhJbnB1dC52YWx1ZSA9IG1heDtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRpZihldmVudC50YXJnZXQgPT09IG1heElucHV0IHx8IGV2ZW50LnRhcmdldCA9PT0gbWluSW5wdXQpIHtcclxuXHJcblx0XHRcdFx0XHR0cmFjay5ub1VpU2xpZGVyLnNldChbcGFyc2VJbnQobWluSW5wdXQudmFsdWUpLHBhcnNlSW50KG1heElucHV0LnZhbHVlKV0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdG1heElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4gbWF4SW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UoMCw5OSkpO1xyXG5cdFx0XHRtaW5JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IG1pbklucHV0LnNldFNlbGVjdGlvblJhbmdlKDAsOTkpKTtcclxuXHJcblx0XHRcdGlmKG1pbiAhPT0gcGFyc2VJbnQobWluSW5wdXQudmFsdWUpIHx8IG1heCAhPT0gcGFyc2VJbnQobWF4SW5wdXQudmFsdWUpKSB7XHJcblxyXG5cdFx0XHRcdHRyYWNrLm5vVWlTbGlkZXIuc2V0KFtwYXJzZUludChtaW5JbnB1dC52YWx1ZSkscGFyc2VJbnQobWF4SW5wdXQudmFsdWUpXSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8vIGxvYWRcclxuXHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHRzY3JpcHQuc3JjID0gJy9qcy9ub3Vpc2xpZGVyLm1pbi5qcyc7XHJcblx0c2NyaXB0Lm9ubG9hZCA9ICgpID0+IG5vVWlTbGlkZXJJbml0KCk7XHJcblx0c2V0VGltZW91dCggKCkgPT4gZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpLCBDb29raWVzLmdldCgnZmFzdExvYWRTY3JpcHQnKSA/IDAgOiAxMDAwMCk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyJykpOyIsIiggc3dpcGVyQ29udGFpbmVyID0+IHtcclxuXHJcblx0aWYoIXN3aXBlckNvbnRhaW5lci5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShzd2lwZXJDb250YWluZXIsIHN3aXBlID0+IHtcclxuXHJcblx0XHRsZXQgbXlTd2lwZSA9IG51bGwsXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gbnVsbCxcclxuXHRcdFx0cmVzZXRTd2lwZSA9IG51bGw7XHJcblxyXG5cdFx0Y29uc3Qgc3dpcGVDb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0XHQgIHN3aXBlTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRcdCAgc3dpcGVCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRcdCAgc3dpcGVOZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcblx0XHRcdCAgc3dpcGVQcmV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcblx0XHRcdCAgc2Nyb2xsYmFyID0gc3dpcGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLXNjcm9sbGJhcicpLFxyXG5cdFx0XHQgIGl0ZW1zID0gc3dpcGUucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1zbGlkZScpLFxyXG5cdFx0XHQgIGNvdW50ID0gaXRlbXMubGVuZ3RoLFxyXG5cdFx0XHQgIGNsaWVudHMgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWNsaWVudHMnKSxcclxuXHRcdFx0ICBwcm9kdWN0R2FsbGVyeSA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tZ2FsbGVyeScpLFxyXG5cdFx0XHQgIHByb2R1Y3RHYWxsZXJ5UHJldmlldyA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tZ2FsbGVyeS1wcmV2aWV3JyksXHJcblx0XHRcdCAgYmlsbGJvYXJkID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1iaWxsYm9hcmQnKTtcclxuXHJcblx0XHRzd2lwZU5hdi5jbGFzc05hbWUgPSAnc3dpcGVyLXBhZ2luYXRpb24nO1xyXG5cdFx0c3dpcGVDb250cm9scy5jbGFzc05hbWUgPSAnc3dpcGVyLWNvbnRyb2xzJztcclxuXHJcblx0XHRzd2lwZUJ0bnMuY2xhc3NOYW1lID0gJ3N3aXBlci1uYXZpZ2F0aW9uJztcclxuXHRcdHN3aXBlUHJldi5jbGFzc05hbWUgPSAnc3dpcGVyLWJ1dHRvbi1wcmV2IGJ1dHRvbic7XHJcblx0XHRzd2lwZU5leHQuY2xhc3NOYW1lID0gJ3N3aXBlci1idXR0b24tbmV4dCBidXR0b24nO1xyXG5cclxuXHRcdHN3aXBlUHJldi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCdQcmV2aW91cyBzbGlkZScpO1xyXG5cdFx0c3dpcGVOZXh0LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsJ05leHQgc2xpZGUnKTtcclxuXHJcblx0XHRzd2lwZVByZXYuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNOSAxMWw0LjYtNC42QS45OS45OSAwIDExMTUgNy44bC0zLjkgMy45IDMuOSAzLjlhLjk5Ljk5IDAgMDEtMS40IDEuNEw5IDEyLjQxQTEgMSAwIDAxOSAxMXpcIi8+PC9zdmc+JztcclxuXHRcdHN3aXBlTmV4dC5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xNSAxMWExIDEgMCAwMTAgMS40TDEwLjQgMTdBLjk5Ljk5IDAgMDE5IDE1LjZsMy45LTMuOUw5IDcuOGEuOTkuOTkgMCAwMTEuNC0xLjRMMTUgMTF6XCIvPjwvc3ZnPic7XHJcblxyXG5cdFx0c3dpcGVCdG5zLmFwcGVuZENoaWxkKHN3aXBlUHJldik7XHJcblx0XHRzd2lwZUJ0bnMuYXBwZW5kQ2hpbGQoc3dpcGVOZXh0KTtcclxuXHRcdHN3aXBlQ29udHJvbHMuYXBwZW5kQ2hpbGQoc3dpcGVCdG5zKTtcclxuXHRcdHN3aXBlQ29udHJvbHMuYXBwZW5kQ2hpbGQoc3dpcGVOYXYpO1xyXG5cclxuXHRcdHJlc2V0U3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZihteVN3aXBlKSB7XHJcblxyXG5cdFx0XHRcdG15U3dpcGUuZGVzdHJveShmYWxzZSx0cnVlKTtcclxuXHRcdFx0XHRteVN3aXBlID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRzd2lwZUJ0bnMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRzd2lwZUNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY2xpZW50cykge1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHRvZ2dsZVN3aXBlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly9sb29wZWRTbGlkZXMgOiAyLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldyA6ICdhdXRvJyxcclxuXHRcdFx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChwcm9kdWN0R2FsbGVyeSkge1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHRvZ2dsZVN3aXBlID0gZmFsc2U7XHJcblx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGN1cnJlbnQgPSBzd2lwZS5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLWNvdW50ZXJfX2N1cnJlbnQtc2xpZGUnKSxcclxuXHRcdFx0XHRcdCAgY2FwdGlvbiA9IHN3aXBlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnN3aXBlci1nYWxsZXJ5X19jdXJyZW50LWNhcHRpb24nKTtcclxuXHJcblx0XHRcdFx0bXlTd2lwZSA9IG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0XHRcdG5leHRFbDogc3dpcGVOZXh0LFxyXG5cdFx0XHRcdFx0XHRwcmV2RWw6IHN3aXBlUHJldlxyXG5cdFx0XHRcdFx0fSxcclxuLypcdFx0XHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRlbDogc3dpcGVOYXYsXHJcblx0XHRcdFx0XHRcdGJ1bGxldENsYXNzOiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0YnVsbGV0QWN0aXZlQ2xhc3M6ICdpcy1hY3RpdmUnXHJcblx0XHRcdFx0XHR9LCovXHJcblx0XHRcdFx0XHRvbjoge1xyXG5cdFx0XHRcdFx0XHRzbGlkZUNoYW5nZSA6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjdXJyZW50LnRleHRDb250ZW50ID0gc3dpcGUuc3dpcGVyLnJlYWxJbmRleCAlIGNvdW50ICsgMTtcclxuXHRcdFx0XHRcdFx0XHRjYXB0aW9uLmlubmVySFRNTCA9IHN3aXBlLnN3aXBlci5zbGlkZXNbc3dpcGUuc3dpcGVyLmFjdGl2ZUluZGV4XS5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLWdhbGxlcnlfX2NhcHRpb24nKS5pbm5lckhUTUw7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGJpbGxib2FyZCkge1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHRvZ2dsZVN3aXBlID0gZmFsc2U7XHJcblx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XHJcblxyXG5cdFx0XHRcdG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0XHRhdXRvcGxheToge1xyXG5cdFx0XHRcdFx0XHRkZWxheTogNTAwMFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRcdFx0ZWw6IHN3aXBlTmF2LFxyXG5cdFx0XHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdGJ1bGxldENsYXNzOiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0YnVsbGV0QWN0aXZlQ2xhc3M6ICdpcy1hY3RpdmUnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChwcm9kdWN0R2FsbGVyeVByZXZpZXcpIHtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRsZXQgaW5pdGlhbFNsaWRlID0gMCxcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXcgPSA1LFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuID0gMjA7XHJcblxyXG5cdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoc3dpcGVDb250cm9scyk7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oaXRlbXMsIChlbCxpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtY3VycmVudCcpKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpbml0aWFsU2xpZGUgPSBpbmRleDtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR0b2dnbGVTd2lwZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0XHRpZihzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLXN0eWxlLXVzZScpKXtcclxuXHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3ID0gMztcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbiA9IDA7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Y29uc3QgYm94ID0gc3dpcGUuY2xvc2VzdCgnLnN3aXBlci1nYWxsZXJ5LXByZXZpZXcnKSxcclxuXHRcdFx0XHRcdCAgYmlnID0gYm94LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3X19iaWctaXRlbScpO1xyXG5cclxuXHRcdFx0XHRuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdFx0c2xpZGVBY3RpdmVDbGFzczogJ2lzLWN1cnJlbnQnLFxyXG5cdFx0XHRcdFx0ZGlyZWN0aW9uOiAndmVydGljYWwnLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldyA6IHNsaWRlc1BlclZpZXcsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IHNwYWNlQmV0d2VlbixcclxuXHRcdFx0XHRcdHNsaWRlVG9DbGlja2VkU2xpZGU6IHRydWUsXHJcblx0XHRcdFx0XHRpbml0aWFsU2xpZGU6IGluaXRpYWxTbGlkZSxcclxuXHRcdFx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0b246IHtcclxuXHRcdFx0XHRcdFx0c2xpZGVDaGFuZ2UgOiAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdEFycmF5LmZyb20oYmlnLCAoaXRlbSxpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIHN3aXBlLnN3aXBlci5yZWFsSW5kZXggIT09IGluZGV4KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZihpdGVtLnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJykpe1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbS5xdWVyeVNlbGVjdG9yKCd2aWRlbycpLnBhdXNlKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdFx0XHQzMjA6IHtcclxuXHRcdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogOFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiBzbGlkZXNQZXJWaWV3LFxyXG5cdFx0XHRcdFx0XHRcdHNwYWNlQmV0d2Vlbjogc3BhY2VCZXR3ZWVuXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0UHViU3ViLnN1YnNjcmliZSgnd2luZG93V2lkdGhSZXNpemUnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAod2luZG93LlN3aXBlciAmJiB0b2dnbGVTd2lwZSkge1xyXG5cclxuXHRcdFx0XHR0b2dnbGVTd2lwZSgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdFB1YlN1Yi5zdWJzY3JpYmUoJ3N3aXBlckpzTG9hZCcsICgpID0+IHtcclxuXHJcblx0XHRcdHN3aXBlLmFwcGVuZENoaWxkKHN3aXBlQ29udHJvbHMpO1xyXG5cclxuXHRcdFx0Ly8gZWFnZXJcclxuXHRcdFx0QXJyYXkuZnJvbShzd2lwZS5xdWVyeVNlbGVjdG9yQWxsKCdbbG9hZGluZz1cImxhenlcIl0nKSwgaW1nID0+IGltZy5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCdlYWdlcicpKTtcclxuXHJcblx0XHRcdC8vIGhpZGVcclxuXHRcdFx0QXJyYXkuZnJvbShpdGVtcywgZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlKCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHJcblx0c2NyaXB0LnNyYyA9ICcvanMvc3dpcGVyLm1pbi5qcyc7XHJcblxyXG5cdHNjcmlwdC5vbmxvYWQgPSAoKSA9PiBQdWJTdWIucHVibGlzaCgnc3dpcGVySnNMb2FkJyk7XHJcblxyXG5cdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KSwgQ29va2llcy5nZXQoJ2Zhc3RMb2FkU2NyaXB0JykgPyAwIDogMTAwMDApO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1jb250YWluZXInKSk7IiwiKCB0YWJzID0+IHtcclxuXHJcblx0aWYoIXRhYnMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IHNldEFjdGl2ZSA9IChidG4sIGl0ZW0sIHRvZ2dsZSkgPT4ge1xyXG5cclxuXHRcdGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnLCB0b2dnbGUpO1xyXG5cdFx0aXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnLCB0b2dnbGUpO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20odGFicywgdGFiID0+IHtcclxuXHJcblx0XHRjb25zdCBidG5zID0gdGFiLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19idG4nKSxcclxuXHRcdFx0ICBpdGVtcyA9IHRhYi5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19faXRlbScpLFxyXG5cdFx0XHQgIG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0XHQgIG5hdldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblx0XHRuYXYuY2xhc3NOYW1lID0gJ3RhYnNfX25hdic7XHJcblx0XHRuYXZXcmFwLmNsYXNzTmFtZSA9ICd0YWJzX19uYXYtd3JhcCc7XHJcblx0XHRuYXZXcmFwLmFwcGVuZENoaWxkKG5hdik7XHJcblxyXG5cdFx0aWYodGFiLmNsYXNzTGlzdC5jb250YWlucygndGFicy0tbmF2JykpIHtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oYnRucywgYnRuID0+IHtcclxuXHJcblx0XHRcdFx0YnRuLnNldEF0dHJpYnV0ZSgncm9sZScsJ2J1dHRvbicpO1xyXG5cclxuXHRcdFx0XHRuYXYuYXBwZW5kQ2hpbGQoYnRuKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGFiLmluc2VydEJlZm9yZShuYXZXcmFwLCBpdGVtc1swXSk7XHJcblxyXG5cdFx0XHRzZXRBY3RpdmUoYnRuc1swXSwgaXRlbXNbMF0sIHRydWUpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRBcnJheS5mcm9tKGJ0bnMsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PlxyXG5cdFx0XHRcdEFycmF5LmZyb20oYnRucywgKF9idG4sIGluZGV4KSA9PlxyXG5cdFx0XHRcdFx0c2V0QWN0aXZlKF9idG4sIGl0ZW1zW2luZGV4XSwgX2J0biA9PT0gYnRuKSkpXHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMnKSk7IiwiKCB0b29sdGlwcyA9PiB7XHJcblxyXG5cdGlmKHRvb2x0aXBzLmxlbmd0aCl7XHJcblxyXG5cdFx0QXJyYXkuZnJvbSh0b29sdGlwcywgdG9vbHRpcCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcblx0XHRcdHRpdGxlLmNsYXNzTmFtZSA9ICd0b29sdGlwLXRpdGxlX19pbm5lcic7XHJcblxyXG5cdFx0XHR0aXRsZS50ZXh0Q29udGVudCA9IHRvb2x0aXAuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xyXG5cdFx0XHR0b29sdGlwLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHRcdFx0dG9vbHRpcC5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b29sdGlwLXRpdGxlJykpO1xyXG5cclxuKCB0b29sdGlwcyA9PiB7XHJcblxyXG5cdGlmKHRvb2x0aXBzLmxlbmd0aCl7XHJcblxyXG5cdFx0Y29uc3QgaWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuXHRcdGljby5pbm5lckhUTUwgPSAnPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMjAgMTJhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS01Ljc0LTMuODdhMy4xOCAzLjE4IDAgMDEuNTYgMy43OGMtLjM4LjctMSAxLjIyLTEuNzQgMS40OWEuNC40IDAgMDAtLjI4LjM4di42MmEuOC44IDAgMDEtMS42IDBWMTIuOEEuOC44IDAgMDExMiAxMmMuODggMCAxLjYtLjcyIDEuNi0xLjZhMS42IDEuNiAwIDAwLTMuMiAwIC44LjggMCAwMS0xLjU5LjA4bC0uMDEtLjEyYy4wMS0yIDEuODYtMy41NSAzLjk1LTMuMDcuNTcuMTMgMS4xLjQyIDEuNTEuODR6TTEyLjggMTYuOGEuOC44IDAgMTEtMS42IDAgLjguOCAwIDAxMS42IDB6XCIvPjwvc3ZnPic7XHJcblxyXG5cdFx0bGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25SZWNvcmRzID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHQgPSBtdXRhdGlvblJlY29yZHNbMF0udGFyZ2V0LFxyXG5cdFx0XHRcdCAgaW5uZXIgPSB0LnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwLWhlbHBfX2lubmVyJyk7XHJcblxyXG5cdFx0XHRpZih0Lm9wZW4pIHtcclxuXHJcblx0XHRcdFx0Y29uc3QgcmVjdCA9IGlubmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHRcdFx0XHRpZihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPCByZWN0LnJpZ2h0KSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8g0LvQtdCy0LXQtVxyXG5cclxuXHRcdFx0XHRcdGlubmVyLnN0eWxlLm1hcmdpbkxlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSByZWN0LnJpZ2h0ICsgJ3B4JztcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmKHJlY3QubGVmdCA8IDApIHtcclxuXHJcblx0XHRcdFx0XHQvLyDQv9GA0LDQstC10LVcclxuXHJcblx0XHRcdFx0XHRpbm5lci5zdHlsZS5tYXJnaW5MZWZ0ID0gLXJlY3QubGVmdCArICdweCc7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGlubmVyLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRBcnJheS5mcm9tKHRvb2x0aXBzLCB0b29sdGlwID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGJ0biA9IHRvb2x0aXAucXVlcnlTZWxlY3RvcignLnRvb2x0aXAtaGVscF9fYnRuJyk7XHJcblxyXG5cdFx0XHRidG4uYXBwZW5kQ2hpbGQoaWNvLmNsb25lTm9kZSh0cnVlKSk7XHJcblxyXG5cdFx0XHRvYnNlcnZlci5vYnNlcnZlKHRvb2x0aXAsIHtcclxuXHJcblx0XHRcdFx0YXR0cmlidXRlcyA6IHRydWVcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50b29sdGlwLWhlbHAnKTtcclxuXHJcblx0XHRcdEFycmF5LmZyb20odG9vbHRpcHMsIHRvb2x0aXAgPT4ge1xyXG5cclxuXHRcdFx0XHRpZih0YXJnZXQgIT09IHRvb2x0aXApIHtcclxuXHJcblx0XHRcdFx0XHR0b29sdGlwLm9wZW4gPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b29sdGlwLWhlbHAnKSk7Il19
