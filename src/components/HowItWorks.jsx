import { MessageCircle, FileText, Palette, Truck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Contato Inicial',
      description: 'Entre em contato via WhatsApp e conte-nos sobre seu evento ou necessidade.',
    },
    {
      number: '02',
      icon: FileText,
      title: 'Orçamento Personalizado',
      description: 'Entendemos seus desejos e criamos um orçamento sob medida para você.',
    },
    {
      number: '03',
      icon: Palette,
      title: 'Criação do Projeto',
      description: 'Desenvolvemos seu arranjo floral com dedicação e atenção aos detalhes.',
    },
    {
      number: '04',
      icon: Truck,
      title: 'Entrega ou Montagem',
      description: 'Levamos até você ou montamos no local, garantindo a perfeição.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Processo
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-4">
            Como Funciona
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Do primeiro contato até a entrega, cuidamos de cada detalhe para tornar sua experiência única
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -z-10"></div>
                )}

                {/* Card */}
                <div className="group relative bg-sand hover:bg-white rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                    <Icon className="text-primary group-hover:text-white transition-colors" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-slide-up">
          <a
            href="https://wa.me/5524992771513?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <MessageCircle size={20} />
            <span>Começar Meu Projeto</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

