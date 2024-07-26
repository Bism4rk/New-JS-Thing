const timer = document.querySelector('#timer')
const tmpini = Date.now()

const contador = () =>{
    const tmpatual = Date.now()
    let cont = tmpatual - tmpini
    let seg = Math.floor((tmpatual - tmpini) / 1000)
    console.log(seg);
}

const intervalo = setInterval(contador, 1000)
