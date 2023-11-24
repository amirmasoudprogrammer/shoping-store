import {getCookie} from "./utils/Cookie.js";
import {getdataapi} from "./utils/httpReq.js";
import {string} from "./utils/stringtext.js";

const loginbuttn = document.getElementById("login")
const dashbutton = document.getElementById("dashboard");
const maincont = document.getElementById("products");
const buttons = document.querySelector("button");
const boxinputs = document.querySelector("input");
const listItem = document.querySelectorAll("li")

let apidataget = null
let search = ""
let category = "all"


const showporducts = (products) => {
    maincont.innerHTML = "";

    products.forEach((product) => {
        const JSX = `
      <div>
      <img src=${product.image} alt=${product.title}>
      <h4>${string(product.title)}</h4>
       <div id="price">
      <p>$ ${product.price}</p>
      <button> 
      buy
      <i class="fa-solid fa-cart-shopping"></i>
      </button>
</div>
<div id="rate">
<span>${product.rating.rate}</span>
</div>
<div id="count">
<span>${product.rating.count}</span>
</div>
</div>   

      
      
      `
        maincont.innerHTML += JSX
    })


}

const init = async () => {
    const gookie = getCookie();
    if (gookie) {
        loginbuttn.style.display = "none";
    } else {
        dashbutton.style.display = "none";
    }
    apidataget = await getdataapi('products');
    showporducts(apidataget)
}

const filterProducts = () => {
    const proudctsfilter = apidataget.filter((product) => {
        if (category === "all") {
            return product.title.toLowerCase().includes(search)
        } else {
            return(product.title.toLowerCase().includes(search) &&
                product.category.toLowerCase() === category
            );
        }

    })



    showporducts(proudctsfilter)
}

const startevent = () => {
    search = boxinputs.value.trim().toLowerCase()

    filterProducts()
}

const filterhand = (event) => {
    category = event.target.innerText.toLowerCase()

    listItem.forEach((li) => {
        if (li.innerText.toLowerCase() === category) {
            li.className = "selected";
        } else {
            li.className = "";
        }
    });

    filterProducts()

}


buttons.addEventListener("click", startevent)
listItem.forEach((li) => li.addEventListener("click", filterhand))
document.addEventListener("DOMContentLoaded", init)

