/*
5- Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo.
A pessoa deve ser maior de idade e brasileira para ser aprovada.
Faça um programa onde os jurados vão dar a explicação para cada nota dada.
 São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.
*/

const personOne = {
    name: 'Rafael',
    age: 31,
    sex: 'male',
    profission: 'estudante',
    nationality: 'Brasileiro'
}

if (personOne.age >= 18 && personOne.nationality === 'Brasileiro') {
    console.log('Você está aprovado')
}
else {
    console.log('você está reprovado')
}

const personTwo = {
    name: 'Mariana',
    age: 15,
    sex: 'woman',
    profission: 'estudante',
    nationality: 'Brasileira'
}
if (personTwo.age >= 18 && (personTwo.nationality === 'Brasileiro' || personTwo.nationality === 'Brasileira')) {
    console.log('Você está aprovado')
}
else {
    console.log('você está reprovado')
}

