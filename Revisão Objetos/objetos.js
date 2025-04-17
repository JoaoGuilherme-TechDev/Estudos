// Factory functions / Constructor functions / Classes

function Pessoa (nome, sobrenome) {
  this.nome = nome;
  this.sbrenome = sobrenome;

  Object.freeze(this);
}

const p1 = new Pessoa("João", "Guilherme");
const p2 = new Pessoa("Adriana", "Sousa");

console.log(p1);
console.log(p2);