( block => {

	if(block && block.querySelectorAll('.certification-change-date-time__input').length) {

		const input = block.querySelectorAll('.certification-change-date-time__input'),
			  date = block.querySelector('.certification-change-date-time__input--date'),
			  time = block.querySelector('.certification-change-date-time__input--time'),
			  dateDefault = date.value,
			  timeDefault = time.value,
			  reset = document.querySelector('.modal__item--certification-date-change');

		Array.from(input, el => el.addEventListener("change", () => {

			block.querySelector('[data-modal="certification-date"]').classList.add('hide');
			block.querySelector('[data-modal="certification-date-change"]').classList.remove('hide');

		}));

		reset.addEventListener("reset", () => {

			date.value = dateDefault;
			time.value = timeDefault;

			date.dispatchEvent(new CustomEvent("change"));
			time.dispatchEvent(new CustomEvent("change"));

			modal.dispatchEvent(new CustomEvent("hide"));

			block.querySelector('[data-modal="certification-date"]').classList.remove('hide');
			block.querySelector('[data-modal="certification-date-change"]').classList.add('hide');

		});

	}

})(document.querySelector('.certification-change-date-time'));