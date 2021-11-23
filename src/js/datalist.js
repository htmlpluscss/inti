( datalists => {

	if ( datalists.length === 0 ) {

		return;

	}

	Array.from(datalists, datalist => {

		const input = datalist.querySelector('.input-datalist__input'),
			  list = datalist.querySelector('.input-datalist__list'),
			  items = datalist.querySelectorAll('.input-datalist__item');

		let checked = null;

		Array.from(items, item => {

			const label = item.querySelector('.input-datalist__label'),
				  radio = item.querySelector('.input-datalist__radio');

			radio.addEventListener("change", () => {

				input.value = label.textContent.trim();
				datalist.classList.remove('is-focus');
				checked = radio;

			});

		});

		input.addEventListener('focus', () => datalist.classList.add('is-focus'));

		input.addEventListener('input', () => {

			const value = input.value.toLowerCase();

			if ( checked ) {

				checked.checked = false;
				checked = null;

			}

			if(value.length > 1) {

				Array.from(items, item => {

					const text = item.querySelector('.input-datalist__label').textContent.trim().toLowerCase();

					item.classList.toggle('hide', text.indexOf(value) === -1);

				});

				input.classList.toggle('is-empty', items.length === list.querySelectorAll('.input-datalist__item.hide').length);

			} else {

				Array.from(items, item => item.classList.remove('hide'));
				input.classList.add('is-empty');

			}

		});

	});

	window.addEventListener("click", event => {

		if ( event.target.closest('.input-datalist') === null ) {

			Array.from(datalists, datalist => datalist.classList.remove('is-focus'));

		}

	});

})(document.querySelectorAll('.input-datalist'));