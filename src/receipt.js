function printReceipt(order){
    let render = '';
    const receiptContainer = document.getElementById("receipt-product");
    order.length >= 1 ?
    order.map(item => {
        render += `
            <h3>${item.name}</h3>
            <div class="receipt-price">
                <p>Cantidad: ${item.quantity}</p>
                <h5>Subtotal ${(item.quantity * item.price).toFixed(2)} €</h5>
            </div>
        `
    }) : render = `<h3>Aún no has escogido tu orden</h3>`
    receiptContainer.innerHTML = render;
}

export { printReceipt };