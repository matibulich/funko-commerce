const path = require('path');
const articulos = require('../data/articulos.json')
const fs = require('fs');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        
      cb(null, path.resolve(__dirname, '../../public/uploads')); // aca guarda las imagenes nuevas (luego pasar a image)
    },
    filename: (req, file, cb) => {
        console.log(file)
      const fileName = `${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    },
});
  
const upload = multer({ storage });

module.exports = { 
    admin: (req, res) => res.render('admin/admin',{title: "Admin", role: "admin", articulos}),
    create: (req, res) => res.render('admin/create',{title: "Create", role: "admin"}),    

    edit: (req, res) => {               
        
        const item_id = Number(req.params .id);
        const item = articulos.find(articulo => articulo.id === item_id )
        
        
        if (item) {
            res.render('admin/edit', { title: "Item.id", item ,articulos});//agregar un parametro para que lo renderise tambien!!
        } else {
            res.status(404).send('Item no encotrado');
        }        
    },

    editAction: (req, res) => {
        const item_id = Number(req.params.id);
        const jsonFile = __dirname + '/../data/articulos.json';
        const data = fs.readFileSync(jsonFile, 'utf-8');
        let jsonData = JSON.parse(data);
        const unItem = jsonData.find(item => item.id === item_id);//encuentro el item del id adentro del json
        const body = req.body;

        jsonData = jsonData.map(product => {
            if(product.id == body.id) {
                body.id = parseInt(body.id);
                body.precio = parseInt(body.precio);
                body.stock = parseInt(body.stock);
                body.descuento = parseInt(body.descuento);
                body.cuotas = parseInt(body.cuotas);
                product = body;
            }
            return product;
        })

        fs.writeFileSync(jsonFile, JSON.stringify(jsonData), 'utf-8');

        //upload.single('images_front')

        if (unItem) {
            res.redirect('/admin');
          } else {
            res.status(404).json({ error: 'Objeto no encontrado' });
          }
          

    },


    editItem: (req, res) => res.send('impacta la modificacion'),


    createItem: (req, res) => { 
      //arranca igual que el edit
      const jsonFile = __dirname + '/../data/articulos.json';
      const data = fs.readFileSync(jsonFile, 'utf-8');
      let jsonData = JSON.parse(data);
      const body = req.body;

      
      //busco el id mas alto
      const highestId = jsonData.reduce((maxId, item) => (item.id > maxId ? item.id : maxId), 0);   

        const nuevoItem = {
            id: highestId+1,
            categoria: body.categoria,
            marca: body.marca,
            nombre: body.nombre,
            product_description: body.product_description ,
            SKU: body.SKU,
            precio: parseInt(body.precio),
            stock: parseInt(body.stock),
            descuento:parseInt( body.descuento),
            cuotas:parseInt(body.cuotas),
            images_front: body.images_front,
            images_back: body.images_back
        };
        
        jsonData.push(nuevoItem);
        console.log(jsonData)
        fs.writeFileSync(jsonFile, JSON.stringify(jsonData), 'utf-8');

        res.redirect('/admin'); 
    },







    deleteItem:(req, res) => {
        const itemId = Number(req.params.id);
        const itemIndex = articulos.findIndex(product => product.id === itemId); //Buscar el id a borrar en que indice del array esta. se alamacena en itemIndex
      
        if (itemIndex !== -1) {
          articulos.splice(itemIndex, 1);
      
          // Sobrescribir el json con el nuevo array
          const filePath = path.resolve(__dirname, '../data/articulos.json');
          fs.writeFileSync(filePath, JSON.stringify(articulos, null, 2));//null no filtra y 2 deja don indentaciones en el json

          res.redirect('/admin'); // Redirigir a la página de admin después de eliminar
        } else {
          res.status(404).send('Producto no encontrado');
        }
      }
    
        
        
};
