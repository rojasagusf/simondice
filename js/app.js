"use strict"

const $start = document.querySelector("#start");
const $stop = document.querySelector("#stop");
const $tryAgain = document.querySelector("#try");
const $title = document.querySelector("#press");



function escrituraDinamica(texto) {
  
  let time = 100;
  
  for(let i = 0; i < texto.length; i++) {
    console.log(texto[i]);
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

escrituraDinamica("Press start");

/*



*/