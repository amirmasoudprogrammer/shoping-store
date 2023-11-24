const base_url= "https://fakestoreapi.com";

const postdata=async (path,data) => {
try {

    const response = await fetch(`${base_url}/${path}`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{"Content-Type": "application/json"},
    });
    const json = await response.json()
    return json
} catch (error){
alert("an error")
}
}

const getdataapi =async (path) =>{
    try {
        const respons = await fetch(`${base_url}/${path}`)
        const json= await respons.json();
        return json
    }catch (error){
        alert(error.message)
    }
}



export { postdata  , getdataapi}