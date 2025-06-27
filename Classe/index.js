class Pessoa {
  constructor (nome, sobrenome ) {
    this.nome = nome,
    this.sobrenome = sobrenome;
  }
  falar() {
    console.log(`${this.nome} está falando`);

  }
  comer () {
    console.log(`${this.nome} está comendo`);
  }
  beber () {
    console.log(`${this.nome} está bebendo`);
  }
}

const p1 = new Pessoa ("João", "Silva ");
const p2 = new Pessoa ("Adriana", "Sousa");
const p3 = new Pessoa ("Amanada", "Sousa ");
const p4 = new Pessoa ("pedro", "Martins  ");

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
