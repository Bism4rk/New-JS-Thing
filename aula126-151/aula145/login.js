class Login{
    static logado = null
    static matlogado = null
    static nomelogado = null
    static acessologado = null
    static estilocss = null
    static endpoint = 'https://6573c537-7d92-4414-a2d0-76ec13fdfc3d-00-39qe15kjmc8b5.worf.replit.dev/'
    // https://6573c537-7d92-4414-a2d0-76ec13fdfc3d-00-39qe15kjmc8b5.worf.replit.dev/?matricula=123&senha=321


    static login = (mat, pas)=>{
        this.endpoint += `?matricula=${mat}&senha=${pas}`
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
            'background-color: #048;'+
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
        // fetch(this.endpoint)
        // .then(res=>res.json())
        // .then(res=>{
        //     if(res){
        //         this.logado = true
        //         this.matlogado = mat
        //         this.nomelogado = res.nome
        //         this.acessologado = res.acesso

        //         console.log(res);
        //         console.log(this.nomelogado);
        //         console.log(this.acessologado);
        //     } else {
        //         console.log('ERRO - Usuário não encontrado!');
        //     }
        // })
    }
}

export {Login};