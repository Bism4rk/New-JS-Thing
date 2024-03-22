const f_nome = document.getElementById('f_nome')
const f_nota = document.getElementById('f_nota')
const f_msg = document.getElementById('f_msg')

document.querySelector('#btn_validar').addEventListener('click', (evt)=>{
    // let estadoVerificacao = f_nota.validity 
    let msg = null
    if (f_nota.validity.valueMissing) {
        msg = "Este campo é obrigatório!"
    } else if(f_nota.validity.rangeOverflow){
        msg = 'Valor acima do permitido!'
    } else if(f_nota.validity.rangeUnderflow){
        msg = 'Valor abaixo do permitido!'
    }
    // f_nota.reportValidity()
    f_msg.innerHTML = msg
    evt.preventDefault()
})