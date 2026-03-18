import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "../LanguageContext.jsx";
import { translations } from "../data/translations.js";
import TextReveal from "./animations/TextReveal.jsx";
import FadeUp from "./animations/FadeUp.jsx";
import StaggerChildren, { StaggerItem } from "./animations/StaggerChildren.jsx";
import useIsMobile from "../hooks/useIsMobile.js";

const EASE = [0.22, 1, 0.36, 1];

export default function PricingSection({ isAnnual, setIsAnnual, prices, handleComingSoon }) {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.fr;
  const billingKey = isAnnual ? "annual" : "monthly";
  const isMobile = useIsMobile();

  const plans = [
    { name: t.free, price: "0 CHF", period: "", perks: [t.freePerk1, t.freePerk2, t.freePerk3], highlight: false },
    { name: t.solo, price: prices.solo, period: prices.period, perks: [t.soloPerk1, t.soloPerk2, t.soloPerk3, t.soloPerk4], highlight: true, discount: isAnnual },
    { name: t.couple, price: prices.couple, period: prices.period, perks: [t.couplePerk1, t.couplePerk2, t.couplePerk3], highlight: false, discount: isAnnual },
    { name: t.famille, price: prices.famille, period: prices.period, perks: [t.famillePerk1, t.famillePerk2, t.famillePerk3], highlight: false, discount: isAnnual },
  ];

  return (
    <section style={{ padding: isMobile ? "4rem 1rem" : "10rem 2rem", background: "#000", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 100%, rgba(40,40,40,0.3) 0%, transparent 60%)" }} />
      <div style={{ width: "100%", maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <TextReveal>
          <h2 style={{
            fontFamily: "'HighCruiser', sans-serif",
            fontSize: isMobile ? "1.5rem" : "clamp(32px, 4vw, 52px)",
            fontWeight: 900,
            textAlign: "center",
            marginBottom: isMobile ? 16 : 24,
            letterSpacing: 2,
            color: "#fff",
          }}>
            {t.pricingTitle}
          </h2>
        </TextReveal>

        <FadeUp delay={0.1}>
          {/* Pricing Toggle */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: isMobile ? '0.6rem' : '1.25rem',
            marginBottom: isMobile ? '1rem' : '4rem',
            transform: isMobile ? 'scale(0.7)' : 'none',
            transformOrigin: 'center',
          }}>
            <span
              onClick={() => setIsAnnual(false)}
              style={{
                fontFamily: "'HighCruiser', sans-serif",
                fontSize: '1.1rem',
                color: !isAnnual ? '#FFFFFF' : 'rgba(255,255,255,0.35)',
                transition: 'color 0.3s ease',
                cursor: 'pointer',
                letterSpacing: '0.05em',
              }}
            >
              {t.monthly}
            </span>
            <div
              onClick={() => setIsAnnual(!isAnnual)}
              style={{
                width: '56px',
                height: '30px',
                borderRadius: '999px',
                background: isAnnual ? '#FFFFFF' : 'rgba(255,255,255,0.15)',
                cursor: 'pointer',
                position: 'relative',
                transition: 'background 0.3s ease',
                flexShrink: 0,
              }}
            >
              <motion.div
                animate={{ x: isAnnual ? 28 : 2 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: isAnnual ? '#000000' : '#FFFFFF',
                  position: 'absolute',
                  top: '2px',
                  left: 0,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span
                onClick={() => setIsAnnual(true)}
                style={{
                  fontFamily: "'HighCruiser', sans-serif",
                  fontSize: '1.1rem',
                  color: isAnnual ? '#FFFFFF' : 'rgba(255,255,255,0.35)',
                  transition: 'color 0.3s ease',
                  cursor: 'pointer',
                  letterSpacing: '0.05em',
                }}
              >
                {t.annual}
              </span>
              <span style={{
                background: '#22C55E',
                color: '#FFFFFF',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: '999px',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}>
                -17%
              </span>
            </div>
          </div>
        </FadeUp>

        <StaggerChildren
          staggerDelay={0.12}
          className="pricing-grid"
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            gap: isMobile ? "0.5rem" : "1.25rem",
            width: "100%",
            alignItems: "stretch",
            overflow: "visible",
            paddingTop: "20px",
          }}
        >
          {plans.map((plan, i) => (
            <StaggerItem key={i}>
              <motion.div
                className={`price-card${plan.highlight ? " shimmer-border" : ""}`}
                whileHover={isMobile ? {} : { y: -12, boxShadow: "0 30px 60px rgba(0,0,0,0.4)" }}
                style={{
                  background: plan.highlight ? "#fff" : "#111",
                  color: plan.highlight ? "#000" : "#fff",
                  borderRadius: isMobile ? 16 : 24,
                  padding: isMobile ? "0.75rem" : "2rem 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  border: plan.highlight ? "none" : "1px solid #222",
                  position: "relative",
                  boxShadow: plan.highlight ? "0 0 80px rgba(255,255,255,0.12), 0 0 160px rgba(255,255,255,0.04)" : "none",
                  transform: plan.highlight ? (isMobile ? "scale(1.02)" : "scale(1.03)") : "none",
                  minHeight: isMobile ? "auto" : "480px",
                  overflow: "visible",
                }}
              >
                {plan.highlight && (
                  <div style={{
                    position: "absolute",
                    top: isMobile ? -8 : -16,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#000000",
                    color: "#FFFFFF",
                    border: "1.5px solid rgba(255,255,255,0.6)",
                    borderRadius: 999,
                    padding: isMobile ? "2px 8px" : "5px 20px",
                    fontSize: isMobile ? "0.45rem" : "0.7rem",
                    fontWeight: 700,
                    fontFamily: "'HighCruiser', sans-serif",
                    letterSpacing: "0.08em",
                    whiteSpace: "nowrap",
                    zIndex: 10,
                  }}>
                    {t.popular}
                  </div>
                )}

                {/* Plan name */}
                <div style={{
                  fontSize: isMobile ? "0.7rem" : "1.2rem",
                  fontWeight: 700,
                  marginBottom: isMobile ? 4 : 16,
                  letterSpacing: 1,
                  fontFamily: "'HighCruiser', sans-serif",
                }}>
                  {plan.name}
                </div>

                {/* Price */}
                <div style={{ height: isMobile ? "2.5rem" : "4.5rem", display: "flex", alignItems: "baseline", overflow: "hidden", marginBottom: isMobile ? 4 : 8 }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`${i}-${billingKey}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        fontFamily: "'HighCruiser', sans-serif",
                        fontSize: isMobile
                          ? (isAnnual ? "1rem" : "1.3rem")
                          : (isAnnual ? "2.2rem" : "2.8rem"),
                        fontWeight: 900,
                        lineHeight: 1,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {plan.price.split(" ")[0]}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Period */}
                <div style={{ height: isMobile ? "1rem" : "1.5rem", marginBottom: isMobile ? 8 : 24 }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`period-${i}-${billingKey}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        fontSize: isMobile ? "0.5rem" : "0.85rem",
                        color: plan.highlight ? "#666" : "#888",
                      }}
                    >
                      {plan.period ? `CHF${plan.period}` : "CHF"}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Feature list */}
                <div style={{ flex: 1 }}>
                  {plan.perks.map((p, j) => (
                    <div key={j} style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: isMobile ? 3 : 8,
                      marginBottom: isMobile ? 2 : 12,
                      fontSize: isMobile ? "0.5rem" : "0.9rem",
                      lineHeight: isMobile ? 1.4 : 1.6,
                      color: plan.highlight ? "#444" : "#aaa",
                    }}>
                      <Check size={isMobile ? 10 : 14} strokeWidth={2.5} style={{ color: plan.highlight ? "#000" : "#fff", flexShrink: 0, marginTop: isMobile ? 1 : 3 }} />
                      {p}
                    </div>
                  ))}
                </div>

                {/* CTA button — HIDDEN on mobile */}
                {!isMobile && (
                  <a
                    href="#download-bottom"
                    onClick={handleComingSoon}
                    style={{
                      display: "block",
                      textAlign: "center",
                      marginTop: "auto",
                      padding: "14px 0",
                      borderRadius: 12,
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      fontFamily: "'HighCruiser', sans-serif",
                      textDecoration: "none",
                      background: plan.highlight ? "#000" : "rgba(255,255,255,0.08)",
                      color: "#fff",
                      border: plan.highlight ? "none" : "1px solid rgba(255,255,255,0.15)",
                      transition: "background 0.2s",
                      width: "100%",
                    }}
                  >
                    {t.download}
                  </a>
                )}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
