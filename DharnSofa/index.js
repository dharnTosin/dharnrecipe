let toggleCartBtn = document.querySelector('.shopping-cart');
let cartItems = document.querySelector(".cart-overlay");
let cancelCart = document.querySelector(".cancel-icon");
let imageBox = document.querySelector(".img-feature");
let img_featureIcon = document.querySelector(".img-icon")


// addEventListener To Toggle Button
toggleCartBtn.addEventListener('click', function(){
    cartItems.classList.toggle("show-cart");
})

// EventListener To the cancel button
cancelCart.addEventListener("click", function(){
    cartItems.classList.remove("show-cart");
})

//MouseOver 
// imageBox.addEventListener("mouseover", function(){
//     // img_featureIcon.style.opacity = 1;
//     console.log("Thia is image icon")
// })

