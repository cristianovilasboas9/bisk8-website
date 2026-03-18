import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext.jsx";
import { translations, BLACK_LOGO, EASE } from "../data/translations.js";
import ScaleIn from "./animations/ScaleIn.jsx";
import FloatingGlow from "./animations/FloatingGlow.jsx";

const scaleBurst = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(8px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1.0, ease: EASE } },
};
const springBounce = {
  hidden: (i = 0) => ({ opacity: 0, y: 40, scale: 0.9 }),
  visible: (i = 0) => ({ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.4 + i * 0.15 } }),
};

export default function CtaSection({ handleComingSoon }) {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.fr;
  const vp = { once: false, amount: 0.1 };

  return (
    <section id="download-bottom" className="cta-glow" style={{ paddingTop: "8rem", paddingBottom: "8rem", paddingLeft: 32, paddingRight: 32, background: "#fff", color: "#000", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(200,200,200,0.3) 0%, transparent 60%)", animation: "ctaGlow 4s ease-in-out infinite" }} />
      <FloatingGlow color="rgba(0,0,0,0.03)" size={500} top="30%" left="50%" />
      <ScaleIn>
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
          <motion.h2 variants={scaleBurst} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, marginBottom: 16, letterSpacing: 2 }}>{t.ctaTitle}</motion.h2>
          <motion.p variants={springBounce} custom={0} initial="hidden" whileInView="visible" viewport={vp} style={{ fontSize: 18, color: "#666", marginBottom: 40 }}>{t.ctaSubtitle.split("BISK8").map((part, i, arr) => <span key={i}>{part}{i < arr.length - 1 && <img src={BLACK_LOGO} alt="BISK8" loading="lazy" decoding="async" style={{ height: 23, verticalAlign: "middle", display: "inline", margin: "0 4px", opacity: 0.65 }} />}</span>)}</motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={vp} style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <motion.a variants={springBounce} custom={1} href="#" onClick={handleComingSoon} className="badge-btn" style={{ background: "#000", color: "#fff", padding: "14px 28px", borderRadius: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="20" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
              <div><div style={{ fontSize: 10, fontWeight: 400, opacity: 0.65 }}>DOWNLOAD ON THE</div><div style={{ fontSize: 15, fontWeight: 700 }}>App Store</div></div>
            </motion.a>
            <motion.a variants={springBounce} custom={2} href="#" onClick={handleComingSoon} className="badge-btn" style={{ background: "#000", color: "#fff", padding: "14px 28px", borderRadius: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="20" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/></svg>
              <div><div style={{ fontSize: 10, fontWeight: 400, opacity: 0.65 }}>GET IT ON</div><div style={{ fontSize: 15, fontWeight: 700 }}>Google Play</div></div>
            </motion.a>
          </motion.div>
        </div>
      </ScaleIn>
    </section>
  );
}
