// controladores admin 

const path = require('path');

module.exports = {
    admin: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../public/pages/admin/admin.html')) //entramos al admin
    },

    create:  (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../public/pages/admin/create.html')) //agregar un nuevo item vista
    },

    create_post: (req, res) => {
        res.send('Ruta para que al hacer click en "AGREGAR PRODUCTO" lo agregue') //ruta para agregar un nuevo item
    },

    edit_id: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../public/pages/admin/edit.html')) // vista agregar un nuevo item v
    },

    edit_put:(req, res) => {
        res.send('Ruta para modificar el producto') //ruta para modificar agregar un nuevo item
    },

    delete: (req, res) => {
        res.send('Ruta para borrar el producto') 
    }

}