// getdates.js

document.addEventListener("DOMContentLoaded", () => {
    // Insert current year
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  
    // Insert last modified date
    const lastModParagraph = document.getElementById("lastModified");
    if (lastModParagraph) {
      lastModParagraph.textContent = `Last Modified: ${document.lastModified}`;
    }
  });
  