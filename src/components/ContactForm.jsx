import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Validierung
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name ist erforderlich";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-Mail ist erforderlich";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Bitte gib eine gültige E-Mail-Adresse ein";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Nachricht ist erforderlich";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Nachricht muss mindestens 10 Zeichen lang sein";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Fehler beim Tippen löschen
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    // Status zurücksetzen
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS Konfiguration fehlt. Bitte prüfe deine .env Datei.");
      }

      // E-Mail senden mit EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "Kontaktanfrage von Portfolio",
          message: formData.message,
          to_email: "khalilnasri95@gmail.com",
        },
        publicKey
      );

      // Erfolg
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Fehler beim Senden der E-Mail:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Send className="h-5 w-5" />
          Nachricht senden
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-1">
              Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full bg-slate-900/40 border rounded-xl px-4 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500/70 focus:border-violet-500 transition ${
                errors.name ? "border-red-500" : "border-slate-700"
              }`}
              placeholder="Dein Name"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">{errors.name}</p>
            )}
          </div>

          {/* E-Mail */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-1">
              E-Mail <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full bg-slate-900/40 border rounded-xl px-4 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500/70 focus:border-violet-500 transition ${
                errors.email ? "border-red-500" : "border-slate-700"
              }`}
              placeholder="deine@email.de"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email}</p>
            )}
          </div>

          {/* Betreff */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-200 mb-1">
              Betreff
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-slate-900/40 border border-slate-700 rounded-xl px-4 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500/70 focus:border-violet-500 transition"
              placeholder="Betreff (optional)"
            />
          </div>

          {/* Nachricht */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-1">
              Nachricht <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full bg-slate-900/40 border rounded-xl px-4 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500/70 focus:border-violet-500 transition resize-none ${
                errors.message ? "border-red-500" : "border-slate-700"
              }`}
              placeholder="Deine Nachricht (mind. 10 Zeichen)"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message}</p>
            )}
          </div>

          {/* Status-Meldungen */}
          {submitStatus === "success" && (
            <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-xl text-sm text-green-300">
              ✓ Danke für deine Nachricht! Ich melde mich so schnell wie möglich.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-sm text-red-300">
              ✗ Leider ist ein Fehler aufgetreten. Bitte versuche es später erneut.
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-violet-600 hover:bg-violet-500 disabled:bg-violet-600/50 disabled:cursor-not-allowed text-white font-medium rounded-xl px-5 py-2.5 transition flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sende...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Nachricht senden
              </>
            )}
          </button>
        </form>
      </CardContent>
    </Card>
  );
}

