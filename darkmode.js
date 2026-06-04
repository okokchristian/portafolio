// 1. Ejecutar de inmediato el cambio de tema para evitar el parpadeo blanco
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

// 2. Esperar a que el HTML exista para activar el clic
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById('themeToggle');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');

            if (document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
});