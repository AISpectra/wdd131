// scripts/form.js
const form = document.getElementById('signupForm');
const confirmation = document.getElementById('confirmation');

// Load saved name on page load (example use of localStorage)
window.addEventListener('DOMContentLoaded', () => {
  const savedName = localStorage.getItem('spectraName');
  if (savedName) {
    confirmation.textContent = `Welcome back, ${savedName}! You're already part of Spectra.`;
  }
});

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const preference = document.getElementById('preference').value;

  if (name && email && preference) {
    // Save data using localStorage
    localStorage.setItem('spectraName', name);
    localStorage.setItem('spectraEmail', email);
    localStorage.setItem('spectraPreference', preference);

    confirmation.textContent = `Thank you, ${name}! You have successfully joined Spectra for ${preference}.`;
    form.reset();
  }
});
