import { Cxmsg } from "../../utils/cxmsg.js";

const verificarToken = () =>{
    const token = sessionStorage.getItem('s_token_token')
    const endpoint_token = `${serv}/verificatoken/${token}`
    fetch(endpoint_token)
    .then(res=>res.json())
    .then(res=>{
        if(res.retorno == 200){
            console.log('OK');
            pagina()
        } else{
            // alert('Token inválido!')
            // console.log('ACABOU ACABOU ACABOU ACABOU ACABOU ACABOU PERDEU PERDEU PERDEU PERDEUKKKKKKKKKKKKKKKKKKKK');
            window.location.href = "../index.html"
        }
    })
}


const serv = sessionStorage.getItem('servidor_nodered')


verificarToken()

const pagina = () =>{
    const dadosGrid = document.querySelector('#dadosGrid')
    const f_filtragem = document.querySelector('#f_filtragem')
    const btn_pesquisar = document.querySelector('#btn_pesquisar')
    const tituloPopup = document.querySelector('#tituloPopup')
    const tituloPopup2 = document.querySelector('#tituloPopup2')
    const listaContatosForn = document.querySelector('#listaContatosForn')
    const btn_adicionar = document.querySelector('#btn_adicionar')
    const btn_editar = document.querySelector('#btn_editar')
    const btn_deletar = document.querySelector('#btn_deletar')
    const btn_fecharPopup = document.querySelector('#btn_fecharPopup')
    const btn_fecharPopupPesq = document.querySelector('#btn_fecharPopupPesq')
    const btn_fecharPopupListaContatos = document.querySelector('#btn_fecharPopupListaContatos')
    const btn_fecharPopupTelefonesContForn = document.querySelector('#btn_fecharPopupTelefonesContForn')
    const btn_cancelarPopup = document.querySelector('#btn_cancelarPopup')
    const btn_gravarPopup = document.querySelector('#btn_gravarPopup')
    const btn_listarContatosForn = document.querySelector('#btn_listarContatosForn')
    const btn_criarNovoContatoForn = document.querySelector('#btn_criarNovoContatoForn')
    const f_nome = document.querySelector('#f_nome')
    const f_status = document.querySelector('#f_status')
    // const f_tipoColab = document.querySelector('#f_tipoColab')
    const f_telefone = document.querySelector('#f_telefone')
    const telefones = document.querySelector('#telefones')
    const f_foto = document.querySelector('#f_foto')
    const img_foto = document.querySelector('#img_foto')
    const novoFornecedor = document.querySelector('#novoFornecedor')
    const pesquisa = document.querySelector('#pesquisa')
    const f_pesqID = document.querySelector('#f_pesqID')
    const f_pesqNome = document.querySelector('#f_pesqNome')
    const f_pesq = document.querySelector('#f_pesq')
    const btn_pesquisarPopup = document.querySelector('#btn_pesquisarPopup')
    const btn_listarTodos = document.querySelector('#btn_listarTodos')
    const grid_novosContatosForn = document.querySelector('#grid_novosContatosForn')
    const dadosGrid_novosContatosForn = document.querySelector('#dadosGrid_novosContatosForn')
    const grid_listaContatosFornAdd = document.querySelector('#grid_listaContatosFornAdd')
    const dadosGrid_ContatosFornAdd = document.querySelector('#dadosGrid_ContatosFornAdd')
    const dadosGrid_TelefonesContForn = document.querySelector('#dadosGrid_TelefonesContForn')
    const telefonesContForn = document.querySelector('#telefonesContForn')

    const serv = sessionStorage.getItem('servidor_nodered')

    btn_listarTodos.addEventListener('click', (evt)=>{
        carregarTodosFornecedores()
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
            const endpoint_pesq = `${serv}/pesquisaforn/${tipo}/${f_pesq.value}`
            fetch(endpoint_pesq)
            .then(res=>res.json())
            .then(res=>{
                dadosGrid.innerHTML = ""
                res.forEach(el => {
                    criarLinha(el)
                });
                pesquisa.classList.add('ocultarPopup')
            })
        } else{
            const config={
                    titulo: "Alerta",
                    texto: "Digite o ID ou o nome do fornecedor.",
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

    let modoJanela = "n"
    // n = novo fornecedor
    // e = editar fornecedor

    const carregarTodosFornecedores = () =>{
        const endpoint_todosfornecedores = `${serv}/todosfornecedores`

        fetch(endpoint_todosfornecedores)
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
                divc1.innerHTML = el.n_fornecedor_fornecedor 
                divLinha.appendChild(divc1)

                const divc2 = document.createElement('div')
                divc2.setAttribute('class', 'colunaLinhaGrid c2')
                divc2.innerHTML = el.s_desc_fornecedor
                divLinha.appendChild(divc2)

                const divc3 = document.createElement('div')
                divc3.setAttribute('class', 'colunaLinhaGrid c3')
                divc3.innerHTML = el.c_status_fornecedor
                divLinha.appendChild(divc3)

                const divc4 = document.createElement('div')
                divc4.setAttribute('class', 'colunaLinhaGrid c4')
                divLinha.appendChild(divc4)

                const img_status = document.createElement('img')
                if(el.c_status_fornecedor == 'A'){
                    img_status.setAttribute('src','../imgs/on.svg')
                }else{
                    img_status.setAttribute('src','../imgs/off.svg')
                }
                
                img_status.setAttribute('class', 'icone_op')
                img_status.setAttribute('data-idfornecedor', el.n_fornecedor_fornecedor)
                img_status.addEventListener('click', (evt)=>{
                    const id = evt.target.dataset.idfornecedor
                    if(evt.target.getAttribute('src') == "../imgs/on.svg"){
                        const endpoint_mudarStatus = `${serv}/mudarStatusFornecedor/${id}/I`
                        fetch(endpoint_mudarStatus)
                        .then(res=>{
                            if(res.status == 200){
                                evt.target.setAttribute('src', '../imgs/off.svg')
                                carregarTodosFornecedores()
                            }
                            
                        })
                    } else{
                        const endpoint_mudarStatus = `${serv}/mudarStatusFornecedor/${id}/A`
                        fetch(endpoint_mudarStatus)
                        .then(res=>{
                            if(res.status == 200){
                                evt.target.setAttribute('src', '../imgs/on.svg')
                                carregarTodosFornecedores()
                            }
                        })
                    }
                })
                divc4.appendChild(img_status)

                const img_editar = document.createElement('img')
                img_editar.setAttribute('src','../imgs/editar2.svg')
                img_editar.setAttribute('class', 'icone_op')
                img_editar.addEventListener('click', (evt)=>{
                    const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
                    modoJanela = "e"
                    tituloPopup2.innerHTML = "Editar fornecedor"
                    let endpoint = `${serv}/dadosforn/${id}`
                    fetch(endpoint)
                    .then(res=>res.json()) 
                    .then(res=>{
                        console.log(modoJanela);
                        tituloPopup2.innerHTML = "Editar fornecedor"
                        btn_gravarPopup.setAttribute('data-idfornecedor', id)
                        f_nome.value = res[0].s_desc_fornecedor
                        f_status.value = res[0].c_status_fornecedor
                        img_foto.src = res[0].s_foto_fornecedor
                        novoFornecedor.classList.remove('ocultarPopup')
                        if(res[0].s_foto_fornecedor == "#" || res[0].s_foto_fornecedor == ""){
                            img_foto.classList.add('esconderElemento')
                        } else{
                            img_foto.classList.remove('esconderElemento')
                        }
                    })
                })
                divc4.appendChild(img_editar)

                const img_remover = document.createElement('img')
                img_remover.setAttribute('src','../imgs/deletar2.svg')
                img_remover.setAttribute('class', 'icone_op')
                divc4.appendChild(img_remover)

                dadosGrid.appendChild(divLinha)
    }

    const addContForn = (id, nome) =>{
        const divLinha = document.createElement('div')
        divLinha.setAttribute('class', 'linhaGrid novoContForn')

        const divc1 = document.createElement('div')
        divc1.setAttribute('class', 'colunaLinhaGrid c1_lcf')
        divc1.innerHTML = id
        divLinha.appendChild(divc1)

        const divc2 = document.createElement('div')
        divc2.setAttribute('class', 'colunaLinhaGrid c2_lcf')
        divc2.innerHTML = nome
        divLinha.appendChild(divc2)

        const divc3 = document.createElement('div')
        divc3.setAttribute('class', 'colunaLinhaGrid c3_lcf')
        divLinha.appendChild(divc3)

        const img_removerContForm = document.createElement('img')
        img_removerContForm.setAttribute('src', '../imgs/deletar2.svg')
        img_removerContForm.setAttribute('class', 'icone_op')
        img_removerContForm.addEventListener('click', (evt)=>{
            evt.target.parentNode.parentNode.remove()
        })
        divc3.appendChild(img_removerContForm)

        const img_verFoneContForm = document.createElement('img')
        img_verFoneContForm.setAttribute('src','../imgs/vertelefone.svg')
        img_verFoneContForm.setAttribute('class', 'icone_op')
        img_verFoneContForm.addEventListener('click', (evt)=>{
            const id = evt.target.parentNode.parentNode.firstChild.innerHTML
            console.log(id);
            let endpoint = `${serv}/returnTelefones/${id}`
            fetch(endpoint)
            .then(res=>res.json()) 
            .then(res=>{
                dadosGrid_TelefonesContForn.innerHTML = ""
                telefonesContForn.classList.remove('ocultarPopup')
                let mzi = maiorZIndex()+2
                telefonesContForn.setAttribute('style', `z-index: ${mzi} !important`)
                res.forEach(el => {
                    console.log(el.s_numero_telefone);
                    addTelefoneContForm(el.s_numero_telefone)
                });
            })
        })
        divc3.appendChild(img_verFoneContForm)


        dadosGrid_ContatosFornAdd.appendChild(divLinha)
    }

    const addTelefoneContForm = (telefone) =>{
        const divLinha = document.createElement('div')
        divLinha.setAttribute('class', 'linhaGrid')

        const divc1 = document.createElement('div')
        divc1.setAttribute('class', 'colunaLinhaGrid c2_lcf')
        divc1.innerHTML = telefone
        divLinha.appendChild(divc1)

        dadosGrid_TelefonesContForn.appendChild(divLinha)
    }

    const criarLinhaContatoForn = (el) =>{
        const divLinha = document.createElement('div')
        divLinha.setAttribute('class', 'linhaGrid')

        const divc1 = document.createElement('div')
        divc1.setAttribute('class', 'colunaLinhaGrid c1_lcf')
        divc1.innerHTML = el.n_pessoa_pessoa  
        divLinha.appendChild(divc1)

        const divc2 = document.createElement('div')
        divc2.setAttribute('class', 'colunaLinhaGrid c2_lcf')
        divc2.innerHTML = el.s_nome_pessoa
        divLinha.appendChild(divc2)

        const divc3 = document.createElement('div')
        divc3.setAttribute('class', 'colunaLinhaGrid c3_lcf')
        divLinha.appendChild(divc3)


        const img_addContForm = document.createElement('img')
        img_addContForm.setAttribute('src', '../imgs/addcontato.svg')
        img_addContForm.setAttribute('class', 'icone_op')
        img_addContForm.addEventListener('click', (evt)=>{
            const linha = evt.target.parentNode.parentNode;
            // console.log(linha.childNodes[0]);
            // console.log(linha.childNodes[1]);
            const id = linha.childNodes[0].innerHTML
            const nome = linha.childNodes[1].innerHTML
            addContForn(id, nome)
            // dadosGrid_ContatosFornAdd.appendChild(linha)
        })
        divc3.appendChild(img_addContForm)

        const img_verFoneContForm = document.createElement('img')
        img_verFoneContForm.setAttribute('src','../imgs/vertelefone.svg')
        img_verFoneContForm.setAttribute('class', 'icone_op')
        img_verFoneContForm.addEventListener('click', (evt)=>{
            const id = evt.target.parentNode.parentNode.firstChild.innerHTML
            console.log(id);
            let endpoint = `${serv}/returnTelefones/${id}`
            fetch(endpoint)
            .then(res=>res.json()) 
            .then(res=>{
                dadosGrid_TelefonesContForn.innerHTML = ""
                telefonesContForn.classList.remove('ocultarPopup')
                let mzi = maiorZIndex()+2
                telefonesContForn.setAttribute('style', `z-index: ${mzi} !important`)
                res.forEach(el => {
                    console.log(el.s_numero_telefone);
                    addTelefoneContForm(el.s_numero_telefone)
                });
            })
        })
        divc3.appendChild(img_verFoneContForm)

        dadosGrid_novosContatosForn.appendChild(divLinha)
    }
    carregarTodosFornecedores()

    btn_pesquisar.addEventListener('click', (evt)=>{
        pesquisa.classList.remove('ocultarPopup')
        tituloPopup.innerHTML = "Pesquisar"
        f_pesq.value = ""
        f_pesq.focus()
    })

    btn_adicionar.addEventListener('click', (evt)=>{
        modoJanela = "n"
        tituloPopup2.innerHTML = "Novo fornecedor"
        novoFornecedor.classList.remove('ocultarPopup')
        f_nome.value = ""
        // f_tipoColab.value = ""
        f_status.value = ""
        f_foto.value = ""
        img_foto.setAttribute('src', '#')
        img_foto.classList.add('esconderElemento')
    })

    btn_listarContatosForn.addEventListener('click', (evt)=>{
        listaContatosForn.classList.remove('ocultarPopup')
        let mzi = maiorZIndex()+1
        listaContatosForn.setAttribute('style', `z-index: ${mzi} !important`)
        dadosGrid_novosContatosForn.innerHTML = ""
        let endpoint = `${serv}/todasPessoasForn`
        fetch(endpoint)
        .then(res=>res.json()) 
        .then(res=>{
            res.forEach(el => {
                console.log(el);
                criarLinhaContatoForn(el)
            });
        })
    })

    btn_fecharPopup.addEventListener('click', (evt)=>{
        novoFornecedor.classList.add('ocultarPopup')
    })

    btn_fecharPopupPesq.addEventListener('click', (evt)=>{
        pesquisa.classList.add('ocultarPopup')
    })

    btn_fecharPopupListaContatos.addEventListener('click', (evt)=>{
        listaContatosForn.classList.add('ocultarPopup')
    })

    btn_cancelarPopup.addEventListener('click', (evt)=>{
        novoFornecedor.classList.add('ocultarPopup')
    })

    btn_fecharPopupTelefonesContForn.addEventListener('click', (evt)=>{
        telefonesContForn.classList.add('ocultarPopup')
    })

    btn_gravarPopup.addEventListener('click', (evt)=>{
        const contatos = [...document.querySelectorAll('.novoContForn')]
        console.log(contatos);
        let a_contatos = []
        contatos.forEach(c=>{
            a_contatos.push(c.firstChild.innerHTML)
        })


        const dados = {
            n_fornecedor_fornecedor: evt.target.dataset.idfornecedor,
            s_desc_fornecedor: f_nome.value,
            s_foto_fornecedor: img_foto.getAttribute('src'),
            listaContatos: a_contatos,
            c_status_fornecedor: f_status.value
        }
        const cab = {
            method: 'post',
            body: JSON.stringify(dados)
        }
        let endpoint_novooueditarforn = null
        if(modoJanela == "n"){
            endpoint_novooueditarforn = `${serv}/novoforn`
        } else{
            endpoint_novooueditarforn = `${serv}/editforn`
        }
        // console.log(dados);
        fetch(endpoint_novooueditarforn, cab)
        .then(res=>{
            if(res.status == 200){
                if(modoJanela == "n"){
                    const config={
                        titulo: "Sucesso!",
                        texto: "Fornecedor adicionado com sucesso!",
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
                    f_nome.value = ""
                    f_status.value = ""
                    f_foto.value = ""
                    img_foto.setAttribute('src', '#')
                    
                    carregarTodosFornecedores()
                }
                else{
                    const config={
                        titulo: "Sucesso!",
                        texto: "Fornecedor editado com sucesso!",
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
                    f_nome.value = ""
                    f_status.value = ""
                    f_foto.value = ""
                    carregarTodosFornecedores()
                }
                // novoFornecedor.classList.add('ocultarPopup')
            } else{
                const config={
                    titulo: "ERRO",
                    texto: "Erro ao adicionar fornecedor.",
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
        }).finally(()=>{
            img_foto.classList.add('esconderElemento')
        })
        // novoFornecedor.classList.add('ocultarPopup')
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
        img_foto.classList.remove('esconderElemento')
    })

    // weird shit
        
}

