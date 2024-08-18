import { Cxmsg } from "../../utils/cxmsg.js";

const endpoint_config = `../../config.json`
fetch(endpoint_config)
.then(res=>res.json())
.then(res=>{
    sessionStorage.setItem('servidor_nodered', res.servidor_nodered)
    sessionStorage.setItem('versao', res.versao)
})

const serv = sessionStorage.getItem('servidor_nodered')


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
            // window.location.reload()
        }
    })
}

verificarToken()


const pagina = () =>{
    const novoProduto = document.querySelector('#novoProduto')
    const btn_fecharPopupNovoProd = document.querySelector('#btn_fecharPopupNovoProd')
    const f_codprod = document.querySelector('#f_codprod')
    const f_tipoprod = document.querySelector('#f_tipoprod')
    const f_descprod = document.querySelector('#f_descprod')
    const f_fornprod = document.querySelector('#f_fornprod')
    const f_qtdeprod = document.querySelector('#f_qtdeprod')
    const f_statusprod = document.querySelector('#f_statusprod')
    const movEstoque = document.querySelector('#movEstoque')
    const btn_fecharPopupMovEstoque = document.querySelector('#btn_fecharPopupMovEstoque')
    const btn_cancelarPopupMovEstoque = document.querySelector('#btn_cancelarPopupMovEstoque')
    const f_codprodMov = document.querySelector('#f_codprodMov')
    const f_descprodMov = document.querySelector('#f_descprodMov')
    const f_qtdeprodMov = document.querySelector('#f_qtdeprodMov')
    const f_qtdeprodregMov = document.querySelector('#f_qtdeprodregMov')
    const btn_addqtde = document.querySelector('#btn_addqtde')
    const btn_removeqtde = document.querySelector('#btn_removeqtde')
    const btn_gravarmov = document.querySelector('#btn_gravarmov')

    const dadosGrid = document.querySelector('#dadosGrid')
    const f_filtragem = document.querySelector('#f_filtragem')
    const btn_pesquisar = document.querySelector('#btn_pesquisar')
    const tituloPopup = document.querySelector('#tituloPopup')
    const tituloPopup2 = document.querySelector('#tituloPopup2')
    const btn_adicionar = document.querySelector('#btn_adicionar')
    const btn_editar = document.querySelector('#btn_editar')
    const btn_deletar = document.querySelector('#btn_deletar')
    const btn_fecharPopup = document.querySelector('#btn_fecharPopup')
    const btn_fecharPopupPesq = document.querySelector('#btn_fecharPopupPesq')
    const btn_cancelarPopup = document.querySelector('#btn_cancelarPopup')
    const btn_gravarPopup = document.querySelector('#btn_gravarPopup')
    const telefones = document.querySelector('#telefones')
    const img_foto = document.querySelector('#img_foto')
    const pesquisa = document.querySelector('#pesquisa')
    const f_pesqID = document.querySelector('#f_pesqID')
    const f_pesqNome = document.querySelector('#f_pesqNome')
    const f_pesq = document.querySelector('#f_pesq')
    const btn_pesquisarPopup = document.querySelector('#btn_pesquisarPopup')
    const btn_listarTodos = document.querySelector('#btn_listarTodos')



    btn_listarTodos.addEventListener('click', (evt)=>{
        carregarTodosProds()
    })

    f_filtragem.addEventListener('keyup', (evt)=>{
        const linhas = [...document.querySelectorAll('.linhaGrid')]
        let input, texto, filtragem;
        input = evt.target
        filtragem = input.value.toUpperCase()
        for (let i = 0; i < linhas.length; i++) {
            texto = linhas[i].children[2].innerHTML
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
            tipo = "cod"
        } else{
            tipo = "desc"
        }

        if(f_pesq.value != ""){
            const endpoint_pesq = `${serv}/pesquisaprod/${tipo}/${f_pesq.value}`
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
                    texto: "Digite o ID ou o nome do produto.",
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

    const carregarTodosProds = () =>{
        const endpoint_todosprods = `${serv}/todosprods`

        fetch(endpoint_todosprods)
        .then(res=>res.json())
        .then(res=>{
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
                divc1.innerHTML = el.n_cod_produto
                divLinha.appendChild(divc1)

                const divc2 = document.createElement('div')
                divc2.setAttribute('class', 'colunaLinhaGrid c2')
                divc2.innerHTML = el.n_tipoproduto_tipoproduto 
                divLinha.appendChild(divc2)

                const divc3 = document.createElement('div')
                divc3.setAttribute('class', 'colunaLinhaGrid c3')
                divc3.innerHTML = el.s_desc_produto
                divLinha.appendChild(divc3)

                const divc4 = document.createElement('div')
                divc4.setAttribute('class', 'colunaLinhaGrid c4')
                divc4.innerHTML = el.n_fornecedor_fornecedor 
                divLinha.appendChild(divc4)

                const divc5 = document.createElement('div')
                divc5.setAttribute('class', 'colunaLinhaGrid c5')
                divc5.innerHTML = el.n_qtde_produto 
                divLinha.appendChild(divc5)

                const divc6 = document.createElement('div')
                divc6.setAttribute('class', 'colunaLinhaGrid c6')
                divc6.innerHTML = el.c_status_produto 
                divLinha.appendChild(divc6)

                const divc7 = document.createElement('div')
                divc7.setAttribute('class', 'colunaLinhaGrid c7')
                divLinha.appendChild(divc7)

                const img_status = document.createElement('img')
                if(el.c_status_produto == 'A'){
                    img_status.setAttribute('src','../imgs/on.svg')
                }else{
                    img_status.setAttribute('src','../imgs/off.svg')
                }
                
                img_status.setAttribute('class', 'icone_op')
                img_status.setAttribute('data-codprod', el.n_cod_produto)
                img_status.addEventListener('click', (evt)=>{
                    const codprod = evt.target.dataset.codprod
                    if(evt.target.getAttribute('src') == "../imgs/on.svg"){
                        const endpoint_mudarStatus = `${serv}/mudarStatusProd/${codprod}/I`
                        fetch(endpoint_mudarStatus)
                        .then(res=>{
                            if(res.status == 200){
                                evt.target.setAttribute('src', '../imgs/off.svg')
                                carregarTodosProds()
                            }
                            
                        })
                    } else{
                        const endpoint_mudarStatus = `${serv}/mudarStatusProd/${codprod}/A`
                        fetch(endpoint_mudarStatus)
                        .then(res=>{
                            if(res.status == 200){
                                evt.target.setAttribute('src', '../imgs/on.svg')
                                carregarTodosProds()
                            }
                        })
                    }
                })
                divc7.appendChild(img_status)

                const img_editar = document.createElement('img')
                img_editar.setAttribute('src','../imgs/editar2.svg')
                img_editar.setAttribute('class', 'icone_op')
                img_editar.addEventListener('click', (evt)=>{
                    const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
                    modoJanela = "e"
                    tituloPopup2.innerHTML = "Editar Produto"
                    let endpoint = `${serv}/dadosprod/${id}`
                    fetch(endpoint)
                    .then(res=>res.json()) 
                    .then(res=>{
                        btn_gravarPopup.setAttribute('data-codprod', id)
                        f_codprod.value = res[0].n_cod_produto 
                        f_tipoprod.value = res[0].n_tipoproduto_tipoproduto 
                        f_descprod.value = res[0].s_desc_produto
                        f_fornprod.value = res[0].n_fornecedor_fornecedor
                        f_qtdeprod.value = res[0].n_qtde_produto
                        f_statusprod.value = res[0].c_status_produto
                        novoProduto.classList.remove('ocultarPopup')
                    })
                })
                divc7.appendChild(img_editar)

                const img_movimentar = document.createElement('img')
                img_movimentar.setAttribute('src','../imgs/mov2.svg')
                img_movimentar.setAttribute('class', 'icone_op')
                img_movimentar.addEventListener('click', (evt)=>{
                    const linha = evt.target.parentNode.parentNode
        
                    if(linha.childNodes[5].innerHTML == "A"){
                        f_codprodMov.value = linha.childNodes[0].innerHTML
                        f_descprodMov.value = linha.childNodes[2].innerHTML
                        f_qtdeprodMov.value = linha.childNodes[4].innerHTML
                        movEstoque.classList.remove('ocultarPopup')
                    } else{
                        const config={
                            titulo: "ERRO",
                            texto: "Produto deve estar ativo (A, botão verde) para ser movimentado.",
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
                divc7.appendChild(img_movimentar)

                dadosGrid.appendChild(divLinha)
    }

    btn_gravarmov.addEventListener('click', (evt)=>{
        const dados = {
            n_cod_produto: f_codprodMov.value,
            n_qtde_produto: f_qtdeprodMov.value,
        }
        const cab = {
            method: 'post',
            body: JSON.stringify(dados)
        }
        const endpoint_gravarmov = `${serv}/editarmovprod`
        fetch(endpoint_gravarmov, cab)
        .then(res=>{
            if(res.status == 200){
                const config={
                    titulo: "Sucesso!",
                    texto: "Nova quantidade gravada com sucesso!",
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
                carregarTodosProds()
            }else{
                const config={
                    titulo: "ERRO",
                    texto: "Erro ao gravar nova quantidade!",
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

    })

    btn_addqtde.addEventListener('click', (evt)=>{
        let qtdeatual = parseInt(f_qtdeprodMov.value)
        let qtdeadd = parseInt(f_qtdeprodregMov.value)
        qtdeatual += qtdeadd
        f_qtdeprodMov.value = qtdeatual
        f_qtdeprodregMov.value = 0
    })

    btn_removeqtde.addEventListener('click', (evt)=>{
        let qtdeatual = parseInt(f_qtdeprodMov.value)
        let qtderem = parseInt(f_qtdeprodregMov.value)
        if(qtdeatual >= qtderem){
            qtdeatual -= qtderem
            f_qtdeprodMov.value = qtdeatual
            f_qtdeprodregMov.value = 0
        }else{
            const config={
                titulo: "ERRO",
                texto: "Impossível retirar mais do que está no estoque!",
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

    carregarTodosProds()

    const endpoint_tiposprod = `${serv}/tiposprod`
    fetch(endpoint_tiposprod)
    .then(res=>res.json())
    .then(res=>{
        f_tipoprod.innerHTML = ''
        res.forEach(el => {
            const opt = document.createElement('option')
            opt.setAttribute('value', el.n_tipoproduto_tipoproduto )
            opt.innerHTML = el.s_desc_tipoproduto
            f_tipoprod.appendChild(opt)
        });
    })

    // make it into a function maybe????? idk though works fine as is


    const endpoint_fornprod = `${serv}/fornprod`
    fetch(endpoint_fornprod)
    .then(res=>res.json())
    .then(res=>{
        f_fornprod.innerHTML = ''
        res.forEach(el => {
            const opt = document.createElement('option')
            opt.setAttribute('value', el.n_fornecedor_fornecedor)
            opt.innerHTML = el.s_desc_fornecedor
            f_fornprod.appendChild(opt)
        });
    })

    btn_pesquisar.addEventListener('click', (evt)=>{
        pesquisa.classList.remove('ocultarPopup')
        tituloPopup.innerHTML = "Pesquisar"
        f_pesq.value = ""
        f_pesq.focus()
    })

    btn_adicionar.addEventListener('click', (evt)=>{
        modoJanela = "n"
        tituloPopup2.innerHTML = "Novo Produto"
        novoProduto.classList.remove('ocultarPopup')
        f_codprod.value = ""
        f_tipoprod.value = "-1"
        f_descprod.value = ""
        f_fornprod.value = "-1"
        f_qtdeprod.value = "1"
        f_statusprod.value = "A"
        // img_foto.setAttribute('src', '#')
        // telefones.innerHTML = ""
        // img_foto.classList.add('esconderElemento')
    })

    // btn_fecharPopup.addEventListener('click', (evt)=>{
    //     novoProduto.classList.add('ocultarPopup')
    // })

    btn_fecharPopupPesq.addEventListener('click', (evt)=>{
        pesquisa.classList.add('ocultarPopup')
    })

    btn_fecharPopupNovoProd.addEventListener('click', (evt)=>{
        novoProduto.classList.add('ocultarPopup')
    })

    btn_fecharPopupMovEstoque.addEventListener('click', (evt)=>{
        movEstoque.classList.add('ocultarPopup')
    })

    btn_cancelarPopup.addEventListener('click', (evt)=>{
        novoProduto.classList.add('ocultarPopup')
    })

    btn_cancelarPopupMovEstoque.addEventListener('click', (evt)=>{
        movEstoque.classList.add('ocultarPopup')
    })

    btn_gravarPopup.addEventListener('click', (evt)=>{
        const dados = {
            n_cod_produto: f_codprod.value,
            n_tipoproduto_tipoproduto: f_tipoprod.value,
            s_desc_produto: f_descprod.value,
            n_fornecedor_fornecedor: f_fornprod.value,
            n_qtde_produto: f_qtdeprod.value,
            c_status_produto: f_statusprod.value
        }
        const cab = {
            method: 'post',
            body: JSON.stringify(dados)
        }
        let endpoint_novooueditarprod = null
        if(modoJanela == "n"){
            endpoint_novooueditarprod = `${serv}/novoprod`
        } else{
            endpoint_novooueditarprod = `${serv}/editprod`
        }
        // console.log(dados);
        fetch(endpoint_novooueditarprod, cab)
        .then(res=>{
            if(res.status == 200){
                if(modoJanela == "n"){
                    const config={
                        titulo: "Sucesso!",
                        texto: "Produto adicionado com sucesso!",
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
                    f_codprod.value = ""
                    f_tipoprod.value = ""
                    f_descprod.value = ""
                    f_fornprod.value = ""
                    f_qtdeprod.value = ""
                    f_statusprod.value = ""
                    
                    carregarTodosProds()
                }
                else{
                    const config={
                        titulo: "Sucesso!",
                        texto: "Produto editado com sucesso!",
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
                    f_codprod.value = ""
                    f_tipoprod.value = ""
                    f_descprod.value = ""
                    f_fornprod.value = ""
                    f_qtdeprod.value = ""
                    f_statusprod.value = ""
                    carregarTodosProds()
                }
                // novoProduto.classList.add('ocultarPopup')
            } else{
                const config={
                    titulo: "ERRO",
                    texto: "Erro ao adicionar produto.",
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
        // novoProduto.classList.add('ocultarPopup')
    })

    // f_telefone.addEventListener('keyup', (evt)=>{
    //     if(evt.key == 'Enter'){
    //         if(evt.target.value.length >= 8){
    //             criarCaixaTel(evt.target.value, "-1","n")
    //             evt.target.value = ""
    //         } else{
    //              const config={
    //                 titulo: "ERRO",
    //                 texto: "Número de telefone inválido.",
    //                 cor:"#f00",
    //                 tipo: 'ok',
    //                 ok: ()=>{
    //                     console.log('OK clicado!');
    //                 },
    //                 sim: ()=>{
    //                     console.log('Sim clicado!');
    //                 },
    //                 nao: ()=>{
    //                     console.log('Não clicado!');
    //                 }
    //             }
    //             Cxmsg.mostrar(config)
    //         }
    //     }
    // })

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


    // f_foto.addEventListener('change', (evt)=>{
    //     converte_imagem_b64(img_foto, evt.target.files[0])
    //     // console.log(evt.target);
    //     img_foto.classList.remove('esconderElemento')
    // })

    // weird shit

}

