import { useEffect } from 'react';
import Lenis from 'lenis';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const SmoothScrollProvider = ({ children }) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      document.documentElement.style.scrollBehavior = 'smooth';
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
    });

    document.documentElement.style.scrollBehavior = 'auto';

    let animationFrame;
    const raf = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
      document.documentElement.style.scrollBehavior = 'smooth';
    };
  }, [prefersReducedMotion]);

  return children;
};

export default SmoothScrollProvider;

