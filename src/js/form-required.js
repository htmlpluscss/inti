( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, form => {

		const item = form.querySelectorAll('.form-required__item'),
			  submit = form.querySelector('.form-required__submit');

		form.addEventListener("change", () => {

			let falid = true;

			Array.from(item, el => {

				if(el.value === 'none') {

					falid = false;

				}

			});

			if(falid) {

				submit.disabled = false;

			}

		});

	});

})(document.querySelectorAll('.form-required'));