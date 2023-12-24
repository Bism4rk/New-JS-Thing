let v1 = 10
let v2 = "10"
let v3 = v1 === v2
let v4 = {nome: "Bruno"}

var c1 = `Valor: ${v1} - Tipo: ${typeof v1}`
var c2 = `Valor: ${v2} - Tipo: ${typeof v2}`
var c3 = `Valor: ${v3} - Tipo: ${typeof v3}`
var c4 = `Valor: ${v4} - Tipo: ${typeof v4}`

var space = document.getElementById('thing')
space.innerHTML = `<p>${c1}<br>${c2}<br>${c3}<br>${c4}</p>`

