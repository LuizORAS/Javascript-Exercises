
// 1o EXERCICIO

//Funções Auxiliares
function area_triangulo(base,altura){
    return (base*altura)/2
}
function area_retangulo(base, altura){
    return base*altura
}
function area_quadrado(lado){
    return area_retangulo(lado,lado)
}
function area_trapezio(base_maior,base_menor,altura){
    return ((base_maior+base_menor)*altura)/2
}
function pi(){
    return 3.14
}
function area_circulo(raio){
    return (raio**2)*pi()
}

//Função Main
function main(){
    let online = true
    while(online){
        let opcao = prompt(
            "Bem Vindo a Calculadora Geométrica! Aqui você pode calcular a área dos mais diversos polígonos.\n\n\nEscolha uma opção:\n\n1 - Área do Triangulo\n2 - Área do Retângulo\n3 - Área do Quadrado\n4 - Área do Trapézio\n5 - Área do Círculo\n6 - Sair"
        )
        switch(opcao){
            case "1":
                valor_1 = parseFloat(prompt("Você escolheu a área do triângulo!\nInforma a base e altura para o calculo da área\n\nInsira o valor da base: "))
                valor_2 = parseFloat(prompt("Insira o valor da altura: "))
                alert(`O valor da área desse triangulo é ${area_triangulo(valor_1,valor_2)}.`)
                alert("Retornando ao menu...")
                break
            case "2":
                valor_1 = parseFloat(prompt("Você escolheu a área do retângulo!\nInforma a base e altura para o calculo da área\n\nInsira o valor da base: "))
                valor_2 = parseFloat(prompt("Insira o valor da altura: "))
                alert(`O valor da área desse retângulo é ${area_retangulo(valor_1,valor_2)}.`)
                alert("Retornando ao menu...")
                break
            case "3":
                valor_1 = parseFloat(prompt("Você escolheu a área do quadrado!\nInforme o valor do lado do quadrado\n\nInsira o valor do lado: "))
                alert(`O valor da área desse quadrado é ${area_quadrado(valor_1)}.`)
                alert("Retornando ao menu...")
                break
            case "4":
                valor_1 = parseFloat(prompt("Você escolheu a área do trapézio!\nInforma a base maior, base menor e altura para o calculo da área\n\nInsira o valor da base maior: "))
                valor_2 = parseFloat(prompt("Insira o valor da base menor: "))
                valor_3 = parseFloat(prompt("Insira o valor da altura: "))
                alert(`O valor da área desse trapézio é ${area_trapezio(valor_1,valor_2,valor_3)}.`)
                alert("Retornando ao menu...")
                break   
            case "5":
                valor_1 = parseFloat(prompt("Você escolheu a área do círculo!\nInforma o raio para o calculo da área\n\nInsira o valor do raio: "))
                alert(`O valor da área desse círculo é ${area_circulo(valor_1)}.`)
                alert("Retornando ao menu...")
                break
            case "6":
                online = false
                alert("Saindo da calculadora...")  
                break
            default:
                alert("Opção Inválida!")
        }
    }
}

//Ativar a Main
main()