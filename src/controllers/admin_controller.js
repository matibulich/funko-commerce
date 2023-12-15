const path = require('path');
const articulos = require('../data/articulos.json')



module.exports = { 
    admin: (req, res) => res.render('admin/admin',{title: "Admin", role: "admin", articulos}),
    create: (req, res) => res.render('admin/create',{title: "Create", role: "admin"}),       
    edit: (req, res) => res.render('admin/edit',{title: "Edit", role: "admin"}),


    editItem: (req, res) => res.send('impacta la modificacion'),
    createItem: (req, res) => res.send('agregar'),
    deleteItem: (req, res) => {res.render(path.resolve(__dirname,'../views/admin/edit.ejs'))},
    
        
        
};
