const body = document.body

const estiloTopo = 
    'display: flex;' + 
    'justify-content: space-between;' +
    'align-items: center;' +
    'background-color: blue;'
const topo = document.createElement('div')
topo.setAttribute('id', 'topo')
topo.setAttribute('style', estiloTopo)
body.prepend(topo)

const estiloImgLogo = 'width: 200px;'
const logo = 
            `<div class="logo" id= "logo">` +
                `<img src="logo.png" alt="Logo CFB Cursos" style="${estiloImgLogo}">` +
            `</div>`
topo.innerHTML += logo  

const login = 
            '<div class="login" id= "login">' +
                '<p id="matricula">Matrícula:<span></span> </p>' +
                '<p id="nome">Nome:<span></span> </p>' 
            '</div>'
topo.innerHTML += login;