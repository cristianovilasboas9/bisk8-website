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
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: 12, color: "#444" }}>© 2026 BISK8</span>
            <a href="https://instagram.com/bisk8.app" target="_blank" rel="noopener noreferrer" style={{ color: "#666", transition: "color 0.3s" }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#666'}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://tiktok.com/@bisk8.app" target="_blank" rel="noopener noreferrer" style={{ color: "#666", transition: "color 0.3s" }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#666'}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.41a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.84z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
