images = document.getElementsByClassName("thumb-image");
mainImage = document.getElementById("mainImage");
addToCart = document.getElementById("addToCart");

let cartBasket = document.getElementById("cartButton");
let cartContainer = document.getElementById("cartContainer");
let imageAvatar = document.getElementById("imageAvatar");
let totalPrice = document.getElementById("totalPrice");
let totalSelected = document.getElementById('totalSelected');
let totalItemsTip = document.getElementById("totalItemsTip");
let totalItemsDiv = document.getElementById("totalItemsDiv");


let totalQuantity = document.getElementById("totalQ");
incrementQuantity = document.getElementById("incrementQ");
decrementQuantity = document.getElementById("decrementQ");

filledCart = document.getElementById("filledCart");
emptyCart = document.getElementById("emptyCart");


const imagePaths = ["./assets/image-product-1.jpg", "./assets/image-product-2.jpg", "./assets/image-product-3.jpg", "./assets/image-product-4.jpg"]


const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})


addToCart.addEventListener("click", () => {
    totalItemsTip.innerText = totalSelected.innerHTML;
    totalItemsDiv.style.visibility = "visible";
    totalSelected.innerText = totalQuantity.innerText;
    totalPrice.innerText =  "$"+ (parseInt(totalQuantity.innerText) * 125).toString();
        
    if(parseInt(totalSelected.innerText.toString()) <= 0 )
    {
        if(!filledCart.classList.contains("removed-content"))
        {
            filledCart.classList.add("removed-content");
        }
        if(emptyCart.classList.contains("removed-content"))
        {
            emptyCart.classList.remove("removed-content");
        }
    }
    else
    {
        if(!emptyCart.classList.contains("removed-content"))
        {
            emptyCart.classList.add("removed-content");
        }

        if(filledCart.classList.contains("removed-content"))
        {
            filledCart.classList.remove("removed-content");
        }
    } 

})

imageAvatar.addEventListener("mouseenter",() =>{
    let avatarContainer = document.getElementById("avatarContainer");
    avatarContainer.style.visibility = "visible";
})

imageAvatar.addEventListener("mouseleave",() => {
    let avatarContainer = document.getElementById("avatarContainer");
    avatarContainer.style.visibility = "hidden";
})


incrementQuantity.addEventListener("click", () => {

    if (parseInt(totalQuantity.innerText.toString()) < 3) {
        totalQuantity.innerText = (parseInt(totalQuantity.innerText.toString()) + 1).toString()
       // totalPrice.innerText =  "$" + (parseInt(totalQuantity.innerText) * 125).toString();
        // totalSelected.innerText = totalQuantity.innerText;


    }
})

decrementQuantity.addEventListener("click", () => {
    if (parseInt(totalQuantity.innerText.toString()) > 0) {
        totalQuantity.innerText = (parseInt(totalQuantity.innerText.toString()) - 1).toString()
       // totalSelected.innerText = totalQuantity.innerText;

       

     
    }
})



cartBasket.addEventListener("click", () => {
    if (cartContainer.style.visibility == "visible") {
        cartContainer.style.visibility = "hidden";
    }
    else {

        console.log(totalItemsTip.innerText.toString());
    
        if(parseInt(totalItemsTip.innerText.toString()) <= 0 )
        {
            if(!filledCart.classList.contains("removed-content"))
            {
                filledCart.classList.add("removed-content");
            }
            if(emptyCart.classList.contains("removed-content"))
            {
                emptyCart.classList.remove("removed-content");
            }
        }
        else
        {
            if(!emptyCart.classList.contains("removed-content"))
            {
                emptyCart.classList.add("removed-content");
            }

            if(filledCart.classList.contains("removed-content"))
            {
                filledCart.classList.remove("removed-content");
            }
        } 


        cartContainer.style.visibility = "visible"
    }


})

document.addEventListener('click', function (e) {
    if (cartBasket.contains(e.target)) {
        cartBasket.addEventListener("click", () => {
            if (cartContainer.style.visibility == "visible") {
                cartContainer.style.visibility = "hidden";
            }
            else {
                cartContainer.style.visibility = "visible"
            }


        })
    }

    else if (cartContainer.style.visibility == "visible") {
        if (!cartContainer.contains(e.target)) {
            cartContainer.style.visibility = 'hidden'
        }

    }
});

for (let index = 0; index < images.length; ++index) {
    images.item(index).addEventListener("click", () => {
        currentImage = images.item(index);
        parentNode = currentImage.parentNode;
        if (parentNode.classList.contains("not-visible")) {
            for (let innerIndex = 0; innerIndex < images.length; ++innerIndex) {

                if (images.item(innerIndex).classList.contains("add-opacity")  ) {
                    images.item(innerIndex).classList.remove("add-opacity");
                    images.item(innerIndex).parentNode.classList.add("not-visible");
                }
            }
         
            mainImage.src = imagePaths[index];
            currentImage.classList.add("add-opacity");
            parentNode.classList.remove("not-visible");



        }

    })
}

for (let index = 0; index < images.length; ++index) {
    images.item(index).addEventListener("mouseenter", () => {
        currentImage = images.item(index);
        parentNode = currentImage.parentNode;
        if(parentNode.classList.contains("not-visible"))
        {
            currentImage.classList.add("add-opacity");
        }
        
    })

    images.item(index).addEventListener("mouseleave", () => {
        currentImage = images.item(index);
        parentNode = currentImage.parentNode;
        if(parentNode.classList.contains("not-visible"))
        {
        currentImage.classList.remove("add-opacity");
        }
    })
}