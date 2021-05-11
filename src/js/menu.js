// btn toggle

	document.querySelector('.btn-menu-toggle').addEventListener('click', () => document.body.classList.toggle('menu-show'));

( menuItems => {

	if(!menuItems.length) {

		return;

	}

	Array.from(menuItems, item => {

		const btn = item.querySelector('.menu-main__arrow');

		btn && btn.addEventListener('click', () => item.classList.toggle('menu-main__item--open'));

	});

})(document.querySelectorAll('.menu-main__item'));