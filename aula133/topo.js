const head = document.head 
const body = document.body

const estilo = `<link rel='stylesheet' type='text/css' href='topo.css'/>`
head.innerHTML += estilo

const topo = document.createElement('div')
topo.setAttribute('id', 'topo')
topo.setAttribute('class', 'topo')
body.prepend(topo)

const logo = 
            '<div class="logo" id= "logo">' +
                '<img src="logo.png" alt="Logo CFB Cursos">' +
            '</div>'    
topo.innerHTML += logo  

const login = 
            '<div class="login" id= "login">' +
                '<p id="matricula">Matrícula:<span></span> </p>' +
                '<p id="nome">Nome:<span></span> </p>' 
            '</div>'
topo.innerHTML += login;