const input = require('readline-sync')

let base = Number(input.question("digite a base\n"))
let altura = Number(input.question("digite a altura\n"))

let area = base * altura
let perimetro = 2 * (base + altura)

console.log(`area ${area}`)
console.log(`perimetro ${perimetro}`)
