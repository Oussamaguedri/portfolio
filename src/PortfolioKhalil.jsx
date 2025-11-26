import { useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  FileDown,
  Rocket,
  Wrench,
  TestTubes,
  Cpu,
  Star,
  Award,
  GraduationCap,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Youtube, Link as LinkIcon } from "lucide-react";
import BackgroundNetwork from "@/components/BackgroundNetwork";
import ContactForm from "@/components/ContactForm";

// 🖼️ Assets
import profile from "./assets/profile.jpg";
import cvFile from "./assets/lebenslauf_Nasri_Khalil.pdf";
import masterPDF from "./assets/MasterUrkunde.pdf";
import bachelorPDF from "./assets/BachelorUrkunde.pdf";
import istqbPDF from "./assets/ISTQB_Certificate.pdf";
import udemyPDF from "./assets/Arbeitszeugnis.pdf";
import Erasmuspdf from "./assets/Trainingsprogramm.pdf";
import SPSPDF from  "./assets/01_SPS_Grundkurs.pdf";
import testifyHubPDF from "./assets/TestifyHub_QA_Lernprojekt.pdf";

export default function PortfolioKhalil() {
  // Dark Mode immer aktiv - keine Toggle-Funktion mehr
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const sections = [
    { id: "about", label: "Über mich" },
    { id: "experience", label: "Erfahrung" },
    { id: "projects", label: "Projekte" },
    { id: "education", label: "Akademische Abschlüsse" },
    { id: "certificates", label: "Zertifikate" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Kontakt" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050816] to-black text-slate-100 relative overflow-hidden">
      {/* NETZWERK-HINTERGRUND */}
      <BackgroundNetwork />
      
      {/* OVERLAY für bessere Text-Lesbarkeit */}
      <div className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-b from-transparent via-black/30 to-black/60" />
      
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-[#050816]/90 border-b border-slate-800 relative">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-slate-100" />
            <span className="font-semibold tracking-tight text-slate-100">Khalil Nasri</span>
            <span className="text-xs text-slate-400"> · Challenge & Fun</span>
          </div>

          <nav className="hidden md:flex items-center gap-4 text-sm">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-slate-200 hover:text-slate-100 hover:underline underline-offset-4 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-8 grid md:grid-cols-[1fr_1.5fr] gap-8 items-center relative z-10">
        {/* FOTO */}
        <div className="flex justify-center md:justify-start">
          <img
            src={profile}
            alt="Khalil Nasri"
            className="w-60 h-60 object-cover rounded-full border-4 border-slate-700 shadow-lg"
          />
        </div>

        {/* TEXT */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight animate-fadeInUp [animation-delay:0.1s] text-white">
            Junior Ingenieur (Messtechnik & Automatisierung)  QA/Softwaretest | PLC/SPS
          </h1>
          <p className="mt-4 text-slate-200 max-w-2xl animate-fadeInUp [animation-delay:0.3s]">
            Neues entwickeln. Täglich lernen. Herausforderungen meistern. Qualität & Automatisierung im Fokus.
          </p>

          <div className="mt-5 flex flex-wrap gap-2 animate-fadeInUp [animation-delay:0.5s]">
            <Badge>QA · Selenium · Playwright</Badge>
            <Badge>Python · C/C++ · OpenCV</Badge>
            <Badge>TensorFlow · scikit-learn</Badge>
            <Badge>SQL · Power BI</Badge>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 animate-fadeInUp [animation-delay:0.6s]">
            <a href="#projects" className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50 bg-slate-800/80 text-slate-100 shadow-sm hover:bg-slate-700/80 h-9 px-4 py-2">
              <Wrench className="mr-2 h-4 w-4" />
              Projekte ansehen
            </a>
            <a href={cvFile} download className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white shadow hover:bg-blue-700 h-9 px-4 py-2">
              <FileDown className="mr-2 h-4 w-4" />
              CV Herunterladen
            </a>
          </div>
        </div>
      </section>

      {/* ÜBER MICH */}
      <Section id="about" title="Über mich" icon={<Rocket className="h-5 w-5" />}>
        <p className="text-slate-200">
          Ich liebe anspruchsvolle Probleme, steile Lernkurven und saubere Lösungen. Ob PLC/SPS, automatisierte UI-Tests, funktionsnahe Entwicklung oder Bildverarbeitung  ich liefere strukturierte, zuverlässige Ergebnisse.
          <strong className="text-slate-100"> Challenge accepted.</strong>
        </p>
      </Section>

      {/* ERFAHRUNG */}
      <Section id="experience" title="Erfahrung" icon={<Wrench className="h-5 w-5" />}>
        <Timeline
          items={[
            {
              title: "Software Tester (Teilzeit, Remote)",
              org: "Webify Technology",
              period: "05/2025 – heute",
              bullets: [
                         "Automatisierte & manuelle Tests (Selenium, Playwright, pytest)",
                          "Testdokumentation in Jira, API-Tests (Postman)",
                        ],
            },
            {
                title: "Masterarbeit: Deep Learning & Computer Vision (1.3)",
                org: "Kooperation mit Schlüter|group",
                period: "09/2023 – 07/2024",
                bullets: [
                  "Gesichtserkennung: eigenes CNN vs. transferlearned VGG-Face",
                  "Handgestenerkennung via MediaPipe; Umsetzung auf ATmega32U4",
                ],
                links: [
                  { href: "https://youtu.be/Hb7JYRkED-0", label: "Gesichtserkennung (Video)" },
                  { href: "https://youtu.be/-avKLzdTlXQ", label: "Gestenerkennung (Video)" },
                ],
              },
            {
              title: "Praktikant: Future Powertrain / Diagnosis",
              org: "IAV GmbH",
              period: "05/2022 – 10/2022",
              bullets: [
                "Analyse von Messdaten und Erstellung von Integrationsauswertungen ",
                "Automatisierung der Datenauswertung",
                "Testprozess-Automatisierung mit INCA-Flow ",
                "Mitwirkung im Projektumfeld von Thermomanagement und Leistungselektronik  ",

              ],
            },
           {
              title: "Bachelorarbeit: Entwicklung eines HHO-Generators zur Wasserstoffproduktion  (1.7) ",
              org: "SITEM, Tunesien ",
              period: "01/2016 – 06/2016",
              bullets: [
                "Entwicklung und Herstellung eines HHO-Generators",
                "Automatisierung der Datenauswertung",
                "Testing und Optimierung der Elektrolyseparameter (Spannung, Stromstärke, Elektrolytlösung) zur Steigerung der Wasserstoffproduktion. ",
                

              ],
            },
            {
              title: "Praktikant im Bereich Photovoltaikanlagen",
              org: "PVTT, Tunesien",
              period: "06/2015 – 09/2015", // Zeitraum eintragen
              bullets: [
                "Unterstützung bei der Montage von Solarmodulen",
                "Durchführung von Spannungsmessungen und Funktionsprüfungen",
                "Unterstützung bei der Projektplanung und Dimensionierung der Anlagengröße",
              ],
            },
          ]}
        />
      </Section> 

      

      {/* AKADEMISCHE ABSCHLÜSSE */}
      <Section id="education" title="Akademische Abschlüsse" icon={<GraduationCap className="h-5 w-5" />}>
        <div className="grid grid-cols-1 gap-4">
          <CertificateCard
            title="Master of Engineering Elektrotechnik/Informationstechnik Schwerpunkt 
                  Mess- und Automatisierungstechnik (2.4)"
            issuer="HAWK Hochschule für angewandte Wissenschaft und Kunst"
            year="2024"
            pdf={masterPDF}
          />
          <CertificateCard
            title="Bachelor in Angewandter Energetik (2.0)"
            issuer="Hochschule für Wissenschaft und Technologie, Sousse"
            year="2016"
            pdf={bachelorPDF}
          />
        </div>
      </Section> 

        
      
      {/* PROJEKTE */}
      <Section id="projects" title="Projekte" icon={<Cpu className="h-5 w-5" />}>
        <div className="grid md:grid-cols-2 gap-4">
          <ProjectCard
            title="TestifyHub – QA Lernprojekt"
            summary="Testdokumentation, UI-Automatisierung, API-Validierung, HTML-Reports."
            chips={["Selenium", "Python", "Jira", "Postman", "Reqres.in"]}
            pdf={testifyHubPDF}
          />
          <ProjectCard
            title="Thunder – Mobile Web Automation"
            summary="Automatisiertes Login, Bestellung, Geolocation & Helper-Utils."
            chips={["Playwright", "Selenium", "Python", "Mobile Web"]}
          />

          <ProjectCard
            title="Simulationsmodell für ein Luftschiff"
            summary="Entwicklung eines dynamischen Modells für ein Luftschiff; Simulation und Visualisierung der Bewegung mit MATLAB/Simulink."
            chips={["MATLAB", "Simulink", "mathematische Gleichungen", "Visualisierung"]}
          />
          <ProjectCard
            title="Smart-Home: Kamera-Trigger mit WiFi-LED & Türöffnung"
            summary="OpenHAB auf Raspberry Pi: Kamera erkennt Ereignis (Licht/Person), schaltet WiFi-LED zur Signalisierung und triggert Türöffnung (Relais/Smart-Lock) über MQTT/HTTP. Inkl. Automation (Rules), Status-Monitoring und Benachrichtigung."
            chips={["OpenHAB", "Raspberry Pi", "Kamera", "OpenCV/Bewegung", "MQTT",  "Smart Lock/Relais"]}
          />
          <ProjectCard
            title="Smart-Parking: Front/Heck-Ultraschall mit Winkel & Pieper"
            summary="Vorne/hinten erkennen Ultraschallsensoren Hindernisse. Das System schickt Position, Distance & Winkel (links/rechts) als Nachricht und steuert den Piepton: je näher, desto schneller inklusive Dauerpiep bei sehr geringer Distanz."
            chips={["Raspberry Pi", "Ultraschall", "Front/Heck", "Winkelschätzung", "MQTT", "Buzzer"]}
          />
          <ProjectCard
            title="Autonome Wegfindung mit Deep Reinforcement Learning (DQN)"
            summary="Mitentwicklung eines virtuellen Roboters zur autonomen Navigation in Simulation; State-Design,  Training & Evaluation im akademischen Team."
            chips={["Python", "DQN", "Reinforcement Learning", "TensorFlow", "Simulation", "Navigation"]}
          />

        </div>

      </Section>

      




      {/* ZERTIFIKATE */}
      <Section id="certificates" title="Zertifikate" icon={<Award className="h-5 w-5" />}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CertificateCard title="ISTQB Certified Tester" issuer="GASQ Service GmbH" year="2024" pdf={istqbPDF} />
          <CertificateCard title="Arbeitszeugnis" issuer="IAV GmbH " year="" pdf={udemyPDF} />
          <CertificateCard title="Trainingsprogramm" issuer="Erasmus+ " year="2024/2025" pdf={Erasmuspdf} />
          <CertificateCard title="SPS Grundkurs " issuer=" SPS4You" year="2025" pdf={SPSPDF} />
          
          
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills" icon={<Star className="h-5 w-5" />}>
        <div className="grid md:grid-cols-3 gap-4">
          <SkillCard
            title="Programmier- & Datenstack"
            items={["Python", "C/C++", "SQL", "Power BI"]}
          />
          <SkillCard
            title="AI · CV · ML"
            items={["TensorFlow", "scikit-learn", "OpenCV"]}
          />
          <SkillCard
            title="Testing & Tools"
            items={["Selenium", "Playwright", "pytest", "Jira", "Postman"]}
          />
        </div>
      </Section>

      {/* KONTAKT */}
      <Section id="contact" title="Kontakt" icon={<Mail className="h-5 w-5" />}>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Direkte Kontaktdaten */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Direkt</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <Line icon={<Mail className="h-4 w-4" />} value={<a className="underline underline-offset-4 text-slate-200 hover:text-slate-100 transition" href="mailto:khalilnasri95@gmail.com">khalilnasri95@gmail.com</a>} />
              <Line icon={<Phone className="h-4 w-4" />} value={<a className="underline underline-offset-4 text-slate-200 hover:text-slate-100 transition" href="tel:+4917620472313">+49 176 20472313</a>} />
              <Line icon={<MapPin className="h-4 w-4" />} value={<span className="text-slate-200">Hannover, Deutschland</span>} />
            </CardContent>
          </Card>

          {/* Kontaktformular */}
          <ContactForm />
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-6xl px-4 py-10 text-xs text-slate-400 relative z-10">
        © {new Date().getFullYear()} Khalil Nasri · Built with React + Tailwind + shadcn/ui
      </footer>
    </div>
  );
}

/* ---------- UI HELPERS ---------- */

function Section({ id, title, icon, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-10 animate-fadeInUp relative z-10">
      <div className="flex items-center gap-2 mb-6">
        {icon && <span className="text-slate-200">{icon}</span>}
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-100">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Line({ icon, value }) {
  return <div className="flex items-center gap-2 text-sm text-slate-200">{icon && <span className="text-slate-300">{icon}</span>}<div>{value}</div></div>;
}

function Timeline({ items = [] }) {
  return (
    <div className="space-y-4">
      {(items || []).map((it, i) => (
        <Card key={i} className="rounded-2xl">
          <CardHeader>
            <CardTitle className="flex flex-wrap justify-between gap-3">
              <span className="text-slate-100">
                {it?.title} ·{" "}
                <span className="font-normal text-slate-400">{it?.org}</span>
              </span>
              <span className="text-sm text-slate-400">{it?.period}</span>
            </CardTitle>
          </CardHeader>

          <CardContent className="text-sm space-y-2 text-slate-200">
            {/* 🟢 Aufgaben / Bullets */}
            {Array.isArray(it?.bullets) && it.bullets.length > 0 && (
              <ul className="list-disc pl-5 space-y-1 text-slate-200">
                {it.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            )}

            {/* 🔗 Links (z. B. Videos, Präsentationen etc.) */}
            {Array.isArray(it?.links) && it.links.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {it.links.map((link, idx) => {
                  const href = link?.href ?? "";
                  const label = link?.label;
                  const isYouTube = /(?:youtube\.com|youtu\.be)/i.test(href);

                  return (
                    <a
                      key={idx}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={label || (isYouTube ? "YouTube" : "Link öffnen")}
                      aria-label={label || (isYouTube ? "YouTube" : "Link öffnen")}
                      className="inline-flex items-center text-xs px-2 py-1 rounded-md
                                 bg-red-600 text-white hover:bg-red-700
                                 border border-transparent transition"
                    >
                      {isYouTube ? (
                        <Youtube className="h-3.5 w-3.5 mr-1" />
                      ) : (
                        <LinkIcon className="h-3.5 w-3.5 mr-1" />
                      )}
                      {label ?? (isYouTube ? "YouTube" : "Öffnen")}
                    </a>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}


function ProjectCard({ title, summary, chips = [], pdf }) {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>{title}</CardTitle>

        {/* Optionaler PDF-Download */}
        {pdf && (
                    <a
            href={pdf}
            download
            className="inline-flex items-center text-xs px-2 py-1 rounded-md
                      bg-blue-600 text-white hover:bg-blue-700
                      border border-transparent transition"
          >
            <FileDown className="h-3.5 w-3.5 mr-1" />
            Download
          </a>
        )}
      </CardHeader>

      <CardContent>
        <p className="text-sm text-slate-200">{summary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {chips.map((c, i) => <Badge key={i}>{c}</Badge>)}
        </div>
      </CardContent>
    </Card>
  );
}

function SkillCard({ title, items = [] }) {
  return (
    <Card className="rounded-2xl">
      <CardHeader><CardTitle className="text-base">{title}</CardTitle></CardHeader>
      <CardContent><ul className="text-sm list-disc pl-5 space-y-1 text-slate-200">{items.map((x, i) => <li key={i}>{x}</li>)}</ul></CardContent>
    </Card>
  );
}

function CertificateCard({ title, issuer, year, pdf }) {
  return (
    <Card className="rounded-2xl transition hover:shadow-md hover:shadow-slate-800">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-base font-semibold flex items-center gap-2">
          <Award className="h-4 w-4 text-amber-500" /> {title}
        </CardTitle>

        {pdf && (
          <a
            href={pdf}
            download
            className="inline-flex items-center text-xs px-2 py-1 rounded-md
                       bg-blue-600 text-white hover:bg-blue-700
                       border border-transparent transition"
          >
            <FileDown className="h-3.5 w-3.5 mr-1" /> Download
          </a>
        )}
      </CardHeader>

      <CardContent className="text-sm text-slate-200">
        <p className="mb-1">{issuer}</p>
        <p className="text-xs text-slate-400">{year}</p>
      </CardContent>
    </Card>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-2xl border px-3 py-1 text-xs border-slate-700 text-slate-200 bg-slate-800/50">
      {children}
    </span>
  );
}
