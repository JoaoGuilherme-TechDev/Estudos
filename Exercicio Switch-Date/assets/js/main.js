const data = document.querySelector('.data');

const date = new Date();
let diaDaSemana = date.getDay();
let mes = date.getMonth();


function getMes(mes) {
  let mesTexto
  switch (mes) {
    case 0 :
      mesTexto = "Janeiro"
      return mesTexto
    case 1:
        mesTexto = "Fevereiro"
        return mesTexto
    
    case 2:
        mesTexto = "Março"
        return mesTexto
    
    case 3:
        mesTexto = "Abril"
        return mesTexto
    
    case 4:
        mesTexto = "Maio"
        return mesTexto
    
    case 5:
        mesTexto = "Junho"
        return mesTexto
    
    case 6:
        mesTexto = "Julho"
        return mesTexto
    case 7:
        mesTexto = "Agosto"
        return mesTexto
    case 8:
        mesTexto = "Setembro"
        return mesTexto
    case 9:
        mesTexto = "Outubro"
        return mesTexto
    case 10:
        mesTexto = "Novembro"
        return mesTexto
    case 11:
        mesTexto = "Dezembro"
        return mesTexto 
   }
}

function getDiaDaSemana(diaDaSemana) {
  let diaDaSemanaTexto;
   switch (diaDaSemana) {
    case 0 :
      diaDaSemanaTexto = "Domingo"
      return diaDaSemanaTexto
    case 1 :
      diaDaSemanaTexto = "Segunda-Feira"
      return diaDaSemanaTexto
    case 2 :
      diaDaSemanaTexto = "Terça-Feira"
      return diaDaSemanaTexto
    case 3 :
      diaDaSemanaTexto = "Quarta-Feira"
      return diaDaSemanaTexto
    case 4 :
      diaDaSemanaTexto = "Quinta-Feira"
      return diaDaSemanaTexto
    case 5 :
      diaDaSemanaTexto = "Sexta-Feira"
      return diaDaSemanaTexto
    case 6 :
      diaDaSemanaTexto = "Sábado"
      return diaDaSemanaTexto
    default :
      diaDaSemanaTexto = ""
      return diaDaSemanaTexto
   }
}
const mesTexto = getMes(mes)
const diaDaSemanaTexto = getDiaDaSemana(diaDaSemana)
const diaMes = date.getDate()
data.innerHTML = `Hoje é ${diaDaSemanaTexto}, Dia ${date.getDate()} de ${mesTexto} de ${date.getFullYear()} às ${date.getHours()}:${date.getMinutes()}`