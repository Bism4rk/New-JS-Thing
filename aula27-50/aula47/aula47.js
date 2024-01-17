const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnPesquisar = document.querySelector('#btnPesquisar')
const resultado = document.querySelector('#resultado')

const elementos_array = ['HTML', 'CSS', 'JavaScript']
p_array.innerHTML = `[${elementos_array}]`

btnPesquisar.addEventListener('click', (evt)=>{
    resultado.innerHTML = 'Valor não encontrado.'
    const ret = elementos_array.find((e, i)=>{
        if(e.toUpperCase()==txt_pesquisar.value.toUpperCase()){
            resultado.innerHTML = `${e}, na posição ${i}`
        }
    })
    console.log(ret)
})