( items => {

	if(!items) {

		return;

	}

	// если есть возможносчть вернуться назад

	if(document.referrer.indexOf(location.hostname) > 0) {

		document.querySelector('.account-form__back').addEventListener('click', event => {

			event.preventDefault();

			history.back();

		});

	}

	// показать пароль

	const togglePass = document.querySelectorAll('.account-form__visible-toggle-password');

	Array.from(togglePass, el => {

		const btn = el.querySelector('.account-form__visible-toggle-password-btn'),
			  input = el.querySelector('.account-form__visible-toggle-password-input');

		btn.addEventListener('click', ()=> {

			input.type = input.type === 'password' ? 'text' : 'password';

		});

	});

})(document.querySelector('.account-form'));