import './styles/style.scss';

const menuIcon = document.querySelector('.header-menu__icon');
const headerMenu = document.querySelector('.header-menu-wrapper');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    headerMenu.classList.toggle('open');
});