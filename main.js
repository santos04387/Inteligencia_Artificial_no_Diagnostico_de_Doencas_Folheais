const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    // Abre/fecha o menu de links
    navbar.classList.toggle('active');
    
    // Transforma as 3 barrinhas em um botão de fechar (X)
    menuToggle.classList.toggle('open');
});

// Garante uma boa experiência fechando o menu ao clicar em qualquer link
const navLinks = document.querySelectorAll('#navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuToggle.classList.remove('open');
    });
});
