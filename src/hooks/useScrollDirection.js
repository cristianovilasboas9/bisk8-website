import { useState, useEffect, useRef } from 'react';

export default function useScrollDirection(threshold = 10) {
  const [direction, setDirection] = useState('up');
  const prevOffset = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const currentOffset = window.scrollY;
        const diff = currentOffset - prevOffset.current;
        if (Math.abs(diff) >= threshold) {
          setDirection(diff > 0 ? 'down' : 'up');
          prevOffset.current = currentOffset;
        }
        ticking.current = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return direction;
}
