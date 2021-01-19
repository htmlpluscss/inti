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

	Array.from(tabs, tab => {

		const btns = tab.querySelectorAll('.tabs__btn'),
			  items = tab.querySelectorAll('.tabs__item');

		Array.from(btns, btn => {

			btn.addEventListener('click', event => {

				event.preventDefault();

				Array.from(btns, (_btn, index) => {

					_btn.classList.toggle('is-active', _btn === btn);
					items[index].classList.toggle('is-active', _btn === btn);

				});

			});

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YnN1Yi5taW4uanMiLCJqcy5qcyIsImFjY29yZGlvbi5qcyIsImNvbXBhbnktZm9ybS5qcyIsImZpbGUtaW5wdXQuanMiLCJtb2RhbC5qcyIsInNlbGVjdC5qcyIsInRhYnMuanMiLCJ0b29sdGlwLmpzIiwiX2FsZXJ0LmpzIiwiX2NhdGFsb2cuanMiLCJfY29weS1idWZmZXIuanMiLCJfZGF0ZS1jYWxlbmRhci5qcyIsIl9kZXRhaWxzLmpzIiwiX2Zvcm0taGVhZC1yaWdodC5qcyIsIl9pbnB1dC1xdWFudGl0eS5qcyIsIl9qcy10b2dnbGUtc2hvdy5qcyIsIl9tZW51LmpzIiwiX21vcmUtc2xpZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibGsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ29weXJpZ2h0IChjKSAyMDEwLDIwMTEsMjAxMiwyMDEzLDIwMTQgTW9yZ2FuIFJvZGVyaWNrIGh0dHA6Ly9yb2Rlcmljay5ka1xyXG4gKiBMaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xyXG4gKlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbXJvZGVyaWNrL1B1YlN1YkpTXHJcbiAqL1xyXG4hZnVuY3Rpb24obix0KXtcInVzZSBzdHJpY3RcIjt2YXIgcj17fTtuLlB1YlN1Yj1yO3ZhciBlPW4uZGVmaW5lOyFmdW5jdGlvbihuKXt2YXIgdD17fSxyPS0xO2Z1bmN0aW9uIGUobil7dmFyIHQ7Zm9yKHQgaW4gbilpZihuLmhhc093blByb3BlcnR5KHQpKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIG8obix0LHIpe3RyeXtuKHQscil9Y2F0Y2gobil7c2V0VGltZW91dChmdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24oKXt0aHJvdyBufX0obiksMCl9fWZ1bmN0aW9uIGkobix0LHIpe24odCxyKX1mdW5jdGlvbiB1KG4scixlLHUpe3ZhciBmLHM9dFtyXSxjPXU/aTpvO2lmKHQuaGFzT3duUHJvcGVydHkocikpZm9yKGYgaW4gcylzLmhhc093blByb3BlcnR5KGYpJiZjKHNbZl0sbixlKX1mdW5jdGlvbiBmKG4scixvLGkpe3ZhciBmPWZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZT1TdHJpbmcobiksbz1lLmxhc3RJbmRleE9mKFwiLlwiKTtmb3IodShuLG4sdCxyKTstMSE9PW87KWU9ZS5zdWJzdHIoMCxvKSxvPWUubGFzdEluZGV4T2YoXCIuXCIpLHUobixlLHQscil9fShuPVwic3ltYm9sXCI9PXR5cGVvZiBuP24udG9TdHJpbmcoKTpuLHIsaSkscz1mdW5jdGlvbihuKXt2YXIgcj1TdHJpbmcobiksbz1Cb29sZWFuKHQuaGFzT3duUHJvcGVydHkocikmJmUodFtyXSkpLGk9ci5sYXN0SW5kZXhPZihcIi5cIik7Zm9yKDshbyYmLTEhPT1pOylyPXIuc3Vic3RyKDAsaSksaT1yLmxhc3RJbmRleE9mKFwiLlwiKSxvPUJvb2xlYW4odC5oYXNPd25Qcm9wZXJ0eShyKSYmZSh0W3JdKSk7cmV0dXJuIG99KG4pO3JldHVybiEhcyYmKCEwPT09bz9mKCk6c2V0VGltZW91dChmLDApLCEwKX1uLnB1Ymxpc2g9ZnVuY3Rpb24odCxyKXtyZXR1cm4gZih0LHIsITEsbi5pbW1lZGlhdGVFeGNlcHRpb25zKX0sbi5wdWJsaXNoU3luYz1mdW5jdGlvbih0LHIpe3JldHVybiBmKHQsciwhMCxuLmltbWVkaWF0ZUV4Y2VwdGlvbnMpfSxuLnN1YnNjcmliZT1mdW5jdGlvbihuLGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpcmV0dXJuITE7bj1cInN5bWJvbFwiPT10eXBlb2Ygbj9uLnRvU3RyaW5nKCk6bix0Lmhhc093blByb3BlcnR5KG4pfHwodFtuXT17fSk7dmFyIG89XCJ1aWRfXCIrU3RyaW5nKCsrcik7cmV0dXJuIHRbbl1bb109ZSxvfSxuLnN1YnNjcmliZU9uY2U9ZnVuY3Rpb24odCxyKXt2YXIgZT1uLnN1YnNjcmliZSh0LGZ1bmN0aW9uKCl7bi51bnN1YnNjcmliZShlKSxyLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pO3JldHVybiBufSxuLmNsZWFyQWxsU3Vic2NyaXB0aW9ucz1mdW5jdGlvbigpe3Q9e319LG4uY2xlYXJTdWJzY3JpcHRpb25zPWZ1bmN0aW9uKG4pe3ZhciByO2ZvcihyIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShyKSYmMD09PXIuaW5kZXhPZihuKSYmZGVsZXRlIHRbcl19LG4udW5zdWJzY3JpYmU9ZnVuY3Rpb24ocil7dmFyIGUsbyxpLHU9XCJzdHJpbmdcIj09dHlwZW9mIHImJih0Lmhhc093blByb3BlcnR5KHIpfHxmdW5jdGlvbihuKXt2YXIgcjtmb3IociBpbiB0KWlmKHQuaGFzT3duUHJvcGVydHkocikmJjA9PT1yLmluZGV4T2YobikpcmV0dXJuITA7cmV0dXJuITF9KHIpKSxmPSF1JiZcInN0cmluZ1wiPT10eXBlb2YgcixzPVwiZnVuY3Rpb25cIj09dHlwZW9mIHIsYz0hMTtpZighdSl7Zm9yKGUgaW4gdClpZih0Lmhhc093blByb3BlcnR5KGUpKXtpZihvPXRbZV0sZiYmb1tyXSl7ZGVsZXRlIG9bcl0sYz1yO2JyZWFrfWlmKHMpZm9yKGkgaW4gbylvLmhhc093blByb3BlcnR5KGkpJiZvW2ldPT09ciYmKGRlbGV0ZSBvW2ldLGM9ITApfXJldHVybiBjfW4uY2xlYXJTdWJzY3JpcHRpb25zKHIpfX0ociksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZS5hbWQ/ZShmdW5jdGlvbigpe3JldHVybiByfSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJih2b2lkIDAhPT1tb2R1bGUmJm1vZHVsZS5leHBvcnRzJiYoZXhwb3J0cz1tb2R1bGUuZXhwb3J0cz1yKSxleHBvcnRzLlB1YlN1Yj1yLG1vZHVsZS5leHBvcnRzPWV4cG9ydHM9cil9KFwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvd3x8dGhpcyk7IiwiLyohIFVURi04XHJcblxyXG7CqSBrb3ZyaWdpblxyXG7QktGB0LUg0L/RgNCw0LLQsCDRgNCw0LfRgNC10YjQtdC90Ytcclxu0LrRgNCw0YHQuNCy0YvQuSDQtNC40LfQsNC50L0g0LTQvtC70LbQtdC9INC40LzQtdGC0Ywg0LrRgNCw0YHQuNCy0YvQuSDQutC+0LTCrlxyXG5cclxuaHR0cHM6Ly9naXRodWIuY29tL2h0bWxwbHVzY3NzL1xyXG5cclxuKi9cclxuXHRcdFx0XHR3aW5kb3cuU0MgPXt9O1xyXG5cclxuXHJcbiggKCkgPT4ge1xyXG5cclxuXHR3aW5kb3cuSU5USSA9IHt9O1xyXG5cdElOVEkucmVzaXplVGltZW91dCA9IG51bGw7XHJcblx0SU5USS53aW5kb3dXaWR0aE9MZCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcblxyXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoIUlOVEkucmVzaXplVGltZW91dCkge1xyXG5cclxuXHRcdFx0XHRJTlRJLnJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+ICB7XHJcblxyXG5cdFx0XHRcdFx0SU5USS5yZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHJcblx0XHRcdFx0XHRpZihJTlRJLndpbmRvd1dpZHRoT0xkICE9PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xyXG5cclxuXHRcdFx0XHRcdFx0SU5USS53aW5kb3dXaWR0aE9MZCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuXHRcdFx0XHRcdFx0UHViU3ViLnB1Ymxpc2goJ3dpbmRvd1dpZHRoUmVzaXplJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9LCAxMDApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG5cclxuXHRcdFx0UHViU3ViLnB1Ymxpc2goJ3dpbmRvd1Njcm9sbCcpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuXHJcblx0XHRQdWJTdWIucHVibGlzaCgnRE9NQ29udGVudExvYWRlZCcpO1xyXG5cclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuXHJcblx0XHRQdWJTdWIucHVibGlzaCgncGFnZUxvYWQnKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINC+0LHRgNCw0LHQvtGC0YfQuNC6INCw0L3QuNC80LDRhtC40LlcclxuXHRJTlRJLmNzc0FuaW1hdGlvbiA9IGE9PntsZXQgYixjLGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNzc2FuaW1hdGlvblwiKTtzd2l0Y2goYSl7Y2FzZSdhbmltYXRpb24nOmI9e1wiYW5pbWF0aW9uXCI6XCJhbmltYXRpb25lbmRcIixcIk9BbmltYXRpb25cIjpcIm9BbmltYXRpb25FbmRcIixcIk1vekFuaW1hdGlvblwiOlwiYW5pbWF0aW9uZW5kXCIsXCJXZWJraXRBbmltYXRpb25cIjpcIndlYmtpdEFuaW1hdGlvbkVuZFwifTticmVhaztjYXNlJ3RyYW5zaXRpb24nOmI9e1widHJhbnNpdGlvblwiOlwidHJhbnNpdGlvbmVuZFwiLFwiT1RyYW5zaXRpb25cIjpcIm9UcmFuc2l0aW9uRW5kXCIsXCJNb3pUcmFuc2l0aW9uXCI6XCJ0cmFuc2l0aW9uZW5kXCIsXCJXZWJraXRUcmFuc2l0aW9uXCI6XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCJ9fWZvcihjIGluIGIpaWYoZC5zdHlsZVtjXSE9PXVuZGVmaW5lZClyZXR1cm4gYltjXX1cclxuXHJcblx0Ly8gRGV0ZXJtaW5lIGlmIGFuIGVsZW1lbnQgaXMgaW4gdGhlIHZpc2libGUgdmlld3BvcnRcclxuXHRJTlRJLmlzSW5WaWV3cG9ydCA9IGVsID0+IHtcclxuXHRcdGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHJldHVybiAocmVjdC50b3AgPj0gMCAmJiByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cdH1cclxuXHJcbn0pKCk7IiwiKCBpdGVtcyA9PiB7XHJcblxyXG5cdGlmKCFpdGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShpdGVtcywgYWNjb3JkaW9uID0+IHtcclxuXHJcblx0XHRsZXQgYW5pbWF0ZU9uID0gZmFsc2U7XHJcblxyXG5cdFx0Y29uc3QgYnRucyA9IGFjY29yZGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19idG4nKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGJ0bnMsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBpdGVtID0gYnRuLmNsb3Nlc3QoJy5hY2NvcmRpb25fX2l0ZW0nKSxcclxuXHRcdFx0XHQgIGhlYWQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2hlYWQnKSxcclxuXHRcdFx0XHQgIGJvZHkgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2JvZHknKTtcclxuXHJcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0YW5pbWF0ZU9uID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0aXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY2NvcmRpb25fX2l0ZW0tLW9wZW4nKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ym9keS5hZGRFdmVudExpc3RlbmVyKElOVEkuY3NzQW5pbWF0aW9uKCd0cmFuc2l0aW9uJyksICgpID0+IHtcclxuXHJcblx0XHRcdFx0aWYoYW5pbWF0ZU9uICYmICFJTlRJLmlzSW5WaWV3cG9ydChoZWFkKSl7XHJcblxyXG5cdFx0XHRcdFx0aGVhZC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRhbmltYXRlT24gPSBmYWxzZTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb24nKSk7IiwiKCBpdGVtcyA9PiB7XHJcblxyXG5cdGlmKCFpdGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShpdGVtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgZm9ybUVuYWJsZWQgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRmb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmb3JtRW5hYmxlZCk7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBhbnktZm9ybV9fZGlzYWJsZWQnKSwgZWwgPT4gZWwuZGlzYWJsZWQgPSBmYWxzZSk7XHJcblxyXG5cdFx0fTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmb3JtRW5hYmxlZCk7XHJcblxyXG5cdFx0Ly8g0L7RgtC/0YDQsNCy0LrQsCDRhNC+0YDQvNGLXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gZGF0YS1yYWRpby10b2dnbGVcclxuXHRcdGNvbnN0IGJ0blJhZGlvID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yYWRpby10b2dnbGVdJyksXHJcblx0XHRcdCAgaXRlbXMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wYW55LWZvcm1fX3JhZGlvLXRvZ2dsZS1pdGVtJyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShidG5SYWRpbywgYnRuID0+XHJcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+XHJcblx0XHRcdFx0QXJyYXkuZnJvbShpdGVtcywgZWwgPT5cclxuXHRcdFx0XHRcdGVsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLXJhZGlvLXRvZ2dsZScpID09PSAnaGlkZScpKSkpO1xyXG5cclxuXHRcdC8vIHJlbW92ZVxyXG5cdFx0Y29uc3QgYnRuUmVtb3ZlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuY29tcGFueS1mb3JtX19yZW1vdmUnKTtcclxuXHJcblx0XHRidG5SZW1vdmUgJiYgYnRuUmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgaXRlbSA9IGJ0blJlbW92ZS5jbG9zZXN0KCcuYWNjb3JkaW9uX19pdGVtJyk7XHJcblxyXG5cdFx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoSU5USS5jc3NBbmltYXRpb24oJ3RyYW5zaXRpb24nKSwgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpdGVtLnJlbW92ZSgpO1xyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wYW55X19hZGQnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkaW9uX19pdGVtLS1vcGVuJyk7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGl0ZW0uc3R5bGUub3BhY2l0eSA9IDA7XHJcblxyXG5cdFx0XHR9LCAxMDAwKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vIENPREUgc21zXHJcblx0Y29uc3QgZm9ybUNvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGFueS1mb3JtLS1jb2RlJyk7XHJcblxyXG5cdC8vINC+0YLQv9GA0LDQstC60LAg0YTQvtGA0LzRiyBjb2RlXHJcblx0Zm9ybUNvZGUuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0ZmV0Y2goZm9ybUNvZGUuZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm1Db2RlKVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gc3RhdGUgc21zINC+0YLQv9GA0LDQstC70LXQvdC+XHJcblxyXG5cdFx0Zm9ybUNvZGUucXVlcnlTZWxlY3RvcignW25hbWU9XCJzZW5kLWNvZGVcIl0nKS52YWx1ZSA9IDE7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShmb3JtQ29kZS5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGFueS1mb3JtX19jb2RlLWhpZGUnKSwgZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcclxuXHRcdEFycmF5LmZyb20oZm9ybUNvZGUucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBhbnktZm9ybV9fY29kZS1zaG93JyksIGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyByZXNldCDRhNC+0YDQvNGLIGNvZGVcclxuXHRmb3JtQ29kZS5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHQvLyBzdGF0ZSBzbXMg0L7RgtC/0YDQsNCy0LvQtdC90L5cclxuXHJcblx0XHRmb3JtQ29kZS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInNlbmQtY29kZVwiXScpLnZhbHVlID0gMDtcclxuXHJcblx0XHRBcnJheS5mcm9tKGZvcm1Db2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wYW55LWZvcm1fX2NvZGUtaGlkZScpLCBlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xyXG5cdFx0QXJyYXkuZnJvbShmb3JtQ29kZS5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGFueS1mb3JtX19jb2RlLXNob3cnKSwgZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGFueS1mb3JtJykpOyIsIiggaXRlbXMgPT4ge1xyXG5cclxuXHRpZighaXRlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGhhbmRsZXIgPSAoZWwsIGNsb25lID0gZWwuY2xvbmVOb2RlKHRydWUpKSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRuID0gZWwucXVlcnlTZWxlY3RvcignLmZpbGUtaW5wdXRfX2J0bicpLFxyXG5cdFx0XHQgIGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImZpbGVcIl0nKTtcclxuXHJcblx0XHRsZXQgZ3JvdXAgPSBlbC5jbG9zZXN0KCcuZmlsZS1pbnB1dC1ncm91cCcpO1xyXG5cclxuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0YnRuLnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XHJcblx0XHRcdGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tLWxpZ2h0Jyk7XHJcblx0XHRcdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdidG4tLXNpbHZlcicpO1xyXG5cclxuXHRcdFx0aWYoZ3JvdXApIHtcclxuXHJcblx0XHRcdFx0Y29uc3QgX2Nsb25lID0gY2xvbmUuY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuXHRcdFx0XHRncm91cC5hcHBlbmRDaGlsZChfY2xvbmUpO1xyXG5cclxuXHRcdFx0XHRfY2xvbmUucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBfY2xvbmUucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5nZXRBdHRyaWJ1dGUoJ25hbWUnKSArICctJyArIGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWxlLWlucHV0JykubGVuZ3RoKTtcclxuXHJcblx0XHRcdFx0aGFuZGxlcihfY2xvbmUsIGNsb25lKTtcclxuXHJcblx0XHRcdFx0Z3JvdXAgPSBudWxsO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9O1xyXG5cclxuXHRBcnJheS5mcm9tKGl0ZW1zLCBlbCA9PiBoYW5kbGVyKGVsKSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsZS1pbnB1dCcpKTsiLCIoIG1vZGFsID0+IHtcclxuXHJcblx0aWYoIW1vZGFsKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19pdGVtJyksXHJcblx0XHQgIGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbF0nKSxcclxuXHRcdCAgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XHJcblxyXG5cdGxldCBhY3RpdmVNb2RhbCA9IG51bGwsXHJcblx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUnLCAoKSA9PiB7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1zaG93Jyk7XHJcblx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IDA7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCx3aW5kb3dTY3JvbGwpO1xyXG5cdFx0YWN0aXZlTW9kYWwgPSBmYWxzZTtcclxuXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IG1vZGFsU2hvdyA9IHNlbGVjdG9yID0+IHtcclxuXHJcblx0XHRpZighYWN0aXZlTW9kYWwpe1xyXG5cclxuXHRcdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRhY3RpdmVNb2RhbCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tJyArIHNlbGVjdG9yKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGl0ZW1zLCBlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCd2aXN1YWxseWhpZGRlbicsIGVsICE9PSBhY3RpdmVNb2RhbCkpO1xyXG5cclxuXHRcdHdyYXBwZXIuc3R5bGUudG9wID0gLXdpbmRvd1Njcm9sbCArICdweCc7XHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXNob3cnKTtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG5cclxuXHRcdGFjdGl2ZU1vZGFsLmZvY3VzKCk7XHJcblxyXG5cdH07XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsJykgfHwgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbF9fY2xvc2UnKSl7XHJcblxyXG5cdFx0XHRtb2RhbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImhpZGVcIikpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdEFycmF5LmZyb20oYnRucywgYnRuID0+XHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxyXG5cdFx0XHRtb2RhbFNob3coYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpKSkpO1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdtb2RhbFNob3cnLCBldmVudCA9PiBtb2RhbFNob3coZXZlbnQuZGV0YWlsLnNlbGVjdG9yKSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKSk7IiwiKCBzZWxlY3RzID0+IHtcclxuXHJcblx0aWYoIXNlbGVjdHMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oc2VsZWN0cywgc2VsZWN0ID0+IHtcclxuXHJcblx0XHRpZihzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fbGlzdCcpKSB7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRcdCAgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG5cdFx0YXJyb3cuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNOC4zIDEwLjNhMSAxIDAgMDAwIDEuNDFsMi45MyAyLjk3Yy4yMi4yMS41LjMyLjc4LjMycy41Ni0uMS43Ny0uMzJsMi45My0yLjk2YTEuMDEgMS4wMSAwIDAwLS4zMi0xLjYzLjk5Ljk5IDAgMDAtMS4wOS4yMUwxMiAxMi42MmwtMi4zLTIuMzNhMSAxIDAgMDAtMS40IDB6XCIvPjwvc3ZnPic7XHJcblxyXG5cdFx0dmFsdWUuY2xhc3NOYW1lID0gJ3NlbGVjdF9fdmFsdWUnO1xyXG5cdFx0dmFsdWUuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwic2VsZWN0X192YWx1ZS1pbm5lclwiPjwvc3Bhbj4nO1xyXG5cclxuXHRcdHZhbHVlLmFwcGVuZENoaWxkKGFycm93KTtcclxuXHRcdHNlbGVjdC5hcHBlbmRDaGlsZCh2YWx1ZSk7XHJcblxyXG5cdFx0Y29uc3QgY29udHJvbCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcclxuXHRcdFx0b3B0aW9uID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpLFxyXG5cdFx0XHRzZWxlY3RlZCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCdvcHRpb25bc2VsZWN0ZWRdJyksXHJcblx0XHRcdHZhbHVlVGV4dCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X192YWx1ZS1pbm5lcicpLFxyXG5cdFx0XHRsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5cdFx0bGlzdC5jbGFzc05hbWUgPSAnc2VsZWN0X19saXN0JztcclxuXHJcblx0XHRjb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0dmFsdWVUZXh0LnRleHRDb250ZW50ID0gY29udHJvbC5xdWVyeVNlbGVjdG9yKCdbdmFsdWU9XCInICsgY29udHJvbC52YWx1ZSArICdcIl0nKS50ZXh0Q29udGVudDtcclxuXHJcblx0XHRcdHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3QtLWRlZmF1bHQnKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRpZihjb250cm9sLnZhbHVlID09PSAnbm9uZScpe1xyXG5cclxuXHRcdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC0tZGVmYXVsdCcpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR2YWx1ZVRleHQudGV4dENvbnRlbnQgPSBzZWxlY3QucXVlcnlTZWxlY3Rvcignb3B0aW9uW3ZhbHVlPVwiJyArIGNvbnRyb2wudmFsdWUgKyAnXCJdJykudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShvcHRpb24sIGVsID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcblx0XHRcdG8uY2xhc3NOYW1lID0gJ2J1dHRvbiBzZWxlY3RfX2xpc3QtaXRlbSc7XHJcblxyXG5cdFx0XHRvLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuXHRcdFx0by5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZWwuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKTtcclxuXHJcblx0XHRcdG8udGV4dENvbnRlbnQgPSBlbC50ZXh0Q29udGVudDtcclxuXHJcblx0XHRcdGxpc3QuYXBwZW5kQ2hpbGQobyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgQ3VzdG9tRXZlbnRDaGFuZ2UgPSBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIiwge1xyXG5cdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRoYXpjaGVlc2VidXJnZXI6IHRydWVcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0c2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RfX2xpc3QtaXRlbScpKXtcclxuXHJcblx0XHRcdFx0Y29udHJvbC52YWx1ZSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcblxyXG5cdFx0XHRcdGNvbnRyb2wuZGlzcGF0Y2hFdmVudChDdXN0b21FdmVudENoYW5nZSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0c2VsZWN0LmFwcGVuZENoaWxkKGxpc3QpO1xyXG5cclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaXNTZWxlY3QgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNlbGVjdCcpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oc2VsZWN0cywgc2VsZWN0ID0+IHtcclxuXHJcblx0XHRcdHNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3QtLW9wZW4nLCBzZWxlY3QgPT09IGlzU2VsZWN0ICYmICFpc1NlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdC0tb3BlbicpKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0JykpOyIsIiggdGFicyA9PiB7XHJcblxyXG5cdGlmKCF0YWJzLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKHRhYnMsIHRhYiA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRucyA9IHRhYi5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19fYnRuJyksXHJcblx0XHRcdCAgaXRlbXMgPSB0YWIucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2l0ZW0nKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGJ0bnMsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oYnRucywgKF9idG4sIGluZGV4KSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0X2J0bi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnLCBfYnRuID09PSBidG4pO1xyXG5cdFx0XHRcdFx0aXRlbXNbaW5kZXhdLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScsIF9idG4gPT09IGJ0bik7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMnKSk7IiwiKCB0b29sdGlwcyA9PiB7XHJcblxyXG5cdGlmKHRvb2x0aXBzLmxlbmd0aCl7XHJcblxyXG5cdFx0QXJyYXkuZnJvbSh0b29sdGlwcywgdG9vbHRpcCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcblx0XHRcdHRpdGxlLmNsYXNzTmFtZSA9ICd0b29sdGlwLXRpdGxlX19pbm5lcic7XHJcblxyXG5cdFx0XHR0aXRsZS50ZXh0Q29udGVudCA9IHRvb2x0aXAuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xyXG5cdFx0XHR0b29sdGlwLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHRcdFx0dG9vbHRpcC5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b29sdGlwLXRpdGxlJykpO1xyXG5cclxuKCB0b29sdGlwcyA9PiB7XHJcblxyXG5cdGlmKHRvb2x0aXBzLmxlbmd0aCl7XHJcblxyXG5cdFx0Y29uc3QgaWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuXHRcdGljby5pbm5lckhUTUwgPSAnPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIwIDEyYTggOCAwIDExLTE2IDAgOCA4IDAgMDExNiAwem0tNS43NC0zLjg3YTMuMTggMy4xOCAwIDAxLjU2IDMuNzhjLS4zOC43LTEgMS4yMi0xLjc0IDEuNDlhLjQuNCAwIDAwLS4yOC4zOHYuNjJhLjguOCAwIDAxLTEuNiAwVjEyLjhBLjguOCAwIDAxMTIgMTJjLjg4IDAgMS42LS43MiAxLjYtMS42YTEuNiAxLjYgMCAwMC0zLjIgMCAuOC44IDAgMDEtMS41OS4wOGwtLjAxLS4xMmMuMDEtMiAxLjg2LTMuNTUgMy45NS0zLjA3LjU3LjEzIDEuMS40MiAxLjUxLjg0ek0xMi44IDE2LjhhLjguOCAwIDExLTEuNiAwIC44LjggMCAwMTEuNiAwelwiLz48L3N2Zz4nO1xyXG5cclxuXHJcblx0XHRsZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvblJlY29yZHMgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdCA9IG11dGF0aW9uUmVjb3Jkc1swXS50YXJnZXQsXHJcblx0XHRcdFx0ICByZWN0ID0gdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKHJlY3QubGVmdCA+IHdpbmRvdy5pbm5lcldpZHRoIC0gcmVjdC5yaWdodCk7XHJcbi8qXHJcblx0XHRcdGlmKHQub3Blbikge1xyXG5cclxuXHRcdFx0XHRjb25zdCBpbm5lciA9IHQucXVlcnlTZWxlY3RvcignLmFza19faW5uZXInKTtcclxuXHJcblx0XHRcdFx0aWYocmVjdC5sZWZ0ID4gd2luZG93LmlubmVyV2lkdGggLSByZWN0LnJpZ2h0KSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8g0L/RgNCw0LLQtdC1XHJcblxyXG5cdFx0XHRcdFx0aW5uZXIuc3R5bGUubGVmdCA9ICdhdXRvJztcclxuXHRcdFx0XHRcdGlubmVyLnN0eWxlLnJpZ2h0ID0gMDtcclxuXHRcdFx0XHRcdGlubmVyLnN0eWxlLndpZHRoID0gcmVjdC5sZWZ0ICsgJ3B4JztcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdC8vINC70LXQstC10LVcclxuXHJcblx0XHRcdFx0XHRpbm5lci5zdHlsZS5yaWdodCA9ICdhdXRvJztcclxuXHRcdFx0XHRcdGlubmVyLnN0eWxlLmxlZnQgPSAwO1xyXG5cdFx0XHRcdFx0aW5uZXIuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIHJlY3QucmlnaHQgKyAncHgnO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG4qL1x0XHR9KTtcclxuXHJcblx0XHRBcnJheS5mcm9tKHRvb2x0aXBzLCB0b29sdGlwID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGJ0biA9IHRvb2x0aXAucXVlcnlTZWxlY3RvcignLnRvb2x0aXAtaGVscF9fYnRuJyk7XHJcblxyXG5cdFx0XHRidG4uYXBwZW5kQ2hpbGQoaWNvLmNsb25lTm9kZSh0cnVlKSk7XHJcblxyXG5cdFx0XHRvYnNlcnZlci5vYnNlcnZlKHRvb2x0aXAsIHtcclxuXHJcblx0XHRcdFx0YXR0cmlidXRlcyA6IHRydWVcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50b29sdGlwLWhlbHAnKTtcclxuXHJcblx0XHRcdEFycmF5LmZyb20odG9vbHRpcHMsIHRvb2x0aXAgPT4ge1xyXG5cclxuXHRcdFx0XHRpZih0YXJnZXQgIT09IHRvb2x0aXApIHtcclxuXHJcblx0XHRcdFx0XHR0b29sdGlwLm9wZW4gPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b29sdGlwLWhlbHAnKSk7IiwiKGZ1bmN0aW9uKGl0ZW1zKXtcclxuXHJcblx0aWYoIWl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRTQy5zaG93QWxlcnQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHRleHQpIHtcclxuXHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGl0ZW1zLCBmdW5jdGlvbihlbCl7XHJcblxyXG5cdFx0XHRpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FsZXJ0X19pdGVtLS0nICsgc2VsZWN0b3IpKXtcclxuXHJcblx0XHRcdFx0dmFyIF9zaG93ID0gZWwsXHJcblx0XHRcdFx0XHRhdXRvQ2xvc2UgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXV0by1jbG9zZScpO1xyXG5cclxuXHRcdFx0XHRpZih0ZXh0KXtcclxuXHJcblx0XHRcdFx0XHRfc2hvdy5xdWVyeVNlbGVjdG9yKCcuYWxlcnRfX3RleHQnKS50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0X3Nob3cuY2xhc3NMaXN0LmFkZCgnaXMtc2hvdycpO1xyXG5cclxuXHRcdFx0XHRpZihhdXRvQ2xvc2UpIHtcclxuXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHRcdFx0XHRfc2hvdy5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zaG93Jyk7XHJcblxyXG5cdFx0XHRcdFx0fSwgYXV0b0Nsb3NlICogMTAwMCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fTtcclxuXHJcblx0dmFyIGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFsZXJ0X19jbG9zZScpO1xyXG5cclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGJ0bkNsb3NlLCBmdW5jdGlvbihlbCl7XHJcblxyXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdGVsLmNsb3Nlc3QoJy5hbGVydF9faXRlbScpLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXNob3cnKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxlcnRfX2l0ZW0nKSk7IiwiKGZ1bmN0aW9uKGltZ0Jsb2NrKXtcclxuXHJcblx0aWYoaW1nQmxvY2spIHtcclxuXHJcblx0XHR2YXIgYmlnSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGFsb2ctaXRlbV9fcGhvdG8nKSxcclxuXHRcdFx0aW5kZXhBY3RpdmUgPSAwO1xyXG5cclxuXHRcdGltZ0Jsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG5cdFx0XHRpZihlLnRhcmdldC5jbG9zZXN0KCcuc3dpcGVyLWJ1dHRvbi1wcmV2JykpIHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3N3aXBlci1idXR0b24tcHJldicpXHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGlmKGUudGFyZ2V0LmNsb3Nlc3QoJy5zd2lwZXItYnV0dG9uLW5leHQnKSkge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZygnc3dpcGVyLWJ1dHRvbi1uZXh0JylcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0aWYoZS50YXJnZXQuY2xvc2VzdCgnLmNhdGFsb2ctaXRlbV9fc3dpcGVyLWl0ZW0nKSkge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZygnY2F0YWxvZy1pdGVtX19zd2lwZXItaXRlbScpXHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aW1nQmxvY2suYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZSl7XHJcblxyXG5cdFx0XHR2YXIgc3dpcGVySXRlbSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5jYXRhbG9nLWl0ZW1fX3N3aXBlci1pdGVtJyk7XHJcblxyXG5cdFx0XHRpZihzd2lwZXJJdGVtICYmICFzd2lwZXJJdGVtLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpIHtcclxuXHJcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChpbWdCbG9jay5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZy1pdGVtX19zd2lwZXItaXRlbScpLCBmdW5jdGlvbihlbCxpbmRleCl7XHJcblxyXG5cdFx0XHRcdFx0aWYoZWwgPT09IHN3aXBlckl0ZW0pIHtcclxuXHJcblx0XHRcdFx0XHRcdGluZGV4QWN0aXZlID0gaW5kZXg7XHJcblx0XHRcdFx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChiaWdJbWcuY2hpbGRyZW4sIGZ1bmN0aW9uKGVsLGluZGV4KXtcclxuXHJcblx0XHRcdFx0XHRlbC5jbGFzc0xpc3QudG9nZ2xlKCd2aXN1YWxseWhpZGRlbicsIGluZGV4ICE9PSBpbmRleEFjdGl2ZSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZy1pdGVtX19zd2lwZXItYm94JykpOyIsIihmdW5jdGlvbihidG5zKXtcclxuXHJcblx0cmV0dXJuO1xyXG5cclxuLypcclxuXHRpZihidG5zLmxlbmd0aCA9PSAwICYmICFuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYnRucywgZnVuY3Rpb24oYnRuKXtcclxuXHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHR2YXIgdGV4dCA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuXHRcdFx0bmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XHJcblxyXG5cdFx0XHRTQy5zaG93QWxlcnQoJ2NvcHktYnVmZmVyJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pOyovXHJcblxyXG5cdHZhciBjbGlwYm9hcmQgPSBuZXcgQ2xpcGJvYXJkSlMoYnRucyk7XHJcblxyXG5cdGNsaXBib2FyZC5vbignc3VjY2VzcycsIGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0XHRTQy5zaG93QWxlcnQoJ2NvcHktYnVmZmVyJywgZS50cmlnZ2VyLmdldEF0dHJpYnV0ZSgnZGF0YS1hbGVydCcpKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdGNsaXBib2FyZC5vbignZXJyb3InLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cdFx0YWxlcnQoZS50ZXh0KTtcclxuXHRcdHdpbmRvdy5vcGVuKGUudGV4dCk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcHktYnVmZmVyJykpOyIsIihmdW5jdGlvbihlbGVtcyl7XHJcblxyXG5cdGlmKGVsZW1zLmxlbmd0aCl7XHJcblxyXG5cdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlbGVtcywgZnVuY3Rpb24oZWxlbSl7XHJcblxyXG5cdFx0XHR2YXIgdGV4dCA9IGVsZW0ucXVlcnlTZWxlY3RvcignLmRhdGUtY2FsZW5kYXJfX3RleHQnKSxcclxuXHRcdFx0XHRpbnB1dCA9IGVsZW0ucXVlcnlTZWxlY3RvcignLmRhdGUtY2FsZW5kYXJfX2lucHV0Jyk7XHJcblxyXG5cdFx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHRcdHZhciBkYXRlID0gbmV3IERhdGUoaW5wdXQudmFsdWUpO1xyXG5cdFx0XHRcdHRleHQudGV4dENvbnRlbnQgPSAoJzAnICsgZGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKSArICcuJyArICgnMCcgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKSArICcuJyArIGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZS1jYWxlbmRhcicpKTsiLCIoZnVuY3Rpb24oaXRlbXMpe1xyXG5cclxuXHRpZighIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRpZihpdGVtcy5sZW5ndGgpe1xyXG5cclxuXHRcdGZ1bmN0aW9uIGNsb3NlQWxsT3BlbihlKSB7XHJcblxyXG5cdFx0XHR2YXIgdGFyZ2V0ID0gZS50YXJnZXQuY2xvc2VzdCgnLmRldGFpbHNfX2J0bicpO1xyXG5cclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChpdGVtcywgZnVuY3Rpb24oZWwpe1xyXG5cclxuXHRcdFx0XHRpZihlbCAhPT0gdGFyZ2V0KXtcclxuXHJcblx0XHRcdFx0XHRlbC5vcGVuID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0XHRcdGNsb3NlQWxsT3BlbihlKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cdFx0XHRjbG9zZUFsbE9wZW4oZSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChpdGVtcywgZnVuY3Rpb24oZGV0YWlscyl7XHJcblxyXG5cdFx0XHR2YXIgc3VtbWFyeSA9IGRldGFpbHMucXVlcnlTZWxlY3RvcignLmRldGFpbHNfX21hcmtlcicpO1xyXG5cclxuXHRcdFx0c3VtbWFyeS5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDE4IDE4XCI+PHBhdGggZD1cIk05IDE3LjMzMzNDNC4zOTc1IDE3LjMzMzMuNjY2NyAxMy42MDI1LjY2NjcgOSAuNjY2NyA0LjM5NzUgNC4zOTc1LjY2NjcgOSAuNjY2N2M0LjYwMjUgMCA4LjMzMzMgMy43MzA4IDguMzMzMyA4LjMzMzMgMCA0LjYwMjUtMy43MzA4IDguMzMzMy04LjMzMzMgOC4zMzMzek04LjE2NjcgMTEuNXYxLjY2NjdoMS42NjY2VjExLjVIOC4xNjY3em0xLjY2NjYtMS4zNzA4YTIuOTE4NiAyLjkxODYgMCAwMDIuMDQ1Ny0zLjIxNTVBMi45MTg1IDIuOTE4NSAwIDAwOSA0LjQxNjdhMi45MTc1IDIuOTE3NSAwIDAwLTIuODYwOCAyLjM0NDFsMS42MzUuMzI3NUExLjI1IDEuMjUgMCAxMTkgOC41ODMzYS44MzMzLjgzMzMgMCAwMC0uODMzMy44MzM0djEuMjVoMS42NjY2di0uNTM3NXpcIi8+PC9zdmc+JztcclxuXHJcblx0XHRcdHN1bW1hcnkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24oKSB7XHJcblxyXG5cdC8vXHRcdFx0ZGV0YWlscy5vcGVuID0gdHJ1ZTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0c3VtbWFyeS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XHJcblxyXG5cdC8vXHRcdFx0ZGV0YWlscy5vcGVuID0gZmFsc2U7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblxyXG5cdFx0dmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xyXG5cclxuXHRcdFx0bXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uKSB7XHJcblxyXG5cdFx0XHRcdC8vINCV0LvQtdC80LXQvdGCINGDINC60L7RgtC+0YDQvtCz0L4g0LjQt9C80LXQu9C40LvRgdGPINCw0YLRgNC40LHRg9GCXHJcblx0XHRcdFx0dmFyIGRldGFpbHMgPSBtdXRhdGlvbi50YXJnZXQ7XHJcblxyXG5cdFx0XHRcdC8vINCV0YHQu9C4INC10LvQtdC80LXQvdGCINCx0YvQuyDQt9Cw0LrRgNGL0YIg4oCUINC90LjRh9C10LPQviDQvdC1INC00LXQu9Cw0LXQvFxyXG5cdFx0XHRcdGlmICghZGV0YWlscy5vcGVuKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgdGV4dCA9IGRldGFpbHMucXVlcnlTZWxlY3RvcignLmRldGFpbHNfX3RleHQnKSxcclxuXHRcdFx0XHRcdHJlY3QgPSB0ZXh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG5cdFx0XHRcdFx0cmlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSByZWN0LnJpZ2h0LFxyXG5cdFx0XHRcdFx0bGVmdCA9IHJlY3QubGVmdCxcclxuXHRcdFx0XHRcdHdpZHRoID0gKHJlY3QubGVmdCAtIHJlY3QucmlnaHQpIC8gMjsgLy8g0L7RgtGA0LjRhtCw0YLQtdC70YzQvdCw0Y8g0L/QvtC70L7QstC40L3QsCDRiNC40YDQuNC90YtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmlnaHQsbGVmdCApXHJcblxyXG5cdFx0XHRcdGlmKHJpZ2h0IDwgMCl7XHJcblxyXG5cdFx0XHRcdFx0dGV4dC5zdHlsZS5tYXJnaW5MZWZ0ID0gKHdpZHRoICsgcmlnaHQgLSAxMCkgKyAncHgnO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKGxlZnQgPCAwKXtcclxuXHJcblx0XHRcdFx0XHR0ZXh0LnN0eWxlLm1hcmdpbkxlZnQgPSAod2lkdGggLSBsZWZ0ICsgMTApICsgJ3B4JztcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuLypcclxuXHRcdFx0XHQvLyDQn9C10YDQtdCx0LjRgNCw0LXQvCDQvtGC0LrRgNGL0YLRi9C1INC10LvQtdC80LXQvdGC0YsgZGV0YWlsc1xyXG5cdFx0XHRcdGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8g0JjRgdC60LvRjtGH0LDQtdC8INC10YHQu9C4INC30LDQutGA0YvRglxyXG5cdFx0XHRcdFx0aWYgKCFlbC5vcGVuKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyDQmNGB0LrQu9GO0YfQsNC10Lwg0LjQtyDQv9C10YDQtdCx0L7RgNCwINC10LvQtdC80LXQvdGCINC60L7RgtC+0YDRi9C5INC80Ysg0YLQvtC70YzQutC+INGH0YLQviDQvtGC0LrRgNGL0LvQuFxyXG5cdFx0XHRcdFx0aWYgKGVsID09PSBkZXRhaWxzKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyDQl9Cw0LrRgNGL0LLQsNC10Lwg0LLRgdC1INC+0YHRgtCw0LvRjNC90YvQtSDQtdC70LXQvNC10L3RgiBkZXRhaWxzXHJcblx0XHRcdFx0XHRlbC5vcGVuID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG4qL1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyDQndCw0LHQu9GO0LTQsNC10Lwg0LfQsCDQuNC30LzQtdC90LXQvdC40LXQvCDRgtC+0LvRjNC60L4g0L7QtNC90L7Qs9C+INCw0YLRgNC40LHRg9GC0LBcclxuXHRcdHZhciBjb25maWcgPSB7XHJcblx0XHRcdGF0dHJpYnV0ZUZpbHRlcjogWydvcGVuJ11cclxuXHRcdH07XHJcblxyXG5cdFx0Ly8g0JLQtdGI0LDQtdC8INC90LDQsdC70Y7QtNCw0YLQtdC70Ywg0L3QsCDQstGB0LUg0LXQu9C10LzQtdC90YLRiyBkZXRhaWxzINCy0L3Rg9GC0YDQuCDQsNC60L7RgNC00LjQvtC90LBcclxuXHRcdGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XHJcblx0XHRcdHJldHVybiBvYnNlcnZlci5vYnNlcnZlKGVsLCBjb25maWcpO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXRhaWxzX19idG4nKSk7IiwiKGZ1bmN0aW9uKGJ0bil7XHJcblxyXG5cdGlmKGJ0bikge1xyXG5cclxuXHRcdHZhciBmaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLWhpZGRlbi1oZWFkJyk7XHJcblxyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0aWYoYnRuLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpKXtcclxuXHJcblx0XHRcdFx0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuXHRcdFx0XHRmaWx0ZXIuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRidG4uY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpO1xyXG5cdFx0XHRcdGZpbHRlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0taGVhZC1yaWdodF9fdG9nZ2xlLWZpbHRlcicpKTsiLCIoZnVuY3Rpb24ocXVhbnRpdHkpe1xyXG5cclxuXHRpZihxdWFudGl0eS5sZW5ndGgpIHtcclxuXHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHF1YW50aXR5LCBmdW5jdGlvbihlbCl7XHJcblxyXG5cdFx0XHR2YXIgdXAgPSBlbC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtcXVhbnRpdHlfX3BsdXMnKSxcclxuXHRcdFx0XHRkb3duID0gZWwucXVlcnlTZWxlY3RvcignLmlucHV0LXF1YW50aXR5X19taW51cycpLFxyXG5cdFx0XHRcdHRleHQgPSBlbC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtcXVhbnRpdHlfX3RleHQnKSxcclxuXHRcdFx0XHRpbnB1dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1xdWFudGl0eV9faW5wdXQnKSxcclxuXHRcdFx0XHRtYXggPSBwYXJzZUludChpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWF4JykpLFxyXG5cdFx0XHRcdG1pbiA9IHBhcnNlSW50KGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1taW4nKSksXHJcblx0XHRcdFx0dmFsdWUgPSBwYXJzZUludChpbnB1dC52YWx1ZSk7XHJcblxyXG5cdFx0XHR1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdFx0dmFsdWUrKztcclxuXHJcblx0XHRcdFx0aWYoISFtYXggJiYgdmFsdWUgPiBtYXgpIHtcclxuXHJcblx0XHRcdFx0XHR2YWx1ZSA9IG1heDtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpbnB1dC52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0XHRcdHRleHQudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0ZG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdFx0dmFsdWUtLTtcclxuXHJcblx0XHRcdFx0aWYoISFtaW4pIHtcclxuXHJcblx0XHRcdFx0XHRpZih2YWx1ZSA8IG1pbikge1xyXG5cclxuXHRcdFx0XHRcdFx0dmFsdWUgPSBtaW47XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZih2YWx1ZSA8IDEpIHtcclxuXHJcblx0XHRcdFx0XHR2YWx1ZSA9IDE7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aW5wdXQudmFsdWUgPSB2YWx1ZTtcclxuXHRcdFx0XHR0ZXh0LnRleHRDb250ZW50ID0gdmFsdWU7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJyxmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHRcdFx0aW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UoMCw5KTtcclxuXHJcblx0XHRcdFx0fSwxMDApO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsZnVuY3Rpb24oZSl7XHJcblxyXG5cdFx0XHRcdGlmIChlLmtleUNvZGUgPT0gMTMpIHtcclxuXHJcblx0XHRcdFx0XHR0aGlzLmJsdXIoKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgdmFsID0gcGFyc2VJbnQodGhpcy52YWx1ZSk7XHJcblxyXG5cdFx0XHRcdGlmICghaXNOYU4odmFsKSkge1xyXG5cclxuXHRcdFx0XHRcdHZhbHVlID0gdmFsO1xyXG5cclxuXHRcdFx0XHRcdGlmKCEhbWF4ICYmIHZhbHVlID4gbWF4KSB7XHJcblxyXG5cdFx0XHRcdFx0XHR2YWx1ZSA9IG1heDtcclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZighIW1pbikge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYodmFsdWUgPCBtaW4pIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFsdWUgPSBtaW47XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSBpZih2YWx1ZSA8IDEpIHtcclxuXHJcblx0XHRcdFx0XHRcdHZhbHVlID0gMTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0dGV4dC50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0dGV4dC50ZXh0Q29udGVudCA9IHRoaXMudmFsdWU7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtcXVhbnRpdHknKSk7IiwiKGZ1bmN0aW9uKGJ0bnMpe1xyXG5cclxuXHRpZihidG5zLmxlbmd0aCA9PSAwKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vIGNyZWF0ZSBhbmQgZGlzcGF0Y2ggdGhlIGV2ZW50XHJcblx0dmFyIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpO1xyXG5cclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGJ0bnMsIGZ1bmN0aW9uKGJ0bil7XHJcblxyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0dmFyIHNlbGVjdG9yID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1zaG93JyksXHJcblx0XHRcdFx0c2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cclxuXHRcdFx0aWYoc2hvdy5sZW5ndGgpIHtcclxuXHJcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzaG93LCBmdW5jdGlvbihlbCl7XHJcblxyXG5cdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsICFidG4uY2hlY2tlZCk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGJ0bi5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gtdG9nZ2xlLXNob3cnKSk7IiwiXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcblx0aWYoZS50YXJnZXQuY2xvc2VzdCgnLmJ0bi1tZW51LXRvZ2dsZScpIHx8IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbWVudS1zaG93Jykpe1xyXG5cclxuXHRcdGlmKFNDLk9wZW5NZW51KSB7XHJcblxyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtc2hvdycpO1xyXG5cclxuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsU0Mud2luZG93U2Nyb2xsT2xkKTtcclxuXHJcblx0XHRcdFNDLk9wZW5NZW51ID0gZmFsc2U7XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRTQy5PcGVuTWVudSA9IHRydWU7XHJcblxyXG5cdFx0XHQvLyDQt9Cw0L/QuNGB0YvQstCw0LXQvCDQt9C90LDRh9C10L3QuNC1INGB0LrRgNC+0LvQu9CwINGB0YLRgNCw0L3QuNGG0YtcclxuXHRcdFx0U0Mud2luZG93U2Nyb2xsT2xkID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuXHJcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbWVudS1zaG93Jyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG59KTtcclxuXHJcbihmdW5jdGlvbihidG4pe1xyXG5cclxuXHRpZihidG4pIHtcclxuXHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtc2hvdycpO1xyXG5cclxuXHRcdFx0UHViU3ViLnB1Ymxpc2goJ1N3aXBlclVwZGF0ZScpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1iYXJfX2J0bi10b2dnbGUnKSk7IiwiXHJcbihmdW5jdGlvbihpdGVtcyl7XHJcblxyXG5cdGlmKCFpdGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChpdGVtcywgZnVuY3Rpb24oZWwpe1xyXG5cclxuXHRcdHZhciBidG4gPSBlbC5xdWVyeVNlbGVjdG9yKCcubW9yZS1zbGlkZV9fYnRuJyksXHJcblx0XHRcdGJveCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5tb3JlLXNsaWRlX19ib3gnKSxcclxuXHRcdFx0aW5uZXIgPSBlbC5xdWVyeVNlbGVjdG9yKCcubW9yZS1zbGlkZV9faW5uZXInKTtcclxuXHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRib3guY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGJveC5hZGRFdmVudExpc3RlbmVyKFNDLmNzc0FuaW1hdGlvbigndHJhbnNpdGlvbicpLGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicsIGJveC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vcmUtc2xpZGUnKSk7Il19
