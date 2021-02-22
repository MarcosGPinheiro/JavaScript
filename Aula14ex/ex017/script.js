function gerar() {
    let n = document.getElementById('txtn')
    let sel = document.getElementById('seltab')
    if (n.value.length == 0) {
        alert('sem numero')
    } else {
        let cont = 1
        let nu = Number(n.value)
        sel.innerHTML =``
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${nu} x ${cont} = ${nu*cont} `
            item.value = `tab${cont}`
            sel.appendChild(item)
            cont++
        } 
    }
}