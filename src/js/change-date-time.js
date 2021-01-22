( form => {

	if(!form) {

		return;

	}

	const input = form.querySelectorAll('.change-date-time__input');

	Array.from(input, el => el.addEventListener("change", () => {

		form.querySelector('[data-modal="departure-date"]').classList.add('hide');
		form.querySelector('[data-modal="departure-date-change"]').classList.remove('hide');

	}));

})(document.querySelector('.change-date-time'));