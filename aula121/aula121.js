const f_texto = document.querySelector('#f_texto')
const p_texto = document.querySelector('#p_texto')
const btn_texto = document.querySelector('#btn_texto')

btn_texto.addEventListener('click', (evt)=>{
    // f
})

let num = 10
const curso = 'JavaScript'
localStorage.setItem('numero', num)
// localStorage.setItem('numero', 49)
localStorage.setItem('nome', 'Bruno')
localStorage.setItem('canal', 'CFB Cursos')
localStorage.setItem('curso', curso)
// console.log(localStorage.getItem('numero'))
// console.log(localStorage.getItem('nome'))
// console.log(localStorage.getItem('canal'))
// console.log(localStorage.getItem('curso'))
// console.log(localStorage.key(0));
// console.log(localStorage.length);
localStorage.clear()

sessionStorage.setItem('numero', num)
// sessionStorage.setItem('numero', 49)
sessionStorage.setItem('nome', 'Bruno')
sessionStorage.setItem('canal', 'CFB Cursos')
sessionStorage.setItem('curso', curso)