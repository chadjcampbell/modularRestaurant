import '../src/style.scss';
import frame from './frame';
import home from './home';
import menuload from './menu';
import contact from './contact';

frame();
home();

const homebtn = document.querySelector('#homebtn');
homebtn.addEventListener('click', home);

const menubtn = document.querySelector('#menubtn');
menubtn.addEventListener('click', menuload);

const contactbtn = document.querySelector('#contactbtn');
contactbtn.addEventListener('click', contact);