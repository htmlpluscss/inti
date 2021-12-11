( datalists => {

	if ( datalists.length === 0 ) {

		return;

	}

	Array.from(datalists, datalist => {

		const form = datalist.closest('form'),
			  input = datalist.querySelector('.input-datalist__input'),
			  list = datalist.querySelector('.input-datalist__list'),
			  items = datalist.querySelectorAll('.input-datalist__item'),
			  workgroupAddUser = datalist.classList.contains('in-workgroup-add-user');

		datalist.addEventListener('close', ()=> {

			input.value = '';
			Array.from(items, item => item.classList.remove('input-datalist__item--hide'));
			datalist.classList.remove('is-focus');

		});

		if ( workgroupAddUser ) {

			Array.from(items, item => {

				const radio = item.querySelector('.input-datalist__radio');

				radio.addEventListener("change", () => {

					item.classList.add('visuallyhidden');

					input.focus();

					if ( input.value ) {

						datalist.dispatchEvent(new CustomEvent("close"));

					}

				});

			});

		}

		input.addEventListener('focus', () => datalist.classList.add('is-focus'));

		input.addEventListener('input', () => {

			datalist.classList.add('is-focus');

			const value = input.value.toLowerCase();

			if( value.length ) {

				Array.from(items, item => {

					const text = item.querySelector('.input-datalist__filter').textContent.trim().toLowerCase();

					item.classList.toggle('input-datalist__item--hide', text.indexOf(value) === -1);

				});

			} else {

				Array.from(items, item => item.classList.remove('input-datalist__item--hide'));

			}

			if ( workgroupAddUser ) {

				form.classList.toggle( 'is-empty', Array.from(items).every( el => el.classList.contains('visuallyhidden') || el.classList.contains('input-datalist__item--hide')) );

			}

		});

	});

	window.addEventListener("click", event => {

		if ( event.target.closest('.input-datalist') === null ) {

			Array.from(datalists, datalist => datalist.classList.remove('is-focus'));

		}

	});

})(document.querySelectorAll('.input-datalist'));