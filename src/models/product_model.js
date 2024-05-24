//Se importa el modulo conn

const { conn } = require("../config/conn");

const getAllItemsModel = async () => {
  try {
    const [rows] = await conn.query(
      "SELECT product.*, category.name_category, licence.name_licence FROM (product LEFT JOIN category ON product.id_category = category.id_category) LEFT JOIN licence ON product.id_licence = licence.id_licence"
    );
    return rows;
  } catch (error) {
    return {
      error,
    };
  } finally {
    conn.releaseConnection();
  }
};

// podemos usar params para llamar a cualquier valor desde el controller
const getOneItemModel = async (params) => {
  try {
    const [rows] = await conn.query(
      "SELECT product.*, category.name_category, licence.name_licence FROM (product LEFT JOIN category ON product.id_category = category.id_category) LEFT JOIN licence ON product.id_licence = licence.id_licence WHERE ?;",
      params
    );

    return rows;
  } catch (error) {
    return error;
  } finally {
    conn.releaseConnection();
  }
};

const deleteOneItemModel = async (params) => {
  try {
    const product = await conn.query("DELETE FROM product WHERE ?", params);
    return product;
    
  } catch (error) {
    return {
      isError: true,
      message: "Hubo un error al eliminar el producto" + error,
    };
  }finally{
    conn.releaseConnection()
  }
};

const createItemModel = async (params) => {
  try {
    const [product] = await conn.query(
      "INSERT INTO product (name_product, description_product, price_product, stock_product,disc_product, cuota_product, SKU_product, id_licence, img_front_product, img_back_product) VALUES ?", [params]);
    return product;} 
  catch (error) {
    return error;
  } finally {
    conn.releaseConnection();
  }
};


const editItemModel = async (params, id_item) => {
  try {
    const [product] = await conn.query(
      "UPDATE product SET ? WHERE ?", [params, id_item]);
    return product;} 
  catch (error) {
    return error;
  } finally {
    conn.releaseConnection();
  }
};



module.exports = {
  getAllItemsModel,
  getOneItemModel,
  deleteOneItemModel,
  createItemModel,
  editItemModel
};
