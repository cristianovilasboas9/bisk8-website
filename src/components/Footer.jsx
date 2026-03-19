import { useLanguage } from "../LanguageContext.jsx";
import { translations, WHITE_LOGO } from "../data/translations.js";
import FadeUp from "./animations/FadeUp.jsx";
import useIsMobile from "../hooks/useIsMobile.js";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.fr;
  const isMobile = useIsMobile();

  const igIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
  );
  const ttIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.41a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.84z"/></svg>
  );

  if (isMobile) {
    return (
      <FadeUp>
        <footer className="site-footer" style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", padding: "2rem 1.5rem", textAlign: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <img src={WHITE_LOGO} alt="BISK8" loading="lazy" decoding="async" style={{ height: 30, width: "auto", cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
                <a href="/terms" style={{ color: "#666", fontSize: "0.75rem", textDecoration: "none", fontFamily: "'HighCruiser', sans-serif" }}>{t.footerTerms}</a>
                <a href="/privacy" style={{ color: "#666", fontSize: "0.75rem", textDecoration: "none", fontFamily: "'HighCruiser', sans-serif" }}>{t.footerPrivacy}</a>
                <a href="/contact" style={{ color: "#666", fontSize: "0.75rem", textDecoration: "none", fontFamily: "'HighCruiser', sans-serif" }}>{t.footerContact}</a>
              </div>
            </div>

            <div style={{ height: 1, background: "rgba(255,255,255,0.08)", width: "100%", marginBottom: "1.5rem" }} />

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.55rem", lineHeight: 1 }}>© 2026</span>
                <img src={WHITE_LOGO} alt="BISK8" loading="lazy" decoding="async" style={{ height: 10, width: "auto", opacity: 0.35, display: "block" }} />
                <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.55rem", lineHeight: 1 }}>— Barcelos, Portugal.</span>
              </div>
              <div style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.5rem", textAlign: "center", marginTop: "4px" }}>{t.footerAllRights || "Tous droits réservés."}</div>
              <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
                <a href="https://instagram.com/bisk8.app" target="_blank" rel="noopener noreferrer" style={{ color: "#666" }}>{igIcon}</a>
                <a href="https://tiktok.com/@bisk8.app" target="_blank" rel="noopener noreferrer" style={{ color: "#666" }}>{ttIcon}</a>
              </div>
            </div>
          </div>
        </footer>
      </FadeUp>
    );
  }

  return (
    <FadeUp>
      <footer className="site-footer" style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", padding: "3rem 2rem 2rem" }}>
          <div className="footer-top" style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "1.5rem",
          }}>
            <img src={WHITE_LOGO} alt="BISK8" loading="lazy" decoding="async" style={{ height: 36, width: 'auto', cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
            <div className="footer-links" style={{ display: "flex", gap: "2rem" }}>
              <a href="/terms" style={{ color: "#666", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s", fontFamily: "'HighCruiser', sans-serif" }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#666'}>{t.footerTerms}</a>
              <a href="/privacy" style={{ color: "#666", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s", fontFamily: "'HighCruiser', sans-serif" }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#666'}>{t.footerPrivacy}</a>
              <a href="/contact" style={{ color: "#666", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s", fontFamily: "'HighCruiser', sans-serif" }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#666'}>{t.footerContact}</a>
            </div>
          </div>

          <div style={{ height: 1, background: "rgba(255,255,255,0.08)", width: "100%" }} />

          <div className="footer-bottom" style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "1.5rem",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", whiteSpace: "nowrap", flexWrap: "nowrap" }}>
              <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", lineHeight: 1 }}>© 2026</span>
              <img src={WHITE_LOGO} alt="BISK8" loading="lazy" decoding="async" style={{ height: 13, width: "auto", opacity: 0.35, display: "block" }} />
              <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", lineHeight: 1 }}>— Barcelos, Portugal. {t.footerAllRights || "Tous droits réservés."}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
              <a href="https://instagram.com/bisk8.app" target="_blank" rel="noopener noreferrer" style={{ color: "#666", transition: "color 0.3s" }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#666'}>{igIcon}</a>
              <a href="https://tiktok.com/@bisk8.app" target="_blank" rel="noopener noreferrer" style={{ color: "#666", transition: "color 0.3s" }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#666'}>{ttIcon}</a>
            </div>
          </div>
        </div>
      </footer>
    </FadeUp>
  );
}
