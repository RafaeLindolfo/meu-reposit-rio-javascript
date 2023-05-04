/* Escreva um programa onde, você chame uma função enviando um número, a função deve imprime na tela 
os número de 1 até o número que você enviou */

function number(number1) {
    for (let number = 1; number <= number1; number++) {
        console.log(number)
    }    
    return
}


console.log(number('55'))