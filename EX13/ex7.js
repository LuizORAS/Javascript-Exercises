//1o exercicio

var posicoes_espera = ""
var lista_espera = []
let menu
do{
    if(lista_espera.length <=0){
        posicoes_espera = `\nNão Há Ninguém na Fila`
    }else{
        posicoes_espera = ""
        for(i = 0; i < lista_espera.length ; i++){
            posicoes_espera += `\n${i+1}º - ${lista_espera[i]}`
        }
    }
    menu = prompt(`Seja Bem-vindo a Fila Virtual de Pacientes do Hospital Albert Newton!\nEscolha uma opção:\n\n1. Adicionar paciente\n2. Consultar Paciente\n3. Sair\n\nPacientes Esperando: ${posicoes_espera}`)
    switch(menu){
        case "1":
            let novo_paciente = prompt("Qual o nome do paciente a ser adicionado?")
            lista_espera.push(novo_paciente)
            break
        case "2":
            console.log(lista_espera.length)
            if(lista_espera.length > 0){
                let confirmar = confirm("Deseja chamar o próximo da fila?")
                if(confirmar){
                    let paciente_chamado = lista_espera.shift()
                    alert(`Paciente ${paciente_chamado} foi chamado ao consultório!`)
                }
            }else{
                alert("Não ná ninguém na fila!")
            }
            break
        case "3":
            alert("Obrigado por usar nossa fila virtual!\nSaindo...")
            break
        default:
            alert("Opção Inválida!")
    }
}while(menu !== "3")

//2o exercicio

var baralho = []
let quant_cartas = 0
let menu

do{
    menu = prompt("Seja bem-vindo ao baralho virtual!\nEscolha uma opção:\n\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair\n\n"+`Quantidade de cartas no baralho: ${quant_cartas}`)
    switch(menu){
        case "1":
            let nova_carta = prompt("Qual a carta que deseja adicionar?")
            baralho.push(nova_carta)
            alert("Carta adicionada!")
            quant_cartas ++
            break
        case "2":
            if(quant_cartas === 0){
                alert("Não há cartas para se puxar!")
            }else{
                let carta_puxada = baralho.pop()
                alert("Você puxou um "+carta_puxada)
                quant_cartas --
            }
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Opção Inválida!")
            break
    }
}while(menu !== "3")
