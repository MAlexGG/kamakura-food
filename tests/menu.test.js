import { describe, expect, test } from "vitest";
import { JSDOM } from "jsdom";
import { printFilters, printMenu } from "../src/menu";

describe("meu tests", () => {
    test("menu should be printed", async () => {
        const dom = await JSDOM.fromFile("index.html");
        global.document = dom.window.document;
        printMenu([
            {
                id: 0,
                name: 'Miso Ramen',
                description: 'A elegir pasta entre tallarines caseras, fideo de arroz, o udon. A elegir principal entre pollo rebozado o pollo teriyaki.',
                price: 9.50,
                category: "ramen"
            }
        ]);
        const products = global.document.querySelector(".product-container h3");
        expect(products.innerHTML).toBe('Miso Ramen');
    })
    test("filters should be printed", async () => {    
        const dom = await JSDOM.fromFile("index.html");
        global.document = dom.window.document;
        printFilters(['ramen', 'sushi']);
        const filterButton = global.document.querySelector(".filter")
        expect(filterButton.innerHTML).toBe('ramen'); 
    });
});