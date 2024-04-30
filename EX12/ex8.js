//1o exericio

let menu
let quant_imoveis = 0
const imovel = []
let lista_imoveis = ""

do{
    menu = prompt(`Seja bem vindo ao Cadastro de Imóveis SA! Escolha uma opção.\nImóveis cadastrados: ${quant_imoveis}\n\n1. Cadastrar Imóveis\n2. Mostrar Imóveis\n3. Sair`)
    switch(menu){
        case "1":
            const imovel_novo = {}
            imovel_novo.proprietario = prompt("Qual o nome do proprietario?")
            imovel_novo.quartos = prompt("Qual a quantidade de quartos?")
            imovel_novo.banheiros= prompt("Qual a quantidade de banheiros?")
            imovel_novo.garagem = prompt("Possui Garagem? Sim/Não")
            const confirmar = confirm("Deseja salvar esse imóvel?")
            if(confirmar){
                imovel.push(imovel_novo)
                alert("Imóvel Salvo com sucesso!")
                quant_imoveis ++
            }
            break
        case "2":

            console.log(imovel)

            for (let i = 0; i < imovel.length ; i++){
                console.log(imovel[i])
                lista_imoveis += `\n\n${i+1}º Imóvel:\nProprietário: ${imovel[i].proprietario}\nQuantidade de Quartos: ${imovel[i].quartos}\nQuantidade de Banheiros: ${imovel[i].banheiros}\nGaragem: ${imovel[i].garagem}`
            }

            alert(`Segue a lista de imóveis:${lista_imoveis}`)

            lista_imoveis = ""

            break

        case "3":
            alert("Saindo...")
            break
        default:
            alert("Opção Inválida!")


    }
}while(menu !== "3")