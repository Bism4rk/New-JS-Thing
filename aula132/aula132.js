const timer = document.querySelector('#timer')
const btn_iniciar = document.querySelector('#btn_iniciar')
const btn_parcial = document.querySelector('#btn_parcial')
const btn_parar = document.querySelector('#btn_parar')
const btn_zerar = document.querySelector('#btn_zerar')
const parciaisRegistradas = document.querySelector('#parciaisRegistradas')

let intervalo = null

let tmpini = Date.now()

const contador = () =>{
    const tmpatual = Date.now()
    let cont = tmpatual - tmpini
    let seg = Math.floor((tmpatual - tmpini) / 1000)
    timer.innerHTML = converter(seg)
}


const converter = (seg) =>{
    const hora = Math.floor(seg / 3600)
    let resto = seg % 3600
    const minuto = Math.floor(resto / 60)
    const segundo = Math.floor(resto % 60)
    const tempoFormatado = `${(hora<10?"0"+hora:hora)}:${(minuto<10?"0"+minuto:minuto)}:${(segundo<10?"0"+segundo:segundo)}`
    return tempoFormatado
}

btn_iniciar.addEventListener('click', (evt)=>{
    tmpini = Date.now()
    intervalo = setInterval(contador, 1000)    
})

btn_parcial.addEventListener('click', (evt)=>{
    let parcial = '<div>' + timer.innerHTML + '</div>'
    parciaisRegistradas.innerHTML += parcial
})

btn_parar.addEventListener('click', (evt)=>{
    clearInterval(intervalo)
})

btn_zerar.addEventListener('click', (evt)=>{
    tmpini = Date.now()
    timer.innerHTML = '00:00:00'
    parciaisRegistradas.innerHTML = ''
})
