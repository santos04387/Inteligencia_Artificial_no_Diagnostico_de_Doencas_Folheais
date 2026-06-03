const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

// Aciona a abertura/fechamento ao clicar nos 3 traços do menu hambúrguer
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Exibe a lista suspensa de opções
    menuToggle.classList.toggle('open'); // Executa a transformação visual para o 'X'
});

// Fecha o menu de forma inteligente ao clicar em qualquer uma das opções de navegação
const navLinks = document.querySelectorAll('#navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuToggle.classList.remove('open');
    });
});
