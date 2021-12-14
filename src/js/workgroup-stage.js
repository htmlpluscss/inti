( item => {

	if( !item ) {

		return;

	}

	const formLang = item.querySelector('.workgroup-item-stage-lang');

	if ( formLang ) {

		formLang.addEventListener('change', () => {

			Array.from(formLang.querySelectorAll('[data-lang]'), el => {

				el.classList.toggle('hide', el.getAttribute('data-lang') !== formLang.elements.lang.value);

			});

		});

	}

	// vote

	const stageVote = item.querySelector('.workgroup-item-stage-vote');

	if ( stageVote ) {

		const form = stageVote.querySelector('.workgroup-item-stage-vote__form'),
			  cancel = stageVote.querySelectorAll('.workgroup-item-stage-vote__cancel');

		form.addEventListener('change', () => {

			form.classList.add('is-loading');

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.json())
			.then(result => {

				console.log(result);

				form.classList.remove('is-loading');
				form.reset();

				if ( result.vote === "1" ) {

					notification(...result.notification);

				} else {

					const eventModalShow = new CustomEvent("modalShow", {
						detail: {
							selector: "workgroup-item-stage-vote"
						}
					});

					window.modal.dispatchEvent(eventModalShow);

				}

			});

		});

		Array.from(cancel, formCancel => {

			const btn = formCancel.querySelector('.workgroup-item-stage-vote__cancel-btn');

			formCancel.addEventListener('submit', event => {

				event.preventDefault();

				btn.disabled = true;

				fetch(formCancel.getAttribute('action'), {
					method: 'POST',
					body: new FormData(formCancel)
				})
				.then(response => response.text())
				.then(result => {

					form.classList.remove('hide');
					formCancel.classList.add('hide');

					btn.disabled = true;

				});

			});

		});

	}

	// form modal-stage-vote

	const formAgainst = document.querySelector('#workgroup-item-stage-vote-against');

	if ( formAgainst ) {

		const btn = formAgainst.querySelector('.modal-stage-vote__submit'),
			  file = formAgainst.querySelector('.modal-stage-vote__input-file-input');

		formAgainst.addEventListener('submit', event => {

			event.preventDefault();

			if ( file.value.length === 0 ) {

				notification(...formAgainst.getAttribute('data-required').split('|'), 99);

			} else {

				btn.disabled = true;
				formAgainst.classList.add('is-loading');

				fetch(formAgainst.getAttribute('action'), {
					method: 'POST',
					body: new FormData(formAgainst)
				})
				.then(response => response.json())
				.then(result => {

					console.log(result);

					modal.dispatchEvent(new CustomEvent("hide"));

				});

			}

		});

		formAgainst.addEventListener('change', event => {

			btn.disabled = file.value.length === 0;

			if ( event.target === file ) {

				formAgainst.querySelector('.modal-stage-vote__input-file-text').textContent = file.value;

			}

		});

	}

})(document.querySelector('.workgroup-item-stage'));