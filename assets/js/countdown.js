// Funzione per aggiornare il countdown
function updateCountdown() {
    const clockElement = document.getElementById('countdown');
    const now = new Date();
    
    // Calcola il prossimo 1° gennaio
    const nextYear = now.getMonth() === 0 && now.getDate() === 1 ? now.getFullYear() : now.getFullYear() + 1;
    const newYear = new Date(nextYear, 0, 1, 0, 0, 0); // 1 gennaio alle 00:00:00
    
    // Calcola il tempo rimanente in millisecondi
    const timeDifference = newYear - now;
    
    // Converte in ore, minuti, secondi
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    // Aggiorna il contenuto dell'elemento con stile per le unità
    clockElement.innerHTML = `
        ${days}<span class="unit">d</span> 
        ${String(hours).padStart(2, '0')}<span class="unit">h</span> 
        ${String(minutes).padStart(2, '0')}<span class="unit">m</span> 
        ${String(seconds).padStart(2, '0')}<span class="unit">s</span>
    `;
}

// Aggiorna il countdown ogni secondo
setInterval(updateCountdown, 1000);

// Avvia subito il countdown al caricamento della pagina
updateCountdown();
