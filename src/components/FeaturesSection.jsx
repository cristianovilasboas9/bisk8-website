import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useLanguage } from "../LanguageContext.jsx";
import { translations } from "../data/translations.js";
import { Shirt, CalendarDays, Heart, Users, Plane, RefreshCw } from "lucide-react";
import useIsMobile from "../hooks/useIsMobile.js";

const EASE = [0.22, 1, 0.36, 1];

export default function FeaturesSection() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.fr;
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });
  const isMobile = useIsMobile();

  const features = [
    { icon: Shirt, title: t.feat1Title, desc: t.feat1Desc },
    { icon: CalendarDays, title: t.feat2Title, desc: t.feat2Desc },
    { icon: Heart, title: t.feat3Title, desc: t.feat3Desc },
    { icon: Users, title: t.feat4Title, desc: t.feat4Desc },
    { icon: Plane, title: t.feat5Title, desc: t.feat5Desc },
    { icon: RefreshCw, title: t.feat6Title, desc: t.feat6Desc },
  ];

  return (
    <section
      ref={ref}
      style={{
        padding: isMobile ? "4rem 1rem" : "8rem 2rem",
        background: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{
            fontFamily: "'HighCruiser', sans-serif",
            fontSize: isMobile ? "1.4rem" : "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 900,
            textAlign: "center",
            marginBottom: isMobile ? "2rem" : "4rem",
            letterSpacing: 2,
            color: "#000000",
          }}
        >
          {t.featuresTitle}
        </motion.h2>

        {/* Accordion container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          style={{
            display: "flex",
            gap: isMobile ? "3px" : "4px",
            height: isMobile ? 280 : 450,
            borderRadius: isMobile ? 16 : 24,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {features.map((f, i) => {
            const isActive = i === activeIndex;
            const Icon = f.icon;

            return (
              <motion.div
                key={i}
                onClick={() => setActiveIndex(i)}
                onMouseEnter={() => !isMobile && setActiveIndex(i)}
                animate={{ flex: isActive ? 6 : 1 }}
                transition={{ duration: 0.5, ease: EASE }}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  background: isActive ? "#1A1A1A" : "#111111",
                  border: isActive ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: isActive ? "flex-start" : "center",
                  alignItems: isActive ? "stretch" : "center",
                  padding: isActive ? "0" : isMobile ? "0.5rem 0.25rem" : "1rem 0.5rem",
                  minWidth: isActive ? 0 : (isMobile ? 36 : 65),
                }}
              >
                {/* Inactive: vertical text + small icon */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: isMobile ? "0.5rem" : "1rem",
                        width: "100%",
                      }}
                    >
                      <Icon size={isMobile ? 14 : 20} strokeWidth={1.5} color="rgba(255,255,255,0.5)" />
                      <span
                        style={{
                          writingMode: "vertical-lr",
                          textOrientation: "mixed",
                          fontFamily: "'HighCruiser', sans-serif",
                          fontSize: isMobile ? "0.6rem" : "0.75rem",
                          color: "rgba(255,255,255,0.5)",
                          letterSpacing: "0.1em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {f.title}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Active: full content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        padding: isMobile ? "1rem" : "2rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* TOP — icon */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flex: 1,
                        }}
                      >
                        <div
                          style={{
                            width: isMobile ? "50px" : "80px",
                            height: isMobile ? "50px" : "80px",
                            borderRadius: isMobile ? "12px" : "20px",
                            background: "rgba(255,255,255,0.06)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 0 40px rgba(255,255,255,0.05)",
                          }}
                        >
                          <Icon size={isMobile ? 24 : 36} color="rgba(255,255,255,0.5)" />
                        </div>
                      </div>

                      {/* BOTTOM — Title + Description */}
                      <div>
                        <div
                          style={{
                            fontFamily: "'HighCruiser', sans-serif",
                            fontSize: isMobile ? "0.9rem" : "1.2rem",
                            color: "#FFF",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {f.title}
                        </div>
                        <div
                          style={{
                            fontFamily: "'HighCruiser', sans-serif",
                            fontSize: isMobile ? "0.7rem" : "0.85rem",
                            color: "rgba(255,255,255,0.5)",
                            lineHeight: 1.5,
                          }}
                        >
                          {f.desc}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
