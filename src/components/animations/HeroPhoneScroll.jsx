import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroPhoneScroll({ children }) {
  const { scrollY } = useScroll();

  // Gentle parallax only — NO rotation, NO tilt, NO 3D
  const y = useTransform(scrollY, [0, 800], [0, -40], { clamp: true });
  const opacity = useTransform(scrollY, [0, 600], [1, 0.85], { clamp: true });

  return (
    <motion.div
      style={{
        y,
        opacity,
        willChange: 'transform',
      }}
    >
      {children}
    </motion.div>
  );
}
