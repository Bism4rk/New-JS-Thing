const tmp = document.querySelector('#tmp')
const nvl = document.querySelector('#nvl')
const prs = document.querySelector('#prs')

let dados = {
    temperatura: 0,
    nivel: 0,
    pressao: 0,
    set valores(val){
        this.temperatura = val.temperatura
        this.nivel = val.nivel
        this.pressao = val.pressao
        tmp.innerHTML = this.temperatura
        nvl.innerHTML = this.nivel
        prs.innerHTML = this.pressao
    },
    get valores(){
        return [this.temperatura, this.nivel, this.pressao]
    }
}

const buscarDados = () =>{
    const endpoint = 'https://685a60b7-b0be-4e7e-a455-1e21380551b9-00-2pd2oynfmxct3.worf.replit.dev/'
    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        dados.valores = res
    })
}

let intervalo = setInterval(buscarDados, 1000)

console.log(dados.valores);