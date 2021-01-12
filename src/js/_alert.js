(function(items){

	if(!items.length) {

		return;

	}

	SC.showAlert = function (selector, text) {

		Array.prototype.forEach.call(items, function(el){

			if(el.classList.contains('alert__item--' + selector)){

				var _show = el,
					autoClose = el.getAttribute('data-auto-close');

				if(text){

					_show.querySelector('.alert__text').textContent = text;

				}

				_show.classList.add('is-show');

				if(autoClose) {

					setTimeout(function(){

						_show.classList.remove('is-show');

					}, autoClose * 1000);

				}

			}

		});

	};

	var btnClose = document.querySelectorAll('.alert__close');

	Array.prototype.forEach.call(btnClose, function(el){

		el.addEventListener('click', function() {

			el.closest('.alert__item').classList.remove('is-show');

		});

	});

})(document.querySelectorAll('.alert__item'));