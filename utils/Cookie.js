const setCookie = (data) =>{
    document.cookie = `token=${data};max-age=${24 * 60 * 60}; path=/`;
}

const getCookie  = () =>{
    const Cookie = document.cookie;
    if (Cookie){
        const cookieArray = Cookie.split("=")
        return {
            [cookieArray[0]]:cookieArray[1],
        };
    }else {
        return false
    }
}
export { setCookie , getCookie}