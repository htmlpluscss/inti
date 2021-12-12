( item => {

	if( !item ) {

		return;

	}

	const form = item.querySelector('.workgroup-item-stage-lang');

	if ( form ) {

		form.addEventListener('change', () => {

			Array.from(form.querySelectorAll('[data-lang]'), el => {

				el.classList.toggle('hide', el.getAttribute('data-lang') !== form.elements.lang.value);

			});

		});

	}

})(document.querySelector('.workgroup-item-stage'));