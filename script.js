const loadStorage = () => {
    const cartStorage = getCart();
    for (const item in cartStorage) {
        displayItems(item, cartStorage[item])
    }
};

const getValue = () => {
    const itemName = document.getElementById('input-1');
    const itemPrice = document.getElementById('input-2');
    if (!itemPrice.value || !itemName.value) {
        itemName.value = '';
        itemPrice.value = '';
        return;
    }
    else {
        displayItems(itemName.value, itemPrice.value);
        addProductToCart(itemName.value, itemPrice.value)
    }

    itemName.value = '';
    itemPrice.value = '';
};
const displayItems = (name, price) => {
    const cartUi = document.getElementById('display-cart');
    const item = document.createElement('li');
    item.innerHTML = `
    ${name}: ${price}
    `;
    cartUi.appendChild(item);
}
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
};

const addProductToCart = (name, price) => {
    const cart = getCart();
    console.log(cart)
    if (cart[name]) {
        cart[name] = parseInt(cart[name]) + parseInt(price);
    }
    else {
        cart[name] = price;
    }
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfied);
}
loadStorage();
