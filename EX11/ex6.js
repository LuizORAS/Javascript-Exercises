// //1o exericio

let opcao 
opcao = parseFloat(prompt("Bem vindo a calculadora de tábuada!\n\nInsira um número de 1 a 20:"))
let resultado = " "
for(let i = 1; i <= 20; i ++){
    resultado += `\n${i} x ${opcao} = ${i * opcao}`
}
alert(`O Resulda da tabuada de ${opcao} é:\n${resultado}`)

// 2o exercicio

let palavra = prompt("Digite uma palavra")
let palavra_nova = ""
for(let i = palavra.length - 1; i >= 0; i--){
    palavra_nova += palavra[i]
}

if(palavra.toLowerCase() === palavra_nova.toLowerCase()){
    alert("É um palíndromo.")
}else{
    alert("Não é um palíndromo!")
}

