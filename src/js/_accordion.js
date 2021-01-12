if(document.querySelectorAll('.accordion').length) {

	Array.prototype.forEach.call(document.querySelectorAll('.accordion'), function(elem){

		var items = elem.querySelectorAll('.accordion__item'),
			animateOn = false,
			active = elem.querySelector('.accordion__item--open');

		Array.prototype.forEach.call(items, function(item){

			var btn = item.querySelector('.accordion__btn'),
				body = item.querySelector('.accordion__body');

			btn.addEventListener('click', function(){

				animateOn = true;

				if(item === active){

					item.classList.remove('accordion__item--open');
					active = null;

				}
				else {

					active = item;

					Array.prototype.forEach.call(items, function(el){

						el.classList.toggle('accordion__item--open', el === active);

					});

				}

			});

			body.addEventListener(SC.cssAnimation('transition'),function(){

				if(animateOn && !SC.isInViewport(active.querySelector('.accordion__head'))){

					active.scrollIntoView({ behavior: 'smooth' });

				}

				animateOn = false;

			});

		});

	});

}