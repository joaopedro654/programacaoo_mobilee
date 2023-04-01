// Pedindo ao usuário que insira uma string
let str = prompt("Digite uma string:");

// Invertendo a string
let strInvertida = "";
for (let i = str.length - 1; i >= 0; i--) {
  strInvertida += str[i];
}

// Exibindo a string invertida na tela
console.log("A string invertida é: ${strInvertida}");