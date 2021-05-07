/*! js-cookie v3.0.0-rc.1 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies,r=e.Cookies=t();r.noConflict=function(){return e.Cookies=n,r}}())}(this,function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var t={read:function(e){return e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};return function n(r,o){function i(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),n=r.write(n,t);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n+c}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],o={},i=0;i<n.length;i++){var c=n[i].split("="),u=c.slice(1).join("=");'"'===u[0]&&(u=u.slice(1,-1));try{var f=t.read(c[0]);if(o[f]=r.read(u,f),e===f)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){i(t,"",e({},n,{expires:-1}))},withAttributes:function(t){return n(this.converter,e({},this.attributes,t))},withConverter:function(t){return n(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(r)}})}(t,{path:"/"})});

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
( dropdowns => {

	if(!dropdowns.length) {

		return;

	}

// склонение
	const declension = (num, expressions) => {

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
					btn.textContent = countChecked + ' ' + declension(countChecked, expressions);

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
( dropdowns => {

	if(!dropdowns.length) {

		return;

	}

	window.addEventListener("click", event => {

		const isDropdown = event.target.closest('.dropdown-toggle');

		Array.from(dropdowns, el => el.classList.toggle('dropdown-toggle--open', el === isDropdown && isDropdown.classList.contains('dropdown-toggle--open') === false));

	});

})(document.querySelectorAll('.dropdown-toggle'));
( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, form => {

		const btn = form.querySelector('.filter__submit');

		form.addEventListener('reset', () => btn.disabled = true);
		form.addEventListener('change', () => btn.disabled = false);

		form.addEventListener('submit', event => {

			event.preventDefault();

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.html())
			.then(result => {

				console.log(result);

			});

		});

	});

})(document.querySelectorAll('.filter'));
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

			});

		});

	});

})(document.querySelectorAll('.form'));
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
	script.src = '/js/inputmask.min.js';
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

			modal.dispatchEvent(new CustomEvent("hide"));

		}

	});

	Array.from(btns, btn =>
		btn.addEventListener('click', () =>
			modalShow(btn.getAttribute('data-modal'))));

	modal.addEventListener('modalShow', event => modalShow(event.detail.selector));

	modal.ok = (title,text) => {

		modal.querySelector('.modal__item--ok .modal-mini__title').innerHTML = title ? title : '';
		modal.querySelector('.modal__item--ok .modal-mini__text').innerHTML = text ? text : '';
		modalShow('ok');

	}

})(document.querySelector('.modal'));
( elems => {

	if(!elems.length) {

		return;

	}


})(document.querySelectorAll('.plan-load'));
( img => {

	if(img) {

		const big = img.querySelectorAll('.product__images-big-item');

		img.addEventListener('click', event => {

			if(event.target.closest('.product-vertical__link')) {

				event.preventDefault();

				if(!event.target.closest('.swiper-container-style')){

					const item = event.target.closest('.product-vertical__item');

					Array.from(img.querySelectorAll('.product-vertical__item'), (el,index) => {

						el.classList.toggle('is-current', item === el);
						big[index].classList.toggle('hide', item !== el);

					});

				}

			}

		});

	}

})(document.querySelector('.product__images'));
( forms => {

	if(!forms.length) {

		return;

	}

	Array.from(forms, elem => {

		const form = elem.querySelector('.search-menu__form'),
			  input = form.querySelector('.input');

		input.addEventListener('focus', () => elem.classList.add('is-form-only'));

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

		});

	};

	// load
	const script = document.createElement('script');
	script.src = '/js/nouislider.min.js';
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
			  productVertical = swipe.classList.contains('swiper-container--product-vertical');

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
		swipe.appendChild(swipeControls);

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

		if (productVertical) {

			toggleSwipe = () => {

				let initialSlide = 0;

				Array.from(items, (el,index) => {

					if(el.classList.contains('is-current')) {

						initialSlide = index;

					}

				});

				toggleSwipe = false;
				swipe.parentNode.classList.add('swiper-container-style');

				const box = swipe.closest('.product__images'),
					  big = box.querySelectorAll('.product__images-big-item');

				mySwipe = new Swiper(swipe, {
					loop: true,
					slideActiveClass: 'is-current',
					direction: 'vertical',
					slidesPerView : 3,
					slideToClickedSlide: true,
					initialSlide: initialSlide,
					navigation: {
						nextEl: swipeNext,
						prevEl: swipePrev
					},
					on: {
						slideChange : () => {

							Array.from(big, (img,index) => img.classList.toggle('hide', swipe.swiper.realIndex !== index));

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

			// eager
			Array.from(swipe.querySelectorAll('[loading="lazy"]'), img => img.setAttribute('loading','eager'));

			// hide
			Array.from(items, el => el.classList.remove('hide'));

			toggleSwipe();

		});

	});

	const script = document.createElement('script');

	script.src = '/js/swiper.min.js';

	script.onload = () => PubSub.publish('swiperJsLoad');

	setTimeout( () => document.head.appendChild(script), Cookies.get('fastLoadScript') ? 0 : 10000);

})(document.querySelectorAll('.swiper-container'));
( tabs => {

	if(!tabs.length) {

		return;

	}

	// проверяем hash
	const hash = location.hash;

	const btnHash = (btns,items) => {

		Array.from(btns, (_btn, index) => setActive(_btn, items[index], _btn.href === location.href));

	};

	const setActive = (btn, item, toggle) => {

		btn.classList.toggle('is-active', toggle);
		item.classList.toggle('is-active', toggle);

	}

	Array.from(tabs, tab => {

		const btns = tab.querySelectorAll('.tabs__btn'),
			  items = tab.querySelectorAll('.tabs__item'),
			  nav = document.createElement('div');


		if(tab.classList.contains('tabs--nav')) {

			Array.from(btns, btn => {

				btn.setAttribute('role','button');

				nav.appendChild(btn);

			});

			nav.classList.add('tabs__nav');
			tab.insertBefore(nav, items[0]);

			setActive(btns[0], items[0], true);

		}

		Array.from(btns, btn => {

			btn.addEventListener('click', event =>
				Array.from(btns, (_btn, index) =>
					setActive(_btn, items[index], _btn === btn)))

		});

		if(hash) {

			btnHash(btns,items);

		}

		window.addEventListener('hashchange', () => btnHash(btns,items));

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
/*
			const t = mutationRecords[0].target,
				  rect = t.getBoundingClientRect();

			console.log(rect.left > window.innerWidth - rect.right);

			if(t.open) {

				const inner = t.querySelector('.ask__inner');

				if(rect.left > window.innerWidth - rect.right) {

					// правее

					inner.style.left = 'auto';
					inner.style.right = 0;
					inner.style.width = rect.left + 'px';

				}
				else {

					// левее

					inner.style.right = 'auto';
					inner.style.left = 0;
					inner.style.width = window.innerWidth - rect.right + 'px';

				}

			}

*/
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzLmNvb2tpZS5taW4uanMiLCJwdWJzdWIubWluLmpzIiwianMuanMiLCJhY2NvcmRpb24uanMiLCJjaGVja2JveC1kcm9wZG93bi5qcyIsImRyb3Bkb3duLXRvZ2dsZS5qcyIsImZpbHRlci5qcyIsImZvcm0uanMiLCJsaXZlLXNlYXJjaC5qcyIsIm1hc2suanMiLCJtb2RhbC5qcyIsInBsYW4tbG9hZC5qcyIsInByb2R1Y3QuanMiLCJzZWFyY2gtbWVudS5qcyIsInNlbGVjdC5qcyIsInNsaWRlci5qcyIsInN3aXBlci5qcyIsInRhYnMuanMiLCJ0b29sdGlwLmpzIiwiY2lyY2xlLXByb2dyZXNzLmpzIiwibGluZS1wcm9ncmVzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEganMtY29va2llIHYzLjAuMC1yYy4xIHwgTUlUICovXG4hZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1lfHxzZWxmLGZ1bmN0aW9uKCl7dmFyIG49ZS5Db29raWVzLHI9ZS5Db29raWVzPXQoKTtyLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gZS5Db29raWVzPW4scn19KCkpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciByIGluIG4pZVtyXT1uW3JdfXJldHVybiBlfXZhciB0PXtyZWFkOmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoLyglW1xcZEEtRl17Mn0pKy9naSxkZWNvZGVVUklDb21wb25lbnQpfSx3cml0ZTpmdW5jdGlvbihlKXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGUpLnJlcGxhY2UoLyUoMlszNDZCRl18M1tBQy1GXXw0MHw1W0JERV18NjB8N1tCQ0RdKS9nLGRlY29kZVVSSUNvbXBvbmVudCl9fTtyZXR1cm4gZnVuY3Rpb24gbihyLG8pe2Z1bmN0aW9uIGkodCxuLGkpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCl7XCJudW1iZXJcIj09dHlwZW9mKGk9ZSh7fSxvLGkpKS5leHBpcmVzJiYoaS5leHBpcmVzPW5ldyBEYXRlKERhdGUubm93KCkrODY0ZTUqaS5leHBpcmVzKSksaS5leHBpcmVzJiYoaS5leHBpcmVzPWkuZXhwaXJlcy50b1VUQ1N0cmluZygpKSx0PWVuY29kZVVSSUNvbXBvbmVudCh0KS5yZXBsYWNlKC8lKDJbMzQ2Ql18NUV8NjB8N0MpL2csZGVjb2RlVVJJQ29tcG9uZW50KS5yZXBsYWNlKC9bKCldL2csZXNjYXBlKSxuPXIud3JpdGUobix0KTt2YXIgYz1cIlwiO2Zvcih2YXIgdSBpbiBpKWlbdV0mJihjKz1cIjsgXCIrdSwhMCE9PWlbdV0mJihjKz1cIj1cIitpW3VdLnNwbGl0KFwiO1wiKVswXSkpO3JldHVybiBkb2N1bWVudC5jb29raWU9dCtcIj1cIituK2N9fXJldHVybiBPYmplY3QuY3JlYXRlKHtzZXQ6aSxnZXQ6ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50JiYoIWFyZ3VtZW50cy5sZW5ndGh8fGUpKXtmb3IodmFyIG49ZG9jdW1lbnQuY29va2llP2RvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpOltdLG89e30saT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgYz1uW2ldLnNwbGl0KFwiPVwiKSx1PWMuc2xpY2UoMSkuam9pbihcIj1cIik7J1wiJz09PXVbMF0mJih1PXUuc2xpY2UoMSwtMSkpO3RyeXt2YXIgZj10LnJlYWQoY1swXSk7aWYob1tmXT1yLnJlYWQodSxmKSxlPT09ZilicmVha31jYXRjaChlKXt9fXJldHVybiBlP29bZV06b319LHJlbW92ZTpmdW5jdGlvbih0LG4pe2kodCxcIlwiLGUoe30sbix7ZXhwaXJlczotMX0pKX0sd2l0aEF0dHJpYnV0ZXM6ZnVuY3Rpb24odCl7cmV0dXJuIG4odGhpcy5jb252ZXJ0ZXIsZSh7fSx0aGlzLmF0dHJpYnV0ZXMsdCkpfSx3aXRoQ29udmVydGVyOmZ1bmN0aW9uKHQpe3JldHVybiBuKGUoe30sdGhpcy5jb252ZXJ0ZXIsdCksdGhpcy5hdHRyaWJ1dGVzKX19LHthdHRyaWJ1dGVzOnt2YWx1ZTpPYmplY3QuZnJlZXplKG8pfSxjb252ZXJ0ZXI6e3ZhbHVlOk9iamVjdC5mcmVlemUocil9fSl9KHQse3BhdGg6XCIvXCJ9KX0pO1xuIiwiLyoqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMCwyMDExLDIwMTIsMjAxMywyMDE0IE1vcmdhbiBSb2RlcmljayBodHRwOi8vcm9kZXJpY2suZGtcclxuICogTGljZW5zZTogTUlUIC0gaHR0cDovL21yZ25yZHJjay5taXQtbGljZW5zZS5vcmdcclxuICpcclxuICogaHR0cHM6Ly9naXRodWIuY29tL21yb2Rlcmljay9QdWJTdWJKU1xyXG4gKi9cclxuIWZ1bmN0aW9uKG4sdCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9e307bi5QdWJTdWI9cjt2YXIgZT1uLmRlZmluZTshZnVuY3Rpb24obil7dmFyIHQ9e30scj0tMTtmdW5jdGlvbiBlKG4pe3ZhciB0O2Zvcih0IGluIG4paWYobi5oYXNPd25Qcm9wZXJ0eSh0KSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBvKG4sdCxyKXt0cnl7bih0LHIpfWNhdGNoKG4pe3NldFRpbWVvdXQoZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKCl7dGhyb3cgbn19KG4pLDApfX1mdW5jdGlvbiBpKG4sdCxyKXtuKHQscil9ZnVuY3Rpb24gdShuLHIsZSx1KXt2YXIgZixzPXRbcl0sYz11P2k6bztpZih0Lmhhc093blByb3BlcnR5KHIpKWZvcihmIGluIHMpcy5oYXNPd25Qcm9wZXJ0eShmKSYmYyhzW2ZdLG4sZSl9ZnVuY3Rpb24gZihuLHIsbyxpKXt2YXIgZj1mdW5jdGlvbihuLHQscil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9U3RyaW5nKG4pLG89ZS5sYXN0SW5kZXhPZihcIi5cIik7Zm9yKHUobixuLHQscik7LTEhPT1vOyllPWUuc3Vic3RyKDAsbyksbz1lLmxhc3RJbmRleE9mKFwiLlwiKSx1KG4sZSx0LHIpfX0obj1cInN5bWJvbFwiPT10eXBlb2Ygbj9uLnRvU3RyaW5nKCk6bixyLGkpLHM9ZnVuY3Rpb24obil7dmFyIHI9U3RyaW5nKG4pLG89Qm9vbGVhbih0Lmhhc093blByb3BlcnR5KHIpJiZlKHRbcl0pKSxpPXIubGFzdEluZGV4T2YoXCIuXCIpO2Zvcig7IW8mJi0xIT09aTspcj1yLnN1YnN0cigwLGkpLGk9ci5sYXN0SW5kZXhPZihcIi5cIiksbz1Cb29sZWFuKHQuaGFzT3duUHJvcGVydHkocikmJmUodFtyXSkpO3JldHVybiBvfShuKTtyZXR1cm4hIXMmJighMD09PW8/ZigpOnNldFRpbWVvdXQoZiwwKSwhMCl9bi5wdWJsaXNoPWZ1bmN0aW9uKHQscil7cmV0dXJuIGYodCxyLCExLG4uaW1tZWRpYXRlRXhjZXB0aW9ucyl9LG4ucHVibGlzaFN5bmM9ZnVuY3Rpb24odCxyKXtyZXR1cm4gZih0LHIsITAsbi5pbW1lZGlhdGVFeGNlcHRpb25zKX0sbi5zdWJzY3JpYmU9ZnVuY3Rpb24obixlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXJldHVybiExO249XCJzeW1ib2xcIj09dHlwZW9mIG4/bi50b1N0cmluZygpOm4sdC5oYXNPd25Qcm9wZXJ0eShuKXx8KHRbbl09e30pO3ZhciBvPVwidWlkX1wiK1N0cmluZygrK3IpO3JldHVybiB0W25dW29dPWUsb30sbi5zdWJzY3JpYmVPbmNlPWZ1bmN0aW9uKHQscil7dmFyIGU9bi5zdWJzY3JpYmUodCxmdW5jdGlvbigpe24udW5zdWJzY3JpYmUoZSksci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KTtyZXR1cm4gbn0sbi5jbGVhckFsbFN1YnNjcmlwdGlvbnM9ZnVuY3Rpb24oKXt0PXt9fSxuLmNsZWFyU3Vic2NyaXB0aW9ucz1mdW5jdGlvbihuKXt2YXIgcjtmb3IociBpbiB0KXQuaGFzT3duUHJvcGVydHkocikmJjA9PT1yLmluZGV4T2YobikmJmRlbGV0ZSB0W3JdfSxuLnVuc3Vic2NyaWJlPWZ1bmN0aW9uKHIpe3ZhciBlLG8saSx1PVwic3RyaW5nXCI9PXR5cGVvZiByJiYodC5oYXNPd25Qcm9wZXJ0eShyKXx8ZnVuY3Rpb24obil7dmFyIHI7Zm9yKHIgaW4gdClpZih0Lmhhc093blByb3BlcnR5KHIpJiYwPT09ci5pbmRleE9mKG4pKXJldHVybiEwO3JldHVybiExfShyKSksZj0hdSYmXCJzdHJpbmdcIj09dHlwZW9mIHIscz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByLGM9ITE7aWYoIXUpe2ZvcihlIGluIHQpaWYodC5oYXNPd25Qcm9wZXJ0eShlKSl7aWYobz10W2VdLGYmJm9bcl0pe2RlbGV0ZSBvW3JdLGM9cjticmVha31pZihzKWZvcihpIGluIG8pby5oYXNPd25Qcm9wZXJ0eShpKSYmb1tpXT09PXImJihkZWxldGUgb1tpXSxjPSEwKX1yZXR1cm4gY31uLmNsZWFyU3Vic2NyaXB0aW9ucyhyKX19KHIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUuYW1kP2UoZnVuY3Rpb24oKXtyZXR1cm4gcn0pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiYodm9pZCAwIT09bW9kdWxlJiZtb2R1bGUuZXhwb3J0cyYmKGV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9ciksZXhwb3J0cy5QdWJTdWI9cixtb2R1bGUuZXhwb3J0cz1leHBvcnRzPXIpfShcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3d8fHRoaXMpOyIsIi8qISBVVEYtOFxyXG5cclxuwqkga292cmlnaW5cclxu0JLRgdC1INC/0YDQsNCy0LAg0YDQsNC30YDQtdGI0LXQvdGLXHJcbtC60YDQsNGB0LjQstGL0Lkg0LTQuNC30LDQudC9INC00L7Qu9C20LXQvSDQuNC80LXRgtGMINC60YDQsNGB0LjQstGL0Lkg0LrQvtC0wq5cclxuXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9odG1scGx1c2Nzcy9cclxuXHJcbiovXHJcblxyXG4oICgpID0+IHtcclxuXHJcblx0d2luZG93LklOVEkgPSB7fTtcclxuXHRJTlRJLnJlc2l6ZVRpbWVvdXQgPSBudWxsO1xyXG5cdElOVEkud2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKCFJTlRJLnJlc2l6ZVRpbWVvdXQpIHtcclxuXHJcblx0XHRcdFx0SU5USS5yZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiAge1xyXG5cclxuXHRcdFx0XHRcdElOVEkucmVzaXplVGltZW91dCA9IG51bGw7XHJcblxyXG5cdFx0XHRcdFx0aWYoSU5USS53aW5kb3dXaWR0aE9MZCAhPT0gd2luZG93LmlubmVyV2lkdGgpIHtcclxuXHJcblx0XHRcdFx0XHRcdElOVEkud2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcblx0XHRcdFx0XHRcdFB1YlN1Yi5wdWJsaXNoKCd3aW5kb3dXaWR0aFJlc2l6ZScpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSwgMTAwKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuXHJcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuXHJcblx0XHRcdFB1YlN1Yi5wdWJsaXNoKCd3aW5kb3dTY3JvbGwnKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0UHViU3ViLnB1Ymxpc2goJ0RPTUNvbnRlbnRMb2FkZWQnKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0UHViU3ViLnB1Ymxpc2goJ3BhZ2VMb2FkJyk7XHJcblxyXG5cdFx0Q29va2llcy5zZXQoJ2Zhc3RMb2FkU2NyaXB0JywgdHJ1ZSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQsNC90LjQvNCw0YbQuNC5XHJcblx0SU5USS5jc3NBbmltYXRpb24gPSBhPT57bGV0IGIsYyxkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjc3NhbmltYXRpb25cIik7c3dpdGNoKGEpe2Nhc2UnYW5pbWF0aW9uJzpiPXtcImFuaW1hdGlvblwiOlwiYW5pbWF0aW9uZW5kXCIsXCJPQW5pbWF0aW9uXCI6XCJvQW5pbWF0aW9uRW5kXCIsXCJNb3pBbmltYXRpb25cIjpcImFuaW1hdGlvbmVuZFwiLFwiV2Via2l0QW5pbWF0aW9uXCI6XCJ3ZWJraXRBbmltYXRpb25FbmRcIn07YnJlYWs7Y2FzZSd0cmFuc2l0aW9uJzpiPXtcInRyYW5zaXRpb25cIjpcInRyYW5zaXRpb25lbmRcIixcIk9UcmFuc2l0aW9uXCI6XCJvVHJhbnNpdGlvbkVuZFwiLFwiTW96VHJhbnNpdGlvblwiOlwidHJhbnNpdGlvbmVuZFwiLFwiV2Via2l0VHJhbnNpdGlvblwiOlwid2Via2l0VHJhbnNpdGlvbkVuZFwifX1mb3IoYyBpbiBiKWlmKGQuc3R5bGVbY10hPT11bmRlZmluZWQpcmV0dXJuIGJbY119XHJcblxyXG5cdC8vIERldGVybWluZSBpZiBhbiBlbGVtZW50IGlzIGluIHRoZSB2aXNpYmxlIHZpZXdwb3J0XHJcblx0SU5USS5pc0luVmlld3BvcnQgPSBlbCA9PiB7XHJcblx0XHRjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRyZXR1cm4gKHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHR9XHJcblxyXG59KSgpOyIsIiggaXRlbXMgPT4ge1xyXG5cclxuXHRpZighaXRlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oaXRlbXMsIGFjY29yZGlvbiA9PiB7XHJcblxyXG5cdFx0bGV0IGFuaW1hdGVPbiA9IGZhbHNlO1xyXG5cclxuXHRcdGNvbnN0IGJ0bnMgPSBhY2NvcmRpb24ucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9fYnRuJyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShidG5zLCBidG4gPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgaXRlbSA9IGJ0bi5jbG9zZXN0KCcuYWNjb3JkaW9uX19pdGVtJyksXHJcblx0XHRcdFx0ICBoZWFkID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19oZWFkJyksXHJcblx0XHRcdFx0ICBib2R5ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19ib2R5Jyk7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGFuaW1hdGVPbiA9IHRydWU7XHJcblxyXG5cdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnYWNjb3JkaW9uX19pdGVtLS1vcGVuJyk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGJvZHkuYWRkRXZlbnRMaXN0ZW5lcihJTlRJLmNzc0FuaW1hdGlvbigndHJhbnNpdGlvbicpLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmKGFuaW1hdGVPbiAmJiAhSU5USS5pc0luVmlld3BvcnQoaGVhZCkpe1xyXG5cclxuXHRcdFx0XHRcdGhlYWQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0YW5pbWF0ZU9uID0gZmFsc2U7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uJykpOyIsIiggZHJvcGRvd25zID0+IHtcclxuXHJcblx0aWYoIWRyb3Bkb3ducy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcbi8vINGB0LrQu9C+0L3QtdC90LjQtVxyXG5cdGNvbnN0IGRlY2xlbnNpb24gPSAobnVtLCBleHByZXNzaW9ucykgPT4ge1xyXG5cclxuXHRcdGxldCByLFxyXG5cdFx0XHRjb3VudCA9IG51bSAlIDEwMDtcclxuXHJcblx0XHRpZiAoY291bnQgPiA0ICYmIGNvdW50IDwgMjEpe1xyXG5cclxuXHRcdFx0ciA9IGV4cHJlc3Npb25zWycyJ107XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRjb3VudCA9IGNvdW50ICUgMTA7XHJcblxyXG5cdFx0XHRpZiAoY291bnQgPT0gMSl7XHJcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycwJ107XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoY291bnQgPiAxICYmIGNvdW50IDwgNSl7XHJcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycxJ107XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRyID0gZXhwcmVzc2lvbnNbJzInXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGRyb3Bkb3ducywgZWwgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGZvcm0gPSBlbC5jbG9zZXN0KCdmb3JtJyksXHJcblx0XHRcdCAgcmVzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuXHRcdFx0ICBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSxcclxuXHRcdFx0ICBidG4gPSBlbC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gtZHJvcGRvd25fX2J0bicpLFxyXG5cdFx0XHQgIGJ0blRleHREZWZhdWx0ID0gYnRuLnRleHRDb250ZW50LFxyXG5cdFx0XHQgIGV4cHJlc3Npb25zID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1kZWNsZW5zaW9uJykuc3BsaXQoJywnKSxcclxuXHRcdFx0ICBpbnB1dExpc3QgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gtZHJvcGRvd25fX2lucHV0Jyk7XHJcblxyXG5cdFx0YXJyb3cuY2xhc3NOYW1lID0nY2hlY2tib3gtZHJvcGRvd25fX2Fycm93JztcclxuXHRcdGFycm93LmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTguMyAxMC4zYTEgMSAwIDAwMCAxLjQxbDIuOTMgMi45N2MuMjIuMjEuNS4zMi43OC4zMnMuNTYtLjEuNzctLjMybDIuOTMtMi45NmExLjAxIDEuMDEgMCAwMC0uMzItMS42My45OS45OSAwIDAwLTEuMDkuMjFMMTIgMTIuNjJsLTIuMy0yLjMzYS45OS45OSAwIDAwLTEuNCAwelwiLz48L3N2Zz4nO1xyXG5cclxuXHRcdHJlc2V0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xyXG5cdFx0cmVzZXQuY2xhc3NOYW1lID0gJ2NoZWNrYm94LWRyb3Bkb3duX19yZXNldCBidXR0b24gaGlkZSc7XHJcblx0XHRyZXNldC5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xMiAxMC41OWwtNS4zLTUuM2ExIDEgMCAwMC0xLjQgMS40MkwxMC41OCAxMmwtNS4zIDUuM2ExIDEgMCAwMDEuNDIgMS40TDEyIDEzLjQybDUuMyA1LjNhMSAxIDAgMDAxLjQtMS40MkwxMy40MiAxMmw1LjMtNS4zYTEgMSAwIDEwLTEuNDItMS40TDEyIDEwLjU4elwiLz48L3N2Zz4nO1xyXG5cclxuXHRcdGVsLmFwcGVuZENoaWxkKGFycm93KTtcclxuXHRcdGVsLmFwcGVuZENoaWxkKHJlc2V0KTtcclxuXHJcblx0XHRjb25zdCBSZXNldCA9ICgpID0+IHtcclxuXHJcblx0XHRcdGFycm93LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0cmVzZXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0YnRuLnRleHRDb250ZW50ID0gYnRuVGV4dERlZmF1bHQ7XHJcblx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrYm94LWRyb3Bkb3duLS1jaGVja2VkJyk7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGlucHV0TGlzdCwgaW5wdXQgPT4ge1xyXG5cclxuXHRcdFx0XHRpbnB1dC5jaGVja2VkID0gZmFsc2U7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Zm9ybSAmJiBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNldFwiLCAoKSA9PiBSZXNldCgpKTtcclxuXHRcdHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBSZXNldCgpKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGlucHV0TGlzdCwgaW5wdXQgPT4ge1xyXG5cclxuXHRcdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGxldCBjb3VudENoZWNrZWQgPSAwLFxyXG5cdFx0XHRcdFx0dGV4dENoZWNrZWQ7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oaW5wdXRMaXN0LCBpbnB1dCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYoaW5wdXQuY2hlY2tlZCkge1xyXG5cclxuXHRcdFx0XHRcdFx0Y291bnRDaGVja2VkKys7XHJcblx0XHRcdFx0XHRcdHRleHRDaGVja2VkID0gaW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50O1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGlmKGNvdW50Q2hlY2tlZCA9PT0gMCkge1xyXG5cclxuXHRcdFx0XHRcdGJ0bi50ZXh0Q29udGVudCA9IGJ0blRleHREZWZhdWx0O1xyXG5cdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tib3gtZHJvcGRvd24tLWNoZWNrZWQnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYoY291bnRDaGVja2VkID09PSAxKSB7XHJcblxyXG5cdFx0XHRcdFx0YXJyb3cuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdFx0cmVzZXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRcdFx0YnRuLnRleHRDb250ZW50ID0gdGV4dENoZWNrZWQ7XHJcblx0XHRcdFx0XHRlbC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1kcm9wZG93bi0tY2hlY2tlZCcpO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0YXJyb3cuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRcdFx0cmVzZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdFx0YnRuLnRleHRDb250ZW50ID0gY291bnRDaGVja2VkICsgJyAnICsgZGVjbGVuc2lvbihjb3VudENoZWNrZWQsIGV4cHJlc3Npb25zKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHJcbi8vXHRkYXRhLWRlY2xlbnNpb25cclxuXHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlzRHJvcGRvd24gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmNoZWNrYm94LWRyb3Bkb3duJyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShkcm9wZG93bnMsIGVsID0+IHtcclxuXHJcblx0XHRcdGlmKGVsID09PSBpc0Ryb3Bkb3duKXtcclxuXHJcblx0XHRcdFx0aWYoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5jaGVja2JveC1kcm9wZG93bl9fYnRuJykpIHtcclxuXHJcblx0XHRcdFx0XHRlbC5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2JveC1kcm9wZG93bi0tb3BlbicpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2JveC1kcm9wZG93bi0tb3BlbicpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveC1kcm9wZG93bicpKTsiLCIoIGRyb3Bkb3ducyA9PiB7XHJcblxyXG5cdGlmKCFkcm9wZG93bnMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlzRHJvcGRvd24gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmRyb3Bkb3duLXRvZ2dsZScpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oZHJvcGRvd25zLCBlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCdkcm9wZG93bi10b2dnbGUtLW9wZW4nLCBlbCA9PT0gaXNEcm9wZG93biAmJiBpc0Ryb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24tdG9nZ2xlLS1vcGVuJykgPT09IGZhbHNlKSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLXRvZ2dsZScpKTsiLCIoIGl0ZW1zID0+IHtcclxuXHJcblx0aWYoIWl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGl0ZW1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRjb25zdCBidG4gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX3N1Ym1pdCcpO1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCAoKSA9PiBidG4uZGlzYWJsZWQgPSB0cnVlKTtcclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gYnRuLmRpc2FibGVkID0gZmFsc2UpO1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5odG1sKCkpXHJcblx0XHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyJykpOyIsIiggaXRlbXMgPT4ge1xyXG5cclxuXHRpZighaXRlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oaXRlbXMsIGZvcm0gPT4ge1xyXG5cclxuXHRcdGNvbnN0IGJ0biA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm1fX3N1Ym1pdCcpO1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtbG9hZGluZycpO1xyXG5cdFx0XHRidG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcblx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XHJcblx0XHRcdFx0YnRuLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdGlmKHJlc3VsdC5tc2cpIHtcclxuXHJcblx0XHRcdFx0XHRmb3JtLnJlc2V0KCk7XHJcblxyXG5cdFx0XHRcdFx0bW9kYWwub2socmVzdWx0Lm1zZy50aXRsZSwgcmVzdWx0Lm1zZy50ZXh0KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0nKSk7IiwiKCBmb3JtcyA9PiB7XHJcblxyXG5cdGlmKCFmb3Jtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShmb3JtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5saXZlLXNlYXJjaF9faW5wdXQnKSxcclxuXHRcdFx0ICByZXN1bHQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5saXZlLXNlYXJjaF9fcmVzdWx0Jyk7XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRpZihpbnB1dC52YWx1ZS5sZW5ndGggPiAyICYmIGV2ZW50LmtleSAhPT0gJ2VudGVyJyl7XHJcblxyXG5cdFx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnbGl2ZS1zZWFyY2gtLWxvYWRpbmcnLCAnbGl2ZS1zZWFyY2gtLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG5cdFx0XHRcdC50aGVuKGh0bWwgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGh0bWwpO1xyXG5cclxuXHRcdFx0XHRcdHJlc3VsdC5pbm5lckhUTUwgPSBodG1sO1xyXG5cdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdsaXZlLXNlYXJjaC0tbG9hZGluZycpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINGB0LrRgNGL0YLRjCDRgNGD0LfQtdC70YzRgtCw0YLRiyDQv9GA0Lgg0LrQu9C40LrQtSDQstC90LUg0YTQvtGA0LzRi1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCBpc0Zvcm0gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmxpdmUtc2VhcmNoJyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShmb3JtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0XHRpZihpc0Zvcm0gIT09IGZvcm0pIHtcclxuXHJcblx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdsaXZlLXNlYXJjaC0tb3BlbicpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXZlLXNlYXJjaCcpKTsiLCIoIGVsZW1zID0+IHtcclxuXHJcblx0aWYoIWVsZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHRzY3JpcHQuc3JjID0gJy9qcy9pbnB1dG1hc2subWluLmpzJztcclxuXHRzY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG5cclxuXHRcdEFycmF5LmZyb20oZWxlbXMsIGVsID0+IHtcclxuXHJcblx0XHRcdGxldCBtYXNrSW5wdXQ7XHJcblxyXG5cdFx0XHRpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0bWFzay0tcGhvbmUnKSkge1xyXG5cclxuXHRcdFx0XHRtYXNrSW5wdXQgPSBuZXcgSW5wdXRtYXNrKHtcclxuXHRcdFx0XHRcdG1hc2s6IFwiWys3XXw4LTk5OS05OTktOTktOTlcIixcclxuXHRcdFx0XHRcdHNob3dNYXNrT25Ib3ZlcjogZmFsc2VcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1hc2tJbnB1dC5tYXNrKGVsKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fTtcclxuXHJcblx0c2V0VGltZW91dCggKCkgPT4gZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpLCBDb29raWVzLmdldCgnZmFzdExvYWRTY3JpcHQnKSA/IDAgOiAxMDAwMCk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXRtYXNrJykpOyIsIiggbW9kYWwgPT4ge1xyXG5cclxuXHRpZighbW9kYWwpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgaXRlbXMgPSBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWxfX2l0ZW0nKSxcclxuXHRcdCAgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsXScpLFxyXG5cdFx0ICB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcclxuXHJcblx0bGV0IGFjdGl2ZU1vZGFsID0gbnVsbCxcclxuXHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignaGlkZScsICgpID0+IHtcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXNob3cnKTtcclxuXHRcdHdyYXBwZXIuc3R5bGUudG9wID0gMDtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLHdpbmRvd1Njcm9sbCk7XHJcblx0XHRhY3RpdmVNb2RhbCA9IGZhbHNlO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Y29uc3QgbW9kYWxTaG93ID0gc2VsZWN0b3IgPT4ge1xyXG5cclxuXHRcdGlmKCFhY3RpdmVNb2RhbCl7XHJcblxyXG5cdFx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGFjdGl2ZU1vZGFsID0gbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS0nICsgc2VsZWN0b3IpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oaXRlbXMsIGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc3VhbGx5aGlkZGVuJywgZWwgIT09IGFjdGl2ZU1vZGFsKSk7XHJcblxyXG5cdFx0d3JhcHBlci5zdHlsZS50b3AgPSAtd2luZG93U2Nyb2xsICsgJ3B4JztcclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtc2hvdycpO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsMCk7XHJcblxyXG5cdFx0YWN0aXZlTW9kYWwuZm9jdXMoKTtcclxuXHJcblx0fTtcclxuXHJcblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwnKSB8fCBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1vZGFsX19jbG9zZScpKXtcclxuXHJcblx0XHRcdG1vZGFsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiaGlkZVwiKSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0QXJyYXkuZnJvbShidG5zLCBidG4gPT5cclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XHJcblx0XHRcdG1vZGFsU2hvdyhidG4uZ2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsJykpKSk7XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ21vZGFsU2hvdycsIGV2ZW50ID0+IG1vZGFsU2hvdyhldmVudC5kZXRhaWwuc2VsZWN0b3IpKTtcclxuXHJcblx0bW9kYWwub2sgPSAodGl0bGUsdGV4dCkgPT4ge1xyXG5cclxuXHRcdG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tb2sgLm1vZGFsLW1pbmlfX3RpdGxlJykuaW5uZXJIVE1MID0gdGl0bGUgPyB0aXRsZSA6ICcnO1xyXG5cdFx0bW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS1vayAubW9kYWwtbWluaV9fdGV4dCcpLmlubmVySFRNTCA9IHRleHQgPyB0ZXh0IDogJyc7XHJcblx0XHRtb2RhbFNob3coJ29rJyk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpKTsiLCIoIGVsZW1zID0+IHtcclxuXHJcblx0aWYoIWVsZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFuLWxvYWQnKSk7IiwiKCBpbWcgPT4ge1xyXG5cclxuXHRpZihpbWcpIHtcclxuXHJcblx0XHRjb25zdCBiaWcgPSBpbWcucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RfX2ltYWdlcy1iaWctaXRlbScpO1xyXG5cclxuXHRcdGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGlmKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucHJvZHVjdC12ZXJ0aWNhbF9fbGluaycpKSB7XHJcblxyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdGlmKCFldmVudC50YXJnZXQuY2xvc2VzdCgnLnN3aXBlci1jb250YWluZXItc3R5bGUnKSl7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgaXRlbSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucHJvZHVjdC12ZXJ0aWNhbF9faXRlbScpO1xyXG5cclxuXHRcdFx0XHRcdEFycmF5LmZyb20oaW1nLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LXZlcnRpY2FsX19pdGVtJyksIChlbCxpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtY3VycmVudCcsIGl0ZW0gPT09IGVsKTtcclxuXHRcdFx0XHRcdFx0YmlnW2luZGV4XS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgaXRlbSAhPT0gZWwpO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0X19pbWFnZXMnKSk7IiwiKCBmb3JtcyA9PiB7XHJcblxyXG5cdGlmKCFmb3Jtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShmb3JtcywgZWxlbSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgZm9ybSA9IGVsZW0ucXVlcnlTZWxlY3RvcignLnNlYXJjaC1tZW51X19mb3JtJyksXHJcblx0XHRcdCAgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dCcpO1xyXG5cclxuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4gZWxlbS5jbGFzc0xpc3QuYWRkKCdpcy1mb3JtLW9ubHknKSk7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGlmKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2VhcmNoLW1lbnVfX2Zvcm0nKSA9PT0gbnVsbCkge1xyXG5cclxuXHRcdFx0XHRlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZvcm0tb25seScpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWFyY2gtbWVudScpKTsiLCJ3aW5kb3cuc2VsZWN0cyA9IHNlbGVjdCA9PiB7XHJcblxyXG5cdGlmKHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19saXN0JykpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgdmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdCAgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG5cdGFycm93LmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTguMyAxMC4zYTEgMSAwIDAwMCAxLjQxbDIuOTMgMi45N2MuMjIuMjEuNS4zMi43OC4zMnMuNTYtLjEuNzctLjMybDIuOTMtMi45NmExLjAxIDEuMDEgMCAwMC0uMzItMS42My45OS45OSAwIDAwLTEuMDkuMjFMMTIgMTIuNjJsLTIuMy0yLjMzYTEgMSAwIDAwLTEuNCAwelwiLz48L3N2Zz4nO1xyXG5cclxuXHR2YWx1ZS5jbGFzc05hbWUgPSAnc2VsZWN0X192YWx1ZSc7XHJcblx0dmFsdWUuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwic2VsZWN0X192YWx1ZS1pbm5lclwiPjwvc3Bhbj4nO1xyXG5cclxuXHR2YWx1ZS5hcHBlbmRDaGlsZChhcnJvdyk7XHJcblx0c2VsZWN0LmFwcGVuZENoaWxkKHZhbHVlKTtcclxuXHJcblx0Y29uc3QgZm9ybSA9IHNlbGVjdC5jbG9zZXN0KCdmb3JtJyksXHJcblx0XHRjb250cm9sID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLFxyXG5cdFx0b3B0aW9uID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpLFxyXG5cdFx0dmFsdWVUZXh0ID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX3ZhbHVlLWlubmVyJyksXHJcblx0XHRsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5cdGxpc3QuY2xhc3NOYW1lID0gJ3NlbGVjdF9fbGlzdCc7XHJcblxyXG5cdGxldCBzZWxlY3RlZCA9IGNvbnRyb2wucXVlcnlTZWxlY3RvcignW3ZhbHVlPVwiJyArIGNvbnRyb2wudmFsdWUgKyAnXCJdJyk7XHJcblxyXG5cdGNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcblxyXG5cdFx0c2VsZWN0ZWQgPSBjb250cm9sLnF1ZXJ5U2VsZWN0b3IoJ1t2YWx1ZT1cIicgKyBjb250cm9sLnZhbHVlICsgJ1wiXScpO1xyXG5cclxuXHRcdHZhbHVlVGV4dC50ZXh0Q29udGVudCA9IHNlbGVjdGVkLnRleHRDb250ZW50O1xyXG5cclxuXHRcdHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3QtLWRlZmF1bHQnKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHZhbHVlRGVmYXVsdCA9IHNlbGVjdGVkLnRleHRDb250ZW50O1xyXG5cclxuXHRpZihjb250cm9sLmRpc2FibGVkKXtcclxuXHJcblx0XHRzZWxlY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LS1kaXNhYmxlZCcpO1xyXG5cclxuXHR9XHJcblxyXG5cdGlmKGNvbnRyb2wudmFsdWUgPT09ICdub25lJyB8fCBjb250cm9sLnZhbHVlID09PSAnJyl7XHJcblxyXG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC0tZGVmYXVsdCcpO1xyXG5cclxuXHR9XHJcblxyXG5cdHZhbHVlVGV4dC50ZXh0Q29udGVudCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCdvcHRpb25bdmFsdWU9XCInICsgY29udHJvbC52YWx1ZSArICdcIl0nKS50ZXh0Q29udGVudDtcclxuXHJcblx0QXJyYXkuZnJvbShvcHRpb24sIGVsID0+IHtcclxuXHJcblx0XHRjb25zdCBvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG5cdFx0by5jbGFzc05hbWUgPSAnYnV0dG9uIHNlbGVjdF9fbGlzdC1pdGVtJztcclxuXHJcblx0XHRvLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuXHRcdG8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsLmdldEF0dHJpYnV0ZSgndmFsdWUnKSk7XHJcblxyXG5cdFx0by50ZXh0Q29udGVudCA9IGVsLnRleHRDb250ZW50O1xyXG5cclxuXHRcdGxpc3QuYXBwZW5kQ2hpbGQobyk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RfX2xpc3QtaXRlbScpKXtcclxuXHJcblx0XHRcdGNvbnRyb2wudmFsdWUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xyXG5cclxuXHRcdFx0Y29udHJvbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0XHRpZihmb3JtKSB7XHJcblxyXG5cdFx0XHRcdGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdHNlbGVjdC5hcHBlbmRDaGlsZChsaXN0KTtcclxuXHJcblx0Zm9ybSAmJiBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNldFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC0tZGVmYXVsdCcpO1xyXG5cdFx0dmFsdWVUZXh0LnRleHRDb250ZW50ID0gdmFsdWVEZWZhdWx0O1xyXG5cclxuXHR9KTtcclxuXHJcbn07XHJcblxyXG4oICgpID0+IHtcclxuXHJcblx0d2luZG93LnNlbGVjdHNDb2xsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdCcpO1xyXG5cclxuXHRpZih3aW5kb3cuc2VsZWN0c0NvbGxlY3Rpb24ubGVuZ3RoKSB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbSh3aW5kb3cuc2VsZWN0c0NvbGxlY3Rpb24sIHNlbGVjdCA9PiB3aW5kb3cuc2VsZWN0cyhzZWxlY3QpKTtcclxuXHJcblx0fVxyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCBpc1NlbGVjdCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2VsZWN0Jyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbSh3aW5kb3cuc2VsZWN0c0NvbGxlY3Rpb24sIHNlbGVjdCA9PiB7XHJcblxyXG5cdFx0XHRzZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0LS1vcGVuJywgc2VsZWN0ID09PSBpc1NlbGVjdCAmJiBpc1NlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdC0tb3BlbicpID09PSBmYWxzZSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoKTsiLCIoIHNsaWRlcnMgPT4ge1xyXG5cclxuXHRpZighc2xpZGVycy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3Qgbm9VaVNsaWRlckluaXQgPSAoKSA9PiB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShzbGlkZXJzLCBzbGlkZXIgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdHJhY2sgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fdHJhY2snKSxcclxuXHRcdFx0XHQgIGZvcm0gPSBzbGlkZXIuY2xvc2VzdCgnZm9ybScpLFxyXG5cdFx0XHRcdCAgbWluSW5wdXQgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fbWluJyksXHJcblx0XHRcdFx0ICBtYXhJbnB1dCA9IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19tYXgnKSxcclxuXHRcdFx0XHQgIG1pbiAgID0gcGFyc2VJbnQoc2xpZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1taW4nKSksXHJcblx0XHRcdFx0ICBtYXggICA9IHBhcnNlSW50KHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWF4JykpLFxyXG5cdFx0XHRcdCAgc3RlcCAgPSBwYXJzZUludChzbGlkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXN0ZXAnKSk7XHJcblxyXG5cdFx0XHRub1VpU2xpZGVyLmNyZWF0ZSh0cmFjaywge1xyXG5cdFx0XHRcdHN0YXJ0OiBbbWluLG1heF0sXHJcblx0XHRcdFx0c3RlcDogc3RlcCxcclxuXHRcdFx0XHRjb25uZWN0OiB0cnVlLFxyXG5cdFx0XHRcdHJhbmdlOiB7XHJcblx0XHRcdFx0XHQnbWluJzogbWluLFxyXG5cdFx0XHRcdFx0J21heCc6IG1heFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0cmFjay5ub1VpU2xpZGVyLm9uKCdzbGlkZScsIHZhbHVlcyA9PiB7XHJcblxyXG5cdFx0XHRcdG1pbklucHV0LnZhbHVlID0gcGFyc2VJbnQodmFsdWVzWzBdKTtcclxuXHRcdFx0XHRtYXhJbnB1dC52YWx1ZSA9IHBhcnNlSW50KHZhbHVlc1sxXSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRyYWNrLm5vVWlTbGlkZXIub24oJ2VuZCcsIHZhbHVlcyA9PiB7XHJcblxyXG5cdFx0XHRcdGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNldFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHRyYWNrLm5vVWlTbGlkZXIuc2V0KFttaW4sbWF4XSk7XHJcblxyXG5cdFx0XHRcdG1pbklucHV0LnZhbHVlID0gbWluO1xyXG5cdFx0XHRcdG1heElucHV0LnZhbHVlID0gbWF4O1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdGlmKGV2ZW50LnRhcmdldCA9PT0gbWF4SW5wdXQgfHwgZXZlbnQudGFyZ2V0ID09PSBtaW5JbnB1dCkge1xyXG5cclxuXHRcdFx0XHRcdHRyYWNrLm5vVWlTbGlkZXIuc2V0KFtwYXJzZUludChtaW5JbnB1dC52YWx1ZSkscGFyc2VJbnQobWF4SW5wdXQudmFsdWUpXSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0bWF4SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiBtYXhJbnB1dC5zZXRTZWxlY3Rpb25SYW5nZSgwLDk5KSk7XHJcblx0XHRcdG1pbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4gbWluSW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UoMCw5OSkpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvLyBsb2FkXHJcblx0Y29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblx0c2NyaXB0LnNyYyA9ICcvanMvbm91aXNsaWRlci5taW4uanMnO1xyXG5cdHNjcmlwdC5vbmxvYWQgPSAoKSA9PiBub1VpU2xpZGVySW5pdCgpO1xyXG5cdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KSwgQ29va2llcy5nZXQoJ2Zhc3RMb2FkU2NyaXB0JykgPyAwIDogMTAwMDApO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlcicpKTsiLCIoIHN3aXBlckNvbnRhaW5lciA9PiB7XHJcblxyXG5cdGlmKCFzd2lwZXJDb250YWluZXIubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oc3dpcGVyQ29udGFpbmVyLCBzd2lwZSA9PiB7XHJcblxyXG5cdFx0bGV0IG15U3dpcGUgPSBudWxsLFxyXG5cdFx0XHR0b2dnbGVTd2lwZSA9IG51bGwsXHJcblx0XHRcdHJlc2V0U3dpcGUgPSBudWxsO1xyXG5cclxuXHRcdGNvbnN0IHN3aXBlQ29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdFx0ICBzd2lwZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0XHQgIHN3aXBlQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0XHQgIHN3aXBlTmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG5cdFx0XHQgIHN3aXBlUHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG5cdFx0XHQgIHNjcm9sbGJhciA9IHN3aXBlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnN3aXBlci1zY3JvbGxiYXInKSxcclxuXHRcdFx0ICBpdGVtcyA9IHN3aXBlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItc2xpZGUnKSxcclxuXHRcdFx0ICBjb3VudCA9IGl0ZW1zLmxlbmd0aCxcclxuXHRcdFx0ICBjbGllbnRzID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1jbGllbnRzJyksXHJcblx0XHRcdCAgcHJvZHVjdFZlcnRpY2FsID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1wcm9kdWN0LXZlcnRpY2FsJyk7XHJcblxyXG5cdFx0c3dpcGVOYXYuY2xhc3NOYW1lID0gJ3N3aXBlci1wYWdpbmF0aW9uJztcclxuXHRcdHN3aXBlQ29udHJvbHMuY2xhc3NOYW1lID0gJ3N3aXBlci1jb250cm9scyc7XHJcblxyXG5cdFx0c3dpcGVCdG5zLmNsYXNzTmFtZSA9ICdzd2lwZXItbmF2aWdhdGlvbic7XHJcblx0XHRzd2lwZVByZXYuY2xhc3NOYW1lID0gJ3N3aXBlci1idXR0b24tcHJldiBidXR0b24nO1xyXG5cdFx0c3dpcGVOZXh0LmNsYXNzTmFtZSA9ICdzd2lwZXItYnV0dG9uLW5leHQgYnV0dG9uJztcclxuXHJcblx0XHRzd2lwZVByZXYuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywnUHJldmlvdXMgc2xpZGUnKTtcclxuXHRcdHN3aXBlTmV4dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCdOZXh0IHNsaWRlJyk7XHJcblxyXG5cdFx0c3dpcGVQcmV2LmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTkgMTFsNC42LTQuNkEuOTkuOTkgMCAxMTE1IDcuOGwtMy45IDMuOSAzLjkgMy45YS45OS45OSAwIDAxLTEuNCAxLjRMOSAxMi40MUExIDEgMCAwMTkgMTF6XCIvPjwvc3ZnPic7XHJcblx0XHRzd2lwZU5leHQuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTUgMTFhMSAxIDAgMDEwIDEuNEwxMC40IDE3QS45OS45OSAwIDAxOSAxNS42bDMuOS0zLjlMOSA3LjhhLjk5Ljk5IDAgMDExLjQtMS40TDE1IDExelwiLz48L3N2Zz4nO1xyXG5cclxuXHRcdHN3aXBlQnRucy5hcHBlbmRDaGlsZChzd2lwZVByZXYpO1xyXG5cdFx0c3dpcGVCdG5zLmFwcGVuZENoaWxkKHN3aXBlTmV4dCk7XHJcblx0XHRzd2lwZUNvbnRyb2xzLmFwcGVuZENoaWxkKHN3aXBlQnRucyk7XHJcblx0XHRzd2lwZUNvbnRyb2xzLmFwcGVuZENoaWxkKHN3aXBlTmF2KTtcclxuXHRcdHN3aXBlLmFwcGVuZENoaWxkKHN3aXBlQ29udHJvbHMpO1xyXG5cclxuXHRcdHJlc2V0U3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZihteVN3aXBlKSB7XHJcblxyXG5cdFx0XHRcdG15U3dpcGUuZGVzdHJveShmYWxzZSx0cnVlKTtcclxuXHRcdFx0XHRteVN3aXBlID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRzd2lwZUJ0bnMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRzd2lwZUNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY2xpZW50cykge1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHRvZ2dsZVN3aXBlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly9sb29wZWRTbGlkZXMgOiAyLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldyA6ICdhdXRvJyxcclxuXHRcdFx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChwcm9kdWN0VmVydGljYWwpIHtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRsZXQgaW5pdGlhbFNsaWRlID0gMDtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShpdGVtcywgKGVsLGluZGV4KSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1jdXJyZW50JykpIHtcclxuXHJcblx0XHRcdFx0XHRcdGluaXRpYWxTbGlkZSA9IGluZGV4O1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRvZ2dsZVN3aXBlID0gZmFsc2U7XHJcblx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGJveCA9IHN3aXBlLmNsb3Nlc3QoJy5wcm9kdWN0X19pbWFnZXMnKSxcclxuXHRcdFx0XHRcdCAgYmlnID0gYm94LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0X19pbWFnZXMtYmlnLWl0ZW0nKTtcclxuXHJcblx0XHRcdFx0bXlTd2lwZSA9IG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0XHRzbGlkZUFjdGl2ZUNsYXNzOiAnaXMtY3VycmVudCcsXHJcblx0XHRcdFx0XHRkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3IDogMyxcclxuXHRcdFx0XHRcdHNsaWRlVG9DbGlja2VkU2xpZGU6IHRydWUsXHJcblx0XHRcdFx0XHRpbml0aWFsU2xpZGU6IGluaXRpYWxTbGlkZSxcclxuXHRcdFx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0b246IHtcclxuXHRcdFx0XHRcdFx0c2xpZGVDaGFuZ2UgOiAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdEFycmF5LmZyb20oYmlnLCAoaW1nLGluZGV4KSA9PiBpbWcuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIHN3aXBlLnN3aXBlci5yZWFsSW5kZXggIT09IGluZGV4KSk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdFB1YlN1Yi5zdWJzY3JpYmUoJ3dpbmRvd1dpZHRoUmVzaXplJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKHdpbmRvdy5Td2lwZXIgJiYgdG9nZ2xlU3dpcGUpIHtcclxuXHJcblx0XHRcdFx0dG9nZ2xlU3dpcGUoKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRQdWJTdWIuc3Vic2NyaWJlKCdzd2lwZXJKc0xvYWQnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHQvLyBlYWdlclxyXG5cdFx0XHRBcnJheS5mcm9tKHN3aXBlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tsb2FkaW5nPVwibGF6eVwiXScpLCBpbWcgPT4gaW1nLnNldEF0dHJpYnV0ZSgnbG9hZGluZycsJ2VhZ2VyJykpO1xyXG5cclxuXHRcdFx0Ly8gaGlkZVxyXG5cdFx0XHRBcnJheS5mcm9tKGl0ZW1zLCBlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUoKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuXHRzY3JpcHQuc3JjID0gJy9qcy9zd2lwZXIubWluLmpzJztcclxuXHJcblx0c2NyaXB0Lm9ubG9hZCA9ICgpID0+IFB1YlN1Yi5wdWJsaXNoKCdzd2lwZXJKc0xvYWQnKTtcclxuXHJcblx0c2V0VGltZW91dCggKCkgPT4gZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpLCBDb29raWVzLmdldCgnZmFzdExvYWRTY3JpcHQnKSA/IDAgOiAxMDAwMCk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLWNvbnRhaW5lcicpKTsiLCIoIHRhYnMgPT4ge1xyXG5cclxuXHRpZighdGFicy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Ly8g0L/RgNC+0LLQtdGA0Y/QtdC8IGhhc2hcclxuXHRjb25zdCBoYXNoID0gbG9jYXRpb24uaGFzaDtcclxuXHJcblx0Y29uc3QgYnRuSGFzaCA9IChidG5zLGl0ZW1zKSA9PiB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShidG5zLCAoX2J0biwgaW5kZXgpID0+IHNldEFjdGl2ZShfYnRuLCBpdGVtc1tpbmRleF0sIF9idG4uaHJlZiA9PT0gbG9jYXRpb24uaHJlZikpO1xyXG5cclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZXRBY3RpdmUgPSAoYnRuLCBpdGVtLCB0b2dnbGUpID0+IHtcclxuXHJcblx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJywgdG9nZ2xlKTtcclxuXHRcdGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJywgdG9nZ2xlKTtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKHRhYnMsIHRhYiA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRucyA9IHRhYi5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19fYnRuJyksXHJcblx0XHRcdCAgaXRlbXMgPSB0YWIucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2l0ZW0nKSxcclxuXHRcdFx0ICBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblxyXG5cdFx0aWYodGFiLmNsYXNzTGlzdC5jb250YWlucygndGFicy0tbmF2JykpIHtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oYnRucywgYnRuID0+IHtcclxuXHJcblx0XHRcdFx0YnRuLnNldEF0dHJpYnV0ZSgncm9sZScsJ2J1dHRvbicpO1xyXG5cclxuXHRcdFx0XHRuYXYuYXBwZW5kQ2hpbGQoYnRuKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0bmF2LmNsYXNzTGlzdC5hZGQoJ3RhYnNfX25hdicpO1xyXG5cdFx0XHR0YWIuaW5zZXJ0QmVmb3JlKG5hdiwgaXRlbXNbMF0pO1xyXG5cclxuXHRcdFx0c2V0QWN0aXZlKGJ0bnNbMF0sIGl0ZW1zWzBdLCB0cnVlKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0QXJyYXkuZnJvbShidG5zLCBidG4gPT4ge1xyXG5cclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGJ0bnMsIChfYnRuLCBpbmRleCkgPT5cclxuXHRcdFx0XHRcdHNldEFjdGl2ZShfYnRuLCBpdGVtc1tpbmRleF0sIF9idG4gPT09IGJ0bikpKVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmKGhhc2gpIHtcclxuXHJcblx0XHRcdGJ0bkhhc2goYnRucyxpdGVtcyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4gYnRuSGFzaChidG5zLGl0ZW1zKSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMnKSk7IiwiKCB0b29sdGlwcyA9PiB7XHJcblxyXG5cdGlmKHRvb2x0aXBzLmxlbmd0aCl7XHJcblxyXG5cdFx0QXJyYXkuZnJvbSh0b29sdGlwcywgdG9vbHRpcCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcblx0XHRcdHRpdGxlLmNsYXNzTmFtZSA9ICd0b29sdGlwLXRpdGxlX19pbm5lcic7XHJcblxyXG5cdFx0XHR0aXRsZS50ZXh0Q29udGVudCA9IHRvb2x0aXAuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xyXG5cdFx0XHR0b29sdGlwLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHRcdFx0dG9vbHRpcC5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b29sdGlwLXRpdGxlJykpO1xyXG4vKlxyXG5cdFx0XHRjb25zdCB0ID0gbXV0YXRpb25SZWNvcmRzWzBdLnRhcmdldCxcclxuXHRcdFx0XHQgIHJlY3QgPSB0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2cocmVjdC5sZWZ0ID4gd2luZG93LmlubmVyV2lkdGggLSByZWN0LnJpZ2h0KTtcclxuXHJcblx0XHRcdGlmKHQub3Blbikge1xyXG5cclxuXHRcdFx0XHRjb25zdCBpbm5lciA9IHQucXVlcnlTZWxlY3RvcignLmFza19faW5uZXInKTtcclxuXHJcblx0XHRcdFx0aWYocmVjdC5sZWZ0ID4gd2luZG93LmlubmVyV2lkdGggLSByZWN0LnJpZ2h0KSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8g0L/RgNCw0LLQtdC1XHJcblxyXG5cdFx0XHRcdFx0aW5uZXIuc3R5bGUubGVmdCA9ICdhdXRvJztcclxuXHRcdFx0XHRcdGlubmVyLnN0eWxlLnJpZ2h0ID0gMDtcclxuXHRcdFx0XHRcdGlubmVyLnN0eWxlLndpZHRoID0gcmVjdC5sZWZ0ICsgJ3B4JztcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdC8vINC70LXQstC10LVcclxuXHJcblx0XHRcdFx0XHRpbm5lci5zdHlsZS5yaWdodCA9ICdhdXRvJztcclxuXHRcdFx0XHRcdGlubmVyLnN0eWxlLmxlZnQgPSAwO1xyXG5cdFx0XHRcdFx0aW5uZXIuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIHJlY3QucmlnaHQgKyAncHgnO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG4qLyIsIiggZWxlbXMgPT4ge1xyXG5cclxuXHRpZighZWxlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGlmICgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xyXG5cclxuXHRcdGNvbnN0IGNhbGxiYWNrID0gKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGVudHJpZXMsIGVudHJ5ID0+IHtcclxuXHJcblx0XHRcdFx0aWYoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSBlbnRyeS50YXJnZXQ7XHJcblxyXG5cdFx0XHRcdFx0b2JzZXJ2ZXIudW5vYnNlcnZlKHRhcmdldCk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3Qgc3ZnID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5jaXJjbGUtcHJvZ3Jlc3NfX3N2ZycpLFxyXG5cdFx0XHRcdFx0XHQgIHRleHQgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLmNpcmNsZS1wcm9ncmVzc19fdmFsdWUnKSxcclxuXHRcdFx0XHRcdFx0ICB2YWx1ZSA9IHBhcnNlSW50KHRleHQudGV4dENvbnRlbnQpO1xyXG5cclxuXHRcdFx0XHRcdC8vINCw0L3QuNC80LDRhtC40Y8g0L/RgNC+0LPRgNC10YHRgdCwXHJcblx0XHRcdFx0XHRjb25zdCBjaXJjbGUgPSBzdmcucXVlcnlTZWxlY3RvcignY2lyY2xlJyksXHJcblx0XHRcdFx0XHRcdCAgcGkyciA9IHBhcnNlSW50KGNpcmNsZS5nZXRBdHRyaWJ1dGUoJ3InKSkgKiAyICogTWF0aC5QSTtcclxuXHJcblx0XHRcdFx0XHRsZXQgY291bnQgPSAwO1xyXG5cclxuXHRcdFx0XHRcdGlmKHZhbHVlID4gMCkge1xyXG5cclxuXHRcdFx0XHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NpcmNsZS1wcm9ncmVzcy0taW5pdCcpO1xyXG5cclxuXHRcdFx0XHRcdFx0Y29uc3QgaWRUaW1lciA9IHNldEludGVydmFsKCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmKGNvdW50ID09PSB2YWx1ZSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoaWRUaW1lcik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0dGV4dC50ZXh0Q29udGVudCA9IGNvdW50Kys7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBwaTJyIC8gMTAwICogY291bnQgKyAnICcgKyBwaTJyKTtcclxuXHJcblx0XHRcdFx0XHRcdH0sIDEwMDAgLyB2YWx1ZSk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGVsZW1zLCBlbCA9PiBvYnNlcnZlci5vYnNlcnZlKGVsKSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaXJjbGUtcHJvZ3Jlc3MnKSk7IiwiKCBlbGVtcyA9PiB7XHJcblxyXG5cdGlmKCFlbGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0aWYgKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XHJcblxyXG5cdFx0Y29uc3QgY2FsbGJhY2sgPSAoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oZW50cmllcywgZW50cnkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZihlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IHRhcmdldCA9IGVudHJ5LnRhcmdldDtcclxuXHJcblx0XHRcdFx0XHRvYnNlcnZlci51bm9ic2VydmUodGFyZ2V0KTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBiYXIgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLmxpbmUtcHJvZ3Jlc3NfX2JhcicpLFxyXG5cdFx0XHRcdFx0XHQgIHRleHQgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLmxpbmUtcHJvZ3Jlc3NfX3ZhbHVlJyksXHJcblx0XHRcdFx0XHRcdCAgdmFsdWUgPSBwYXJzZUludCh0ZXh0LnRleHRDb250ZW50KTtcclxuXHJcblx0XHRcdFx0XHQvLyDQsNC90LjQvNCw0YbQuNGPINC/0YDQvtCz0YDQtdGB0YHQsFxyXG5cdFx0XHRcdFx0bGV0IGNvdW50ID0gMDtcclxuXHJcblx0XHRcdFx0XHRpZih2YWx1ZSA+IDApIHtcclxuXHJcblx0XHRcdFx0XHRcdHRhcmdldC5jbGFzc0xpc3QuYWRkKCdsaW5lLXByb2dyZXNzLS1pbml0Jyk7XHJcblxyXG5cdFx0XHRcdFx0XHRjb25zdCBpZFRpbWVyID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYoY291bnQgPT09IHZhbHVlKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpZFRpbWVyKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRiYXIuc3R5bGUud2lkdGggPSBjb3VudCArICclJztcclxuXHJcblx0XHRcdFx0XHRcdFx0dGV4dC50ZXh0Q29udGVudCA9IGNvdW50Kys7XHJcblxyXG5cdFx0XHRcdFx0XHR9LCAxMDAwIC8gdmFsdWUpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihjYWxsYmFjayk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShlbGVtcywgZWwgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShlbCkpO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGluZS1wcm9ncmVzcycpKTsiXX0=
