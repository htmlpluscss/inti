(function(btns){

	return;

/*
	if(btns.length == 0 && !navigator.clipboard) {

		return;

	}

	Array.prototype.forEach.call(btns, function(btn){

		btn.addEventListener('click', function(e) {

			e.preventDefault();

			var text = btn.getAttribute('href');
			navigator.clipboard.writeText(text);

			SC.showAlert('copy-buffer');

		});

	});*/

	var clipboard = new ClipboardJS(btns);

	clipboard.on('success', function(e) {

		SC.showAlert('copy-buffer', e.trigger.getAttribute('data-alert'));

	});

	clipboard.on('error', function(e) {

		alert(e.text);
		window.open(e.text);

	});

})(document.querySelectorAll('.copy-buffer'));