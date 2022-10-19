const navBarMobile = document.querySelector('.nav-bar-mobile');
const mobileMenu = document.querySelector('.mobile-menu');
const xButton = document.querySelector('.container-x');

navBarMobile.addEventListener('click', () => {
  navBarMobile.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

xButton.addEventListener('click', () => {
  xButton.classList.toggle('active');
  mobileMenu.classList.remove('active');
  navBarMobile.classList.remove('active');
});


