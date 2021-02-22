function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if ( fano.value == 0 || fano.value > ano) {
        window.alert('[ERRO] Verificque os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var sexo = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            sexo = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute("src", "foto-jovem-m.png")
            } else if (idade < 60) {
                // Adulto
                img.setAttribute("src", "foto-adulto-m.png")
            } else {
                // Idoso
                img.setAttribute("src", "foto-idoso-m.png")
            }
        } else if (fsex[1].checked) {
            sexo = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute("src", "foto-bebe-f.png")
            } else if (idade < 21) {
                // Jovem
                img.setAttribute("src", "foto-jovem-f.png")
            } else if (idade < 60) {
                // Adulto
                img.setAttribute("src", "foto-adulto-f.png")
            } else {
                // Idoso
                img.setAttribute("src", "foto-idoso-f.png")
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
        res.appendChild(img)
    }
}
