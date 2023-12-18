// rutas del admin
const express = require('express');
const router = express.Router();
const {admin,create,createItem,edit,editItem,deleteItem} = require ('../controllers/admin_controller');



router.get('/', admin);

router.get('/create',  create)//devuelve html vista del create

router.post('/create',  createItem)//ruta para agregar nuevo item, no devuelve vista, crea un nuevo item en la base
router.get('/edit', (req, res) => res.redirect("/"))
router.get('/edit/:id', edit)//editar item especifico
//router.post('/edit/:id', editAction)//post en la misma ruta lo devuelve al edit



router.put('/edit/:id',  editItem)//recupero elemento para edita o eliminar
router.delete('/delete/:id', deleteItem)//eliminar

module.exports = router;