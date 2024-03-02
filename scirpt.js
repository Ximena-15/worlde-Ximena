let intentos = 6;
let palabra = "";

const UrlApi = 'https://random-word-api.vercel.app/api?words=25&length=5';

document.addEventListener('DOMContentLoaded', () => {
    cargarPalabra();
    const button = document.getElementById('guess-button');
    const reiniciarButton = document.getElementById('reiniciar');
    const guessInput = document.getElementById('guess-input');

    button.addEventListener('click', intentar);
    reiniciarButton.addEventListener('click', reiniciarJuego);
    reiniciarButton.disabled = false;
    function intentar(){
      const GRID = document.getElementById('grid');
      const ROW = document.createElement('div');
      ROW.className = 'row';
      const INTENTO = leerIntento ();
      console.log("Intento:", INTENTO);
      
      if (INTENTO.length != 5) {
          alert("Debe ingresar una palabra de 5 letras");
          return;
      }
      
      if (INTENTO === palabra){
          console.log("Ganaste");
          terminar("Ganaste CRACK, sos un genio");
          button.disabled = true;
          reiniciarButton.disabled = false; 
      }
  
      for (let i in palabra) {
          const SPAN = document.createElement('span');
          SPAN.className = "letter";
          if (palabra[i] === INTENTO[i]){
              console.log(INTENTO[i], "verde");
              SPAN.innerHTML = INTENTO[i];
              SPAN.style.background = "green";
          } else if (palabra.includes(INTENTO[i])) {
              console.log(INTENTO[i], "amarillo");
              SPAN.innerHTML = INTENTO[i];
              SPAN.style.background = "yellow";
              for (let j = 0; j < i; j++) {
                  if (palabra[j] === INTENTO[i]) {
                      SPAN.style.background = "gray";
                      break;
                  }
              }
          } else {
              console.log(INTENTO[i], "gris");
              SPAN.innerHTML = INTENTO[i];
              SPAN.style.background = "gray";
          }
      
          ROW.appendChild(SPAN);
      }
      GRID.appendChild(ROW);
      intentos--;
      if (intentos === 0){
          console.log("Perdiste");
          terminar("Perdiste crack, Pero no importa, intentalo de nuevo");
          button.disabled = true;
          reiniciarButton.disabled = false; 
      }
  }
    function intentar() {
      const GRID = document.getElementById('grid');
      const ROW = document.createElement('div');
      ROW.className = 'row';
      const INTENTO = leerIntento().toUpperCase(); 
      console.log("Intento:", INTENTO);
  
      if (INTENTO.length != 5) {
          alert("Debe ingresar una palabra de 5 letras");
          return;
      }
  
      if (INTENTO === palabra) {
          console.log("Ganaste");
          terminar("GANASTE,");
          button.disabled = true;
          reiniciarButton.disabled = false;
      }
  
      let letrasCorrectas = new Set();
      let letrasIncorrectas = new Set();
  
      for (let i in palabra) {
          const letraIntento = INTENTO[i];
          const letraPalabra = palabra[i];
          const SPAN = document.createElement('span');
          SPAN.className = "letter";
  
          if (letraIntento === letraPalabra && !letrasCorrectas.has(letraIntento)) {
              console.log(letraIntento, "verde");
              SPAN.innerHTML = letraIntento;
              SPAN.style.background = "green";
              letrasCorrectas.add(letraIntento); 
          } else if (palabra.includes(letraIntento) && !letrasCorrectas.has(letraIntento) && !letrasIncorrectas.has(letraIntento)) {
              console.log(letraIntento, "amarillo");
              SPAN.innerHTML = letraIntento;
              SPAN.style.background = "yellow";
              letrasIncorrectas.add(letraIntento); 
          } else {
              console.log(letraIntento, "gris");
              SPAN.innerHTML = letraIntento;
              SPAN.style.background = "gray";
          }
          ROW.appendChild(SPAN);
      }
      GRID.appendChild(ROW);
      intentos--;
      if (intentos === 0) {
          console.log("Perdiste");
          terminar("PERDISTA");
          button.disabled = true;
          reiniciarButton.disabled = false;
      }
  }
    
    function leerIntento() {
        let valor = guessInput.value;
        valor = valor.toUpperCase();
        return valor;
    }

    function terminar(mensaje) {
        const INPUT = document.getElementById("guess-input");
        INPUT.disabled = false;
        button.disabled = true;
        let contenedor = document.getElementById('guesses');
        contenedor.innerHTML = "<h1>" + mensaje + "<h1>";
    }

    function reiniciarJuego() {
        console.log("Reiniciando");
        intentos = 6;
        const GRID = document.getElementById('grid');
        GRID.innerHTML = "";  
        guessInput.value = "";  
        cargarPalabra();
        button.disabled = false;
    }

    function cargarPalabra() {
        fetch(UrlApi)
            .then(response => response.json())
            .then(response => {
                palabra = response[0].toUpperCase();
                console.log("Palabra nueva:", palabra);
            })
            .catch(err => { console.log("Error al obtener la palabra:", err) });
    }
});



