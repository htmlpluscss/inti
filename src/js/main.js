( page => {

	if(page) {

		const content = page.querySelector('.main-page__content');

		if ('IntersectionObserver' in window) {

			const callback = (entries, observer) => {

				Array.from(entries, entry => {

					console.log(entry.isIntersecting);

				});

			};

			const observer = new IntersectionObserver(callback, {
				threshold: 1
			});

			observer.observe(content);

		}

	}

})(document.querySelector('.main-page'));