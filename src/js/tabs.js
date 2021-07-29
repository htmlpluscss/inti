( tabs => {

	if(!tabs.length) {

		return;

	}

	const setActive = (btn, item, toggle) => {

		btn.classList.toggle('is-active', toggle);
		item.classList.toggle('is-active', toggle);

	}

	Array.from(tabs, tab => {

		const btns = tab.querySelectorAll('.tabs__btn'),
			  items = tab.querySelectorAll('.tabs__item'),
			  nav = document.createElement('div'),
			  navWrap = document.createElement('div');

		nav.className = 'tabs__nav';
		navWrap.className = 'tabs__nav-wrap';
		navWrap.appendChild(nav);

		if(tab.classList.contains('tabs--nav')) {

			Array.from(btns, btn => {

				btn.setAttribute('role','button');

				nav.appendChild(btn);

			});

			tab.insertBefore(navWrap, items[0]);

			setActive(btns[0], items[0], true);

		}

		Array.from(btns, btn => {

			btn.addEventListener('click', event =>
				Array.from(btns, (_btn, index) =>
					setActive(_btn, items[index], _btn === btn)))

		});

	});

})(document.querySelectorAll('.tabs'));