const express = require('express');
const app = express();
const methodOverride = require('method-override') // metodo para capturar peticiones que no sean por POST de los formularios





/* Importamos rutas */

const mainRoutes = require('./src/routes/main_routes');
const adminRoutes = require('./src/routes/admin_routes')
const shopRoutes = require('./src/routes/shop_routes')
const authRoutes = require('./src/routes/auth_routes')



app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);








app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'));



// app.use((req, res) => {
//     res.status(404).send("Recurso no encontrado")
// })

// app.get('shop', (req, res) => {
//     res.sendFile(path.resolve__direname + './public/pages/shop.html')

// })
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/pages/index.html')
// })
// app.get('login', (req, res) => {
//     res.sendFile(__dirname + '/public/pages/login.html')
// })
// app.get('register', (req, res) => {
//     res.sendFile(__dirname + '/public/pages/register.html')
// })
// app.get('item', (req, res) => {
//     res.sendFile(__dirname + '/public/pages/item.html')
// })

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor inicializado en http://localhost:${PORT}`)
})