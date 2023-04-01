// Pedindo ao usuário que insira um número
let num = parseInt(prompt("Digite um número:"));

// Verificando se o número é primo
let primo = true;
for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    primo = false;
    break;
  }
}

// Exibindo o resultado na tela
if (primo) {
  console.log("${num} é um número primo.");
} else {
  console.log("${num} não é um número primo.");
}