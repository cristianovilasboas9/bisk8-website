import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FadeUp({ children, delay = 0, duration = 0.8, y = 60, className = '', style = {} }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10%' });

  return (
    <div ref={ref} className={className} style={{ ...style, position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, y, filter: 'blur(8px)' }}
        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
