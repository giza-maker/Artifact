$ErrorActionPreference = 'Stop'
$taskRoot = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $taskRoot
$taskJdk = Get-ChildItem -LiteralPath (Join-Path $taskRoot '.tools') -Directory | Where-Object Name -Like 'jdk-21*' | Select-Object -First 1
if ($taskJdk) { $env:JAVA_HOME = $taskJdk.FullName; $env:PATH = "$env:JAVA_HOME\bin;$env:PATH" }
if (-not $env:JAVA_HOME) {
  $taskExtensionRoot = Join-Path $env:USERPROFILE '.antigravity\extensions'
  if (Test-Path -LiteralPath $taskExtensionRoot) {
    $taskBundledJava = Get-ChildItem -LiteralPath $taskExtensionRoot -Directory -Filter 'redhat.java-*' | ForEach-Object { Get-ChildItem -LiteralPath (Join-Path $_.FullName 'jre') -Directory -Filter '21*' -ErrorAction SilentlyContinue } | Select-Object -First 1
    if ($taskBundledJava) { $env:JAVA_HOME = $taskBundledJava.FullName; $env:PATH = "$env:JAVA_HOME\bin;$env:PATH" }
  }
}
if (-not (Get-Command java -ErrorAction SilentlyContinue)) { throw 'Java 21 required. See docs/SETUP.md.' }
& npm.cmd run android:sync
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
Push-Location android
try {
  & .\gradlew.bat --no-daemon assembleDebug
  if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
} finally { Pop-Location }
New-Item -ItemType Directory -Path artifacts -Force | Out-Null
Copy-Item -LiteralPath 'android\app\build\outputs\apk\debug\app-debug.apk' -Destination 'artifacts\Nomli-MVP-debug.apk' -Force
Write-Output 'Built artifacts/Nomli-MVP-debug.apk (debug signing; prototype only).'
