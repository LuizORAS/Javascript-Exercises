//classe Character genérica
class Character {
    constructor(nome, hp, attack, defense){
        this.nome = nome
        this.hp = hp
        this.attack = attack
        this.defense = defense
    }

    toAttack(alvo){
        alvo.hp -= this.attack - alvo.defense
    }
}

module.exports = Character