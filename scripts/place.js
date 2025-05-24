// place.js


document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.querySelector("#year");
  const modifiedSpan = document.querySelector("#lastModified");

  const today = new Date();
  yearSpan.textContent = today.getFullYear();
  modifiedSpan.textContent = document.lastModified;

  
  const temperature = 10; 
  const windSpeed = 5;    

  const windChillSpan = document.querySelector("#windchill");
  const windChill = calculateWindChill(temperature, windSpeed);

  if (temperature <= 10 && windSpeed > 4.8) {
    windChillSpan.textContent = `${windChill.toFixed(1)} °C`;
  } else {
    windChillSpan.textContent = "N/A";
  }
});


function calculateWindChill(tempC, speedKmh) {
  
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(speedKmh, 0.16) +
    0.3965 * tempC * Math.pow(speedKmh, 0.16)
  );
}
