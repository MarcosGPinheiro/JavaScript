let vetornum = []
let txtnum = window.document.querySelector('input#txtnum')
let lstnum = window.document.querySelector('select#lstnum')
let res = window.document.querySelector('div#res')

function isNumeroValido(n) {
    if (Number(n)>0 && Number(n)<=100) {
        return true
    } else {
        return false
    }
}

function isInLista(n,lst) {
    if (lst.indexOf(Number(n)) == -1)  {
        return false
    } else {
        return true
    }
}

function adicionarnun() {
        if (isNumeroValido(txtnum.value) && !isInLista(txtnum.value,vetornum)) {
            let numero = Number(txtnum.value)
            let item = document.createElement('option')
            res.innerHTML = ''
            item.text = `Valor ${numero} adicionado`
            item.value = `lst${vetornum.length}`
            lstnum.appendChild(item)
            vetornum.push(numero)
        } else {
            alert(`Valor invalido ou já encontrado na lista`)
        }
        txtnum.value = ''
        txtnum.focus()
}

function finalizar() {
    if (vetornum.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let maiorvalor = vetornum[0]
        let menorvalor = vetornum[0]
        let sizevetor = vetornum.length
        let soma = 0
        let media = 0
        for (let cont in vetornum) {
            soma += vetornum[cont]
            if (vetornum[cont] < menorvalor) {
                menorvalor = vetornum[cont]
            }
            if (vetornum[cont] > maiorvalor) {
                maiorvalor = vetornum[cont]
            }
        }
        media = soma / sizevetor
        let texto = `<p>Ao todo, temos ${sizevetor} números cadastrados. </p>`
        texto += `<p>O maior valor informado foi ${maiorvalor}.</p>`
        texto += `O menor valor informado foi ${menorvalor}.<br><br>`
        texto += `Somando todos os valores temos ${soma}.<br><br>`
        texto += `A média dos valores digitados é ${media}.<br>`
        res.innerHTML = texto
    }
}