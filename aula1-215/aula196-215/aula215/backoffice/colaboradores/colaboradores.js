import { Cxmsg } from "../../utils/cxmsg.js";
const dadosGrid = document.querySelector('#dadosGrid')
const f_filtragem = document.querySelector('#f_filtragem')
const btn_pesquisar = document.querySelector('#btn_pesquisar')
const tituloPopup = document.querySelector('#tituloPopup')
const btn_adicionar = document.querySelector('#btn_adicionar')
const btn_editar = document.querySelector('#btn_editar')
const btn_deletar = document.querySelector('#btn_deletar')
const btn_fecharPopup = document.querySelector('#btn_fecharPopup')
const btn_fecharPopupPesq = document.querySelector('#btn_fecharPopupPesq')
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
const pesquisa = document.querySelector('#pesquisa')
const f_pesqID = document.querySelector('#f_pesqID')
const f_pesqNome = document.querySelector('#f_pesqNome')
const f_pesq = document.querySelector('#f_pesq')
const btn_pesquisarPopup = document.querySelector('#btn_pesquisarPopup')
const btn_listarTodos = document.querySelector('#btn_listarTodos')

const serv = sessionStorage.getItem('servidor_nodered')

btn_listarTodos.addEventListener('click', (evt)=>{
    carregarTodosColabs()
})

f_filtragem.addEventListener('keyup', (evt)=>{
    const linhas = [...document.querySelectorAll('.linhaGrid')]
    let input, texto, filtragem;
    input = evt.target
    filtragem = input.value.toUpperCase()
    for (let i = 0; i < linhas.length; i++) {
        texto = linhas[i].children[1].innerHTML
        console.log(texto);
        if(texto.toUpperCase().indexOf(filtragem) > -1){
            linhas[i].classList.remove('ocultarLinhaGrid')
        } else{
            linhas[i].classList.add('ocultarLinhaGrid')
        }
    }
})

f_pesqID.addEventListener('click', (evt)=>{
    f_pesq.value = ""
    f_pesq.focus()
})

f_pesqNome.addEventListener('click', (evt)=>{
    f_pesq.value = ""
    f_pesq.focus()
})

btn_pesquisarPopup.addEventListener('click', (evt)=>{
    let tipo = null
    if(f_pesqID.checked){
        tipo = "id"
    } else{
        tipo = "nome"
    }

    if(f_pesq.value != ""){
        const endpoint_pesq = `${serv}/pesquisacolab/${tipo}/${f_pesq.value}`
        fetch(endpoint_pesq)
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            dadosGrid.innerHTML = ""
            res.forEach(el => {
                criarLinha(el)
            });
            pesquisa.classList.add('ocultarPopup')
        })
    } else{
        const config={
                titulo: "Alerta",
                texto: "Digite o ID ou o nome do colaborador.",
                cor:"#f00",
                tipo: 'ok',
                ok: ()=>{
                    console.log('OK clicado!');
                },
                sim: ()=>{
                    console.log('Sim clicado!');
                },
                nao: ()=>{
                    console.log('Não clicado!');
                }
            }
        Cxmsg.mostrar(config)
        f_pesq.focus()

    }
    
})

const criarCaixaTel = (telefone, idtel, tipo) =>{
            // console.log(telefone);
            const divTel = document.createElement('div')
            divTel.setAttribute('class', 'tel')

            const numTel = document.createElement('div')
            if(tipo == "n"){
                numTel.setAttribute('class', 'numTel novoTel')
            }else{
                numTel.setAttribute('class', 'numTel editarTel')
            }
            numTel.innerHTML = telefone
            divTel.appendChild(numTel)

            const delTel = document.createElement('div')
            delTel.setAttribute('class', 'delTel')
            delTel.setAttribute('data-idtel', idtel)
            delTel.addEventListener('click', (evt)=>{

                if(idtel!= "-1"){
                    const objTel = evt.target
                    const idTel = objTel.parentNode.dataset.idtel
                    const endpoint_delTelefone = `${serv}/deltelefone/${idTel}`
                    fetch(endpoint_delTelefone)
                    .then(res=>{
                        if(res.status == 200){
                            evt.target.parentNode.parentNode.remove()
                        }
                    })
                }else{
                    evt.target.parentNode.parentNode.remove()
                }
            })
            divTel.appendChild(delTel)

            const imgDel = document.createElement('img')
            imgDel.setAttribute('src', '../imgs/deletar.svg')
            delTel.appendChild(imgDel)
            telefones.appendChild(divTel)
}

