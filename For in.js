/*
Estrutura de repetição - For In
Ele é usado com objetos
*/

const student = {
    name:'Rafael',
    age: 31,
    genre: 'nmale',
}

for(let property in student){
    console.log(property)
}

/*
Caso queira ver o que tem dentro de cada objeto é só usa dessa modo:
*/

const member = {
    name: 'Rejane',
    age: 44,
    genre: 'woman'
}

for(let object in member){
    console.log(member[object])
}

/*
Outro Exemplo posso mostra também dessa forma:
*/

const memberTwo = {
    name:'Rodrigo',
    age: 23,
    genre: 'male',
}

for(objectTwo in memberTwo){
    console.log(`${objectTwo}:${memberTwo[objectTwo]}`)
}