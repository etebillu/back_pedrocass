const input = require("readline-sync");

const oculto = 72
let tentativas = 0
let chute = 0

while(true){
    chute = Number(input.question("fale um numero "))
    tentativas=tentativas + 1;

    if(chute==oculto){
        console.log(`Voce acertou o numero oculto em ${tentativas} tentativas`);
    break;
    }
    else if(chute>oculto){
        console.log("numero oculto é menor ")
    }
    else{
        console.log("numero oculto é maior")
    }
}