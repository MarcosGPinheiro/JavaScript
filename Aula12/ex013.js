var agora = new Date()
var diaSem = agora.getDay()
var tdiasem = ''
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/
console.log(diaSem)
switch (diaSem) {
    case 0:
        tdiasem = 'Domingo'
        break
    case 1:
        tdiasem = 'Segunda'
        break
    case 2:
        tdiasem = 'Terça'
        break
    case 3:
        tdiasem = 'Quarta'
        break
    case 4:
        tdiasem = 'Quinta'
        break
    case 5:
        tdiasem = 'Sexta'
        break
    default:
        tdiasem = 'Sábado'
        break
}
console.log(tdiasem)