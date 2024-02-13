const data = new Date()
const div_data = document.getElementById('div_data')
const div_relogio = document.getElementById('div_relogio')

let dia_m = data.getDate()
dia_m = dia_m<10?"0"+dia_m:dia_m

let mes = data.getMonth()
mes = mes<10?"0"+mes:mes

const data_r = `${dia_m}/${mes}/${data.getFullYear()}`
div_data.innerHTML = data_r

const relogio = ()=>{
    const data1 = new Date()
    let hora = data1.getHours()
    hora = hora<10?"0"+hora:hora
    let minuto = data1.getMinutes()
    minuto = minuto<10?"0"+minuto:minuto
    let segundo = data1.getSeconds()
    segundo = segundo<10?"0"+segundo:segundo
    const hora_completa = `${hora}:${minuto}:${segundo}`
    div_relogio.innerHTML = hora_completa
}

const intervalo = setInterval(relogio, 1000)

relogio()

// console.log(data)
// console.log(Date.now()) // timestamp

// console.log(data.toDateString())
// console.log(`Dia: ${data.getDate()}`)
// console.log(`Mês: ${data.getMonth()}`)
// console.log(`Dia: ${data.getFullYear()}`)