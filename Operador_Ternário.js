/*OPERADOR TERNÁRIO OU CONDICIONAL */

// ?  -> "SE" for verdadeiro faço isso.
const brown = false
const resident = brown ? 'Escreve aqui' : 'Esquece o que eu disse'

console.log(resident)
// :  -> "SE NÃO" for verdadeiro, farei outra coisa.

const account = true
const password = true
const code = false

const draker = account && password || code ? 'Acesso permitido' : 'Acesso Negado'
console.log(draker)