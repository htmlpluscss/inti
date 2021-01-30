( selects => {

	if(!selects.length) {

		return;

	}

	const CustomEventChange = new CustomEvent("change", {
		detail: {
			hazcheeseburger: true
		}
	});

	Array.from(selects, select => {

		if(select.querySelector('.select__list')) {

			return;

		}


		const value = document.createElement('div'),
			  arrow = document.createElement('span'),
			  color = select.classList.contains('select--color');

		arrow.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M8.3 10.3a1 1 0 000 1.41l2.93 2.97c.22.21.5.32.78.32s.56-.1.77-.32l2.93-2.96a1.01 1.01 0 00-.32-1.63.99.99 0 00-1.09.21L12 12.62l-2.3-2.33a1 1 0 00-1.4 0z"/></svg>';

		value.className = 'select__value';
		value.innerHTML = '<span class="select__value-inner"></span>';

		value.appendChild(arrow);
		select.appendChild(value);

		const form = select.closest('form'),
			control = select.querySelector('select'),
			option = select.querySelectorAll('option'),
			valueText = select.querySelector('.select__value-inner'),
			list = document.createElement('div');

		list.className = 'select__list';

		let selected = control.querySelector('[value="' + control.value + '"]');

		control.addEventListener("change", () => {

			selected = control.querySelector('[value="' + control.value + '"]');

			valueText.textContent = selected.textContent;

			select.classList.remove('select--default');

			if (color) {

				value.setAttribute('data-color', selected.getAttribute('data-color'));

			}

		});

		if(control.disabled){

			select.classList.add('select--disabled');

		}

		if(control.value === 'none'){

			select.classList.add('select--default');

		}

		valueText.textContent = select.querySelector('option[value="' + control.value + '"]').textContent;

		Array.from(option, el => {

			const o = document.createElement('button');

			o.className = 'button select__list-item';

			o.setAttribute('type', 'button');
			o.setAttribute('value', el.getAttribute('value'));

			o.textContent = el.textContent;

			list.appendChild(o);

		});

		select.addEventListener("click", event => {

			if(event.target.classList.contains('select__list-item')){

				control.value = event.target.getAttribute('value');

				control.dispatchEvent(CustomEventChange);

				if(form) {

					form.dispatchEvent(CustomEventChange);

				}

			}

		});

		select.appendChild(list);

		// color
		if (color) {

			value.setAttribute('data-color', selected.getAttribute('data-color'));

		}

	});

	window.addEventListener("click", event => {

		const isSelect = event.target.closest('.select');

		Array.from(selects, select => {

			select.classList.toggle('select--open', select === isSelect && !isSelect.classList.contains('select--open'));

		});

	});

})(document.querySelectorAll('.select'));