import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext.jsx";
import { translations } from "./data/translations.js";

// Section components
import Nav from "./components/Nav.jsx";
import HeroSection from "./components/HeroSection.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import DualPhoneSection from "./components/DualPhoneSection.jsx";
import EditorialSection from "./components/EditorialSection.jsx";
import FeaturesSection from "./components/FeaturesSection.jsx";
import LooksGallery from "./components/LooksGallery.jsx";
import PricingSection from "./components/PricingSection.jsx";
import CtaSection from "./components/CtaSection.jsx";
import Footer from "./components/Footer.jsx";

// Subtle divider between sections
function SectionDivider() {
  return (
    <div
      style={{
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    />
  );
}

export default function BISK8Landing() {
  const { lang } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(false);

  // Force browser to recalculate page height after all content renders
  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const t = translations[lang] || translations.fr;

  const prices = {
    solo: isAnnual ? "99.90 EUR" : "9.90 EUR",
    couple: isAnnual ? "149.90 EUR" : "14.90 EUR",
    famille: isAnnual ? "179.90 EUR" : "17.90 EUR",
    period: isAnnual ? t.year : t.month,
  };

  const [showToast, setShowToast] = useState(false);
  const handleComingSoon = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <div style={{ fontFamily: "'HighCruiser', sans-serif", background: "#000000", color: "#fff", minHeight: "100vh" }}>
      {showToast && (
        <div style={{ position: "fixed", bottom: 40, left: "50%", transform: "translateX(-50%)", background: "#222", color: "#fff", padding: "12px 28px", borderRadius: 12, fontSize: 14, fontWeight: 600, zIndex: 9999, animation: "fadeIn 0.3s ease", fontFamily: "'HighCruiser', sans-serif", letterSpacing: 1 }}>
          {t.comingSoon}
        </div>
      )}

      <Nav />
      <HeroSection />
      <HowItWorks />
      <DualPhoneSection />
      <SectionDivider />
      <EditorialSection />
      <SectionDivider />
      <FeaturesSection />
      <SectionDivider />
      <LooksGallery />
      <SectionDivider />
      <PricingSection isAnnual={isAnnual} setIsAnnual={setIsAnnual} prices={prices} handleComingSoon={handleComingSoon} />
      <CtaSection handleComingSoon={handleComingSoon} />
      <Footer />
    </div>
  );
}
