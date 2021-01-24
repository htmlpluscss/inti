( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, el => {

		const btn = el.querySelector('.input-time__btn'),
			  input = el.querySelector('.input-time__input'),
			  datalist = el.querySelector('.input-time__datalist');

		if(input.disabled) {

			return;

		}

		Array.from(datalist.querySelectorAll('[data-value]'), el => {

			el.addEventListener('click', event => {

				event.preventDefault();
				el.classList.remove('input-time--open');

				if(input.value !== el.getAttribute('data-value')){

					input.value = el.getAttribute('data-value');
					input.dispatchEvent(new CustomEvent("change"));

				}

			});

		});

		input.addEventListener('keydown', event => {

			if(event.keyCode === 13 || event.keyCode === 27) {

				input.blur();
				el.classList.remove('input-time--open');

			}

		});

	});

	window.addEventListener("click", event => {

		const isInputTime = event.target.closest('.input-time');

		Array.from(items, el => {

			el.classList.toggle('input-time--open', el === isInputTime && !isInputTime.classList.contains('input-time--open'));

		});

	});

})(document.querySelectorAll('.input-time'));