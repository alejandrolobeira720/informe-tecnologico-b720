/* =====================================================
   CIBERGAME 3 — LA TORRE CIBERRESILIENTE
   Misma base que Cibergame 2 (8 preguntas, 3 vidas,
   final 2 difíciles + 1 extrema) pero con piscina propia
   (POOL_CIBERGAME3 en preguntas.js) y mecánicas propias:
   · cada acierto construye una planta (de plano a edificio)
   · cada fallo deja la planta mal hecha
   · temporizador por pregunta (agotarlo = fallo)
   · torre perfecta (8/8) → celebración con bolita
   ===================================================== */

const TOTAL_VIDAS = 3;
const TOTAL_PLANTAS = 8;

/* Segundos por categoría: las difíciles dan más margen de lectura */
const TIEMPO_CATEGORIA = { facil: 25, media: 30, dificil: 40, extrema: 50 };

/* ─── Sesión encadenada + leaderboard (leaderboard.js) ───
   La sesión acumula puntos ronda tras ronda sin repetir preguntas;
   las rondas perfectas encadenan racha con bonus creciente. */
const LB_CLAVE = "b720_lb_cibergame3";
const BONUS_RACHA = 25; // bonus por ronda perfecta: 25 × racha
let sesion = null;

let setPartida = [];
let indicePregunta = 0;
let vidas = TOTAL_VIDAS;
let puntos = 0;
let aciertos = 0;
let opcionesActuales = null;
let temporizador = null;
let segundosRestantes = 0;
let segundosTotales = 0;

const $ = id => document.getElementById(id);

/* ─── Navegación entre pantallas ─── */
function mostrarPantalla(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
}

