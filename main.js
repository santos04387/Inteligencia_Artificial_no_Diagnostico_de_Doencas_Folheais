function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.style.left = (menu.style.left === "0px") ? "-250px" : "0px";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function topo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ANIMAÇÃO SCROLL */
window.addEventListener("scroll", () => {
    let elements = document.querySelectorAll(".reveal");

    elements.forEach(el => {
        let pos = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (pos < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});