"""Package source, licensed content and static preview; omit local tools/secrets."""
from pathlib import Path
import hashlib
import os
import zipfile

root = Path(__file__).resolve().parent.parent
target = root / 'artifacts/Nomli-MVP-starter-kit.zip'
excluded_dirs = {
    'node_modules', '.tools', '.wrangler', '.gradle', '.kotlin', '.git',
    '.idea', 'build', 'capacitor-cordova-android-plugins',
}
excluded_names = {
    'local.properties', 'google-services.json', '.npmrc', '.pypirc',
    'credentials.json', 'service-account.json',
}
excluded_suffixes = {
    '.zip', '.apk', '.jks', '.keystore', '.p12', '.dpapi', '.idsig',
    '.pem', '.key', '.log', '.sha256',
}


def is_local_secret(name):
    if name in excluded_names:
        return True
    for prefix in ('.env', '.dev.vars'):
        if name == prefix or (name.startswith(prefix + '.') and name != prefix + '.example'):
            return True
    return False


with zipfile.ZipFile(target, 'w', zipfile.ZIP_DEFLATED, compresslevel=6) as archive:
    for folder, dirs, files in os.walk(root):
        dirs[:] = [d for d in dirs if d not in excluded_dirs]
        for name in sorted(files):
            file = Path(folder) / name
            relative = file.relative_to(root)
            if is_local_secret(name):
                continue
            if file.suffix.lower() in excluded_suffixes:
                continue
            if relative.as_posix().startswith('android/app/src/main/assets/'):
                continue
            archive.write(file, 'nomli-mvp/' + relative.as_posix())
with zipfile.ZipFile(target) as archive:
    assert archive.testzip() is None, 'ZIP CRC verification failed'
    count = len(archive.namelist())
digest = hashlib.sha256(target.read_bytes()).hexdigest()
target.with_suffix('.zip.sha256').write_text(f'{digest}  {target.name}\n', encoding='utf-8')
print(f'{target}: {count} files, {target.stat().st_size:,} bytes; CRC and SHA-256 verified')
