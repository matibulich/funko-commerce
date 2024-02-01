//Se importa el modulo conn



const {conn} = require("../config/conn");

const getAllItems = async ()=>{
    const [rows] = await conn.query("SELECT * FROM PRODUCT;");    //destructuring [rows]
    return rows
};

// podemos usar params para llamar a cualquier valor desde el controller
const getOneItem = async (params)=>{
    const [rows] = await conn.query("SELECT * FROM PRODUCT WHERE ?;", params);    
    return rows
};

















module.exports = {
    getAllItems, getOneItem
}
