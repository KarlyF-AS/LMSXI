// Función para añadir un producto a la lista
function agregarProducto() {
    const input = document.getElementById("producto"); // Buscamos el input donde se escribe el producto
    const texto = input.value.trim(); // Obtenemos el texto escrito y quitamos espacios del principio/final
  
    if (texto === "") {
      return; // Si no se escribió nada, no hacemos nada (evitamos agregar un producto vacío)
    }
  
    const lista = document.getElementById("lista"); // Obtenemos la lista (ul) donde vamos a poner los productos
    const item = document.createElement("li"); // Creamos un nuevo elemento <li> (una línea de lista)
    item.textContent = texto; // Le ponemos al <li> el texto que el usuario escribió
    lista.appendChild(item); // Agregamos ese <li> a la lista en pantalla
  
    input.value = ""; // Borramos el input para que puedas escribir el siguiente producto
  }
// Función para borrar toda la lista
function resetLista() {
    const lista = document.getElementById("lista"); // Obtenemos la lista de productos
    lista.innerHTML = ""; // Borramos todo el contenido (elimina todos los <li>)
  }
    