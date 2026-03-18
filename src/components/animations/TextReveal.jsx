import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function TextReveal({ children, delay = 0, className = '', style = {} }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10%' });

  return (
    <div ref={ref} style={{ overflow: 'hidden', ...style }} className={className}>
      <motion.div
        initial={{ y: '120%', rotateX: 40 }}
        animate={isInView ? { y: '0%', rotateX: 0 } : {}}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'bottom' }}
      >
        {children}
      </motion.div>
    </div>
  );
}
