//exercicio inteiro
const Author = require('./author.js')

const Joao = new Author('Joao')


Joao.createPost("Oi, sou o joão")
Joao.createPost("Oi, sou o vitor")
Joao.createPost("Oi, sou o lucas")
Joao.createPost("Oi, sou o luiz")
console.log(Joao)
Joao.removePost(3)
console.log(Joao)
