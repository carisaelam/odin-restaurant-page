import './styles.css';
import homeContent from './home';
import menuContent from './menu';
import aboutContent from './about';
import contactContent from './contact';


const content = document.getElementById('content');
const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const aboutButton = document.querySelector('.about');
const contactButton = document.querySelector('.contact');

content.appendChild(homeContent());

homeButton.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(homeContent());
});

menuButton.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(menuContent());
});

aboutButton.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(aboutContent());
});

contactButton.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(contactContent());
});
