function contar() {
    let inicio = window.document.getElementById('txtIni')
    let fim = window.document.getElementById('txtFim')
    let passo = window.document.getElementById('txtPasso')
    let res = window.document.querySelector('div#res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let nIni = Number(inicio.value)
        let nFim = Number(fim.value)
        let nPasso = Number(passo.value)
        if (nPasso <= 0) {
            window.alert('Passo invalido. Considerando Passo 1')
            nPasso = 1
        }
        if (nIni < nFim) {
            for (let cont=nIni; cont<=nFim; cont+=nPasso) {
                res.innerHTML += ` ${cont} \u{1F449}`
            }            
        } else {
            for (let cont=nIni; cont>=nFim; cont-=nPasso) {
                res.innerHTML += `${cont} \u{1F449}`
            }
        }

        res.innerHTML += `\u{1F3C1}`
    }
}