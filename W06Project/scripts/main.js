// scripts/main.js

// Ejemplo: mensajes de ánimo aleatorios mostrados en la página principal
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

// Mostrar el mensaje al cargar la página
window.addEventListener("DOMContentLoaded", displayMessage);
