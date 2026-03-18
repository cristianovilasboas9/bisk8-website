import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function CountUp({ target, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10%' });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      let frame = 0;
      const frames = 30;
      const interval = setInterval(() => { frame++; setCount(Math.round((frame / frames) * target)); if (frame >= frames) clearInterval(interval); }, 30);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [isInView, target, delay]);
  return <span ref={ref}>{String(count).padStart(2, "0")}</span>;
}
