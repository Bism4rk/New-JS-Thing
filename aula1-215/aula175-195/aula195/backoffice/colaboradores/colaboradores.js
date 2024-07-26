const dadosGrid = document.querySelector('#dadosGrid')
const btn_adicionar = document.querySelector('#btn_adicionar')
const btn_editar = document.querySelector('#btn_editar')
const btn_deletar = document.querySelector('#btn_deletar')
const btn_fecharPopup = document.querySelector('#btn_fecharPopup')
const btn_cancelarPopup = document.querySelector('#btn_cancelarPopup')
const btn_gravarPopup = document.querySelector('#btn_gravarPopup')
const f_nome = document.querySelector('#f_nome')
const f_status = document.querySelector('#f_status')
const f_tipoColab = document.querySelector('#f_tipoColab')
const f_telefone = document.querySelector('#f_telefone')
const telefones = document.querySelector('#telefones')
const f_foto = document.querySelector('#f_foto')
const img_foto = document.querySelector('#img_foto')
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
        divc4.innerHTML = el.c_status_usuario
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
    const tels = [...document.querySelectorAll('.numTel')]
    let numTels = []
    tels.forEach(el => {
        numTels.push(el.innerHTML)
    });
    const dados = {
        s_nome_usuario: f_nome.value,
        n_tipousuario_tipousuario: f_tipoColab.value,
        c_status_usuario: f_status.value,
        numtelefones: numTels,
        s_foto_usuario: img_foto.getAttribute('src')
    }
    const cab = {
        method: 'post',
        body: JSON.stringify(dados)
    }
    console.log(dados);
    const endpoint_novocolaborador = `http://localhost:1880/novocolab`
    fetch(endpoint_novocolaborador, cab)
    .then(res=>{
        if(res.status == 200){
            alert('Novo colaborador adicionado com sucesso!')
            novoColaborador.classList.add('ocultarPopup')
        } else{
            alert('ERRO ao adicionar novo colaborador.')
        }
    })
    // novoColaborador.classList.add('ocultarPopup')
})

f_telefone.addEventListener('keyup', (evt)=>{
    if(evt.key == 'Enter'){
        if(evt.target.value.length >= 8){
            const divTel = document.createElement('div')
            divTel.setAttribute('class', 'tel')

            const numTel = document.createElement('div')
            numTel.setAttribute('class', 'numTel')
            numTel.innerHTML = evt.target.value
            divTel.appendChild(numTel)

            const delTel = document.createElement('div')
            delTel.setAttribute('class', 'delTel')
            delTel.addEventListener('click', (evt)=>{
                evt.target.parentNode.parentNode.remove()
            })
            divTel.appendChild(delTel)

            const imgDel = document.createElement('img')
            imgDel.setAttribute('src', '../imgs/deletar.svg')
            delTel.appendChild(imgDel)

            telefones.appendChild(divTel)
        } else{
            alert('Número de telefone inválido!')
        }
    }
})

const converte_imagem_b64 = (localDestino, arquivoImg)=>{
    const obj = arquivoImg
    const reader = new FileReader()
    reader.addEventListener('load', (evt)=>{
        const res = reader.result
        localDestino.src = res
    })
    if(obj){
        reader.readAsDataURL(obj)
    }
}


f_foto.addEventListener('change', (evt)=>{
    converte_imagem_b64(img_foto, evt.target.files[0])
    console.log(evt.target);
})