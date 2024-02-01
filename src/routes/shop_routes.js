// rutas de la tienda
const express = require('express');
const router = express.Router();
const controller = require('../controllers/shop_controller');

router.get('/', controller.shop);
router.get('/items', controller.getItems); //TRAE TODOS LOS ITEMS
router.get('/items/:id_item', controller.getItem); //TRAE UN SOLO ITEM
router.post('/item/:id/update', controller.updateCart);
router.get('/carrito', controller.carrito);
router.delete('/item/:id/', controller.deleteItem)

module.exports = router;