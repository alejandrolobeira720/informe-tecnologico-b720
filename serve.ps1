$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:3000/")
$listener.Start()
Write-Output "Serving on http://localhost:3000/"
$root = Split-Path $MyInvocation.MyCommand.Path
$mime = @{
  ".html"=  "text/html"
  ".css" =  "text/css"
  ".js"  =  "application/javascript"
  ".jpg" =  "image/jpeg"
  ".jpeg"=  "image/jpeg"
  ".png" =  "image/png"
  ".webp"=  "image/webp"
  ".svg" =  "image/svg+xml"
  ".ico" =  "image/x-icon"
  ".woff2"= "font/woff2"
  ".pdf" =  "application/pdf"
}
while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $req = $ctx.Request
  $res = $ctx.Response
  $path = $req.Url.LocalPath
  if ($path -eq "/" -or $path -eq "") { $path = "/index.html" }
  $file = Join-Path $root $path.TrimStart("/")
  if (Test-Path $file -PathType Leaf) {
    $ext = [System.IO.Path]::GetExtension($file).ToLower()
    $res.ContentType = if ($mime[$ext]) { $mime[$ext] } else { "application/octet-stream" }
    $bytes = [System.IO.File]::ReadAllBytes($file)
    $res.ContentLength64 = $bytes.Length
    $res.OutputStream.Write($bytes, 0, $bytes.Length)
  } else {
    $res.StatusCode = 404
  }
  $res.OutputStream.Close()
}
