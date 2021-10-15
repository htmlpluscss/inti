( notification => {

	if(!notification) {

		return;

	}

	const box = notification.querySelector('.center'),
		  template = document.querySelector('#notification-template').innerHTML;

	window.notification = (head, text, timer = 3.3) => {

		box.insertAdjacentHTML('beforeend', Mustache.render(template, { head, text }));

		const item = box.querySelector('.is-new');

		setTimeout( () => {

			item.classList.remove('is-new');
			item.style.height = item.clientHeight + 'px';

		}, 100);

		item.addEventListener(window.cssAnimation('transition'), () => {

			if( item.classList.contains('is-hide') ){

				item.remove();

			}

		});

		item.addEventListener('click', () => {

			item.classList.add('is-hide');

		});

		setTimeout( ()=> {

			item.classList.add('is-hide');

		}, 1000 * timer);

	}

})(document.querySelector('.notification'));