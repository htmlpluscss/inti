SC.selects = function(selects){

	Array.prototype.forEach.call(selects, function(select){

		if(select.querySelector('.select__list')) {

			return;

		}

		var control = select.querySelector('select'),
			option = select.querySelectorAll('option'),
			selected = select.querySelector('option[selected]'),
			valueText = select.querySelector('.select__value-inner'),
			list = document.createElement('div');

		list.classList.add('select__list');

		control.addEventListener("change", function(){

			valueText.textContent = control.querySelector('[value="' + control.value + '"]').textContent;

			select.classList.remove('select--default');

		});

		if(selected){

			valueText.textContent = selected.textContent;

		}
		else {

			select.classList.add('select--default');

		}

		Array.prototype.forEach.call(option, function(el){

			var o = document.createElement('button');

			o.className = 'button select__list-item';

			o.setAttribute('type', 'button');
			o.setAttribute('value', el.getAttribute('value'));

			o.textContent = el.textContent;

			list.appendChild(o);

		});

		var event = new CustomEvent("change", {
			detail: {
				hazcheeseburger: true
			}
		});

		select.addEventListener("click", function(e){

			if(e.target.classList.contains('select__list-item')){

				control.value = e.target.getAttribute('value');

				control.dispatchEvent(event);

			}

		});

		select.appendChild(list);

	});

};


(function(){

	var selects = document.querySelectorAll('.select');

	SC.selects(selects);

	window.addEventListener("click", function(e){

		var _this = e.target.closest('.select');

		Array.prototype.forEach.call(selects, function(select){

			select.classList.toggle('select--open', select === _this && !_this.classList.contains('select--open'));

		});

	});

})();