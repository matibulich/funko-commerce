const express = require('express');
const router = express.Router();
const controller = require("../controllers/auth_controller")
const path = require('path');

/* validador*/
const validateInput = require("../middlewares/validator")


router.get('/login', controller.login);//vista login
router.post('/login', validateInput, controller.respLogin);//ruta que valida

//router.get('/register', register);//vista 
//router.post('/register',respRegister);//crea nuevo usuario

router.get('/logout', controller.logout)//deslogueo



module.exports = router;