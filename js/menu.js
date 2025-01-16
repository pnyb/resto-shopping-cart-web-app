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
            { productname: "Sisig", price: 220.00, image: "../img/img2.jpg", 
            desc: "Served sizzling on a hot stone plate, sisig is the best pick for pulutan.", tag: 2, inCart: 0 },
            { productname: "Buffalo Wings", price: 120.00, image: "../img/img3.jpg", 
            desc: "Deep-fried, unbreaded wings coated with our own special mixed hot sauce.", tag: 3, inCart: 0 },
            { productname: "Grilled Belly", price: 100.00, image: "../img/img4.jpg",
            desc: "Thick strips of tuna belly grilled to perfection over hot coals.", tag: 4, inCart: 0 },
            { productname: "Crispy Tilapia", price: 190.00, image: "../img/img5.jpg",
            desc: "A fried fish dish that even picky kids can't resist.",  tag: 5, inCart: 0 },
            { productname: "Salmon Sinigang", price: 190.00, image: "../img/img6.jpg",
            desc: "Pinoy classic! A delicious sour broth made tangy by tamarind, filled with vegetables and melt-in-your-mouth salmon belly.", tag: 6, inCart: 0 },
            { productname: "Calamares", price: 250.00, image: "../img/img7.jpg",
            desc: "Deep fried battered squid rings served with tomato sauce mayonnaise dip.",  tag: 7, inCart: 0 },
            { productname: "Crispy Crablets", price: 150.00, image: "../img/img8.jpg",
            desc: "Seasoned small crabs dredged in cornstarch and deep-fried until crispy.", tag: 8, inCart: 0 },
            { productname: "Baked Scallops", price: 220.00, image: "../img/img9.jpg",
            desc: "Baked fresh scallops topped with bread crumbs, butter, garlic, parsley and mozzarella.", tag: 9, inCart: 0 },
            { productname: "Papait", price: 70.00, image: "../img/img10.jpg", 
            desc: "Goat innards flavoured with bile, tamarind, and chillies, perfect to pair with your rice and beer.", tag: 10, inCart: 0 },
            { productname: "Kare Kare", price: 320.00, image: "../img/img11.jpg",
            desc: "A stew of beef with the most delicious sauce made from ground toasted rice and crushed peanuts.", tag: 11, inCart: 0 },
            { productname: "Bulalo", price: 250.00, image: "../img/img12.jpg",
            desc: "A tasty soup, rich with flavors seeped from the beef - a perfect company for a cool, rainy day. ", tag: 12, inCart: 0 },
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
        var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var titles = ids.map((id) => document.getElementById(`title${id}`));
        var prices = ids.map((id) => document.getElementById(`price${id}`));
        var images = ids.map((id) => document.getElementById(`img${id}`));
        var details = ids.map((id) => document.getElementById(`detail${id}`));
        
        ids.forEach((id, index) => {
            const addToCartButton = document.getElementById(`add-cart${id}`);
            addToCartButton.addEventListener('click', () => {
                addToCart(convertObject.dList[index], 1);
            });

            details[index].onclick = () => saveCurrentProduct(index);

            titles[index].innerHTML = convertObject.dList[index].productname;
            prices[index].innerHTML = "₱" + convertObject.dList[index].price + ".00";
            images[index].src = convertObject.dList[index].image;
        });
    }
}
