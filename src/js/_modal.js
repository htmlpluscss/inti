
(function(modal){

	if(!modal) {

		return;

	}

	var items = modal.querySelectorAll('.modal__item'),
		bg = modal.querySelector('.modal__bg'),
		btns = document.querySelectorAll('[data-modal]'),
		wrapper = document.querySelector('.wrapper'),
		windowScroll = 0;

	modal.addEventListener('click', function (e) {

		if(e.target.classList.contains('modal') || e.target.closest('.modal__close') || e.target.classList.contains('modal__box')){

			SC.hideModal();

		}

	});

	SC.hideModal = function() {

		modal.classList.add('visuallyhidden');

		document.body.classList.remove('modal-show');
		wrapper.style.top = 0;
		window.scrollTo(0,windowScroll);

		SC.activeModal = false;

	};

	SC.modalShow = function (selector, text) {

		modal.classList.toggle('modal--fullscreen', selector === 'input-file');

		if(!SC.activeModal){

			windowScroll = window.pageYOffset;

			wrapper.style.top = -windowScroll + 'px';

		}

		SC.activeModal = modal.querySelector('.modal__item--' + selector);

		Array.prototype.forEach.call(items, function(el){

			el.classList.toggle('visuallyhidden', el !== SC.activeModal);

		});

		bg.classList.toggle('hide', !SC.activeModal.classList.contains('modal__item--bg'));

		modal.classList.remove('visuallyhidden');

		document.body.classList.remove('menu-show');
		document.body.classList.add('modal-show');
		window.scrollTo(0,0);

		SC.activeModal.focus();

		if(selector == 'catalog-item') {

			// вызываем событие для инициализации swiper
			PubSub.publish('catalogItemInitSwiper');

		}

	};

	Array.prototype.forEach.call(btns, function(el){

		el.addEventListener('click', function(e) {

			e.preventDefault();

			SC.modalShow(this.getAttribute('data-modal'));

		});

	});

})(document.querySelector('.modal'));