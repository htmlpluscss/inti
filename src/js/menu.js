// btn toggle

/*( btn => {

	if(btn) {

		let windowScroll = window.pageYOffset;

		btn.addEventListener('click', () => {

			if(document.body.classList.contains('menu-show')) {

				document.body.classList.remove('menu-show');
				window.scrollTo(0,windowScroll);

			} else {

				windowScroll = window.pageYOffset;

				document.body.classList.add('menu-show');
				window.scrollTo(0,0);

			}

		});

	}

})(document.querySelector('.btn-menu-toggle'));
*/
// menu user

( menu => {

	if(menu) {

		window.addEventListener("click", event => {

			if( event.target.closest('.header__user-btn') ){

				menu.classList.toggle('is-open');

			} else if( event.target.closest('.header__user') === null ){

				menu.classList.remove('is-open');

			}

		});

	}

})(document.querySelector('.header__user'));
