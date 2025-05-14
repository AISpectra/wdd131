// DOM element references
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Ejemplo de cómo preparar un li y botón (aunque aún no se activa)
const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContent = input.value;
deleteButton.textContent = '❌';
deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

li.appendChild(deleteButton);
list.appendChild(li);
