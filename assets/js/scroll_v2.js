// Seleziona il contenitore principale
const scrollDivUpper = document.getElementById('scroll-upper');
const scrollDivUnder = document.getElementById('scroll-lower');
scrollDivUpper.classList.add('active')
scrollDivUnder.classList.add('active')

// Logica precedente per creare il contenuto
const text = "Website under construction ";
const vw = window.innerWidth;
const scrollFontSize = parseFloat(getComputedStyle(scrollDivUpper).fontSize);
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

for (let i = 0; i < 1; i++) {
    const directionClass = i % 2 === 0 ? 'scrollRightToLeft' : 'scrollLeftToRight';
    const scrollingDivUpper = createScrollingDiv(directionClass, text.repeat(repetitions));
    const scrollingDivUnder = createScrollingDiv(directionClass, text.repeat(repetitions));
    scrollDivUpper.appendChild(scrollingDivUpper);
    scrollDivUnder.appendChild(scrollingDivUnder);

}
