import { Cxmsg } from "./cxmsg.js";

const config = {
     cor: '#48f',
     tipo: 'ok', // tipos: 'ok', 'sn'
     textos: ['Sim', 'Não'],
     comando_sn: ()=>{
        // bruh
     }
 }

 function fsim() {
    alert('Botão SIM pressionado! Wow')
 }

const btn_mostrar_cxmsg = document.querySelector('#btn_mostrar_cxmsg')
const btn_mostrar_cxmsg2 = document.querySelector('#btn_mostrar_cxmsg2')
const btn_mostrar_cxmsg3 = document.querySelector('#btn_mostrar_cxmsg3')

btn_mostrar_cxmsg.addEventListener('click', ()=>{
    config.tipo = 'ok'
    Cxmsg.mostrar(config, 'CFB Cursos', 'Curso de JavaScript - Montando caixa de mensagens personalizadas')
})

btn_mostrar_cxmsg2.addEventListener('click', ()=>{
    config.tipo = 'sn'
    config.textos = ['ayy', 'nah']
    config.comando_sn = ()=>{fsim()}
    Cxmsg.mostrar(config, 'pearl jam', 'good')
})

btn_mostrar_cxmsg3.addEventListener('click', ()=>{
    config.tipo = 'sn'
    config.textos = ['OK', 'Cancelar']
    config.comando_sn = ()=>{}
    Cxmsg.mostrar(config, 'GOLS', '&#x26BD Giuliano <br> &#x26BD&#x26BD Luan (x2) <br> &#x26BD Fernandinho <br> &#x26BD Réver contra <br>')
})