// get the card element value
function getElementValue(elementId) {
    return document.getElementById(elementId).innerText;

}

let serial = 1;
let total = 0;

// show the all card information to display
function displayData(title, price, quantity, totalPrice, buttonId) {
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

    // disable the by now button
    document.getElementById(buttonId).disabled = true;
}

// card all element value
function cardData(title, price, quantity) {
    const productTitle = getElementValue(title);
    const productPrice = getElementValue(price);
    const productQuantity = getElementValue(quantity);

    const array = [`${productTitle}`, `${productPrice}`, `${productQuantity}`];
    return array
}

document.getElementById('first-card-btn').addEventListener('click', function () {
    //card information
    let allCardData = cardData('bag-title', 'bag-price', 'bag-quantity');
    // total price 
    const totalPrice = parseInt(allCardData[1]) * parseInt(allCardData[2]);
    //show the display card details
    displayData(allCardData[0], allCardData[1], allCardData[2], totalPrice, 'first-card-btn');
});

document.getElementById('second-card').addEventListener('click', function () {
    //card information
    let allCardData = cardData('blue-bag-title', 'blue-bag-price', 'blue-bag-quantity');
    // total price 
    let totalPrice = parseInt(allCardData[1]) + parseInt(allCardData[2]);
    //show the display card details
    displayData(allCardData[0], allCardData[1], allCardData[2], totalPrice, 'second-card');
});

document.getElementById('black-button').addEventListener('click', function () {
    //card information
    const allCardData = cardData('black-bag-title', 'black-bag-price', 'black-bag-quantity');
    // total price  
    const total = parseFloat(allCardData[1]) - parseFloat(allCardData[2]);
    //show the display card details
    displayData(allCardData[0], allCardData[1], allCardData[2], total, 'black-button');
});



document.getElementById('sho-btn').addEventListener('click', function (e) {
    // [h2.card-title, p, p, p, div.card-actions.justify-end]
    const shoesTitle = e.target.parentNode.parentNode.children[0].innerText;
    const shoesPrice = e.target.parentNode.parentNode.children[2].children[0].value;
    const shoesQuantity = e.target.parentNode.parentNode.children[3].children[0].value;
    if (shoesPrice == '' || shoesQuantity == '') {
        return alert('please enter your number')
    }
    else if (shoesQuantity < 0 || shoesPrice < 0 || shoesPrice < shoesQuantity) {
        return alert('please enter your positive number')
    }
    const totalAmount = parseFloat(shoesPrice) / parseFloat(shoesQuantity);

    displayData(shoesTitle, shoesPrice, shoesQuantity, totalAmount, 'sho-btn');
})