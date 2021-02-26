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
            item.text = `Valor ${numero} adicionado`
            item.value = `lst${vetornum.length}`
            lstnum.appendChild(item)
            vetornum.push(numero)
        } else {
            alert(`Valor ${numero} invalido ou já encontrado na lista`)
        }
        txtnum.value = ''
}

function finalizar() {
    if (vetornum.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let maiorvalor = vetornum[0]
        let menorvalor = vetornum[0]
        let soma = 0
        let media = 0
        for (let cont = 0; cont<vetor.length; cont++) {
            soma += vetornum[cont]
            if (vetornum[cont] < menorvalor) {
                menorvalor = vetornum[cont]
            }
            if (vetornum[cont] > maiorvalor) {
                maiorvalor = vetornum[cont]
            }
        }
        media = soma / pos
        let texto = `Ao todo, temos ${vetor.length} números cadastrados. <br><br>`
        texto += `O maior valor informado foi ${maiorvalor}.<br><br>`
        texto += `O menor valor informado foi ${menorvalor}.<br><br>`
        texto += `Somando todos os valores temos ${soma}.<br><br>`
        texto += `A média dos valores digitados é ${media}.<br>`
        res.innerHTML = texto
    }
}