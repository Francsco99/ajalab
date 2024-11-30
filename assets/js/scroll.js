// Seleziona il contenitore principale
const scrollDiv = document.getElementById('scroll');

// Aggiungi l'evento "mouseenter" per attivare l'animazione
scrollDiv.addEventListener('mouseenter', () => {
    scrollDiv.classList.add('active'); // Aggiungi la classe active
});

// Aggiungi l'evento "mouseleave" per fermare l'animazione
scrollDiv.addEventListener('mouseleave', () => {
    scrollDiv.classList.remove('active'); // Rimuovi la classe active
});

// Logica precedente per creare il contenuto
const text = "Website under construction ";
const vw = window.innerWidth;
const scrollFontSize = parseFloat(getComputedStyle(scrollDiv).fontSize);
const repetitions = Math.ceil(vw / scrollFontSize) + 1;

const createScrollingDiv = (directionClass, repeatedText) => {
    const divElement = document.createElement('div');
    divElement.classList.add(directionClass);

    for (let i = 0; i < 2; i++) {
        const textElement = document.createElement('p');
        textElement.textContent = repeatedText;
        divElement.appendChild(textElement);
    }

    return divElement;
};

for (let i = 0; i < 5; i++) {
    const directionClass = i % 2 === 0 ? 'scrollRightToLeft' : 'scrollLeftToRight';
    const scrollingDiv = createScrollingDiv(directionClass, text.repeat(repetitions));
    scrollDiv.appendChild(scrollingDiv);
}
