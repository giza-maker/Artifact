param([string]$ApkPath, [string]$ExpectedPackage = 'com.nomli.mvp.validation')
$ErrorActionPreference = 'Stop'
$taskRoot = Split-Path -Parent $PSScriptRoot
if (-not $ApkPath) { $ApkPath = Join-Path $taskRoot 'artifacts\Nomli-MVP-debug.apk' }
$taskApk = (Resolve-Path -LiteralPath $ApkPath).Path
$taskSdk = $env:ANDROID_HOME
if (-not $taskSdk) { $taskSdk = Join-Path $env:LOCALAPPDATA 'Android\Sdk' }
$taskBuildTools = Get-ChildItem -LiteralPath (Join-Path $taskSdk 'build-tools') -Directory |
  Where-Object { $_.Name -match '^\d+\.\d+\.\d+$' -and (Test-Path -LiteralPath (Join-Path $_.FullName 'aapt2.exe')) -and (Test-Path -LiteralPath (Join-Path $_.FullName 'apksigner.bat')) -and (Test-Path -LiteralPath (Join-Path $_.FullName 'zipalign.exe')) } |
  Sort-Object { [version]$_.Name } -Descending | Select-Object -First 1 -ExpandProperty FullName
if (-not $taskBuildTools) { throw 'No complete Android build-tools installation found.' }
$taskBadging = & (Join-Path $taskBuildTools 'aapt2.exe') dump badging $taskApk
if ($LASTEXITCODE -ne 0) { throw 'APK resource/manifest parsing failed.' }
if (-not ($taskBadging -match ("package: name='" + [regex]::Escape($ExpectedPackage) + "'"))) { throw 'Unexpected APK package identity.' }
& (Join-Path $taskBuildTools 'zipalign.exe') -c -P 16 4 $taskApk
if ($LASTEXITCODE -ne 0) { throw 'APK alignment check failed.' }
& (Join-Path $taskBuildTools 'apksigner.bat') verify --verbose --print-certs $taskApk
if ($LASTEXITCODE -ne 0) { throw 'APK signature verification failed.' }
$taskHash = (Get-FileHash -LiteralPath $taskApk -Algorithm SHA256).Hash.ToLowerInvariant()
Write-Output "APK verified: $taskApk"
Write-Output "SHA256: $taskHash"
$taskBadging | Select-String -Pattern '^package:|^sdkVersion:|^targetSdkVersion:|^application-label:'
