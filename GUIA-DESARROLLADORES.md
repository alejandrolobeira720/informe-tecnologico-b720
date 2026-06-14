# Guía para desarrolladores — Cibergames b720

Esta carpeta contiene **dos mini-juegos de formación en ciberseguridad** (Cibergame 2
y Cibergame 3) pensados para la intranet del estudio. Son páginas HTML estáticas:
no necesitan servidor, build ni dependencias. Se abren en el navegador tal cual.

Esta guía está pensada para que dos personas puedan editarlos y adaptarlos sin
haber participado en su creación. Si solo vas a **cambiar preguntas**, salta directo
a la sección 3.

---

## 1. Mapa del proyecto

| Archivo | Qué es |
|---|---|
| `index.html` | Portada: "¿a qué juego quieres jugar?" Enlaza a los dos juegos. |
| `cibergame2.html` / `cibergame3.html` | Las dos páginas de juego (inicio, juego, final, clasificación). |
| **`preguntas.js`** | Las dos piscinas de preguntas + utilidades. **Es lo que más editaréis.** |
| **`motor-juego.js`** | El motor común: vidas, puntos, render de pregunta, sesión, racha y clasificación. Lo usan los dos juegos. |
| `cibergame2.js` | Lo PROPIO del juego 2 (sus textos). Es una "configuración" que se le pasa al motor. |
| `cibergame3.js` | Lo PROPIO del juego 3: además del texto, su **temporizador** y su **torre**. |
| `leaderboard.js` | Decide QUÉ se guarda en la clasificación (top 10, mejor marca por nombre). |
| `almacen.js` | Capa de datos: decide DÓNDE se guarda (hoy, el navegador). Ver sección 4. |
| `leaderboard.json` | Datos iniciales de la clasificación (semilla la primera vez). |
| `cadfinal.js` | La animación de la pantalla final (el plano de la ciudad + las torres). |
| `madrid.svg` / `barcelona.svg` | Los planos reales (OpenStreetMap) que se dibujan al acabar. |
| `tokens.css` | Tipografía Circular + paleta corporativa de marca. |
| `topbar.css` | La barra superior común. |
| `cibergame2.css` / `cibergame3.css` | Estilos de cada juego (**aquí están los colores**, sección 5). |
| `leaderboard.css` | Estilos de la clasificación y de la pantalla final. |
| `fonts/`, `assets/` | Fuente Circular Std y el logo. |

**Orden de carga de los scripts** (está en el `<head>`/final de cada HTML, no lo cambies sin motivo):
`preguntas.js` → `almacen.js` → `leaderboard.js` → `cadfinal.js` → `motor-juego.js` → `cibergameN.js`.
Cada uno usa cosas del anterior, así que el orden importa.

---

## 2. Las DOS copias (importante)

El proyecto existe en dos sitios y **hay que mantenerlos sincronizados**:

- **`juegos/`** (dentro del repositorio de GitHub) → la versión pública.
- **`intranet/`** (esta carpeta) → la versión para la red interna.

Casi todos los archivos son idénticos. Los que cambian **a propósito** entre las dos copias:

- `leaderboard.js` → la intranet guarda a través de `almacen.js`; la pública usa el navegador directo.
- `leaderboard.css` → la intranet tiene un botón extra de "Descargar datos (JSON)".
- los `*.html` y `index.html` → distinta barra superior y, en intranet, se carga `almacen.js`.
- `almacen.js` y `leaderboard.json` → **solo existen en la intranet.**

Para no desincronizar nada al editar, hay un script en la raíz del repo:
**`sincronizar-intranet.ps1`**. Copia los archivos compartidos de `juegos/` → `intranet/`
y avisa de los que difieren. Úsalo siempre que toques preguntas o código de juego:

```powershell
./sincronizar-intranet.ps1            # copia lo compartido y comprueba
./sincronizar-intranet.ps1 -SoloVer   # solo compara, no copia
```

Regla práctica: **edita en `juegos/` y sincroniza hacia `intranet/`.**

---

## 3. Editar las PREGUNTAS (`preguntas.js`)

Hay dos piscinas independientes: `POOL_CIBERGAME2` y `POOL_CIBERGAME3`. Cada pregunta
es un objeto con este formato:

```js
{
  cat: "facil",                 // facil | media | dificil | extrema
  tema: "Phishing",             // etiqueta corta que se muestra
  pregunta: "¿Texto de la pregunta?",
  opciones: [                   // EXACTAMENTE 4 opciones
    "Respuesta correcta",       // <-- la correcta va SIEMPRE la primera
    "Distractor 1",
    "Distractor 2",
    "Opción de broma"           // hay una opción graciosa por pregunta
  ],
  correcta: 0,                  // índice de la correcta: SIEMPRE 0
  explicacion: "Por qué es así (sale en el feedback)."
}
```

