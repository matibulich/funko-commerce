// rutas de articulos, maneja solo los articulos del sitio
const express = require('express');
const router = express.Router();

router.get('/characters', (req, res)=> 
 res.send('Va a IR buscar los articulos al articulos.JSON'));

 router.get('/character:id', (req, res)=>{

    const id = req.params.id;

    res.send(`Va a IR buscar los articulos POR ${id} al articulos.JSON`);
 })


 router.post('/character/create', (req, res)=> 
 res.send('Crea un articulo en el json'));

 router.delete('/character/:id/delete', (req, res)=> 
 res.send('Elimina articulos por ID del json'));

 module.exports = router;