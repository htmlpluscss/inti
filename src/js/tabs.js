( tabs => {

	if(!tabs.length) {

		return;

	}

	Array.from(tabs, tab => {

		tab.addEventListener('click', event => {

			if(event.target.closest('.tabs__btn')) {

				event.preventDefault();

				const btn = event.target.closest('.tabs__btn'),
					  btns = tab.querySelectorAll('.tabs__btn'),
					  items = tab.querySelectorAll('.tabs__item');

				Array.from(btns, (_btn, index) => {

					_btn.classList.toggle('is-active', _btn === btn);
					items[index].classList.toggle('is-active', _btn === btn);

				});

			}

		});
/*
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

*/	});

})(document.querySelectorAll('.tabs'));