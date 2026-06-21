const input = require('readline-sync')

function podeVotar(idade){
    return idade >= 16
}

let idade = Number(input.question("qual sua idade\n"))

if(podeVotar(idade)){
    console.log("pode votar")
} else {
    console.log("não pode votar")
}