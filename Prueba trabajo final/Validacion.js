const formulario = document.getElementById('contacto-form');

formulario.addEventListener('submit', function (event) {

  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const dni = document.getElementById('dni').value;
  const edad = document.getElementById('edad').value;
  const generoHombre = document.getElementById('hombre').checked;
  const generoMujer = document.getElementById('mujer').checked;
  const experiencia = document.getElementById('experiencia').value;
  const formacion = document.getElementById('formacion').value;

  // validaciones
  if (nombre === '') {
    alert('Por favor, ingresa tu nombre.');
    event.preventDefault(); 
  }

  if (!/^\S+@\S+\.\S+$/.test(correo)) {
    alert('Por favor, ingresa una dirección de correo válida.');
    event.preventDefault();
  }

  if (dni === '') {
    alert('Por favor, ingresa tu número de documento (DNI).');
    event.preventDefault();
  }

  if (isNaN(edad) || edad < 18) {
    alert('Por favor, ingresa una edad válida mayor de 18.');
    event.preventDefault();
  }

  if (!generoHombre && !generoMujer) {
    alert('Por favor, selecciona un género.');
    event.preventDefault();
  }

  if (experiencia === '') {
    alert('Por favor, ingresa tu experiencia.');
    event.preventDefault();
  }

  if (formacion === '') {
    alert('Por favor, ingresa tu formación.');
    event.preventDefault();
  }
});

// Obtén el botón del modo nocturno y el cuerpo del documento
const modoNocturnoBoton = document.getElementById('modo-nocturno-boton');
const cuerpo = document.body;

// Escucha el evento click en el botón
modoNocturnoBoton.addEventListener('click', () => {
    // Alterna la clase 'modo-nocturno' en el cuerpo del documento
    cuerpo.classList.toggle('modo-nocturno');
});