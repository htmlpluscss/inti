( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, form => {

		form.addEventListener("change", () => {

			event.preventDefault();
			form.classList.add('is-loading');

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.json())
			.then(json => {

				console.log(json);

				form.classList.remove('is-loading');

				alert('вырианты ответов: rejected | removed | pending, link ')

				if ( json.pending ) {

					document.querySelector('#modal-invitations-complete-link').href = json.link;

					const eventModalShow = new CustomEvent("modalShow", {
						detail: {
							selector: "invitations-complete"
						}
					});

					window.modal.dispatchEvent(eventModalShow);

					form.remove();

				}

				if ( json.rejected ) {

					form.classList.add('invitations--rejected');

				}

				if ( json.removed ) {

					form.addEventListener(window.cssAnimation('transition'), () => form.remove());

					setTimeout( ()=> form.classList.add('is-removed') );

				}

			});

		});

	});

})(document.querySelectorAll('.invitations'));