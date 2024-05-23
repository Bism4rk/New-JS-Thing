const endpoint = "http://localhost:1880/contatos"
fetch(endpoint)
.then(res=>res.json())
.then(res=>{
    console.log(res);
}) 