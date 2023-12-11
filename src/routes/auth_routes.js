const express = require('express');
const router = express.Router();
const {login, respLogin,register,respRegister} = require ('../controllers/auth_controller');
const path = require('path');


router.get('/login', login);//vista login
router.post('/login', respLogin);//ruta que valida

router.get('/register', register);//vista 
router.post('/register',respRegister);//crea nuevo usuario

router.get('/logout', (req, res) => {res.sendFile(path.resolve(__dirname, ''))})//deslogueo



module.exports = router;