var vetornum = []
var txtnum = window.document.getElementById('txtnum')
var lstnum = window.document.getElementById('lstnum')
var res = window.document.getElementById('res')
var pos = 0


function adicionarnun() {
    let valornovo = true
    let cont = 0
    if (txtnum.value.length == 0) {
        alert('Informe um valor')
    } else {
        res.innerHTML = ''
        let numero = Number(txtnum.value)
        while (valornovo && cont<pos) {
            if (numero == vetornum[cont]) {
                valornovo = false
            } else {
                cont++
            }
        }
        //alert(valornovo)
        //alert(vetornum)
        if (valornovo && numero > 0 && numero < 100) {
            let item = document.createElement('option')
            item.text = `Valor ${numero} adicionado`
            item.value = `lst${pos}`
            lstnum.appendChild(item)
            vetornum[pos] = numero
            pos++
        } else {
            alert(`Valor ${numero} invalido ou já encontrado na lista`)
        }
        txtnum.value = ''
    }
}

function finalizar() {
    if (pos == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let maiorvalor = vetornum[0]
        let menorvalor = vetornum[0]
        let soma = 0
        let media = 0
        for (let cont = 0; cont<pos; cont++) {
            soma += vetornum[cont]
            if (vetornum[cont] < menorvalor) {
                menorvalor = vetornum[cont]
            }
            if (vetornum[cont] > maiorvalor) {
                maiorvalor = vetornum[cont]
            }
        }
        media = soma / pos
        let texto = `Ao todo, temos ${pos} números cadastrados. <br><br>`
        texto += `O maior valor informado foi ${maiorvalor}.<br><br>`
        texto += `O menor valor informado foi ${menorvalor}.<br><br>`
        texto += `Somando todos os valores temos ${soma}.<br><br>`
        texto += `A média dos valores digitados é ${media}.<br>`
        res.innerHTML = texto
    }
}