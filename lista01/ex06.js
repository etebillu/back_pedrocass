const input = require('readline-sync')

let num = Number(input.question("fale um numero\n"))

while(num >= 1){
    console.log(num)
    num--
}
console.log("fim")