import pizzabg from './pizzabg.jpg';

export default function frame() {
    const content = document.querySelector('#content');

    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    const home = document.createElement('a');
    home.textContent = 'Home';

    const menu = document.createElement('a');
    menu.textContent = 'Menu';

    const contact = document.createElement('a');
    contact.textContent = 'Contact';

    navbar.append(home, menu, contact)

    const mainDisplay = document.createElement('div');

    const footer = document.createElement('footer');
    footer.innerHTML = 'Made by Chad J Campbell - You can check out my &nbsp &nbsp <a href="https://github.com/chadjcampbell">GitHub Here</a>';

    content.append(navbar, mainDisplay, footer);
}
 