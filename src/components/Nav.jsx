import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../LanguageContext.jsx";
import { translations, languages, WHITE_LOGO } from "../data/translations.js";
import useIsMobile from "../hooks/useIsMobile.js";

export default function Nav() {
  const { lang, setLanguage } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const t = translations[lang] || translations.fr;
  const isMobile = useIsMobile();

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "0.75rem 2rem",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
      }}
    >
      {/* LEFT — Language selector */}
      <div style={{ justifySelf: "start", position: "relative", flexShrink: 0 }}>
        <button
          onClick={() => setShowLangMenu(!showLangMenu)}
          style={{
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 8, padding: "6px 12px", color: "#fff", fontSize: 12,
            cursor: "pointer", fontFamily: "'HighCruiser', sans-serif", fontWeight: 500,
            transition: "background 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}
        >
          {lang.toUpperCase()} ▾
        </button>
        <AnimatePresence>
          {showLangMenu && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              style={{
                position: "absolute", top: 44, left: 0,
                background: "rgba(17,17,17,0.95)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12,
                overflow: "hidden", minWidth: 80,
              }}
            >
              {languages.map(l => (
                <div
                  key={l}
                  onClick={() => { setLanguage(l); setShowLangMenu(false); }}
                  style={{
                    padding: "8px 16px", cursor: "pointer", fontSize: 13,
                    color: l === lang ? "#fff" : "#666",
                    background: l === lang ? "rgba(255,255,255,0.08)" : "transparent",
                    fontWeight: l === lang ? 600 : 400,
                    transition: "background 0.15s, color 0.15s",
                  }}
                  onMouseEnter={e => { if (l !== lang) { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "#aaa"; } }}
                  onMouseLeave={e => { if (l !== lang) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#666"; } }}
                >
                  {l.toUpperCase()}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CENTER — Logo */}
      <div style={{ justifySelf: "center" }}>
        <img src={WHITE_LOGO} alt="BISK8" style={{ height: isMobile ? 34 : 27, width: "auto" }} />
      </div>

      {/* RIGHT — Download button */}
      <div style={{ justifySelf: "end" }}>
        {isMobile ? (
          <button
            onClick={() => document.getElementById("download-bottom")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "8px 12px",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "transparent",
              color: "#FFF",
              cursor: "pointer",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ↓
          </button>
        ) : (
          <button
            onClick={() => document.getElementById("download-bottom")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              fontFamily: "'HighCruiser', sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              padding: "8px 20px",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "transparent",
              color: "#FFF",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            {t.download}
          </button>
        )}
      </div>
    </nav>
  );
}
