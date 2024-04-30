//ex1
class User {
    constructor(fullname,email,password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(emailLogin, passwordLogin){
        if((this.email === emailLogin) && (this.password === passwordLogin)){
            return "Login realizado com sucesso."
        }else{
            return "Senha e/ou Email inválidos!"
        }
    }
}

const Luiz = new User('Luiz Felipe','luiz@email.com','123456')

// console.log(Luiz)
// console.log(Luiz.login('luiz@email.com','123456'))

//ex2
class Product {
    constructor(name, description, price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(quantity){
        this.inStock += quantity
    }
    calculateDiscount(percentage){
        //percentage must be in %, i.e: 30 -> 30% 
        this.price *= ((100-percentage)/100)
        return `Preço novo: ${this.price} // Preço Antigo: ${(this.price * 100) / (100-percentage)}` 
    }
}

const pão = new Product('pao', "É um alimento a base de farinha, leite e ovos, esquentado e fermentado", 300)
// console.log(pão)
// pão.addToStock(35)
// console.log(pão)
console.log(pão.calculateDiscount(30))
console.log(pão)