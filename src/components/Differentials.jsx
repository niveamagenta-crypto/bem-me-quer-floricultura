import { Heart, Flower2, Truck, Award, Users, Sparkles } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    {
      icon: Heart,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente é único e merece atenção especial em cada detalhe.',
    },
    {
      icon: Flower2,
      title: 'Flores Frescas',
      description: 'Selecionamos as melhores flores para garantir qualidade e durabilidade.',
    },
    {
      icon: Truck,
      title: 'Entrega em Toda Região',
      description: 'Atendemos Angra dos Reis e orçamentos para todo o Brasil.',
    },
    {
      icon: Award,
      title: '5 Anos de Experiência',
      description: 'Experiência comprovada em eventos e arranjos especiais.',
    },
    {
      icon: Users,
      title: 'Projetos Exclusivos',
      description: 'Criamos arranjos autorais pensados especialmente para você.',
    },
    {
      icon: Sparkles,
      title: 'Compromisso com Excelência',
      description: 'Buscamos sempre superar expectativas em cada entrega.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-sand via-white to-sand relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D95B6C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossos Diferenciais
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-4">
            Por Que Escolher a Bem Me Quer?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compromisso com excelência e dedicação em cada projeto
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Glass Card */}
                <div className="relative bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Gradient Border on Hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="text-white" size={28} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentials;

