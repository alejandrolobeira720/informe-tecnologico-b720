# =====================================================
#  GENERADOR DE PLANOS CAD — CIBERGAMES b720
#  -----------------------------------------------------
#  Herramienta de DESARROLLO (no se sirve ni se sube a GitHub).
#  Descarga el callejero real de una ciudad de OpenStreetMap (vía
#  Overpass), lo proyecta a un viewBox y escribe madrid.svg / barcelona.svg,
#  que son los planos que se autodibujan en la pantalla final de los juegos.
#
#  USO (desde esta carpeta):
#    ./_gen_plano.ps1 -Ciudad madrid -LatMin 40.3968 -LonMin -3.7298 -LatMax 40.4368 -LonMax -3.6778
#    ./_gen_plano.ps1 -Ciudad barcelona -LatMin 41.3671 -LonMin 2.1494 -LatMax 41.4031 -LonMax 2.1974
#
#  -Simplif  detalle del trazo (menor = más fino y más pesado; 0.6 por defecto).
#  El landmark del zoom (Sol / Pl. Catalunya) sale del centro del bbox; si
#  cambias el bbox, ajusta CAD_LANDMARK en cadfinal.js para que cuadre.
#  Datos: © OpenStreetMap contributors (ODbL).
# =====================================================
param(
  [Parameter(Mandatory=$true)][string]$Ciudad,
  [Parameter(Mandatory=$true)][double]$LatMin,
  [Parameter(Mandatory=$true)][double]$LonMin,
  [Parameter(Mandatory=$true)][double]$LatMax,
  [Parameter(Mandatory=$true)][double]$LonMax,
  [string]$Clase,
  [string]$OutFile,
  [double]$Simplif = 0.6
)

if (-not $Clase)   { $Clase = "cad-" + $Ciudad }
if (-not $OutFile) { $OutFile = Join-Path $PSScriptRoot ($Ciudad + ".svg") }

# ── 1. Descargar callejero OSM (Overpass) ──────────────────────────
$hwy = "^(motorway|trunk|primary|secondary|tertiary|residential|living_street|unclassified|pedestrian|motorway_link|trunk_link|primary_link|secondary_link|tertiary_link)`$"
$q = "[out:json][timeout:90];(way[`"highway`"~`"$hwy`"]($LatMin,$LonMin,$LatMax,$LonMax););out body;>;out skel qt;"
$url = "https://overpass-api.de/api/interpreter"
Write-Host "[$Ciudad] Descargando OSM..."
$headers = @{ "User-Agent" = "b720-cibergame-planogen/1.0 (intranet quiz; contact neyzheo@gmail.com)" }
$resp = Invoke-RestMethod -Uri $url -Method Post -Body @{ data = $q } -Headers $headers -TimeoutSec 180
Write-Host ("[$Ciudad] Elementos: " + $resp.elements.Count)

# ── 2. Indexar nodos y vías ────────────────────────────────────────
$nodes = @{}
$ways  = New-Object System.Collections.ArrayList
foreach ($el in $resp.elements) {
  if ($el.type -eq "node") {
    $nodes[[string]$el.id] = @($el.lat, $el.lon)
  } elseif ($el.type -eq "way") {
    [void]$ways.Add($el.nodes)
  }
}
Write-Host ("[$Ciudad] Nodos: " + $nodes.Count + "  Vias: " + $ways.Count)

# ── 3. Proyección equirectangular (corrige longitud por cos(lat)) ──
$dLat = $LatMax - $LatMin
$dLon = $LonMax - $LonMin
$midLat = ($LatMin + $LatMax) / 2.0
$cosLat = [math]::Cos($midLat * [math]::PI / 180.0)
$VW = 400.0
$spanX = $dLon * $cosLat
$spanY = $dLat
$VH = [math]::Round($VW * $spanY / $spanX, 0)

function ProjX([double]$lon) { return ($lon - $LonMin) / $dLon * $VW }
function ProjY([double]$lat) { return ($LatMax - $lat) / $dLat * $VH }

# ── 4. Construir trazos (vías) simplificados, conservando extremos ──
$paths = New-Object System.Collections.ArrayList
$thr2 = $Simplif * $Simplif
foreach ($wnodes in $ways) {
  if (-not $wnodes -or $wnodes.Count -lt 2) { continue }
  $pts = New-Object System.Collections.ArrayList
  foreach ($nid in $wnodes) {
    $n = $nodes[[string]$nid]
    if ($null -eq $n) { continue }
    $x = ProjX ([double]$n[1])
    $y = ProjY ([double]$n[0])
    [void]$pts.Add(@($x, $y))
  }
  if ($pts.Count -lt 2) { continue }
  $last = $pts.Count - 1
  $kept = New-Object System.Collections.ArrayList
  $lx = $null; $ly = $null
  for ($i = 0; $i -lt $pts.Count; $i++) {
    $p = $pts[$i]
    if ($i -eq 0 -or $i -eq $last) {
      [void]$kept.Add($p); $lx = $p[0]; $ly = $p[1]; continue
    }
    $dx = $p[0] - $lx; $dy = $p[1] - $ly
    if (($dx*$dx + $dy*$dy) -ge $thr2) {
      [void]$kept.Add($p); $lx = $p[0]; $ly = $p[1]
    }
  }
  if ($kept.Count -lt 2) { continue }
  $sb = New-Object System.Text.StringBuilder
  for ($i = 0; $i -lt $kept.Count; $i++) {
    $p = $kept[$i]
    $cmd = if ($i -eq 0) { "M" } else { "L" }
    [void]$sb.Append($cmd + [string]([math]::Round($p[0],1)) + " " + [string]([math]::Round($p[1],1)) + " ")
  }
  [void]$paths.Add('<path d="' + $sb.ToString().Trim() + '"/>')
}
Write-Host ("[$Ciudad] Trazos: " + $paths.Count)

# ── 5. Emitir SVG ──────────────────────────────────────────────────
$header = '<!-- Map data (c) OpenStreetMap contributors, ODbL -->' + "`n"
$open   = '<svg class="cad-svg cad-ciudad ' + $Clase + '" viewBox="0 0 ' + [int]$VW + ' ' + [int]$VH + '" preserveAspectRatio="xMidYMid slice"><g class="cad-zoom">'
$svg = $header + $open + ($paths -join "") + '</g></svg>'
[System.IO.File]::WriteAllText($OutFile, $svg, (New-Object System.Text.UTF8Encoding($false)))
Write-Host ("[$Ciudad] Escrito: " + $OutFile + "  (" + [math]::Round((Get-Item $OutFile).Length/1024) + " KB, viewBox 0 0 " + [int]$VW + " " + [int]$VH + ")")
