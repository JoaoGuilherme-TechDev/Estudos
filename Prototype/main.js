// Construtora - molde (classe)
function Pessoa (nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
}

const pessoa1 = new Pessoa ("Luiz", "O.");
const data = new Date();

console.dir(pessoa1)
console.dir(data )

