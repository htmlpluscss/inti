( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, form => {

		const resultContainer = document.querySelector('#' + form.getAttribute('data-result'));

		form.addEventListener('change', () => {

			const object = {};
			new FormData(form).forEach((value, key) => (object[key] = value));
			const json = JSON.stringify(object);

			fetch(form.getAttribute("action"), {
				method: "POST",
				body: json
			})
			.then(response => response.html())
			.then(result => {

				console.log(result);

				resultContainer.innerHTML = result;

			});

		});

	});

})(document.querySelectorAll('.form-html'));