const menuPrincipal = document.querySelector('#menuPrincipal')
const btn_menuPrincipal = document.querySelector('#btn_menuPrincipal')
const todosmenusprincipais = [...document.querySelectorAll('.btn_menuItem')]
const divID = document.querySelector('#divID')
const divNome = document.querySelector('#divNome')
const btn_logoff = document.querySelector('#btn_logoff')

if (sessionStorage.getItem('id') == "-1") {
    window.location.href = "index.html"
    window.location.reload()
}


// const endpoint_config = `../config.txt`
const endpoint_config = `../config.json`
fetch(endpoint_config)
.then(res=>res.json())
.then(res=>{
    sessionStorage.setItem('servidor_nodered', res.servidor_nodered)
    sessionStorage.setItem('versao', res.versao)
})

const n_pessoa_pessoa = sessionStorage.getItem('id')
const s_nome_pessoa = sessionStorage.getItem('nome')
console.log(n_pessoa_pessoa);
console.log(s_nome_pessoa);
divID.innerHTML += n_pessoa_pessoa
divNome.innerHTML += s_nome_pessoa

btn_menuPrincipal.addEventListener('click', (evt)=>{
    menuPrincipal.classList.toggle('ocultar')
})

todosmenusprincipais.forEach(el=>{
    el.addEventListener('click', (evt)=>{
        menuPrincipal.classList.add('ocultar')
    })
})

btn_logoff.addEventListener('click', (evt)=>{
    sessionStorage.setItem('id', '-1')
    sessionStorage.setItem('nome', '-1')
    divID.innerHTML = "ID: "
    divNome.innerHTML = "Usuário: "
})