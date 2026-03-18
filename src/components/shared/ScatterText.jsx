import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const letterVariant = {
  hidden: (i) => ({ opacity: 0, y: 40 + Math.random() * 30, x: (Math.random() - 0.5) * 60, rotate: (Math.random() - 0.5) * 20, scale: 0.5 }),
  visible: (i) => ({ opacity: 1, y: 0, x: 0, rotate: 0, scale: 1, transition: { duration: 0.5, delay: 0.5 + i * 0.025, ease: EASE } }),
};

export default function ScatterText({ text }) {
  const words = text.split(" ");
  let charIndex = 0;
  return (
    <span style={{ display: "inline" }}>
      {words.map((word, wi) => {
        const startIdx = charIndex;
        charIndex += word.length + 1;
        return (
          <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
            {word.split("").map((char, ci) => (
              <motion.span key={ci} custom={startIdx + ci} variants={letterVariant} initial="hidden" animate="visible" style={{ display: "inline-block" }}>
                {char}
              </motion.span>
            ))}
            {wi < words.length - 1 && <span style={{ display: "inline-block", width: "0.3em" }}>{"\u00A0"}</span>}
          </span>
        );
      })}
    </span>
  );
}
