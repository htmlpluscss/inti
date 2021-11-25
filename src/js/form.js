( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, form => {

		const btn = form.querySelector('.form__submit');

		form.addEventListener('submit', event => {

			event.preventDefault();

			form.classList.add('is-loading');
			btn.disabled = true;

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.json())
			.then(result => {

				console.log(result);

				form.classList.remove('is-loading');
				btn.disabled = false;

			// notification

				if(result.notification) {

					notification(...result.notification);

				}

			// redirect

				if(result.redirect) {

					const delay = result.redirectDelay ? result.redirectDelay * 1000 : 0;

					setTimeout( ()=> location.assign(result.redirect), delay);

				}

			// reset

				if(result.reset) {

					form.reset();

				}

			// reload

				if(result.refresh) {

					location.reload();

				}

			// close modal

				if(result.modalClose) {

					modal.dispatchEvent(new CustomEvent("hide"));

				}

			});

		});

	});

})(document.querySelectorAll('.form'));

// like

( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, form => {

		const counterLike = form.querySelector('.form-like__counter-like'),
			  counterDisLike = form.querySelector('.form-like__counter-dislike');

		form.addEventListener('change', () => {

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.json())
			.then(result => {

				console.log(result);

				counterLike.textContent = result.like;
				counterDisLike.textContent = result.dislike;

			});

		});

	});

})(document.querySelectorAll('.form-like'));