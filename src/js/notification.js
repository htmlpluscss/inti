( notification => {

	if(!notification) {

		return;

	}

	const template = document.querySelector('#notification-template').innerHTML;

	window.notification = (head, text, timer = 10) => {

		notification.insertAdjacentHTML('beforeend', Mustache.render(template, { head, text }));

		const item = notification.querySelector('.is-new');

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

	// top vieport

	const setTop = () => {

		let h = document.querySelector('.header').getBoundingClientRect().bottom - window.pageYOffset;

		document.documentElement.style.setProperty('--notificationTop', h < 10 ? 10 : h + 'px');

	}

	window.addEventListener("scroll", () => window.requestAnimationFrame( () => setTop()));

	setTop();

})(document.querySelector('.notification'));