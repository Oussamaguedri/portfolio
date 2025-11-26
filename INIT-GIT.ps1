# Git Repository Initialisierung Script
# Führen Sie dieses Script aus, NACHDEM Sie Git installiert haben

Write-Host "🚀 Git Repository wird initialisiert..." -ForegroundColor Green

# Prüfe ob Git installiert ist
try {
    $gitVersion = git --version 2>&1
    Write-Host "✅ Git gefunden: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ FEHLER: Git ist nicht installiert!" -ForegroundColor Red
    Write-Host "Bitte installieren Sie Git zuerst:" -ForegroundColor Yellow
    Write-Host "https://git-scm.com/download/win" -ForegroundColor Cyan
    exit 1
}

# Prüfe ob bereits ein Git Repository existiert
if (Test-Path ".git") {
    Write-Host "⚠️  Git Repository existiert bereits!" -ForegroundColor Yellow
    $response = Read-Host "Möchten Sie es neu initialisieren? (j/n)"
    if ($response -ne "j") {
        Write-Host "Abgebrochen." -ForegroundColor Yellow
        exit 0
    }
    Remove-Item -Recurse -Force .git
}

# Initialisiere Git Repository
Write-Host "`n📦 Initialisiere Git Repository..." -ForegroundColor Cyan
git init

# Prüfe Git Konfiguration
Write-Host "`n⚙️  Prüfe Git Konfiguration..." -ForegroundColor Cyan
$userName = git config --global user.name
$userEmail = git config --global user.email

if (-not $userName -or -not $userEmail) {
    Write-Host "⚠️  Git ist noch nicht konfiguriert!" -ForegroundColor Yellow
    Write-Host "Bitte konfigurieren Sie Git:" -ForegroundColor Yellow
    Write-Host '  git config --global user.name "Ihr Name"' -ForegroundColor Cyan
    Write-Host '  git config --global user.email "ihre.email@example.com"' -ForegroundColor Cyan
    Write-Host "`nDann führen Sie dieses Script erneut aus." -ForegroundColor Yellow
    exit 1
} else {
    Write-Host "✅ Git konfiguriert:" -ForegroundColor Green
    Write-Host "   Name: $userName" -ForegroundColor Gray
    Write-Host "   Email: $userEmail" -ForegroundColor Gray
}

# Füge alle Dateien hinzu
Write-Host "`n📝 Füge Dateien hinzu..." -ForegroundColor Cyan
git add .

# Erstelle ersten Commit
Write-Host "`n💾 Erstelle ersten Commit..." -ForegroundColor Cyan
$commitMessage = "Initial commit: Portfolio Website"
git commit -m $commitMessage

Write-Host "`n✅ Fertig! Git Repository wurde erfolgreich initialisiert." -ForegroundColor Green
Write-Host "`n📋 Nächste Schritte:" -ForegroundColor Yellow
Write-Host "1. Status prüfen: git status" -ForegroundColor Cyan
Write-Host "2. Änderungen hinzufügen: git add ." -ForegroundColor Cyan
Write-Host "3. Commit erstellen: git commit -m 'Beschreibung'" -ForegroundColor Cyan
Write-Host "4. GitHub Repository erstellen und verbinden (optional)" -ForegroundColor Cyan

