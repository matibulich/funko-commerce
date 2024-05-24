const path = require("path");
// const {getAllItems, getOneItem} = require("../models/main_model") SE LLAMA DESDE main_service.js
const { getAllService, getOneItemService } = require("../service/main_service");
const { title } = require("process");

module.exports = {
 
  // ME TRAE TODOS LOS ITEMS

  shop: async (req, res) =>  {
   const data = await getAllService()
   res.render("shop/shop.ejs", {title:"SHOP", data})
   //console.log(data)
  },

  //ME TRAE UN SOLO ITEM
  getItem: async (req, res) => {
    const [data] = await getOneItemService(req.params.id_item);
   
    if(!data){
     return res.status(404).send("El ID seleccionado no existe o fue eliminado")
    }
    
    res.render("shop/item.ejs", {title:"ITEM", data});
    
  },

  

  addItem:(req, res) =>{
    const data = req.params.id_item;
    const cantidad = parseInt(req.body.item_cantidad)
    const precio = parseInt(req.body.item_precio)
    const nombreProducto = req.body.item_nombre
    const imagenItem = req.body.item_imagen

    if(!req.session.cart){
      req.session.cart = []
    }

    const existeItem = req.session.cart.findIndex((item => item.id === data))


    if(existeItem >= 0){ 
      // El ítem ya existe en el carrito, actualiza la cantidad
      req.session.cart[existeItem].cantidad += cantidad;
    }else{
      req.session.cart.push({ id: data, cantidad: cantidad, precio: precio, nombreProducto: nombreProducto, img:imagenItem });
    }

     // Guarda la sesión y responde
     req.session.save(error => {
      if (error) {
          return res.status(500).send('Error al guardar el ítem en el carrito');
      }
      res.redirect('/shop');
               
  })

  },

  updateCart: async (req,res)=>{
    const data = await getOneItemService(req.params.id_item)

  },
   



  carrito: (req, res) => {
    const cart = req.session.cart || [];

    let totalItem = 0;
    let total = 0;

    cart.forEach((item) => {
      total += item.cantidad * item.precio;
      totalItem += item.cantidad;
    });
    //contador de items carrito

    res.render("shop/carrito", { title: "Carrito", cart, total, totalItem});


    //console.log(cart)
  },

 
};
