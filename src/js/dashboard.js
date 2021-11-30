/*! UTF-8

© kovrigin
Все права разрешены
красивый дизайн должен иметь красивый код®

https://github.com/htmlpluscss/

*/

( dashboard => {

	const setHeight = ( h = 0 ) => {

		Array.from(dashboard.querySelectorAll('.dashboard__desc'), item => {

			if ( h < item.clientHeight ) {

				h = item.clientHeight;

			}

		});

		document.documentElement.style.setProperty('--dashboardDescHeighgt', h + 'px');

	}

	PubSub.subscribe('windowWidthResize', () => setHeight());

	setHeight();

})(document.querySelector('.dashboard'));