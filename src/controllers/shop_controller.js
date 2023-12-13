const path = require('path');



module.exports = { 
    shop: (req, res) => {
        res.render('shop/shop',{title: "Shop"});
    },
         
         


    item: (req, res) => {
        res.render('shop/item',{title: "Shop"});
    },



    
    addItem: (req, res) => res.send('Nuevo item'),

    carrito: (req, res) => {
        res.render(path.resolve(__dirname,'../views/shop/carrito.ejs'))},

    addCarrito: (req, res) => res.send('agregar item'),
        
        
};
