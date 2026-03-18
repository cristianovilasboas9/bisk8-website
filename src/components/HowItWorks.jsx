import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../LanguageContext.jsx";
import { translations, STEP1_IMG, STEP2_IMG, STEP3_IMG, STEP1_MOBILE, STEP2_MOBILE, STEP3_MOBILE } from "../data/translations.js";
import useIsMobile from "../hooks/useIsMobile.js";

export default function HowItWorks() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.fr;
  const sectionRef = useRef(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const steps = [
    { num: "01", title: t.step1Title, desc: t.step1Desc, img: STEP1_IMG, mobileImg: STEP1_MOBILE },
    { num: "02", title: t.step2Title, desc: t.step2Desc, img: STEP2_IMG, mobileImg: STEP2_MOBILE },
    { num: "03", title: t.step3Title, desc: t.step3Desc, img: STEP3_IMG, mobileImg: STEP3_MOBILE },
  ];

  // Title
  const titleOpacity = useTransform(scrollYProgress, [0, 0.06, 0.08], [0, 0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.06, 0.12], [40, 40, 0]);

  // Desktop card animations (appear and stay)
  const card1Opacity = useTransform(scrollYProgress,
    isMobile ? [0.03, 0.08, 0.3, 0.33] : [0.08, 0.14],
    isMobile ? [0, 1, 1, 0] : [0, 1]
  );
  const card1Y = useTransform(scrollYProgress, [0.08, 0.18], [60, 0]);

  const card2Opacity = useTransform(scrollYProgress,
    isMobile ? [0.31, 0.36, 0.58, 0.62] : [0.25, 0.32],
    isMobile ? [0, 1, 1, 0] : [0, 1]
  );
  const card2Y = useTransform(scrollYProgress, [0.25, 0.38], [60, 0]);

  const card3Opacity = useTransform(scrollYProgress,
    isMobile ? [0.6, 0.65, 0.88, 0.93] : [0.42, 0.48],
    isMobile ? [0, 1, 1, 0] : [0, 1]
  );
  const card3Y = useTransform(scrollYProgress, [0.42, 0.55], [60, 0]);

  // Connection line grows across cards (desktop only)
  const lineScaleX = useTransform(scrollYProgress, [0.10, 0.55], [0, 1]);

  const cardAnimations = [
    { opacity: card1Opacity, y: card1Y },
    { opacity: card2Opacity, y: card2Y },
    { opacity: card3Opacity, y: card3Y },
  ];

  if (isMobile) {
    return (
      <section
        ref={sectionRef}
        style={{
          height: "400vh",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#FFFFFF",
            overflow: "hidden",
            padding: "1rem",
            paddingTop: "80px",
          }}
        >
          {/* Title */}
          <motion.h2
            style={{
              opacity: titleOpacity,
              y: titleY,
              fontFamily: "'HighCruiser', sans-serif",
              fontSize: "1.8rem",
              fontWeight: 900,
              textAlign: "center",
              color: "#000",
              marginBottom: "1.5rem",
              letterSpacing: 2,
              flexShrink: 0,
            }}
          >
            {t.howItWorks}
          </motion.h2>

          {/* Card display area — one card at a time */}
          <div style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            position: "relative",
          }}>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                style={{
                  opacity: cardAnimations[i].opacity,
                  position: "absolute",
                  width: "85%",
                  maxWidth: "320px",
                  textAlign: "center",
                  willChange: "opacity, transform",
                  WebkitBackfaceVisibility: "hidden",
                  backfaceVisibility: "hidden",
                }}
              >
                <div style={{
                  fontSize: "3rem",
                  fontWeight: 900,
                  color: "rgba(0,0,0,0.04)",
                  fontFamily: "'HighCruiser', sans-serif",
                  lineHeight: 1,
                  marginBottom: "-0.5rem",
                }}>
                  {step.num}
                </div>
                <div style={{
                  width: "75%",
                  maxWidth: "240px",
                  margin: "0 auto",
                  borderRadius: 16,
                  border: "2px solid rgba(0,0,0,0.06)",
                  overflow: "hidden",
                  marginBottom: "1rem",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  aspectRatio: "9/16",
                  background: "#F5F5F5",
                }}>
                  <img
                    src={step.mobileImg}
                    alt={step.title}
                    loading="lazy"
                    decoding="async"
                    style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", display: "block" }}
                  />
                </div>
                <h3 style={{
                  fontFamily: "'HighCruiser', sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 900,
                  marginBottom: 8,
                  letterSpacing: 1.5,
                  color: "#000",
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontFamily: "'HighCruiser', sans-serif",
                  fontSize: 13,
                  color: "#666",
                  lineHeight: 1.6,
                  maxWidth: 280,
                  margin: "0 auto",
                }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // DESKTOP layout (unchanged)
  return (
    <section
      ref={sectionRef}
      style={{
        height: "300vh",
        position: "relative",
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
          background: "#fff",
          color: "#000",
          overflow: "hidden",
        }}
      >
        {/* Subtle gradient transition from hero black */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "80px",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.03), transparent)",
          pointerEvents: "none",
          zIndex: 0,
        }} />

        <div style={{ maxWidth: 1100, width: "100%", padding: "0 2rem" }}>
          {/* Title */}
          <motion.h2
            style={{
              opacity: titleOpacity,
              y: titleY,
              fontFamily: "'HighCruiser', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 900,
              textAlign: "center",
              marginBottom: "4rem",
              letterSpacing: 2,
              color: "#000",
            }}
          >
            {t.howItWorks}
          </motion.h2>

          {/* Steps grid */}
          <div style={{ position: "relative" }}>
            {/* Connection line */}
            <motion.div
              className="how-connection-line"
              style={{
                scaleX: lineScaleX,
                position: "absolute",
                top: "3.5rem",
                left: "15%",
                right: "15%",
                height: "1px",
                background: "linear-gradient(to right, transparent, rgba(0,0,0,0.08), transparent)",
                transformOrigin: "left center",
                zIndex: 0,
              }}
            />

            <div
              className="steps-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2.5rem",
                position: "relative",
                zIndex: 1,
              }}
            >
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  style={{
                    textAlign: "center",
                    opacity: cardAnimations[i].opacity,
                    y: cardAnimations[i].y,
                  }}
                >
                  {/* Ghost number */}
                  <div
                    style={{
                      fontSize: "5rem",
                      fontWeight: 900,
                      color: "rgba(0,0,0,0.04)",
                      lineHeight: 1,
                      marginBottom: "-1rem",
                      fontFamily: "'HighCruiser', sans-serif",
                      position: "relative",
                      zIndex: 2,
                      background: "#FFFFFF",
                      display: "inline-block",
                      padding: "0 1rem",
                    }}
                  >
                    {step.num}
                  </div>

                  {/* Step image */}
                  <div
                    style={{
                      width: "100%",
                      maxWidth: 250,
                      margin: "0 auto",
                      aspectRatio: "9 / 16",
                      borderRadius: 24,
                      border: "2px solid rgba(0,0,0,0.06)",
                      boxShadow: "0 16px 50px rgba(0,0,0,0.1)",
                      overflow: "hidden",
                      marginBottom: "1.5rem",
                      background: "#F5F5F5",
                    }}
                  >
                    <img
                      src={step.mobileImg}
                      alt={step.title}
                      loading="lazy"
                      decoding="async"
                      style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", display: "block" }}
                    />
                  </div>

                  {/* Step title + desc */}
                  <div>
                    <h3
                      style={{
                        fontFamily: "'HighCruiser', sans-serif",
                        fontSize: "clamp(18px, 2vw, 24px)",
                        fontWeight: 900,
                        marginBottom: 10,
                        letterSpacing: 1.5,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'HighCruiser', sans-serif",
                        fontSize: 15,
                        color: "#666",
                        lineHeight: 1.7,
                        maxWidth: 300,
                        margin: "0 auto",
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
