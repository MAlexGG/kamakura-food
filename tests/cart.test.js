import { describe, expect, test } from "vitest";
import { getProduct, getTotal, printCart, printTotal, toggleCart } from "../src/cart";
import { JSDOM } from 'jsdom';
import { printReceipt } from "../src/receipt";

describe("cart tests", () => {
    test("should toggle cart", async () => {
        const dom =  await JSDOM.fromFile("index.html");
        global.document = dom.window.document;
        toggleCart();
        const cart = global.document.getElementById("cart-container");
        expect(cart.style.display).toBe("flex");

        //¿POR QUÉ NO FUNCIONA?
        /* const { window } =  await JSDOM.fromFile("index.html", {runScripts: "dangerously"});
        toggleCart();
        const cart = window.document.getElementById("cart-container h2");
        expect(cart.style.display).toBe("flex"); */
    });

    test("should get product from list", () => {
        const products = [
        {
            id: 0,
            name: 'Miso Ramen',
        },
        {
            id: 1,
            name: 'Mochi',
        }]; 

        const order = [
            {
                id: 0,
                name: 'Miso Ramen'   
            }
        ]
        const suv = getProduct(0, products, order);
        expect(suv).toMatchObject([{id: 0, name: 'Miso Ramen'}]);
    });

    test("should print cart", async () => {
        const dom =  await JSDOM.fromFile("index.html");
        global.document = dom.window.document;
        printCart([
            {
                id: 0,
                name: 'Miso Ramen',
                price: 10.50,
                quantity: 1
            }
        ]);
        const title = global.document.querySelector(".text-container h3");
        expect(title.innerHTML).toBe("Miso Ramen");
    });

    test("should print receipt", async () => {
        const dom =  await JSDOM.fromFile("index.html");
        global.document = dom.window.document;
        printReceipt([
            {
                id: 0,
                name: 'Shogun Roll',
                price: 8.25,
                quantity: 1
            }
        ]);
        const title = global.document.querySelector(".receipt-product h3");
        expect(title.innerHTML).toBe("Shogun Roll");
    });

    test("should get total", async () => {
        let order = [
            {
                id: 0,
                name: 'Miso Ramen',
                price: 10.50,
                quantity: 4
            },
            {
                id: 0,
                name: 'Mochi',
                price: 2.50,
                quantity: 2
            }
        ];
        const result = getTotal(order);
        expect(result).toBe(47);
    });

    test("should print total on the receipt", async () => {
        const dom = await JSDOM.fromFile("index.html");
        global.document = dom.window.document;
        const order = [
            {
                id: 0,
                name: 'Shogun Roll',
                price: 8.25,
                quantity: 2
            }
        ];
        printReceipt(order);
        printTotal(order, "receipt-total");
        const result = global.document.getElementById("receipt-total");
        expect(result.innerText).toBe("Total 16.50 €");
    });

})