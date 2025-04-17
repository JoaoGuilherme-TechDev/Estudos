const produto = {nome : "Produto" , preco: 1.8};

console.log(Object.getOwnPropertyDescriptor(produto, "nome"))
console.log(produto)
// objetos quando são "copiados" entre "=" apenas se referenciam entre si
// meios para se copiar objetos 
//... spread operator 
// Object.assign()

// Outros métodos de objetos
// Object.GetOwnPropertyDescriptor - mostra se o objeto é writable, configurable
//Object.values - mostra os valores dentro das chaves do do objeto
// Object.key - mostra as chaves do objeto
// Object.entries - mostra tanto as chaves quando o valor de cada objeto 

