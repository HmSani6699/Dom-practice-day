function getElementValue(elementId) {
    return document.getElementById(elementId).innerText;

}
let serial = 1;
let total = 0;
function displayData(title, price, quantity, totalPrice) {
    const cardBody = document.getElementById('card-body');

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${title}</td>
    <td>${price}</td>
    <td>${quantity}</td>
    <td>${totalPrice}</td>
    `
    cardBody.appendChild(tr);

    serial += 1;
    total += totalPrice;
    document.getElementById('total-price').innerText = total;
}
function cardData(title, price, quantity) {
    const productTitle = getElementValue(title);
    const productPrice = getElementValue(price);
    const productQuantity = getElementValue(quantity);

    const array = [`${productTitle}`, `${productPrice}`, `${productQuantity}`];
    return array
}

document.getElementById('first-card-btn').addEventListener('click', function () {
    let allCardData = cardData('bag-title', 'bag-price', 'bag-quantity');

    const totalPrice = parseInt(allCardData[1]) * parseInt(allCardData[2]);

    displayData(allCardData[0], allCardData[1], allCardData[2], totalPrice);
});


document.getElementById('second-card').addEventListener('click', function () {

    let allCardData = cardData('blue-bag-title', 'blue-bag-price', 'blue-bag-quantity');
    console.log(allCardData)

    let totalPrice = parseInt(allCardData[1]) + parseInt(allCardData[2]);

    displayData(allCardData[0], allCardData[1], allCardData[2], totalPrice);
})