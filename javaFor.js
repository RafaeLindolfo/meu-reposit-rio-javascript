/* Estruturas de repetição - For */

/*Na tag for, preciso criar uma variavel (Que no caso é a variavel "i"), dá um valor a ela, (que no caso é "0")
 e indicar quantas vezes essa variavel deve se repetir ('i < 10')
e por último devo informa o que o for vai fazer em cada repetição (no caso coloquei que a cada repetição acrecente mais 1 a minha variavel*/

for(let e = 0; e < 10; e++){
    console.log(e)
}



const students = ['Bruna', 'Carlos', 'Daniela', 'Fernanda', 'Marcelo']

for( let i = 0; i < students.length; i++){
    console.log(`${students[i]} está presente na aula!`)
}
/* Quando for usa em um array, deve usar crase para executar os nomes. Exemplo: console.log(`${students[i]} está presente na aula!`)*/