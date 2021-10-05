
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

// кнопка назад

( linkBack => {

	const historyBack = event=> {

		event.preventDefault();
		history.back();

	}

	if(document.referrer.indexOf(location.hostname) > 0) {

		linkBack.onclick = historyBack;

	}

})(document.querySelector('.docs-item__back .btn-back'));