const nome = Symbol('Nome')
const numero = Symbol('Número')
const corUniforme = Symbol('Cor do uniforme')

const Jogador = {
    nome: 'J1',
}

Jogador[numero] = 10,
Jogador[corUniforme] = 'Amarelo'

for (p in Jogador) {
    console.log(p);
}

console.log(Jogador);
console.log(Jogador.nome)
console.log(Jogador[numero])
console.log(Jogador[corUniforme]);