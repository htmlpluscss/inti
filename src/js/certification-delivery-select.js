( select => {

	if(!select) {

		return;

	}

	select.addEventListener("change", () => {

		if(select.value === 'shipping') {

			const eventModalShow = new CustomEvent("modalShow", {
				detail: {
					selector: "delivery-inti"
				}
			});

			window.modal.dispatchEvent(eventModalShow);

		}

	});

})(document.querySelector('.certification-delivery-select'));