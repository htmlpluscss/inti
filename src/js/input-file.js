( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, item => {

		const input = item.querySelector('.input-file__input'),
			  value = item.querySelector('.input-file__value');

		input.addEventListener('change', () => {

			item.classList.add('is-change');
			value.textContent = input.value;

		});

	});

})(document.querySelectorAll('.input-file'));