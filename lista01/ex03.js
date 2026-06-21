const input = require('readline-sync')

let num = Number(input.question("fale um numero\n"))

let resultado = num % 2 == 0 ? "par" : "impar"
console.log(resultado)