const caixa = document.querySelector('#caixa')
let cores = ['Azul', 'Verde', 'Vermelho', ['Claro', 'Escuro', 'Médio']]
let cursos = ['HTML', 'CSS', 'JavaScript', cores]  

// cursos.pop() // Tira o último
// cursos.push('C++') // Coloca no fim
// cursos.shift() // Tira o 1º
// cursos.unshift('Python') // Coloca no início

console.log(cores[3][2])

cursos.map((el)=>{
    let p = document.createElement('p')
    p.innerHTML = el
    caixa.appendChild(p)
})

// cursos[2] = 'C++'
// console.log(cursos[2]);
// cursos[2] = 2024
// console.log(cursos[2]);
