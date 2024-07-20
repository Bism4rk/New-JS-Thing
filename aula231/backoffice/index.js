const menuPrincipal = document.querySelector('#menuPrincipal')
const btn_menuPrincipal = document.querySelector('#btn_menuPrincipal')
const todosmenusprincipais = [...document.querySelectorAll('.btn_menuItem')]
// const endpoint_config = `../config.txt`
const endpoint_config = `../config.json`
fetch(endpoint_config)
.then(res=>res.json())
.then(res=>{
    sessionStorage.setItem('servidor_nodered', res.servidor_nodered)
    sessionStorage.setItem('versao', res.versao)
})


btn_menuPrincipal.addEventListener('click', (evt)=>{
    menuPrincipal.classList.toggle('ocultar')
})

todosmenusprincipais.forEach(el=>{
    el.addEventListener('click', (evt)=>{
        menuPrincipal.classList.add('ocultar')
    })
})