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

/* SCROLL ANIMATION */
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

/* CONTADOR */
let count = 0;
let intervalo = setInterval(() => {
    count++;
    document.getElementById("contador").innerText = count + "%";
    if (count >= 100) clearInterval(intervalo);
}, 30);

/* IA FAKE */
document.getElementById("upload").addEventListener("change", () => {
    let resultados = ["Saudável 🌿", "Doença detectada ⚠️", "Análise inconclusiva 🤖"];
    let r = resultados[Math.floor(Math.random() * resultados.length)];
    document.getElementById("resultado").innerText = r;
});

/* GRÁFICO */
let canvas = document.getElementById("grafico");
let ctx = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 150;

ctx.fillStyle = "blue";
ctx.fillRect(10, 50, 40, 100);
ctx.fillRect(70, 30, 40, 120);
ctx.fillRect(130, 10, 40, 140);

/* PARTÍCULAS */
let p = document.getElementById("particles");
let c = p.getContext("2d");

p.width = window.innerWidth;
p.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 50; i++) {
    particles.push({
        x: Math.random() * p.width,
        y: Math.random() * p.height,
        r: Math.random() * 3
    });
}

function draw() {
    c.clearRect(0, 0, p.width, p.height);
    c.fillStyle = "rgba(100,150,255,0.5)";

    particles.forEach(pt => {
        c.beginPath();
        c.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
        c.fill();

        pt.y += 0.5;
        if (pt.y > p.height) pt.y = 0;
    });

    requestAnimationFrame(draw);
}

draw();