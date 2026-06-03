const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

// Escuta o clique nas 3 barras do menu
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('open');
});

// Fecha o menu de forma automática ao clicar em qualquer link
const navLinks = document.querySelectorAll('#navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuToggle.classList.remove('open');
    });
});
