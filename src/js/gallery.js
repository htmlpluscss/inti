( img => {

	if(img) {

		const big = img.querySelectorAll('.swiper-gallery-preview__big-item');

		img.addEventListener('click', event => {

			if(event.target.closest('.swiper-gallery-preview__link')) {

				event.preventDefault();

				if(!event.target.closest('.swiper-container-style')){

					const item = event.target.closest('.swiper-gallery-preview__item');

					Array.from(img.querySelectorAll('.swiper-gallery-preview__item'), (el,index) => {

						el.classList.toggle('is-current', item === el);
						big[index].classList.toggle('hide', item !== el);

					});

				}

			}

		});

	}

})(document.querySelector('.swiper-gallery-preview'));