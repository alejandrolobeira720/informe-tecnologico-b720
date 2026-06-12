/* =====================================================
   LEADERBOARD COMPARTIDA — CIBERGAMES b720
   La usan cibergame2.js y cibergame3.js.
   · Clasificación top 10 por juego en localStorage
     (se guarda la MEJOR sesión de cada nombre).
   · El nombre del jugador se recuerda entre juegos.
   · Brillo b720 (azul→verde→naranja→blanco) para el nº1
     o para una sesión perfecta (estilos en leaderboard.css).
   ===================================================== */

const LB_MAX_ENTRADAS = 10;
const LB_CLAVE_NOMBRE = "b720_lb_nombre";

function lbCargar(clave) {
  try {
    const lista = JSON.parse(localStorage.getItem(clave));
    return Array.isArray(lista) ? lista : [];
  } catch (e) {
    return [];
  }
}

function lbGuardar(clave, lista) {
  try { localStorage.setItem(clave, JSON.stringify(lista)); } catch (e) { /* almacenamiento lleno o bloqueado */ }
}

/*
  Registra la sesión y devuelve { lista, posicion, mejor }.
  Una entrada por nombre: solo se sustituye si la nueva puntuación
  supera a la guardada. La posición es la de tu entrada en la tabla.
*/
function lbRegistrar(clave, nombre, puntos) {
  const lista = lbCargar(clave);
  const i = lista.findIndex(e => e.nombre.toLowerCase() === nombre.toLowerCase());

  if (i >= 0) {
    if (puntos > lista[i].puntos) lista[i].puntos = puntos;
  } else {
    lista.push({ nombre: nombre, puntos: puntos });
  }

  lista.sort((a, b) => b.puntos - a.puntos);
  lista.length = Math.min(lista.length, LB_MAX_ENTRADAS);
  lbGuardar(clave, lista);

  const pos = lista.findIndex(e => e.nombre.toLowerCase() === nombre.toLowerCase());
  return {
    lista: lista,
    posicion: pos >= 0 ? pos + 1 : null,
    mejor: pos >= 0 ? lista[pos].puntos : puntos
  };
}

/* Pinta la clasificación. brillar=true → fila del jugador con animación b720 */
function lbRender(contenedor, lista, nombreJugador, brillar) {
  contenedor.innerHTML = "";
  if (!lista.length) {
    contenedor.innerHTML = '<li class="lb-empty">Aún no hay puntuaciones. ¡Sé el primero!</li>';
    return;
  }
  lista.forEach((entrada, i) => {
    const li = document.createElement("li");
    const esJugador = entrada.nombre.toLowerCase() === nombreJugador.toLowerCase();
    li.className = "lb-row" +
      (esJugador ? " lb-me" : "") +
      (esJugador && brillar ? " lb-glow" : "") +
      (i === 0 ? " lb-top1" : "");
    li.innerHTML =
      '<span class="lb-pos">' + (i + 1) + '</span>' +
      '<span class="lb-nombre"></span>' +
      '<span class="lb-puntos">' + entrada.puntos + ' pts</span>';
    li.querySelector(".lb-nombre").textContent = entrada.nombre; // textContent: sin HTML inyectable
    contenedor.appendChild(li);
  });
}

/* Nombre persistente entre juegos */
function lbNombreGuardado() {
  try { return localStorage.getItem(LB_CLAVE_NOMBRE) || ""; } catch (e) { return ""; }
}
function lbGuardarNombre(nombre) {
  try { localStorage.setItem(LB_CLAVE_NOMBRE, nombre); } catch (e) { /* sin persistencia */ }
}

/*
  Conecta el campo de nombre con el botón de inicio:
  el botón se desactiva hasta que haya un nombre válido (≥ 2 caracteres).
  Devuelve una función que lee el nombre actual ya limpio.
*/
function lbConectarNombre(input, boton) {
  input.value = lbNombreGuardado();
  const validar = () => {
    const ok = input.value.trim().length >= 2;
    boton.disabled = !ok;
    boton.classList.toggle("btn-disabled", !ok);
  };
  input.addEventListener("input", validar);
  input.addEventListener("keydown", e => {
    if (e.key === "Enter" && !boton.disabled) boton.click();
  });
  validar();
  return () => input.value.trim().slice(0, 20);
}
