const session = require("express-session")

function initSession(){
    return session(
        {
            secret: "sesionSecreta",
            resave: false,
            saveUninitialized: true,
        }
    )
}

module.exports = {initSession}