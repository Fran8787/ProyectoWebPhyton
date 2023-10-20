const menuHamburguesa = document.querySelector('.menu-hamburguesa');
const menu = document.querySelector('.menu');

menuHamburguesa.addEventListener('click', () => {
    menu.classList.toggle('mostrar-menu');
});