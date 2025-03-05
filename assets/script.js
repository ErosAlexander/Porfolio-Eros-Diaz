document.addEventListener('mousemove', function(event) {
    const follower = document.querySelector('.cursor-follower');
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Ajusta la posición del cuadrado con un retraso
    follower.style.left = `${mouseX - 6.0}px`; // Ajusta para centrar el cuadrado
    follower.style.top = `${mouseY - 6.0}px`; // Ajusta para centrar el cuadrado
});

document.addEventListener("DOMContentLoaded", () => {
    const lista = document.querySelector(".main-plataformas-elementos ul");
    const items = lista.innerHTML; // Guarda los elementos originales
    lista.innerHTML += items; // Duplica la lista para un desplazamiento sin cortes
});
