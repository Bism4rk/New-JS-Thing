class NPC{
    static alerta = false
    constructor(energia){
        this.energia = energia
    }
    info = function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${NPC.alerta?'Sim':'Não'}`)
        console.log('------------------------')
    }
    static alertar = function(){
        NPC.alerta = true
    }
}

const npc1 = new NPC(100)
const npc2 = new NPC(80)
const npc3 = new NPC(30)

NPC.alertar()

npc1.info()
npc2.info()
npc3.info()
