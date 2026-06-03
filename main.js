const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('#navbar a');

// Função para abrir/fechar o menu
const toggleMenu = () => {
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('open');
};

// Evento do botão hambúrguer
menuToggle.addEventListener('click', toggleMenu);

// Fecha o menu ao clicar em qualquer item da lista
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuToggle.classList.remove('open');
    });
});
