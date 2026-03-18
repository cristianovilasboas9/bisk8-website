import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useLanguage } from '../LanguageContext.jsx';
import { translations } from '../data/translations.js';
import FadeUp from './animations/FadeUp.jsx';
import useIsMobile from '../hooks/useIsMobile.js';

// Mini typewriter for phone overlay
function TypeWriterMini({ words, small }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    if (!deleting && text === word) {
      const timer = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(timer);
    }
    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const timer = setTimeout(() => {
      setText(deleting
        ? word.substring(0, text.length - 1)
        : word.substring(0, text.length + 1)
      );
    }, deleting ? 30 : 60);
    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span style={{ color: '#FFF', fontWeight: 600, fontSize: small ? '0.5rem' : '0.75rem' }}>
      {text}
      <span style={{ opacity: 0.5, animation: 'blink 1s infinite' }}>|</span>
    </span>
  );
}

export default function DualPhoneSection() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.fr;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-10%' });
  const isMobile = useIsMobile();

  const phoneWidth = isMobile ? 130 : 200;
  const phoneRadius = isMobile ? 24 : 32;
  const centerMinWidth = isMobile ? 70 : 100;
  const centerPadding = isMobile ? '0 0.25rem' : '0 0.5rem';
  const centerLogoWidth = isMobile ? '35px' : '50px';
  const progressBarWidth = isMobile ? 50 : 70;
  const labelFontSize = isMobile ? '0.55rem' : '0.8rem';

  // Scroll-driven progress bar
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'center center'],
  });
  const progressWidth = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);

  // Right phone appears when progress bar is nearly full
  const rightPhoneOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const rightPhoneY = useTransform(scrollYProgress, [0.7, 0.9], [30, 0]);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: isMobile ? '5rem 1rem' : '10rem 2rem',
        background: '#000',
        overflow: 'hidden',
        ...(isMobile && {
          transform: 'translate3d(0, 0, 0)',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
        }),
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Title */}
        <FadeUp>
          <h2
            style={{
              fontFamily: "'HighCruiser', sans-serif",
              fontSize: isMobile ? 'clamp(1.2rem, 5vw, 1.6rem)' : 'clamp(1.5rem, 3vw, 2.5rem)',
              textAlign: 'center',
              color: '#FFF',
              lineHeight: 1.25,
              maxWidth: 600,
              margin: '0 auto 4rem',
              letterSpacing: 2,
            }}
          >
            {t.dualPhone?.title || 'YOUR STYLE, POWERED BY AI'}
          </h2>
        </FadeUp>

        {/* 3-part layout: Left Phone | Center Analyzer | Right Phone */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: isMobile ? '0.75rem' : '2rem',
          }}
        >
          {/* ===== LEFT: Raw Photo + Scanning Bar + TypeWriter ===== */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              style={{
                fontFamily: "'HighCruiser', sans-serif",
                fontSize: labelFontSize,
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.15em',
                textAlign: 'center',
                marginBottom: '1rem',
              }}
            >
              {t.dualPhone?.phone1Label || 'YOUR PHOTO'}
            </motion.div>

            {/* Phone frame */}
            <div
              style={{
                width: phoneWidth,
                aspectRatio: '9/19.5',
                borderRadius: phoneRadius,
                border: '2.5px solid rgba(255,255,255,0.1)',
                overflow: 'hidden',
                background: '#111',
                boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
                position: 'relative',
              }}
            >
              <img
                src="/images/af1-raw.jpg"
                alt="Raw sneaker photo"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
                decoding="async"
              />

              {/* SCANNING BAR */}
              <motion.div
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent)',
                  boxShadow: '0 0 15px rgba(255,255,255,0.4), 0 0 30px rgba(255,255,255,0.2)',
                  zIndex: 2,
                  pointerEvents: 'none',
                }}
              />

              {/* TYPEWRITER OVERLAY */}
              <div
                style={{
                  position: 'absolute',
                  top: isMobile ? 12 : 'auto',
                  bottom: isMobile ? 'auto' : 16,
                  left: isMobile ? 8 : 10,
                  right: isMobile ? 8 : 10,
                  background: 'rgba(0,0,0,0.75)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  borderRadius: isMobile ? 10 : 12,
                  padding: isMobile ? '5px 8px' : '10px 14px',
                  zIndex: 3,
                  height: isMobile ? 46 : 'auto',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    fontSize: isMobile ? '0.35rem' : '0.6rem',
                    color: 'rgba(255,255,255,0.4)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: isMobile ? 2 : 4,
                  }}
                >
                  AI Classification
                </div>
                <TypeWriterMini
                  small={isMobile}
                  words={[
                    'Nike Air Force 1 ✓',
                    'Sneakers · White ✓',
                    'Casual · All Season ✓',
                    'Category: Shoes ✓',
                  ]}
                />
              </div>
            </div>
          </motion.div>

          {/* ===== CENTER: BISK8 logo + Analyzing + Progress bar ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
              padding: centerPadding,
              minWidth: centerMinWidth,
            }}
          >
            <motion.img
              src="/images/white-logo.svg"
              alt="BISK8"
              animate={{
                filter: [
                  'drop-shadow(0 0 15px rgba(255,255,255,0.1))',
                  'drop-shadow(0 0 35px rgba(255,255,255,0.3))',
                  'drop-shadow(0 0 15px rgba(255,255,255,0.1))',
                ],
              }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              style={{
                width: centerLogoWidth,
                height: 'auto',
              }}
            />

            <div
              style={{
                fontSize: isMobile ? '0.45rem' : '0.6rem',
                color: 'rgba(255,255,255,0.35)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Analyzing...
            </div>

            <div
              style={{
                width: progressBarWidth,
                height: 3,
                background: 'rgba(255,255,255,0.08)',
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              <motion.div
                style={{
                  width: progressWidth,
                  height: '100%',
                  background: '#FFF',
                  borderRadius: 2,
                }}
              />
            </div>

            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              style={{
                color: 'rgba(255,255,255,0.2)',
                fontSize: isMobile ? '0.8rem' : '1rem',
                marginTop: '0.25rem',
              }}
            >
              →
            </motion.div>
          </motion.div>

          {/* ===== RIGHT: Classification Result ===== */}
          <motion.div
            style={{
              opacity: rightPhoneOpacity,
              y: rightPhoneY,
            }}
          >
            <div
              style={{
                fontFamily: "'HighCruiser', sans-serif",
                fontSize: labelFontSize,
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.15em',
                textAlign: 'center',
                marginBottom: '1rem',
              }}
            >
              {t.dualPhone?.phone2Label || 'AI RESULT'}
            </div>

            <div
              style={{
                width: phoneWidth,
                aspectRatio: '9/19.5',
                borderRadius: phoneRadius,
                border: '2.5px solid rgba(255,255,255,0.1)',
                overflow: 'hidden',
                background: '#111',
                boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
              }}
            >
              <img
                src="/images/af1-result.png"
                alt="AI classification result"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom description */}
        <FadeUp delay={0.3}>
          <p
            style={{
              textAlign: 'center',
              color: 'rgba(255,255,255,0.35)',
              fontSize: isMobile ? '0.85rem' : '1rem',
              maxWidth: 500,
              margin: isMobile ? '2rem auto 0' : '4rem auto 0',
              lineHeight: 1.7,
            }}
          >
            {t.dualPhone?.description ||
              'Take any photo. AI analyzes and classifies your garment in seconds. Ready in your wardrobe.'}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
