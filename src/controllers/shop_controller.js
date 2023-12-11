// controladores shop
const path = require('path');


module.exports = {

    shop: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../public/pages/shop.html'))
    },

    item_id: (req, res) => {
        res.send("visualizar un solo item por id")
    },

    item_id_add: (req, res) => {
        res.send("Ruta para agregar un producto")
     },

     carrito: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../public/pages/carrito.html'))
    },

    carrito_add: (req, res) =>
    res.send(' Esta ruta agraga un nuevo item al carrito')



}