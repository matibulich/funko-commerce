//IMPORT LIBRERIA MYSQL2
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "funko_db",
  password: "matias123",
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0, //queries en cola infinitas
});

//PRUEBA DE CONEXION
pool.getConnection((error, concect) => {
  if (error) {
    console.error("Error al conectar a la base de datos: " + error);
  } else {
    console.log("Conexion exitosa");
    concect.release(); //liberamos la conexion
  }
});

module.exports = {
  conn: pool.promise(), //permite trabajar con promesas async await. Propio de mysql2
}; //cuando requerimos hacer consultas directamente usamos la variable conn
