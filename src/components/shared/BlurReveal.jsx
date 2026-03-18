import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export default function BlurReveal({ children, delay = 0, style, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 1.0, delay, ease: EASE }}
      style={style}
    >
      {children}
    </motion.div>
  );
}
