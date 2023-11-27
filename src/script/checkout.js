import { productos } from './data.js'


let carrito = []

function settCarrito() {
    setTimeout(() => {
        productos.forEach((el) => carrito.push(el))
        localStorage.setItem('carrito', JSON.stringify(carrito))
        console.log(carrito)
    }, 2000);
}

settCarrito() 

function setItemQty() {

}
// export default setItemQty;