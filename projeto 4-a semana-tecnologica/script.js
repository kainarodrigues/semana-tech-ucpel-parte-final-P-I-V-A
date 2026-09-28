const slides = document.querySelectorAll(".slide");
const anterior = document.querySelector(".btn-anterior");
const proximo = document.querySelector(".btn-proximo");

let slideAtual = 0;

proximo.addEventListener("click", function() {
    slides[slideAtual].classList.remove("ativo");

    slideAtual++;

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    slides[slideAtual].classList.add("ativo");
});

anterior.addEventListener("click", function() {
    slides[slideAtual].classList.remove("ativo");

    slideAtual--;

    if (slideAtual < 0) {
        slideAtual = slides.length - 1;
    }

    slides[slideAtual].classList.add("ativo");
});