( item => {

	if( !item ) {

		return;

	}

	// Выйти из рабочей группы

	const btnExit = item.querySelector('.workgroup-item-action__exit');

	if ( btnExit ) {

		btnExit.addEventListener('click', () => {

			document.querySelector('.modal__item--workgroup-item-exit').elements.id.value = btnExit.getAttribute('data-id');

			const eventModalShow = new CustomEvent("modalShow", {
				detail: {
					selector: "workgroup-item-exit"
				}
			});

			window.modal.dispatchEvent(eventModalShow);

		});

	}

})(document.querySelector('.workgroup-item'));