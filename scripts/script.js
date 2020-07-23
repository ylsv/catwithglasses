const img = document.querySelector('.cat-container__img');
const link = document.querySelector('#theme-link');

img.addEventListener('click', changeTheme);

function changeTheme() {
	let currentTheme = link.getAttribute('href');
	const lightTheme = 'styles/light.css';
	const darkTheme = 'styles/dark.css';

	currentTheme === lightTheme ? (currentTheme = darkTheme) : (currentTheme = lightTheme);
	link.setAttribute('href', currentTheme);
}
