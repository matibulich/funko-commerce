const path = require("path");


const credentials = {
  email : "matias@gmail.com",
  pass: "123456"
}


module.exports = {
  login: (req, res) =>
    res.render("auth/login", { title: "Login", role: "admin" }),




    respLogin: async (req, res) => {
    
      const {email, pass} = req.body;
      const emailValidation = credentials.email == email;
      const passValidation = credentials.pass == pass;

      req.session.isLogged = emailValidation && passValidation ? true : false

      if(req.session.isLogged){
        return res.redirect("/admin")
      }
       return res.status(401).send("Credenciales invaildas")
      
      
      //  res.send("las validaciones coinciden " + isLogged)

  },

  register: (req, res) => res.render("auth/register", { title: "Register", role: "admin" }),

  respRegister: (req, res) => res.send(path.resolve("vemos mas tarde")),

  logout: (req, res) => {
    req.session.isLogged = false;
    res.send("Deslogueado con exito")
  },
};
