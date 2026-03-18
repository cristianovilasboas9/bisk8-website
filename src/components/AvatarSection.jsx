import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext.jsx";
import { translations, EASE } from "../data/translations.js";
import ScrollSection from "./shared/ScrollSection.jsx";
import TextReveal from "./animations/TextReveal.jsx";
import FadeUp from "./animations/FadeUp.jsx";
import FloatingGlow from "./animations/FloatingGlow.jsx";

export default function AvatarSection() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.fr;

  return (
    <ScrollSection style={{ padding: "10rem 32px", background: "#000", position: "relative", overflow: "hidden" }}>
      {/* Background ambient gradient */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 50%, rgba(60,60,60,0.2) 0%, transparent 60%)" }} />

      {/* Floating glows */}
      <FloatingGlow color="rgba(255,255,255,0.03)" size={400} top="10%" left="-10%" delay={0} />
      <FloatingGlow color="rgba(255,255,255,0.025)" size={350} bottom="10%" right="-5%" delay={3} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <div className="avatar-grid" style={{ display: "flex", alignItems: "center", gap: 80 }}>
          <div style={{ flex: 1 }}>
            <motion.div initial={{ opacity: 0, x: -60, filter: "blur(8px)" }} whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} transition={{ duration: 1.0, ease: EASE }} viewport={{ once: false, amount: 0.3 }}>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 4, color: "#666", textTransform: "uppercase", marginBottom: 16 }}>AI AVATAR</div>
              <TextReveal>
                <h2 style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, marginBottom: 16, lineHeight: 1.1, letterSpacing: 2 }}>{t.avatarTagline}</h2>
              </TextReveal>
              <p style={{ fontSize: 16, color: "#999", lineHeight: 1.7, maxWidth: 480 }}>{t.avatarDesc}</p>
            </motion.div>
          </div>
          <motion.div className="avatar-comparison" initial={{ opacity: 0, x: 60, filter: "blur(8px)" }} whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} transition={{ duration: 1.0, delay: 0.2, ease: EASE }} viewport={{ once: false, amount: 0.3 }} style={{ flex: 1, display: "flex", gap: 20, justifyContent: "center", alignItems: "center" }}>
            {/* Before image */}
            <FadeUp delay={0}>
              <div style={{ textAlign: "center" }}>
                <div className="glow-border" style={{ width: 180, height: 240, borderRadius: 20, overflow: "hidden", marginBottom: 12, background: "#f0f0f0" }}>
                  <img
                    src="/images/section3_1.png"
                    alt="Before"
                    loading="lazy"
                    decoding="async"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 95%" }}
                  />
                </div>
                <div style={{ fontSize: 12, color: "#666", fontWeight: 500 }}>{t.before}</div>
              </div>
            </FadeUp>

            {/* Pulsing animated arrow */}
            <motion.div
              animate={{ x: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "2.5rem",
                fontWeight: 100,
                display: "flex",
                alignItems: "center",
                padding: "0 1rem",
              }}
            >
              →
            </motion.div>

            {/* After image */}
            <FadeUp delay={0.3}>
              <div style={{ textAlign: "center" }}>
                <div className="glow-border" style={{ width: 180, height: 240, borderRadius: 20, overflow: "hidden", marginBottom: 12, background: "#f0f0f0" }}>
                  <img
                    src="/images/section3_2.png"
                    alt="After"
                    loading="lazy"
                    decoding="async"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ fontSize: 12, color: "#999", fontWeight: 600 }}>{t.after}</div>
              </div>
            </FadeUp>
          </motion.div>
        </div>
      </div>
    </ScrollSection>
  );
}
