const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

// Valores iniciales para definir el color RGB.
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Muestra los valores iniciales en los elementos <p>.
textoRojo.textContent = rojo;
textoVerde.textContent = verde;
textoAzul.textContent = azul;

// Función para actualizar el color de fondo de la página.
function actualizarColor(rojo, verde, azul) {
  document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}

// Función para manejar la actualización de los inputs.
function manejarCambio(input, texto) {
  const valor = input.value;
  texto.textContent = valor;
  actualizarColor(rojo, verde, azul);
}

// Agrega un event listener para el input de Rojo.
inputRojo.addEventListener('change', (e) => {
  rojo = e.target.value;
  manejarCambio(inputRojo, textoRojo);
});

// Agrega un event listener para el input de Verde.
inputVerde.addEventListener('change', (e) => {
  verde = e.target.value;
  manejarCambio(inputVerde, textoVerde);
});

// Agrega un event listener para el input de Azul.
inputAzul.addEventListener('change', (e) => {
  azul = e.target.value;
  manejarCambio(inputAzul, textoAzul);
});