function getHourFromSeconds(seconds) {
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString("pt-BR",{
    hours12: false,
    timeZone:  "UTC"
  })
}
console.log(getHourFromSeconds(10))

const timer = document.querySelector(".timer");
const iniciar = document.querySelector(".buttonStart")
const pausar = document.querySelector(".buttonPause")
const zerar = document.querySelector(".buttonRestart")
let segundos = 0;
let tempo;
function iniciarTimer() {
  tempo = setInterval(function () {
    segundos++;
    timer.innerHTML = getHourFromSeconds(segundos);
  },1000);
}

function zerarTimer() {
  clearInterval(tempo);
  segundos = -1;
  timer.style.color = "black"
  timer.innerHTML = "00:00:00"
}

iniciar.addEventListener("click", function(event){
  clearInterval(tempo)
  timer.style.color = "black"
  iniciarTimer();
})
pausar.addEventListener("click", function(event){
  timer.style.color = "red"
  clearInterval(tempo);
})
zerar.addEventListener("click", function(event){
  zerarTimer()
})







