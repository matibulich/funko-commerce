const path = require('path');



module.exports = { 
    admin: (req, res) => {res.render(path.resolve(__dirname,'../views/admin/admin.ejs'))},

    create: (req, res) => {res.render(path.resolve(__dirname,'../views/admin/create.ejs'))},
    createItem: (req, res) => res.send('agregar'),
    
    edit: (req, res) => {res.render(path.resolve(__dirname,'../views/admin/edit.ejs'))},
    editItem: (req, res) => res.send('impacta la modificacion'),
    
    deleteItem: (req, res) => {res.render(path.resolve(__dirname,'../views/admin/edit.ejs'))},
    
        
        
};
