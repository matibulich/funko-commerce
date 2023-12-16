const path = require('path');
const articulos = require('../data/articulos.json')



module.exports = { 
    admin: (req, res) => res.render('admin/admin',{title: "Admin", role: "admin", articulos}),
    create: (req, res) => res.render('admin/create',{title: "Create", role: "admin"}),       
    edit: (req, res) => {
               
        
        const item_id = Number(req.params .id);
        const item = articulos.find(articulo => articulo.id === item_id )
        
        
        if (item) {
            res.render('admin/edit', { title: "Item.id", item ,articulos});//agregar un parametro para que lo renderise tambien!!
        } else {
            res.status(404).send('Item no encotrado');
        }
        
    },


    editItem: (req, res) => res.send('impacta la modificacion'),
    createItem: (req, res) => res.send('agregar'),
    deleteItem: (req, res) => {res.render(path.resolve(__dirname,'../views/admin/edit.ejs'))},
    
        
        
};
