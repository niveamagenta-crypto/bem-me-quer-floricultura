import { useEffect } from 'react';
import Lenis from 'lenis';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import useIsCoarsePointer from '../../hooks/useIsCoarsePointer';

const SmoothScrollProvider = ({ children }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isCoarsePointer = useIsCoarsePointer();

  useEffect(() => {
    const root = document.documentElement;

    if (prefersReducedMotion) {
      root.style.scrollBehavior = 'smooth';
      return () => {
        root.style.removeProperty('scroll-behavior');
      };
    }

    if (isCoarsePointer) {
      root.style.scrollBehavior = 'auto';
      return () => {
        root.style.removeProperty('scroll-behavior');
      };
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
    });

    root.style.scrollBehavior = 'auto';

    let animationFrame;
    const raf = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
      root.style.removeProperty('scroll-behavior');
    };
  }, [prefersReducedMotion, isCoarsePointer]);

  return children;
};

export default SmoothScrollProvider;

