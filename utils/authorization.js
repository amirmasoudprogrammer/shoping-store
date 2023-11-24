import {getCookie} from "./Cookie.js";

const authHandler = () => {
    const cookie = getCookie();
    const url = location.href
    console.log(cookie, url)
if (cookie && url.includes("auth.html")){
    location.assign("index.html")
    return false
}else if (!cookie && url.includes("dashboard.html")){
    location.assign("index.html")
    return false
}

}

export default authHandler;