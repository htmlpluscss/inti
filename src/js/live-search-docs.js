( section => {

	if(!section.length) {

		return;

	}

	Array.from(section, block => {

		const rows = [],
			  form = block.querySelector('.live-search-docs__form'),
			  input = form.querySelector('.live-search-docs__input'),
			  reset = form.querySelector('.live-search-docs__reset'),
			  empty = block.querySelector('.live-search-docs__empty'),
			  items = block.querySelectorAll('.live-search-docs__item');

		const filterRow = (value) => {

			if( value.length ){

				rows.forEach( (row,index) => {

					let show = row.some( td => td.toLowerCase().indexOf(value.toLowerCase()) !== -1 );

					if ( show ) {

						Array.from(items[index].querySelectorAll('.live-search-docs__string'), (td,i) => {

							td.innerHTML = row[i].replace(value,"<span class=\"highlight\">" + value + "</span>");

						});

						items[index].classList.remove('hide');

					} else {

						items[index].classList.add('hide');

						Array.from(items[index].querySelectorAll('.live-search-docs__string'), (td,i) => {

							td.textContent = row[i];

						});

					}

				});

			} else {

				Array.from(items, (item, index) => {

					Array.from(item.querySelectorAll('.live-search-docs__string'), (td,i) => td.textContent = rows[index][i]);

					item.classList.remove('hide');

				});

			}

		};

		// создадим массив строк по которым ищем

		Array.from(items, (item,index) => {

			rows[index] = [];

			Array.from(item.querySelectorAll('.live-search-docs__string'), td => {

				rows[index].push(td.textContent.trim());

			});

		});

		input.addEventListener('focus', () => block.classList.add('is-focus'));

		form.addEventListener('reset', () => {

			form.classList.add('is-empty');
			block.classList.remove('is-focus', 'is-noempty');
			filterRow('');

		});

		input.addEventListener('keyup', () => {

			form.classList.toggle('is-empty', input.value.length === 0);
			block.classList.toggle('is-noempty', input.value.length);
			filterRow(input.value);

		});

	});

	// скрыть рузельтаты при клике вне формы

	window.addEventListener("click", event => {

		const isForm = event.target.closest('.live-search-docs__form');

		Array.from(section, block => {

			if( isForm !== block.querySelector('.live-search-docs__form') ) {

				block.classList.remove('is-focus');

			}

		});

	});

})(document.querySelectorAll('.live-search-docs'));