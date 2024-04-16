const config = {
    titulo: 'Teste',
    texto: 'CFB Cursos',
    cor: '#48f'
}

const cxmsg = new Cxmsg(config)

const btn_mostrar_cxmsg = document.querySelector('#btn_mostrar_cxmsg')

btn_mostrar_cxmsg.addEventListener('click', ()=>{
    cxmsg.mostrar()
})