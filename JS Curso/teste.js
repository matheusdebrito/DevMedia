import entradaDados from 'readline-sync';

var colecao_produtos = [
    { id: 1, nome: "Cooktop",           preco: 380 },
    { id: 2, nome: "Geladeira",         preco: 1350 },
    { id: 3, nome: "Notebook",          preco: 2500 },
    { id: 4, nome: "Liquidificador",    preco: 100 }
];

console.log(colecao_produtos[3]);
var nome = entradaDados.question('Digite algo:');
console.log(nome);