( items => {

	if(!items.length) {

		return;

	}

	// обработчики формы

	const handlersForm = form => {

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

	};

	Array.from(items, form => handlersForm(form));

	// code sms
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

	// добавление площадки

	const btnAdd = document.querySelector('.company-add-base');

	btnAdd.addEventListener('click', event => {

		alert('add');

	});

})(document.querySelectorAll('.company-form'));