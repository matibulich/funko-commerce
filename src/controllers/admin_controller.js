const path = require('path');
const articulos = require('../data/articulos.json')
const fs = require('fs');


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

    editAction: (req, res) => {
        const item_id = Number(req.params.id);
        const data = fs.readFileSync(articulos, 'utf-8');
        const jsonData = JSON.parse(data);
        const unItem = jsonData.find(item => item.id === item_id);//encuentro el item del id adentro del json

        if (unItem) {
            res.json(unItem);
          } else {
            res.status(404).json({ error: 'Objeto no encontrado' });
          }

    },


    editItem: (req, res) => res.send('impacta la modificacion'),

    createItem: (req, res) => res.send('agregar'),

    deleteItem: (req, res) => {res.render(path.resolve(__dirname,'../views/admin/edit.ejs'))},
    
        
        
};
