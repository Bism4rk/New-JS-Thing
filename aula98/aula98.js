class Jogador{
    constructor(nome) {
        this.id = Symbol()
        this.nome = nome
    }
}

let jogadores = [new Jogador('J1'), new Jogador('J2'), new Jogador('J3'), new Jogador('J4'), new Jogador('J1'), new Jogador('J3'),]
let s = []

let s_jogadores = jogadores.filter((j)=>{
    return j.nome == 'J1'
})

s = s_jogadores.map((j)=>{
    return j.id
})

console.log(jogadores);
console.log(s_jogadores)
console.log(s);