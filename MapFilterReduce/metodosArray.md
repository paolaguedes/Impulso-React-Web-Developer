# Map

Por meio de uma função de mapeamento que gera um array diferente do original. Não modifica o original.

    - Realiza as operações do índice 0 ao último

```js

array.map(callback, thisArg)

callback(item, index, array)

```

    - callback é a função que vai ser executada em cada elemento;
    - thisArg é opcional


## Map vs forEach

    - map retorna o array resultante da operação feita pelo callbak

    - forEach precisa ser armazenado em uma constante para que o resultado seja mostrado

```js
// Exemplo
// com map

const array = [1,2,3,4,5]

array.map((item) => item*2)

// com forEach

const array = [1,2,3,4,5]

array.forEach((item) => item*2) // apenas assim ele retorna um undefined tem que armazenar numa const

```

# Filter

É uma filtragem do array, filtra os items correspondentes e cria um novo array. Não modifica o array original.

```js

array.filter(callback, thisArg)

```

    - callback é a função que vai ser executada em cada elemento, geralmente uma comparação
    - thisArg é opcional

```js

array.filter(callback, thisArg)

```

Um exemplo da sintaxe:

```js

const lista = ['bolo', 'bolo salgado', 'cupcake', 'bis']

lista.filter((item) => item.includes('bolo'))

// retorna: ['bolo', 'bolo salgado']

```

# Reduce

Executa uma função em todos os elementos do array e retorna um valor único.

```js

lista.reduce(callback, initialValue)

```

    - callback é a função a ser executada a partir do acumulador
    - initialValue é opcional, valor sobre qual o retorno final vai atuar

```js

const callback = function(accumulator, currentValue, index, array) {

}

array.reduce(callback, initialValue)

```

    - accumulator é o acumulador de todas as chamadas de callback
    - currentValue é o elemento atual sendo acessado pela função

Um exemplo de uso é quando queremos somar todos os valores de um array