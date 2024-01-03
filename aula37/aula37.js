const caixa1 = document.querySelector('#caixa1')
const btn_c1 = document.querySelector('#c1')
const cursos = [...document.querySelectorAll('.curso')]

caixa1.addEventListener("click", (evt)=>{
    console.log("Clicou!")
    console.log(evt)
})

cursos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        evt.stopPropagation()
    })
})
