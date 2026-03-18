import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export default function CascadeText({ text, style }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10%' });
  return (
    <motion.h2 ref={ref} style={style} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.03 } } }}>
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={{ hidden: { opacity: 0, y: -40, rotateX: -90 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.5, ease: EASE } } }} style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal", transformOrigin: "top" }}>
          {char}
        </motion.span>
      ))}
    </motion.h2>
  );
}
