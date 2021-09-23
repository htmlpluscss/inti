( form => {

	if(!form) {

		return;

	}

	const input = form.querySelector('.search__input'),
		  result = form.querySelector('.search__result-inner');

	input.addEventListener('keyup', event => {

		if(input.value.length > 2 && event.key !== 'enter'){

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.text())
			.then(html => {

				result.innerHTML = html;

			});

		}

	});

	const setHeight = () => {

		const rect = result.getBoundingClientRect();
		result.style.maxHeight = window.innerHeight - rect.top + 'px';

	};

	PubSub.subscribe('open-search', () => {

		input.focus();

		setHeight();

	});

	PubSub.subscribe('windowWidthResize', () => setHeight());

})(document.querySelector('.search'));