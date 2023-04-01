// Pedindo ao usuário que insira um número
let num = parseInt(prompt("Digite um número:"));

// Função que calcula o fatorial usando recursão
function fatorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * fatorial(num - 1);
  }
}

// Chamando a função e exibindo o resultado na tela
let resultado = fatorial(num);
console.log("O fatorial de ${num} é ${resultado}");