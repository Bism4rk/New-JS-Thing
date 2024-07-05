class Cxmsg{

    static config=null
    
    // config={
    //     titulo:"",
    //     texto:"",
    //     cor:"",
    //     ok:  null,
    //     sim: null,
    //     nao: null,
    // }

    static mostrar = (config) =>{
        this.config = config
        alert(config.texto)
    }
}

export {Cxmsg}

{/* <div id="cxmsg_fundo" class="cxmsg_fundo ocultarPopup">
<div class="cxmsg" id="cxmsg">
    <div class="titulo_cxmsg" id="titulo_cxmsg">
        <p>Título</p>
        <img src="imgs/fechar.svg" id="btn_fecharCxmsg" class="btn_fecharCxmsg" alt="FECHA PORRA">
    </div>
    <div class="corpo_cxmsg" id="corpo_cxmsg">
        <p>Mensagem da caixa</p>
        <p>Beans, greens, potatoes, tomatoes, ham, juice</p>
    </div>
    <div class="rodape_cxmsg" id="rodape_cxmsg">
        <button class="btn_cxmsg" id="btn_okCxmsg">ok</button>
        <button class="btn_cxmsg" id="btn_simCxmsg">sim</button>
        <button class="btn_cxmsg" id="btn_naoCxmsg">não</button>
    </div>
</div>
</div> */}

{/* <style>
        .cxmsg_fundo{
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.75);
        }

        .cxmsg{
            width: 300px;
        }
        
        .titulo_cxmsg{
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: white;
            background-color: rgb(1, 1, 120);
            border-radius: 10px 10px 0px 0px;
            padding: 5px;
        }
        .corpo_cxmsg{
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            background-color: #aaa;
            padding: 5px;
        }
        .rodape_cxmsg{
            display: flex;
            justify-content: space-around;
            align-items: center;
            color: white;
            padding: 5px; 
            background-color: rgb(1, 1, 120);
            border-radius: 0px 0px 10px 10px;
        }
        .btn_fecharCxmsg{
            background-color: red;
            color: white;
            border-radius: 5px;
        }

        .btn_cxmsg{
            background-color: white;
            border: 1px solid black;
            cursor: pointer;
            width: 50px;
            height: 25px;
            border-radius: 5px;
        }
    </style> */}