//subclasse Mage 
const Character = require('./character.js')

class Mage extends Character {
    constructor(nome, hp, attack, defense, magic){
        super(nome, hp, attack, defense)
        this.magic = magic
    }
    toAttack(alvo){
        alvo.hp -= (this.attack + this.magic) - alvo.defense
    }
    toHeal(alvo){
        alvo.hp += (this.magic * 2)
    }

}

module.exports = Mage