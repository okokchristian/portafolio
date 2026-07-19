document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburgerBtn");
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");
        document.body.classList.toggle("menu-open");

        if (navLinks.classList.contains("active")) {
            hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
            document.body.classList.remove("menu-open");

            hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });

    });

    // --- OCULTAR/MOSTRAR NAVBAR AL HACER SCROLL ---
    let lastScroll = 0;
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        // Si el menú está abierto, no ocultamos el header
        if (navLinks.classList.contains("active")) return;

        if (currentScroll > lastScroll && currentScroll > 80) {
            header.classList.add("nav-hidden"); // bajando -> ocultar
        } else {
            header.classList.remove("nav-hidden"); // subiendo -> mostrar
        }

        lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    });

});