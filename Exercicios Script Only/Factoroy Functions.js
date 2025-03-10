function criaPessoa (nome, sobrenome, altura, peso) {
  return {
    nome, 
    sobrenome,

    get nomeCompleto () {
      return `${this.nome} ${this.sobrenome}`
    },

    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
      console.log(valor)

    },
    
    fala: function (assunto) {
      return `${this.nome} está falando ${assunto}.`;
    },
    altura: altura,
    peso: peso,
    get imc  () {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
    
  }
}

const p1 = criaPessoa ('Luiz', 'Otávio', 1.80, 80);
p1.nomeCompleto = "Maria Oliveira Silva"
console.log(p1.nomeCompleto)

