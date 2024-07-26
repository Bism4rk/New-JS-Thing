const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative']


cursos.map((el,i)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute(`id`, `c${i}`)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = el

    const btn_lixeira = document.createElement('img')
    btn_lixeira.setAttribute('src', './bin_6033424.png')
    btn_lixeira.setAttribute('class', 'btn_lixeira')
    novoElemento.appendChild(btn_lixeira)
    btn_lixeira.addEventListener('click', (evt)=>{
        caixa1.removeChild(evt.target.parentNode)
    })

    caixa1.appendChild(novoElemento)
})
