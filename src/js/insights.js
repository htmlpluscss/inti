
( page => {

	if(page) {

		const box = page.querySelector('.insights-page__box'),
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

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: formData
			})
			.then(response => response.text())
			.then(html => {

//				searchResult.innerHTML = html;
//				searchResult.classList.remove('is-loading','is-loading-add');

			});

		});

	}

})(document.querySelector('.insights-page'));