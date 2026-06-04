const form = document.querySelector('.contact-form');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evita que la página se recargue
    
    const data = new FormData(form);
    
    // Enviamos los datos de fondo usando fetch a Formspree
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset(); // Limpia los campos si salió todo bien
      alert('¡Mensaje enviado con éxito! Te respondo pronto.');
    } else {
      alert('Ups! Hubo un problema al enviar el mensaje.');
    }
  });
}