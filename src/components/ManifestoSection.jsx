import { motion } from 'framer-motion';
import { Heart, Leaf, Sparkles } from 'lucide-react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const manifestoItems = [
  {
    icon: Sparkles,
    title: 'Flores que contam histórias',
    description: 'Design floral com narrativa afetiva e curadoria exclusiva para cada celebração.',
  },
  {
    icon: Leaf,
    title: 'Processo leve e colaborativo',
    description: 'Acompanhamento próximo desde os moodboards até a montagem final.',
  },
  {
    icon: Heart,
    title: 'Detalhes que surpreendem',
    description: 'Texturas, aromas e cores pensadas para criar memórias inesquecíveis.',
  },
];

const ManifestoSection = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const motionConfig = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '0px 0px -100px 0px' },
          transition: { duration: 0.7, delay, ease: [0.24, 0.12, 0.25, 1] },
        };

  return (
    <section className="relative -mt-8 md:-mt-14 lg:-mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          className="relative overflow-hidden rounded-[40px] bg-white/95 shadow-[0_40px_60px_-30px_rgba(184,160,203,0.35)] backdrop-blur"
          {...motionConfig(0)}
        >
          <div className="absolute -top-20 right-12 h-40 w-40 rounded-full bg-tertiary/20 blur-3xl" />
          <div className="absolute -bottom-24 left-12 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />

          <div className="relative grid gap-12 px-8 py-14 md:grid-cols-[1.2fr_1fr] md:px-16 md:py-20">
            <div>
              <motion.span
                className="inline-flex items-center gap-2 rounded-full bg-tertiary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-tertiary-dark"
                {...motionConfig(0.1)}
              >
                Nossa essência
              </motion.span>

              <motion.h2
                className="mt-6 font-display text-4xl text-secondary md:text-5xl"
                {...motionConfig(0.18)}
              >
                Flores que traduzem sensações, memórias e sonhos.
              </motion.h2>

              <motion.p
                className="mt-6 text-lg leading-relaxed text-gray-600 md:max-w-xl"
                {...motionConfig(0.28)}
              >
                Inspiramos cada projeto com o lifestyle carioca praiano e o carinho de ateliê
                artesanal. Trabalhamos com matérias-primas premium, parceiros confiáveis e um olhar
                atento a cada detalhe.
              </motion.p>
            </div>

            <div className="flex flex-col gap-6">
              {manifestoItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="group flex items-start gap-4 rounded-3xl bg-white/70 p-6 shadow-inner transition hover:bg-white"
                    {...motionConfig(0.2 + index * 0.08)}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-tertiary/15 text-tertiary-dark shadow-md transition group-hover:scale-105">
                      <Icon size={22} />
                    </span>
                    <div>
                      <h3 className="font-display text-xl text-secondary">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoSection;

