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

	Array.from(elems, el => {

		const svg = el.querySelector('.circle-progress__svg'),
			  text = el.querySelector('.circle-progress__value'),
			  value = parseInt(text.textContent);

		// анимация прогресса
		const circle = svg.querySelector('circle'),
			  pi2r = parseInt(circle.getAttribute('r')) * 2 * Math.PI;

		let count = 0;

		if(value > 0) {

			el.classList.add('circle-progress--init');

			const idTimer = setInterval( () => {

				if(count === value) {

					clearInterval(idTimer);

				}

				text.textContent = count++;

				circle.setAttribute('stroke-dasharray', pi2r / 100 * count + ' ' + pi2r);

			}, 1000 / value);

		}

	});

})(document.querySelectorAll('.circle-progress'));
( elems => {

	if(!elems.length) {

		return;

	}

	Array.from(elems, el => {

		const bar = el.querySelector('.line-progress__bar'),
			  text = el.querySelector('.line-progress__value'),
			  value = parseInt(text.textContent);

		// анимация прогресса
		let count = 0;

		if(value > 0) {

			el.classList.add('line-progress--init');

			const idTimer = setInterval( () => {

				if(count === value) {

					clearInterval(idTimer);

				}

				bar.style.width = count + '%';

				text.textContent = count++;

			}, 1000 / value);

		}

	});

})(document.querySelectorAll('.line-progress'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzLmNvb2tpZS5taW4uanMiLCJwdWJzdWIubWluLmpzIiwianMuanMiLCJhY2NvcmRpb24uanMiLCJjaGVja2JveC1kcm9wZG93bi5qcyIsImRyb3Bkb3duLXRvZ2dsZS5qcyIsImZpbHRlci5qcyIsImZvcm0uanMiLCJsaXZlLXNlYXJjaC5qcyIsIm1hc2suanMiLCJtb2RhbC5qcyIsInBsYW4tbG9hZC5qcyIsInByb2R1Y3QuanMiLCJzZWFyY2gtbWVudS5qcyIsInNlbGVjdC5qcyIsInNsaWRlci5qcyIsInN3aXBlci5qcyIsInRhYnMuanMiLCJ0b29sdGlwLmpzIiwiY2lyY2xlLXByb2dyZXNzLmpzIiwibGluZS1wcm9ncmVzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIGpzLWNvb2tpZSB2My4wLjAtcmMuMSB8IE1JVCAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KGU9ZXx8c2VsZixmdW5jdGlvbigpe3ZhciBuPWUuQ29va2llcyxyPWUuQ29va2llcz10KCk7ci5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGUuQ29va2llcz1uLHJ9fSgpKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgciBpbiBuKWVbcl09bltyXX1yZXR1cm4gZX12YXIgdD17cmVhZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKC8oJVtcXGRBLUZdezJ9KSsvZ2ksZGVjb2RlVVJJQ29tcG9uZW50KX0sd3JpdGU6ZnVuY3Rpb24oZSl7cmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChlKS5yZXBsYWNlKC8lKDJbMzQ2QkZdfDNbQUMtRl18NDB8NVtCREVdfDYwfDdbQkNEXSkvZyxkZWNvZGVVUklDb21wb25lbnQpfX07cmV0dXJuIGZ1bmN0aW9uIG4ocixvKXtmdW5jdGlvbiBpKHQsbixpKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQpe1wibnVtYmVyXCI9PXR5cGVvZihpPWUoe30sbyxpKSkuZXhwaXJlcyYmKGkuZXhwaXJlcz1uZXcgRGF0ZShEYXRlLm5vdygpKzg2NGU1KmkuZXhwaXJlcykpLGkuZXhwaXJlcyYmKGkuZXhwaXJlcz1pLmV4cGlyZXMudG9VVENTdHJpbmcoKSksdD1lbmNvZGVVUklDb21wb25lbnQodCkucmVwbGFjZSgvJSgyWzM0NkJdfDVFfDYwfDdDKS9nLGRlY29kZVVSSUNvbXBvbmVudCkucmVwbGFjZSgvWygpXS9nLGVzY2FwZSksbj1yLndyaXRlKG4sdCk7dmFyIGM9XCJcIjtmb3IodmFyIHUgaW4gaSlpW3VdJiYoYys9XCI7IFwiK3UsITAhPT1pW3VdJiYoYys9XCI9XCIraVt1XS5zcGxpdChcIjtcIilbMF0pKTtyZXR1cm4gZG9jdW1lbnQuY29va2llPXQrXCI9XCIrbitjfX1yZXR1cm4gT2JqZWN0LmNyZWF0ZSh7c2V0OmksZ2V0OmZ1bmN0aW9uKGUpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCYmKCFhcmd1bWVudHMubGVuZ3RofHxlKSl7Zm9yKHZhciBuPWRvY3VtZW50LmNvb2tpZT9kb2N1bWVudC5jb29raWUuc3BsaXQoXCI7IFwiKTpbXSxvPXt9LGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIGM9bltpXS5zcGxpdChcIj1cIiksdT1jLnNsaWNlKDEpLmpvaW4oXCI9XCIpOydcIic9PT11WzBdJiYodT11LnNsaWNlKDEsLTEpKTt0cnl7dmFyIGY9dC5yZWFkKGNbMF0pO2lmKG9bZl09ci5yZWFkKHUsZiksZT09PWYpYnJlYWt9Y2F0Y2goZSl7fX1yZXR1cm4gZT9vW2VdOm99fSxyZW1vdmU6ZnVuY3Rpb24odCxuKXtpKHQsXCJcIixlKHt9LG4se2V4cGlyZXM6LTF9KSl9LHdpdGhBdHRyaWJ1dGVzOmZ1bmN0aW9uKHQpe3JldHVybiBuKHRoaXMuY29udmVydGVyLGUoe30sdGhpcy5hdHRyaWJ1dGVzLHQpKX0sd2l0aENvbnZlcnRlcjpmdW5jdGlvbih0KXtyZXR1cm4gbihlKHt9LHRoaXMuY29udmVydGVyLHQpLHRoaXMuYXR0cmlidXRlcyl9fSx7YXR0cmlidXRlczp7dmFsdWU6T2JqZWN0LmZyZWV6ZShvKX0sY29udmVydGVyOnt2YWx1ZTpPYmplY3QuZnJlZXplKHIpfX0pfSh0LHtwYXRoOlwiL1wifSl9KTtcbiIsIi8qKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXHJcbiAqIExpY2Vuc2U6IE1JVCAtIGh0dHA6Ly9tcmducmRyY2subWl0LWxpY2Vuc2Uub3JnXHJcbiAqXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tcm9kZXJpY2svUHViU3ViSlNcclxuICovXHJcbiFmdW5jdGlvbihuLHQpe1widXNlIHN0cmljdFwiO3ZhciByPXt9O24uUHViU3ViPXI7dmFyIGU9bi5kZWZpbmU7IWZ1bmN0aW9uKG4pe3ZhciB0PXt9LHI9LTE7ZnVuY3Rpb24gZShuKXt2YXIgdDtmb3IodCBpbiBuKWlmKG4uaGFzT3duUHJvcGVydHkodCkpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gbyhuLHQscil7dHJ5e24odCxyKX1jYXRjaChuKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbigpe3Rocm93IG59fShuKSwwKX19ZnVuY3Rpb24gaShuLHQscil7bih0LHIpfWZ1bmN0aW9uIHUobixyLGUsdSl7dmFyIGYscz10W3JdLGM9dT9pOm87aWYodC5oYXNPd25Qcm9wZXJ0eShyKSlmb3IoZiBpbiBzKXMuaGFzT3duUHJvcGVydHkoZikmJmMoc1tmXSxuLGUpfWZ1bmN0aW9uIGYobixyLG8saSl7dmFyIGY9ZnVuY3Rpb24obix0LHIpe3JldHVybiBmdW5jdGlvbigpe3ZhciBlPVN0cmluZyhuKSxvPWUubGFzdEluZGV4T2YoXCIuXCIpO2Zvcih1KG4sbix0LHIpOy0xIT09bzspZT1lLnN1YnN0cigwLG8pLG89ZS5sYXN0SW5kZXhPZihcIi5cIiksdShuLGUsdCxyKX19KG49XCJzeW1ib2xcIj09dHlwZW9mIG4/bi50b1N0cmluZygpOm4scixpKSxzPWZ1bmN0aW9uKG4pe3ZhciByPVN0cmluZyhuKSxvPUJvb2xlYW4odC5oYXNPd25Qcm9wZXJ0eShyKSYmZSh0W3JdKSksaT1yLmxhc3RJbmRleE9mKFwiLlwiKTtmb3IoOyFvJiYtMSE9PWk7KXI9ci5zdWJzdHIoMCxpKSxpPXIubGFzdEluZGV4T2YoXCIuXCIpLG89Qm9vbGVhbih0Lmhhc093blByb3BlcnR5KHIpJiZlKHRbcl0pKTtyZXR1cm4gb30obik7cmV0dXJuISFzJiYoITA9PT1vP2YoKTpzZXRUaW1lb3V0KGYsMCksITApfW4ucHVibGlzaD1mdW5jdGlvbih0LHIpe3JldHVybiBmKHQsciwhMSxuLmltbWVkaWF0ZUV4Y2VwdGlvbnMpfSxuLnB1Ymxpc2hTeW5jPWZ1bmN0aW9uKHQscil7cmV0dXJuIGYodCxyLCEwLG4uaW1tZWRpYXRlRXhjZXB0aW9ucyl9LG4uc3Vic2NyaWJlPWZ1bmN0aW9uKG4sZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSlyZXR1cm4hMTtuPVwic3ltYm9sXCI9PXR5cGVvZiBuP24udG9TdHJpbmcoKTpuLHQuaGFzT3duUHJvcGVydHkobil8fCh0W25dPXt9KTt2YXIgbz1cInVpZF9cIitTdHJpbmcoKytyKTtyZXR1cm4gdFtuXVtvXT1lLG99LG4uc3Vic2NyaWJlT25jZT1mdW5jdGlvbih0LHIpe3ZhciBlPW4uc3Vic2NyaWJlKHQsZnVuY3Rpb24oKXtuLnVuc3Vic2NyaWJlKGUpLHIuYXBwbHkodGhpcyxhcmd1bWVudHMpfSk7cmV0dXJuIG59LG4uY2xlYXJBbGxTdWJzY3JpcHRpb25zPWZ1bmN0aW9uKCl7dD17fX0sbi5jbGVhclN1YnNjcmlwdGlvbnM9ZnVuY3Rpb24obil7dmFyIHI7Zm9yKHIgaW4gdCl0Lmhhc093blByb3BlcnR5KHIpJiYwPT09ci5pbmRleE9mKG4pJiZkZWxldGUgdFtyXX0sbi51bnN1YnNjcmliZT1mdW5jdGlvbihyKXt2YXIgZSxvLGksdT1cInN0cmluZ1wiPT10eXBlb2YgciYmKHQuaGFzT3duUHJvcGVydHkocil8fGZ1bmN0aW9uKG4pe3ZhciByO2ZvcihyIGluIHQpaWYodC5oYXNPd25Qcm9wZXJ0eShyKSYmMD09PXIuaW5kZXhPZihuKSlyZXR1cm4hMDtyZXR1cm4hMX0ocikpLGY9IXUmJlwic3RyaW5nXCI9PXR5cGVvZiByLHM9XCJmdW5jdGlvblwiPT10eXBlb2YgcixjPSExO2lmKCF1KXtmb3IoZSBpbiB0KWlmKHQuaGFzT3duUHJvcGVydHkoZSkpe2lmKG89dFtlXSxmJiZvW3JdKXtkZWxldGUgb1tyXSxjPXI7YnJlYWt9aWYocylmb3IoaSBpbiBvKW8uaGFzT3duUHJvcGVydHkoaSkmJm9baV09PT1yJiYoZGVsZXRlIG9baV0sYz0hMCl9cmV0dXJuIGN9bi5jbGVhclN1YnNjcmlwdGlvbnMocil9fShyKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlLmFtZD9lKGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmKHZvaWQgMCE9PW1vZHVsZSYmbW9kdWxlLmV4cG9ydHMmJihleHBvcnRzPW1vZHVsZS5leHBvcnRzPXIpLGV4cG9ydHMuUHViU3ViPXIsbW9kdWxlLmV4cG9ydHM9ZXhwb3J0cz1yKX0oXCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93fHx0aGlzKTsiLCIvKiEgVVRGLThcclxuXHJcbsKpIGtvdnJpZ2luXHJcbtCS0YHQtSDQv9GA0LDQstCwINGA0LDQt9GA0LXRiNC10L3Ri1xyXG7QutGA0LDRgdC40LLRi9C5INC00LjQt9Cw0LnQvSDQtNC+0LvQttC10L0g0LjQvNC10YLRjCDQutGA0LDRgdC40LLRi9C5INC60L7QtMKuXHJcblxyXG5odHRwczovL2dpdGh1Yi5jb20vaHRtbHBsdXNjc3MvXHJcblxyXG4qL1xyXG5cclxuKCAoKSA9PiB7XHJcblxyXG5cdHdpbmRvdy5JTlRJID0ge307XHJcblx0SU5USS5yZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHRJTlRJLndpbmRvd1dpZHRoT0xkID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuXHJcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuXHJcblx0XHRcdGlmICghSU5USS5yZXNpemVUaW1lb3V0KSB7XHJcblxyXG5cdFx0XHRcdElOVEkucmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gIHtcclxuXHJcblx0XHRcdFx0XHRJTlRJLnJlc2l6ZVRpbWVvdXQgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRcdGlmKElOVEkud2luZG93V2lkdGhPTGQgIT09IHdpbmRvdy5pbm5lcldpZHRoKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRJTlRJLndpbmRvd1dpZHRoT0xkID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG5cdFx0XHRcdFx0XHRQdWJTdWIucHVibGlzaCgnd2luZG93V2lkdGhSZXNpemUnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0sIDEwMCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcblxyXG5cdFx0XHRQdWJTdWIucHVibGlzaCgnd2luZG93U2Nyb2xsJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFB1YlN1Yi5wdWJsaXNoKCdET01Db250ZW50TG9hZGVkJyk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFB1YlN1Yi5wdWJsaXNoKCdwYWdlTG9hZCcpO1xyXG5cclxuXHRcdENvb2tpZXMuc2V0KCdmYXN0TG9hZFNjcmlwdCcsIHRydWUpO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8g0L7QsdGA0LDQsdC+0YLRh9C40Log0LDQvdC40LzQsNGG0LjQuVxyXG5cdElOVEkuY3NzQW5pbWF0aW9uID0gYT0+e2xldCBiLGMsZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY3NzYW5pbWF0aW9uXCIpO3N3aXRjaChhKXtjYXNlJ2FuaW1hdGlvbic6Yj17XCJhbmltYXRpb25cIjpcImFuaW1hdGlvbmVuZFwiLFwiT0FuaW1hdGlvblwiOlwib0FuaW1hdGlvbkVuZFwiLFwiTW96QW5pbWF0aW9uXCI6XCJhbmltYXRpb25lbmRcIixcIldlYmtpdEFuaW1hdGlvblwiOlwid2Via2l0QW5pbWF0aW9uRW5kXCJ9O2JyZWFrO2Nhc2UndHJhbnNpdGlvbic6Yj17XCJ0cmFuc2l0aW9uXCI6XCJ0cmFuc2l0aW9uZW5kXCIsXCJPVHJhbnNpdGlvblwiOlwib1RyYW5zaXRpb25FbmRcIixcIk1velRyYW5zaXRpb25cIjpcInRyYW5zaXRpb25lbmRcIixcIldlYmtpdFRyYW5zaXRpb25cIjpcIndlYmtpdFRyYW5zaXRpb25FbmRcIn19Zm9yKGMgaW4gYilpZihkLnN0eWxlW2NdIT09dW5kZWZpbmVkKXJldHVybiBiW2NdfVxyXG5cclxuXHQvLyBEZXRlcm1pbmUgaWYgYW4gZWxlbWVudCBpcyBpbiB0aGUgdmlzaWJsZSB2aWV3cG9ydFxyXG5cdElOVEkuaXNJblZpZXdwb3J0ID0gZWwgPT4ge1xyXG5cdFx0Y29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0cmV0dXJuIChyZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblx0fVxyXG5cclxufSkoKTsiLCIoIGl0ZW1zID0+IHtcclxuXHJcblx0aWYoIWl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGl0ZW1zLCBhY2NvcmRpb24gPT4ge1xyXG5cclxuXHRcdGxldCBhbmltYXRlT24gPSBmYWxzZTtcclxuXHJcblx0XHRjb25zdCBidG5zID0gYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2J0bicpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oYnRucywgYnRuID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGl0ZW0gPSBidG4uY2xvc2VzdCgnLmFjY29yZGlvbl9faXRlbScpLFxyXG5cdFx0XHRcdCAgaGVhZCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faGVhZCcpLFxyXG5cdFx0XHRcdCAgYm9keSA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9fYm9keScpO1xyXG5cclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRhbmltYXRlT24gPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRib2R5LmFkZEV2ZW50TGlzdGVuZXIoSU5USS5jc3NBbmltYXRpb24oJ3RyYW5zaXRpb24nKSwgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZihhbmltYXRlT24gJiYgIUlOVEkuaXNJblZpZXdwb3J0KGhlYWQpKXtcclxuXHJcblx0XHRcdFx0XHRoZWFkLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGFuaW1hdGVPbiA9IGZhbHNlO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbicpKTsiLCIoIGRyb3Bkb3ducyA9PiB7XHJcblxyXG5cdGlmKCFkcm9wZG93bnMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG4vLyDRgdC60LvQvtC90LXQvdC40LVcclxuXHRjb25zdCBkZWNsZW5zaW9uID0gKG51bSwgZXhwcmVzc2lvbnMpID0+IHtcclxuXHJcblx0XHRsZXQgcixcclxuXHRcdFx0Y291bnQgPSBudW0gJSAxMDA7XHJcblxyXG5cdFx0aWYgKGNvdW50ID4gNCAmJiBjb3VudCA8IDIxKXtcclxuXHJcblx0XHRcdHIgPSBleHByZXNzaW9uc1snMiddO1xyXG5cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0Y291bnQgPSBjb3VudCAlIDEwO1xyXG5cclxuXHRcdFx0aWYgKGNvdW50ID09IDEpe1xyXG5cdFx0XHRcdHIgPSBleHByZXNzaW9uc1snMCddO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGNvdW50ID4gMSAmJiBjb3VudCA8IDUpe1xyXG5cdFx0XHRcdHIgPSBleHByZXNzaW9uc1snMSddO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2V7XHJcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycyJ107XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHI7XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShkcm9wZG93bnMsIGVsID0+IHtcclxuXHJcblx0XHRjb25zdCBmb3JtID0gZWwuY2xvc2VzdCgnZm9ybScpLFxyXG5cdFx0XHQgIHJlc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcblx0XHRcdCAgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXHJcblx0XHRcdCAgYnRuID0gZWwucXVlcnlTZWxlY3RvcignLmNoZWNrYm94LWRyb3Bkb3duX19idG4nKSxcclxuXHRcdFx0ICBidG5UZXh0RGVmYXVsdCA9IGJ0bi50ZXh0Q29udGVudCxcclxuXHRcdFx0ICBleHByZXNzaW9ucyA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVjbGVuc2lvbicpLnNwbGl0KCcsJyksXHJcblx0XHRcdCAgaW5wdXRMaXN0ID0gZWwucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94LWRyb3Bkb3duX19pbnB1dCcpO1xyXG5cclxuXHRcdGFycm93LmNsYXNzTmFtZSA9J2NoZWNrYm94LWRyb3Bkb3duX19hcnJvdyc7XHJcblx0XHRhcnJvdy5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk04LjMgMTAuM2ExIDEgMCAwMDAgMS40MWwyLjkzIDIuOTdjLjIyLjIxLjUuMzIuNzguMzJzLjU2LS4xLjc3LS4zMmwyLjkzLTIuOTZhMS4wMSAxLjAxIDAgMDAtLjMyLTEuNjMuOTkuOTkgMCAwMC0xLjA5LjIxTDEyIDEyLjYybC0yLjMtMi4zM2EuOTkuOTkgMCAwMC0xLjQgMHpcIi8+PC9zdmc+JztcclxuXHJcblx0XHRyZXNldC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcclxuXHRcdHJlc2V0LmNsYXNzTmFtZSA9ICdjaGVja2JveC1kcm9wZG93bl9fcmVzZXQgYnV0dG9uIGhpZGUnO1xyXG5cdFx0cmVzZXQuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTIgMTAuNTlsLTUuMy01LjNhMSAxIDAgMDAtMS40IDEuNDJMMTAuNTggMTJsLTUuMyA1LjNhMSAxIDAgMDAxLjQyIDEuNEwxMiAxMy40Mmw1LjMgNS4zYTEgMSAwIDAwMS40LTEuNDJMMTMuNDIgMTJsNS4zLTUuM2ExIDEgMCAxMC0xLjQyLTEuNEwxMiAxMC41OHpcIi8+PC9zdmc+JztcclxuXHJcblx0XHRlbC5hcHBlbmRDaGlsZChhcnJvdyk7XHJcblx0XHRlbC5hcHBlbmRDaGlsZChyZXNldCk7XHJcblxyXG5cdFx0Y29uc3QgUmVzZXQgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRhcnJvdy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdHJlc2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdGJ0bi50ZXh0Q29udGVudCA9IGJ0blRleHREZWZhdWx0O1xyXG5cdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2JveC1kcm9wZG93bi0tY2hlY2tlZCcpO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShpbnB1dExpc3QsIGlucHV0ID0+IHtcclxuXHJcblx0XHRcdFx0aW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGZvcm0gJiYgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwicmVzZXRcIiwgKCkgPT4gUmVzZXQoKSk7XHJcblx0XHRyZXNldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gUmVzZXQoKSk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShpbnB1dExpc3QsIGlucHV0ID0+IHtcclxuXHJcblx0XHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRsZXQgY291bnRDaGVja2VkID0gMCxcclxuXHRcdFx0XHRcdHRleHRDaGVja2VkO1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGlucHV0TGlzdCwgaW5wdXQgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmKGlucHV0LmNoZWNrZWQpIHtcclxuXHJcblx0XHRcdFx0XHRcdGNvdW50Q2hlY2tlZCsrO1xyXG5cdFx0XHRcdFx0XHR0ZXh0Q2hlY2tlZCA9IGlucHV0Lm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpZihjb3VudENoZWNrZWQgPT09IDApIHtcclxuXHJcblx0XHRcdFx0XHRidG4udGV4dENvbnRlbnQgPSBidG5UZXh0RGVmYXVsdDtcclxuXHRcdFx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrYm94LWRyb3Bkb3duLS1jaGVja2VkJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmKGNvdW50Q2hlY2tlZCA9PT0gMSkge1xyXG5cclxuXHRcdFx0XHRcdGFycm93LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdHJlc2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdGJ0bi50ZXh0Q29udGVudCA9IHRleHRDaGVja2VkO1xyXG5cdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtZHJvcGRvd24tLWNoZWNrZWQnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdGFycm93LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdHJlc2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdGJ0bi50ZXh0Q29udGVudCA9IGNvdW50Q2hlY2tlZCArICcgJyArIGRlY2xlbnNpb24oY291bnRDaGVja2VkLCBleHByZXNzaW9ucyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblxyXG4vL1x0ZGF0YS1kZWNsZW5zaW9uXHJcblxyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCBpc0Ryb3Bkb3duID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5jaGVja2JveC1kcm9wZG93bicpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oZHJvcGRvd25zLCBlbCA9PiB7XHJcblxyXG5cdFx0XHRpZihlbCA9PT0gaXNEcm9wZG93bil7XHJcblxyXG5cdFx0XHRcdGlmKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuY2hlY2tib3gtZHJvcGRvd25fX2J0bicpKSB7XHJcblxyXG5cdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tib3gtZHJvcGRvd24tLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tib3gtZHJvcGRvd24tLW9wZW4nKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gtZHJvcGRvd24nKSk7IiwiKCBkcm9wZG93bnMgPT4ge1xyXG5cclxuXHRpZighZHJvcGRvd25zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCBpc0Ryb3Bkb3duID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kcm9wZG93bi10b2dnbGUnKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGRyb3Bkb3ducywgZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGRvd24tdG9nZ2xlLS1vcGVuJywgZWwgPT09IGlzRHJvcGRvd24gJiYgaXNEcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duLXRvZ2dsZS0tb3BlbicpID09PSBmYWxzZSkpO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bi10b2dnbGUnKSk7IiwiKCBpdGVtcyA9PiB7XHJcblxyXG5cdGlmKCFpdGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShpdGVtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRuID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19zdWJtaXQnKTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgKCkgPT4gYnRuLmRpc2FibGVkID0gdHJ1ZSk7XHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IGJ0bi5kaXNhYmxlZCA9IGZhbHNlKTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuaHRtbCgpKVxyXG5cdFx0XHQudGhlbihyZXN1bHQgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcicpKTsiLCIoIGl0ZW1zID0+IHtcclxuXHJcblx0aWYoIWl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGl0ZW1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRjb25zdCBidG4gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19zdWJtaXQnKTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHRcdFx0YnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG5cdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xyXG5cdFx0XHRcdGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQubXNnKSB7XHJcblxyXG5cdFx0XHRcdFx0Zm9ybS5yZXNldCgpO1xyXG5cclxuXHRcdFx0XHRcdG1vZGFsLm9rKHJlc3VsdC5tc2cudGl0bGUsIHJlc3VsdC5tc2cudGV4dCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtJykpOyIsIiggZm9ybXMgPT4ge1xyXG5cclxuXHRpZighZm9ybXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oZm9ybXMsIGZvcm0gPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcubGl2ZS1zZWFyY2hfX2lucHV0JyksXHJcblx0XHRcdCAgcmVzdWx0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcubGl2ZS1zZWFyY2hfX3Jlc3VsdCcpO1xyXG5cclxuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0aWYoaW5wdXQudmFsdWUubGVuZ3RoID4gMiAmJiBldmVudC5rZXkgIT09ICdlbnRlcicpe1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2xpdmUtc2VhcmNoLS1sb2FkaW5nJywgJ2xpdmUtc2VhcmNoLS1vcGVuJyk7XHJcblxyXG5cdFx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcclxuXHRcdFx0XHQudGhlbihodG1sID0+IHtcclxuXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhodG1sKTtcclxuXHJcblx0XHRcdFx0XHRyZXN1bHQuaW5uZXJIVE1MID0gaHRtbDtcclxuXHRcdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnbGl2ZS1zZWFyY2gtLWxvYWRpbmcnKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyDRgdC60YDRi9GC0Ywg0YDRg9C30LXQu9GM0YLQsNGC0Ysg0L/RgNC4INC60LvQuNC60LUg0LLQvdC1INGE0L7RgNC80YtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaXNGb3JtID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5saXZlLXNlYXJjaCcpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oZm9ybXMsIGZvcm0gPT4ge1xyXG5cclxuXHRcdFx0aWYoaXNGb3JtICE9PSBmb3JtKSB7XHJcblxyXG5cdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnbGl2ZS1zZWFyY2gtLW9wZW4nKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGl2ZS1zZWFyY2gnKSk7IiwiKCBlbGVtcyA9PiB7XHJcblxyXG5cdGlmKCFlbGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblx0c2NyaXB0LnNyYyA9ICcvanMvaW5wdXRtYXNrLm1pbi5qcyc7XHJcblx0c2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcclxuXHJcblx0XHRBcnJheS5mcm9tKGVsZW1zLCBlbCA9PiB7XHJcblxyXG5cdFx0XHRsZXQgbWFza0lucHV0O1xyXG5cclxuXHRcdFx0aWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dG1hc2stLXBob25lJykpIHtcclxuXHJcblx0XHRcdFx0bWFza0lucHV0ID0gbmV3IElucHV0bWFzayh7XHJcblx0XHRcdFx0XHRtYXNrOiBcIlsrN118OC05OTktOTk5LTk5LTk5XCIsXHJcblx0XHRcdFx0XHRzaG93TWFza09uSG92ZXI6IGZhbHNlXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtYXNrSW5wdXQubWFzayhlbCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH07XHJcblxyXG5cdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KSwgQ29va2llcy5nZXQoJ2Zhc3RMb2FkU2NyaXB0JykgPyAwIDogMTAwMDApO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0bWFzaycpKTsiLCIoIG1vZGFsID0+IHtcclxuXHJcblx0aWYoIW1vZGFsKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19pdGVtJyksXHJcblx0XHQgIGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbF0nKSxcclxuXHRcdCAgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XHJcblxyXG5cdGxldCBhY3RpdmVNb2RhbCA9IG51bGwsXHJcblx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUnLCAoKSA9PiB7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1zaG93Jyk7XHJcblx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IDA7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCx3aW5kb3dTY3JvbGwpO1xyXG5cdFx0YWN0aXZlTW9kYWwgPSBmYWxzZTtcclxuXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IG1vZGFsU2hvdyA9IHNlbGVjdG9yID0+IHtcclxuXHJcblx0XHRpZighYWN0aXZlTW9kYWwpe1xyXG5cclxuXHRcdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRhY3RpdmVNb2RhbCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tJyArIHNlbGVjdG9yKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGl0ZW1zLCBlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCd2aXN1YWxseWhpZGRlbicsIGVsICE9PSBhY3RpdmVNb2RhbCkpO1xyXG5cclxuXHRcdHdyYXBwZXIuc3R5bGUudG9wID0gLXdpbmRvd1Njcm9sbCArICdweCc7XHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXNob3cnKTtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG5cclxuXHRcdGFjdGl2ZU1vZGFsLmZvY3VzKCk7XHJcblxyXG5cdH07XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsJykgfHwgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbF9fY2xvc2UnKSl7XHJcblxyXG5cdFx0XHRtb2RhbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImhpZGVcIikpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdEFycmF5LmZyb20oYnRucywgYnRuID0+XHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxyXG5cdFx0XHRtb2RhbFNob3coYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpKSkpO1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdtb2RhbFNob3cnLCBldmVudCA9PiBtb2RhbFNob3coZXZlbnQuZGV0YWlsLnNlbGVjdG9yKSk7XHJcblxyXG5cdG1vZGFsLm9rID0gKHRpdGxlLHRleHQpID0+IHtcclxuXHJcblx0XHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLW9rIC5tb2RhbC1taW5pX190aXRsZScpLmlubmVySFRNTCA9IHRpdGxlID8gdGl0bGUgOiAnJztcclxuXHRcdG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tb2sgLm1vZGFsLW1pbmlfX3RleHQnKS5pbm5lckhUTUwgPSB0ZXh0ID8gdGV4dCA6ICcnO1xyXG5cdFx0bW9kYWxTaG93KCdvaycpO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKSk7IiwiKCBlbGVtcyA9PiB7XHJcblxyXG5cdGlmKCFlbGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxhbi1sb2FkJykpOyIsIiggaW1nID0+IHtcclxuXHJcblx0aWYoaW1nKSB7XHJcblxyXG5cdFx0Y29uc3QgYmlnID0gaW1nLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0X19pbWFnZXMtYmlnLWl0ZW0nKTtcclxuXHJcblx0XHRpbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRpZihldmVudC50YXJnZXQuY2xvc2VzdCgnLnByb2R1Y3QtdmVydGljYWxfX2xpbmsnKSkge1xyXG5cclxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRpZighZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zd2lwZXItY29udGFpbmVyLXN0eWxlJykpe1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGl0ZW0gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnByb2R1Y3QtdmVydGljYWxfX2l0ZW0nKTtcclxuXHJcblx0XHRcdFx0XHRBcnJheS5mcm9tKGltZy5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC12ZXJ0aWNhbF9faXRlbScpLCAoZWwsaW5kZXgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWN1cnJlbnQnLCBpdGVtID09PSBlbCk7XHJcblx0XHRcdFx0XHRcdGJpZ1tpbmRleF0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIGl0ZW0gIT09IGVsKTtcclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9faW1hZ2VzJykpOyIsIiggZm9ybXMgPT4ge1xyXG5cclxuXHRpZighZm9ybXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oZm9ybXMsIGVsZW0gPT4ge1xyXG5cclxuXHRcdGNvbnN0IGZvcm0gPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbWVudV9fZm9ybScpLFxyXG5cdFx0XHQgIGlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuaW5wdXQnKTtcclxuXHJcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IGVsZW0uY2xhc3NMaXN0LmFkZCgnaXMtZm9ybS1vbmx5JykpO1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRpZihldmVudC50YXJnZXQuY2xvc2VzdCgnLnNlYXJjaC1tZW51X19mb3JtJykgPT09IG51bGwpIHtcclxuXHJcblx0XHRcdFx0ZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1mb3JtLW9ubHknKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VhcmNoLW1lbnUnKSk7Iiwid2luZG93LnNlbGVjdHMgPSBzZWxlY3QgPT4ge1xyXG5cclxuXHRpZihzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fbGlzdCcpKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHQgIGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuXHRhcnJvdy5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk04LjMgMTAuM2ExIDEgMCAwMDAgMS40MWwyLjkzIDIuOTdjLjIyLjIxLjUuMzIuNzguMzJzLjU2LS4xLjc3LS4zMmwyLjkzLTIuOTZhMS4wMSAxLjAxIDAgMDAtLjMyLTEuNjMuOTkuOTkgMCAwMC0xLjA5LjIxTDEyIDEyLjYybC0yLjMtMi4zM2ExIDEgMCAwMC0xLjQgMHpcIi8+PC9zdmc+JztcclxuXHJcblx0dmFsdWUuY2xhc3NOYW1lID0gJ3NlbGVjdF9fdmFsdWUnO1xyXG5cdHZhbHVlLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cInNlbGVjdF9fdmFsdWUtaW5uZXJcIj48L3NwYW4+JztcclxuXHJcblx0dmFsdWUuYXBwZW5kQ2hpbGQoYXJyb3cpO1xyXG5cdHNlbGVjdC5hcHBlbmRDaGlsZCh2YWx1ZSk7XHJcblxyXG5cdGNvbnN0IGZvcm0gPSBzZWxlY3QuY2xvc2VzdCgnZm9ybScpLFxyXG5cdFx0Y29udHJvbCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcclxuXHRcdG9wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKSxcclxuXHRcdHZhbHVlVGV4dCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X192YWx1ZS1pbm5lcicpLFxyXG5cdFx0bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRsaXN0LmNsYXNzTmFtZSA9ICdzZWxlY3RfX2xpc3QnO1xyXG5cclxuXHRsZXQgc2VsZWN0ZWQgPSBjb250cm9sLnF1ZXJ5U2VsZWN0b3IoJ1t2YWx1ZT1cIicgKyBjb250cm9sLnZhbHVlICsgJ1wiXScpO1xyXG5cclxuXHRjb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHNlbGVjdGVkID0gY29udHJvbC5xdWVyeVNlbGVjdG9yKCdbdmFsdWU9XCInICsgY29udHJvbC52YWx1ZSArICdcIl0nKTtcclxuXHJcblx0XHR2YWx1ZVRleHQudGV4dENvbnRlbnQgPSBzZWxlY3RlZC50ZXh0Q29udGVudDtcclxuXHJcblx0XHRzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0LS1kZWZhdWx0Jyk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB2YWx1ZURlZmF1bHQgPSBzZWxlY3RlZC50ZXh0Q29udGVudDtcclxuXHJcblx0aWYoY29udHJvbC5kaXNhYmxlZCl7XHJcblxyXG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC0tZGlzYWJsZWQnKTtcclxuXHJcblx0fVxyXG5cclxuXHRpZihjb250cm9sLnZhbHVlID09PSAnbm9uZScgfHwgY29udHJvbC52YWx1ZSA9PT0gJycpe1xyXG5cclxuXHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtLWRlZmF1bHQnKTtcclxuXHJcblx0fVxyXG5cclxuXHR2YWx1ZVRleHQudGV4dENvbnRlbnQgPSBzZWxlY3QucXVlcnlTZWxlY3Rvcignb3B0aW9uW3ZhbHVlPVwiJyArIGNvbnRyb2wudmFsdWUgKyAnXCJdJykudGV4dENvbnRlbnQ7XHJcblxyXG5cdEFycmF5LmZyb20ob3B0aW9uLCBlbCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuXHRcdG8uY2xhc3NOYW1lID0gJ2J1dHRvbiBzZWxlY3RfX2xpc3QtaXRlbSc7XHJcblxyXG5cdFx0by5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcblx0XHRvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBlbC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpO1xyXG5cclxuXHRcdG8udGV4dENvbnRlbnQgPSBlbC50ZXh0Q29udGVudDtcclxuXHJcblx0XHRsaXN0LmFwcGVuZENoaWxkKG8pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0c2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0X19saXN0LWl0ZW0nKSl7XHJcblxyXG5cdFx0XHRjb250cm9sLnZhbHVlID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxuXHJcblx0XHRcdGNvbnRyb2wuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdFx0aWYoZm9ybSkge1xyXG5cclxuXHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRzZWxlY3QuYXBwZW5kQ2hpbGQobGlzdCk7XHJcblxyXG5cdGZvcm0gJiYgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwicmVzZXRcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtLWRlZmF1bHQnKTtcclxuXHRcdHZhbHVlVGV4dC50ZXh0Q29udGVudCA9IHZhbHVlRGVmYXVsdDtcclxuXHJcblx0fSk7XHJcblxyXG59O1xyXG5cclxuKCAoKSA9PiB7XHJcblxyXG5cdHdpbmRvdy5zZWxlY3RzQ29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QnKTtcclxuXHJcblx0aWYod2luZG93LnNlbGVjdHNDb2xsZWN0aW9uLmxlbmd0aCkge1xyXG5cclxuXHRcdEFycmF5LmZyb20od2luZG93LnNlbGVjdHNDb2xsZWN0aW9uLCBzZWxlY3QgPT4gd2luZG93LnNlbGVjdHMoc2VsZWN0KSk7XHJcblxyXG5cdH1cclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaXNTZWxlY3QgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNlbGVjdCcpO1xyXG5cclxuXHRcdEFycmF5LmZyb20od2luZG93LnNlbGVjdHNDb2xsZWN0aW9uLCBzZWxlY3QgPT4ge1xyXG5cclxuXHRcdFx0c2VsZWN0LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdC0tb3BlbicsIHNlbGVjdCA9PT0gaXNTZWxlY3QgJiYgaXNTZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3QtLW9wZW4nKSA9PT0gZmFsc2UpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKCk7IiwiKCBzbGlkZXJzID0+IHtcclxuXHJcblx0aWYoIXNsaWRlcnMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IG5vVWlTbGlkZXJJbml0ID0gKCkgPT4ge1xyXG5cclxuXHRcdEFycmF5LmZyb20oc2xpZGVycywgc2xpZGVyID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHRyYWNrID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3RyYWNrJyksXHJcblx0XHRcdFx0ICBmb3JtID0gc2xpZGVyLmNsb3Nlc3QoJ2Zvcm0nKSxcclxuXHRcdFx0XHQgIG1pbklucHV0ID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX21pbicpLFxyXG5cdFx0XHRcdCAgbWF4SW5wdXQgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fbWF4JyksXHJcblx0XHRcdFx0ICBtaW4gICA9IHBhcnNlSW50KHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWluJykpLFxyXG5cdFx0XHRcdCAgbWF4ICAgPSBwYXJzZUludChzbGlkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLW1heCcpKSxcclxuXHRcdFx0XHQgIHN0ZXAgID0gcGFyc2VJbnQoc2xpZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGVwJykpO1xyXG5cclxuXHRcdFx0bm9VaVNsaWRlci5jcmVhdGUodHJhY2ssIHtcclxuXHRcdFx0XHRzdGFydDogW21pbixtYXhdLFxyXG5cdFx0XHRcdHN0ZXA6IHN0ZXAsXHJcblx0XHRcdFx0Y29ubmVjdDogdHJ1ZSxcclxuXHRcdFx0XHRyYW5nZToge1xyXG5cdFx0XHRcdFx0J21pbic6IG1pbixcclxuXHRcdFx0XHRcdCdtYXgnOiBtYXhcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dHJhY2subm9VaVNsaWRlci5vbignc2xpZGUnLCB2YWx1ZXMgPT4ge1xyXG5cclxuXHRcdFx0XHRtaW5JbnB1dC52YWx1ZSA9IHBhcnNlSW50KHZhbHVlc1swXSk7XHJcblx0XHRcdFx0bWF4SW5wdXQudmFsdWUgPSBwYXJzZUludCh2YWx1ZXNbMV0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0cmFjay5ub1VpU2xpZGVyLm9uKCdlbmQnLCB2YWx1ZXMgPT4ge1xyXG5cclxuXHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKFwicmVzZXRcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHR0cmFjay5ub1VpU2xpZGVyLnNldChbbWluLG1heF0pO1xyXG5cclxuXHRcdFx0XHRtaW5JbnB1dC52YWx1ZSA9IG1pbjtcclxuXHRcdFx0XHRtYXhJbnB1dC52YWx1ZSA9IG1heDtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRpZihldmVudC50YXJnZXQgPT09IG1heElucHV0IHx8IGV2ZW50LnRhcmdldCA9PT0gbWluSW5wdXQpIHtcclxuXHJcblx0XHRcdFx0XHR0cmFjay5ub1VpU2xpZGVyLnNldChbcGFyc2VJbnQobWluSW5wdXQudmFsdWUpLHBhcnNlSW50KG1heElucHV0LnZhbHVlKV0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdG1heElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4gbWF4SW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UoMCw5OSkpO1xyXG5cdFx0XHRtaW5JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IG1pbklucHV0LnNldFNlbGVjdGlvblJhbmdlKDAsOTkpKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fTtcclxuXHJcblx0Ly8gbG9hZFxyXG5cdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cdHNjcmlwdC5zcmMgPSAnL2pzL25vdWlzbGlkZXIubWluLmpzJztcclxuXHRzY3JpcHQub25sb2FkID0gKCkgPT4gbm9VaVNsaWRlckluaXQoKTtcclxuXHRzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCksIENvb2tpZXMuZ2V0KCdmYXN0TG9hZFNjcmlwdCcpID8gMCA6IDEwMDAwKTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXInKSk7IiwiKCBzd2lwZXJDb250YWluZXIgPT4ge1xyXG5cclxuXHRpZighc3dpcGVyQ29udGFpbmVyLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKHN3aXBlckNvbnRhaW5lciwgc3dpcGUgPT4ge1xyXG5cclxuXHRcdGxldCBteVN3aXBlID0gbnVsbCxcclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSBudWxsLFxyXG5cdFx0XHRyZXNldFN3aXBlID0gbnVsbDtcclxuXHJcblx0XHRjb25zdCBzd2lwZUNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRcdCAgc3dpcGVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdFx0ICBzd2lwZUJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdFx0ICBzd2lwZU5leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuXHRcdFx0ICBzd2lwZVByZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuXHRcdFx0ICBzY3JvbGxiYXIgPSBzd2lwZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItc2Nyb2xsYmFyJyksXHJcblx0XHRcdCAgaXRlbXMgPSBzd2lwZS5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLXNsaWRlJyksXHJcblx0XHRcdCAgY291bnQgPSBpdGVtcy5sZW5ndGgsXHJcblx0XHRcdCAgY2xpZW50cyA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tY2xpZW50cycpLFxyXG5cdFx0XHQgIHByb2R1Y3RWZXJ0aWNhbCA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tcHJvZHVjdC12ZXJ0aWNhbCcpO1xyXG5cclxuXHRcdHN3aXBlTmF2LmNsYXNzTmFtZSA9ICdzd2lwZXItcGFnaW5hdGlvbic7XHJcblx0XHRzd2lwZUNvbnRyb2xzLmNsYXNzTmFtZSA9ICdzd2lwZXItY29udHJvbHMnO1xyXG5cclxuXHRcdHN3aXBlQnRucy5jbGFzc05hbWUgPSAnc3dpcGVyLW5hdmlnYXRpb24nO1xyXG5cdFx0c3dpcGVQcmV2LmNsYXNzTmFtZSA9ICdzd2lwZXItYnV0dG9uLXByZXYgYnV0dG9uJztcclxuXHRcdHN3aXBlTmV4dC5jbGFzc05hbWUgPSAnc3dpcGVyLWJ1dHRvbi1uZXh0IGJ1dHRvbic7XHJcblxyXG5cdFx0c3dpcGVQcmV2LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsJ1ByZXZpb3VzIHNsaWRlJyk7XHJcblx0XHRzd2lwZU5leHQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywnTmV4dCBzbGlkZScpO1xyXG5cclxuXHRcdHN3aXBlUHJldi5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk05IDExbDQuNi00LjZBLjk5Ljk5IDAgMTExNSA3LjhsLTMuOSAzLjkgMy45IDMuOWEuOTkuOTkgMCAwMS0xLjQgMS40TDkgMTIuNDFBMSAxIDAgMDE5IDExelwiLz48L3N2Zz4nO1xyXG5cdFx0c3dpcGVOZXh0LmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE1IDExYTEgMSAwIDAxMCAxLjRMMTAuNCAxN0EuOTkuOTkgMCAwMTkgMTUuNmwzLjktMy45TDkgNy44YS45OS45OSAwIDAxMS40LTEuNEwxNSAxMXpcIi8+PC9zdmc+JztcclxuXHJcblx0XHRzd2lwZUJ0bnMuYXBwZW5kQ2hpbGQoc3dpcGVQcmV2KTtcclxuXHRcdHN3aXBlQnRucy5hcHBlbmRDaGlsZChzd2lwZU5leHQpO1xyXG5cdFx0c3dpcGVDb250cm9scy5hcHBlbmRDaGlsZChzd2lwZUJ0bnMpO1xyXG5cdFx0c3dpcGVDb250cm9scy5hcHBlbmRDaGlsZChzd2lwZU5hdik7XHJcblx0XHRzd2lwZS5hcHBlbmRDaGlsZChzd2lwZUNvbnRyb2xzKTtcclxuXHJcblx0XHRyZXNldFN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYobXlTd2lwZSkge1xyXG5cclxuXHRcdFx0XHRteVN3aXBlLmRlc3Ryb3koZmFsc2UsdHJ1ZSk7XHJcblx0XHRcdFx0bXlTd2lwZSA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0c3dpcGVCdG5zLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0c3dpcGVDb250cm9scy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRzd2lwZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3N3aXBlci1jb250YWluZXItc3R5bGUnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNsaWVudHMpIHtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHR0b2dnbGVTd2lwZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRteVN3aXBlID0gbmV3IFN3aXBlcihzd2lwZSwge1xyXG5cdFx0XHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vbG9vcGVkU2xpZGVzIDogMixcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXcgOiAnYXV0bycsXHJcblx0XHRcdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0XHRcdG5leHRFbDogc3dpcGVOZXh0LFxyXG5cdFx0XHRcdFx0XHRwcmV2RWw6IHN3aXBlUHJldlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAocHJvZHVjdFZlcnRpY2FsKSB7XHJcblxyXG5cdFx0XHR0b2dnbGVTd2lwZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdFx0bGV0IGluaXRpYWxTbGlkZSA9IDA7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oaXRlbXMsIChlbCxpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtY3VycmVudCcpKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpbml0aWFsU2xpZGUgPSBpbmRleDtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR0b2dnbGVTd2lwZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBib3ggPSBzd2lwZS5jbG9zZXN0KCcucHJvZHVjdF9faW1hZ2VzJyksXHJcblx0XHRcdFx0XHQgIGJpZyA9IGJveC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdF9faW1hZ2VzLWJpZy1pdGVtJyk7XHJcblxyXG5cdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdFx0c2xpZGVBY3RpdmVDbGFzczogJ2lzLWN1cnJlbnQnLFxyXG5cdFx0XHRcdFx0ZGlyZWN0aW9uOiAndmVydGljYWwnLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldyA6IDMsXHJcblx0XHRcdFx0XHRzbGlkZVRvQ2xpY2tlZFNsaWRlOiB0cnVlLFxyXG5cdFx0XHRcdFx0aW5pdGlhbFNsaWRlOiBpbml0aWFsU2xpZGUsXHJcblx0XHRcdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0XHRcdG5leHRFbDogc3dpcGVOZXh0LFxyXG5cdFx0XHRcdFx0XHRwcmV2RWw6IHN3aXBlUHJldlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdG9uOiB7XHJcblx0XHRcdFx0XHRcdHNsaWRlQ2hhbmdlIDogKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRBcnJheS5mcm9tKGJpZywgKGltZyxpbmRleCkgPT4gaW1nLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCBzd2lwZS5zd2lwZXIucmVhbEluZGV4ICE9PSBpbmRleCkpO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRQdWJTdWIuc3Vic2NyaWJlKCd3aW5kb3dXaWR0aFJlc2l6ZScsICgpID0+IHtcclxuXHJcblx0XHRcdGlmICh3aW5kb3cuU3dpcGVyICYmIHRvZ2dsZVN3aXBlKSB7XHJcblxyXG5cdFx0XHRcdHRvZ2dsZVN3aXBlKCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0UHViU3ViLnN1YnNjcmliZSgnc3dpcGVySnNMb2FkJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0Ly8gZWFnZXJcclxuXHRcdFx0QXJyYXkuZnJvbShzd2lwZS5xdWVyeVNlbGVjdG9yQWxsKCdbbG9hZGluZz1cImxhenlcIl0nKSwgaW1nID0+IGltZy5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCdlYWdlcicpKTtcclxuXHJcblx0XHRcdC8vIGhpZGVcclxuXHRcdFx0QXJyYXkuZnJvbShpdGVtcywgZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlKCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHJcblx0c2NyaXB0LnNyYyA9ICcvanMvc3dpcGVyLm1pbi5qcyc7XHJcblxyXG5cdHNjcmlwdC5vbmxvYWQgPSAoKSA9PiBQdWJTdWIucHVibGlzaCgnc3dpcGVySnNMb2FkJyk7XHJcblxyXG5cdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KSwgQ29va2llcy5nZXQoJ2Zhc3RMb2FkU2NyaXB0JykgPyAwIDogMTAwMDApO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1jb250YWluZXInKSk7IiwiKCB0YWJzID0+IHtcclxuXHJcblx0aWYoIXRhYnMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vINC/0YDQvtCy0LXRgNGP0LXQvCBoYXNoXHJcblx0Y29uc3QgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XHJcblxyXG5cdGNvbnN0IGJ0bkhhc2ggPSAoYnRucyxpdGVtcykgPT4ge1xyXG5cclxuXHRcdEFycmF5LmZyb20oYnRucywgKF9idG4sIGluZGV4KSA9PiBzZXRBY3RpdmUoX2J0biwgaXRlbXNbaW5kZXhdLCBfYnRuLmhyZWYgPT09IGxvY2F0aW9uLmhyZWYpKTtcclxuXHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2V0QWN0aXZlID0gKGJ0biwgaXRlbSwgdG9nZ2xlKSA9PiB7XHJcblxyXG5cdFx0YnRuLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScsIHRvZ2dsZSk7XHJcblx0XHRpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScsIHRvZ2dsZSk7XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbSh0YWJzLCB0YWIgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGJ0bnMgPSB0YWIucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2J0bicpLFxyXG5cdFx0XHQgIGl0ZW1zID0gdGFiLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19pdGVtJyksXHJcblx0XHRcdCAgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5cclxuXHRcdGlmKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYnMtLW5hdicpKSB7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGJ0bnMsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRcdGJ0bi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCdidXR0b24nKTtcclxuXHJcblx0XHRcdFx0bmF2LmFwcGVuZENoaWxkKGJ0bik7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdG5hdi5jbGFzc0xpc3QuYWRkKCd0YWJzX19uYXYnKTtcclxuXHRcdFx0dGFiLmluc2VydEJlZm9yZShuYXYsIGl0ZW1zWzBdKTtcclxuXHJcblx0XHRcdHNldEFjdGl2ZShidG5zWzBdLCBpdGVtc1swXSwgdHJ1ZSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdEFycmF5LmZyb20oYnRucywgYnRuID0+IHtcclxuXHJcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+XHJcblx0XHRcdFx0QXJyYXkuZnJvbShidG5zLCAoX2J0biwgaW5kZXgpID0+XHJcblx0XHRcdFx0XHRzZXRBY3RpdmUoX2J0biwgaXRlbXNbaW5kZXhdLCBfYnRuID09PSBidG4pKSlcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRpZihoYXNoKSB7XHJcblxyXG5cdFx0XHRidG5IYXNoKGJ0bnMsaXRlbXMpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IGJ0bkhhc2goYnRucyxpdGVtcykpO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzJykpOyIsIiggdG9vbHRpcHMgPT4ge1xyXG5cclxuXHRpZih0b29sdGlwcy5sZW5ndGgpe1xyXG5cclxuXHRcdEFycmF5LmZyb20odG9vbHRpcHMsIHRvb2x0aXAgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG5cdFx0XHR0aXRsZS5jbGFzc05hbWUgPSAndG9vbHRpcC10aXRsZV9faW5uZXInO1xyXG5cclxuXHRcdFx0dGl0bGUudGV4dENvbnRlbnQgPSB0b29sdGlwLmdldEF0dHJpYnV0ZSgndGl0bGUnKTtcclxuXHRcdFx0dG9vbHRpcC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblx0XHRcdHRvb2x0aXAucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9vbHRpcC10aXRsZScpKTtcclxuLypcclxuXHRcdFx0Y29uc3QgdCA9IG11dGF0aW9uUmVjb3Jkc1swXS50YXJnZXQsXHJcblx0XHRcdFx0ICByZWN0ID0gdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKHJlY3QubGVmdCA+IHdpbmRvdy5pbm5lcldpZHRoIC0gcmVjdC5yaWdodCk7XHJcblxyXG5cdFx0XHRpZih0Lm9wZW4pIHtcclxuXHJcblx0XHRcdFx0Y29uc3QgaW5uZXIgPSB0LnF1ZXJ5U2VsZWN0b3IoJy5hc2tfX2lubmVyJyk7XHJcblxyXG5cdFx0XHRcdGlmKHJlY3QubGVmdCA+IHdpbmRvdy5pbm5lcldpZHRoIC0gcmVjdC5yaWdodCkge1xyXG5cclxuXHRcdFx0XHRcdC8vINC/0YDQsNCy0LXQtVxyXG5cclxuXHRcdFx0XHRcdGlubmVyLnN0eWxlLmxlZnQgPSAnYXV0byc7XHJcblx0XHRcdFx0XHRpbm5lci5zdHlsZS5yaWdodCA9IDA7XHJcblx0XHRcdFx0XHRpbm5lci5zdHlsZS53aWR0aCA9IHJlY3QubGVmdCArICdweCc7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0XHQvLyDQu9C10LLQtdC1XHJcblxyXG5cdFx0XHRcdFx0aW5uZXIuc3R5bGUucmlnaHQgPSAnYXV0byc7XHJcblx0XHRcdFx0XHRpbm5lci5zdHlsZS5sZWZ0ID0gMDtcclxuXHRcdFx0XHRcdGlubmVyLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSByZWN0LnJpZ2h0ICsgJ3B4JztcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuKi8iLCIoIGVsZW1zID0+IHtcclxuXHJcblx0aWYoIWVsZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGVsZW1zLCBlbCA9PiB7XHJcblxyXG5cdFx0Y29uc3Qgc3ZnID0gZWwucXVlcnlTZWxlY3RvcignLmNpcmNsZS1wcm9ncmVzc19fc3ZnJyksXHJcblx0XHRcdCAgdGV4dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5jaXJjbGUtcHJvZ3Jlc3NfX3ZhbHVlJyksXHJcblx0XHRcdCAgdmFsdWUgPSBwYXJzZUludCh0ZXh0LnRleHRDb250ZW50KTtcclxuXHJcblx0XHQvLyDQsNC90LjQvNCw0YbQuNGPINC/0YDQvtCz0YDQtdGB0YHQsFxyXG5cdFx0Y29uc3QgY2lyY2xlID0gc3ZnLnF1ZXJ5U2VsZWN0b3IoJ2NpcmNsZScpLFxyXG5cdFx0XHQgIHBpMnIgPSBwYXJzZUludChjaXJjbGUuZ2V0QXR0cmlidXRlKCdyJykpICogMiAqIE1hdGguUEk7XHJcblxyXG5cdFx0bGV0IGNvdW50ID0gMDtcclxuXHJcblx0XHRpZih2YWx1ZSA+IDApIHtcclxuXHJcblx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZS1wcm9ncmVzcy0taW5pdCcpO1xyXG5cclxuXHRcdFx0Y29uc3QgaWRUaW1lciA9IHNldEludGVydmFsKCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmKGNvdW50ID09PSB2YWx1ZSkge1xyXG5cclxuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoaWRUaW1lcik7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGV4dC50ZXh0Q29udGVudCA9IGNvdW50Kys7XHJcblxyXG5cdFx0XHRcdGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBwaTJyIC8gMTAwICogY291bnQgKyAnICcgKyBwaTJyKTtcclxuXHJcblx0XHRcdH0sIDEwMDAgLyB2YWx1ZSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaXJjbGUtcHJvZ3Jlc3MnKSk7IiwiKCBlbGVtcyA9PiB7XHJcblxyXG5cdGlmKCFlbGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShlbGVtcywgZWwgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGJhciA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5saW5lLXByb2dyZXNzX19iYXInKSxcclxuXHRcdFx0ICB0ZXh0ID0gZWwucXVlcnlTZWxlY3RvcignLmxpbmUtcHJvZ3Jlc3NfX3ZhbHVlJyksXHJcblx0XHRcdCAgdmFsdWUgPSBwYXJzZUludCh0ZXh0LnRleHRDb250ZW50KTtcclxuXHJcblx0XHQvLyDQsNC90LjQvNCw0YbQuNGPINC/0YDQvtCz0YDQtdGB0YHQsFxyXG5cdFx0bGV0IGNvdW50ID0gMDtcclxuXHJcblx0XHRpZih2YWx1ZSA+IDApIHtcclxuXHJcblx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoJ2xpbmUtcHJvZ3Jlc3MtLWluaXQnKTtcclxuXHJcblx0XHRcdGNvbnN0IGlkVGltZXIgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZihjb3VudCA9PT0gdmFsdWUpIHtcclxuXHJcblx0XHRcdFx0XHRjbGVhckludGVydmFsKGlkVGltZXIpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGJhci5zdHlsZS53aWR0aCA9IGNvdW50ICsgJyUnO1xyXG5cclxuXHRcdFx0XHR0ZXh0LnRleHRDb250ZW50ID0gY291bnQrKztcclxuXHJcblx0XHRcdH0sIDEwMDAgLyB2YWx1ZSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5lLXByb2dyZXNzJykpOyJdfQ==
