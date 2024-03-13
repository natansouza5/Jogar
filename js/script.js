let nao = document.getElementById("nao")
let sim = document.getElementById("sim")
let resposta = document.getElementById("pedido")
let botoes = document.getElementById("decisao")
nao.addEventListener("click", click)
sim.addEventListener("click", clickS)
let maiorw = 200
let menorw = 200
let maiorh = 50
let menorh = 50
let fontplus = 40
let fontminus = 40
function clickS() {
    fontplus += 2.5
    fontminus /= 1.1
    maiorw *= 1.05
    maiorh *= 1.05
    nao.style.fontSize = fontplus + "px"
    nao.style.width = maiorw + "px"
    nao.style.height = maiorh + "px"
    menorh /= 1.1
    menorw /= 1.1
    sim.style.width = menorw + "px"
    sim.style.height = menorh + "px"
    sim.style.fontSize = fontminus + "px"
    if(fontplus == 70) {
        sim.style.display = "none"
    }
}
function click() {
    resposta.innerHTML = "Ainda bem que você sabe!"
    decisao.style.display = "none"
}