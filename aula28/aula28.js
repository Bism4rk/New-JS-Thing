// const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React']
// let c = cursos.map((el, i) =>{
//     return el
// })

// console.log(c)

// let el = document.getElementsByTagName('div')
// el = [...el]
// console.log(el)
// el.map((e, i)=>{
//     e.innerHTML += ` - Posição: ${i}`
// })

// const el = document.getElementsByTagName('div')
// const val = Array.prototype.map.call(el, ({innerHTML}) =>(innerHTML)) 
// console.log(val)

const converterInt = (e) => parseInt(e)
const dobrar = (e) => e*2
let num = ['1', '2', '3', '4', '5']
console.log(num)
num = num.map(converterInt)
console.log(num)
num = num.map(dobrar)
console.log(num)