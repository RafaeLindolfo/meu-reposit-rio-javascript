/* Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10)
 e escrever a tabuada de 1 a 10 do valor lido. */

 function sum(number1) {
      for (let number = 0; number <= 10; number++) {
         formula = number * number1;
         console.log(number + " X " + number1 + " = " + formula)
         
      }
      return
 }

console.log(sum(10))