import { useEffect, useState } from "react";
import { useLanguage, languages } from "./LanguageContext.jsx";
import cguTranslations from "./translations/cgu-translations.js";

const WHITE_LOGO = "/images/white-logo.svg";

const LANG_LABELS = { fr: "FR", en: "EN", de: "DE", es: "ES", it: "IT", pt: "PT", ar: "AR", zh: "中文", ru: "RU" };

const LEGAL_CSS = `
@font-face { font-family: "HighCruiser"; src: url("/fonts/HighCruiser.ttf") format("truetype"); }
.legal-content h1 { font-family: 'HighCruiser', sans-serif; font-size: 28px; font-weight: 900; margin: 40px 0 20px; letter-spacing: 2px; line-height: 1.2; }
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
.bisk8-inline { height: 13px; vertical-align: middle; opacity: 0.35; margin: 0 2px; }
.legal-content h1 .bisk8-inline { height: 26px; opacity: 1; }
.legal-content h2 .bisk8-inline { height: 20px; opacity: 0.9; }
.legal-content strong .bisk8-inline { height: 13px; opacity: 0.5; }
@media (max-width: 768px) {
  .legal-content h1 { font-size: 22px !important; word-break: break-word; }
  .legal-content h2 { font-size: 18px !important; }
  .legal-content h1 .bisk8-inline { height: 20px; }
  .legal-content table { display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; }
}
`;

function processBisk8Logos(html) {
  return (html || "").replace(/BISK8/g, '<img src="/images/white-logo.svg" alt="BISK8" class="bisk8-inline">');
}

export default function CGUPage() {
  const { lang, setLanguage } = useLanguage();
  const [showMenu, setShowMenu] = useState(false);
  const content = cguTranslations[lang] || cguTranslations.fr;
  const isRTL = lang === "ar";

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ fontFamily: "'HighCruiser', sans-serif", background: "#000", color: "#fff", minHeight: "100vh", direction: isRTL ? "rtl" : "ltr", overflowX: "hidden" }}>
      <style>{LEGAL_CSS}</style>
      <nav style={{ padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #111" }}>
        <a href="/"><img src={WHITE_LOGO} alt="BISK8" style={{ height: 24 }} /></a>
        <div style={{ position: "relative" }}>
          <button onClick={() => setShowMenu(!showMenu)} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "6px 14px", color: "#fff", fontSize: 13, cursor: "pointer", fontFamily: "'HighCruiser', sans-serif", fontWeight: 500 }}>
            {LANG_LABELS[lang] || lang.toUpperCase()} ▾
          </button>
          {showMenu && (
            <div style={{ position: "absolute", top: 40, right: 0, background: "#111", border: "1px solid #333", borderRadius: 12, overflow: "hidden", minWidth: 80, zIndex: 100 }}>
              {languages.map(l => (
                <div key={l} onClick={() => { setLanguage(l); setShowMenu(false); }} style={{ padding: "8px 16px", cursor: "pointer", fontSize: 13, color: l === lang ? "#fff" : "#888", background: l === lang ? "#222" : "transparent", fontWeight: l === lang ? 600 : 400 }}>
                  {LANG_LABELS[l] || l.toUpperCase()}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 32px 120px" }}>
        <div className="legal-content" dangerouslySetInnerHTML={{ __html: processBisk8Logos(content) }} />
      </div>
      <footer style={{ padding: "48px 32px", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <img src={WHITE_LOGO} alt="BISK8" style={{ height: 22 }} />
          <div style={{ display: "flex", gap: 24 }}>
            <a href="/cgu" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>CGU</a>
            <a href="/privacy" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>Privacy</a>
            <a href="/contact" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>Contact</a>
          </div>
          <div style={{ fontSize: 12, color: "#444", display: "flex", alignItems: "center" }}>© 2026 <img src={WHITE_LOGO} alt="BISK8" style={{ height: 14, opacity: 0.3, margin: "0 4px", verticalAlign: "middle" }} /></div>
        </div>
      </footer>
    </div>
  );
}
