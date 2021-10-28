import entradaDados from 'readline-sync'

console.log("Este é um conversor");
console.log("1)Converter milhas para quilômetros");
console.log("2)Converter quilômetros para milhas");
var escolha = entradaDados.question("Qual sua opção de conversão: ");

switch (escolha)
{
    case "1":
        console.log("Vamos converter milhas para quilômetros.");
        var milhas = entradaDados.question("Quantas milhas quer converter: ");
        var km = Number(milhas) * 1.609;
        console.log(milhas + " milhas é igual a " + km.toFixed(3) + " quilômetros.");
        break;

    case "2":
        console.log("Vamos converter quilômetros para milhas.");
        var quilometros = entradaDados.question("Quantos quilômetros quer converter: ");
        var milhas = Number(quilometros) / 1.60934
        console.log(quilometros + " quilômetros é igual a " + milhas.toFixed(4) + " milhas.");
        break;
}
