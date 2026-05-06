const hamburger = document.querySelector('.hamburger');
const header    = document.querySelector('.header');

hamburger.addEventListener('click', () => header.classList.toggle('active'));

function redirect(idPrato) {
  header.classList.remove('active');
  window.location.href = '#' + idPrato;
}
