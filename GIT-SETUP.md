# Git Setup für Portfolio-Projekt

## 📥 Schritt 1: Git installieren

1. **Git herunterladen:**
   - Besuchen Sie: https://git-scm.com/download/win
   - Laden Sie die neueste Version herunter
   - Führen Sie das Installationsprogramm aus
   - **Wichtig:** Wählen Sie während der Installation "Git from the command line and also from 3rd-party software"

2. **Nach der Installation:**
   - Schließen Sie alle PowerShell/Terminal-Fenster
   - Öffnen Sie ein **neues** PowerShell-Fenster
   - Testen Sie die Installation:
     ```powershell
     git --version
     ```
   - Sie sollten eine Versionsnummer sehen (z.B. `git version 2.43.0`)

## ⚙️ Schritt 2: Git konfigurieren

Führen Sie diese Befehle aus (ersetzen Sie Name und E-Mail):

```powershell
git config --global user.name "Ihr Name"
git config --global user.email "ihre.email@example.com"
```

**Beispiel:**
```powershell
git config --global user.name "Khalil Nasri"
git config --global user.email "khalilnasri95@gmail.com"
```

## 🚀 Schritt 3: Repository initialisieren

Navigieren Sie zum Projektordner und führen Sie aus:

```powershell
cd "C:\Users\oussa\Downloads\khalil-nasri-portfolio-master\khalil-nasri-portfolio-master"
git init
git add .
git commit -m "Initial commit: Portfolio Website"
```

## 📤 Schritt 4: GitHub Repository erstellen (optional)

1. Gehen Sie zu https://github.com und erstellen Sie ein neues Repository
2. Fügen Sie das Remote-Repository hinzu:
   ```powershell
   git remote add origin https://github.com/IHR-USERNAME/IHR-REPO-NAME.git
   git branch -M main
   git push -u origin main
   ```

## 📝 Nützliche Git-Befehle

```powershell
# Status prüfen
git status

# Änderungen hinzufügen
git add .
git add src/PortfolioKhalil.jsx  # Nur eine Datei

# Commit erstellen
git commit -m "Beschreibung der Änderungen"

# Änderungen hochladen (nach GitHub)
git push

# Änderungen herunterladen (von GitHub)
git pull

# Commit-Historie anzeigen
git log --oneline
```

## ✅ Nach der Installation

Nachdem Sie Git installiert haben, können Sie zurückkommen und ich helfe Ihnen beim Initialisieren des Repositories!

