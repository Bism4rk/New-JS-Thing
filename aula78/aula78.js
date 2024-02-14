const div_data = document.getElementById('div_data')
const div_relogio = document.getElementById('div_relogio')
const btn_ativar = document.getElementById('btn_ativar')
const btn_parar = document.getElementById('btn_parar')
const tmp_alarme = document.getElementById('tmp_alarme')
const hora_alarme = document.getElementById('hora_alarme')
const timer = document.getElementById('timer')

const som_alarme = new Audio('alarme.mp3')
som_alarme.loop = -1

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

btn_ativar.addEventListener('click', ()=>{
    ts_atual = Date.now()
    ts_alarme = ts_atual + (tmp_alarme.value * 1000)
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme)
    hora_alarme.innerHTML = `Hora do alarme: ${dt_alarme.getHours()}:${dt_alarme.getMinutes()}:${dt_alarme.getSeconds()}`
})

btn_parar.addEventListener('click', ()=>{
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML = 'Hora do alarme:'
    tmp_alarme.value = 0
    timer.classList.remove('alarme')
    som_alarme.pause()
    som_alarme.currentTime = 0

})

const data = new Date()

let dia_m = data.getDate()
dia_m = dia_m<10?"0"+dia_m:dia_m

let mes = data.getMonth()
mes = mes<10?"0"+mes:mes

const data_r = `${dia_m}/${mes}/${data.getFullYear()}`
div_data.innerHTML = data_r

const relogio = ()=>{
    const data1 = new Date()
    let hora = data1.getHours()
    hora = hora<10?"0"+hora:hora
    let minuto = data1.getMinutes()
    minuto = minuto<10?"0"+minuto:minuto
    let segundo = data1.getSeconds()
    segundo = segundo<10?"0"+segundo:segundo
    const hora_completa = `${hora}:${minuto}:${segundo}`
    div_relogio.innerHTML = hora_completa
    if(alarme_ativado && !alarme_tocando){
        if(Date.now() >= ts_alarme){
            alarme_tocando = true
            som_alarme.play()
            timer.classList.add('alarme')
        }
    }
}

const intervalo = setInterval(relogio, 1000)

relogio()