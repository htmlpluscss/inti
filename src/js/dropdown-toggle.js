( dropdowns => {

	if(!dropdowns.length) {

		return;

	}

	Array.from(dropdowns, el => {

		if(el.classList.contains('dropdown-toggle-radio')){

			const current = el.querySelector('.dropdown-toggle-radio__current'),
				  items = el.querySelectorAll('.dropdown-toggle-radio__item');

			Array.from(items, item => {

				const label = item.querySelector('.dropdown-toggle-radio__label'),
					  input = item.querySelector('.dropdown-toggle-radio__input')

				input.addEventListener("change", () => current.textContent = label.textContent);

			});

		}

	});

	window.addEventListener("click", event => {

		const isDropdown = event.target.closest('.dropdown-toggle');

		Array.from(dropdowns, el => el.classList.toggle('dropdown-toggle--open', el === isDropdown && isDropdown.classList.contains('dropdown-toggle--open') === false));

	});

})(document.querySelectorAll('.dropdown-toggle'));