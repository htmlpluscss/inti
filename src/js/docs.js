
( forms => {

	if(forms.length) {

		const addAjaxItem = (html, searchResultBox) => {

			const boxResult = document.createElement('div');

			boxResult.innerHTML = html;

			Array.from(boxResult.querySelectorAll('.docs-catalog__item'), item => {

				searchResultBox.querySelector('.docs-catalog__list').appendChild(item);

			});

			if ( boxResult.querySelector('.docs-viewed') ) {

				searchResultBox.querySelector('.docs-viewed').innerHTML = boxResult.querySelector('.docs-viewed').innerHTML;

			}

			if ( boxResult.querySelector('.pagin') ) {

				searchResultBox.querySelector('.pagin').innerHTML = boxResult.querySelector('.pagin').innerHTML;

			}

			if( boxResult.querySelector('.docs-ajax__btn') ) {

				searchResultBox.querySelector('.docs-ajax__btn').disabled = false;

			} else if (searchResultBox.querySelector('.docs-ajax')) {

				searchResultBox.querySelector('.docs-ajax').remove();

			}

			if( windowScroll !== window.pageYOffset ) {

				window.scrollTo(0,windowScroll);

			}

			searchResult.classList.remove('is-loading','is-loading-add');

			document.querySelector('.docs-page__tabs-item.is-active').setAttribute('data-history', location.pathname + location.search);

		};

		const formShortStatus = ()=> {

			if(formShort === null) {

				formShort = true;

				document.body.classList.remove('page-blue');
				document.querySelector('.docs-page').classList.add('docs-page--short');
				document.querySelector('.docs-page__description').remove();

			}

		};

		const searchResult = document.querySelector('.docs-search-result'),
			  searchResultStandarts = searchResult.querySelector('.docs-search-result__standarts'),
			  searchResultAnalytics = searchResult.querySelector('.docs-search-result__analytics'),
			  fieldsets = document.querySelectorAll('.docs-form__fieldset');

		let windowScroll = window.pageYOffset,
			formShort = document.querySelector('.docs-page--short'),
			activeTabStandarts = document.querySelector('.docs-page__tabs-item--standarts').classList.contains('is-active'),
			searchResultStandartsEmpty = searchResultStandarts.classList.contains('hide'),
			searchResultAnalyticsEmpty = searchResultAnalytics.classList.contains('hide');

		Array.from(forms, form => {

			// keywords

			if( form.classList.contains('docs-form--product') ) {

				const input = form.querySelector('.docs-form__input'),
					  result = form.querySelector('.docs-form__result');

				// input

				input.addEventListener('keyup', event => {

					if(input.value.length > 2 && event.key !== 'enter'){

						fetch(form.getAttribute('data-action'), {
							method: 'POST',
							body: new FormData(form)
						})
						.then(response => response.text())
						.then(html => {

							console.log(html);

							result.innerHTML = html;
							result.classList.remove('hide');

						});

					}

				});

				form.addEventListener('reset', () => {

					if ( input.value.length === 0 ) {

						Array.from(fieldsets, el => el.classList.remove('is-focus', 'hide'));

						return;

					}

					result.classList.add('hide');

					searchResult.classList.add('is-loading');

					if( activeTabStandarts ) {

						searchResultStandarts.innerHTML = '';
						searchResultStandarts.classList.remove('hide');

						history.pushState(undefined, '', searchResult.getAttribute('data-statndarts'));
						document.querySelector('.docs-page__tabs-item.is-active').setAttribute('data-history', searchResult.getAttribute('data-statndarts'));

					} else {

						searchResultAnalytics.innerHTML = '';
						searchResultAnalytics.classList.remove('hide');

						history.pushState(undefined, '', searchResult.getAttribute('data-analytics'));
						document.querySelector('.docs-page__tabs-item.is-active').setAttribute('data-history', searchResult.getAttribute('data-analytics'));

					}

					formShortStatus();

					setTimeout( ()=> {

						input.value = '';
						input.removeAttribute('value');

						let url = form.getAttribute('action') + '?';

						new FormData(form).forEach((value, key) => {

							url += key + "=" + value + "&";

						});

						fetch(url)
							.then(response => response.text())
							.then(html => {

								const boxResult = document.createElement('div');

								boxResult.innerHTML = html;

								if( activeTabStandarts ) {

									searchResultStandarts.innerHTML = boxResult.querySelector('.docs-search-result__standarts').innerHTML;

								} else {

									searchResultAnalytics.innerHTML = boxResult.querySelector('.docs-search-result__analytics').innerHTML;

								}

								searchResult.classList.remove('is-loading');
								input.focus();

							});

					}, 100);

				});

				// кнопка еще

				form.addEventListener('ajax', () => {

					console.log('ajax', windowScroll);

					const searchResultBox = searchResultStandarts.classList.contains('hide') ? searchResultAnalytics : searchResultStandarts;

					searchResult.classList.add('is-loading-add');

					windowScroll = window.pageYOffset;

					form.elements.PAGEN_1.value = parseInt(form.elements.PAGEN_1.value) + 1;


					const formData = new FormData(form);

					const queryString = new URLSearchParams(formData).toString();

					history.pushState(undefined, '', '?' + queryString);

					console.log(queryString);

					let url = form.getAttribute('action') + '?';

					new FormData(form).forEach((value, key) => {

						url += key + "=" + value + "&";

					});

					console.log(url);

					fetch(url)
						.then(response => response.text())
						.then(html => addAjaxItem(html, searchResultBox));

				});

			}

			// карточки, номерклатура и разработчик

			if( form.classList.contains('docs-form--list') ) {

				form.addEventListener('change', () => {

					// если input === radio

					const nomenclature = form.querySelectorAll('.docs-form__result-datalist:not(.hide)');

					if ( nomenclature.length === 1 ) {

						if ( nomenclature[0].textContent.trim().toLowerCase() === document.querySelector('#form-docs-standarts-nomenclature').value.toLowerCase() ) {

							nomenclature[0].querySelector('input').checked = true;
							nomenclature[0].classList.add('hide');

						}

					}

					console.log('change');

					searchResultStandartsEmpty = false;

					if ( searchResultStandarts.querySelector('.docs-ajax__btn:disabled') ) {

						searchResult.classList.add('is-loading-add');

						windowScroll = window.pageYOffset;

						form.elements.PAGEN_1.value = parseInt(form.elements.PAGEN_1.value) + 1;

					} else {

						searchResult.classList.add('is-loading');
						searchResultStandarts.innerHTML = '';
						form.elements.PAGEN_1.value = 1;

					}

					const formData = new FormData(form);

					const queryString = new URLSearchParams(formData).toString();

					history.pushState(undefined, '', '?' + queryString);

					fetch(form.getAttribute('data-action'), {
						method: 'POST',
						body: formData
					})
					.then(response => response.text())
					.then(html => {

						searchResultStandarts.classList.remove('hide');

						// кнопка ещё

						if ( searchResultStandarts.querySelector('.docs-ajax__btn:disabled') ) {

							addAjaxItem(html, searchResultStandarts);

						} else {

							searchResultStandarts.innerHTML = html;

							document.querySelector('.docs-page__tabs-item.is-active').setAttribute('data-history', location.pathname + location.search);

						}

						searchResult.classList.remove('is-loading','is-loading-add');

					});

					formShortStatus();

				});

				// submit

				form.addEventListener('submit', event => {

					event.preventDefault();

					form.dispatchEvent(new CustomEvent("change"));

				});

				// кнопка еще

				form.addEventListener('ajax', () => {

					form.dispatchEvent(new CustomEvent("change"));

				});

			}

		});

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
				  result = fieldset.querySelector('.docs-form__result');

			// input

			input.addEventListener('focus', () => {

				Array.from(fieldsets, el => {

					el.classList.toggle('is-focus', el === fieldset);

					if ( fieldset.classList.contains('docs-form__catalog') && el !== fieldset ) {

						el.classList.add('hide');

					}

				});

			});

			// nomenclature

			if(fieldset.classList.contains('docs-form__nomenclature')) {

				// datalist

				const datalist = fieldset.querySelectorAll('.docs-form__result-datalist');

				Array.from(datalist, btn => {

					btn.querySelector('input').addEventListener('change', () => {

						fieldset.classList.remove('is-focus');

						input.value = btn.textContent.trim();

						reset.classList.remove('hide');

					});

				});

				input.addEventListener('input', () => {

					const value = input.value.toLowerCase();

					reset.classList.toggle('hide', value.length === 0);

					if(value.length > 1) {

						Array.from(datalist, btn => {

							const text = btn.textContent.trim().toLowerCase();

							if ( text.indexOf(value) === -1 ) {

								btn.classList.add('hide');
								btn.querySelector('input').checked = false;

							} else {

								btn.classList.remove('hide');

							}

						});

						input.getAttribute('data-empty');

					} else {

						Array.from(datalist, btn => {

							btn.classList.remove('hide');
							btn.querySelector('input').checked = false;

						});

					}

				});

				// reset === clear

				reset.addEventListener('click', () => {

					Array.from(datalist, btn => {

						btn.classList.remove('hide');
						btn.querySelector('input').checked = false;

					});

					fieldset.classList.add('is-focus');
					reset.classList.add('hide');
					input.value = '';
					input.removeAttribute('value');
					input.focus();
					form.dispatchEvent(new CustomEvent("change"));

				});

			}

			// developer

			if(fieldset.classList.contains('docs-form__developer')) {

				// checkbox

				const checkbox = fieldset.querySelectorAll('.checkbox__input');

				form.addEventListener('change', event => {

					if( event.target.type !== 'checkbox' ) {

						return;

					}

					let value = '';

					if ( event.target.name === 'all' ) {

						value = event.target.parentNode.textContent.trim();

						Array.from(checkbox, el => el.checked = event.target.checked);

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

					reset.classList.toggle('hide', value === '');

				});

				// reset === clear

				reset.addEventListener('click', () => {

					Array.from(checkbox, el => el.checked = false);
					fieldset.classList.add('is-focus');
					reset.classList.add('hide');
					input.value = '';
					input.removeAttribute('value');
					form.dispatchEvent(new CustomEvent("change"));

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

				let current = document.querySelector('.docs-page__tabs-item.is-active');

				current.setAttribute('data-history', location.pathname + location.search);

				current.classList.remove('is-active');

				tabsBtn.classList.add('is-active');

				history.pushState(undefined, '', tabsBtn.getAttribute('data-history'));

				if( tabsBtn.classList.contains('docs-page__tabs-item--standarts') ) {

					activeTabStandarts = true;

					document.querySelector('.docs-page__forms--standarts').classList.remove('hide');
					document.querySelector('.docs-page__forms--analytics').classList.add('hide');

					if(formShort) {

						document.querySelector('.docs-search-result__standarts').classList.remove('hide');
						document.querySelector('.docs-search-result__analytics').classList.add('hide');

					}

				}

				if( tabsBtn.classList.contains('docs-page__tabs-item--analytics') ) {

					activeTabStandarts = false;

					document.querySelector('.docs-page__forms--analytics').classList.remove('hide');
					document.querySelector('.docs-page__forms--standarts').classList.add('hide');

					if(formShort) {

						document.querySelector('.docs-search-result__analytics').classList.remove('hide');
						document.querySelector('.docs-search-result__standarts').classList.add('hide');

					}

				}

			}

			// ajax

			const btnAjax = event.target.closest('.docs-ajax__btn');

			if ( btnAjax ) {

				btnAjax.disabled = true;

				const form = document.querySelector('#' + btnAjax.getAttribute('data-form'));

				form.dispatchEvent(new CustomEvent("ajax"));

			}

		});

		// подгрузка товаров

		if ( searchResultStandartsEmpty ) {

			fetch(searchResult.getAttribute('data-statndarts'))
				.then(response => response.text())
				.then(html => {

					if ( searchResultStandartsEmpty ) {

						const boxResult = document.createElement('div');

						boxResult.innerHTML = html;

						searchResultStandarts.innerHTML = boxResult.querySelector('.docs-search-result__standarts').innerHTML;

					}

				});

		}

		if ( searchResultAnalyticsEmpty ) {

			fetch(searchResult.getAttribute('data-analytics'))
				.then(response => response.text())
				.then(html => {

					if ( searchResultAnalyticsEmpty ) {

						const boxResult = document.createElement('div');

						boxResult.innerHTML = html;

						searchResultAnalytics.innerHTML = boxResult.querySelector('.docs-search-result__analytics').innerHTML;

					}

				});

		}

	}

})(document.querySelectorAll('.docs-form'));