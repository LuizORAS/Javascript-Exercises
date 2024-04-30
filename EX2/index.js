

// 1o EXERCICIO
const nome_1 = prompt("Insira aqui o nome do veículo: ")
let velocidade_1 = prompt("Insira aqui a velocidade desse veículo em km/h: ")
const nome_2 = prompt("Insira aqui o nome do veículo: ")
let velocidade_2 = prompt("Insira aqui a velocidade desse veículo em km/h: ")

velocidade_1 = parseFloat(velocidade_1)
velocidade_2 = parseFloat(velocidade_2)

if(velocidade_1===velocidade_2){
    alert(`A velocidade de ambos os veículos é a mesma.`)
} else if(velocidade_1 < velocidade_2){
    alert(`A velocidade do(a) ${nome_2} é maior.`)
} else if(velocidade_1 > velocidade_2){
    alert(`A velocidade do(a) ${nome_1} é maior.`)
}




// 2o EXERCICIO

//HERÓI
const nome_heroi = prompt("Insira o nome do herói: ")
const nome_ataque = prompt("Insira o nome do ataque do herói: ")
let poder_ataque = prompt("Insira o valor do ataque do herói: ")
poder_ataque = parseFloat(poder_ataque)
//VILÃO
const nome_vilao = prompt("Insira o nome do vilão: ")
let hp_vilao = prompt("Insira o HP desse vilão: ")
hp_vilao = parseFloat(hp_vilao)
let def_vilao = prompt("Insira o valor de defesa desse vilão: ")
def_vilao = parseFloat(def_vilao)
let is_escudo = prompt("O vilão possui escudo? Responda com 'sim' ou 'não', qualquer outra entrada resultará em 'não': ")
if(is_escudo==='sim'){
    is_escudo = true
} else{
    is_escudo = false
}
// CÁLCULO E DANO
let dano = 0
if(poder_ataque<=def_vilao){
    dano = 0    
}else if(poder_ataque>def_vilao && is_escudo === true){
    dano = (poder_ataque-def_vilao)/2
}else if(poder_ataque>def_vilao && is_escudo === false){
    dano = (poder_ataque-def_vilao)
}
hp_vilao_final = hp_vilao - dano
if(is_escudo===true){
    is_escudo = "Sim"
}else{
    is_escudo = "Não"
}
//FINAL
window.alert(`Dano causado: ${dano}\n
Informações sobre Herói:
\nNome: ${nome_heroi}
\nPoder: ${nome_ataque}
\nValor do Poder: ${poder_ataque}\n
\nInformações sobre Vilão:
\nVida: ${hp_vilao_final}/${hp_vilao}
\nDefesa: ${def_vilao}
\nEscudo: ${is_escudo}\n
\n Obrigado por jogar!`)




