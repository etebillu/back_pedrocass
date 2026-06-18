const input = require('readline-sync')

let c = Number(input.question("fale a temperatura em celcius"))
let f = c * 1.8 + 32

console.log(`em farenheit é ${f}`)