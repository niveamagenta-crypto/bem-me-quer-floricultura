import { Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const TestimonialsMultimedia = () => {
  return (
    <section id="depoimentos" className="bg-white/70 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-secondary">
            Voz dos clientes
          </span>
          <h2 className="mt-6 font-display text-3xl text-secondary md:text-4xl">
            Depoimentos que florescem confiança
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">
            Projetos reais, palavras sinceras e o reconhecimento de quem confia na Bem Me Quer para transformar momentos em memórias.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="group relative flex h-full flex-col rounded-3xl border border-white/50 bg-white/90 p-6 shadow-[0_25px_60px_-45px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_80px_-40px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex items-center gap-3 text-primary">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Quote size={18} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                    {testimonial.client}
                  </p>
                  <p className="text-xs text-gray-400 uppercase tracking-[0.2em]">
                    {testimonial.project}
                  </p>
                </div>
              </div>

              <p className="relative mt-6 flex-1 text-base leading-relaxed text-gray-700">
                “{testimonial.quote}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMultimedia;

