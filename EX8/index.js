
// 1o EXERCICIO

const num_imoveis = []
let imovel_novo = []
do{
    let painel_imoveis = ''
    for(let i = 0; i < num_imoveis.length ; i++){
        painel_imoveis += `\nImóvel ${i+1}:\nNome do Proprietário: ${num_imoveis[i][0]}\nQuantidade de Quartos: ${num_imoveis[i][1]}\nQuantidade de Banheiros: ${num_imoveis[i][2]}\nPossui garagem? ${num_imoveis[i][3]}\n`
    }
    opcao = prompt(
        `Bem Vindo a Central de Imóveis!\n\nQuantidade de imóveis:\n${num_imoveis.length}\n\nEscolha uma opção:\n1 - Cadastrar imóvel\n2 - Ver informações de imóvel\n3 - Sair`
    )
    switch(opcao){
        case '1':
            imovel_novo = []
            let add_prop = prompt("Qual o nome do proprietário? ")
            imovel_novo.push(add_prop)
            let add_quartos = prompt("Qual a quantidade de quartos? ")
            imovel_novo.push(add_quartos)
            let add_banh = prompt("Qual a quantidade de banheiros? ")
            imovel_novo.push(add_banh)
            let is_gar = prompt("Possui garagem?(Sim/Não)")
            if(is_gar === 'Sim' || 'sim' || 's' || 'S'){
                is_gar = true
                is_gar = 'Sim'
            }else if(is_gar === 'Não' || 'não' || 'nao' || 'Nao'){
                is_gar = false
                is_gar = 'Não'
            }else{
                alert("Opção Inválida!\nGaragem será considerada como 'Não'")
                is_gar = false
                is_gar = 'Não'
            }
            imovel_novo.push(is_gar)
            confirmacao = confirm("\nSalvar esse imóvel? ")
            if(confirmacao){
                num_imoveis.push(imovel_novo)
                alert("Imóvel salvo com sucesso!")                
            }else{
                alert("Voltando ao menu...")
            }
            break
        case '2':
            alert(`Imóveis Cadastrados:\n\n${painel_imoveis}`)
            break
        case '3':
            alert("Saindo...")
            break
        default:
            alert("Opção Inválida!")
    }        
}while(opcao !=='3')
