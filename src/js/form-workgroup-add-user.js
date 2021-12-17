( form => {

	if( !form ) {

		return;

	}

	const submit = form.querySelector('.form-workgroup-add-user__submit'),
		  users = form.querySelectorAll('.form-workgroup-add-user__user'),
		  head = form.querySelector('.workgroup-add-user__list-head'),
		  foot = form.querySelector('.workgroup-add-user__foot'),
		  result = form.querySelector('.workgroup-add-user__result'),
		  btnNextCustom = form.querySelector('.form-workgroup-add-user__btn-next-custom'),
		  customName = form.querySelector('.form-workgroup-add-user__custom-name'),
		  customEmail = form.querySelector('.form-workgroup-add-user__custom-email'),
		  customSubmit = form.querySelector('.form-workgroup-add-user__submit-custom'),
		  template = form.querySelector('#workgroup-add-user-template').innerHTML,
		  templateCustom = form.querySelector('#workgroup-add-user-template-custom').innerHTML;

  	let usersList = false;

  	const customInput = ()=> {

		customSubmit.disabled = customName.value.length === 0 || customEmail.value.length === 0;

	}

	const formDisabled = disabled => {

		submit.disabled = disabled;
		head.classList.toggle('hide', disabled);
		foot.classList.toggle('hide', disabled);

	}

	form.addEventListener("change", event => {

		if( event.target.classList.contains('form-workgroup-add-user__user') ) {

			const id = event.target.value,
				  user = event.target.nextElementSibling;
				  avatar = user.querySelector('.workgroup-user__head').innerHTML,
				  name = user.querySelector('.workgroup-user__name').textContent.trim(),
				  desc = user.querySelector('.workgroup-user__desc').textContent.trim();

			result.insertAdjacentHTML('afterbegin', Mustache.render(template, { id, avatar, name, desc }));

			formDisabled(false);

		}

	});

	// ручное добавление

	btnNextCustom.addEventListener("click", () => {

		customName.focus();
		btnNextCustom.closest('.input-datalist').dispatchEvent(new CustomEvent("close"));

	});

	customName.addEventListener("input", () => customInput());
	customEmail.addEventListener("input", () => customInput());

	customSubmit.addEventListener("click", () => {

		const name = customName.value.trim(),
			  email = customEmail.value.trim();

		let avatar = '';

		if ( name.indexOf(' ') === -1 ) {

			avatar = name;

		} else {

			name.split(' ').forEach( word => {

				avatar += word.substr(0, 1);

			});

		}

		avatar = avatar.substr(0, 2);

		result.insertAdjacentHTML('afterbegin', Mustache.render(templateCustom, { avatar, name, email }));

		customName.value = '';
		customEmail.value = '';
		customSubmit.disabled = true;

		formDisabled(false);

	});

	result.addEventListener("click", event => {

		const btnRemove = event.target.closest('.workgroup-add-user__new-remove');

		if ( btnRemove ) {

			const id = btnRemove.getAttribute('data-id');

			if ( id !== 'custom' ) {

				const input = form.querySelector('.form-workgroup-add-user__user[value="' + id + '"]');

				input.checked = false;

				input.closest('.form-workgroup-add-user__user-wrap').classList.remove('visuallyhidden');

			}

			setTimeout( ()=> {

				btnRemove.closest('.workgroup-add-user__new').remove();

				if ( !result.querySelector('.workgroup-add-user__new') ) {

					formDisabled(true);

				}

			});

		}

	});

	form.addEventListener('submit', event => {

		event.preventDefault();

		form.classList.add('is-loading');
		submit.disabled = true;

		fetch(form.getAttribute('action'), {
			method: 'POST',
			body: new FormData(form)
		})
		.then(response => response.json())
		.then(notification => {

			console.log(notification);

			form.classList.remove('is-loading');

			notification(...notification);

			result.innerHTML = '';
			formDisabled(true);

		});

	});

})(document.querySelector('.form-workgroup-add-user'));