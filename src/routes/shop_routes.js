// rutas de la tienda
const express = require('express');
const router = express.Router();
const path = require('path')

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/pages/shop.html'))
})

router.get('/item:id', (req, res) => {
    res.send("visualizar un solo item por id")
})

router.post('/item:id/add', (req, res) => {
    res.send("Ruta para agregar un producto")
 })

router.get('/carrito', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/pages/carrito.html'))
})

 router.post('/carrito', (req, res) =>
    res.send(' Esta ruta agraga un nuevo item al carrito'))  

module.exports = router;