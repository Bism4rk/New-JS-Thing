import { Cxmsg } from "../utils/cxmsg2.js";

const endpoint_config = `../config.json`
fetch(endpoint_config)
.then(res=>res.json())
.then(res=>{
    console.log(res);
    sessionStorage.setItem('servidor_nodered', res.servidor_nodered)
    sessionStorage.setItem('versao', res.versao)
})
const serv = sessionStorage.getItem('servidor_nodered')
console.log(serv);

const text = document.querySelectorAll('.text')
const login = document.querySelector('#login')
const primeiroAcesso = document.querySelector('#primeiroAcesso')
const f_email = document.querySelector('#f_email')
const f_senha = document.querySelector('#f_senha')
const btn_login = document.querySelector('#btn_login')
const btn_fecharPopupDefSenha = document.querySelector('#btn_fecharPopupDefSenha')
const f_emailDefSenha = document.querySelector('#f_emailDefSenha')
const f_senha1 = document.querySelector('#f_senha1')
const f_senha2 = document.querySelector('#f_senha2')
const btn_gravarSenha = document.querySelector('#btn_gravarSenha')
const idDefSenha = document.querySelector('#idDefSenha')

text.forEach(function(text){
    text.addEventListener('click', (evt)=>{
        login.classList.remove('ocultarPopup')
    })
})

btn_login.addEventListener('click', (evt)=>{
    const email = f_email.value
    let senha = f_senha.value
    if(senha == ""){
        senha = "-1"
    }
    let endpoint = `${serv}/login/${email}/${senha}`
    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        console.log(res);
        if(res.retorno == 200){
            sessionStorage.setItem('id', res.n_pessoa_pessoa)
            sessionStorage.setItem('nome', res.s_nome_pessoa)
            sessionStorage.setItem('n_token_token', res.n_token_token)
            sessionStorage.setItem('n_token_token', res.n_token_token)
            sessionStorage.setItem('IDToken', res.insertId)

            console.log('OK! Tudo certo!');
            const config={
                titulo: "Sucesso!",
                texto: "Senha correta!",
                cor:"#00a600",
                tipo: 'ok',
                ok: ()=>{
                    console.log('OK clicado!');
                    window.location.href='main.html'
                },
                sim: ()=>{
                    console.log('Sim clicado!');
                },
                nao: ()=>{
                    console.log('Não clicado!');
                }
            }
            Cxmsg.mostrar(config)
        } else if (res.retorno == 208){
            console.log('Erro - senha errada!');
            const config={
                titulo: "Alerta",
                texto: "Senha errada!",
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
        } else if (res.retorno == 205){
            console.log('Primeiro acesso!');
            idDefSenha.value = res[0].n_pessoa_pessoa
            const config={
                titulo: "Sucesso!",
                texto: "Primeiro acesso!",
                cor:"#00a600",
                tipo: 'ok',
                ok: ()=>{
                    console.log('OK clicado!');
                    primeiroAcesso.classList.remove('ocultarPopup')
                    login.classList.add('ocultarPopup')
                    f_emailDefSenha.value = f_email.value
                    f_email.value = ""
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
    // .then(res=>{
    //     console.log(res);
    // })
})

btn_fecharPopupDefSenha.addEventListener('click', (evt)=>{
    primeiroAcesso.classList.add('ocultarPopup')
    login.classList.remove('ocultarPopup')
})

btn_fecharPopupLogin.addEventListener('click', (evt)=>{
    login.classList.add('ocultarPopup')
})

btn_gravarSenha.addEventListener('click', (evt)=>{
    if (f_senha1.value != "" && f_senha2.value != "") {
        if (f_senha1.value != f_senha2.value) {
            const config={
                titulo: "Alerta",
                texto: "A senha confirmada NÃO é igual à senha digitada!",
                cor:"#f00",
                tipo: 'ok',
                ok: ()=>{
                    console.log('OK clicado!');
                    f_senha2.focus()
                },
                sim: ()=>{
                    console.log('Sim clicado!');
                },
                nao: ()=>{
                    console.log('Não clicado!');
                }
            }
            Cxmsg.mostrar(config)
        } else{
            const dados = {
                n_pessoa_pessoa: idDefSenha.value,
                s_senha_pessoa: f_senha1.value
            }
            const cab = {
                method: 'post',
                body: JSON.stringify(dados)
            }
            let endpoint_gravarsenha = `${serv}/gravarnovasenha`
            fetch(endpoint_gravarsenha, cab)
            .then(res=>{
                if(res.status == 200){
                   const config={
                        titulo: "Sucesso!",
                        texto: "Senha gravar com sucesso!",
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
                    idDefSenha.value = ""
                    f_emailDefSenha.value = ""
                    f_senha.value = f_senha1.value
                    f_senha1.value = ""
                    f_senha2.value = ""
                    primeiroAcesso.classList.add('ocultarPopup')
                    login.classList.remove('ocultarPopup')
                } else{
                    const config={
                        titulo: "Alerta",
                        texto: "Erro ao gravar senha!",
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
        }
    }else{
        const config={
            titulo: "Alerta",
            texto: "Digite a senha 2 vezes!",
            cor:"#f00",
            tipo: 'ok',
            ok: ()=>{
                console.log('OK clicado!');
                if(f_senha1.value == ''){
                    f_senha1.focus()
                }else{
                    f_senha2.focus()
                }
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

