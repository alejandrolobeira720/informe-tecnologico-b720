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

/* ─── Inicio ─── */
function empezarPartida() {
  setPartida = generarSetPartida(POOL_CIBERGAME3);
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

  // Clonamos la torre tal y como quedó para la pantalla final
  const contTorre = $("end-tower");
  contTorre.innerHTML = "";
  contTorre.appendChild($("tower-svg").cloneNode(true));

  $("end-score").textContent = puntos;

  let rango, mensaje;
  if (!superada) {
    $("end-eyebrow").textContent = "Obra paralizada";
    rango = "Demolición técnica";
    mensaje = "Tres fallos estructurales: la inspección de seguridad ha precintado la obra. El ransomware campa por el servidor y los planos son ahora papel mojado digital. Vuelve a los cimientos y reconstruye con cabeza.";
  } else {
    $("end-eyebrow").textContent = "Obra finalizada";
    if (puntos >= 95) {
      rango = "Torre Blindada";
      mensaje = "Certificación de ciberseguridad con honores. Ocho plantas impecables: ni el phishing, ni los USB perdidos, ni los deepfakes han encontrado una sola grieta. Obra maestra.";
    } else if (puntos >= 70) {
      rango = "Estructura Sólida";
      mensaje = "La torre se sostiene con elegancia. Hay alguna grieta que repasar en la próxima revisión, pero los proyectos del estudio duermen tranquilos.";
    } else {
      rango = "Obra con Desperfectos";
      mensaje = "Se tiene en pie, pero el aparejador tiene la ceja levantada. Demasiados daños estructurales: repasa las explicaciones antes de la próxima inspección.";
    }
  }

  $("end-rank").textContent = rango;
  $("end-message").textContent = mensaje;

  $("end-stats").innerHTML = `
    <div class="end-stat"><b>${aciertos} / ${TOTAL_PLANTAS}</b><span>Plantas</span></div>
    <div class="end-stat"><b>${vidas}</b><span>Vidas restantes</span></div>
    <div class="end-stat"><b>${puntos}</b><span>Puntos</span></div>
  `;
}

/* ─── Listeners ─── */
$("btn-start").onclick = empezarPartida;
$("btn-restart").onclick = empezarPartida;
