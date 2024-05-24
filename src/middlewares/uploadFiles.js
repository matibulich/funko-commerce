const multer = require('multer');
const path = require("path");







/*Logica para guardar img en el server */

const storage = multer.diskStorage({
    destination: (req, file, cb)=> cb(null, path.resolve(__dirname,"../../public/images/") ),
    filename: (req, file, cb)=>cb(null, `${Date.now()}-${file.originalname}`)   
});

const upload = multer({storage})



module.exports = upload;
