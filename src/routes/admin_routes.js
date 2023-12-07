// rutas del admin
const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/pages/admin/admin.html')) //entramos al admin
})


module.exports = router;