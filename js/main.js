const bgColor = document.querySelector(".page")
const contColor = document.querySelector(".container")
const imgURL = document.querySelector("#head-img")
const shoppingBtn = document.getElementById("shopping-btn")
const shoppingList = document.querySelector(".shopping-list")
const clsShopping = document.getElementById("cls-shopping")


document.getElementById ("btn-white").addEventListener("click", ()=>{
    imgURL.src = "images/imageWhite.webp"

})

document.getElementById ("btn-black").addEventListener("click", ()=>{
    imgURL.src = "images/imageBlack.webp"

})

document.getElementById ("btn-white").addEventListener("click", ()=>{
    imgURL.src = "images/imageWhite.webp";
    bgColor.style.background = "#DED6CF";
    contColor.style.background = "#cabdb2"
    
})

document.getElementById ("btn-black").addEventListener("click", ()=>{
    imgURL.src = "images/imageBlack.webp";
    
    contColor.style.background = "#342926";
    bgColor.style.background = "#918484"
    
})

document.getElementById ("btn-blue").addEventListener("click", ()=>{
    imgURL.src = "images/imageBlue.webp";
    bgColor.style.background = "#a3bfdd";
    contColor.style.background = "#5E7B9A"
    
})

document.getElementById ("btn-pink").addEventListener("click", ()=>{
    imgURL.src = "images/imagePink.webp";
    bgColor.style.background = "#DED6CF";
    contColor.style.background = "#dfbfbf"
    
})
shoppingBtn.addEventListener ("click", ()=>{
    shoppingList.style.display = "block"
})
clsShopping.addEventListener ("click", ()=>{
    shoppingList.style.display = "none"
})
