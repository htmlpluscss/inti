
// forms

( fieldsets => {

	if(fieldsets.length) {

		const searchResult = document.querySelector('.docs-search-result');

		Array.from(fieldsets, fieldset => {

			// open

			fieldset.addEventListener('click', event => {

				if ( event.target.closest('.docs-form__result') ) {

					return;

				}

				Array.from(fieldsets, el => el.classList.toggle('is-focus', el === fieldset));

			});

			const form = fieldset.closest('.docs-form'),
				  input = fieldset.querySelector('.docs-form__input'),
				  reset = fieldset.querySelector('.docs-form__reset'),
				  result = fieldset.querySelector('.docs-form__result')
				  formShort = document.querySelector('.docs-page--short');

			// input

			input.addEventListener('focus', () => {

				Array.from(fieldsets, el => {

					el.classList.toggle('is-focus', el === fieldset);

					if ( fieldset.classList.contains('docs-form__catalog') && el !== fieldset ) {

						el.classList.add('hide');

					}

				});

			});

		/* nomenclature */

			if(fieldset.classList.contains('docs-form__nomenclature')) {

				// datalist

				const datalist = fieldset.querySelectorAll('.docs-form__result-datalist');

				Array.from(datalist, btn => {

					btn.addEventListener('click', () => {

						fieldset.classList.remove('is-focus');

						input.value = btn.textContent.trim();

						reset.classList.remove('hide');

						form.classList.add('is-noempty');

						form.dispatchEvent(new CustomEvent("change"));

					});

				});

				input.addEventListener('input', () => {

					const value = input.value.toLowerCase();

					reset.classList.toggle('hide', value.length === 0);

					if(value.length > 1) {

						Array.from(datalist, btn => {

							const text = btn.textContent.trim().toLowerCase();

							btn.classList.toggle('hide', text.indexOf(value) === -1);

						});

						input.getAttribute('data-empty');

					} else {

						Array.from(datalist, btn => btn.classList.remove('hide'));

					}

				});

				// reset === clear

				reset.addEventListener('click', () => {

					Array.from(datalist, btn => btn.classList.remove('hide'));
					fieldset.classList.add('is-focus');
					reset.classList.add('hide');
					input.value = '';
					input.focus();

				});

				// reset там где реальная кнопка reset

				form.addEventListener('reset', () => {

					Array.from(datalist, btn => btn.classList.remove('hide'));
					fieldset.classList.add('is-focus');
					input.focus();

				});

			}

		/* developer */

			if(fieldset.classList.contains('docs-form__developer')) {

				// checkbox

				const checkbox = fieldset.querySelectorAll('.checkbox__input');

				form.addEventListener('change', event => {

					if( event.target.type !== 'checkbox' ) {

						return;

					}

					let value = '';

					if ( event.target.name === 'all' && event.target.checked ) {

						value = event.target.parentNode.textContent.trim();

						Array.from(checkbox, el => el.checked = true);

					} else {

						Array.from(checkbox, el => {

							if( el.name === 'all' ) {

								el.checked = false;

							}

							if( el.checked ) {

								const label = el.parentNode;

								if( value !== '' ) {

									value += ', ';

								}

								value += label.textContent.trim();

							}

						});

					}

					input.value = value;

					if( value === '' ) {

						reset.classList.add('hide');
						form.classList.remove('is-noempty');

					} else {

						reset.classList.remove('hide');
						form.classList.add('is-noempty');

					}

				});

				// reset === clear

				reset.addEventListener('click', () => {

					Array.from(checkbox, el => el.checked = false);
					fieldset.classList.add('is-focus');
					reset.classList.add('hide');
					input.value = '';

				});

			}

			// product

			if(form.classList.contains('docs-form--product')) {

				input.addEventListener('keyup', event => {

					if(input.value.length > 2 && event.key !== 'enter'){

						form.classList.add('form--loading');

						fetch(form.getAttribute('action'), {
							method: 'POST',
							body: new FormData(form)
						})
						.then(response => response.text())
						.then(html => {

							console.log(html);

							result.innerHTML = html;
							result.classList.remove('hide');
							form.classList.remove('form--loading');

							reset.classList.remove('hide');

						});

					}

				});

				form.addEventListener('reset', () => {

					result.classList.add('hide');
					input.focus();

				});

			}

		});

		window.addEventListener("click", event => {

			if( event.target.closest('.docs-form__fieldset') === null ){

				Array.from(fieldsets, el => el.classList.remove('is-focus', 'hide'));

			}

			// tabs

			const tabsBtn = event.target.closest('.docs-page__tabs-item');

			if( tabsBtn ){

				document.querySelector('.docs-page__tabs-item.is-active').classList.remove('is-active');
				tabsBtn.classList.add('is-active');

				if( tabsBtn.classList.contains('docs-page__tabs-item--standarts') ) {

					document.querySelector('.docs-page__forms--standarts').classList.remove('hide');
					document.querySelector('.docs-page__forms--analytics').classList.add('hide');

				}

				if( tabsBtn.classList.contains('docs-page__tabs-item--analytics') ) {

					document.querySelector('.docs-page__forms--analytics').classList.remove('hide');
					document.querySelector('.docs-page__forms--standarts').classList.add('hide');

				}

			}

		});


		// form list

		Array.from(document.querySelectorAll('.docs-form'), form => {

			const input = form.querySelector('.docs-form__input'),
				  reset = form.querySelector('.docs-form__reset');

			// reset

			form.addEventListener('reset', () => reset.classList.add('hide'));

			// input

			form.addEventListener('input', () => {

				form.classList.toggle('is-noempty', input.value.length > 0);

			});

		});

		// form list

		Array.from(document.querySelectorAll('.docs-form--list'), form => {

			const input = form.querySelector('.docs-form__input'),
				  reset = form.querySelector('.docs-form__reset'),
				  result = form.querySelector('.docs-form__result');

			// change

			let controller = new AbortController();

			form.addEventListener('change', () => {

				if(searchResult.classList.contains('is-loading')) {

					controller.abort();

				}

				console.log(form, 'change');

				searchResult.classList.add('is-loading');
				searchResult.innerHTML = '';

				fetch(form.getAttribute('action'), {
					method: 'POST',
					body: new FormData(form),
					signal: controller.signal
				})
				.then(response => response.text())
				.then(html => {

					searchResult.innerHTML = html;
					searchResult.classList.remove('is-loading');

				});

				if(formShort === null) {

					formShort = true;

					document.body.classList.remove('page-blue');
					document.querySelector('.docs-page').classList.add('docs-page--short');
					document.querySelector('.docs-page__description').classList.add('hide');
					searchResult.classList.remove('hide');

				}

			});

			// submit

			form.addEventListener('submit', event => {

				event.preventDefault();

				form.dispatchEvent(new CustomEvent("input"));
				form.dispatchEvent(new CustomEvent("change"));

			});

			// ajax load scroll

			if ('IntersectionObserver' in window) {

				const boxResult = document.createElement('div');

				let pagin = 2,
					windowScroll = window.pageYOffset;

				const callback = (entries, observer) => {

					Array.from(entries, entry => {

						if(entry.isIntersecting && form.classList.contains('is-loading') === false && form.offsetParent !== null) {

							form.classList.add('is-loading');

							let formData = new FormData(form);
							formData.append('pagin', pagin);

							fetch(form.getAttribute('action'), {
								method: 'POST',
								body: formData
							})
							.then(response => response.text())
							.then(html => {

								console.log(html);

								boxResult.innerHTML = html;

								windowScroll = window.pageYOffset;

								Array.from(boxResult.querySelectorAll('.docs-catalog__item'), item => {

									searchResult.querySelector('.docs-catalog__list').appendChild(item);

								});

								if( windowScroll !== window.pageYOffset ) {

									window.scrollTo(0,windowScroll);

								}

								pagin++;

								form.classList.remove('is-loading');

							});

						}

					});

				};

				const observer = new IntersectionObserver(callback);

				observer.observe(document.querySelector('.footer'));

			}

		});

	}

})(document.querySelectorAll('.docs-form__fieldset'));