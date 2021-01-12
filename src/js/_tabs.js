SC.tabs = function(elems){

	Array.prototype.forEach.call(elems, function(tab){

		var btn = tab.querySelectorAll('.tabs__btn'),
			item = tab.querySelectorAll('.tabs__item'),
			nav = document.createElement('div'),
			navInner = document.createElement('div');

		Array.prototype.forEach.call(btn, function(el,index){

			if(el.classList.contains('tabs__btn--clone')) {

				var _btn = el.cloneNode(true);

				_btn.removeAttribute('class');

				el.parentNode.insertBefore(_btn, el);

			}

			navInner.appendChild(el);

			el.addEventListener('click',function(){

				Array.prototype.forEach.call(btn, function(e,i){

					if(i == index) {

						e.classList.add('tabs__btn--active');
						item[i].classList.add('tabs__item--active');

					}
					else{

						e.classList.remove('tabs__btn--active');
						item[i].classList.remove('tabs__item--active');

					}

				});

			});

		});

		nav.classList.add('tabs__nav');
		navInner.classList.add('tabs__nav-inner');

		nav.appendChild(navInner);

		tab.insertBefore(nav, item[0]);

	});

};


if(document.querySelectorAll('.tabs').length) {

	SC.tabs(document.querySelectorAll('.tabs'));

}