const input = require('readline-sync')

function contarLetra(texto, letra){
    let cont = 0
    for(let i = 0; i < texto.length; i++){
        if(texto[i] == letra) cont++
    }
    return cont
}

let texto = input.question("digite um texto\n")
let letra = input.question("fale uma letra\n")

console.log(`a letra ${letra} aparece ${contarLetra(texto, letra)} vezes`)