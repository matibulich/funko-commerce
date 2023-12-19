const path = require('path');
const articulos = require('../data/articulos.json')


module.exports = { 
    shop: (req, res) => {  
        res.render('shop/shop',{title: "Shop", articulos});
    },
         
         
    item: (req, res) => {
               
        req.session.cart = req.session.cart || [];
        const item_id = Number(req.params.id);
        const item = articulos.find(articulo => articulo.id === item_id )
       
        const existente = req.session.cart.find((producto) => producto.item.id === item.id) || false
        
        
        if (item) {
            res.render('shop/item', { title: "Item.id", item ,articulos, existente});//agregar un parametro para que lo renderise tambien!!
        } else {
            res.status(404).send('Item no encotrado');
        }
        
    },
    
    updateCart: 
        //agregar un producto cuando esta vacio
        //agregar una cantidad de productos a uno ya existente
        //restar una cantidad de productos

    (req, res) => {
        const itemId = req.params.id;
        const item = articulos.find((articulo) => articulo.id === Number(itemId));
        const cantidad = parseInt(req.body.item_cantidad);
        
        req.session.cart = req.session.cart || [];
    
        if (item) {        //si exite lo modifico
            
            const existente = req.session.cart.find((producto) => producto.item.id === item.id)
            
            if(existente){                
               
                req.session.cart = req.session.cart.map (producto => {
                    if(producto.item.id == existente.item.id){
                        producto.cantidad = cantidad;
                    }

                    return producto;
                })
                
            }
            else{ // sino esta en el array de carrito lo agrega
                req.session.cart.push({
                    item,
                    cantidad
                  });
            }

    
          res.redirect('/shop/carrito'); // Redirigir a la página del carrito
        } else {
          res.status(404).send('Item no encontrado');
        }
      },




    carrito: (req, res) => {
        const cart = req.session.cart || [];

        let totalItem = 0;
        let total = 0;

        cart.forEach(item => {
            total += item.cantidad*item.item.precio;    
            totalItem += item.cantidad;
        });


        res.render('shop/carrito',{title: "Carrito", cart, total,totalItem});
    },

    deleteItem: (req, res) => {

        const itemId = parseInt(req.params.id);        
        req.session.cart = req.session.cart || [];
        console.log(itemId);
        req.session.cart = req.session.cart.filter(producto => producto.item.id !== itemId);
        console.log(req.session.cart);
        res.redirect('/shop/carrito');


    }


    
};


