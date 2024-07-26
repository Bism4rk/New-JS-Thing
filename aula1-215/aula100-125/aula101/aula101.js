let nome = new String('Bruno Pinho Campos')
let nome2 = new String('Bruno Pinho Campo')
let canal = new String('CFB Cursos')

console.log(nome)
console.log(typeof(nome))

console.log(nome.charAt(0))
console.log(nome.charCodeAt(0))

console.log(nome.concat(canal))

console.log(canal);
console.log(canal.lastIndexOf('C'))

console.log(nome.localeCompare(nome2))

console.log(nome.replace('o', 'u'))

console.log(nome.search('o'))

let sobrenome = nome.slice(6, 11)
console.log(sobrenome)

let arr_nome = nome.split(" ")
console.log(arr_nome)
