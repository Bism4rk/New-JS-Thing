const long = document.getElementById('long')
const lat = document.getElementById('lat')

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao, erroLocalizacao)
} else{
    console.log('Geolocalização desativada!');
}

function mostrarLocalizacao(pos) {
    console.log(pos);
    long.innerHTML = `Longitude: ${pos.coords.longitude}`
    lati.innerHTML = `Longitude: ${pos.coords.latitude}`
}

function erroLocalizacao() {
    console.log('Erro ao obter a localização!');
}