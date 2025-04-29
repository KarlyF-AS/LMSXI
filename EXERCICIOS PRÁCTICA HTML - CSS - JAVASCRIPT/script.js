// Relaciones del juego: qué le gana a qué
const reglas = {
    pedra: ['tesoiras', 'lagarto'],
    papel: ['pedra', 'spock'],
    tesoiras: ['papel', 'lagarto'],
    lagarto: ['papel', 'spock'],
    spock: ['pedra', 'tesoiras']
};

// Textos explicativos de los resultados
const explicaciones = {
    pedra: {
        tesoiras: 'Pedra esmaga tesoiras',
        lagarto: 'Pedra esmaga lagarto'
    },
    papel: {
        pedra: 'Papel cobre pedra',
        spock: 'Papel refuta Spock'
    },
    tesoiras: {
        papel: 'Tesoiras cortan papel',
        lagarto: 'Tesoiras decapitan lagarto'
    },
    lagarto: {
        papel: 'Lagarto come papel',
        spock: 'Lagarto envenena Spock'
    },
    spock: {
        pedra: 'Spock vaporiza pedra',
        tesoiras: 'Spock rompe tesoiras'
    }
};

// Variables para almacenar las selecciones
let seleccionJugador1 = null;
let seleccionJugador2 = null;

// Inicialización del juego
document.addEventListener('DOMContentLoaded', function() {
    // Configurar eventos para las opciones del jugador 1
    document.querySelectorAll('#jugador1 .opciones img').forEach(opcion => {
        opcion.addEventListener('click', function() {
            seleccionarOpcion(this, 1);
        });
    });
    
    // Configurar eventos para las opciones del jugador 2
    document.querySelectorAll('#jugador2 .opciones img').forEach(opcion => {
        opcion.addEventListener('click', function() {
            seleccionarOpcion(this, 2);
        });
    });
    
    // Configurar evento para el botón de jugar
    document.getElementById('jugar').addEventListener('click', jugar);
    document.getElementById('jugar').disabled = true;
});

// Función para seleccionar una opción
function seleccionarOpcion(elemento, jugador) {
    // Deseleccionar todas las opciones del jugador
    const opciones = document.querySelectorAll(`#jugador${jugador} .opciones img`);
    opciones.forEach(op => op.classList.remove('seleccionada'));
    
    // Seleccionar la opción clickeada
    elemento.classList.add('seleccionada');
    
    // Guardar la selección
    const opcion = elemento.dataset.opcion;
    if (jugador === 1) {
        seleccionJugador1 = opcion;
        document.getElementById('seleccion1').innerHTML = `<img src="pedrapapeltesoiraslagartospock/${opcion}.png" alt="${opcion}" class="seleccionada">`;
    } else {
        seleccionJugador2 = opcion;
        document.getElementById('seleccion2').innerHTML = `<img src="pedrapapeltesoiraslagartospock/${opcion}.png" alt="${opcion}" class="seleccionada">`;
    }
    
    // Habilitar el botón de jugar si ambos jugadores han seleccionado
    if (seleccionJugador1 && seleccionJugador2) {
        document.getElementById('jugar').disabled = false;
    }
}

// Función para determinar el resultado del juego
function jugar() {
    let resultado = '';
    
    if (seleccionJugador1 === seleccionJugador2) {
        resultado = 'Empate!';
    } else if (reglas[seleccionJugador1].includes(seleccionJugador2)) {
        resultado = `Xogador 1 gaña! ${explicaciones[seleccionJugador1][seleccionJugador2]}`;
    } else {
        resultado = `Xogador 2 gaña! ${explicaciones[seleccionJugador2][seleccionJugador1]}`;
    }
    
    document.getElementById('resultado').innerHTML = resultado;
}