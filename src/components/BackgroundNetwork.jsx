import { useEffect, useRef } from "react";

export default function BackgroundNetwork() {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let isActive = true;

    // Canvas-Größe setzen
    const setCanvasSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      return { width, height };
    };

    const { width, height } = setCanvasSize();

    // Partikel erstellen
    const particleCount = 120;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius: Math.random() * 3 + 2.5, // Größere Partikel
      });
    }
    particlesRef.current = particles;

    // Animation
    const animate = () => {
      if (!isActive) return;
      
      const currentParticles = particlesRef.current;
      if (!currentParticles || currentParticles.length === 0) return;

      // Canvas löschen (transparent)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Partikel aktualisieren und zeichnen
      currentParticles.forEach((particle) => {
        // Bewegung
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Rand-Kollision
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Partikel zeichnen mit violet/bläulichem Glow - VIEL SICHTBARER
        ctx.shadowBlur = 25;
        ctx.shadowColor = "rgba(139, 92, 246, 1)"; // Violett - sehr starker Glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        // Kräftigere Farbe - violett mit bläulichem Akzent
        ctx.fillStyle = "rgba(139, 92, 246, 1)"; // Volle Opacity für maximale Sichtbarkeit
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Linien zwischen nahen Partikeln zeichnen (Netz-Effekt) - VIEL SICHTBARER
      const maxDistance = 180; // Größere Reichweite
      for (let i = 0; i < currentParticles.length; i++) {
        for (let j = i + 1; j < currentParticles.length; j++) {
          const dx = currentParticles[i].x - currentParticles[j].x;
          const dy = currentParticles[i].y - currentParticles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.8; // VIEL sichtbarer
            ctx.beginPath();
            ctx.moveTo(currentParticles[i].x, currentParticles[i].y);
            ctx.lineTo(currentParticles[j].x, currentParticles[j].y);
            // Kräftige violett/bläuliche Linien
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 2; // Dickere Linien für bessere Sichtbarkeit
            ctx.stroke();
          }
        }
      }

      if (isActive) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    // Resize Handler
    const handleResize = () => {
      if (!isActive) return;
      const { width, height } = setCanvasSize();
      // Partikel neu positionieren wenn nötig
      particlesRef.current.forEach((p) => {
        if (p.x > width) p.x = width;
        if (p.y > height) p.y = height;
      });
    };

    window.addEventListener("resize", handleResize);
    
    // Animation starten
    console.log("🎨 BackgroundNetwork: Animation startet");
    animate();

    return () => {
      isActive = false;
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      // Canvas löschen
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        width: "100%",
        height: "100%",
        opacity: 1,
      }}
    />
  );
}

