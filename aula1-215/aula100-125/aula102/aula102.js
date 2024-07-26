let nome = new String('Bruno Pinho Campos')
let nome2 = new String('Bruno Pinho Campo')
let canal = new String('CFB Cursos')

// console.log(nome)
// console.log(typeof(nome))

// console.log(nome.charAt(0))
// console.log(nome.charCodeAt(0))

// console.log(nome.concat(canal))

// console.log(canal);
// console.log(canal.lastIndexOf('C'))

// console.log(nome.localeCompare(nome2))

// console.log(nome.replace('o', 'u'))

// console.log(nome.search('o'))

let sobrenome = nome.slice(6, 11)
console.log(sobrenome)

let arr_nome = nome.split(" ")
console.log(arr_nome)

let parte1 = nome.substring(0,5)
console.log(parte1)

let parte2 = nome.substring(6,11)
console.log(parte2)

let parte3 = nome.substring(12,18)
console.log(parte3)

let nomeMaiusculo = nome.toUpperCase(nome)
console.log(nomeMaiusculo)

let nomeMinisculo = nome.toLowerCase(nome)
console.log(nomeMinisculo)

console.log(nome.valueOf())

let num = 10
console.log(typeof(num.toString()));