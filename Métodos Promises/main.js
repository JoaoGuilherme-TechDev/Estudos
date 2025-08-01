function rand (min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("CAI NO ERRO");
        return;
      }
      resolve(msg.toUpperCase() + " Passei pela promise");
      return;
    }, tempo);
  }); 
}

// Promise.all / Promise.race /Promise.resolve / Promise.reject

const promises = [
  esperaAi("Promise 1", rand(1,5)),
  esperaAi("Promise 2", rand(1,5)),
  esperaAi("Promise 3", rand(1,5)),
  // esperaAi(1000, rand(1,5))
];
// Promise.all - Resolve todas as promises e depois retorna
// Promise.all(promises)
// .then(function (valor) {
//   console.log(valor);
// })
// .catch(function (erro) {
//   console.log(erro);
// }
// )

//Promise.race - Retorna a primeira promise resolvida

// Promise.race(promises) 
// .then(function (valor) {
//   console.log(valor);
// })
// .catch(function (erro) {
//   console.log(erro);
// })

function baixaPagina() {
  const emCache = true;
  if (emCache) {
    return Promise.reject("Página em cache");
  }else {
    return esperaAi("Baixei a página", 2000);
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => console.log("ERRO",e));

