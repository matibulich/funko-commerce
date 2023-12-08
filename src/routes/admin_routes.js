// rutas del admin
const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/pages/admin/admin.html')) //entramos al admin
})

router.get('/create', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/pages/admin/create.html')) //agregar un nuevo item vista
})

router.post('/create', (req, res) => {
    res.send('Ruta para que al hacer click en "AGREGAR PRODUCTO" lo agregue') //ruta para agregar un nuevo item
})

router.get('/edit/:id', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/pages/admin/edit.html')) // vista agregar un nuevo item v
})

router.put('/edit/:id', (req, res) => {
    res.send('Ruta para ver modificar el producto') //ruta para modificar agregar un nuevo item
})

router.delete('/delete/:id', (req, res) => {
    res.send('Ruta para borrar el producto') //ruta para modificar agregar un nuevo item
})

module.exports = router;