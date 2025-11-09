import { Heart, Instagram, Phone, MapPin } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CONTACT_INFO, WHATSAPP_LINK } from '../config/contact';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleFooterLink = (item) => {
    // Mapeamento de itens do footer para IDs ou rotas
    const itemMap = {
      'Início': { type: 'route', value: '/' },
      'Sobre': { type: 'section', value: 'sobre' },
      'Serviços': { type: 'section', value: 'servicos' },
      'Portfólio': { type: 'route', value: '/portfolio' },
      'Depoimentos': { type: 'section', value: 'depoimentos' },
      'Contato': { type: 'section', value: 'contato' },
    };

    const mapped = itemMap[item];
    if (!mapped) return;

    if (mapped.type === 'route') {
      navigate(mapped.value);
      if (mapped.value === '/') {
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
      }
    } else {
      // Seção na mesma página
      if (location.pathname === '/') {
        const element = document.getElementById(mapped.value);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(mapped.value);
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 300);
      }
    }
  };

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/images/logo.png"
                alt="Bem Me Quer - Floricultura em Angra dos Reis"
                className="h-12 md:h-14 lg:h-16 w-auto object-contain"
                style={{
                  maxHeight: '64px',
                }}
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Transformando flores em histórias há 5 anos. Buquês autorais, ornamentações e plantas com amor e excelência.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Serviços', 'Portfólio', 'Depoimentos', 'Contato'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleFooterLink(item)}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Ornamentação de Eventos</li>
              <li>• Buquês Autorais</li>
              <li>• Plantas de Cultivo</li>
              <li>• Arranjos Corporativos</li>
              <li>• Presentes Personalizados</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors text-sm group"
                >
                  <Phone size={18} className="group-hover:scale-110 transition-transform" />
                  <span>{CONTACT_INFO.whatsappDisplay}</span>
                </a>
              </li>
              <li className="flex items-center space-x-3 text-white/70 text-sm">
                <MapPin size={18} />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors text-sm group"
                >
                  <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                  <span>{CONTACT_INFO.instagramHandle}</span>
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>
              © {currentYear} Bem Me Quer • Floricultura em Angra dos Reis • Orçamentos para todo o Brasil
            </p>
            <div className="flex items-center space-x-1">
              <span>Desenvolvido com</span>
              <Heart size={16} className="text-primary fill-primary" />
              <span>para Bem Me Quer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 right-4 md:right-8 w-12 h-12 bg-secondary hover:bg-secondary-dark text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-40"
        aria-label="Voltar ao topo"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;

