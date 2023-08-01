const layer = document.querySelector('.opacity-layer');
const headerLayer = document.querySelector('.opacity-layer-header');
const menuIcon = document.querySelector('.icon-menu');
const closeIcon = document.querySelector('.icon-menu-close');
const navBar = document.querySelector('.nav-bar');


const toggleMenu = () => {

    navBar.classList.toggle('tranformed');

    layer.classList.toggle('hidden-op');    
    headerLayer.classList.toggle('hidden-op');
    closeIcon.classList.toggle('hidden-op');
    closeIcon.classList.toggle('icon-close-rotate');
    menuIcon.classList.toggle('hidden');

}
closeIcon.addEventListener('click', toggleMenu);
layer.addEventListener('click', toggleMenu);
headerLayer.addEventListener('click', toggleMenu);

menuIcon.addEventListener('click', toggleMenu);

