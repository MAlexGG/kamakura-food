import { cleanOrder, closeReceipt, toggleCart } from "./cart.js";

function printReceipt(order){
    let render = '';
    const receiptContainer = document.getElementById("receipt-product");
    if(order.length >= 1){
        order.map(item => {
            render += `
                <h3>${item.name}</h3>
                <div class="receipt-price">
                    <p>Cantidad: ${item.quantity}</p>
                    <h5>Subtotal ${(item.quantity * item.price).toFixed(2)} €</h5>
                </div>
            `
        })
    } else {
        render = `<h3>Aún no has escogido tu orden</h3>`; 
    }

    receiptContainer.innerHTML = render;
    
}

function payOpen(){
    const modal = document.getElementById("modal-container");
    modal.style.display = "flex";
}

function payClose(){
    const modal = document.getElementById("modal-container");
    modal.style.display = "none";
    closeReceipt();
    cleanOrder();
    toggleCart();
}

export { printReceipt, payOpen, payClose };