let modoJanela = "n"
// n = novo colaborador
// e = editar colaborador

const carregarTodosColabs = () =>{
    const endpoint_todosusuarios = `${serv}/todosusuarios`

    fetch(endpoint_todosusuarios)
    .then(res=>res.json())
    .then(res=>{
        // console.log(res)
        dadosGrid.innerHTML = ""
        res.forEach(el => {
            criarLinha(el)
        });
    })

}

const criarLinha = (el) =>{
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
            divc3.innerHTML = el.n_tipopessoa_tipopessoa
            divLinha.appendChild(divc3)

            const divc4 = document.createElement('div')
            divc4.setAttribute('class', 'colunaLinhaGrid c4')
            divc4.innerHTML = el.c_status_usuario
            divLinha.appendChild(divc4)

            const divc5 = document.createElement('div')
            divc5.setAttribute('class', 'colunaLinhaGrid c5')
            divLinha.appendChild(divc5)

            const img_status = document.createElement('img')
            if(el.c_status_usuario == 'A'){
                img_status.setAttribute('src','../imgs/on.svg')
            }else{
                img_status.setAttribute('src','../imgs/off.svg')
            }
            
            img_status.setAttribute('class', 'icone_op')
            img_status.setAttribute('data-idcolab', el.n_usuario_usuario)
            img_status.addEventListener('click', (evt)=>{
                const idcolab = evt.target.dataset.idcolab
                if(evt.target.getAttribute('src') == "../imgs/on.svg"){
                    const endpoint_mudarStatus = `${serv}/mudarStatusColab/${idcolab}/I`
                    fetch(endpoint_mudarStatus)
                    .then(res=>{
                        if(res.status == 200){
                            evt.target.setAttribute('src', '../imgs/off.svg')
                            carregarTodosColabs()
                        }
                        
                    })
                } else{
                    const endpoint_mudarStatus = `${serv}/mudarStatusColab/${idcolab}/A`
                    fetch(endpoint_mudarStatus)
                    .then(res=>{
                        if(res.status == 200){
                            evt.target.setAttribute('src', '../imgs/on.svg')
                            carregarTodosColabs()
                        }
                    })
                }
            })
            divc5.appendChild(img_status)

            const img_editar = document.createElement('img')
            img_editar.setAttribute('src','../imgs/editar2.svg')
            img_editar.setAttribute('class', 'icone_op')
            img_editar.addEventListener('click', (evt)=>{
                const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
                modoJanela = "e"
                tituloPopup.innerHTML = "Editar Colaborador"
                let endpoint = `${serv}/dadoscolab/${id}`
                fetch(endpoint)
                .then(res=>res.json()) 
                .then(res=>{
                    // console.log(res);
                    btn_gravarPopup.setAttribute('data-idcolab', id)
                    f_nome.value = res[0].s_nome_usuario
                    f_tipoColab.value = res[0].n_tipopessoa_tipopessoa
                    f_status.value = res[0].c_status_usuario
                    img_foto.src = res[0].s_foto_usuario
                    novoColaborador.classList.remove('ocultarPopup')
                })
                endpoint = `${serv}/telefonescolab/${id}`
                fetch(endpoint)
                .then(res=>res.json()) 
                .then(res=>{
                    // console.log(res);
                    telefones.innerHTML = ""
                    res.forEach(el=> {
                        criarCaixaTel(el.s_numero_telefone, el.n_telefone_telefone, "e")
                    }) 
                    });
            })
            divc5.appendChild(img_editar)

            const img_remover = document.createElement('img')
            img_remover.setAttribute('src','../imgs/deletar2.svg')
            img_remover.setAttribute('class', 'icone_op')
            divc5.appendChild(img_remover)

            dadosGrid.appendChild(divLinha)
}

carregarTodosColabs()

const endpoint_tiposcolab = `${serv}/tiposcolab`
fetch(endpoint_tiposcolab)
.then(res=>res.json())
.then(res=>{
    console.log(res);
    f_tipoColab.innerHTML = ''
    res.forEach(el => {
        console.log(el);
        const opt = document.createElement('option')
        opt.setAttribute('value', el.n_tipopessoa_tipopessoa)
        opt.innerHTML = el.s_desc_tipopessoa
        f_tipoColab.appendChild(opt)
    });
    // console.log(res);
})

