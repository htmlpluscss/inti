(function(imgBlock){

	if(imgBlock) {

		var bigImg = document.querySelector('.catalog-item__photo'),
			indexActive = 0;

		imgBlock.addEventListener('click', function(e){

			if(e.target.closest('.swiper-button-prev')) {

				console.log('swiper-button-prev')

			}
			if(e.target.closest('.swiper-button-next')) {

				console.log('swiper-button-next')

			}
			if(e.target.closest('.catalog-item__swiper-item')) {

				console.log('catalog-item__swiper-item')

			}

		});

		imgBlock.addEventListener('mousemove', function(e){

			var swiperItem = e.target.closest('.catalog-item__swiper-item');

			if(swiperItem && !swiperItem.classList.contains('is-active')) {

				Array.prototype.forEach.call(imgBlock.querySelectorAll('.catalog-item__swiper-item'), function(el,index){

					if(el === swiperItem) {

						indexActive = index;
						el.classList.add('is-active');

					}
					else {

						el.classList.remove('is-active');

					}

				});

				Array.prototype.forEach.call(bigImg.children, function(el,index){

					el.classList.toggle('visuallyhidden', index !== indexActive);

				});

			}

		});

	}

})(document.querySelector('.catalog-item__swiper-box'));