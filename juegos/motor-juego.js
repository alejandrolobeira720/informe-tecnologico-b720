/* =====================================================
   MOTOR DE JUEGO COMPARTIDO — CIBERGAMES b720
   -----------------------------------------------------
   PARA LOS DEVS:
   Cibergame 2 y Cibergame 3 son DOS juegos distintos, pero comparten
   casi todo el esqueleto (vidas, puntuación, render de pregunta, sesión
   encadenada, racha y clasificación). Para no tener ese código copiado
   en dos sitios, vive aquí UNA sola vez.

   Cada juego (cibergame2.js / cibergame3.js) solo hace dos cosas:
     1. Define lo SUYO (mensajes, temporizador, torre…).
     2. Llama a arrancarJuego(config) pasándole esas particularidades.

   El "estado" de la ronda en curso está en el objeto `estado`. El motor
   lo va rellenando; los juegos solo lo leen en sus hooks.

   ── CONTRATO DE config (lo que cada juego entrega a arrancarJuego) ──
     pool          Array de preguntas del juego (POOL_CIBERGAMEx).
     claveLb       Clave de la clasificación en almacenamiento.
     vidas         Vidas por ronda (3).
     bonusRacha    Puntos extra por ronda perfecta = bonusRacha × racha.
     etiquetas     { stat, ronda1, rondaN, perfecta, seguir, continuar, finalizar }
                    · stat     → rótulo de la 1ª estadística ("Aciertos"/"Plantas")
                    · ronda1   → "ronda"/"obra" (singular)
                    · rondaN   → "rondas"/"obras" (plural)
                    · perfecta → "Ronda perfecta"/"Torre perfecta"
                    · seguir   → botón de seguir jugando ("Seguir jugando"/"Seguir construyendo")
                    · continuar→ botón entre preguntas ("Continuar"/"Siguiente planta")
                    · finalizar→ botón en la última pregunta ("Finalizar simulación"/"Finalizar obra")
     resultado(pct, superada) → { eyebrow, rango, mensaje }  (textos del final)
     feedback(esCorrecta, agotado, pregunta) → { veredicto, puntos, texto }

   ── HOOKS opcionales (se llaman si existen; el motor no los exige) ──
     alIniciarRonda()                  Antes de la 1ª pregunta (p.ej. resetear torre).
     alCargarPregunta(pregunta)        Al pintar cada pregunta (p.ej. arrancar temporizador).
     antesDeResponder()                Justo al responder (p.ej. detener temporizador).
     trasResultado(esCorrecta, indice, pregunta)  Después de puntuar (p.ej. construir/dañar planta).
     alFinalizarRonda(superada)        En la pantalla final (p.ej. dibujar torres).
     alTerminarSesion()                Al ir a la clasificación (p.ej. detener temporizador).
   ===================================================== */

/* Atajo y estado compartido de la ronda en curso */
const $ = id => document.getElementById(id);

const estado = {
  config: null,
  sesion: null,        // { nombre, total, racha, fallos, rondas, usadas:Set, agotada }
  setPartida: [],      // preguntas de la ronda actual
  indice: 0,           // pregunta en pantalla
  vidas: 0,
  puntos: 0,
  aciertos: 0,
  opciones: null       // { opciones, correcta } ya barajadas de la pregunta actual
};

/* ─── Navegación entre pantallas ─── */
function mostrarPantalla(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
}

/* ─── HUD: vidas, puntos y progreso ─── */
function pintarVidas() {
  const cont = $("lives");
  cont.innerHTML = "";
  for (let i = 0; i < estado.config.vidas; i++) {
    const v = document.createElement("span");
    v.className = "life" + (i < estado.vidas ? "" : " lost");
    cont.appendChild(v);
  }
}

function pintarPuntos() {
  $("score").textContent = String(estado.puntos).padStart(3, "0");
}

function pintarProgreso() {
  const n = estado.indice + 1;
  $("q-counter").textContent =
    String(n).padStart(2, "0") + " / " + String(estado.setPartida.length).padStart(2, "0");
  $("progress-fill").style.width = (estado.indice / estado.setPartida.length) * 100 + "%";
}

/* ─── Inicio de una ronda de la sesión ─── */
function empezarRonda() {
  const set = generarSetPartidaSinRepetir(estado.config.pool, estado.sesion.usadas);
  if (!set) { terminarSesion(); return; } // piscina agotada → a la clasificación
  set.forEach(q => estado.sesion.usadas.add(q.pregunta));

  estado.setPartida = set;
  estado.indice = 0;
  estado.vidas = estado.config.vidas;
  estado.puntos = 0;
  estado.aciertos = 0;

  if (estado.config.alIniciarRonda) estado.config.alIniciarRonda();

  mostrarPantalla("game-screen");
  pintarVidas();
  pintarPuntos();
  cargarPregunta();
}

