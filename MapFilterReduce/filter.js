// encontrando numeros pares dentro do array
const array = [1,2,3,4,5,6,22,10,1,44,33,100]

function encontraPar(arr){
    return arr.filter((item) => item % 2 == 0)
}

console.log(encontraPar(array))