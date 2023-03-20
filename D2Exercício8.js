/*
8- Faça um programa onde leia um número e diga se ele é: 
- ímpar, - par, - é um número primo e impar, - é par e divisível por 5.
*/

const number = 241321561615619

if (number % 2 === 0) {
    if (number % 5 === 0) {
        console.log('O número é par, e é divisível por 5')
    }
    else {
        console.log(' O número é par e NÃO é divisível por 5')
    }
}
else {
    for (let i = 2; i < number; i++)
        if (number % i === 0) {
            console.log('O número é ímpa, e Não é PRIMO')
            break
        }
        else {
            if (i === number - 1) {
                console.log('É impa e é PRIMO')
            }
        }
}