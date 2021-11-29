
// lang EN|RU в товаре

( page => {

	if( page === null) {

		return;

	}

	// form lang

	const form = document.querySelector('.docs-item__lang');

	// кнопки скачать

	const btns = document.querySelectorAll('[data-docs-item-lang]');

	if( form && btns.length ) {

		form.addEventListener('change', () => {

			const lang = form.querySelector('[name="docs-item-lang"]:checked').value;

			Array.from(btns, el => el.classList.toggle('hide', el.getAttribute('data-docs-item-lang') !== lang));

		});

	}

	// форма запроса цены в модалке (НЕ авторизирован)

	const formModalGetPrice = document.querySelector('#form-modal-get-price');

	if( form && formModalGetPrice ) {

		form.addEventListener('change', () => {

			const lang = form.querySelector('[name="docs-item-lang"]:checked').value;

			formModalGetPrice.elements.lang.value = lang;

		});

	}

	// кнопка узнать, прокинуть id

	page.addEventListener('click', event => {

		if ( event.target.closest('[data-modal="get-price"]') ) {

			const id = event.target.closest('[data-modal="get-price"]').getAttribute('data-id');

			if ( formModalGetPrice && id ) {

				formModalGetPrice.elements.id.value = id;

			}

		}

	});

	// форма запроса цены на странице (авторизован)

	const formGetPrice = document.querySelector('.form-get-price');

	if(formGetPrice) {

		form.addEventListener('change', () => {

			const lang = form.querySelector('[name="docs-item-lang"]:checked').value;

			formGetPrice.elements.lang.value = lang;

		});

	}

})(document.querySelector('.docs-item'));