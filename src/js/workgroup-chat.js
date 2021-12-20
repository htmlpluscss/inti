( chat => {

	if( !chat ) {

		return;

	}

	const formGroup = chat.querySelector('.workgroup-chat-form-group');

	if ( formGroup ) {

		// переключение

		const btns = formGroup.querySelectorAll('.workgroup-chat-form-group__btn');

		const toogleForm = id => {

			formGroup.classList.remove('is-chat','is-message','is-user');
			formGroup.classList.add('is-' + id);

			id === 'chat' ? filterReset() : filterFocus();

		}

		Array.from(btns, btn => {

			btn.addEventListener('click', () => toogleForm(btn.getAttribute('data-item')));

		});

		// отправка сообщений

		const form = formGroup.querySelector('.workgroup-chat-form'),
			  btn = form.querySelector('.workgroup-chat-form__submit'),
			  input = form.querySelector('.workgroup-chat-form__input'),
			  file = form.querySelector('.workgroup-chat-form__btn-file'),
			  reply = form.querySelector('.workgroup-chat-form__reply'),
			  replyBtn = reply.querySelector('.workgroup-chat-form__reply-remove'),
			  modalFormRemove = document.querySelector('#workgroup-item-chat-remove-post');
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

				reply.classList.add('hide');
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

		// удалить цитату

		replyBtn.addEventListener('click', () => {

			reply.classList.add('hide');
			form.elements.reply.value = '';

		});

		// загрузить файл, открываем модалку

		file.addEventListener('click', () => {

			const selector = 'workgroup-item-chat-input-file';

			document.querySelector('#' + selector).action = form.action;
			document.querySelector('#' + selector).elements.reply.value = form.elements.reply.value;

			const eventModalShow = new CustomEvent("modalShow", {
				detail: {
					selector
				}
			});

			window.modal.dispatchEvent(eventModalShow);

		});

		// удаление и ответ на сообщение

		list.addEventListener('click', event => {

			const btnEvent = event.target.closest('.workgroup-chat__item-btn');

			if ( btnEvent ) {

				const post = btnEvent.closest('.workgroup-chat__item'),
					  id = post.getAttribute('data-id-post');

				if ( btnEvent.classList.contains('is-reply') ) {

					toogleForm('chat');

					reply.querySelector('.workgroup-chat-form__reply-name').textContent = post.querySelector('.workgroup-chat-item__name-value').textContent;
					reply.querySelector('.workgroup-chat-form__reply-text').textContent = post.querySelector('.workgroup-chat-item__text-value').textContent;
					reply.classList.remove('hide');

					form.elements.reply.value = id;
					input.value = '';
					input.focus();

				}

				if ( btnEvent.classList.contains('is-remove') ) {

					modalFormRemove.elements.id.value = id;

					const eventModalShow = new CustomEvent("modalShow", {
						detail: {
							selector: 'workgroup-item-chat-remove-post'
						}
					});

					window.modal.dispatchEvent(eventModalShow);

				}

			}

		});

		// удаление из чата

		modalFormRemove.addEventListener('submit', event => {

			event.preventDefault();

			modalFormRemove.querySelector('.is-submit').disabled = true;

			fetch(modalFormRemove.getAttribute('action'), {
				method: 'POST',
				body: new FormData(modalFormRemove)
			})
			.then(response => response.json())
			.then(result => {

				console.log(result);

				modal.dispatchEvent(new CustomEvent("hide"));
				modalFormRemove.querySelector('.is-submit').disabled = false;
				list.querySelector('[data-id-post="' + result.id + '"]').remove();

				if(result.notification) {

					notification(...result.notification);

				}

			});

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

	// modal file

	const formModal = document.querySelector('.modal-chat-input-file');

	if ( formModal ) {

		const btn = formModal.querySelector('.modal-chat-input-file__submit'),
			  file = formModal.querySelector('.modal-chat-input-file__input');

		formModal.addEventListener('change', event => {

			btn.disabled = file.value.length === 0;

			if ( event.target === file ) {

				formModal.querySelector('.modal-chat-input-file__value').textContent = file.value;

			}

		});

	}

})(document.querySelector('.workgroup-chat'));