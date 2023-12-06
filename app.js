const express = require('express');
const app = express();

const PORT = 3002;



app.use(express.static('public'));
app.use(express.static('public/pages'));


// app.use((req, res) => {
//     res.status(404).send("Recurso no encontrado")
// })
app.get('shop', (req, res) => {
    res.sendFile(path.resolve__direname + './public/pages/shop.html')

})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/pages/index.html')
})
app.get('login', (req, res) => {
    res.sendFile(__dirname + '/public/pages/login.html')
})
app.get('register', (req, res) => {
    res.sendFile(__dirname + '/public/pages/register.html')
})
app.get('item', (req, res) => {
    res.sendFile(__dirname + '/public/pages/item.html')
})

app.listen(PORT, () => {
    console.log(`Servidor inicializado en http://localhost:${PORT}`)
})