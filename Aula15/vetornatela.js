let valores = [6,3,2,8,9,0]

console.log(valores)

/*
usando loop numerico
*/

for (let pos=0; pos<valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

valores.sort()

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}