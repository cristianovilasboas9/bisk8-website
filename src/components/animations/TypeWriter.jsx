import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TypeWriter({
  words = [],
  interval = 3000,
  typingSpeed = 80,
  deletingSpeed = 50,
  className = '',
  style = {},
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (!isDeleting && displayedText === currentWord) {
      const timeout = setTimeout(() => setIsDeleting(true), interval);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, words, interval, typingSpeed, deletingSpeed]);

  return (
    <span className={className} style={style}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        style={{
          display: 'inline-block',
          width: '2px',
          height: '1em',
          background: 'currentColor',
          marginLeft: '2px',
          verticalAlign: 'text-bottom',
        }}
      />
    </span>
  );
}