/* ─── Render de la pregunta en pantalla ─── */
function cargarPregunta() {
  const pregunta = estado.setPartida[estado.indice];
  estado.opciones = prepararOpciones(pregunta);

  pintarProgreso();

  const chip = $("chip-cat");
  chip.textContent = ETIQUETA_CATEGORIA[pregunta.cat];
  chip.className = "chip cat-" + pregunta.cat;

  $("q-tema").textContent = pregunta.tema;
  $("q-text").textContent = pregunta.pregunta;

  const cont = $("options");
  cont.innerHTML = "";
  const letras = ["A", "B", "C", "D"];
  estado.opciones.opciones.forEach((texto, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerHTML = `<span class="option-letter">${letras[i]}</span><span>${texto}</span>`;
    btn.onclick = () => responder(i);
    cont.appendChild(btn);
  });

  // Reset del feedback y re-disparo de la animación de entrada
  $("feedback").className = "feedback";
  const area = $("question-area");
  area.classList.remove("fade-out");
  area.style.animation = "none";
  void area.offsetWidth; // reflow para reiniciar la animación
  area.style.animation = "";

  if (estado.config.alCargarPregunta) estado.config.alCargarPregunta(pregunta);
}

/* Marca las opciones tras responder. indiceElegido = -1 cuando no hubo
   elección (tiempo agotado): solo se resalta la correcta. */
function marcarOpciones(indiceElegido) {
  document.querySelectorAll(".option").forEach((b, i) => {
    b.disabled = true;
    if (i === estado.opciones.correcta) b.classList.add("is-correct");
    else if (i === indiceElegido) b.classList.add("is-wrong");
    else b.classList.add("is-muted");
  });
}

/* ─── Respuesta del jugador ───
   indiceElegido: opción pulsada (0-3) o -1 si se agotó el tiempo.
   agotado: true solo cuando lo llama el temporizador. */
function responder(indiceElegido, agotado) {
  if (estado.config.antesDeResponder) estado.config.antesDeResponder();

  const pregunta = estado.setPartida[estado.indice];
  const esCorrecta = indiceElegido === estado.opciones.correcta;
  marcarOpciones(indiceElegido);

  if (esCorrecta) {
    estado.puntos += PUNTOS_CATEGORIA[pregunta.cat];
    estado.aciertos++;
    pintarPuntos();
  } else {
    estado.vidas--;
    estado.sesion.fallos++;
    pintarVidas();
  }

  if (estado.config.trasResultado) estado.config.trasResultado(esCorrecta, estado.indice, pregunta);

  const t = estado.config.feedback(esCorrecta, !!agotado, pregunta);
  mostrarFeedback(esCorrecta, t.veredicto, t.puntos, t.texto);
}

