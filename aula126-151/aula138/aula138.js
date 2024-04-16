import { Cxmsg } from "./cxmsg.js";

const config = {
     cor: '#48f'
 }

Cxmsg.config(config)

const btn_mostrar_cxmsg = document.querySelector('#btn_mostrar_cxmsg')
const btn_mostrar_cxmsg2 = document.querySelector('#btn_mostrar_cxmsg2')
const btn_mostrar_cxmsg3 = document.querySelector('#btn_mostrar_cxmsg3')

btn_mostrar_cxmsg.addEventListener('click', ()=>{
    Cxmsg.mostrar('CFB Cursos', 'Curso de JavaScript - Montando caixa de mensagens personalizadas')
})

btn_mostrar_cxmsg2.addEventListener('click', ()=>{
    Cxmsg.mostrar('pearl jam', 'good')
})

btn_mostrar_cxmsg3.addEventListener('click', ()=>{
    Cxmsg.mostrar('GOLS', '&#x26BD Giuliano <br> &#x26BD&#x26BD Luan (x2) <br> &#x26BD Fernandinho <br> &#x26BD Réver contra <br>')
})