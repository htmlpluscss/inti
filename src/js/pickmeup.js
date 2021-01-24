( items => {

	if(!items.length) {

		return;

	}

	pickmeup.defaults.locales['ru'] = {
		days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
		daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
	};

	Array.from(items, el => {

		let btnInput,
			inputFocus = false;

		const btn = el.querySelector('.input-date__btn'),
			  input = el.querySelector('.input-date__input');

		if(input.disabled) {

			return;

		}

		btnInput = pickmeup(btn, {

			position: () => {

				const rect = el.getBoundingClientRect(),
					  top = window.pageYOffset + rect.bottom + 'px';
					  left = rect.left + 'px';

				return {top: top, left: left}

			},
			date: input.value,
			hide_on_select : true,
			title_format: 'B Y',
			format: 'd/m/Y',
			locale: 'ru',
			prev: '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M9 11l4.6-4.6A.99.99 0 1115 7.8l-3.9 3.9 3.9 3.9a.99.99 0 01-1.4 1.4L9 12.41A1 1 0 019 11z"/></svg>',
			next: '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M15 11a1 1 0 010 1.4L10.4 17A.99.99 0 019 15.6l3.9-3.9L9 7.8a.99.99 0 011.4-1.4L15 11z"/></svg>'

		});

		btn.addEventListener('pickmeup-change', () => {

			input.blur();

			if(input.value !== btnInput.get_date(true)){

				input.value = btnInput.get_date(true);
				input.dispatchEvent(new CustomEvent("change"));

			}

		});

		btn.addEventListener('pickmeup-hide', event => {

			if(inputFocus) {

				event.preventDefault();

			}

		});

		input.addEventListener('keydown', event => {

			if(event.keyCode === 13 || event.keyCode === 27) {

				input.blur();
				btnInput.hide();

			}

		});

		input.addEventListener('focus', () => {

			inputFocus = true;

			btnInput.show();

		});

		input.addEventListener('blur', () => {

			inputFocus = false;

		});

		input.addEventListener('input', () => {

			btnInput.show();
			btnInput.set_date(input.value);

		});

	});

})(document.querySelectorAll('.input-date'));