/* ─── Inicio (ronda de la sesión) ─── */
function empezarPartida() {
  setPartida = generarSetPartidaSinRepetir(POOL_CIBERGAME3, sesion.usadas);
  if (!setPartida) { terminarSesion(); return; } // piscina agotada
  setPartida.forEach(q => sesion.usadas.add(q.pregunta));
  indicePregunta = 0;
  vidas = TOTAL_VIDAS;
  puntos = 0;
  aciertos = 0;

  // Reset de la torre
  document.querySelectorAll(".floor").forEach(f => f.classList.remove("built", "damaged"));
  $("tower-svg").classList.remove("tower-complete");
  $("tower-crown").classList.remove("show");
  $("floors-built").textContent = "0";

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

/* ─── Temporizador ─── */
function iniciarTemporizador(cat) {
  detenerTemporizador();
  segundosTotales = TIEMPO_CATEGORIA[cat];
  segundosRestantes = segundosTotales;
  pintarTemporizador();

  temporizador = setInterval(() => {
    segundosRestantes--;
    pintarTemporizador();
    if (segundosRestantes <= 0) {
      detenerTemporizador();
      tiempoAgotado();
    }
  }, 1000);
}

function detenerTemporizador() {
  if (temporizador) { clearInterval(temporizador); temporizador = null; }
}

function pintarTemporizador() {
  const fill = $("timer-fill");
  const num = $("timer-num");
  const pct = (segundosRestantes / segundosTotales) * 100;
  fill.style.width = pct + "%";
  num.textContent = segundosRestantes;
  const urgente = pct <= 25;
  fill.classList.toggle("urgent", urgente);
  num.classList.toggle("urgent", urgente);
}

/* ─── Torre ─── */
function construirPlanta(indice) {
  const planta = $("floor-" + indice);
  if (planta) planta.classList.add("built");
  $("floors-built").textContent = aciertos;

  // Torre perfecta (8/8): coronación + celebración (ventanas encendidas
  // y la bolita rebotando por los retranqueos hasta el suelo)
  if (aciertos === TOTAL_PLANTAS) {
    $("tower-crown").classList.add("show");
    $("tower-svg").classList.add("tower-complete");
  }
}

function dañarPlanta(indice) {
  const planta = $("floor-" + indice);
  if (planta) planta.classList.add("damaged");
}

/* ─── Render de pregunta ─── */
function cargarPregunta() {
  const pregunta = setPartida[indicePregunta];
  opcionesActuales = prepararOpciones(pregunta);

  pintarProgreso();

  const chip = $("chip-cat");
  chip.textContent = ETIQUETA_CATEGORIA[pregunta.cat];
  chip.className = "chip cat-" + pregunta.cat;

  $("q-tema").textContent = pregunta.tema;
  $("q-text").textContent = pregunta.pregunta;

  const cont = $("options");
  cont.innerHTML = "";
  const letras = ["A", "B", "C", "D"];
  opcionesActuales.opciones.forEach((texto, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerHTML = `<span class="option-letter">${letras[i]}</span><span>${texto}</span>`;
    btn.onclick = () => responder(i);
    cont.appendChild(btn);
  });

  $("feedback").className = "feedback";
  const area = $("question-area");
  area.classList.remove("fade-out");
  area.style.animation = "none";
  void area.offsetWidth;
  area.style.animation = "";

  iniciarTemporizador(pregunta.cat);
}

/* ─── Respuesta ─── */
function responder(indiceElegido) {
  detenerTemporizador();

  const pregunta = setPartida[indicePregunta];
  const esCorrecta = indiceElegido === opcionesActuales.correcta;
  const botones = document.querySelectorAll(".option");

  botones.forEach((b, i) => {
    b.disabled = true;
    if (i === opcionesActuales.correcta) b.classList.add("is-correct");
    else if (i === indiceElegido) b.classList.add("is-wrong");
    else b.classList.add("is-muted");
  });

  if (esCorrecta) {
    aciertos++;
    puntos += PUNTOS_CATEGORIA[pregunta.cat];
    pintarPuntos();
    construirPlanta(indicePregunta);
    mostrarFeedback(true, "Planta asegurada", "+" + PUNTOS_CATEGORIA[pregunta.cat] + " pts", pregunta.explicacion);
  } else {
    vidas--;
    sesion.fallos++;
    pintarVidas();
    dañarPlanta(indicePregunta);
    mostrarFeedback(false, "Daño estructural — vida perdida", "+0 pts", pregunta.explicacion);
  }
}

/* Tiempo agotado: cuenta como fallo */
function tiempoAgotado() {
  const pregunta = setPartida[indicePregunta];
  const botones = document.querySelectorAll(".option");

  botones.forEach((b, i) => {
    b.disabled = true;
    if (i === opcionesActuales.correcta) b.classList.add("is-correct");
    else b.classList.add("is-muted");
  });

  vidas--;
  sesion.fallos++;
  pintarVidas();
  dañarPlanta(indicePregunta);
  mostrarFeedback(
    false,
    "Tiempo agotado — vida perdida",
    "+0 pts",
    "En ciberseguridad dudar demasiado también es un riesgo: los protocolos existen para decidir rápido. " + pregunta.explicacion
  );
}

/* ─── Feedback común ─── */
function mostrarFeedback(bien, veredicto, pts, explicacion) {
  const feedback = $("feedback");
  feedback.classList.add("show", bien ? "good" : "bad");
  $("feedback-verdict").textContent = veredicto;
  $("feedback-points").textContent = pts;
  $("feedback-text").textContent = explicacion;

  const btnNext = $("btn-next");
  if (vidas === 0) {
    btnNext.textContent = "Ver resultado";
    btnNext.onclick = () => finalizar(false);
  } else if (indicePregunta === setPartida.length - 1) {
    btnNext.textContent = "Finalizar obra";
    btnNext.onclick = () => finalizar(true);
  } else {
    btnNext.textContent = "Siguiente planta";
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
  detenerTemporizador();
  mostrarPantalla("end-screen");

  const inner = document.querySelector(".end-inner");
  inner.classList.toggle("gameover", !superada);

  // Plano CAD de fondo (alterna Madrid/Barcelona) + tantas torres bocetadas
  // como rondas hayas jugado (perfectas o no).
  if (typeof cadCiudad === "function") cadCiudad(document.getElementById("cad-bg"));
  if (typeof cadTorres === "function") cadTorres($("end-tower"), sesion ? sesion.rondas + 1 : 1);

  // Resultado por PORCENTAJE de aciertos de la ronda (no por puntos brutos).
  const pct = setPartida.length ? Math.round((aciertos / setPartida.length) * 100) : 0;
  $("end-score").textContent = pct;
  const lblScore = document.querySelector(".end-score-label");
  if (lblScore) lblScore.textContent = "% de aciertos";

  let rango, mensaje;
  if (!superada) {
    $("end-eyebrow").textContent = "Obra paralizada";
    rango = "Demolición técnica";
    mensaje = "Tres fallos estructurales: la inspección de seguridad ha precintado la obra. El ransomware campa por el servidor y los planos son ahora papel mojado digital. Vuelve a los cimientos y reconstruye con cabeza.";
  } else {
    $("end-eyebrow").textContent = "Obra finalizada";
    if (pct >= 95) {
      rango = "Torre Blindada";
      mensaje = "Certificación de ciberseguridad con honores. Ocho plantas impecables: ni el phishing, ni los USB perdidos, ni los deepfakes han encontrado una sola grieta. Obra maestra.";
    } else if (pct >= 70) {
      rango = "Estructura Sólida";
      mensaje = "La torre se sostiene con elegancia. Hay alguna grieta que repasar en la próxima revisión, pero los proyectos del estudio duermen tranquilos.";
    } else {
      rango = "Obra con Desperfectos";
      mensaje = "Se tiene en pie, pero el aparejador tiene la ceja levantada. Demasiados daños estructurales: repasa las explicaciones antes de la próxima inspección.";
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
    <div class="end-stat"><b>${aciertos} / ${setPartida.length}</b><span>Plantas</span></div>
    <div class="end-stat"><b>${vidas}</b><span>Vidas restantes</span></div>
    <div class="end-stat"><b>${puntos}</b><span>Puntos ronda</span></div>
  `;

  const quedan = hayPreguntasRestantes(POOL_CIBERGAME3, sesion.usadas);
  if (!quedan) sesion.agotada = true;

  let resumen = `<div class="sesion-row"><span>Total acumulado · ${sesion.rondas} ${sesion.rondas === 1 ? "obra" : "obras"}</span><b>${sesion.total} pts</b></div>`;
  if (rondaPerfecta) {
    resumen += `<div class="sesion-row racha"><span>Torre perfecta — racha ×${sesion.racha}</span><b>+${bonusRacha} pts de bonus</b></div>`;
    if (quedan) resumen += `<div class="sesion-row"><span>La racha sigue viva: la próxima torre perfecta vale +${BONUS_RACHA * (sesion.racha + 1)} pts</span></div>`;
  }
  if (!quedan) resumen += `<div class="sesion-row agotada"><span>¡Has completado TODAS las preguntas del juego!</span></div>`;
  $("end-session").innerHTML = resumen;

  // "Seguir construyendo" solo si quedan preguntas y NO has perdido la partida:
  // al quedarte sin vidas, la sesión termina (vas a la clasificación).
  $("btn-restart").style.display = (quedan && superada) ? "" : "none";
}

/* ─── Fin de sesión: registrar y mostrar clasificación ─── */
function terminarSesion() {
  detenerTemporizador();
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
$("btn-restart").onclick = empezarPartida;        // seguir construyendo (misma sesión)
$("btn-finish").onclick = terminarSesion;         // terminar y ver clasificación
$("btn-again").onclick = () => mostrarPantalla("start-screen");
