
// 1o EXERCICIO

const fila_pacientes = [] 
nao_sair = true
let painel_nomes = ''
while(nao_sair){
    for(i = 0; i<fila_pacientes.length ;i++){
        painel_nomes += `\n${i+1}º - ${fila_pacientes[i]}`
    }
    menu_inicial = prompt(
        `Posição Atual:\n${painel_nomes}\n\nEscolha uma opção:\n1 - Novo Paciente\n2 - Consultar Paciente\n3 - Sair`
    )
    switch(menu_inicial){
        case '1':
            let add_paciente
            add_paciente = prompt(`Qual o nome do paciente? `)
            fila_pacientes.push(add_paciente)
            painel_nomes = ''
            break
        case '2':
            let remov = ''
            remov = fila_pacientes.shift()
            if(!remov){
                alert("Não há nenhum paciente na fila!")
            }else{
                alert(`O paciente consultado foi ${remov}!`)
            }
            painel_nomes = ''
            break
        case '3':
            alert("Saindo do sistema...")
            nao_sair = false
            break
        default:
            alert("Desculpe não entendi.\nTente novamente!")
    }
}

// 2o EXERCICIO

const baralho = [] 
nao_sair = true
let painel_cartas = ''
while(nao_sair){
    for(i = 0; i<baralho.length ;i++){
        painel_cartas += `\n${baralho[i]}`
    }
    menu_inicial = prompt(
        `Baralho Atual:\n${baralho.length}\n\nEscolha uma opção:\n1 - Adicionar uma carta\n2 - Puxar uma carta\n3 - Sair`
    )
    switch(menu_inicial){
        case '1':
            let add_carta
            add_carta = prompt(`Qual o nome da carta? `)
            baralho.unshift(add_carta)
            painel_cartas = ''
            break
        case '2':
            let remov_carta = ''
            remov_carta = baralho.shift()
            if(!remov_carta){
                alert("Não há nenhuma carta no baralho!")
            }else{
                alert(`A carta puxada foi ${remov_carta}!`)
            }
            painel_cartas = ''
            break
        case '3':
            alert("Saindo do jogo...")
            nao_sair = false
            break
        default:
            alert("Desculpe não entendi.\nTente novamente!")
    }
}




