(function(btn){

	if(btn) {

		var filter = document.querySelector('.filter-hidden-head');

		btn.addEventListener('click', function () {

			if(btn.classList.contains('is-open')){

				btn.classList.remove('is-open');
				filter.classList.add('is-hidden');

			}
			else {

				btn.classList.add('is-open');
				filter.classList.remove('is-hidden');

			}

		});

	}

})(document.querySelector('.form-head-right__toggle-filter'));