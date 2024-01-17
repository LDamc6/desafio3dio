class tipos{
    constructor (tipoDeHeroi, tipoDeAtaque,nome,idade){
       this.tipoDeHeroi = tipoDeHeroi
       this.tipoDeAtaque = tipoDeAtaque
       this.nome = nome
       this.idade = idade    
    }
       escrever(){
           
           console.log(`O ${this.tipoDeHeroi} ${this.nome} com somente ${this.idade} anos, atacou usando ${this.tipoDeAtaque}`)
   
           
       }
   } let dadosDoHeroi = new tipos ("Ninja","Shunriken","Spike","98")
   
   dadosDoHeroi.escrever()