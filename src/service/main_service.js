//CAPA SERVICIOS: FUNCIONA DE INTERMEDIARIO ENTRE CONTROLADOR Y MODELO



const {getAllItems, getOneItem} = require("../models/main_model")

const getAll = async (params) =>{
  //logica

  const data =  getAllItems(params)
  return data
}

module.exports = {
    getAll
}