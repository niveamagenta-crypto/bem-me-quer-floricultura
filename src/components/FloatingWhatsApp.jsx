import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '5524992771513';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20[evento/buqu%C3%AA]%2C%20meu%20nome%20%C3%A9%20%5Bseu%20nome%5D`;

  const handleClick = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Chamar no WhatsApp"
      >
        {/* Main Button */}
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110">
            <MessageCircle size={32} className="text-white" />
          </div>
        </div>

        {/* Tooltip */}
        <div
          className={`absolute right-20 bottom-0 bg-white rounded-2xl shadow-2xl p-4 w-64 transition-all duration-300 ${
            isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="absolute top-2 right-2 w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          >
            <X size={14} className="text-gray-600" />
          </button>

          {/* Profile */}
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-xl">
              🌸
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800 text-sm">Bem Me Quer</h4>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500">Online agora</span>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="bg-sand p-3 rounded-xl mb-3">
            <p className="text-sm text-gray-700">
              Olá! 👋 Como podemos ajudar você hoje?
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={handleClick}
            className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg"
          >
            Iniciar Conversa
          </button>

          {/* Arrow */}
          <div className="absolute right-0 bottom-6 transform translate-x-2">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white"></div>
          </div>
        </div>
      </button>
    </>
  );
};

export default FloatingWhatsApp;

