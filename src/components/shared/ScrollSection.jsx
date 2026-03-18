import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ScrollSection({ children, style, className, id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });

  return (
    <section ref={ref} id={id} className={className} style={{ ...style }}>
      <motion.div
        initial={{ opacity: 0.01, y: 80, scale: 0.96 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: "100%" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
