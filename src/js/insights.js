
( page => {

	if(page) {

		const searchResult = document.querySelector('.insights-search-result'),
			  box = page.querySelector('.insights-page__box'),
			  form = page.querySelector('.insights-form'),
			  input = form.querySelector('.insights-form__input');

		// кнопка каталог

		window.addEventListener("click", event => {

			if( event.target.closest('.insights-category-list') === null ){

				if( event.target.closest('.insights-page__btn-catalog') ){

					box.classList.toggle('is-open-category');

				} else {

					box.classList.remove('is-open-category');

				}

			}

			// в каталоге развернуть списки

			if( event.target.closest('.insights-category-list__item') && event.target.closest('.insights-category-list__link') === null ) {

				event.target.closest('.insights-category-list__item').classList.toggle('is-open');

			}

			// убираем фокус

			if( event.target.closest('.insights-form') === null ) {

				box.classList.remove('is-open-filter');

			}

			// фильтр в выдаче

			if ( event.target.closest('.insights-catalog-filter__item') === null ) {

				const openBox = document.querySelector('.insights-catalog-filter__btn.is-open');

				if (openBox) {

					openBox.classList.remove('is-open');

				}

			}

		});

		// input

		input.addEventListener("focus", () => {

			box.classList.add('is-open-filter');

		});

		// change

		form.addEventListener('change', () => {

			console.log(form, 'change');

			const formData = new FormData(form);

			const queryString = new URLSearchParams(formData).toString();

			history.pushState(undefined, '', '?' + queryString);

			searchResult.classList.add('is-loading');

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: formData
			})
			.then(response => response.text())
			.then(html => {

				searchResult.classList.remove('is-loading');

			});

		});

		// input keyup

		input.addEventListener('keyup', event => {

			form.classList.toggle('is-noempty', input.value.length > 0);

			if(input.value.length > 2 && event.key !== 'enter'){

				searchResult.classList.add('is-loading');

				fetch(form.getAttribute('action'), {
					method: 'POST',
					body: new FormData(form)
				})
				.then(response => response.text())
				.then(html => {

					console.log(html);

					searchResult.innerHTML = html;
					searchResult.classList.remove('is-loading');

				});

			}

		});

		// reset

		form.addEventListener('reset', () => {

			form.classList.remove('is-noempty');

			setTimeout( ()=> {

				input.value = '';
				input.focus();

			},100);

		});

		// searchResult

		searchResult.addEventListener('change', event => {

			console.log(event.target);

			const target = event.target,
				  filter = target.closest('.insights-catalog-filter');

			// фильтр в выдаче

			if ( filter ) {

				if( target.type === 'checkbox' ) {

					// Все

					const name = target.getAttribute('name'),
						  btnAll = filter.querySelector('input[name="' + name + '"][value="all"]');

					if ( btnAll ) {

						const list = Array.from(filter.querySelectorAll('input[name="' + name + '"]')).filter(input => input !== btnAll);

						if ( target === btnAll ) {

							Array.from(list, input => input.checked = btnAll.checked);

						} else {

							btnAll.checked = list.every( input => input.checked === true );

						}

					}

				}

			}

			// Рейтинг

			if ( target.classList.contains('insights-catalog-filter__rating') ) {

				form.elements[target.getAttribute('name')].value = target.value;

			}

			// Производитель

			if ( target.classList.contains('insights-catalog-filter__manufacturer') ) {

				Array.from(searchResult.querySelectorAll('.insights-catalog-filter__manufacturer'), input => {

					const hiddenControl = form.querySelector('[name="' + input.getAttribute('name') + '"][value="' + input.value + '"]');

					if ( input.checked ) {

						if ( hiddenControl === null ) {

							const hiddenControl = document.createElement('input');

							hiddenControl.type = 'hidden';
							hiddenControl.value = input.value;
							hiddenControl.name = input.getAttribute('name');

							form.insertAdjacentElement('afterBegin', hiddenControl);

						}

					} else if (hiddenControl) {

						hiddenControl.remove();

					}

				});

			}

			// Продукт

			if ( target.classList.contains('insights-catalog-filter__cat') ) {

				Array.from(searchResult.querySelectorAll('.insights-catalog-filter__cat'), input => {

					form.querySelector('[name="' + input.getAttribute('name') + '"][value="' + input.value + '"]').checked = input.checked;

				});

			}

			// Бизнес

			if ( target.classList.contains('insights-catalog-filter__bisness') ) {

				Array.from(searchResult.querySelectorAll('.insights-catalog-filter__bisness'), input => {

					form.querySelector('[name="' + input.getAttribute('name') + '"][value="' + input.value + '"]').checked = input.checked;

				});

			}

			// Регион

			if ( target.classList.contains('insights-catalog-filter__country') ) {

				Array.from(searchResult.querySelectorAll('.insights-catalog-filter__country'), input => {

//					form.querySelector('[name="' + input.getAttribute('name') + '"][value="' + input.value + '"]').checked = input.checked;

				});

			}

			form.dispatchEvent(new CustomEvent("change"));

		});

		searchResult.addEventListener('click', event => {

			const target = event.target,
				  btnFilter = target.closest('.insights-catalog-filter__btn');

			// фильтр кнопка

			if( btnFilter ) {

				const boxTarget = btnFilter.closest('.insights-catalog-filter__item'),
					  list = searchResult.querySelectorAll('.insights-catalog-filter__item');

				// reset кнопка

				Array.from(list, item => {

					if ( item === boxTarget ) {

						if ( target.closest('.insights-catalog-filter__btn-reset') ) {

							item.querySelector('.insights-catalog-filter__btn').classList.remove('is-checked');
							item.querySelector('.insights-catalog-filter__btn-reset').classList.add('hide');
							item.querySelector('.insights-catalog-filter__btn-count') && item.querySelector('.insights-catalog-filter__btn-count').classList.add('hide');

						} else {

							btnFilter.classList.toggle('is-open');

						}

					} else {

						item.querySelector('.insights-catalog-filter__btn').classList.remove('is-open');

					}

				});

			}

		});

	}

})(document.querySelector('.insights-page'));