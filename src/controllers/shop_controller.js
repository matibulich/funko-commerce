const path = require('path');



module.exports = { 
    shop: (req, res) => {
        res.render('shop/shop',{title: "Shop"});
    },
         
         
    item: (req, res) => {
        res.render('shop/item',{title: "Item"});
    },
    
    addItem: (req, res) => res.send('Nuevo item'),

    carrito: (req, res) => {
        res.render('shop/carrito',{title: "Carrito"});
    },


    addCarrito: (req, res) => res.send('agregar item'),
        
        
};
