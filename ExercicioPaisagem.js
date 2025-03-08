const ePaisagem = (largura, altura) => altura > largura ? "A imagem está no modo retrato" : "A imagem está no modo paisagem"

const imagem = ePaisagem(50,100)
console.log(imagem)