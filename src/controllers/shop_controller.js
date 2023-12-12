const path = require('path');



module.exports = { 
    shop: (req, res) => {
         res.render(path.resolve(__dirname,'../views/shop/shop.ejs'));},
         /*res.render(path.resolve(__dirname,'../views/shop/shop.ejs'),{title: "Shop"});},*/ //ver con profe


    item: (req, res) => {
        res.render(path.resolve(__dirname,'../views/shop/item.ejs'))},
    
    addItem: (req, res) => res.send('Nuevo item'),

    carriro: (req, res) => {
        res.render(path.resolve(__dirname,'../views/shop/carrito.ejs'))},

    addCarrito: (req, res) => res.send('agregar item'),
        
        
};