(function(elems){

	if(elems.length){

		Array.prototype.forEach.call(elems, function(elem){

			var text = elem.querySelector('.date-calendar__text'),
				input = elem.querySelector('.date-calendar__input');

			input.addEventListener('change',function(){

				var date = new Date(input.value);
				text.textContent = ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear();

			});

		});

	}

})(document.querySelectorAll('.date-calendar'));