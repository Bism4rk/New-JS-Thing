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

Login.login(callback_ok, callback_naook)