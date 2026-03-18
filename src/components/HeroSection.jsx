import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../LanguageContext.jsx";
import { translations, EASE } from "../data/translations.js";
import ScatterText from "./shared/ScatterText.jsx";
import BlurReveal from "./shared/BlurReveal.jsx";

// Reusable scroll indicator — bouncing chevron
function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2px",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "24px",
            background:
              "linear-gradient(to bottom, transparent, rgba(255,255,255,0.3))",
          }}
        />
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRight: "1.5px solid rgba(255,255,255,0.3)",
            borderBottom: "1.5px solid rgba(255,255,255,0.3)",
            transform: "rotate(45deg)",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.fr;
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // ============================================
  // 4-STEP TIMELINE (0 = page load, 1 = end of 240vh)
  // Step 1: Text only (tagline + subtitle) + scroll indicator
  // Step 2: Phone slides up, text fades
  // Step 3: Phone fades, BIG BISK8 logo appears with glow
  // Step 4: Logo STAYS VISIBLE and slides UP as sticky unpins
  // ============================================

  // TEXT — stays centered, never moves, only fades
  const textOpacity = useTransform(scrollYProgress,
    [0, 0.12, 0.22],
    [1, 1, 0]
  );

  // PHONE — slides up, stays, fades out
  const phoneY = useTransform(scrollYProgress,
    [0, 0.05, 0.25, 0.35, 0.45],
    [700, 700, 0, 0, 0]
  );
  const phoneOpacity = useTransform(scrollYProgress,
    [0, 0.08, 0.22, 0.35, 0.48],
    [0, 0, 1, 1, 0]
  );

  // BIG LOGO — appears after phone fades, NEVER fades out, slides UP
  const logoOpacity = useTransform(scrollYProgress,
    [0.45, 0.53, 0.9],
    [0, 1, 1]
  );
  const logoScale = useTransform(scrollYProgress,
    [0.45, 0.55],
    [0.8, 1]
  );
  const logoY = useTransform(scrollYProgress,
    [0.7, 1],
    [0, -120]
  );

  return (
    <section
      ref={sectionRef}
      style={{
        height: "240vh",
        position: "relative",
        overflow: "visible",
        transform: "none",
        WebkitTransform: "none",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "#000000",
        }}
      >
        {/* ========== TEXT ========== */}
        <motion.div
          style={{
            opacity: textOpacity,
            position: "absolute",
            zIndex: 1,
            textAlign: "center",
            width: "100%",
            padding: "0 1.5rem",
            maxWidth: 900,
          }}
        >
          {/* Main tagline */}
          <h1
            style={{
              fontFamily: "'HighCruiser', sans-serif",
              fontSize: "clamp(28px, 5vw, 64px)",
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: 2,
              marginBottom: 20,
              background: "linear-gradient(135deg, #fff 0%, #ccc 50%, #fff 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradientShift 6s ease infinite",
              wordBreak: "keep-all",
              overflowWrap: "break-word",
            }}
          >
            <ScatterText text={t.tagline} />
          </h1>

          {/* Subtitle */}
          <BlurReveal
            delay={0.8}
            style={{
              fontSize: "clamp(14px, 2.5vw, 18px)",
              color: "#999",
              lineHeight: 1.6,
              maxWidth: 440,
              fontWeight: 300,
              margin: "0 auto",
            }}
          >
            {t.subtitle}
          </BlurReveal>
        </motion.div>

        {/* ========== SCROLL INDICATOR — below text ========== */}
        <motion.div
          style={{
            opacity: textOpacity,
            position: "absolute",
            bottom: "8vh",
            left: "50%",
            x: "-50%",
            zIndex: 1,
          }}
        >
          <ScrollIndicator />
        </motion.div>

        {/* ========== PHONE ========== */}
        <motion.div
          style={{
            y: phoneY,
            opacity: phoneOpacity,
            position: "absolute",
            zIndex: 2,
            left: "50%",
            x: "-50%",
          }}
        >
          {/* iPhone 17 Pro Cosmic Orange frame */}
          <div
            style={{
              width: "280px",
              aspectRatio: "9 / 19.5",
              borderRadius: "44px",
              border: "4px solid #C47A4A",
              background: "#1A1A1A",
              padding: "8px",
              boxShadow: "0 30px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(196,122,74,0.3)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Dynamic Island */}
            <div
              style={{
                position: "absolute",
                top: "12px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "90px",
                height: "28px",
                borderRadius: "20px",
                background: "#000",
                zIndex: 5,
              }}
            />
            {/* Screen */}
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "36px",
                overflow: "hidden",
              }}
            >
              <img
                src="/images/phone-home-screen.png"
                alt="BISK8 App"
                loading="eager"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />
            </div>
            {/* Side button (power) — Cosmic Orange accent */}
            <div
              style={{
                position: "absolute",
                right: "-6px",
                top: "120px",
                width: "3px",
                height: "40px",
                borderRadius: "2px",
                background: "#C47A4A",
              }}
            />
          </div>
        </motion.div>

        {/* ========== SCROLL INDICATOR — below phone ========== */}
        <motion.div
          style={{
            opacity: phoneOpacity,
            position: "absolute",
            bottom: "4vh",
            left: "50%",
            x: "-50%",
            zIndex: 4,
          }}
        >
          <ScrollIndicator />
        </motion.div>

        {/* ========== BIG BISK8 LOGO — SVG — stays visible, slides UP ========== */}
        <motion.div
          style={{
            opacity: logoOpacity,
            scale: logoScale,
            y: logoY,
            position: "absolute",
            zIndex: 3,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <img
            src="/images/white-logo.svg"
            alt="BISK8"
            style={{
              width: "clamp(300px, 55vw, 900px)",
              height: "auto",
              filter: "drop-shadow(0 0 80px rgba(255,255,255,0.2)) drop-shadow(0 0 160px rgba(255,255,255,0.08))",
            }}
          />
        </motion.div>

        {/* ========== SCROLL INDICATOR — below big logo ========== */}
        <motion.div
          style={{
            opacity: logoOpacity,
            position: "absolute",
            bottom: "6vh",
            left: "50%",
            x: "-50%",
            zIndex: 4,
          }}
        >
          <ScrollIndicator />
        </motion.div>
      </div>

    </section>
  );
}
