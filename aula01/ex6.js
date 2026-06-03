const input = require("readline-sync")

let numero = Math.floor(Math.random()*100)+1
let chute

while(true){
    chute=parseInt(prompt("fale um numero"))

    if(chute==numero){
        alert("acertou")
        break
    }

    if(chute<numero){
        console.log("é maior")
    }
    if(chute>numero){
        console.log(é menor)
    }
}