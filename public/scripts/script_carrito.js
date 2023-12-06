document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("incrementar").addEventListener("click", function() {
        var valorElemento = document.getElementById("valor");
        var valor = parseInt(valorElemento.innerText);
        valorElemento.innerText = valor + 1;
    });

    document.getElementById("decrementar").addEventListener("click", function() {
        var valorElemento = document.getElementById("valor");
        var valor = parseInt(valorElemento.innerText);
        if (valor > 0) {
            valorElemento.innerText = valor - 1;
        }
    });
});