document.addEventListener("DOMContentLoaded", function () {
  if(document.querySelector("#contactForm")){

    const btnAbrirPopUpCont = document.querySelector("#btn-abrir-popUp");
    const btnCerrarPopUpCont = document.querySelector("#btn-cerrar-popUp");
    const popUpContacto = document.querySelector("#popUpContacto");
    const datosContacto = document.querySelector("#datosContacto");//content
  
    btnAbrirPopUpCont.addEventListener("click", () => {
      const contactForm = document.querySelector("#contactForm");
  
      if (contactForm.reportValidity()) {   //se mandaba sin chequear que este lleno el form
        const nombre = document.querySelector("#cont_nombre").value;
        const apellido = document.querySelector("#cont_apellido").value;
        const email = document.querySelector("#cont_email").value;
        const mensaje = document.querySelector("#cont_mensaje").value;
  
        datosContacto.innerHTML = `<p>Nombre: ${nombre}</p><p>Apellido: ${apellido}</p><p>Email: ${email}</p><p>Mensaje: ${mensaje}</p>`;//levanta toda la data para mandar a la pantalla
  
        popUpContacto.showModal();
      }
    });
  
    btnCerrarPopUpCont.addEventListener("click", () => {
        popUpContacto.close();
    });
  }
  });