const temples = [
  {
    name: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    size: 11500,
    imageUrl: "images/aba-nigeria.jpg"
  },
  {
    name: "Manti Utah",
    location: "Manti, Utah, USA",
    dedicated: "1888-05-21",
    size: 74792,
    imageUrl: "images/manti-utah.jpg"
  },
  {
    name: "Payson Utah",
    location: "Payson, Utah, USA",
    dedicated: "2015-06-07",
    size: 96630,
    imageUrl: "images/payson-utah.jpg"
  },
  {
    name: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020-05-02",
    size: 6861,
    imageUrl: "images/yigo-guam.jpg"
  },
  {
    name: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    size: 40000,
    imageUrl: "images/rome-italy.jpg"
  },
  {
    name: "Salt Lake",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893-04-06",
    size: 382245,
    imageUrl: "images/salt-lake.jpg"
  },
  {
    name: "Paris France",
    location: "Paris, France",
    dedicated: "2017-05-21",
    size: 44000,
    imageUrl: "images/paris-france.jpg"
  }
];

function displayTemples(templesToDisplay) {
  const container = document.getElementById("temple-cards");
  container.innerHTML = "";
  templesToDisplay.forEach(t => {
    const card = document.createElement("div");
    card.className = "temple-card";
    card.innerHTML = `
      <h2>${t.name}</h2>
      <p><strong>Location:</strong> ${t.location}</p>
      <p><strong>Dedicated:</strong> ${t.dedicated}</p>
      <p><strong>Size:</strong> ${t.size.toLocaleString()} sq ft</p>
      <img src="${t.imageUrl}" alt="${t.name}" loading="lazy">
    `;
    container.appendChild(card);
  });
}

function filterTemples(type) {
  let filtered;
  switch (type) {
    case 'old':
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      break;
    case 'new':
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      break;
    case 'large':
      filtered = temples.filter(t => t.size > 90000);
      break;
    case 'small':
      filtered = temples.filter(t => t.size < 10000);
      break;
    default:
      filtered = temples;
  }
  displayTemples(filtered);
}

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

displayTemples(temples);
