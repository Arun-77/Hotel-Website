const label = document.querySelector('.toggle-label');
const hamburger = document.getElementById('hamburger');
const navlist = document.querySelector('.navlist');
const navbar = document.querySelector('.navbar');
const preloader = document.querySelector('.load');
const scrollIt = document.querySelector('.scroll-unlock');
const Body = document.querySelector('.body');

window.addEventListener('load', function () {
	preloader.classList.add('hide-loader');
	Body.classList.toggle('animate-load');
});

label.addEventListener('click', function () {
	hamburger.classList.toggle('is-active');
	navlist.classList.toggle('is-active');
	scrollIt.classList.toggle('prevent-scroll');
});

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
	if (lastScrollY < window.scrollY) {
		navbar.classList.add('nav-hidden');
	} else {
		navbar.classList.remove('nav-hidden');
	}

	lastScrollY = window.scrollY;
});
