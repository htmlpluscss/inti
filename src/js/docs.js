
// forms

( forms => {

	if(forms.length) {

		Array.from(forms, form => {

			// open

			form.addEventListener('click', event => {

				if ( event.target.closest('.docs-page__form-result') ) {

					return;

				}

				Array.from(forms, el => el.classList.toggle('is-focus', el === form));

			});

			// input

			const input = form.querySelector('.docs-page__form-input');

			input.addEventListener('focus', () => {

				Array.from(forms, el => {

					el.classList.toggle('is-focus', el === form);

					if ( form.classList.contains('docs-page__catalog') && el !== form ) {

						el.classList.add('hide');

					}

				});

			});

			// reset

			const reset = form.querySelector('.docs-page__form-reset');

			form.addEventListener('reset', () => reset.classList.add('hide'));

		/* nomenclature */

			if(form.classList.contains('docs-page__nomenclature')) {

				// datalist

				const datalist = form.querySelectorAll('.docs-page__form-result-datalist');

				Array.from(datalist, btn => {

					btn.addEventListener('click', () => {

						form.classList.remove('is-focus');

						input.value = btn.textContent.trim();

						reset.classList.remove('hide');

					});

				});

				input.addEventListener('input', () => {

					const value = input.value.toLowerCase();

					reset.classList.toggle('hide', value.length < 3);

return;

					if(value.length > 1) {

						Array.from(datalist, btn => {

							const text = btn.textContent.trim().toLowerCase();

							btn.classList.toggle('hide', text.indexOf(value) === -1);

						});

						// input.getAttribute('data-empty');

					} else {

						Array.from(datalist, btn => btn.classList.remove('hide'));

					}

				});

			}

		/* developer */

			if(form.classList.contains('docs-page__developer')) {

				// checkbox

				const checkbox = form.querySelectorAll('.checkbox__input');

				form.addEventListener('change', () => {
return;
					let value = '';

					Array.from(checkbox, el => {

						if( el.checked ) {

							const label = el.parentNode;

							value += label.textContent.trim();
// глюк при клеке на чекбокс
						}

					});

					if( value === '' ) {

						form.dispatchEvent(new CustomEvent("reset"));

					} else {

						input.value = value;

						reset.classList.remove('hide');

					}

				});

			}

		/* catalog */

			if(form.classList.contains('docs-page__catalog')) {

			}

		});

		window.addEventListener("click", event => {

			if( event.target.closest('.docs-page__forms') === null ){

				Array.from(forms, el => el.classList.remove('is-focus', 'hide'));

			}

			// tabs

			const tabsBtn = event.target.closest('.docs-page__tabs-item');

			if( tabsBtn ){

				document.querySelector('.docs-page__tabs-item.is-active').classList.remove('is-active');
				tabsBtn.classList.add('is-active');

				if( tabsBtn.classList.contains('docs-page__tabs-item--standarts') ) {

					document.querySelector('.docs-page__developer').classList.remove('hide');

				}

				if( tabsBtn.classList.contains('docs-page__tabs-item--analytics') ) {

					document.querySelector('.docs-page__developer').classList.add('hide');

				}

			}

		});
/*
		const input = form.querySelector('.live-search__input'),
			  result = form.querySelector('.live-search__result');

		input.addEventListener('keyup', event => {

			if(input.value.length > 2 && event.key !== 'enter'){

				form.classList.add('live-search--loading', 'live-search--open');

				fetch(form.getAttribute('action'), {
					method: 'POST',
					body: new FormData(form)
				})
				.then(response => response.text())
				.then(html => {

					console.log(html);

					result.innerHTML = html;
					form.classList.remove('live-search--loading');

				});

			}

		});*/
	}

})(document.querySelectorAll('.docs-page__form'));
