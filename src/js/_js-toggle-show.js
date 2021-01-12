(function(btns){

	if(btns.length == 0) {

		return;

	}

	// create and dispatch the event
	var event = new CustomEvent("change");

	Array.prototype.forEach.call(btns, function(btn){

		btn.addEventListener('change', function() {

			var selector = btn.getAttribute('data-show'),
				show = document.querySelectorAll(selector);

			if(show.length) {

				Array.prototype.forEach.call(show, function(el){

					el.classList.toggle('hide', !btn.checked);

				});

			}

		});

		btn.dispatchEvent(event);

	});

})(document.querySelectorAll('.checkbox-toggle-show'));