btn_pesquisar.addEventListener('click', (evt)=>{
    pesquisa.classList.remove('ocultarPopup')
    tituloPopup.innerHTML = "Pesquisar"
    f_pesq.value = ""
    f_pesq.focus()
})

btn_adicionar.addEventListener('click', (evt)=>{
    modoJanela = "n"
    tituloPopup.innerHTML = "Novo Colaborador"
    novoColaborador.classList.remove('ocultarPopup')
    f_nome.value = ""
    f_tipoColab.value = ""
    f_status.value = ""
    img_foto.setAttribute('src', '#')
    telefones.innerHTML = ""
})

btn_fecharPopup.addEventListener('click', (evt)=>{
    novoColaborador.classList.add('ocultarPopup')
})

btn_fecharPopupPesq.addEventListener('click', (evt)=>{
    pesquisa.classList.add('ocultarPopup')
})

btn_cancelarPopup.addEventListener('click', (evt)=>{
    novoColaborador.classList.add('ocultarPopup')
})

btn_gravarPopup.addEventListener('click', (evt)=>{
    const tels = [...document.querySelectorAll('.novoTel')]
    let numTels = []
    tels.forEach(el => {
        numTels.push(el.innerHTML)
    });
    const dados = {
        n_usuario_usuario: evt.target.dataset.idcolab,
        s_nome_usuario: f_nome.value,
        n_tipopessoa_tipopessoa: f_tipoColab.value,
        c_status_usuario: f_status.value,
        numtelefones: numTels,
        s_foto_usuario: img_foto.getAttribute('src')
    }
    const cab = {
        method: 'post',
        body: JSON.stringify(dados)
    }
    let endpoint_novooueditarcolab = null
    if(modoJanela == "n"){
        endpoint_novooueditarcolab = `${serv}/novocolab`
    } else{
        endpoint_novooueditarcolab = `${serv}/editcolab`
    }
    // console.log(dados);
    fetch(endpoint_novooueditarcolab, cab)
    .then(res=>{
        if(res.status == 200){
            if(modoJanela == "n"){
                f_nome.value = ""
                f_tipoColab.value = ""
                f_status.value = ""
                img_foto.setAttribute('src', '#')
                telefones.innerHTML = ""
                const config={
                    titulo: "Sucesso!",
                    texto: "Colaborador adicionado com sucesso!",
                    cor:"#00a600",
                    tipo: 'ok',
                    ok: ()=>{
                        console.log('OK clicado!');
                    },
                    sim: ()=>{
                        console.log('Sim clicado!');
                    },
                    nao: ()=>{
                        console.log('Não clicado!');
                    }
                }
                Cxmsg.mostrar(config)
                carregarTodosColabs()
            }
            else{
                const config={
                    titulo: "Sucesso!",
                    texto: "Colaborador editado com sucesso!",
                    cor:"#00a600",
                    tipo: 'ok',
                    ok: ()=>{
                        console.log('OK clicado!');
                    },
                    sim: ()=>{
                        console.log('Sim clicado!');
                    },
                    nao: ()=>{
                        console.log('Não clicado!');
                    }
                }
                Cxmsg.mostrar(config)
                carregarTodosColabs()
            }
            // novoColaborador.classList.add('ocultarPopup')
        } else{
            const config={
                titulo: "ERRO",
                texto: "Erro ao adicionar colaborador.",
                cor:"#f00",
                tipo: 'ok',
                ok: ()=>{
                    console.log('OK clicado!');
                },
                sim: ()=>{
                    console.log('Sim clicado!');
                },
                nao: ()=>{
                    console.log('Não clicado!');
                }
            }
            Cxmsg.mostrar(config)
        }
    })
    // novoColaborador.classList.add('ocultarPopup')
})

f_telefone.addEventListener('keyup', (evt)=>{
    if(evt.key == 'Enter'){
        if(evt.target.value.length >= 8){
            criarCaixaTel(evt.target.value, "-1","n")
            evt.target.value = ""
        } else{
             const config={
                titulo: "ERRO",
                texto: "Número de telefone inválido.",
                cor:"#f00",
                tipo: 'ok',
                ok: ()=>{
                    console.log('OK clicado!');
                },
                sim: ()=>{
                    console.log('Sim clicado!');
                },
                nao: ()=>{
                    console.log('Não clicado!');
                }
            }
            Cxmsg.mostrar(config)
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
    // console.log(evt.target);
})

// weird shit
