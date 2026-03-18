import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function StaggerChildren({ children, staggerDelay = 0.12, className = '', style = {} }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10%' });

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          visible: { transition: { staggerChildren: staggerDelay } },
          hidden: {}
        }}
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function StaggerItem({ children, className = '', style = {} }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
