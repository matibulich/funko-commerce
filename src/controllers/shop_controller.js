const path = require('path');
const articulos = require('../data/articulos.json')


module.exports = { 
    shop: (req, res) => {  
        res.render('shop/shop',{title: "Shop", articulos});
    },
         
         
    item: (req, res) => {
               
        const item_id = Number(req.params .id);
        const item = articulos.find(articulo => articulo.id === item_id )

        if (item) {
            res.render('shop/item', { title: "Item.id", item });
        } else {
            res.status(404).send('Item no encotrado');
        }
    },
    
    addItem: (req, res) => res.send('Nuevo item'),

    carrito: (req, res) => {
        res.render('shop/carrito',{title: "Carrito"});
    },

    addCarrito: (req, res) => res.send('agregar item'),
};


