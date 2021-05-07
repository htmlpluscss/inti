( elems => {

	if(!elems.length) {

		return;

	}

	Array.from(elems, el => {

		const svg = el.querySelector('.circle-progress__svg'),
			  text = el.querySelector('.circle-progress__value'),
			  value = parseInt(text.textContent);

		// анимация прогресса
		const circle = svg.querySelector('circle'),
			  pi2r = parseInt(circle.getAttribute('r')) * 2 * Math.PI;

		let count = 0;

		if(value > 0) {

			el.classList.add('circle-progress--init');

			const idTimer = setInterval( () => {

				if(count === value) {

					clearInterval(idTimer);

				}

				text.textContent = count++;

				circle.setAttribute('stroke-dasharray', pi2r / 100 * count + ' ' + pi2r);

			}, 1000 / value);

		}

	});

})(document.querySelectorAll('.circle-progress'));