// controlador y coso
const path = require('path');


module.exports = {

    index: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../public/index.html'))
    },

    contacto : (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../public/pages/contacto.html'))
    },

    login: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../public/pages/login.html'))
    }



}

