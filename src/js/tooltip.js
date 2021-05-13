( tooltips => {

	if(tooltips.length){

		Array.from(tooltips, tooltip => {

			const title = document.createElement('span');

			title.className = 'tooltip-title__inner';

			title.textContent = tooltip.getAttribute('title');
			tooltip.appendChild(title);
			tooltip.removeAttribute('title');

			const rect = title.getBoundingClientRect();
			console.log(rect.left , window.innerWidth , rect.right);

			if(rect.right > window.innerWidth) {

				title.style.left = 'auto';
				title.style.right = (tooltip.clientWidth / -2) + 'px';

			}
			if(rect.left < 0) {

				title.style.right = 'auto';
				title.style.left = (tooltip.clientWidth / -2) + 'px';

			}

		});

	}

})(document.querySelectorAll('.tooltip-title'));