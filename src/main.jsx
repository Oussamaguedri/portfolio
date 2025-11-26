import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind CSS hier laden
import PortfolioKhalil from "./PortfolioKhalil.jsx";

// Debug: Prüfe ob root-Element existiert
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("❌ FEHLER: Element mit id='root' nicht gefunden!");
  throw new Error("Root element not found");
}

console.log("✅ Root-Element gefunden:", rootElement);

// Debug: Prüfe ob React geladen ist
console.log("✅ React Version:", React.version);
console.log("✅ ReactDOM verfügbar:", !!ReactDOM);

try {
  const root = ReactDOM.createRoot(rootElement);
  console.log("✅ React Root erstellt");
  
  root.render(
  <React.StrictMode>
    <PortfolioKhalil />
  </React.StrictMode>
);
  
  console.log("✅ PortfolioKhalil gerendert");
} catch (error) {
  console.error("❌ FEHLER beim Rendern:", error);
  throw error;
}
