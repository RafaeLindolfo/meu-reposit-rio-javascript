/*
3- Faça um número aleatório entre 1 e 10, esse número é número "ganhador".
Então ele também irá gera um número entre 1 e 10 e verificar se a pessoa ganhou ou não.
Em caso de ter um ganhador, mostra o prémio e caso perca, mostra outra mensagem
*/
const numberWinner = Math.floor(Math.random() * (10 - 1) + 1)
const numberRandom = Math.floor(Math.random() * (10 - 1) + 1)

console.log(numberWinner, 'Numero ganhador')
console.log(numberRandom, 'Numero escolhido')
if(numberRandom === numberWinner){
    console.log('Você Ganhou um Carro zero KM')
}
else {
    console.log('Você perdeu, tente novamente mais tarde')
}