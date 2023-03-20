/*
4- Faça um programa que receba 3 números inteiros e imprima na tela qual é o maior e qual é o menor
*/

const numberOne = 99
const numberTwo = 78
const numberThree = 66

if(numberOne < numberTwo && numberTwo < numberThree){
    console.log('Primeiro número é menor que o segundo número')
}
else if (numberTwo < numberThree){
    console.log('Segundo é menor que o terceiro número')
}
else {
    console.log('Terceiro número é o menor')
}

if(numberOne > numberTwo && numberTwo < numberThree){
    console.log('Primeiro número é maior que o segundo número')
}
else if (numberTwo > numberThree){
    console.log('Segundo é maior que o terceiro número')
}
else {
    console.log('Terceiro número é o menor')
}

if(numberOne > numberTwo && numberTwo > numberThree){
    console.log('Primeiro número é maior que o segundo número')
}
else if (numberTwo > numberThree){
    console.log('Segundo é maior que o terceiro número')
}
else {
    console.log('Terceiro número é o menor')
}