( formGetPrice => {

	if ( formGetPrice === null ) {

		return;

	}

	// клике в результатах поиска по кнопке Узнать стоимость

	const searchResult = document.querySelector('.docs-search-result');

	if ( searchResult ) {

		searchResult.addEventListener('click', event => {

			if( event.target.closest('.docs-catalog-item__request[data-modal="get-price"]') ) {

				formGetPrice.elements.id.value = event.target.closest('.docs-catalog-item__request[data-modal="get-price"]').getAttribute('data-id');

			}

		});

	}

	// обработка формы в модалке

	formGetPrice.addEventListener('submit', event => {

		event.preventDefault();

		fetch(form.getAttribute('action'), {
			method: 'POST',
			body: new FormData(form)
		})
		.then(response => response.json())
		.then(json => {

			console.log(json);

			if( json.id ) {

				const btnTarget = document.querySelector(`.docs-catalog-item__request[data-id="${json.id}"]`);

				btnTarget.textContent = btnTarget.getAttribute('data-done');
				btnTarget.disabled = true;

			}

			notification(json.notificationTitle,json.notificationText,json.notificationTimer);

		});

	});

})(document.querySelector('#form-get-price'));