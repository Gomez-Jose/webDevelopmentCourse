const navToggle = document.querySelector(".navbarTop__toggle");
const navMenu = document.querySelector(".navbarTop");

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("navbarTop--visible");

    if (navMenu.classList.contains("navbarTop--visible")){
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else{
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});