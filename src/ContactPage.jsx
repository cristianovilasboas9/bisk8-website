import { useState, useEffect } from "react";
import { useLanguage, languages } from "./LanguageContext.jsx";
import contactTranslations from "./translations/contact-translations.js";

const WHITE_LOGO = "/images/white-logo.svg";

const CONTACT_CSS = `
@font-face { font-family: "HighCruiser"; src: url("/fonts/HighCruiser.ttf") format("truetype"); }
`;

const LANG_LABELS = { fr: "FR", en: "EN", de: "DE", es: "ES", it: "IT", pt: "PT", ar: "AR", zh: "中文", ru: "RU" };

export default function ContactPage() {
  const { lang, setLanguage } = useLanguage();
  const t = contactTranslations[lang] || contactTranslations.fr;
  const isRTL = lang === "ar";
  const [showLangMenu, setShowLangMenu] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ fontFamily: "'HighCruiser', sans-serif", background: "#000", color: "#fff", minHeight: "100vh", direction: isRTL ? "rtl" : "ltr" }}>
      <style>{CONTACT_CSS}</style>
      <nav style={{ padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #111" }}>
        <a href="/"><img src={WHITE_LOGO} alt="BISK8" style={{ height: 24 }} /></a>
        <div style={{ position: "relative" }}>
          <button onClick={() => setShowLangMenu(!showLangMenu)} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "6px 14px", color: "#fff", fontSize: 13, cursor: "pointer", fontFamily: "'HighCruiser', sans-serif", fontWeight: 500 }}>
            {LANG_LABELS[lang] || lang.toUpperCase()} ▾
          </button>
          {showLangMenu && (
            <div style={{ position: "absolute", top: 40, right: 0, background: "#111", border: "1px solid #333", borderRadius: 12, overflow: "hidden", minWidth: 80, zIndex: 100 }}>
              {languages.map(l => (
                <div key={l} onClick={() => { setLanguage(l); setShowLangMenu(false); }} style={{ padding: "8px 16px", cursor: "pointer", fontSize: 13, color: l === lang ? "#fff" : "#888", background: l === lang ? "#222" : "transparent", fontWeight: l === lang ? 600 : 400 }}>
                  {LANG_LABELS[l] || l.toUpperCase()}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 32px 120px" }}>
        <h1 style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: 42, fontWeight: 900, letterSpacing: 3, marginBottom: 60, lineHeight: 1.2 }}>{t.title}</h1>

        <div style={{ marginBottom: 48 }}>
          <img src={WHITE_LOGO} alt="BISK8" style={{ height: 26, marginBottom: 16 }} />
          <p style={{ fontFamily: "Inter, -apple-system, sans-serif", fontSize: 15, lineHeight: 1.9, color: "#999" }}>
            {t.location}
          </p>
        </div>

        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "Inter, -apple-system, sans-serif", fontSize: 15, lineHeight: 1.9, color: "#999" }}>
            {t.emailLabel} : <a href="mailto:contact@bisk8.co" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid #333" }}>contact@bisk8.co</a>
          </p>
        </div>

        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "Inter, -apple-system, sans-serif", fontSize: 15, lineHeight: 2.2, color: "#999" }}>
            {t.questionsIntro}<br />
            <span style={{ color: "#666" }}>—</span> {t.questionApp} → <a href="mailto:contact@bisk8.co" style={{ color: "#ccc", textDecoration: "none" }}>contact@bisk8.co</a><br />
            <span style={{ color: "#666" }}>—</span> {t.questionTerms} → <a href="mailto:contact@bisk8.co" style={{ color: "#ccc", textDecoration: "none" }}>contact@bisk8.co</a><br />
            <span style={{ color: "#666" }}>—</span> {t.questionPrivacy} → <a href="mailto:contact@bisk8.co" style={{ color: "#ccc", textDecoration: "none" }}>contact@bisk8.co</a><br />
            <span style={{ color: "#666" }}>—</span> {t.questionPartnership} → <a href="mailto:info@bisk8.co" style={{ color: "#ccc", textDecoration: "none" }}>info@bisk8.co</a>
          </p>
        </div>

        <div style={{ padding: "24px 0", borderTop: "1px solid #222" }}>
          <p style={{ fontFamily: "Inter, -apple-system, sans-serif", fontSize: 14, color: "#666", fontStyle: "italic" }}>
            {t.responseTime}
          </p>
        </div>
      </div>
      <footer style={{ padding: "48px 32px", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <img src={WHITE_LOGO} alt="BISK8" style={{ height: 22 }} />
          <div style={{ display: "flex", gap: 24 }}>
            <a href="/cgu" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>CGU</a>
            <a href="/privacy" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>Privacy</a>
            <a href="/contact" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>Contact</a>
          </div>
          <div style={{ fontSize: 12, color: "#444" }}>© 2026 BISK8</div>
        </div>
      </footer>
    </div>
  );
}
