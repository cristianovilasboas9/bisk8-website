import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function BlurWord({ children, index, total, isInView }) {
  return (
    <motion.span
      initial={{ opacity: 0, filter: "blur(10px)", y: 15 }}
      animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: "inline-block", marginRight: "0.3em" }}
    >
      {children}
    </motion.span>
  );
}

export default function BlurText({ text, style, dark }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });
  const words = text.split(" ");
  return (
    <h2 ref={ref} style={style}>
      {words.map((word, i) => (
        <BlurWord key={i} index={i} total={words.length} isInView={isInView}>
          {word}
        </BlurWord>
      ))}
    </h2>
  );
}
