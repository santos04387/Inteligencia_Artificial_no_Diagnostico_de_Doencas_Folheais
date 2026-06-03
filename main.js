const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

// Alterna o estado do menu ao clicar nas 3 barras
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('open');
});

// Fecha o menu de forma automática ao selecionar uma opção
const navLinks = document.querySelectorAll('#navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuToggle.classList.remove('open');
    });
});
