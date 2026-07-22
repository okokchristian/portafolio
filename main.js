document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburgerBtn");
    const navMenu = document.getElementById("navMenu");
    const header = document.querySelector("header");

    // Abrir / cerrar menú
    hamburger.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }

    });

    // Cerrar menú al hacer click en un link
    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");
            hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';

        });

    });

    // Ocultar / mostrar navbar al hacer scroll
    let lastScroll = 0;

    window.addEventListener("scroll", () => {

        // Si el menú está abierto no ocultamos el navbar
        if (navMenu.classList.contains("active")) return;

        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll && currentScroll > 80) {
            header.classList.add("nav-hidden");
        } else {
            header.classList.remove("nav-hidden");
        }

        lastScroll = currentScroll;

    });

});