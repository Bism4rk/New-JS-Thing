const objetos = document.getElementById('objetos')

const computador = {
    cpu: 'i9',
    ram: '64gb',
    hd: '2tb',
    info:function(){
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`HD: ${this.hd}`)
    }

}

computador['Monitor']='22pol'
computador.placaVideo = 'RTX'
console.log(computador['cpu'])

const computadores = [
    {
        cpu: 'i9',
        ram: '64gb',
        hd: '2tb'
    },
    {
        cpu: 'i7',
        ram: '32gb',
        hd: '2tb'
    },
    {
        cpu: 'i5',
        ram: '16gb',
        hd: '1tb'
    },
]

computadores.forEach((c)=>{
    console.log(c)
    const div = document.createElement('div')
    div.setAttribute('class', 'computador')
    div.innerHTML = 'CPU: '+ c.cpu + '<br>' +'RAM: ' + c.ram + '<br>' +'HD: '+ c.hd
    objetos.appendChild(div)
})

// computador.info()
// console.log(computadores)
// objetos.innerHTML = JSON.stringify(computadores)