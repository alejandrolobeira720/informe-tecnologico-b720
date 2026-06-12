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

const $ = id => document.getElementById(id);

/* ─── Navegación entre pantallas ─── */
function mostrarPantalla(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
}

/* ─── Inicio de partida ─── */
function empezarPartida() {
  setPartida = generarSetPartida(POOL_CIBERGAME2);
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

  $("end-score").textContent = puntos;

  let rango, mensaje;
  if (!superada) {
    $("end-eyebrow").textContent = "Simulación interrumpida";
    rango = "Brecha de seguridad";
    mensaje = "Tres fallos críticos: el estudio ha sido comprometido. Los planos del concurso ya circulan por foros rusos con marca de agua ajena. Repite el protocolo: la próxima vez, desconfía antes de hacer clic.";
  } else {
    $("end-eyebrow").textContent = "Simulación finalizada";
    if (puntos >= 95) {
      rango = "Hacker de Hormigón";
      mensaje = "Protocolo impecable. Tu red es más sólida que un muro de carga: los atacantes ven tu IP y se van a probar suerte con otro estudio.";
    } else if (puntos >= 70) {
      rango = "Arquitecto Blindado";
      mensaje = "Buen criterio bajo presión. Algún descuido puntual, pero el estudio sigue en pie y los proyectos, a salvo. Un repaso más y serás impenetrable.";
    } else {
      rango = "Arquitecto en Prácticas";
      mensaje = "Has sobrevivido, pero por poco. Demasiadas decisiones al límite: repasa las explicaciones y vuelve a intentarlo antes de que llegue un ataque real.";
    }
  }

  $("end-rank").textContent = rango;
  $("end-message").textContent = mensaje;

  $("end-stats").innerHTML = `
    <div class="end-stat"><b>${aciertos} / ${setPartida.length}</b><span>Aciertos</span></div>
    <div class="end-stat"><b>${vidas}</b><span>Vidas restantes</span></div>
    <div class="end-stat"><b>${puntos}</b><span>Puntos</span></div>
  `;
}

/* ─── Listeners ─── */
$("btn-start").onclick = empezarPartida;
$("btn-restart").onclick = empezarPartida;
