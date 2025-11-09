import { ArrowRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { WHATSAPP_LINK } from '../config/contact';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      {/* Background Image com Parallax Effect */}
      <div 
        className="absolute inset-0 z-0 hero-bg"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=1920&q=80)',
        }}
      >
        {/* Overlay Gradient - Mais escuro para reduzir informação visual */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/65"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 relative">
        <div className="max-w-3xl animate-slide-up">
          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Bem Me Quer
            <span className="block text-3xl md:text-4xl text-primary mt-2">
              Floricultura em Angra dos Reis
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Buquês, ornamentação de eventos e plantas — Há 5 anos entregando afeto com excelência
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <Phone size={20} />
              <span>Chamar no WhatsApp</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button
              onClick={() => navigate('/portfolio')}
              className="group inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-white/10 text-white border-2 border-white/50 hover:border-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              <span>Ver Portfólio</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>Orçamentos para todo o Brasil</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>Atendimento rápido via WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

