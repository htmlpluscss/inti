( elems => {

	if(!elems.length) {

		return;

	}

	Array.from(elems, el => {

		let maskInput;

		const placeholder = el.getAttribute('placeholder') ? el.getAttribute('placeholder') : null;

		if(el.classList.contains('inputmask--phone')) {

			maskInput = new Inputmask({
				mask: "+7 999 999 99 99",
				showMaskOnHover: false,
				placeholder: placeholder ? placeholder : "+7 ___ ___ __ __"
			});

		}
		else if(el.classList.contains('inputmask--date')) {

			maskInput = new Inputmask({
				alias: "datetime",
				showMaskOnHover: false,
				inputFormat: "dd/mm/yyyy",
				placeholder: placeholder ? placeholder : "__/__/____"
			});

		}
		else if(el.classList.contains('inputmask--time')) {

			maskInput = new Inputmask({
				mask: "99:99",
				showMaskOnHover: false,
				placeholder: placeholder ? placeholder : "__:__"
			});

		}

		maskInput.mask(el);

	});

})(document.querySelectorAll('.inputmask'));