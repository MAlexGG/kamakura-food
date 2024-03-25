//DEBE contener las funcionalidades del carrito de compras.

import { products } from "../assets/data/data.js";
import { printReceipt } from "./receipt.js"; 

let cartList = [];

function toggleCart(){
    const cart = document.getElementById("cart-container");
    (cart.style.display == "flex") ? cart.style.display = "none" : cart.style.display = "flex";
}

function getProduct(productId, products, order){  
    let productAdded = products.find(product => product.id == productId);
    let existingProduct = order.find(item => item.id == productAdded.id);
    if(!existingProduct){
        order.push({...productAdded, quantity: 1});
    };
    return order;
} 

function printCart(cart){
    let render = '';
    const cartContainer = document.getElementById("cart-products");
    cart.map(item => {
        render += `
        <div class="cart-container">
            <button class="close-button" onclick="deleteCartProduct(${item.id})"><img src="./assets/img/close.svg" alt="close"></button>
            <div class="text-container">
                <h3>${item.name}</h3>
                <h5 id="price-${item.id}">${(item.price * item.quantity).toFixed(2)} €</h5>
            </div>
            <div class="quantity-container">
                <button onclick="addQuantity(${item.id})">+</button>
                <p class="quantity" id="item-${item.id}">${item.quantity}</p>
                <button onclick="substractQuantity(${item.id})">-</button>
            </div>
        </div>
        `
    })
    cartContainer.innerHTML = render;
    printTotal(cart, "cart-total");
}

function addProduct(id){
    const list = getProduct(id, products, cartList);
    printCart(list);
}

function deleteCartProduct(id){
    cartList = cartList.filter(item => item.id != id)
    printCart(cartList)
}

function closeProducts(){
    const cart = document.getElementById("products-container");
    cart.style.display = "none";
}

function openReceipt(order){
    const cart = document.getElementById("receipt-container");
    cart.style.display = "flex";
    printReceipt(order);
}

function closeReceipt(){
    const receipt = document.getElementById("receipt-container");
    receipt.style.display = "none";
    const cart = document.getElementById("products-container");
    cart.style.display = "flex";
    const error = document.getElementById('receipt-error');
        error.style.display = "none";
}

function getReceipt(order){
    closeProducts();
    openReceipt(order);
    printTotal(order, "receipt-total");
}

function addQuantity(id){  
    for (const item of cartList) {
        if(item.id === id){
            item.quantity ++;
        }
    }
    printCart(cartList);
}

function substractQuantity(id){  
    for (const item of cartList) {
        if(item.id === id && item.quantity >= 1){
            item.quantity --;
        }
        if(item.id === id && item.quantity == 0){
            deleteCartProduct(id)
        }
    }
    printCart(cartList);
}

function getTotal(order){
    let total = 0;
    for (const product of order) {
        total += product.quantity * product.price
    }
    return total;    
}

function printTotal(order, elementId){
    let total = getTotal(order);
    const totalContainer = document.getElementById(elementId);
    totalContainer.innerText = `Total ${total.toFixed(2)} €`;
}

function cleanOrder(){
    cartList = [];
    const totalContainer = document.getElementById("cart-total");
    totalContainer.innerText = "Total 0.00 €";
}

export {toggleCart, deleteCartProduct, addProduct, getProduct, printCart, getReceipt, closeReceipt, addQuantity, substractQuantity, getTotal, printTotal, cleanOrder, cartList}