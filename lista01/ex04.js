const input = require('readline-sync')

for(let i = 1; i <= 7; i++){
    let linha = ""

    for(let j = 1; j <= i; j++){
        linha = linha + "#"
    }

    console.log(linha)
}