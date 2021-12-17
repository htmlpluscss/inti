( chat => {

	if( !chat ) {

		return;

	}

	const formGroup = chat.querySelector('.workgroup-chat-form-group');

	if ( formGroup ) {

		// переключение

		const btns = formGroup.querySelectorAll('.workgroup-chat-form-group__btn');

		Array.from(btns, btn => {

			btn.addEventListener('click', () => {

				const id = btn.getAttribute('data-item');

				formGroup.classList.remove('is-chat','is-message','is-user');
				formGroup.classList.add('is-' + id);

				id === 'chat' ? filterReset() : filterFocus();

			});

		});

		// отправка сообщений

		const form = formGroup.querySelector('.workgroup-chat-form'),
			  btn = form.querySelector('.workgroup-chat-form__submit'),
			  input = form.querySelector('.workgroup-chat-form__input'),
			  file = form.querySelector('.workgroup-chat-form__input-file input'),
			  list = chat.querySelector('.workgroup-chat__list');

		const send = ()=> {
alert('в ответе ждум html .workgroup-chat__item');
return;
			form.classList.add('is-loading');
			btn.disabled = true;

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.text())
			.then(result => {

				console.log(result);

				form.classList.remove('is-loading');
				btn.disabled = false;

				list.insertAdjacentHTML('afterbegin', result);

				// reset reply

				form.elements.reply.value = '';

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

		// удаление и ответ на сообщение

		list.addEventListener('click', event => {

			const btnEvent = event.target.closest('.workgroup-chat__item-btn');

			if ( btnEvent ) {

				const id = btnEvent.closest('.workgroup-chat__item').getAttribute('data-id-post');

				if ( btnEvent.classList.contains('is-reply') ) {

					form.elements.reply.value = id;
					alert('focus, @')

				}

				if ( btnEvent.classList.contains('is-remove') ) {

					const selector = 'workgroup-item-chat-remove-post';

					document.querySelector('.modal__item--' + selector).elements.id.value = id;

					const eventModalShow = new CustomEvent("modalShow", {
						detail: {
							selector
						}
					});

					window.modal.dispatchEvent(eventModalShow);

				}

			}

		});

		// фильтр чата

		const filter = formGroup.querySelector('.workgroup-chat-filter');

		const filterReset = ()=> {

			console.log('reset');
			filter.classList.add('is-empty');
			filterFocus();

			Array.from(chat.querySelectorAll('.workgroup-chat-item__filter-item'), item => item.classList.remove('hide'));

		};

		const filterFocus = ()=> {

			Array.from(filter.querySelectorAll('.input'), input => {

			if ( input.offsetParent !== null )

				input.focus();

			});

		};

		filter.addEventListener('submit', event => {

			event.preventDefault();

		});

		filter.addEventListener('reset', filterReset);

		filter.addEventListener('input', event => {

			const value = event.target.value;

			filter.classList.toggle('is-empty', value.length === 0);

			Array.from(chat.querySelectorAll('.workgroup-chat-item__filter-' + event.target.name), item => {

				item.closest('.workgroup-chat-item__filter-item').classList.toggle('hide', item.textContent.toLowerCase().indexOf(value.toLowerCase()) === -1);

			});

		});

	}

})(document.querySelector('.workgroup-chat'));