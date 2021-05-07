( elems => {

	if(!elems.length) {

		return;

	}

	Array.from(elems, el => {

		const bar = el.querySelector('.line-progress__bar'),
			  text = el.querySelector('.line-progress__value'),
			  value = parseInt(text.textContent);

		// анимация прогресса
		let count = 0;

		if(value > 0) {

			el.classList.add('line-progress--init');

			const idTimer = setInterval( () => {

				if(count === value) {

					clearInterval(idTimer);

				}

				bar.style.width = count + '%';

				text.textContent = count++;

			}, 1000 / value);

		}

	});

})(document.querySelectorAll('.line-progress'));