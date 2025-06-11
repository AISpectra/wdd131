
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

if (menuButton) {
  menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img[loading='lazy']");
  lazyImages.forEach(img => {
    img.addEventListener("load", () => {
      img.classList.add("loaded");
    });
  });
});

