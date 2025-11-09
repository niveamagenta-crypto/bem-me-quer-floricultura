import { useEffect, useMemo, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import clsx from 'clsx';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const GalleryFilters = ({ filters, activeFilter, onChange }) => {
  const containerRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const activeIndex = useMemo(
    () => filters.findIndex((filter) => filter.id === activeFilter),
    [filters, activeFilter]
  );

  const [highlightStyles, highlightApi] = useSpring(() => ({
    left: 0,
    width: 0,
    opacity: 0,
    config: { tension: 260, friction: 26 },
  }));

  useEffect(() => {
    if (!containerRef.current) return;
    const activeButton = containerRef.current.querySelector(`[data-filter="${activeFilter}"]`);

    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      highlightApi.start({
        left: prefersReducedMotion ? offsetLeft : offsetLeft - 8,
        width: prefersReducedMotion ? offsetWidth : offsetWidth + 16,
        opacity: 1,
      });
    }
  }, [activeFilter, highlightApi, prefersReducedMotion]);

  return (
    <div className="relative mx-auto flex w-full max-w-4xl justify-center">
      <div
        ref={containerRef}
        className="relative flex flex-wrap items-center justify-center gap-2 rounded-full bg-white/70 p-2 shadow-[0_15px_35px_-25px_rgba(0,0,0,0.35)] backdrop-blur"
      >
        <animated.span
          style={prefersReducedMotion ? {} : highlightStyles}
          className="absolute top-2 bottom-2 rounded-full bg-black/5"
          aria-hidden="true"
        />

        {filters.map((filter) => (
          <button
            key={filter.id}
            data-filter={filter.id}
            onClick={() => onChange(filter.id)}
            className={clsx(
              'relative z-10 flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] transition-all duration-300',
              activeFilter === filter.id
                ? clsx('text-black', filter.accent)
                : 'text-gray-500 hover:text-gray-800'
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryFilters;