/* ─── Feedback + botón de avance ─── */
function mostrarFeedback(bien, veredicto, puntos, texto) {
  const feedback = $("feedback");
  feedback.classList.add("show", bien ? "good" : "bad");
  $("feedback-verdict").textContent = veredicto;
  $("feedback-points").textContent = puntos;
  $("feedback-text").textContent = texto;

  const btnNext = $("btn-next");
  if (estado.vidas === 0) {
    btnNext.textContent = "Ver resultado";
    btnNext.onclick = () => finalizarRonda(false);
  } else if (estado.indice === estado.setPartida.length - 1) {
    btnNext.textContent = estado.config.etiquetas.finalizar;
    btnNext.onclick = () => finalizarRonda(true);
  } else {
    btnNext.textContent = estado.config.etiquetas.continuar;
    btnNext.onclick = siguientePregunta;
  }

  feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function siguientePregunta() {
  const area = $("question-area");
  area.classList.add("fade-out");
  setTimeout(() => {
    estado.indice++;
    cargarPregunta();
  }, 250);
}

/* ─── Pantalla final de la ronda ─── */
function finalizarRonda(superada) {
  const cfg = estado.config;
  mostrarPantalla("end-screen");

  const inner = document.querySelector(".end-inner");
  inner.classList.toggle("gameover", !superada);

  // Plano CAD de fondo (alterna Madrid/Barcelona) — común a los dos juegos
  if (typeof cadCiudad === "function") cadCiudad($("cad-bg"));
  if (cfg.alFinalizarRonda) cfg.alFinalizarRonda(superada);

  // Resultado por PORCENTAJE de aciertos de la ronda (no por puntos brutos,
  // que dependían del tamaño de la ronda y daban rangos engañosos).
  const pct = estado.setPartida.length ? Math.round((estado.aciertos / estado.setPartida.length) * 100) : 0;
  $("end-score").textContent = pct;
  const lblScore = document.querySelector(".end-score-label");
  if (lblScore) lblScore.textContent = "% de aciertos";

  const r = cfg.resultado(pct, superada);
  $("end-eyebrow").textContent = r.eyebrow;
  $("end-rank").textContent = r.rango;
  $("end-message").textContent = r.mensaje;

  // Acumulado de sesión y racha de rondas perfectas
  const rondaPerfecta = superada && estado.aciertos === estado.setPartida.length;
  let bonusRacha = 0;
  if (rondaPerfecta) {
    estado.sesion.racha++;
    bonusRacha = cfg.bonusRacha * estado.sesion.racha;
  } else {
    estado.sesion.racha = 0;
  }
  estado.sesion.total += estado.puntos + bonusRacha;
  estado.sesion.rondas++;

  $("end-stats").innerHTML = `
    <div class="end-stat"><b>${estado.aciertos} / ${estado.setPartida.length}</b><span>${cfg.etiquetas.stat}</span></div>
    <div class="end-stat"><b>${estado.vidas}</b><span>Vidas restantes</span></div>
    <div class="end-stat"><b>${estado.puntos}</b><span>Puntos ronda</span></div>
  `;

  const quedan = hayPreguntasRestantes(cfg.pool, estado.sesion.usadas);
  if (!quedan) estado.sesion.agotada = true;

  const nRondas = estado.sesion.rondas;
  let resumen = `<div class="sesion-row"><span>Total acumulado · ${nRondas} ${nRondas === 1 ? cfg.etiquetas.ronda1 : cfg.etiquetas.rondaN}</span><b>${estado.sesion.total} pts</b></div>`;
  if (rondaPerfecta) {
    resumen += `<div class="sesion-row racha"><span>${cfg.etiquetas.perfecta} — racha ×${estado.sesion.racha}</span><b>+${bonusRacha} pts de bonus</b></div>`;
    if (quedan) resumen += `<div class="sesion-row"><span>La racha sigue viva: la próxima ${cfg.etiquetas.perfecta.toLowerCase()} vale +${cfg.bonusRacha * (estado.sesion.racha + 1)} pts</span></div>`;
  }
  if (!quedan) resumen += `<div class="sesion-row agotada"><span>¡Has completado TODAS las preguntas del juego!</span></div>`;
  $("end-session").innerHTML = resumen;

  // "Seguir jugando" solo si quedan preguntas y NO has perdido la partida:
  // al quedarte sin vidas, la sesión termina (vas a la clasificación).
  const btnRestart = $("btn-restart");
  btnRestart.textContent = cfg.etiquetas.seguir;
  btnRestart.style.display = (quedan && superada) ? "" : "none";
}

/* ─── Fin de sesión: registrar y mostrar clasificación ─── */
function terminarSesion() {
  if (estado.config.alTerminarSesion) estado.config.alTerminarSesion();

  const s = estado.sesion;
  const res = lbRegistrar(estado.config.claveLb, s.nombre, s.total);
  const perfecta = s.rondas > 0 && s.fallos === 0;
  const brillar = res.posicion === 1 || perfecta;

  let msg;
  if (res.posicion === 1) {
    msg = `${s.nombre}, eres el número 1 de la clasificación con ${res.mejor} puntos.`;
  } else if (res.posicion !== null && res.posicion <= 5) {
    msg = `¡Enhorabuena, ${s.nombre}! Estás en el TOP ${res.posicion} de la clasificación.`;
  } else {
    msg = `Sesión registrada: ${s.total} puntos${res.mejor > s.total ? ` (tu mejor marca: ${res.mejor})` : ""}. ¡Sigue entrenando!`;
  }
  if (perfecta) {
    msg += s.agotada
      ? ` Y además, TODAS las preguntas del juego respondidas sin un solo fallo. Leyenda de la ciberseguridad.`
      : ` Sesión PERFECTA: ${s.usadas.size} preguntas sin un solo fallo.`;
  }
  $("lb-congrats").textContent = msg;

  lbRender($("lb-list"), res.lista, s.nombre, brillar);
  mostrarPantalla("lb-screen");
}

/* ─── Arranque ─── Cada juego llama a esto con su configuración.
   Aquí se cablean los botones comunes (inicio, seguir, terminar, otra vez). */
function arrancarJuego(config) {
  estado.config = config;

  const leerNombre = lbConectarNombre($("player-name"), $("btn-start"));

  $("btn-start").onclick = () => {
    const nombre = leerNombre();
    if (nombre.length < 2) return;
    lbGuardarNombre(nombre);
    estado.sesion = { nombre: nombre, total: 0, racha: 0, fallos: 0, rondas: 0, usadas: new Set(), agotada: false };
    empezarRonda();
  };
  $("btn-restart").onclick = empezarRonda;          // seguir jugando (misma sesión)
  $("btn-finish").onclick = terminarSesion;         // terminar y ver clasificación
  $("btn-again").onclick = () => mostrarPantalla("start-screen");
}
