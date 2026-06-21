const input = require('readline-sync')

function min(a, b){
    return a < b ? a : b
}

let min2 = (a, b) => a < b ? a : b

console.log(min(5, 8))
console.log(min2(12, 3))