//subclasse Warrior
const Character = require('./character.js')

class Warrior extends Character {
    constructor(nome, hp, attack, defense, shield){
        super(nome, hp, attack, defense)
        this.position = 'attack'
        this.shield = shield
    }
    toAttack(alvo){
        if(this.position === 'attack'){
            alvo.hp -= this.attack - alvo.defense
        }else{
            console.log("Ataque falhou! (Modo de defesa)")
        }
    }
    changePosition(){
        if(this.position === 'attack'){
            this.position = 'defense'
            this.defense += this.shield
        }else{
            this.position = 'attack'
            this.defense -= this.shield
        }
    }

}



module.exports = Warrior