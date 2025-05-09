const bgColor = document.querySelector(".page");
const contColor = document.querySelector(".container");
const imgURL = document.querySelector("#head-img");
const shoppingBtn = document.getElementById("shopping-btn");
const shoppingList = document.querySelector(".shopping-list");
const clsShopping = document.getElementById("cls-shopping");
const card = document.querySelectorAll("card");
const addToCard = document.querySelectorAll(".add-product");
const removeCard = document.querySelectorAll(".remove-from-card");
const cardProduct = document.querySelector(".card-product1");
const totalPrice = document.getElementById("total-price");

document.getElementById("btn-white").addEventListener("click", () => {
  imgURL.src = "images/imageWhite.webp";
});

document.getElementById("btn-black").addEventListener("click", () => {
  imgURL.src = "images/imageBlack.webp";
});

document.getElementById("btn-white").addEventListener("click", () => {
  imgURL.src = "images/imageWhite.webp";
  bgColor.style.background = "#DED6CF";
  contColor.style.background = "#cabdb2";
});

document.getElementById("btn-black").addEventListener("click", () => {
  imgURL.src = "images/imageBlack.webp";

  contColor.style.background = "#342926";
  bgColor.style.background = "#918484";
});

document.getElementById("btn-blue").addEventListener("click", () => {
  imgURL.src = "images/imageBlue.webp";
  bgColor.style.background = "#a3bfdd";
  contColor.style.background = "#5E7B9A";
});

document.getElementById("btn-pink").addEventListener("click", () => {
  imgURL.src = "images/imagePink.webp";
  bgColor.style.background = "#DED6CF";
  contColor.style.background = "#dfbfbf";
});
shoppingBtn.addEventListener("click", () => {
  shoppingList.style.width = "25%";
});
clsShopping.addEventListener("click", () => {
  shoppingList.style.width = "0";
});

cardArry = JSON.parse(localStorage.getItem("prodcut")) || [];
productNames = JSON.parse(localStorage.getItem("prodcutNames")) || {};
productPrices = JSON.parse(localStorage.getItem("productPrices")) || {};
let total = JSON.parse(localStorage.getItem("totalPrices")) || 0;

showCardProduct();

addToCard.forEach((button) => {
  button.addEventListener("click", (event) => {
    const productDiv = event.target.closest(".card");
    const productId = productDiv.getAttribute("data-id");
    const productPrice = parseFloat(productDiv.getAttribute("data-price"));
    const prodcutName = productDiv.querySelector(".product-name").textContent;
    if (cardArry.includes(productId)) {
      alert("the product alredy in card");
    } else {
      cardArry.push(productId);
      productNames[productId] = prodcutName;
      productPrices[productId] = productPrice;
      total = total + productPrice;
      totalPrice.innerHTML = total
        console.log(total) 
      setInLocalStorage ();  
    }
    shoppingList.style.width = "25%";
    removeAllItems.style.display ="block"


    showCardProduct();
  });
});

function showCardProduct() {
  cardProduct.innerHTML = "";
  cardArry.forEach((productId) => {
    let prodcutElemnt = document.createElement("div");
    let prodcutPrice = productPrices[productId] || 0;

    prodcutElemnt.innerHTML = ` 
        <h3>${productNames[productId]}</h3>
        <p> $${prodcutPrice.toFixed(2)} </p>
        <button class="remove-from-card" onclick="removeItem(${productId})" data-id="${productId}">remove</button>
        `;

    cardProduct.appendChild(prodcutElemnt);
  });

  totalPrice.innerHTML = total

}



// remove from card //
function removeItem (e){   
    cardArry = cardArry.filter(function (item){
        return item !== e.toString()
    })

    delete productNames[e];
    let proPrice =  Number(productPrices[e])

    delete productPrices[e];
    console.log(proPrice)
    total = total - proPrice ;

    totalPrice.innerHTML = total

    setInLocalStorage ();    
    showCardProduct();
}



// remove all products 
function removeAll() {

    productNames = {}
    productPrices = {}
    cardArry=[]
    total = 0;
    
    
    totalPrice.innerHTML = total
    removeAllItems.style.display ="none"
    
    setInLocalStorage ();    
    showCardProduct();
}

function setInLocalStorage () {
    localStorage.setItem("prodcutNames", JSON.stringify(productNames));
    localStorage.setItem("prodcut", JSON.stringify(cardArry));
    localStorage.setItem("productPrices", JSON.stringify(productPrices));
    localStorage.setItem("totalPrices", JSON.stringify(total));

}
showCardProduct();
