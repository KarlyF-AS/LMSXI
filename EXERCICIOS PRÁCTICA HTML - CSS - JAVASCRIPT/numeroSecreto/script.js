// Generar el número secreto aleatorio entre 1 y 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
// Esto genera un número aleatorio entre 1 y 100 y lo guarda en la variable "numeroSecreto".

// Función que se llama cuando haces clic en "Probar"
function comprobar() {
  // Obtener el número que escribió el usuario
  const intento = parseInt(document.getElementById("intento").value);
  // Esto obtiene el valor que el usuario escribió en el campo de entrada (input) y lo convierte en un número entero.

  const mensaje = document.getElementById("mensaje");
  // Aquí obtenemos el lugar donde aparecerá el mensaje en la página web, con el id="mensaje".

  // Verificar si el valor introducido es un número válido
  if (isNaN(intento)) {
    mensaje.textContent = "Por favor, escribe un número válido.";
    // Si el valor introducido no es un número, mostramos un mensaje pidiendo que escriban un número válido.
  } else if (intento < numeroSecreto) {
    mensaje.textContent = "MAYOR";
    // Si el número introducido es menor que el número secreto, mostramos "MAYOR" para indicar que deben escribir un número mayor.
  } else if (intento > numeroSecreto) {
    mensaje.textContent = "MENOR";
    // Si el número introducido es mayor que el número secreto, mostramos "MENOR" para indicar que deben escribir un número menor.
  } else {
    mensaje.textContent = "¡HAS GANADO!";
    // Si el número introducido es igual al número secreto, mostramos "¡HAS GANADO!" porque han acertado.
  }
}

// Función que reinicia el juego
function reiniciar() {
  // Generar un nuevo número secreto
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  // Esto genera un nuevo número secreto aleatorio entre 1 y 100.

  // Limpiar el mensaje y el campo de entrada
  document.getElementById("mensaje").textContent = "";
  // Limpiamos el mensaje para borrar lo que había antes.

  document.getElementById("intento").value = "";
  // Limpiamos el campo de entrada para que el usuario pueda escribir un nuevo número para jugar nuevamente.
}

/*Generar el número secreto aleatorio:
- let numeroSecreto = Math.floor(Math.random() * 100) + 1;
- ¿Qué hace esto?
    La función Math.random() genera un número aleatorio entre 0 y 1 (excluyendo 1). 
    Al multiplicarlo por 100, obtenemos un número entre 0 y 100 (sin incluir 100). 
    Luego, Math.floor() redondea este número hacia abajo, para que siempre sea un 
    número entero. Finalmente, sumamos 1 para asegurarnos de que el número esté 
    entre 1 y 100, y lo guardamos en la variable numeroSecreto. Este es el número
    que el jugador tiene que adivinar.

Comprobar el número introducido por el jugador:
- function comprobar() { ... }
- ¿Qué hace esto?
    Esta es la función que se ejecuta cuando el jugador hace clic en el botón "Probar".
    Dentro de esta función, verificamos el número introducido por el jugador y
    lo comparamos con el número secreto.

Obtener el número ingresado por el usuario:
- const intento = parseInt(document.getElementById("intento").value);
- ¿Qué hace esto?
    Usamos document.getElementById("intento").value para obtener lo que el usuario
    ha escrito en el campo de entrada. La función parseInt() convierte ese valor 
    (que es texto) en un número entero. Si el usuario escribiera "50", 
    intento sería 50.

Obtener el lugar donde se mostrará el mensaje:
- const mensaje = document.getElementById("mensaje");
- ¿Qué hace esto?
    Esta línea nos da el lugar en la página donde mostraremos los mensajes 
    (si el número es mayor, menor o si acertaron). Este lugar está marcado 
    con el id="mensaje" en el HTML.

Función para reiniciar el juego:
- function reiniciar() { ... }
- ¿Qué hace esto?
    Esta es la función que se llama cuando el jugador hace clic en el botón "Reiniciar".
    Reinicia el juego generando un nuevo número secreto y limpiando los campos
    de entrada y el mensaje.

Generar un nuevo número secreto al reiniciar:
- numeroSecreto = Math.floor(Math.random() * 100) + 1;
- ¿Qué hace esto?
    Genera un nuevo número secreto aleatorio, igual que al principio, 
    pero ahora después de que el jugador ha reiniciado el juego.

Limpiar el mensaje y el campo de entrada:
- document.getElementById("mensaje").textContent = "";
- ¿Qué hace esto?
    Borra el mensaje que se había mostrado antes, de modo que cuando se reinicia 
    el juego, no quede ningún mensaje visible.

- document.getElementById("intento").value = "";
- ¿Qué hace esto?
    Limpia el campo de entrada (el lugar donde escribes el número), 
    para que el jugador pueda escribir un nuevo número.
*/