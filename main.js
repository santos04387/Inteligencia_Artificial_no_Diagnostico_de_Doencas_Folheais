const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('#navbar a');

// Liga/Desliga as classes de abertura do menu
const toggleMenu = () => {
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('open');
};

// Abre e fecha no botão hambúrguer
menuToggle.addEventListener('click', toggleMenu);

// Fecha o menu ao clicar em qualquer link
navLinks.forEach(link => link.addEventListener('click', toggleMenu));
