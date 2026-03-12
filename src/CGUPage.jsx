import { useEffect } from "react";
import { useLanguage, languages } from "./LanguageContext.jsx";
import cguTranslations from "./translations/cgu-translations.js";

const WHITE_LOGO = "/images/white-logo.svg";

const LEGAL_CSS = `
@font-face { font-family: "HighCruiser"; src: url("/fonts/HighCruiser.ttf") format("truetype"); }
.legal-content h1 { font-family: 'HighCruiser', sans-serif; font-size: 28px; font-weight: 900; margin: 40px 0 20px; letter-spacing: 2px; }
.legal-content h2 { font-family: 'HighCruiser', sans-serif; font-size: 22px; font-weight: 800; margin: 32px 0 16px; letter-spacing: 1px; color: #fff; }
.legal-content h3 { font-size: 17px; font-weight: 700; margin: 24px 0 12px; color: #ccc; }
.legal-content p { font-family: Inter, -apple-system, sans-serif; font-size: 14px; line-height: 1.8; color: #999; margin: 0 0 16px; }
.legal-content li { font-family: Inter, -apple-system, sans-serif; font-size: 14px; line-height: 1.8; color: #999; margin-left: 20px; list-style: disc; }
.legal-content strong { color: #ccc; }
.legal-content hr { border: none; border-top: 1px solid #222; margin: 32px 0; }
.legal-content table { width: 100%; border-collapse: collapse; margin: 16px 0 24px; }
.legal-content th { font-family: Inter, -apple-system, sans-serif; font-size: 13px; font-weight: 600; color: #ccc; text-align: left; padding: 10px 12px; border-bottom: 2px solid #333; background: #111; }
.legal-content td { font-family: Inter, -apple-system, sans-serif; font-size: 13px; line-height: 1.6; color: #999; padding: 10px 12px; border-bottom: 1px solid #1a1a1a; }
.legal-content tr:hover td { background: #0a0a0a; }
`;

const LANG_LABELS = { fr: "FR", en: "EN", de: "DE", es: "ES", it: "IT", pt: "PT", ar: "AR", zh: "中文", ru: "RU" };

export default function CGUPage() {
  const { lang, setLanguage } = useLanguage();
  const content = cguTranslations[lang] || cguTranslations.fr;
  const isRTL = lang === "ar";

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ fontFamily: "'HighCruiser', sans-serif", background: "#000", color: "#fff", minHeight: "100vh", direction: isRTL ? "rtl" : "ltr" }}>
      <style>{LEGAL_CSS}</style>
      <nav style={{ padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #111" }}>
        <a href="/"><img src={WHITE_LOGO} alt="BISK8" style={{ height: 24 }} /></a>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
          {languages.map((l) => (
            <button
              key={l}
              onClick={() => setLanguage(l)}
              style={{
                background: lang === l ? "#fff" : "transparent",
                color: lang === l ? "#000" : "#666",
                border: lang === l ? "1px solid #fff" : "1px solid #333",
                borderRadius: 4,
                padding: "4px 10px",
                fontSize: 11,
                fontFamily: "Inter, -apple-system, sans-serif",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {LANG_LABELS[l]}
            </button>
          ))}
        </div>
      </nav>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 32px 120px" }}>
        <div className="legal-content" dangerouslySetInnerHTML={{ __html: content }} />
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
