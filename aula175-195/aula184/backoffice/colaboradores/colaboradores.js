const endpoint_todosusuarios = `http://localhost:1880/todosusuarios`
fetch(endpoint_todosusuarios)
.then(res=>res.json())
.then(res=>{
    console.log(res)
})