Reglas que el juego da por hechas:
- **La correcta se escribe siempre la primera y `correcta: 0`.** El juego baraja las
  opciones al mostrarlas, así que en pantalla no siempre saldrá la primera.
- **4 opciones por pregunta**, sin opciones repetidas dentro de la misma pregunta.
- **No repitas el texto de una pregunta**, ni dentro de una piscina ni entre las dos
  (Cibergame 2 y 3 no comparten preguntas).
- Composición de cada ronda: 8 preguntas (3 fáciles + 2 medias al inicio, 2 difíciles
  + 1 extrema al cierre). Para que las rondas "cuadren" sin repetir, conviene mantener
  el reparto **24 fáciles / 16 medias / 16 difíciles / 8 extremas** (= 8 rondas exactas).
- Puntos por categoría (en `PUNTOS_CATEGORIA`, al final del archivo): fácil/media 10,
  difícil 15, extrema 20 → 100 puntos por ronda perfecta.

Tras editar, ejecuta `sincronizar-intranet.ps1` y prueba abriendo cada juego en el navegador.

---

## 4. La clasificación y la base de datos (`almacen.js`)

Hoy la clasificación se guarda **en el navegador** (localStorage), en formato JSON, y
la primera vez se siembra desde `leaderboard.json`. Toda la persistencia pasa por
`almacen.js`, que está aislado a propósito.

**Para enchufar vuestra base de datos** no hace falta tocar el juego: basta reescribir
el cuerpo de estas funciones en `almacen.js`:
- `almacenLeer(clave)` / `almacenEscribir(clave, valor)` → leer/guardar una "tabla".
- o, si preferís, `almacenDb()` / `almacenGuardarTodo()`.

El formato de datos (el "contrato") es el de `leaderboard.json`:

```json
{
  "b720_lb_cibergame2": [ { "nombre": "Ana", "puntos": 320 } ],
  "b720_lb_cibergame3": [ { "nombre": "Ana", "puntos": 280 } ],
  "b720_lb_nombre": "Ana"
}
```

El botón "Descargar datos (JSON)" de la pantalla de clasificación exporta ese objeto
tal cual (útil para inspeccionar o migrar).

> Nota menor: el sembrado inicial desde `leaderboard.json` es asíncrono. Si alguien
> termina una partida en el primer segundo de la primera visita, podría no ver la
> semilla. Es inofensivo y desaparece cuando conectéis vuestra BBDD.

---

## 5. Retematizar colores y formas

La identidad actual es: **fondo Pantone Neutral Black `#4B4846`, blanco encima,
esquinas rectas, sin negro puro y sin amarillo**, fuente Circular Std.

Si hay que **adaptar el aspecto** (p. ej. para que encaje con la intranet):

- **Colores de los juegos:** bloque `:root { ... }` al principio de **`cibergame2.css`**
  y **`cibergame3.css`** (variables `--bg`, `--bg2`, `--card`, `--border`, `--text`,
  `--muted`, `--azul`, `--verde`, `--naranja`…). Cambiando esas variables cambia todo
  el juego. *(Ojo: ese bloque está duplicado en los dos archivos; cambia ambos.)*
- **Colores de la portada:** bloque `:root` dentro de `index.html`.
- **Paleta y tipografía de marca:** `tokens.css` (variables `--b720-*`).
- **Formas / esquinas:** la identidad es plana (`border-radius: 0`). Si se quieren
  esquinas redondeadas, buscad `border-radius` en los `.css` (o `--b720-radius` en
  `tokens.css`).

Consejo: tras cambiar colores, abrid los dos juegos y la pantalla final (la
clasificación brilla con los colores de marca al quedar primero o hacer pleno).

---

## 6. Regenerar los planos de las ciudades

Los planos `madrid.svg` / `barcelona.svg` son callejeros reales de OpenStreetMap.
Se regeneran con la herramienta de desarrollo `_gen_plano.ps1` (en `juegos/`, no se
sirve). Ver el encabezado del propio archivo para los parámetros. Si cambias el
recuadro (bbox) de una ciudad, ajusta también `CAD_LANDMARK` en `cadfinal.js` para
que el zoom siga arrancando en el sitio correcto (Puerta del Sol / Plaça de Catalunya).

---

## 7. Cómo añadir o tocar la mecánica de un juego

El motor (`motor-juego.js`) hace el trabajo común y cada juego le pasa una
**configuración** con sus textos y unos *hooks* opcionales para lo suyo (temporizador,
torre…). El contrato completo está documentado en la cabecera de `motor-juego.js`.

- Para cambiar textos (rangos, mensajes, feedback): edita `cibergame2.js` / `cibergame3.js`.
- Para cambiar reglas comunes (vidas, cómo se puntúa, render): edita `motor-juego.js`
  **una sola vez** y afecta a los dos juegos.
- Cada página carga **un solo** juego, por eso el motor usa variables globales
  (`estado`, `$`) sin conflicto. No cargues los dos `cibergameN.js` en la misma página.
