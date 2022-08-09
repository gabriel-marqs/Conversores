const botao = document.querySelectorAll('.botao')

botao.forEach(box => {
    box.addEventListener('mouseenter', function entrar(event) {
        box.setAttribute('style', 'background-color: rgb(146, 142, 142); font-weight: bold; text-transform: uppercase; text-align: center; width: 180px; height: 80px;')
    })
    box.addEventListener('mouseout', function sair(event){
        box.setAttribute('style', 'background-color: rgb(214, 214, 214);')
    })
})

function calcCelsius() {
var cel = document.getElementById('numcel')
cel = parseFloat(cel.value).toFixed(2).replace(",", ".")
var rescel = document.querySelector('div#rescel')
var fah = cel * 1.8 + 32
var kel = cel + 273

rescel.innerHTML = `${cel.replace('.', ',')} ºC equivalem a ${fah.toFixed(2).replace('.', ',')} ºF e ${fah.toFixed(2).replace('.', ',')}  K.`
}

function calcKelvin() {
    var kel = document.querySelector('input#numkelvin')
    kel = parseFloat(kel.value).toFixed(2).replace(',', '.')
    var reskel = document.querySelector('div#reskel')
    var cel = kel - 273
    var fah = 1.8 * (cel) + 32
    reskel.innerHTML = `${kel.replace('.', ',')} K equivalem a <strong>${cel.toFixed(2).replace('.', ',')} ºC</strong> e <strong>${fah.toFixed(2).replace('.' , ',')} ºF.</strong>`   
}