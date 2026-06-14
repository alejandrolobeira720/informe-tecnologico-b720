/* =====================================================
   CIBERGAME 2 — PROTOCOLO DE SEGURIDAD
   Quiz de decisiones de ciberseguridad. Toda la mecánica común
   (vidas, puntos, render, sesión, racha, clasificación) está en
   motor-juego.js; aquí solo va LO PROPIO de este juego: sus textos.

   Reglas: 8 preguntas por ronda · 3 vidas ·
   las 3 últimas suben el listón (2 difíciles + 1 extrema).
   Piscina: POOL_CIBERGAME2 (preguntas.js).
   ===================================================== */

arrancarJuego({
  pool: POOL_CIBERGAME2,
  claveLb: "b720_lb_cibergame2",
  vidas: 3,
  bonusRacha: 25, // bonus por ronda perfecta = 25 × racha

  etiquetas: {
    stat: "Aciertos",
    ronda1: "ronda",
    rondaN: "rondas",
    perfecta: "Ronda perfecta",
    seguir: "Seguir jugando",
    continuar: "Continuar",
    finalizar: "Finalizar simulación"
  },

  /* Texto del feedback tras cada respuesta */
  feedback(esCorrecta, agotado, pregunta) {
    if (esCorrecta) {
      return {
        veredicto: "Correcto — protocolo aplicado",
        puntos: "+" + PUNTOS_CATEGORIA[pregunta.cat] + " pts",
        texto: pregunta.explicacion
      };
    }
    return {
      veredicto: "Fallo de seguridad — vida perdida",
      puntos: "+0 pts",
      texto: pregunta.explicacion
    };
  },

  /* Rango y mensaje de la pantalla final, según el % de aciertos */
  resultado(pct, superada) {
    if (!superada) {
      return {
        eyebrow: "Simulación interrumpida",
        rango: "Brecha de seguridad",
        mensaje: "Tres fallos críticos: el estudio ha sido comprometido. Los planos del concurso ya circulan por foros rusos con marca de agua ajena. Repite el protocolo: la próxima vez, desconfía antes de hacer clic."
      };
    }
    if (pct >= 95) {
      return {
        eyebrow: "Simulación finalizada",
        rango: "Hacker de Hormigón",
        mensaje: "Protocolo impecable. Tu red es más sólida que un muro de carga: los atacantes ven tu IP y se van a probar suerte con otro estudio."
      };
    }
    if (pct >= 70) {
      return {
        eyebrow: "Simulación finalizada",
        rango: "Arquitecto Blindado",
        mensaje: "Buen criterio bajo presión. Algún descuido puntual, pero el estudio sigue en pie y los proyectos, a salvo. Un repaso más y serás impenetrable."
      };
    }
    return {
      eyebrow: "Simulación finalizada",
      rango: "Arquitecto en Prácticas",
      mensaje: "Has sobrevivido, pero por poco. Demasiadas decisiones al límite: repasa las explicaciones y vuelve a intentarlo antes de que llegue un ataque real."
    };
  }
});
