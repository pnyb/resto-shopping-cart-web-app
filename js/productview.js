
var ProductDetails = window.localStorage;
var datalist = JSON.parse(ProductDetails.getItem("datalist"));
var current = parseInt(ProductDetails.getItem("currentIndex"));
var currentObject = datalist.dList[current];

document.getElementById("currentTitle").innerHTML = currentObject.productname;
document.getElementById("currentImage").src = currentObject.image;
document.getElementById("currentPrice").innerHTML = "₱" + currentObject.price + ".00";
document.getElementById("currentDesc").innerHTML = currentObject.desc;

// control quantity
let quantity = 1;
const quantityNumber = document.getElementById('quantity-number');
document.getElementById('button-minus').addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
    }
    quantityNumber.value = quantity;
});
document.getElementById('button-plus').addEventListener('click', () => {
    quantity++;
    quantityNumber.value = quantity;
});

// add to cart
const addToCartButton = document.getElementById('add-cart');
addToCartButton.addEventListener('click', () => {
    addToCart(currentObject, quantity);
});

displayCartCounter();
