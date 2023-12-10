// rutas del admin
const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', (req, res) => {res.sendFile(path.resolve(__dirname, '../../public/pages/admin/admin.html'))})

router.get('/create', (req, res) => {res.sendFile(path.resolve(__dirname, '../../public/pages/admin/admin.html'))})//devuelve html vista del create

router.post('/create', (req, res) => {res.sendFile(path.resolve(__dirname, '../../public/pages/admin/admin.html'))})//ruta para agregar nuevo item, no devuelve vista, crea un nuevo item en la base

router.get('/edit/:id', (req, res) => {res.sendFile(path.resolve(__dirname, '../../public/pages/admin/admin.html'))})//editar item especifico

router.put('/edit/:id', (req, res) => {res.sendFile(path.resolve(__dirname, '../../public/pages/admin/admin.html'))})//recupero elemento para edita o eliminar
router.delete('/delete/:id', (req, res) => {res.sendFile(path.resolve(__dirname, '../../public/pages/admin/admin.html'))})//eliminar

module.exports = router;