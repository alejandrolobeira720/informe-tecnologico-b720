/* =====================================================
   CIBERGAME 2 — PROTOCOLO DE SEGURIDAD
   Quiz con piscina propia (POOL_CIBERGAME2 en preguntas.js).
   8 preguntas por partida · 3 vidas ·
   las 3 últimas: 2 difíciles + 1 extrema.
   ===================================================== */

const TOTAL_VIDAS = 3;

let setPartida = [];
let indicePregunta = 0;
let vidas = TOTAL_VIDAS;
let puntos = 0;
let aciertos = 0;
let opcionesActuales = null; // { opciones, correcta } de la pregunta en pantalla

/* ─── Sesión encadenada + leaderboard (leaderboard.js) ───
   La sesión acumula puntos ronda tras ronda sin repetir preguntas;
   las rondas perfectas encadenan racha con bonus creciente. */
const LB_CLAVE = "b720_lb_cibergame2";
const BONUS_RACHA = 25; // bonus por ronda perfecta: 25 × racha
let sesion = null;

const $ = id => document.getElementById(id);

/* ─── Navegación entre pantallas ─── */
function mostrarPantalla(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
}

/* ─── Inicio de partida (ronda de la sesión) ─── */
function empezarPartida() {
  setPartida = generarSetPartidaSinRepetir(POOL_CIBERGAME2, sesion.usadas);
  if (!setPartida) { terminarSesion(); return; } // piscina agotada
  setPartida.forEach(q => sesion.usadas.add(q.pregunta));
  indicePregunta = 0;
  vidas = TOTAL_VIDAS;
  puntos = 0;
  aciertos = 0;

  mostrarPantalla("game-screen");
  pintarVidas();
  pintarPuntos();
  cargarPregunta();
}

/* ─── HUD ─── */
function pintarVidas() {
  const cont = $("lives");
  cont.innerHTML = "";
  for (let i = 0; i < TOTAL_VIDAS; i++) {
    const v = document.createElement("span");
    v.className = "life" + (i < vidas ? "" : " lost");
    cont.appendChild(v);
  }
}

function pintarPuntos() {
  $("score").textContent = String(puntos).padStart(3, "0");
}

function pintarProgreso() {
  const n = indicePregunta + 1;
  $("q-counter").textContent =
    String(n).padStart(2, "0") + " / " + String(setPartida.length).padStart(2, "0");
  $("progress-fill").style.width = (indicePregunta / setPartida.length) * 100 + "%";
}

/* ─── Render de pregunta ─── */
function cargarPregunta() {
  const pregunta = setPartida[indicePregunta];
  opcionesActuales = prepararOpciones(pregunta);

  pintarProgreso();

  // Chip de categoría
  const chip = $("chip-cat");
  chip.textContent = ETIQUETA_CATEGORIA[pregunta.cat];
  chip.className = "chip cat-" + pregunta.cat;

  $("q-tema").textContent = pregunta.tema;
  $("q-text").textContent = pregunta.pregunta;

  // Opciones
  const cont = $("options");
  cont.innerHTML = "";
  const letras = ["A", "B", "C", "D"];
  opcionesActuales.opciones.forEach((texto, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerHTML = `<span class="option-letter">${letras[i]}</span><span>${texto}</span>`;
    btn.onclick = () => responder(i, btn);
    cont.appendChild(btn);
  });

  // Reset feedback y re-disparo de la animación de entrada
  $("feedback").className = "feedback";
  const area = $("question-area");
  area.classList.remove("fade-out");
  area.style.animation = "none";
  void area.offsetWidth; // reflow para reiniciar la animación
  area.style.animation = "";
}

