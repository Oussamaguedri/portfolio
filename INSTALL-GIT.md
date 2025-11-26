# Git Installation - Schritt für Schritt

## 🚀 Schnellste Methode: Windows Package Manager (winget)

Falls Sie Windows 11 oder Windows 10 mit Updates haben:

```powershell
winget install --id Git.Git -e --source winget
```

Nach der Installation: **Schließen Sie alle PowerShell-Fenster** und öffnen Sie ein neues!

---

## 📥 Alternative: Manuelle Installation

### Schritt 1: Download
1. Öffnen Sie Ihren Browser
2. Gehen Sie zu: **https://git-scm.com/download/win**
3. Klicken Sie auf "Download for Windows"
4. Die Datei wird heruntergeladen (z.B. `Git-2.43.0-64-bit.exe`)

### Schritt 2: Installation
1. **Doppelklicken Sie auf die heruntergeladene .exe-Datei**
2. Klicken Sie auf "Next" durch die Installation
3. **WICHTIG:** Bei "Adjusting your PATH environment":
   - Wählen Sie: **"Git from the command line and also from 3rd-party software"**
   - (Das ist die dritte Option)
4. Alle anderen Einstellungen können Standard bleiben
5. Klicken Sie auf "Install"
6. Warten Sie, bis die Installation abgeschlossen ist
7. Klicken Sie auf "Finish"

### Schritt 3: Testen
1. **Schließen Sie ALLE PowerShell/Terminal-Fenster**
2. Öffnen Sie ein **NEUES** PowerShell-Fenster
3. Testen Sie Git:
   ```powershell
   git --version
   ```
4. Sie sollten sehen: `git version 2.xx.x` (mit einer Versionsnummer)

### Schritt 4: Git konfigurieren
```powershell
git config --global user.name "Khalil Nasri"
git config --global user.email "khalilnasri95@gmail.com"
```

### Schritt 5: Repository initialisieren
```powershell
cd "C:\Users\oussa\Downloads\khalil-nasri-portfolio-master\khalil-nasri-portfolio-master"
git init
git add .
git commit -m "Initial commit: Portfolio Website"
```

---

## ✅ Nach erfolgreicher Installation

Führen Sie das automatische Setup-Script aus:
```powershell
.\INIT-GIT.ps1
```

Oder sagen Sie mir Bescheid, dann helfe ich Ihnen beim Setup!

---

## 🆘 Probleme?

**Problem:** "git" wird immer noch nicht erkannt
**Lösung:** 
1. Schließen Sie ALLE Terminal-Fenster
2. Starten Sie Ihren Computer neu
3. Öffnen Sie ein neues PowerShell-Fenster
4. Versuchen Sie es erneut: `git --version`

**Problem:** Installation schlägt fehl
**Lösung:** 
- Stellen Sie sicher, dass Sie Administrator-Rechte haben
- Rechtsklick auf die .exe-Datei → "Als Administrator ausführen"

