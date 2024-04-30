
// 1o EXERCICIO

const nome_turista = prompt("Qual o o seu nome? ")
let cidade_visita = ''
let num_cid = 0
let is_valid = true
while (is_valid){
    pergunta_vis = prompt("Você já visitou alguma cidade? ")
    if(pergunta_vis==='sim' || 'Sim'){
        while(true){
            let qual_cid = prompt("Qual cidade? ")
            cidade_visita += ` ${qual_cid}\n`
            num_cid +=1
            mais_cid = prompt("Você visitou outra cidade?")
            if(mais_cid ==='nao'){
                is_valid = false
                break
            }
        }
    }else{
        num_cid = '0'
        break
    }
}
if(cidade_visita===''){
    cidade_visita = ' Nenhuma'
}
alert(
    `Nome do Turista: ${nome_turista}\nQuantidade de Cidades Visitadas: ${num_cid}\nCidades Visitadas:\n${cidade_visita}`
)
