//subclasse Thief
const Character = require('./character.js')

class Thief extends Character{
    constructor(nome, hp, attack, defense){
        super(nome, hp, attack, defense)
    }
    toAttack(alvo){
        alvo.hp -= (this.attack - alvo.defense) * 2
    }
}

module.exports = Thief