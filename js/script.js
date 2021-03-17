//
//
// function delayed() {
//
//   console.log('delay of 3000ms (3s)');
//
// }
//
//
// function init() {
//
//   setTimeout(delayed, 3000); // richiama una funzione, con un timer settato in milli secondi;
//
// }
//
// init();




// - alert con "fine giro" dopo 10 secondi (setTimeout)
// - stampare in pagina cronometro che arriva a 10 secondi (setInterval)


// zona variabili
var seconds = 0;
var clock;


// zona funzioni
function cronometer() {
  document.getElementById('title').innerHTML = seconds++;

  if (seconds > 10) {
    clearInterval(clock);
    document.getElementById('title').innerHTML = 'fine giro';
    alert('fine giro');
  }

}

function laps() {
  clock = setInterval(cronometer, 1000);
}


// ciamata ed esecuzioni delle funzioi
laps();
