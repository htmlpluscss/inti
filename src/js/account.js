( account => {

	if(!account) {

		return;

	}

	// для уведомлений

	document.documentElement.style.setProperty('--headerHeight', '15px');

	// показать пароль

	const togglePass = document.querySelectorAll('.account__visible-toggle-password');

	Array.from(togglePass, el => {

		const btn = el.querySelector('.account__visible-toggle-password-btn'),
			  input = el.querySelector('.account__visible-toggle-password-input');

		btn.addEventListener('click', ()=> {

			input.type = input.type === 'password' ? 'text' : 'password';

			Array.from(btn.querySelectorAll('svg'), svg => svg.classList.toggle('hide'));

		});

	});

	// регистрация

	const formReg = account.querySelector('.account__form--signup');

	if( formReg ) {

		formReg.addEventListener('change', event => {

			// первый шаг, выбор типа учетки

			if( event.target.classList.contains('account__radio-input') ) {

				const fieldset = event.target.closest('.account__fieldset');

				fieldset.classList.add('is-valid');

				fieldset.querySelector('.account__next').disabled = false;

			}

		});

		// btn next

		const btnNext = formReg.querySelectorAll('.account__next');

		Array.from(btnNext, btn => {

			btn.addEventListener('click', () => {

				btn.closest('.account__fieldset').classList.add('hide');
				btn.closest('.account__fieldset').nextElementSibling.classList.remove('hide');

			});

		});

		// btn prev

		const btnPrev = formReg.querySelectorAll('.account__prev');

		Array.from(btnPrev, btn => {

			btn.addEventListener('click', () => {

				btn.closest('.account__fieldset').classList.add('hide');
				btn.closest('.account__fieldset').previousElementSibling.classList.remove('hide');

			});

		});

	}

	// submit form

	const form = account.querySelector('.account__form'),
		  templateError = document.querySelector('#account-form-error-tooltip-template');

	form.addEventListener('submit', event => {

		event.preventDefault();

		const btnSubmit = form.querySelector('.account__submit');

		btnSubmit.disabled = true;

		fetch(form.getAttribute('action'), {
			method: 'POST',
			body: new FormData(form)
		})
		.then(response => response.json())
		.then(json => {

			console.log(json);

			if( json.errorList ) {

				json.errorList.forEach( input => {

					console.log(input)

/*					const error = Mustache.render(templateError, { text }),
						  input = form.elements[input.type];

					input.insertAdjacentHTML('afterend', error);
					input.classList.add('is-error');
*/
				});

			}

			if( json.notification ) {

				notification(json.notification[0], json.notification[1], json.notification[2]);

			}

			// redirect

			if( result.redirect ) {

				const delay = result.redirectDelay ? result.redirectDelay * 1000 : 0;

				setTimeout( ()=> location.assign(result.redirect), delay);

			}

		});

	});

	// скрытие ошибок при вводе

	form.addEventListener('input', event => {

		if ( event.target.classList.contains('is-error') ) {

			event.target.classList.remove('is-error');

			const error = event.target.parentNode.querySelector('.inputbox__error');

			if ( error ) {

				error.addEventListener(window.cssAnimation('transition'), () => error.remove());

				setTimeout( () => error.classList.add('is-fadeout'), 100);

			}

		}

	});

	// Компания

/*	const companySelect = account.querySelector('#account-account-company'),
		  companySelect = account.querySelector('#account-account-company');

	if(companySelect) {


	}
*/
})(document.querySelector('.account'));