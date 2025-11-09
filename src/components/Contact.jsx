import { useState } from 'react';
import { Phone, MapPin, Clock, Instagram, Send } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_LINK, buildWhatsappLink } from '../config/contact';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Criar mensagem WhatsApp
    const message = `Olá, meu nome é ${formData.name}.\nTelefone: ${formData.phone}\n\n${formData.message}`;
    const whatsappUrl = buildWhatsappLink(message);
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Limpar formulário
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contato" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Entre em Contato
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mt-2">
            Fale Conosco
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Precisa de orçamento ou quer conversar sobre um projeto floral?
            <br />
            Atendimento rápido e personalizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info & Map */}
          <div className="space-y-8 animate-slide-up">
            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-xl h-64 lg:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117498.18449346859!2d-44.392208!3d-23.006738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c4d2cb3b0d7ab%3A0x7b3a9b0f3b3b3b3b!2sAngra%20dos%20Reis%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Bem Me Quer"
              ></iframe>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-4">
              {/* WhatsApp */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 p-6 bg-sand rounded-2xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Phone className="text-primary group-hover:text-white transition-colors" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">WhatsApp</h3>
                  <p className="text-gray-600">{CONTACT_INFO.whatsappDisplay}</p>
                  <p className="text-sm text-primary mt-1">Clique para chamar →</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start space-x-4 p-6 bg-sand rounded-2xl">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="text-secondary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">Localização</h3>
                  <p className="text-gray-600">{CONTACT_INFO.address}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4 p-6 bg-sand rounded-2xl">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                  <Clock className="text-gold" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">Horário</h3>
                  <p className="text-gray-600">{CONTACT_INFO.serviceHours.weekdays}</p>
                  <p className="text-gray-600">{CONTACT_INFO.serviceHours.sunday}</p>
                </div>
              </div>

              {/* Instagram */}
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">Instagram</h3>
                  <p className="text-gray-600">{CONTACT_INFO.instagramHandle}</p>
                  <p className="text-sm text-pink-600 mt-1">1.671 seguidores →</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-sand rounded-3xl p-8 shadow-xl">
              <h3 className="font-display text-2xl font-bold text-gray-800 mb-6">
                Envie sua Mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    WhatsApp / Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Conte-nos sobre seu projeto ou dúvida..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <span>Enviar via WhatsApp</span>
                  <Send size={20} />
                </button>

                <p className="text-center text-sm text-gray-500">
                  * Você será redirecionado para o WhatsApp
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

