import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    // Atualizar seção ativa baseado na rota
    if (location.pathname === '/portfolio') {
      setActiveSection('portfolio');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detectar seção ativa apenas na página home
      if (location.pathname === '/') {
        const sections = ['inicio', 'sobre', 'servicos', 'depoimentos', 'contato'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        
        if (current) {
          setActiveSection(current);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const handleMenuClick = (sectionId) => {
    if (sectionId === 'portfolio') {
      navigate('/portfolio');
    } else if (sectionId === 'inicio') {
      navigate('/');
      // Scroll para topo após navegar
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      // Se já está na home, faz scroll
      if (location.pathname === '/') {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      } else {
        // Se não está na home, navega e depois faz scroll
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 300);
      }
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'portfolio', label: 'Portfólio' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'contato', label: 'Contato' },
  ];

  const whatsappLink = 'https://wa.me/5524992771513?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20[evento/buqu%C3%AA]%2C%20meu%20nome%20%C3%A9%20%5Bseu%20nome%5D';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/'
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
      style={{
        paddingTop: '2px',
        paddingBottom: '2px',
      }}
    >
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleMenuClick('inicio')}
            className="group transition-opacity hover:opacity-80 -ml-1 md:ml-0"
            aria-label="Ir para o início"
          >
            <Logo 
              isScrolled={isScrolled} 
              isHome={location.pathname === '/'}
            />
          </button>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`font-medium transition-colors relative group ${
                  isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'
                } ${
                  activeSection === item.id ? 'text-primary' : ''
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                  activeSection === item.id ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <Phone size={18} />
            <span>Chamar no WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl mt-2 rounded-b-2xl overflow-hidden animate-fade-in">
            <nav className="flex flex-col py-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`px-6 py-3 text-left font-medium transition-colors hover:bg-sand ${
                    activeSection === item.id
                      ? 'text-primary bg-sand'
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-6 mt-4 flex items-center justify-center space-x-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
              >
                <Phone size={18} />
                <span>Chamar no WhatsApp</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

