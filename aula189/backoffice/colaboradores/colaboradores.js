const dadosGrid = document.querySelector('#dadosGrid')
const btn_adicionar = document.querySelector('#btn_adicionar')
const btn_editar = document.querySelector('#btn_editar')
const btn_deletar = document.querySelector('#btn_deletar')
const btn_fecharPopup = document.querySelector('#btn_fecharPopup')
const btn_cancelarPopup = document.querySelector('#btn_cancelarPopup')
const btn_gravarPopup = document.querySelector('#btn_gravarPopup')
const f_tipoColab = document.querySelector('#f_tipoColab')

const novoColaborador = document.querySelector('#novoColaborador')


const endpoint_todosusuarios = `http://localhost:1880/todosusuarios`

fetch(endpoint_todosusuarios)
.then(res=>res.json())
.then(res=>{
    console.log(res)
    dadosGrid.innerHTML = ""
    res.forEach(el => {
        const divLinha = document.createElement('div')
        divLinha.setAttribute('class', 'linhaGrid')

        const divc1 = document.createElement('div')
        divc1.setAttribute('class', 'colunaLinhaGrid c1')
        divc1.innerHTML = el.n_usuario_usuario
        divLinha.appendChild(divc1)

        const divc2 = document.createElement('div')
        divc2.setAttribute('class', 'colunaLinhaGrid c2')
        divc2.innerHTML = el.s_nome_usuario
        divLinha.appendChild(divc2)

        const divc3 = document.createElement('div')
        divc3.setAttribute('class', 'colunaLinhaGrid c3')
        divc3.innerHTML = el.n_tipousuario_tipousuario
        divLinha.appendChild(divc3)

        const divc4 = document.createElement('div')
        divc4.setAttribute('class', 'colunaLinhaGrid c4')
        divc4.innerHTML = el.s_status_usuario
        divLinha.appendChild(divc4)

        const divc5 = document.createElement('div')
        divc5.setAttribute('class', 'colunaLinhaGrid c5')
        divc5.innerHTML = "money cash hoes"
        divLinha.appendChild(divc5)


        dadosGrid.appendChild(divLinha)
    });
})


const endpoint_tiposcolab = `http://localhost:1880/tiposcolab`
fetch(endpoint_tiposcolab)
.then(res=>res.json())
.then(res=>{
    f_tipoColab.innerHTML = ''
    res.forEach(el => {
        const opt = document.createElement('option')
        opt.setAttribute('value', el.n_tipousuario_tipousuario)
        opt.innerHTML = el.s_desc_tipousuario
        f_tipoColab.appendChild(opt)
    });
    console.log(res);
})

btn_adicionar.addEventListener('click', (evt)=>{
    novoColaborador.classList.remove('ocultarPopup')
})

btn_fecharPopup.addEventListener('click', (evt)=>{
    novoColaborador.classList.add('ocultarPopup')
})

btn_cancelarPopup.addEventListener('click', (evt)=>{
    novoColaborador.classList.add('ocultarPopup')
})

btn_gravarPopup.addEventListener('click', (evt)=>{
    alert('FOOL! CURSE OF RA UPON YE')
    novoColaborador.classList.add('ocultarPopup')
})