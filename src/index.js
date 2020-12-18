import './styles/style.scss';
import html from './index.html';

const menuIcon = document.querySelector('.header-menu__icon');
const headerMenu = document.querySelector('.header-menu-wrapper');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    headerMenu.classList.toggle('open');
})




