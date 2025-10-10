let peso = Number(prompt("Digite seu peso"))
let altura = Number(prompt("Digite sua altura"))

let calculo = peso/(altura*altura)

let resultado = document.getElementById("resultado")

resultado.innerHTML = `Seu IMC é ${calculo}`