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

/* SCROLL */
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

/* CONTADOR */
let count = 0;
let i = setInterval(() => {
    count++;
    document.getElementById("contador").innerText = count + "%";
    if (count >= 100) clearInterval(i);
}, 30);

/* IA FAKE */
document.getElementById("upload").addEventListener("change", () => {
    let r = ["Saudável 🌿","Doença detectada ⚠️","Inconclusivo 🤖"];
    document.getElementById("resultado").innerText =
        r[Math.floor(Math.random()*r.length)];
});

/* GRÁFICO */
let c = document.getElementById("grafico").getContext("2d");
c.fillStyle = "blue";
c.fillRect(20,50,40,100);
c.fillRect(80,30,40,120);
c.fillRect(140,10,40,140);

/* PARTÍCULAS */
let p = document.getElementById("particles");
let ctx = p.getContext("2d");
p.width = window.innerWidth;
p.height = window.innerHeight;

let pts = [];
for(let i=0;i<50;i++){
    pts.push({x:Math.random()*p.width,y:Math.random()*p.height,r:Math.random()*3});
}

function draw(){
    ctx.clearRect(0,0,p.width,p.height);
    ctx.fillStyle="rgba(100,150,255,0.5)";
    pts.forEach(pt=>{
        ctx.beginPath();
        ctx.arc(pt.x,pt.y,pt.r,0,Math.PI*2);
        ctx.fill();
        pt.y+=0.5;
        if(pt.y>p.height) pt.y=0;
    });
    requestAnimationFrame(draw);
}
draw();