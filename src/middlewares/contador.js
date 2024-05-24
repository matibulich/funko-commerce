


const contadorItems = (req, res, next) => {
    if (req.session && req.session.cart) {
        const cart = req.session.cart;
        const contador = cart.reduce((acumulador, item) => acumulador + item.cantidad, 0);
        res.locals.contadorItems = contador;
    } else {
        res.locals.contadorItems = 0;
    }
    next();
};

module.exports = contadorItems;