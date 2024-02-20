const url = document.getElementById('url')
const btn_url = document.getElementById('btn_url')

btn_url.addEventListener('click', (evt)=>{
    // window.location = 'https://www.google.com'
    // window.location.replace('https://www.google.com') deleta a url corrente do histórico
    // window.location.assign('https://cfbcursos.com.br') não deleta, só troca 
    // console.log(history.length)
    window.location = url.value
})