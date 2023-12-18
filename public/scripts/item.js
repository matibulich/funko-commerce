function sumar() {
    var cantidadInput = document.getElementById("item_cantidad");//si hash porque ya busca por id!!!!   
    var cantidad = parseInt(cantidadInput.value);

    cantidad += 1;
    cantidadInput.value = cantidad;
}

function restar() {
    var cantidadInput = document.getElementById("item_cantidad");
    var cantidad = parseInt(cantidadInput.value);
   

    if(cantidad <= 1)  {
      cantidadInput = 1

    } else{  cantidad -= 1;
        cantidadInput.value = cantidad;

    }
 
}

