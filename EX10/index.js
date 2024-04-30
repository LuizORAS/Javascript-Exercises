
// EXERCICIO FINAL

const vagas = []

function listar_vagas(){
    if (vagas.length===0){
        alert("Não tem vagas no momento!")
    }else{
        vagas.forEach(function (vaga_atual, indice_vagas){
            if(vaga_atual.candidatos){
                alert(
                    `Número da Vaga: ${indice_vagas+1}\nNome: ${vaga_atual.nome}\nQuantidade de Inscritos: ${vaga_atual.candidatos.length}`
                )
            }else{
                alert(
                    `Número da Vaga: ${indice_vagas+1}\nNome: ${vaga_atual.nome}\nQuantidade de Inscritos: ${0}`
                )              
            }
        })
    }
}
function criar_vaga(){
    let vaga = {}
    vaga.candidatos = []
    let nome_novo = prompt("Qual o nome da vaga? ")
    vaga["nome"] = nome_novo
    descricao_nova = prompt("Qual a descrição da vaga? ")
    vaga["descricao"] = descricao_nova
    data_nova = prompt("Qual a data limite dessa vaga? ")
    vaga["data"] = data_nova
    let confirmacao = confirm(
        `Você quer salvar essa vaga?\nNome: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData-limite: ${vaga.data}`
    )
    if(confirmacao){
        vagas.push(vaga)
        alert("Vaga salva com sucesso!")
    }
}
function visualizar_vaga(){
    if (vagas.length===0){
        alert("Não tem vagas no momento!")
    }else{
        let indice_desejado = prompt("Qual o numero desssa vaga? ")
        indice_desejado = parseFloat(indice_desejado)
        if(vagas[indice_desejado-1]){
            if(vagas[indice_desejado-1].candidatos.length>0){
                alert(
                    `Vaga numero ${indice_desejado}:\n\n
                    Nome da Vaga: ${vagas[indice_desejado-1].nome}\n
                    Detalhes da Vaga: ${vagas[indice_desejado-1].descricao}\n
                    Data-limite: ${vagas[indice_desejado-1].data}\n
                    Quantidade de Candidatos: ${vagas[indice_desejado-1].candidatos.length}\n
                    Nome dos candidatos: ${vagas[indice_desejado-1].candidatos}`
                )
            }else{
                alert(
                    `Vaga numero ${indice_desejado}:\n\n
                    Nome da Vaga: ${vagas[indice_desejado-1].nome}\n
                    Detalhes da Vaga: ${vagas[indice_desejado-1].descricao}\n
                    Data-limite: ${vagas[indice_desejado-1].data}\n
                    Quantidade de Candidatos: ${0}\n
                    Nome dos candidatos: Não há candidatos`
                )
            }
        }else{
            alert("Essa vaga não existe!")
        }
    }
}
function inscrever_vaga(){
    if (vagas.length===0){
        alert("Não tem vagas no momento!")
    }else{
        let novo_candidato = prompt("Qual o nome do candidato? ")
        let indice_desejado = prompt("Qual o numero dessa vaga? ")
        indice_desejado = parseFloat(indice_desejado)
        let confirma_candidato
        if(vagas[indice_desejado-1].candidatos){
            confirma_candidato = confirm(`Deseja incluir o candidato ${novo_candidato} nessa vaga?\n\n
            Informações sobre a vaga:\n
            Nome da Vaga: ${vagas[indice_desejado-1].nome}\n
            Detalhes da Vaga: ${vagas[indice_desejado-1].descricao}\n
            Data-limite: ${vagas[indice_desejado-1].data}\n
            Quantidade de Candidatos: ${vagas[indice_desejado-1].candidatos.length}\n`)
        }else{
            confirma_candidato = confirm(`Deseja incluir o candidato ${novo_candidato} nessa vaga?\n\n
            Informações sobre a vaga:\n
            Nome da Vaga: ${vagas[indice_desejado-1].nome}\n
            Detalhes da Vaga: ${vagas[indice_desejado-1].descricao}\n
            Data-limite: ${vagas[indice_desejado-1].data}\n
            Quantidade de Candidatos: ${0}\n`)
        }
        if(confirma_candidato){
            vagas[indice_desejado-1].candidatos.push(" "+novo_candidato)
            alert("Candidato adicionado com sucesso nessa vaga!")
        }else{
            alert("Candidato não cadastrado!")
        }
    }

}
function excluir_vaga(){
    if (vagas.length===0){
        alert("Não tem vagas no momento!")
    }else{
        let indice_desejado = prompt("Qual o numero da vaga a ser excluída? ")
        indice_desejado = parseFloat(indice_desejado)
        let confirma_exclusao
        if(vagas[indice_desejado-1].candidatos.length>0){
            confirma_exclusao = confirm(`Deseja mesmo excluir essa vaga?\n\n
            Informações sobre a vaga:\n
            Nome da Vaga: ${vagas[indice_desejado-1].nome}\n
            Detalhes da Vaga: ${vagas[indice_desejado-1].descricao}\n
            Data-limite: ${vagas[indice_desejado-1].data}\n
            Quantidade de Candidatos: ${vagas[indice_desejado-1].candidatos.length}\n`)
        }else{
            confirma_exclusao = confirm(`Deseja mesmo excluir essa vaga?\n\n
            Informações sobre a vaga:\n
            Nome da Vaga: ${vagas[indice_desejado-1].nome}\n
            Detalhes da Vaga: ${vagas[indice_desejado-1].descricao}\n
            Data-limite: ${vagas[indice_desejado-1].data}\n
            Quantidade de Candidatos: ${0}\n`)
        }
        if(confirma_exclusao){
            vagas.splice(indice_desejado-1,1)
            alert("Vaga excluída com sucesso!")
        }else{
            alert("Vaga não foi excluída.")
        }
    }
}

function main(){
    let online = true
    while(online){
        let opcao = parseFloat(prompt(
            "Seja Bem vindo a Central de Vagas!\n\nEscolha uma opção:\n1 - Listar vagas disponíveis\n2 - Criar uma nova vaga\n3 - Visualizar uma nova vaga\n4 - Inscrever-se em uma vaga\n5 - Excluir uma vaga\n6 - Sair"
        ))
        switch(opcao){
            case 1:
                listar_vagas()
                alert("Voltando ao menu...")
                break
            case 2:
                criar_vaga()
                alert("Voltando ao menu...")
                break
            case 3:
                visualizar_vaga()
                alert("Voltando ao menu...")
                break
            case 4:
                inscrever_vaga()
                alert("Voltando ao menu...")
                break
            case 5:
                excluir_vaga()
                alert("Voltando ao menu...")
                break
            case 6:
                online = false
                alert("Saindo...")
                break
            default:
                alert("Opção inválida!")
                break
        }
    }
}

main()


