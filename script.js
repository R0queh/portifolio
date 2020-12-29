var hamburguer= document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu")
});

/* Método alternativo de se fazer
document.querySelector(".hamburuger").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu"));*/