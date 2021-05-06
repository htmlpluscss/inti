( img => {

	if(img) {

		const big = img.querySelectorAll('.product__images-big-item');

		img.addEventListener('click', event => {

			if(event.target.closest('.product-vertical__link')) {

				event.preventDefault();

				if(!event.target.closest('.swiper-container-style')){

					const item = event.target.closest('.product-vertical__item');

					Array.from(img.querySelectorAll('.product-vertical__item'), (el,index) => {

						el.classList.toggle('is-current', item === el);
						big[index].classList.toggle('hide', item !== el);

					});

				}

			}

		});

	}

})(document.querySelector('.product__images'));