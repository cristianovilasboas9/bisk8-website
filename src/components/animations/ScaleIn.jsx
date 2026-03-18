import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ScaleIn({ children, delay = 0, duration = 1.2, className = '', style = {} }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10%' });

  return (
    <div ref={ref} className={className} style={{ ...style, position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.85, filter: 'blur(12px)' }}
        animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
