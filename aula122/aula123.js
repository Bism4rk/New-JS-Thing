const p_temp = document.getElementById('p_temp') 
const p_nivel = document.getElementById('p_nivel')
const p_press = document.getElementById('p_press')

const obterDados = () =>{
    const endpoint = 'https://de5a698e-31ab-45a2-a91e-8753efb4ee1e-00-1b8jos84beu0p.kirk.replit.dev/'
    fetch(endpoint)
    .then(res=>res.json())
    .then(dados=>{
        console.log(dados);
        p_temp.innerHTML = `Temperatura: ${dados.temperatura}`
        p_nivel.innerHTML = `Nível: ${dados.nivel}`
        p_press.innerHTML = `Pressão: ${dados.pressao}`
    })
}

let intervalo = setInterval(obterDados, 3000);