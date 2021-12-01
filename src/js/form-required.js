( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, form => {

		const item = form.querySelectorAll('[required]'),
			  submit = form.querySelector('.form-required__submit');

		form.addEventListener("input", () => {

			let falid = true;

			Array.from(item, el => {

				if(el.value === 'none' || el.value.length === 0) {

					falid = false;

				}

			});

			submit.disabled = !falid;

		});

	});

})(document.querySelectorAll('.form-required'));