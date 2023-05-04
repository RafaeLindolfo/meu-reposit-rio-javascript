/*Funções / Function
É quando eu quero puxa uma informação no javascript sempre que ela for chamada
no caso, vejamos o exemplo abaixo:*/

function imprimaMeuNome(){
    console.log('Meu nome é Rafael')
}
/* Para que essa função funcione, é preciso que escreva ela quando você quiser que for chamada,
e ela pode ser chamada quantas vezes quiser. Exemplo: */

imprimaMeuNome() // invocando a função ou chamando

/*Argumentos e parametros das funções
Dentro dos "()" da função vamos colocar os parametros, que é duas variaveis
que a própria tag "function" vai criar quando for chamada.
*/

function sum(number1, number2){
    console.log(number1 + number2)
}

/*Quando for chamada, devemos coloca o argumento das variaveis a serem criadas pela tag "function"
Exemplo abaixo: */
sum(7,14)

/*Todas as funções tem um carinha chamado "return" vamos ver o que essa tag faz?
Mas primeiro vamos explicar usando o código:  */

/*function number(number1, number2){ // Resumindo nossa function é considerada VOID - Vazio, pois não tem o "return"
    
    return number1 + number2 // com return, e excluindo a tag "console.log()" da função, teremos o retorno dentro do resuntado desejado abaixo no último "console.log()"
}

const numberOne = 10
const numberTwo = 20

console.log(`O primeiro número é ${numberOne}`)
console.log(`O segundo número é ${numberTwo}`)

console.log(`E a soma dos dois número é ${number(numberOne, numberTwo)}`) */

/*Posso também está usando uma variável para está puxando a minha função para o resultado
Exemplo:*/

 function number(number1, number2){ 
return number1 + number2 
}

const numberOne = 10
const numberTwo = 20

console.log(`O primeiro número é ${numberOne}`)
console.log(`O segundo número é ${numberTwo}`)

const result = number(numberOne, numberTwo)
console.log(`E a soma dos dois número é ${result}`)


/*Funções anônimas é um modo que outras pessoas usam, mas que não muda o resultado

Exemplo:
 const number = function(number1, number2){ 
return number1 + number2 
}

const numberOne = 10
const numberTwo = 20

console.log(`O primeiro número é ${numberOne}`)
console.log(`O segundo número é ${numberTwo}`)

const result = number(numberOne, numberTwo)
console.log(`E a soma dos dois número é ${result}`)
*/
