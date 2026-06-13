/* =====================================================
   ANIMACIÓN FINAL CAD — CIBERGAMES b720
   Plano CENITAL (vista aérea) de la ciudad, en líneas, que:
   1) arranca CERCA en el centro (zoom) y se expande a los lados,
   2) se aleja suavemente revelando cada vez más ciudad,
   3) se traza poco a poco DEL CENTRO HACIA FUERA.
   Alterna Madrid (radial: avenidas desde el centro, anillos, río
   y Retiro) y Barcelona (retícula del Eixample: primero las
   manzanas y luego las calles que las cortan, + Diagonal y puerto).
   En el Cibergame 3 además se bocetan tantas torres (alzado) como
   rondas hayas jugado.
   Trazado: pathLength="1" + stroke-dashoffset (clase .cad-draw).
   Zoom: scale sobre .cad-zoom. Respeta prefers-reduced-motion.
   ===================================================== */

function cadSiguienteCiudad() {
  let n = 0;
  try { n = parseInt(localStorage.getItem("b720_cad_ciudad") || "0", 10) || 0; } catch (e) {}
  try { localStorage.setItem("b720_cad_ciudad", String(n + 1)); } catch (e) {}
  return (n % 2 === 0) ? "madrid" : "barcelona";
}

/* Envuelve los trazos (ya ordenados centro→afuera) en un <svg>.
   El retardo se reparte en una ventana fija (no por nº de trazos),
   así la animación dura lo mismo aunque el plano sea muy denso.
   Las ciudades van en un grupo .cad-zoom (efecto de alejarse). */
function cadSvg(viewBox, trazos, claseExtra, par, conZoom) {
  const cls = "cad-svg" + (claseExtra ? " " + claseExtra : "");
  const aspecto = par || "xMidYMax meet";
  const total = (trazos.match(/<(path|line|rect|circle|polyline|ellipse)\b/g) || []).length || 1;
  const VENTANA = 2.8; // segundos en los que van apareciendo los trazos
  let i = 0;
  const body = trazos.replace(/<(path|line|rect|circle|polyline|ellipse)\b/g, function (m, tag) {
    const delay = (i / total * VENTANA).toFixed(2);
    i++;
    return "<" + tag + ' pathLength="1" class="cad-draw" style="animation-delay:' + delay + 's"';
  });
  const g = '<g class="cad-grupo' + (conZoom ? " cad-zoom" : "") + '">' + body + "</g>";
  return '<svg class="' + cls + '" viewBox="' + viewBox + '" fill="none" preserveAspectRatio="' + aspecto + '" aria-hidden="true">' + g + "</svg>";
}

function cadRnd(a, b) { return a + Math.random() * (b - a); }

/* Arco de anillo (ronda): elipse abierta con un hueco, no un círculo perfecto */
function cadArco(cx, cy, rx, ry, gapDeg) {
  const g = gapDeg * Math.PI / 180;
  const s = g + 0.28, e = g - 0.28; // ~32° de hueco
  const x1 = (cx + rx * Math.cos(s)).toFixed(1), y1 = (cy + ry * Math.sin(s)).toFixed(1);
  const x2 = (cx + rx * Math.cos(e)).toFixed(1), y2 = (cy + ry * Math.sin(e)).toFixed(1);
  return "M" + x1 + " " + y1 + " A" + rx + " " + ry + " 0 1 1 " + x2 + " " + y2;
}

/* —— MADRID: red de calles (radiales curvas + rondas abiertas + barrios
   en cuadrícula + río + Retiro). Sin manzanas sueltas ni círculos. —— */
