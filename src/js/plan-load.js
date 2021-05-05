( elems => {

	if(!elems.length) {

		return;

	}

	Array.from(elems, el => {

		const svg = el.querySelector('.plan-load__progress svg'),
			  value = parseInt(el.querySelector('.plan-load__value').textContent),
			  result = document.createElement('span');

		result.className = 'plan-load__result';
		result.textContent = value;

		el.querySelector('.plan-load__progress').appendChild(result);

		// фнимация прогресса
		const circle = svg.querySelector('circle'),
			  pi2r = parseInt(circle.getAttribute('r')) * 2 * Math.PI;

		let count = 0;

		if(value > 0) {

			const idTimer = setInterval( () => {

				if(count === value) {

					clearInterval(idTimer);

				}

				result.textContent = count++;

				circle.setAttribute('stroke-dasharray', pi2r / 100 * count + ' ' + pi2r);

			}, 1000 / value);

		}

	});

})(document.querySelectorAll('.plan-load'));