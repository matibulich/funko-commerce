const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/login', (req, res) => {res.sendFile(path.resolve(__dirname, '../../public/pages/admin/admin.html'))})//vista login
router.post('/login', (req, res) => {res.sendFile(path.resolve(__dirname, '../../public/pages/admin/admin.html'))})//ruta que valida

router.get('/register', (req, res) => {res.sendFile(path.resolve(__dirname, '../../public/pages/admin/admin.html'))})//vista 
router.post('/register', (req, res) => {res.sendFile(path.resolve(__dirname, '../../public/pages/admin/admin.html'))})//crea nuevo usuario

router.get('/logout', (req, res) => {res.sendFile(path.resolve(__dirname, '../../public/pages/admin/admin.html'))})//deslogueo



module.exports = router;