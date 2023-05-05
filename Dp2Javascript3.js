/* Escreva um programa onde, você chame uma função, 
e ela diga a hora exata! */

function time(hours) {
   hours = new Date;
   console.log('Agora são ' + hours.getHours() + ':' + hours.getMinutes() )
    return
}

time()