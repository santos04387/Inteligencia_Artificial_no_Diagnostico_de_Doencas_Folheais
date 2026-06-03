 const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

// Escuta o clique no botão das 3 barras
menuToggle.addEventListener('click', () => {
    // Abre ou fecha a janela com a lista de links
    navbar.classList.toggle('active');
    
    // Altera a classe CSS do botão para transformá-lo visualmente em um 'X'
    menuToggle.classList.toggle('open');
});

// Fecha o menu de forma automática ao clicar em qualquer link (melhora o uso no smartphone)
const navLinks = document.querySelectorAll('#navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuToggle.classList.remove('open');
    });
});
