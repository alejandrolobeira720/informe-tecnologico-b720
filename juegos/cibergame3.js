/* =====================================================
   CIBERGAME 3 — LA TORRE CIBERRESILIENTE
   Mismo esqueleto que el Cibergame 2 (motor-juego.js), pero con
   dos mecánicas PROPIAS que viven aquí:
     · Temporizador por pregunta (agotarlo cuenta como fallo).
     · Una torre que se construye: cada acierto levanta una planta,
       cada fallo la agrieta; torre perfecta (8/8) → coronación.
   Piscina: POOL_CIBERGAME3 (preguntas.js).
   ===================================================== */

const TOTAL_PLANTAS = 8;

/* Segundos por categoría: las difíciles dan más margen de lectura */
const TIEMPO_CATEGORIA = { facil: 25, media: 30, dificil: 40, extrema: 50 };

/* ─── Temporizador ─── */
let temporizador = null;
let segundosRestantes = 0;
let segundosTotales = 0;

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
      responder(-1, true); // -1 = sin elección; true = por tiempo agotado
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
  $("floors-built").textContent = estado.aciertos;

  // Torre perfecta (8/8): coronación + celebración (ventanas encendidas
  // y la bolita rebotando por los retranqueos hasta el suelo)
  if (estado.aciertos === TOTAL_PLANTAS) {
    $("tower-crown").classList.add("show");
    $("tower-svg").classList.add("tower-complete");
  }
}

function dañarPlanta(indice) {
  const planta = $("floor-" + indice);
  if (planta) planta.classList.add("damaged");
}

function resetearTorre() {
  document.querySelectorAll(".floor").forEach(f => f.classList.remove("built", "damaged"));
  $("tower-svg").classList.remove("tower-complete");
  $("tower-crown").classList.remove("show");
  $("floors-built").textContent = "0";
}

/* ─── Configuración del juego para el motor ─── */
arrancarJuego({
  pool: POOL_CIBERGAME3,
  claveLb: "b720_lb_cibergame3",
  vidas: 3,
  bonusRacha: 25, // bonus por torre perfecta = 25 × racha

  etiquetas: {
    stat: "Plantas",
    ronda1: "obra",
    rondaN: "obras",
    perfecta: "Torre perfecta",
    seguir: "Seguir construyendo",
    continuar: "Siguiente planta",
    finalizar: "Finalizar obra"
  },

  /* Hooks de las mecánicas propias */
  alIniciarRonda: resetearTorre,
  alCargarPregunta: pregunta => iniciarTemporizador(pregunta.cat),
  antesDeResponder: detenerTemporizador,
  alTerminarSesion: detenerTemporizador,
  trasResultado(esCorrecta, indice) {
    if (esCorrecta) construirPlanta(indice);
    else dañarPlanta(indice);
  },
  // Tantas torres bocetadas como rondas jugadas (la actual incluida).
  // Se llama antes de incrementar el contador de rondas → +1.
  alFinalizarRonda() {
    if (typeof cadTorres === "function") cadTorres($("end-tower"), estado.sesion.rondas + 1);
  },

  /* Texto del feedback tras cada respuesta */
  feedback(esCorrecta, agotado, pregunta) {
    if (esCorrecta) {
      return {
        veredicto: "Planta asegurada",
        puntos: "+" + PUNTOS_CATEGORIA[pregunta.cat] + " pts",
        texto: pregunta.explicacion
      };
    }
    if (agotado) {
      return {
        veredicto: "Tiempo agotado — vida perdida",
        puntos: "+0 pts",
        texto: "En ciberseguridad dudar demasiado también es un riesgo: los protocolos existen para decidir rápido. " + pregunta.explicacion
      };
    }
    return {
      veredicto: "Daño estructural — vida perdida",
      puntos: "+0 pts",
      texto: pregunta.explicacion
    };
  },

  /* Rango y mensaje de la pantalla final, según el % de aciertos */
  resultado(pct, superada) {
    if (!superada) {
      return {
        eyebrow: "Obra paralizada",
        rango: "Demolición técnica",
        mensaje: "Tres fallos estructurales: la inspección de seguridad ha precintado la obra. El ransomware campa por el servidor y los planos son ahora papel mojado digital. Vuelve a los cimientos y reconstruye con cabeza."
      };
    }
    if (pct >= 95) {
      return {
        eyebrow: "Obra finalizada",
        rango: "Torre Blindada",
        mensaje: "Certificación de ciberseguridad con honores. Ocho plantas impecables: ni el phishing, ni los USB perdidos, ni los deepfakes han encontrado una sola grieta. Obra maestra."
      };
    }
    if (pct >= 70) {
      return {
        eyebrow: "Obra finalizada",
        rango: "Estructura Sólida",
        mensaje: "La torre se sostiene con elegancia. Hay alguna grieta que repasar en la próxima revisión, pero los proyectos del estudio duermen tranquilos."
      };
    }
    return {
      eyebrow: "Obra finalizada",
      rango: "Obra con Desperfectos",
      mensaje: "Se tiene en pie, pero el aparejador tiene la ceja levantada. Demasiados daños estructurales: repasa las explicaciones antes de la próxima inspección."
    };
  }
});
