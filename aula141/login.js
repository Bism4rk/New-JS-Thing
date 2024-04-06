class Login{
    static logado = null
    static matlogado = null
    static nomelogado = null
    static acessologado = null
    static endpoint = 'https://6573c537-7d92-4414-a2d0-76ec13fdfc3d-00-39qe15kjmc8b5.worf.replit.dev/'
    // https://6573c537-7d92-4414-a2d0-76ec13fdfc3d-00-39qe15kjmc8b5.worf.replit.dev/?matricula=123&senha=321


    static login = (mat, pas)=>{
        this.endpoint += `?matricula=${mat}&senha=${pas}`
        fetch(this.endpoint)
        .then(res=>res.json())
        .then(res=>{
            if(res){
                this.logado = true
                this.matlogado = mat
                this.nomelogado = res.nome
                this.acessologado = res.acesso

                console.log(res);
                console.log(this.nomelogado);
                console.log(this.acessologado);
            } else {
                console.log('ERRO - Usuário não encontrado!');
            }
        })
    }
}

export {Login};
