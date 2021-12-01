( items => {

	if( items.length === 0 ) {

		return;

	}

	window.addEventListener("click", event => {

		const isMenu = event.target.closest('.context-menu');

		Array.from(items, item => {

			item.classList.toggle('is-open', item === isMenu && isMenu.classList.contains('is-open') === false);

		});

	});

})(document.querySelectorAll('.context-menu'));