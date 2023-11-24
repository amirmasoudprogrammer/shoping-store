import authHandler from "./utils/authorization.js";
import {getdataapi} from "./utils/httpReq.js";

const textuser = document.getElementById("container");

const buttons= document.querySelector("button")

const renderuser = (user) =>{
    textuser.innerHTML = ""

    user.forEach((user) => {

        const JSX = `
        <div id="card"> 
        <h3>${user.id}</h3>
        <div>
        <p><i class="fa-solid fa-user"></i> name:</p>
        <span>${user.name.firstname}  ${user.name.lastname}</span>
</div>
<div>
        <p><i class="fa-solid fa-paperclip"></i> username:</p>
        <span>${user.username}</span>
</div>
<div>
        <p><i class="fa-solid fa-envelope"></i> Emali:</p>
        <span>${user.email} </span>
</div>
<div>
        <p><i class="fa-solid fa-phone"></i> phone:</p>
        <span>${user.phone} </span>
</div>
<div>
        <p><i class="fa-solid fa-location-dot"></i> Address:</p>
        <span>${user.address.city} - {user.address.street} - {user.address.zipcode}</span>
</div>
        </div> 
        
        
        `

        textuser.innerHTML +=JSX

    })

}

const init = async () => {
authHandler();
const user = await getdataapi("users")
renderuser(user)
}

const startbuttons = () =>{
    document.cookie = "token=; max-age=0"
    location.assign("index.html")
}

document.addEventListener("DOMContentLoaded",init)
buttons.addEventListener("click",startbuttons)