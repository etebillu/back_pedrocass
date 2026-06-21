const input = require('readline-sync')

let tamanho = Number(input.question("fale o tamanho do tabuleiro\n"))

for(let i = 0; i < tamanho; i++){
    let linha = ""
    for(let j = 0; j < tamanho; j++){
        linha += (i + j) % 2 == 0 ? " " : "#"
    }
    console.log(linha)
}