const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
const renderProduct = (title, price) => {
    return `<div class="product-item">
                <div class="item-photo"></div>
                <h3>${title}</h3>
                <p>Цена: ${price} р.</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    let productsList = list.map(item => renderProduct(item.title, item.price));
    let joinProductList = productsList.join("");
    console.log(joinProductList);
    document.querySelector('.products').innerHTML = joinProductList;
};

renderPage(products);