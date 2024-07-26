class Carro{
    // classe PAI
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function() {
        this.ligado = true
    }
    desligar = function() {
        this.ligado = false
    }
    setCor = function (cor) {
        this.cor = cor
    }
}

class Militar extends Carro{
    // classe FILHO
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor('Verde')
    }
    atirar = function() {
        if(this.municao > 0){
            this.municao--
        }
    }
}

class Utilitario extends Carro{
    constructor(nome, portas, lugares){
        super(nome, portas)
        this.lugares = lugares
    }
}

const c1 = new Carro('Normal', 4)
c1.setCor('Azul')
c1.ligar()
console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${c1.ligado?"Sim":"Não"}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log('-----------------------')

const c2 = new Militar('Lutador', 1, 100, 50)
c2.ligar()
c2.setCor('Azul')
c2.atirar()
console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${c2.ligado?"Sim":"Não"}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
console.log(`Cor: ${c2.cor}`)
console.log('-----------------------')

const c3 = new Utilitario('Jipão Comforto', 5, 7)
c3.ligar()
c3.setCor('Amarelo')
console.log(`Nome: ${c3.nome}`)
console.log(`Portas: ${c3.portas}`)
console.log(`Lugares: ${c3.lugares}`)
console.log(`Ligado: ${c3.ligado?"Sim":"Não"}`)
console.log(`Velocidade: ${c3.vel}`)
console.log(`Cor: ${c3.cor}`)
console.log('-----------------------')