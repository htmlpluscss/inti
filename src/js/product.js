( product => {

	if(!product) {

		return;

	}

	const linkBack = document.querySelector('.head-back .link'),
		  tabs = document.querySelectorAll('.product__tab');

	const initial = tab=> {

		document.querySelector('.product__body').classList.toggle('is-initial', tab === 'main');
		document.querySelector('.product__body').classList.toggle('is-lock', tab === 'lock');

	}

	const historyBack = event=> {

		event.preventDefault();

		history.back();

	}

	if(document.referrer.indexOf(location.hostname) > 0) {

		linkBack.onclick = historyBack;

	}

	window.addEventListener('hashchange', () => {

		const hash = location.hash,
			  modTab = hash === '' ? 'main' : hash.slice(1),
			  next = document.querySelector('.product__tab--' + modTab);

		Array.from(tabs, tab => tab.classList.toggle('visuallyhidden', next !== tab));

		if(linkBack.onclick === null) {

			linkBack.onclick = historyBack;

		}

		if(document.querySelector('video')){

			Array.from(document.querySelectorAll('video'), video => video.pause());

		}

		initial(modTab);

	});

})(document.querySelector('.product'));