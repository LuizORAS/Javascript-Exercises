//imports
const Character = require('./character.js')
const Thief = require('./thief.js')
const Mage = require('./mage.js')
const Warrior = require('./warrior.js')

//testes

const ladrao = new Thief('judas',300,30,10)
const mago = new Mage('gaspar',200,15,15,30)
const guerreiro = new Warrior('barbaro',400,25,25,10)
console.table({ladrao, mago, guerreiro})
// guerreiro.changePosition()
mago.toAttack(guerreiro)
guerreiro.toAttack(mago)
// console.log(mago)
// console.log(guerreiro)
// console.log(guerreiro)