( select => {

	if(!select) {

		return;

	}

	select.addEventListener("change", () => {

		if(select.value === 'shipping') {

			const eventModalShow = new CustomEvent("modalShow", {
				detail: {
					selector: "certification-delivery-inti"
				}
			});

			window.modal.dispatchEvent(eventModalShow);

		}

		select.closest('.form').setAttribute('novalidate','novalidate');

	});

})(document.querySelector('.certification-delivery-select'));