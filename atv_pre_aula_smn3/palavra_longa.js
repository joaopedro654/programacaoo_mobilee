// Pedindo ao usuário que insira uma string
let str = prompt("Digite uma string:");

// Encontrando a palavra mais longa na string
let palavras = str.trim().split(/\s+/);
let palavraMaisLonga = "";
for (let i = 0; i < palavras.length; i++) {
  if (palavras[i].length > palavraMaisLonga.length) {
    palavraMaisLonga = palavras[i];
  }
}

// Exibindo a palavra mais longa na tela
console.log("A palavra mais longa na string é: ${palavraMaisLonga}");