// Some todos os números
// Retrne um array comos pares (filter)
// Retorne um array com o dobro dos valores(map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const somaNumeros = numeros.reduce((acumulador, valor) => {
  acumulador += valor;
  return acumulador
},0);
console.log(somaNumeros)

const arrayPares = numeros.reduce ((acumulador, valor) => {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);
console.log(arrayPares)

const arrayDobro = numeros.reduce((acumulador, valor) => {
  acumulador.push(valor * 2);
  return acumulador;
}, [])
console.log(arrayDobro)



// Retorne a pessoa mais velha
const pessoas = [
  {nome: "Luiz", idade: 62},
  {nome: "Maria", idade: 23},
  {nome: "Eduardo", idade: 55},
  {nome: "Letícia", idade: 19},
  {nome: "Rosana", idade: 32},
  {nome: "Wallace", idade: 63},
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(maisVelha);