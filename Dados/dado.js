document.addEventListener('DOMContentLoaded', () => {
    const diceElement = document.getElementById('dice');
    const rollButton = document.getElementById('rollButton');
    const resultElement = document.getElementById('result');
    const historyElement = document.getElementById('history');
    
    // Emojis de dados para cada número
    const diceFaces = {
        1: '⚀',
        2: '⚁',
        3: '⚂',
        4: '⚃',
        5: '⚄',
        6: '⚅'
    };
    
    // Historial de tiradas
    const rollHistory = [];
    
    rollButton.addEventListener('click', () => {
        // Deshabilitar el botón durante la animación
        rollButton.disabled = true;
        
        // Animación del dado
        let rolls = 0;
        const animationInterval = setInterval(() => {
            const randomValue = Math.floor(Math.random() * 6) + 1;
            diceElement.textContent = diceFaces[randomValue];
            rolls++;
            
            if (rolls > 10) {
                clearInterval(animationInterval);
                finalizeRoll(randomValue);
            }
        }, 100);
    });
    
    function finalizeRoll(value) {
        // Mostrar el resultado final
        diceElement.textContent = diceFaces[value];
        resultElement.textContent = `Has obtenido un ${value}!`;
        
        // Agregar al historial
        rollHistory.unshift(value);
        updateHistory();
        
        // Volver a habilitar el botón
        rollButton.disabled = false;
        
        // Agregar animación de resultado
        diceElement.style.transform = 'scale(1.1)';
        setTimeout(() => {
            diceElement.style.transform = 'scale(1)';
        }, 300);
    }
    
    function updateHistory() {
        historyElement.innerHTML = '<h3>Historial:</h3>';
        
        rollHistory.forEach((roll, index) => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.textContent = `Tirada ${index + 1}: ${roll} ${diceFaces[roll]}`;
            historyElement.appendChild(historyItem);
        });
    }
});