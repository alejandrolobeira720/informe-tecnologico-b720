/* =====================================================
   ANIMACIÓN FINAL CAD — CIBERGAMES b720
   En la pantalla final se autodibuja un PLANO REAL de la ciudad
   (callejero de OpenStreetMap, © OpenStreetMap contributors, ODbL),
   guardado en madrid.svg / barcelona.svg. Alterna entre ambas.
   El SVG ya trae los trazos ordenados del centro hacia fuera, con
   clase .cad-draw (dibujo por stroke) y un grupo .cad-zoom (arranca
   cerca del centro y se aleja). Estilos y keyframes en leaderboard.css.
   En el Cibergame 3 además se bocetan tantas torres (alzado) como
   rondas hayas jugado.
   ===================================================== */

/* Alterna la ciudad en cada partida y la recuerda entre sesiones */
function cadSiguienteCiudad() {
  let n = 0;
  try { n = parseInt(localStorage.getItem("b720_cad_ciudad") || "0", 10) || 0; } catch (e) {}
  try { localStorage.setItem("b720_cad_ciudad", String(n + 1)); } catch (e) {}
  return (n % 2 === 0) ? "madrid" : "barcelona";
}

/* Carga el plano real de la ciudad (alternando) y lo inyecta de fondo.
   El SVG ya está preparado para animarse (cad-draw + cad-zoom). */
/* Punto de partida del zoom (en coords del viewBox de cada plano):
   Madrid → Puerta del Sol; Barcelona → Plaça de Catalunya. */
var CAD_LANDMARK = {
  madrid:    { cx: 200, cy: 202 },
  barcelona: { cx: 171, cy: 179 }
};

function cadCiudad(cont) {
  if (!cont) return;
  const ciudad = cadSiguienteCiudad();
  cont.setAttribute("data-ciudad", ciudad);
  cont.style.clipPath = "";
  cont.innerHTML = "";
  // Atribución OpenStreetMap (ODbL)
  const host = cont.parentNode;
  if (host && !host.querySelector(".cad-credit")) {
    const c = document.createElement("span");
    c.className = "cad-credit";
    c.textContent = "Plano: © OpenStreetMap";
    host.appendChild(c);
  }
  fetch(ciudad + ".svg", { cache: "default" })
    .then(function (r) { return r.ok ? r.text() : Promise.reject(new Error("no svg")); })
    .then(function (svg) {
      cont.innerHTML = svg;
      cadAnimar(cont, ciudad);
    })
    .catch(function () { /* sin plano: fondo limpio */ });
}

/* Zoom desde el landmark que se aleja + revelado radial sincronizado:
   arranca cerca de Sol/Catalunya y, mientras se dibuja hacia los lados,
   la vista se aleja hasta que el plano cubre toda la pantalla. */
function cadAnimar(cont, ciudad) {
  const svg = cont.querySelector("svg");
  if (!svg) return;
  const lm = CAD_LANDMARK[ciudad] || { cx: 200, cy: 200 };
  const vb = (svg.getAttribute("viewBox") || "0 0 400 400").split(/\s+/).map(Number);
  const VW = vb[2] || 400, VH = vb[3] || 400;
  const W = cont.clientWidth || 1000, H = cont.clientHeight || 700;
  const scale = Math.max(W / VW, H / VH); // preserveAspectRatio slice
  const sx = (W - VW * scale) / 2 + lm.cx * scale;
  const sy = (H - VH * scale) / 2 + lm.cy * scale;
  const R = Math.max(Math.hypot(sx, sy), Math.hypot(W - sx, sy),
                     Math.hypot(sx, H - sy), Math.hypot(W - sx, H - sy)) + 24;
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return; // plano completo, sin animar
  // Zoom del SVG (capa única, fluido) anclado al landmark
  svg.style.transformOrigin = sx + "px " + sy + "px";
  svg.animate(
    [{ transform: "scale(4)" }, { transform: "scale(1)" }],
    { duration: 5200, easing: "cubic-bezier(.22,.61,.36,1)", fill: "forwards" }
  );
  // Dibujo: círculo que crece desde el landmark hacia los bordes
  cont.animate(
    [{ clipPath: "circle(0px at " + sx + "px " + sy + "px)" },
     { clipPath: "circle(" + R + "px at " + sx + "px " + sy + "px)" }],
    { duration: 4800, easing: "ease", fill: "forwards" }
  );
}

/* —— Torres del Cibergame 3 (alzado): una por ronda jugada —— */
function cadTorreTrazos(n) {
  n = Math.max(1, Math.min(n || 1, 12));
  const base = 170, hueco = 400 / n, ancho = Math.min(34, hueco * 0.6);
  let out = ['<line x1="0" y1="170" x2="400" y2="170"/>'];
  for (let i = 0; i < n; i++) {
    const cx = hueco * (i + 0.5), x = cx - ancho / 2, w = ancho;
    const alt = 70 + ((i % 3) * 22), top = base - alt, ret = top + alt * 0.45;
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
  const trazos = cadTorreTrazos(n);
  let i = 0;
  const total = (trazos.match(/<(path|line)\b/g) || []).length || 1;
  const body = trazos.replace(/<(path|line)\b/g, function (m, tag) {
    const delay = (i / total * 1.6).toFixed(2); i++;
    return "<" + tag + ' pathLength="1" class="cad-draw" style="animation-delay:' + delay + 's"';
  });
  cont.innerHTML = '<svg class="cad-svg cad-torres" viewBox="0 0 400 180" fill="none" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + body + "</svg>";
}
