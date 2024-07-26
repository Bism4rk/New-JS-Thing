const config = {
    cor: '#48f'
}

const cxmsg = new Cxmsg(config)

const btn_mostrar_cxmsg = document.querySelector('#btn_mostrar_cxmsg')
const btn_mostrar_cxmsg2 = document.querySelector('#btn_mostrar_cxmsg2')
const btn_mostrar_cxmsg3 = document.querySelector('#btn_mostrar_cxmsg3')

btn_mostrar_cxmsg.addEventListener('click', ()=>{
    cxmsg.mostrar('CFB Cursos', 'Curso de JavaScript - Montando caixa de mensagens personalizadas')
})

btn_mostrar_cxmsg2.addEventListener('click', ()=>{
    cxmsg.mostrar('pearl jam', 'good')
})

btn_mostrar_cxmsg3.addEventListener('click', ()=>{
    cxmsg.mostrar('GOLS', 'Giuliano <br> Luan (x2) <br> Fernandinho <br> Réver contra <br>')
})