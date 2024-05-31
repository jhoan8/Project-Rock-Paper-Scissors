const btnPiedra = document.querySelector(".piedra");
const btnTijera = document.querySelector(".tijera");
const btnPapel = document.querySelector(".papel");
const btnReload = document.querySelector(".reload");
var jugador;
let triunfos = 0;
let perdidas = 0;
let resultadoJugador = document.querySelector(".screen");
let screenly = document.createElement("p");
let screenlyEnemy = document.createElement("p");
resultadoJugador.appendChild(screenlyEnemy);
resultadoJugador.appendChild(screenly);
let aleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
btnReload.addEventListener("click", () => {
  location.reload();
});
btnPiedra.addEventListener("click", () => {
  jugador = 1;
  screenly.innerHTML += ` Jugador: piedra <br>`;
  eleccion();
  combate();
  verificacion();
});
btnTijera.addEventListener("click", () => {
  jugador = 2;
  screenly.innerHTML += ` Jugador: tijeras <br>`;
  eleccion();
  combate();
  verificacion();
});
btnPapel.addEventListener("click", () => {
  jugador = 3;
  screenly.innerHTML += ` Jugador: papel <br>`;
  eleccion();
  combate();
  verificacion();
});
//eleccionEnemigo
let eleccion = () => {
  let pc = aleatorio(1, 3);
  if (pc == 1) {
    screenlyEnemy.innerHTML += `pc: piedra <br>`;
  } else if (pc == 2) {
    screenlyEnemy.innerHTML += `pc: tijera <br>`;
  } else if (pc == 3) {
    screenlyEnemy.innerHTML += `pc: papel <br>`;
  }
};

//combate
let combate = (resultado) => {
  let pc = aleatorio(1, 3);
  if (pc === jugador) {
    resultado = " Empate";
  } else if (
    (jugador == 1 && pc == 2) ||
    (jugador == 2 && pc == 3) ||
    (jugador == 3 && pc == 1)
  ) {
    resultado = "ganaste";
    triunfos++;
  } else {
    resultado = "perdiste";
    perdidas++;
  }
  let mensajeFinal = document.createElement("p");
  mensajeFinal.classList.add("mensajeFinal");
  mensajeFinal.innerHTML = resultado;
  document.body.querySelector(".screen").append(mensajeFinal);

  return resultado;
};
let verificacion = () => {
  if (perdidas > 3 || triunfos > 3) {
    btnPapel.disabled = true;
    btnPiedra.disabled = true;
    btnTijera.disabled = true;
    let mensajeFinal = document.createElement("p");
    mensajeFinal.classList.add("mensaje");
    mensajeFinal.innerHTML = `ganaste ${triunfos} y perdiste ${perdidas}`;
    document.body.querySelector(".screen").append(mensajeFinal);
  }
};
