// rutas del main: index, login, register, etc
const express = require('express');
const router = express.Router();
const controller = require('../controllers/main_controller')

router.get('/', controller.index )

router.get('/login', controller.login )



module.exports = router;