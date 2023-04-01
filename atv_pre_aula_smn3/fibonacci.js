// Pedindo ao usuário que insira um número
let num = parseInt(prompt("Digite um número:"));

// Gerando a série de Fibonacci até o número inserido pelo usuário
let fib = [0, 1];
while (fib[fib.length - 1] < num) {
  let nextFib = fib[fib.length - 1] + fib[fib.length - 2];
  fib.push(nextFib);
}

// Exibindo a série de Fibonacci na tela
console.log("A série de Fibonacci até ${num} é: ${fib.join(", ")}");