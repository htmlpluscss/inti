( items => {

	if(!items.length) {

		return;

	}

	const handler = (el, clone = el.cloneNode(true)) => {

		const btn = el.querySelector('.file-input__btn'),
			  input = el.querySelector('input[type="file"]');

		let group = el.closest('.file-input-group');

		input.addEventListener("change", event => {

			btn.textContent = input.value;
			btn.classList.add('btn--light');
			btn.classList.remove('btn--silver');

			if(group) {

				const _clone = clone.cloneNode(true);

				group.appendChild(_clone);

				_clone.querySelector('input[type="file"]').setAttribute('name', _clone.querySelector('input[type="file"]').getAttribute('name') + '-' + group.querySelectorAll('.file-input').length);

				handler(_clone, clone);

				group = null;

			}

		});

	};

	Array.from(items, el => handler(el));

})(document.querySelectorAll('.file-input'));