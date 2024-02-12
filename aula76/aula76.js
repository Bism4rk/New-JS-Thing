const data = new Date()
const div_data = document.getElementById('div_data')
const div_relogio = document.getElementById('div_relogio')

let dia_m = data.getDate()
dia_m = dia_m<10?"0"+dia_m:dia_m

let mes = data.getMonth()
mes = mes<10?"0"+mes:mes

const data_r = `${dia_m}/${mes}/${data.getFullYear()}`
div_data.innerHTML = data_r

console.log(data.getHours())
console.log(data.getMinutes())
console.log(data.getSeconds())

div_relogio.innerHTML = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`


// console.log(data)
// console.log(Date.now()) // timestamp

// console.log(data.toDateString())
// console.log(`Dia: ${data.getDate()}`)
// console.log(`Mês: ${data.getMonth()}`)
// console.log(`Dia: ${data.getFullYear()}`)