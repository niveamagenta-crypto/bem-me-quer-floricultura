import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import clsx from 'clsx';
import { CONTACT_INFO, buildWhatsappLink } from '../../config/contact';

const eventOptions = [
  { id: 'wedding', label: 'Casamento', description: 'Cerimônias, recepções e destination wedding.' },
  { id: 'corporate', label: 'Evento corporativo', description: 'Lançamentos, conferências e ativações.' },
  { id: 'social', label: 'Evento social', description: 'Aniversários, mini weddings e celebrações intimistas.' },
  { id: 'botanical', label: 'Projetos botânicos', description: 'Instalações permanentes, vitrines e paisagismo.' },
];

const vibeOptions = [
  {
    id: 'romantic',
    label: 'Romântico dourado',
    palette: ['#F8E8DF', '#E4B4B4', '#D96E6E', '#4F2C2C'],
    description: 'Paleta suave com tons quentes, ideal para casamentos intimistas.',
  },
  {
    id: 'modern',
    label: 'Contemporâneo editorial',
    palette: ['#F2F4F7', '#C1C8D7', '#7C8AA6', '#1C2231'],
    description: 'Contrastes dramáticos e formas escultóricas para eventos corporativos.',
  },
  {
    id: 'tropical',
    label: 'Tropical sensorial',
    palette: ['#FDF2D5', '#F7C59F', '#5BA280', '#1E4B3A'],
    description: 'Texturas exuberantes com folhagens, perfeito para festas vibrantes.',
  },
  {
    id: 'minimal',
    label: 'Minimal botanique',
    palette: ['#F8F7F3', '#D8D2C4', '#A8B4A6', '#4B5A4D'],
    description: 'Elegância orgânica focada em folhagens e composição arquitetônica.',
  },
];

const wizardSchema = z.object({
  eventType: z.string().min(1, 'Selecione uma opção.'),
  vibe: z.string().min(1, 'Escolha uma assinatura visual.'),
  eventDate: z.string().optional(),
  guestCount: z.string().optional(),
  location: z.string().optional(),
  references: z.string().optional(),
  name: z.string().min(3, 'Informe seu nome completo.'),
  email: z.string().email('Digite um e-mail válido.'),
  phone: z
    .string()
    .min(10, 'Informe um telefone válido.')
    .regex(/\d{10,}/, 'Use apenas números (DDD + telefone).'),
  preferredChannel: z.string().optional(),
  additionalNotes: z.string().optional(),
});

const steps = [
  { id: 'event', label: 'Evento' },
  { id: 'style', label: 'Estilo' },
  { id: 'details', label: 'Detalhes' },
  { id: 'contact', label: 'Contato' },
];

const stepVariants = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

