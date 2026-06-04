const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  console.log("click funcionando");
  navLinks.classList.toggle("active");
});

const form = document.querySelector('.contact-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Evita que la página se recargue o redirija
  
  const data = new FormData(form);
  
  // Enviamos los datos de fondo usando fetch
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  });

  if (response.ok) {
    form.reset(); // Limpia los campos si salió todo bien
    alert('¡Mensaje enviado con éxito! Te respondo pronto.'); // Acá podés meter un modal más lindo después
  } else {
    alert('Ups! Hubo un problema al enviar el mensaje.');
  }
});