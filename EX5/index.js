
// 1o EXERCICIO
let is_valid = true
do{
    let opcoes = prompt(
        "Escolha uma opção:\n\n1.Personalide\n2.Peito\n3.Bunda\n4.Rosto\n5.*Encerrar*"
    )
    if(opcoes ==='5'){
        alert("O sistema está encerrando...")
        is_valid = false
    }else{
        if(opcoes==='1'){
            alert("Você escolheu Personalidade")
        }else if(opcoes==='2'){
            alert("Voce escolheu Peito")
        }else if(opcoes==='3'){
            alert("Você escolheu Bunda")
        }else if(opcoes==='4'){
            alert("Voce escolheu Rosto")
        }else{
            alert("Opção Inválida!")
        }
        
    }
}while(is_valid)

// 2o EXERCICIO

let qnt_inicial = prompt("Qual a quantidade de dinheiro? ")
qnt_inicial = parseFloat(qnt_inicial)
let encerrar = true
do{
    let tela_inicial = prompt(
        `Valor atual: R$${qnt_inicial}\n\nEscolha uma opção:\n1.Adicionar Dinheiro\n2.Sacar Dinheiro\n3.*Encerrar*`
    )
    if(tela_inicial==='1'){
        let add_din = prompt("Quanto você deseja adicionar? ")
        add_din = parseFloat(add_din)
        qnt_inicial += add_din
    }else if(tela_inicial==='2'){
        let rem_din = prompt("Quanto você deseja sacar? ")
        rem_din = parseFloat(rem_din)
        qnt_inicial -= rem_din
    }else if(tela_inicial==='3'){
        encerrar = false 
    }else{
        alert("Opção Inválida!")
    }
}while(encerrar)