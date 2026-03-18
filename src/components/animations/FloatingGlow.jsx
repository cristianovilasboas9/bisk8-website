export default function FloatingGlow({ color = 'rgba(255,255,255,0.04)', size = 500, top, left, right, bottom, delay = 0 }) {
  return (
    <div style={{
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      background: `radial-gradient(circle, ${color}, transparent 70%)`,
      top, left, right, bottom,
      pointerEvents: 'none',
      animation: `floatGlow ${8 + delay}s ease-in-out infinite alternate`,
      filter: 'blur(60px)',
      zIndex: 0,
    }} />
  );
}
