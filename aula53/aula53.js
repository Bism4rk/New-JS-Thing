const caixa = document.querySelector('#caixa')

let mapa = new Map()
mapa.set("curso", "JavaScript")
mapa.set(10, "CFB Cursos")
mapa.set(1, 100)
mapa.set("canal", 100)

console.log(mapa)


mapa.delete(1)

mapa.forEach((el)=>{
    console.log(el);
})

let pes = 106
let res = ""
if(mapa.has(pes)){
    res = `A chave existe na coleção com o valor ${mapa.get(pes)}!`
    res += '<br>'
} else{
    res = "A chave NÃO está na coleção!"
    res += '<br>'
}

res += `O tamanho da coleção é ${mapa.size}!`
caixa.innerHTML += res

