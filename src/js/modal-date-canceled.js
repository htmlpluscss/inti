( form => {

	if(!form) {

		return;

	}

	const btn = form.querySelector('.modal-date-canceled__btn-show'),
		  block = form.querySelector('.modal-date-canceled__box-date-time'),
		  input = form.querySelectorAll('.modal-date-canceled__input');

	btn.addEventListener("click", () =>
		block.classList.remove('hide'));

	Array.from(input, el =>
		el.addEventListener("change", () =>
			form.setAttribute('action', form.getAttribute('data-action-change'))));

})(document.querySelector('.modal-date-canceled'));