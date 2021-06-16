( product => {

	if(!product) {

		return;

	}

	// проверяем hash
	const hash = location.hash;

	if(hash) {

		document.querySelector('.product__tab--' + hash.slice(1)).classList.add('is-current');

	}

	window.addEventListener('hashchange', () => {

		const hash = location.hash.slice(1);

		document.querySelector('.catalog-menu').classList.remove('is-open');

		Array.from(document.querySelectorAll('.catalog-menu__item'), item => {

			item.classList.toggle('is-current', item.querySelector('.catalog-menu__link').href.split('#')[1] === hash);

		});

		document.querySelector('.catalog-menu__current-text').textContent = document.querySelector('.catalog-menu__item.is-current').textContent;

		Array.from(document.querySelectorAll('.product__tab'), tab => {

			tab.classList.toggle('is-current', tab.classList.contains('product__tab--' + hash));

		});

		if(document.querySelector('.product__tab.is-current').getBoundingClientRect().top < 0){

			document.querySelector('.product__tab.is-current').scrollIntoView({ behavior: 'smooth' });

		}

	});

})(document.querySelector('.product'));