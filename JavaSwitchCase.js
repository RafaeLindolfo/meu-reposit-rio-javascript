/* Switch case é um outro controlador de fluxo -CONDICIONAL*/
const tempeture = 36

switch (tempeture) {
    case 34:
        console.log('A pessoa está com a temperatura baixa.')
        break;

    case 36:
        console.log('A temperatura está normal')
        break;
    // Não devemos esquecer o "break" pois, sem ele irá aparecer todas as outras informações e não dará certo.//
    case 38.9:
        console.log('Sua temperatura está alta') 
        break;   

    default:
        console.log('Nenhuma informação encontrada.')
        break;
}