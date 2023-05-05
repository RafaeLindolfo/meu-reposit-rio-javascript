/* Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, 
e a função responde qual número é maior */

function maior(number1, number2){

  if (number1 > number2) {
    console.log('O primeiro número é maior que o segundo')
   }

   else if (number1 < number2) {
    console.log('O segundo número é maior que o Primeiro')
   }
   else {
    console.log('Os dois números são iguais')
   }
   
   return
}

const numberOne = 33
const numberTwo = 45

maior(numberOne, numberTwo)