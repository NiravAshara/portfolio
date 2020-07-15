const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', ()=> {
	document.body.classList.toggle('nav-open');
	//when we click on button ,class selects
});

//function when we have to close the nav bar option menu
navLinks.forEach(link => {
	link.addEventListener('click',() => {
		document.body.classList.remove('nav-open');
	})
})