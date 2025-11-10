import { motion } from 'framer-motion';
import { Quote, Play } from 'lucide-react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const VIDEO_SOURCE =
  'https://cdn.coverr.co/videos/coverr-a-bride-getting-ready-0478/1080p.mp4';
const VIDEO_POSTER =
  'https://images.unsplash.com/photo-1520854221050-0f4caff449fb?w=1200&q=80&auto=format&fit=crop';

const VideoTestimonialSection = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const motionProps = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '0px 0px -100px 0px' },
          transition: { duration: 0.7, delay, ease: [0.24, 0.12, 0.25, 1] },
        };

  return (
    <section className="relative -mt-14 md:-mt-20 lg:-mt-24 pb-24">
      <div className="container mx-auto px-4 pt-10 md:px-6 md:pt-14 lg:px-12 lg:pt-18">
        <motion.div
          className="grid gap-10 overflow-hidden rounded-[40px] bg-secondary/95 p-8 text-white shadow-[0_45px_70px_-40px_rgba(17,51,34,0.5)] md:grid-cols-[1.1fr_0.9fr] md:p-16"
          {...motionProps(0)}
        >
          <div className="flex flex-col justify-center space-y-6">
            <Quote size={40} className="text-gold" />
            <motion.h3
              className="font-display text-3xl md:text-4xl"
              {...motionProps(0.12)}
            >
              “A Bem Me Quer transformou nosso casamento em um jardim sensorial. Cada arranjo
              traduzia a nossa história.”
            </motion.h3>
            <motion.p className="text-sm uppercase tracking-[0.3em] text-white/70" {...motionProps(0.2)}>
              Ana & Lucas — Destination Wedding em Angra dos Reis
            </motion.p>
            <motion.p className="text-base text-white/80" {...motionProps(0.28)}>
              Em vídeos curtos, nossos clientes revelam bastidores, emoções e como o processo de
              criação funciona. Transparência e cumplicidade em cada etapa.
            </motion.p>
          </div>

          <motion.div
            className="relative overflow-hidden rounded-[32px] bg-black/40 shadow-2xl"
            {...motionProps(0.16)}
          >
            <video
              className="h-full w-full object-cover"
              controls={!prefersReducedMotion}
              playsInline
              muted
              preload={prefersReducedMotion ? 'none' : 'metadata'}
              poster={VIDEO_POSTER}
            >
              {!prefersReducedMotion && <source src={VIDEO_SOURCE} type="video/mp4" />}
            </video>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/40" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-secondary shadow-lg backdrop-blur">
                <Play size={28} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoTestimonialSection;

