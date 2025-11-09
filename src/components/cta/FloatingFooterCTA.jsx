import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { CONTACT_INFO, buildWhatsappLink } from '../../config/contact';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const eventOptions = [
  { id: 'casamento', label: 'Casamento' },
  { id: 'corporativo', label: 'Corporate' },
  { id: 'social', label: 'Social' },
  { id: 'botanico', label: 'Botânico' },
];

const FloatingFooterCTA = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [shouldDisplay, setShouldDisplay] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      name: '',
      eventType: eventOptions[0].id,
    },
  });

  const eventType = watch('eventType');

  useEffect(() => {
    const footer = document.getElementById('contato');
    if (!footer) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShouldDisplay(entry.isIntersecting);
        });
      },
      { rootMargin: '0px 0px -40% 0px' }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const greeting = useMemo(() => {
    switch (eventType) {
      case 'casamento':
        return 'Vamos florir seu “sim”?';
      case 'corporativo':
        return 'Experiência sensorial para seu evento?';
      case 'social':
        return 'Celebração com assinatura floral?';
      default:
        return 'Projeto botânico sob medida?';
    }
  }, [eventType]);

  const onSubmit = (values) => {
    const message = `
Olá! Sou ${values.name || '—'} e estou planejando um ${values.eventType}.

Gostaria de um briefing rápido para iniciarmos o projeto.
`.trim();

    const whatsappUrl = buildWhatsappLink(message);
    window.open(whatsappUrl, '_blank');
    reset({ name: '', eventType: values.eventType });
  };

  return (
    <AnimatePresence>
      {shouldDisplay && (
        <motion.div
          initial={prefersReducedMotion ? undefined : { y: 120, opacity: 0 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { y: 120, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-6 z-40 px-4 md:px-8"
        >
          <div
            className={clsx(
              'mx-auto flex max-w-4xl flex-col gap-4 rounded-[28px] border border-white/40 bg-white/90 p-4 shadow-[0_35px_70px_-45px_rgba(0,0,0,0.45)] backdrop-blur md:flex-row md:items-center md:justify-between'
            )}
          >
            <div className="flex items-center gap-3 text-secondary">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Sparkles size={22} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                  Conte seu evento
                </p>
                <p className="text-sm font-semibold text-secondary">{greeting}</p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-1 flex-col gap-3 md:flex-row md:items-center md:justify-end"
            >
              <div className="flex flex-1 flex-col gap-2 md:flex-row md:items-center">
                <input
                  type="text"
                  {...register('name')}
                  placeholder="Seu nome"
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm shadow-inner focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <button
                  type="button"
                  onClick={() => setIsExpanded((prev) => !prev)}
                  className="flex items-center gap-2 rounded-2xl border border-gray-200 px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 transition hover:border-primary/40 hover:text-primary md:hidden"
                >
                  {eventOptions.find((option) => option.id === eventType)?.label}
                </button>
                <div className="hidden items-center gap-2 md:flex">
                  {eventOptions.map((option) => (
                    <label
                      key={option.id}
                      className={clsx(
                        'cursor-pointer rounded-2xl border px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] transition',
                        eventType === option.id
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-transparent bg-gray-100 text-gray-500 hover:border-primary/40 hover:text-primary'
                      )}
                    >
                      <input
                        type="radio"
                        value={option.id}
                        {...register('eventType')}
                        className="hidden"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition hover:bg-primary-dark"
              >
                Enviar briefing
                <MessageCircle size={18} />
              </button>
            </form>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mx-auto mt-3 flex max-w-4xl gap-2 overflow-hidden rounded-2xl border border-white/40 bg-white/80 p-3 shadow-inner md:hidden"
              >
                {eventOptions.map((option) => (
                  <label
                    key={option.id}
                    className={clsx(
                      'flex-1 cursor-pointer rounded-xl border px-3 py-3 text-center text-xs font-semibold uppercase tracking-[0.25em] transition',
                      eventType === option.id
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-transparent bg-gray-100 text-gray-500'
                    )}
                  >
                    <input
                      type="radio"
                      value={option.id}
                      {...register('eventType')}
                      className="hidden"
                    />
                    {option.label}
                  </label>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingFooterCTA;

