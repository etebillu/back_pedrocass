const input = require('readline-sync')

let produtos = [
    {id: 1, nome: "xilogravura utopica", preco: 25},
    {id: 2, nome: "vidro monogamico", preco: 80},
    {id: 3, nome: "gnomo gnomistico", preco: 45},
    {id: 4, nome: "homen dinamarques celestial", preco: 130},
    {id: 5, nome: "esfera prolixa vermelha avermelhada", preco: 820}
]

console.log(produtos.find(p => p.id == 3))
console.log(produtos.filter(p => p.preco > 100))
console.log(produtos.map(p => p.nome))
produtos.forEach(p => console.log(p.nome, "-", p.preco))