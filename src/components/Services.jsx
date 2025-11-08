import { Flower2, Heart, Leaf, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { services } from '../data/services';

const iconMap = {
  flower: Flower2,
  heart: Heart,
  leaf: Leaf,
};

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="servicos" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            O que fazemos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mt-2">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Criamos experiências florais únicas para cada ocasião especial
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-white/70 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105">
                  {/* Gradient Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                      loading="lazy"
                    />
                    {/* Image Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      {Icon && <Icon className="text-white" size={28} />}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <button
                      onClick={() => navigate('/portfolio')}
                      className="inline-flex items-center space-x-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300"
                    >
                      <span>Ver projetos</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up">
          <p className="text-gray-600 mb-6">
            Tem um projeto especial em mente?
          </p>
          <a
            href="https://wa.me/5524992771513?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20[evento/buqu%C3%AA]%2C%20meu%20nome%20%C3%A9%20%5Bseu%20nome%5D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <span>Solicitar Orçamento</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

