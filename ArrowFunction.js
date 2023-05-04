/* Arrow Function é um modo que usamos a função no javascript que reduz o tamanho do código, vamos ver um exemplo! */

const sum = (number0, number9) => number0 + number9 /* Fazendo dessa forma, você diminui o tamanho
do código, pois, além de já está criando uma variável eu estou já colocando o retorno. Use o "console.log()" 
para ver o resultado. */
console.log(sum(2,4))

/* Porém se o se código for mais que apenas alguns número, ai teremos que coloca a chaver e 
colocar novamente o "return" para que a função funcione: */

const number = (number3, number4, number5, number6, number7) => {
    return number3 + number4 + number5 + number6 + number7
}
console.log(number(17,14,48,100,8))

/* Existe outros modos, como ficar sem parametros assim:

const sum = () => {}
 
Ou quando você só tem um parametrô que é assim:

 const sum = number1 => {}
*/

/* Agora vou te ensina um modo de usar a função fazendo uma calculadora, vamos lá ! */

const calculate = (number1, number2, operation) => {

    switch (operation) {
        case "+":
            result = number1 + number2
            break;
            
        case "-":
            result = number1 - number2
            break;
        case "*":
            result = number1 * number2
            break;
        case "/":
            result = number1 / number2
            break;
            
        default: number1 + number2
            break;
    }
    return result
}

console.log(calculate(23, 10,'+'))
console.log(calculate(23, 10,'-'))
console.log(calculate(23, 10,'*'))
console.log(calculate(23, 10,'/'))