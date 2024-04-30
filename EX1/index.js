// 1o EXERCICIO

let first_name = prompt("Insira seu nome: ")
let last_name = prompt("Insira seu sobrenome: ")
let campo_estudo = prompt("Insira seu campo de estudo: ")
let ano_nasc = prompt("Insira seu nome de nascimento: ")

let idade = parseFloat(ano_nasc)
idade = 2022 - idade
alert(first_name)
alert(last_name)
alert(campo_estudo)
alert(idade)

// 2o EXERCICIO

let valor_1 = prompt("Insira o primeiro valor: ")
let valor_2 = prompt("Insira o segundo valor: ")

numero_1 = parseFloat(valor_1)
numero_2 = parseFloat(valor_2)

alert(`O resultado da adição é ${numero_1+numero_2}`)
alert(`O resultado da subtração é ${numero_1-numero_2}`)
alert(`O resultado da multiplicação é ${numero_1*numero_2}`)
alert(`O resultado da divisão é ${numero_1/numero_2}`)
