const path = require('path');


module.exports = { 
        login: (req, res) => res.render(path.resolve(__dirname,'../views/auth/login.ejs')),
        respLogin: (req, res) => res.sned('vemos'),

        register: (req, res) => res.render(path.resolve(__dirname,'../views/auth/register.ejs')),    
        respRegister: (req, res) => res.send(path.resolve('vemos mas tarde')),
        
        logout: (req, res) => res.send('salida')
        
    };
