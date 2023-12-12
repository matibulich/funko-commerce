// rutas de la tienda
const express = require('express');
const router = express.Router();
const controller = require('../controllers/shop_controller');

router.get('/', controller.shop);
router.get('/item/:id', controller.item);
router.post('/item:id/add', controller.addItem);
router.get('/carrito', controller.carrito);
router.post('/carrito', controller.addCarrito);

module.exports = router;