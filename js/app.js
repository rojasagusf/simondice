"use strict"

const $start = document.querySelector("#start");
const $stop = document.querySelector("#stop");






/*
1- Al hacer click en el botón START: 
   a) -Se cambia a boton STOP. --------- FINISHED
   b) -Se actualiza el tablero a ROUND y TURN.
   c) -Inicia el proceso del juego.

  b) se debe ocultar el h2 y desocultar los siguientes h2.
    se debe escribir el round: {numero de ronda} y turn: {player}. 
*/

escrituraDinamica("Press start");

$start.onclick = () => {
  alternarBotones();
  actualizarTablero();
}

$stop.onclick = () => {
  location.reload();
}


function alternarBotones() {
  $start.classList = "oculto";
  $stop.className = "stop";
}

function escrituraDinamica(texto) {
  const $title = document.querySelector("#press");
  let time = 100;
  
  for(let i = 0; i < texto.length; i++) {
    let caracter = texto[i];

    setTimeout(() => {
      if($title.innerText === "Press") {
        $title.innerText += ` ${texto[i]}`;
      } else {
        $title.innerText += caracter;
      }
    }, time);

    time += 70;
  }
 
  setTimeout(() => {
    $title.innerHTML += '<span>_</span>';
  },time);
}

function actualizarTablero() {
  const $title = document.querySelector("#press");
  const $turn = document.querySelector("#turn");
  const $round = document.querySelector("#round");

  

  $title.className = "oculto";
  $turn.className = "";
  $round.className = "";

  escrituraDinamica($turn.innerText = "Turn");


}

function inicioJuego() {
  const patron = [];




  
}