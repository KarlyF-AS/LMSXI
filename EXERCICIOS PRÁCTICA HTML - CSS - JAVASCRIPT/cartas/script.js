// Array con todas las cartas disponibles
const palos = ['basto', 'copa', 'espada', 'oro'];
const valores = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

// Función para generar una baraja completa
function crearBaraja() {
    let baraja = [];
    for (let palo of palos) {
        for (let valor of valores) {
            baraja.push({
                palo: palo,
                valor: valor,
                // Imágenes en carpeta 'baralla' con formato "basto1.png"
                imagen: `baralla/${palo}${valor}.png`
            });
        }
    }
    return baraja;
}

// Función para obtener una mano aleatoria de 7 cartas
function obtenerMano(baraja) {
    // Copiamos la baraja para no modificar la original
    let barajaTemp = [...baraja];
    let mano = [];
    
    for (let i = 0; i < 7; i++) {
        // Seleccionamos un índice aleatorio
        const indiceAleatorio = Math.floor(Math.random() * barajaTemp.length);
        // Añadimos la carta a la mano
        mano.push(barajaTemp[indiceAleatorio]);
        // Eliminamos la carta de la baraja temporal para no repetirla
        barajaTemp.splice(indiceAleatorio, 1);
    }
    return mano;
}

// Función para mostrar las cartas en el HTML
function mostrarMano(mano) {
    const contenedorCartas = document.getElementById('cartas');
    contenedorCartas.innerHTML = '';
    
    mano.forEach(carta => {
        const elementoCarta = document.createElement('div');
        elementoCarta.className = 'carta';
        
        const imagenCarta = document.createElement('img');
        imagenCarta.src = carta.imagen;
        imagenCarta.alt = `${carta.valor} de ${carta.palo}`;
        // Añadimos un manejador de errores por si falta alguna imagen
        imagenCarta.onerror = function() {
            this.src = 'placeholder.jpg'; // Puedes crear una imagen de reserva
           // this.alt = 'Imagen no disponible';
        };
        
        elementoCarta.appendChild(imagenCarta);
        contenedorCartas.appendChild(elementoCarta);
    });
}

// Función para mostrar las estadísticas de los palos
function mostrarEstadisticas(mano) {
    const contadorPalos = {
        basto: 0,
        copa: 0,
        espada: 0,
        oro: 0
    };
    
    mano.forEach(carta => {
        contadorPalos[carta.palo]++;
    });
    
    const estadisticasHTML = `
        <p>Cartas por palo:</p>
        <p>Bastos: ${contadorPalos.basto}</p>
        <p>Copas: ${contadorPalos.copa}</p>
        <p>Espadas: ${contadorPalos.espada}</p>
        <p>Oros: ${contadorPalos.oro}</p>
    `;
    
    document.getElementById('estadisticas').innerHTML = estadisticasHTML;
}

// Función principal que se ejecuta al cargar la página
function iniciar() {
    const baraja = crearBaraja();
    let mano = obtenerMano(baraja);
    
    mostrarMano(mano);
    mostrarEstadisticas(mano);
    
    // Evento para el botón de nueva mano
    document.getElementById('nuevaMan').addEventListener('click', () => {
        mano = obtenerMano(baraja);
        mostrarMano(mano);
        mostrarEstadisticas(mano);
    });
}

// Ejecutamos la función principal cuando se carga la página
document.addEventListener('DOMContentLoaded', iniciar);