function sumar() {
    var cantidadInput = document.getElementById("item_cantidad");
    var cantidad = parseInt(cantidadInput.value);

    cantidad += 1;
    cantidadInput.value = cantidad;
}

function restar() {
    var cantidadInput = document.getElementById("item_cantidad");
    var cantidad = parseInt(cantidadInput.value);

    if(cantidad <= 0)  {
      cantidadInput = 0

    } else{  cantidad -= 1;
        cantidadInput.value = cantidad;

    }
 
}

