( tooltips => {

	if(tooltips.length){

		Array.from(tooltips, tooltip => {

			const title = document.createElement('span');

			title.className = 'tooltip-title__inner';

			title.textContent = tooltip.getAttribute('title');
			tooltip.appendChild(title);
			tooltip.removeAttribute('title');

		});

	}

})(document.querySelectorAll('.tooltip-title'));
/*
			const t = mutationRecords[0].target,
				  rect = t.getBoundingClientRect();

			console.log(rect.left > window.innerWidth - rect.right);

			if(t.open) {

				const inner = t.querySelector('.ask__inner');

				if(rect.left > window.innerWidth - rect.right) {

					// правее

					inner.style.left = 'auto';
					inner.style.right = 0;
					inner.style.width = rect.left + 'px';

				}
				else {

					// левее

					inner.style.right = 'auto';
					inner.style.left = 0;
					inner.style.width = window.innerWidth - rect.right + 'px';

				}

			}

*/