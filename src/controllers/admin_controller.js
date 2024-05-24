const path = require("path");
const fs = require("fs");
const {createItemModel, editItemModel} = require("../models/product_model")
const {
  deleteItemService,
  getAllService,
  getOneItemService,
} = require("../service/main_service");


module.exports = {
  admin: async (req, res) => {
    const data = await getAllService();

    res.render("admin/admin.ejs", { title: "ADMIN", data });
  },

  deleteItem: async (req, res) => {
    await deleteItemService(req.params.id_item);
    res.redirect("/admin");
    //console.log(req.params.id_item)
  },

  create: (req, res) =>
    res.render("admin/create", { title: "Create", role: "admin" }),
    
  createItem: async (req, res) =>{
   // console.log(req.files)
    const productSchema={
      name_product: req.body.nombre,
      description_product:req.body.product_description,
      price_product:req.body.precio,
      stock_product:req.body.stock,
      disc_product:req.body.descuento,
      cuota_product:req.body.cuotas,
      SKU_product:req.body.SKU,
      id_licence:req.body.marca,
      img_front_product:  req.files[0].filename,
      img_back_product:  req.files[1].filename,
      
    }
    const result = await createItemModel([Object.values(productSchema)]) //crea un array del objeto con los valores 
 
    console.log(result);
    res.redirect("/admin");
    console.log(req.files)
  },

    
  edit: async (req, res) => {
    const [data] = await getOneItemService(req.params.id_item);
    res.render("admin/edit", { title: "Item", data });
    console.log(data)
  },
  
  editItem: async(req, res) =>{

    const {id_item} = req.params
    const tieneImg = req.files.length !== 0; 

    const productSchema = tieneImg ?    
    {
      name_product: req.body.nombre,
      description_product:req.body.product_description,
      price_product:req.body.precio,
      stock_product:req.body.stock,
      disc_product:req.body.descuento,
      cuota_product:req.body.cuotas,
      SKU_product:req.body.SKU,
      id_licence:req.body.marca,
      img_front_product:  req.files[0].filename,
      img_back_product:  req.files[1].filename,
      
    } :
    {
      name_product: req.body.nombre,
      description_product:req.body.product_description,
      price_product:req.body.precio,
      stock_product:req.body.stock,
      disc_product:req.body.descuento,
      cuota_product:req.body.cuotas,
      SKU_product:req.body.SKU,
      id_licence:req.body.marca,      
    } ;

    const result = await editItemModel(productSchema, {id_product : id_item})
    console.log(result)
    

    res.redirect("/admin")
  }, 


};
