import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext.jsx';
import { translations } from '../data/translations.js';
import FadeUp from './animations/FadeUp.jsx';
import useIsMobile from '../hooks/useIsMobile.js';

const LOOKS = [
  { text: 'Soirée', image: '/images/look-7.png' },
  { text: 'Bureau', image: '/images/look-8.png' },
  { text: 'Week-end', image: '/images/look-9.png' },
  { text: 'Voyage', image: '/images/look-10.png' },
];

export default function EditorialSection() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.fr;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10%' });
  const [currentLook, setCurrentLook] = useState(0);
  const isMobile = useIsMobile();

  const defaultLooks = ['Soirée', 'Bureau', 'Week-end', 'Voyage'];
  const lookTexts = t.editorial?.looks || defaultLooks;

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setCurrentLook((prev) => (prev + 1) % LOOKS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isInView]);

  const features = [
    {
      icon: '✨',
      title: t.editorial?.feature1Title || 'AI-Powered Looks',
      desc: t.editorial?.feature1Desc || 'Our AI creates complete outfits from your wardrobe, matching your style and the occasion.',
    },
    {
      icon: '👤',
      title: t.editorial?.feature2Title || 'Realistic Avatar',
      desc: t.editorial?.feature2Desc || 'See yourself — not a mannequin. Your face, your body, your proportions.',
    },
    {
      icon: '📅',
      title: t.editorial?.feature3Title || 'Plan Ahead',
      desc: t.editorial?.feature3Desc || "Plan your week's outfits every Sunday night. Weather-aware suggestions included.",
    },
  ];

  return (
    <section
      ref={ref}
      style={{
        padding: isMobile ? '3rem 1.5rem' : '4rem 2rem',
        background: '#000',
        overflow: isMobile ? 'visible' : 'hidden',
        maxHeight: isMobile ? 'none' : '100vh',
        display: 'flex',
        alignItems: isMobile ? 'flex-start' : 'center',
        ...(isMobile && {
          transform: 'translate3d(0, 0, 0)',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
        }),
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        <FadeUp>
          <h2
            style={{
              fontFamily: "'HighCruiser', sans-serif",
              fontSize: isMobile ? '1.3rem' : 'clamp(1.5rem, 3vw, 2.2rem)',
              lineHeight: 1.2,
              textAlign: 'center',
              color: '#FFF',
              marginBottom: isMobile ? '1.5rem' : '2.5rem',
              letterSpacing: 2,
            }}
          >
            {t.editorial?.title || 'SEE YOURSELF IN EVERY OUTFIT BEFORE YOU DRESS'}
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div
            className="editorial-layout"
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: isMobile ? '2rem' : '2.5rem',
              flexWrap: isMobile ? 'nowrap' : 'wrap',
            }}
          >
            {/* Avatar image */}
            <div
              style={{
                width: isMobile ? '70vw' : 'clamp(160px, 22vw, 260px)',
                maxWidth: isMobile ? '280px' : 'none',
                aspectRatio: '9/16',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
                background: '#1A1A1A',
                flexShrink: 0,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentLook}
                  src={LOOKS[currentLook].image}
                  alt={LOOKS[currentLook].text}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center bottom', position: 'absolute', inset: 0 }}
                  loading="lazy"
                  decoding="async"
                />
              </AnimatePresence>

              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '2.5rem 1.5rem 1.5rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentLook}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      fontFamily: "'HighCruiser', sans-serif",
                      fontSize: 'clamp(1.1rem, 2vw, 1.8rem)',
                      color: '#FFF',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {lookTexts[currentLook] || defaultLooks[currentLook]}
                  </motion.div>
                </AnimatePresence>

                <div style={{ display: 'flex', gap: '6px', marginTop: '0.75rem' }}>
                  {Array.from({ length: LOOKS.length }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: i === currentLook ? '20px' : '6px',
                        height: '6px',
                        borderRadius: '3px',
                        background: i === currentLook ? '#FFF' : 'rgba(255,255,255,0.3)',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Feature highlights */}
            <div
              style={{
                maxWidth: '380px',
                display: 'flex',
                flexDirection: 'column',
                gap: isMobile ? '0.8rem' : '1.2rem',
              }}
            >
              {features.map((item, i) => (
                <FadeUp key={i} delay={0.3 + i * 0.15}>
                  <div>
                    <div style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>
                      {item.icon}
                    </div>
                    <div
                      style={{
                        fontFamily: "'HighCruiser', sans-serif",
                        fontSize: isMobile ? '0.85rem' : '1rem',
                        color: '#FFF',
                        marginBottom: '0.3rem',
                        letterSpacing: 1,
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: isMobile ? '0.7rem' : '0.85rem',
                        color: 'rgba(255,255,255,0.5)',
                        lineHeight: 1.6,
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
