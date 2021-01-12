( modal => {

	if(!modal) {

		return;

	}

	const items = modal.querySelectorAll('.modal__item'),
		  btns = document.querySelectorAll('[data-modal]'),
		  wrapper = document.querySelector('.wrapper');

	let activeModal = null,
		windowScroll = window.pageYOffset;

	modal.addEventListener('click', event => {

		if(event.target.classList.contains('modal') || event.target.closest('.modal__close')){

			modal.classList.add('visuallyhidden');

			document.body.classList.remove('modal-show');
			wrapper.style.top = 0;
			window.scrollTo(0,windowScroll);

			activeModal = false;

		}

	});

	Array.from(btns, btn => btn.addEventListener('click', () => {

		if(!activeModal){

			windowScroll = window.pageYOffset;

		}

		activeModal = modal.querySelector('.modal__item--' + btn.getAttribute('data-modal'));

		Array.from(items, el => el.classList.toggle('visuallyhidden', el !== activeModal));

		wrapper.style.top = -windowScroll + 'px';

		modal.classList.remove('visuallyhidden');

		document.body.classList.add('modal-show');
		window.scrollTo(0,0);

		activeModal.focus();

	}));

})(document.querySelector('.modal'));