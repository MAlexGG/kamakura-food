//DEBE buscar los productos por los filtros

import { printMenu } from "./menu.js";

//DEBE buscar los productos por los filtros

export function searcher(filter, products){
    const items = products.filter(product => product.category == filter);
    filter == 'todos' ? printMenu(products) : printMenu(items);
}

