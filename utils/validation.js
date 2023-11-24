const validUsername = (username) => {
    const regex = /^[a-zA-Z\d_]{4,16}$/;
    const result = regex.test(username)
    return result
}

const validPassword = (Password) => {
    const regex = /^.{4,20}$/;
    const result = regex.test(Password)
    return result
}
const validform = (username, Password) => {
    const vildname = validUsername(username)
    const vildpassword = validPassword(Password)
    if (vildname && vildpassword){
        return true
    }else if (!vildname){
        alert("نام کاربری شما اشتباه است ")
    }else if (!vildpassword){
        alert("رمز شما یا کوتاه هست یا اشتباه وارد کردید")
    }
}
export default validform;