import entradaDados from 'readline-sync'

console.log("Vamos calcular a área de um triangulo.");
var base = entradaDados.question("Base do triangulo:");
var altura = entradaDados.question("Altura do triangulo:");
var area = (Number(base) * Number(altura)) / 2;
console.log("A área do triangulo é igual a:" + area.toFixed(3));