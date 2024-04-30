
// 1o EXERCICIO

let num = parseFloat(prompt("Insira um numero: "))
let tabuada = ''
for (let i = 0; i <=20; i++){
    tabuada += `${num}x${i} =  ${num*i}\n`
}
alert(`Segue a tabuada de ${num}:\n\n${tabuada}`)

// 2o EXERCICIO

let palavra = prompt("Insira uma palavra para verificar se é um palíndromo: ")
let palavra_nova = ''
for(let i = palavra.length -1; i >=0; i--){
    palavra_nova += palavra[i]
}

if(palavra_nova.toLowerCase!==palavra.toLowerCase){
    alert(
        `Esssa palavra não é um palíndromo!\n\nOriginal: ${palavra}\nAo Contrário: ${palavra_nova}`
    )
}else{
    alert(`Essa palavra é um palíndromo!\nPalavra: ${palavra}`)
}