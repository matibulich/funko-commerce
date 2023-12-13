const path = require('path');


module.exports = { 
        login: (req, res) => res.render('auth/login',{title: "Login", role:"admin"}),
        register: (req, res) => res.render('auth/register',{title: "Register", role:"admin"}), 

        respLogin: (req, res) => res.send('vemos'),       
        respRegister: (req, res) => res.send(path.resolve('vemos mas tarde')),        
        logout: (req, res) => res.send('salida')
        
    };
