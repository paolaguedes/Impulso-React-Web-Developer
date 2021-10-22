// const array = [1,2,3,4,5,6,7,10]

// function somaTudo(arr){
//     return arr.reduce((accumulator, item) => accumulator += item)
// }

// console.log(somaTudo(array))

// Crie uma função que recebe uma lista de preços e um
// número representando o saldo disponível. Calcule 
// qual será o saldo final após subtrair todos os 
// preços da lista enviada.

function calcSaldo(saldo, lista){
    return lista.reduce((prev, current)=> {
        return prev - current
    }, saldo) //o prev partira do valor do saldo informado
}

const array = [1,2,3,4,5,6,7,10]

console.log(calcSaldo(100, array))