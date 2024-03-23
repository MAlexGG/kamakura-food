//DEBE imprimir en pantalla la información de filtros.

//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.


//DEBE imprimir en pantalla la información de filtros.

export function printFilters(elements){
    let render = '';
    const filterContainer = document.getElementById("filters");
    elements.map(filter => {
        render += `
        <button class="filter">${filter}</button>`;
    })
    filterContainer.innerHTML = render;
}

//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.

export function printMenu(items){
    let render = '';
    const productContainer = document.getElementById("products");
    items.map(product =>{
        render += `
        <div class="product-container">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price-container">
                <h5>${product.price} €</h5>
                <button class="add-button" onclick="addProduct(${product.id})">Añadir</button>
            </div>
        </div>`;
    })
    productContainer.innerHTML = render;
}