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

			if ( resizeTimeout === null ) {

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

		document.documentElement.style.setProperty('--transitionDefault', '.3s');
		document.documentElement.style.setProperty('--headerHeight', document.querySelector('.header').clientHeight + 'px');

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
( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, form => {

		const input = form.querySelectorAll('.checkbox__input'),
			  inputAll = form.querySelector('.checkbox__input[value="all"]'),
			  inputNotAll = Array.from(input).filter(el => el !== inputAll);

		Array.from(input, el => {

			el.addEventListener('change', () => {

				if ( inputAll ) {

					if ( inputAll === el ) {

						inputNotAll.forEach(el => el.checked = inputAll.checked);

					} else {

						inputAll.checked = inputNotAll.every( el => el.checked === true );

					}

				}

			});

		});

	});

})(document.querySelectorAll('.checkbox-group'));
( items => {

	if( items.length === 0 ) {

		return;

	}

	window.addEventListener("click", event => {

		const isMenu = event.target.closest('.context-menu');

		Array.from(items, item => {

			item.classList.toggle('is-open', item === isMenu && isMenu.classList.contains('is-open') === false);

		});

	});

})(document.querySelectorAll('.context-menu'));
( dashboard => {

	if ( dashboard ) {

		const setHeight = ( h = 0 ) => {

			Array.from(dashboard.querySelectorAll('.dashboard__desc'), item => {

				if ( h < item.clientHeight ) {

					h = item.clientHeight;

				}

			});

			document.documentElement.style.setProperty('--dashboardDescHeighgt', h + 'px');

		}

		PubSub.subscribe('windowWidthResize', () => setHeight());

		setHeight();

	}

})(document.querySelector('.dashboard'));
( datalists => {

	if ( datalists.length === 0 ) {

		return;

	}

	Array.from(datalists, datalist => {

		const form = datalist.closest('form'),
			  input = datalist.querySelector('.input-datalist__input'),
			  list = datalist.querySelector('.input-datalist__list'),
			  items = datalist.querySelectorAll('.input-datalist__item'),
			  workgroupAddUser = datalist.classList.contains('in-workgroup-add-user');

		datalist.addEventListener('close', ()=> {

			input.value = '';
			Array.from(items, item => item.classList.remove('input-datalist__item--hide'));
			datalist.classList.remove('is-focus');

		});

		if ( workgroupAddUser ) {

			Array.from(items, item => {

				const radio = item.querySelector('.input-datalist__radio');

				radio.addEventListener("change", () => {

					item.classList.add('visuallyhidden');

					input.focus();

					if ( input.value ) {

						datalist.dispatchEvent(new CustomEvent("close"));

					}

				});

			});

		}

		input.addEventListener('focus', () => datalist.classList.add('is-focus'));

		input.addEventListener('input', () => {

			datalist.classList.add('is-focus');

			const value = input.value.toLowerCase();

			if( value.length ) {

				Array.from(items, item => {

					const text = item.querySelector('.input-datalist__filter').textContent.trim().toLowerCase();

					item.classList.toggle('input-datalist__item--hide', text.indexOf(value) === -1);

				});

			} else {

				Array.from(items, item => item.classList.remove('input-datalist__item--hide'));

			}

			if ( workgroupAddUser ) {

				form.classList.toggle( 'is-empty', Array.from(items).every( el => el.classList.contains('visuallyhidden') || el.classList.contains('input-datalist__item--hide')) );

			}

		});

	});

	window.addEventListener("click", event => {

		if ( event.target.closest('.input-datalist') === null ) {

			Array.from(datalists, datalist => datalist.classList.remove('is-focus'));

		}

	});

})(document.querySelectorAll('.input-datalist'));
( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, form => {

		const submit = form.querySelector('.form-required__submit');

		form.addEventListener("input", () => {

			let falid = true;

			Array.from(form.querySelectorAll('[required]'), el => {

				if ( el.type === 'radio' && form.querySelectorAll('[name="' + el.name + '"]:checked').length === 0 ) {

					falid = false;

				} else if ( el.value === 'none' || el.value.length === 0 ) {

					falid = false;

				}

			});

			submit.disabled = !falid;

		});

	});

})(document.querySelectorAll('.form-required'));
( form => {

	if( !form ) {

		return;

	}

	const submit = form.querySelector('.form-workgroup-add-user__submit'),
		  users = form.querySelectorAll('.form-workgroup-add-user__user'),
		  head = form.querySelector('.workgroup-add-user__list-head'),
		  result = form.querySelector('.workgroup-add-user__result'),
		  btnNextCustom = form.querySelector('.form-workgroup-add-user__btn-next-custom'),
		  customName = form.querySelector('.form-workgroup-add-user__custom-name'),
		  customEmail = form.querySelector('.form-workgroup-add-user__custom-email'),
		  customSubmit = form.querySelector('.form-workgroup-add-user__submit-custom'),
		  template = form.querySelector('#workgroup-add-user-template').innerHTML,
		  templateCustom = form.querySelector('#workgroup-add-user-template-custom').innerHTML;

  	let usersList = false;

  	const customInput = ()=> {

		customSubmit.disabled = customName.value.length === 0 || customEmail.value.length === 0;

	}

	const formDisabled = disabled => {

		submit.disabled = disabled;
		head.classList.toggle('hide', disabled);

	}

	form.addEventListener("change", event => {

		if( event.target.classList.contains('form-workgroup-add-user__user') ) {

			const id = event.target.value,
				  user = event.target.nextElementSibling;
				  avatar = user.querySelector('.workgroup-user__head').innerHTML,
				  name = user.querySelector('.workgroup-user__name').textContent.trim(),
				  desc = user.querySelector('.workgroup-user__desc').textContent.trim();

			result.insertAdjacentHTML('afterbegin', Mustache.render(template, { id, avatar, name, desc }));

			formDisabled(false);

		}

	});

	// ручное добавление

	btnNextCustom.addEventListener("click", () => {

		customName.focus();
		btnNextCustom.closest('.input-datalist').dispatchEvent(new CustomEvent("close"));

	});

	customName.addEventListener("input", () => customInput());
	customEmail.addEventListener("input", () => customInput());

	customSubmit.addEventListener("click", () => {

		const name = customName.value.trim(),
			  email = customEmail.value.trim();

		let avatar = '';

		if ( name.indexOf(' ') === -1 ) {

			avatar = name;

		} else {

			name.split(' ').forEach( word => {

				avatar += word.substr(0, 1);

			});

		}

		avatar = avatar.substr(0, 2);

		result.insertAdjacentHTML('afterbegin', Mustache.render(templateCustom, { avatar, name, email }));

		customName.value = '';
		customEmail.value = '';
		customSubmit.disabled = true;

		formDisabled(false);

	});

	result.addEventListener("click", event => {

		const btnRemove = event.target.closest('.workgroup-add-user__new-remove');

		if ( btnRemove ) {

			const id = btnRemove.getAttribute('data-id');

			if ( id !== 'custom' ) {

				const input = form.querySelector('.form-workgroup-add-user__user[value="' + id + '"]');

				input.checked = false;

				input.closest('.form-workgroup-add-user__user-wrap').classList.remove('visuallyhidden');

			}

			setTimeout( ()=> {

				btnRemove.closest('.workgroup-add-user__new').remove();

				if ( !result.querySelector('.workgroup-add-user__new') ) {

					formDisabled(true);

				}

			});

		}

	});

	form.addEventListener('submit', event => {

		event.preventDefault();

		form.classList.add('is-loading');
		submit.disabled = true;

		fetch(form.getAttribute('action'), {
			method: 'POST',
			body: new FormData(form)
		})
		.then(response => response.json())
		.then(notification => {

			console.log(notification);

			form.classList.remove('is-loading');

			notification(...notification);

			result.innerHTML = '';
			formDisabled(true);

		});

	});

})(document.querySelector('.form-workgroup-add-user'));
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

			});

		});

	});

})(document.querySelectorAll('.form'));
( input => {

	if( !input.length ) {

		return;

	}

	Array.from(input, item => {

		item.querySelector('input').addEventListener('change', () => {

			item.querySelector('.input-file__value').textContent = item.querySelector('input').value;

		});

	});

})(document.querySelectorAll('.input-file'));
( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, form => {

		form.addEventListener("change", () => {

			event.preventDefault();
			form.classList.add('is-loading');

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.json())
			.then(json => {

				console.log(json);

				form.classList.remove('is-loading');

				alert('вырианты ответов: rejected | removed | pending, link ')

				if ( json.pending ) {

					document.querySelector('#modal-invitations-complete-link').href = json.link;

					const eventModalShow = new CustomEvent("modalShow", {
						detail: {
							selector: "invitations-complete"
						}
					});

					window.modal.dispatchEvent(eventModalShow);

					form.remove();

				}

				if ( json.rejected ) {

					form.classList.add('invitations--rejected');

				}

				if ( json.removed ) {

					form.addEventListener(window.cssAnimation('transition'), () => form.remove());

					setTimeout( ()=> form.classList.add('is-removed') );

				}

			});

		});

	});

})(document.querySelectorAll('.invitations'));
( section => {

	if(!section.length) {

		return;

	}

	Array.from(section, block => {

		const rows = [],
			  form = block.querySelector('.live-search-docs__form'),
			  input = form.querySelector('.live-search-docs__input'),
			  reset = form.querySelector('.live-search-docs__reset'),
			  empty = block.querySelector('.live-search-docs__empty'),
			  items = block.querySelectorAll('.live-search-docs__item');

		const filterRow = (value) => {

			if( value.length ){

				rows.forEach( (row,index) => {

					let show = row.some( td => td.toLowerCase().indexOf(value.toLowerCase()) !== -1 );

					if ( show ) {

						Array.from(items[index].querySelectorAll('.live-search-docs__string'), (td,i) => {

							td.innerHTML = row[i].replace(value,"<span class=\"highlight\">" + value + "</span>");

						});

						items[index].classList.remove('live-search-docs__hide');

					} else {

						items[index].classList.add('live-search-docs__hide');

						Array.from(items[index].querySelectorAll('.live-search-docs__string'), (td,i) => {

							td.textContent = row[i];

						});

					}

				});

			} else {

				Array.from(items, (item, index) => {

					Array.from(item.querySelectorAll('.live-search-docs__string'), (td,i) => td.textContent = rows[index][i]);

					item.classList.remove('live-search-docs__hide');

				});

			}

		};

		// создадим массив строк по которым ищем

		Array.from(items, (item,index) => {

			rows[index] = [];

			Array.from(item.querySelectorAll('.live-search-docs__string'), td => {

				rows[index].push(td.textContent.trim());

			});

		});

		input.addEventListener('focus', () => block.classList.add('is-focus'));

		form.addEventListener('reset', () => {

			form.classList.add('is-empty');
			block.classList.remove('is-focus', 'is-noempty');
			filterRow('');

		});

		input.addEventListener('keyup', () => {

			form.classList.toggle('is-empty', input.value.length === 0);
			block.classList.toggle('is-noempty', input.value.length);
			filterRow(input.value);

		});

	});

	// скрыть рузельтаты при клике вне формы

	window.addEventListener("click", event => {

		const isForm = event.target.closest('.live-search-docs__form');

		Array.from(section, block => {

			if( isForm !== block.querySelector('.live-search-docs__form') ) {

				block.classList.remove('is-focus');

			}

		});

	});

})(document.querySelectorAll('.live-search-docs'));
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
// menu user

( menu => {

	if(menu) {

		window.addEventListener("click", event => {

			if( event.target.closest('.header__user-btn') ){

				menu.classList.toggle('is-open');

			} else if( event.target.closest('.header__user') === null ){

				menu.classList.remove('is-open');

			}

		});

	}

})(document.querySelector('.header__user'));

