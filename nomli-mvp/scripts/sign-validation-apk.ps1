param(
    [string]$InputApk = 'artifacts/Nomli-MVP-debug.apk',
    [string]$OutputApk = 'artifacts/Nomli-M1.apk'
)
$ErrorActionPreference = 'Stop'
$taskRoot = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $taskRoot
$signingRoot = Join-Path $taskRoot '.tools\signing'
$keyFile = Join-Path $signingRoot 'nomli-validation.p12'
$passwordFile = Join-Path $signingRoot 'password.dpapi'
if (-not (Test-Path -LiteralPath $keyFile) -or -not (Test-Path -LiteralPath $passwordFile)) {
    throw 'Persistent local validation key is required. Never generate a replacement for an existing validation app.'
}
$InputApk = if ([IO.Path]::IsPathRooted($InputApk)) { $InputApk } else { Join-Path $taskRoot $InputApk }
$OutputApk = if ([IO.Path]::IsPathRooted($OutputApk)) { $OutputApk } else { Join-Path $taskRoot $OutputApk }
$taskJava = if ($env:JAVA_HOME) { Join-Path $env:JAVA_HOME 'bin\java.exe' } else { '' }
if (-not $taskJava -or -not (Test-Path -LiteralPath $taskJava)) {
    $taskJava = 'C:\Users\ahmed\.antigravity\extensions\redhat.java-1.54.0-win32-x64\jre\21.0.10-win32-x86_64\bin\java.exe'
}
$taskSdk = 'C:\Users\ahmed\AppData\Local\Android\Sdk'
$signerJar = Join-Path $taskSdk 'build-tools\35.0.0\lib\apksigner.jar'
$zipalign = Join-Path $taskSdk 'build-tools\35.0.0\zipalign.exe'
foreach ($required in @($taskJava, $signerJar, $zipalign, $InputApk)) {
    if (-not (Test-Path -LiteralPath $required)) { throw "Required signing input missing: $required" }
}
if ([IO.Path]::GetFullPath($InputApk) -eq [IO.Path]::GetFullPath($OutputApk)) { throw 'Input and output APK paths must differ.' }
try {
    $securePassword = ConvertTo-SecureString -String ((Get-Content -LiteralPath $passwordFile -Raw).Trim())
    $env:NOMLI_LOCAL_SIGNING_PASSWORD = [Net.NetworkCredential]::new('', $securePassword).Password
    & $taskJava -jar $signerJar sign --ks $keyFile --ks-key-alias nomli-validation --ks-pass env:NOMLI_LOCAL_SIGNING_PASSWORD --key-pass env:NOMLI_LOCAL_SIGNING_PASSWORD --v1-signing-enabled false --v2-signing-enabled true --v3-signing-enabled true --out $OutputApk $InputApk
    if ($LASTEXITCODE -ne 0) { throw 'Local APK signing failed.' }
    & $taskJava -jar $signerJar verify --verbose --print-certs $OutputApk
    if ($LASTEXITCODE -ne 0) { throw 'APK signature verification failed.' }
    & $zipalign -c -P 16 4 $OutputApk
    if ($LASTEXITCODE -ne 0) { throw 'APK alignment verification failed.' }
    $hash = (Get-FileHash -LiteralPath $OutputApk -Algorithm SHA256).Hash.ToLowerInvariant()
    $fileName = Split-Path -Leaf $OutputApk
    [IO.File]::WriteAllText([IO.Path]::GetFullPath("$OutputApk.sha256"), "$hash  $fileName`n", [Text.UTF8Encoding]::new($false))
    Write-Output "Verified $fileName; SHA-256 $hash"
} finally {
    Remove-Item Env:\NOMLI_LOCAL_SIGNING_PASSWORD -ErrorAction SilentlyContinue
    $securePassword = $null
}
