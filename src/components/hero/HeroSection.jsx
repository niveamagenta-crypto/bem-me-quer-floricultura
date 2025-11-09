import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import clsx from 'clsx';
import HeroVideoBackground from './HeroVideoBackground';
import { WHATSAPP_LINK } from '../../config/contact';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import useTimeOfDayTheme from '../../hooks/useTimeOfDayTheme';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const timeOfDayTheme = useTimeOfDayTheme();
  const navigateContainerRef = useRef(null);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: navigateContainerRef,
    offset: ['start start', 'end start'],
  });

  const animatedGradientOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.3]);
  const animatedTranslate = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  const motionConfig = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 32 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.24, 0.12, 0.25, 1] },
        };

  return (
    <section
      id="inicio"
      ref={navigateContainerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-32 lg:pb-40"
    >
      <HeroVideoBackground
        prefersReducedMotion={prefersReducedMotion}
        overlayGradient={timeOfDayTheme.gradient}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-12 h-[60vh] blur-3xl"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(217,91,108,0.25), transparent 55%), radial-gradient(circle at 80% 30%, rgba(184,160,203,0.3), transparent 60%)',
          opacity: animatedGradientOpacity,
          y: animatedTranslate,
        }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-12">
        <div className="max-w-4xl">
          <motion.h1
            className="mt-6 font-display text-5xl font-semibold text-white drop-shadow md:text-7xl"
            {...motionConfig(0.15)}
          >
            Bem Me Quer
            <motion.span
              className="mt-4 block font-sans text-2xl font-light uppercase tracking-widest text-white/80 md:text-3xl"
              {...motionConfig(0.24)}
            >
              Floricultura em Angra dos Reis
            </motion.span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg font-light text-white/85 md:text-2xl"
            {...motionConfig(0.36)}
          >
            Buquês autorais, Ornamentação de Eventos e Plantas de Cultivo sob medida. Há cinco anos
            criando narrativas que transformam eventos em memórias inesquecíveis.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            {...motionConfig(0.48)}
          >
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { scale: 1.04, boxShadow: '0 20px 35px -20px rgba(217,91,108,0.65)' }
              }
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              className={clsx(
                'group inline-flex items-center justify-center gap-3 rounded-full px-10 py-4 font-semibold text-white shadow-elegant transition-all',
                'bg-gradient-to-r from-primary via-rose-500 to-tertiary-light focus-visible:ring-white/80'
              )}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10">
                <Phone size={20} />
              </span>
              <span>Converse com nossa equipe</span>
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </motion.a>

            <motion.button
              type="button"
              onClick={() => navigate('/portfolio')}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      scale: 1.03,
                      backgroundColor: 'rgba(255,255,255,0.14)',
                      borderColor: 'rgba(255,255,255,0.65)',
                    }
              }
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-white/5 px-10 py-4 font-semibold text-white transition-all focus-visible:ring-white/80"
            >
              <span>Ver portfólio</span>
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-wrap gap-6 text-sm text-white/70"
            {...motionConfig(0.58)}
          >
            {[
              'Atendimento nacional com curadoria exclusiva',
              'Respostas em tempo real no WhatsApp',
              'Projetos personalizados para cada evento',
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-tertiary-light animate-pulse" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 -translate-x-16 translate-y-16 rounded-full bg-tertiary/30 blur-3xl" />
      <div className="pointer-events-none absolute top-20 right-4 h-32 w-32 rounded-full bg-primary/25 blur-2xl" />
    </section>
  );
};

export default HeroSection;

