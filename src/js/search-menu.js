/*( forms => {

	if(!forms.length) {

		return;

	}

	Array.from(forms, elem => {

		const form = elem.querySelector('.search-menu__form'),
			  input = form.querySelector('.input'),
			  btnToggle = form.querySelector('.search-menu__toggle-menu');

		input.addEventListener('focus', () => elem.classList.add('is-form-only'));

		btnToggle && btnToggle.addEventListener('click', ()=> {

			elem.classList.toggle('is-full');

		});

		document.body.addEventListener('click', event => {

			if(event.target.closest('.search-menu__form') === null) {

				elem.classList.remove('is-form-only');

			}

		});

	});

})(document.querySelectorAll('.search-menu'));*/