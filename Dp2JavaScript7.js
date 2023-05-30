/* Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento. */

function soma(number1) {
if (number1 <= 500) {
    console.log('Sua taxa de juros é de 5%')
    }
    if (number1 >= 500 && number1 <= 1000 ){
        console.log('Sua taxa de juros é de 15%')
    }
    if (number1 >= 1500 && number1 >= 1200 ){
        console.log('Sua taxa de juros é de 20%')
    }

}
let investimento = 250

soma(investimento)