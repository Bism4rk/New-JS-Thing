const menuPrincipal = document.querySelector('#menuPrincipal')
const btn_menuPrincipal = document.querySelector('#btn_menuPrincipal')


btn_menuPrincipal.addEventListener('click', (evt)=>{
    menuPrincipal.classList.toggle('ocultar')
})