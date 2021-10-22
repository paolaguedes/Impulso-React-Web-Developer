// function tratandoErro(arr, numero) {
//     try {
//         if(!arr && !numero) throw new ReferenceError("cade os parametros??")
//         if(arr.typeof != 'object') throw new TypeError("nao é um objeto")
//         if(numero.typeof != 'number') throw new TypeError("nao é um numero")
//         if(arr.length != num) throw new RangeError("tamanho invalido")

//         return arr
//     } catch(e) {
//         if(e instanceof ReferenceError) {
//             console.log(e.name)
//         } else if(e instanceof TypeError) {
//             console.log(e.name)
//         } else if(e instanceof RangeError) {
//             console.log(e.name)
//         } else {
//             console.log("sei la: "+e)
//         }
//     }
// }

// console.log(tratandoErro([5], 5))

const NovoErro = new Error();

NovoErro.name = "Novo Erro";
NovoErro.message = "Este erro nunca ocorreu"

console.log(NovoErro.name, NovoErro.message)
