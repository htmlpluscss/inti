
// lang EN|RU в товаре

( form => {

	if(form === null) {

		return;

	}

	const btns = document.querySelectorAll('[docs-item-lang]');

	form.addEventListener('change', () => {

		const lang = form.querySelector('[name="docs-item-lang"]:checked').value;

		Array.from(btns, el => el.classList.toggle('hide', el.getAttribute('data-docs-item-lang') !== lang));

	});

})(document.querySelector('.docs-item__lang'));