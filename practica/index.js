// Función para generar un color aleatorio
function obtenerColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}
// Obtener el botón y el párrafo donde se muestra el color
const boton = document.getElementById('generar-color');
const colorTexto = document.getElementById('color-actual');

// Agregar evento de clic
boton.addEventListener('click', function() {

    // Generar el color aleatorio
    const colorAleatorio = obtenerColorAleatorio();

    // Cambiar el fondo a un color aleatorio
    document.body.style.backgroundColor = obtenerColorAleatorio();

    // Actualizar el texto con el color hexadecimal
    colorTexto.textContent = 'Color Actual: ' + colorAleatorio;
});
