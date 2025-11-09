import { Heart, Flower2, Award, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const About = () => {
  const timeline = [
    {
      year: '2020',
      title: 'Abertura da Loja',
      description: 'O início do nosso sonho, abrindo as portas em Angra dos Reis.',
      icon: Heart,
      color: 'bg-primary',
    },
    {
      year: '2021 - 2022',
      title: 'Reconhecimento Regional',
      description: 'Expandimos nosso portfólio e fomos reconhecidos na região pela nossa excelência.',
      icon: Award,
      color: 'bg-primary',
    },
    {
      year: '2023',
      title: 'Consolidação no Mercado',
      description: 'Fortalecemos nossa presença e ampliamos nossa base de clientes.',
      icon: TrendingUp,
      color: 'bg-primary',
    },
    {
      year: '2024',
      title: 'Primeiro Grande Casamento',
      description: 'Decoramos nosso primeiro grande evento, um marco inesquecível.',
      icon: Flower2,
      color: 'bg-primary',
    },
    {
      year: '2025',
      title: '5 Anos de Bem Me Quer',
      description: 'Celebramos meia década de histórias contadas com flores e afeto. 🌸',
      icon: Sparkles,
      color: 'bg-primary',
    },
  ];

  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="sobre" className="py-16 md:py-20 bg-sand">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossa História
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mt-2">
            Quem Somos
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80"
                alt="Equipe Bem Me Quer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
          </div>

          {/* Text */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-gray-700 text-lg leading-relaxed">
              Somos a <strong className="text-primary">Bem Me Quer</strong>, uma floricultura de Angra dos Reis que transforma flores em histórias.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Há cinco anos criamos buquês autorais, ornamentações e projetos com plantas que encantam. 
              Unimos técnica, sensibilidade e respeito às flores para levar afeto em cada arranjo.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Atendemos eventos locais e orçamentos para todo o Brasil.
            </p>

            {/* Stats - Com Números Animados */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center group">
                <motion.div
                  className="text-3xl font-bold text-primary font-display"
                  initial={prefersReducedMotion ? undefined : { scale: 0.9, opacity: 0 }}
                  whileInView={prefersReducedMotion ? undefined : { scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, ease: [0.24, 0.12, 0.25, 1] }}
                >
                  <AnimatedCounter end={5} suffix="+" />
                </motion.div>
                <div className="text-sm text-gray-600">Anos de história</div>
              </div>
              <div className="text-center group">
                <motion.div
                  className="text-3xl font-bold text-secondary font-display"
                  initial={prefersReducedMotion ? undefined : { scale: 0.9, opacity: 0 }}
                  whileInView={prefersReducedMotion ? undefined : { scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.24, 0.12, 0.25, 1] }}
                >
                  <AnimatedCounter end={20} suffix="+" />
                </motion.div>
                <div className="text-sm text-gray-600">Eventos realizados</div>
              </div>
              <div className="text-center group">
                <motion.div
                  className="text-3xl font-bold text-gold font-display"
                  initial={prefersReducedMotion ? undefined : { scale: 0.9, opacity: 0 }}
                  whileInView={prefersReducedMotion ? undefined : { scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.24, 0.12, 0.25, 1] }}
                >
                  <AnimatedCounter end={1.6} suffix="k+" />
                </motion.div>
                <div className="text-sm text-gray-600">Seguidores</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display text-3xl font-bold text-center text-gray-800 mb-12">
            Nossa Trajetória
          </h3>
          
          <div className="relative">
            {/* Timeline Line Vertical à Esquerda */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.year}
                    className="relative flex items-start gap-6"
                    initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, delay: index * 0.08, ease: [0.24, 0.12, 0.25, 1] }}
                  >
                    <motion.div
                      className="relative z-10 flex-shrink-0"
                      whileHover={prefersReducedMotion ? undefined : { scale: 1.12 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    >
                      <motion.div
                        className={`relative flex h-12 w-12 items-center justify-center rounded-full shadow-lg ${item.color}`}
                      >
                        <motion.span
                          className="absolute inset-0 rounded-full bg-white/30 blur-lg"
                          initial={{ opacity: 0 }}
                          whileInView={prefersReducedMotion ? undefined : { opacity: 0.9, scale: 1.2 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                        />
                        <Icon className="relative text-white" size={24} />
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <span className="text-primary font-semibold text-lg">
                        {item.year}
                      </span>
                      <h4 className="font-display text-2xl font-bold text-gray-800 mt-1 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

