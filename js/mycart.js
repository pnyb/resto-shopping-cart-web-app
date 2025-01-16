
function saveCurrentProduct(index) {
    var ProductDetails = window.localStorage;
    ProductDetails.setItem("currentIndex", index);
    window.location.href = "./ProductView.html";
}

function displayProductPrice(item) {
    return `
        <div>
            <var class="price" style="font-size:larger;">₱${item.inCart * item.price}.00</var>
            <br>
            <small class="text-muted">₱${item.price}.00</small>
        </div> 
    `;
}

function displayProduct(item) {
    return `
        <tr class="product-cart-item" id="product-${item.tag}" ;">
            <td>
                <div>
                  <img src="../img/${item.image}" width=300px; id="product-click-${item.tag}" style="padding-left:75px;">
                </div>
                
            </td>
            <td>
                <div>
                  <a id="prod-${item.tag}" onclick="event.preventDefault();" class="productName black-text">${item.productname}</a>
                </div>
                
            </td>
            <td id="quantity-number-${item.tag}" > 
                ${item.inCart}                              
            </td>
            <td id="product-price-section-${item.tag}" >
                ${ displayProductPrice(item) }
            </td>
            <td class="center-align">
              <a href="" class="btn waves-effect waves-light red" onclick="removeItem(${item.tag})" style="border-radius: 100px;"> <i class="material-icons">close</i></a></a>
            </td>
        </tr>
    `;
}

function displayTotalPrice(cartCost) {
    return `
        <div>
            <h4>Total price:</h4>
            <h3 class="text-right">₱${cartCost}.00</h3>
        </div>
        
    `;
};


function removeItem(tag) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    document.getElementById(`product-${tag}`).remove();
    delete cartItems[tag];
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

    displayCartCounter();
    updatePrices(tag);
}

function updatePrices(tag) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    if (tag in cartItems) {
        document.getElementById(`product-price-section-${tag}`).innerHTML = displayProductPrice(cartItems[tag]);
    }
    
    let totalPrice = document.querySelector("#prices-list");
    let cartCost = 0;

    Object.values(cartItems).map(item => {
        cartCost = cartCost + (item.inCart * item.price);
    });
    totalPrice.innerHTML = displayTotalPrice(cartCost);
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let totalPrice = document.querySelector("#prices-list");
    let cartCost = 0;

    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
        cartCost = cartCost + (item.inCart * item.price);
        productContainer.innerHTML += displayProduct(item);
    });
    
    Object.values(cartItems).map(item => {
        document.getElementById(`product-click-${item.tag}`).addEventListener('click', () => saveCurrentProduct(item.tag - 1));
        });
    Object.values(cartItems).map(item => {
        document.getElementById(`prod-${item.tag}`).addEventListener('click', () => saveCurrentProduct(item.tag - 1));
        });    
        totalPrice.innerHTML = displayTotalPrice(cartCost);
}
displayCart();
displayCartCounter();
