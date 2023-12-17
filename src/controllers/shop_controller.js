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
            res.render('shop/item', { title: "Item.id", item ,articulos});//agregar un parametro para que lo renderise tambien!!
        } else {
            res.status(404).send('Item no encotrado');
        }
        
    },
    
    addItem: 

    (req, res) => {
        const itemId = req.params.id;
        const item = articulos.find((articulo) => articulo.id === Number(itemId));
    
        if (item) {
          // Obtener o inicializar el carrito en la sesión
          req.session.cart = req.session.cart || [];
    
          // Agregar el ítem al carrito
          req.session.cart.push(item);
    
          res.redirect('/shop/carrito'); // Redirigir a la página del carrito
        } else {
          res.status(404).send('Item no encontrado');
        }
      },




    carrito: (req, res) => {
        const cart = req.session.cart || [];
        res.render('shop/carrito',{title: "Carrito", cart});
    },

    addCarrito: (req, res) => res.send('agregar item'),
};


