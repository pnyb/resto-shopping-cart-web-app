
$('.sidenav').sidenav();

//ADD TO CART TOAST
function myFunction(){
    M.toast({html: 'Added to cart!', classes: 'red rounded'});
}

function displayCartCounter() {
    let total = 0;
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems) {
        Object.keys(cartItems).forEach((key) => {
            let cart = cartItems[key];
            total += cart.inCart;
        })
    }
    document.querySelector('#cartCount').textContent = total;
    document.querySelector('#cartCount2').textContent = total;
    
}

function addToCart(product, quantity) {
    quantity = quantity || 0;
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += quantity; 
    }
    else {
        product.inCart = quantity;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    displayCartCounter();
 
}
displayCartCounter();

