# Deployment auf Netlify

## Option 1: Automatisches Deployment (empfohlen)

1. **GitHub Repository verbinden:**
   - Gehe zu [netlify.com](https://netlify.com) und melde dich an
   - Klicke auf "Add new site" → "Import an existing project"
   - Verbinde dein GitHub Repository
   - Netlify erkennt automatisch die `netlify.toml` Datei

2. **Environment-Variablen setzen:**
   - Gehe zu: Site settings → Environment variables
   - Füge diese drei Variablen hinzu:
     - `VITE_EMAILJS_SERVICE_ID` = deine_service_id
     - `VITE_EMAILJS_TEMPLATE_ID` = deine_template_id
     - `VITE_EMAILJS_PUBLIC_KEY` = deine_public_key
   - **Wichtig:** Diese Werte müssen dupliziert werden für "Production", "Deploy previews" und "Branch deploys"

3. **Deploy:**
   - Netlify baut automatisch bei jedem Push zu deinem Repository
   - Oder klicke auf "Trigger deploy" → "Deploy site"

## Option 2: Manuelles Deployment

1. **Lokal bauen:**
   ```bash
   npm run build
   ```
   Das erstellt das `dist` Verzeichnis.

2. **Netlify CLI installieren (optional):**
   ```bash
   npm install -g netlify-cli
   ```

3. **Deployen:**
   ```bash
   netlify deploy --prod --dir=dist
   ```

## Wichtige Hinweise:

- Die `.env` Datei wird **nicht** auf Netlify hochgeladen (sie ist in `.gitignore`)
- Du musst die Environment-Variablen in Netlify manuell setzen
- Nach dem Setzen der Variablen muss ein neuer Build ausgelöst werden

