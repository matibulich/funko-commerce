const path = require('path');



module.exports = { 
    admin: (req, res) => res.render('admin/admin',{title: "Admin", role: "admin"}),
    create: (req, res) => res.render('admin/create',{title: "Create", role: "admin"}),       
    edit: (req, res) => res.render('admin/edit',{title: "Edit", role: "admin"}),


    editItem: (req, res) => res.send('impacta la modificacion'),
    createItem: (req, res) => res.send('agregar'),
    deleteItem: (req, res) => {res.render(path.resolve(__dirname,'../views/admin/edit.ejs'))},
    
        
        
};
