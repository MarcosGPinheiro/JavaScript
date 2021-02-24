// calculo de fatorial
// 5! = 5*4*3*2*1

function fatorial (n) {
    let res = 1
    for (let crt=n;crt>1;crt--) {
        res *= crt
    }
    return res
}

console.log(fatorial(5))