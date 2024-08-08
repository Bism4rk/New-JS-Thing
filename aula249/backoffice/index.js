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

const login = document.querySelector('#login')
const f_email = document.querySelector('#f_email')
const f_senha = document.querySelector('#f_senha')
const btn_login = document.querySelector('#btn_login')

btn_login.addEventListener('click', (evt)=>{
    const email = f_email.value
    let senha = f_senha.value
    const endpoint = `${serv}/login/${email}/${senha}`
    fetch(endpoint)
    .then(res=>{
        console.log(res);
        if(res.status == 200){
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
        } else if (res.status == 208){
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
        } else if (res.status == 205){
            console.log('Primeiro acesso!');
            const config={
                titulo: "Sucesso!",
                texto: "Primeiro acesso!",
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
        }
    })
    // .then(res=>{
    //     console.log(res);
    // })
})