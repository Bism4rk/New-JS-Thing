const teclasNum = [...document.querySelectorAll('.num')] 
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')
const display = document.querySelector('.display')
const ton = document.querySelector('#ton')
const tlimpar = document.querySelector('#tlimpar')

teclasNum.forEach((el) => {
    el.addEventListener('click', (evt)=>{
        display.innerHTML += evt.target.innerHTML
    })
})

teclasOp.forEach((el) => {
    el.addEventListener('click', (evt)=>{
        display.innerHTML += evt.target.innerHTML
    })
})

tlimpar.addEventListener('click', (evt) =>{
    display.innerHTML = 0
})