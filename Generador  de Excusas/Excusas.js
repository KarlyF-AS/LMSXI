function generarExcusa() {
    const sujetos = ["Mi perro", "Un alien", "Un duende", "El vecino", "Mi jefe"];
    const acciones = ["se comió", "perdió", "rompió", "escondió", "olvidó"];
    const objetos = ["mis deberes", "a mi gato", "las llaves de mi bicicleta", "el dinero", "mi computadora"];
    const lugares = ["en casa", "en la calle", "en la oficina", "en el parque", "en el baño", "debajo del patio de su casa"];

    let excusa = sujetos[Math.floor(Math.random() * sujetos.length)] + " " + 
                 acciones[Math.floor(Math.random() * acciones.length)] + " " +
                 objetos[Math.floor(Math.random() * objetos.length)] + " " +
                 lugares[Math.floor(Math.random() * lugares.length)] + ".";

    // Seleccionamos el párrafo y lo actualizamos con la excusa generada
    var excusaElement = document.getElementById("excusa");
    excusaElement.innerText = excusa;
}

// Añadimos el evento para el botón usando `getElementById` sin jQuery
var boton = document.getElementById("generarExcusaBtn");
boton.addEventListener("click", generarExcusa);
