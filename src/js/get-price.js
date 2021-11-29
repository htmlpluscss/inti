( formGetPrice => {

	if ( formGetPrice === null ) {

		return;

	}

	// клике в результатах поиска по кнопке Узнать стоимость

	const searchResult = document.querySelector('.docs-search-result');

	if ( searchResult ) {

		searchResult.addEventListener('click', event => {

			if( event.target.closest('[data-modal="get-price"]') ) {

				formGetPrice.elements.id.value = event.target.closest('[data-modal="get-price"]').getAttribute('data-id');

			}

		});

	}

	// обработка формы в модалке

	formGetPrice.addEventListener('submit', event => {

		event.preventDefault();

		fetch(formGetPrice.getAttribute('action'), {
			method: 'POST',
			body: new FormData(formGetPrice)
		})
		.then(response => response.json())
		.then(json => {

			console.log(json);

			if( json.id ) {

				// если на странице каталога, то меняем текст в кнопке.

				const btnTarget = document.querySelector(`.docs-catalog-item__request[data-id="${json.id}"]`);

				if ( btnTarget ) {

					btnTarget.textContent = btnTarget.getAttribute('data-done');
					btnTarget.disabled = true;

				}

			}

			// скрываем модалку с формой

			modal.dispatchEvent(new CustomEvent("hide"));

			// выводим уведомление

			notification(...json.notification);

		});

	});

})(document.querySelector('#form-modal-get-price'));