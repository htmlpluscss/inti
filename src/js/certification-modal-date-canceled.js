( form => {

	if(!form) {

		return;

	}

	const btn = form.querySelector('.certification-modal-date-canceled__btn-show'),
		  block = form.querySelector('.certification-modal-date-canceled__box-date-time'),
		  input = form.querySelectorAll('.certification-modal-date-canceled__input');

	btn.addEventListener("click", () => {

		btn.classList.add('hide');
		block.classList.remove('hide');

	});

	Array.from(input, el =>
		el.addEventListener("change", () =>
			form.setAttribute('action', form.getAttribute('data-action-change'))));

})(document.querySelector('.certification-modal-date-canceled'));
