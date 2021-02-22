let vetor = []
let pos = 0
while (pos < 5) {
    vetor[pos]=pos*2
    pos++
}
for (let cont=0;cont<vetor.length;cont++) {
    console.log(`a posição ${cont} é igual a ${vetor[cont]}`)
}