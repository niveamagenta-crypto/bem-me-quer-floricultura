import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { CONTACT_INFO, WHATSAPP_LINK } from '../config/contact';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsappRedirect = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  const handlePrimaryClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      return;
    }
    handleWhatsappRedirect();
  };

  return (
    <>
      {/* Floating Button */}
      <div
        className="fixed bottom-6 right-6 z-50 group"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Main Button */}
        <div className="relative">
          <button
            type="button"
            onClick={handlePrimaryClick}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(false)}
            className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300"
            aria-label="Chamar no WhatsApp"
          >
            <MessageCircle size={32} className="text-white" />
          </button>

          {/* Tooltip */}
          <div
            className={`absolute right-20 bottom-0 bg-white rounded-2xl shadow-2xl p-4 w-64 transition-all duration-300 ${
              isOpen ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-4 pointer-events-none'
            }`}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="absolute top-2 right-2 w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              aria-label="Fechar tooltip de WhatsApp"
            >
              <X size={14} className="text-gray-600" />
            </button>

            {/* Profile */}
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-xl">
                🌸
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 text-sm">{CONTACT_INFO.businessName}</h4>
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
              type="button"
              onClick={handleWhatsappRedirect}
              className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Iniciar Conversa
            </button>

            {/* Arrow */}
            <div className="absolute right-0 bottom-6 transform translate-x-2">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingWhatsApp;

