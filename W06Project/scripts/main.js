
const messages = [
  "You are enough, just as you are.",
  "Take a deep breath, you're doing great.",
  "Progress, not perfection.",
  "Your feelings are valid.",
  "You’ve made it through 100% of your hardest days."
];

function getRandomMessage() {
  const index = Math.floor(Math.random() * messages.length);
  return messages[index];
}

function displayMessage() {
  const main = document.querySelector("main");
  const messageEl = document.createElement("p");
  messageEl.textContent = getRandomMessage();
  messageEl.classList.add("daily-message");
  main.appendChild(messageEl);
}


function updateVisitCount() {
  let count = Number(localStorage.getItem("visits")) || 0;
  count++;
  localStorage.setItem("visits", count);
  document.getElementById("visit-count").textContent = count;
}


function lazyLoadImages() {
  const lazyImages = document.querySelectorAll("img.lazy");

  lazyImages.forEach(img => {
    const src = img.getAttribute("data-src");
    if (src) {
      img.src = src;
      img.removeAttribute("data-src");
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  displayMessage();
  updateVisitCount();
  lazyLoadImages();
});

