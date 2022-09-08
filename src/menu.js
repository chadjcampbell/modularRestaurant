import { main } from '@popperjs/core';
import menu from './menu.jpg';

export default function menuload() {
    const mainDisplay = document.querySelector('#main');
    mainDisplay.innerHTML = '';
    
    const menuIMG = new Image();
    menuIMG.src = menu;
    menuIMG.style.width = '80vw';
    menuIMG.style.minwidth = 300;
    menuIMG.style.height = 'auto';

    mainDisplay.append(menuIMG);
}