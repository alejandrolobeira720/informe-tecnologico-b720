/* =====================================================
   ANIMACIÓN FINAL CAD — CIBERGAMES b720
   En la pantalla final se autodibuja, estilo AutoCAD/plano,
   un PLANO CENITAL (vista aérea) de la ciudad, trazándose
   poco a poco DESDE EL CENTRO HACIA FUERA, de fondo.
   Alterna Madrid (trazado radial desde Sol + anillos) y
   Barcelona (retícula del Eixample + Diagonal) en cada partida.
   En el Cibergame 3 además se bocetan tantas torres (en alzado)
   como rondas hayas jugado (cadTorres).
   Trazado: pathLength="1" + stroke-dashoffset animado por CSS
   (clase .cad-draw, keyframes en leaderboard.css). El orden de
   dibujo va de dentro hacia fuera. Respeta prefers-reduced-motion.
   ===================================================== */

/* Alterna la ciudad en cada llamada y la recuerda entre partidas */
function cadSiguienteCiudad() {
  let n = 0;
  try { n = parseInt(localStorage.getItem("b720_cad_ciudad") || "0", 10) || 0; } catch (e) {}
  try { localStorage.setItem("b720_cad_ciudad", String(n + 1)); } catch (e) {}
  return (n % 2 === 0) ? "madrid" : "barcelona";
}

/* Envuelve los trazos (ya ordenados) en un <svg>; cada figura se anima
   en orden con un retardo escalonado → efecto de dibujo progresivo. */
function cadSvg(viewBox, trazos, claseExtra, par) {
  const cls = "cad-svg" + (claseExtra ? " " + claseExtra : "");
  const aspecto = par || "xMidYMax meet";
  let i = 0;
  const body = trazos.replace(/<(path|line|rect|circle|polyline|ellipse)\b/g, function (m, tag) {
    const delay = (i * 0.05).toFixed(2);
    i++;
    return "<" + tag + ' pathLength="1" class="cad-draw" style="animation-delay:' + delay + 's"';
  });
  return '<svg class="' + cls + '" viewBox="' + viewBox + '" fill="none" preserveAspectRatio="' + aspecto + '" aria-hidden="true">' + body + "</svg>";
}

/* —— Barcelona: retícula del Eixample (manzanas octagonales) + Diagonal —— */
function cadTrazosBarcelona() {
  const cx = 200, cy = 150, pitch = 50, size = 38, ch = 9, R = 2; // rejilla 5x5
  const arr = [];
  for (let i = -R; i <= R; i++) {
    for (let j = -R; j <= R; j++) {
      const bx = cx + i * pitch, by = cy + j * pitch;
      const x0 = bx - size / 2, y0 = by - size / 2, x1 = bx + size / 2, y1 = by + size / 2;
      const d = "M" + (x0 + ch) + " " + y0 + " L" + (x1 - ch) + " " + y0 +
                " L" + x1 + " " + (y0 + ch) + " L" + x1 + " " + (y1 - ch) +
                " L" + (x1 - ch) + " " + y1 + " L" + (x0 + ch) + " " + y1 +
                " L" + x0 + " " + (y1 - ch) + " L" + x0 + " " + (y0 + ch) + " Z";
      arr.push({ m: '<path d="' + d + '"/>', r: Math.hypot(i, j) * pitch });
    }
  }
  // Avinguda Diagonal (cruza en diagonal, se traza al final)
  arr.push({ m: '<line x1="30" y1="70" x2="382" y2="288"/>', r: 9999 });
  arr.sort(function (a, b) { return a.r - b.r; });
  return arr.map(function (o) { return o.m; }).join("");
}

