const f_nome = document.getElementById('f_nome')
const f_nota = document.getElementById('f_nota')
const f_msg = document.getElementById('f_msg')

document.querySelector('#btn_validar').addEventListener('click', (evt)=>{
    let msg = null
    if (!f_nota.checkValidity()) {
        msg = 'Campo inválido -'
        msg += ` ${f_nota.validationMessage}`
    }
    f_msg.innerHTML = msg
    evt.preventDefault()
})