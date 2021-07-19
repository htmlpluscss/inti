( items => {

	if(!items.length) {

		return;

	}

	console.log(priceList);

	Array.from(items, form => {

		const btn = form.querySelector('.docs-standart-form__submit');

		form.addEventListener('change', () => {

			const buyer = form.elements.buyer.value,
				  license = form.elements.license.value,
				  price = priceList.buyer[buyer].license[license];

			form.querySelector('.docs-item__price-number').textContent = INTI.sepNumber(price);

		});

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

				document.querySelector('#name-product-add-in-cart').textContent = result.addProduct;

				const eventModalShow = new CustomEvent("modalShow", {
					detail: {
						selector: "cart"
					}
				});

				window.modal.dispatchEvent(eventModalShow);

				if(result.countCart){

					document.querySelector('.header__cart a').setAttribute('data-count', result.countCart);

				}

			});

		});

	});

})(document.querySelectorAll('.docs-standart-form'));