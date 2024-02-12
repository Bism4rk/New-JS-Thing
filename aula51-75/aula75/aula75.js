const numero = document.getElementById('numero')
const btn_promessa = document.getElementById('btn_promessa')

btn_promessa.addEventListener('click', (evt)=>{
    numero.innerHTML = 'Processando...'
    console.log(promessa())
    // .then((retorno)=>{
    //     numero.innerHTML = retorno
    //     numero.classList.remove('erro')
    //     numero.classList.add('ok')
    // })
    // .catch((retorno)=>{
    //     numero.innerHTML = retorno
    //     numero.classList.remove('ok')
    //     numero.classList.add('erro')
    // })
})

const promessa = ()=>{
    let promise = new Promise((res, rej) => {
        let resultado = false
        let tempo = 3000
        setTimeout(() => {
            if (resultado) {
                res('Deu tudo certo!')
                numero.innerHTML = 'Deu tudo certo!'
                numero.classList.remove('erro')
                numero.classList.add('ok')
            } else {
                rej('Deu tudo errado...')
                numero.innerHTML = 'Deu tudo errado...'
                numero.classList.remove('ok')
                numero.classList.add('erro')
            }
        }, tempo)
    })
    return promise
}

numero.innerHTML = 'Esperando...'
