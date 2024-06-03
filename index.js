const express = require('express');
const app = express();
const path = require('path');
const {initSession} = require("./src/middlewares/session")
const methodOverride = require ('method-override');
const contadorItems = require("./src/middlewares/contador")



/* Importamos rutas */
  const mainRoutes = require('./src/routes/main_routes')
  const adminRoutes = require('./src/routes/admin_routes')
  const shopRoutes = require('./src/routes/shop_routes')
  const authRoutes = require('./src/routes/auth_routes')

/* Middlewares */

/* Sesion Usuario */


//Se crea una cookie(se crea automaticamente) con ID ÚNICO asociada a cada usuario
app.use(initSession())
app.use((req, res, next) =>{
  res.locals.isLogged = req.session.isLogged
  next()
})
  
app.use(contadorItems)

//parsea los datos recibidos por POST
app.use(express.urlencoded({extend:true}));
app.use(express.json());
app.use(methodOverride('_method')); //captura peticion que no sea POST O GET (PUT O DELETE)

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

const PORT = 3001;

app.set('view engine', 'ejs');
app.set("views", path.resolve(__dirname, './src/views'));




//Carpeta de archivos estaticos
app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Servidor inicializado en http://localhost:${PORT}`)
});

