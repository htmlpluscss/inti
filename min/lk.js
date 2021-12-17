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
		  foot = form.querySelector('.workgroup-add-user__foot'),
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
		foot.classList.toggle('hide', disabled);

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

	form.addEventListener('reset', () => {

		result.innerHTML = '';
		formDisabled(true);

		Array.from(document.querySelectorAll('.form-workgroup-add-user__user-wrap'), user => user.classList.remove('visuallyhidden'));

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

			if ( item.querySelector('.input-file__value') ) {

				item.querySelector('.input-file__value').textContent = item.querySelector('input').value;

			}

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
( chat => {

	if( !chat ) {

		return;

	}

	const formGroup = chat.querySelector('.workgroup-chat-form-group');

	if ( formGroup ) {

		// переключение

		const btns = formGroup.querySelectorAll('.workgroup-chat-form-group__btn');

		Array.from(btns, btn => {

			btn.addEventListener('click', () => {

				const id = btn.getAttribute('data-item');

				formGroup.classList.remove('is-chat','is-message','is-user');
				formGroup.classList.add('is-' + id);

				id === 'chat' ? filterReset() : filterFocus();

			});

		});

		// отправка сообщений

		const form = formGroup.querySelector('.workgroup-chat-form'),
			  btn = form.querySelector('.workgroup-chat-form__submit'),
			  input = form.querySelector('.workgroup-chat-form__input'),
			  file = form.querySelector('.workgroup-chat-form__btn-file'),
			  reply = form.querySelector('.workgroup-chat-form__reply'),
			  replyBtn = reply.querySelector('.workgroup-chat-form__reply-remove'),
			  modalFormRemove = document.querySelector('#workgroup-item-chat-remove-post');
			  list = chat.querySelector('.workgroup-chat__list');

		const send = ()=> {
alert('в ответе ждум html .workgroup-chat__item');
return;
			form.classList.add('is-loading');
			btn.disabled = true;

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.text())
			.then(result => {

				console.log(result);

				form.classList.remove('is-loading');
				btn.disabled = false;

				list.insertAdjacentHTML('afterbegin', result);

				// reset reply

				reply.classList.add('hide');
				form.elements.reply.value = '';

			});

		}

		form.addEventListener('submit', event => {

			event.preventDefault();

			if ( input.value.length !== 0 ) {

				send();
				input.value = '';

			}

		});

		// удалить цитату

		replyBtn.addEventListener('click', () => {

			reply.classList.add('hide');
			form.elements.reply.value = '';

		});

		// загрузить файл, открываем модалку

		file.addEventListener('click', () => {

			const selector = 'workgroup-item-chat-input-file';

			document.querySelector('#' + selector).action = form.action;
			document.querySelector('#' + selector).elements.reply.value = form.elements.reply.value;

			const eventModalShow = new CustomEvent("modalShow", {
				detail: {
					selector
				}
			});

			window.modal.dispatchEvent(eventModalShow);

		});

		// удаление и ответ на сообщение

		list.addEventListener('click', event => {

			const btnEvent = event.target.closest('.workgroup-chat__item-btn');

			if ( btnEvent ) {

				const post = btnEvent.closest('.workgroup-chat__item'),
					  id = post.getAttribute('data-id-post');

				if ( btnEvent.classList.contains('is-reply') ) {

					reply.querySelector('.workgroup-chat-form__reply-name').textContent = post.querySelector('.workgroup-chat-item__name-value').textContent;
					reply.querySelector('.workgroup-chat-form__reply-text').textContent = post.querySelector('.workgroup-chat-item__text-value').textContent;
					reply.classList.remove('hide');

					form.elements.reply.value = id;
					input.value = '';
					input.focus();

				}

				if ( btnEvent.classList.contains('is-remove') ) {

					modalFormRemove.elements.id.value = id;

					const eventModalShow = new CustomEvent("modalShow", {
						detail: {
							selector: 'workgroup-item-chat-remove-post'
						}
					});

					window.modal.dispatchEvent(eventModalShow);

				}

			}

		});

		// удаление из чата

		modalFormRemove.addEventListener('submit', event => {

			event.preventDefault();

			modalFormRemove.querySelector('.is-submit').disabled = true;

			fetch(modalFormRemove.getAttribute('action'), {
				method: 'POST',
				body: new FormData(modalFormRemove)
			})
			.then(response => response.json())
			.then(result => {

				console.log(result);

				modal.dispatchEvent(new CustomEvent("hide"));
				modalFormRemove.querySelector('.is-submit').disabled = false;
				list.querySelector('[data-id-post="' + result.id + '"]').remove();

				if(result.notification) {

					notification(...result.notification);

				}

			});

		});

		// фильтр чата

		const filter = formGroup.querySelector('.workgroup-chat-filter');

		const filterReset = ()=> {

			console.log('reset');
			filter.classList.add('is-empty');
			filterFocus();

			Array.from(chat.querySelectorAll('.workgroup-chat-item__filter-item'), item => item.classList.remove('hide'));

		};

		const filterFocus = ()=> {

			Array.from(filter.querySelectorAll('.input'), input => {

			if ( input.offsetParent !== null )

				input.focus();

			});

		};

		filter.addEventListener('submit', event => {

			event.preventDefault();

		});

		filter.addEventListener('reset', filterReset);

		filter.addEventListener('input', event => {

			const value = event.target.value;

			filter.classList.toggle('is-empty', value.length === 0);

			Array.from(chat.querySelectorAll('.workgroup-chat-item__filter-' + event.target.name), item => {

				item.closest('.workgroup-chat-item__filter-item').classList.toggle('hide', item.textContent.toLowerCase().indexOf(value.toLowerCase()) === -1);

			});

		});

	}

	// modal file

	const formModal = document.querySelector('.modal-chat-input-file');

	if ( formModal ) {

		const btn = formModal.querySelector('.modal-chat-input-file__submit'),
			  file = formModal.querySelector('.modal-chat-input-file__input');

		formModal.addEventListener('change', event => {

			btn.disabled = file.value.length === 0;

			if ( event.target === file ) {

				formModal.querySelector('.modal-chat-input-file__value').textContent = file.value;

			}

		});

	}

})(document.querySelector('.workgroup-chat'));
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
( item => {

	if( !item ) {

		return;

	}

	const formLang = item.querySelector('.workgroup-item-stage-lang');

	if ( formLang ) {

		formLang.addEventListener('change', () => {

			Array.from(formLang.querySelectorAll('[data-lang]'), el => {

				el.classList.toggle('hide', el.getAttribute('data-lang') !== formLang.elements.lang.value);

			});

		});

	}

	// vote

	const stageVote = item.querySelector('.workgroup-item-stage-vote');

	if ( stageVote ) {

		const form = stageVote.querySelector('.workgroup-item-stage-vote__form'),
			  cancel = stageVote.querySelectorAll('.workgroup-item-stage-vote__cancel');

		form.addEventListener('change', () => {

			form.classList.add('is-loading');

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.json())
			.then(result => {

				console.log(result);

				form.classList.remove('is-loading');
				form.reset();

				if ( result.vote === "1" ) {

					notification(...result.notification);

				} else {

					const eventModalShow = new CustomEvent("modalShow", {
						detail: {
							selector: "workgroup-item-stage-vote"
						}
					});

					window.modal.dispatchEvent(eventModalShow);

				}

			});

		});

		Array.from(cancel, formCancel => {

			const btn = formCancel.querySelector('.workgroup-item-stage-vote__cancel-btn');

			formCancel.addEventListener('submit', event => {

				event.preventDefault();

				btn.disabled = true;

				fetch(formCancel.getAttribute('action'), {
					method: 'POST',
					body: new FormData(formCancel)
				})
				.then(response => response.text())
				.then(result => {

					form.classList.remove('hide');
					formCancel.classList.add('hide');

					btn.disabled = true;

				});

			});

		});

	}

	// form modal-stage-vote

	const formAgainst = document.querySelector('#workgroup-item-stage-vote-against');

	if ( formAgainst ) {

		const btn = formAgainst.querySelector('.modal-stage-vote__submit'),
			  file = formAgainst.querySelector('.modal-stage-vote__input-file-input');

		formAgainst.addEventListener('submit', event => {

			event.preventDefault();

			if ( file.value.length === 0 ) {

				notification(...formAgainst.getAttribute('data-required').split('|'), 99);

			} else {

				btn.disabled = true;
				formAgainst.classList.add('is-loading');

				fetch(formAgainst.getAttribute('action'), {
					method: 'POST',
					body: new FormData(formAgainst)
				})
				.then(response => response.json())
				.then(result => {

					console.log(result);

					modal.dispatchEvent(new CustomEvent("hide"));

				});

			}

		});

		formAgainst.addEventListener('change', event => {

			btn.disabled = file.value.length === 0;

			if ( event.target === file ) {

				formAgainst.querySelector('.modal-stage-vote__input-file-text').textContent = file.value;

			}

		});

	}

})(document.querySelector('.workgroup-item-stage'));
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzLmNvb2tpZS5taW4uanMiLCJtdXN0YWNoZS5taW4uanMiLCJwdWJzdWIubWluLmpzIiwianMuanMiLCJidG4tYmFjay5qcyIsImNoZWNrYm94LWdyb3VwLmpzIiwiY29udGV4dC1tZW51LmpzIiwiZGFzaGJvYXJkLmpzIiwiZGF0YWxpc3QuanMiLCJmb3JtLXJlcXVpcmVkLmpzIiwiZm9ybS13b3JrZ3JvdXAtYWRkLXVzZXIuanMiLCJmb3JtLmpzIiwiaW5wdXQtZmlsZS5qcyIsImludml0YXRpb25zLmpzIiwibGl2ZS1zZWFyY2gtZG9jcy5qcyIsIm1lbnUuanMiLCJtb2RhbC1wYXJ0aWNpcGFudHMuanMiLCJtb2RhbC5qcyIsIm5vdGlmaWNhdGlvbi5qcyIsInBhZ2UtdXAuanMiLCJzZWxlY3QuanMiLCJ0YWItZmlsdGVyLmpzIiwidGFibGUtd29ya2dyb3Vwcy5qcyIsIndvcmtncm91cC1jaGF0LmpzIiwid29ya2dyb3VwLWl0ZW0uanMiLCJ3b3JrZ3JvdXAtc3RhZ2UuanMiLCJ5YXRyYW5zbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUNGQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJsay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBqcy1jb29raWUgdjMuMC4wLXJjLjEgfCBNSVQgKi9cbiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOihlPWV8fHNlbGYsZnVuY3Rpb24oKXt2YXIgbj1lLkNvb2tpZXMscj1lLkNvb2tpZXM9dCgpO3Iubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBlLkNvb2tpZXM9bixyfX0oKSl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIHIgaW4gbillW3JdPW5bcl19cmV0dXJuIGV9dmFyIHQ9e3JlYWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZSgvKCVbXFxkQS1GXXsyfSkrL2dpLGRlY29kZVVSSUNvbXBvbmVudCl9LHdyaXRlOmZ1bmN0aW9uKGUpe3JldHVybiBlbmNvZGVVUklDb21wb25lbnQoZSkucmVwbGFjZSgvJSgyWzM0NkJGXXwzW0FDLUZdfDQwfDVbQkRFXXw2MHw3W0JDRF0pL2csZGVjb2RlVVJJQ29tcG9uZW50KX19O3JldHVybiBmdW5jdGlvbiBuKHIsbyl7ZnVuY3Rpb24gaSh0LG4saSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50KXtcIm51bWJlclwiPT10eXBlb2YoaT1lKHt9LG8saSkpLmV4cGlyZXMmJihpLmV4cGlyZXM9bmV3IERhdGUoRGF0ZS5ub3coKSs4NjRlNSppLmV4cGlyZXMpKSxpLmV4cGlyZXMmJihpLmV4cGlyZXM9aS5leHBpcmVzLnRvVVRDU3RyaW5nKCkpLHQ9ZW5jb2RlVVJJQ29tcG9uZW50KHQpLnJlcGxhY2UoLyUoMlszNDZCXXw1RXw2MHw3QykvZyxkZWNvZGVVUklDb21wb25lbnQpLnJlcGxhY2UoL1soKV0vZyxlc2NhcGUpLG49ci53cml0ZShuLHQpO3ZhciBjPVwiXCI7Zm9yKHZhciB1IGluIGkpaVt1XSYmKGMrPVwiOyBcIit1LCEwIT09aVt1XSYmKGMrPVwiPVwiK2lbdV0uc3BsaXQoXCI7XCIpWzBdKSk7cmV0dXJuIGRvY3VtZW50LmNvb2tpZT10K1wiPVwiK24rY319cmV0dXJuIE9iamVjdC5jcmVhdGUoe3NldDppLGdldDpmdW5jdGlvbihlKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQmJighYXJndW1lbnRzLmxlbmd0aHx8ZSkpe2Zvcih2YXIgbj1kb2N1bWVudC5jb29raWU/ZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIik6W10sbz17fSxpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciBjPW5baV0uc3BsaXQoXCI9XCIpLHU9Yy5zbGljZSgxKS5qb2luKFwiPVwiKTsnXCInPT09dVswXSYmKHU9dS5zbGljZSgxLC0xKSk7dHJ5e3ZhciBmPXQucmVhZChjWzBdKTtpZihvW2ZdPXIucmVhZCh1LGYpLGU9PT1mKWJyZWFrfWNhdGNoKGUpe319cmV0dXJuIGU/b1tlXTpvfX0scmVtb3ZlOmZ1bmN0aW9uKHQsbil7aSh0LFwiXCIsZSh7fSxuLHtleHBpcmVzOi0xfSkpfSx3aXRoQXR0cmlidXRlczpmdW5jdGlvbih0KXtyZXR1cm4gbih0aGlzLmNvbnZlcnRlcixlKHt9LHRoaXMuYXR0cmlidXRlcyx0KSl9LHdpdGhDb252ZXJ0ZXI6ZnVuY3Rpb24odCl7cmV0dXJuIG4oZSh7fSx0aGlzLmNvbnZlcnRlcix0KSx0aGlzLmF0dHJpYnV0ZXMpfX0se2F0dHJpYnV0ZXM6e3ZhbHVlOk9iamVjdC5mcmVlemUobyl9LGNvbnZlcnRlcjp7dmFsdWU6T2JqZWN0LmZyZWV6ZShyKX19KX0odCx7cGF0aDpcIi9cIn0pfSk7XG4iLCIoZnVuY3Rpb24gZGVmaW5lTXVzdGFjaGUoZ2xvYmFsLGZhY3Rvcnkpe2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmZXhwb3J0cyYmdHlwZW9mIGV4cG9ydHMubm9kZU5hbWUhPT1cInN0cmluZ1wiKXtmYWN0b3J5KGV4cG9ydHMpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtcImV4cG9ydHNcIl0sZmFjdG9yeSl9ZWxzZXtnbG9iYWwuTXVzdGFjaGU9e307ZmFjdG9yeShnbG9iYWwuTXVzdGFjaGUpfX0pKHRoaXMsZnVuY3Rpb24gbXVzdGFjaGVGYWN0b3J5KG11c3RhY2hlKXt2YXIgb2JqZWN0VG9TdHJpbmc9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZzt2YXIgaXNBcnJheT1BcnJheS5pc0FycmF5fHxmdW5jdGlvbiBpc0FycmF5UG9seWZpbGwob2JqZWN0KXtyZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbChvYmplY3QpPT09XCJbb2JqZWN0IEFycmF5XVwifTtmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iamVjdCl7cmV0dXJuIHR5cGVvZiBvYmplY3Q9PT1cImZ1bmN0aW9uXCJ9ZnVuY3Rpb24gdHlwZVN0cihvYmope3JldHVybiBpc0FycmF5KG9iaik/XCJhcnJheVwiOnR5cGVvZiBvYmp9ZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cmluZyl7cmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bXFwtXFxbXFxde30oKSorPy4sXFxcXFxcXiR8I1xcc10vZyxcIlxcXFwkJlwiKX1mdW5jdGlvbiBoYXNQcm9wZXJ0eShvYmoscHJvcE5hbWUpe3JldHVybiBvYmohPW51bGwmJnR5cGVvZiBvYmo9PT1cIm9iamVjdFwiJiZwcm9wTmFtZSBpbiBvYmp9dmFyIHJlZ0V4cFRlc3Q9UmVnRXhwLnByb3RvdHlwZS50ZXN0O2Z1bmN0aW9uIHRlc3RSZWdFeHAocmUsc3RyaW5nKXtyZXR1cm4gcmVnRXhwVGVzdC5jYWxsKHJlLHN0cmluZyl9dmFyIG5vblNwYWNlUmU9L1xcUy87ZnVuY3Rpb24gaXNXaGl0ZXNwYWNlKHN0cmluZyl7cmV0dXJuIXRlc3RSZWdFeHAobm9uU3BhY2VSZSxzdHJpbmcpfXZhciBlbnRpdHlNYXA9e1wiJlwiOlwiJmFtcDtcIixcIjxcIjpcIiZsdDtcIixcIj5cIjpcIiZndDtcIiwnXCInOlwiJnF1b3Q7XCIsXCInXCI6XCImIzM5O1wiLFwiL1wiOlwiJiN4MkY7XCIsXCJgXCI6XCImI3g2MDtcIixcIj1cIjpcIiYjeDNEO1wifTtmdW5jdGlvbiBlc2NhcGVIdG1sKHN0cmluZyl7cmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UoL1smPD5cIidgPVxcL10vZyxmdW5jdGlvbiBmcm9tRW50aXR5TWFwKHMpe3JldHVybiBlbnRpdHlNYXBbc119KX12YXIgd2hpdGVSZT0vXFxzKi87dmFyIHNwYWNlUmU9L1xccysvO3ZhciBlcXVhbHNSZT0vXFxzKj0vO3ZhciBjdXJseVJlPS9cXHMqXFx9Lzt2YXIgdGFnUmU9LyN8XFxefFxcL3w+fFxce3wmfD18IS87ZnVuY3Rpb24gcGFyc2VUZW1wbGF0ZSh0ZW1wbGF0ZSx0YWdzKXtpZighdGVtcGxhdGUpcmV0dXJuW107dmFyIHNlY3Rpb25zPVtdO3ZhciB0b2tlbnM9W107dmFyIHNwYWNlcz1bXTt2YXIgaGFzVGFnPWZhbHNlO3ZhciBub25TcGFjZT1mYWxzZTtmdW5jdGlvbiBzdHJpcFNwYWNlKCl7aWYoaGFzVGFnJiYhbm9uU3BhY2Upe3doaWxlKHNwYWNlcy5sZW5ndGgpZGVsZXRlIHRva2Vuc1tzcGFjZXMucG9wKCldfWVsc2V7c3BhY2VzPVtdfWhhc1RhZz1mYWxzZTtub25TcGFjZT1mYWxzZX12YXIgb3BlbmluZ1RhZ1JlLGNsb3NpbmdUYWdSZSxjbG9zaW5nQ3VybHlSZTtmdW5jdGlvbiBjb21waWxlVGFncyh0YWdzVG9Db21waWxlKXtpZih0eXBlb2YgdGFnc1RvQ29tcGlsZT09PVwic3RyaW5nXCIpdGFnc1RvQ29tcGlsZT10YWdzVG9Db21waWxlLnNwbGl0KHNwYWNlUmUsMik7aWYoIWlzQXJyYXkodGFnc1RvQ29tcGlsZSl8fHRhZ3NUb0NvbXBpbGUubGVuZ3RoIT09Mil0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHRhZ3M6IFwiK3RhZ3NUb0NvbXBpbGUpO29wZW5pbmdUYWdSZT1uZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cCh0YWdzVG9Db21waWxlWzBdKStcIlxcXFxzKlwiKTtjbG9zaW5nVGFnUmU9bmV3IFJlZ0V4cChcIlxcXFxzKlwiK2VzY2FwZVJlZ0V4cCh0YWdzVG9Db21waWxlWzFdKSk7Y2xvc2luZ0N1cmx5UmU9bmV3IFJlZ0V4cChcIlxcXFxzKlwiK2VzY2FwZVJlZ0V4cChcIn1cIit0YWdzVG9Db21waWxlWzFdKSl9Y29tcGlsZVRhZ3ModGFnc3x8bXVzdGFjaGUudGFncyk7dmFyIHNjYW5uZXI9bmV3IFNjYW5uZXIodGVtcGxhdGUpO3ZhciBzdGFydCx0eXBlLHZhbHVlLGNocix0b2tlbixvcGVuU2VjdGlvbjt3aGlsZSghc2Nhbm5lci5lb3MoKSl7c3RhcnQ9c2Nhbm5lci5wb3M7dmFsdWU9c2Nhbm5lci5zY2FuVW50aWwob3BlbmluZ1RhZ1JlKTtpZih2YWx1ZSl7Zm9yKHZhciBpPTAsdmFsdWVMZW5ndGg9dmFsdWUubGVuZ3RoO2k8dmFsdWVMZW5ndGg7KytpKXtjaHI9dmFsdWUuY2hhckF0KGkpO2lmKGlzV2hpdGVzcGFjZShjaHIpKXtzcGFjZXMucHVzaCh0b2tlbnMubGVuZ3RoKX1lbHNle25vblNwYWNlPXRydWV9dG9rZW5zLnB1c2goW1widGV4dFwiLGNocixzdGFydCxzdGFydCsxXSk7c3RhcnQrPTE7aWYoY2hyPT09XCJcXG5cIilzdHJpcFNwYWNlKCl9fWlmKCFzY2FubmVyLnNjYW4ob3BlbmluZ1RhZ1JlKSlicmVhaztoYXNUYWc9dHJ1ZTt0eXBlPXNjYW5uZXIuc2Nhbih0YWdSZSl8fFwibmFtZVwiO3NjYW5uZXIuc2Nhbih3aGl0ZVJlKTtpZih0eXBlPT09XCI9XCIpe3ZhbHVlPXNjYW5uZXIuc2NhblVudGlsKGVxdWFsc1JlKTtzY2FubmVyLnNjYW4oZXF1YWxzUmUpO3NjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSl9ZWxzZSBpZih0eXBlPT09XCJ7XCIpe3ZhbHVlPXNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdDdXJseVJlKTtzY2FubmVyLnNjYW4oY3VybHlSZSk7c2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTt0eXBlPVwiJlwifWVsc2V7dmFsdWU9c2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKX1pZighc2Nhbm5lci5zY2FuKGNsb3NpbmdUYWdSZSkpdGhyb3cgbmV3IEVycm9yKFwiVW5jbG9zZWQgdGFnIGF0IFwiK3NjYW5uZXIucG9zKTt0b2tlbj1bdHlwZSx2YWx1ZSxzdGFydCxzY2FubmVyLnBvc107dG9rZW5zLnB1c2godG9rZW4pO2lmKHR5cGU9PT1cIiNcInx8dHlwZT09PVwiXlwiKXtzZWN0aW9ucy5wdXNoKHRva2VuKX1lbHNlIGlmKHR5cGU9PT1cIi9cIil7b3BlblNlY3Rpb249c2VjdGlvbnMucG9wKCk7aWYoIW9wZW5TZWN0aW9uKXRocm93IG5ldyBFcnJvcignVW5vcGVuZWQgc2VjdGlvbiBcIicrdmFsdWUrJ1wiIGF0ICcrc3RhcnQpO2lmKG9wZW5TZWN0aW9uWzFdIT09dmFsdWUpdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCBzZWN0aW9uIFwiJytvcGVuU2VjdGlvblsxXSsnXCIgYXQgJytzdGFydCl9ZWxzZSBpZih0eXBlPT09XCJuYW1lXCJ8fHR5cGU9PT1cIntcInx8dHlwZT09PVwiJlwiKXtub25TcGFjZT10cnVlfWVsc2UgaWYodHlwZT09PVwiPVwiKXtjb21waWxlVGFncyh2YWx1ZSl9fW9wZW5TZWN0aW9uPXNlY3Rpb25zLnBvcCgpO2lmKG9wZW5TZWN0aW9uKXRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicrb3BlblNlY3Rpb25bMV0rJ1wiIGF0ICcrc2Nhbm5lci5wb3MpO3JldHVybiBuZXN0VG9rZW5zKHNxdWFzaFRva2Vucyh0b2tlbnMpKX1mdW5jdGlvbiBzcXVhc2hUb2tlbnModG9rZW5zKXt2YXIgc3F1YXNoZWRUb2tlbnM9W107dmFyIHRva2VuLGxhc3RUb2tlbjtmb3IodmFyIGk9MCxudW1Ub2tlbnM9dG9rZW5zLmxlbmd0aDtpPG51bVRva2VuczsrK2kpe3Rva2VuPXRva2Vuc1tpXTtpZih0b2tlbil7aWYodG9rZW5bMF09PT1cInRleHRcIiYmbGFzdFRva2VuJiZsYXN0VG9rZW5bMF09PT1cInRleHRcIil7bGFzdFRva2VuWzFdKz10b2tlblsxXTtsYXN0VG9rZW5bM109dG9rZW5bM119ZWxzZXtzcXVhc2hlZFRva2Vucy5wdXNoKHRva2VuKTtsYXN0VG9rZW49dG9rZW59fX1yZXR1cm4gc3F1YXNoZWRUb2tlbnN9ZnVuY3Rpb24gbmVzdFRva2Vucyh0b2tlbnMpe3ZhciBuZXN0ZWRUb2tlbnM9W107dmFyIGNvbGxlY3Rvcj1uZXN0ZWRUb2tlbnM7dmFyIHNlY3Rpb25zPVtdO3ZhciB0b2tlbixzZWN0aW9uO2Zvcih2YXIgaT0wLG51bVRva2Vucz10b2tlbnMubGVuZ3RoO2k8bnVtVG9rZW5zOysraSl7dG9rZW49dG9rZW5zW2ldO3N3aXRjaCh0b2tlblswXSl7Y2FzZVwiI1wiOmNhc2VcIl5cIjpjb2xsZWN0b3IucHVzaCh0b2tlbik7c2VjdGlvbnMucHVzaCh0b2tlbik7Y29sbGVjdG9yPXRva2VuWzRdPVtdO2JyZWFrO2Nhc2VcIi9cIjpzZWN0aW9uPXNlY3Rpb25zLnBvcCgpO3NlY3Rpb25bNV09dG9rZW5bMl07Y29sbGVjdG9yPXNlY3Rpb25zLmxlbmd0aD4wP3NlY3Rpb25zW3NlY3Rpb25zLmxlbmd0aC0xXVs0XTpuZXN0ZWRUb2tlbnM7YnJlYWs7ZGVmYXVsdDpjb2xsZWN0b3IucHVzaCh0b2tlbil9fXJldHVybiBuZXN0ZWRUb2tlbnN9ZnVuY3Rpb24gU2Nhbm5lcihzdHJpbmcpe3RoaXMuc3RyaW5nPXN0cmluZzt0aGlzLnRhaWw9c3RyaW5nO3RoaXMucG9zPTB9U2Nhbm5lci5wcm90b3R5cGUuZW9zPWZ1bmN0aW9uIGVvcygpe3JldHVybiB0aGlzLnRhaWw9PT1cIlwifTtTY2FubmVyLnByb3RvdHlwZS5zY2FuPWZ1bmN0aW9uIHNjYW4ocmUpe3ZhciBtYXRjaD10aGlzLnRhaWwubWF0Y2gocmUpO2lmKCFtYXRjaHx8bWF0Y2guaW5kZXghPT0wKXJldHVyblwiXCI7dmFyIHN0cmluZz1tYXRjaFswXTt0aGlzLnRhaWw9dGhpcy50YWlsLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKTt0aGlzLnBvcys9c3RyaW5nLmxlbmd0aDtyZXR1cm4gc3RyaW5nfTtTY2FubmVyLnByb3RvdHlwZS5zY2FuVW50aWw9ZnVuY3Rpb24gc2NhblVudGlsKHJlKXt2YXIgaW5kZXg9dGhpcy50YWlsLnNlYXJjaChyZSksbWF0Y2g7c3dpdGNoKGluZGV4KXtjYXNlLTE6bWF0Y2g9dGhpcy50YWlsO3RoaXMudGFpbD1cIlwiO2JyZWFrO2Nhc2UgMDptYXRjaD1cIlwiO2JyZWFrO2RlZmF1bHQ6bWF0Y2g9dGhpcy50YWlsLnN1YnN0cmluZygwLGluZGV4KTt0aGlzLnRhaWw9dGhpcy50YWlsLnN1YnN0cmluZyhpbmRleCl9dGhpcy5wb3MrPW1hdGNoLmxlbmd0aDtyZXR1cm4gbWF0Y2h9O2Z1bmN0aW9uIENvbnRleHQodmlldyxwYXJlbnRDb250ZXh0KXt0aGlzLnZpZXc9dmlldzt0aGlzLmNhY2hlPXtcIi5cIjp0aGlzLnZpZXd9O3RoaXMucGFyZW50PXBhcmVudENvbnRleHR9Q29udGV4dC5wcm90b3R5cGUucHVzaD1mdW5jdGlvbiBwdXNoKHZpZXcpe3JldHVybiBuZXcgQ29udGV4dCh2aWV3LHRoaXMpfTtDb250ZXh0LnByb3RvdHlwZS5sb29rdXA9ZnVuY3Rpb24gbG9va3VwKG5hbWUpe3ZhciBjYWNoZT10aGlzLmNhY2hlO3ZhciB2YWx1ZTtpZihjYWNoZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSl7dmFsdWU9Y2FjaGVbbmFtZV19ZWxzZXt2YXIgY29udGV4dD10aGlzLG5hbWVzLGluZGV4LGxvb2t1cEhpdD1mYWxzZTt3aGlsZShjb250ZXh0KXtpZihuYW1lLmluZGV4T2YoXCIuXCIpPjApe3ZhbHVlPWNvbnRleHQudmlldztuYW1lcz1uYW1lLnNwbGl0KFwiLlwiKTtpbmRleD0wO3doaWxlKHZhbHVlIT1udWxsJiZpbmRleDxuYW1lcy5sZW5ndGgpe2lmKGluZGV4PT09bmFtZXMubGVuZ3RoLTEpbG9va3VwSGl0PWhhc1Byb3BlcnR5KHZhbHVlLG5hbWVzW2luZGV4XSk7dmFsdWU9dmFsdWVbbmFtZXNbaW5kZXgrK11dfX1lbHNle3ZhbHVlPWNvbnRleHQudmlld1tuYW1lXTtsb29rdXBIaXQ9aGFzUHJvcGVydHkoY29udGV4dC52aWV3LG5hbWUpfWlmKGxvb2t1cEhpdClicmVhaztjb250ZXh0PWNvbnRleHQucGFyZW50fWNhY2hlW25hbWVdPXZhbHVlfWlmKGlzRnVuY3Rpb24odmFsdWUpKXZhbHVlPXZhbHVlLmNhbGwodGhpcy52aWV3KTtyZXR1cm4gdmFsdWV9O2Z1bmN0aW9uIFdyaXRlcigpe3RoaXMuY2FjaGU9e319V3JpdGVyLnByb3RvdHlwZS5jbGVhckNhY2hlPWZ1bmN0aW9uIGNsZWFyQ2FjaGUoKXt0aGlzLmNhY2hlPXt9fTtXcml0ZXIucHJvdG90eXBlLnBhcnNlPWZ1bmN0aW9uIHBhcnNlKHRlbXBsYXRlLHRhZ3Mpe3ZhciBjYWNoZT10aGlzLmNhY2hlO3ZhciB0b2tlbnM9Y2FjaGVbdGVtcGxhdGVdO2lmKHRva2Vucz09bnVsbCl0b2tlbnM9Y2FjaGVbdGVtcGxhdGVdPXBhcnNlVGVtcGxhdGUodGVtcGxhdGUsdGFncyk7cmV0dXJuIHRva2Vuc307V3JpdGVyLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24gcmVuZGVyKHRlbXBsYXRlLHZpZXcscGFydGlhbHMpe3ZhciB0b2tlbnM9dGhpcy5wYXJzZSh0ZW1wbGF0ZSk7dmFyIGNvbnRleHQ9dmlldyBpbnN0YW5jZW9mIENvbnRleHQ/dmlldzpuZXcgQ29udGV4dCh2aWV3KTtyZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5zLGNvbnRleHQscGFydGlhbHMsdGVtcGxhdGUpfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlclRva2Vucz1mdW5jdGlvbiByZW5kZXJUb2tlbnModG9rZW5zLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl7dmFyIGJ1ZmZlcj1cIlwiO3ZhciB0b2tlbixzeW1ib2wsdmFsdWU7Zm9yKHZhciBpPTAsbnVtVG9rZW5zPXRva2Vucy5sZW5ndGg7aTxudW1Ub2tlbnM7KytpKXt2YWx1ZT11bmRlZmluZWQ7dG9rZW49dG9rZW5zW2ldO3N5bWJvbD10b2tlblswXTtpZihzeW1ib2w9PT1cIiNcIil2YWx1ZT10aGlzLnJlbmRlclNlY3Rpb24odG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKTtlbHNlIGlmKHN5bWJvbD09PVwiXlwiKXZhbHVlPXRoaXMucmVuZGVySW52ZXJ0ZWQodG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKTtlbHNlIGlmKHN5bWJvbD09PVwiPlwiKXZhbHVlPXRoaXMucmVuZGVyUGFydGlhbCh0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpO2Vsc2UgaWYoc3ltYm9sPT09XCImXCIpdmFsdWU9dGhpcy51bmVzY2FwZWRWYWx1ZSh0b2tlbixjb250ZXh0KTtlbHNlIGlmKHN5bWJvbD09PVwibmFtZVwiKXZhbHVlPXRoaXMuZXNjYXBlZFZhbHVlKHRva2VuLGNvbnRleHQpO2Vsc2UgaWYoc3ltYm9sPT09XCJ0ZXh0XCIpdmFsdWU9dGhpcy5yYXdWYWx1ZSh0b2tlbik7aWYodmFsdWUhPT11bmRlZmluZWQpYnVmZmVyKz12YWx1ZX1yZXR1cm4gYnVmZmVyfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlclNlY3Rpb249ZnVuY3Rpb24gcmVuZGVyU2VjdGlvbih0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpe3ZhciBzZWxmPXRoaXM7dmFyIGJ1ZmZlcj1cIlwiO3ZhciB2YWx1ZT1jb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7ZnVuY3Rpb24gc3ViUmVuZGVyKHRlbXBsYXRlKXtyZXR1cm4gc2VsZi5yZW5kZXIodGVtcGxhdGUsY29udGV4dCxwYXJ0aWFscyl9aWYoIXZhbHVlKXJldHVybjtpZihpc0FycmF5KHZhbHVlKSl7Zm9yKHZhciBqPTAsdmFsdWVMZW5ndGg9dmFsdWUubGVuZ3RoO2o8dmFsdWVMZW5ndGg7KytqKXtidWZmZXIrPXRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLGNvbnRleHQucHVzaCh2YWx1ZVtqXSkscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl9fWVsc2UgaWYodHlwZW9mIHZhbHVlPT09XCJvYmplY3RcInx8dHlwZW9mIHZhbHVlPT09XCJzdHJpbmdcInx8dHlwZW9mIHZhbHVlPT09XCJudW1iZXJcIil7YnVmZmVyKz10aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSxjb250ZXh0LnB1c2godmFsdWUpLHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpfWVsc2UgaWYoaXNGdW5jdGlvbih2YWx1ZSkpe2lmKHR5cGVvZiBvcmlnaW5hbFRlbXBsYXRlIT09XCJzdHJpbmdcIil0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgdXNlIGhpZ2hlci1vcmRlciBzZWN0aW9ucyB3aXRob3V0IHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZVwiKTt2YWx1ZT12YWx1ZS5jYWxsKGNvbnRleHQudmlldyxvcmlnaW5hbFRlbXBsYXRlLnNsaWNlKHRva2VuWzNdLHRva2VuWzVdKSxzdWJSZW5kZXIpO2lmKHZhbHVlIT1udWxsKWJ1ZmZlcis9dmFsdWV9ZWxzZXtidWZmZXIrPXRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl9cmV0dXJuIGJ1ZmZlcn07V3JpdGVyLnByb3RvdHlwZS5yZW5kZXJJbnZlcnRlZD1mdW5jdGlvbiByZW5kZXJJbnZlcnRlZCh0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpe3ZhciB2YWx1ZT1jb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7aWYoIXZhbHVlfHxpc0FycmF5KHZhbHVlKSYmdmFsdWUubGVuZ3RoPT09MClyZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKX07V3JpdGVyLnByb3RvdHlwZS5yZW5kZXJQYXJ0aWFsPWZ1bmN0aW9uIHJlbmRlclBhcnRpYWwodG9rZW4sY29udGV4dCxwYXJ0aWFscyl7aWYoIXBhcnRpYWxzKXJldHVybjt2YXIgdmFsdWU9aXNGdW5jdGlvbihwYXJ0aWFscyk/cGFydGlhbHModG9rZW5bMV0pOnBhcnRpYWxzW3Rva2VuWzFdXTtpZih2YWx1ZSE9bnVsbClyZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModGhpcy5wYXJzZSh2YWx1ZSksY29udGV4dCxwYXJ0aWFscyx2YWx1ZSl9O1dyaXRlci5wcm90b3R5cGUudW5lc2NhcGVkVmFsdWU9ZnVuY3Rpb24gdW5lc2NhcGVkVmFsdWUodG9rZW4sY29udGV4dCl7dmFyIHZhbHVlPWNvbnRleHQubG9va3VwKHRva2VuWzFdKTtpZih2YWx1ZSE9bnVsbClyZXR1cm4gdmFsdWV9O1dyaXRlci5wcm90b3R5cGUuZXNjYXBlZFZhbHVlPWZ1bmN0aW9uIGVzY2FwZWRWYWx1ZSh0b2tlbixjb250ZXh0KXt2YXIgdmFsdWU9Y29udGV4dC5sb29rdXAodG9rZW5bMV0pO2lmKHZhbHVlIT1udWxsKXJldHVybiBtdXN0YWNoZS5lc2NhcGUodmFsdWUpfTtXcml0ZXIucHJvdG90eXBlLnJhd1ZhbHVlPWZ1bmN0aW9uIHJhd1ZhbHVlKHRva2VuKXtyZXR1cm4gdG9rZW5bMV19O211c3RhY2hlLm5hbWU9XCJtdXN0YWNoZS5qc1wiO211c3RhY2hlLnZlcnNpb249XCIyLjMuMFwiO211c3RhY2hlLnRhZ3M9W1wiPCVcIixcIiU+XCJdO3ZhciBkZWZhdWx0V3JpdGVyPW5ldyBXcml0ZXI7bXVzdGFjaGUuY2xlYXJDYWNoZT1mdW5jdGlvbiBjbGVhckNhY2hlKCl7cmV0dXJuIGRlZmF1bHRXcml0ZXIuY2xlYXJDYWNoZSgpfTttdXN0YWNoZS5wYXJzZT1mdW5jdGlvbiBwYXJzZSh0ZW1wbGF0ZSx0YWdzKXtyZXR1cm4gZGVmYXVsdFdyaXRlci5wYXJzZSh0ZW1wbGF0ZSx0YWdzKX07bXVzdGFjaGUucmVuZGVyPWZ1bmN0aW9uIHJlbmRlcih0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzKXtpZih0eXBlb2YgdGVtcGxhdGUhPT1cInN0cmluZ1wiKXt0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHRlbXBsYXRlISBUZW1wbGF0ZSBzaG91bGQgYmUgYSBcInN0cmluZ1wiICcrJ2J1dCBcIicrdHlwZVN0cih0ZW1wbGF0ZSkrJ1wiIHdhcyBnaXZlbiBhcyB0aGUgZmlyc3QgJytcImFyZ3VtZW50IGZvciBtdXN0YWNoZSNyZW5kZXIodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKVwiKX1yZXR1cm4gZGVmYXVsdFdyaXRlci5yZW5kZXIodGVtcGxhdGUsdmlldyxwYXJ0aWFscyl9O211c3RhY2hlLnRvX2h0bWw9ZnVuY3Rpb24gdG9faHRtbCh0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzLHNlbmQpe3ZhciByZXN1bHQ9bXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLHZpZXcscGFydGlhbHMpO2lmKGlzRnVuY3Rpb24oc2VuZCkpe3NlbmQocmVzdWx0KX1lbHNle3JldHVybiByZXN1bHR9fTttdXN0YWNoZS5lc2NhcGU9ZXNjYXBlSHRtbDttdXN0YWNoZS5TY2FubmVyPVNjYW5uZXI7bXVzdGFjaGUuQ29udGV4dD1Db250ZXh0O211c3RhY2hlLldyaXRlcj1Xcml0ZXI7cmV0dXJuIG11c3RhY2hlfSk7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXG4gKiBMaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tcm9kZXJpY2svUHViU3ViSlNcbiAqL1xuIWZ1bmN0aW9uKG4sdCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9e307bi5QdWJTdWI9cjt2YXIgZT1uLmRlZmluZTshZnVuY3Rpb24obil7dmFyIHQ9e30scj0tMTtmdW5jdGlvbiBlKG4pe3ZhciB0O2Zvcih0IGluIG4paWYobi5oYXNPd25Qcm9wZXJ0eSh0KSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBvKG4sdCxyKXt0cnl7bih0LHIpfWNhdGNoKG4pe3NldFRpbWVvdXQoZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKCl7dGhyb3cgbn19KG4pLDApfX1mdW5jdGlvbiBpKG4sdCxyKXtuKHQscil9ZnVuY3Rpb24gdShuLHIsZSx1KXt2YXIgZixzPXRbcl0sYz11P2k6bztpZih0Lmhhc093blByb3BlcnR5KHIpKWZvcihmIGluIHMpcy5oYXNPd25Qcm9wZXJ0eShmKSYmYyhzW2ZdLG4sZSl9ZnVuY3Rpb24gZihuLHIsbyxpKXt2YXIgZj1mdW5jdGlvbihuLHQscil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9U3RyaW5nKG4pLG89ZS5sYXN0SW5kZXhPZihcIi5cIik7Zm9yKHUobixuLHQscik7LTEhPT1vOyllPWUuc3Vic3RyKDAsbyksbz1lLmxhc3RJbmRleE9mKFwiLlwiKSx1KG4sZSx0LHIpfX0obj1cInN5bWJvbFwiPT10eXBlb2Ygbj9uLnRvU3RyaW5nKCk6bixyLGkpLHM9ZnVuY3Rpb24obil7dmFyIHI9U3RyaW5nKG4pLG89Qm9vbGVhbih0Lmhhc093blByb3BlcnR5KHIpJiZlKHRbcl0pKSxpPXIubGFzdEluZGV4T2YoXCIuXCIpO2Zvcig7IW8mJi0xIT09aTspcj1yLnN1YnN0cigwLGkpLGk9ci5sYXN0SW5kZXhPZihcIi5cIiksbz1Cb29sZWFuKHQuaGFzT3duUHJvcGVydHkocikmJmUodFtyXSkpO3JldHVybiBvfShuKTtyZXR1cm4hIXMmJighMD09PW8/ZigpOnNldFRpbWVvdXQoZiwwKSwhMCl9bi5wdWJsaXNoPWZ1bmN0aW9uKHQscil7cmV0dXJuIGYodCxyLCExLG4uaW1tZWRpYXRlRXhjZXB0aW9ucyl9LG4ucHVibGlzaFN5bmM9ZnVuY3Rpb24odCxyKXtyZXR1cm4gZih0LHIsITAsbi5pbW1lZGlhdGVFeGNlcHRpb25zKX0sbi5zdWJzY3JpYmU9ZnVuY3Rpb24obixlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXJldHVybiExO249XCJzeW1ib2xcIj09dHlwZW9mIG4/bi50b1N0cmluZygpOm4sdC5oYXNPd25Qcm9wZXJ0eShuKXx8KHRbbl09e30pO3ZhciBvPVwidWlkX1wiK1N0cmluZygrK3IpO3JldHVybiB0W25dW29dPWUsb30sbi5zdWJzY3JpYmVPbmNlPWZ1bmN0aW9uKHQscil7dmFyIGU9bi5zdWJzY3JpYmUodCxmdW5jdGlvbigpe24udW5zdWJzY3JpYmUoZSksci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KTtyZXR1cm4gbn0sbi5jbGVhckFsbFN1YnNjcmlwdGlvbnM9ZnVuY3Rpb24oKXt0PXt9fSxuLmNsZWFyU3Vic2NyaXB0aW9ucz1mdW5jdGlvbihuKXt2YXIgcjtmb3IociBpbiB0KXQuaGFzT3duUHJvcGVydHkocikmJjA9PT1yLmluZGV4T2YobikmJmRlbGV0ZSB0W3JdfSxuLnVuc3Vic2NyaWJlPWZ1bmN0aW9uKHIpe3ZhciBlLG8saSx1PVwic3RyaW5nXCI9PXR5cGVvZiByJiYodC5oYXNPd25Qcm9wZXJ0eShyKXx8ZnVuY3Rpb24obil7dmFyIHI7Zm9yKHIgaW4gdClpZih0Lmhhc093blByb3BlcnR5KHIpJiYwPT09ci5pbmRleE9mKG4pKXJldHVybiEwO3JldHVybiExfShyKSksZj0hdSYmXCJzdHJpbmdcIj09dHlwZW9mIHIscz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByLGM9ITE7aWYoIXUpe2ZvcihlIGluIHQpaWYodC5oYXNPd25Qcm9wZXJ0eShlKSl7aWYobz10W2VdLGYmJm9bcl0pe2RlbGV0ZSBvW3JdLGM9cjticmVha31pZihzKWZvcihpIGluIG8pby5oYXNPd25Qcm9wZXJ0eShpKSYmb1tpXT09PXImJihkZWxldGUgb1tpXSxjPSEwKX1yZXR1cm4gY31uLmNsZWFyU3Vic2NyaXB0aW9ucyhyKX19KHIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUuYW1kP2UoZnVuY3Rpb24oKXtyZXR1cm4gcn0pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiYodm9pZCAwIT09bW9kdWxlJiZtb2R1bGUuZXhwb3J0cyYmKGV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9ciksZXhwb3J0cy5QdWJTdWI9cixtb2R1bGUuZXhwb3J0cz1leHBvcnRzPXIpfShcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3d8fHRoaXMpOyIsIi8qISBVVEYtOFxyXG5cclxuwqkga292cmlnaW5cclxu0JLRgdC1INC/0YDQsNCy0LAg0YDQsNC30YDQtdGI0LXQvdGLXHJcbtC60YDQsNGB0LjQstGL0Lkg0LTQuNC30LDQudC9INC00L7Qu9C20LXQvSDQuNC80LXRgtGMINC60YDQsNGB0LjQstGL0Lkg0LrQvtC0wq5cclxuXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9odG1scGx1c2Nzcy9cclxuXHJcbiovXHJcblxyXG4oICgpID0+IHtcclxuXHJcblx0bGV0IHJlc2l6ZVRpbWVvdXQgPSBudWxsLFxyXG5cdFx0d2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcclxuXHJcblx0XHRcdGlmICggcmVzaXplVGltZW91dCA9PT0gbnVsbCApIHtcclxuXHJcblx0XHRcdFx0cmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHJcblx0XHRcdFx0XHRpZih3aW5kb3dXaWR0aE9MZCAhPT0gd2luZG93LmlubmVyV2lkdGgpIHtcclxuXHJcblx0XHRcdFx0XHRcdHdpbmRvd1dpZHRoT0xkID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG5cdFx0XHRcdFx0XHRQdWJTdWIucHVibGlzaCgnd2luZG93V2lkdGhSZXNpemUnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0sIDEwMCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG5cclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10cmFuc2l0aW9uRGVmYXVsdCcsICcuM3MnKTtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oZWFkZXJIZWlnaHQnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuY2xpZW50SGVpZ2h0ICsgJ3B4Jyk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQsNC90LjQvNCw0YbQuNC5XHJcblx0d2luZG93LmNzc0FuaW1hdGlvbiA9IGE9PntsZXQgYixjLGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNzc2FuaW1hdGlvblwiKTtzd2l0Y2goYSl7Y2FzZSdhbmltYXRpb24nOmI9e1wiYW5pbWF0aW9uXCI6XCJhbmltYXRpb25lbmRcIixcIk9BbmltYXRpb25cIjpcIm9BbmltYXRpb25FbmRcIixcIk1vekFuaW1hdGlvblwiOlwiYW5pbWF0aW9uZW5kXCIsXCJXZWJraXRBbmltYXRpb25cIjpcIndlYmtpdEFuaW1hdGlvbkVuZFwifTticmVhaztjYXNlJ3RyYW5zaXRpb24nOmI9e1widHJhbnNpdGlvblwiOlwidHJhbnNpdGlvbmVuZFwiLFwiT1RyYW5zaXRpb25cIjpcIm9UcmFuc2l0aW9uRW5kXCIsXCJNb3pUcmFuc2l0aW9uXCI6XCJ0cmFuc2l0aW9uZW5kXCIsXCJXZWJraXRUcmFuc2l0aW9uXCI6XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCJ9fWZvcihjIGluIGIpaWYoZC5zdHlsZVtjXSE9PXVuZGVmaW5lZClyZXR1cm4gYltjXX1cclxuXHJcblx0Ly8gRGV0ZXJtaW5lIGlmIGFuIGVsZW1lbnQgaXMgaW4gdGhlIHZpc2libGUgdmlld3BvcnRcclxuXHR3aW5kb3cuaXNJblZpZXdwb3J0ID0gZWwgPT4ge1xyXG5cdFx0Y29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0cmV0dXJuIChyZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblx0fVxyXG5cclxuXHQvLyDQvtGC0LTQtdC70Y/QtdC8INGC0YvRgdGP0YfQuFxyXG5cdHdpbmRvdy5zZXBOdW1iZXIgPSBmdW5jdGlvbihzdHIpe1xyXG5cdFx0c3RyID0gc3RyLnRvU3RyaW5nKCk7XHJcblx0XHRzdHIgPSBzdHIucmVwbGFjZSgvXFxzKy9nLCcnKTtcclxuXHRcdHJldHVybiBzdHIucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoW15cXGRdfCQpKS9nLCAnJDEgJyk7XHJcblx0fVxyXG5cclxuXHQvLyDRgdC60LvQtdC40LLQsNC10Lwg0YLRi9GB0Y/Rh9C4XHJcblx0d2luZG93LnN0clRvTnVtYmVyID0gZnVuY3Rpb24obil7XHJcblx0XHRyZXR1cm4gcGFyc2VJbnQobi5yZXBsYWNlKC9cXHMrL2csJycpLCAxMCk7XHJcblx0fVxyXG5cclxuLy8g0YHQutC70L7QvdC10L3QuNC1XHJcblx0d2luZG93LmRlY2xlbnNpb24gPSAobnVtLCBleHByZXNzaW9ucykgPT4ge1xyXG5cclxuXHRcdGxldCByLFxyXG5cdFx0XHRjb3VudCA9IG51bSAlIDEwMDtcclxuXHJcblx0XHRpZiAoY291bnQgPiA0ICYmIGNvdW50IDwgMjEpe1xyXG5cclxuXHRcdFx0ciA9IGV4cHJlc3Npb25zWycyJ107XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRjb3VudCA9IGNvdW50ICUgMTA7XHJcblxyXG5cdFx0XHRpZiAoY291bnQgPT0gMSl7XHJcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycwJ107XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoY291bnQgPiAxICYmIGNvdW50IDwgNSl7XHJcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycxJ107XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRyID0gZXhwcmVzc2lvbnNbJzInXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcjtcclxuXHJcblx0fVxyXG5cclxufSkoKTsiLCJcbiggbGlua3MgPT4ge1xuXG5cdGlmKGxpbmtzLmxlbmd0aCkge1xuXG5cdFx0Y29uc3QgaGlzdG9yeUJhY2sgPSBldmVudD0+IHtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGhpc3RvcnkuYmFjaygpO1xuXG5cdFx0fVxuXG5cdFx0QXJyYXkuZnJvbShsaW5rcywgbGluayA9PiB7XG5cblx0XHRcdGlmKGRvY3VtZW50LnJlZmVycmVyLmluZGV4T2YobG9jYXRpb24uaG9zdG5hbWUpID4gMCkge1xuXG5cdFx0XHRcdGxpbmsub25jbGljayA9IGhpc3RvcnlCYWNrO1xuXG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHR9XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1idG4tYmFjaycpKTsiLCIoIGl0ZW1zID0+IHtcclxuXHJcblx0aWYoIWl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGl0ZW1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRjb25zdCBpbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94X19pbnB1dCcpLFxyXG5cdFx0XHQgIGlucHV0QWxsID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3hfX2lucHV0W3ZhbHVlPVwiYWxsXCJdJyksXHJcblx0XHRcdCAgaW5wdXROb3RBbGwgPSBBcnJheS5mcm9tKGlucHV0KS5maWx0ZXIoZWwgPT4gZWwgIT09IGlucHV0QWxsKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGlucHV0LCBlbCA9PiB7XHJcblxyXG5cdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmICggaW5wdXRBbGwgKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBpbnB1dEFsbCA9PT0gZWwgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpbnB1dE5vdEFsbC5mb3JFYWNoKGVsID0+IGVsLmNoZWNrZWQgPSBpbnB1dEFsbC5jaGVja2VkKTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0aW5wdXRBbGwuY2hlY2tlZCA9IGlucHV0Tm90QWxsLmV2ZXJ5KCBlbCA9PiBlbC5jaGVja2VkID09PSB0cnVlICk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gtZ3JvdXAnKSk7IiwiKCBpdGVtcyA9PiB7XHJcblxyXG5cdGlmKCBpdGVtcy5sZW5ndGggPT09IDAgKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlzTWVudSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuY29udGV4dC1tZW51Jyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShpdGVtcywgaXRlbSA9PiB7XHJcblxyXG5cdFx0XHRpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nLCBpdGVtID09PSBpc01lbnUgJiYgaXNNZW51LmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpID09PSBmYWxzZSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRleHQtbWVudScpKTsiLCIoIGRhc2hib2FyZCA9PiB7XHJcblxyXG5cdGlmICggZGFzaGJvYXJkICkge1xyXG5cclxuXHRcdGNvbnN0IHNldEhlaWdodCA9ICggaCA9IDAgKSA9PiB7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGRhc2hib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuZGFzaGJvYXJkX19kZXNjJyksIGl0ZW0gPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoIGggPCBpdGVtLmNsaWVudEhlaWdodCApIHtcclxuXHJcblx0XHRcdFx0XHRoID0gaXRlbS5jbGllbnRIZWlnaHQ7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWRhc2hib2FyZERlc2NIZWlnaGd0JywgaCArICdweCcpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRQdWJTdWIuc3Vic2NyaWJlKCd3aW5kb3dXaWR0aFJlc2l6ZScsICgpID0+IHNldEhlaWdodCgpKTtcclxuXHJcblx0XHRzZXRIZWlnaHQoKTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhc2hib2FyZCcpKTsiLCIoIGRhdGFsaXN0cyA9PiB7XHJcblxyXG5cdGlmICggZGF0YWxpc3RzLmxlbmd0aCA9PT0gMCApIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShkYXRhbGlzdHMsIGRhdGFsaXN0ID0+IHtcclxuXHJcblx0XHRjb25zdCBmb3JtID0gZGF0YWxpc3QuY2xvc2VzdCgnZm9ybScpLFxyXG5cdFx0XHQgIGlucHV0ID0gZGF0YWxpc3QucXVlcnlTZWxlY3RvcignLmlucHV0LWRhdGFsaXN0X19pbnB1dCcpLFxyXG5cdFx0XHQgIGxpc3QgPSBkYXRhbGlzdC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZGF0YWxpc3RfX2xpc3QnKSxcclxuXHRcdFx0ICBpdGVtcyA9IGRhdGFsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1kYXRhbGlzdF9faXRlbScpLFxyXG5cdFx0XHQgIHdvcmtncm91cEFkZFVzZXIgPSBkYXRhbGlzdC5jbGFzc0xpc3QuY29udGFpbnMoJ2luLXdvcmtncm91cC1hZGQtdXNlcicpO1xyXG5cclxuXHRcdGRhdGFsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKCk9PiB7XHJcblxyXG5cdFx0XHRpbnB1dC52YWx1ZSA9ICcnO1xyXG5cdFx0XHRBcnJheS5mcm9tKGl0ZW1zLCBpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtZGF0YWxpc3RfX2l0ZW0tLWhpZGUnKSk7XHJcblx0XHRcdGRhdGFsaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZvY3VzJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKCB3b3JrZ3JvdXBBZGRVc2VyICkge1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShpdGVtcywgaXRlbSA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IHJhZGlvID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZGF0YWxpc3RfX3JhZGlvJyk7XHJcblxyXG5cdFx0XHRcdHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZCgndmlzdWFsbHloaWRkZW4nKTtcclxuXHJcblx0XHRcdFx0XHRpbnB1dC5mb2N1cygpO1xyXG5cclxuXHRcdFx0XHRcdGlmICggaW5wdXQudmFsdWUgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRkYXRhbGlzdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNsb3NlXCIpKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4gZGF0YWxpc3QuY2xhc3NMaXN0LmFkZCgnaXMtZm9jdXMnKSk7XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRkYXRhbGlzdC5jbGFzc0xpc3QuYWRkKCdpcy1mb2N1cycpO1xyXG5cclxuXHRcdFx0Y29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdFx0aWYoIHZhbHVlLmxlbmd0aCApIHtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShpdGVtcywgaXRlbSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgdGV4dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmlucHV0LWRhdGFsaXN0X19maWx0ZXInKS50ZXh0Q29udGVudC50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdFx0XHRpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lucHV0LWRhdGFsaXN0X19pdGVtLS1oaWRlJywgdGV4dC5pbmRleE9mKHZhbHVlKSA9PT0gLTEpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oaXRlbXMsIGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1kYXRhbGlzdF9faXRlbS0taGlkZScpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggd29ya2dyb3VwQWRkVXNlciApIHtcclxuXHJcblx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QudG9nZ2xlKCAnaXMtZW1wdHknLCBBcnJheS5mcm9tKGl0ZW1zKS5ldmVyeSggZWwgPT4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXN1YWxseWhpZGRlbicpIHx8IGVsLmNsYXNzTGlzdC5jb250YWlucygnaW5wdXQtZGF0YWxpc3RfX2l0ZW0tLWhpZGUnKSkgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5pbnB1dC1kYXRhbGlzdCcpID09PSBudWxsICkge1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShkYXRhbGlzdHMsIGRhdGFsaXN0ID0+IGRhdGFsaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZvY3VzJykpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZGF0YWxpc3QnKSk7IiwiKCBpdGVtcyA9PiB7XHJcblxyXG5cdGlmKCFpdGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShpdGVtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0Y29uc3Qgc3VibWl0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1yZXF1aXJlZF9fc3VibWl0Jyk7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IGZhbGlkID0gdHJ1ZTtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdbcmVxdWlyZWRdJyksIGVsID0+IHtcclxuXHJcblx0XHRcdFx0aWYgKCBlbC50eXBlID09PSAncmFkaW8nICYmIGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCInICsgZWwubmFtZSArICdcIl06Y2hlY2tlZCcpLmxlbmd0aCA9PT0gMCApIHtcclxuXHJcblx0XHRcdFx0XHRmYWxpZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKCBlbC52YWx1ZSA9PT0gJ25vbmUnIHx8IGVsLnZhbHVlLmxlbmd0aCA9PT0gMCApIHtcclxuXHJcblx0XHRcdFx0XHRmYWxpZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHN1Ym1pdC5kaXNhYmxlZCA9ICFmYWxpZDtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1yZXF1aXJlZCcpKTsiLCIoIGZvcm0gPT4ge1xyXG5cclxuXHRpZiggIWZvcm0gKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IHN1Ym1pdCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0td29ya2dyb3VwLWFkZC11c2VyX19zdWJtaXQnKSxcclxuXHRcdCAgdXNlcnMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLXdvcmtncm91cC1hZGQtdXNlcl9fdXNlcicpLFxyXG5cdFx0ICBoZWFkID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcud29ya2dyb3VwLWFkZC11c2VyX19saXN0LWhlYWQnKSxcclxuXHRcdCAgZm9vdCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLndvcmtncm91cC1hZGQtdXNlcl9fZm9vdCcpLFxyXG5cdFx0ICByZXN1bHQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy53b3JrZ3JvdXAtYWRkLXVzZXJfX3Jlc3VsdCcpLFxyXG5cdFx0ICBidG5OZXh0Q3VzdG9tID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS13b3JrZ3JvdXAtYWRkLXVzZXJfX2J0bi1uZXh0LWN1c3RvbScpLFxyXG5cdFx0ICBjdXN0b21OYW1lID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS13b3JrZ3JvdXAtYWRkLXVzZXJfX2N1c3RvbS1uYW1lJyksXHJcblx0XHQgIGN1c3RvbUVtYWlsID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS13b3JrZ3JvdXAtYWRkLXVzZXJfX2N1c3RvbS1lbWFpbCcpLFxyXG5cdFx0ICBjdXN0b21TdWJtaXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXdvcmtncm91cC1hZGQtdXNlcl9fc3VibWl0LWN1c3RvbScpLFxyXG5cdFx0ICB0ZW1wbGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignI3dvcmtncm91cC1hZGQtdXNlci10ZW1wbGF0ZScpLmlubmVySFRNTCxcclxuXHRcdCAgdGVtcGxhdGVDdXN0b20gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyN3b3JrZ3JvdXAtYWRkLXVzZXItdGVtcGxhdGUtY3VzdG9tJykuaW5uZXJIVE1MO1xyXG5cclxuICBcdGxldCB1c2Vyc0xpc3QgPSBmYWxzZTtcclxuXHJcbiAgXHRjb25zdCBjdXN0b21JbnB1dCA9ICgpPT4ge1xyXG5cclxuXHRcdGN1c3RvbVN1Ym1pdC5kaXNhYmxlZCA9IGN1c3RvbU5hbWUudmFsdWUubGVuZ3RoID09PSAwIHx8IGN1c3RvbUVtYWlsLnZhbHVlLmxlbmd0aCA9PT0gMDtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBmb3JtRGlzYWJsZWQgPSBkaXNhYmxlZCA9PiB7XHJcblxyXG5cdFx0c3VibWl0LmRpc2FibGVkID0gZGlzYWJsZWQ7XHJcblx0XHRoZWFkLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCBkaXNhYmxlZCk7XHJcblx0XHRmb290LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCBkaXNhYmxlZCk7XHJcblxyXG5cdH1cclxuXHJcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZiggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZm9ybS13b3JrZ3JvdXAtYWRkLXVzZXJfX3VzZXInKSApIHtcclxuXHJcblx0XHRcdGNvbnN0IGlkID0gZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG5cdFx0XHRcdCAgdXNlciA9IGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblx0XHRcdFx0ICBhdmF0YXIgPSB1c2VyLnF1ZXJ5U2VsZWN0b3IoJy53b3JrZ3JvdXAtdXNlcl9faGVhZCcpLmlubmVySFRNTCxcclxuXHRcdFx0XHQgIG5hbWUgPSB1c2VyLnF1ZXJ5U2VsZWN0b3IoJy53b3JrZ3JvdXAtdXNlcl9fbmFtZScpLnRleHRDb250ZW50LnRyaW0oKSxcclxuXHRcdFx0XHQgIGRlc2MgPSB1c2VyLnF1ZXJ5U2VsZWN0b3IoJy53b3JrZ3JvdXAtdXNlcl9fZGVzYycpLnRleHRDb250ZW50LnRyaW0oKTtcclxuXHJcblx0XHRcdHJlc3VsdC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUsIHsgaWQsIGF2YXRhciwgbmFtZSwgZGVzYyB9KSk7XHJcblxyXG5cdFx0XHRmb3JtRGlzYWJsZWQoZmFsc2UpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINGA0YPRh9C90L7QtSDQtNC+0LHQsNCy0LvQtdC90LjQtVxyXG5cclxuXHRidG5OZXh0Q3VzdG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblxyXG5cdFx0Y3VzdG9tTmFtZS5mb2N1cygpO1xyXG5cdFx0YnRuTmV4dEN1c3RvbS5jbG9zZXN0KCcuaW5wdXQtZGF0YWxpc3QnKS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNsb3NlXCIpKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdGN1c3RvbU5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IGN1c3RvbUlucHV0KCkpO1xyXG5cdGN1c3RvbUVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiBjdXN0b21JbnB1dCgpKTtcclxuXHJcblx0Y3VzdG9tU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgbmFtZSA9IGN1c3RvbU5hbWUudmFsdWUudHJpbSgpLFxyXG5cdFx0XHQgIGVtYWlsID0gY3VzdG9tRW1haWwudmFsdWUudHJpbSgpO1xyXG5cclxuXHRcdGxldCBhdmF0YXIgPSAnJztcclxuXHJcblx0XHRpZiAoIG5hbWUuaW5kZXhPZignICcpID09PSAtMSApIHtcclxuXHJcblx0XHRcdGF2YXRhciA9IG5hbWU7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdG5hbWUuc3BsaXQoJyAnKS5mb3JFYWNoKCB3b3JkID0+IHtcclxuXHJcblx0XHRcdFx0YXZhdGFyICs9IHdvcmQuc3Vic3RyKDAsIDEpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGF2YXRhciA9IGF2YXRhci5zdWJzdHIoMCwgMik7XHJcblxyXG5cdFx0cmVzdWx0Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZUN1c3RvbSwgeyBhdmF0YXIsIG5hbWUsIGVtYWlsIH0pKTtcclxuXHJcblx0XHRjdXN0b21OYW1lLnZhbHVlID0gJyc7XHJcblx0XHRjdXN0b21FbWFpbC52YWx1ZSA9ICcnO1xyXG5cdFx0Y3VzdG9tU3VibWl0LmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcblx0XHRmb3JtRGlzYWJsZWQoZmFsc2UpO1xyXG5cclxuXHR9KTtcclxuXHJcblx0cmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRuUmVtb3ZlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy53b3JrZ3JvdXAtYWRkLXVzZXJfX25ldy1yZW1vdmUnKTtcclxuXHJcblx0XHRpZiAoIGJ0blJlbW92ZSApIHtcclxuXHJcblx0XHRcdGNvbnN0IGlkID0gYnRuUmVtb3ZlLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG5cclxuXHRcdFx0aWYgKCBpZCAhPT0gJ2N1c3RvbScgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS13b3JrZ3JvdXAtYWRkLXVzZXJfX3VzZXJbdmFsdWU9XCInICsgaWQgKyAnXCJdJyk7XHJcblxyXG5cdFx0XHRcdGlucHV0LmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0aW5wdXQuY2xvc2VzdCgnLmZvcm0td29ya2dyb3VwLWFkZC11c2VyX191c2VyLXdyYXAnKS5jbGFzc0xpc3QucmVtb3ZlKCd2aXN1YWxseWhpZGRlbicpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2V0VGltZW91dCggKCk9PiB7XHJcblxyXG5cdFx0XHRcdGJ0blJlbW92ZS5jbG9zZXN0KCcud29ya2dyb3VwLWFkZC11c2VyX19uZXcnKS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFx0aWYgKCAhcmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJy53b3JrZ3JvdXAtYWRkLXVzZXJfX25ldycpICkge1xyXG5cclxuXHRcdFx0XHRcdGZvcm1EaXNhYmxlZCh0cnVlKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHRcdHN1Ym1pdC5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdH0pXHJcblx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHQudGhlbihub3RpZmljYXRpb24gPT4ge1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2cobm90aWZpY2F0aW9uKTtcclxuXHJcblx0XHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdFx0bm90aWZpY2F0aW9uKC4uLm5vdGlmaWNhdGlvbik7XHJcblxyXG5cdFx0XHRyZXN1bHQuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRcdGZvcm1EaXNhYmxlZCh0cnVlKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCAoKSA9PiB7XHJcblxyXG5cdFx0cmVzdWx0LmlubmVySFRNTCA9ICcnO1xyXG5cdFx0Zm9ybURpc2FibGVkKHRydWUpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0td29ya2dyb3VwLWFkZC11c2VyX191c2VyLXdyYXAnKSwgdXNlciA9PiB1c2VyLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc3VhbGx5aGlkZGVuJykpO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXdvcmtncm91cC1hZGQtdXNlcicpKTsiLCIoIGl0ZW1zID0+IHtcclxuXHJcblx0aWYoIWl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGl0ZW1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRjb25zdCBidG4gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19zdWJtaXQnKTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHRcdFx0YnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG5cdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xyXG5cdFx0XHRcdGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0Ly8gbm90aWZpY2F0aW9uXHJcblxyXG5cdFx0XHRcdGlmKHJlc3VsdC5ub3RpZmljYXRpb24pIHtcclxuXHJcblx0XHRcdFx0XHRub3RpZmljYXRpb24oLi4ucmVzdWx0Lm5vdGlmaWNhdGlvbik7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHJlZGlyZWN0XHJcblxyXG5cdFx0XHRcdGlmKHJlc3VsdC5yZWRpcmVjdCkge1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGRlbGF5ID0gcmVzdWx0LnJlZGlyZWN0RGVsYXkgPyByZXN1bHQucmVkaXJlY3REZWxheSAqIDEwMDAgOiAwO1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoICgpPT4gbG9jYXRpb24uYXNzaWduKHJlc3VsdC5yZWRpcmVjdCksIGRlbGF5KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gcmVzZXRcclxuXHJcblx0XHRcdFx0aWYocmVzdWx0LnJlc2V0KSB7XHJcblxyXG5cdFx0XHRcdFx0Zm9ybS5yZXNldCgpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyByZWxvYWRcclxuXHJcblx0XHRcdFx0aWYocmVzdWx0LnJlZnJlc2gpIHtcclxuXHJcblx0XHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0nKSk7IiwiKCBpbnB1dCA9PiB7XHJcblxyXG5cdGlmKCAhaW5wdXQubGVuZ3RoICkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGlucHV0LCBpdGVtID0+IHtcclxuXHJcblx0XHRpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKCBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1maWxlX192YWx1ZScpICkge1xyXG5cclxuXHRcdFx0XHRpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1maWxlX192YWx1ZScpLnRleHRDb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1maWxlJykpOyIsIiggaXRlbXMgPT4ge1xyXG5cclxuXHRpZighaXRlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oaXRlbXMsIGZvcm0gPT4ge1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHJcblx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRcdC50aGVuKGpzb24gPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhqc29uKTtcclxuXHJcblx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRcdGFsZXJ0KCfQstGL0YDQuNCw0L3RgtGLINC+0YLQstC10YLQvtCyOiByZWplY3RlZCB8IHJlbW92ZWQgfCBwZW5kaW5nLCBsaW5rICcpXHJcblxyXG5cdFx0XHRcdGlmICgganNvbi5wZW5kaW5nICkge1xyXG5cclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1pbnZpdGF0aW9ucy1jb21wbGV0ZS1saW5rJykuaHJlZiA9IGpzb24ubGluaztcclxuXHJcblx0XHRcdFx0XHRjb25zdCBldmVudE1vZGFsU2hvdyA9IG5ldyBDdXN0b21FdmVudChcIm1vZGFsU2hvd1wiLCB7XHJcblx0XHRcdFx0XHRcdGRldGFpbDoge1xyXG5cdFx0XHRcdFx0XHRcdHNlbGVjdG9yOiBcImludml0YXRpb25zLWNvbXBsZXRlXCJcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0d2luZG93Lm1vZGFsLmRpc3BhdGNoRXZlbnQoZXZlbnRNb2RhbFNob3cpO1xyXG5cclxuXHRcdFx0XHRcdGZvcm0ucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCBqc29uLnJlamVjdGVkICkge1xyXG5cclxuXHRcdFx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaW52aXRhdGlvbnMtLXJlamVjdGVkJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCBqc29uLnJlbW92ZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKHdpbmRvdy5jc3NBbmltYXRpb24oJ3RyYW5zaXRpb24nKSwgKCkgPT4gZm9ybS5yZW1vdmUoKSk7XHJcblxyXG5cdFx0XHRcdFx0c2V0VGltZW91dCggKCk9PiBmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLXJlbW92ZWQnKSApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW52aXRhdGlvbnMnKSk7IiwiKCBzZWN0aW9uID0+IHtcclxuXHJcblx0aWYoIXNlY3Rpb24ubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oc2VjdGlvbiwgYmxvY2sgPT4ge1xyXG5cclxuXHRcdGNvbnN0IHJvd3MgPSBbXSxcclxuXHRcdFx0ICBmb3JtID0gYmxvY2sucXVlcnlTZWxlY3RvcignLmxpdmUtc2VhcmNoLWRvY3NfX2Zvcm0nKSxcclxuXHRcdFx0ICBpbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmxpdmUtc2VhcmNoLWRvY3NfX2lucHV0JyksXHJcblx0XHRcdCAgcmVzZXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5saXZlLXNlYXJjaC1kb2NzX19yZXNldCcpLFxyXG5cdFx0XHQgIGVtcHR5ID0gYmxvY2sucXVlcnlTZWxlY3RvcignLmxpdmUtc2VhcmNoLWRvY3NfX2VtcHR5JyksXHJcblx0XHRcdCAgaXRlbXMgPSBibG9jay5xdWVyeVNlbGVjdG9yQWxsKCcubGl2ZS1zZWFyY2gtZG9jc19faXRlbScpO1xyXG5cclxuXHRcdGNvbnN0IGZpbHRlclJvdyA9ICh2YWx1ZSkgPT4ge1xyXG5cclxuXHRcdFx0aWYoIHZhbHVlLmxlbmd0aCApe1xyXG5cclxuXHRcdFx0XHRyb3dzLmZvckVhY2goIChyb3csaW5kZXgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRsZXQgc2hvdyA9IHJvdy5zb21lKCB0ZCA9PiB0ZC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSkgIT09IC0xICk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBzaG93ICkge1xyXG5cclxuXHRcdFx0XHRcdFx0QXJyYXkuZnJvbShpdGVtc1tpbmRleF0ucXVlcnlTZWxlY3RvckFsbCgnLmxpdmUtc2VhcmNoLWRvY3NfX3N0cmluZycpLCAodGQsaSkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHR0ZC5pbm5lckhUTUwgPSByb3dbaV0ucmVwbGFjZSh2YWx1ZSxcIjxzcGFuIGNsYXNzPVxcXCJoaWdobGlnaHRcXFwiPlwiICsgdmFsdWUgKyBcIjwvc3Bhbj5cIik7XHJcblxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdGl0ZW1zW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdsaXZlLXNlYXJjaC1kb2NzX19oaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdGl0ZW1zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdsaXZlLXNlYXJjaC1kb2NzX19oaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRBcnJheS5mcm9tKGl0ZW1zW2luZGV4XS5xdWVyeVNlbGVjdG9yQWxsKCcubGl2ZS1zZWFyY2gtZG9jc19fc3RyaW5nJyksICh0ZCxpKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHRkLnRleHRDb250ZW50ID0gcm93W2ldO1xyXG5cclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oaXRlbXMsIChpdGVtLCBpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdEFycmF5LmZyb20oaXRlbS5xdWVyeVNlbGVjdG9yQWxsKCcubGl2ZS1zZWFyY2gtZG9jc19fc3RyaW5nJyksICh0ZCxpKSA9PiB0ZC50ZXh0Q29udGVudCA9IHJvd3NbaW5kZXhdW2ldKTtcclxuXHJcblx0XHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2xpdmUtc2VhcmNoLWRvY3NfX2hpZGUnKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fTtcclxuXHJcblx0XHQvLyDRgdC+0LfQtNCw0LTQuNC8INC80LDRgdGB0LjQsiDRgdGC0YDQvtC6INC/0L4g0LrQvtGC0L7RgNGL0Lwg0LjRidC10LxcclxuXHJcblx0XHRBcnJheS5mcm9tKGl0ZW1zLCAoaXRlbSxpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0cm93c1tpbmRleF0gPSBbXTtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oaXRlbS5xdWVyeVNlbGVjdG9yQWxsKCcubGl2ZS1zZWFyY2gtZG9jc19fc3RyaW5nJyksIHRkID0+IHtcclxuXHJcblx0XHRcdFx0cm93c1tpbmRleF0ucHVzaCh0ZC50ZXh0Q29udGVudC50cmltKCkpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiBibG9jay5jbGFzc0xpc3QuYWRkKCdpcy1mb2N1cycpKTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgKCkgPT4ge1xyXG5cclxuXHRcdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1lbXB0eScpO1xyXG5cdFx0XHRibG9jay5jbGFzc0xpc3QucmVtb3ZlKCdpcy1mb2N1cycsICdpcy1ub2VtcHR5Jyk7XHJcblx0XHRcdGZpbHRlclJvdygnJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRmb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWVtcHR5JywgaW5wdXQudmFsdWUubGVuZ3RoID09PSAwKTtcclxuXHRcdFx0YmxvY2suY2xhc3NMaXN0LnRvZ2dsZSgnaXMtbm9lbXB0eScsIGlucHV0LnZhbHVlLmxlbmd0aCk7XHJcblx0XHRcdGZpbHRlclJvdyhpbnB1dC52YWx1ZSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyDRgdC60YDRi9GC0Ywg0YDRg9C30LXQu9GM0YLQsNGC0Ysg0L/RgNC4INC60LvQuNC60LUg0LLQvdC1INGE0L7RgNC80YtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaXNGb3JtID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5saXZlLXNlYXJjaC1kb2NzX19mb3JtJyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShzZWN0aW9uLCBibG9jayA9PiB7XHJcblxyXG5cdFx0XHRpZiggaXNGb3JtICE9PSBibG9jay5xdWVyeVNlbGVjdG9yKCcubGl2ZS1zZWFyY2gtZG9jc19fZm9ybScpICkge1xyXG5cclxuXHRcdFx0XHRibG9jay5jbGFzc0xpc3QucmVtb3ZlKCdpcy1mb2N1cycpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXZlLXNlYXJjaC1kb2NzJykpOyIsIi8vIGJ0biB0b2dnbGVcclxuXHJcbi8qKCBidG4gPT4ge1xyXG5cclxuXHRpZihidG4pIHtcclxuXHJcblx0XHRsZXQgd2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdGlmKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LXNob3cnKSkge1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtc2hvdycpO1xyXG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLHdpbmRvd1Njcm9sbCk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbWVudS1zaG93Jyk7XHJcblx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsMCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tbWVudS10b2dnbGUnKSk7XHJcbiovXHJcbi8vIG1lbnUgdXNlclxyXG5cclxuKCBtZW51ID0+IHtcclxuXHJcblx0aWYobWVudSkge1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0aWYoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuaGVhZGVyX191c2VyLWJ0bicpICl7XHJcblxyXG5cdFx0XHRcdG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0fSBlbHNlIGlmKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLmhlYWRlcl9fdXNlcicpID09PSBudWxsICl7XHJcblxyXG5cdFx0XHRcdG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX191c2VyJykpO1xyXG4iLCIoIGVsID0+IHtcclxuXHJcblx0aWYoICFlbCApIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgZm9ybSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1wYXJ0aWNpcGFudHNfX2ZpbHRlcicpLFxyXG5cdFx0ICBpdGVtcyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1wYXJ0aWNpcGFudHNfX2l0ZW0tZmlsdGVyJyksXHJcblx0XHQgIGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcignLm1vZGFsLXBhcnRpY2lwYW50c19fZmlsdGVyLWlucHV0Jyk7XHJcblxyXG5cdGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYgKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1vZGFsLXBhcnRpY2lwYW50c19fZmlsdGVyJykgKSB7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbC1wYXJ0aWNpcGFudHNfX2J0bi1vcGVuLXNlYXJjaCcpICkge1xyXG5cclxuXHRcdFx0Zm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcblx0XHRcdGlucHV0LmZvY3VzKCk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG5cclxuXHRcdGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRmb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWVtcHR5JywgdmFsdWUubGVuZ3RoID09PSAwKTtcclxuXHJcblx0XHRpZiggdmFsdWUubGVuZ3RoICkge1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShpdGVtcywgaXRlbSA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IHRleHQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1wYXJ0aWNpcGFudHNfX3RleHQtZmlsdGVyJykudGV4dENvbnRlbnQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIHRleHQuaW5kZXhPZih2YWx1ZSkgPT09IC0xKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGl0ZW1zLCBpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsICgpID0+IHtcclxuXHJcblx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWVtcHR5Jyk7XHJcblx0XHRBcnJheS5mcm9tKGl0ZW1zLCBpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcGFydGljaXBhbnRzJykpOyIsIiggbW9kYWwgPT4ge1xyXG5cclxuXHRpZighbW9kYWwpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgaXRlbXMgPSBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWxfX2l0ZW0nKSxcclxuXHRcdCAgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsXScpLFxyXG5cdFx0ICB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcclxuXHJcblx0bGV0IGFjdGl2ZU1vZGFsID0gbnVsbCxcclxuXHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignaGlkZScsICgpID0+IHtcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXNob3cnKTtcclxuXHRcdHdyYXBwZXIuc3R5bGUudG9wID0gMDtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLHdpbmRvd1Njcm9sbCk7XHJcblx0XHRhY3RpdmVNb2RhbCA9IGZhbHNlO1xyXG5cclxuXHR9KTtcclxuXHJcblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcblxyXG5cdFx0XHRtb2RhbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImhpZGVcIikpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IG1vZGFsU2hvdyA9IHNlbGVjdG9yID0+IHtcclxuXHJcblx0XHRpZighYWN0aXZlTW9kYWwpe1xyXG5cclxuXHRcdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRhY3RpdmVNb2RhbCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tJyArIHNlbGVjdG9yKTtcclxuXHJcblx0XHRtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hbGlnbi1zdGFydCcsIGFjdGl2ZU1vZGFsLmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbC1pcy1hbGlnbi1zdGFydCcpICE9PSBudWxsKTtcclxuXHJcblx0XHRpZiAoYnRuUGFnZVVwKSB7XHJcblxyXG5cdFx0XHRjb25zdCBldmVudCA9IGFjdGl2ZU1vZGFsLmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbC1pcy1hbGlnbi1zdGFydCcpICE9PSBudWxsID8gXCJvblwiIDogXCJvZmZcIjtcclxuXHJcblx0XHRcdGJ0blBhZ2VVcC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldmVudCkpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRBcnJheS5mcm9tKGl0ZW1zLCBlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCd2aXN1YWxseWhpZGRlbicsIGVsICE9PSBhY3RpdmVNb2RhbCkpO1xyXG5cclxuXHRcdHdyYXBwZXIuc3R5bGUudG9wID0gLXdpbmRvd1Njcm9sbCArICdweCc7XHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXNob3cnKTtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG5cclxuXHRcdGFjdGl2ZU1vZGFsLmZvY3VzKCk7XHJcblxyXG5cdFx0UHViU3ViLnB1Ymxpc2goJ29wZW4tJyArIHNlbGVjdG9yKTtcclxuXHJcblx0fTtcclxuXHJcblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsJykgfHwgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbF9fY2xvc2UnKSl7XHJcblxyXG5cdFx0XHRtb2RhbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImhpZGVcIikpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblxyXG5cdFx0d2hpbGUgKHRhcmdldCAhPT0gZG9jdW1lbnQpIHtcclxuXHJcblx0XHRcdGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLW1vZGFsJykpIHtcclxuXHJcblx0XHRcdFx0bW9kYWxTaG93KHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwnKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdtb2RhbFNob3cnLCBldmVudCA9PiBtb2RhbFNob3coZXZlbnQuZGV0YWlsLnNlbGVjdG9yKSk7XHJcblxyXG5cdG1vZGFsLm9rID0gKHRpdGxlLCB0ZXh0LCBtb2QgPSAnJykgPT4ge1xyXG5cclxuXHRcdG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tb2snKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kJywgbW9kKTtcclxuXHRcdG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tb2sgLm1vZGFsLW1pbmlfX3RpdGxlJykuaW5uZXJIVE1MID0gdGl0bGUgPyB0aXRsZSA6ICcnO1xyXG5cdFx0bW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS1vayAubW9kYWwtbWluaV9fdGV4dCcpLmlubmVySFRNTCA9IHRleHQgPyB0ZXh0IDogJyc7XHJcblx0XHRtb2RhbFNob3coJ29rJyk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpKTsiLCIoIG5vdGlmaWNhdGlvbiA9PiB7XHJcblxyXG5cdGlmKCFub3RpZmljYXRpb24pIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90aWZpY2F0aW9uLXRlbXBsYXRlJykuaW5uZXJIVE1MO1xyXG5cclxuXHR3aW5kb3cubm90aWZpY2F0aW9uID0gKGhlYWQsIHRleHQsIHRpbWVyID0gMTApID0+IHtcclxuXHJcblx0XHRub3RpZmljYXRpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUsIHsgaGVhZCwgdGV4dCB9KSk7XHJcblxyXG5cdFx0Y29uc3QgaXRlbSA9IG5vdGlmaWNhdGlvbi5xdWVyeVNlbGVjdG9yKCcuaXMtbmV3Jyk7XHJcblxyXG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuXHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1uZXcnKTtcclxuXHRcdFx0aXRlbS5zdHlsZS5oZWlnaHQgPSBpdGVtLmNsaWVudEhlaWdodCArICdweCc7XHJcblxyXG5cdFx0fSwgMTAwKTtcclxuXHJcblx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LmNzc0FuaW1hdGlvbigndHJhbnNpdGlvbicpLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiggaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWhpZGUnKSApe1xyXG5cclxuXHRcdFx0XHRpdGVtLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGUnKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCAoKT0+IHtcclxuXHJcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtaGlkZScpO1xyXG5cclxuXHRcdH0sIDEwMDAgKiB0aW1lcik7XHJcblxyXG5cdH1cclxuXHJcblx0Ly8gdG9wIHZpZXBvcnRcclxuXHJcblx0Y29uc3Qgc2V0VG9wID0gKCkgPT4ge1xyXG5cclxuXHRcdGxldCBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tbm90aWZpY2F0aW9uVG9wJywgaCA8IDEwID8gMTAgOiBoICsgJ3B4Jyk7XHJcblxyXG5cdH1cclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4gc2V0VG9wKCkpKTtcclxuXHJcblx0c2V0VG9wKCk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90aWZpY2F0aW9uJykpOyIsIlxyXG4oICgpID0+IHtcclxuXHJcblx0aWYgKGJ0blBhZ2VVcCkge1xyXG5cclxuXHRcdC8vIG9uIHwgb2ZmXHJcblxyXG5cdFx0YnRuUGFnZVVwLmFkZEV2ZW50TGlzdGVuZXIoJ29mZicsICgpID0+IGJ0blBhZ2VVcC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xyXG5cdFx0YnRuUGFnZVVwLmFkZEV2ZW50TGlzdGVuZXIoJ29uJywgKCkgPT4gYnRuUGFnZVVwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XHJcblxyXG5cdFx0Ly8gY2xpY2tcclxuXHJcblx0XHRidG5QYWdlVXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkb2N1bWVudC5ib2R5LnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIn0pKTtcclxuXHJcblx0XHQvLyBzY3JvbGxcclxuXHJcblx0XHRsZXQgcmVzaXplVGltZW91dCA9IG51bGw7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoIGJ0blBhZ2VVcC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSA9PT0gZmFsc2UgJiYgcmVzaXplVGltZW91dCA9PT0gbnVsbCApIHtcclxuXHJcblx0XHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0cmVzaXplVGltZW91dCA9IG51bGw7XHJcblxyXG5cdFx0XHRcdFx0XHRidG5QYWdlVXAuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtaGlkZGVuJywgd2luZG93LnBhZ2VZT2Zmc2V0IDwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XHJcblxyXG5cdFx0XHRcdFx0fSwgMTAwKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKCk7Iiwid2luZG93LnNlbGVjdHMgPSBzZWxlY3QgPT4ge1xyXG5cclxuXHRpZihzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fbGlzdCcpKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5cdHZhbHVlLmNsYXNzTmFtZSA9ICdzZWxlY3RfX3ZhbHVlJztcclxuXHR2YWx1ZS5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJzZWxlY3RfX3ZhbHVlLWlubmVyXCI+PC9zcGFuPic7XHJcblxyXG5cdHZhbHVlLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJzxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTIgMTQuNUwxNiAxMEg4TDEyIDE0LjVaXCIvPjwvc3ZnPicpO1xyXG5cclxuXHRzZWxlY3QuYXBwZW5kQ2hpbGQodmFsdWUpO1xyXG5cclxuXHRjb25zdCBmb3JtID0gc2VsZWN0LmNsb3Nlc3QoJ2Zvcm0nKSxcclxuXHRcdGNvbnRyb2wgPSBzZWxlY3QucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksXHJcblx0XHRvcHRpb24gPSBzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyksXHJcblx0XHR2YWx1ZVRleHQgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fdmFsdWUtaW5uZXInKSxcclxuXHRcdGZpbHRlciA9IHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdC0tZmlsdGVyJyksXHJcblx0XHRsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5cdGxpc3QuY2xhc3NOYW1lID0gJ3NlbGVjdF9fbGlzdCc7XHJcblxyXG5cdGxldCBzZWxlY3RlZCA9IGNvbnRyb2wucXVlcnlTZWxlY3RvcignW3ZhbHVlPVwiJyArIGNvbnRyb2wudmFsdWUgKyAnXCJdJyk7XHJcblxyXG5cdGNvbnN0IHZhbHVlRGVmYXVsdCA9IHNlbGVjdGVkLnRleHRDb250ZW50O1xyXG5cclxuXHRpZiggY29udHJvbC5kaXNhYmxlZCB8fCBjb250cm9sLnZhbHVlID09PSAnbm9uZScgfHwgY29udHJvbC52YWx1ZSA9PT0gJycgKXtcclxuXHJcblx0XHRzZWxlY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LS1kZWZhdWx0Jyk7XHJcblxyXG5cdH1cclxuXHJcblx0aWYgKCBjb250cm9sLnZhbHVlICE9PSAnJyApIHtcclxuXHJcblx0XHR2YWx1ZVRleHQudGV4dENvbnRlbnQgPSBzZWxlY3QucXVlcnlTZWxlY3Rvcignb3B0aW9uW3ZhbHVlPVwiJyArIGNvbnRyb2wudmFsdWUgKyAnXCJdJykudGV4dENvbnRlbnQ7XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShvcHRpb24sIGVsID0+IHtcclxuXHJcblx0XHRpZiAoIGVsLmRpc2FibGVkIHx8IGVsLnZhbHVlID09PSAnbm9uZScgfHwgZWwudmFsdWUgPT09ICcnICkge1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpLFxyXG5cdFx0XHQgIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxyXG5cdFx0XHQgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcblx0XHRidG4uY2xhc3NOYW1lID0gJ3NlbGVjdF9fbGlzdC1pdGVtJztcclxuXHJcblx0XHRpbnB1dC50eXBlID0gJ3JhZGlvJztcclxuXHRcdGlucHV0Lm5hbWUgPSBjb250cm9sLm5hbWU7XHJcblx0XHRpbnB1dC52YWx1ZSA9IGVsLnZhbHVlO1xyXG5cclxuXHRcdGxhYmVsLnRleHRDb250ZW50ID0gZWwudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0aWYgKCBjb250cm9sLnZhbHVlID09PSBlbC52YWx1ZSApIHtcclxuXHJcblx0XHRcdGlucHV0LmNoZWNrZWQgPSB0cnVlO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGNvbnRyb2wucmVxdWlyZWQgKSB7XHJcblxyXG5cdFx0XHRpbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdHZhbHVlVGV4dC50ZXh0Q29udGVudCA9IGVsLnRleHRDb250ZW50O1xyXG5cdFx0XHRzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0LS1vcGVuJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0YnRuLmFwcGVuZENoaWxkKGlucHV0KTtcclxuXHRcdGJ0bi5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblx0XHRsaXN0LmFwcGVuZENoaWxkKGJ0bik7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRzZWxlY3QuYXBwZW5kQ2hpbGQobGlzdCk7XHJcblxyXG5cdC8vINCy0L7Qt9Cy0YDQsNGCINCyINC00LXRhNC+0LvRgtC90L7QtSDRgdC+0YHRgtC+0Y/QvdC40LUsINC/0YDQuCDRgNC10LfQtdGCINGE0L7RgNC80YtcclxuXHJcblx0Zm9ybSAmJiBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNldFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC0tZGVmYXVsdCcpO1xyXG5cdFx0dmFsdWVUZXh0LnRleHRDb250ZW50ID0gdmFsdWVEZWZhdWx0O1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8g0L3QtSDQv9GA0LXQtNGD0YHQvNCw0YLRgNC40LLQsNC10Lwg0LIg0LzQvtCx0LjQu9C1INGB0LjRgdGC0LXQvNC90YvQuSDQutC+0L3RgtGA0L7Qu1xyXG5cdGNvbnRyb2wucmVtb3ZlKCk7XHJcblxyXG59O1xyXG5cclxuKCAoKSA9PiB7XHJcblxyXG5cdHdpbmRvdy5zZWxlY3RzQ29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QnKTtcclxuXHJcblx0aWYod2luZG93LnNlbGVjdHNDb2xsZWN0aW9uLmxlbmd0aCkge1xyXG5cclxuXHRcdEFycmF5LmZyb20od2luZG93LnNlbGVjdHNDb2xsZWN0aW9uLCBzZWxlY3QgPT4gd2luZG93LnNlbGVjdHMoc2VsZWN0KSk7XHJcblxyXG5cdH1cclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaXNTZWxlY3QgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNlbGVjdCcpO1xyXG5cclxuXHRcdEFycmF5LmZyb20od2luZG93LnNlbGVjdHNDb2xsZWN0aW9uLCBzZWxlY3QgPT4ge1xyXG5cclxuXHRcdFx0c2VsZWN0LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdC0tb3BlbicsIHNlbGVjdCA9PT0gaXNTZWxlY3QgJiYgaXNTZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3QtLW9wZW4nKSA9PT0gZmFsc2UpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKCk7IiwiKCBpdGVtcyA9PiB7XHJcblxyXG5cdGlmKCFpdGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShpdGVtcywgZWwgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGZvcm0gPSBlbC5xdWVyeVNlbGVjdG9yKCcudGFiLWZpbHRlcl9fZm9ybScpLFxyXG5cdFx0XHQgIGl0ZW1zID0gZWwucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1maWx0ZXJfX2l0ZW0nKTtcclxuXHJcblx0XHRpZiAoIGZvcm0gKSB7XHJcblxyXG5cdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zdCBmaWx0ZXIgPSBmb3JtLmVsZW1lbnRzLmZpbHRlci52YWx1ZTtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShpdGVtcywgaXRlbSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBmaWx0ZXIgPT09ICdhbGwnICkge1xyXG5cclxuXHRcdFx0XHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicpICE9PSBmaWx0ZXIpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1maWx0ZXInKSk7IiwiKCBmb3JtcyA9PiB7XHJcblxyXG5cdGlmKCAhZm9ybXMubGVuZ3RoICkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGZvcm1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0XHQudGhlbihyZXN1bHQgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuXHRcdFx0XHRjb25zdCB0YWJsZSA9IGZvcm0uY2xvc2VzdCgndGFibGUtd29ya2dyb3VwcycpLFxyXG5cdFx0XHRcdFx0ICBpdGVtcyA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZS13b3JrZ3JvdXBzLXVucmVhZC1pdGVtJyk7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oaXRlbXMsIGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCd0YWJsZS13b3JrZ3JvdXBzLXVucmVhZC1pdGVtJykpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlLXdvcmtncm91cHMtcmVhZC1hbGwnKSk7IiwiKCBjaGF0ID0+IHtcclxuXHJcblx0aWYoICFjaGF0ICkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBmb3JtR3JvdXAgPSBjaGF0LnF1ZXJ5U2VsZWN0b3IoJy53b3JrZ3JvdXAtY2hhdC1mb3JtLWdyb3VwJyk7XHJcblxyXG5cdGlmICggZm9ybUdyb3VwICkge1xyXG5cclxuXHRcdC8vINC/0LXRgNC10LrQu9GO0YfQtdC90LjQtVxyXG5cclxuXHRcdGNvbnN0IGJ0bnMgPSBmb3JtR3JvdXAucXVlcnlTZWxlY3RvckFsbCgnLndvcmtncm91cC1jaGF0LWZvcm0tZ3JvdXBfX2J0bicpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oYnRucywgYnRuID0+IHtcclxuXHJcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc3QgaWQgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWl0ZW0nKTtcclxuXHJcblx0XHRcdFx0Zm9ybUdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWNoYXQnLCdpcy1tZXNzYWdlJywnaXMtdXNlcicpO1xyXG5cdFx0XHRcdGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdpcy0nICsgaWQpO1xyXG5cclxuXHRcdFx0XHRpZCA9PT0gJ2NoYXQnID8gZmlsdGVyUmVzZXQoKSA6IGZpbHRlckZvY3VzKCk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyDQvtGC0L/RgNCw0LLQutCwINGB0L7QvtCx0YnQtdC90LjQuVxyXG5cclxuXHRcdGNvbnN0IGZvcm0gPSBmb3JtR3JvdXAucXVlcnlTZWxlY3RvcignLndvcmtncm91cC1jaGF0LWZvcm0nKSxcclxuXHRcdFx0ICBidG4gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy53b3JrZ3JvdXAtY2hhdC1mb3JtX19zdWJtaXQnKSxcclxuXHRcdFx0ICBpbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLndvcmtncm91cC1jaGF0LWZvcm1fX2lucHV0JyksXHJcblx0XHRcdCAgZmlsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignLndvcmtncm91cC1jaGF0LWZvcm1fX2J0bi1maWxlJyksXHJcblx0XHRcdCAgcmVwbHkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy53b3JrZ3JvdXAtY2hhdC1mb3JtX19yZXBseScpLFxyXG5cdFx0XHQgIHJlcGx5QnRuID0gcmVwbHkucXVlcnlTZWxlY3RvcignLndvcmtncm91cC1jaGF0LWZvcm1fX3JlcGx5LXJlbW92ZScpLFxyXG5cdFx0XHQgIG1vZGFsRm9ybVJlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3b3JrZ3JvdXAtaXRlbS1jaGF0LXJlbW92ZS1wb3N0Jyk7XHJcblx0XHRcdCAgbGlzdCA9IGNoYXQucXVlcnlTZWxlY3RvcignLndvcmtncm91cC1jaGF0X19saXN0Jyk7XHJcblxyXG5cdFx0Y29uc3Qgc2VuZCA9ICgpPT4ge1xyXG5hbGVydCgn0LIg0L7RgtCy0LXRgtC1INC20LTRg9C8IGh0bWwgLndvcmtncm91cC1jaGF0X19pdGVtJyk7XHJcbnJldHVybjtcclxuXHRcdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1sb2FkaW5nJyk7XHJcblx0XHRcdGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG5cdFx0XHQudGhlbihyZXN1bHQgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKTtcclxuXHRcdFx0XHRidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0bGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCByZXN1bHQpO1xyXG5cclxuXHRcdFx0XHQvLyByZXNldCByZXBseVxyXG5cclxuXHRcdFx0XHRyZXBseS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdFx0Zm9ybS5lbGVtZW50cy5yZXBseS52YWx1ZSA9ICcnO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGlmICggaW5wdXQudmFsdWUubGVuZ3RoICE9PSAwICkge1xyXG5cclxuXHRcdFx0XHRzZW5kKCk7XHJcblx0XHRcdFx0aW5wdXQudmFsdWUgPSAnJztcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyDRg9C00LDQu9C40YLRjCDRhtC40YLQsNGC0YNcclxuXHJcblx0XHRyZXBseUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdHJlcGx5LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0Zm9ybS5lbGVtZW50cy5yZXBseS52YWx1ZSA9ICcnO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vINC30LDQs9GA0YPQt9C40YLRjCDRhNCw0LnQuywg0L7RgtC60YDRi9Cy0LDQtdC8INC80L7QtNCw0LvQutGDXHJcblxyXG5cdFx0ZmlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHNlbGVjdG9yID0gJ3dvcmtncm91cC1pdGVtLWNoYXQtaW5wdXQtZmlsZSc7XHJcblxyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHNlbGVjdG9yKS5hY3Rpb24gPSBmb3JtLmFjdGlvbjtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBzZWxlY3RvcikuZWxlbWVudHMucmVwbHkudmFsdWUgPSBmb3JtLmVsZW1lbnRzLnJlcGx5LnZhbHVlO1xyXG5cclxuXHRcdFx0Y29uc3QgZXZlbnRNb2RhbFNob3cgPSBuZXcgQ3VzdG9tRXZlbnQoXCJtb2RhbFNob3dcIiwge1xyXG5cdFx0XHRcdGRldGFpbDoge1xyXG5cdFx0XHRcdFx0c2VsZWN0b3JcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0d2luZG93Lm1vZGFsLmRpc3BhdGNoRXZlbnQoZXZlbnRNb2RhbFNob3cpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vINGD0LTQsNC70LXQvdC40LUg0Lgg0L7RgtCy0LXRgiDQvdCwINGB0L7QvtCx0YnQtdC90LjQtVxyXG5cclxuXHRcdGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBidG5FdmVudCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcud29ya2dyb3VwLWNoYXRfX2l0ZW0tYnRuJyk7XHJcblxyXG5cdFx0XHRpZiAoIGJ0bkV2ZW50ICkge1xyXG5cclxuXHRcdFx0XHRjb25zdCBwb3N0ID0gYnRuRXZlbnQuY2xvc2VzdCgnLndvcmtncm91cC1jaGF0X19pdGVtJyksXHJcblx0XHRcdFx0XHQgIGlkID0gcG9zdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQtcG9zdCcpO1xyXG5cclxuXHRcdFx0XHRpZiAoIGJ0bkV2ZW50LmNsYXNzTGlzdC5jb250YWlucygnaXMtcmVwbHknKSApIHtcclxuXHJcblx0XHRcdFx0XHRyZXBseS5xdWVyeVNlbGVjdG9yKCcud29ya2dyb3VwLWNoYXQtZm9ybV9fcmVwbHktbmFtZScpLnRleHRDb250ZW50ID0gcG9zdC5xdWVyeVNlbGVjdG9yKCcud29ya2dyb3VwLWNoYXQtaXRlbV9fbmFtZS12YWx1ZScpLnRleHRDb250ZW50O1xyXG5cdFx0XHRcdFx0cmVwbHkucXVlcnlTZWxlY3RvcignLndvcmtncm91cC1jaGF0LWZvcm1fX3JlcGx5LXRleHQnKS50ZXh0Q29udGVudCA9IHBvc3QucXVlcnlTZWxlY3RvcignLndvcmtncm91cC1jaGF0LWl0ZW1fX3RleHQtdmFsdWUnKS50ZXh0Q29udGVudDtcclxuXHRcdFx0XHRcdHJlcGx5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRmb3JtLmVsZW1lbnRzLnJlcGx5LnZhbHVlID0gaWQ7XHJcblx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9ICcnO1xyXG5cdFx0XHRcdFx0aW5wdXQuZm9jdXMoKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIGJ0bkV2ZW50LmNsYXNzTGlzdC5jb250YWlucygnaXMtcmVtb3ZlJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0bW9kYWxGb3JtUmVtb3ZlLmVsZW1lbnRzLmlkLnZhbHVlID0gaWQ7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgZXZlbnRNb2RhbFNob3cgPSBuZXcgQ3VzdG9tRXZlbnQoXCJtb2RhbFNob3dcIiwge1xyXG5cdFx0XHRcdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRcdFx0XHRzZWxlY3RvcjogJ3dvcmtncm91cC1pdGVtLWNoYXQtcmVtb3ZlLXBvc3QnXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdHdpbmRvdy5tb2RhbC5kaXNwYXRjaEV2ZW50KGV2ZW50TW9kYWxTaG93KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vINGD0LTQsNC70LXQvdC40LUg0LjQtyDRh9Cw0YLQsFxyXG5cclxuXHRcdG1vZGFsRm9ybVJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0bW9kYWxGb3JtUmVtb3ZlLnF1ZXJ5U2VsZWN0b3IoJy5pcy1zdWJtaXQnKS5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRmZXRjaChtb2RhbEZvcm1SZW1vdmUuZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShtb2RhbEZvcm1SZW1vdmUpXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcblx0XHRcdFx0bW9kYWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJoaWRlXCIpKTtcclxuXHRcdFx0XHRtb2RhbEZvcm1SZW1vdmUucXVlcnlTZWxlY3RvcignLmlzLXN1Ym1pdCcpLmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRcdFx0bGlzdC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pZC1wb3N0PVwiJyArIHJlc3VsdC5pZCArICdcIl0nKS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFx0aWYocmVzdWx0Lm5vdGlmaWNhdGlvbikge1xyXG5cclxuXHRcdFx0XHRcdG5vdGlmaWNhdGlvbiguLi5yZXN1bHQubm90aWZpY2F0aW9uKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8g0YTQuNC70YzRgtGAINGH0LDRgtCwXHJcblxyXG5cdFx0Y29uc3QgZmlsdGVyID0gZm9ybUdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy53b3JrZ3JvdXAtY2hhdC1maWx0ZXInKTtcclxuXHJcblx0XHRjb25zdCBmaWx0ZXJSZXNldCA9ICgpPT4ge1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coJ3Jlc2V0Jyk7XHJcblx0XHRcdGZpbHRlci5jbGFzc0xpc3QuYWRkKCdpcy1lbXB0eScpO1xyXG5cdFx0XHRmaWx0ZXJGb2N1cygpO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShjaGF0LnF1ZXJ5U2VsZWN0b3JBbGwoJy53b3JrZ3JvdXAtY2hhdC1pdGVtX19maWx0ZXItaXRlbScpLCBpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcclxuXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGZpbHRlckZvY3VzID0gKCk9PiB7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGZpbHRlci5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQnKSwgaW5wdXQgPT4ge1xyXG5cclxuXHRcdFx0aWYgKCBpbnB1dC5vZmZzZXRQYXJlbnQgIT09IG51bGwgKVxyXG5cclxuXHRcdFx0XHRpbnB1dC5mb2N1cygpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fTtcclxuXHJcblx0XHRmaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRmaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCBmaWx0ZXJSZXNldCk7XHJcblxyXG5cdFx0ZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG5cdFx0XHRmaWx0ZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZW1wdHknLCB2YWx1ZS5sZW5ndGggPT09IDApO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShjaGF0LnF1ZXJ5U2VsZWN0b3JBbGwoJy53b3JrZ3JvdXAtY2hhdC1pdGVtX19maWx0ZXItJyArIGV2ZW50LnRhcmdldC5uYW1lKSwgaXRlbSA9PiB7XHJcblxyXG5cdFx0XHRcdGl0ZW0uY2xvc2VzdCgnLndvcmtncm91cC1jaGF0LWl0ZW1fX2ZpbHRlci1pdGVtJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIGl0ZW0udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlLnRvTG93ZXJDYXNlKCkpID09PSAtMSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHQvLyBtb2RhbCBmaWxlXHJcblxyXG5cdGNvbnN0IGZvcm1Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jaGF0LWlucHV0LWZpbGUnKTtcclxuXHJcblx0aWYgKCBmb3JtTW9kYWwgKSB7XHJcblxyXG5cdFx0Y29uc3QgYnRuID0gZm9ybU1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jaGF0LWlucHV0LWZpbGVfX3N1Ym1pdCcpLFxyXG5cdFx0XHQgIGZpbGUgPSBmb3JtTW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsLWNoYXQtaW5wdXQtZmlsZV9faW5wdXQnKTtcclxuXHJcblx0XHRmb3JtTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0YnRuLmRpc2FibGVkID0gZmlsZS52YWx1ZS5sZW5ndGggPT09IDA7XHJcblxyXG5cdFx0XHRpZiAoIGV2ZW50LnRhcmdldCA9PT0gZmlsZSApIHtcclxuXHJcblx0XHRcdFx0Zm9ybU1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jaGF0LWlucHV0LWZpbGVfX3ZhbHVlJykudGV4dENvbnRlbnQgPSBmaWxlLnZhbHVlO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29ya2dyb3VwLWNoYXQnKSk7IiwiKCBpdGVtID0+IHtcclxuXHJcblx0aWYoICFpdGVtICkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHQvLyDQktGL0LnRgtC4INC40Lcg0YDQsNCx0L7Rh9C10Lkg0LPRgNGD0L/Qv9GLXHJcblxyXG5cdGNvbnN0IGJ0bkV4aXQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy53b3JrZ3JvdXAtaXRlbS1hY3Rpb25fX2V4aXQnKTtcclxuXHJcblx0aWYgKCBidG5FeGl0ICkge1xyXG5cclxuXHRcdGJ0bkV4aXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLXdvcmtncm91cC1pdGVtLWV4aXQnKS5lbGVtZW50cy5pZC52YWx1ZSA9IGJ0bkV4aXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblxyXG5cdFx0XHRjb25zdCBldmVudE1vZGFsU2hvdyA9IG5ldyBDdXN0b21FdmVudChcIm1vZGFsU2hvd1wiLCB7XHJcblx0XHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0XHRzZWxlY3RvcjogXCJ3b3JrZ3JvdXAtaXRlbS1leGl0XCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0d2luZG93Lm1vZGFsLmRpc3BhdGNoRXZlbnQoZXZlbnRNb2RhbFNob3cpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29ya2dyb3VwLWl0ZW0nKSk7IiwiKCBpdGVtID0+IHtcclxuXHJcblx0aWYoICFpdGVtICkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBmb3JtTGFuZyA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLndvcmtncm91cC1pdGVtLXN0YWdlLWxhbmcnKTtcclxuXHJcblx0aWYgKCBmb3JtTGFuZyApIHtcclxuXHJcblx0XHRmb3JtTGFuZy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGZvcm1MYW5nLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWxhbmddJyksIGVsID0+IHtcclxuXHJcblx0XHRcdFx0ZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1sYW5nJykgIT09IGZvcm1MYW5nLmVsZW1lbnRzLmxhbmcudmFsdWUpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0Ly8gdm90ZVxyXG5cclxuXHRjb25zdCBzdGFnZVZvdGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy53b3JrZ3JvdXAtaXRlbS1zdGFnZS12b3RlJyk7XHJcblxyXG5cdGlmICggc3RhZ2VWb3RlICkge1xyXG5cclxuXHRcdGNvbnN0IGZvcm0gPSBzdGFnZVZvdGUucXVlcnlTZWxlY3RvcignLndvcmtncm91cC1pdGVtLXN0YWdlLXZvdGVfX2Zvcm0nKSxcclxuXHRcdFx0ICBjYW5jZWwgPSBzdGFnZVZvdGUucXVlcnlTZWxlY3RvckFsbCgnLndvcmtncm91cC1pdGVtLXN0YWdlLXZvdGVfX2NhbmNlbCcpO1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0XHQudGhlbihyZXN1bHQgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKTtcclxuXHRcdFx0XHRmb3JtLnJlc2V0KCk7XHJcblxyXG5cdFx0XHRcdGlmICggcmVzdWx0LnZvdGUgPT09IFwiMVwiICkge1xyXG5cclxuXHRcdFx0XHRcdG5vdGlmaWNhdGlvbiguLi5yZXN1bHQubm90aWZpY2F0aW9uKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBldmVudE1vZGFsU2hvdyA9IG5ldyBDdXN0b21FdmVudChcIm1vZGFsU2hvd1wiLCB7XHJcblx0XHRcdFx0XHRcdGRldGFpbDoge1xyXG5cdFx0XHRcdFx0XHRcdHNlbGVjdG9yOiBcIndvcmtncm91cC1pdGVtLXN0YWdlLXZvdGVcIlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR3aW5kb3cubW9kYWwuZGlzcGF0Y2hFdmVudChldmVudE1vZGFsU2hvdyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdEFycmF5LmZyb20oY2FuY2VsLCBmb3JtQ2FuY2VsID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGJ0biA9IGZvcm1DYW5jZWwucXVlcnlTZWxlY3RvcignLndvcmtncm91cC1pdGVtLXN0YWdlLXZvdGVfX2NhbmNlbC1idG4nKTtcclxuXHJcblx0XHRcdGZvcm1DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRidG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRmZXRjaChmb3JtQ2FuY2VsLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm1DYW5jZWwpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcblx0XHRcdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHJcblx0XHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdGZvcm1DYW5jZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0Ly8gZm9ybSBtb2RhbC1zdGFnZS12b3RlXHJcblxyXG5cdGNvbnN0IGZvcm1BZ2FpbnN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dvcmtncm91cC1pdGVtLXN0YWdlLXZvdGUtYWdhaW5zdCcpO1xyXG5cclxuXHRpZiAoIGZvcm1BZ2FpbnN0ICkge1xyXG5cclxuXHRcdGNvbnN0IGJ0biA9IGZvcm1BZ2FpbnN0LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1zdGFnZS12b3RlX19zdWJtaXQnKSxcclxuXHRcdFx0ICBmaWxlID0gZm9ybUFnYWluc3QucXVlcnlTZWxlY3RvcignLm1vZGFsLXN0YWdlLXZvdGVfX2lucHV0LWZpbGUtaW5wdXQnKTtcclxuXHJcblx0XHRmb3JtQWdhaW5zdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0aWYgKCBmaWxlLnZhbHVlLmxlbmd0aCA9PT0gMCApIHtcclxuXHJcblx0XHRcdFx0bm90aWZpY2F0aW9uKC4uLmZvcm1BZ2FpbnN0LmdldEF0dHJpYnV0ZSgnZGF0YS1yZXF1aXJlZCcpLnNwbGl0KCd8JyksIDk5KTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0Zm9ybUFnYWluc3QuY2xhc3NMaXN0LmFkZCgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdFx0XHRmZXRjaChmb3JtQWdhaW5zdC5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtQWdhaW5zdClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdFx0XHQudGhlbihyZXN1bHQgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG5cdFx0XHRcdFx0bW9kYWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJoaWRlXCIpKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Zm9ybUFnYWluc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0YnRuLmRpc2FibGVkID0gZmlsZS52YWx1ZS5sZW5ndGggPT09IDA7XHJcblxyXG5cdFx0XHRpZiAoIGV2ZW50LnRhcmdldCA9PT0gZmlsZSApIHtcclxuXHJcblx0XHRcdFx0Zm9ybUFnYWluc3QucXVlcnlTZWxlY3RvcignLm1vZGFsLXN0YWdlLXZvdGVfX2lucHV0LWZpbGUtdGV4dCcpLnRleHRDb250ZW50ID0gZmlsZS52YWx1ZTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmtncm91cC1pdGVtLXN0YWdlJykpOyIsIiggYnRucyA9PiB7XHJcblxyXG5cdGlmKCBidG5zLmxlbmd0aCA9PT0gMCApIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0aWYgKCBDb29raWVzLmdldCgnbGFuZycpID09PSAnZW4nICkge1xyXG5cclxuXHRcdGNvbnN0IHl0V2lkZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR5dFdpZGdldC5pZCA9ICd5dFdpZGdldCc7XHJcblx0XHR5dFdpZGdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoeXRXaWRnZXQpO1xyXG5cclxuXHRcdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cdFx0c2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly90cmFuc2xhdGUueWFuZGV4Lm5ldC93ZWJzaXRlLXdpZGdldC92MS93aWRnZXQuanM/d2lkZ2V0SWQ9eXRXaWRnZXQmcGFnZUxhbmc9cnUmd2lkZ2V0VGhlbWU9bGlnaHQmYXV0b01vZGU9ZmFsc2VcIjtcclxuXHJcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShidG5zLCBlbCA9PiB7XHJcblxyXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgneXQtd2lkZ2V0JywgSlNPTi5zdHJpbmdpZnkoe1xyXG5cdFx0XHRcdFwibGFuZ1wiOiBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGFuZycpLFxyXG5cdFx0XHRcdFwiYWN0aXZlXCI6IHRydWVcclxuXHRcdFx0fSkpO1xyXG5cclxuXHRcdFx0Q29va2llcy5zZXQoJ2xhbmcnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGFuZycpKTtcclxuXHJcblx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX2xhbmctYnRuJykpOyJdfQ==
