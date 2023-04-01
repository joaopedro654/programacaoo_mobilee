// Pedindo ao usuário que insira 5 valores e armazenando-os em um array
let values = [];
for (let i = 0; i < 5; i++) {
  values.push(parseInt(prompt("Digite o valor ${i+1}:")));
}

// Função para realizar a troca de dois elementos de posição em um array
function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// Algoritmo Bubble Sort
for (let i = 0; i < values.length - 1; i++) {
  for (let j = 0; j < values.length - 1 - i; j++) {
    if (values[j] > values[j+1]) {
      swap(values, j, j+1);
    }
  }
}

// Exibindo a lista ordenada na tela
console.log("A lista ordenada é: ${values}");