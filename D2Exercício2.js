/*
2- Faça um programa que verifique se uma pessoa é Brasileira ou não // Deve ser um objeto
*/
const check = "Brasileiro"

const person = {
    name: 'Rafael',
    age: 31,
    nationality: 'Americano',
    genre: 'male'
}


if(person.nationality === 'Brasileiro'){
    console.log('Você é Brasileiro')
}
else {
    console.log('Estrangeiro')
}