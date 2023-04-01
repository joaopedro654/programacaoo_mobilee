// Pedindo ao usuário que insira um número
let num = parseInt(prompt("Digite um número:"));

// Definindo a função que calcula o fatorial
function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fatorial(n-1);
  }
}

// Calculando o fatorial do número inserido pelo usuário e exibindo o resultado na tela
let resultado = fatorial(num);
console.log("O fatorial de ${num} é ${resultado}.");