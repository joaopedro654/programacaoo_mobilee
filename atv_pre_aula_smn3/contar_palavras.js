// Pedindo ao usuário que insira uma string
let str = prompt("Digite uma string:");

// Contando o número de palavras na string
let palavras = str.trim().split(/\s+/);
let numPalavras = palavras.length;

// Exibindo o número de palavras na tela
console.log(`A string tem ${numPalavras} palavra(s).`);