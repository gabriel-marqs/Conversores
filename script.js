const botao = document.querySelectorAll('.botao')

botao.forEach(box => {
    box.addEventListener('mouseenter', function entrar(event) {
        box.setAttribute('style', 'background-color: rgb(146, 142, 142); font-weight: bold; text-transform: uppercase; text-align: center; width: 180px; height: 80px;')
    })
    box.addEventListener('mouseout', function sair(event){
        box.setAttribute('style', 'background-color: rgb(214, 214, 214);')
    })
})
