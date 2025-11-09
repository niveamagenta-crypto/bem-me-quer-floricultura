import { Flower2, Heart, Leaf, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { services } from '../data/services';
import { WHATSAPP_LINK } from '../config/contact';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const iconMap = {
  flower: Flower2,
  heart: Heart,
  leaf: Leaf,
};

const themeConfig = {
  events: {
    badge: 'bg-primary/15 text-primary-dark',
    accent: 'from-primary/20 via-primary/5 to-transparent',
    label: 'Eventos assinatura',
  },
  bouquets: {
    badge: 'bg-tertiary/15 text-tertiary-dark',
    accent: 'from-tertiary/20 via-tertiary/5 to-transparent',
    label: 'Bouquets autorais',
  },
  botanical: {
    badge: 'bg-secondary/10 text-secondary',
    accent: 'from-secondary/25 via-secondary/10 to-transparent',
    label: 'Botânica viva',
  },
};

const layoutMap = {
  portrait: 'md:col-span-4 lg:col-span-4',
};

const Services = () => {
  const navigate = useNavigate();
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleServiceLink = (link) => {
    if (!link) return;

    if (link.startsWith('/')) {
      navigate(link);
    } else if (link.startsWith('#')) {
      const element = document.getElementById(link.substring(1));
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else if (link.startsWith('http')) {
      window.open(link, '_blank');
    }
  };

  const motionCard = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '0px 0px -100px 0px' },
          transition: { duration: 0.7, delay, ease: [0.24, 0.12, 0.25, 1] },
        };

  return (
    <section id="servicos" className="bg-white py-24 md:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div className="mx-auto max-w-3xl text-center" {...motionCard(0)}>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-primary-dark">
            O que fazemos
          </span>
          <h2 className="mt-6 font-display text-4xl text-secondary md:text-5xl">
            Curadoria floral para cada ocasião
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Do primeiro moodboard aos últimos ajustes no grande dia, desenhamos experiências vivas
            com identidade, cuidado e ritmo editorial.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-12">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const theme = themeConfig[service.theme] || themeConfig.events;
            const layoutClass = layoutMap[service.layout] || layoutMap.portrait;

            return (
              <motion.article
                key={service.id}
                className={clsx(
                  'group relative overflow-hidden rounded-[32px] border border-white/40 bg-white shadow-[0_25px_45px_-30px_rgba(0,0,0,0.2)] transition hover:-translate-y-2 hover:shadow-[0_45px_65px_-30px_rgba(217,91,108,0.3)]',
                  layoutClass
                )}
                {...motionCard(index * 0.08)}
              >
                <div
                  className={clsx(
                    'absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100',
                    theme.accent
                  )}
                />

                <div className="relative grid h-full overflow-hidden md:grid-cols-[0.9fr_1fr]">
                  <div className="relative h-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/30" />
                    <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-700">
                      {service.category || theme.label}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between gap-6 p-8 md:p-10">
                    <div className="space-y-4">
                      <span
                        className={clsx(
                          'inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em]',
                          theme.badge
                        )}
                      >
                        {theme.label}
                      </span>
                      <h3 className="font-display text-2xl text-secondary md:text-3xl">
                        {service.title}
                      </h3>
                      <p className="text-base leading-relaxed text-gray-600">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-4 border-t border-gray-100 pt-6">
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-inner">
                          {Icon && <Icon className="text-primary" size={24} />}
                        </span>
                        <p className="text-sm text-gray-500">Moodboards, paletas e execução completa</p>
                      </div>
                      <button
                        onClick={() => handleServiceLink(service.link)}
                        className="group/cta inline-flex items-center gap-2 rounded-full border border-transparent bg-black/90 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
                      >
                        <span>{service.ctaLabel || 'Ver projetos'}</span>
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover/cta:translate-x-1"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div className="mt-20 text-center" {...motionCard(0.2)}>
          <p className="text-gray-600">
            Tem um projeto especial em mente? Vamos criar um storyboard floral juntos.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary px-8 py-4 text-white shadow-elegant transition hover:bg-primary-dark"
          >
            <span>Solicitar orçamento</span>
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

