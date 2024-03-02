let nome = new String('Bruno Pinho Campos')

console.log(nome.startsWith('B'))
console.log(nome.endsWith('B'))
console.log(nome.includes('nh'))
console.log(nome.repeat(4))
console.log(nome.codePointAt(0))
console.log(nome.codePointAt(1))
console.log(nome.codePointAt(2))
console.log(nome.codePointAt(3))
console.log(nome.codePointAt(4))
console.log(nome.codePointAt(5))

console.log(String.fromCodePoint(66, 114, 117, 110, 111, 33));