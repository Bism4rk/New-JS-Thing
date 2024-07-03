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
        const cxmsg_fundo = document.createElement('div')
        cxmsg_fundo.setAttribute('class', 'cxmsg_fundo')
        cxmsg_fundo.setAttribute('id', 'cxmsg_fundo')


        const cxmsg = document.createElement('div')
        cxmsg.setAttribute('class', 'cxmsg')
        cxmsg.setAttribute('id', 'cxmsg')
        cxmsg_fundo.appendChild(cxmsg)

        const titulo_cxmsg = document.createElement('div')
        titulo_cxmsg.setAttribute('class', 'titulo_cxmsg')
        titulo_cxmsg.setAttribute('style', `background-color: ${config.cor}`)
        titulo_cxmsg.setAttribute('id', 'titulo_cxmsg')
        cxmsg.appendChild(titulo_cxmsg)

        const p_titulo = document.createElement('p')
        p_titulo.innerHTML = config.titulo
        titulo_cxmsg.appendChild(p_titulo)

        const img_btnFechar = document.createElement('img')
        img_btnFechar.setAttribute('src', '../imgs/fechar.svg')
        img_btnFechar.setAttribute('id', 'btn_fecharCxmsg')
        img_btnFechar.setAttribute('class', 'btn_fecharCxmsg')
        titulo_cxmsg.appendChild(img_btnFechar)

        const corpo_cxmsg = document.createElement('div')
        corpo_cxmsg.setAttribute('class', 'corpo_cxmsg')
        corpo_cxmsg.setAttribute('id', 'corpo_cxmsg')
        cxmsg.appendChild(corpo_cxmsg)

        const p_texto = document.createElement('p')
        p_texto.innerHTML = config.texto
        corpo_cxmsg.appendChild(p_texto)

        const rodape_cxmsg = document.createElement('div')
        rodape_cxmsg.setAttribute('class', 'rodape_cxmsg')
        rodape_cxmsg.setAttribute('id', 'rodape_cxmsg')
        cxmsg.appendChild(rodape_cxmsg)

        if(config.tipo == 'ok'){
            const btn_okCxmsg = document.createElement('button')
            btn_okCxmsg.setAttribute('id', 'btn_okCxmsg')
            btn_okCxmsg.setAttribute('class', 'btn_cxmsg')
            btn_okCxmsg.innerHTML = 'OK'
            rodape_cxmsg.appendChild(btn_okCxmsg)
        } else if (config.tipo == 'sn'){
            const btn_simCxmsg = document.createElement('button')
            btn_simCxmsg.setAttribute('id', 'btn_simCxmsg')
            btn_simCxmsg.setAttribute('class', 'btn_cxmsg')
            btn_simCxmsg.innerHTML = 'Sim'
            rodape_cxmsg.appendChild(btn_simCxmsg)
    
            const btn_naoCxmsg = document.createElement('button')
            btn_naoCxmsg.setAttribute('id', 'btn_naoCxmsg')
            btn_naoCxmsg.setAttribute('class', 'btn_cxmsg')
            btn_naoCxmsg.innerHTML = 'Não'
            rodape_cxmsg.appendChild(btn_naoCxmsg)
        }

        document.body.prepend(cxmsg_fundo)
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
