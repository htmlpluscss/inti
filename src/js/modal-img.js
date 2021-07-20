( items => {

	if(items.length) {

		Array.from(items, link => {

			link.addEventListener('click', event => {

				event.preventDefault();

				const src = link.getAttribute('href');

				document.querySelector('#modal-photo').innerHTML = '<img src="' + src + '">';

				const eventModalShow = new CustomEvent("modalShow", {
					detail: {
						selector: "photo"
					}
				});

				window.modal.dispatchEvent(eventModalShow);

			});

		});

	}

})(document.querySelectorAll('.modal-img'));