let buttonAdd = document.getElementById('btn-add')
let quantity = document.getElementById('quantity')

let carrito = []

function addItem(e) {
    let qty = getQty()
    console.log(e)
    carrito.push({
        "id": 0,
        "qty":`${qty}`,
        "product-name": "product name",
        "product-price": "$12300",
        "product-brand": "namco",
        "installments": false,
        "nroInstallments":[1, 3, 6, 9, 12]
    })
    localStorage.setItem('carrito', JSON.stringify(carrito))
    console.log(carrito)
}

const getQty = () => {
    return quantity.value
}

buttonAdd.addEventListener('click', addItem)
quantity.addEventListener('change', getQty)