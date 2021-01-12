( tabs => {

	if(!tabs.length) {

		return;

	}

	Array.from(tabs, tab => {

		const btns = tab.querySelectorAll('.tabs__btn'),
			  items = tab.querySelectorAll('.tabs__item');

		Array.from(btns, btn => {

			btn.addEventListener('click', event => {

				event.preventDefault();

				Array.from(btns, (_btn, index) => {

					_btn.classList.toggle('is-active', _btn === btn);
					items[index].classList.toggle('is-active', _btn === btn);

				});

			});

		});

	});

})(document.querySelectorAll('.tabs'));