const ContactWizard = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(wizardSchema),
    defaultValues: {
      preferredChannel: 'whatsapp',
    },
  });

  const currentStep = steps[stepIndex];
  const selectedEvent = watch('eventType');
  const selectedVibe = watch('vibe');

  const summary = useMemo(() => {
    return [
      {
        label: 'Tipo de evento',
        value: eventOptions.find((option) => option.id === selectedEvent)?.label || '—',
      },
      {
        label: 'Assinatura visual',
        value: vibeOptions.find((option) => option.id === selectedVibe)?.label || '—',
      },
      {
        label: 'Local / Data',
        value: `${watch('location') || '—'} · ${watch('eventDate') || 'Data pendente'}`,
      },
      {
        label: 'Convidados',
        value: watch('guestCount') || '—',
      },
    ];
  }, [selectedEvent, selectedVibe, watch]);

  const goToStep = async (nextIndex) => {
    const fieldsToValidate = {
      0: ['eventType'],
      1: ['vibe'],
      2: ['eventDate', 'guestCount', 'location', 'references'],
      3: ['name', 'email', 'phone', 'preferredChannel', 'additionalNotes'],
    };

    if (nextIndex > stepIndex) {
      const fields = fieldsToValidate[stepIndex];
      const isValid = await trigger(fields);
      if (!isValid) return;
    }

    setStepIndex(nextIndex);
  };

  const onSubmit = (values) => {
    setIsSubmitting(true);

    const vibe = vibeOptions.find((option) => option.id === values.vibe)?.label;
    const event = eventOptions.find((option) => option.id === values.eventType)?.label;

    const message = `
Nova lead pelo wizard Bem Me Quer 🌸

Evento: ${event}
Assinatura visual: ${vibe}
Local: ${values.location || 'a definir'}
Data: ${values.eventDate || 'a definir'}
Convidados: ${values.guestCount || 'a definir'}

Referências: ${values.references || 'não informado'}

Contato:
Nome: ${values.name}
E-mail: ${values.email}
Telefone: ${values.phone}
Canal preferido: ${values.preferredChannel}

Notas adicionais:
${values.additionalNotes || '—'}
`.trim();

    const whatsappUrl = buildWhatsappLink(message);
    window.open(whatsappUrl, '_blank');

    if (values.preferredChannel === 'email') {
      window.location.href = `mailto:${CONTACT_INFO.email}?subject=Briefing Bem Me Quer&body=${encodeURIComponent(
        message
      )}`;
    }

    setTimeout(() => setIsSubmitting(false), 800);
  };

  return (
    <div className="rounded-[32px] bg-white p-8 shadow-[0_45px_90px_-60px_rgba(0,0,0,0.35)] backdrop-blur lg:p-10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            Briefing inicial
          </span>
          <h3 className="mt-3 font-display text-3xl text-secondary">Wizard de orçamento</h3>
        </div>
        <div className="hidden items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary md:flex">
          <MessageCircle size={16} />
          Resposta em até 1h
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {steps.map((step, index) => (
          <button
            key={step.id}
            type="button"
            onClick={() => goToStep(index)}
            className={clsx(
              'flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em]',
              index === stepIndex
                ? 'bg-primary text-white shadow-lg'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            )}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-current text-[10px]">
              {index + 1}
            </span>
            {step.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.id}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={stepVariants}
            transition={{ duration: 0.4, ease: [0.24, 0.12, 0.25, 1] }}
            className="space-y-6"
          >
            {currentStep.id === 'event' && (
              <Controller
                name="eventType"
                control={control}
                render={({ field }) => (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {eventOptions.map((option) => (
                      <button
                        type="button"
                        key={option.id}
                        onClick={() => field.onChange(option.id)}
                        className={clsx(
                          'h-full rounded-3xl border-2 p-6 text-left transition',
                          field.value === option.id
                            ? 'border-primary bg-primary/5 text-secondary shadow-lg'
                            : 'border-white/50 bg-white hover:border-primary/40'
                        )}
                      >
                        <h4 className="font-display text-xl text-secondary">{option.label}</h4>
                        <p className="mt-2 text-sm text-gray-600">{option.description}</p>
                      </button>
                    ))}
                    {errors.eventType && (
                      <p className="col-span-full text-sm text-primary">{errors.eventType.message}</p>
                    )}
                  </div>
                )}
              />
            )}

            {currentStep.id === 'style' && (
              <Controller
                name="vibe"
                control={control}
                render={({ field }) => (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {vibeOptions.map((option) => (
                      <button
                        type="button"
                        key={option.id}
                        onClick={() => field.onChange(option.id)}
                        className={clsx(
                          'group relative overflow-hidden rounded-3xl border-2 p-6 text-left transition',
                          field.value === option.id
                            ? 'border-secondary bg-secondary/5 shadow-lg'
                            : 'border-white/60 bg-white hover:border-secondary/40'
                        )}
                      >
                        <div className="flex gap-2">
                          {option.palette.map((color) => (
                            <span
                              key={color}
                              className="h-10 w-10 rounded-full border border-white/60"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                        <h4 className="mt-4 font-display text-lg text-secondary">{option.label}</h4>
                        <p className="mt-2 text-sm text-gray-600">{option.description}</p>
                      </button>
                    ))}
                    {errors.vibe && (
                      <p className="col-span-full text-sm text-primary">{errors.vibe.message}</p>
                    )}
                  </div>
                )}
              />
            )}

            {currentStep.id === 'details' && (
              <div className="grid gap-4 md:grid-cols-2">
                <Controller
                  name="eventDate"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                        Data prevista
                      </label>
                      <input
                        type="date"
                        {...field}
                        className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 shadow-inner focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  )}
                />
                <Controller
                  name="guestCount"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                        Número de convidados
                      </label>
                      <input
                        type="number"
                        min="0"
                        {...field}
                        className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 shadow-inner focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Ex.: 150"
                      />
                    </div>
                  )}
                />
                <Controller
                  name="location"
                  control={control}
                  render={({ field }) => (
                    <div className="md:col-span-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                        Local do evento
                      </label>
                      <input
                        type="text"
                        {...field}
                        className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 shadow-inner focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Hotel Fasano, Angra dos Reis..."
                      />
                    </div>
                  )}
                />
                <Controller
                  name="references"
                  control={control}
                  render={({ field }) => (
                    <div className="md:col-span-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                        Referências / links (opcional)
                      </label>
                      <textarea
                        rows={3}
                        {...field}
                        className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 shadow-inner focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Pinterest, moodboards, referências de cores..."
                      />
                    </div>
                  )}
                />
              </div>
            )}

            {currentStep.id === 'contact' && (
              <div className="grid gap-4">
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        {...field}
                        className={clsx(
                          'mt-2 w-full rounded-2xl border px-4 py-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/20',
                          errors.name ? 'border-primary' : 'border-gray-200 focus:border-primary'
                        )}
                        placeholder="Como podemos te chamar?"
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-primary">{errors.name.message}</p>
                      )}
                    </div>
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        {...field}
                        className={clsx(
                          'mt-2 w-full rounded-2xl border px-4 py-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/20',
                          errors.email ? 'border-primary' : 'border-gray-200 focus:border-primary'
                        )}
                        placeholder="seu@email.com"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-primary">{errors.email.message}</p>
                      )}
                    </div>
                  )}
                />
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        {...field}
                        className={clsx(
                          'mt-2 w-full rounded-2xl border px-4 py-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/20',
                          errors.phone ? 'border-primary' : 'border-gray-200 focus:border-primary'
                        )}
                        placeholder="(DDD) 000000000"
                      />
                      {errors.phone && (
                        <p className="mt-2 text-sm text-primary">{errors.phone.message}</p>
                      )}
                    </div>
                  )}
                />
                <Controller
                  name="preferredChannel"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                        Canal preferido
                      </label>
                      <div className="mt-2 grid grid-cols-2 gap-3">
                        {[
                          { id: 'whatsapp', label: 'WhatsApp' },
                          { id: 'email', label: 'E-mail' },
                        ].map((option) => (
                          <button
                            type="button"
                            key={option.id}
                            onClick={() => field.onChange(option.id)}
                            className={clsx(
                              'rounded-2xl border px-4 py-3 text-sm font-semibold transition',
                              field.value === option.id
                                ? 'border-primary bg-primary/10 text-primary'
                                : 'border-gray-200 bg-white hover:border-primary/40'
                            )}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                />
                <Controller
                  name="additionalNotes"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                        Observações adicionais
                      </label>
                      <textarea
                        rows={4}
                        {...field}
                        className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 shadow-inner focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Tem algo essencial que precisamos considerar? Fotos de referência, moodboard?"
                      />
                    </div>
                  )}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="rounded-3xl border border-white/40 bg-white/60 p-6 shadow-inner">
            <h4 className="font-display text-lg text-secondary">Resumo do briefing</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              {summary.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs uppercase tracking-[0.25em] text-primary">
                      <CheckCircle2 size={16} />
                    </span>
                    <span className="font-semibold text-secondary">{item.label}:</span>
                    <span className="text-gray-600">{item.value}</span>
                  </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => goToStep(Math.max(0, stepIndex - 1))}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 transition hover:border-primary/40 hover:text-primary"
              disabled={stepIndex === 0}
            >
              <ArrowLeft size={18} />
              Voltar
            </button>

            {stepIndex < steps.length - 1 ? (
              <button
                type="button"
                onClick={() => goToStep(Math.min(steps.length - 1, stepIndex + 1))}
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition hover:bg-secondary-dark"
              >
                Avançar
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition hover:bg-primary-dark disabled:opacity-70"
              >
                {isSubmitting ? 'Preparando...' : 'Enviar briefing'}
                <ArrowRight size={18} />
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactWizard;

