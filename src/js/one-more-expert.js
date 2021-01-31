( block => {

	if(block) {

		const inner = block.querySelector('.one-more-expert__inner'),
			  btn = block.querySelector('.one-more-expert__add'),
			  template = block.querySelector('.one-more-expert__template');

		btn.addEventListener("click", () => {

			const newSelect = document.createElement('div');

			newSelect.innerHTML = template.innerHTML;

			window.selects(newSelect.querySelector('.select'));

			inner.appendChild(newSelect);

			window.selectsCollection = document.querySelectorAll('.select');

		});

	}

})(document.querySelector('.one-more-expert'));