// btn toggle

	document.querySelector('.btn-menu-toggle').addEventListener('click', () => document.body.classList.toggle('menu-show'));

( menuPage => {

	if(menuPage) {

		const menuPageList = menuPage.querySelector('.menu-page__list'),
			  menuPageTop = document.querySelector('.menu-page-top'),
			  header = document.querySelector('.header');

		const menuPageSet = () => {

			let top = header.clientHeight;

			if(menuPageTop) {

				top += menuPageTop.clientHeight;

			}

			menuPage.style.top = top + 'px';
			menuPage.style.width = menuPageList.clientWidth + 'px';

		}

		menuPageSet();

		PubSub.subscribe('windowWidthResize', () => {

			menuPageSet();

		});

	}

})(document.querySelector('.menu-page'));