// btn toggle

	document.querySelector('.btn-menu-toggle').addEventListener('click', () => document.body.classList.toggle('menu-show'));

	document.querySelector('.header__menu-main').addEventListener('click', event => {

		if(event.target.closest('.menu-main__arrow')) {

			event.preventDefault();

			event.target.closest('.menu-main__item').classList.toggle('menu-main__item--open');

		}

	});