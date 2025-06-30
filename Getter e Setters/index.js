const _velocidade = Symbol("velocidade");

class Carro {
  constructor(nome) {
    this.nome =  nome,
    this.velocidade = 0;
    
  }

  set velocidade(valor) {
    if(typeof valor !== 'number') return;
    if (valor >= 100 || valor <= 0) return;
  }

  get velocidade() {
    return this.velocidade
  }

  acelerar() {
    if (this.velocidade >= 100) return;
    this.velocidade++;

  }
  freiar() {
    if (this.velocidade <= 0) return;
    this.velocidade--;
  }

}



const c1 = new Carro ("Fusca");
// for(let i = 0; i <= 200; i++) {
//   c1.acelerar();

// }

console.log(c1)