# Assincronicidade
    Algo que não ocorre ao mesmo tempo.

    - Promisses e como manipular
    - Async/ await

    Javascript roda de maneira síncrona (tudo ao mesmo tempo)

## Promisses é um objeto de processamento assíncrono

    - O valor é desconhecido. Pode ser resolvida ou rejeitada
    
### Estados
    - Pending pendente
    - Fulfilled ou Resolved completa/resolvida: .then()
    - Rejected rejeitada: .catch()

```js

const myPromise = new Promise((resolve,reject) => { 
    window.seTimeout(() => {
        resolve(console.log('Resolvida'))
    }, 2000)
})

await myPromise
        .then((result)=> result + 'passando pelo then')
        .then((result)=> result + 'e agora acabouu')
        .catch((err)=> console.log(err.message))

```
- acima após 2s retorna o valor "resolvida" passando pelo .then e ai acabou


.then é que será feito após a resolução de uma promisse.

### Async e Await
Funções assíncronas precisam dessas duas palavras chaves


    *Await* faz uma pausa para a promisse ser executada. Visto que o js é sincrono é necessário ter essa tempo de pausa para a execução.

```js

async function resolvePromise(){
    const myPromise = new Promise((resolve,reject) => { 
        window.seTimeout(() => {
            resolve(console.log('Resolvida'))
        }, 2000)
    })

    const resolved = await myPromise
            .then((result)=> result + 'passando pelo then')
            .then((result)=> result + 'e agora acabouu')
            .catch((err)=> console.log(err.message))

    return resolved
}

```

    Uma promisse chama outra promisse. Para receber o resultado é necessário o await. Como: *await resolvePromisse()*


## APIs e método fetch
    API é uma forma de intermediar os resultados do back-end com o front-end. Consegue acessar por meio de URLs.

    Possuem normalmente o formato .json, por isso é preciso tratar os dados quando recebidos.

    Um json tem estrutra de objeto (chave e valores)

### método fetch()
    - fetch retorna uma promisse

```js

fetch(url, options){
    .then(response => response.json())
    .then(json => console.log(json))
}

```
    Operações GET e POST

```js

fetch('https://endereco-api.com/', {
    method: 'GET',
    cache: 'no-cache',
})

    .then(response => response.json())
    .then(json => console.log(json))

// ----------------------------

fetch('https://endereco-api.com/', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)
})

    .then(response => response.json())
    .then(json => console.log(json))

```