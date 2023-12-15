

document.addEventListener('DOMContentLoaded', function() {
    
  
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', function(event) {
      // Agregamos un listener para el evento submit del formulario
  
      event.preventDefault(); // Evitamos el envío predeterminado del formulario
  
      // Obtener valores del formulario
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const email = document.getElementById('email').value;
      const mensaje = document.getElementById('mensaje').value;
  
      // Validar que todos los campos estén completos antes de mostrar la ventana flotante
      if (nombre && apellido && email && mensaje) {
        // Mostrar valores en la pantalla flotante
        document.getElementById('infoNombre').innerText = nombre;
        document.getElementById('infoApellido').innerText = apellido;
        document.getElementById('infoEmail').innerText = email;
        document.getElementById('infoMensaje').innerText = mensaje;
  
        // Mostrar la pantalla flotante
        document.getElementById('pantallaFlotante').classList.remove('oculto');
      } else {
        alert('Completa todos los campos del formulario antes de enviar.');
      }
    });
  
    document.getElementById('cerrarPantallaFlotante').addEventListener('click', function() {
      // Agregamos un listener para cerrar la pantalla flotante al hacer clic en el botón "Aceptar"
      cerrarPantallaFlotante();
    });
  });
  
  function cerrarPantallaFlotante() {
    pantallaFlotante.classList.add('oculto');
  }