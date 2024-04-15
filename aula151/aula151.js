import { Cxmsg } from "./cxmsg.js";
// import { Login } from "./login.js";

const callback_ok = ()=>{}

const callback_naook = ()=>{
    const config = {
        cor: 'red',
        tipo: 'ok',
        textos: '',
        comando_sn: null
    }
    Cxmsg.mostrar(config, 'Erro!', 'Log-in não efetuado - Usuário ou senha errados!')
}

const configlogin = {
    cor: '048',
    img: 'logo.png',
    endpoint: 'https://6573c537-7d92-4414-a2d0-76ec13fdfc3d-00-39qe15kjmc8b5.worf.replit.dev'
}
Login.login(callback_ok, callback_naook, configlogin)