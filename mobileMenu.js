const navBarMobile = document.querySelector('.nav-bar-mobile');
const mobileMenu = document.querySelector('.mobile-menu');
const xButton = document.querySelector('.container-x');

navBarMobile.addEventListener('click', () => {
  navBarMobile.classList.toggle('disabled');
  mobileMenu.classList.toggle('active');
  xButton.classList.remove('disabled');
});

xButton.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  navBarMobile.classList.remove('disabled');
});