// rutas de la tienda
const express = require('express');
const router = express.Router();
const controller = require('../controllers/shop_controller');

router.get('/', controller.shop);
//TRAE TODOS LOS ITEMS
router.get('/item/:id_item', controller.getItem); //TRAE UN SOLO ITEM
//router.post('/item/update:id_item', controller.updateCart);

router.post('/item/add/:id_item', controller.addItem)
router.get('/carrito', controller.carrito); //mostrar vista carrito
router.post('/carrito') //agregar item al carrito

module.exports = router;