// rutas del admin
const express = require('express');
const router = express.Router();
const controller = require('../controllers/admin_controller')



router.get('/',controller.admin )

router.get('/create', controller.create)

router.post('/create', controller.create_post )

router.get('/edit/:id', controller.edit_id)

router.put('/edit/:id', controller.edit_put)

router.delete('/delete/:id', controller.delete )

module.exports = router;