// Array di URL delle immagini/gif
const images = [
    "images/chillguy.png",
    "images/worker.gif",
    "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif"
];

// Seleziona l'elemento <img> che vogliamo aggiornare
const gifElement = document.getElementById('constructionGif');

// Funzione per selezionare una GIF casuale
function changeGif() {
    // Seleziona un indice casuale dall'array di immagini
    const randomIndex = Math.floor(Math.random() * images.length);
    gifElement.src = images[randomIndex];
}

// Esegui la funzione al caricamento della pagina
window.onload = changeGif;
