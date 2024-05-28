//CAPA SERVICIOS: FUNCIONA DE INTERMEDIARIO ENTRE CONTROLADOR Y MODELO

const {
  getAllItemsModel,
  getOneItemModel,
  deleteOneItemModel,
} = require("../models/product_model");


const getAllService = async (sortOption) => {
  let data = await getAllItemsModel(sortOption);
  if (data.isError) {
    data = `Hubo un error al traer los productos ${data.message}`;
  }

  return data;
};





const deleteItemService = async (params) => {
  let data = await deleteOneItemModel({ id_product: params });
 
   return data;
   
};

const getOneItemService = async (params) => {
  let data = await getOneItemModel({id_product: params});
 return data;
    
};



module.exports = {
  getAllService,
  deleteItemService,
  getOneItemService,
};
