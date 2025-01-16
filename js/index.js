// MENU TABS
document.addEventListener('DOMContentLoaded', function() {
    $(document).ready(function(){
      $('.tabs').tabs();
    });
  });

var ProductDetails = window.localStorage;
window.addEventListener('DOMContentLoaded', function () {
    loadData();
});
function saveData() {
    var product_details = { dList: [
            { productname: "Fried Chicken", price: 220.00, image: "../img/img1.jpg", 
            desc: "Golden chicken coated with seasoned flour, fried to  perfection.", tag: 1, inCart: 0 },
            { productname: "Crispy Tilapia", price: 190.00, image: "../img/img5.jpg",
            desc: "A fried fish dish that even picky kids can't resist.",  tag: 5, inCart: 0 },
            { productname: "Salmon Sinigang", price: 190.00, image: "../img/img6.jpg",
            desc: "Pinoy classic! A delicious sour broth made tangy by tamarind, filled with vegetables and melt-in-your-mouth salmon belly.", tag: 6, inCart: 0 },
            { productname: "Papait", price: 70.00, image: "../img/img10.jpg"},
            ]}
    var datalist = ProductDetails.getItem("datalist")
    var convertJSON = JSON.stringify(product_details);
    ProductDetails.setItem("datalist", convertJSON);
}
function saveCurrentProduct(index) {
    ProductDetails.setItem("currentIndex", index);
    window.location.href = "./ProductView.html";
}
function loadData() {
    saveData();
    var datalist = ProductDetails.getItem("datalist");
    if (datalist != null) {
        var convertObject = JSON.parse(datalist);
        var ids = [1, 10, 6 , 5];
        var details = ids.map((id) => document.getElementById(`detail${id}`));
        
        ids.forEach((id, index) => {
            const addToCartButton = document.getElementById(`add-cart${id}`);
            addToCartButton.addEventListener('click', () => {
                addToCart(convertObject.dList[index], 1);
            });

            details[index].onclick = () => saveCurrentProduct(index);

            // titles[index].innerHTML = convertObject.dList[index].productname;
            // prices[index].innerHTML = "₱" + convertObject.dList[index].price + ".00";
            // images[index].src = convertObject.dList[index].image;
        });
    }
}
