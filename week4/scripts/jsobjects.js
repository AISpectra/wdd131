// Definimos el objeto del curso con secciones
let aCourse = {
  code: "WDD131",
  title: "Dynamic Web Fundamentals",
  credits: 2,
  sections: [
    {
      section: "A01",
      enrolled: 25,
      instructor: "Prof. Rivera"
    },
    {
      section: "B02",
      enrolled: 30,
      instructor: "Dr. Smith"
    }
  ]
};

// Función para mostrar el título, código y créditos del curso
function displayCourseInfo(course) {
  document.getElementById("course-title").textContent = course.title;
  document.getElementById("course-code").textContent = course.code;
  document.getElementById("course-credits").textContent = course.credits;
}

// Función para mostrar las secciones del curso en una tabla
function displaySections(course) {
  const tableBody = document.getElementById("sections");
  course.sections.forEach(section => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${section.section}</td>
      <td>${section.enrolled}</td>
      <td>${section.instructor}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Ejecutamos las funciones
displayCourseInfo(aCourse);
displaySections(aCourse);
