const endpoint = 'https://de5a698e-31ab-45a2-a91e-8753efb4ee1e-00-1b8jos84beu0p.kirk.replit.dev/'
fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
    console.log(dados);
})