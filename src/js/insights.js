
( page => {

	if(page) {

		let formShort = document.querySelector('.insights-page--short');

		const searchResult = document.querySelector('.insights-search-result'),
			  box = page.querySelector('.insights-page__box'),
			  form = page.querySelector('.insights-form'),
			  input = form.querySelector('.insights-form__input'),
			  country = form.querySelectorAll('.insights-form-filter-checkbox-group');

		const requestForm = ()=> {

			const formData = new FormData(form);

			if ( form.elements.rating.value === '' ) {

				formData.delete('rating');

			}

			if ( form.elements.keywords.value.length === 0 ) {

				formData.delete('keywords');

			}

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

				searchResult.innerHTML = html;

				if(formShort === null) {

					formShort = true;

					document.querySelector('.insights-page').classList.add('insights-page--short');
					document.querySelector('.insights-page__description').remove();
					document.querySelector('.insights-category').remove();
					document.querySelector('.insights-info').remove();

				}

			});

		};

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

		form.addEventListener('change', () => requestForm());

		// input keyup

		input.addEventListener('keyup', event => {

			form.classList.toggle('is-noempty', input.value.length > 0);

			if(input.value.length > 2 && event.key !== 'enter'){

				requestForm();

			}

		});

		// reset

		form.addEventListener('reset', () => {

			form.classList.remove('is-noempty');

			if ( input.value.length === 0 ) {

				form.classList.add('is-default');
				box.classList.remove('is-open-filter');

			} else {

				input.value = '';
				input.removeAttribute('value');

				Array.from(form.querySelector('.checkbox-btn__input'), checkbox => {

					checkbox.checked = false;
					checkbox.removeAttribute('checked');

				});

				requestForm();

			}

		});

		// группы стран по континентам

		Array.from(country, el => {

			const group = el.querySelectorAll('.insights-form-filter-checkbox-group__item'),
				  checkbox = el.querySelector('.insights-form-filter-checkbox-group__trigger');

			checkbox.addEventListener('change', event => {

				event.stopPropagation();

				Array.from(group, el => el.checked = checkbox.checked);

				form.dispatchEvent(new CustomEvent("change"));

			});

		});

		// searchResult

		const searchResultChangeFilter = ( target, filter = document.querySelector('.insights-catalog-filter') ) => {

			let name = target.name,
				nameSelector = name.slice(0,-2);

			// Рейтинг

			if ( target.classList.contains('insights-catalog-filter__rating') ) {

				form.elements[target.name].value = target.checked ? target.value : "";

			}

			// checkbox

			if ( target.type === 'checkbox' ) {

				// Все

				const btnAll = filter.querySelector('[name="' + name + '"][value="all"]'),
					  listNotBtnAll = Array.from(filter.querySelectorAll('[name="' + name + '"]')).filter(input => input !== btnAll);

				if ( btnAll ) {

					if ( btnAll === target ) {

						Array.from(listNotBtnAll, input => input.checked = btnAll.checked);

					} else {

						btnAll.checked = listNotBtnAll.every( input => input.checked === true );

					}

				}

				// Продукт / Бизнес / Регион / Производитель

				if (
					target.classList.contains('insights-catalog-filter__cat') ||
					target.classList.contains('insights-catalog-filter__bisness') ||
					target.classList.contains('insights-catalog-filter__country') ||
					target.classList.contains('insights-catalog-filter__manufacturer')
				) {

					const hiddenControlValueAll = form.querySelector('[name="' + name + '"][value="all"]');

					if ( btnAll.checked ) {

						// сняли check со всех

						Array.from(form.querySelectorAll('[name="' + name + '"]'), input => input.checked = false);

						// добавиль скрытый

						if ( hiddenControlValueAll === null ) {

							const hiddenControlValueAll = document.createElement('input');

							hiddenControlValueAll.name = name;
							hiddenControlValueAll.value = 'all';
							hiddenControlValueAll.type = 'hidden';

							form.insertAdjacentElement('afterBegin', hiddenControlValueAll);

						}

					} else {

						if (hiddenControlValueAll) {

							hiddenControlValueAll.remove();

						}

						Array.from(listNotBtnAll, input => {

							form.querySelector('[name="' + input.name + '"][value="' + input.value + '"]').checked = input.checked;

						});

					}

				}

			}

			form.dispatchEvent(new CustomEvent("change"));

		};

		searchResult.addEventListener('change', event => {

			const target = event.target,
				  filter = target.closest('.insights-catalog-filter');

			// фильтр в выдаче

			if ( filter ) {

				searchResultChangeFilter(target, filter);

			}

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

							Array.from(item.querySelectorAll('input[name][value]'), input => input.checked = false);

							searchResultChangeFilter(item.querySelector('input[name]'));

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