function cadTrazosMadrid() {
  const cx = 200, cy = 148;
  const arr = [];
  const push = (m, r) => arr.push({ m: m, r: r });

  // Avenidas radiales que salen del centro, ligeramente curvadas
  const N = 16;
  for (let k = 0; k < N; k++) {
    const a = (k / N) * Math.PI * 2 + 0.15;
    const len = 95 + (k % 4) * 40;
    const ex = (cx + Math.cos(a) * len).toFixed(1), ey = (cy + Math.sin(a) * len).toFixed(1);
    const mx = (cx + Math.cos(a + 0.22) * len * 0.5).toFixed(1), my = (cy + Math.sin(a + 0.22) * len * 0.5).toFixed(1);
    push('<path d="M' + cx + ' ' + cy + ' Q' + mx + ' ' + my + ' ' + ex + ' ' + ey + '"/>', 16);
  }
  // Rondas (anillos abiertos, elípticos)
  push('<path d="' + cadArco(cx, cy, 46, 42, 95) + '"/>', 46);
  push('<path d="' + cadArco(cx, cy, 92, 82, 250) + '"/>', 92);
  push('<path d="' + cadArco(cx, cy, 150, 130, 30) + '"/>', 150);
  // Calles concéntricas cortas que tejen entre las radiales (rompen el vacío)
  [66, 118].forEach(function (ring) {
    for (let k = 0; k < 11; k++) {
      const a0 = (k / 11) * Math.PI * 2 + 0.1, a1 = a0 + 0.40;
      const x1 = (cx + ring * Math.cos(a0)).toFixed(1), y1 = (cy + ring * 0.9 * Math.sin(a0)).toFixed(1);
      const x2 = (cx + ring * Math.cos(a1)).toFixed(1), y2 = (cy + ring * 0.9 * Math.sin(a1)).toFixed(1);
      push('<path d="M' + x1 + ' ' + y1 + ' A' + ring + ' ' + (ring * 0.9).toFixed(0) + ' 0 0 1 ' + x2 + ' ' + y2 + '"/>', ring);
    }
  });
  // Barrios en cuadrícula (ensanche tipo Salamanca): calles que se cruzan
  function distrito(ox, oy, cols, rows, sp) {
    const w = cols * sp, h = rows * sp;
    const rr = Math.hypot(ox + w / 2 - cx, oy + h / 2 - cy);
    for (let c = 0; c <= cols; c++) push('<line x1="' + (ox + c * sp) + '" y1="' + oy + '" x2="' + (ox + c * sp) + '" y2="' + (oy + h) + '"/>', rr);
    for (let r2 = 0; r2 <= rows; r2++) push('<line x1="' + ox + '" y1="' + (oy + r2 * sp) + '" x2="' + (ox + w) + '" y2="' + (oy + r2 * sp) + '"/>', rr);
  }
  distrito(246, 64, 5, 4, 13);   // arriba derecha
  distrito(64, 196, 4, 4, 13);   // abajo izquierda
  // Río Manzanares (izquierda, serpenteante)
  push('<path d="M150 -10 C118 55 92 110 108 152 C124 194 150 240 116 310"/>', 95);
  // Parque del Retiro (recinto a la derecha del centro)
  push('<rect x="250" y="120" width="52" height="70" rx="9"/>', 70);

  arr.sort(function (a, b) { return a.r - b.r; });
  return arr.map(function (o) { return o.m; }).join("");
}

/* —— BARCELONA: retícula densa y uniforme del Eixample (manzanas
   achaflanadas separadas por calles finas), con corredores de avenidas
   diagonales y el puerto. Las calles son los huecos entre manzanas. —— */
function cadTrazosBarcelona() {
  const cx = 200, cy = 132, pitch = 27, size = 23, ch = 6, NX = 8, NY = 5, portY = 246;
  // Dos avenidas en diagonal: se trazan como corredores (sin manzanas encima)
  const diag = [
    { m: 0.60, b: cy - 0.60 * cx },
    { m: -0.95, b: cy + 0.95 * cx - 24 }
  ];
  const arr = [];
  for (let i = -NX; i <= NX; i++) {
    for (let j = -NY; j <= NY; j++) {
      const bx = cx + i * pitch, by = cy + j * pitch;
      if (by > portY) continue; // abajo queda el puerto
      let corredor = false;
      for (let d = 0; d < diag.length; d++) {
        if (Math.abs(diag[d].m * bx - by + diag[d].b) / Math.hypot(diag[d].m, 1) < 12) { corredor = true; break; }
      }
      if (corredor) continue;
      const x0 = bx - size / 2, y0 = by - size / 2, x1 = bx + size / 2, y1 = by + size / 2;
      const d = "M" + (x0 + ch) + " " + y0 + " L" + (x1 - ch) + " " + y0 +
                " L" + x1 + " " + (y0 + ch) + " L" + x1 + " " + (y1 - ch) +
                " L" + (x1 - ch) + " " + y1 + " L" + (x0 + ch) + " " + y1 +
                " L" + x0 + " " + (y1 - ch) + " L" + x0 + " " + (y0 + ch) + " Z";
      arr.push({ m: '<path d="' + d + '"/>', r: Math.hypot(bx - cx, by - cy) });
    }
  }
  arr.sort(function (a, b) { return a.r - b.r; });
  let out = arr.map(function (o) { return o.m; }).join("");
  // Puerto: línea de costa + diques (al final)
  out += '<path d="M0 ' + (portY + 8) + ' C80 ' + (portY + 3) + ' 150 ' + (portY + 20) + ' 220 ' + (portY + 13) + ' C290 ' + (portY + 7) + ' 350 ' + (portY + 22) + ' 400 ' + (portY + 13) + '"/>';
  out += '<path d="M150 ' + (portY + 13) + ' L150 298 M188 ' + (portY + 13) + ' L188 292 M226 ' + (portY + 13) + ' L226 300 M264 ' + (portY + 13) + ' L264 290"/>';
  return out;
}

function cadCiudad(cont) {
  if (!cont) return;
  const ciudad = cadSiguienteCiudad();
  const trazos = ciudad === "barcelona" ? cadTrazosBarcelona() : cadTrazosMadrid();
  cont.innerHTML = cadSvg("0 0 400 300", trazos, "cad-ciudad cad-" + ciudad, "xMidYMid slice", true);
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

function cadTorres(cont, n) {
  if (!cont) return;
  cont.innerHTML = cadSvg("0 0 400 180", cadTorreTrazos(n), "cad-torres", "xMidYMax meet", false);
}
