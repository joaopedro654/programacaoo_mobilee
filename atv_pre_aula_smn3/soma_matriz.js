// Pedindo ao usuário que insira a matriz
let matriz = prompt("Digite uma matriz de números separada por vírgulas e colchetes:");

// Convertendo a string em uma matriz
matriz = JSON.parse(matriz);

// Soma de todos os números na matriz
let soma = 0;
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    soma += matriz[i][j];
  }
}

// Exibindo a soma na tela
console.log("A soma de todos os números na matriz é: ${soma}");