const botao = document.querySelectorAll('.botao')

botao.forEach(box => { //Atribuir funções para .botao
    box.addEventListener('mouseenter', function entrar(event) {
        box.setAttribute('style', 'background-color: rgb(146, 142, 142); font-weight: bold; text-transform: uppercase; text-align: center; width: 180px; height: 80px;')
    })
    box.addEventListener('mouseout', function sair(event){
        box.setAttribute('style', 'background-color: rgb(214, 214, 214);')
    })
})

function calcCelsius() { //Conversor de Celsius para Fahrenheit e Kelvin
var cel = document.getElementById('numcel')
cel = parseFloat(cel.value).toFixed(2).replace(",", ".")
var rescel = document.querySelector('div#rescel')
var fah = cel * 1.8 + 32
var kel = cel + 273

rescel.innerHTML = `${cel.replace('.', ',')} ºC equivalem a ${fah.toFixed(2).replace('.', ',')} ºF e ${fah.toFixed(2).replace('.', ',')}  K.`
}

function calcKelvin() { //Conversor de Kelvin para Celsius e Fahrenheit
    var kel = document.querySelector('input#numkelvin')
    kel = parseFloat(kel.value).toFixed(2).replace(',', '.')
    var reskel = document.querySelector('div#reskel')
    var cel = kel - 273
    var fah = 1.8 * (cel) + 32
    reskel.innerHTML = `${kel.replace('.', ',')} K equivalem a <strong>${cel.toFixed(2).replace('.', ',')} ºC</strong> e <strong>${fah.toFixed(2).replace('.' , ',')} ºF.</strong>`   
}

function calcFahrenheit() { //Conversor de Fahrenheit para Celsius e Kelvin
    var fah = document.querySelector('input#numfah')
    fah = parseFloat(fah.value).toFixed(2).replace(',' , '.')
    var resfah = document.querySelector('div#resfah')
    var cel = (fah - 32) / 1.8
    var kel = (Number(fah) + 459.67) * (5/9)
    
    resfah.innerHTML = `${fah.replace('.', ',')} Fº equivalem a <strong>${cel.toFixed(2).replace('.', ',')} Cº</strong> e <strong>${kel.toFixed(2).replace('.', ',')} K</strong>`
}

function calcHa() { //HA convertido para m², mi², jarda², pés² e acres
    var ha = document.querySelector('input#numhaa')
    ha = parseFloat(ha.value).toFixed(2).replace(',', '.')
    var resha = document.querySelector('div#resha')
    var me2 = ha * 10000
    var mi2 = ha / 259
    var j2 = ha * 11960
    var p2 = ha * 107600
    var ac = ha * 2.471

    resha.innerHTML = `M² = ${me2}<br>Milha² = Aproximadamente ${mi2.toFixed(3)}<br>Jarda² = Aproximadamente ${j2}<br>Pés² = Aproximadamente ${p2}<br>Acres = ${ac.toFixed(3)}`    
}

function calcMi(){
    var mi = document.querySelector('input#nummi')
    mi = parseFloat(mi.value).toFixed(2).replace(',', '.')
    var resmi = document.querySelector('div#resmi')
    var km = mi * 1.609
    var jar = mi * 1760
    var pol = mi * 63360
    var mn = mi / 1.151

    resmi.innerHTML = `KM = ${km}<br>Jardas = ${jar}<br>Polegadas = ${pol}<br>Milhas Náuticas = ${mn.toFixed(3)}`
}