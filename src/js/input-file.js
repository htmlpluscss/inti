( input => {

	if( !input.length ) {

		return;

	}

	Array.from(input, item => {

		item.querySelector('input').addEventListener('change', () => {

			item.querySelector('.input-file__value').textContent = item.querySelector('input').value;

		});

	});

})(document.querySelectorAll('.input-file'));