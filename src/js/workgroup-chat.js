( item => {

	if( !item ) {

		return;

	}

	const form = item.querySelector('.workgroup-chat-form');

	if ( form ) {

		const btn = form.querySelector('.workgroup-chat-form__submit'),
			  input = form.querySelector('.workgroup-chat-form__input'),
			  file = form.querySelector('.workgroup-chat-form__input-file input'),
			  list = form.querySelector('.workgroup-chat__list'),
			  empty = form.querySelector('.workgroup-chat__empty');

		const send = ()=> {
alert('в ответе ждум html .workgroup-chat__item');
return;
			form.classList.add('is-loading');
			btn.disabled = true;

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.html())
			.then(result => {

				console.log(result);

				form.classList.remove('is-loading');
				btn.disabled = false;

				list.insertAdjacentHTML('afterbegin', result);

				if ( empty ) {

					empty.remove();

				}

			});

		}

		form.addEventListener('submit', event => {

			event.preventDefault();

			if ( input.value.length !== 0 ) {

				send();
				input.value = '';

			}

		});

		form.addEventListener('change', event => {

			if ( event.target === file ) {

				send();
				file.value = '';

			}

		});

	}

})(document.querySelector('.workgroup-chat'));