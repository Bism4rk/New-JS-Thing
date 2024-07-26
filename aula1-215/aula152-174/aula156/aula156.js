const configdgv = {
    endpoint: "produtos.json",
    idDestino: "dgvDados"
}

const dgv = (configdgv)=> {
    const dgvDados = document.getElementById(configdgv.idDestino)
    dgvDados.innerHTML = ''
    fetch(configdgv.endpoint)
    .then(res=>res.json())
    .then(res=>{
        res.forEach(el => {
            const dgvLinha = document.createElement('div')
            dgvLinha.setAttribute('class', 'dgvLinha')

            const c1 = document.createElement('div')
            c1.setAttribute('class', 'c1 coluna')
            c1.innerHTML = el.id
            dgvLinha.appendChild(c1)

            const c2 = document.createElement('div')
            c2.setAttribute('class', 'c2 coluna')
            c2.innerHTML = el.produto
            dgvLinha.appendChild(c2)

            const c3 = document.createElement('div')
            c3.setAttribute('class', 'c3 coluna')
            c3.innerHTML = el.marca
            dgvLinha.appendChild(c3)

            const c4 = document.createElement('div')
            c4.setAttribute('class', 'c4 coluna')
            c4.innerHTML = el.modelo
            dgvLinha.appendChild(c4)

            const c5 = document.createElement('div')
            c5.setAttribute('class', 'c5 coluna')
            dgvLinha.appendChild(c5)

            const imgDelete = document.createElement('img')
            imgDelete.setAttribute('class', 'dgvIcone')
            imgDelete.setAttribute('src', 'deletar.svg')
            c5.appendChild(imgDelete)

            const imgEditar = document.createElement('img')
            imgEditar.setAttribute('class', 'dgvIcone')
            imgEditar.setAttribute('src', 'editar.svg')
            c5.appendChild(imgEditar)

            const imgExibir = document.createElement('img')
            imgExibir.setAttribute('class', 'dgvIcone')
            imgExibir.setAttribute('src', 'exibir.svg')
            c5.appendChild(imgExibir)

            dgvDados.appendChild(dgvLinha)
        });

    console.log(res);
})}

dgv(configdgv);