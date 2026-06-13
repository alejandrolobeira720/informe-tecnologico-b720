/* =====================================================
   ANIMACIÓN FINAL CAD — CIBERGAMES b720
   Dibuja "a mano" (estilo AutoCAD/plano azul) en la pantalla
   final: un skyline estilizado y reconocible que se autodibuja,
   ALTERNANDO Madrid / Barcelona en cada partida.
   En el Cibergame 3 además se bocetan tantas torres como rondas
   hayas jugado (cadTorres).
   El trazado usa pathLength="1" + stroke-dashoffset animado por CSS
   (clase .cad-draw, keyframes en leaderboard.css). Respeta
   prefers-reduced-motion (ahí se muestra el dibujo ya terminado).
   ===================================================== */

/* Alterna la ciudad en cada llamada y la recuerda entre partidas */
function cadSiguienteCiudad() {
  let n = 0;
  try { n = parseInt(localStorage.getItem("b720_cad_ciudad") || "0", 10) || 0; } catch (e) {}
  try { localStorage.setItem("b720_cad_ciudad", String(n + 1)); } catch (e) {}
  return (n % 2 === 0) ? "madrid" : "barcelona";
}

/* Envuelve los trazos en un <svg> y los marca para animarse en orden */
function cadSvg(viewBox, trazos, claseExtra) {
  const cls = "cad-svg" + (claseExtra ? " " + claseExtra : "");
  let i = 0;
  // A cada figura le añadimos pathLength="1", la clase .cad-draw y un retardo escalonado
  const body = trazos.replace(/<(path|line|rect|circle|polyline|ellipse)\b/g, function (m, tag) {
    const delay = (i * 0.09).toFixed(2);
    i++;
    return "<" + tag + ' pathLength="1" class="cad-draw" style="animation-delay:' + delay + 's"';
  });
  return '<svg class="' + cls + '" viewBox="' + viewBox + '" fill="none" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + body + "</svg>";
}

/* —— Skylines estilizados (líneas simples, reconocibles) —— */
function cadCiudadTrazos(ciudad) {
  if (ciudad === "barcelona") {
    // Retícula del Eixample + Sagrada Família + Torre Glòries
    return [
      '<line x1="0" y1="170" x2="400" y2="170"/>',
      // Eixample: bloques con esquinas achaflanadas (abajo izquierda)
      '<path d="M20 170 L20 150 L28 142 L60 142 L68 150 L68 170"/>',
      '<path d="M80 170 L80 150 L88 142 L120 142 L128 150 L128 170"/>',
      '<path d="M28 156 L60 156 M88 156 L120 156"/>',
      // Sagrada Família: cuatro torres cónicas con remate
      '<path d="M170 170 L176 70 L182 170"/>',
      '<path d="M186 170 L193 50 L200 170"/>',
      '<path d="M204 170 L211 60 L218 170"/>',
      '<path d="M220 170 L226 84 L232 170"/>',
      '<circle cx="193" cy="48" r="3"/>',
      '<circle cx="176" cy="68" r="2.4"/>',
      '<circle cx="211" cy="58" r="2.4"/>',
      // Torre Glòries (Agbar): proyectil
      '<path d="M330 170 L330 120 C330 92 348 78 348 78 C348 78 366 92 366 120 L366 170"/>',
      '<line x1="330" y1="140" x2="366" y2="140"/>'
    ].join("");
  }
  // Madrid: Puerta de Alcalá + Metrópolis + Cuatro Torres
  return [
    '<line x1="0" y1="170" x2="400" y2="170"/>',
    // Puerta de Alcalá (izquierda): cornisa + tres arcos
    '<rect x="24" y="108" width="116" height="14"/>',
    '<path d="M30 170 L30 122 M52 170 L52 122 M88 170 L88 122 M112 170 L112 122 M134 170 L134 122"/>',
    '<path d="M32 122 C32 110 50 110 50 122 M90 122 C90 108 110 108 110 122"/>',
    // Metrópolis (centro): cuerpo + cúpula + remate
    '<path d="M180 170 L180 116 L214 116 L214 170"/>',
    '<path d="M180 116 C180 92 214 92 214 116"/>',
    '<line x1="197" y1="92" x2="197" y2="78"/>',
    '<circle cx="197" cy="75" r="3"/>',
    // Cuatro Torres (derecha), alturas y remates distintos
    '<path d="M300 170 L300 54 L318 54 L318 170"/>',
    '<path d="M326 170 L326 40 L344 40 L344 170"/>',
    '<path d="M352 170 L352 64 L368 48 L368 170"/>',
    '<path d="M374 170 L374 70 L390 70 L390 170"/>',
    '<line x1="335" y1="40" x2="335" y2="28"/>'
  ].join("");
}

/* Dibuja la ciudad de fondo (alternando) dentro de `cont` */
function cadCiudad(cont) {
  if (!cont) return;
  const ciudad = cadSiguienteCiudad();
  cont.innerHTML = cadSvg("0 0 400 180", cadCiudadTrazos(ciudad), "cad-ciudad cad-" + ciudad);
  cont.setAttribute("data-ciudad", ciudad);
}

/* —— Torres del Cibergame 3: una por ronda jugada —— */
function cadTorreTrazos(n) {
  n = Math.max(1, Math.min(n || 1, 12)); // tope de seguridad
  const W = 400, base = 170;
  const hueco = W / n;
  const ancho = Math.min(34, hueco * 0.6);
  let out = ['<line x1="0" y1="170" x2="400" y2="170"/>'];
  for (let i = 0; i < n; i++) {
    const cx = hueco * (i + 0.5);
    const x = cx - ancho / 2;
    // Altura escalonada para que parezca un skyline variado pero acotado
    const alt = 70 + ((i % 3) * 22);
    const top = base - alt;
    const w = ancho;
    // Cuerpo con un retranqueo + corona
    const ret = top + alt * 0.45;
    out.push('<path d="M' + x.toFixed(1) + ' ' + base + ' L' + x.toFixed(1) + ' ' + ret.toFixed(1) +
             ' L' + (x + w * 0.15).toFixed(1) + ' ' + ret.toFixed(1) +
             ' L' + (x + w * 0.15).toFixed(1) + ' ' + top.toFixed(1) +
             ' L' + (x + w * 0.85).toFixed(1) + ' ' + top.toFixed(1) +
             ' L' + (x + w * 0.85).toFixed(1) + ' ' + ret.toFixed(1) +
             ' L' + (x + w).toFixed(1) + ' ' + ret.toFixed(1) +
             ' L' + (x + w).toFixed(1) + ' ' + base + '"/>');
    // Antena/remate
    out.push('<line x1="' + cx.toFixed(1) + '" y1="' + top.toFixed(1) + '" x2="' + cx.toFixed(1) + '" y2="' + (top - 12).toFixed(1) + '"/>');
    // Un par de plantas (líneas horizontales)
    out.push('<line x1="' + (x + w * 0.15).toFixed(1) + '" y1="' + (top + alt * 0.18).toFixed(1) + '" x2="' + (x + w * 0.85).toFixed(1) + '" y2="' + (top + alt * 0.18).toFixed(1) + '"/>');
  }
  return out.join("");
}

/* Dibuja N torres (= rondas jugadas) dentro de `cont` */
function cadTorres(cont, n) {
  if (!cont) return;
  cont.innerHTML = cadSvg("0 0 400 180", cadTorreTrazos(n), "cad-torres");
}
