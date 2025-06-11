
let visitCount = localStorage.getItem("visit-count") || 0;
visitCount++;
localStorage.setItem("visit-count", visitCount);


document.addEventListener("DOMContentLoaded", () => {
  const visitDisplay = document.getElementById("visit-count");
  if (visitDisplay) {
    visitDisplay.textContent = `You have visited this page ${visitCount} times.`;
  }
});


function handleFormSubmission(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const entries = Object.fromEntries(formData.entries());

  localStorage.setItem("formData", JSON.stringify(entries));

  alert("Form submitted successfully and saved in localStorage!");
  event.target.reset();
}


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", handleFormSubmission);
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img[loading='lazy']");
  lazyImages.forEach((img) => {
    img.src = img.dataset.src;
  });
});
