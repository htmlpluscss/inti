( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, form => {

		const submit = form.querySelector('.form-required__submit');

		form.addEventListener("input", () => {

			let falid = true;

			Array.from(form.querySelectorAll('[required]'), el => {

				if ( el.type === 'radio' && form.querySelectorAll('[name="' + el.name + '"]:checked').length === 0 ) {

					falid = false;

				} else if ( el.value === 'none' || el.value.length === 0 ) {

					falid = false;

				}

			});

			submit.disabled = !falid;

		});

	});

})(document.querySelectorAll('.form-required'));