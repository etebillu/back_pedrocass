const input = require('readline-sync')

function reverter(arr){
    return arr.reverse()
}

let numeros = [1, 2, 3, 4, 5, 67]
console.log(reverter(numeros))