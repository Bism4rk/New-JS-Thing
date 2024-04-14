class Login{

    static logado = null
    static matlogado = null
    static nomelogado = null
    static acessologado = null
    static estilocss = null
    static callback_ok = null
    static callback_naook = null
    static config = {
        cor: '048',
        img: 'logo.png'
    }
    static endpoint = 'https://6573c537-7d92-4414-a2d0-76ec13fdfc3d-00-39qe15kjmc8b5.worf.replit.dev/'
    // https://6573c537-7d92-4414-a2d0-76ec13fdfc3d-00-39qe15kjmc8b5.worf.replit.dev/?matricula=123&senha=321


    static login = (callback_ok, callback_naook, config=null)=>{
        if(config != null){
            this.config = config
        }   
        this.callback_ok = ()=>{callback_ok()}
        this.callback_naook = ()=>{callback_naook()}
        this.estilocss = '.fundoLogin{' +
            'display: flex;'+
            'justify-content: center;'+
            'align-items: center;'+
            'width: 100%;'+
            'height: 100%;'+
            'position: absolute;'+
            'top: 0px;'+
            'left: 0px;'+
            'background-color: rgba(0, 0, 0, 0.75);'+
            'box-sizing: border-box;'+
        '}'+
        '.baseLogin{'+
            'display: flex;'+
            'justify-content: center;'+
            'align-items: stretch;'+
            'width: 50%;'+
            'box-sizing: inherit;'+
        '}'+
        '.elementosLogin{'+
            'display: flex;'+
            'justify-content: center;'+
            'align-items: flex-start;'+
            'flex-direction: column;'+
            'width: 50%;'+
            'background-color: #eee;'+
            'padding: 10px;'+
            'border-radius:  10px 0px 0px 10px;'+
            'box-sizing: inherit;'+
        '}'+
        '.logoLogin{'+
            'display: flex;;'+
            'justify-content: center;'+
            'align-items: center;'+
            'width: 50%;'+
            'background-color: #bbb;'+
            'padding: 10px;'+
            'border-radius: 0px 10px 10px 0px;'+
            'box-sizing: inherit;'+
        '}'+
        '.logoLogin img{'+
            'width: 90%;'+
            'box-sizing: inherit;'+
        '}'+
        '.campoLogin{'+
            'display: flex;'+
            'justify-content: flex-start;'+
            'align-items: flex-start;'+
            'flex-direction: column;'+
            'box-sizing: inherit;'+
            'margin-bottom: 10px;'+
        '}'+
        '.campoLogin label{'+
            'font-size: 18px;'+
        '}'+
        '.campoLogin input{'+
            'font-size: 18px;'+
            'padding: 5px;'+
            'background-color: white;'+
            'border-radius: 5px ;'+
        '}'+
        '.botoesLogin{'+
            'display: flex;'+
            'justify-content: space-around;'+
            'align-items: center;'+
            'width: 100%;'+
            'box-sizing: inherit;'+
        '}'+
        '.botoesLogin button{'+
            'cursor: pointer;'+
            `background-color: #${this.config.cor};`+ // #048
            'color: white;'+
            'border-radius: 5px;'+
            'padding: 10px;'+
            'width: 100px;'+
            'box-sizing: inherit;' +
        '}'

        const estiloStyle = document.createElement('style')
        estiloStyle.setAttribute('id', 'estiloLogin')
        estiloStyle.setAttribute('rel', 'stylesheet')
        estiloStyle.setAttribute('type', 'text/css')
        estiloStyle.innerHTML = this.estilocss
        document.head.appendChild(estiloStyle)

        const corpo = document.body

        const fundoLogin = document.createElement('div')
        fundoLogin.setAttribute('id', 'fundoLogin')
        fundoLogin.setAttribute('class', 'fundoLogin')
        corpo.prepend(fundoLogin)

        const baseLogin = document.createElement('div')
        baseLogin.setAttribute('id', 'baseLogin')
        baseLogin.setAttribute('class', 'baseLogin')
        fundoLogin.appendChild(baseLogin)

        const elementosLogin = document.createElement('div')
        elementosLogin.setAttribute('id', 'elementosLogin')
        elementosLogin.setAttribute('class', 'elementosLogin')
        baseLogin.appendChild(elementosLogin)

        const campoLoginUsername = document.createElement('div')
        campoLoginUsername.setAttribute('id', 'campoLoginUsername')
        campoLoginUsername.setAttribute('class', 'campoLogin')
        elementosLogin.appendChild(campoLoginUsername)

        const labelUsername = document.createElement('label')
        labelUsername.setAttribute('id', 'labelUsername')
        labelUsername.innerHTML = 'Username'
        campoLoginUsername.appendChild(labelUsername)

        const inputUsername = document.createElement('input')
        inputUsername.setAttribute('type', 'text')
        inputUsername.setAttribute('id', 'f_username')
        inputUsername.setAttribute('class', 'f_username')
        campoLoginUsername.appendChild(inputUsername)

        const campoLoginSenha = document.createElement('div')
        campoLoginSenha.setAttribute('id', 'campoLoginSenha')
        campoLoginSenha.setAttribute('class', 'campoLogin')
        elementosLogin.appendChild(campoLoginSenha)

        const labelSenha = document.createElement('label')
        labelSenha.setAttribute('id', 'labelSenha')
        labelSenha.innerHTML = 'Senha'
        campoLoginSenha.appendChild(labelSenha)

        const inputSenha = document.createElement('input')
        inputSenha.setAttribute('type', 'password')
        inputSenha.setAttribute('id', 'f_senha')
        inputSenha.setAttribute('class', 'f_senha')
        campoLoginSenha.appendChild(inputSenha)

        const botoesLogin = document.createElement('div')
        botoesLogin.setAttribute('id', 'botoesLogin')
        botoesLogin.setAttribute('class', 'botoesLogin')
        elementosLogin.appendChild(botoesLogin)

        const btn_login = document.createElement('button')
        btn_login.setAttribute('id', 'btn_login')
        btn_login.setAttribute('class', 'btn_login')
        btn_login.innerHTML = 'Login'
        btn_login.addEventListener('click', (evt)=>{
            this.verificaLogin()
        })
        botoesLogin.appendChild(btn_login)

        const btn_cancelar = document.createElement('button')
        btn_cancelar.setAttribute('id', 'btn_cancelar')
        btn_cancelar.setAttribute('class', 'btn_cancelar')
        btn_cancelar.innerHTML = 'Cancelar'
        btn_cancelar.addEventListener('click', ()=>{
            this.fechar()
            alert('[na voz do do cara dos jingles da rádio globo] CANCELADO!')
        })
        botoesLogin.appendChild(btn_cancelar)

        const logoLogin = document.createElement('div')
        logoLogin.setAttribute('id', 'logoLogin')
        logoLogin.setAttribute('class', 'logoLogin')
        baseLogin.appendChild(logoLogin)

        const imgLogo = document.createElement('img')
        imgLogo.setAttribute('src', this.config.img)
        imgLogo.setAttribute('alt', 'Logo CFB Cursos')
        logoLogin.appendChild(imgLogo)

    }

    static verificaLogin = ()=>{
        let mat = document.querySelector('#f_username').value 
        let pas = document.querySelector('#f_senha').value

        const endpoint = `https://6573c537-7d92-4414-a2d0-76ec13fdfc3d-00-39qe15kjmc8b5.worf.replit.dev/?matricula=${mat}&senha=${pas}`
        fetch(endpoint)
        .then(res=>res.json())
        .then(res=>{
            if(res){
                this.logado = true
                this.matlogado = mat
                this.nomelogado = res.nome
                this.acessologado = res.acesso
                this.callback_ok()
                this.fechar()
                alert('Log-in feito com sucesso!')
            } else {
                this.logado = false
                this.matlogado = null
                this.nomelogado = null
                this.acessologado = null
                this.callback_naook()
                alert('ERRO - ala o cara colocou algo erradokkkkkkkkkkkkkkk mó burrokkkkkkkkkkkk')
                return false;
            }
        })

    }

    static fechar = ()=>{
        const estiloLogin = document.querySelector('#estiloLogin')
        estiloLogin.remove()

        const fundoLogin = document.querySelector('#fundoLogin')
        fundoLogin.remove()
    }
}

export {Login};

// https://cdn.jsdelivr.net/gh/bism4rck/aula150/login.js


// https://cdn.jsdelivr.net/gh/bism4rck/New-JS-Thing/aula150/login.js