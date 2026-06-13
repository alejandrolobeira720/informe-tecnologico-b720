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

/* —— MADRID: radial denso (avenidas + anillos + río + Retiro + trama) —— */
function cadTrazosMadrid() {
  const cx = 200, cy = 150;
  const arr = [];
  const push = (m, r) => arr.push({ m: m, r: r });

  // Trama urbana: manzanas irregulares en una rejilla perturbada
  const pitch = 24;
  for (let gx = -8; gx <= 8; gx++) {
    for (let gy = -6; gy <= 6; gy++) {
      const bx = cx + gx * pitch + cadRnd(-4, 4);
      const by = cy + gy * pitch + cadRnd(-4, 4);
      const r = Math.hypot(bx - cx, by - cy);
      if (r < 26 || r > 210) continue;          // hueco central (plazas) y recorte
      if (Math.random() < 0.18) continue;        // algún solar vacío
      const w = pitch * cadRnd(0.5, 0.82), h = pitch * cadRnd(0.5, 0.82);
      push('<rect x="' + (bx - w / 2).toFixed(1) + '" y="' + (by - h / 2).toFixed(1) + '" width="' + w.toFixed(1) + '" height="' + h.toFixed(1) + '"/>', r);
    }
  }
  // Avenidas radiales desde el centro (irregulares)
  const ang = [6, 34, 70, 104, 134, 162, 198, 226, 256, 288, 316, 344];
  ang.forEach(function (a) {
    const rad = a * Math.PI / 180;
    push('<line x1="' + cx + '" y1="' + cy + '" x2="' + (cx + Math.cos(rad) * 230).toFixed(1) + '" y2="' + (cy + Math.sin(rad) * 230).toFixed(1) + '"/>', 16);
  });
  // Anillos (rondas)
  push('<circle cx="' + cx + '" cy="' + cy + '" r="34"/>', 34);
  push('<circle cx="' + cx + '" cy="' + cy + '" r="78"/>', 78);
  push('<path d="M' + (cx - 130) + ' ' + cy + ' A130 116 0 1 1 ' + (cx + 130) + ' ' + cy + '"/>', 130);
  push('<path d="M' + (cx - 190) + ' ' + (cy + 20) + ' A190 165 0 0 1 ' + (cx + 190) + ' ' + (cy + 20) + '"/>', 195);
  // Río Manzanares (izquierda, serpenteante)
  push('<path d="M150 -10 C120 60 96 110 110 150 C124 190 150 235 120 310"/>', 95);
  // Parque del Retiro (rectángulo redondeado a la derecha del centro)
  push('<rect x="250" y="118" width="56" height="74" rx="10"/>', 70);
  push('<path d="M278 124 L278 186 M254 150 L302 150"/>', 72);

  arr.sort(function (a, b) { return a.r - b.r; });
  return arr.map(function (o) { return o.m; }).join("");
}

/* —— BARCELONA: primero las manzanas del Eixample, luego las calles —— */
function cadTrazosBarcelona() {
  const cx = 200, cy = 140, pitch = 30, size = 23, ch = 6, NX = 8, NY = 6;
  const manzanas = [];
  const calles = [];
  // Manzanas octagonales (se dibujan primero, centro→afuera)
  for (let i = -NX; i <= NX; i++) {
    for (let j = -NY; j <= NY; j++) {
      const bx = cx + i * pitch, by = cy + j * pitch;
      if (by > 250) continue; // abajo queda el puerto
      const x0 = bx - size / 2, y0 = by - size / 2, x1 = bx + size / 2, y1 = by + size / 2;
      const d = "M" + (x0 + ch) + " " + y0 + " L" + (x1 - ch) + " " + y0 +
                " L" + x1 + " " + (y0 + ch) + " L" + x1 + " " + (y1 - ch) +
                " L" + (x1 - ch) + " " + y1 + " L" + (x0 + ch) + " " + y1 +
                " L" + x0 + " " + (y1 - ch) + " L" + x0 + " " + (y0 + ch) + " Z";
      manzanas.push({ m: '<path d="' + d + '"/>', r: Math.hypot(i, j) * pitch });
    }
  }
  // Calles que cortan las manzanas (se revelan después)
  for (let i = -NX - 1; i <= NX + 1; i++) {
    const x = cx + i * pitch + pitch / 2;
    calles.push({ m: '<line x1="' + x + '" y1="-10" x2="' + x + '" y2="250"/>', r: Math.abs(i) * pitch });
  }
  for (let j = -NY - 1; j <= NY + 1; j++) {
    const y = cy + j * pitch + pitch / 2;
    if (y > 250) continue;
    calles.push({ m: '<line x1="0" y1="' + y + '" x2="400" y2="' + y + '"/>', r: Math.abs(j) * pitch });
  }
  manzanas.sort(function (a, b) { return a.r - b.r; });
  calles.sort(function (a, b) { return a.r - b.r; });

  const extras = [
    // Avingudes en diagonal
    '<line x1="-10" y1="40" x2="410" y2="250"/>',
    '<line x1="80" y1="-10" x2="320" y2="260"/>',
    // Puerto: línea de costa + diques
    '<path d="M0 255 C70 250 140 268 210 262 C280 256 340 272 400 262"/>',
    '<path d="M150 262 L150 292 M180 262 L180 286 M210 262 L210 294 M240 262 L240 284"/>'
  ].join("");

  // Orden de aparición: manzanas → calles → diagonales/puerto
  return manzanas.map(function (o) { return o.m; }).join("") +
         calles.map(function (o) { return o.m; }).join("") +
         extras;
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
