//Intenta separar los eventos en este archivo.

import { filters, products } from "../assets/data/data.js";
import { closeReceipt, pay, toggleCart} from "./cart.js";
import { printFilters, printMenu } from "./menu.js";
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

const payButton = document.getElementById("proceedPay-button");
payButton.addEventListener("click", pay);

const closeReceiptButton = document.getElementById("close-receipt");
closeReceiptButton.addEventListener("click", closeReceipt);






    