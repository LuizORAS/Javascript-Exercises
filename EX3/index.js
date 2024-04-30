
// 1o EXERCICIO

let valor_m = prompt("Insira um valor em metros: ")
valor_m = parseFloat(valor_m)
opcao_medida = prompt(
    "Insira uma opção de conversão:\n\n-milímetros(mm)\n-centímetro(cm)\n-decímetro(dm)\n-decâmetro(dam)\n-hectômetro(hm)\n-quilômetro(km)\nOBS: Insira a sigla da medida"
)
let valor_novo
switch(opcao_medida){
    case'mm':
        valor_novo = valor_m*1000
        alert(`O valor de ${valor_m}m equivale a ${valor_novo}mm`)
        break
    case'cm':
        valor_novo = valor_m*100
        alert(`O valor de ${valor_m}m equivale a ${valor_novo}cm`)
        break
    case'dm':
        valor_novo = valor_m*10
        alert(`O valor de ${valor_m}m equivale a ${valor_novo}dm`)
        break
    case'dam':
        valor_novo = valor_m/10
        alert(`O valor de ${valor_m}m equivale a ${valor_novo}dam`)
        break
    case'hm':
        valor_novo = valor_m/100
        alert(`O valor de ${valor_m}m equivale a ${valor_novo}hm`)
        break
    case'km':
        valor_novo = valor_m/1000
        alert(`O valor de ${valor_m}m equivale a ${valor_novo}km`)
        break
    default:
        alert("Opção Inválida!")
}
