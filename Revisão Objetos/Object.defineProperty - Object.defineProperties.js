// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
  Object.defineProperty(this, 'estoque', {
    enumerable: true, //mostra a chave
    value: estoque, // valor
    writable: true, // pode alterar
    configurable: true //configurável
  });

  Object.defineProperties(this,  {
    nome: {
      enumerable: true, //mostra a chave
      value: nome, // valor
      writable: true, // pode alterar
      configurable: true //configurávels
    },
    preco: {
      enumerable: true, //mostra a chave
      value: preco, // valor
      writable: true, // pode alterar
      configurable: true //configurável
    }
    
  });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for (let chave in p1) {
  console.log(chave)
}