const mobileMenuBtn = document.querySelector('#mobileMenuBtn');
const printBtn = document.querySelector('.print-btn');

function showMenu() {
	let block = document.querySelector('#menu');
	block.classList.toggle('mobile-menu-show');
	mobileMenuBtn.classList.toggle('mobile-menu-close');
}

function activeMenuLink() {
	const links = document.querySelectorAll('.header__menu-link');
	links.forEach(link => {
		if(location.pathname === link.getAttribute('href')) {
			link.classList.add('active');
		}
	});
}

activeMenuLink();
mobileMenuBtn.addEventListener('click', showMenu);

if(printBtn) {
	printBtn.addEventListener('click', function() {
		window.print();
	});
}