// const session = require("express-session")
const session = require("cookie-session")

function initSession(){
    return session(
        {
            secret: "sesionSecreta",
            // resave: false,
            // saveUninitialized: true,
        }
    )
}

module.exports = {initSession}