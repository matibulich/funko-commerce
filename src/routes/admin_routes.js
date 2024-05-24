const express = require('express');
const router = express.Router();
const controller = require ('../controllers/admin_controller');
const upload = require("../middlewares/uploadFiles")
const {isLogged} = require("../middlewares/auth")


//////////////////////////////////////////////////////////////////////////////
 


router.get('/', isLogged, controller.admin);

router.get('/create', isLogged, controller.create)//devuelve html vista del create
router.post('/create', isLogged, upload.array("images", 2), controller.createItem)//ruta para agregar nuevo item, no devuelve vista, crea un nuevo item en la base

 router.get('/edit/:id_item', isLogged, controller.edit)//editar item especifico
 router.put('/edit/:id_item', isLogged, upload.array("images", 2),  controller.editItem)//impacta la edicion

 router.delete('/delete/:id_item', isLogged, controller.deleteItem)



 module.exports = router;