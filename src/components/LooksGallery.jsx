import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext.jsx';
import { translations } from '../data/translations.js';
import FadeUp from './animations/FadeUp.jsx';

const GALLERY_IMAGES = [
  '/images/look-7.png',
  '/images/look-8.png',
  '/images/look-9.png',
  '/images/look-10.png',
  '/images/look-11.png',
  '/images/look-12.png',
  '/images/look-13.png',
  '/images/look-14.png',
  '/images/look-15.png',
  '/images/look-16.png',
  '/images/look-17.png',
];

function MobileCardStack({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getCardStyle = (index) => {
    const total = images.length;
    let diff = index - currentIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    if (diff === 0) return { y: 0, scale: 1, opacity: 1, zIndex: 5 };
    if (diff === -1) return { y: -120, scale: 0.88, opacity: 0.6, zIndex: 4 };
    if (diff === -2) return { y: -210, scale: 0.76, opacity: 0.3, zIndex: 3 };
    if (diff === 1) return { y: 120, scale: 0.88, opacity: 0.6, zIndex: 4 };
    if (diff === 2) return { y: 210, scale: 0.76, opacity: 0.3, zIndex: 3 };
    return { y: diff > 0 ? 300 : -300, scale: 0.6, opacity: 0, zIndex: 0 };
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.y < -50) setCurrentIndex((p) => (p + 1) % images.length);
    else if (info.offset.y > 50) setCurrentIndex((p) => (p === 0 ? images.length - 1 : p - 1));
  };

  return (
    <div style={{
      position: 'relative',
      height: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {images.map((src, index) => {
        const style = getCardStyle(index);
        const isCurrent = index === currentIndex;
        const absDiff = Math.abs(index - currentIndex);
        if (absDiff > 2 && absDiff < images.length - 2) return null;

        return (
          <motion.div
            key={index}
            animate={{ y: style.y, scale: style.scale, opacity: style.opacity }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            drag={isCurrent ? 'y' : false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={isCurrent ? handleDragEnd : undefined}
            style={{
              position: 'absolute',
              zIndex: style.zIndex,
              cursor: isCurrent ? 'grab' : 'default',
            }}
          >
            <div style={{
              width: '220px',
              aspectRatio: '9/16',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: isCurrent ? '0 20px 50px rgba(0,0,0,0.4)' : '0 8px 20px rgba(0,0,0,0.2)',
            }}>
              <img src={src} alt="Look" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </motion.div>
        );
      })}

      {/* Navigation dots */}
      <div style={{
        position: 'absolute', right: '-30px', top: '50%', transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column', gap: '6px',
      }}>
        {images.map((_, i) => (
          <div key={i} onClick={() => setCurrentIndex(i)} style={{
            width: '6px',
            height: i === currentIndex ? '20px' : '6px',
            borderRadius: '3px',
            background: i === currentIndex ? '#FFF' : 'rgba(255,255,255,0.25)',
            transition: 'all 0.3s',
            cursor: 'pointer',
          }} />
        ))}
      </div>
    </div>
  );
}

export default function LooksGallery() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.fr;

  const [shuffledImages, setShuffledImages] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const shuffled = [...GALLERY_IMAGES].sort(() => Math.random() - 0.5);
    setShuffledImages([...shuffled, ...shuffled]);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section
      style={{
        padding: isMobile ? '0' : '8rem 0',
        background: '#000',
        overflow: isMobile ? 'visible' : 'hidden',
      }}
    >
      {isMobile && <div style={{ height: '4rem', background: '#000' }} />}

      <FadeUp>
        <h2
          style={{
            fontFamily: "'HighCruiser', sans-serif",
            fontSize: isMobile ? '1rem' : 'clamp(1.5rem, 4vw, 2.5rem)',
            textAlign: 'center',
            color: 'rgba(255,255,255,0.15)',
            letterSpacing: '0.3em',
            marginBottom: isMobile ? '2rem' : '3rem',
            padding: isMobile ? '1rem 1rem 2rem' : '0',
            background: isMobile ? '#000' : 'transparent',
            position: 'relative',
            zIndex: 20,
          }}
        >
          {t.gallery?.title || 'INFINITE STYLE'}
        </h2>
      </FadeUp>

      <div style={{ position: 'relative', zIndex: 1, overflow: isMobile ? 'hidden' : 'visible', paddingTop: isMobile ? '1rem' : 0 }}>
      {isMobile ? (
        <MobileCardStack images={shuffledImages.slice(0, GALLERY_IMAGES.length)} />
      ) : (
        /* Desktop/Tablet: horizontal auto-scrolling */
        <div style={{ overflow: 'hidden' }}>
          <motion.div
            animate={{ x: [0, -(GALLERY_IMAGES.length * 220)] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
            style={{
              display: 'flex',
              gap: '1.5rem',
              width: 'fit-content',
            }}
          >
            {shuffledImages.map((src, i) => (
              <div
                key={i}
                style={{
                  width: '200px',
                  aspectRatio: '9/16',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.06)',
                  flexShrink: 0,
                }}
              >
                <img
                  src={src}
                  alt={`Look ${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </motion.div>
        </div>
      )}
      </div>
    </section>
  );
}
