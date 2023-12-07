// rutas del main: index, login, register, etc
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/index.html'))
})

router.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/pages/login.html'))
})

router.get('/contacto', (req, res) => 
    res.send
    ('nadie hizo el contacto :((:(:('))




module.exports = router;