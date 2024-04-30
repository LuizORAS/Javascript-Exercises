//EXERCICIO 15


//ex1
const MediaAritSimp = (...numeros) => {
    
    let soma = 0;
    let resultado;

    for(i = 0 ; i < numeros.length ; i++){
        soma += numeros[i]
        resultado = soma / numeros.length
    }
    return resultado
}

// console.log(MediaAritSimp(10,4,-5))

//ex2
const MediaAritPond = (...numeros) => {

    let denominador = 0, numerador = 0;
    let numero, calculo, peso, soma;

    for (i = 0 ; i < numeros.length ; i ++){
        numero = numeros[i]
        if(numero.length){
            peso = numero[1]
            denominador += peso
            soma = numero[0]
            numerador += (soma * peso)
 
        }else{
            peso = 1
            denominador += peso
            numerador += (numero * peso)
        }
        
    }
    calculo = numerador / denominador
    return calculo
}

console.log(MediaAritPond([3,5],1,[4,9]))

//ex3
const Mediana = (...numeros) => {
    let tamanho = numeros.length
    let arrayNum = numeros
    let index, newArray

    if(tamanho == 1){   
        return arrayNum[0]

    }else if(tamanho%2 === 0){
        arrayNum = arrayNum.sort((a,b) => a-b)
        index = tamanho / 2
        index --
        index = Math.floor(index)
        return MediaAritSimp(arrayNum[index], arrayNum[index+1])
    }else{
        arrayNum = arrayNum.sort((a,b) => a-b)
        index = tamanho / 2 
        index = Math.floor(index)
        return arrayNum[index]
    }
}

// console.log(Mediana(3,4,14,27,8,23))

//ex4
const Moda = (...numeros) => {

    let array = numeros;
    let resultado = new Set();
    let contagem;
    let maiorChave, maiorValor;;
    let valor;

    const dict = {};

    for(i = 0 ; i < array.length ; i++){
        if(dict[array[i]]){
            dict[array[i]] += 1
        }else{
            dict[array[i]] = 1
        }
    }

    let chavesDict = Object.keys(dict)
    chavesDict.forEach((chave, i) => {

        valor = dict[chave]

        if(i == 0){
            contagem = valor
            maiorValor = valor
            maiorChave = chave
        }else{
            if(valor > contagem){
                contagem = valor
                maiorValor = valor
                maiorChave = chave
            }
        }
    })
    console.log(maiorValor)
    resultado = maiorChave
    return `o número que aparece mais vezes é o '${resultado}', ele aparece ${dict[maiorChave]} vezes.`
}

console.log(Moda(1,2,3,3,3,4,6,6,6,6,6,6,5,5,5,5,5,5,6,6,6,9,9,9,9,9,9,99,9,9,9,9,9,9,9,9,9,9,9,1,13))
