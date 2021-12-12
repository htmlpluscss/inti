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