/* ─── Respuesta ─── */
function responder(indiceElegido, btnElegido) {
  const pregunta = setPartida[indicePregunta];
  const esCorrecta = indiceElegido === opcionesActuales.correcta;
  const botones = document.querySelectorAll(".option");

  // Bloquear todas las opciones y marcar estados
  botones.forEach((b, i) => {
    b.disabled = true;
    if (i === opcionesActuales.correcta) b.classList.add("is-correct");
    else if (i === indiceElegido) b.classList.add("is-wrong");
    else b.classList.add("is-muted");
  });

  const feedback = $("feedback");
  const ptsPregunta = PUNTOS_CATEGORIA[pregunta.cat];

  if (esCorrecta) {
    puntos += ptsPregunta;
    aciertos++;
    pintarPuntos();
    feedback.classList.add("show", "good");
    $("feedback-verdict").textContent = "Correcto — protocolo aplicado";
    $("feedback-points").textContent = "+" + ptsPregunta + " pts";
  } else {
    vidas--;
    sesion.fallos++;
    pintarVidas();
    feedback.classList.add("show", "bad");
    $("feedback-verdict").textContent = "Fallo de seguridad — vida perdida";
    $("feedback-points").textContent = "+0 pts";
  }

  $("feedback-text").textContent = pregunta.explicacion;

  const btnNext = $("btn-next");
  if (vidas === 0) {
    btnNext.textContent = "Ver resultado";
    btnNext.onclick = () => finalizar(false);
  } else if (indicePregunta === setPartida.length - 1) {
    btnNext.textContent = "Finalizar simulación";
    btnNext.onclick = () => finalizar(true);
  } else {
    btnNext.textContent = "Continuar";
    btnNext.onclick = siguientePregunta;
  }

  feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function siguientePregunta() {
  const area = $("question-area");
  area.classList.add("fade-out");
  setTimeout(() => {
    indicePregunta++;
    cargarPregunta();
  }, 250);
}

/* ─── Final ─── */
function finalizar(superada) {
  mostrarPantalla("end-screen");
  const inner = document.querySelector(".end-inner");
  inner.classList.toggle("gameover", !superada);

  // Plano CAD que se autodibuja de fondo (alterna Madrid/Barcelona)
  if (typeof cadCiudad === "function") cadCiudad(document.getElementById("cad-bg"));

  // Resultado por PORCENTAJE de aciertos de la ronda (no por puntos brutos,
  // que dependían del tamaño de la ronda y daban rangos engañosos).
  const pct = setPartida.length ? Math.round((aciertos / setPartida.length) * 100) : 0;
  $("end-score").textContent = pct;
  const lblScore = document.querySelector(".end-score-label");
  if (lblScore) lblScore.textContent = "% de aciertos";

  let rango, mensaje;
  if (!superada) {
    $("end-eyebrow").textContent = "Simulación interrumpida";
    rango = "Brecha de seguridad";
    mensaje = "Tres fallos críticos: el estudio ha sido comprometido. Los planos del concurso ya circulan por foros rusos con marca de agua ajena. Repite el protocolo: la próxima vez, desconfía antes de hacer clic.";
  } else {
    $("end-eyebrow").textContent = "Simulación finalizada";
    if (pct >= 95) {
      rango = "Hacker de Hormigón";
      mensaje = "Protocolo impecable. Tu red es más sólida que un muro de carga: los atacantes ven tu IP y se van a probar suerte con otro estudio.";
    } else if (pct >= 70) {
      rango = "Arquitecto Blindado";
      mensaje = "Buen criterio bajo presión. Algún descuido puntual, pero el estudio sigue en pie y los proyectos, a salvo. Un repaso más y serás impenetrable.";
    } else {
      rango = "Arquitecto en Prácticas";
      mensaje = "Has sobrevivido, pero por poco. Demasiadas decisiones al límite: repasa las explicaciones y vuelve a intentarlo antes de que llegue un ataque real.";
    }
  }

  $("end-rank").textContent = rango;
  $("end-message").textContent = mensaje;

  /* Acumulado de sesión y racha de rondas perfectas */
  const rondaPerfecta = superada && aciertos === setPartida.length;
  let bonusRacha = 0;
  if (rondaPerfecta) {
    sesion.racha++;
    bonusRacha = BONUS_RACHA * sesion.racha;
  } else {
    sesion.racha = 0;
  }
  sesion.total += puntos + bonusRacha;
  sesion.rondas++;

  $("end-stats").innerHTML = `
    <div class="end-stat"><b>${aciertos} / ${setPartida.length}</b><span>Aciertos</span></div>
    <div class="end-stat"><b>${vidas}</b><span>Vidas restantes</span></div>
    <div class="end-stat"><b>${puntos}</b><span>Puntos ronda</span></div>
  `;

  const quedan = hayPreguntasRestantes(POOL_CIBERGAME2, sesion.usadas);
  if (!quedan) sesion.agotada = true;

  let resumen = `<div class="sesion-row"><span>Total acumulado · ${sesion.rondas} ${sesion.rondas === 1 ? "ronda" : "rondas"}</span><b>${sesion.total} pts</b></div>`;
  if (rondaPerfecta) {
    resumen += `<div class="sesion-row racha"><span>Ronda perfecta — racha ×${sesion.racha}</span><b>+${bonusRacha} pts de bonus</b></div>`;
    if (quedan) resumen += `<div class="sesion-row"><span>La racha sigue viva: la próxima ronda perfecta vale +${BONUS_RACHA * (sesion.racha + 1)} pts</span></div>`;
  }
  if (!quedan) resumen += `<div class="sesion-row agotada"><span>¡Has completado TODAS las preguntas del juego!</span></div>`;
  $("end-session").innerHTML = resumen;

  // "Seguir jugando" solo si quedan preguntas y NO has perdido la partida:
  // al quedarte sin vidas, la sesión termina (vas a la clasificación).
  $("btn-restart").style.display = (quedan && superada) ? "" : "none";
}

/* ─── Fin de sesión: registrar y mostrar clasificación ─── */
function terminarSesion() {
  const res = lbRegistrar(LB_CLAVE, sesion.nombre, sesion.total);
  const perfecta = sesion.rondas > 0 && sesion.fallos === 0;
  const brillar = res.posicion === 1 || perfecta;

  let msg;
  if (res.posicion === 1) {
    msg = `${sesion.nombre}, eres el número 1 de la clasificación con ${res.mejor} puntos.`;
  } else if (res.posicion !== null && res.posicion <= 5) {
    msg = `¡Enhorabuena, ${sesion.nombre}! Estás en el TOP ${res.posicion} de la clasificación.`;
  } else {
    msg = `Sesión registrada: ${sesion.total} puntos${res.mejor > sesion.total ? ` (tu mejor marca: ${res.mejor})` : ""}. ¡Sigue entrenando!`;
  }
  if (perfecta) {
    msg += sesion.agotada
      ? ` Y además, TODAS las preguntas del juego respondidas sin un solo fallo. Leyenda de la ciberseguridad.`
      : ` Sesión PERFECTA: ${sesion.usadas.size} preguntas sin un solo fallo.`;
  }
  $("lb-congrats").textContent = msg;

  lbRender($("lb-list"), res.lista, sesion.nombre, brillar);
  mostrarPantalla("lb-screen");
}

/* ─── Listeners ─── */
const leerNombre = lbConectarNombre($("player-name"), $("btn-start"));

$("btn-start").onclick = () => {
  const nombre = leerNombre();
  if (nombre.length < 2) return;
  lbGuardarNombre(nombre);
  sesion = { nombre: nombre, total: 0, racha: 0, fallos: 0, rondas: 0, usadas: new Set(), agotada: false };
  empezarPartida();
};
$("btn-restart").onclick = empezarPartida;        // seguir jugando (misma sesión)
$("btn-finish").onclick = terminarSesion;         // terminar y ver clasificación
$("btn-again").onclick = () => mostrarPantalla("start-screen");
