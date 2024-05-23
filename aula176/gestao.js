const dados = document.querySelector('#dados')
const fundopopup = document.querySelector('#fundopopup')
const btn_gravar = document.querySelector('#btn_gravar')
const btn_cancelar = document.querySelector('#btn_cancelar')

const f_id = document.querySelector('#f_id')
const f_nome = document.querySelector('#f_nome')
const f_celular = document.querySelector('#f_celular')
const f_email = document.querySelector('#f_email')
const f_dtnasc = document.querySelector('#f_dtnasc')

// console.log('THE SHADOWS OF OUR PAST AND THIS IS THE MOMENT IT ALL COMES DOOOOOOOOOWN')

btn_gravar.addEventListener('click', (evt)=>{
    fundopopup.classList.add('ocultar')
    const endpoint = `http://localhost:1880/atualizarcontatos/${f_id.value}/${f_nome.value}/${f_celular.value}/${f_email.value}/${f_dtnasc.value}/`
    fetch(endpoint)
    .then(res=>{
        if(res.status == 200){
            alert('Dados atualizados com sucesso!')
            preencherDGV()
        } else{
            alert('Erro ao atualizar dados!')
        }
    })

})

btn_cancelar.addEventListener('click', (evt)=>{
    fundopopup.classList.add('ocultar')
})


const preencherDGV=()=>{
    dados.innerHTML = ""
    let endpoint =`http://localhost:1880/pesquisartodoscontatos`
    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        res.forEach(el => {
            const linha = document.createElement('div')
            linha.setAttribute('class', 'linhaDados')

            const c1 = document.createElement('div')
            c1.setAttribute('class', 'coluna c1')
            c1.innerHTML = el.n_contato_contato
            linha.appendChild(c1)

            const c2 = document.createElement('div')
            c2.setAttribute('class', 'coluna c2')
            c2.innerHTML = el.s_nome_contato
            linha.appendChild(c2)

            const c3 = document.createElement('div')
            c3.setAttribute('class', 'coluna c3')
            c3.innerHTML = el.s_celular_contato
            linha.appendChild(c3)

            const c4 = document.createElement('div')
            c4.setAttribute('class', 'coluna c4')
            c4.innerHTML = el.s_email_contato
            linha.appendChild(c4)

            const c5 = document.createElement('div')
            c5.setAttribute('class', 'coluna c5')
            c5.innerHTML = el.dt_dtnasc_contato.split('T')[0]
            linha.appendChild(c5)

            const c6 = document.createElement('div')
            c6.setAttribute('class', 'coluna c6')
            const imgDeletar = document.createElement('img')
            imgDeletar.setAttribute('src', 'deletar.svg')
            imgDeletar.setAttribute('class', 'iconeOp c_op')
            imgDeletar.addEventListener('click', (evt)=>{
                console.log(evt.target.parentNode.parentNode.firstChild.innerHTML);
                removerContato(evt.target.parentNode.parentNode.firstChild.innerHTML)
            })

            const imgEditar = document.createElement('img')
            imgEditar.setAttribute('src', 'editar.svg')
            imgEditar.setAttribute('class', 'iconeOp c_op')
            imgEditar.addEventListener('click', (evt)=>{
                fundopopup.classList.remove('ocultar')
                const dados = [...evt.target.parentNode.parentNode.childNodes]
                f_id.value = dados[0].innerHTML
                f_nome.value = dados[1].innerHTML
                f_celular.value = dados[2].innerHTML
                f_email.value = dados[3].innerHTML
                f_dtnasc.value = dados[4].innerHTML.split('T')[0]
                console.log(dados);
            })
            c6.appendChild(imgDeletar)
            c6.appendChild(imgEditar)
            linha.appendChild(c6)
            dados.appendChild(linha)
        });
        console.log(res);
    })
}

preencherDGV()

const removerContato = (id) =>{
    const endpoint = `http://localhost:1880/deletarcontatos/${id}`
    fetch(endpoint)
    .then(res=>{
        if(res.status == 200){
            preencherDGV()
        }
    })
}

