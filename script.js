function toggleMenu() {
  const burgerIcon = document.querySelector('.burger-icon');
  const menu = document.querySelector('.menu');

  burgerIcon.classList.toggle('active');
  menu.classList.toggle('active');
}