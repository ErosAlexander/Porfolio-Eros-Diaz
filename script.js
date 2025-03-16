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

document.addEventListener("DOMContentLoaded", function () {
    const selectAsunto = document.getElementById("asunto");
    const hiddenAsunto = document.getElementById("hidden-asunto");

    selectAsunto.addEventListener("change", function () {
        // Actualiza el campo oculto con el valor seleccionado
        hiddenAsunto.value = selectAsunto.value;
    });
});

document.getElementById("boton-cv").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "documentos/CV_Eros_Diaz.pdf";
    link.download = "CV_Eros_Diaz.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


