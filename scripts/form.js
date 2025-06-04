const products = [
  { id: 'product1', name: 'Wireless Headphones' },
  { id: 'product2', name: 'Smartwatch X2' },
  { id: 'product3', name: 'UltraSlim Laptop' },
  { id: 'product4', name: 'Eco Blender' },
  { id: 'product5', name: 'LED Monitor 27"' }
];

window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("product");
  products.forEach(prod => {
    const option = document.createElement("option");
    option.value = prod.id;
    option.textContent = prod.name;
    select.appendChild(option);
  });
});
