// controlador y coso

module.exports= {
    home: (req, res) => { res.render('index',{title: "HOME"});  },
    
    contacto:  (req, res) => { res.render('contacto');  }


}
