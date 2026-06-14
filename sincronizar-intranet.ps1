# =====================================================
#  SINCRONIZAR INTRANET — CIBERGAMES b720
#  -----------------------------------------------------
#  El proyecto vive en DOS sitios:
#    · juegos/        → la versión pública (GitHub Pages).
#    · ../intranet/   → la versión para la red interna (con almacen.js + JSON).
#
#  La mayoría de archivos son IDÉNTICOS en ambos. Este script copia esos
#  archivos compartidos de juegos/ → intranet/ para que no se queden
#  desincronizados al editar a mano, y avisa de los que difieren a propósito.
#
#  USO:   ./sincronizar-intranet.ps1            (copia y comprueba)
#         ./sincronizar-intranet.ps1 -SoloVer   (solo compara, no copia)
#
#  Lánzalo desde la raíz del repo (donde está la carpeta juegos/).
# =====================================================
param([switch]$SoloVer)

$repo     = Join-Path $PSScriptRoot "juegos"
$intranet = Join-Path $PSScriptRoot "..\intranet"

if (-not (Test-Path $intranet)) {
  Write-Host "No encuentro la carpeta intranet en: $intranet" -ForegroundColor Red
  Write-Host "Ajusta la ruta `$intranet en este script si la tienes en otro sitio."
  exit 1
}

# Archivos que DEBEN ser idénticos en las dos copias (juegos/ es la fuente).
$compartidos = @(
  "preguntas.js",      # piscinas de preguntas (lo que más editaréis)
  "motor-juego.js",    # motor común de los dos juegos
  "cibergame2.js",     # configuración del juego 2
  "cibergame3.js",     # configuración del juego 3 (+ temporizador y torre)
  "cadfinal.js",       # animación CAD de la pantalla final
  "cibergame2.css",    # estilos del juego 2
  "cibergame3.css",    # estilos del juego 3
  "madrid.svg",        # plano OSM (lo genera _gen_plano.ps1)
  "barcelona.svg"      # plano OSM
)

# Archivos que difieren A PROPÓSITO (NO se tocan; revisión manual si hace falta).
$divergentes = @(
  "leaderboard.js",    # intranet pasa por almacen.js; la pública usa localStorage directo
  "leaderboard.css",   # intranet tiene el botón de exportar (.lb-actions)
  "cibergame2.html",   # distinta topbar (intranet no enlaza noticias) + carga almacen.js
  "cibergame3.html",   # idem
  "index.html",        # hub distinto (menú de juegos vs. portada de noticias)
  "tokens.css",        # la intranet lleva su propia copia (la pública usa design-system/)
  "topbar.css"         # idem
)
# Solo-intranet: almacen.js, leaderboard.json  (no existen en juegos/)

Write-Host "== Archivos compartidos (juegos/ -> intranet/) ==" -ForegroundColor Cyan
$copiados = 0
foreach ($f in $compartidos) {
  $o = Join-Path $repo $f
  $d = Join-Path $intranet $f
  if (-not (Test-Path $o)) { Write-Host ("  ?  {0}: no existe en juegos/" -f $f) -ForegroundColor Yellow; continue }
  $ho = (Get-FileHash $o -Algorithm MD5).Hash
  $hd = $null
  if (Test-Path $d) { $hd = (Get-FileHash $d -Algorithm MD5).Hash }
  if ($ho -eq $hd) {
    Write-Host ("  =  {0}" -f $f) -ForegroundColor DarkGray
  } elseif ($SoloVer) {
    Write-Host ("  !  {0}: DIFIERE (con -SoloVer no se copia)" -f $f) -ForegroundColor Yellow
  } else {
    Copy-Item $o $d -Force
    Write-Host ("  ->  {0}: copiado" -f $f) -ForegroundColor Green
    $copiados++
  }
}

Write-Host ""
Write-Host "== Archivos que difieren a proposito (revision manual) ==" -ForegroundColor Cyan
foreach ($f in $divergentes) {
  $o = Join-Path $repo $f
  $d = Join-Path $intranet $f
  $estado = if (-not (Test-Path $o)) { "solo intranet" }
            elseif (-not (Test-Path $d)) { "solo juegos/" }
            elseif ((Get-FileHash $o -Algorithm MD5).Hash -eq (Get-FileHash $d -Algorithm MD5).Hash) { "iguales (ojo: deberian diferir)" }
            else { "difieren (esperado)" }
  Write-Host ("  -  {0}: {1}" -f $f, $estado) -ForegroundColor DarkGray
}

Write-Host ""
if ($SoloVer) { Write-Host "Modo solo-ver: no se copio nada." -ForegroundColor Cyan }
else { Write-Host ("Listo. Archivos copiados: {0}." -f $copiados) -ForegroundColor Cyan }
Write-Host "Recuerda: las preguntas y el codigo de juego se editan en juegos/ y se sincronizan con este script."
