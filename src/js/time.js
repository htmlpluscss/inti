( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, el => {

		let inputFocus = false;

		const btn = el.querySelector('.input-time__btn'),
			  input = el.querySelector('.input-time__input'),
			  select = el.querySelector('.input-time__select');

		btn.addEventListener('click', () => {

			setTimeout( () => select.classList.add('select--open') ,99);

		});

		input.addEventListener('focus', () => {

			inputFocus = true;

			setTimeout( () => select.classList.toggle('select--open', inputFocus) ,99);

		});

		input.addEventListener('blur', () => {

			inputFocus = false;

		});

		select.querySelector('select').addEventListener('change', event => {

			input.value = event.target.value;

		});

		input.addEventListener('keydown', event => {

			if(event.keyCode === 13 || event.keyCode === 27) {

				input.blur();
				select.classList.remove('select--open');

			}

		});

	});

})(document.querySelectorAll('.input-time'));