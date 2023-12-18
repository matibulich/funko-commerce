document.addEventListener("DOMContentLoaded", function () {
    // obtiene los elementos necesarios
    var valorElementos = document.querySelectorAll(".cantidad span");
    var precioElementos = document.querySelectorAll(".fount");
    var deleteIcons = document.querySelectorAll(".delete");

    // Precio por unidad
    var precioOriginal = 1799.99;

    // Obtén elementos del resumen
    var cantidadElementoResumen = document.querySelector(".layout-resume");
    var subtotalElementoResumen = document.querySelector(".layout-resume-subtotal");
    var totalElementoResumen = document.querySelector(".layout-total");

    // Inicializar variables para resumen
    var cantidadTotal = 0;
    var subtotalTotal = 0;
    var totalTotal = 0;



    // Función para decrementar la cantidad total después de eliminar un producto
    function decrementarCantidadTotal(cantidad) {
        cantidadTotal -= cantidad;
        if (cantidadTotal < 0) {
            cantidadTotal = 0;
        }
        actualizarResumen();
    }

    // Función para actualizar el precio total
    function actualizarPrecioTotal(index) {
        var valor = parseInt(valorElementos[index].innerText);
        var precioTotal = cantidadTotal * precioOriginal;
        precioElementos[index].innerText = "$" + precioTotal.toFixed(2);

        // Actualizar resumen
        actualizarResumen();
    }

    // Función para eliminar el producto
    function eliminarProducto(index) {
        // Obtener cantidad actual antes de eliminar
        var cantidadEliminada = parseInt(valorElementos[index].innerText);

        // Elimina el elemento padre, que es el contenedor del producto
        var contenedorProducto = deleteIcons[index].closest('.flex-conteiner');
        contenedorProducto.parentNode.removeChild(contenedorProducto);

        // Actualizar resumen después de eliminar
        decrementarCantidadTotal(cantidadEliminada);
    }

    // Función para mostrar el cuadro de diálogo
    function mostrarDialogo(index) {
        var confirmacion = confirm("¿Seguro que desea eliminar el producto?");
        if (confirmacion) {
            eliminarProducto(index);
        }
    }

    // Función para actualizar el resumen
    function actualizarResumen() {
        cantidadTotal = 0;
        subtotalTotal = 0;
        totalTotal = 0;

        // Calcular cantidad total y subtotal
        valorElementos.forEach(function (valorElemento, index) {
            var valor = parseInt(valorElemento.innerText);
            cantidadTotal += valor;
            subtotalTotal += valor * precioOriginal;
            totalTotal += valor * precioOriginal;
        });

        // Actualizar elementos del resumen
        cantidadElementoResumen.innerText = cantidadTotal;
        subtotalElementoResumen.innerText = "$" + subtotalTotal.toFixed(2);
        totalElementoResumen.innerText = "$" + subtotalTotal.toFixed(2);
    }

    // Manejar eventos para cada producto
    deleteIcons.forEach(function (deleteIcon, index) {
        // Evento para incrementar la cantidad
        deleteIcon.closest('.flex-conteiner').querySelector(".suma").addEventListener("click", function () {
            var valor = parseInt(valorElementos[index].innerText);
            valorElementos[index].innerText = valor + 1;

            // Incrementar la cantidad total
            cantidadTotal++;
            actualizarPrecioTotal(index);
        });

        // Evento para decrementar la cantidad
        deleteIcon.closest('.flex-conteiner').querySelector(".resta").addEventListener("click", function () {
            var valor = parseInt(valorElementos[index].innerText);
            if (valor > 0) {
                valorElementos[index].innerText = valor - 1;

                // Decrementar la cantidad total
                cantidadTotal--;
                if (cantidadTotal < 0) {
                    cantidadTotal = 0;
                }

                // Actualizar resumen después de decrementar
                actualizarPrecioTotal(index);
            }

            // Si la cantidad llega a cero, mostrar el cuadro de diálogo
            if (valor === 1) {
                mostrarDialogo(index);
            }
        });

        // Evento para mostrar el cuadro de diálogo al hacer clic en el icono
        deleteIcon.addEventListener("click", function () {
            mostrarDialogo(index);
        });
    });


});
