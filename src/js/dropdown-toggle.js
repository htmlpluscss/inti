( dropdowns => {

	if(!dropdowns.length) {

		return;

	}

	Array.from(dropdowns, el => {

		if(el.classList.contains('dropdown-toggle--value-in-btn')){

			const btn = el.querySelector('.dropdown-toggle__btn-value'),
				  items = el.querySelectorAll('.dropdown-toggle__value');

			Array.from(items, item => {

				const label = item.parentNode.textContent.trim();

				item.addEventListener("change", () => {

					btn.textContent = label;

					el.classList.remove('dropdown-toggle--open');

				});

			});

		}

		if(el.classList.contains('dropdown-toggle-radio')){

			const current = el.querySelector('.dropdown-toggle-radio__current'),
				  items = el.querySelectorAll('.dropdown-toggle-radio__item');

			Array.from(items, item => {

				const label = item.querySelector('.dropdown-toggle-radio__label'),
					  input = item.querySelector('.dropdown-toggle-radio__input')

				input.addEventListener("change", () => current.textContent = label.textContent);

			});

		}

		const inputFilter = el.querySelector('.dropdown-toggle__input-filter');

		if(inputFilter) {

			const bodyMenu = el.querySelector('.dropdown-toggle__menu'),
				  bodyMenuClone = bodyMenu.cloneNode(true);

			inputFilter.addEventListener('input', () => {

				const value = inputFilter.value.toLowerCase();

				if(value.length > 1) {

					let ul = '';

					Array.from(bodyMenuClone.querySelectorAll('li'), li => {

						const link = li.innerHTML,
							  category = li.textContent.trim().toLowerCase();

						if(category.indexOf(value) !== -1){

							ul += '<li>' + link + '</li>';

						}

					});

					if(ul.length) {

						bodyMenu.innerHTML = ul;

					} else {

						bodyMenu.innerHTML = '<span class="dropdown-toggle__link">' + inputFilter.getAttribute('data-empty') + '</span>';

					}

				} else {

					bodyMenu.innerHTML = bodyMenuClone.innerHTML;

				}

			});

		}

	});

	window.addEventListener("click", event => {

		const isDropdown = event.target.closest('.dropdown-toggle');

		Array.from(dropdowns, el => el.classList.toggle('dropdown-toggle--open', el === isDropdown && isDropdown.classList.contains('dropdown-toggle--open') === false));

	});

})(document.querySelectorAll('.dropdown-toggle'));