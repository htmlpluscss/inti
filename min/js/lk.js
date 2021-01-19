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
				window.SC ={};


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
( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, form => {

		const formEnabled = () => {

			form.removeEventListener("input", formEnabled);

			Array.from(form.querySelectorAll('.company-form__disabled'), el => el.disabled = false);

		};

		form.addEventListener("input", formEnabled);

		// отправка формы
		form.addEventListener('submit', event => {

			event.preventDefault();

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			});

		});

		// data-radio-toggle
		const btnRadio = form.querySelectorAll('[data-radio-toggle]'),
			  items = form.querySelectorAll('.company-form__radio-toggle-item');

		Array.from(btnRadio, btn =>
			btn.addEventListener("change", () =>
				Array.from(items, el =>
					el.classList.toggle('hide', btn.getAttribute('data-radio-toggle') === 'hide'))));

		// remove
		const btnRemove = form.querySelector('.company-form__remove');

		btnRemove && btnRemove.addEventListener('click', () => {

			const item = btnRemove.closest('.accordion__item');

			item.addEventListener(INTI.cssAnimation('transition'), () => {

				item.remove();
				document.querySelector('.company__add').classList.remove('hide');

			});

			item.classList.remove('accordion__item--open');

			setTimeout( () => {

				item.style.opacity = 0;

			}, 1000);

		});

	});

	// CODE sms
	const formCode = document.querySelector('.company-form--code');

	// отправка формы code
	formCode.addEventListener('submit', event => {

		event.preventDefault();

		fetch(formCode.getAttribute('action'), {
			method: 'POST',
			body: new FormData(formCode)
		});

		// state sms отправлено

		formCode.querySelector('[name="send-code"]').value = 1;

		Array.from(formCode.querySelectorAll('.company-form__code-hide'), el => el.classList.add('hide'));
		Array.from(formCode.querySelectorAll('.company-form__code-show'), el => el.classList.remove('hide'));

	});

	// reset формы code
	formCode.addEventListener('reset', event => {

		// state sms отправлено

		formCode.querySelector('[name="send-code"]').value = 0;

		Array.from(formCode.querySelectorAll('.company-form__code-hide'), el => el.classList.remove('hide'));
		Array.from(formCode.querySelectorAll('.company-form__code-show'), el => el.classList.add('hide'));

	});

})(document.querySelectorAll('.company-form'));
( items => {

	if(!items.length) {

		return;

	}

	const handler = (el, clone = el.cloneNode(true)) => {

		const btn = el.querySelector('.file-input__btn'),
			  input = el.querySelector('input[type="file"]');

		let group = el.closest('.file-input-group');

		input.addEventListener("change", event => {

			btn.textContent = input.value;
			btn.classList.add('btn--light');
			btn.classList.remove('btn--silver');

			if(group) {

				const _clone = clone.cloneNode(true);

				group.appendChild(_clone);

				_clone.querySelector('input[type="file"]').setAttribute('name', _clone.querySelector('input[type="file"]').getAttribute('name') + '-' + group.querySelectorAll('.file-input').length);

				handler(_clone, clone);

				group = null;

			}

		});

	};

	Array.from(items, el => handler(el));

})(document.querySelectorAll('.file-input'));
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

})(document.querySelector('.modal'));
( selects => {

	if(!selects.length) {

		return;

	}

	Array.from(selects, select => {

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

		const control = select.querySelector('select'),
			option = select.querySelectorAll('option'),
			selected = select.querySelector('option[selected]'),
			valueText = select.querySelector('.select__value-inner'),
			list = document.createElement('div');

		list.className = 'select__list';

		control.addEventListener("change", () => {

			valueText.textContent = control.querySelector('[value="' + control.value + '"]').textContent;

			select.classList.remove('select--default');

		});

		if(control.value === 'none'){

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

		const CustomEventChange = new CustomEvent("change", {
			detail: {
				hazcheeseburger: true
			}
		});

		select.addEventListener("click", event => {

			if(event.target.classList.contains('select__list-item')){

				control.value = event.target.getAttribute('value');

				control.dispatchEvent(CustomEventChange);

			}

		});

		select.appendChild(list);

	});

	window.addEventListener("click", event => {

		const isSelect = event.target.closest('.select');

		Array.from(selects, select => {

			select.classList.toggle('select--open', select === isSelect && !isSelect.classList.contains('select--open'));

		});

	});

})(document.querySelectorAll('.select'));
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
			  items = tab.querySelectorAll('.tabs__item');

		Array.from(btns, btn =>
			btn.addEventListener('click', event =>
				Array.from(btns, (_btn, index) =>
					setActive(_btn, items[index], _btn === btn))));

		if(hash) {

			btnHash(btns,items);
			window.addEventListener('hashchange', () => btnHash(btns,items));

		}

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

		ico.innerHTML = '<svg viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12a8 8 0 11-16 0 8 8 0 0116 0zm-5.74-3.87a3.18 3.18 0 01.56 3.78c-.38.7-1 1.22-1.74 1.49a.4.4 0 00-.28.38v.62a.8.8 0 01-1.6 0V12.8A.8.8 0 0112 12c.88 0 1.6-.72 1.6-1.6a1.6 1.6 0 00-3.2 0 .8.8 0 01-1.59.08l-.01-.12c.01-2 1.86-3.55 3.95-3.07.57.13 1.1.42 1.51.84zM12.8 16.8a.8.8 0 11-1.6 0 .8.8 0 011.6 0z"/></svg>';


		let observer = new MutationObserver(mutationRecords => {

			const t = mutationRecords[0].target,
				  rect = t.getBoundingClientRect();

			console.log(rect.left > window.innerWidth - rect.right);
/*
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

*/		});

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
(function(items){

	if(!items.length) {

		return;

	}

	SC.showAlert = function (selector, text) {

		Array.prototype.forEach.call(items, function(el){

			if(el.classList.contains('alert__item--' + selector)){

				var _show = el,
					autoClose = el.getAttribute('data-auto-close');

				if(text){

					_show.querySelector('.alert__text').textContent = text;

				}

				_show.classList.add('is-show');

				if(autoClose) {

					setTimeout(function(){

						_show.classList.remove('is-show');

					}, autoClose * 1000);

				}

			}

		});

	};

	var btnClose = document.querySelectorAll('.alert__close');

	Array.prototype.forEach.call(btnClose, function(el){

		el.addEventListener('click', function() {

			el.closest('.alert__item').classList.remove('is-show');

		});

	});

})(document.querySelectorAll('.alert__item'));
(function(imgBlock){

	if(imgBlock) {

		var bigImg = document.querySelector('.catalog-item__photo'),
			indexActive = 0;

		imgBlock.addEventListener('click', function(e){

			if(e.target.closest('.swiper-button-prev')) {

				console.log('swiper-button-prev')

			}
			if(e.target.closest('.swiper-button-next')) {

				console.log('swiper-button-next')

			}
			if(e.target.closest('.catalog-item__swiper-item')) {

				console.log('catalog-item__swiper-item')

			}

		});

		imgBlock.addEventListener('mousemove', function(e){

			var swiperItem = e.target.closest('.catalog-item__swiper-item');

			if(swiperItem && !swiperItem.classList.contains('is-active')) {

				Array.prototype.forEach.call(imgBlock.querySelectorAll('.catalog-item__swiper-item'), function(el,index){

					if(el === swiperItem) {

						indexActive = index;
						el.classList.add('is-active');

					}
					else {

						el.classList.remove('is-active');

					}

				});

				Array.prototype.forEach.call(bigImg.children, function(el,index){

					el.classList.toggle('visuallyhidden', index !== indexActive);

				});

			}

		});

	}

})(document.querySelector('.catalog-item__swiper-box'));
(function(btns){

	return;

/*
	if(btns.length == 0 && !navigator.clipboard) {

		return;

	}

	Array.prototype.forEach.call(btns, function(btn){

		btn.addEventListener('click', function(e) {

			e.preventDefault();

			var text = btn.getAttribute('href');
			navigator.clipboard.writeText(text);

			SC.showAlert('copy-buffer');

		});

	});*/

	var clipboard = new ClipboardJS(btns);

	clipboard.on('success', function(e) {

		SC.showAlert('copy-buffer', e.trigger.getAttribute('data-alert'));

	});

	clipboard.on('error', function(e) {

		alert(e.text);
		window.open(e.text);

	});

})(document.querySelectorAll('.copy-buffer'));
(function(elems){

	if(elems.length){

		Array.prototype.forEach.call(elems, function(elem){

			var text = elem.querySelector('.date-calendar__text'),
				input = elem.querySelector('.date-calendar__input');

			input.addEventListener('change',function(){

				var date = new Date(input.value);
				text.textContent = ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear();

			});

		});

	}

})(document.querySelectorAll('.date-calendar'));
(function(items){

	if(!!window.MSInputMethodContext && !!document.documentMode) {

		return;

	}

	if(items.length){

		function closeAllOpen(e) {

			var target = e.target.closest('.details__btn');

			Array.prototype.forEach.call(items, function(el){

				if(el !== target){

					el.open = false;

				}

			});

		}

		window.addEventListener('touchstart', function(e) {

			closeAllOpen(e);

		});

		window.addEventListener('click', function(e) {

			closeAllOpen(e);

		});

		Array.prototype.forEach.call(items, function(details){

			var summary = details.querySelector('.details__marker');

			summary.innerHTML = '<svg width="18" height="18" viewBox="0 0 18 18"><path d="M9 17.3333C4.3975 17.3333.6667 13.6025.6667 9 .6667 4.3975 4.3975.6667 9 .6667c4.6025 0 8.3333 3.7308 8.3333 8.3333 0 4.6025-3.7308 8.3333-8.3333 8.3333zM8.1667 11.5v1.6667h1.6666V11.5H8.1667zm1.6666-1.3708a2.9186 2.9186 0 002.0457-3.2155A2.9185 2.9185 0 009 4.4167a2.9175 2.9175 0 00-2.8608 2.3441l1.635.3275A1.25 1.25 0 119 8.5833a.8333.8333 0 00-.8333.8334v1.25h1.6666v-.5375z"/></svg>';

			summary.addEventListener('mousemove', function() {

	//			details.open = true;

			});

			summary.addEventListener('mouseleave', function() {

	//			details.open = false;

			});

		});


		var observer = new MutationObserver(function (mutations) {

			mutations.forEach(function (mutation) {

				// Елемент у которого измелился атрибут
				var details = mutation.target;

				// Если елемент был закрыт — ничего не делаем
				if (!details.open) {
					return;
				}

				var text = details.querySelector('.details__text'),
					rect = text.getBoundingClientRect(),
					right = document.documentElement.clientWidth - rect.right,
					left = rect.left,
					width = (rect.left - rect.right) / 2; // отрицательная половина ширины

				console.log(right,left )

				if(right < 0){

					text.style.marginLeft = (width + right - 10) + 'px';

				}

				if(left < 0){

					text.style.marginLeft = (width - left + 10) + 'px';

				}

/*
				// Перебираем открытые елементы details
				items.forEach(function (el) {

					// Исключаем если закрыт
					if (!el.open) {
						return;
					}

					// Исключаем из перебора елемент который мы только что открыли
					if (el === details) {
						return;
					}

					// Закрываем все остальные елемент details
					el.open = false;

				});
*/
			});

		});

		// Наблюдаем за изменением только одного атрибута
		var config = {
			attributeFilter: ['open']
		};

		// Вешаем наблюдатель на все елементы details внутри акордиона
		items.forEach(function (el) {
			return observer.observe(el, config);
		});

	}

})(document.querySelectorAll('.details__btn'));
(function(btn){

	if(btn) {

		var filter = document.querySelector('.filter-hidden-head');

		btn.addEventListener('click', function () {

			if(btn.classList.contains('is-open')){

				btn.classList.remove('is-open');
				filter.classList.add('is-hidden');

			}
			else {

				btn.classList.add('is-open');
				filter.classList.remove('is-hidden');

			}

		});

	}

})(document.querySelector('.form-head-right__toggle-filter'));
(function(quantity){

	if(quantity.length) {

		Array.prototype.forEach.call(quantity, function(el){

			var up = el.querySelector('.input-quantity__plus'),
				down = el.querySelector('.input-quantity__minus'),
				text = el.querySelector('.input-quantity__text'),
				input = el.querySelector('.input-quantity__input'),
				max = parseInt(input.getAttribute('data-max')),
				min = parseInt(input.getAttribute('data-min')),
				value = parseInt(input.value);

			up.addEventListener('click',function(){

				value++;

				if(!!max && value > max) {

					value = max;

				}

				input.value = value;
				text.textContent = value;

			});

			down.addEventListener('click',function(){

				value--;

				if(!!min) {

					if(value < min) {

						value = min;

					}

				}
				else if(value < 1) {

					value = 1;

				}

				input.value = value;
				text.textContent = value;

			});

			input.addEventListener('focus',function(){

				setTimeout(function(){

					input.setSelectionRange(0,9);

				},100);

			});

			input.addEventListener('keyup',function(e){

				if (e.keyCode == 13) {

					this.blur();

				}

				var val = parseInt(this.value);

				if (!isNaN(val)) {

					value = val;

					if(!!max && value > max) {

						value = max;

					}
					if(!!min) {

						if(value < min) {

							value = min;

						}

					}
					else if(value < 1) {

						value = 1;

					}

					this.value = value;
					text.textContent = value;

				}
				else {

					text.textContent = this.value;

				}

			});

		});

	}

})(document.querySelectorAll('.input-quantity'));
(function(btns){

	if(btns.length == 0) {

		return;

	}

	// create and dispatch the event
	var event = new CustomEvent("change");

	Array.prototype.forEach.call(btns, function(btn){

		btn.addEventListener('change', function() {

			var selector = btn.getAttribute('data-show'),
				show = document.querySelectorAll(selector);

			if(show.length) {

				Array.prototype.forEach.call(show, function(el){

					el.classList.toggle('hide', !btn.checked);

				});

			}

		});

		btn.dispatchEvent(event);

	});

})(document.querySelectorAll('.checkbox-toggle-show'));

document.addEventListener('click', function (e) {

	if(e.target.closest('.btn-menu-toggle') || e.target.classList.contains('menu-show')){

		if(SC.OpenMenu) {

			document.body.classList.remove('menu-show');

			window.scrollTo(0,SC.windowScrollOld);

			SC.OpenMenu = false;

		}
		else {

			SC.OpenMenu = true;

			// записываем значение скролла страницы
			SC.windowScrollOld = window.pageYOffset;
			window.scrollTo(0,0);

			document.body.classList.add('menu-show');

		}

	}

});

(function(btn){

	if(btn) {

		btn.addEventListener('click', function () {

			document.body.classList.toggle('menu-show');

			PubSub.publish('SwiperUpdate');

		});

	}

})(document.querySelector('.left-bar__btn-toggle'));

(function(items){

	if(!items.length) {

		return;

	}

	Array.prototype.forEach.call(items, function(el){

		var btn = el.querySelector('.more-slide__btn'),
			box = el.querySelector('.more-slide__box'),
			inner = el.querySelector('.more-slide__inner');

		btn.addEventListener('click', function () {

			box.classList.toggle('is-open');

		});

		box.addEventListener(SC.cssAnimation('transition'),function(){

			btn.classList.toggle('is-open', box.classList.contains('is-open'));

		});

	});

})(document.querySelectorAll('.more-slide'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YnN1Yi5taW4uanMiLCJqcy5qcyIsImFjY29yZGlvbi5qcyIsImNvbXBhbnktZm9ybS5qcyIsImZpbGUtaW5wdXQuanMiLCJtb2RhbC5qcyIsInNlbGVjdC5qcyIsInRhYnMuanMiLCJ0b29sdGlwLmpzIiwiX2FsZXJ0LmpzIiwiX2NhdGFsb2cuanMiLCJfY29weS1idWZmZXIuanMiLCJfZGF0ZS1jYWxlbmRhci5qcyIsIl9kZXRhaWxzLmpzIiwiX2Zvcm0taGVhZC1yaWdodC5qcyIsIl9pbnB1dC1xdWFudGl0eS5qcyIsIl9qcy10b2dnbGUtc2hvdy5qcyIsIl9tZW51LmpzIiwiX21vcmUtc2xpZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImxrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMCwyMDExLDIwMTIsMjAxMywyMDE0IE1vcmdhbiBSb2RlcmljayBodHRwOi8vcm9kZXJpY2suZGtcclxuICogTGljZW5zZTogTUlUIC0gaHR0cDovL21yZ25yZHJjay5taXQtbGljZW5zZS5vcmdcclxuICpcclxuICogaHR0cHM6Ly9naXRodWIuY29tL21yb2Rlcmljay9QdWJTdWJKU1xyXG4gKi9cclxuIWZ1bmN0aW9uKG4sdCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9e307bi5QdWJTdWI9cjt2YXIgZT1uLmRlZmluZTshZnVuY3Rpb24obil7dmFyIHQ9e30scj0tMTtmdW5jdGlvbiBlKG4pe3ZhciB0O2Zvcih0IGluIG4paWYobi5oYXNPd25Qcm9wZXJ0eSh0KSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBvKG4sdCxyKXt0cnl7bih0LHIpfWNhdGNoKG4pe3NldFRpbWVvdXQoZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKCl7dGhyb3cgbn19KG4pLDApfX1mdW5jdGlvbiBpKG4sdCxyKXtuKHQscil9ZnVuY3Rpb24gdShuLHIsZSx1KXt2YXIgZixzPXRbcl0sYz11P2k6bztpZih0Lmhhc093blByb3BlcnR5KHIpKWZvcihmIGluIHMpcy5oYXNPd25Qcm9wZXJ0eShmKSYmYyhzW2ZdLG4sZSl9ZnVuY3Rpb24gZihuLHIsbyxpKXt2YXIgZj1mdW5jdGlvbihuLHQscil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9U3RyaW5nKG4pLG89ZS5sYXN0SW5kZXhPZihcIi5cIik7Zm9yKHUobixuLHQscik7LTEhPT1vOyllPWUuc3Vic3RyKDAsbyksbz1lLmxhc3RJbmRleE9mKFwiLlwiKSx1KG4sZSx0LHIpfX0obj1cInN5bWJvbFwiPT10eXBlb2Ygbj9uLnRvU3RyaW5nKCk6bixyLGkpLHM9ZnVuY3Rpb24obil7dmFyIHI9U3RyaW5nKG4pLG89Qm9vbGVhbih0Lmhhc093blByb3BlcnR5KHIpJiZlKHRbcl0pKSxpPXIubGFzdEluZGV4T2YoXCIuXCIpO2Zvcig7IW8mJi0xIT09aTspcj1yLnN1YnN0cigwLGkpLGk9ci5sYXN0SW5kZXhPZihcIi5cIiksbz1Cb29sZWFuKHQuaGFzT3duUHJvcGVydHkocikmJmUodFtyXSkpO3JldHVybiBvfShuKTtyZXR1cm4hIXMmJighMD09PW8/ZigpOnNldFRpbWVvdXQoZiwwKSwhMCl9bi5wdWJsaXNoPWZ1bmN0aW9uKHQscil7cmV0dXJuIGYodCxyLCExLG4uaW1tZWRpYXRlRXhjZXB0aW9ucyl9LG4ucHVibGlzaFN5bmM9ZnVuY3Rpb24odCxyKXtyZXR1cm4gZih0LHIsITAsbi5pbW1lZGlhdGVFeGNlcHRpb25zKX0sbi5zdWJzY3JpYmU9ZnVuY3Rpb24obixlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXJldHVybiExO249XCJzeW1ib2xcIj09dHlwZW9mIG4/bi50b1N0cmluZygpOm4sdC5oYXNPd25Qcm9wZXJ0eShuKXx8KHRbbl09e30pO3ZhciBvPVwidWlkX1wiK1N0cmluZygrK3IpO3JldHVybiB0W25dW29dPWUsb30sbi5zdWJzY3JpYmVPbmNlPWZ1bmN0aW9uKHQscil7dmFyIGU9bi5zdWJzY3JpYmUodCxmdW5jdGlvbigpe24udW5zdWJzY3JpYmUoZSksci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KTtyZXR1cm4gbn0sbi5jbGVhckFsbFN1YnNjcmlwdGlvbnM9ZnVuY3Rpb24oKXt0PXt9fSxuLmNsZWFyU3Vic2NyaXB0aW9ucz1mdW5jdGlvbihuKXt2YXIgcjtmb3IociBpbiB0KXQuaGFzT3duUHJvcGVydHkocikmJjA9PT1yLmluZGV4T2YobikmJmRlbGV0ZSB0W3JdfSxuLnVuc3Vic2NyaWJlPWZ1bmN0aW9uKHIpe3ZhciBlLG8saSx1PVwic3RyaW5nXCI9PXR5cGVvZiByJiYodC5oYXNPd25Qcm9wZXJ0eShyKXx8ZnVuY3Rpb24obil7dmFyIHI7Zm9yKHIgaW4gdClpZih0Lmhhc093blByb3BlcnR5KHIpJiYwPT09ci5pbmRleE9mKG4pKXJldHVybiEwO3JldHVybiExfShyKSksZj0hdSYmXCJzdHJpbmdcIj09dHlwZW9mIHIscz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByLGM9ITE7aWYoIXUpe2ZvcihlIGluIHQpaWYodC5oYXNPd25Qcm9wZXJ0eShlKSl7aWYobz10W2VdLGYmJm9bcl0pe2RlbGV0ZSBvW3JdLGM9cjticmVha31pZihzKWZvcihpIGluIG8pby5oYXNPd25Qcm9wZXJ0eShpKSYmb1tpXT09PXImJihkZWxldGUgb1tpXSxjPSEwKX1yZXR1cm4gY31uLmNsZWFyU3Vic2NyaXB0aW9ucyhyKX19KHIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUuYW1kP2UoZnVuY3Rpb24oKXtyZXR1cm4gcn0pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiYodm9pZCAwIT09bW9kdWxlJiZtb2R1bGUuZXhwb3J0cyYmKGV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9ciksZXhwb3J0cy5QdWJTdWI9cixtb2R1bGUuZXhwb3J0cz1leHBvcnRzPXIpfShcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3d8fHRoaXMpOyIsIi8qISBVVEYtOFxyXG5cclxuwqkga292cmlnaW5cclxu0JLRgdC1INC/0YDQsNCy0LAg0YDQsNC30YDQtdGI0LXQvdGLXHJcbtC60YDQsNGB0LjQstGL0Lkg0LTQuNC30LDQudC9INC00L7Qu9C20LXQvSDQuNC80LXRgtGMINC60YDQsNGB0LjQstGL0Lkg0LrQvtC0wq5cclxuXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9odG1scGx1c2Nzcy9cclxuXHJcbiovXHJcblx0XHRcdFx0d2luZG93LlNDID17fTtcclxuXHJcblxyXG4oICgpID0+IHtcclxuXHJcblx0d2luZG93LklOVEkgPSB7fTtcclxuXHRJTlRJLnJlc2l6ZVRpbWVvdXQgPSBudWxsO1xyXG5cdElOVEkud2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKCFJTlRJLnJlc2l6ZVRpbWVvdXQpIHtcclxuXHJcblx0XHRcdFx0SU5USS5yZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiAge1xyXG5cclxuXHRcdFx0XHRcdElOVEkucmVzaXplVGltZW91dCA9IG51bGw7XHJcblxyXG5cdFx0XHRcdFx0aWYoSU5USS53aW5kb3dXaWR0aE9MZCAhPT0gd2luZG93LmlubmVyV2lkdGgpIHtcclxuXHJcblx0XHRcdFx0XHRcdElOVEkud2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcblx0XHRcdFx0XHRcdFB1YlN1Yi5wdWJsaXNoKCd3aW5kb3dXaWR0aFJlc2l6ZScpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSwgMTAwKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuXHJcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuXHJcblx0XHRcdFB1YlN1Yi5wdWJsaXNoKCd3aW5kb3dTY3JvbGwnKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0UHViU3ViLnB1Ymxpc2goJ0RPTUNvbnRlbnRMb2FkZWQnKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0UHViU3ViLnB1Ymxpc2goJ3BhZ2VMb2FkJyk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQsNC90LjQvNCw0YbQuNC5XHJcblx0SU5USS5jc3NBbmltYXRpb24gPSBhPT57bGV0IGIsYyxkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjc3NhbmltYXRpb25cIik7c3dpdGNoKGEpe2Nhc2UnYW5pbWF0aW9uJzpiPXtcImFuaW1hdGlvblwiOlwiYW5pbWF0aW9uZW5kXCIsXCJPQW5pbWF0aW9uXCI6XCJvQW5pbWF0aW9uRW5kXCIsXCJNb3pBbmltYXRpb25cIjpcImFuaW1hdGlvbmVuZFwiLFwiV2Via2l0QW5pbWF0aW9uXCI6XCJ3ZWJraXRBbmltYXRpb25FbmRcIn07YnJlYWs7Y2FzZSd0cmFuc2l0aW9uJzpiPXtcInRyYW5zaXRpb25cIjpcInRyYW5zaXRpb25lbmRcIixcIk9UcmFuc2l0aW9uXCI6XCJvVHJhbnNpdGlvbkVuZFwiLFwiTW96VHJhbnNpdGlvblwiOlwidHJhbnNpdGlvbmVuZFwiLFwiV2Via2l0VHJhbnNpdGlvblwiOlwid2Via2l0VHJhbnNpdGlvbkVuZFwifX1mb3IoYyBpbiBiKWlmKGQuc3R5bGVbY10hPT11bmRlZmluZWQpcmV0dXJuIGJbY119XHJcblxyXG5cdC8vIERldGVybWluZSBpZiBhbiBlbGVtZW50IGlzIGluIHRoZSB2aXNpYmxlIHZpZXdwb3J0XHJcblx0SU5USS5pc0luVmlld3BvcnQgPSBlbCA9PiB7XHJcblx0XHRjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRyZXR1cm4gKHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHR9XHJcblxyXG59KSgpOyIsIiggaXRlbXMgPT4ge1xyXG5cclxuXHRpZighaXRlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oaXRlbXMsIGFjY29yZGlvbiA9PiB7XHJcblxyXG5cdFx0bGV0IGFuaW1hdGVPbiA9IGZhbHNlO1xyXG5cclxuXHRcdGNvbnN0IGJ0bnMgPSBhY2NvcmRpb24ucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9fYnRuJyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShidG5zLCBidG4gPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgaXRlbSA9IGJ0bi5jbG9zZXN0KCcuYWNjb3JkaW9uX19pdGVtJyksXHJcblx0XHRcdFx0ICBoZWFkID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19oZWFkJyksXHJcblx0XHRcdFx0ICBib2R5ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19ib2R5Jyk7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGFuaW1hdGVPbiA9IHRydWU7XHJcblxyXG5cdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnYWNjb3JkaW9uX19pdGVtLS1vcGVuJyk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGJvZHkuYWRkRXZlbnRMaXN0ZW5lcihJTlRJLmNzc0FuaW1hdGlvbigndHJhbnNpdGlvbicpLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmKGFuaW1hdGVPbiAmJiAhSU5USS5pc0luVmlld3BvcnQoaGVhZCkpe1xyXG5cclxuXHRcdFx0XHRcdGhlYWQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0YW5pbWF0ZU9uID0gZmFsc2U7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uJykpOyIsIiggaXRlbXMgPT4ge1xyXG5cclxuXHRpZighaXRlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oaXRlbXMsIGZvcm0gPT4ge1xyXG5cclxuXHRcdGNvbnN0IGZvcm1FbmFibGVkID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0Zm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZm9ybUVuYWJsZWQpO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wYW55LWZvcm1fX2Rpc2FibGVkJyksIGVsID0+IGVsLmRpc2FibGVkID0gZmFsc2UpO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZm9ybUVuYWJsZWQpO1xyXG5cclxuXHRcdC8vINC+0YLQv9GA0LDQstC60LAg0YTQvtGA0LzRi1xyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIGRhdGEtcmFkaW8tdG9nZ2xlXHJcblx0XHRjb25zdCBidG5SYWRpbyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcmFkaW8tdG9nZ2xlXScpLFxyXG5cdFx0XHQgIGl0ZW1zID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGFueS1mb3JtX19yYWRpby10b2dnbGUtaXRlbScpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oYnRuUmFkaW8sIGJ0biA9PlxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PlxyXG5cdFx0XHRcdEFycmF5LmZyb20oaXRlbXMsIGVsID0+XHJcblx0XHRcdFx0XHRlbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1yYWRpby10b2dnbGUnKSA9PT0gJ2hpZGUnKSkpKTtcclxuXHJcblx0XHQvLyByZW1vdmVcclxuXHRcdGNvbnN0IGJ0blJlbW92ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmNvbXBhbnktZm9ybV9fcmVtb3ZlJyk7XHJcblxyXG5cdFx0YnRuUmVtb3ZlICYmIGJ0blJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGl0ZW0gPSBidG5SZW1vdmUuY2xvc2VzdCgnLmFjY29yZGlvbl9faXRlbScpO1xyXG5cclxuXHRcdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKElOVEkuY3NzQW5pbWF0aW9uKCd0cmFuc2l0aW9uJyksICgpID0+IHtcclxuXHJcblx0XHRcdFx0aXRlbS5yZW1vdmUoKTtcclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGFueV9fYWRkJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGlvbl9faXRlbS0tb3BlbicpO1xyXG5cclxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpdGVtLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG5cclxuXHRcdFx0fSwgMTAwMCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyBDT0RFIHNtc1xyXG5cdGNvbnN0IGZvcm1Db2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBhbnktZm9ybS0tY29kZScpO1xyXG5cclxuXHQvLyDQvtGC0L/RgNCw0LLQutCwINGE0L7RgNC80YsgY29kZVxyXG5cdGZvcm1Db2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGZldGNoKGZvcm1Db2RlLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtQ29kZSlcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIHN0YXRlIHNtcyDQvtGC0L/RgNCw0LLQu9C10L3QvlxyXG5cclxuXHRcdGZvcm1Db2RlLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwic2VuZC1jb2RlXCJdJykudmFsdWUgPSAxO1xyXG5cclxuXHRcdEFycmF5LmZyb20oZm9ybUNvZGUucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBhbnktZm9ybV9fY29kZS1oaWRlJyksIGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XHJcblx0XHRBcnJheS5mcm9tKGZvcm1Db2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wYW55LWZvcm1fX2NvZGUtc2hvdycpLCBlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8gcmVzZXQg0YTQvtGA0LzRiyBjb2RlXHJcblx0Zm9ybUNvZGUuYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Ly8gc3RhdGUgc21zINC+0YLQv9GA0LDQstC70LXQvdC+XHJcblxyXG5cdFx0Zm9ybUNvZGUucXVlcnlTZWxlY3RvcignW25hbWU9XCJzZW5kLWNvZGVcIl0nKS52YWx1ZSA9IDA7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShmb3JtQ29kZS5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGFueS1mb3JtX19jb2RlLWhpZGUnKSwgZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcclxuXHRcdEFycmF5LmZyb20oZm9ybUNvZGUucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBhbnktZm9ybV9fY29kZS1zaG93JyksIGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBhbnktZm9ybScpKTsiLCIoIGl0ZW1zID0+IHtcclxuXHJcblx0aWYoIWl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBoYW5kbGVyID0gKGVsLCBjbG9uZSA9IGVsLmNsb25lTm9kZSh0cnVlKSkgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGJ0biA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5maWxlLWlucHV0X19idG4nKSxcclxuXHRcdFx0ICBpbnB1dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJyk7XHJcblxyXG5cdFx0bGV0IGdyb3VwID0gZWwuY2xvc2VzdCgnLmZpbGUtaW5wdXQtZ3JvdXAnKTtcclxuXHJcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGJ0bi50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlO1xyXG5cdFx0XHRidG4uY2xhc3NMaXN0LmFkZCgnYnRuLS1saWdodCcpO1xyXG5cdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLS1zaWx2ZXInKTtcclxuXHJcblx0XHRcdGlmKGdyb3VwKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IF9jbG9uZSA9IGNsb25lLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcblx0XHRcdFx0Z3JvdXAuYXBwZW5kQ2hpbGQoX2Nsb25lKTtcclxuXHJcblx0XHRcdFx0X2Nsb25lLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykuc2V0QXR0cmlidXRlKCduYW1lJywgX2Nsb25lLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykuZ2V0QXR0cmlidXRlKCduYW1lJykgKyAnLScgKyBncm91cC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsZS1pbnB1dCcpLmxlbmd0aCk7XHJcblxyXG5cdFx0XHRcdGhhbmRsZXIoX2Nsb25lLCBjbG9uZSk7XHJcblxyXG5cdFx0XHRcdGdyb3VwID0gbnVsbDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fTtcclxuXHJcblx0QXJyYXkuZnJvbShpdGVtcywgZWwgPT4gaGFuZGxlcihlbCkpO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbGUtaW5wdXQnKSk7IiwiKCBtb2RhbCA9PiB7XHJcblxyXG5cdGlmKCFtb2RhbCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBpdGVtcyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9faXRlbScpLFxyXG5cdFx0ICBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWxdJyksXHJcblx0XHQgIHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xyXG5cclxuXHRsZXQgYWN0aXZlTW9kYWwgPSBudWxsLFxyXG5cdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdoaWRlJywgKCkgPT4ge1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtc2hvdycpO1xyXG5cdFx0d3JhcHBlci5zdHlsZS50b3AgPSAwO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsd2luZG93U2Nyb2xsKTtcclxuXHRcdGFjdGl2ZU1vZGFsID0gZmFsc2U7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBtb2RhbFNob3cgPSBzZWxlY3RvciA9PiB7XHJcblxyXG5cdFx0aWYoIWFjdGl2ZU1vZGFsKXtcclxuXHJcblx0XHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0YWN0aXZlTW9kYWwgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLScgKyBzZWxlY3Rvcik7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShpdGVtcywgZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgndmlzdWFsbHloaWRkZW4nLCBlbCAhPT0gYWN0aXZlTW9kYWwpKTtcclxuXHJcblx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IC13aW5kb3dTY3JvbGwgKyAncHgnO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1zaG93Jyk7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuXHJcblx0XHRhY3RpdmVNb2RhbC5mb2N1cygpO1xyXG5cclxuXHR9O1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbCcpIHx8IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubW9kYWxfX2Nsb3NlJykpe1xyXG5cclxuXHRcdFx0bW9kYWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJoaWRlXCIpKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRBcnJheS5mcm9tKGJ0bnMsIGJ0biA9PlxyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cclxuXHRcdFx0bW9kYWxTaG93KGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwnKSkpKTtcclxuXHJcblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignbW9kYWxTaG93JywgZXZlbnQgPT4gbW9kYWxTaG93KGV2ZW50LmRldGFpbC5zZWxlY3RvcikpO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykpOyIsIiggc2VsZWN0cyA9PiB7XHJcblxyXG5cdGlmKCFzZWxlY3RzLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKHNlbGVjdHMsIHNlbGVjdCA9PiB7XHJcblxyXG5cdFx0aWYoc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2xpc3QnKSkge1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0XHQgIGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuXHRcdGFycm93LmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTguMyAxMC4zYTEgMSAwIDAwMCAxLjQxbDIuOTMgMi45N2MuMjIuMjEuNS4zMi43OC4zMnMuNTYtLjEuNzctLjMybDIuOTMtMi45NmExLjAxIDEuMDEgMCAwMC0uMzItMS42My45OS45OSAwIDAwLTEuMDkuMjFMMTIgMTIuNjJsLTIuMy0yLjMzYTEgMSAwIDAwLTEuNCAwelwiLz48L3N2Zz4nO1xyXG5cclxuXHRcdHZhbHVlLmNsYXNzTmFtZSA9ICdzZWxlY3RfX3ZhbHVlJztcclxuXHRcdHZhbHVlLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cInNlbGVjdF9fdmFsdWUtaW5uZXJcIj48L3NwYW4+JztcclxuXHJcblx0XHR2YWx1ZS5hcHBlbmRDaGlsZChhcnJvdyk7XHJcblx0XHRzZWxlY3QuYXBwZW5kQ2hpbGQodmFsdWUpO1xyXG5cclxuXHRcdGNvbnN0IGNvbnRyb2wgPSBzZWxlY3QucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksXHJcblx0XHRcdG9wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKSxcclxuXHRcdFx0c2VsZWN0ZWQgPSBzZWxlY3QucXVlcnlTZWxlY3Rvcignb3B0aW9uW3NlbGVjdGVkXScpLFxyXG5cdFx0XHR2YWx1ZVRleHQgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fdmFsdWUtaW5uZXInKSxcclxuXHRcdFx0bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRcdGxpc3QuY2xhc3NOYW1lID0gJ3NlbGVjdF9fbGlzdCc7XHJcblxyXG5cdFx0Y29udHJvbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuXHJcblx0XHRcdHZhbHVlVGV4dC50ZXh0Q29udGVudCA9IGNvbnRyb2wucXVlcnlTZWxlY3RvcignW3ZhbHVlPVwiJyArIGNvbnRyb2wudmFsdWUgKyAnXCJdJykudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0XHRzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0LS1kZWZhdWx0Jyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYoY29udHJvbC52YWx1ZSA9PT0gJ25vbmUnKXtcclxuXHJcblx0XHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtLWRlZmF1bHQnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dmFsdWVUZXh0LnRleHRDb250ZW50ID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJ29wdGlvblt2YWx1ZT1cIicgKyBjb250cm9sLnZhbHVlICsgJ1wiXScpLnRleHRDb250ZW50O1xyXG5cclxuXHRcdEFycmF5LmZyb20ob3B0aW9uLCBlbCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG5cdFx0XHRvLmNsYXNzTmFtZSA9ICdidXR0b24gc2VsZWN0X19saXN0LWl0ZW0nO1xyXG5cclxuXHRcdFx0by5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcblx0XHRcdG8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsLmdldEF0dHJpYnV0ZSgndmFsdWUnKSk7XHJcblxyXG5cdFx0XHRvLnRleHRDb250ZW50ID0gZWwudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0XHRsaXN0LmFwcGVuZENoaWxkKG8pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IEN1c3RvbUV2ZW50Q2hhbmdlID0gbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIsIHtcclxuXHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0aGF6Y2hlZXNlYnVyZ2VyOiB0cnVlXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0aWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0X19saXN0LWl0ZW0nKSl7XHJcblxyXG5cdFx0XHRcdGNvbnRyb2wudmFsdWUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xyXG5cclxuXHRcdFx0XHRjb250cm9sLmRpc3BhdGNoRXZlbnQoQ3VzdG9tRXZlbnRDaGFuZ2UpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdHNlbGVjdC5hcHBlbmRDaGlsZChsaXN0KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlzU2VsZWN0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3QnKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKHNlbGVjdHMsIHNlbGVjdCA9PiB7XHJcblxyXG5cdFx0XHRzZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0LS1vcGVuJywgc2VsZWN0ID09PSBpc1NlbGVjdCAmJiAhaXNTZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3QtLW9wZW4nKSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdCcpKTsiLCIoIHRhYnMgPT4ge1xyXG5cclxuXHRpZighdGFicy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Ly8g0L/RgNC+0LLQtdGA0Y/QtdC8IGhhc2hcclxuXHRjb25zdCBoYXNoID0gbG9jYXRpb24uaGFzaDtcclxuXHJcblx0Y29uc3QgYnRuSGFzaCA9IChidG5zLGl0ZW1zKSA9PiB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShidG5zLCAoX2J0biwgaW5kZXgpID0+IHNldEFjdGl2ZShfYnRuLCBpdGVtc1tpbmRleF0sIF9idG4uaHJlZiA9PT0gbG9jYXRpb24uaHJlZikpO1xyXG5cclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZXRBY3RpdmUgPSAoYnRuLCBpdGVtLCB0b2dnbGUpID0+IHtcclxuXHJcblx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJywgdG9nZ2xlKTtcclxuXHRcdGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJywgdG9nZ2xlKTtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKHRhYnMsIHRhYiA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRucyA9IHRhYi5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19fYnRuJyksXHJcblx0XHRcdCAgaXRlbXMgPSB0YWIucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2l0ZW0nKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGJ0bnMsIGJ0biA9PlxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PlxyXG5cdFx0XHRcdEFycmF5LmZyb20oYnRucywgKF9idG4sIGluZGV4KSA9PlxyXG5cdFx0XHRcdFx0c2V0QWN0aXZlKF9idG4sIGl0ZW1zW2luZGV4XSwgX2J0biA9PT0gYnRuKSkpKTtcclxuXHJcblx0XHRpZihoYXNoKSB7XHJcblxyXG5cdFx0XHRidG5IYXNoKGJ0bnMsaXRlbXMpO1xyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IGJ0bkhhc2goYnRucyxpdGVtcykpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicycpKTsiLCIoIHRvb2x0aXBzID0+IHtcclxuXHJcblx0aWYodG9vbHRpcHMubGVuZ3RoKXtcclxuXHJcblx0XHRBcnJheS5mcm9tKHRvb2x0aXBzLCB0b29sdGlwID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuXHRcdFx0dGl0bGUuY2xhc3NOYW1lID0gJ3Rvb2x0aXAtdGl0bGVfX2lubmVyJztcclxuXHJcblx0XHRcdHRpdGxlLnRleHRDb250ZW50ID0gdG9vbHRpcC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyk7XHJcblx0XHRcdHRvb2x0aXAuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cdFx0XHR0b29sdGlwLnJlbW92ZUF0dHJpYnV0ZSgndGl0bGUnKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvb2x0aXAtdGl0bGUnKSk7XHJcblxyXG4oIHRvb2x0aXBzID0+IHtcclxuXHJcblx0aWYodG9vbHRpcHMubGVuZ3RoKXtcclxuXHJcblx0XHRjb25zdCBpY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG5cdFx0aWNvLmlubmVySFRNTCA9ICc8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMjAgMTJhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS01Ljc0LTMuODdhMy4xOCAzLjE4IDAgMDEuNTYgMy43OGMtLjM4LjctMSAxLjIyLTEuNzQgMS40OWEuNC40IDAgMDAtLjI4LjM4di42MmEuOC44IDAgMDEtMS42IDBWMTIuOEEuOC44IDAgMDExMiAxMmMuODggMCAxLjYtLjcyIDEuNi0xLjZhMS42IDEuNiAwIDAwLTMuMiAwIC44LjggMCAwMS0xLjU5LjA4bC0uMDEtLjEyYy4wMS0yIDEuODYtMy41NSAzLjk1LTMuMDcuNTcuMTMgMS4xLjQyIDEuNTEuODR6TTEyLjggMTYuOGEuOC44IDAgMTEtMS42IDAgLjguOCAwIDAxMS42IDB6XCIvPjwvc3ZnPic7XHJcblxyXG5cclxuXHRcdGxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9uUmVjb3JkcyA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB0ID0gbXV0YXRpb25SZWNvcmRzWzBdLnRhcmdldCxcclxuXHRcdFx0XHQgIHJlY3QgPSB0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2cocmVjdC5sZWZ0ID4gd2luZG93LmlubmVyV2lkdGggLSByZWN0LnJpZ2h0KTtcclxuLypcclxuXHRcdFx0aWYodC5vcGVuKSB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGlubmVyID0gdC5xdWVyeVNlbGVjdG9yKCcuYXNrX19pbm5lcicpO1xyXG5cclxuXHRcdFx0XHRpZihyZWN0LmxlZnQgPiB3aW5kb3cuaW5uZXJXaWR0aCAtIHJlY3QucmlnaHQpIHtcclxuXHJcblx0XHRcdFx0XHQvLyDQv9GA0LDQstC10LVcclxuXHJcblx0XHRcdFx0XHRpbm5lci5zdHlsZS5sZWZ0ID0gJ2F1dG8nO1xyXG5cdFx0XHRcdFx0aW5uZXIuc3R5bGUucmlnaHQgPSAwO1xyXG5cdFx0XHRcdFx0aW5uZXIuc3R5bGUud2lkdGggPSByZWN0LmxlZnQgKyAncHgnO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8g0LvQtdCy0LXQtVxyXG5cclxuXHRcdFx0XHRcdGlubmVyLnN0eWxlLnJpZ2h0ID0gJ2F1dG8nO1xyXG5cdFx0XHRcdFx0aW5uZXIuc3R5bGUubGVmdCA9IDA7XHJcblx0XHRcdFx0XHRpbm5lci5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gcmVjdC5yaWdodCArICdweCc7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcbiovXHRcdH0pO1xyXG5cclxuXHRcdEFycmF5LmZyb20odG9vbHRpcHMsIHRvb2x0aXAgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgYnRuID0gdG9vbHRpcC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1oZWxwX19idG4nKTtcclxuXHJcblx0XHRcdGJ0bi5hcHBlbmRDaGlsZChpY28uY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcblx0XHRcdG9ic2VydmVyLm9ic2VydmUodG9vbHRpcCwge1xyXG5cclxuXHRcdFx0XHRhdHRyaWJ1dGVzIDogdHJ1ZVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRvb2x0aXAtaGVscCcpO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbSh0b29sdGlwcywgdG9vbHRpcCA9PiB7XHJcblxyXG5cdFx0XHRcdGlmKHRhcmdldCAhPT0gdG9vbHRpcCkge1xyXG5cclxuXHRcdFx0XHRcdHRvb2x0aXAub3BlbiA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvb2x0aXAtaGVscCcpKTsiLCIoZnVuY3Rpb24oaXRlbXMpe1xyXG5cclxuXHRpZighaXRlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdFNDLnNob3dBbGVydCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgdGV4dCkge1xyXG5cclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoaXRlbXMsIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRcdGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnYWxlcnRfX2l0ZW0tLScgKyBzZWxlY3Rvcikpe1xyXG5cclxuXHRcdFx0XHR2YXIgX3Nob3cgPSBlbCxcclxuXHRcdFx0XHRcdGF1dG9DbG9zZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1hdXRvLWNsb3NlJyk7XHJcblxyXG5cdFx0XHRcdGlmKHRleHQpe1xyXG5cclxuXHRcdFx0XHRcdF9zaG93LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydF9fdGV4dCcpLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRfc2hvdy5jbGFzc0xpc3QuYWRkKCdpcy1zaG93Jyk7XHJcblxyXG5cdFx0XHRcdGlmKGF1dG9DbG9zZSkge1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdFx0XHRcdF9zaG93LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXNob3cnKTtcclxuXHJcblx0XHRcdFx0XHR9LCBhdXRvQ2xvc2UgKiAxMDAwKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9O1xyXG5cclxuXHR2YXIgYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxlcnRfX2Nsb3NlJyk7XHJcblxyXG5cdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYnRuQ2xvc2UsIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0ZWwuY2xvc2VzdCgnLmFsZXJ0X19pdGVtJykuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2hvdycpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbGVydF9faXRlbScpKTsiLCIoZnVuY3Rpb24oaW1nQmxvY2spe1xyXG5cclxuXHRpZihpbWdCbG9jaykge1xyXG5cclxuXHRcdHZhciBiaWdJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZy1pdGVtX19waG90bycpLFxyXG5cdFx0XHRpbmRleEFjdGl2ZSA9IDA7XHJcblxyXG5cdFx0aW1nQmxvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcblx0XHRcdGlmKGUudGFyZ2V0LmNsb3Nlc3QoJy5zd2lwZXItYnV0dG9uLXByZXYnKSkge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZygnc3dpcGVyLWJ1dHRvbi1wcmV2JylcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0aWYoZS50YXJnZXQuY2xvc2VzdCgnLnN3aXBlci1idXR0b24tbmV4dCcpKSB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdzd2lwZXItYnV0dG9uLW5leHQnKVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRpZihlLnRhcmdldC5jbG9zZXN0KCcuY2F0YWxvZy1pdGVtX19zd2lwZXItaXRlbScpKSB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdjYXRhbG9nLWl0ZW1fX3N3aXBlci1pdGVtJylcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRpbWdCbG9jay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlKXtcclxuXHJcblx0XHRcdHZhciBzd2lwZXJJdGVtID0gZS50YXJnZXQuY2xvc2VzdCgnLmNhdGFsb2ctaXRlbV9fc3dpcGVyLWl0ZW0nKTtcclxuXHJcblx0XHRcdGlmKHN3aXBlckl0ZW0gJiYgIXN3aXBlckl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSkge1xyXG5cclxuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGltZ0Jsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nLWl0ZW1fX3N3aXBlci1pdGVtJyksIGZ1bmN0aW9uKGVsLGluZGV4KXtcclxuXHJcblx0XHRcdFx0XHRpZihlbCA9PT0gc3dpcGVySXRlbSkge1xyXG5cclxuXHRcdFx0XHRcdFx0aW5kZXhBY3RpdmUgPSBpbmRleDtcclxuXHRcdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGJpZ0ltZy5jaGlsZHJlbiwgZnVuY3Rpb24oZWwsaW5kZXgpe1xyXG5cclxuXHRcdFx0XHRcdGVsLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc3VhbGx5aGlkZGVuJywgaW5kZXggIT09IGluZGV4QWN0aXZlKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nLWl0ZW1fX3N3aXBlci1ib3gnKSk7IiwiKGZ1bmN0aW9uKGJ0bnMpe1xyXG5cclxuXHRyZXR1cm47XHJcblxyXG4vKlxyXG5cdGlmKGJ0bnMubGVuZ3RoID09IDAgJiYgIW5hdmlnYXRvci5jbGlwYm9hcmQpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChidG5zLCBmdW5jdGlvbihidG4pe1xyXG5cclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdHZhciB0ZXh0ID0gYnRuLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG5cdFx0XHRuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KTtcclxuXHJcblx0XHRcdFNDLnNob3dBbGVydCgnY29weS1idWZmZXInKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7Ki9cclxuXHJcblx0dmFyIGNsaXBib2FyZCA9IG5ldyBDbGlwYm9hcmRKUyhidG5zKTtcclxuXHJcblx0Y2xpcGJvYXJkLm9uKCdzdWNjZXNzJywgZnVuY3Rpb24oZSkge1xyXG5cclxuXHRcdFNDLnNob3dBbGVydCgnY29weS1idWZmZXInLCBlLnRyaWdnZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWFsZXJ0JykpO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Y2xpcGJvYXJkLm9uKCdlcnJvcicsIGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0XHRhbGVydChlLnRleHQpO1xyXG5cdFx0d2luZG93Lm9wZW4oZS50ZXh0KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29weS1idWZmZXInKSk7IiwiKGZ1bmN0aW9uKGVsZW1zKXtcclxuXHJcblx0aWYoZWxlbXMubGVuZ3RoKXtcclxuXHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVsZW1zLCBmdW5jdGlvbihlbGVtKXtcclxuXHJcblx0XHRcdHZhciB0ZXh0ID0gZWxlbS5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1jYWxlbmRhcl9fdGV4dCcpLFxyXG5cdFx0XHRcdGlucHV0ID0gZWxlbS5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1jYWxlbmRhcl9faW5wdXQnKTtcclxuXHJcblx0XHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdFx0dmFyIGRhdGUgPSBuZXcgRGF0ZShpbnB1dC52YWx1ZSk7XHJcblx0XHRcdFx0dGV4dC50ZXh0Q29udGVudCA9ICgnMCcgKyBkYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpICsgJy4nICsgKCcwJyArIChkYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpICsgJy4nICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlLWNhbGVuZGFyJykpOyIsIihmdW5jdGlvbihpdGVtcyl7XHJcblxyXG5cdGlmKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGlmKGl0ZW1zLmxlbmd0aCl7XHJcblxyXG5cdFx0ZnVuY3Rpb24gY2xvc2VBbGxPcGVuKGUpIHtcclxuXHJcblx0XHRcdHZhciB0YXJnZXQgPSBlLnRhcmdldC5jbG9zZXN0KCcuZGV0YWlsc19fYnRuJyk7XHJcblxyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGl0ZW1zLCBmdW5jdGlvbihlbCl7XHJcblxyXG5cdFx0XHRcdGlmKGVsICE9PSB0YXJnZXQpe1xyXG5cclxuXHRcdFx0XHRcdGVsLm9wZW4gPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZSkge1xyXG5cclxuXHRcdFx0Y2xvc2VBbGxPcGVuKGUpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0XHRcdGNsb3NlQWxsT3BlbihlKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGl0ZW1zLCBmdW5jdGlvbihkZXRhaWxzKXtcclxuXHJcblx0XHRcdHZhciBzdW1tYXJ5ID0gZGV0YWlscy5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsc19fbWFya2VyJyk7XHJcblxyXG5cdFx0XHRzdW1tYXJ5LmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMTggMThcIj48cGF0aCBkPVwiTTkgMTcuMzMzM0M0LjM5NzUgMTcuMzMzMy42NjY3IDEzLjYwMjUuNjY2NyA5IC42NjY3IDQuMzk3NSA0LjM5NzUuNjY2NyA5IC42NjY3YzQuNjAyNSAwIDguMzMzMyAzLjczMDggOC4zMzMzIDguMzMzMyAwIDQuNjAyNS0zLjczMDggOC4zMzMzLTguMzMzMyA4LjMzMzN6TTguMTY2NyAxMS41djEuNjY2N2gxLjY2NjZWMTEuNUg4LjE2Njd6bTEuNjY2Ni0xLjM3MDhhMi45MTg2IDIuOTE4NiAwIDAwMi4wNDU3LTMuMjE1NUEyLjkxODUgMi45MTg1IDAgMDA5IDQuNDE2N2EyLjkxNzUgMi45MTc1IDAgMDAtMi44NjA4IDIuMzQ0MWwxLjYzNS4zMjc1QTEuMjUgMS4yNSAwIDExOSA4LjU4MzNhLjgzMzMuODMzMyAwIDAwLS44MzMzLjgzMzR2MS4yNWgxLjY2NjZ2LS41Mzc1elwiLz48L3N2Zz4nO1xyXG5cclxuXHRcdFx0c3VtbWFyeS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbigpIHtcclxuXHJcblx0Ly9cdFx0XHRkZXRhaWxzLm9wZW4gPSB0cnVlO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRzdW1tYXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcclxuXHJcblx0Ly9cdFx0XHRkZXRhaWxzLm9wZW4gPSBmYWxzZTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHJcblx0XHR2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XHJcblxyXG5cdFx0XHRtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcclxuXHJcblx0XHRcdFx0Ly8g0JXQu9C10LzQtdC90YIg0YMg0LrQvtGC0L7RgNC+0LPQviDQuNC30LzQtdC70LjQu9GB0Y8g0LDRgtGA0LjQsdGD0YJcclxuXHRcdFx0XHR2YXIgZGV0YWlscyA9IG11dGF0aW9uLnRhcmdldDtcclxuXHJcblx0XHRcdFx0Ly8g0JXRgdC70Lgg0LXQu9C10LzQtdC90YIg0LHRi9C7INC30LDQutGA0YvRgiDigJQg0L3QuNGH0LXQs9C+INC90LUg0LTQtdC70LDQtdC8XHJcblx0XHRcdFx0aWYgKCFkZXRhaWxzLm9wZW4pIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZhciB0ZXh0ID0gZGV0YWlscy5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsc19fdGV4dCcpLFxyXG5cdFx0XHRcdFx0cmVjdCA9IHRleHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcblx0XHRcdFx0XHRyaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAtIHJlY3QucmlnaHQsXHJcblx0XHRcdFx0XHRsZWZ0ID0gcmVjdC5sZWZ0LFxyXG5cdFx0XHRcdFx0d2lkdGggPSAocmVjdC5sZWZ0IC0gcmVjdC5yaWdodCkgLyAyOyAvLyDQvtGC0YDQuNGG0LDRgtC10LvRjNC90LDRjyDQv9C+0LvQvtCy0LjQvdCwINGI0LjRgNC40L3Ri1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyaWdodCxsZWZ0IClcclxuXHJcblx0XHRcdFx0aWYocmlnaHQgPCAwKXtcclxuXHJcblx0XHRcdFx0XHR0ZXh0LnN0eWxlLm1hcmdpbkxlZnQgPSAod2lkdGggKyByaWdodCAtIDEwKSArICdweCc7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYobGVmdCA8IDApe1xyXG5cclxuXHRcdFx0XHRcdHRleHQuc3R5bGUubWFyZ2luTGVmdCA9ICh3aWR0aCAtIGxlZnQgKyAxMCkgKyAncHgnO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG4vKlxyXG5cdFx0XHRcdC8vINCf0LXRgNC10LHQuNGA0LDQtdC8INC+0YLQutGA0YvRgtGL0LUg0LXQu9C10LzQtdC90YLRiyBkZXRhaWxzXHJcblx0XHRcdFx0aXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcclxuXHJcblx0XHRcdFx0XHQvLyDQmNGB0LrQu9GO0YfQsNC10Lwg0LXRgdC70Lgg0LfQsNC60YDRi9GCXHJcblx0XHRcdFx0XHRpZiAoIWVsLm9wZW4pIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vINCY0YHQutC70Y7Rh9Cw0LXQvCDQuNC3INC/0LXRgNC10LHQvtGA0LAg0LXQu9C10LzQtdC90YIg0LrQvtGC0L7RgNGL0Lkg0LzRiyDRgtC+0LvRjNC60L4g0YfRgtC+INC+0YLQutGA0YvQu9C4XHJcblx0XHRcdFx0XHRpZiAoZWwgPT09IGRldGFpbHMpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vINCX0LDQutGA0YvQstCw0LXQvCDQstGB0LUg0L7RgdGC0LDQu9GM0L3Ri9C1INC10LvQtdC80LXQvdGCIGRldGFpbHNcclxuXHRcdFx0XHRcdGVsLm9wZW4gPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0fSk7XHJcbiovXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vINCd0LDQsdC70Y7QtNCw0LXQvCDQt9CwINC40LfQvNC10L3QtdC90LjQtdC8INGC0L7Qu9GM0LrQviDQvtC00L3QvtCz0L4g0LDRgtGA0LjQsdGD0YLQsFxyXG5cdFx0dmFyIGNvbmZpZyA9IHtcclxuXHRcdFx0YXR0cmlidXRlRmlsdGVyOiBbJ29wZW4nXVxyXG5cdFx0fTtcclxuXHJcblx0XHQvLyDQktC10YjQsNC10Lwg0L3QsNCx0LvRjtC00LDRgtC10LvRjCDQvdCwINCy0YHQtSDQtdC70LXQvNC10L3RgtGLIGRldGFpbHMg0LLQvdGD0YLRgNC4INCw0LrQvtGA0LTQuNC+0L3QsFxyXG5cdFx0aXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcclxuXHRcdFx0cmV0dXJuIG9ic2VydmVyLm9ic2VydmUoZWwsIGNvbmZpZyk7XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRldGFpbHNfX2J0bicpKTsiLCIoZnVuY3Rpb24oYnRuKXtcclxuXHJcblx0aWYoYnRuKSB7XHJcblxyXG5cdFx0dmFyIGZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItaGlkZGVuLWhlYWQnKTtcclxuXHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRpZihidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpe1xyXG5cclxuXHRcdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cdFx0XHRcdGZpbHRlci5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdGJ0bi5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJyk7XHJcblx0XHRcdFx0ZmlsdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1oZWFkLXJpZ2h0X190b2dnbGUtZmlsdGVyJykpOyIsIihmdW5jdGlvbihxdWFudGl0eSl7XHJcblxyXG5cdGlmKHF1YW50aXR5Lmxlbmd0aCkge1xyXG5cclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwocXVhbnRpdHksIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRcdHZhciB1cCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1xdWFudGl0eV9fcGx1cycpLFxyXG5cdFx0XHRcdGRvd24gPSBlbC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtcXVhbnRpdHlfX21pbnVzJyksXHJcblx0XHRcdFx0dGV4dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1xdWFudGl0eV9fdGV4dCcpLFxyXG5cdFx0XHRcdGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcignLmlucHV0LXF1YW50aXR5X19pbnB1dCcpLFxyXG5cdFx0XHRcdG1heCA9IHBhcnNlSW50KGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1tYXgnKSksXHJcblx0XHRcdFx0bWluID0gcGFyc2VJbnQoaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLW1pbicpKSxcclxuXHRcdFx0XHR2YWx1ZSA9IHBhcnNlSW50KGlucHV0LnZhbHVlKTtcclxuXHJcblx0XHRcdHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0XHR2YWx1ZSsrO1xyXG5cclxuXHRcdFx0XHRpZighIW1heCAmJiB2YWx1ZSA+IG1heCkge1xyXG5cclxuXHRcdFx0XHRcdHZhbHVlID0gbWF4O1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlucHV0LnZhbHVlID0gdmFsdWU7XHJcblx0XHRcdFx0dGV4dC50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0XHR2YWx1ZS0tO1xyXG5cclxuXHRcdFx0XHRpZighIW1pbikge1xyXG5cclxuXHRcdFx0XHRcdGlmKHZhbHVlIDwgbWluKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR2YWx1ZSA9IG1pbjtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmKHZhbHVlIDwgMSkge1xyXG5cclxuXHRcdFx0XHRcdHZhbHVlID0gMTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpbnB1dC52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0XHRcdHRleHQudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdFx0XHRpbnB1dC5zZXRTZWxlY3Rpb25SYW5nZSgwLDkpO1xyXG5cclxuXHRcdFx0XHR9LDEwMCk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJyxmdW5jdGlvbihlKXtcclxuXHJcblx0XHRcdFx0aWYgKGUua2V5Q29kZSA9PSAxMykge1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuYmx1cigpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZhciB2YWwgPSBwYXJzZUludCh0aGlzLnZhbHVlKTtcclxuXHJcblx0XHRcdFx0aWYgKCFpc05hTih2YWwpKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFsdWUgPSB2YWw7XHJcblxyXG5cdFx0XHRcdFx0aWYoISFtYXggJiYgdmFsdWUgPiBtYXgpIHtcclxuXHJcblx0XHRcdFx0XHRcdHZhbHVlID0gbWF4O1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmKCEhbWluKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZih2YWx1ZSA8IG1pbikge1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IG1pbjtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmKHZhbHVlIDwgMSkge1xyXG5cclxuXHRcdFx0XHRcdFx0dmFsdWUgPSAxO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XHJcblx0XHRcdFx0XHR0ZXh0LnRleHRDb250ZW50ID0gdmFsdWU7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0XHR0ZXh0LnRleHRDb250ZW50ID0gdGhpcy52YWx1ZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1xdWFudGl0eScpKTsiLCIoZnVuY3Rpb24oYnRucyl7XHJcblxyXG5cdGlmKGJ0bnMubGVuZ3RoID09IDApIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Ly8gY3JlYXRlIGFuZCBkaXNwYXRjaCB0aGUgZXZlbnRcclxuXHR2YXIgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIik7XHJcblxyXG5cdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYnRucywgZnVuY3Rpb24oYnRuKXtcclxuXHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHR2YXIgc2VsZWN0b3IgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLXNob3cnKSxcclxuXHRcdFx0XHRzaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblxyXG5cdFx0XHRpZihzaG93Lmxlbmd0aCkge1xyXG5cclxuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHNob3csIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRcdFx0XHRlbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgIWJ0bi5jaGVja2VkKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0YnRuLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveC10b2dnbGUtc2hvdycpKTsiLCJcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuXHRpZihlLnRhcmdldC5jbG9zZXN0KCcuYnRuLW1lbnUtdG9nZ2xlJykgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LXNob3cnKSl7XHJcblxyXG5cdFx0aWYoU0MuT3Blbk1lbnUpIHtcclxuXHJcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zaG93Jyk7XHJcblxyXG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCxTQy53aW5kb3dTY3JvbGxPbGQpO1xyXG5cclxuXHRcdFx0U0MuT3Blbk1lbnUgPSBmYWxzZTtcclxuXHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFNDLk9wZW5NZW51ID0gdHJ1ZTtcclxuXHJcblx0XHRcdC8vINC30LDQv9C40YHRi9Cy0LDQtdC8INC30L3QsNGH0LXQvdC40LUg0YHQutGA0L7Qu9C70LAg0YHRgtGA0LDQvdC40YbRi1xyXG5cdFx0XHRTQy53aW5kb3dTY3JvbGxPbGQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtZW51LXNob3cnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn0pO1xyXG5cclxuKGZ1bmN0aW9uKGJ0bil7XHJcblxyXG5cdGlmKGJ0bikge1xyXG5cclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1zaG93Jyk7XHJcblxyXG5cdFx0XHRQdWJTdWIucHVibGlzaCgnU3dpcGVyVXBkYXRlJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LWJhcl9fYnRuLXRvZ2dsZScpKTsiLCJcclxuKGZ1bmN0aW9uKGl0ZW1zKXtcclxuXHJcblx0aWYoIWl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGl0ZW1zLCBmdW5jdGlvbihlbCl7XHJcblxyXG5cdFx0dmFyIGJ0biA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5tb3JlLXNsaWRlX19idG4nKSxcclxuXHRcdFx0Ym94ID0gZWwucXVlcnlTZWxlY3RvcignLm1vcmUtc2xpZGVfX2JveCcpLFxyXG5cdFx0XHRpbm5lciA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5tb3JlLXNsaWRlX19pbm5lcicpO1xyXG5cclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdGJveC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ym94LmFkZEV2ZW50TGlzdGVuZXIoU0MuY3NzQW5pbWF0aW9uKCd0cmFuc2l0aW9uJyksZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJywgYm94LmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9yZS1zbGlkZScpKTsiXX0=
