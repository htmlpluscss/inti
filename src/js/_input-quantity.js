(function(quantity){

	if(quantity.length) {

		Array.prototype.forEach.call(quantity, function(el){

			var up = el.querySelector('.input-quantity__plus'),
				down = el.querySelector('.input-quantity__minus'),
				text = el.querySelector('.input-quantity__text'),
				input = el.querySelector('.input-quantity__input'),
				max = parseInt(input.getAttribute('data-max')),
				min = parseInt(input.getAttribute('data-min')),
				value = parseInt(input.value);

			up.addEventListener('click',function(){

				value++;

				if(!!max && value > max) {

					value = max;

				}

				input.value = value;
				text.textContent = value;

			});

			down.addEventListener('click',function(){

				value--;

				if(!!min) {

					if(value < min) {

						value = min;

					}

				}
				else if(value < 1) {

					value = 1;

				}

				input.value = value;
				text.textContent = value;

			});

			input.addEventListener('focus',function(){

				setTimeout(function(){

					input.setSelectionRange(0,9);

				},100);

			});

			input.addEventListener('keyup',function(e){

				if (e.keyCode == 13) {

					this.blur();

				}

				var val = parseInt(this.value);

				if (!isNaN(val)) {

					value = val;

					if(!!max && value > max) {

						value = max;

					}
					if(!!min) {

						if(value < min) {

							value = min;

						}

					}
					else if(value < 1) {

						value = 1;

					}

					this.value = value;
					text.textContent = value;

				}
				else {

					text.textContent = this.value;

				}

			});

		});

	}

})(document.querySelectorAll('.input-quantity'));