/* —— Madrid: trazado radial desde Puerta del Sol + anillos —— */
function cadTrazosMadrid() {
  const cx = 200, cy = 150;
  const arr = [];
  arr.push({ m: '<circle cx="' + cx + '" cy="' + cy + '" r="9"/>', r: 0 });
  // Calles radiales (irregulares) que salen del centro hacia fuera
  const ang = [4, 40, 78, 116, 150, 196, 232, 270, 312, 338];
  ang.forEach(function (a) {
    const rad = a * Math.PI / 180;
    const ex = (cx + Math.cos(rad) * 195).toFixed(1);
    const ey = (cy + Math.sin(rad) * 195).toFixed(1);
    arr.push({ m: '<line x1="' + cx + '" y1="' + cy + '" x2="' + ex + '" y2="' + ey + '"/>', r: 14 });
  });
  // Anillos concéntricos (estilo rondas/M-30) de dentro a fuera
  arr.push({ m: '<circle cx="' + cx + '" cy="' + cy + '" r="50"/>', r: 50 });
  arr.push({ m: '<circle cx="' + cx + '" cy="' + cy + '" r="102"/>', r: 102 });
  arr.push({ m: '<path d="M' + (cx - 156) + ' ' + cy + ' A156 132 0 1 1 ' + (cx + 156) + ' ' + cy + '"/>', r: 156 });
  arr.sort(function (a, b) { return a.r - b.r; });
  return arr.map(function (o) { return o.m; }).join("");
}

/* Dibuja el plano cenital de la ciudad (alternando) dentro de `cont` */
function cadCiudad(cont) {
  if (!cont) return;
  const ciudad = cadSiguienteCiudad();
  const trazos = ciudad === "barcelona" ? cadTrazosBarcelona() : cadTrazosMadrid();
  cont.innerHTML = cadSvg("0 0 400 300", trazos, "cad-ciudad cad-" + ciudad, "xMidYMid meet");
  cont.setAttribute("data-ciudad", ciudad);
}

/* —— Torres del Cibergame 3 (alzado): una por ronda jugada —— */
function cadTorreTrazos(n) {
  n = Math.max(1, Math.min(n || 1, 12));
  const W = 400, base = 170;
  const hueco = W / n;
  const ancho = Math.min(34, hueco * 0.6);
  let out = ['<line x1="0" y1="170" x2="400" y2="170"/>'];
  for (let i = 0; i < n; i++) {
    const cx = hueco * (i + 0.5);
    const x = cx - ancho / 2;
    const alt = 70 + ((i % 3) * 22);
    const top = base - alt;
    const w = ancho;
    const ret = top + alt * 0.45;
    out.push('<path d="M' + x.toFixed(1) + ' ' + base + ' L' + x.toFixed(1) + ' ' + ret.toFixed(1) +
             ' L' + (x + w * 0.15).toFixed(1) + ' ' + ret.toFixed(1) +
             ' L' + (x + w * 0.15).toFixed(1) + ' ' + top.toFixed(1) +
             ' L' + (x + w * 0.85).toFixed(1) + ' ' + top.toFixed(1) +
             ' L' + (x + w * 0.85).toFixed(1) + ' ' + ret.toFixed(1) +
             ' L' + (x + w).toFixed(1) + ' ' + ret.toFixed(1) +
             ' L' + (x + w).toFixed(1) + ' ' + base + '"/>');
    out.push('<line x1="' + cx.toFixed(1) + '" y1="' + top.toFixed(1) + '" x2="' + cx.toFixed(1) + '" y2="' + (top - 12).toFixed(1) + '"/>');
    out.push('<line x1="' + (x + w * 0.15).toFixed(1) + '" y1="' + (top + alt * 0.18).toFixed(1) + '" x2="' + (x + w * 0.85).toFixed(1) + '" y2="' + (top + alt * 0.18).toFixed(1) + '"/>');
  }
  return out.join("");
}

/* Dibuja N torres (= rondas jugadas) dentro de `cont` */
function cadTorres(cont, n) {
  if (!cont) return;
  cont.innerHTML = cadSvg("0 0 400 180", cadTorreTrazos(n), "cad-torres");
}
