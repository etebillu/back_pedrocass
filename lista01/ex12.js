const input = require('readline-sync')

function calcular(a, b, operacao){
    console.log(operacao(a, b))
}

let n1 = Number(input.question("primeiro numero\n"))
let n2 = Number(input.question("segundo numero\n"))

calcular(n1, n2, (a, b) => a + b)
calcular(n1, n2, (a, b) => a * b)
calcular(n1, n2, (a, b) => a - b)