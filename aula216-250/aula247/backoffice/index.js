const endpoint_config = `../config.json`
fetch(endpoint_config)
.then(res=>res.json())
.then(res=>{
    console.log(res);
    sessionStorage.setItem('servidor_nodered', res.servidor_nodered)
    sessionStorage.setItem('versao', res.versao)
})
const serv = sessionStorage.getItem('servidor_nodered')
console.log(serv);

const login = document.querySelector('#login')
const f_email = document.querySelector('#f_email')
const f_senha = document.querySelector('#f_senha')
const btn_login = document.querySelector('#btn_login')

btn_login.addEventListener('click', (evt)=>{
    const email = f_email.value
    const senha = f_senha.value
    const endpoint = `${serv}/login/${email}/${senha}`
    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        console.log(res);
    })
})