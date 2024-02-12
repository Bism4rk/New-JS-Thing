const caixa = document.querySelector('#caixa')

const canal = 'CFB Cursos'
const curso = 'JavaScript'
// const frase = 'Esse é o curso de ' + curso + ' do canal ' + canal + '!'
const frase = `Este é o <br> curso de ${curso} do <br> canal ${canal}!`

const carros = ['Polo', 'Golf', 'T-Cross', 'HRV']
let ul = `<ul>`
carros.map((el)=>{
    ul += `<li> ${el} </li>`
})
ul += `</ul>`

caixa.innerHTML = ul