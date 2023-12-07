const express = require('express');
const app = express();





/* Importamos rutas */

const mainRoutes = require('./src/routes/main_routes');
const adminRoutes = require('./src/routes/admin_routes')
const shopRoutes = require('./src/routes/shop_routes')
const characterRoutes = require('./src/routes/character_routes')


app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);








app.use(express.static('public'));
//app.use(express.static('public/pages'));


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