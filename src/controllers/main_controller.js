// controlador y coso
const articulos = require('../data/articulos.json')

module.exports= {
    home: (req, res) => { 
        res.render('index',{title: "Home",articulos});  
    },
    
    contacto:  (req, res) => { res.render('contacto',{title: "Contacto"});  }


}
