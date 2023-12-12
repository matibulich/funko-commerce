// controlador y coso

module.exports= {
    home: (req, res) => { res.render('index',{title: "Home"});  },
    
    contacto:  (req, res) => { res.render('contacto',{title: "Contacto"});  }


}
