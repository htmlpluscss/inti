( script => {

	script.src = "https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=ru&widgetTheme=light&autoMode=false";

	document.head.appendChild(script);

	Array.from(document.querySelectorAll('.header__lang-btn'), el => {

		el.addEventListener('click', () => {

			localStorage.setItem('yt-widget', JSON.stringify({
				"lang": el.getAttribute('data-lang'),
				"active": true
			}));

			location.reload();

		});

	});

})(document.createElement('script'));