import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CTASection = ({ title, subtitle, buttonText, buttonLink, variant = 'primary' }) => {
  const navigate = useNavigate();
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary to-primary-dark text-white',
    secondary: 'bg-gradient-to-r from-secondary to-secondary-dark text-white',
    light: 'bg-sand text-gray-800',
  };

  const handleClick = (link) => {
    if (link.startsWith('/')) {
      // Rota interna
      navigate(link);
    } else if (link.startsWith('#')) {
      // Scroll para seção
      const element = document.getElementById(link.substring(1));
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else if (link.startsWith('http')) {
      // Link externo
      window.open(link, '_blank');
    }
  };

  return (
    <section className={`py-16 ${variantStyles[variant]} relative overflow-hidden`}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto animate-slide-up">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h3>
          {subtitle && (
            <p className={`text-lg md:text-xl mb-8 ${variant === 'light' ? 'text-gray-600' : 'text-white/90'}`}>
              {subtitle}
            </p>
          )}
          <button
            onClick={() => handleClick(buttonLink)}
            className={`group inline-flex items-center space-x-2 ${
              variant === 'light' 
                ? 'bg-primary hover:bg-primary-dark text-white' 
                : 'bg-white hover:bg-gray-100 text-primary'
            } px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105`}
          >
            <span>{buttonText}</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

