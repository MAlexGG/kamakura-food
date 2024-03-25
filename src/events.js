//Intenta separar los eventos en este archivo.

import { filters, products } from "../assets/data/data.js";
import { cartList, closeReceipt, getReceipt, printCart, toggleCart} from "./cart.js";
import { printFilters, printMenu } from "./menu.js";
import { payClose, payOpen } from "./receipt.js";
import { searcher } from "./searcher.js";


document.addEventListener("DOMContentLoaded", () => {
    printMenu(products);
    printFilters(filters);
    const filterButton = document.querySelectorAll(".filter");
    filterButton.forEach(filter => {
        filter.addEventListener("click", async () => {
            searcher(filter.innerHTML, products);
        })
    });
});

const cartMenu = document.getElementById("cart");
cartMenu.addEventListener("click", toggleCart);

const getReceiptButton = document.getElementById("proceedPay-button");
getReceiptButton.addEventListener("click", () => {
    getReceipt(cartList);
});

const closeReceiptButton = document.getElementById("close-receipt");
closeReceiptButton.addEventListener("click", closeReceipt);

const payButton = document.getElementById("pay-button");
payButton.addEventListener("click", () => {
    payOpen(cartList);
});

const closeModalButton = document.getElementById("close-button");
closeModalButton.addEventListener("click", () => {
    payClose();
    printCart(cartList);
});






    