( el => {

	if( !el ) {

		return;

	}

	const form = el.querySelector('.modal-participants__filter'),
		  items = el.querySelectorAll('.modal-participants__item-filter'),
		  input = el.querySelector('.modal-participants__filter-input');

	el.addEventListener("click", event => {

		if ( event.target.closest('.modal-participants__filter') ) {

			return;

		}

		if ( event.target.closest('.modal-participants__btn-open-search') ) {

			form.classList.toggle('hide');
			input.focus();

		} else {

			form.classList.add('hide');

		}

	});

	input.addEventListener('input', () => {

		const value = input.value.toLowerCase();

		form.classList.toggle('is-empty', value.length === 0);

		if( value.length ) {

			Array.from(items, item => {

				const text = item.querySelector('.modal-participants__text-filter').textContent.trim().toLowerCase();

				item.classList.toggle('hide', text.indexOf(value) === -1);

			});

		} else {

			Array.from(items, item => item.classList.remove('hide'));

		}

	});

	form.addEventListener('submit', event => {

		event.preventDefault();

	});

	form.addEventListener('reset', () => {

		form.classList.add('is-empty');
		Array.from(items, item => item.classList.remove('hide'));

	});

})(document.querySelector('.modal-participants'));
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

	modal.addEventListener('keyup', event => {

		if(event.key === "Escape") {

			modal.dispatchEvent(new CustomEvent("hide"));

		}

	});

	const modalShow = selector => {

		if(!activeModal){

			windowScroll = window.pageYOffset;

		}

		activeModal = modal.querySelector('.modal__item--' + selector);

		modal.classList.toggle('is-align-start', activeModal.getAttribute('data-modal-is-align-start') !== null);

		if (btnPageUp) {

			const event = activeModal.getAttribute('data-modal-is-align-start') !== null ? "on" : "off";

			btnPageUp.dispatchEvent(new CustomEvent(event));

		}

		Array.from(items, el => el.classList.toggle('visuallyhidden', el !== activeModal));

		wrapper.style.top = -windowScroll + 'px';
		document.body.classList.add('modal-show');
		window.scrollTo(0,0);

		activeModal.focus();

		PubSub.publish('open-' + selector);

	};

	modal.addEventListener('click', event => {

		if( event.target.classList.contains('modal') || event.target.closest('.modal__close')){

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

	const template = document.querySelector('#notification-template').innerHTML;

	window.notification = (head, text, timer = 10) => {

		notification.insertAdjacentHTML('beforeend', Mustache.render(template, { head, text }));

		const item = notification.querySelector('.is-new');

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

	// top vieport

	const setTop = () => {

		let h = document.querySelector('.header').getBoundingClientRect().bottom - window.pageYOffset;

		document.documentElement.style.setProperty('--notificationTop', h < 10 ? 10 : h + 'px');

	}

	window.addEventListener("scroll", () => window.requestAnimationFrame( () => setTop()));

	setTop();

})(document.querySelector('.notification'));

( () => {

	if (btnPageUp) {

		// on | off

		btnPageUp.addEventListener('off', () => btnPageUp.classList.add('hide'));
		btnPageUp.addEventListener('on', () => btnPageUp.classList.remove('hide'));

		// click

		btnPageUp.addEventListener('click', () => document.body.scrollIntoView({behavior: "smooth"}));

		// scroll

		let resizeTimeout = null;

		window.addEventListener("scroll", () => {

			window.requestAnimationFrame( () => {

				if ( btnPageUp.classList.contains('hide') === false && resizeTimeout === null ) {

					resizeTimeout = setTimeout( () => {

						resizeTimeout = null;

						btnPageUp.classList.toggle('is-hidden', window.pageYOffset < document.documentElement.clientHeight);

					}, 100);

				}

			});

		});

	}

})();
window.selects = select => {

	if(select.querySelector('.select__list')) {

		return;

	}

	const value = document.createElement('div');

	value.className = 'select__value';
	value.innerHTML = '<span class="select__value-inner"></span>';

	value.insertAdjacentHTML('beforeend', '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 14.5L16 10H8L12 14.5Z"/></svg>');

	select.appendChild(value);

	const form = select.closest('form'),
		control = select.querySelector('select'),
		option = select.querySelectorAll('option'),
		valueText = select.querySelector('.select__value-inner'),
		filter = select.classList.contains('select--filter'),
		list = document.createElement('div');

	list.className = 'select__list';

	let selected = control.querySelector('[value="' + control.value + '"]');

	const valueDefault = selected.textContent;

	if( control.disabled || control.value === 'none' || control.value === '' ){

		select.classList.add('select--default');

	}

	if ( control.value !== '' ) {

		valueText.textContent = select.querySelector('option[value="' + control.value + '"]').textContent;

	}

	Array.from(option, el => {

		if ( el.disabled || el.value === 'none' || el.value === '' ) {

			return;

		}

		const btn = document.createElement('label'),
			  label = document.createElement('span'),
			  input = document.createElement('input');

		btn.className = 'select__list-item';

		input.type = 'radio';
		input.name = control.name;
		input.value = el.value;

		label.textContent = el.textContent;

		if ( control.value === el.value ) {

			input.checked = true;

		}

		if ( control.required ) {

			input.required = true;

		}

		input.addEventListener('change', () => {

			valueText.textContent = el.textContent;
			select.classList.remove('select--open');

		});

		btn.appendChild(input);
		btn.appendChild(label);
		list.appendChild(btn);

	});

	select.appendChild(list);

	// возврат в дефолтное состояние, при резет формы

	form && form.addEventListener("reset", () => {

		select.classList.add('select--default');
		valueText.textContent = valueDefault;

	});

	// не предусматриваем в мобиле системный контрол
	control.remove();

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
( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, el => {

		const form = el.querySelector('.tab-filter__form'),
			  items = el.querySelectorAll('.tab-filter__item');

		if ( form ) {

			form.addEventListener("change", () => {

				const filter = form.elements.filter.value;

				Array.from(items, item => {

					if ( filter === 'all' ) {

						item.classList.remove('hide');

					} else {

						item.classList.toggle('hide', item.getAttribute('data-filter') !== filter);

					}

				});

			});

		}

	});

})(document.querySelectorAll('.tab-filter'));
( forms => {

	if( !forms.length ) {

		return;

	}

	Array.from(forms, form => {

		form.addEventListener('submit', event => {

			event.preventDefault();

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.json())
			.then(result => {

				console.log(result);

				const table = form.closest('table-workgroups'),
					  items = table.querySelectorAll('.table-workgroups-unread-item');

				Array.from(items, item => item.classList.remove('table-workgroups-unread-item'));

			});

		});

	});

})(document.querySelectorAll('.table-workgroups-read-all'));
( item => {

	if( !item ) {

		return;

	}

	// Выйти из рабочей группы

	const btnExit = item.querySelector('.workgroup-item-action__exit');

	if ( btnExit ) {

		btnExit.addEventListener('click', () => {

			document.querySelector('.modal__item--workgroup-item-exit').elements.id.value = btnExit.getAttribute('data-id');

			const eventModalShow = new CustomEvent("modalShow", {
				detail: {
					selector: "workgroup-item-exit"
				}
			});

			window.modal.dispatchEvent(eventModalShow);

		});

	}

})(document.querySelector('.workgroup-item'));
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzLmNvb2tpZS5taW4uanMiLCJtdXN0YWNoZS5taW4uanMiLCJwdWJzdWIubWluLmpzIiwianMuanMiLCJidG4tYmFjay5qcyIsImNoZWNrYm94LWdyb3VwLmpzIiwiY29udGV4dC1tZW51LmpzIiwiZGFzaGJvYXJkLmpzIiwiZGF0YWxpc3QuanMiLCJmb3JtLXJlcXVpcmVkLmpzIiwiZm9ybS13b3JrZ3JvdXAtYWRkLXVzZXIuanMiLCJmb3JtLmpzIiwiaW5wdXQtZmlsZS5qcyIsImludml0YXRpb25zLmpzIiwibGl2ZS1zZWFyY2gtZG9jcy5qcyIsIm1lbnUuanMiLCJtb2RhbC1wYXJ0aWNpcGFudHMuanMiLCJtb2RhbC5qcyIsIm5vdGlmaWNhdGlvbi5qcyIsInBhZ2UtdXAuanMiLCJzZWxlY3QuanMiLCJ0YWItZmlsdGVyLmpzIiwidGFibGUtd29ya2dyb3Vwcy5qcyIsIndvcmtncm91cC1pdGVtLmpzIiwieWF0cmFuc2xhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FDRkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImxrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIGpzLWNvb2tpZSB2My4wLjAtcmMuMSB8IE1JVCAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KGU9ZXx8c2VsZixmdW5jdGlvbigpe3ZhciBuPWUuQ29va2llcyxyPWUuQ29va2llcz10KCk7ci5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGUuQ29va2llcz1uLHJ9fSgpKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgciBpbiBuKWVbcl09bltyXX1yZXR1cm4gZX12YXIgdD17cmVhZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKC8oJVtcXGRBLUZdezJ9KSsvZ2ksZGVjb2RlVVJJQ29tcG9uZW50KX0sd3JpdGU6ZnVuY3Rpb24oZSl7cmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChlKS5yZXBsYWNlKC8lKDJbMzQ2QkZdfDNbQUMtRl18NDB8NVtCREVdfDYwfDdbQkNEXSkvZyxkZWNvZGVVUklDb21wb25lbnQpfX07cmV0dXJuIGZ1bmN0aW9uIG4ocixvKXtmdW5jdGlvbiBpKHQsbixpKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQpe1wibnVtYmVyXCI9PXR5cGVvZihpPWUoe30sbyxpKSkuZXhwaXJlcyYmKGkuZXhwaXJlcz1uZXcgRGF0ZShEYXRlLm5vdygpKzg2NGU1KmkuZXhwaXJlcykpLGkuZXhwaXJlcyYmKGkuZXhwaXJlcz1pLmV4cGlyZXMudG9VVENTdHJpbmcoKSksdD1lbmNvZGVVUklDb21wb25lbnQodCkucmVwbGFjZSgvJSgyWzM0NkJdfDVFfDYwfDdDKS9nLGRlY29kZVVSSUNvbXBvbmVudCkucmVwbGFjZSgvWygpXS9nLGVzY2FwZSksbj1yLndyaXRlKG4sdCk7dmFyIGM9XCJcIjtmb3IodmFyIHUgaW4gaSlpW3VdJiYoYys9XCI7IFwiK3UsITAhPT1pW3VdJiYoYys9XCI9XCIraVt1XS5zcGxpdChcIjtcIilbMF0pKTtyZXR1cm4gZG9jdW1lbnQuY29va2llPXQrXCI9XCIrbitjfX1yZXR1cm4gT2JqZWN0LmNyZWF0ZSh7c2V0OmksZ2V0OmZ1bmN0aW9uKGUpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCYmKCFhcmd1bWVudHMubGVuZ3RofHxlKSl7Zm9yKHZhciBuPWRvY3VtZW50LmNvb2tpZT9kb2N1bWVudC5jb29raWUuc3BsaXQoXCI7IFwiKTpbXSxvPXt9LGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIGM9bltpXS5zcGxpdChcIj1cIiksdT1jLnNsaWNlKDEpLmpvaW4oXCI9XCIpOydcIic9PT11WzBdJiYodT11LnNsaWNlKDEsLTEpKTt0cnl7dmFyIGY9dC5yZWFkKGNbMF0pO2lmKG9bZl09ci5yZWFkKHUsZiksZT09PWYpYnJlYWt9Y2F0Y2goZSl7fX1yZXR1cm4gZT9vW2VdOm99fSxyZW1vdmU6ZnVuY3Rpb24odCxuKXtpKHQsXCJcIixlKHt9LG4se2V4cGlyZXM6LTF9KSl9LHdpdGhBdHRyaWJ1dGVzOmZ1bmN0aW9uKHQpe3JldHVybiBuKHRoaXMuY29udmVydGVyLGUoe30sdGhpcy5hdHRyaWJ1dGVzLHQpKX0sd2l0aENvbnZlcnRlcjpmdW5jdGlvbih0KXtyZXR1cm4gbihlKHt9LHRoaXMuY29udmVydGVyLHQpLHRoaXMuYXR0cmlidXRlcyl9fSx7YXR0cmlidXRlczp7dmFsdWU6T2JqZWN0LmZyZWV6ZShvKX0sY29udmVydGVyOnt2YWx1ZTpPYmplY3QuZnJlZXplKHIpfX0pfSh0LHtwYXRoOlwiL1wifSl9KTtcbiIsIihmdW5jdGlvbiBkZWZpbmVNdXN0YWNoZShnbG9iYWwsZmFjdG9yeSl7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZleHBvcnRzJiZ0eXBlb2YgZXhwb3J0cy5ub2RlTmFtZSE9PVwic3RyaW5nXCIpe2ZhY3RvcnkoZXhwb3J0cyl9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW1wiZXhwb3J0c1wiXSxmYWN0b3J5KX1lbHNle2dsb2JhbC5NdXN0YWNoZT17fTtmYWN0b3J5KGdsb2JhbC5NdXN0YWNoZSl9fSkodGhpcyxmdW5jdGlvbiBtdXN0YWNoZUZhY3RvcnkobXVzdGFjaGUpe3ZhciBvYmplY3RUb1N0cmluZz1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO3ZhciBpc0FycmF5PUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uIGlzQXJyYXlQb2x5ZmlsbChvYmplY3Qpe3JldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKG9iamVjdCk9PT1cIltvYmplY3QgQXJyYXldXCJ9O2Z1bmN0aW9uIGlzRnVuY3Rpb24ob2JqZWN0KXtyZXR1cm4gdHlwZW9mIG9iamVjdD09PVwiZnVuY3Rpb25cIn1mdW5jdGlvbiB0eXBlU3RyKG9iail7cmV0dXJuIGlzQXJyYXkob2JqKT9cImFycmF5XCI6dHlwZW9mIG9ian1mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyaW5nKXtyZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1tcXC1cXFtcXF17fSgpKis/LixcXFxcXFxeJHwjXFxzXS9nLFwiXFxcXCQmXCIpfWZ1bmN0aW9uIGhhc1Byb3BlcnR5KG9iaixwcm9wTmFtZSl7cmV0dXJuIG9iaiE9bnVsbCYmdHlwZW9mIG9iaj09PVwib2JqZWN0XCImJnByb3BOYW1lIGluIG9ian12YXIgcmVnRXhwVGVzdD1SZWdFeHAucHJvdG90eXBlLnRlc3Q7ZnVuY3Rpb24gdGVzdFJlZ0V4cChyZSxzdHJpbmcpe3JldHVybiByZWdFeHBUZXN0LmNhbGwocmUsc3RyaW5nKX12YXIgbm9uU3BhY2VSZT0vXFxTLztmdW5jdGlvbiBpc1doaXRlc3BhY2Uoc3RyaW5nKXtyZXR1cm4hdGVzdFJlZ0V4cChub25TcGFjZVJlLHN0cmluZyl9dmFyIGVudGl0eU1hcD17XCImXCI6XCImYW1wO1wiLFwiPFwiOlwiJmx0O1wiLFwiPlwiOlwiJmd0O1wiLCdcIic6XCImcXVvdDtcIixcIidcIjpcIiYjMzk7XCIsXCIvXCI6XCImI3gyRjtcIixcImBcIjpcIiYjeDYwO1wiLFwiPVwiOlwiJiN4M0Q7XCJ9O2Z1bmN0aW9uIGVzY2FwZUh0bWwoc3RyaW5nKXtyZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZSgvWyY8PlwiJ2A9XFwvXS9nLGZ1bmN0aW9uIGZyb21FbnRpdHlNYXAocyl7cmV0dXJuIGVudGl0eU1hcFtzXX0pfXZhciB3aGl0ZVJlPS9cXHMqLzt2YXIgc3BhY2VSZT0vXFxzKy87dmFyIGVxdWFsc1JlPS9cXHMqPS87dmFyIGN1cmx5UmU9L1xccypcXH0vO3ZhciB0YWdSZT0vI3xcXF58XFwvfD58XFx7fCZ8PXwhLztmdW5jdGlvbiBwYXJzZVRlbXBsYXRlKHRlbXBsYXRlLHRhZ3Mpe2lmKCF0ZW1wbGF0ZSlyZXR1cm5bXTt2YXIgc2VjdGlvbnM9W107dmFyIHRva2Vucz1bXTt2YXIgc3BhY2VzPVtdO3ZhciBoYXNUYWc9ZmFsc2U7dmFyIG5vblNwYWNlPWZhbHNlO2Z1bmN0aW9uIHN0cmlwU3BhY2UoKXtpZihoYXNUYWcmJiFub25TcGFjZSl7d2hpbGUoc3BhY2VzLmxlbmd0aClkZWxldGUgdG9rZW5zW3NwYWNlcy5wb3AoKV19ZWxzZXtzcGFjZXM9W119aGFzVGFnPWZhbHNlO25vblNwYWNlPWZhbHNlfXZhciBvcGVuaW5nVGFnUmUsY2xvc2luZ1RhZ1JlLGNsb3NpbmdDdXJseVJlO2Z1bmN0aW9uIGNvbXBpbGVUYWdzKHRhZ3NUb0NvbXBpbGUpe2lmKHR5cGVvZiB0YWdzVG9Db21waWxlPT09XCJzdHJpbmdcIil0YWdzVG9Db21waWxlPXRhZ3NUb0NvbXBpbGUuc3BsaXQoc3BhY2VSZSwyKTtpZighaXNBcnJheSh0YWdzVG9Db21waWxlKXx8dGFnc1RvQ29tcGlsZS5sZW5ndGghPT0yKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdGFnczogXCIrdGFnc1RvQ29tcGlsZSk7b3BlbmluZ1RhZ1JlPW5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKHRhZ3NUb0NvbXBpbGVbMF0pK1wiXFxcXHMqXCIpO2Nsb3NpbmdUYWdSZT1uZXcgUmVnRXhwKFwiXFxcXHMqXCIrZXNjYXBlUmVnRXhwKHRhZ3NUb0NvbXBpbGVbMV0pKTtjbG9zaW5nQ3VybHlSZT1uZXcgUmVnRXhwKFwiXFxcXHMqXCIrZXNjYXBlUmVnRXhwKFwifVwiK3RhZ3NUb0NvbXBpbGVbMV0pKX1jb21waWxlVGFncyh0YWdzfHxtdXN0YWNoZS50YWdzKTt2YXIgc2Nhbm5lcj1uZXcgU2Nhbm5lcih0ZW1wbGF0ZSk7dmFyIHN0YXJ0LHR5cGUsdmFsdWUsY2hyLHRva2VuLG9wZW5TZWN0aW9uO3doaWxlKCFzY2FubmVyLmVvcygpKXtzdGFydD1zY2FubmVyLnBvczt2YWx1ZT1zY2FubmVyLnNjYW5VbnRpbChvcGVuaW5nVGFnUmUpO2lmKHZhbHVlKXtmb3IodmFyIGk9MCx2YWx1ZUxlbmd0aD12YWx1ZS5sZW5ndGg7aTx2YWx1ZUxlbmd0aDsrK2kpe2Nocj12YWx1ZS5jaGFyQXQoaSk7aWYoaXNXaGl0ZXNwYWNlKGNocikpe3NwYWNlcy5wdXNoKHRva2Vucy5sZW5ndGgpfWVsc2V7bm9uU3BhY2U9dHJ1ZX10b2tlbnMucHVzaChbXCJ0ZXh0XCIsY2hyLHN0YXJ0LHN0YXJ0KzFdKTtzdGFydCs9MTtpZihjaHI9PT1cIlxcblwiKXN0cmlwU3BhY2UoKX19aWYoIXNjYW5uZXIuc2NhbihvcGVuaW5nVGFnUmUpKWJyZWFrO2hhc1RhZz10cnVlO3R5cGU9c2Nhbm5lci5zY2FuKHRhZ1JlKXx8XCJuYW1lXCI7c2Nhbm5lci5zY2FuKHdoaXRlUmUpO2lmKHR5cGU9PT1cIj1cIil7dmFsdWU9c2Nhbm5lci5zY2FuVW50aWwoZXF1YWxzUmUpO3NjYW5uZXIuc2NhbihlcXVhbHNSZSk7c2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKX1lbHNlIGlmKHR5cGU9PT1cIntcIil7dmFsdWU9c2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ0N1cmx5UmUpO3NjYW5uZXIuc2NhbihjdXJseVJlKTtzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nVGFnUmUpO3R5cGU9XCImXCJ9ZWxzZXt2YWx1ZT1zY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nVGFnUmUpfWlmKCFzY2FubmVyLnNjYW4oY2xvc2luZ1RhZ1JlKSl0aHJvdyBuZXcgRXJyb3IoXCJVbmNsb3NlZCB0YWcgYXQgXCIrc2Nhbm5lci5wb3MpO3Rva2VuPVt0eXBlLHZhbHVlLHN0YXJ0LHNjYW5uZXIucG9zXTt0b2tlbnMucHVzaCh0b2tlbik7aWYodHlwZT09PVwiI1wifHx0eXBlPT09XCJeXCIpe3NlY3Rpb25zLnB1c2godG9rZW4pfWVsc2UgaWYodHlwZT09PVwiL1wiKXtvcGVuU2VjdGlvbj1zZWN0aW9ucy5wb3AoKTtpZighb3BlblNlY3Rpb24pdGhyb3cgbmV3IEVycm9yKCdVbm9wZW5lZCBzZWN0aW9uIFwiJyt2YWx1ZSsnXCIgYXQgJytzdGFydCk7aWYob3BlblNlY3Rpb25bMV0hPT12YWx1ZSl0aHJvdyBuZXcgRXJyb3IoJ1VuY2xvc2VkIHNlY3Rpb24gXCInK29wZW5TZWN0aW9uWzFdKydcIiBhdCAnK3N0YXJ0KX1lbHNlIGlmKHR5cGU9PT1cIm5hbWVcInx8dHlwZT09PVwie1wifHx0eXBlPT09XCImXCIpe25vblNwYWNlPXRydWV9ZWxzZSBpZih0eXBlPT09XCI9XCIpe2NvbXBpbGVUYWdzKHZhbHVlKX19b3BlblNlY3Rpb249c2VjdGlvbnMucG9wKCk7aWYob3BlblNlY3Rpb24pdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCBzZWN0aW9uIFwiJytvcGVuU2VjdGlvblsxXSsnXCIgYXQgJytzY2FubmVyLnBvcyk7cmV0dXJuIG5lc3RUb2tlbnMoc3F1YXNoVG9rZW5zKHRva2VucykpfWZ1bmN0aW9uIHNxdWFzaFRva2Vucyh0b2tlbnMpe3ZhciBzcXVhc2hlZFRva2Vucz1bXTt2YXIgdG9rZW4sbGFzdFRva2VuO2Zvcih2YXIgaT0wLG51bVRva2Vucz10b2tlbnMubGVuZ3RoO2k8bnVtVG9rZW5zOysraSl7dG9rZW49dG9rZW5zW2ldO2lmKHRva2VuKXtpZih0b2tlblswXT09PVwidGV4dFwiJiZsYXN0VG9rZW4mJmxhc3RUb2tlblswXT09PVwidGV4dFwiKXtsYXN0VG9rZW5bMV0rPXRva2VuWzFdO2xhc3RUb2tlblszXT10b2tlblszXX1lbHNle3NxdWFzaGVkVG9rZW5zLnB1c2godG9rZW4pO2xhc3RUb2tlbj10b2tlbn19fXJldHVybiBzcXVhc2hlZFRva2Vuc31mdW5jdGlvbiBuZXN0VG9rZW5zKHRva2Vucyl7dmFyIG5lc3RlZFRva2Vucz1bXTt2YXIgY29sbGVjdG9yPW5lc3RlZFRva2Vuczt2YXIgc2VjdGlvbnM9W107dmFyIHRva2VuLHNlY3Rpb247Zm9yKHZhciBpPTAsbnVtVG9rZW5zPXRva2Vucy5sZW5ndGg7aTxudW1Ub2tlbnM7KytpKXt0b2tlbj10b2tlbnNbaV07c3dpdGNoKHRva2VuWzBdKXtjYXNlXCIjXCI6Y2FzZVwiXlwiOmNvbGxlY3Rvci5wdXNoKHRva2VuKTtzZWN0aW9ucy5wdXNoKHRva2VuKTtjb2xsZWN0b3I9dG9rZW5bNF09W107YnJlYWs7Y2FzZVwiL1wiOnNlY3Rpb249c2VjdGlvbnMucG9wKCk7c2VjdGlvbls1XT10b2tlblsyXTtjb2xsZWN0b3I9c2VjdGlvbnMubGVuZ3RoPjA/c2VjdGlvbnNbc2VjdGlvbnMubGVuZ3RoLTFdWzRdOm5lc3RlZFRva2VuczticmVhaztkZWZhdWx0OmNvbGxlY3Rvci5wdXNoKHRva2VuKX19cmV0dXJuIG5lc3RlZFRva2Vuc31mdW5jdGlvbiBTY2FubmVyKHN0cmluZyl7dGhpcy5zdHJpbmc9c3RyaW5nO3RoaXMudGFpbD1zdHJpbmc7dGhpcy5wb3M9MH1TY2FubmVyLnByb3RvdHlwZS5lb3M9ZnVuY3Rpb24gZW9zKCl7cmV0dXJuIHRoaXMudGFpbD09PVwiXCJ9O1NjYW5uZXIucHJvdG90eXBlLnNjYW49ZnVuY3Rpb24gc2NhbihyZSl7dmFyIG1hdGNoPXRoaXMudGFpbC5tYXRjaChyZSk7aWYoIW1hdGNofHxtYXRjaC5pbmRleCE9PTApcmV0dXJuXCJcIjt2YXIgc3RyaW5nPW1hdGNoWzBdO3RoaXMudGFpbD10aGlzLnRhaWwuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpO3RoaXMucG9zKz1zdHJpbmcubGVuZ3RoO3JldHVybiBzdHJpbmd9O1NjYW5uZXIucHJvdG90eXBlLnNjYW5VbnRpbD1mdW5jdGlvbiBzY2FuVW50aWwocmUpe3ZhciBpbmRleD10aGlzLnRhaWwuc2VhcmNoKHJlKSxtYXRjaDtzd2l0Y2goaW5kZXgpe2Nhc2UtMTptYXRjaD10aGlzLnRhaWw7dGhpcy50YWlsPVwiXCI7YnJlYWs7Y2FzZSAwOm1hdGNoPVwiXCI7YnJlYWs7ZGVmYXVsdDptYXRjaD10aGlzLnRhaWwuc3Vic3RyaW5nKDAsaW5kZXgpO3RoaXMudGFpbD10aGlzLnRhaWwuc3Vic3RyaW5nKGluZGV4KX10aGlzLnBvcys9bWF0Y2gubGVuZ3RoO3JldHVybiBtYXRjaH07ZnVuY3Rpb24gQ29udGV4dCh2aWV3LHBhcmVudENvbnRleHQpe3RoaXMudmlldz12aWV3O3RoaXMuY2FjaGU9e1wiLlwiOnRoaXMudmlld307dGhpcy5wYXJlbnQ9cGFyZW50Q29udGV4dH1Db250ZXh0LnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uIHB1c2godmlldyl7cmV0dXJuIG5ldyBDb250ZXh0KHZpZXcsdGhpcyl9O0NvbnRleHQucHJvdG90eXBlLmxvb2t1cD1mdW5jdGlvbiBsb29rdXAobmFtZSl7dmFyIGNhY2hlPXRoaXMuY2FjaGU7dmFyIHZhbHVlO2lmKGNhY2hlLmhhc093blByb3BlcnR5KG5hbWUpKXt2YWx1ZT1jYWNoZVtuYW1lXX1lbHNle3ZhciBjb250ZXh0PXRoaXMsbmFtZXMsaW5kZXgsbG9va3VwSGl0PWZhbHNlO3doaWxlKGNvbnRleHQpe2lmKG5hbWUuaW5kZXhPZihcIi5cIik+MCl7dmFsdWU9Y29udGV4dC52aWV3O25hbWVzPW5hbWUuc3BsaXQoXCIuXCIpO2luZGV4PTA7d2hpbGUodmFsdWUhPW51bGwmJmluZGV4PG5hbWVzLmxlbmd0aCl7aWYoaW5kZXg9PT1uYW1lcy5sZW5ndGgtMSlsb29rdXBIaXQ9aGFzUHJvcGVydHkodmFsdWUsbmFtZXNbaW5kZXhdKTt2YWx1ZT12YWx1ZVtuYW1lc1tpbmRleCsrXV19fWVsc2V7dmFsdWU9Y29udGV4dC52aWV3W25hbWVdO2xvb2t1cEhpdD1oYXNQcm9wZXJ0eShjb250ZXh0LnZpZXcsbmFtZSl9aWYobG9va3VwSGl0KWJyZWFrO2NvbnRleHQ9Y29udGV4dC5wYXJlbnR9Y2FjaGVbbmFtZV09dmFsdWV9aWYoaXNGdW5jdGlvbih2YWx1ZSkpdmFsdWU9dmFsdWUuY2FsbCh0aGlzLnZpZXcpO3JldHVybiB2YWx1ZX07ZnVuY3Rpb24gV3JpdGVyKCl7dGhpcy5jYWNoZT17fX1Xcml0ZXIucHJvdG90eXBlLmNsZWFyQ2FjaGU9ZnVuY3Rpb24gY2xlYXJDYWNoZSgpe3RoaXMuY2FjaGU9e319O1dyaXRlci5wcm90b3R5cGUucGFyc2U9ZnVuY3Rpb24gcGFyc2UodGVtcGxhdGUsdGFncyl7dmFyIGNhY2hlPXRoaXMuY2FjaGU7dmFyIHRva2Vucz1jYWNoZVt0ZW1wbGF0ZV07aWYodG9rZW5zPT1udWxsKXRva2Vucz1jYWNoZVt0ZW1wbGF0ZV09cGFyc2VUZW1wbGF0ZSh0ZW1wbGF0ZSx0YWdzKTtyZXR1cm4gdG9rZW5zfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbiByZW5kZXIodGVtcGxhdGUsdmlldyxwYXJ0aWFscyl7dmFyIHRva2Vucz10aGlzLnBhcnNlKHRlbXBsYXRlKTt2YXIgY29udGV4dD12aWV3IGluc3RhbmNlb2YgQ29udGV4dD92aWV3Om5ldyBDb250ZXh0KHZpZXcpO3JldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbnMsY29udGV4dCxwYXJ0aWFscyx0ZW1wbGF0ZSl9O1dyaXRlci5wcm90b3R5cGUucmVuZGVyVG9rZW5zPWZ1bmN0aW9uIHJlbmRlclRva2Vucyh0b2tlbnMsY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKXt2YXIgYnVmZmVyPVwiXCI7dmFyIHRva2VuLHN5bWJvbCx2YWx1ZTtmb3IodmFyIGk9MCxudW1Ub2tlbnM9dG9rZW5zLmxlbmd0aDtpPG51bVRva2VuczsrK2kpe3ZhbHVlPXVuZGVmaW5lZDt0b2tlbj10b2tlbnNbaV07c3ltYm9sPXRva2VuWzBdO2lmKHN5bWJvbD09PVwiI1wiKXZhbHVlPXRoaXMucmVuZGVyU2VjdGlvbih0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpO2Vsc2UgaWYoc3ltYm9sPT09XCJeXCIpdmFsdWU9dGhpcy5yZW5kZXJJbnZlcnRlZCh0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpO2Vsc2UgaWYoc3ltYm9sPT09XCI+XCIpdmFsdWU9dGhpcy5yZW5kZXJQYXJ0aWFsKHRva2VuLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSk7ZWxzZSBpZihzeW1ib2w9PT1cIiZcIil2YWx1ZT10aGlzLnVuZXNjYXBlZFZhbHVlKHRva2VuLGNvbnRleHQpO2Vsc2UgaWYoc3ltYm9sPT09XCJuYW1lXCIpdmFsdWU9dGhpcy5lc2NhcGVkVmFsdWUodG9rZW4sY29udGV4dCk7ZWxzZSBpZihzeW1ib2w9PT1cInRleHRcIil2YWx1ZT10aGlzLnJhd1ZhbHVlKHRva2VuKTtpZih2YWx1ZSE9PXVuZGVmaW5lZClidWZmZXIrPXZhbHVlfXJldHVybiBidWZmZXJ9O1dyaXRlci5wcm90b3R5cGUucmVuZGVyU2VjdGlvbj1mdW5jdGlvbiByZW5kZXJTZWN0aW9uKHRva2VuLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl7dmFyIHNlbGY9dGhpczt2YXIgYnVmZmVyPVwiXCI7dmFyIHZhbHVlPWNvbnRleHQubG9va3VwKHRva2VuWzFdKTtmdW5jdGlvbiBzdWJSZW5kZXIodGVtcGxhdGUpe3JldHVybiBzZWxmLnJlbmRlcih0ZW1wbGF0ZSxjb250ZXh0LHBhcnRpYWxzKX1pZighdmFsdWUpcmV0dXJuO2lmKGlzQXJyYXkodmFsdWUpKXtmb3IodmFyIGo9MCx2YWx1ZUxlbmd0aD12YWx1ZS5sZW5ndGg7ajx2YWx1ZUxlbmd0aDsrK2ope2J1ZmZlcis9dGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sY29udGV4dC5wdXNoKHZhbHVlW2pdKSxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKX19ZWxzZSBpZih0eXBlb2YgdmFsdWU9PT1cIm9iamVjdFwifHx0eXBlb2YgdmFsdWU9PT1cInN0cmluZ1wifHx0eXBlb2YgdmFsdWU9PT1cIm51bWJlclwiKXtidWZmZXIrPXRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLGNvbnRleHQucHVzaCh2YWx1ZSkscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl9ZWxzZSBpZihpc0Z1bmN0aW9uKHZhbHVlKSl7aWYodHlwZW9mIG9yaWdpbmFsVGVtcGxhdGUhPT1cInN0cmluZ1wiKXRocm93IG5ldyBFcnJvcihcIkNhbm5vdCB1c2UgaGlnaGVyLW9yZGVyIHNlY3Rpb25zIHdpdGhvdXQgdGhlIG9yaWdpbmFsIHRlbXBsYXRlXCIpO3ZhbHVlPXZhbHVlLmNhbGwoY29udGV4dC52aWV3LG9yaWdpbmFsVGVtcGxhdGUuc2xpY2UodG9rZW5bM10sdG9rZW5bNV0pLHN1YlJlbmRlcik7aWYodmFsdWUhPW51bGwpYnVmZmVyKz12YWx1ZX1lbHNle2J1ZmZlcis9dGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKX1yZXR1cm4gYnVmZmVyfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlckludmVydGVkPWZ1bmN0aW9uIHJlbmRlckludmVydGVkKHRva2VuLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl7dmFyIHZhbHVlPWNvbnRleHQubG9va3VwKHRva2VuWzFdKTtpZighdmFsdWV8fGlzQXJyYXkodmFsdWUpJiZ2YWx1ZS5sZW5ndGg9PT0wKXJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSxjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlclBhcnRpYWw9ZnVuY3Rpb24gcmVuZGVyUGFydGlhbCh0b2tlbixjb250ZXh0LHBhcnRpYWxzKXtpZighcGFydGlhbHMpcmV0dXJuO3ZhciB2YWx1ZT1pc0Z1bmN0aW9uKHBhcnRpYWxzKT9wYXJ0aWFscyh0b2tlblsxXSk6cGFydGlhbHNbdG9rZW5bMV1dO2lmKHZhbHVlIT1udWxsKXJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0aGlzLnBhcnNlKHZhbHVlKSxjb250ZXh0LHBhcnRpYWxzLHZhbHVlKX07V3JpdGVyLnByb3RvdHlwZS51bmVzY2FwZWRWYWx1ZT1mdW5jdGlvbiB1bmVzY2FwZWRWYWx1ZSh0b2tlbixjb250ZXh0KXt2YXIgdmFsdWU9Y29udGV4dC5sb29rdXAodG9rZW5bMV0pO2lmKHZhbHVlIT1udWxsKXJldHVybiB2YWx1ZX07V3JpdGVyLnByb3RvdHlwZS5lc2NhcGVkVmFsdWU9ZnVuY3Rpb24gZXNjYXBlZFZhbHVlKHRva2VuLGNvbnRleHQpe3ZhciB2YWx1ZT1jb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7aWYodmFsdWUhPW51bGwpcmV0dXJuIG11c3RhY2hlLmVzY2FwZSh2YWx1ZSl9O1dyaXRlci5wcm90b3R5cGUucmF3VmFsdWU9ZnVuY3Rpb24gcmF3VmFsdWUodG9rZW4pe3JldHVybiB0b2tlblsxXX07bXVzdGFjaGUubmFtZT1cIm11c3RhY2hlLmpzXCI7bXVzdGFjaGUudmVyc2lvbj1cIjIuMy4wXCI7bXVzdGFjaGUudGFncz1bXCI8JVwiLFwiJT5cIl07dmFyIGRlZmF1bHRXcml0ZXI9bmV3IFdyaXRlcjttdXN0YWNoZS5jbGVhckNhY2hlPWZ1bmN0aW9uIGNsZWFyQ2FjaGUoKXtyZXR1cm4gZGVmYXVsdFdyaXRlci5jbGVhckNhY2hlKCl9O211c3RhY2hlLnBhcnNlPWZ1bmN0aW9uIHBhcnNlKHRlbXBsYXRlLHRhZ3Mpe3JldHVybiBkZWZhdWx0V3JpdGVyLnBhcnNlKHRlbXBsYXRlLHRhZ3MpfTttdXN0YWNoZS5yZW5kZXI9ZnVuY3Rpb24gcmVuZGVyKHRlbXBsYXRlLHZpZXcscGFydGlhbHMpe2lmKHR5cGVvZiB0ZW1wbGF0ZSE9PVwic3RyaW5nXCIpe3Rocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgdGVtcGxhdGUhIFRlbXBsYXRlIHNob3VsZCBiZSBhIFwic3RyaW5nXCIgJysnYnV0IFwiJyt0eXBlU3RyKHRlbXBsYXRlKSsnXCIgd2FzIGdpdmVuIGFzIHRoZSBmaXJzdCAnK1wiYXJndW1lbnQgZm9yIG11c3RhY2hlI3JlbmRlcih0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMpXCIpfXJldHVybiBkZWZhdWx0V3JpdGVyLnJlbmRlcih0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzKX07bXVzdGFjaGUudG9faHRtbD1mdW5jdGlvbiB0b19odG1sKHRlbXBsYXRlLHZpZXcscGFydGlhbHMsc2VuZCl7dmFyIHJlc3VsdD1tdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUsdmlldyxwYXJ0aWFscyk7aWYoaXNGdW5jdGlvbihzZW5kKSl7c2VuZChyZXN1bHQpfWVsc2V7cmV0dXJuIHJlc3VsdH19O211c3RhY2hlLmVzY2FwZT1lc2NhcGVIdG1sO211c3RhY2hlLlNjYW5uZXI9U2Nhbm5lcjttdXN0YWNoZS5Db250ZXh0PUNvbnRleHQ7bXVzdGFjaGUuV3JpdGVyPVdyaXRlcjtyZXR1cm4gbXVzdGFjaGV9KTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMCwyMDExLDIwMTIsMjAxMywyMDE0IE1vcmdhbiBSb2RlcmljayBodHRwOi8vcm9kZXJpY2suZGtcbiAqIExpY2Vuc2U6IE1JVCAtIGh0dHA6Ly9tcmducmRyY2subWl0LWxpY2Vuc2Uub3JnXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL21yb2Rlcmljay9QdWJTdWJKU1xuICovXG4hZnVuY3Rpb24obix0KXtcInVzZSBzdHJpY3RcIjt2YXIgcj17fTtuLlB1YlN1Yj1yO3ZhciBlPW4uZGVmaW5lOyFmdW5jdGlvbihuKXt2YXIgdD17fSxyPS0xO2Z1bmN0aW9uIGUobil7dmFyIHQ7Zm9yKHQgaW4gbilpZihuLmhhc093blByb3BlcnR5KHQpKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIG8obix0LHIpe3RyeXtuKHQscil9Y2F0Y2gobil7c2V0VGltZW91dChmdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24oKXt0aHJvdyBufX0obiksMCl9fWZ1bmN0aW9uIGkobix0LHIpe24odCxyKX1mdW5jdGlvbiB1KG4scixlLHUpe3ZhciBmLHM9dFtyXSxjPXU/aTpvO2lmKHQuaGFzT3duUHJvcGVydHkocikpZm9yKGYgaW4gcylzLmhhc093blByb3BlcnR5KGYpJiZjKHNbZl0sbixlKX1mdW5jdGlvbiBmKG4scixvLGkpe3ZhciBmPWZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZT1TdHJpbmcobiksbz1lLmxhc3RJbmRleE9mKFwiLlwiKTtmb3IodShuLG4sdCxyKTstMSE9PW87KWU9ZS5zdWJzdHIoMCxvKSxvPWUubGFzdEluZGV4T2YoXCIuXCIpLHUobixlLHQscil9fShuPVwic3ltYm9sXCI9PXR5cGVvZiBuP24udG9TdHJpbmcoKTpuLHIsaSkscz1mdW5jdGlvbihuKXt2YXIgcj1TdHJpbmcobiksbz1Cb29sZWFuKHQuaGFzT3duUHJvcGVydHkocikmJmUodFtyXSkpLGk9ci5sYXN0SW5kZXhPZihcIi5cIik7Zm9yKDshbyYmLTEhPT1pOylyPXIuc3Vic3RyKDAsaSksaT1yLmxhc3RJbmRleE9mKFwiLlwiKSxvPUJvb2xlYW4odC5oYXNPd25Qcm9wZXJ0eShyKSYmZSh0W3JdKSk7cmV0dXJuIG99KG4pO3JldHVybiEhcyYmKCEwPT09bz9mKCk6c2V0VGltZW91dChmLDApLCEwKX1uLnB1Ymxpc2g9ZnVuY3Rpb24odCxyKXtyZXR1cm4gZih0LHIsITEsbi5pbW1lZGlhdGVFeGNlcHRpb25zKX0sbi5wdWJsaXNoU3luYz1mdW5jdGlvbih0LHIpe3JldHVybiBmKHQsciwhMCxuLmltbWVkaWF0ZUV4Y2VwdGlvbnMpfSxuLnN1YnNjcmliZT1mdW5jdGlvbihuLGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpcmV0dXJuITE7bj1cInN5bWJvbFwiPT10eXBlb2Ygbj9uLnRvU3RyaW5nKCk6bix0Lmhhc093blByb3BlcnR5KG4pfHwodFtuXT17fSk7dmFyIG89XCJ1aWRfXCIrU3RyaW5nKCsrcik7cmV0dXJuIHRbbl1bb109ZSxvfSxuLnN1YnNjcmliZU9uY2U9ZnVuY3Rpb24odCxyKXt2YXIgZT1uLnN1YnNjcmliZSh0LGZ1bmN0aW9uKCl7bi51bnN1YnNjcmliZShlKSxyLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pO3JldHVybiBufSxuLmNsZWFyQWxsU3Vic2NyaXB0aW9ucz1mdW5jdGlvbigpe3Q9e319LG4uY2xlYXJTdWJzY3JpcHRpb25zPWZ1bmN0aW9uKG4pe3ZhciByO2ZvcihyIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShyKSYmMD09PXIuaW5kZXhPZihuKSYmZGVsZXRlIHRbcl19LG4udW5zdWJzY3JpYmU9ZnVuY3Rpb24ocil7dmFyIGUsbyxpLHU9XCJzdHJpbmdcIj09dHlwZW9mIHImJih0Lmhhc093blByb3BlcnR5KHIpfHxmdW5jdGlvbihuKXt2YXIgcjtmb3IociBpbiB0KWlmKHQuaGFzT3duUHJvcGVydHkocikmJjA9PT1yLmluZGV4T2YobikpcmV0dXJuITA7cmV0dXJuITF9KHIpKSxmPSF1JiZcInN0cmluZ1wiPT10eXBlb2YgcixzPVwiZnVuY3Rpb25cIj09dHlwZW9mIHIsYz0hMTtpZighdSl7Zm9yKGUgaW4gdClpZih0Lmhhc093blByb3BlcnR5KGUpKXtpZihvPXRbZV0sZiYmb1tyXSl7ZGVsZXRlIG9bcl0sYz1yO2JyZWFrfWlmKHMpZm9yKGkgaW4gbylvLmhhc093blByb3BlcnR5KGkpJiZvW2ldPT09ciYmKGRlbGV0ZSBvW2ldLGM9ITApfXJldHVybiBjfW4uY2xlYXJTdWJzY3JpcHRpb25zKHIpfX0ociksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZS5hbWQ/ZShmdW5jdGlvbigpe3JldHVybiByfSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJih2b2lkIDAhPT1tb2R1bGUmJm1vZHVsZS5leHBvcnRzJiYoZXhwb3J0cz1tb2R1bGUuZXhwb3J0cz1yKSxleHBvcnRzLlB1YlN1Yj1yLG1vZHVsZS5leHBvcnRzPWV4cG9ydHM9cil9KFwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvd3x8dGhpcyk7IiwiLyohIFVURi04XHJcblxyXG7CqSBrb3ZyaWdpblxyXG7QktGB0LUg0L/RgNCw0LLQsCDRgNCw0LfRgNC10YjQtdC90Ytcclxu0LrRgNCw0YHQuNCy0YvQuSDQtNC40LfQsNC50L0g0LTQvtC70LbQtdC9INC40LzQtdGC0Ywg0LrRgNCw0YHQuNCy0YvQuSDQutC+0LTCrlxyXG5cclxuaHR0cHM6Ly9naXRodWIuY29tL2h0bWxwbHVzY3NzL1xyXG5cclxuKi9cclxuXHJcbiggKCkgPT4ge1xyXG5cclxuXHRsZXQgcmVzaXplVGltZW91dCA9IG51bGwsXHJcblx0XHR3aW5kb3dXaWR0aE9MZCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcblxyXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKCByZXNpemVUaW1lb3V0ID09PSBudWxsICkge1xyXG5cclxuXHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRcdGlmKHdpbmRvd1dpZHRoT0xkICE9PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xyXG5cclxuXHRcdFx0XHRcdFx0d2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcblx0XHRcdFx0XHRcdFB1YlN1Yi5wdWJsaXNoKCd3aW5kb3dXaWR0aFJlc2l6ZScpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSwgMTAwKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXRyYW5zaXRpb25EZWZhdWx0JywgJy4zcycpO1xyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWhlYWRlckhlaWdodCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5jbGllbnRIZWlnaHQgKyAncHgnKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINC+0LHRgNCw0LHQvtGC0YfQuNC6INCw0L3QuNC80LDRhtC40LlcclxuXHR3aW5kb3cuY3NzQW5pbWF0aW9uID0gYT0+e2xldCBiLGMsZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY3NzYW5pbWF0aW9uXCIpO3N3aXRjaChhKXtjYXNlJ2FuaW1hdGlvbic6Yj17XCJhbmltYXRpb25cIjpcImFuaW1hdGlvbmVuZFwiLFwiT0FuaW1hdGlvblwiOlwib0FuaW1hdGlvbkVuZFwiLFwiTW96QW5pbWF0aW9uXCI6XCJhbmltYXRpb25lbmRcIixcIldlYmtpdEFuaW1hdGlvblwiOlwid2Via2l0QW5pbWF0aW9uRW5kXCJ9O2JyZWFrO2Nhc2UndHJhbnNpdGlvbic6Yj17XCJ0cmFuc2l0aW9uXCI6XCJ0cmFuc2l0aW9uZW5kXCIsXCJPVHJhbnNpdGlvblwiOlwib1RyYW5zaXRpb25FbmRcIixcIk1velRyYW5zaXRpb25cIjpcInRyYW5zaXRpb25lbmRcIixcIldlYmtpdFRyYW5zaXRpb25cIjpcIndlYmtpdFRyYW5zaXRpb25FbmRcIn19Zm9yKGMgaW4gYilpZihkLnN0eWxlW2NdIT09dW5kZWZpbmVkKXJldHVybiBiW2NdfVxyXG5cclxuXHQvLyBEZXRlcm1pbmUgaWYgYW4gZWxlbWVudCBpcyBpbiB0aGUgdmlzaWJsZSB2aWV3cG9ydFxyXG5cdHdpbmRvdy5pc0luVmlld3BvcnQgPSBlbCA9PiB7XHJcblx0XHRjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRyZXR1cm4gKHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHR9XHJcblxyXG5cdC8vINC+0YLQtNC10LvRj9C10Lwg0YLRi9GB0Y/Rh9C4XHJcblx0d2luZG93LnNlcE51bWJlciA9IGZ1bmN0aW9uKHN0cil7XHJcblx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcclxuXHRcdHN0ciA9IHN0ci5yZXBsYWNlKC9cXHMrL2csJycpO1xyXG5cdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGRcXGQpKyhbXlxcZF18JCkpL2csICckMSAnKTtcclxuXHR9XHJcblxyXG5cdC8vINGB0LrQu9C10LjQstCw0LXQvCDRgtGL0YHRj9GH0LhcclxuXHR3aW5kb3cuc3RyVG9OdW1iZXIgPSBmdW5jdGlvbihuKXtcclxuXHRcdHJldHVybiBwYXJzZUludChuLnJlcGxhY2UoL1xccysvZywnJyksIDEwKTtcclxuXHR9XHJcblxyXG4vLyDRgdC60LvQvtC90LXQvdC40LVcclxuXHR3aW5kb3cuZGVjbGVuc2lvbiA9IChudW0sIGV4cHJlc3Npb25zKSA9PiB7XHJcblxyXG5cdFx0bGV0IHIsXHJcblx0XHRcdGNvdW50ID0gbnVtICUgMTAwO1xyXG5cclxuXHRcdGlmIChjb3VudCA+IDQgJiYgY291bnQgPCAyMSl7XHJcblxyXG5cdFx0XHRyID0gZXhwcmVzc2lvbnNbJzInXTtcclxuXHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHJcblx0XHRcdGNvdW50ID0gY291bnQgJSAxMDtcclxuXHJcblx0XHRcdGlmIChjb3VudCA9PSAxKXtcclxuXHRcdFx0XHRyID0gZXhwcmVzc2lvbnNbJzAnXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChjb3VudCA+IDEgJiYgY291bnQgPCA1KXtcclxuXHRcdFx0XHRyID0gZXhwcmVzc2lvbnNbJzEnXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNle1xyXG5cdFx0XHRcdHIgPSBleHByZXNzaW9uc1snMiddO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByO1xyXG5cclxuXHR9XHJcblxyXG59KSgpOyIsIlxuKCBsaW5rcyA9PiB7XG5cblx0aWYobGlua3MubGVuZ3RoKSB7XG5cblx0XHRjb25zdCBoaXN0b3J5QmFjayA9IGV2ZW50PT4ge1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0aGlzdG9yeS5iYWNrKCk7XG5cblx0XHR9XG5cblx0XHRBcnJheS5mcm9tKGxpbmtzLCBsaW5rID0+IHtcblxuXHRcdFx0aWYoZG9jdW1lbnQucmVmZXJyZXIuaW5kZXhPZihsb2NhdGlvbi5ob3N0bmFtZSkgPiAwKSB7XG5cblx0XHRcdFx0bGluay5vbmNsaWNrID0gaGlzdG9yeUJhY2s7XG5cblx0XHRcdH1cblxuXHRcdH0pO1xuXG5cdH1cblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWJ0bi1iYWNrJykpOyIsIiggaXRlbXMgPT4ge1xyXG5cclxuXHRpZighaXRlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oaXRlbXMsIGZvcm0gPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3hfX2lucHV0JyksXHJcblx0XHRcdCAgaW5wdXRBbGwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveF9faW5wdXRbdmFsdWU9XCJhbGxcIl0nKSxcclxuXHRcdFx0ICBpbnB1dE5vdEFsbCA9IEFycmF5LmZyb20oaW5wdXQpLmZpbHRlcihlbCA9PiBlbCAhPT0gaW5wdXRBbGwpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oaW5wdXQsIGVsID0+IHtcclxuXHJcblx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdFx0aWYgKCBpbnB1dEFsbCApIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGlucHV0QWxsID09PSBlbCApIHtcclxuXHJcblx0XHRcdFx0XHRcdGlucHV0Tm90QWxsLmZvckVhY2goZWwgPT4gZWwuY2hlY2tlZCA9IGlucHV0QWxsLmNoZWNrZWQpO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpbnB1dEFsbC5jaGVja2VkID0gaW5wdXROb3RBbGwuZXZlcnkoIGVsID0+IGVsLmNoZWNrZWQgPT09IHRydWUgKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveC1ncm91cCcpKTsiLCIoIGl0ZW1zID0+IHtcclxuXHJcblx0aWYoIGl0ZW1zLmxlbmd0aCA9PT0gMCApIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaXNNZW51ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5jb250ZXh0LW1lbnUnKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGl0ZW1zLCBpdGVtID0+IHtcclxuXHJcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicsIGl0ZW0gPT09IGlzTWVudSAmJiBpc01lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykgPT09IGZhbHNlKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGV4dC1tZW51JykpOyIsIiggZGFzaGJvYXJkID0+IHtcclxuXHJcblx0aWYgKCBkYXNoYm9hcmQgKSB7XHJcblxyXG5cdFx0Y29uc3Qgc2V0SGVpZ2h0ID0gKCBoID0gMCApID0+IHtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oZGFzaGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXNoYm9hcmRfX2Rlc2MnKSwgaXRlbSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmICggaCA8IGl0ZW0uY2xpZW50SGVpZ2h0ICkge1xyXG5cclxuXHRcdFx0XHRcdGggPSBpdGVtLmNsaWVudEhlaWdodDtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZGFzaGJvYXJkRGVzY0hlaWdoZ3QnLCBoICsgJ3B4Jyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdFB1YlN1Yi5zdWJzY3JpYmUoJ3dpbmRvd1dpZHRoUmVzaXplJywgKCkgPT4gc2V0SGVpZ2h0KCkpO1xyXG5cclxuXHRcdHNldEhlaWdodCgpO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFzaGJvYXJkJykpOyIsIiggZGF0YWxpc3RzID0+IHtcclxuXHJcblx0aWYgKCBkYXRhbGlzdHMubGVuZ3RoID09PSAwICkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGRhdGFsaXN0cywgZGF0YWxpc3QgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGZvcm0gPSBkYXRhbGlzdC5jbG9zZXN0KCdmb3JtJyksXHJcblx0XHRcdCAgaW5wdXQgPSBkYXRhbGlzdC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZGF0YWxpc3RfX2lucHV0JyksXHJcblx0XHRcdCAgbGlzdCA9IGRhdGFsaXN0LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1kYXRhbGlzdF9fbGlzdCcpLFxyXG5cdFx0XHQgIGl0ZW1zID0gZGF0YWxpc3QucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWRhdGFsaXN0X19pdGVtJyksXHJcblx0XHRcdCAgd29ya2dyb3VwQWRkVXNlciA9IGRhdGFsaXN0LmNsYXNzTGlzdC5jb250YWlucygnaW4td29ya2dyb3VwLWFkZC11c2VyJyk7XHJcblxyXG5cdFx0ZGF0YWxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAoKT0+IHtcclxuXHJcblx0XHRcdGlucHV0LnZhbHVlID0gJyc7XHJcblx0XHRcdEFycmF5LmZyb20oaXRlbXMsIGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1kYXRhbGlzdF9faXRlbS0taGlkZScpKTtcclxuXHRcdFx0ZGF0YWxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZm9jdXMnKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAoIHdvcmtncm91cEFkZFVzZXIgKSB7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGl0ZW1zLCBpdGVtID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc3QgcmFkaW8gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1kYXRhbGlzdF9fcmFkaW8nKTtcclxuXHJcblx0XHRcdFx0cmFkaW8uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aXRlbS5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseWhpZGRlbicpO1xyXG5cclxuXHRcdFx0XHRcdGlucHV0LmZvY3VzKCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBpbnB1dC52YWx1ZSApIHtcclxuXHJcblx0XHRcdFx0XHRcdGRhdGFsaXN0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2xvc2VcIikpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiBkYXRhbGlzdC5jbGFzc0xpc3QuYWRkKCdpcy1mb2N1cycpKTtcclxuXHJcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuXHJcblx0XHRcdGRhdGFsaXN0LmNsYXNzTGlzdC5hZGQoJ2lzLWZvY3VzJyk7XHJcblxyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRpZiggdmFsdWUubGVuZ3RoICkge1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGl0ZW1zLCBpdGVtID0+IHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCB0ZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZGF0YWxpc3RfX2ZpbHRlcicpLnRleHRDb250ZW50LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaW5wdXQtZGF0YWxpc3RfX2l0ZW0tLWhpZGUnLCB0ZXh0LmluZGV4T2YodmFsdWUpID09PSAtMSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShpdGVtcywgaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWRhdGFsaXN0X19pdGVtLS1oaWRlJykpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCB3b3JrZ3JvdXBBZGRVc2VyICkge1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC50b2dnbGUoICdpcy1lbXB0eScsIEFycmF5LmZyb20oaXRlbXMpLmV2ZXJ5KCBlbCA9PiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc3VhbGx5aGlkZGVuJykgfHwgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dC1kYXRhbGlzdF9faXRlbS0taGlkZScpKSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYgKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLmlucHV0LWRhdGFsaXN0JykgPT09IG51bGwgKSB7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGRhdGFsaXN0cywgZGF0YWxpc3QgPT4gZGF0YWxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZm9jdXMnKSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1kYXRhbGlzdCcpKTsiLCIoIGl0ZW1zID0+IHtcclxuXHJcblx0aWYoIWl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGl0ZW1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRjb25zdCBzdWJtaXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXJlcXVpcmVkX19zdWJtaXQnKTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgZmFsaWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyZXF1aXJlZF0nKSwgZWwgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoIGVsLnR5cGUgPT09ICdyYWRpbycgJiYgZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cIicgKyBlbC5uYW1lICsgJ1wiXTpjaGVja2VkJykubGVuZ3RoID09PSAwICkge1xyXG5cclxuXHRcdFx0XHRcdGZhbGlkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoIGVsLnZhbHVlID09PSAnbm9uZScgfHwgZWwudmFsdWUubGVuZ3RoID09PSAwICkge1xyXG5cclxuXHRcdFx0XHRcdGZhbGlkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0c3VibWl0LmRpc2FibGVkID0gIWZhbGlkO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLXJlcXVpcmVkJykpOyIsIiggZm9ybSA9PiB7XHJcblxyXG5cdGlmKCAhZm9ybSApIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3Qgc3VibWl0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS13b3JrZ3JvdXAtYWRkLXVzZXJfX3N1Ym1pdCcpLFxyXG5cdFx0ICB1c2VycyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0td29ya2dyb3VwLWFkZC11c2VyX191c2VyJyksXHJcblx0XHQgIGhlYWQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy53b3JrZ3JvdXAtYWRkLXVzZXJfX2xpc3QtaGVhZCcpLFxyXG5cdFx0ICByZXN1bHQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy53b3JrZ3JvdXAtYWRkLXVzZXJfX3Jlc3VsdCcpLFxyXG5cdFx0ICBidG5OZXh0Q3VzdG9tID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS13b3JrZ3JvdXAtYWRkLXVzZXJfX2J0bi1uZXh0LWN1c3RvbScpLFxyXG5cdFx0ICBjdXN0b21OYW1lID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS13b3JrZ3JvdXAtYWRkLXVzZXJfX2N1c3RvbS1uYW1lJyksXHJcblx0XHQgIGN1c3RvbUVtYWlsID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS13b3JrZ3JvdXAtYWRkLXVzZXJfX2N1c3RvbS1lbWFpbCcpLFxyXG5cdFx0ICBjdXN0b21TdWJtaXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXdvcmtncm91cC1hZGQtdXNlcl9fc3VibWl0LWN1c3RvbScpLFxyXG5cdFx0ICB0ZW1wbGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignI3dvcmtncm91cC1hZGQtdXNlci10ZW1wbGF0ZScpLmlubmVySFRNTCxcclxuXHRcdCAgdGVtcGxhdGVDdXN0b20gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyN3b3JrZ3JvdXAtYWRkLXVzZXItdGVtcGxhdGUtY3VzdG9tJykuaW5uZXJIVE1MO1xyXG5cclxuICBcdGxldCB1c2Vyc0xpc3QgPSBmYWxzZTtcclxuXHJcbiAgXHRjb25zdCBjdXN0b21JbnB1dCA9ICgpPT4ge1xyXG5cclxuXHRcdGN1c3RvbVN1Ym1pdC5kaXNhYmxlZCA9IGN1c3RvbU5hbWUudmFsdWUubGVuZ3RoID09PSAwIHx8IGN1c3RvbUVtYWlsLnZhbHVlLmxlbmd0aCA9PT0gMDtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBmb3JtRGlzYWJsZWQgPSBkaXNhYmxlZCA9PiB7XHJcblxyXG5cdFx0c3VibWl0LmRpc2FibGVkID0gZGlzYWJsZWQ7XHJcblx0XHRoZWFkLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCBkaXNhYmxlZCk7XHJcblxyXG5cdH1cclxuXHJcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZiggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZm9ybS13b3JrZ3JvdXAtYWRkLXVzZXJfX3VzZXInKSApIHtcclxuXHJcblx0XHRcdGNvbnN0IGlkID0gZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG5cdFx0XHRcdCAgdXNlciA9IGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblx0XHRcdFx0ICBhdmF0YXIgPSB1c2VyLnF1ZXJ5U2VsZWN0b3IoJy53b3JrZ3JvdXAtdXNlcl9faGVhZCcpLmlubmVySFRNTCxcclxuXHRcdFx0XHQgIG5hbWUgPSB1c2VyLnF1ZXJ5U2VsZWN0b3IoJy53b3JrZ3JvdXAtdXNlcl9fbmFtZScpLnRleHRDb250ZW50LnRyaW0oKSxcclxuXHRcdFx0XHQgIGRlc2MgPSB1c2VyLnF1ZXJ5U2VsZWN0b3IoJy53b3JrZ3JvdXAtdXNlcl9fZGVzYycpLnRleHRDb250ZW50LnRyaW0oKTtcclxuXHJcblx0XHRcdHJlc3VsdC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUsIHsgaWQsIGF2YXRhciwgbmFtZSwgZGVzYyB9KSk7XHJcblxyXG5cdFx0XHRmb3JtRGlzYWJsZWQoZmFsc2UpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINGA0YPRh9C90L7QtSDQtNC+0LHQsNCy0LvQtdC90LjQtVxyXG5cclxuXHRidG5OZXh0Q3VzdG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblxyXG5cdFx0Y3VzdG9tTmFtZS5mb2N1cygpO1xyXG5cdFx0YnRuTmV4dEN1c3RvbS5jbG9zZXN0KCcuaW5wdXQtZGF0YWxpc3QnKS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNsb3NlXCIpKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdGN1c3RvbU5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IGN1c3RvbUlucHV0KCkpO1xyXG5cdGN1c3RvbUVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiBjdXN0b21JbnB1dCgpKTtcclxuXHJcblx0Y3VzdG9tU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgbmFtZSA9IGN1c3RvbU5hbWUudmFsdWUudHJpbSgpLFxyXG5cdFx0XHQgIGVtYWlsID0gY3VzdG9tRW1haWwudmFsdWUudHJpbSgpO1xyXG5cclxuXHRcdGxldCBhdmF0YXIgPSAnJztcclxuXHJcblx0XHRpZiAoIG5hbWUuaW5kZXhPZignICcpID09PSAtMSApIHtcclxuXHJcblx0XHRcdGF2YXRhciA9IG5hbWU7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdG5hbWUuc3BsaXQoJyAnKS5mb3JFYWNoKCB3b3JkID0+IHtcclxuXHJcblx0XHRcdFx0YXZhdGFyICs9IHdvcmQuc3Vic3RyKDAsIDEpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGF2YXRhciA9IGF2YXRhci5zdWJzdHIoMCwgMik7XHJcblxyXG5cdFx0cmVzdWx0Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZUN1c3RvbSwgeyBhdmF0YXIsIG5hbWUsIGVtYWlsIH0pKTtcclxuXHJcblx0XHRjdXN0b21OYW1lLnZhbHVlID0gJyc7XHJcblx0XHRjdXN0b21FbWFpbC52YWx1ZSA9ICcnO1xyXG5cdFx0Y3VzdG9tU3VibWl0LmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcblx0XHRmb3JtRGlzYWJsZWQoZmFsc2UpO1xyXG5cclxuXHR9KTtcclxuXHJcblx0cmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRuUmVtb3ZlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy53b3JrZ3JvdXAtYWRkLXVzZXJfX25ldy1yZW1vdmUnKTtcclxuXHJcblx0XHRpZiAoIGJ0blJlbW92ZSApIHtcclxuXHJcblx0XHRcdGNvbnN0IGlkID0gYnRuUmVtb3ZlLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG5cclxuXHRcdFx0aWYgKCBpZCAhPT0gJ2N1c3RvbScgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS13b3JrZ3JvdXAtYWRkLXVzZXJfX3VzZXJbdmFsdWU9XCInICsgaWQgKyAnXCJdJyk7XHJcblxyXG5cdFx0XHRcdGlucHV0LmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0aW5wdXQuY2xvc2VzdCgnLmZvcm0td29ya2dyb3VwLWFkZC11c2VyX191c2VyLXdyYXAnKS5jbGFzc0xpc3QucmVtb3ZlKCd2aXN1YWxseWhpZGRlbicpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2V0VGltZW91dCggKCk9PiB7XHJcblxyXG5cdFx0XHRcdGJ0blJlbW92ZS5jbG9zZXN0KCcud29ya2dyb3VwLWFkZC11c2VyX19uZXcnKS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFx0aWYgKCAhcmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJy53b3JrZ3JvdXAtYWRkLXVzZXJfX25ldycpICkge1xyXG5cclxuXHRcdFx0XHRcdGZvcm1EaXNhYmxlZCh0cnVlKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHRcdHN1Ym1pdC5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdH0pXHJcblx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHQudGhlbihub3RpZmljYXRpb24gPT4ge1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2cobm90aWZpY2F0aW9uKTtcclxuXHJcblx0XHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdFx0bm90aWZpY2F0aW9uKC4uLm5vdGlmaWNhdGlvbik7XHJcblxyXG5cdFx0XHRyZXN1bHQuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRcdGZvcm1EaXNhYmxlZCh0cnVlKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS13b3JrZ3JvdXAtYWRkLXVzZXInKSk7IiwiKCBpdGVtcyA9PiB7XHJcblxyXG5cdGlmKCFpdGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShpdGVtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRuID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fc3VibWl0Jyk7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1sb2FkaW5nJyk7XHJcblx0XHRcdGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0XHQudGhlbihyZXN1bHQgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKTtcclxuXHRcdFx0XHRidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdC8vIG5vdGlmaWNhdGlvblxyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQubm90aWZpY2F0aW9uKSB7XHJcblxyXG5cdFx0XHRcdFx0bm90aWZpY2F0aW9uKC4uLnJlc3VsdC5ub3RpZmljYXRpb24pO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyByZWRpcmVjdFxyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQucmVkaXJlY3QpIHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBkZWxheSA9IHJlc3VsdC5yZWRpcmVjdERlbGF5ID8gcmVzdWx0LnJlZGlyZWN0RGVsYXkgKiAxMDAwIDogMDtcclxuXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKT0+IGxvY2F0aW9uLmFzc2lnbihyZXN1bHQucmVkaXJlY3QpLCBkZWxheSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHJlc2V0XHJcblxyXG5cdFx0XHRcdGlmKHJlc3VsdC5yZXNldCkge1xyXG5cclxuXHRcdFx0XHRcdGZvcm0ucmVzZXQoKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gcmVsb2FkXHJcblxyXG5cdFx0XHRcdGlmKHJlc3VsdC5yZWZyZXNoKSB7XHJcblxyXG5cdFx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtJykpOyIsIiggaW5wdXQgPT4ge1xyXG5cclxuXHRpZiggIWlucHV0Lmxlbmd0aCApIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShpbnB1dCwgaXRlbSA9PiB7XHJcblxyXG5cdFx0aXRlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdGl0ZW0ucXVlcnlTZWxlY3RvcignLmlucHV0LWZpbGVfX3ZhbHVlJykudGV4dENvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWU7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWZpbGUnKSk7IiwiKCBpdGVtcyA9PiB7XHJcblxyXG5cdGlmKCFpdGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShpdGVtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuXHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oanNvbiA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGpzb24pO1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKTtcclxuXHJcblx0XHRcdFx0YWxlcnQoJ9Cy0YvRgNC40LDQvdGC0Ysg0L7RgtCy0LXRgtC+0LI6IHJlamVjdGVkIHwgcmVtb3ZlZCB8IHBlbmRpbmcsIGxpbmsgJylcclxuXHJcblx0XHRcdFx0aWYgKCBqc29uLnBlbmRpbmcgKSB7XHJcblxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWludml0YXRpb25zLWNvbXBsZXRlLWxpbmsnKS5ocmVmID0ganNvbi5saW5rO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGV2ZW50TW9kYWxTaG93ID0gbmV3IEN1c3RvbUV2ZW50KFwibW9kYWxTaG93XCIsIHtcclxuXHRcdFx0XHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0XHRcdFx0c2VsZWN0b3I6IFwiaW52aXRhdGlvbnMtY29tcGxldGVcIlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR3aW5kb3cubW9kYWwuZGlzcGF0Y2hFdmVudChldmVudE1vZGFsU2hvdyk7XHJcblxyXG5cdFx0XHRcdFx0Zm9ybS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIGpzb24ucmVqZWN0ZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdpbnZpdGF0aW9ucy0tcmVqZWN0ZWQnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIGpzb24ucmVtb3ZlZCApIHtcclxuXHJcblx0XHRcdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LmNzc0FuaW1hdGlvbigndHJhbnNpdGlvbicpLCAoKSA9PiBmb3JtLnJlbW92ZSgpKTtcclxuXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKT0+IGZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtcmVtb3ZlZCcpICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnZpdGF0aW9ucycpKTsiLCIoIHNlY3Rpb24gPT4ge1xyXG5cclxuXHRpZighc2VjdGlvbi5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShzZWN0aW9uLCBibG9jayA9PiB7XHJcblxyXG5cdFx0Y29uc3Qgcm93cyA9IFtdLFxyXG5cdFx0XHQgIGZvcm0gPSBibG9jay5xdWVyeVNlbGVjdG9yKCcubGl2ZS1zZWFyY2gtZG9jc19fZm9ybScpLFxyXG5cdFx0XHQgIGlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcubGl2ZS1zZWFyY2gtZG9jc19faW5wdXQnKSxcclxuXHRcdFx0ICByZXNldCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmxpdmUtc2VhcmNoLWRvY3NfX3Jlc2V0JyksXHJcblx0XHRcdCAgZW1wdHkgPSBibG9jay5xdWVyeVNlbGVjdG9yKCcubGl2ZS1zZWFyY2gtZG9jc19fZW1wdHknKSxcclxuXHRcdFx0ICBpdGVtcyA9IGJsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXZlLXNlYXJjaC1kb2NzX19pdGVtJyk7XHJcblxyXG5cdFx0Y29uc3QgZmlsdGVyUm93ID0gKHZhbHVlKSA9PiB7XHJcblxyXG5cdFx0XHRpZiggdmFsdWUubGVuZ3RoICl7XHJcblxyXG5cdFx0XHRcdHJvd3MuZm9yRWFjaCggKHJvdyxpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGxldCBzaG93ID0gcm93LnNvbWUoIHRkID0+IHRkLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWx1ZS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEgKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIHNob3cgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRBcnJheS5mcm9tKGl0ZW1zW2luZGV4XS5xdWVyeVNlbGVjdG9yQWxsKCcubGl2ZS1zZWFyY2gtZG9jc19fc3RyaW5nJyksICh0ZCxpKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHRkLmlubmVySFRNTCA9IHJvd1tpXS5yZXBsYWNlKHZhbHVlLFwiPHNwYW4gY2xhc3M9XFxcImhpZ2hsaWdodFxcXCI+XCIgKyB2YWx1ZSArIFwiPC9zcGFuPlwiKTtcclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0aXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ2xpdmUtc2VhcmNoLWRvY3NfX2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0aXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2xpdmUtc2VhcmNoLWRvY3NfX2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRcdEFycmF5LmZyb20oaXRlbXNbaW5kZXhdLnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXZlLXNlYXJjaC1kb2NzX19zdHJpbmcnKSwgKHRkLGkpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0dGQudGV4dENvbnRlbnQgPSByb3dbaV07XHJcblxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShpdGVtcywgKGl0ZW0sIGluZGV4KSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0QXJyYXkuZnJvbShpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXZlLXNlYXJjaC1kb2NzX19zdHJpbmcnKSwgKHRkLGkpID0+IHRkLnRleHRDb250ZW50ID0gcm93c1tpbmRleF1baV0pO1xyXG5cclxuXHRcdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbGl2ZS1zZWFyY2gtZG9jc19faGlkZScpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9O1xyXG5cclxuXHRcdC8vINGB0L7Qt9C00LDQtNC40Lwg0LzQsNGB0YHQuNCyINGB0YLRgNC+0Log0L/QviDQutC+0YLQvtGA0YvQvCDQuNGJ0LXQvFxyXG5cclxuXHRcdEFycmF5LmZyb20oaXRlbXMsIChpdGVtLGluZGV4KSA9PiB7XHJcblxyXG5cdFx0XHRyb3dzW2luZGV4XSA9IFtdO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXZlLXNlYXJjaC1kb2NzX19zdHJpbmcnKSwgdGQgPT4ge1xyXG5cclxuXHRcdFx0XHRyb3dzW2luZGV4XS5wdXNoKHRkLnRleHRDb250ZW50LnRyaW0oKSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IGJsb2NrLmNsYXNzTGlzdC5hZGQoJ2lzLWZvY3VzJykpO1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWVtcHR5Jyk7XHJcblx0XHRcdGJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZvY3VzJywgJ2lzLW5vZW1wdHknKTtcclxuXHRcdFx0ZmlsdGVyUm93KCcnKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcclxuXHJcblx0XHRcdGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZW1wdHknLCBpbnB1dC52YWx1ZS5sZW5ndGggPT09IDApO1xyXG5cdFx0XHRibG9jay5jbGFzc0xpc3QudG9nZ2xlKCdpcy1ub2VtcHR5JywgaW5wdXQudmFsdWUubGVuZ3RoKTtcclxuXHRcdFx0ZmlsdGVyUm93KGlucHV0LnZhbHVlKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINGB0LrRgNGL0YLRjCDRgNGD0LfQtdC70YzRgtCw0YLRiyDQv9GA0Lgg0LrQu9C40LrQtSDQstC90LUg0YTQvtGA0LzRi1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCBpc0Zvcm0gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmxpdmUtc2VhcmNoLWRvY3NfX2Zvcm0nKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKHNlY3Rpb24sIGJsb2NrID0+IHtcclxuXHJcblx0XHRcdGlmKCBpc0Zvcm0gIT09IGJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5saXZlLXNlYXJjaC1kb2NzX19mb3JtJykgKSB7XHJcblxyXG5cdFx0XHRcdGJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZvY3VzJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpdmUtc2VhcmNoLWRvY3MnKSk7IiwiLy8gYnRuIHRvZ2dsZVxyXG5cclxuLyooIGJ0biA9PiB7XHJcblxyXG5cdGlmKGJ0bikge1xyXG5cclxuXHRcdGxldCB3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtc2hvdycpKSB7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zaG93Jyk7XHJcblx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsd2luZG93U2Nyb2xsKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtZW51LXNob3cnKTtcclxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1tZW51LXRvZ2dsZScpKTtcclxuKi9cclxuLy8gbWVudSB1c2VyXHJcblxyXG4oIG1lbnUgPT4ge1xyXG5cclxuXHRpZihtZW51KSB7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRpZiggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5oZWFkZXJfX3VzZXItYnRuJykgKXtcclxuXHJcblx0XHRcdFx0bWVudS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHR9IGVsc2UgaWYoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuaGVhZGVyX191c2VyJykgPT09IG51bGwgKXtcclxuXHJcblx0XHRcdFx0bWVudS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3VzZXInKSk7XHJcbiIsIiggZWwgPT4ge1xyXG5cclxuXHRpZiggIWVsICkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBmb3JtID0gZWwucXVlcnlTZWxlY3RvcignLm1vZGFsLXBhcnRpY2lwYW50c19fZmlsdGVyJyksXHJcblx0XHQgIGl0ZW1zID0gZWwucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLXBhcnRpY2lwYW50c19faXRlbS1maWx0ZXInKSxcclxuXHRcdCAgaW5wdXQgPSBlbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcGFydGljaXBhbnRzX19maWx0ZXItaW5wdXQnKTtcclxuXHJcblx0ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZiAoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubW9kYWwtcGFydGljaXBhbnRzX19maWx0ZXInKSApIHtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1vZGFsLXBhcnRpY2lwYW50c19fYnRuLW9wZW4tc2VhcmNoJykgKSB7XHJcblxyXG5cdFx0XHRmb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuXHRcdFx0aW5wdXQuZm9jdXMoKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZW1wdHknLCB2YWx1ZS5sZW5ndGggPT09IDApO1xyXG5cclxuXHRcdGlmKCB2YWx1ZS5sZW5ndGggKSB7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGl0ZW1zLCBpdGVtID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc3QgdGV4dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLm1vZGFsLXBhcnRpY2lwYW50c19fdGV4dC1maWx0ZXInKS50ZXh0Q29udGVudC50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdFx0aXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgdGV4dC5pbmRleE9mKHZhbHVlKSA9PT0gLTEpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oaXRlbXMsIGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgKCkgPT4ge1xyXG5cclxuXHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtZW1wdHknKTtcclxuXHRcdEFycmF5LmZyb20oaXRlbXMsIGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1wYXJ0aWNpcGFudHMnKSk7IiwiKCBtb2RhbCA9PiB7XHJcblxyXG5cdGlmKCFtb2RhbCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBpdGVtcyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9faXRlbScpLFxyXG5cdFx0ICBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWxdJyksXHJcblx0XHQgIHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xyXG5cclxuXHRsZXQgYWN0aXZlTW9kYWwgPSBudWxsLFxyXG5cdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdoaWRlJywgKCkgPT4ge1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtc2hvdycpO1xyXG5cdFx0d3JhcHBlci5zdHlsZS50b3AgPSAwO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsd2luZG93U2Nyb2xsKTtcclxuXHRcdGFjdGl2ZU1vZGFsID0gZmFsc2U7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuXHJcblx0XHRcdG1vZGFsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiaGlkZVwiKSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Y29uc3QgbW9kYWxTaG93ID0gc2VsZWN0b3IgPT4ge1xyXG5cclxuXHRcdGlmKCFhY3RpdmVNb2RhbCl7XHJcblxyXG5cdFx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGFjdGl2ZU1vZGFsID0gbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS0nICsgc2VsZWN0b3IpO1xyXG5cclxuXHRcdG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFsaWduLXN0YXJ0JywgYWN0aXZlTW9kYWwuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsLWlzLWFsaWduLXN0YXJ0JykgIT09IG51bGwpO1xyXG5cclxuXHRcdGlmIChidG5QYWdlVXApIHtcclxuXHJcblx0XHRcdGNvbnN0IGV2ZW50ID0gYWN0aXZlTW9kYWwuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsLWlzLWFsaWduLXN0YXJ0JykgIT09IG51bGwgPyBcIm9uXCIgOiBcIm9mZlwiO1xyXG5cclxuXHRcdFx0YnRuUGFnZVVwLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50KSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdEFycmF5LmZyb20oaXRlbXMsIGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc3VhbGx5aGlkZGVuJywgZWwgIT09IGFjdGl2ZU1vZGFsKSk7XHJcblxyXG5cdFx0d3JhcHBlci5zdHlsZS50b3AgPSAtd2luZG93U2Nyb2xsICsgJ3B4JztcclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtc2hvdycpO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsMCk7XHJcblxyXG5cdFx0YWN0aXZlTW9kYWwuZm9jdXMoKTtcclxuXHJcblx0XHRQdWJTdWIucHVibGlzaCgnb3Blbi0nICsgc2VsZWN0b3IpO1xyXG5cclxuXHR9O1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZiggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwnKSB8fCBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1vZGFsX19jbG9zZScpKXtcclxuXHJcblx0XHRcdG1vZGFsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiaGlkZVwiKSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0bGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHJcblx0XHR3aGlsZSAodGFyZ2V0ICE9PSBkb2N1bWVudCkge1xyXG5cclxuXHRcdFx0aWYgKHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwnKSkge1xyXG5cclxuXHRcdFx0XHRtb2RhbFNob3codGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ21vZGFsU2hvdycsIGV2ZW50ID0+IG1vZGFsU2hvdyhldmVudC5kZXRhaWwuc2VsZWN0b3IpKTtcclxuXHJcblx0bW9kYWwub2sgPSAodGl0bGUsIHRleHQsIG1vZCA9ICcnKSA9PiB7XHJcblxyXG5cdFx0bW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS1vaycpLnNldEF0dHJpYnV0ZSgnZGF0YS1tb2QnLCBtb2QpO1xyXG5cdFx0bW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS1vayAubW9kYWwtbWluaV9fdGl0bGUnKS5pbm5lckhUTUwgPSB0aXRsZSA/IHRpdGxlIDogJyc7XHJcblx0XHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLW9rIC5tb2RhbC1taW5pX190ZXh0JykuaW5uZXJIVE1MID0gdGV4dCA/IHRleHQgOiAnJztcclxuXHRcdG1vZGFsU2hvdygnb2snKTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykpOyIsIiggbm90aWZpY2F0aW9uID0+IHtcclxuXHJcblx0aWYoIW5vdGlmaWNhdGlvbikge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RpZmljYXRpb24tdGVtcGxhdGUnKS5pbm5lckhUTUw7XHJcblxyXG5cdHdpbmRvdy5ub3RpZmljYXRpb24gPSAoaGVhZCwgdGV4dCwgdGltZXIgPSAxMCkgPT4ge1xyXG5cclxuXHRcdG5vdGlmaWNhdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZSwgeyBoZWFkLCB0ZXh0IH0pKTtcclxuXHJcblx0XHRjb25zdCBpdGVtID0gbm90aWZpY2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5pcy1uZXcnKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW5ldycpO1xyXG5cdFx0XHRpdGVtLnN0eWxlLmhlaWdodCA9IGl0ZW0uY2xpZW50SGVpZ2h0ICsgJ3B4JztcclxuXHJcblx0XHR9LCAxMDApO1xyXG5cclxuXHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3cuY3NzQW5pbWF0aW9uKCd0cmFuc2l0aW9uJyksICgpID0+IHtcclxuXHJcblx0XHRcdGlmKCBpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaXMtaGlkZScpICl7XHJcblxyXG5cdFx0XHRcdGl0ZW0ucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtaGlkZScpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoICgpPT4ge1xyXG5cclxuXHRcdFx0aXRlbS5jbGFzc0xpc3QuYWRkKCdpcy1oaWRlJyk7XHJcblxyXG5cdFx0fSwgMTAwMCAqIHRpbWVyKTtcclxuXHJcblx0fVxyXG5cclxuXHQvLyB0b3AgdmllcG9ydFxyXG5cclxuXHRjb25zdCBzZXRUb3AgPSAoKSA9PiB7XHJcblxyXG5cdFx0bGV0IGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIC0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1ub3RpZmljYXRpb25Ub3AnLCBoIDwgMTAgPyAxMCA6IGggKyAncHgnKTtcclxuXHJcblx0fVxyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiBzZXRUb3AoKSkpO1xyXG5cclxuXHRzZXRUb3AoKTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb24nKSk7IiwiXHJcbiggKCkgPT4ge1xyXG5cclxuXHRpZiAoYnRuUGFnZVVwKSB7XHJcblxyXG5cdFx0Ly8gb24gfCBvZmZcclxuXHJcblx0XHRidG5QYWdlVXAuYWRkRXZlbnRMaXN0ZW5lcignb2ZmJywgKCkgPT4gYnRuUGFnZVVwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XHJcblx0XHRidG5QYWdlVXAuYWRkRXZlbnRMaXN0ZW5lcignb24nLCAoKSA9PiBidG5QYWdlVXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcclxuXHJcblx0XHQvLyBjbGlja1xyXG5cclxuXHRcdGJ0blBhZ2VVcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRvY3VtZW50LmJvZHkuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiBcInNtb290aFwifSkpO1xyXG5cclxuXHRcdC8vIHNjcm9sbFxyXG5cclxuXHRcdGxldCByZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmICggYnRuUGFnZVVwLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpID09PSBmYWxzZSAmJiByZXNpemVUaW1lb3V0ID09PSBudWxsICkge1xyXG5cclxuXHRcdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHJcblx0XHRcdFx0XHRcdGJ0blBhZ2VVcC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1oaWRkZW4nLCB3aW5kb3cucGFnZVlPZmZzZXQgPCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcclxuXHJcblx0XHRcdFx0XHR9LCAxMDApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoKTsiLCJ3aW5kb3cuc2VsZWN0cyA9IHNlbGVjdCA9PiB7XHJcblxyXG5cdGlmKHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19saXN0JykpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgdmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblx0dmFsdWUuY2xhc3NOYW1lID0gJ3NlbGVjdF9fdmFsdWUnO1xyXG5cdHZhbHVlLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cInNlbGVjdF9fdmFsdWUtaW5uZXJcIj48L3NwYW4+JztcclxuXHJcblx0dmFsdWUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCAnPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xMiAxNC41TDE2IDEwSDhMMTIgMTQuNVpcIi8+PC9zdmc+Jyk7XHJcblxyXG5cdHNlbGVjdC5hcHBlbmRDaGlsZCh2YWx1ZSk7XHJcblxyXG5cdGNvbnN0IGZvcm0gPSBzZWxlY3QuY2xvc2VzdCgnZm9ybScpLFxyXG5cdFx0Y29udHJvbCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcclxuXHRcdG9wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKSxcclxuXHRcdHZhbHVlVGV4dCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X192YWx1ZS1pbm5lcicpLFxyXG5cdFx0ZmlsdGVyID0gc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0LS1maWx0ZXInKSxcclxuXHRcdGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblx0bGlzdC5jbGFzc05hbWUgPSAnc2VsZWN0X19saXN0JztcclxuXHJcblx0bGV0IHNlbGVjdGVkID0gY29udHJvbC5xdWVyeVNlbGVjdG9yKCdbdmFsdWU9XCInICsgY29udHJvbC52YWx1ZSArICdcIl0nKTtcclxuXHJcblx0Y29uc3QgdmFsdWVEZWZhdWx0ID0gc2VsZWN0ZWQudGV4dENvbnRlbnQ7XHJcblxyXG5cdGlmKCBjb250cm9sLmRpc2FibGVkIHx8IGNvbnRyb2wudmFsdWUgPT09ICdub25lJyB8fCBjb250cm9sLnZhbHVlID09PSAnJyApe1xyXG5cclxuXHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtLWRlZmF1bHQnKTtcclxuXHJcblx0fVxyXG5cclxuXHRpZiAoIGNvbnRyb2wudmFsdWUgIT09ICcnICkge1xyXG5cclxuXHRcdHZhbHVlVGV4dC50ZXh0Q29udGVudCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCdvcHRpb25bdmFsdWU9XCInICsgY29udHJvbC52YWx1ZSArICdcIl0nKS50ZXh0Q29udGVudDtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKG9wdGlvbiwgZWwgPT4ge1xyXG5cclxuXHRcdGlmICggZWwuZGlzYWJsZWQgfHwgZWwudmFsdWUgPT09ICdub25lJyB8fCBlbC52YWx1ZSA9PT0gJycgKSB7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyksXHJcblx0XHRcdCAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXHJcblx0XHRcdCAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuXHRcdGJ0bi5jbGFzc05hbWUgPSAnc2VsZWN0X19saXN0LWl0ZW0nO1xyXG5cclxuXHRcdGlucHV0LnR5cGUgPSAncmFkaW8nO1xyXG5cdFx0aW5wdXQubmFtZSA9IGNvbnRyb2wubmFtZTtcclxuXHRcdGlucHV0LnZhbHVlID0gZWwudmFsdWU7XHJcblxyXG5cdFx0bGFiZWwudGV4dENvbnRlbnQgPSBlbC50ZXh0Q29udGVudDtcclxuXHJcblx0XHRpZiAoIGNvbnRyb2wudmFsdWUgPT09IGVsLnZhbHVlICkge1xyXG5cclxuXHRcdFx0aW5wdXQuY2hlY2tlZCA9IHRydWU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggY29udHJvbC5yZXF1aXJlZCApIHtcclxuXHJcblx0XHRcdGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0dmFsdWVUZXh0LnRleHRDb250ZW50ID0gZWwudGV4dENvbnRlbnQ7XHJcblx0XHRcdHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3QtLW9wZW4nKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRidG4uYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG5cdFx0YnRuLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuXHRcdGxpc3QuYXBwZW5kQ2hpbGQoYnRuKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHNlbGVjdC5hcHBlbmRDaGlsZChsaXN0KTtcclxuXHJcblx0Ly8g0LLQvtC30LLRgNCw0YIg0LIg0LTQtdGE0L7Qu9GC0L3QvtC1INGB0L7RgdGC0L7Rj9C90LjQtSwg0L/RgNC4INGA0LXQt9C10YIg0YTQvtGA0LzRi1xyXG5cclxuXHRmb3JtICYmIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInJlc2V0XCIsICgpID0+IHtcclxuXHJcblx0XHRzZWxlY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LS1kZWZhdWx0Jyk7XHJcblx0XHR2YWx1ZVRleHQudGV4dENvbnRlbnQgPSB2YWx1ZURlZmF1bHQ7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyDQvdC1INC/0YDQtdC00YPRgdC80LDRgtGA0LjQstCw0LXQvCDQsiDQvNC+0LHQuNC70LUg0YHQuNGB0YLQtdC80L3Ri9C5INC60L7QvdGC0YDQvtC7XHJcblx0Y29udHJvbC5yZW1vdmUoKTtcclxuXHJcbn07XHJcblxyXG4oICgpID0+IHtcclxuXHJcblx0d2luZG93LnNlbGVjdHNDb2xsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdCcpO1xyXG5cclxuXHRpZih3aW5kb3cuc2VsZWN0c0NvbGxlY3Rpb24ubGVuZ3RoKSB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbSh3aW5kb3cuc2VsZWN0c0NvbGxlY3Rpb24sIHNlbGVjdCA9PiB3aW5kb3cuc2VsZWN0cyhzZWxlY3QpKTtcclxuXHJcblx0fVxyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCBpc1NlbGVjdCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2VsZWN0Jyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbSh3aW5kb3cuc2VsZWN0c0NvbGxlY3Rpb24sIHNlbGVjdCA9PiB7XHJcblxyXG5cdFx0XHRzZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0LS1vcGVuJywgc2VsZWN0ID09PSBpc1NlbGVjdCAmJiBpc1NlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdC0tb3BlbicpID09PSBmYWxzZSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoKTsiLCIoIGl0ZW1zID0+IHtcclxuXHJcblx0aWYoIWl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGl0ZW1zLCBlbCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgZm9ybSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy50YWItZmlsdGVyX19mb3JtJyksXHJcblx0XHRcdCAgaXRlbXMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiLWZpbHRlcl9faXRlbScpO1xyXG5cclxuXHRcdGlmICggZm9ybSApIHtcclxuXHJcblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGZpbHRlciA9IGZvcm0uZWxlbWVudHMuZmlsdGVyLnZhbHVlO1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGl0ZW1zLCBpdGVtID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGZpbHRlciA9PT0gJ2FsbCcgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0aXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyJykgIT09IGZpbHRlcik7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiLWZpbHRlcicpKTsiLCIoIGZvcm1zID0+IHtcclxuXHJcblx0aWYoICFmb3Jtcy5sZW5ndGggKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oZm9ybXMsIGZvcm0gPT4ge1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IHRhYmxlID0gZm9ybS5jbG9zZXN0KCd0YWJsZS13b3JrZ3JvdXBzJyksXHJcblx0XHRcdFx0XHQgIGl0ZW1zID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlLXdvcmtncm91cHMtdW5yZWFkLWl0ZW0nKTtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShpdGVtcywgaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYmxlLXdvcmtncm91cHMtdW5yZWFkLWl0ZW0nKSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGUtd29ya2dyb3Vwcy1yZWFkLWFsbCcpKTsiLCIoIGl0ZW0gPT4ge1xyXG5cclxuXHRpZiggIWl0ZW0gKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vINCS0YvQudGC0Lgg0LjQtyDRgNCw0LHQvtGH0LXQuSDQs9GA0YPQv9C/0YtcclxuXHJcblx0Y29uc3QgYnRuRXhpdCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLndvcmtncm91cC1pdGVtLWFjdGlvbl9fZXhpdCcpO1xyXG5cclxuXHRpZiAoIGJ0bkV4aXQgKSB7XHJcblxyXG5cdFx0YnRuRXhpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0td29ya2dyb3VwLWl0ZW0tZXhpdCcpLmVsZW1lbnRzLmlkLnZhbHVlID0gYnRuRXhpdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuXHJcblx0XHRcdGNvbnN0IGV2ZW50TW9kYWxTaG93ID0gbmV3IEN1c3RvbUV2ZW50KFwibW9kYWxTaG93XCIsIHtcclxuXHRcdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRcdHNlbGVjdG9yOiBcIndvcmtncm91cC1pdGVtLWV4aXRcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR3aW5kb3cubW9kYWwuZGlzcGF0Y2hFdmVudChldmVudE1vZGFsU2hvdyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JrZ3JvdXAtaXRlbScpKTsiLCIoIGJ0bnMgPT4ge1xyXG5cclxuXHRpZiggYnRucy5sZW5ndGggPT09IDAgKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGlmICggQ29va2llcy5nZXQoJ2xhbmcnKSA9PT0gJ2VuJyApIHtcclxuXHJcblx0XHRjb25zdCB5dFdpZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0eXRXaWRnZXQuaWQgPSAneXRXaWRnZXQnO1xyXG5cdFx0eXRXaWRnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHl0V2lkZ2V0KTtcclxuXHJcblx0XHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHRcdHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vdHJhbnNsYXRlLnlhbmRleC5uZXQvd2Vic2l0ZS13aWRnZXQvdjEvd2lkZ2V0LmpzP3dpZGdldElkPXl0V2lkZ2V0JnBhZ2VMYW5nPXJ1JndpZGdldFRoZW1lPWxpZ2h0JmF1dG9Nb2RlPWZhbHNlXCI7XHJcblxyXG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oYnRucywgZWwgPT4ge1xyXG5cclxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3l0LXdpZGdldCcsIEpTT04uc3RyaW5naWZ5KHtcclxuXHRcdFx0XHRcImxhbmdcIjogZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWxhbmcnKSxcclxuXHRcdFx0XHRcImFjdGl2ZVwiOiB0cnVlXHJcblx0XHRcdH0pKTtcclxuXHJcblx0XHRcdENvb2tpZXMuc2V0KCdsYW5nJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWxhbmcnKSk7XHJcblxyXG5cdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19sYW5nLWJ0bicpKTsiXX0=
