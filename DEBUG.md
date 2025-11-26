# Debug-Anleitung: React/Vite App zeigt nichts an

## 🔍 Schritt-für-Schritt Debugging

### 1. Browser-Konsole prüfen
Öffne die Browser-Konsole (F12) und prüfe:
- ✅ Siehst du die Debug-Meldungen aus `main.jsx`?
  - "✅ Root-Element gefunden"
  - "✅ React Version: ..."
  - "✅ React Root erstellt"
  - "✅ PortfolioKhalil gerendert"

### 2. Test-Komponente verwenden
Temporär in `main.jsx` ändern:
```jsx
import TestComponent from "./TestComponent.jsx";
// import PortfolioKhalil from "./PortfolioKhalil.jsx";

root.render(
  <React.StrictMode>
    <TestComponent />
  </React.StrictMode>
);
```

Wenn du jetzt einen roten Kasten siehst → React funktioniert!
Wenn nicht → Problem liegt tiefer (Vite/HTML).

### 3. HTML prüfen
Im Browser: Rechtsklick → "Seitenquelltext anzeigen"
- Prüfe ob `<div id="root"></div>` existiert
- Prüfe ob `<script type="module" src="/src/main.jsx"></script>` existiert

### 4. Network-Tab prüfen
Im Browser DevTools → Network-Tab:
- Wird `main.jsx` geladen? (Status 200?)
- Werden CSS-Dateien geladen?
- Gibt es 404-Fehler?

### 5. Häufige Probleme

#### Problem: Path-Aliase funktionieren nicht
**Symptom:** Fehler wie "Cannot find module '@/components/ui/card'"
**Lösung:** Prüfe `vite.config.js` - Path-Alias sollte konfiguriert sein

#### Problem: CSS wird nicht geladen
**Symptom:** Seite ist weiß/leer, aber React rendert
**Lösung:** Prüfe ob `index.css` importiert wird in `main.jsx`

#### Problem: Assets fehlen
**Symptom:** Fehler beim Laden von Bildern/PDFs
**Lösung:** Prüfe ob alle Assets in `src/assets/` existieren

#### Problem: JavaScript-Fehler
**Symptom:** Fehler in der Konsole
**Lösung:** Prüfe die Fehlermeldung genau

### 6. Hard Refresh
- Strg+Shift+R (Windows/Linux)
- Cmd+Shift+R (Mac)
- Oder: DevTools öffnen → Rechtsklick auf Reload-Button → "Cache leeren und hart neu laden"

### 7. Vite-Server neu starten
```bash
# Server stoppen (Strg+C)
# Dann neu starten:
npm run dev
```

### 8. Node Modules neu installieren
```bash
rm -rf node_modules
npm install
npm run dev
```

## 🎯 Schnelltest

1. Öffne Browser-Konsole (F12)
2. Prüfe ob Debug-Meldungen erscheinen
3. Prüfe Network-Tab für fehlende Dateien
4. Teste mit TestComponent (siehe Schritt 2)

