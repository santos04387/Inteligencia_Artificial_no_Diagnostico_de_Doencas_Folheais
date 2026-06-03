const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

// Escuta os cliques no botão dos 3 traços
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Abre ou fecha a caixinha dos menus
    menuToggle.classList.toggle('open'); // Roda as barrinhas para formar o caractere 'X'
});

// Garante que o menu feche sozinho ao clicar em qualquer item (ótimo para telas touch)
const navLinks = document.querySelectorAll('#navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuToggle.classList.remove('open');
    });
});
