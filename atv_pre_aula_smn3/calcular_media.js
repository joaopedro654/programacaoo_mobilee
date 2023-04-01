// Pedindo ao usuário que insira os números
let numeros = prompt("Digite uma sequência de números separados por vírgula:");
numeros = numeros.split(",");

// Calculando a média dos números
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += parseFloat(numeros[i]);
}
let media = soma / numeros.length;

// Exibindo a média na tela
console.log("A média dos números é: ${media}");