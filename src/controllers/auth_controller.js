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
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Deslogueado</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-color: #f0f0f0;
                    font-family: Arial, sans-serif;
                }
                .container {
                    text-align: center;
                    background: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                button { margin-top: 20px;
                  padding: 10px 20px;
                  font-size: 16px;
                  border: solid 1px black;
                  border-radius: 10px;
                  background-color: #ffffff;
                  color: black;
                  cursor: pointer;
                    
                }
                button:hover {
                    background-color:red;
                    color:white
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Deslogueado con éxito</h1>
                <p>Has cerrado sesión correctamente.</p>
                <button onclick="location.href='/'">Volver al inicio</button>
            </div>
        </body>
        </html>
    `)
  },
};
