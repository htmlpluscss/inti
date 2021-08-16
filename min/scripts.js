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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50VXAubWluLmpzIiwianMuY29va2llLm1pbi5qcyIsIm11c3RhY2hlLm1pbi5qcyIsInB1YnN1Yi5taW4uanMiLCJqcy5qcyIsImFjY29yZGlvbi5qcyIsImFjY291bnQuanMiLCJjYXJ0LmpzIiwiY2hlY2tib3gtZHJvcGRvd24uanMiLCJjaXJjbGUtcHJvZ3Jlc3MuanMiLCJkb2NzLXN0YW5kYXJ0LWZvcm0uanMiLCJkcm9wZG93bi10b2dnbGUuanMiLCJmaWx0ZXIuanMiLCJmb3JtLWh0bWwuanMiLCJmb3JtLXJlcXVpcmVkLmpzIiwiZm9ybS5qcyIsImdhbGxlcnkuanMiLCJsaW5lLXByb2dyZXNzLmpzIiwibGl2ZS1zZWFyY2guanMiLCJtYXNrLmpzIiwibWVudS5qcyIsIm1vZGFsLWltZy5qcyIsIm1vZGFsLmpzIiwicHJvZHVjdC5qcyIsInJldmlldy1zdGF0LmpzIiwicmV2aWV3LmpzIiwic2VhcmNoLW1lbnUuanMiLCJzZWxlY3QuanMiLCJzbGlkZXIuanMiLCJzd2lwZXIuanMiLCJ0YWJzLmpzIiwidG9vbHRpcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQ0ZBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbihhLG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUobik6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9bihyZXF1aXJlLGV4cG9ydHMsbW9kdWxlKTphLkNvdW50VXA9bigpfSh0aGlzLGZ1bmN0aW9uKGEsbix0KXtyZXR1cm4gZnVuY3Rpb24oYSxuLHQsZSxpLHIpe3ZhciB1PXRoaXM7aWYodS52ZXJzaW9uPWZ1bmN0aW9uKCl7cmV0dXJuXCIxLjkuM1wifSx1Lm9wdGlvbnM9e3VzZUVhc2luZzohMCx1c2VHcm91cGluZzohMCxzZXBhcmF0b3I6XCIsXCIsZGVjaW1hbDpcIi5cIixlYXNpbmdGbjpmdW5jdGlvbihhLG4sdCxlKXtyZXR1cm4gdCooMS1NYXRoLnBvdygyLC0xMCphL2UpKSoxMDI0LzEwMjMrbn0sZm9ybWF0dGluZ0ZuOmZ1bmN0aW9uKGEpe3ZhciBuLHQsZSxpLHIsbyxzPWE8MDtpZihhPU1hdGguYWJzKGEpLnRvRml4ZWQodS5kZWNpbWFscyksbj0oYSs9XCJcIikuc3BsaXQoXCIuXCIpLHQ9blswXSxlPTE8bi5sZW5ndGg/dS5vcHRpb25zLmRlY2ltYWwrblsxXTpcIlwiLHUub3B0aW9ucy51c2VHcm91cGluZyl7Zm9yKGk9XCJcIixyPTAsbz10Lmxlbmd0aDtyPG87KytyKTAhPT1yJiZyJTM9PTAmJihpPXUub3B0aW9ucy5zZXBhcmF0b3IraSksaT10W28tci0xXStpO3Q9aX1yZXR1cm4gdS5vcHRpb25zLm51bWVyYWxzLmxlbmd0aCYmKHQ9dC5yZXBsYWNlKC9bMC05XS9nLGZ1bmN0aW9uKGEpe3JldHVybiB1Lm9wdGlvbnMubnVtZXJhbHNbK2FdfSksZT1lLnJlcGxhY2UoL1swLTldL2csZnVuY3Rpb24oYSl7cmV0dXJuIHUub3B0aW9ucy5udW1lcmFsc1srYV19KSksKHM/XCItXCI6XCJcIikrdS5vcHRpb25zLnByZWZpeCt0K2UrdS5vcHRpb25zLnN1ZmZpeH0scHJlZml4OlwiXCIsc3VmZml4OlwiXCIsbnVtZXJhbHM6W119LHImJlwib2JqZWN0XCI9PXR5cGVvZiByKWZvcih2YXIgbyBpbiB1Lm9wdGlvbnMpci5oYXNPd25Qcm9wZXJ0eShvKSYmbnVsbCE9PXJbb10mJih1Lm9wdGlvbnNbb109cltvXSk7XCJcIj09PXUub3B0aW9ucy5zZXBhcmF0b3I/dS5vcHRpb25zLnVzZUdyb3VwaW5nPSExOnUub3B0aW9ucy5zZXBhcmF0b3I9XCJcIit1Lm9wdGlvbnMuc2VwYXJhdG9yO2Zvcih2YXIgcz0wLGw9W1wid2Via2l0XCIsXCJtb3pcIixcIm1zXCIsXCJvXCJdLG09MDttPGwubGVuZ3RoJiYhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsrK20pd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT13aW5kb3dbbFttXStcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXSx3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU9d2luZG93W2xbbV0rXCJDYW5jZWxBbmltYXRpb25GcmFtZVwiXXx8d2luZG93W2xbbV0rXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07ZnVuY3Rpb24gZChhKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgYSYmIWlzTmFOKGEpfXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lPWZ1bmN0aW9uKGEsbil7dmFyIHQ9KG5ldyBEYXRlKS5nZXRUaW1lKCksZT1NYXRoLm1heCgwLDE2LSh0LXMpKSxpPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YSh0K2UpfSxlKTtyZXR1cm4gcz10K2UsaX0pLHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZXx8KHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZT1mdW5jdGlvbihhKXtjbGVhclRpbWVvdXQoYSl9KSx1LmluaXRpYWxpemU9ZnVuY3Rpb24oKXtyZXR1cm4hIXUuaW5pdGlhbGl6ZWR8fCh1LmVycm9yPVwiXCIsdS5kPVwic3RyaW5nXCI9PXR5cGVvZiBhP2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKGEpOmEsdS5kPyh1LnN0YXJ0VmFsPU51bWJlcihuKSx1LmVuZFZhbD1OdW1iZXIodCksZCh1LnN0YXJ0VmFsKSYmZCh1LmVuZFZhbCk/KHUuZGVjaW1hbHM9TWF0aC5tYXgoMCxlfHwwKSx1LmRlYz1NYXRoLnBvdygxMCx1LmRlY2ltYWxzKSx1LmR1cmF0aW9uPTFlMypOdW1iZXIoaSl8fDJlMyx1LmNvdW50RG93bj11LnN0YXJ0VmFsPnUuZW5kVmFsLHUuZnJhbWVWYWw9dS5zdGFydFZhbCx1LmluaXRpYWxpemVkPSEwKToodS5lcnJvcj1cIltDb3VudFVwXSBzdGFydFZhbCAoXCIrbitcIikgb3IgZW5kVmFsIChcIit0K1wiKSBpcyBub3QgYSBudW1iZXJcIiwhMSkpOiEodS5lcnJvcj1cIltDb3VudFVwXSB0YXJnZXQgaXMgbnVsbCBvciB1bmRlZmluZWRcIikpfSx1LnByaW50VmFsdWU9ZnVuY3Rpb24oYSl7dmFyIG49dS5vcHRpb25zLmZvcm1hdHRpbmdGbihhKTtcIklOUFVUXCI9PT11LmQudGFnTmFtZT90aGlzLmQudmFsdWU9bjpcInRleHRcIj09PXUuZC50YWdOYW1lfHxcInRzcGFuXCI9PT11LmQudGFnTmFtZT90aGlzLmQudGV4dENvbnRlbnQ9bjp0aGlzLmQuaW5uZXJIVE1MPW59LHUuY291bnQ9ZnVuY3Rpb24oYSl7dS5zdGFydFRpbWV8fCh1LnN0YXJ0VGltZT1hKTt2YXIgbj0odS50aW1lc3RhbXA9YSktdS5zdGFydFRpbWU7dS5yZW1haW5pbmc9dS5kdXJhdGlvbi1uLHUub3B0aW9ucy51c2VFYXNpbmc/dS5jb3VudERvd24/dS5mcmFtZVZhbD11LnN0YXJ0VmFsLXUub3B0aW9ucy5lYXNpbmdGbihuLDAsdS5zdGFydFZhbC11LmVuZFZhbCx1LmR1cmF0aW9uKTp1LmZyYW1lVmFsPXUub3B0aW9ucy5lYXNpbmdGbihuLHUuc3RhcnRWYWwsdS5lbmRWYWwtdS5zdGFydFZhbCx1LmR1cmF0aW9uKTp1LmNvdW50RG93bj91LmZyYW1lVmFsPXUuc3RhcnRWYWwtKHUuc3RhcnRWYWwtdS5lbmRWYWwpKihuL3UuZHVyYXRpb24pOnUuZnJhbWVWYWw9dS5zdGFydFZhbCsodS5lbmRWYWwtdS5zdGFydFZhbCkqKG4vdS5kdXJhdGlvbiksdS5jb3VudERvd24/dS5mcmFtZVZhbD11LmZyYW1lVmFsPHUuZW5kVmFsP3UuZW5kVmFsOnUuZnJhbWVWYWw6dS5mcmFtZVZhbD11LmZyYW1lVmFsPnUuZW5kVmFsP3UuZW5kVmFsOnUuZnJhbWVWYWwsdS5mcmFtZVZhbD1NYXRoLnJvdW5kKHUuZnJhbWVWYWwqdS5kZWMpL3UuZGVjLHUucHJpbnRWYWx1ZSh1LmZyYW1lVmFsKSxuPHUuZHVyYXRpb24/dS5yQUY9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUuY291bnQpOnUuY2FsbGJhY2smJnUuY2FsbGJhY2soKX0sdS5zdGFydD1mdW5jdGlvbihhKXt1LmluaXRpYWxpemUoKSYmKHUuY2FsbGJhY2s9YSx1LnJBRj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodS5jb3VudCkpfSx1LnBhdXNlUmVzdW1lPWZ1bmN0aW9uKCl7dS5wYXVzZWQ/KHUucGF1c2VkPSExLGRlbGV0ZSB1LnN0YXJ0VGltZSx1LmR1cmF0aW9uPXUucmVtYWluaW5nLHUuc3RhcnRWYWw9dS5mcmFtZVZhbCxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodS5jb3VudCkpOih1LnBhdXNlZD0hMCxjYW5jZWxBbmltYXRpb25GcmFtZSh1LnJBRikpfSx1LnJlc2V0PWZ1bmN0aW9uKCl7dS5wYXVzZWQ9ITEsZGVsZXRlIHUuc3RhcnRUaW1lLHUuaW5pdGlhbGl6ZWQ9ITEsdS5pbml0aWFsaXplKCkmJihjYW5jZWxBbmltYXRpb25GcmFtZSh1LnJBRiksdS5wcmludFZhbHVlKHUuc3RhcnRWYWwpKX0sdS51cGRhdGU9ZnVuY3Rpb24oYSl7dS5pbml0aWFsaXplKCkmJihkKGE9TnVtYmVyKGEpKT8odS5lcnJvcj1cIlwiLGEhPT11LmZyYW1lVmFsJiYoY2FuY2VsQW5pbWF0aW9uRnJhbWUodS5yQUYpLHUucGF1c2VkPSExLGRlbGV0ZSB1LnN0YXJ0VGltZSx1LnN0YXJ0VmFsPXUuZnJhbWVWYWwsdS5lbmRWYWw9YSx1LmNvdW50RG93bj11LnN0YXJ0VmFsPnUuZW5kVmFsLHUuckFGPXJlcXVlc3RBbmltYXRpb25GcmFtZSh1LmNvdW50KSkpOnUuZXJyb3I9XCJbQ291bnRVcF0gdXBkYXRlKCkgLSBuZXcgZW5kVmFsIGlzIG5vdCBhIG51bWJlcjogXCIrYSl9LHUuaW5pdGlhbGl6ZSgpJiZ1LnByaW50VmFsdWUodS5zdGFydFZhbCl9fSk7IiwiLyohIGpzLWNvb2tpZSB2My4wLjAtcmMuMSB8IE1JVCAqL1xyXG4hZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1lfHxzZWxmLGZ1bmN0aW9uKCl7dmFyIG49ZS5Db29raWVzLHI9ZS5Db29raWVzPXQoKTtyLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gZS5Db29raWVzPW4scn19KCkpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciByIGluIG4pZVtyXT1uW3JdfXJldHVybiBlfXZhciB0PXtyZWFkOmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoLyglW1xcZEEtRl17Mn0pKy9naSxkZWNvZGVVUklDb21wb25lbnQpfSx3cml0ZTpmdW5jdGlvbihlKXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGUpLnJlcGxhY2UoLyUoMlszNDZCRl18M1tBQy1GXXw0MHw1W0JERV18NjB8N1tCQ0RdKS9nLGRlY29kZVVSSUNvbXBvbmVudCl9fTtyZXR1cm4gZnVuY3Rpb24gbihyLG8pe2Z1bmN0aW9uIGkodCxuLGkpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCl7XCJudW1iZXJcIj09dHlwZW9mKGk9ZSh7fSxvLGkpKS5leHBpcmVzJiYoaS5leHBpcmVzPW5ldyBEYXRlKERhdGUubm93KCkrODY0ZTUqaS5leHBpcmVzKSksaS5leHBpcmVzJiYoaS5leHBpcmVzPWkuZXhwaXJlcy50b1VUQ1N0cmluZygpKSx0PWVuY29kZVVSSUNvbXBvbmVudCh0KS5yZXBsYWNlKC8lKDJbMzQ2Ql18NUV8NjB8N0MpL2csZGVjb2RlVVJJQ29tcG9uZW50KS5yZXBsYWNlKC9bKCldL2csZXNjYXBlKSxuPXIud3JpdGUobix0KTt2YXIgYz1cIlwiO2Zvcih2YXIgdSBpbiBpKWlbdV0mJihjKz1cIjsgXCIrdSwhMCE9PWlbdV0mJihjKz1cIj1cIitpW3VdLnNwbGl0KFwiO1wiKVswXSkpO3JldHVybiBkb2N1bWVudC5jb29raWU9dCtcIj1cIituK2N9fXJldHVybiBPYmplY3QuY3JlYXRlKHtzZXQ6aSxnZXQ6ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50JiYoIWFyZ3VtZW50cy5sZW5ndGh8fGUpKXtmb3IodmFyIG49ZG9jdW1lbnQuY29va2llP2RvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpOltdLG89e30saT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgYz1uW2ldLnNwbGl0KFwiPVwiKSx1PWMuc2xpY2UoMSkuam9pbihcIj1cIik7J1wiJz09PXVbMF0mJih1PXUuc2xpY2UoMSwtMSkpO3RyeXt2YXIgZj10LnJlYWQoY1swXSk7aWYob1tmXT1yLnJlYWQodSxmKSxlPT09ZilicmVha31jYXRjaChlKXt9fXJldHVybiBlP29bZV06b319LHJlbW92ZTpmdW5jdGlvbih0LG4pe2kodCxcIlwiLGUoe30sbix7ZXhwaXJlczotMX0pKX0sd2l0aEF0dHJpYnV0ZXM6ZnVuY3Rpb24odCl7cmV0dXJuIG4odGhpcy5jb252ZXJ0ZXIsZSh7fSx0aGlzLmF0dHJpYnV0ZXMsdCkpfSx3aXRoQ29udmVydGVyOmZ1bmN0aW9uKHQpe3JldHVybiBuKGUoe30sdGhpcy5jb252ZXJ0ZXIsdCksdGhpcy5hdHRyaWJ1dGVzKX19LHthdHRyaWJ1dGVzOnt2YWx1ZTpPYmplY3QuZnJlZXplKG8pfSxjb252ZXJ0ZXI6e3ZhbHVlOk9iamVjdC5mcmVlemUocil9fSl9KHQse3BhdGg6XCIvXCJ9KX0pO1xyXG4iLCIoZnVuY3Rpb24gZGVmaW5lTXVzdGFjaGUoZ2xvYmFsLGZhY3Rvcnkpe2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmZXhwb3J0cyYmdHlwZW9mIGV4cG9ydHMubm9kZU5hbWUhPT1cInN0cmluZ1wiKXtmYWN0b3J5KGV4cG9ydHMpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtcImV4cG9ydHNcIl0sZmFjdG9yeSl9ZWxzZXtnbG9iYWwuTXVzdGFjaGU9e307ZmFjdG9yeShnbG9iYWwuTXVzdGFjaGUpfX0pKHRoaXMsZnVuY3Rpb24gbXVzdGFjaGVGYWN0b3J5KG11c3RhY2hlKXt2YXIgb2JqZWN0VG9TdHJpbmc9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZzt2YXIgaXNBcnJheT1BcnJheS5pc0FycmF5fHxmdW5jdGlvbiBpc0FycmF5UG9seWZpbGwob2JqZWN0KXtyZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbChvYmplY3QpPT09XCJbb2JqZWN0IEFycmF5XVwifTtmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iamVjdCl7cmV0dXJuIHR5cGVvZiBvYmplY3Q9PT1cImZ1bmN0aW9uXCJ9ZnVuY3Rpb24gdHlwZVN0cihvYmope3JldHVybiBpc0FycmF5KG9iaik/XCJhcnJheVwiOnR5cGVvZiBvYmp9ZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cmluZyl7cmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bXFwtXFxbXFxde30oKSorPy4sXFxcXFxcXiR8I1xcc10vZyxcIlxcXFwkJlwiKX1mdW5jdGlvbiBoYXNQcm9wZXJ0eShvYmoscHJvcE5hbWUpe3JldHVybiBvYmohPW51bGwmJnR5cGVvZiBvYmo9PT1cIm9iamVjdFwiJiZwcm9wTmFtZSBpbiBvYmp9dmFyIHJlZ0V4cFRlc3Q9UmVnRXhwLnByb3RvdHlwZS50ZXN0O2Z1bmN0aW9uIHRlc3RSZWdFeHAocmUsc3RyaW5nKXtyZXR1cm4gcmVnRXhwVGVzdC5jYWxsKHJlLHN0cmluZyl9dmFyIG5vblNwYWNlUmU9L1xcUy87ZnVuY3Rpb24gaXNXaGl0ZXNwYWNlKHN0cmluZyl7cmV0dXJuIXRlc3RSZWdFeHAobm9uU3BhY2VSZSxzdHJpbmcpfXZhciBlbnRpdHlNYXA9e1wiJlwiOlwiJmFtcDtcIixcIjxcIjpcIiZsdDtcIixcIj5cIjpcIiZndDtcIiwnXCInOlwiJnF1b3Q7XCIsXCInXCI6XCImIzM5O1wiLFwiL1wiOlwiJiN4MkY7XCIsXCJgXCI6XCImI3g2MDtcIixcIj1cIjpcIiYjeDNEO1wifTtmdW5jdGlvbiBlc2NhcGVIdG1sKHN0cmluZyl7cmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UoL1smPD5cIidgPVxcL10vZyxmdW5jdGlvbiBmcm9tRW50aXR5TWFwKHMpe3JldHVybiBlbnRpdHlNYXBbc119KX12YXIgd2hpdGVSZT0vXFxzKi87dmFyIHNwYWNlUmU9L1xccysvO3ZhciBlcXVhbHNSZT0vXFxzKj0vO3ZhciBjdXJseVJlPS9cXHMqXFx9Lzt2YXIgdGFnUmU9LyN8XFxefFxcL3w+fFxce3wmfD18IS87ZnVuY3Rpb24gcGFyc2VUZW1wbGF0ZSh0ZW1wbGF0ZSx0YWdzKXtpZighdGVtcGxhdGUpcmV0dXJuW107dmFyIHNlY3Rpb25zPVtdO3ZhciB0b2tlbnM9W107dmFyIHNwYWNlcz1bXTt2YXIgaGFzVGFnPWZhbHNlO3ZhciBub25TcGFjZT1mYWxzZTtmdW5jdGlvbiBzdHJpcFNwYWNlKCl7aWYoaGFzVGFnJiYhbm9uU3BhY2Upe3doaWxlKHNwYWNlcy5sZW5ndGgpZGVsZXRlIHRva2Vuc1tzcGFjZXMucG9wKCldfWVsc2V7c3BhY2VzPVtdfWhhc1RhZz1mYWxzZTtub25TcGFjZT1mYWxzZX12YXIgb3BlbmluZ1RhZ1JlLGNsb3NpbmdUYWdSZSxjbG9zaW5nQ3VybHlSZTtmdW5jdGlvbiBjb21waWxlVGFncyh0YWdzVG9Db21waWxlKXtpZih0eXBlb2YgdGFnc1RvQ29tcGlsZT09PVwic3RyaW5nXCIpdGFnc1RvQ29tcGlsZT10YWdzVG9Db21waWxlLnNwbGl0KHNwYWNlUmUsMik7aWYoIWlzQXJyYXkodGFnc1RvQ29tcGlsZSl8fHRhZ3NUb0NvbXBpbGUubGVuZ3RoIT09Mil0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHRhZ3M6IFwiK3RhZ3NUb0NvbXBpbGUpO29wZW5pbmdUYWdSZT1uZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cCh0YWdzVG9Db21waWxlWzBdKStcIlxcXFxzKlwiKTtjbG9zaW5nVGFnUmU9bmV3IFJlZ0V4cChcIlxcXFxzKlwiK2VzY2FwZVJlZ0V4cCh0YWdzVG9Db21waWxlWzFdKSk7Y2xvc2luZ0N1cmx5UmU9bmV3IFJlZ0V4cChcIlxcXFxzKlwiK2VzY2FwZVJlZ0V4cChcIn1cIit0YWdzVG9Db21waWxlWzFdKSl9Y29tcGlsZVRhZ3ModGFnc3x8bXVzdGFjaGUudGFncyk7dmFyIHNjYW5uZXI9bmV3IFNjYW5uZXIodGVtcGxhdGUpO3ZhciBzdGFydCx0eXBlLHZhbHVlLGNocix0b2tlbixvcGVuU2VjdGlvbjt3aGlsZSghc2Nhbm5lci5lb3MoKSl7c3RhcnQ9c2Nhbm5lci5wb3M7dmFsdWU9c2Nhbm5lci5zY2FuVW50aWwob3BlbmluZ1RhZ1JlKTtpZih2YWx1ZSl7Zm9yKHZhciBpPTAsdmFsdWVMZW5ndGg9dmFsdWUubGVuZ3RoO2k8dmFsdWVMZW5ndGg7KytpKXtjaHI9dmFsdWUuY2hhckF0KGkpO2lmKGlzV2hpdGVzcGFjZShjaHIpKXtzcGFjZXMucHVzaCh0b2tlbnMubGVuZ3RoKX1lbHNle25vblNwYWNlPXRydWV9dG9rZW5zLnB1c2goW1widGV4dFwiLGNocixzdGFydCxzdGFydCsxXSk7c3RhcnQrPTE7aWYoY2hyPT09XCJcXG5cIilzdHJpcFNwYWNlKCl9fWlmKCFzY2FubmVyLnNjYW4ob3BlbmluZ1RhZ1JlKSlicmVhaztoYXNUYWc9dHJ1ZTt0eXBlPXNjYW5uZXIuc2Nhbih0YWdSZSl8fFwibmFtZVwiO3NjYW5uZXIuc2Nhbih3aGl0ZVJlKTtpZih0eXBlPT09XCI9XCIpe3ZhbHVlPXNjYW5uZXIuc2NhblVudGlsKGVxdWFsc1JlKTtzY2FubmVyLnNjYW4oZXF1YWxzUmUpO3NjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSl9ZWxzZSBpZih0eXBlPT09XCJ7XCIpe3ZhbHVlPXNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdDdXJseVJlKTtzY2FubmVyLnNjYW4oY3VybHlSZSk7c2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTt0eXBlPVwiJlwifWVsc2V7dmFsdWU9c2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKX1pZighc2Nhbm5lci5zY2FuKGNsb3NpbmdUYWdSZSkpdGhyb3cgbmV3IEVycm9yKFwiVW5jbG9zZWQgdGFnIGF0IFwiK3NjYW5uZXIucG9zKTt0b2tlbj1bdHlwZSx2YWx1ZSxzdGFydCxzY2FubmVyLnBvc107dG9rZW5zLnB1c2godG9rZW4pO2lmKHR5cGU9PT1cIiNcInx8dHlwZT09PVwiXlwiKXtzZWN0aW9ucy5wdXNoKHRva2VuKX1lbHNlIGlmKHR5cGU9PT1cIi9cIil7b3BlblNlY3Rpb249c2VjdGlvbnMucG9wKCk7aWYoIW9wZW5TZWN0aW9uKXRocm93IG5ldyBFcnJvcignVW5vcGVuZWQgc2VjdGlvbiBcIicrdmFsdWUrJ1wiIGF0ICcrc3RhcnQpO2lmKG9wZW5TZWN0aW9uWzFdIT09dmFsdWUpdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCBzZWN0aW9uIFwiJytvcGVuU2VjdGlvblsxXSsnXCIgYXQgJytzdGFydCl9ZWxzZSBpZih0eXBlPT09XCJuYW1lXCJ8fHR5cGU9PT1cIntcInx8dHlwZT09PVwiJlwiKXtub25TcGFjZT10cnVlfWVsc2UgaWYodHlwZT09PVwiPVwiKXtjb21waWxlVGFncyh2YWx1ZSl9fW9wZW5TZWN0aW9uPXNlY3Rpb25zLnBvcCgpO2lmKG9wZW5TZWN0aW9uKXRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicrb3BlblNlY3Rpb25bMV0rJ1wiIGF0ICcrc2Nhbm5lci5wb3MpO3JldHVybiBuZXN0VG9rZW5zKHNxdWFzaFRva2Vucyh0b2tlbnMpKX1mdW5jdGlvbiBzcXVhc2hUb2tlbnModG9rZW5zKXt2YXIgc3F1YXNoZWRUb2tlbnM9W107dmFyIHRva2VuLGxhc3RUb2tlbjtmb3IodmFyIGk9MCxudW1Ub2tlbnM9dG9rZW5zLmxlbmd0aDtpPG51bVRva2VuczsrK2kpe3Rva2VuPXRva2Vuc1tpXTtpZih0b2tlbil7aWYodG9rZW5bMF09PT1cInRleHRcIiYmbGFzdFRva2VuJiZsYXN0VG9rZW5bMF09PT1cInRleHRcIil7bGFzdFRva2VuWzFdKz10b2tlblsxXTtsYXN0VG9rZW5bM109dG9rZW5bM119ZWxzZXtzcXVhc2hlZFRva2Vucy5wdXNoKHRva2VuKTtsYXN0VG9rZW49dG9rZW59fX1yZXR1cm4gc3F1YXNoZWRUb2tlbnN9ZnVuY3Rpb24gbmVzdFRva2Vucyh0b2tlbnMpe3ZhciBuZXN0ZWRUb2tlbnM9W107dmFyIGNvbGxlY3Rvcj1uZXN0ZWRUb2tlbnM7dmFyIHNlY3Rpb25zPVtdO3ZhciB0b2tlbixzZWN0aW9uO2Zvcih2YXIgaT0wLG51bVRva2Vucz10b2tlbnMubGVuZ3RoO2k8bnVtVG9rZW5zOysraSl7dG9rZW49dG9rZW5zW2ldO3N3aXRjaCh0b2tlblswXSl7Y2FzZVwiI1wiOmNhc2VcIl5cIjpjb2xsZWN0b3IucHVzaCh0b2tlbik7c2VjdGlvbnMucHVzaCh0b2tlbik7Y29sbGVjdG9yPXRva2VuWzRdPVtdO2JyZWFrO2Nhc2VcIi9cIjpzZWN0aW9uPXNlY3Rpb25zLnBvcCgpO3NlY3Rpb25bNV09dG9rZW5bMl07Y29sbGVjdG9yPXNlY3Rpb25zLmxlbmd0aD4wP3NlY3Rpb25zW3NlY3Rpb25zLmxlbmd0aC0xXVs0XTpuZXN0ZWRUb2tlbnM7YnJlYWs7ZGVmYXVsdDpjb2xsZWN0b3IucHVzaCh0b2tlbil9fXJldHVybiBuZXN0ZWRUb2tlbnN9ZnVuY3Rpb24gU2Nhbm5lcihzdHJpbmcpe3RoaXMuc3RyaW5nPXN0cmluZzt0aGlzLnRhaWw9c3RyaW5nO3RoaXMucG9zPTB9U2Nhbm5lci5wcm90b3R5cGUuZW9zPWZ1bmN0aW9uIGVvcygpe3JldHVybiB0aGlzLnRhaWw9PT1cIlwifTtTY2FubmVyLnByb3RvdHlwZS5zY2FuPWZ1bmN0aW9uIHNjYW4ocmUpe3ZhciBtYXRjaD10aGlzLnRhaWwubWF0Y2gocmUpO2lmKCFtYXRjaHx8bWF0Y2guaW5kZXghPT0wKXJldHVyblwiXCI7dmFyIHN0cmluZz1tYXRjaFswXTt0aGlzLnRhaWw9dGhpcy50YWlsLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKTt0aGlzLnBvcys9c3RyaW5nLmxlbmd0aDtyZXR1cm4gc3RyaW5nfTtTY2FubmVyLnByb3RvdHlwZS5zY2FuVW50aWw9ZnVuY3Rpb24gc2NhblVudGlsKHJlKXt2YXIgaW5kZXg9dGhpcy50YWlsLnNlYXJjaChyZSksbWF0Y2g7c3dpdGNoKGluZGV4KXtjYXNlLTE6bWF0Y2g9dGhpcy50YWlsO3RoaXMudGFpbD1cIlwiO2JyZWFrO2Nhc2UgMDptYXRjaD1cIlwiO2JyZWFrO2RlZmF1bHQ6bWF0Y2g9dGhpcy50YWlsLnN1YnN0cmluZygwLGluZGV4KTt0aGlzLnRhaWw9dGhpcy50YWlsLnN1YnN0cmluZyhpbmRleCl9dGhpcy5wb3MrPW1hdGNoLmxlbmd0aDtyZXR1cm4gbWF0Y2h9O2Z1bmN0aW9uIENvbnRleHQodmlldyxwYXJlbnRDb250ZXh0KXt0aGlzLnZpZXc9dmlldzt0aGlzLmNhY2hlPXtcIi5cIjp0aGlzLnZpZXd9O3RoaXMucGFyZW50PXBhcmVudENvbnRleHR9Q29udGV4dC5wcm90b3R5cGUucHVzaD1mdW5jdGlvbiBwdXNoKHZpZXcpe3JldHVybiBuZXcgQ29udGV4dCh2aWV3LHRoaXMpfTtDb250ZXh0LnByb3RvdHlwZS5sb29rdXA9ZnVuY3Rpb24gbG9va3VwKG5hbWUpe3ZhciBjYWNoZT10aGlzLmNhY2hlO3ZhciB2YWx1ZTtpZihjYWNoZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSl7dmFsdWU9Y2FjaGVbbmFtZV19ZWxzZXt2YXIgY29udGV4dD10aGlzLG5hbWVzLGluZGV4LGxvb2t1cEhpdD1mYWxzZTt3aGlsZShjb250ZXh0KXtpZihuYW1lLmluZGV4T2YoXCIuXCIpPjApe3ZhbHVlPWNvbnRleHQudmlldztuYW1lcz1uYW1lLnNwbGl0KFwiLlwiKTtpbmRleD0wO3doaWxlKHZhbHVlIT1udWxsJiZpbmRleDxuYW1lcy5sZW5ndGgpe2lmKGluZGV4PT09bmFtZXMubGVuZ3RoLTEpbG9va3VwSGl0PWhhc1Byb3BlcnR5KHZhbHVlLG5hbWVzW2luZGV4XSk7dmFsdWU9dmFsdWVbbmFtZXNbaW5kZXgrK11dfX1lbHNle3ZhbHVlPWNvbnRleHQudmlld1tuYW1lXTtsb29rdXBIaXQ9aGFzUHJvcGVydHkoY29udGV4dC52aWV3LG5hbWUpfWlmKGxvb2t1cEhpdClicmVhaztjb250ZXh0PWNvbnRleHQucGFyZW50fWNhY2hlW25hbWVdPXZhbHVlfWlmKGlzRnVuY3Rpb24odmFsdWUpKXZhbHVlPXZhbHVlLmNhbGwodGhpcy52aWV3KTtyZXR1cm4gdmFsdWV9O2Z1bmN0aW9uIFdyaXRlcigpe3RoaXMuY2FjaGU9e319V3JpdGVyLnByb3RvdHlwZS5jbGVhckNhY2hlPWZ1bmN0aW9uIGNsZWFyQ2FjaGUoKXt0aGlzLmNhY2hlPXt9fTtXcml0ZXIucHJvdG90eXBlLnBhcnNlPWZ1bmN0aW9uIHBhcnNlKHRlbXBsYXRlLHRhZ3Mpe3ZhciBjYWNoZT10aGlzLmNhY2hlO3ZhciB0b2tlbnM9Y2FjaGVbdGVtcGxhdGVdO2lmKHRva2Vucz09bnVsbCl0b2tlbnM9Y2FjaGVbdGVtcGxhdGVdPXBhcnNlVGVtcGxhdGUodGVtcGxhdGUsdGFncyk7cmV0dXJuIHRva2Vuc307V3JpdGVyLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24gcmVuZGVyKHRlbXBsYXRlLHZpZXcscGFydGlhbHMpe3ZhciB0b2tlbnM9dGhpcy5wYXJzZSh0ZW1wbGF0ZSk7dmFyIGNvbnRleHQ9dmlldyBpbnN0YW5jZW9mIENvbnRleHQ/dmlldzpuZXcgQ29udGV4dCh2aWV3KTtyZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5zLGNvbnRleHQscGFydGlhbHMsdGVtcGxhdGUpfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlclRva2Vucz1mdW5jdGlvbiByZW5kZXJUb2tlbnModG9rZW5zLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl7dmFyIGJ1ZmZlcj1cIlwiO3ZhciB0b2tlbixzeW1ib2wsdmFsdWU7Zm9yKHZhciBpPTAsbnVtVG9rZW5zPXRva2Vucy5sZW5ndGg7aTxudW1Ub2tlbnM7KytpKXt2YWx1ZT11bmRlZmluZWQ7dG9rZW49dG9rZW5zW2ldO3N5bWJvbD10b2tlblswXTtpZihzeW1ib2w9PT1cIiNcIil2YWx1ZT10aGlzLnJlbmRlclNlY3Rpb24odG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKTtlbHNlIGlmKHN5bWJvbD09PVwiXlwiKXZhbHVlPXRoaXMucmVuZGVySW52ZXJ0ZWQodG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKTtlbHNlIGlmKHN5bWJvbD09PVwiPlwiKXZhbHVlPXRoaXMucmVuZGVyUGFydGlhbCh0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpO2Vsc2UgaWYoc3ltYm9sPT09XCImXCIpdmFsdWU9dGhpcy51bmVzY2FwZWRWYWx1ZSh0b2tlbixjb250ZXh0KTtlbHNlIGlmKHN5bWJvbD09PVwibmFtZVwiKXZhbHVlPXRoaXMuZXNjYXBlZFZhbHVlKHRva2VuLGNvbnRleHQpO2Vsc2UgaWYoc3ltYm9sPT09XCJ0ZXh0XCIpdmFsdWU9dGhpcy5yYXdWYWx1ZSh0b2tlbik7aWYodmFsdWUhPT11bmRlZmluZWQpYnVmZmVyKz12YWx1ZX1yZXR1cm4gYnVmZmVyfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlclNlY3Rpb249ZnVuY3Rpb24gcmVuZGVyU2VjdGlvbih0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpe3ZhciBzZWxmPXRoaXM7dmFyIGJ1ZmZlcj1cIlwiO3ZhciB2YWx1ZT1jb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7ZnVuY3Rpb24gc3ViUmVuZGVyKHRlbXBsYXRlKXtyZXR1cm4gc2VsZi5yZW5kZXIodGVtcGxhdGUsY29udGV4dCxwYXJ0aWFscyl9aWYoIXZhbHVlKXJldHVybjtpZihpc0FycmF5KHZhbHVlKSl7Zm9yKHZhciBqPTAsdmFsdWVMZW5ndGg9dmFsdWUubGVuZ3RoO2o8dmFsdWVMZW5ndGg7KytqKXtidWZmZXIrPXRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLGNvbnRleHQucHVzaCh2YWx1ZVtqXSkscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl9fWVsc2UgaWYodHlwZW9mIHZhbHVlPT09XCJvYmplY3RcInx8dHlwZW9mIHZhbHVlPT09XCJzdHJpbmdcInx8dHlwZW9mIHZhbHVlPT09XCJudW1iZXJcIil7YnVmZmVyKz10aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSxjb250ZXh0LnB1c2godmFsdWUpLHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpfWVsc2UgaWYoaXNGdW5jdGlvbih2YWx1ZSkpe2lmKHR5cGVvZiBvcmlnaW5hbFRlbXBsYXRlIT09XCJzdHJpbmdcIil0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgdXNlIGhpZ2hlci1vcmRlciBzZWN0aW9ucyB3aXRob3V0IHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZVwiKTt2YWx1ZT12YWx1ZS5jYWxsKGNvbnRleHQudmlldyxvcmlnaW5hbFRlbXBsYXRlLnNsaWNlKHRva2VuWzNdLHRva2VuWzVdKSxzdWJSZW5kZXIpO2lmKHZhbHVlIT1udWxsKWJ1ZmZlcis9dmFsdWV9ZWxzZXtidWZmZXIrPXRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl9cmV0dXJuIGJ1ZmZlcn07V3JpdGVyLnByb3RvdHlwZS5yZW5kZXJJbnZlcnRlZD1mdW5jdGlvbiByZW5kZXJJbnZlcnRlZCh0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpe3ZhciB2YWx1ZT1jb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7aWYoIXZhbHVlfHxpc0FycmF5KHZhbHVlKSYmdmFsdWUubGVuZ3RoPT09MClyZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKX07V3JpdGVyLnByb3RvdHlwZS5yZW5kZXJQYXJ0aWFsPWZ1bmN0aW9uIHJlbmRlclBhcnRpYWwodG9rZW4sY29udGV4dCxwYXJ0aWFscyl7aWYoIXBhcnRpYWxzKXJldHVybjt2YXIgdmFsdWU9aXNGdW5jdGlvbihwYXJ0aWFscyk/cGFydGlhbHModG9rZW5bMV0pOnBhcnRpYWxzW3Rva2VuWzFdXTtpZih2YWx1ZSE9bnVsbClyZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModGhpcy5wYXJzZSh2YWx1ZSksY29udGV4dCxwYXJ0aWFscyx2YWx1ZSl9O1dyaXRlci5wcm90b3R5cGUudW5lc2NhcGVkVmFsdWU9ZnVuY3Rpb24gdW5lc2NhcGVkVmFsdWUodG9rZW4sY29udGV4dCl7dmFyIHZhbHVlPWNvbnRleHQubG9va3VwKHRva2VuWzFdKTtpZih2YWx1ZSE9bnVsbClyZXR1cm4gdmFsdWV9O1dyaXRlci5wcm90b3R5cGUuZXNjYXBlZFZhbHVlPWZ1bmN0aW9uIGVzY2FwZWRWYWx1ZSh0b2tlbixjb250ZXh0KXt2YXIgdmFsdWU9Y29udGV4dC5sb29rdXAodG9rZW5bMV0pO2lmKHZhbHVlIT1udWxsKXJldHVybiBtdXN0YWNoZS5lc2NhcGUodmFsdWUpfTtXcml0ZXIucHJvdG90eXBlLnJhd1ZhbHVlPWZ1bmN0aW9uIHJhd1ZhbHVlKHRva2VuKXtyZXR1cm4gdG9rZW5bMV19O211c3RhY2hlLm5hbWU9XCJtdXN0YWNoZS5qc1wiO211c3RhY2hlLnZlcnNpb249XCIyLjMuMFwiO211c3RhY2hlLnRhZ3M9W1wiPCVcIixcIiU+XCJdO3ZhciBkZWZhdWx0V3JpdGVyPW5ldyBXcml0ZXI7bXVzdGFjaGUuY2xlYXJDYWNoZT1mdW5jdGlvbiBjbGVhckNhY2hlKCl7cmV0dXJuIGRlZmF1bHRXcml0ZXIuY2xlYXJDYWNoZSgpfTttdXN0YWNoZS5wYXJzZT1mdW5jdGlvbiBwYXJzZSh0ZW1wbGF0ZSx0YWdzKXtyZXR1cm4gZGVmYXVsdFdyaXRlci5wYXJzZSh0ZW1wbGF0ZSx0YWdzKX07bXVzdGFjaGUucmVuZGVyPWZ1bmN0aW9uIHJlbmRlcih0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzKXtpZih0eXBlb2YgdGVtcGxhdGUhPT1cInN0cmluZ1wiKXt0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHRlbXBsYXRlISBUZW1wbGF0ZSBzaG91bGQgYmUgYSBcInN0cmluZ1wiICcrJ2J1dCBcIicrdHlwZVN0cih0ZW1wbGF0ZSkrJ1wiIHdhcyBnaXZlbiBhcyB0aGUgZmlyc3QgJytcImFyZ3VtZW50IGZvciBtdXN0YWNoZSNyZW5kZXIodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKVwiKX1yZXR1cm4gZGVmYXVsdFdyaXRlci5yZW5kZXIodGVtcGxhdGUsdmlldyxwYXJ0aWFscyl9O211c3RhY2hlLnRvX2h0bWw9ZnVuY3Rpb24gdG9faHRtbCh0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzLHNlbmQpe3ZhciByZXN1bHQ9bXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLHZpZXcscGFydGlhbHMpO2lmKGlzRnVuY3Rpb24oc2VuZCkpe3NlbmQocmVzdWx0KX1lbHNle3JldHVybiByZXN1bHR9fTttdXN0YWNoZS5lc2NhcGU9ZXNjYXBlSHRtbDttdXN0YWNoZS5TY2FubmVyPVNjYW5uZXI7bXVzdGFjaGUuQ29udGV4dD1Db250ZXh0O211c3RhY2hlLldyaXRlcj1Xcml0ZXI7cmV0dXJuIG11c3RhY2hlfSk7IiwiLyoqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMCwyMDExLDIwMTIsMjAxMywyMDE0IE1vcmdhbiBSb2RlcmljayBodHRwOi8vcm9kZXJpY2suZGtcclxuICogTGljZW5zZTogTUlUIC0gaHR0cDovL21yZ25yZHJjay5taXQtbGljZW5zZS5vcmdcclxuICpcclxuICogaHR0cHM6Ly9naXRodWIuY29tL21yb2Rlcmljay9QdWJTdWJKU1xyXG4gKi9cclxuIWZ1bmN0aW9uKG4sdCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9e307bi5QdWJTdWI9cjt2YXIgZT1uLmRlZmluZTshZnVuY3Rpb24obil7dmFyIHQ9e30scj0tMTtmdW5jdGlvbiBlKG4pe3ZhciB0O2Zvcih0IGluIG4paWYobi5oYXNPd25Qcm9wZXJ0eSh0KSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBvKG4sdCxyKXt0cnl7bih0LHIpfWNhdGNoKG4pe3NldFRpbWVvdXQoZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKCl7dGhyb3cgbn19KG4pLDApfX1mdW5jdGlvbiBpKG4sdCxyKXtuKHQscil9ZnVuY3Rpb24gdShuLHIsZSx1KXt2YXIgZixzPXRbcl0sYz11P2k6bztpZih0Lmhhc093blByb3BlcnR5KHIpKWZvcihmIGluIHMpcy5oYXNPd25Qcm9wZXJ0eShmKSYmYyhzW2ZdLG4sZSl9ZnVuY3Rpb24gZihuLHIsbyxpKXt2YXIgZj1mdW5jdGlvbihuLHQscil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9U3RyaW5nKG4pLG89ZS5sYXN0SW5kZXhPZihcIi5cIik7Zm9yKHUobixuLHQscik7LTEhPT1vOyllPWUuc3Vic3RyKDAsbyksbz1lLmxhc3RJbmRleE9mKFwiLlwiKSx1KG4sZSx0LHIpfX0obj1cInN5bWJvbFwiPT10eXBlb2Ygbj9uLnRvU3RyaW5nKCk6bixyLGkpLHM9ZnVuY3Rpb24obil7dmFyIHI9U3RyaW5nKG4pLG89Qm9vbGVhbih0Lmhhc093blByb3BlcnR5KHIpJiZlKHRbcl0pKSxpPXIubGFzdEluZGV4T2YoXCIuXCIpO2Zvcig7IW8mJi0xIT09aTspcj1yLnN1YnN0cigwLGkpLGk9ci5sYXN0SW5kZXhPZihcIi5cIiksbz1Cb29sZWFuKHQuaGFzT3duUHJvcGVydHkocikmJmUodFtyXSkpO3JldHVybiBvfShuKTtyZXR1cm4hIXMmJighMD09PW8/ZigpOnNldFRpbWVvdXQoZiwwKSwhMCl9bi5wdWJsaXNoPWZ1bmN0aW9uKHQscil7cmV0dXJuIGYodCxyLCExLG4uaW1tZWRpYXRlRXhjZXB0aW9ucyl9LG4ucHVibGlzaFN5bmM9ZnVuY3Rpb24odCxyKXtyZXR1cm4gZih0LHIsITAsbi5pbW1lZGlhdGVFeGNlcHRpb25zKX0sbi5zdWJzY3JpYmU9ZnVuY3Rpb24obixlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXJldHVybiExO249XCJzeW1ib2xcIj09dHlwZW9mIG4/bi50b1N0cmluZygpOm4sdC5oYXNPd25Qcm9wZXJ0eShuKXx8KHRbbl09e30pO3ZhciBvPVwidWlkX1wiK1N0cmluZygrK3IpO3JldHVybiB0W25dW29dPWUsb30sbi5zdWJzY3JpYmVPbmNlPWZ1bmN0aW9uKHQscil7dmFyIGU9bi5zdWJzY3JpYmUodCxmdW5jdGlvbigpe24udW5zdWJzY3JpYmUoZSksci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KTtyZXR1cm4gbn0sbi5jbGVhckFsbFN1YnNjcmlwdGlvbnM9ZnVuY3Rpb24oKXt0PXt9fSxuLmNsZWFyU3Vic2NyaXB0aW9ucz1mdW5jdGlvbihuKXt2YXIgcjtmb3IociBpbiB0KXQuaGFzT3duUHJvcGVydHkocikmJjA9PT1yLmluZGV4T2YobikmJmRlbGV0ZSB0W3JdfSxuLnVuc3Vic2NyaWJlPWZ1bmN0aW9uKHIpe3ZhciBlLG8saSx1PVwic3RyaW5nXCI9PXR5cGVvZiByJiYodC5oYXNPd25Qcm9wZXJ0eShyKXx8ZnVuY3Rpb24obil7dmFyIHI7Zm9yKHIgaW4gdClpZih0Lmhhc093blByb3BlcnR5KHIpJiYwPT09ci5pbmRleE9mKG4pKXJldHVybiEwO3JldHVybiExfShyKSksZj0hdSYmXCJzdHJpbmdcIj09dHlwZW9mIHIscz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByLGM9ITE7aWYoIXUpe2ZvcihlIGluIHQpaWYodC5oYXNPd25Qcm9wZXJ0eShlKSl7aWYobz10W2VdLGYmJm9bcl0pe2RlbGV0ZSBvW3JdLGM9cjticmVha31pZihzKWZvcihpIGluIG8pby5oYXNPd25Qcm9wZXJ0eShpKSYmb1tpXT09PXImJihkZWxldGUgb1tpXSxjPSEwKX1yZXR1cm4gY31uLmNsZWFyU3Vic2NyaXB0aW9ucyhyKX19KHIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUuYW1kP2UoZnVuY3Rpb24oKXtyZXR1cm4gcn0pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiYodm9pZCAwIT09bW9kdWxlJiZtb2R1bGUuZXhwb3J0cyYmKGV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9ciksZXhwb3J0cy5QdWJTdWI9cixtb2R1bGUuZXhwb3J0cz1leHBvcnRzPXIpfShcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3d8fHRoaXMpOyIsIi8qISBVVEYtOFxyXG5cclxuwqkga292cmlnaW5cclxu0JLRgdC1INC/0YDQsNCy0LAg0YDQsNC30YDQtdGI0LXQvdGLXHJcbtC60YDQsNGB0LjQstGL0Lkg0LTQuNC30LDQudC9INC00L7Qu9C20LXQvSDQuNC80LXRgtGMINC60YDQsNGB0LjQstGL0Lkg0LrQvtC0wq5cclxuXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9odG1scGx1c2Nzcy9cclxuXHJcbiovXHJcblxyXG4oICgpID0+IHtcclxuXHJcblx0d2luZG93LklOVEkgPSB7fTtcclxuXHRJTlRJLnJlc2l6ZVRpbWVvdXQgPSBudWxsO1xyXG5cdElOVEkud2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKCFJTlRJLnJlc2l6ZVRpbWVvdXQpIHtcclxuXHJcblx0XHRcdFx0SU5USS5yZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiAge1xyXG5cclxuXHRcdFx0XHRcdElOVEkucmVzaXplVGltZW91dCA9IG51bGw7XHJcblxyXG5cdFx0XHRcdFx0aWYoSU5USS53aW5kb3dXaWR0aE9MZCAhPT0gd2luZG93LmlubmVyV2lkdGgpIHtcclxuXHJcblx0XHRcdFx0XHRcdElOVEkud2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcblx0XHRcdFx0XHRcdFB1YlN1Yi5wdWJsaXNoKCd3aW5kb3dXaWR0aFJlc2l6ZScpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSwgMTAwKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuXHJcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuXHJcblx0XHRcdFB1YlN1Yi5wdWJsaXNoKCd3aW5kb3dTY3JvbGwnKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0UHViU3ViLnB1Ymxpc2goJ0RPTUNvbnRlbnRMb2FkZWQnKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0UHViU3ViLnB1Ymxpc2goJ3BhZ2VMb2FkJyk7XHJcblxyXG5cdFx0Q29va2llcy5zZXQoJ2Zhc3RMb2FkU2NyaXB0JywgdHJ1ZSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQsNC90LjQvNCw0YbQuNC5XHJcblx0SU5USS5jc3NBbmltYXRpb24gPSBhPT57bGV0IGIsYyxkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjc3NhbmltYXRpb25cIik7c3dpdGNoKGEpe2Nhc2UnYW5pbWF0aW9uJzpiPXtcImFuaW1hdGlvblwiOlwiYW5pbWF0aW9uZW5kXCIsXCJPQW5pbWF0aW9uXCI6XCJvQW5pbWF0aW9uRW5kXCIsXCJNb3pBbmltYXRpb25cIjpcImFuaW1hdGlvbmVuZFwiLFwiV2Via2l0QW5pbWF0aW9uXCI6XCJ3ZWJraXRBbmltYXRpb25FbmRcIn07YnJlYWs7Y2FzZSd0cmFuc2l0aW9uJzpiPXtcInRyYW5zaXRpb25cIjpcInRyYW5zaXRpb25lbmRcIixcIk9UcmFuc2l0aW9uXCI6XCJvVHJhbnNpdGlvbkVuZFwiLFwiTW96VHJhbnNpdGlvblwiOlwidHJhbnNpdGlvbmVuZFwiLFwiV2Via2l0VHJhbnNpdGlvblwiOlwid2Via2l0VHJhbnNpdGlvbkVuZFwifX1mb3IoYyBpbiBiKWlmKGQuc3R5bGVbY10hPT11bmRlZmluZWQpcmV0dXJuIGJbY119XHJcblxyXG5cdC8vIERldGVybWluZSBpZiBhbiBlbGVtZW50IGlzIGluIHRoZSB2aXNpYmxlIHZpZXdwb3J0XHJcblx0SU5USS5pc0luVmlld3BvcnQgPSBlbCA9PiB7XHJcblx0XHRjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRyZXR1cm4gKHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHR9XHJcblxyXG5cdC8vINC+0YLQtNC10LvRj9C10Lwg0YLRi9GB0Y/Rh9C4XHJcblx0SU5USS5zZXBOdW1iZXIgPSBmdW5jdGlvbihzdHIpe1xyXG5cdFx0c3RyID0gc3RyLnRvU3RyaW5nKCk7XHJcblx0XHRzdHIgPSBzdHIucmVwbGFjZSgvXFxzKy9nLCcnKTtcclxuXHRcdHJldHVybiBzdHIucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoW15cXGRdfCQpKS9nLCAnJDEgJyk7XHJcblx0fVxyXG5cclxuXHQvLyDRgdC60LvQtdC40LLQsNC10Lwg0YLRi9GB0Y/Rh9C4XHJcblx0SU5USS5zdHJUb051bWJlciA9IGZ1bmN0aW9uKG4pe1xyXG5cdFx0cmV0dXJuIHBhcnNlSW50KG4ucmVwbGFjZSgvXFxzKy9nLCcnKSwgMTApO1xyXG5cdH1cclxuXHJcbi8vINGB0LrQu9C+0L3QtdC90LjQtVxyXG5cdElOVEkuZGVjbGVuc2lvbiA9IChudW0sIGV4cHJlc3Npb25zKSA9PiB7XHJcblxyXG5cdFx0bGV0IHIsXHJcblx0XHRcdGNvdW50ID0gbnVtICUgMTAwO1xyXG5cclxuXHRcdGlmIChjb3VudCA+IDQgJiYgY291bnQgPCAyMSl7XHJcblxyXG5cdFx0XHRyID0gZXhwcmVzc2lvbnNbJzInXTtcclxuXHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHJcblx0XHRcdGNvdW50ID0gY291bnQgJSAxMDtcclxuXHJcblx0XHRcdGlmIChjb3VudCA9PSAxKXtcclxuXHRcdFx0XHRyID0gZXhwcmVzc2lvbnNbJzAnXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChjb3VudCA+IDEgJiYgY291bnQgPCA1KXtcclxuXHRcdFx0XHRyID0gZXhwcmVzc2lvbnNbJzEnXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNle1xyXG5cdFx0XHRcdHIgPSBleHByZXNzaW9uc1snMiddO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByO1xyXG5cclxuXHR9XHJcblxyXG59KSgpOyIsIiggaXRlbXMgPT4ge1xyXG5cclxuXHRpZighaXRlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oaXRlbXMsIGFjY29yZGlvbiA9PiB7XHJcblxyXG5cdFx0bGV0IGFuaW1hdGVPbiA9IGZhbHNlO1xyXG5cclxuXHRcdGNvbnN0IGJ0bnMgPSBhY2NvcmRpb24ucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9fYnRuJyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShidG5zLCBidG4gPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgaXRlbSA9IGJ0bi5jbG9zZXN0KCcuYWNjb3JkaW9uX19pdGVtJyksXHJcblx0XHRcdFx0ICBoZWFkID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19oZWFkJyksXHJcblx0XHRcdFx0ICBib2R5ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19ib2R5Jyk7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGFuaW1hdGVPbiA9IHRydWU7XHJcblxyXG5cdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnYWNjb3JkaW9uX19pdGVtLS1vcGVuJyk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGJvZHkuYWRkRXZlbnRMaXN0ZW5lcihJTlRJLmNzc0FuaW1hdGlvbigndHJhbnNpdGlvbicpLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmKGFuaW1hdGVPbiAmJiAhSU5USS5pc0luVmlld3BvcnQoaGVhZCkpe1xyXG5cclxuXHRcdFx0XHRcdGhlYWQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0YW5pbWF0ZU9uID0gZmFsc2U7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uJykpOyIsIiggaXRlbXMgPT4ge1xyXG5cclxuXHRpZighaXRlbXMpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Ly8g0LXRgdC70Lgg0LXRgdGC0Ywg0LLQvtC30LzQvtC20L3QvtGB0YfRgtGMINCy0LXRgNC90YPRgtGM0YHRjyDQvdCw0LfQsNC0XHJcblxyXG5cdGlmKGRvY3VtZW50LnJlZmVycmVyLmluZGV4T2YobG9jYXRpb24uaG9zdG5hbWUpID4gMCkge1xyXG5cclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50LWZvcm1fX2JhY2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRoaXN0b3J5LmJhY2soKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHQvLyDQv9C+0LrQsNC30LDRgtGMINC/0LDRgNC+0LvRjFxyXG5cclxuXHRjb25zdCB0b2dnbGVQYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY291bnQtZm9ybV9fdmlzaWJsZS10b2dnbGUtcGFzc3dvcmQnKTtcclxuXHJcblx0QXJyYXkuZnJvbSh0b2dnbGVQYXNzLCBlbCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRuID0gZWwucXVlcnlTZWxlY3RvcignLmFjY291bnQtZm9ybV9fdmlzaWJsZS10b2dnbGUtcGFzc3dvcmQtYnRuJyksXHJcblx0XHRcdCAgaW5wdXQgPSBlbC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudC1mb3JtX192aXNpYmxlLXRvZ2dsZS1wYXNzd29yZC1pbnB1dCcpO1xyXG5cclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG5cclxuXHRcdFx0aW5wdXQudHlwZSA9IGlucHV0LnR5cGUgPT09ICdwYXNzd29yZCcgPyAndGV4dCcgOiAncGFzc3dvcmQnO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50LWZvcm0nKSk7IiwiKCBmb3JtID0+IHtcclxuXHJcblx0aWYoIWZvcm0pIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgY291bnQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19jb3VudCcpLFxyXG5cdFx0ICB0b3RhbCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmNhcnRfX3RvdGFsJyksXHJcblx0XHQgIGl0ZW1zID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuZG9jcy1jYXRhbG9nX19pdGVtJyksXHJcblx0XHQgIGNvdW50VXBPcHRpb24gPSB7XHJcblx0XHRcdFx0dXNlRWFzaW5nOiBmYWxzZSxcclxuXHRcdFx0XHR1c2VHcm91cGluZzogdHJ1ZSxcclxuXHRcdFx0XHRzZXBhcmF0b3I6ICcgJyxcclxuXHRcdFx0XHRkZWNpbWFsOiAnJ1xyXG5cdFx0XHR9O1xyXG5cclxuXHRBcnJheS5mcm9tKGl0ZW1zLCBpdGVtID0+IHtcclxuXHJcblx0XHRjb25zdCBidG5SZW1vdmUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19yZW1vdmUnKTtcclxuXHJcblx0XHRidG5SZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpdGVtLnN0eWxlLmhlaWdodCA9IGl0ZW0uY2xpZW50SGVpZ2h0ICsgJ3B4JztcclxuXHJcblx0XHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihJTlRJLmNzc0FuaW1hdGlvbigndHJhbnNpdGlvbicpLCAoKT0+IHtcclxuXHJcblx0XHRcdFx0aWYoaXRlbS5jbGllbnRIZWlnaHQgPiAwKSB7XHJcblxyXG5cdFx0XHRcdFx0aXRlbS5zdHlsZS5oZWlnaHQgPSAwO1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdGl0ZW0ucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHRcdFx0c3VibWl0KCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aXRlbS5jbGFzc0xpc3QuYWRkKCdpcy1yZW1vdmUnKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHN1Ym1pdCA9ICgpPT4ge1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKCdzdWJtaXQnKTtcclxuXHJcblx0XHRyZXR1cm4gaW52b2ljZSgpO1xyXG5cclxuXHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHR9KVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG5cdFx0XHRpZihyZXN1bHQuY291bnRDYXJ0KXtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY2FydCBhJykuc2V0QXR0cmlidXRlKCdkYXRhLWNvdW50JywgcmVzdWx0LmNvdW50Q2FydCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpbnZvaWNlKCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH07XHJcblxyXG5cdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc3VibWl0KTtcclxuXHJcblx0Y29uc3QgaW52b2ljZSA9ICgpPT4ge1xyXG5cclxuXHRcdGxldCBzID0gMDtcclxuXHJcblx0XHRjb25zdCBpdGVtcyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmRvY3MtY2F0YWxvZ19faXRlbScpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oaXRlbXMsIGVsID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHByaWNlID0gcGFyc2VJbnQoZWwucXVlcnlTZWxlY3RvcignLmNhcnRfX3ByaWNlJykuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJykpO1xyXG5cdFx0XHRzICs9IHByaWNlO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHQvLyB0b3RhbCBzdW1cclxuXHRcdGxldCBjb3VudFVwID0gbmV3IENvdW50VXAoXHJcblx0XHRcdHRvdGFsLFxyXG5cdFx0XHRJTlRJLnN0clRvTnVtYmVyKHRvdGFsLnRleHRDb250ZW50KSxcclxuXHRcdFx0cyxcclxuXHRcdFx0MCxcclxuXHRcdFx0MC41LFxyXG5cdFx0XHRjb3VudFVwT3B0aW9uKTtcclxuXHJcblx0XHRpZiAoIWNvdW50VXAuZXJyb3IpIHtcclxuXHJcblx0XHRcdGNvdW50VXAuc3RhcnQoKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0dG90YWwudGV4dENvbnRlbnQgPSBJTlRJLnNlcE51bWJlcihzKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdC8vIGhpZGUgZm9ybSBlbXB0eVxyXG5cclxuXHRcdGlmKHMgPT09IDApIHtcclxuXHJcblx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtZW1wdHknKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0Y291bnQudGV4dENvbnRlbnQgPSBpdGVtcy5sZW5ndGggKyAnICcgKyBJTlRJLmRlY2xlbnNpb24oaXRlbXMubGVuZ3RoLCBjb3VudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVjbGVuc2lvbicpLnNwbGl0KCcsJykpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHQvLyBvcmRlclxyXG5cclxuXHRjb25zdCBuZXh0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuY2FydF9fbmV4dCcpO1xyXG5cclxuXHRuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcblxyXG5cdFx0Y29uc3QgZXZlbnRNb2RhbFNob3cgPSBuZXcgQ3VzdG9tRXZlbnQoXCJtb2RhbFNob3dcIiwge1xyXG5cdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRzZWxlY3RvcjogXCJvcmRlclwiXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHdpbmRvdy5tb2RhbC5kaXNwYXRjaEV2ZW50KGV2ZW50TW9kYWxTaG93KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydCcpKTsiLCIoIGZvcm1zID0+IHtcclxuXHJcblx0aWYoIWZvcm1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGZvcm1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRjb25zdCBjaGVja2JveGVzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3hfX2lucHV0Om5vdChbdmFsdWU9XCJhbGxcIl0pJyksXHJcblx0XHRcdCAgY2hlY2tib3hBbGwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveF9faW5wdXRbdmFsdWU9XCJhbGxcIl0nKTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZXZlbnRzID0+IHtcclxuXHJcblx0XHRcdGlmKGV2ZW50cy50YXJnZXQgPT09IGNoZWNrYm94QWxsKSB7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oY2hlY2tib3hlcywgY2hlY2tib3ggPT4gY2hlY2tib3guY2hlY2tlZCA9IGNoZWNrYm94QWxsLmNoZWNrZWQpO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0bGV0IGNvdW50ID0gMDtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShjaGVja2JveGVzLCBjaGVja2JveCA9PiBjaGVja2JveC5jaGVja2VkID8gY291bnQrKyA6ICcnKTtcclxuXHJcblx0XHRcdFx0Y2hlY2tib3hBbGwuY2hlY2tlZCA9IGNoZWNrYm94ZXMubGVuZ3RoID09PSBjb3VudDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gtbGlzdC1hbGwnKSk7XHJcblxyXG4oIGRyb3Bkb3ducyA9PiB7XHJcblxyXG5cdGlmKCFkcm9wZG93bnMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oZHJvcGRvd25zLCBlbCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgZm9ybSA9IGVsLmNsb3Nlc3QoJ2Zvcm0nKSxcclxuXHRcdFx0ICByZXNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG5cdFx0XHQgIGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxyXG5cdFx0XHQgIGJ0biA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC1kcm9wZG93bl9fYnRuJyksXHJcblx0XHRcdCAgYnRuVGV4dERlZmF1bHQgPSBidG4udGV4dENvbnRlbnQsXHJcblx0XHRcdCAgZXhwcmVzc2lvbnMgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWRlY2xlbnNpb24nKS5zcGxpdCgnLCcpLFxyXG5cdFx0XHQgIGlucHV0TGlzdCA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveC1kcm9wZG93bl9faW5wdXQnKTtcclxuXHJcblx0XHRhcnJvdy5jbGFzc05hbWUgPSdjaGVja2JveC1kcm9wZG93bl9fYXJyb3cnO1xyXG5cdFx0YXJyb3cuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNOC4zIDEwLjNhMSAxIDAgMDAwIDEuNDFsMi45MyAyLjk3Yy4yMi4yMS41LjMyLjc4LjMycy41Ni0uMS43Ny0uMzJsMi45My0yLjk2YTEuMDEgMS4wMSAwIDAwLS4zMi0xLjYzLjk5Ljk5IDAgMDAtMS4wOS4yMUwxMiAxMi42MmwtMi4zLTIuMzNhLjk5Ljk5IDAgMDAtMS40IDB6XCIvPjwvc3ZnPic7XHJcblxyXG5cdFx0cmVzZXQuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XHJcblx0XHRyZXNldC5jbGFzc05hbWUgPSAnY2hlY2tib3gtZHJvcGRvd25fX3Jlc2V0IGJ1dHRvbiBoaWRlJztcclxuXHRcdHJlc2V0LmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTEyIDEwLjU5bC01LjMtNS4zYTEgMSAwIDAwLTEuNCAxLjQyTDEwLjU4IDEybC01LjMgNS4zYTEgMSAwIDAwMS40MiAxLjRMMTIgMTMuNDJsNS4zIDUuM2ExIDEgMCAwMDEuNC0xLjQyTDEzLjQyIDEybDUuMy01LjNhMSAxIDAgMTAtMS40Mi0xLjRMMTIgMTAuNTh6XCIvPjwvc3ZnPic7XHJcblxyXG5cdFx0ZWwuYXBwZW5kQ2hpbGQoYXJyb3cpO1xyXG5cdFx0ZWwuYXBwZW5kQ2hpbGQocmVzZXQpO1xyXG5cclxuXHRcdGNvbnN0IFJlc2V0ID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0YXJyb3cuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRyZXNldC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRidG4udGV4dENvbnRlbnQgPSBidG5UZXh0RGVmYXVsdDtcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tib3gtZHJvcGRvd24tLWNoZWNrZWQnKTtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oaW5wdXRMaXN0LCBpbnB1dCA9PiB7XHJcblxyXG5cdFx0XHRcdGlucHV0LmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRmb3JtICYmIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInJlc2V0XCIsICgpID0+IFJlc2V0KCkpO1xyXG5cdFx0cmVzZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IFJlc2V0KCkpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oaW5wdXRMaXN0LCBpbnB1dCA9PiB7XHJcblxyXG5cdFx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuXHJcblx0XHRcdFx0bGV0IGNvdW50Q2hlY2tlZCA9IDAsXHJcblx0XHRcdFx0XHR0ZXh0Q2hlY2tlZDtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShpbnB1dExpc3QsIGlucHV0ID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZihpbnB1dC5jaGVja2VkKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRjb3VudENoZWNrZWQrKztcclxuXHRcdFx0XHRcdFx0dGV4dENoZWNrZWQgPSBpbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0aWYoY291bnRDaGVja2VkID09PSAwKSB7XHJcblxyXG5cdFx0XHRcdFx0YnRuLnRleHRDb250ZW50ID0gYnRuVGV4dERlZmF1bHQ7XHJcblx0XHRcdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2JveC1kcm9wZG93bi0tY2hlY2tlZCcpO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZihjb3VudENoZWNrZWQgPT09IDEpIHtcclxuXHJcblx0XHRcdFx0XHRhcnJvdy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRyZXNldC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRidG4udGV4dENvbnRlbnQgPSB0ZXh0Q2hlY2tlZDtcclxuXHRcdFx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LWRyb3Bkb3duLS1jaGVja2VkJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRhcnJvdy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRyZXNldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRidG4udGV4dENvbnRlbnQgPSBjb3VudENoZWNrZWQgKyAnICcgKyBJTlRJLmRlY2xlbnNpb24oY291bnRDaGVja2VkLCBleHByZXNzaW9ucyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblxyXG4vL1x0ZGF0YS1kZWNsZW5zaW9uXHJcblxyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCBpc0Ryb3Bkb3duID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5jaGVja2JveC1kcm9wZG93bicpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oZHJvcGRvd25zLCBlbCA9PiB7XHJcblxyXG5cdFx0XHRpZihlbCA9PT0gaXNEcm9wZG93bil7XHJcblxyXG5cdFx0XHRcdGlmKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuY2hlY2tib3gtZHJvcGRvd25fX2J0bicpKSB7XHJcblxyXG5cdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tib3gtZHJvcGRvd24tLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tib3gtZHJvcGRvd24tLW9wZW4nKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gtZHJvcGRvd24nKSk7IiwiKCBlbGVtcyA9PiB7XHJcblxyXG5cdGlmKCFlbGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0aWYgKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XHJcblxyXG5cdFx0Y29uc3QgY2FsbGJhY2sgPSAoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oZW50cmllcywgZW50cnkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZihlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IHRhcmdldCA9IGVudHJ5LnRhcmdldDtcclxuXHJcblx0XHRcdFx0XHRvYnNlcnZlci51bm9ic2VydmUodGFyZ2V0KTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBzdmcgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLmNpcmNsZS1wcm9ncmVzc19fc3ZnJyksXHJcblx0XHRcdFx0XHRcdCAgdGV4dCA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcuY2lyY2xlLXByb2dyZXNzX192YWx1ZScpLFxyXG5cdFx0XHRcdFx0XHQgIHZhbHVlID0gcGFyc2VJbnQodGV4dC50ZXh0Q29udGVudCk7XHJcblxyXG5cdFx0XHRcdFx0Ly8g0LDQvdC40LzQsNGG0LjRjyDQv9GA0L7Qs9GA0LXRgdGB0LBcclxuXHRcdFx0XHRcdGNvbnN0IGNpcmNsZSA9IHN2Zy5xdWVyeVNlbGVjdG9yKCdjaXJjbGUnKSxcclxuXHRcdFx0XHRcdFx0ICBwaTJyID0gcGFyc2VJbnQoY2lyY2xlLmdldEF0dHJpYnV0ZSgncicpKSAqIDIgKiBNYXRoLlBJO1xyXG5cclxuXHRcdFx0XHRcdGxldCBjb3VudCA9IDA7XHJcblxyXG5cdFx0XHRcdFx0aWYodmFsdWUgPiAwKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR0YXJnZXQuY2xhc3NMaXN0LmFkZCgnY2lyY2xlLXByb2dyZXNzLS1pbml0Jyk7XHJcblxyXG5cdFx0XHRcdFx0XHRjb25zdCBpZFRpbWVyID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYoY291bnQgPT09IHZhbHVlKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpZFRpbWVyKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR0ZXh0LnRleHRDb250ZW50ID0gY291bnQrKztcclxuXHJcblx0XHRcdFx0XHRcdFx0Y2lyY2xlLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIHBpMnIgLyAxMDAgKiBjb3VudCArICcgJyArIHBpMnIpO1xyXG5cclxuXHRcdFx0XHRcdFx0fSwgMTAwMCAvIHZhbHVlKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xyXG5cclxuXHRcdEFycmF5LmZyb20oZWxlbXMsIGVsID0+IG9ic2VydmVyLm9ic2VydmUoZWwpKTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNpcmNsZS1wcm9ncmVzcycpKTsiLCIoIGl0ZW1zID0+IHtcclxuXHJcblx0aWYoIWl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGl0ZW1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRjb25zdCBidG4gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLXN0YW5kYXJ0LWZvcm1fX3N1Ym1pdCcpO1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3Qgb2JqZWN0ID0ge307XHJcblx0XHRcdG5ldyBGb3JtRGF0YShmb3JtKS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiAob2JqZWN0W2tleV0gPSB2YWx1ZSkpO1xyXG5cdFx0XHRvYmplY3QudHlwZSA9IFwidXBkYXRlXCI7XHJcblx0XHRcdGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShvYmplY3QpO1xyXG5cclxuXHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiksIHtcclxuXHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxyXG5cdFx0XHRcdGJvZHk6IGpzb25cclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0XHQudGhlbihyZXN1bHQgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuXHRcdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWl0ZW1fX3RpdGxlJykudGV4dENvbnRlbnQgPSByZXN1bHQubmFtZTtcclxuXHRcdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5kb2NzLWl0ZW1fX3ByaWNlLW51bWJlcicpLnRleHRDb250ZW50ID0gcmVzdWx0LnByaWNlO1xyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQuYnV5ID09PSAnb2ZmJykge1xyXG5cclxuXHRcdFx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtYnV5LW9mZicpO1xyXG5cclxuXHRcdFx0XHRcdG5ldyBGb3JtRGF0YShmb3JtKS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS1nZXQtcHJpY2UnKS5lbGVtZW50c1trZXldO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYobmFtZSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRuYW1lLnZhbHVlID0gdmFsdWU7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1idXktb2ZmJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGNvbnN0IG9iamVjdCA9IHt9O1xyXG5cdFx0XHRuZXcgRm9ybURhdGEoZm9ybSkuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gKG9iamVjdFtrZXldID0gdmFsdWUpKTtcclxuXHRcdFx0Y29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KG9iamVjdCk7XHJcblxyXG5cdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHRcdFx0YnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGJvZHk6IGpzb25cclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0XHQudGhlbihyZXN1bHQgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKTtcclxuXHRcdFx0XHRidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUtcHJvZHVjdC1hZGQtaW4tY2FydCcpLnRleHRDb250ZW50ID0gcmVzdWx0LmFkZFByb2R1Y3Q7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGV2ZW50TW9kYWxTaG93ID0gbmV3IEN1c3RvbUV2ZW50KFwibW9kYWxTaG93XCIsIHtcclxuXHRcdFx0XHRcdGRldGFpbDoge1xyXG5cdFx0XHRcdFx0XHRzZWxlY3RvcjogXCJjYXJ0XCJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0d2luZG93Lm1vZGFsLmRpc3BhdGNoRXZlbnQoZXZlbnRNb2RhbFNob3cpO1xyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQuY291bnRDYXJ0ID09PSBcIjBcIil7XHJcblxyXG5cdFx0XHRcdFx0cmVzdWx0LmNvdW50Q2FydCA9ICcnO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NhcnQgYScpLnNldEF0dHJpYnV0ZSgnZGF0YS1jb3VudCcsIHJlc3VsdC5jb3VudENhcnQpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvY3Mtc3RhbmRhcnQtZm9ybScpKTsiLCIoIGRyb3Bkb3ducyA9PiB7XHJcblxyXG5cdGlmKCFkcm9wZG93bnMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oZHJvcGRvd25zLCBlbCA9PiB7XHJcblxyXG5cdFx0aWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bi10b2dnbGUtLXZhbHVlLWluLWJ0bicpKXtcclxuXHJcblx0XHRcdGNvbnN0IGJ0biA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi10b2dnbGVfX2J0bi12YWx1ZScpLFxyXG5cdFx0XHRcdCAgaXRlbXMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24tdG9nZ2xlX192YWx1ZScpO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShpdGVtcywgaXRlbSA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGxhYmVsID0gaXRlbS5wYXJlbnROb2RlLnRleHRDb250ZW50LnRyaW0oKTtcclxuXHJcblx0XHRcdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRidG4udGV4dENvbnRlbnQgPSBsYWJlbDtcclxuXHJcblx0XHRcdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bi10b2dnbGUtLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bi10b2dnbGUtcmFkaW8nKSl7XHJcblxyXG5cdFx0XHRjb25zdCBjdXJyZW50ID0gZWwucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLXRvZ2dsZS1yYWRpb19fY3VycmVudCcpLFxyXG5cdFx0XHRcdCAgaXRlbXMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24tdG9nZ2xlLXJhZGlvX19pdGVtJyk7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGl0ZW1zLCBpdGVtID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc3QgbGFiZWwgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi10b2dnbGUtcmFkaW9fX2xhYmVsJyksXHJcblx0XHRcdFx0XHQgIGlucHV0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tdG9nZ2xlLXJhZGlvX19pbnB1dCcpXHJcblxyXG5cdFx0XHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4gY3VycmVudC50ZXh0Q29udGVudCA9IGxhYmVsLnRleHRDb250ZW50KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpbnB1dEZpbHRlciA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi10b2dnbGVfX2lucHV0LWZpbHRlcicpO1xyXG5cclxuXHRcdGlmKGlucHV0RmlsdGVyKSB7XHJcblxyXG5cdFx0XHRjb25zdCBib2R5TWVudSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi10b2dnbGVfX21lbnUnKSxcclxuXHRcdFx0XHQgIGJvZHlNZW51Q2xvbmUgPSBib2R5TWVudS5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG5cdFx0XHRpbnB1dEZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBpbnB1dEZpbHRlci52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdFx0XHRpZih2YWx1ZS5sZW5ndGggPiAxKSB7XHJcblxyXG5cdFx0XHRcdFx0bGV0IHVsID0gJyc7XHJcblxyXG5cdFx0XHRcdFx0QXJyYXkuZnJvbShib2R5TWVudUNsb25lLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyksIGxpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnN0IGxpbmsgPSBsaS5pbm5lckhUTUwsXHJcblx0XHRcdFx0XHRcdFx0ICBjYXRlZ29yeSA9IGxpLnRleHRDb250ZW50LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYoY2F0ZWdvcnkuaW5kZXhPZih2YWx1ZSkgIT09IC0xKXtcclxuXHJcblx0XHRcdFx0XHRcdFx0dWwgKz0gJzxsaT4nICsgbGluayArICc8L2xpPic7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0aWYodWwubGVuZ3RoKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRib2R5TWVudS5pbm5lckhUTUwgPSB1bDtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0Ym9keU1lbnUuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlX19saW5rXCI+JyArIGlucHV0RmlsdGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1lbXB0eScpICsgJzwvc3Bhbj4nO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRib2R5TWVudS5pbm5lckhUTUwgPSBib2R5TWVudUNsb25lLmlubmVySFRNTDtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaXNEcm9wZG93biA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZHJvcGRvd24tdG9nZ2xlJyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShkcm9wZG93bnMsIGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3Bkb3duLXRvZ2dsZS0tb3BlbicsIGVsID09PSBpc0Ryb3Bkb3duICYmIGlzRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bi10b2dnbGUtLW9wZW4nKSA9PT0gZmFsc2UpKTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24tdG9nZ2xlJykpOyIsIiggaXRlbXMgPT4ge1xyXG5cclxuXHRpZighaXRlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IHJlc3VsdEhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyLXJlc3VsdCcpO1xyXG5cclxuXHRjb25zdCBzdWJtaXQgPSBmb3JtID0+IHtcclxuXHJcblx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0fSlcclxuXHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmh0bWwoKSlcclxuXHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuXHRcdFx0cmVzdWx0SFRNTC5pbm5lckhUTUwgPSByZXN1bHQ7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH07XHJcblxyXG5cdEFycmF5LmZyb20oaXRlbXMsIGZvcm0gPT4ge1xyXG5cclxuXHRcdGNvbnN0IGJ0biA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fc3VibWl0Jyk7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsICgpID0+IHtcclxuXHJcblx0XHRcdGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRzdWJtaXQoZm9ybSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XHJcblxyXG5cdFx0XHRpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmaWx0ZXJfX3RhZycpKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGl0ZW0gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmZpbHRlci10YWdzX19pdGVtJyk7XHJcblxyXG5cdFx0XHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihJTlRJLmNzc0FuaW1hdGlvbigndHJhbnNpdGlvbicpLCAoKT0+IHtcclxuXHJcblx0XHRcdFx0XHRpZihmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX3RhZycpLmxlbmd0aCA9PT0gMSkge1xyXG5cclxuXHRcdFx0XHRcdFx0aXRlbS5jbG9zZXN0KCcuZmlsdGVyX19pdGVtJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpdGVtLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0aXRlbS5jbGFzc0xpc3QuYWRkKCdpcy1yZW1vdmUnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN1Ym1pdChmb3JtKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHN1Ym1pdChmb3JtKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBtZW51IHRhc2dcclxuXHJcblx0XHRjb25zdCBib3hUYWdzID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLXRhZ3MnKTtcclxuXHJcblx0XHRpZihib3hUYWdzKSB7XHJcblxyXG5cdFx0XHRjb25zdCB0YWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtdGFnc19fdGFnW2RhdGEtdmFsdWVdJyksXHJcblx0XHRcdFx0ICB0ZW1wbGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2ZpbHRlci10YWdzLXRlbXBsYXRlJykuaW5uZXJIVE1MO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbSh0YWdzLCBsaW5rID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc3QgbGFiZWwgPSBsaW5rLnRleHRDb250ZW50LnRyaW0oKSxcclxuXHRcdFx0XHRcdCAgdmFsdWUgPSBsaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xyXG5cclxuXHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IGFwcGVuZCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0QXJyYXkuZnJvbShib3hUYWdzLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JyksIGlucHV0ID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGlmKCBpbnB1dC52YWx1ZSA9PT0gdmFsdWUpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0YXBwZW5kID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0aWYoYXBwZW5kKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRjb25zdCBjaGVja2JveCA9IE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZSwgeyBsYWJlbCwgdmFsdWUgfSk7XHJcblxyXG5cdFx0XHRcdFx0XHRib3hUYWdzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgY2hlY2tib3gpO1xyXG5cclxuXHRcdFx0XHRcdFx0c3VibWl0KGZvcm0pO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcicpKTtcclxuXHJcbi8vIGJ0bSB0b2dnbGUgZmlsdGVyIGluIHRhYmxldHxtb2JpbGVcclxuXHJcbiggYnRucyA9PiB7XHJcblxyXG5cdGlmKGJ0bnMubGVuZ3RoKSB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShidG5zLCBidG4gPT4ge1xyXG5cclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2ZpbHRlci1zaG93JykpO1xyXG5cclxuXHRcdH0pXHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tb3Blbi1maWx0ZXIsIC5zZWFyY2gtbWVudV9fdG9nZ2xlLWZpbHRlcicpKTtcclxuXHJcblxyXG4vLyBmaWx0ZXItc29ydC10cmlnZ2VyXHJcblxyXG4oIGZvcm0gPT4ge1xyXG5cclxuXHRpZihmb3JtLmxlbmd0aCkge1xyXG5cclxuXHRcdEFycmF5LmZyb20oZm9ybSwgZm9ybSA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG5cclxuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHRcdFx0XHRmaWx0ZXIuZWxlbWVudHMuc29ydC52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHRcdFx0XHRmaWx0ZXIuZWxlbWVudHMuc29ydC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSk7XHJcblx0XHRcdFx0ZmlsdGVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pXHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXItc29ydC10cmlnZ2VyJykpOyIsIiggaXRlbXMgPT4ge1xyXG5cclxuXHRpZighaXRlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oaXRlbXMsIGZvcm0gPT4ge1xyXG5cclxuXHRcdGNvbnN0IHJlc3VsdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgZm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVzdWx0JykpO1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3Qgb2JqZWN0ID0ge307XHJcblx0XHRcdG5ldyBGb3JtRGF0YShmb3JtKS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiAob2JqZWN0W2tleV0gPSB2YWx1ZSkpO1xyXG5cdFx0XHRjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkob2JqZWN0KTtcclxuXHJcblx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKFwiYWN0aW9uXCIpLCB7XHJcblx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcclxuXHRcdFx0XHRib2R5OiBqc29uXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmh0bWwoKSlcclxuXHRcdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcblx0XHRcdFx0cmVzdWx0Q29udGFpbmVyLmlubmVySFRNTCA9IHJlc3VsdDtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWh0bWwnKSk7IiwiKCBpdGVtcyA9PiB7XHJcblxyXG5cdGlmKCFpdGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShpdGVtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaXRlbSA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tcmVxdWlyZWRfX2l0ZW0nKSxcclxuXHRcdFx0ICBzdWJtaXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXJlcXVpcmVkX19zdWJtaXQnKTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IGZhbGlkID0gdHJ1ZTtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oaXRlbSwgZWwgPT4ge1xyXG5cclxuXHRcdFx0XHRpZihlbC52YWx1ZSA9PT0gJ25vbmUnKSB7XHJcblxyXG5cdFx0XHRcdFx0ZmFsaWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZihmYWxpZCkge1xyXG5cclxuXHRcdFx0XHRzdWJtaXQuZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1yZXF1aXJlZCcpKTsiLCIoIGl0ZW1zID0+IHtcclxuXHJcblx0aWYoIWl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGl0ZW1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRjb25zdCBidG4gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19zdWJtaXQnKSxcclxuXHRcdFx0ICBva1RleHQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19vaycpLFxyXG5cdFx0XHQgIGVycm9yVGV4dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm1fX2Vycm9yJyk7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1sb2FkaW5nJyk7XHJcblx0XHRcdGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0XHQudGhlbihyZXN1bHQgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKTtcclxuXHRcdFx0XHRidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0aWYocmVzdWx0Lm1zZykge1xyXG5cclxuXHRcdFx0XHRcdGZvcm0ucmVzZXQoKTtcclxuXHJcblx0XHRcdFx0XHRtb2RhbC5vayhyZXN1bHQubXNnLnRpdGxlLCByZXN1bHQubXNnLnRleHQpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyDRgNC10LfRg9C70YzRgtCw0YIg0YPRgdC/0LXRhdCwINC30LDRj9Cy0LrQuCBxdWFsaXR5XHJcblxyXG5cdFx0XHRcdGlmKHJlc3VsdC5tb2RhbCA9PT0gJ3F1YWxpdHktb2snKSB7XHJcblxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1YWxpdHktcmVzdWx0X19udW1iZXInKS50ZXh0Q29udGVudCA9IHJlc3VsdC5udW1iZXI7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVhbGl0eS1yZXN1bHRfX3Byb2R1Y3QnKS50ZXh0Q29udGVudCA9IHJlc3VsdC5wcm9kdWN0TmFtZTtcclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWFsaXR5LXJlc3VsdF9fcHJvZHVjdCcpLmdldEF0dHJpYnV0ZSgnaHJlZicsIHJlc3VsdC5wcm9kdWN0TGluayk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgZXZlbnRNb2RhbFNob3cgPSBuZXcgQ3VzdG9tRXZlbnQoXCJtb2RhbFNob3dcIiwge1xyXG5cdFx0XHRcdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRcdFx0XHRzZWxlY3RvcjogcmVzdWx0Lm1vZGFsXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdHdpbmRvdy5tb2RhbC5kaXNwYXRjaEV2ZW50KGV2ZW50TW9kYWxTaG93KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaW5mbyBtb2RhbFxyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQudHlwZSA9PT0gJ29rJyB8fCByZXN1bHQudHlwZSA9PT0gJ2Vycm9yJykge1xyXG5cclxuXHRcdFx0XHRcdG1vZGFsLm9rKHJlc3VsdC50aXRsZSwgcmVzdWx0LnRleHQsIHJlc3VsdC5tb2QpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBvayBpbiBmb3JtXHJcblxyXG5cdFx0XHRcdGlmKG9rVGV4dCkge1xyXG5cclxuXHRcdFx0XHRcdGlmKHJlc3VsdC50eXBlID09PSAnZm9ybS1vaycpIHtcclxuXHJcblx0XHRcdFx0XHRcdG9rVGV4dC50ZXh0Q29udGVudCA9IHJlc3VsdC50ZXh0O1xyXG5cdFx0XHRcdFx0XHRva1RleHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYoIUlOVEkuaXNJblZpZXdwb3J0KG9rVGV4dCkpe1xyXG5cclxuXHRcdFx0XHRcdFx0XHRva1RleHQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdG9rVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBlcnJvciBpbiBmb3JtXHJcblxyXG5cdFx0XHRcdGlmKGVycm9yVGV4dCkge1xyXG5cclxuXHRcdFx0XHRcdGlmKHJlc3VsdC50eXBlID09PSAnZm9ybS1lcnJvcicpIHtcclxuXHJcblx0XHRcdFx0XHRcdGVycm9yVGV4dC50ZXh0Q29udGVudCA9IHJlc3VsdC50ZXh0O1xyXG5cdFx0XHRcdFx0XHRlcnJvclRleHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYoIUlOVEkuaXNJblZpZXdwb3J0KGVycm9yVGV4dCkpe1xyXG5cclxuXHRcdFx0XHRcdFx0XHRlcnJvclRleHQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdGVycm9yVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyByZWRpcmVjdFxyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQucmVkaXJlY3QpIHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBkZWxheSA9IHJlc3VsdC5yZWRpcmVjdERlbGF5ID8gcmVzdWx0LnJlZGlyZWN0RGVsYXkgKiAxMDAwIDogMDtcclxuXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKT0+IGxvY2F0aW9uLmFzc2lnbihyZXN1bHQucmVkaXJlY3QpLCBkZWxheSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtJykpOyIsIiggaW1nID0+IHtcclxuXHJcblx0aWYoaW1nKSB7XHJcblxyXG5cdFx0Y29uc3QgYmlnID0gaW1nLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3X19iaWctaXRlbScpO1xyXG5cclxuXHRcdGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGlmKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc3dpcGVyLWdhbGxlcnktcHJldmlld19fbGluaycpKSB7XHJcblxyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdGlmKCFldmVudC50YXJnZXQuY2xvc2VzdCgnLnN3aXBlci1jb250YWluZXItc3R5bGUnKSl7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgaXRlbSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc3dpcGVyLWdhbGxlcnktcHJldmlld19faXRlbScpO1xyXG5cclxuXHRcdFx0XHRcdEFycmF5LmZyb20oaW1nLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3X19pdGVtJyksIChlbCxpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtY3VycmVudCcsIGl0ZW0gPT09IGVsKTtcclxuXHRcdFx0XHRcdFx0YmlnW2luZGV4XS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgaXRlbSAhPT0gZWwpO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3JykpOyIsIiggZWxlbXMgPT4ge1xyXG5cclxuXHRpZighZWxlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGlmICgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xyXG5cclxuXHRcdGNvbnN0IGNhbGxiYWNrID0gKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGVudHJpZXMsIGVudHJ5ID0+IHtcclxuXHJcblx0XHRcdFx0aWYoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSBlbnRyeS50YXJnZXQ7XHJcblxyXG5cdFx0XHRcdFx0b2JzZXJ2ZXIudW5vYnNlcnZlKHRhcmdldCk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgYmFyID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5saW5lLXByb2dyZXNzX19iYXInKSxcclxuXHRcdFx0XHRcdFx0ICB0ZXh0ID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5saW5lLXByb2dyZXNzX192YWx1ZScpLFxyXG5cdFx0XHRcdFx0XHQgIHZhbHVlID0gcGFyc2VJbnQodGV4dC50ZXh0Q29udGVudCk7XHJcblxyXG5cdFx0XHRcdFx0Ly8g0LDQvdC40LzQsNGG0LjRjyDQv9GA0L7Qs9GA0LXRgdGB0LBcclxuXHRcdFx0XHRcdGxldCBjb3VudCA9IDA7XHJcblxyXG5cdFx0XHRcdFx0aWYodmFsdWUgPiAwKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR0YXJnZXQuY2xhc3NMaXN0LmFkZCgnbGluZS1wcm9ncmVzcy0taW5pdCcpO1xyXG5cclxuXHRcdFx0XHRcdFx0Y29uc3QgaWRUaW1lciA9IHNldEludGVydmFsKCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmKGNvdW50ID09PSB2YWx1ZSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoaWRUaW1lcik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0YmFyLnN0eWxlLndpZHRoID0gY291bnQgKyAnJSc7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHRleHQudGV4dENvbnRlbnQgPSBjb3VudCsrO1xyXG5cclxuXHRcdFx0XHRcdFx0fSwgMTAwMCAvIHZhbHVlKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xyXG5cclxuXHRcdEFycmF5LmZyb20oZWxlbXMsIGVsID0+IG9ic2VydmVyLm9ic2VydmUoZWwpKTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmUtcHJvZ3Jlc3MnKSk7IiwiKCBmb3JtcyA9PiB7XHJcblxyXG5cdGlmKCFmb3Jtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShmb3JtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5saXZlLXNlYXJjaF9faW5wdXQnKSxcclxuXHRcdFx0ICByZXN1bHQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5saXZlLXNlYXJjaF9fcmVzdWx0Jyk7XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRpZihpbnB1dC52YWx1ZS5sZW5ndGggPiAyICYmIGV2ZW50LmtleSAhPT0gJ2VudGVyJyl7XHJcblxyXG5cdFx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnbGl2ZS1zZWFyY2gtLWxvYWRpbmcnLCAnbGl2ZS1zZWFyY2gtLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG5cdFx0XHRcdC50aGVuKGh0bWwgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGh0bWwpO1xyXG5cclxuXHRcdFx0XHRcdHJlc3VsdC5pbm5lckhUTUwgPSBodG1sO1xyXG5cdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdsaXZlLXNlYXJjaC0tbG9hZGluZycpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINGB0LrRgNGL0YLRjCDRgNGD0LfQtdC70YzRgtCw0YLRiyDQv9GA0Lgg0LrQu9C40LrQtSDQstC90LUg0YTQvtGA0LzRi1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCBpc0Zvcm0gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmxpdmUtc2VhcmNoJyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShmb3JtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0XHRpZihpc0Zvcm0gIT09IGZvcm0pIHtcclxuXHJcblx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdsaXZlLXNlYXJjaC0tb3BlbicpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXZlLXNlYXJjaCcpKTsiLCIoIGVsZW1zID0+IHtcclxuXHJcblx0aWYoIWVsZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHRzY3JpcHQuc3JjID0gJy9qcy9pbnB1dG1hc2subWluLmpzJztcclxuXHRzY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG5cclxuXHRcdEFycmF5LmZyb20oZWxlbXMsIGVsID0+IHtcclxuXHJcblx0XHRcdGxldCBtYXNrSW5wdXQ7XHJcblxyXG5cdFx0XHRpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0bWFzay0tcGhvbmUnKSkge1xyXG5cclxuXHRcdFx0XHRtYXNrSW5wdXQgPSBuZXcgSW5wdXRtYXNrKHtcclxuXHRcdFx0XHRcdG1hc2s6IFwiWys3XXw4LTk5OS05OTktOTktOTlcIixcclxuXHRcdFx0XHRcdHNob3dNYXNrT25Ib3ZlcjogZmFsc2VcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1hc2tJbnB1dC5tYXNrKGVsKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fTtcclxuXHJcblx0c2V0VGltZW91dCggKCkgPT4gZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpLCBDb29raWVzLmdldCgnZmFzdExvYWRTY3JpcHQnKSA/IDAgOiAxMDAwMCk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXRtYXNrJykpOyIsIi8vIGJ0biB0b2dnbGVcclxuXHJcbiggYnRuID0+IHtcclxuXHJcblx0aWYoYnRuKSB7XHJcblxyXG5cdFx0bGV0IHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZihkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnbWVudS1zaG93JykpIHtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXNob3cnKTtcclxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCx3aW5kb3dTY3JvbGwpO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21lbnUtc2hvdycpO1xyXG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLW1lbnUtdG9nZ2xlJykpO1xyXG5cclxuLy8gbWVudS10YWdzXHJcblxyXG4oIGJ0bnMgPT4ge1xyXG5cclxuXHRpZihidG5zLmxlbmd0aCkge1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgaXNCdG4gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1lbnUtdGFnc19fYnRuJyk7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGJ0bnMsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRcdGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnLCBidG4gPT09IGlzQnRuICYmIGlzQnRuLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykgPT09IGZhbHNlKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYoaXNCdG4pIHtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdmaWx0ZXItc2hvdycpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS10YWdzX19idG4nKSk7IiwiKCBpdGVtcyA9PiB7XHJcblxyXG5cdGlmKGl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdEFycmF5LmZyb20oaXRlbXMsIGxpbmsgPT4ge1xyXG5cclxuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0Y29uc3Qgc3JjID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXBob3RvJykuaW5uZXJIVE1MID0gJzxpbWcgc3JjPVwiJyArIHNyYyArICdcIj4nO1xyXG5cclxuXHRcdFx0XHRjb25zdCBldmVudE1vZGFsU2hvdyA9IG5ldyBDdXN0b21FdmVudChcIm1vZGFsU2hvd1wiLCB7XHJcblx0XHRcdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRcdFx0c2VsZWN0b3I6IFwicGhvdG9cIlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR3aW5kb3cubW9kYWwuZGlzcGF0Y2hFdmVudChldmVudE1vZGFsU2hvdyk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWltZycpKTsiLCIoIG1vZGFsID0+IHtcclxuXHJcblx0aWYoIW1vZGFsKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19pdGVtJyksXHJcblx0XHQgIGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbF0nKSxcclxuXHRcdCAgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XHJcblxyXG5cdGxldCBhY3RpdmVNb2RhbCA9IG51bGwsXHJcblx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUnLCAoKSA9PiB7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1zaG93Jyk7XHJcblx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IDA7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCx3aW5kb3dTY3JvbGwpO1xyXG5cdFx0YWN0aXZlTW9kYWwgPSBmYWxzZTtcclxuXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IG1vZGFsU2hvdyA9IHNlbGVjdG9yID0+IHtcclxuXHJcblx0XHRpZighYWN0aXZlTW9kYWwpe1xyXG5cclxuXHRcdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRhY3RpdmVNb2RhbCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tJyArIHNlbGVjdG9yKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGl0ZW1zLCBlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCd2aXN1YWxseWhpZGRlbicsIGVsICE9PSBhY3RpdmVNb2RhbCkpO1xyXG5cclxuXHRcdHdyYXBwZXIuc3R5bGUudG9wID0gLXdpbmRvd1Njcm9sbCArICdweCc7XHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXNob3cnKTtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG5cclxuXHRcdGFjdGl2ZU1vZGFsLmZvY3VzKCk7XHJcblxyXG5cdH07XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsJykgfHwgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbF9fY2xvc2UnKSl7XHJcblxyXG5cdFx0XHRpZihldmVudC50YXJnZXQuY2xvc2VzdCgnW2RhdGEtbW9kYWxdJykgPT09IG51bGwpIHtcclxuXHJcblx0XHRcdFx0bW9kYWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJoaWRlXCIpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRBcnJheS5mcm9tKGJ0bnMsIGJ0biA9PlxyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cclxuXHRcdFx0bW9kYWxTaG93KGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwnKSkpKTtcclxuXHJcblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignbW9kYWxTaG93JywgZXZlbnQgPT4gbW9kYWxTaG93KGV2ZW50LmRldGFpbC5zZWxlY3RvcikpO1xyXG5cclxuXHRtb2RhbC5vayA9ICh0aXRsZSwgdGV4dCwgbW9kID0gJycpID0+IHtcclxuXHJcblx0XHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLW9rJykuc2V0QXR0cmlidXRlKCdkYXRhLW1vZCcsIG1vZCk7XHJcblx0XHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLW9rIC5tb2RhbC1taW5pX190aXRsZScpLmlubmVySFRNTCA9IHRpdGxlID8gdGl0bGUgOiAnJztcclxuXHRcdG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tb2sgLm1vZGFsLW1pbmlfX3RleHQnKS5pbm5lckhUTUwgPSB0ZXh0ID8gdGV4dCA6ICcnO1xyXG5cdFx0bW9kYWxTaG93KCdvaycpO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKSk7IiwiKCBwcm9kdWN0ID0+IHtcclxuXHJcblx0aWYoIXByb2R1Y3QpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgbGlua0JhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZC1iYWNrIC5saW5rJyksXHJcblx0XHQgIHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdF9fdGFiJyk7XHJcblxyXG5cdGNvbnN0IGluaXRpYWwgPSB0YWI9PiB7XHJcblxyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RfX2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1pbml0aWFsJywgdGFiID09PSAnbWFpbicpO1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RfX2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1sb2NrJywgdGFiID09PSAnbG9jaycpO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGhpc3RvcnlCYWNrID0gZXZlbnQ9PiB7XHJcblxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRoaXN0b3J5LmJhY2soKTtcclxuXHJcblx0fVxyXG5cclxuXHRpZihkb2N1bWVudC5yZWZlcnJlci5pbmRleE9mKGxvY2F0aW9uLmhvc3RuYW1lKSA+IDApIHtcclxuXHJcblx0XHRsaW5rQmFjay5vbmNsaWNrID0gaGlzdG9yeUJhY2s7XHJcblxyXG5cdH1cclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaGFzaCA9IGxvY2F0aW9uLmhhc2gsXHJcblx0XHRcdCAgbW9kVGFiID0gaGFzaCA9PT0gJycgPyAnbWFpbicgOiBoYXNoLnNsaWNlKDEpLFxyXG5cdFx0XHQgIG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9fdGFiLS0nICsgbW9kVGFiKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKHRhYnMsIHRhYiA9PiB0YWIuY2xhc3NMaXN0LnRvZ2dsZSgndmlzdWFsbHloaWRkZW4nLCBuZXh0ICE9PSB0YWIpKTtcclxuXHJcblx0XHRpZihsaW5rQmFjay5vbmNsaWNrID09PSBudWxsKSB7XHJcblxyXG5cdFx0XHRsaW5rQmFjay5vbmNsaWNrID0gaGlzdG9yeUJhY2s7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJykpe1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd2aWRlbycpLCB2aWRlbyA9PiB2aWRlby5wYXVzZSgpKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aW5pdGlhbChtb2RUYWIpO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0JykpOyIsIiggZWxlbXMgPT4ge1xyXG5cclxuXHRpZighZWxlbXMpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0aWYgKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XHJcblxyXG5cdFx0Y29uc3QgY2FsbGJhY2sgPSAoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oZW50cmllcywgZW50cnkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZihlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IHRhcmdldCA9IGVudHJ5LnRhcmdldDtcclxuXHJcblx0XHRcdFx0XHRvYnNlcnZlci51bm9ic2VydmUodGFyZ2V0KTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXHJcblx0XHRcdFx0XHRcdCAgdGV4dCA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcucmV2aWV3LXN0YXRfX2RldGFpbHMtdmFsdWUnKSxcclxuXHRcdFx0XHRcdFx0ICB2YWx1ZSA9IHBhcnNlRmxvYXQodGV4dC50ZXh0Q29udGVudCkgKiAyMDsgLy8gNS4wIG1heCwg0LTQu9GPIDEwMCUg0YPQvNC90L7QttCw0LXQvCDQvdCwIDIwXHJcblxyXG5cdFx0XHRcdFx0YmFyLmNsYXNzTmFtZSA9ICdyZXZpZXctc3RhdF9fZGV0YWlscy1wcm9ncmVzcyc7XHJcblx0XHRcdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoYmFyKTtcclxuXHJcblx0XHRcdFx0XHQvLyDQsNC90LjQvNCw0YbQuNGPINC/0YDQvtCz0YDQtdGB0YHQsFxyXG5cdFx0XHRcdFx0bGV0IGNvdW50ID0gMDtcclxuXHJcblx0XHRcdFx0XHRpZih2YWx1ZSA+IDApIHtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnN0IGlkVGltZXIgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRjb3VudCsrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZihjb3VudCA9PT0gdmFsdWUpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRjbGVhckludGVydmFsKGlkVGltZXIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdGJhci5zdHlsZS53aWR0aCA9IGNvdW50ICsgJyUnO1xyXG5cclxuXHRcdFx0XHRcdFx0fSwgMTAwMCAvIHZhbHVlKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xyXG5cclxuXHRcdEFycmF5LmZyb20oZWxlbXMucXVlcnlTZWxlY3RvckFsbCgnLnJldmlldy1zdGF0X19kZXRhaWxzLXJvdycpLCBlbCA9PiBvYnNlcnZlci5vYnNlcnZlKGVsKSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXZpZXctc3RhdF9fZGV0YWlscycpKTsiLCIoIGl0ZW1zID0+IHtcclxuXHJcblx0aWYoIWl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGl0ZW1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRBcnJheS5mcm9tKGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLXJldmlld19fY29udHJvbCcpLCBidG4gPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdmFsdWUgPSBidG4ucXVlcnlTZWxlY3RvcignLm1vZGFsLXJldmlld19fdmFsdWUnKSxcclxuXHRcdFx0XHQgIHN0YXJzID0gYnRuLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1yZXZpZXdfX2lucHV0Jyk7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKHN0YXJzLCBpbnB1dCA9PiB7XHJcblxyXG5cdFx0XHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHZhbHVlLnRleHRDb250ZW50ID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXInKSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtcmV2aWV3JykpOyIsIiggZm9ybXMgPT4ge1xyXG5cclxuXHRpZighZm9ybXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oZm9ybXMsIGVsZW0gPT4ge1xyXG5cclxuXHRcdGNvbnN0IGZvcm0gPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbWVudV9fZm9ybScpLFxyXG5cdFx0XHQgIGlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuaW5wdXQnKSxcclxuXHRcdFx0ICBidG5Ub2dnbGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbWVudV9fdG9nZ2xlLW1lbnUnKTtcclxuXHJcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IGVsZW0uY2xhc3NMaXN0LmFkZCgnaXMtZm9ybS1vbmx5JykpO1xyXG5cclxuXHRcdGJ0blRvZ2dsZSAmJiBidG5Ub2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuXHJcblx0XHRcdGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZnVsbCcpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRpZihldmVudC50YXJnZXQuY2xvc2VzdCgnLnNlYXJjaC1tZW51X19mb3JtJykgPT09IG51bGwpIHtcclxuXHJcblx0XHRcdFx0ZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1mb3JtLW9ubHknKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VhcmNoLW1lbnUnKSk7Iiwid2luZG93LnNlbGVjdHMgPSBzZWxlY3QgPT4ge1xyXG5cclxuXHRpZihzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fbGlzdCcpKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHQgIGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuXHRhcnJvdy5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk04LjMgMTAuM2ExIDEgMCAwMDAgMS40MWwyLjkzIDIuOTdjLjIyLjIxLjUuMzIuNzguMzJzLjU2LS4xLjc3LS4zMmwyLjkzLTIuOTZhMS4wMSAxLjAxIDAgMDAtLjMyLTEuNjMuOTkuOTkgMCAwMC0xLjA5LjIxTDEyIDEyLjYybC0yLjMtMi4zM2ExIDEgMCAwMC0xLjQgMHpcIi8+PC9zdmc+JztcclxuXHJcblx0dmFsdWUuY2xhc3NOYW1lID0gJ3NlbGVjdF9fdmFsdWUnO1xyXG5cdHZhbHVlLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cInNlbGVjdF9fdmFsdWUtaW5uZXJcIj48L3NwYW4+JztcclxuXHJcblx0dmFsdWUuYXBwZW5kQ2hpbGQoYXJyb3cpO1xyXG5cdHNlbGVjdC5hcHBlbmRDaGlsZCh2YWx1ZSk7XHJcblxyXG5cdGNvbnN0IGZvcm0gPSBzZWxlY3QuY2xvc2VzdCgnZm9ybScpLFxyXG5cdFx0Y29udHJvbCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcclxuXHRcdG9wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKSxcclxuXHRcdHZhbHVlVGV4dCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X192YWx1ZS1pbm5lcicpLFxyXG5cdFx0bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRsaXN0LmNsYXNzTmFtZSA9ICdzZWxlY3RfX2xpc3QnO1xyXG5cclxuXHRsZXQgc2VsZWN0ZWQgPSBjb250cm9sLnF1ZXJ5U2VsZWN0b3IoJ1t2YWx1ZT1cIicgKyBjb250cm9sLnZhbHVlICsgJ1wiXScpO1xyXG5cclxuXHRjb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHNlbGVjdGVkID0gY29udHJvbC5xdWVyeVNlbGVjdG9yKCdbdmFsdWU9XCInICsgY29udHJvbC52YWx1ZSArICdcIl0nKTtcclxuXHJcblx0XHR2YWx1ZVRleHQudGV4dENvbnRlbnQgPSBzZWxlY3RlZC50ZXh0Q29udGVudDtcclxuXHJcblx0XHRzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0LS1kZWZhdWx0Jyk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB2YWx1ZURlZmF1bHQgPSBzZWxlY3RlZC50ZXh0Q29udGVudDtcclxuXHJcblx0aWYoY29udHJvbC5kaXNhYmxlZCl7XHJcblxyXG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC0tZGlzYWJsZWQnKTtcclxuXHJcblx0fVxyXG5cclxuXHRpZihjb250cm9sLnZhbHVlID09PSAnbm9uZScgfHwgY29udHJvbC52YWx1ZSA9PT0gJycpe1xyXG5cclxuXHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtLWRlZmF1bHQnKTtcclxuXHJcblx0fVxyXG5cclxuXHR2YWx1ZVRleHQudGV4dENvbnRlbnQgPSBzZWxlY3QucXVlcnlTZWxlY3Rvcignb3B0aW9uW3ZhbHVlPVwiJyArIGNvbnRyb2wudmFsdWUgKyAnXCJdJykudGV4dENvbnRlbnQ7XHJcblxyXG5cdEFycmF5LmZyb20ob3B0aW9uLCBlbCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuXHRcdG8uY2xhc3NOYW1lID0gJ2J1dHRvbiBzZWxlY3RfX2xpc3QtaXRlbSc7XHJcblxyXG5cdFx0by5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcblx0XHRvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBlbC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpO1xyXG5cclxuXHRcdG8udGV4dENvbnRlbnQgPSBlbC50ZXh0Q29udGVudDtcclxuXHJcblx0XHRsaXN0LmFwcGVuZENoaWxkKG8pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0c2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0X19saXN0LWl0ZW0nKSl7XHJcblxyXG5cdFx0XHRjb250cm9sLnZhbHVlID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxuXHJcblx0XHRcdGNvbnRyb2wuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdFx0aWYoZm9ybSkge1xyXG5cclxuXHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRzZWxlY3QuYXBwZW5kQ2hpbGQobGlzdCk7XHJcblxyXG5cdGZvcm0gJiYgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwicmVzZXRcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtLWRlZmF1bHQnKTtcclxuXHRcdHZhbHVlVGV4dC50ZXh0Q29udGVudCA9IHZhbHVlRGVmYXVsdDtcclxuXHJcblx0fSk7XHJcblxyXG59O1xyXG5cclxuKCAoKSA9PiB7XHJcblxyXG5cdHdpbmRvdy5zZWxlY3RzQ29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QnKTtcclxuXHJcblx0aWYod2luZG93LnNlbGVjdHNDb2xsZWN0aW9uLmxlbmd0aCkge1xyXG5cclxuXHRcdEFycmF5LmZyb20od2luZG93LnNlbGVjdHNDb2xsZWN0aW9uLCBzZWxlY3QgPT4gd2luZG93LnNlbGVjdHMoc2VsZWN0KSk7XHJcblxyXG5cdH1cclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaXNTZWxlY3QgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNlbGVjdCcpO1xyXG5cclxuXHRcdEFycmF5LmZyb20od2luZG93LnNlbGVjdHNDb2xsZWN0aW9uLCBzZWxlY3QgPT4ge1xyXG5cclxuXHRcdFx0c2VsZWN0LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdC0tb3BlbicsIHNlbGVjdCA9PT0gaXNTZWxlY3QgJiYgaXNTZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3QtLW9wZW4nKSA9PT0gZmFsc2UpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKCk7IiwiKCBzbGlkZXJzID0+IHtcclxuXHJcblx0aWYoIXNsaWRlcnMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IG5vVWlTbGlkZXJJbml0ID0gKCkgPT4ge1xyXG5cclxuXHRcdEFycmF5LmZyb20oc2xpZGVycywgc2xpZGVyID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHRyYWNrID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3RyYWNrJyksXHJcblx0XHRcdFx0ICBmb3JtID0gc2xpZGVyLmNsb3Nlc3QoJ2Zvcm0nKSxcclxuXHRcdFx0XHQgIG1pbklucHV0ID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX21pbicpLFxyXG5cdFx0XHRcdCAgbWF4SW5wdXQgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fbWF4JyksXHJcblx0XHRcdFx0ICBtaW4gICA9IHBhcnNlSW50KHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWluJykpLFxyXG5cdFx0XHRcdCAgbWF4ICAgPSBwYXJzZUludChzbGlkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLW1heCcpKSxcclxuXHRcdFx0XHQgIHN0ZXAgID0gcGFyc2VJbnQoc2xpZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGVwJykpO1xyXG5cclxuXHRcdFx0bm9VaVNsaWRlci5jcmVhdGUodHJhY2ssIHtcclxuXHRcdFx0XHRzdGFydDogW21pbixtYXhdLFxyXG5cdFx0XHRcdHN0ZXA6IHN0ZXAsXHJcblx0XHRcdFx0Y29ubmVjdDogdHJ1ZSxcclxuXHRcdFx0XHRyYW5nZToge1xyXG5cdFx0XHRcdFx0J21pbic6IG1pbixcclxuXHRcdFx0XHRcdCdtYXgnOiBtYXhcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dHJhY2subm9VaVNsaWRlci5vbignc2xpZGUnLCB2YWx1ZXMgPT4ge1xyXG5cclxuXHRcdFx0XHRtaW5JbnB1dC52YWx1ZSA9IHBhcnNlSW50KHZhbHVlc1swXSk7XHJcblx0XHRcdFx0bWF4SW5wdXQudmFsdWUgPSBwYXJzZUludCh2YWx1ZXNbMV0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0cmFjay5ub1VpU2xpZGVyLm9uKCdlbmQnLCB2YWx1ZXMgPT4ge1xyXG5cclxuXHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKFwicmVzZXRcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHR0cmFjay5ub1VpU2xpZGVyLnNldChbbWluLG1heF0pO1xyXG5cclxuXHRcdFx0XHRtaW5JbnB1dC52YWx1ZSA9IG1pbjtcclxuXHRcdFx0XHRtYXhJbnB1dC52YWx1ZSA9IG1heDtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRpZihldmVudC50YXJnZXQgPT09IG1heElucHV0IHx8IGV2ZW50LnRhcmdldCA9PT0gbWluSW5wdXQpIHtcclxuXHJcblx0XHRcdFx0XHR0cmFjay5ub1VpU2xpZGVyLnNldChbcGFyc2VJbnQobWluSW5wdXQudmFsdWUpLHBhcnNlSW50KG1heElucHV0LnZhbHVlKV0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdG1heElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4gbWF4SW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UoMCw5OSkpO1xyXG5cdFx0XHRtaW5JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IG1pbklucHV0LnNldFNlbGVjdGlvblJhbmdlKDAsOTkpKTtcclxuXHJcblx0XHRcdGlmKG1pbiAhPT0gcGFyc2VJbnQobWluSW5wdXQudmFsdWUpIHx8IG1heCAhPT0gcGFyc2VJbnQobWF4SW5wdXQudmFsdWUpKSB7XHJcblxyXG5cdFx0XHRcdHRyYWNrLm5vVWlTbGlkZXIuc2V0KFtwYXJzZUludChtaW5JbnB1dC52YWx1ZSkscGFyc2VJbnQobWF4SW5wdXQudmFsdWUpXSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8vIGxvYWRcclxuXHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHRzY3JpcHQuc3JjID0gJy9qcy9ub3Vpc2xpZGVyLm1pbi5qcyc7XHJcblx0c2NyaXB0Lm9ubG9hZCA9ICgpID0+IG5vVWlTbGlkZXJJbml0KCk7XHJcblx0c2V0VGltZW91dCggKCkgPT4gZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpLCBDb29raWVzLmdldCgnZmFzdExvYWRTY3JpcHQnKSA/IDAgOiAxMDAwMCk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyJykpOyIsIiggc3dpcGVyQ29udGFpbmVyID0+IHtcclxuXHJcblx0aWYoIXN3aXBlckNvbnRhaW5lci5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShzd2lwZXJDb250YWluZXIsIHN3aXBlID0+IHtcclxuXHJcblx0XHRsZXQgbXlTd2lwZSA9IG51bGwsXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gbnVsbCxcclxuXHRcdFx0cmVzZXRTd2lwZSA9IG51bGw7XHJcblxyXG5cdFx0Y29uc3Qgc3dpcGVDb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0XHQgIHN3aXBlTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRcdCAgc3dpcGVCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRcdCAgc3dpcGVOZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcblx0XHRcdCAgc3dpcGVQcmV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcblx0XHRcdCAgc2Nyb2xsYmFyID0gc3dpcGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLXNjcm9sbGJhcicpLFxyXG5cdFx0XHQgIGl0ZW1zID0gc3dpcGUucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1zbGlkZScpLFxyXG5cdFx0XHQgIGNvdW50ID0gaXRlbXMubGVuZ3RoLFxyXG5cdFx0XHQgIGNsaWVudHMgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWNsaWVudHMnKSxcclxuXHRcdFx0ICBwcm9kdWN0R2FsbGVyeSA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tZ2FsbGVyeScpLFxyXG5cdFx0XHQgIHByb2R1Y3RHYWxsZXJ5UHJldmlldyA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tZ2FsbGVyeS1wcmV2aWV3JyksXHJcblx0XHRcdCAgYmlsbGJvYXJkID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1iaWxsYm9hcmQnKTtcclxuXHJcblx0XHRzd2lwZU5hdi5jbGFzc05hbWUgPSAnc3dpcGVyLXBhZ2luYXRpb24nO1xyXG5cdFx0c3dpcGVDb250cm9scy5jbGFzc05hbWUgPSAnc3dpcGVyLWNvbnRyb2xzJztcclxuXHJcblx0XHRzd2lwZUJ0bnMuY2xhc3NOYW1lID0gJ3N3aXBlci1uYXZpZ2F0aW9uJztcclxuXHRcdHN3aXBlUHJldi5jbGFzc05hbWUgPSAnc3dpcGVyLWJ1dHRvbi1wcmV2IGJ1dHRvbic7XHJcblx0XHRzd2lwZU5leHQuY2xhc3NOYW1lID0gJ3N3aXBlci1idXR0b24tbmV4dCBidXR0b24nO1xyXG5cclxuXHRcdHN3aXBlUHJldi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCdQcmV2aW91cyBzbGlkZScpO1xyXG5cdFx0c3dpcGVOZXh0LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsJ05leHQgc2xpZGUnKTtcclxuXHJcblx0XHRzd2lwZVByZXYuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNOSAxMWw0LjYtNC42QS45OS45OSAwIDExMTUgNy44bC0zLjkgMy45IDMuOSAzLjlhLjk5Ljk5IDAgMDEtMS40IDEuNEw5IDEyLjQxQTEgMSAwIDAxOSAxMXpcIi8+PC9zdmc+JztcclxuXHRcdHN3aXBlTmV4dC5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xNSAxMWExIDEgMCAwMTAgMS40TDEwLjQgMTdBLjk5Ljk5IDAgMDE5IDE1LjZsMy45LTMuOUw5IDcuOGEuOTkuOTkgMCAwMTEuNC0xLjRMMTUgMTF6XCIvPjwvc3ZnPic7XHJcblxyXG5cdFx0c3dpcGVCdG5zLmFwcGVuZENoaWxkKHN3aXBlUHJldik7XHJcblx0XHRzd2lwZUJ0bnMuYXBwZW5kQ2hpbGQoc3dpcGVOZXh0KTtcclxuXHRcdHN3aXBlQ29udHJvbHMuYXBwZW5kQ2hpbGQoc3dpcGVCdG5zKTtcclxuXHRcdHN3aXBlQ29udHJvbHMuYXBwZW5kQ2hpbGQoc3dpcGVOYXYpO1xyXG5cclxuXHRcdHJlc2V0U3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZihteVN3aXBlKSB7XHJcblxyXG5cdFx0XHRcdG15U3dpcGUuZGVzdHJveShmYWxzZSx0cnVlKTtcclxuXHRcdFx0XHRteVN3aXBlID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRzd2lwZUJ0bnMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRzd2lwZUNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY2xpZW50cykge1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHRvZ2dsZVN3aXBlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly9sb29wZWRTbGlkZXMgOiAyLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldyA6ICdhdXRvJyxcclxuXHRcdFx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChwcm9kdWN0R2FsbGVyeSkge1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHRvZ2dsZVN3aXBlID0gZmFsc2U7XHJcblx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGN1cnJlbnQgPSBzd2lwZS5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLWNvdW50ZXJfX2N1cnJlbnQtc2xpZGUnKSxcclxuXHRcdFx0XHRcdCAgY2FwdGlvbiA9IHN3aXBlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnN3aXBlci1nYWxsZXJ5X19jdXJyZW50LWNhcHRpb24nKTtcclxuXHJcblx0XHRcdFx0bXlTd2lwZSA9IG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0XHRcdG5leHRFbDogc3dpcGVOZXh0LFxyXG5cdFx0XHRcdFx0XHRwcmV2RWw6IHN3aXBlUHJldlxyXG5cdFx0XHRcdFx0fSxcclxuLypcdFx0XHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRlbDogc3dpcGVOYXYsXHJcblx0XHRcdFx0XHRcdGJ1bGxldENsYXNzOiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0YnVsbGV0QWN0aXZlQ2xhc3M6ICdpcy1hY3RpdmUnXHJcblx0XHRcdFx0XHR9LCovXHJcblx0XHRcdFx0XHRvbjoge1xyXG5cdFx0XHRcdFx0XHRzbGlkZUNoYW5nZSA6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjdXJyZW50LnRleHRDb250ZW50ID0gc3dpcGUuc3dpcGVyLnJlYWxJbmRleCAlIGNvdW50ICsgMTtcclxuXHRcdFx0XHRcdFx0XHRjYXB0aW9uLmlubmVySFRNTCA9IHN3aXBlLnN3aXBlci5zbGlkZXNbc3dpcGUuc3dpcGVyLmFjdGl2ZUluZGV4XS5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLWdhbGxlcnlfX2NhcHRpb24nKS5pbm5lckhUTUw7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGJpbGxib2FyZCkge1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHRvZ2dsZVN3aXBlID0gZmFsc2U7XHJcblx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XHJcblxyXG5cdFx0XHRcdG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0XHRhdXRvcGxheToge1xyXG5cdFx0XHRcdFx0XHRkZWxheTogNTAwMFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRcdFx0ZWw6IHN3aXBlTmF2LFxyXG5cdFx0XHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdGJ1bGxldENsYXNzOiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0YnVsbGV0QWN0aXZlQ2xhc3M6ICdpcy1hY3RpdmUnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChwcm9kdWN0R2FsbGVyeVByZXZpZXcpIHtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRsZXQgaW5pdGlhbFNsaWRlID0gMCxcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXcgPSA1LFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuID0gMjA7XHJcblxyXG5cdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoc3dpcGVDb250cm9scyk7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oaXRlbXMsIChlbCxpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtY3VycmVudCcpKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpbml0aWFsU2xpZGUgPSBpbmRleDtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR0b2dnbGVTd2lwZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0XHRpZihzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLXN0eWxlLXVzZScpKXtcclxuXHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3ID0gMztcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbiA9IDA7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Y29uc3QgYm94ID0gc3dpcGUuY2xvc2VzdCgnLnN3aXBlci1nYWxsZXJ5LXByZXZpZXcnKSxcclxuXHRcdFx0XHRcdCAgYmlnID0gYm94LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3X19iaWctaXRlbScpO1xyXG5cclxuXHRcdFx0XHRuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdFx0c2xpZGVBY3RpdmVDbGFzczogJ2lzLWN1cnJlbnQnLFxyXG5cdFx0XHRcdFx0ZGlyZWN0aW9uOiAndmVydGljYWwnLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldyA6IHNsaWRlc1BlclZpZXcsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IHNwYWNlQmV0d2VlbixcclxuXHRcdFx0XHRcdHNsaWRlVG9DbGlja2VkU2xpZGU6IHRydWUsXHJcblx0XHRcdFx0XHRpbml0aWFsU2xpZGU6IGluaXRpYWxTbGlkZSxcclxuXHRcdFx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0b246IHtcclxuXHRcdFx0XHRcdFx0c2xpZGVDaGFuZ2UgOiAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdEFycmF5LmZyb20oYmlnLCAoaXRlbSxpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIHN3aXBlLnN3aXBlci5yZWFsSW5kZXggIT09IGluZGV4KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZihpdGVtLnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJykpe1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbS5xdWVyeVNlbGVjdG9yKCd2aWRlbycpLnBhdXNlKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdFx0XHQzMjA6IHtcclxuXHRcdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogOFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiBzbGlkZXNQZXJWaWV3LFxyXG5cdFx0XHRcdFx0XHRcdHNwYWNlQmV0d2Vlbjogc3BhY2VCZXR3ZWVuXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0UHViU3ViLnN1YnNjcmliZSgnd2luZG93V2lkdGhSZXNpemUnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAod2luZG93LlN3aXBlciAmJiB0b2dnbGVTd2lwZSkge1xyXG5cclxuXHRcdFx0XHR0b2dnbGVTd2lwZSgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdFB1YlN1Yi5zdWJzY3JpYmUoJ3N3aXBlckpzTG9hZCcsICgpID0+IHtcclxuXHJcblx0XHRcdHN3aXBlLmFwcGVuZENoaWxkKHN3aXBlQ29udHJvbHMpO1xyXG5cclxuXHRcdFx0Ly8gZWFnZXJcclxuXHRcdFx0QXJyYXkuZnJvbShzd2lwZS5xdWVyeVNlbGVjdG9yQWxsKCdbbG9hZGluZz1cImxhenlcIl0nKSwgaW1nID0+IGltZy5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCdlYWdlcicpKTtcclxuXHJcblx0XHRcdC8vIGhpZGVcclxuXHRcdFx0QXJyYXkuZnJvbShpdGVtcywgZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlKCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHJcblx0c2NyaXB0LnNyYyA9ICcvanMvc3dpcGVyLm1pbi5qcyc7XHJcblxyXG5cdHNjcmlwdC5vbmxvYWQgPSAoKSA9PiBQdWJTdWIucHVibGlzaCgnc3dpcGVySnNMb2FkJyk7XHJcblxyXG5cdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KSwgQ29va2llcy5nZXQoJ2Zhc3RMb2FkU2NyaXB0JykgPyAwIDogMTAwMDApO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1jb250YWluZXInKSk7IiwiKCB0YWJzID0+IHtcclxuXHJcblx0aWYoIXRhYnMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IHNldEFjdGl2ZSA9IChidG4sIGl0ZW0sIHRvZ2dsZSkgPT4ge1xyXG5cclxuXHRcdGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnLCB0b2dnbGUpO1xyXG5cdFx0aXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnLCB0b2dnbGUpO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20odGFicywgdGFiID0+IHtcclxuXHJcblx0XHRjb25zdCBidG5zID0gdGFiLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19idG4nKSxcclxuXHRcdFx0ICBpdGVtcyA9IHRhYi5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19faXRlbScpLFxyXG5cdFx0XHQgIG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0XHQgIG5hdldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblx0XHRuYXYuY2xhc3NOYW1lID0gJ3RhYnNfX25hdic7XHJcblx0XHRuYXZXcmFwLmNsYXNzTmFtZSA9ICd0YWJzX19uYXYtd3JhcCc7XHJcblx0XHRuYXZXcmFwLmFwcGVuZENoaWxkKG5hdik7XHJcblxyXG5cdFx0aWYodGFiLmNsYXNzTGlzdC5jb250YWlucygndGFicy0tbmF2JykpIHtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oYnRucywgYnRuID0+IHtcclxuXHJcblx0XHRcdFx0YnRuLnNldEF0dHJpYnV0ZSgncm9sZScsJ2J1dHRvbicpO1xyXG5cclxuXHRcdFx0XHRuYXYuYXBwZW5kQ2hpbGQoYnRuKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGFiLmluc2VydEJlZm9yZShuYXZXcmFwLCBpdGVtc1swXSk7XHJcblxyXG5cdFx0XHRzZXRBY3RpdmUoYnRuc1swXSwgaXRlbXNbMF0sIHRydWUpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRBcnJheS5mcm9tKGJ0bnMsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PlxyXG5cdFx0XHRcdEFycmF5LmZyb20oYnRucywgKF9idG4sIGluZGV4KSA9PlxyXG5cdFx0XHRcdFx0c2V0QWN0aXZlKF9idG4sIGl0ZW1zW2luZGV4XSwgX2J0biA9PT0gYnRuKSkpXHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMnKSk7IiwiKCB0b29sdGlwcyA9PiB7XHJcblxyXG5cdGlmKHRvb2x0aXBzLmxlbmd0aCl7XHJcblxyXG5cdFx0QXJyYXkuZnJvbSh0b29sdGlwcywgdG9vbHRpcCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcblx0XHRcdHRpdGxlLmNsYXNzTmFtZSA9ICd0b29sdGlwLXRpdGxlX19pbm5lcic7XHJcblxyXG5cdFx0XHR0aXRsZS50ZXh0Q29udGVudCA9IHRvb2x0aXAuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xyXG5cdFx0XHR0b29sdGlwLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHRcdFx0dG9vbHRpcC5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b29sdGlwLXRpdGxlJykpO1xyXG5cclxuKCB0b29sdGlwcyA9PiB7XHJcblxyXG5cdGlmKHRvb2x0aXBzLmxlbmd0aCl7XHJcblxyXG5cdFx0Y29uc3QgaWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuXHRcdGljby5pbm5lckhUTUwgPSAnPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMjAgMTJhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS01Ljc0LTMuODdhMy4xOCAzLjE4IDAgMDEuNTYgMy43OGMtLjM4LjctMSAxLjIyLTEuNzQgMS40OWEuNC40IDAgMDAtLjI4LjM4di42MmEuOC44IDAgMDEtMS42IDBWMTIuOEEuOC44IDAgMDExMiAxMmMuODggMCAxLjYtLjcyIDEuNi0xLjZhMS42IDEuNiAwIDAwLTMuMiAwIC44LjggMCAwMS0xLjU5LjA4bC0uMDEtLjEyYy4wMS0yIDEuODYtMy41NSAzLjk1LTMuMDcuNTcuMTMgMS4xLjQyIDEuNTEuODR6TTEyLjggMTYuOGEuOC44IDAgMTEtMS42IDAgLjguOCAwIDAxMS42IDB6XCIvPjwvc3ZnPic7XHJcblxyXG5cdFx0bGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25SZWNvcmRzID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHQgPSBtdXRhdGlvblJlY29yZHNbMF0udGFyZ2V0LFxyXG5cdFx0XHRcdCAgaW5uZXIgPSB0LnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwLWhlbHBfX2lubmVyJyk7XHJcblxyXG5cdFx0XHRpZih0Lm9wZW4pIHtcclxuXHJcblx0XHRcdFx0Y29uc3QgcmVjdCA9IGlubmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHRcdFx0XHRpZihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPCByZWN0LnJpZ2h0KSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8g0LvQtdCy0LXQtVxyXG5cclxuXHRcdFx0XHRcdGlubmVyLnN0eWxlLm1hcmdpbkxlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSByZWN0LnJpZ2h0ICsgJ3B4JztcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmKHJlY3QubGVmdCA8IDApIHtcclxuXHJcblx0XHRcdFx0XHQvLyDQv9GA0LDQstC10LVcclxuXHJcblx0XHRcdFx0XHRpbm5lci5zdHlsZS5tYXJnaW5MZWZ0ID0gLXJlY3QubGVmdCArICdweCc7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGlubmVyLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRBcnJheS5mcm9tKHRvb2x0aXBzLCB0b29sdGlwID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGJ0biA9IHRvb2x0aXAucXVlcnlTZWxlY3RvcignLnRvb2x0aXAtaGVscF9fYnRuJyk7XHJcblxyXG5cdFx0XHRidG4uYXBwZW5kQ2hpbGQoaWNvLmNsb25lTm9kZSh0cnVlKSk7XHJcblxyXG5cdFx0XHRvYnNlcnZlci5vYnNlcnZlKHRvb2x0aXAsIHtcclxuXHJcblx0XHRcdFx0YXR0cmlidXRlcyA6IHRydWVcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50b29sdGlwLWhlbHAnKTtcclxuXHJcblx0XHRcdEFycmF5LmZyb20odG9vbHRpcHMsIHRvb2x0aXAgPT4ge1xyXG5cclxuXHRcdFx0XHRpZih0YXJnZXQgIT09IHRvb2x0aXApIHtcclxuXHJcblx0XHRcdFx0XHR0b29sdGlwLm9wZW4gPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b29sdGlwLWhlbHAnKSk7Il19
