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

});