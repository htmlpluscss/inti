( form => {

	if(form) {

		const result = document.querySelector('#ajax-load-scroll-result'),
			  box = document.createElement('div'),
			  pagin = form.elements.pagin;

		let windowScroll = window.pageYOffset;

		if ('IntersectionObserver' in window) {

			const callback = (entries, observer) => {

				Array.from(entries, entry => {

					if(entry.isIntersecting && form.classList.contains('is-loading') === false) {

						form.classList.add('is-loading');

						fetch(form.getAttribute('action'), {
							method: 'POST',
							body: new FormData(form)
						})
						.then(response => response.text())
						.then(html => {

							console.log(html);

							box.innerHTML = html;

							windowScroll = window.pageYOffset;

							Array.from(box.children, item => {

								result.appendChild(item);

							});

							if( windowScroll !== window.pageYOffset ) {

								window.scrollTo(0,windowScroll);

							}

							pagin.value = parseInt(pagin.value) + 1;

							form.classList.remove('is-loading');

						});

					}

				});

			};

			const observer = new IntersectionObserver(callback);

			observer.observe(form);

		}

	}

})(document.querySelector('.ajax-load-scroll'));