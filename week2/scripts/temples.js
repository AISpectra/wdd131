
const menuButton = document.querySelector('#menu');
const navMenu = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  menuButton.textContent = menuButton.textContent === '≡' ? '✖' : '≡';
});


const yearSpan = document.querySelector('#year');
const lastModifiedSpan = document.querySelector('#lastModified');

const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

lastModifiedSpan.textContent = document.lastModified;
