
// lang EN|RU в товаре

( form => {

	if(form === null) {

		return;

	}

	// кнопки скачать

	const btns = document.querySelectorAll('[data-docs-item-lang]');

	if(btns.length) {

		form.addEventListener('change', () => {

			const lang = form.querySelector('[name="docs-item-lang"]:checked').value;

			Array.from(btns, el => el.classList.toggle('hide', el.getAttribute('data-docs-item-lang') !== lang));

		});

	}

	// форма запроса цены в модалке (НЕ авторизирован)

	const formModalGetPrice = document.querySelector('#form-modal-get-price');

	if(formModalGetPrice) {

		form.addEventListener('change', () => {

			const lang = form.querySelector('[name="docs-item-lang"]:checked').value;

			formModalGetPrice.elements.lang.value = lang;

		});

	}

	// форма запроса цены на странице (авторизован)

	const formGetPrice = document.querySelector('.form-get-price');

	if(formGetPrice) {

		form.addEventListener('change', () => {

			const lang = form.querySelector('[name="docs-item-lang"]:checked').value;

			formGetPrice.elements.lang.value = lang;

		});

	}

})(document.querySelector('.docs-item__lang'));