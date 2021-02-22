let num = [2,4,5,8,'oi']

console.log(`Nosso vetor e o ${num}`)
console.log(`por posição 2 -> ${num[2]}`)

num[4] = 10
num[6] = 11

num.push(100)

console.log(`o tamanho do vetor é ${num.length}`)

console.log(num)
num.sort()

console.log(num)

console.log(`O valor 8 está na posição ${num.indexOf(8)}`)

let bu = 9
let pos = num.indexOf(bu)
if (pos== -1) {
    console.log(`o valor ${bu} não faz parte do vetor`)
} else {
    console.log(`o valor ${bu} está na posição ${pos}`)
}