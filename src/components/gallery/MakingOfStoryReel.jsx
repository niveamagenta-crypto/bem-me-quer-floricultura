import { useState, useEffect, useMemo } from 'react';
import { useSprings, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import clsx from 'clsx';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const CARD_HEIGHT = 220;
const DRAG_THRESHOLD = 60;

const MakingOfStoryReel = ({ stories }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const springsConfig = useMemo(
    () => ({
      tension: 280,
      friction: 26,
      mass: 1,
    }),
    []
  );

  const [springs, api] = useSprings(
    stories.length,
    (index) => ({
      y: index * CARD_HEIGHT,
      scale: index === activeIndex ? 1 : 0.9,
      opacity: index > activeIndex + 2 ? 0 : 1,
    }),
    [stories.length]
  );

  useEffect(() => {
    api.start((index) => ({
      y: (index - activeIndex) * CARD_HEIGHT,
      scale: index === activeIndex ? 1 : 0.96,
      opacity: index < activeIndex - 1 ? 0 : 1,
      config: springsConfig,
      immediate: prefersReducedMotion,
    }));
  }, [activeIndex, api, springsConfig, prefersReducedMotion]);

  const bind = useDrag(
    ({ movement: [, my], direction: [, dy], velocity: [, vy], last }) => {
      if (!last) return;

      if (my > DRAG_THRESHOLD || (vy > 0.5 && dy > 0)) {
        setActiveIndex((prev) => Math.max(0, prev - 1));
      } else if (my < -DRAG_THRESHOLD || (vy > 0.5 && dy < 0)) {
        setActiveIndex((prev) => Math.min(stories.length - 1, prev + 1));
      }
    },
    {
      axis: 'y',
      filterTaps: true,
    }
  );

  return (
    <div className="relative mx-auto flex w-full max-w-md flex-col items-center">
      <div className="relative h-[400px] w-full overflow-hidden rounded-[28px] bg-white/40 p-6 backdrop-blur">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 via-white/40 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/80 via-white/40 to-transparent" />

        <div className="relative h-full w-full">
          {springs.map((styles, index) => (
            <animated.article
              key={stories[index].id}
              className={clsx(
                'absolute inset-x-0 mx-auto w-[90%] cursor-grab overflow-hidden rounded-3xl border border-white/60 p-4 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.55)] backdrop-blur',
                index === activeIndex ? 'z-20' : 'z-10'
              )}
              style={{
                y: styles.y,
                scale: styles.scale,
                opacity: styles.opacity,
              }}
              {...bind()}
            >
              <figure className="relative overflow-hidden rounded-2xl">
                <img
                  src={stories[index].image}
                  alt={stories[index].label}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <figcaption className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    Passo {index + 1}
                  </span>
                  <h4 className="mt-2 font-display text-lg text-white">{stories[index].label}</h4>
                  <p className="mt-1 text-sm text-white/80">{stories[index].description}</p>
                </figcaption>
              </figure>
            </animated.article>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {stories.map((story, index) => (
          <button
            key={story.id}
            onClick={() => setActiveIndex(index)}
            className={clsx(
              'h-2 rounded-full transition-all duration-300',
              index === activeIndex ? 'w-8 bg-secondary' : 'w-2 bg-gray-300'
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default MakingOfStoryReel;

