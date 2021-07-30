( items => {

	if(!items.length) {

		return;

	}

	const resultHTML = document.querySelector('#filter-result');

	const submit = form => {

		fetch(form.getAttribute('action'), {
			method: 'POST',
			body: new FormData(form)
		})
//		.then(response => response.html())
		.then(result => {

			console.log(result);

			resultHTML.innerHTML = result;

		});

	};

	Array.from(items, form => {

		const btn = form.querySelector('.filter__submit');

		form.addEventListener('reset', () => {

			btn.disabled = true;

			submit(form);

		});

		form.addEventListener('change', event => {

			btn.disabled = false;

			console.log(event.target);

			if(event.target.classList.contains('filter__tag')) {

				const item = event.target.closest('.filter-tags__item');

				item.addEventListener(INTI.cssAnimation('transition'), ()=> {

					if(form.querySelectorAll('.filter__tag').length === 1) {

						item.closest('.filter__item').classList.add('hide');

					}

					item.remove();

				});

				item.classList.add('is-remove');

			}

			submit(form);

		});

		form.addEventListener('submit', event => {

			event.preventDefault();
			submit(form);

		});

		// menu tasg

		const boxTags = form.querySelector('.filter-tags');

		if(boxTags) {

			const tags = document.querySelectorAll('.menu-tags__tag[data-value]'),
				  template = form.querySelector('#filter-tags-template').innerHTML;

			Array.from(tags, link => {

				const label = link.textContent.trim(),
					  value = link.getAttribute('data-value');

				link.addEventListener('click', event => {

					event.preventDefault();

					let append = true;

					Array.from(boxTags.querySelectorAll('input'), input => {

						if( input.value === value) {

							append = false;

						}

					});

					if(append) {

						const checkbox = Mustache.render(template, { label, value });

						boxTags.insertAdjacentHTML('beforeend', checkbox);

						submit(form);

					}

				});

			});

		}

	});

})(document.querySelectorAll('.filter'));

// btm toggle filter in tablet|mobile

( btns => {

	if(btns.length) {

		Array.from(btns, btn => {

			btn.addEventListener("click", () => document.body.classList.toggle('filter-show'));

		})

	}

})(document.querySelectorAll('.btn-open-filter, .search-menu__toggle-filter'));


// filter-sort-trigger

( form => {

	if(form.length) {

		Array.from(form, form => {

			const filter = document.querySelector('#' + form.getAttribute('data-id'));

			form.addEventListener("change", event => {

				console.log(event.target.value);
				filter.elements.sort.value = event.target.value;
				filter.elements.sort.dispatchEvent(new CustomEvent("change"));
				filter.dispatchEvent(new CustomEvent("change"));

			});

		})

	}

})(document.querySelectorAll('.filter-sort-trigger'));