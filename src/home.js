import biggie from './biggie.jpg';

export default function home () {
    const mainDisplay = document.querySelector('#main');
    mainDisplay.innerHTML = '';

    const biggieIMG = new Image();
    biggieIMG.src = biggie;
    biggieIMG.width = 300;

    const quote = document.createElement('h3');
    quote.id = 'quote';
    quote.textContent = '"Never let no one know how much dough you hold.” — The Notorious B.I.G.';

    mainDisplay.append(biggieIMG, quote);
}