const numero = document.getElementById('numero')

let promise = new Promise((res, rej) => {
    let resultado = true
    let tempo = 3000
    setTimeout(() => {
        if (resultado) {
            res('Deu tudo certo!')
        } else {
            rej('Deu tudo errado...')
        }
    }, tempo)
});

promise.then((retorno)=>{
    numero.innerHTML = retorno
    numero.classList.remove('erro')
    numero.classList.add('ok')
})
promise.catch((retorno)=>{
    numero.innerHTML = retorno
    numero.classList.remove('ok')
    numero.classList.add('erro')
})

numero.innerHTML = 'Processando...'
