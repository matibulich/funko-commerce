// rutas de la tienda
const express = require('express');
const router = express.Router();
const controller = require('../controllers/shop_controller')


router.get('/', controller.shop )

router.get('/item:id', controller.item_id )

router.post('/item:id/add',controller.carrito_add )

router.get('/carrito',controller.carrito )

 router.post('/carrito', controller.carrito_add )  

module.exports = router;