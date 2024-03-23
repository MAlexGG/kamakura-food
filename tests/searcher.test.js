import { expect, test } from "vitest";
import { JSDOM } from 'jsdom';
import { searcher } from "../src/searcher";

test("should print by category", async () => {
    const dom = await JSDOM.fromFile("index.html");
    global.document = dom.window.document;
    const menu = [
        {
            id: 0,
            name: 'Miso Ramen',
            description: 'A elegir pasta entre tallarines caseras, fideo de arroz, o udon. A elegir principal entre pollo rebozado o pollo teriyaki.',
            price: 9.50,
            category: "ramen"
        }
    ];
    searcher('ramen', menu);
    const products = global.document.querySelector(".product-container h3");
    expect(products.innerHTML).toBe('Miso Ramen');
})