import { useEffect, useRef, useState } from 'react';

const GRADIENT_STOPS = [
  {
    threshold: 0,
    gradient:
      'linear-gradient(180deg, rgba(246,238,233,1) 0%, rgba(255,230,228,0.95) 40%, rgba(255,226,239,0.9) 100%)',
  },
  {
    threshold: 0.2,
    gradient:
      'linear-gradient(180deg, rgba(255,230,228,1) 0%, rgba(246,217,238,0.95) 45%, rgba(232,216,249,0.9) 100%)',
  },
  {
    threshold: 0.45,
    gradient:
      'linear-gradient(180deg, rgba(232,216,249,1) 0%, rgba(210,190,224,0.95) 50%, rgba(196,207,237,0.9) 100%)',
  },
  {
    threshold: 0.7,
    gradient:
      'linear-gradient(180deg, rgba(196,207,237,1) 0%, rgba(186,216,222,0.95) 60%, rgba(246,238,233,0.9) 100%)',
  },
];

const getGradientForProgress = (progress) => {
  for (let index = GRADIENT_STOPS.length - 1; index >= 0; index -= 1) {
    if (progress >= GRADIENT_STOPS[index].threshold) {
      return GRADIENT_STOPS[index].gradient;
    }
  }

  return GRADIENT_STOPS[0].gradient;
};

const useScrollChromaticBackground = () => {
  const [gradient, setGradient] = useState(GRADIENT_STOPS[0].gradient);
  const animationFrame = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }

      animationFrame.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
        const nextGradient = getGradientForProgress(progress);

        setGradient((previous) => (previous === nextGradient ? previous : nextGradient));
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return gradient;
};

export default useScrollChromaticBackground;

