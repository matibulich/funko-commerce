const path = require('path');
const articulos = require('../data/articulos.json')
const fs = require('fs');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        
      cb(null, path.resolve(__dirname, '../../public/uploads')); // El directorio donde se guardarán las imágenes
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
        // Aquí deberías tener lógica para obtener los datos del nuevo ítem desde la solicitud (req.body, por ejemplo)
        console.log(req.body)
        const nuevoItem = {
            id: req.body.id,
            licencia: req.body.licencia,//aca hizo la cagada!!!!
            marca:req.body.marca,
            nombre_producto: req.body.nombre_producto,
            descripcion_producto: req.body.descripcion_producto,
            sku: req.body.sku,
            precio: req.body.precio,
            stock: req.body.stock,
            descuento: req.body.descuento,
            cuotas: req.body.cuotas,
            images_front:req.body.images_front
        };

        // Agregar el nuevo ítem al array
        articulos.push(nuevoItem);

        // Sobrescribir el archivo articulos.json con el nuevo array
        const filePath = path.resolve(__dirname, '../data/articulos.json');
        fs.writeFileSync(filePath, JSON.stringify(articulos, null, 2));

        res.redirect('/admin'); // Redirigir a la página de administración después de agregar
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
