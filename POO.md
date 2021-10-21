# Pilares da progamação orientada a objetos

    - Herança
    - Polimorfismo
    - Encapsulamento
    - Abstração

### Abstração
Em um objeto complexo, a abstração torna ele mais simples. Abstrair é generalizar, simplificar.

### Herança
Aqui há objetos filhos que herdam propriedades e métodos do pai.

### Encapsulamento
Cada classe tem propriedades e métodos independentes do restante do código.

### Polimorfismo
Podem ter a mesma classe, mas se conmportam de forma diferente.

## OOJS

Protótipos são o esqueleto dos objetos. As propriedades e métodos de um objeto js está dentro do prototype.

## Classes - sintaxe sugar
Não são nativas do js. É uma sintaxe feita para facilitar a escrita.

```js
   class Animal {
       construtor(){
           this.type = type
       }

       get type(){
       }

       set type(){
       }
   } 
```

```js
   class Gato extends Animal {
       construtor(){
           super('cat')
       }
   } 
```

    - método super() serve para fazer *herança*


# Exercício prático

```js
let saldo = 0

class ContaBancaria {
    construtor(agencia, numero, tipo) {
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = saldo
    }
    get saldo(){
        return this._saldo
    }

    set saldo(){
        this._saldo = valor
    }

    sacar(valor){
        if(this._saldo -= valor) return "da nao"
        this._saldo -= valor
        return this._saldo
    }

    depositar(valor){
        this._saldo += valor
        return this._saldo
    }
}

class ContaCorrente extends ContaBancaria{
    construtor(agencia, numero cartaoCredito){
        super(agencia, numero)
        this.tipo = 'corrente'
        this._cartaoCredito = cartaoCredito
    }

    get cartaoCredito(){
        return this._cartaoCredito
    }

    set cartaoCredito(){
        return this._cartaoCredito
    }  
}

class ContaPoupanca extends ContaBancaria{
    construtor(agencia, numero){
         super(agencia, numero)
         this.tipo = 'poupança'
    }
}

class ContaUniversitaria extends ContaBancaria{
    construtor(agencia, numero, tipo){
        super(agencia, numero)
         this.tipo = 'universitária' 
    }

    sacar(valor){
        if(valor>500) return "operação negada"

        this._saldo -= valor
        }
    }
}


```