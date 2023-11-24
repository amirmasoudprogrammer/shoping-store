import {postdata} from "./utils/httpReq.js";
import { setCookie} from "./utils/Cookie.js";
import authHandler from "./utils/authorization.js";
import  validform  from "./utils/validation.js";


const inputbox = document.querySelectorAll("input")
const loginbox = document.querySelector("button")


const submitHandler = async (event) => {
    event.preventDefault()
    const username = inputbox[0].value;
    const Password = inputbox[1].value;

    const validinputs= validform(username,Password)
    if (!validinputs) return

    const datas = {
        username: "mor_2314",
        password: "83r5^_"
    }
    const response = await postdata("auth/login", datas)
    console.log(response)


    setCookie(response.token)
    location.assign("index.html")

}

loginbox.addEventListener("click", submitHandler);
document.addEventListener("DOMContentLoaded",authHandler)