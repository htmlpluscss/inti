( product => {

	if(!product) {

		return;

	}

	const linkBack = document.querySelector('.head-back .link'),
		  tabs = document.querySelectorAll('.product__tab');

	const historyBack = event=> {

		event.preventDefault();

		history.back();

	}

	if(document.referrer.indexOf(location.hostname) > 0) {

		linkBack.onclick = historyBack;

	}

	window.addEventListener('hashchange', () => {

		const hash = location.hash,
			  next = document.querySelector('.product__tab--' + (hash === '' ? 'main' : hash.slice(1)));

		Array.from(tabs, tab => tab.classList.toggle('hide', next !== tab));

		if(linkBack.onclick === null) {

			linkBack.onclick = historyBack;

		}

	});

})(document.querySelector('.product'));