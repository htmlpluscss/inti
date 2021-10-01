( notification => {

	if(!notification) {

		return;

	}

	let resizeTimeout = null;

	notification.addEventListener('click', () => {

		clearTimeout(resizeTimeout);
		notification.classList.remove('is-show');

	});

	window.notification = (head, text, timer = 3.3) => {

		notification.querySelector('.notification__head').innerHTML = head ? head : '';
		notification.querySelector('.notification__text').innerHTML = text ? text : '';

		notification.classList.add('is-show');

		resizeTimeout = setTimeout( ()=> {

			notification.classList.remove('is-show');

		}, 1000 * timer);

	}

})(document.querySelector('.notification'));