import { useEffect, useMemo, useRef, useState } from 'react';
import { useSprings, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { Quote, Play, Pause, Sparkles } from 'lucide-react';
import clsx from 'clsx';
import { testimonialMedia } from '../../data/testimonials';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const DRAG_THRESHOLD = 60;

const TestimonialsMultimedia = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef([]);

  const data = testimonialMedia;

  const [springs, api] = useSprings(
    data.length,
    (index) => ({
      x: index * 40,
      y: index * 12,
      scale: index === 0 ? 1 : 0.92,
      opacity: index > 2 ? 0 : 1,
    }),
    [data.length]
  );

  const updateSprings = useMemo(
    () => (index) => ({
      x: (index - activeIndex) * 60,
      y: Math.abs(index - activeIndex) * 14,
      scale: index === activeIndex ? 1 : 0.92,
      opacity: Math.abs(index - activeIndex) > 2 ? 0 : 1,
      config: { tension: 220, friction: 26 },
      immediate: prefersReducedMotion,
    }),
    [activeIndex, prefersReducedMotion]
  );

  useEffect(() => {
    api.start((index) => updateSprings(index));
  }, [activeIndex, api, updateSprings]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeIndex) {
        if (!prefersReducedMotion) {
          video.currentTime = 0;
          video.play().catch(() => {});
          setIsPlaying(true);
        }
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex, prefersReducedMotion]);

  const bind = useDrag(
    ({ movement: [mx], direction: [dx], velocity: [vx], last }) => {
      if (!last) return;

      if (mx < -DRAG_THRESHOLD || (vx > 0.5 && dx < 0)) {
        setActiveIndex((prev) => Math.min(data.length - 1, prev + 1));
        setIsPlaying(false);
      } else if (mx > DRAG_THRESHOLD || (vx > 0.5 && dx > 0)) {
        setActiveIndex((prev) => Math.max(0, prev - 1));
        setIsPlaying(false);
      }
    },
    { axis: 'x', filterTaps: true }
  );

  const togglePlayback = (index) => {
    const target = videoRefs.current[index];
    if (!target) return;

    if (target.paused) {
      target.play().catch(() => {});
      setIsPlaying(true);
    } else {
      target.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="depoimentos" className="relative overflow-hidden bg-white/60 py-24 md:py-28">
      <div className="absolute top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-tertiary/30 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-secondary">
            voz dos clientes
          </span>
          <h2 className="mt-6 font-display text-4xl text-secondary md:text-5xl">
            Depoimentos multimídia
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Narrativas reais em formato vídeo, com legendas automáticas para acessibilidade e um
            carrossel com efeito stack para incentivar a interação.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full max-w-xl">
            <div className="relative h-[480px] w-full">
              {springs.map((styles, index) => (
                <animated.article
                  key={data[index].id}
                  className={clsx(
                    'absolute left-1/2 top-1/2 flex w-[90%] max-w-[360px] -translate-x-1/2 -translate-y-1/2 cursor-grab flex-col overflow-hidden rounded-[32px] border border-white/20 bg-black/90 shadow-[0_35px_80px_-45px_rgba(0,0,0,0.8)] transition focus-within:outline-none',
                    index === activeIndex ? 'z-30' : 'z-20'
                  )}
                  style={{
                    x: styles.x,
                    y: styles.y,
                    scale: styles.scale,
                    opacity: styles.opacity,
                  }}
                  onClick={() => setActiveIndex(index)}
                  {...bind()}
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      src={data[index].videoSrc}
                      poster={data[index].poster}
                      playsInline
                      preload="metadata"
                      muted
                      className="h-full w-full object-cover"
                      tabIndex={index === activeIndex ? 0 : -1}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        togglePlayback(index);
                      }}
                      className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-secondary shadow-lg transition hover:bg-white"
                    >
                      {index === activeIndex && isPlaying ? (
                        <>
                          <Pause size={16} />
                          Pausar
                        </>
                      ) : (
                        <>
                          <Play size={16} />
                          Assistir
                        </>
                      )}
                    </button>
                  </div>

                  <div className="relative space-y-4 bg-white p-6 text-left text-gray-700">
                    <div className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-gray-400">
                      <Sparkles size={16} />
                      {data[index].tags.join(' • ')}
                    </div>
                    <h3 className="font-display text-xl text-secondary">{data[index].title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{data[index].transcript}</p>
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-gray-400">
                      <span>{data[index].location}</span>
                      <span>{data[index].duration}</span>
                    </div>
                  </div>
                </animated.article>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              {data.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={clsx(
                    'h-2 rounded-full transition-all duration-300',
                    index === activeIndex ? 'w-10 bg-secondary' : 'w-4 bg-gray-300'
                  )}
                  aria-label={`Selecionar depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="relative flex-1 rounded-[32px] bg-white/80 p-10 shadow-[0_45px_90px_-60px_rgba(0,0,0,0.35)] backdrop-blur">
            <Quote size={48} className="text-tertiary" />
            <h3 className="mt-6 font-display text-3xl text-secondary">
              “Trabalhamos com narrativas reais e produção audiovisual leve para gerar conexão e
              transparência. Os clientes compartilham emoções e bastidores em micro histórias que
              inspiram novas experiências.”
            </h3>

            <p className="mt-6 text-sm leading-relaxed text-gray-600">
              Todos os vídeos contam com legendas automáticas e opção de transcript para leitura
              rápida. Ideal para compartilhar nas redes sociais ou apresentar em reuniões com novos
              clientes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-gray-500">
              <span className="rounded-full bg-secondary/10 px-4 py-2 text-secondary">Vídeos curtos</span>
              <span className="rounded-full bg-tertiary/10 px-4 py-2 text-tertiary-dark">
                Legendas automáticas
              </span>
              <span className="rounded-full bg-primary/10 px-4 py-2 text-primary-dark">
                Stack interativo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMultimedia;

