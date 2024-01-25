class Pessoa{
    constructor(pnome){
        this.nome = pnome
    }
}

let p1 = new Pessoa('Bruno')
let p2 = new Pessoa('Joanélison')
let p3 = new Pessoa(10)


console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)